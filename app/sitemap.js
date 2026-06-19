// const SITE_URL = "https://iwilltilimwell.com";
// const WP_API = "https://iwilltilimwell.com/backend";

// export default async function sitemap() {
//   const pages = await fetch(
//     `${WP_API}/wp-json/wp/v2/pages?per_page=100`
//   ).then((res) => res.json());

//   const staticPages = [
//     "",
//     "about-us",
//     "contact",
//     "pricing",
//     "faq",
//     "join-the-mission",
//     "request-a-demo",
//     "privacy-policy",
//     "refund-policy",
//     "terms-conditions",
//   ];

//   const staticUrls = staticPages.map((page) => ({
//     url: page ? `${SITE_URL}/${page}/` : SITE_URL,
//     lastModified: new Date(),
//   }));

//   const wpUrls = pages.map((page) => ({
//     url: `${SITE_URL}/${page.slug}/`,
//     lastModified: page.modified,
//   }));

//   return [...staticUrls, ...wpUrls];
// }

const SITE_URL = "https://iwilltilimwell.com";
const WP_API = "https://iwilltilimwell.com/backend";

export default async function sitemap() {
  // Pages
  const pages = await fetch(`${WP_API}/wp-json/wp/v2/pages?per_page=100`).then(
    (r) => r.json(),
  );

  // Posts
  const posts = await fetch(`${WP_API}/wp-json/wp/v2/posts?per_page=100`).then(
    (r) => r.json(),
  );

  const pageUrls = pages.map((page) => ({
    url: `${SITE_URL}/${page.slug}/`,
    lastModified: page.modified,
  }));

  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}/`,
    lastModified: post.modified,
  }));

  return [...pageUrls, ...postUrls];
}
