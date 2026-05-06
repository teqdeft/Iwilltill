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

export default function Page() {
  return <PostDetailClient />;
}
