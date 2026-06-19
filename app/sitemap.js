const SITE_URL = "https://iwilltilimwell.com";
const WP_API = "https://iwilltilimwell.com/backend";

export default async function sitemap() {
  const pages = await fetch(
    `${WP_API}/wp-json/wp/v2/pages?per_page=100&_fields=link,modified`
  ).then((r) => r.json());

  const posts = await fetch(
    `${WP_API}/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified`
  ).then((r) => r.json());

  const pageUrls = pages.map((page) => ({
    url: page.link.replace(
      `${SITE_URL}/backend`,
      SITE_URL
    ),
    lastModified: page.modified,
  }));

  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}/`,
    lastModified: post.modified,
  }));

  return [...pageUrls, ...postUrls];
}