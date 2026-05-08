import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  TrendingUp,
  RefreshCw,
  User,
} from "lucide-react";
import PageSEO from "../components/PageSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import DocumentHead from "../components/DocumentHead";
import {
  estimateReadTime,
  fetchPublicBlogBySlug,
  fetchPublicBlogs,
  getBlogDescription,
  getBlogImage,
  type BlogPost as BlogPostType,
} from "../lib/blogApi";

const BASE_URL = "https://www.zoraglobalai.com";
const ENQUIRY_WEBSITE_SLUG = import.meta.env.VITE_ENQUIRY_WEBSITE_SLUG || "zora-services";

// Utility function to decode HTML entities
function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function getVideoEmbedUrl(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    const hostname = parsed.hostname.replace(/^www\./, "");
    const pathname = parsed.pathname;

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (pathname === "/watch") {
        const videoId = parsed.searchParams.get("v");
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
        }
      }
      if (pathname.startsWith("/shorts/")) {
        const videoId = pathname.split("/")[2];
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
        }
      }
      if (pathname.startsWith("/embed/")) {
        return trimmed;
      }
    }

    if (hostname === "youtu.be") {
      const videoId = pathname.slice(1);
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
      }
    }

    if (hostname === "vimeo.com") {
      const videoId = pathname.split("/").filter(Boolean).pop();
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
    }

    if (hostname === "player.vimeo.com") {
      return trimmed;
    }

    return null;
  } catch {
    return null;
  }
}

function injectVideoAfterFirstParagraph(html: string, videoHtml: string) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const firstParagraph = doc.querySelector("p");
    if (firstParagraph) {
      firstParagraph.insertAdjacentHTML("afterend", videoHtml);
    } else {
      doc.body.insertAdjacentHTML("beforeend", videoHtml);
    }
    return doc.body.innerHTML;
  } catch {
    return html;
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getPublishedDate(post: BlogPostType) {
  return post.publishedAt || post.updatedAt || post.createdAt || "";
}

function getTagLabel(post: BlogPostType) {
  return post.tags?.[0]?.tag?.name || post.website?.name || "Zora Services";
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    Promise.all([fetchPublicBlogBySlug(slug), fetchPublicBlogs(1, 6)])
      .then(([postResponse, listResponse]) => {
        if (cancelled) {
          return;
        }

        setPost(postResponse.data);
        setRecentPosts(
          listResponse.data.filter((item) => item.slug !== slug).slice(0, 3)
        );
      })
      .catch(() => {
        if (!cancelled) {
          setPost(null);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_BLOG_API_URL || "http://localhost:4000/api/v1";
      const response = await fetch(`${API_BASE_URL}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website_slug: ENQUIRY_WEBSITE_SLUG,
          form_type: "blog-consultation",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: post?.title ? `Consultation request for ${post.title}` : "Blog post consultation",
          enquiry_type: "Blog Consultation",
          service_interested_in: formData.service || null,
          message: formData.message,
          source_page_url: window.location.href,
          source_page_title: post?.title || "Blog Post Consultation",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const activePost = post;

  const contentHtml = useMemo(() => {
    if (!activePost) {
      return "";
    }

    const decodedContent = decodeHtmlEntities(activePost.content);
    if (!activePost.introVideo) {
      return decodedContent;
    }

    const videoTitle = activePost.title || "Intro";
    const embedUrl = getVideoEmbedUrl(activePost.introVideo);
    const videoContent = embedUrl
      ? `<div class="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(7,4,22,0.35)] my-10"><div class="relative w-full bg-black/40" style="padding-bottom:56.25%"><iframe src="${embedUrl}" title="${videoTitle} Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 h-full w-full" style="border:none"></iframe></div></div>`
      : `<div class="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-sm text-red-100 shadow-[0_12px_30px_rgba(220,38,38,0.15)] my-10"><p class="mb-3 font-semibold text-red-100">Video could not be loaded.</p><p class="mb-4 text-sm text-red-200">The provided intro video link is not in a supported embed format. Please use a valid YouTube or Vimeo video URL.</p><a href="${activePost.introVideo}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full border border-red-300/40 bg-red-600/20 px-4 py-2 text-xs font-semibold text-red-50 transition hover:bg-red-600/40">Open original video link</a></div>`;

    return injectVideoAfterFirstParagraph(decodedContent, videoContent);
  }, [activePost]);

  const recentUpdatedPosts = useMemo(
    () =>
      [...recentPosts].sort(
        (a, b) =>
          new Date(getPublishedDate(b) || 0).getTime() -
          new Date(getPublishedDate(a) || 0).getTime()
      ),
    [recentPosts]
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0618] flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!activePost) {
    return (
      <div className="min-h-screen bg-[#0b0618] flex items-center justify-center">
        <p className="text-gray-500">Blog not found.</p>
      </div>
    );
  }

  const slugValue = activePost.slug;
  const title = activePost.title ?? "Untitled Blog";
  const description = getBlogDescription(activePost);
  const publishedDate = getPublishedDate(activePost);
  const readTime = estimateReadTime(activePost.content);
  const postImage = getBlogImage(activePost);
  const authorName = activePost.authorUser?.name || activePost.author || "Zora Global AI Team";
  const tagLabel = getTagLabel(activePost);

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      <PageSEO
        title={`${title} | Zora Global AI`}
        description={description}
        canonical={`/blog/${slugValue}`}
        ogType="article"
      />
      <DocumentHead
        scripts={[
          {
            type: "application/ld+json",
            content: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: title,
              description,
              datePublished: publishedDate,
              dateModified: publishedDate,
              url: `${BASE_URL}/blog/${slugValue}`,
              author: {
                "@type": "Person",
                name: authorName
              },
              publisher: {
                "@type": "Organization",
                name: "Zora Global AI",
                url: BASE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${BASE_URL}/logo.webp`
                }
              },
              image: postImage,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${BASE_URL}/blog/${slugValue}`
              }
            })
          }
        ]}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: title, path: `/blog/${slugValue}` },
        ]}
      />
      <section className="relative overflow-hidden px-6 pb-0 pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[minmax(0,840px)_420px] lg:items-start lg:gap-28">
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to="/blog"
                  className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-300"
                >
                  <ArrowLeft
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                  />
                  Back to Blog
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="mb-5 flex flex-wrap items-center gap-5"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/12 px-3 py-1 text-xs font-semibold text-purple-200">
                  <Tag size={11} />
                  {tagLabel}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <User size={14} className="text-purple-300" />
                  {authorName}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock size={14} className="text-purple-300" />
                  {readTime}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-5 max-w-full text-4xl font-extrabold leading-tight tracking-tight text-white md:text-[3.2rem]"
              >
                {title}
              </motion.h1>
              <p className="mb-6 max-w-full text-left text-base leading-relaxed text-gray-300 md:text-[1.05rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 pb-32 pt-2 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,840px)_420px] lg:gap-28">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="max-w-[860px]"
          >
            <div className="mt-1 overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
              <img
                src={postImage}
                alt={title}
                className="h-[210px] w-full object-cover md:h-[300px]"
              />
            </div>
            {publishedDate && (
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={14} className="text-purple-300" />
                <span className="font-medium text-gray-300">Posted on</span>
                <span>{formatDate(publishedDate)}</span>
              </div>
            )}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 mt-5 origin-left h-px bg-gradient-to-r from-purple-500/60 via-fuchsia-500/30 to-transparent"
            />

            <div
              className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-a:text-purple-300 prose-li:text-gray-300 prose-blockquote:border-purple-500 prose-blockquote:text-purple-200 prose-img:rounded-2xl prose-pre:border prose-pre:border-white/10 prose-pre:bg-white/[0.04]"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </motion.article>

          <aside className="lg:-mt-[292px] lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-10">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
                <div className="mb-5 flex items-center gap-2">
                  <RefreshCw size={18} className="text-purple-300" />
                  <h3 className="text-[1.55rem] font-bold text-white">
                    Recent Articles
                  </h3>
                </div>
                <div className="space-y-5 border-t border-white/10 pt-5">
                  {recentUpdatedPosts.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${item.slug}`}
                      className="group grid grid-cols-[92px_minmax(0,1fr)] items-center gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="h-[68px] w-[92px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                        <img
                          src={getBlogImage(item)}
                          alt={item.title}
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <p className="text-[1.02rem] font-semibold leading-snug text-white transition-colors group-hover:text-purple-200">
                          {item.title}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={13} className="text-purple-300" />
                          <span>{formatDate(getPublishedDate(item))}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {recentUpdatedPosts.length === 0 && (
                    <p className="text-sm text-gray-400">
                      More articles will appear here as they are published.
                    </p>
                  )}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-fuchsia-300" />
                  <h3 className="text-[1.55rem] font-bold text-white">
                    Book Your Free Consultation
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={submitting}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none disabled:opacity-50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={submitting}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none disabled:opacity-50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    disabled={submitting}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none disabled:opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Service Interested In"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    disabled={submitting}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none disabled:opacity-50"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={submitting}
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none disabled:opacity-50"
                  />
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  {submitted && <p className="text-sm text-green-400">Thank you! We'll be in touch shortly.</p>}
                  <button
                    type="submit"
                    disabled={submitting || submitted}
                    className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-fuchsia-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
