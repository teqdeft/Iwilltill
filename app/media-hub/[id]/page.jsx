import PostDetailClient from "./PostDetailClient";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://iwilltilimwell.com/backend/wp-json/wp/v2/posts?per_page=100",
      { cache: "no-store" },
    );
    const posts = await res.json();
    return posts.map((post) => ({
      id: String(post.id),
    }));
  } catch (error) {
    console.error("Error fetching posts for static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `https://iwilltilimwell.com/backend/wp-json/wp/v2/posts/${params.id}`,
      { cache: "no-store" }
    );
    const post = await res.json();
    const seo = post?.yoast_head_json;

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
    console.error("Error fetching SEO metadata:", error);
    return {};
  }
}

export default function Page() {
  return <PostDetailClient />;
}
