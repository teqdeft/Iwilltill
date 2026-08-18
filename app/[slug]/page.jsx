import PostDetailClient from "./PostDetailClient";

const WP_API = "https://iwilltilimwell.com/backend";
const SITE_URL = "https://iwilltilimwell.com";

export const revalidate = 3600; // re-generate at most once per hour

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/posts?per_page=100&_fields=slug`,
    );
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Error fetching posts for static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/posts?slug=${params.slug}&_fields=yoast_head_json`,
    );
    if (!res.ok) return {};
    const posts = await res.json();
    const seo = posts?.[0]?.yoast_head_json;
    if (!seo) return {};

    // Build the real public URL from the slug so og:url and canonical always
    // point to the front-end page, not the WordPress /backend/ origin.
    const publicUrl = `${SITE_URL}/${params.slug}/`;

    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical: publicUrl },
      openGraph: {
        title: seo.og_title,
        description: seo.og_description,
        url: publicUrl,
        images: seo.og_image?.map((img) => ({ url: img.url })) ?? [],
      },
      twitter: {
        card: seo.twitter_card,
        title: seo.og_title,
        description: seo.og_description,
      },
    };
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
    return {};
  }
}

export default function Page() {
  return <PostDetailClient />;
}
