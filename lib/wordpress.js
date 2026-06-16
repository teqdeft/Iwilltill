const WP_API = "https://iwilltilimwell.com/backend";
const SITE_URL = "https://iwilltilimwell.com";

function canonicalFor(path = "") {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export async function getPageSEO(slug, path = slug) {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/pages?slug=${slug}&_fields=yoast_head_json`,
      {
        next: { revalidate: 60 },
      },
    );

    const data = await res.json();
    const seo = data?.[0]?.yoast_head_json;

    // Fallback if Yoast data doesn't exist
    if (!seo) {
      return {
        alternates: {
          canonical: canonicalFor(path),
        },
      };
    }

    // Use Yoast canonical if available, otherwise generate one
    // const canonical = seo.canonical || canonicalFor(path);
    const canonical = canonicalFor(path);

    return {
      title: seo.title || "",
      description: seo.description || "",

      alternates: {
        canonical,
      },

      openGraph: {
        title: seo.og_title || seo.title || "",
        description: seo.og_description || seo.description || "",
        url: canonical,
        images:
          seo.og_image?.map((img) => ({
            url: img.url,
          })) || [],
      },

      twitter: {
        card: seo.twitter_card || "summary_large_image",
        title: seo.twitter_title || seo.og_title || seo.title || "",
        description:
          seo.twitter_description ||
          seo.og_description ||
          seo.description ||
          "",
      },
    };
  } catch (error) {
    console.error("SEO Error:", error);

    return {
      alternates: {
        canonical: canonicalFor(path),
      },
    };
  }
}
