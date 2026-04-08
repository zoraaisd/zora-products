import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import blogHeroVideo from "../../assets/blog-hero.mp4";
import type { BlogPost } from "../../types/blog";
import { fetchBlogPosts } from "../../lib/blogApi";

interface BlogPageProps {
  onHome: () => void;
  onAbout: () => void;
  onProducts: () => void;
  onBlog: () => void;
  onContact: () => void;
  onDocumentation?: () => void;
  onFAQ?: () => void;
  onPrivacy?: () => void;
  onTerms?: () => void;
  onCookie?: () => void;
}

type DisplayPost = BlogPost & {
  accent: string;
  kicker: string;
};

const insightPills = ["Interactive Stories", "AI Strategy", "Automation Notes", "Launch Ready"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getKicker(department: string) {
  if (department === "Recruitment") return "People Systems";
  if (department === "Sales Automation") return "Revenue Systems";
  if (department === "Lead Generation") return "Growth Engine";
  return department;
}

function getAccent(index: number) {
  return [
    "from-fuchsia-500/80 via-violet-500/60 to-cyan-400/70",
    "from-cyan-500/80 via-blue-500/65 to-violet-500/70",
    "from-violet-500/80 via-purple-500/65 to-pink-500/75",
  ][index % 3];
}

const BlogCardMedia = ({ post }: { post: DisplayPost }) => (
  <div className="relative h-60 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
    <div className={`absolute inset-0 bg-gradient-to-br ${post.accent}`} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%,rgba(0,0,0,0.28))]" />
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        x: ["0%", "3%", "-2%", "0%"],
        y: ["0%", "-5%", "2%", "0%"],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-10 top-0 h-44 w-44 rounded-full bg-white/15 blur-3xl"
    />
    <motion.img
      src={post.bannerImage || post.featuredImage || post.image}
      alt={post.title}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,6,0.88)_0%,rgba(3,3,6,0.55)_48%,rgba(3,3,6,0.2)_100%)]" />
    <div className="relative flex h-full flex-col justify-between p-5">
      <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
        {post.kicker}
      </div>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />
          <span className="text-xs uppercase tracking-[0.22em] text-white/70">
            Zora {post.slug}
          </span>
        </div>
        <h3 className="max-w-[14rem] font-['Orbitron','Space_Grotesk',sans-serif] text-2xl font-semibold tracking-[0.08em] text-white">
          {post.title}
        </h3>
      </div>
    </div>
  </div>
);

const BlogPage = ({
  onHome,
  onAbout,
  onProducts,
  onBlog,
  onContact,
  onDocumentation,
  onFAQ,
  onPrivacy,
  onTerms,
  onCookie,
}: BlogPageProps) => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    void fetchBlogPosts(controller.signal)
      .then((items) => {
        setPosts(items);
        setError(null);
      })
      .catch((fetchError) => {
        setError(fetchError instanceof Error ? fetchError.message : "Failed to load blog posts.");
        setPosts([]);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const decoratedPosts = useMemo<DisplayPost[]>(
    () =>
      posts.map((post, index) => ({
        ...post,
        kicker: getKicker(post.department),
        accent: getAccent(index),
      })),
    [posts]
  );

  const handleHeroPointerMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const featuredPosts = decoratedPosts.slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(76,29,149,0.22),transparent_22%),linear-gradient(180deg,#020205_0%,#060614_48%,#020202_100%)]" />
      <div
        className="fixed inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.14) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
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

      <main className="relative z-10 pb-20 pt-0">
        <section onMouseMove={handleHeroPointerMove} className="relative min-h-[76vh] overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            poster={decoratedPosts[0]?.image}
          >
            <source src={blogHeroVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,6,0.92)_0%,rgba(5,8,18,0.68)_42%,rgba(6,8,18,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_26%)]" />
          <div
            className="absolute inset-0 transition-all duration-200"
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.12), transparent 20%)`,
            }}
          />

          <div className="relative mx-auto grid min-h-[76vh] max-w-7xl items-end gap-10 px-4 pb-12 pt-8 sm:px-6 md:pt-10 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:px-8 lg:pb-16 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl pt-10 md:pt-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-fuchsia-300" />
                Interactive ZORA Journal
              </div>
              <h1 className="mt-6 max-w-3xl font-['Zen_Dots','Space_Grotesk',sans-serif] text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Ideas in motion for AI products, launches and enterprise growth
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                Live blog content from the backend, presented in the same editorial layout.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {insightPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
              className="group relative rounded-[2rem] border border-white/10 bg-black/35 p-4 shadow-[0_0_80px_rgba(59,130,246,0.14)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-fuchsia-500/0 via-cyan-400/0 to-violet-500/0 opacity-0 blur-2xl transition-all duration-300 group-hover:from-fuchsia-500/18 group-hover:via-cyan-400/14 group-hover:to-violet-500/18 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-cyan-300/0 transition-colors duration-300 group-hover:border-cyan-300/30" />
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                    Featured Signals
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    {featuredPosts.length > 0 ? "What teams are reading now" : "No featured stories yet"}
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {String(featuredPosts.length).padStart(2, "0")} stories
                </div>
              </div>
              <div className="space-y-3">
                {loading ? (
                  [...Array(3)].map((_, index) => (
                    <div key={index} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                      <div className="h-20 animate-pulse rounded-2xl bg-white/10" />
                    </div>
                  ))
                ) : error ? (
                  <div className="rounded-[1.5rem] border border-rose-400/20 bg-rose-500/10 p-4 text-sm text-rose-100">
                    {error}
                  </div>
                ) : (
                  featuredPosts.map((post) => (
                    <motion.div
                      key={post.slug}
                      whileHover={{ x: 8, scale: 1.015 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]"
                    >
                      <div className="flex items-start gap-4">
                          <img
                          src={post.bannerImage || post.featuredImage || post.image}
                          alt={post.title}
                          className="h-20 w-20 rounded-2xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                            {post.kicker}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                          <p className="mt-1 text-sm text-white/60">
                            {post.readTime} | {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.85fr)] lg:px-8">
          <div className="space-y-8">
            {loading ? (
              [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-xl md:p-6"
                >
                  <div className="h-60 animate-pulse rounded-[1.5rem] bg-white/10" />
                  <div className="mt-5 h-8 w-2/3 animate-pulse rounded bg-white/10" />
                  <div className="mt-4 h-4 w-full animate-pulse rounded bg-white/10" />
                </div>
              ))
            ) : (
              decoratedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 * index }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-xl md:p-6"
                >
                  <div className={`pointer-events-none absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br ${post.accent} opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-30`} />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-cyan-300/0 transition-colors duration-300 group-hover:border-cyan-300/25" />
                  <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-center">
                    <BlogCardMedia post={post} />

                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                        <span
                          className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white ${post.accent}`}
                        >
                          {post.department}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-purple-300" />
                          {formatDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-cyan-300" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-5 text-3xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-100">
                        {post.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
                        {post.description}
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => window.location.assign(`/blog/${post.slug}`)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.16)]"
                        >
                          Read article
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <span className="text-xs uppercase tracking-[0.24em] text-white/35">
                          {post.kicker}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6 lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Blog mode</h3>
                  <p className="text-sm text-gray-400">Live backend content, same ZORA styling</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-medium text-purple-200">Interactive background</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    The hero uses a live video layer plus cursor-reactive lighting to make the page feel active instead of static
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-medium text-cyan-200">Unique layout</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Backend posts now flow into story panels instead of a fixed mock card grid
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-600/25 via-gray-900/75 to-cyan-500/15 p-6 backdrop-blur-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">Need a custom AI roadmap?</h3>
              <p className="mt-3 text-sm leading-7 text-gray-200">
                Move from ideas to production with consulting, automation design and customer-facing AI systems built by ZORA.
              </p>
              <button
                type="button"
                onClick={onContact}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.aside>
        </section>
      </main>

      <div className="pointer-events-none inset-x-0 z-[5] h-16 bg-gradient-to-b from-transparent to-purple-900/60" />
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

export default BlogPage;
