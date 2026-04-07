import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Send, Tag } from "lucide-react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { mockBlogPosts, type MockBlogPost, type MockBlogSection } from "../../data/blogdata";

interface BlogPostPageProps {
  post?: MockBlogPost | null;
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

function ArticleMedia({ section, postTitle }: { section: MockBlogSection; postTitle: string }) {
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

function SectionBody({ section, postTitle }: { section: MockBlogSection; postTitle: string }) {
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

function RecentArticlesSidebar({
  recentArticles,
  onPostClick,
}: {
  recentArticles: MockBlogPost[];
  onPostClick?: (slug: string) => void;
}) {
  const [consultationForm, setConsultationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <aside className="hidden lg:block lg:sticky lg:top-8 lg:w-[336px] lg:self-start">
      <div className="space-y-2.5">
        <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-3.5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
          <h3 className="text-2xl font-semibold text-white">Recent Articles</h3>
          <div className="mt-3 space-y-2">
            {recentArticles.map((article) => (
              <button
                key={article.slug}
                type="button"
                onClick={() => onPostClick?.(article.slug)}
                className="flex w-full items-start gap-2.5 rounded-2xl border border-white/8 bg-black/20 p-2 text-left transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.04]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-11 w-14 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="line-clamp-2 text-[0.88rem] font-semibold leading-[1.15rem] text-white">
                    {article.title}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {formatDate(article.date)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-3.5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
          <h3 className="text-2xl font-semibold text-white">Book a Consultation</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Fill in your details here and our team can follow up with the right AI setup for your business.
          </p>
          <form className="mt-3 space-y-2.5">
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
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/35 focus:outline-none"
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
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/35 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={consultationForm.phone}
              onChange={(event) =>
                setConsultationForm((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/35 focus:outline-none"
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
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/35 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(34,211,238,0.16)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Send Request
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}

const BlogPostPage = ({
  post,
  loading = false,
  onBack,
  onPostClick,
  onHome,
  onAbout,
  onProducts,
  onProductClick,
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
    () => mockBlogPosts.filter((item) => item.slug !== post?.slug).slice(0, 3),
    [post?.slug]
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

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-36">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_360px] lg:items-start lg:gap-x-[3.25rem]">
          <div>
      <section className="relative overflow-hidden pb-6">
        <div className="relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={onBack}
            className="group mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Blog
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="grid gap-8"
          >
            <div className="min-w-0">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                {post?.department ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200">
                    <Tag size={11} />
                    {post.department}
                  </span>
                ) : null}
                {post?.featured ? (
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    Featured
                  </span>
                ) : null}
              </div>

              <h1 className="max-w-4xl bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
                {pageTitle}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                <span>ZORA Editorial Team</span>
                {post?.date ? (
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={14} className="text-amber-400" />
                    {formatDate(post.date)}
                  </span>
                ) : null}
                {post?.readTime ? (
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} className="text-cyan-300" />
                    {post.readTime}
                  </span>
                ) : null}
              </div>

              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
                {loading
                  ? "Preparing the full article content for you."
                  : post?.description ?? "The requested blog post could not be found."}
              </p>

              {post?.image ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group mt-8 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_55px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full min-h-[220px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                </motion.div>
              ) : null}
            </div>

            <div className="hidden" />
          </motion.div>
        </div>
      </section>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        className="pb-8"
      >
        <div className="grid gap-8">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-8">
            <div className="space-y-10">
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
              <section
                key={section.subtitle}
                className="pb-8"
              >
                <h2 className="text-2xl font-semibold leading-snug text-white md:text-[1.95rem]">
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
                  No blog content is available for this post yet.
                </p>
              </section>
          )}
            </div>

          </div>
        </div>
      </motion.article>
          </div>
          <RecentArticlesSidebar
            recentArticles={recentArticles}
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
