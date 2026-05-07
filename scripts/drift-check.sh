#!/usr/bin/env bash
#
# Drift-Check fuer Katharis (Master v2.0 Anhang B.2)
# Prueft Source-Files auf verbotene Phrasen + Em-Dashes.
# Lokal: bash scripts/drift-check.sh
# CI: aufgerufen via .github/workflows/ci.yml

set -euo pipefail

PHRASES=(
  "garantiert"
  "100%-Garantie"
  "100 %-Garantie"
  "niemand erfaehrt"
  "niemand erfährt"
  "Niemand erfaehrt"
  "Niemand erfährt"
  "First-Class"
  "Best-in-Class"
  "Premium"
  "Wir pruefen Ihre Ansprueche"
  "Wir prüfen Ihre Ansprüche"
  "Anspruchspruefung"
  "Anspruchsprüfung"
  "Sperrmuell"
  "Sperrmüll"
)

EM_DASH=$'—'

FAIL=0

# Suchen in src/ + public/_headers + public/_redirects + README.md
SEARCH_PATHS=("src" "public/_headers" "public/_redirects" "README.md")

for phrase in "${PHRASES[@]}"; do
  for path in "${SEARCH_PATHS[@]}"; do
    if [ -e "$path" ]; then
      if grep -rln "$phrase" "$path" --include='*.tsx' --include='*.ts' --include='*.md' --include='*.astro' 2>/dev/null; then
        echo "FAIL: Verbotene Phrase '$phrase' gefunden"
        FAIL=1
      fi
      # Plain-Files (wie _headers, _redirects)
      if [ -f "$path" ] && grep -ln "$phrase" "$path" 2>/dev/null; then
        echo "FAIL: Verbotene Phrase '$phrase' in $path"
        FAIL=1
      fi
    fi
  done
done

# Em-Dash-Check
for path in src README.md; do
  if [ -e "$path" ]; then
    if grep -rln "$EM_DASH" "$path" --include='*.tsx' --include='*.ts' --include='*.md' --include='*.astro' 2>/dev/null; then
      echo "FAIL: Em-Dash (U+2014) gefunden. Master 1.5 verbietet Em-Dashes."
      FAIL=1
    fi
  fi
done

if [ $FAIL -eq 0 ]; then
  echo "Drift-Check OK"
fi

exit $FAIL
