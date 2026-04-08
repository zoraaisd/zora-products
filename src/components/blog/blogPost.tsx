import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, RefreshCw, Send, Tag, TrendingUp, User } from "lucide-react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import type { BlogPost, BlogSection } from "../../types/blog";
import { submitEnquiry } from "../../lib/enquiryApi";

interface BlogPostPageProps {
  posts: BlogPost[];
  post?: BlogPost | null;
  loading?: boolean;
  onBack: () => void;
  onPostClick?: (slug: string) => void;
  onHome: () => void;
  onAbout: () => void;
  onProducts: () => void;
  onProductClick?: (productId: string) => void;
  onBlog: () => void;
  onContact: () => void;
  onDocumentation?: () => void;
  onFAQ?: () => void;
  onPrivacy?: () => void;
  onTerms?: () => void;
  onCookie?: () => void;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }

      const embedMatch = parsedUrl.pathname.match(/\/embed\/([^/]+)/);
      if (embedMatch?.[1]) {
        return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

function ArticleMedia({ section, postTitle }: { section: BlogSection; postTitle: string }) {
  if (!section.image && !section.video) return null;

  const youtubeEmbedUrl = section.video ? getYouTubeEmbedUrl(section.video) : null;

  return (
    <figure className="mx-auto max-w-3xl overflow-hidden rounded-[22px] border border-white/10 bg-black/30 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
      {youtubeEmbedUrl ? (
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={youtubeEmbedUrl}
            title={section.imageAlt ?? `${postTitle} video`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : section.video ? (
        <video
          controls
          preload="metadata"
          className="h-full max-h-[220px] w-full bg-black object-cover"
        >
          <source src={section.video} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={section.image}
          alt={section.imageAlt ?? `${postTitle} media`}
          className="h-full max-h-[300px] w-full object-cover"
        />
      )}
      {section.mediaCaption ? (
        <figcaption className="border-t border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-400">
          {section.mediaCaption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionBody({ section, postTitle }: { section: BlogSection; postTitle: string }) {
  const hasMedia = Boolean(section.image || section.video);

  if (!hasMedia) {
    return (
      <p className="mt-4 text-[1rem] leading-8 text-slate-300 md:text-[1.06rem]">
        {section.paragraph}
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-5">
      <div className="overflow-hidden rounded-[24px]">
        <ArticleMedia section={section} postTitle={postTitle} />
      </div>
      <p className="text-[1rem] leading-8 text-slate-200 md:text-[1.06rem]">
        {section.paragraph}
      </p>
    </div>
  );
}

function FeaturedImagePanel({ post }: { post?: BlogPost | null }) {
  const featuredImage = post?.featuredImage || post?.image;

  if (!featuredImage) {
    return null;
  }

  return (
    <figure className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Featured image</span>
      </div>
      <img
        src={featuredImage}
        alt={`${post?.title ?? "Blog"} featured image`}
        className="h-[220px] w-full object-cover md:h-[320px]"
      />
    </figure>
  );
}

function RecentArticlesSidebar({
  recentArticles,
  currentPost,
  onPostClick,
}: {
  recentArticles: BlogPost[];
  currentPost?: BlogPost | null;
  onPostClick?: (slug: string) => void;
}) {
  const [consultationForm, setConsultationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const blogTitle = currentPost?.title?.trim() || consultationForm.service.trim() || "General inquiry";
      await submitEnquiry({
        form_type: "BLOG_CONSULTATION",
        name: consultationForm.fullName.trim(),
        email: consultationForm.email.trim(),
        phone: consultationForm.phone.trim(),
        subject: `Blog consultation - ${blogTitle}`,
        enquiry_type: "Consultation",
        service_interested_in: consultationForm.service.trim() || null,
        message: consultationForm.message.trim(),
        source_page_title: currentPost?.title ?? "Blog Post",
        source_page_url: window.location.href,
        metadata: {
          origin: "zora-products-blog-consultation",
          blogSlug: currentPost?.slug ?? null,
          blogTitle: currentPost?.title ?? null,
          department: currentPost?.department ?? null
        }
      });

      setSubmitSuccess(true);
      setConsultationForm({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Consultation form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="lg:-mt-[292px] lg:self-start lg:sticky lg:top-8">
      <div className="space-y-10">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
          <div className="mb-5 flex items-center gap-2">
            <RefreshCw size={18} className="text-purple-300" />
            <h3 className="text-[1.55rem] font-bold text-white">Recent Articles</h3>
          </div>
          <div className="space-y-5 border-t border-white/10 pt-5">
            {recentArticles.map((article) => (
              <button
                key={article.slug}
                type="button"
                onClick={() => onPostClick?.(article.slug)}
                className="group grid w-full grid-cols-[92px_minmax(0,1fr)] items-center gap-4 border-b border-white/10 pb-5 text-left last:border-b-0 last:pb-0"
              >
                <div className="h-[68px] w-[92px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-[1.02rem] font-semibold leading-snug text-white transition-colors group-hover:text-purple-200">
                    {article.title}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={13} className="text-purple-300" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-fuchsia-300" />
            <h3 className="text-[1.55rem] font-bold text-white">Book Your Free Consultation</h3>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-gray-400">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          {submitSuccess ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-6 text-center text-sm text-emerald-100">
              <p className="text-base font-semibold">Your enquiry has been submitted successfully.</p>
              <p className="mt-2 text-emerald-100/80">The form has been cleared.</p>
              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="mt-5 rounded-xl border border-emerald-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:bg-white/10"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={consultationForm.fullName}
                onChange={(event) =>
                  setConsultationForm((current) => ({
                    ...current,
                    fullName: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={consultationForm.email}
                onChange={(event) =>
                  setConsultationForm((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={consultationForm.phone}
                onChange={(event) =>
                  setConsultationForm((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Service Interested In"
                value={consultationForm.service}
                onChange={(event) =>
                  setConsultationForm((current) => ({
                    ...current,
                    service: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                value={consultationForm.message}
                onChange={(event) =>
                  setConsultationForm((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </aside>
  );
}

const BlogPostPage = ({
  posts,
  post,
  loading = false,
  onBack,
  onPostClick,
  onHome,
  onAbout,
  onProducts,
  onProductClick: _onProductClick,
  onBlog,
  onContact,
  onDocumentation,
  onFAQ,
  onPrivacy,
  onTerms,
  onCookie,
}: BlogPostPageProps) => {
  const pageTitle = loading
    ? "Loading Blog Post"
    : post?.title ?? "Blog Post";
  const recentArticles = useMemo(
    () =>
      [...posts]
        .filter((item) => item.slug !== post?.slug)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3),
    [post?.slug, posts]
  );

  return (
    <div className="min-h-screen bg-[#07040d] text-white">
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,rgba(91,33,182,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.16),transparent_24%),linear-gradient(180deg,#07040d_0%,#0b0618_50%,#07040d_100%)]" />
      <div
        className="fixed inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <Navbar
        onHomeClick={onHome}
        onAboutClick={onAbout}
        onProductClick={onProducts}
        onBlogClick={onBlog}
        onContactClick={onContact}
        currentPage="blog"
      />

      <div className="mx-auto max-w-[1440px] px-4 pb-32 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,840px)_420px] lg:gap-28">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="max-w-[860px]"
          >
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onBack}
              className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-300"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Back to Blog
            </motion.button>

            {post?.date ? (
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={14} className="text-purple-300" />
                <span className="font-medium text-gray-300">Posted on</span>
                <span>{formatDate(post.date)}</span>
              </div>
            ) : null}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-5 flex flex-wrap items-center gap-5"
            >
              {post?.department ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/12 px-3 py-1 text-xs font-semibold text-purple-200">
                  <Tag size={11} />
                  {post.department}
                </span>
              ) : null}
              {post?.featured ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/12 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Featured
                </span>
              ) : null}
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <User size={14} className="text-purple-300" />
                ZORA Editorial Team
              </span>
              {post?.readTime ? (
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock size={14} className="text-purple-300" />
                  {post.readTime}
                </span>
              ) : null}
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 mt-5 origin-left h-px bg-gradient-to-r from-purple-500/60 via-fuchsia-500/30 to-transparent"
            />

            <div className="max-w-none pr-2">
              {loading ? (
                [...Array(3)].map((_, index) => (
                  <section
                    key={index}
                    className="border-b border-white/8 pb-8 last:border-b-0"
                  >
                    <div className="h-3 w-24 animate-pulse rounded bg-cyan-300/20" />
                    <div className="mt-4 h-8 w-2/3 animate-pulse rounded bg-white/10" />
                    <div className="mt-4 space-y-3">
                      <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                      <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
                      <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
                    </div>
                  </section>
                ))
              ) : post?.sections?.length ? (
                post.sections.map((section, index) => (
                  <section key={section.subtitle} className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold text-white md:text-[1.95rem]">
                      {section.subtitle}
                    </h2>
                    <SectionBody section={section} postTitle={post.title} />
                    {index < post.sections.length - 1 ? (
                      <div className="mt-8 h-px bg-white/8" />
                    ) : null}
                  </section>
                ))
              ) : (
                <section className="border-b border-white/8 pb-8 last:border-b-0">
                  <p className="text-base leading-8 text-slate-300">
                    {post?.description || "No blog content is available for this post yet."}
                  </p>
                </section>
              )}
            </div>
          </motion.article>

          <RecentArticlesSidebar
            recentArticles={recentArticles}
            currentPost={post}
            onPostClick={onPostClick}
          />
        </div>
      </div>

      <Footer
        onHomeClick={onHome}
        onAboutClick={onAbout}
        onProductClick={onProducts}
        onContactClick={onContact}
        onDocumentationClick={onDocumentation}
        onBlogClick={onBlog}
        onFAQClick={onFAQ}
        onPrivacyClick={onPrivacy}
        onTermsClick={onTerms}
        onCookieClick={onCookie}
      />
    </div>
  );
};

export default BlogPostPage;
