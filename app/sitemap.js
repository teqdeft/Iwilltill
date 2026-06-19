const SITE_URL = "https://iwilltilimwell.com";
const WP_API = "https://iwilltilimwell.com/backend";

async function fetchAllPages() {
  const res = await fetch(
    `${WP_API}/wp-json/wp/v2/pages?per_page=100&_fields=link,modified`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch pages");
  }

  return res.json();
}

async function fetchAllPosts() {
  const res = await fetch(
    `${WP_API}/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function sitemap() {
  const [pages, posts] = await Promise.all([fetchAllPages(), fetchAllPosts()]);

  // WordPress Pages
  const pageUrls = pages.map((page) => ({
    url: page.link.replace(`${SITE_URL}/backend`, SITE_URL),
    lastModified: page.modified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog Posts
  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}/`,
    lastModified: post.modified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Homepage
  const staticUrls = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  return [...staticUrls, ...pageUrls, ...postUrls];
}
