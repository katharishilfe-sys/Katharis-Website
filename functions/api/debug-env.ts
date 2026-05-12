interface PagesContext {
  env: Record<string, unknown>;
}

export const onRequestGet = async (context: PagesContext): Promise<Response> => {
  const keys = Object.keys(context.env).sort();
  const tokenKey = keys.find((k) => k.trim() === 'ADMIN_LEADS_TOKEN');
  const tokenLen =
    tokenKey && typeof context.env[tokenKey] === 'string'
      ? (context.env[tokenKey] as string).length
      : 0;

  return new Response(
    JSON.stringify({
      keys,
      keysQuoted: keys.map((k) => `"${k}"`),
      tokenKeyFound: tokenKey ?? null,
      tokenKeyHasLeadingSpace: tokenKey ? tokenKey !== tokenKey.trim() : false,
      tokenValueLength: tokenLen,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
