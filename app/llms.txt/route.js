// app/llms.txt/route.js
export const revalidate = 86400;

export async function GET() {
  const res = await fetch('https://iwilltilimwell.com/backend/llms.txt', {
    next: { revalidate: 86400 },
  });
  const text = await res.text();

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}