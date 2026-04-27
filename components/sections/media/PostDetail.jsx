"use client";

import { useEffect } from "react";
import { X, Calendar, Folder } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function PostDetail({ post, loading, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Get category from class_list
  const getCategory = () => {
    if (!post?.class_list) return "Blogs";
    const cat = post.class_list.find((c) => c.startsWith("category-"));
    if (!cat) return "Blogs";
    const name = cat.replace("category-", "");
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Decode HTML entities (iframes come encoded from ACF)
  const decodeHTML = (html) => {
    if (!html) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post?.acf?.blog_title || "";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 my-6 md:my-10 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {loading && (
          <div className="text-center py-32 clear-both">
            <div className="inline-block w-8 h-8 border-[3px] border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-gray-500 text-sm mt-3">Loading...</p>
          </div>
        )}

        {!loading && !post && (
          <div className="text-center py-32 clear-both">
            <p className="text-gray-500 font-medium">Post not found</p>
          </div>
        )}

        {!loading && post && (
          <div className="p-6 md:p-10 pt-2 clear-both">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2 pr-10">
              {post.acf?.blog_title || post.title?.rendered || ""}
            </h1>

            {/* Underline */}
            <div className="w-20 h-[3px] bg-primary mb-5" />

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-1.5">
                <Folder className="w-4 h-4" />
                Category:{" "}
                <span className="text-primary font-medium">
                  {getCategory()}
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.acf?.blog_date || ""}
              </span>
            </div>

            {/* Featured Image */}
            {(post.blog_detail_image_url || post.blog_overview_image_url) && (
              <div className="rounded-2xl overflow-hidden shadow-md mb-8">
                <img
                  src={
                    post.blog_detail_image_url || post.blog_overview_image_url
                  }
                  alt={post.acf?.blog_title || ""}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Full Description */}
            {post.acf?.blog_full_description && (
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-xl prose-img:shadow-md
                  prose-strong:text-gray-900
                  prose-ul:text-gray-700 prose-ol:text-gray-700
                  prose-blockquote:border-primary prose-blockquote:text-gray-600
                  [&_iframe]:w-full [&_iframe]:rounded-xl [&_iframe]:my-6
                  [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0"
                dangerouslySetInnerHTML={{
                  __html: decodeHTML(post.acf.blog_full_description),
                }}
              />
            )}

            {/* Short description fallback if no full description */}
            {!post.acf?.blog_full_description &&
              post.acf?.blog_short_description && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  {post.acf.blog_short_description}
                </p>
              )}

            {/* Social Share */}
            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-200">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FacebookIcon />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <XTwitterIcon />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
