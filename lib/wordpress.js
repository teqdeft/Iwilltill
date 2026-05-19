// lib/wordpress.js

const WP_API = "https://iwilltilimwell.com/backend";

export async function getPageSEO(slug) {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/pages?slug=${slug}&_fields=yoast_head_json`,
      { cache: "no-store" },
    );
    const data = await res.json();
    const seo = data[0]?.yoast_head_json;

    if (!seo) return {};

    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical: seo.canonical },
      openGraph: {
        title: seo.og_title,
        description: seo.og_description,
        url: seo.og_url,
        images: seo.og_image?.map((img) => ({ url: img.url })) ?? [],
      },
      twitter: {
        card: seo.twitter_card,
        title: seo.og_title,
        description: seo.og_description,
      },
    };
  } catch (error) {
    console.error(`Error fetching SEO for page: ${slug}`, error);
    return {};
  }
}
