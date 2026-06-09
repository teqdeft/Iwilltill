// lib/wordpress.js

const WP_API = "https://iwilltilimwell.com/backend";
const SITE_URL = "https://iwilltilimwell.com";

// `path` is the page's frontend route (e.g. "wellness/medical-care").
// Empty string = home page. Always self-referencing with a trailing slash.
function canonicalFor(path) {
  const clean = (path ?? "").replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export async function getPageSEO(slug, path = slug) {
  const canonical = canonicalFor(path);

  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/pages?slug=${slug}&_fields=yoast_head_json`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    const seo = data[0]?.yoast_head_json;

    if (!seo) return { alternates: { canonical } };

    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        title: seo.og_title,
        description: seo.og_description,
        url: canonical,
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
    return { alternates: { canonical } };
  }
}