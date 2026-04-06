import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock3, Search } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { mockBlogPosts } from "../../data/blogdata";

interface BlogPageProps {
  onHome: () => void;
  onAbout: () => void;
  onProducts: () => void;
  onBlog: () => void;
  onPostClick: (slug: string) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
  onContact: () => void;
  onDocumentation?: () => void;
  onFAQ?: () => void;
  onPrivacy?: () => void;
  onTerms?: () => void;
  onCookie?: () => void;
}

const featuredProducts = mockBlogPosts.map((post, index) => ({
  ...post,
  productName:
    post.department === "Lead Generation"
      ? "ORBILEADS"
      : post.department === "Sales Automation"
        ? "CRMS"
        : "HRMS",
  accent: [
    "from-violet-500/80 via-purple-500/70 to-fuchsia-500/70",
    "from-cyan-500/80 via-sky-500/70 to-indigo-500/70",
    "from-emerald-500/80 via-teal-500/70 to-cyan-500/70",
  ][index % 3],
}));

const POSTS_PER_PAGE = 6;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const BlogPage = ({
  onHome,
  onAbout,
  onProducts,
  onPostClick,
  currentPage,
  onPageChange,
  onContact,
  onDocumentation,
  onFAQ,
  onPrivacy,
  onTerms,
  onCookie,
}: BlogPageProps) => {
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const blogSectionRef = useRef<HTMLDivElement | null>(null);
  const previousSearchQueryRef = useRef(searchQuery);

  const scrollToBlogSection = () => {
    blogSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setLoadingPosts(false), 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return featuredProducts.filter((post) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.description.toLowerCase().includes(normalizedQuery) ||
        post.department.toLowerCase().includes(normalizedQuery) ||
        post.productName.toLowerCase().includes(normalizedQuery);

      return matchesSearch;
    });
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const page = Math.min(Math.max(currentPage, 1), totalPages);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  useEffect(() => {
    if (previousSearchQueryRef.current !== searchQuery) {
      previousSearchQueryRef.current = searchQuery;
      if (currentPage !== 1) {
        onPageChange(1);
      }
    }
  }, [currentPage, onPageChange, searchQuery]);

  useEffect(() => {
    if (currentPage !== page) {
      onPageChange(page);
    }
  }, [currentPage, onPageChange, page]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#05030a] text-white">
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_24%),linear-gradient(180deg,#05030a_0%,#090612_52%,#05030a_100%)]" />
      <div
        className="fixed inset-0 -z-20 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <Navbar
        onHomeClick={onHome}
        onAboutClick={onAbout}
        onProductClick={onProducts}
        onBlogClick={scrollToBlogSection}
        onContactClick={onContact}
        currentPage="blog"
      />

      <main className="relative z-10 px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              ZORA Journal
            </span>
            <h1 className="mt-6 bg-gradient-to-r from-[#f8e8ff] via-[#d9a7ff] to-[#ff8cf6] bg-clip-text font-['Zen_Dots','Space_Grotesk',sans-serif] text-4xl leading-tight text-transparent drop-shadow-[0_0_18px_rgba(217,167,255,0.35)] sm:text-5xl lg:text-6xl">
              Insights, product stories, and practical AI guidance
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Browse articles on HRMS, CRMS, and Orbileads in a cleaner reading layout
              built for quick scanning without losing the ZORA visual feel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: "easeOut" }}
            ref={blogSectionRef}
            id="blog"
            className="mx-auto mt-10 max-w-3xl scroll-mt-28"
          >
            <label className="relative block">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/85" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles by title, product, or keyword..."
                className="w-full rounded-full border border-white/40 bg-gradient-to-r from-[#17111f] via-[#26133f] to-[#1b0f2c] py-4 pl-14 pr-5 text-sm font-semibold text-white [box-shadow:inset_0_2px_0_rgba(255,255,255,0.58),0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-md outline-none transition-all duration-300 placeholder:text-white/70 hover:brightness-110 focus:border-white/80 focus:shadow-[inset_0_2px_0_rgba(255,255,255,0.65),0_16px_34px_rgba(0,0,0,0.3),0_0_22px_rgba(168,85,247,0.42)]"
              />
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {loadingPosts ? (
              [...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
                >
                  <div className="h-56 animate-pulse bg-white/10" />
                  <div className="p-6">
                    <div className="h-5 w-24 animate-pulse rounded-full bg-white/10" />
                    <div className="mt-5 h-8 w-4/5 animate-pulse rounded bg-white/10" />
                    <div className="mt-3 h-4 w-full animate-pulse rounded bg-white/10" />
                    <div className="mt-2 h-4 w-11/12 animate-pulse rounded bg-white/10" />
                    <div className="mt-8 h-4 w-2/3 animate-pulse rounded bg-white/10" />
                  </div>
                </div>
              ))
            ) : paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  onClick={() => onPostClick(post.slug)}
                  className="group cursor-pointer overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] text-white shadow-[0_22px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
                >
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r ${post.accent}`} />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-56 w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08060f] via-transparent to-transparent" />
                    <div className={`absolute -right-10 top-5 h-28 w-28 rounded-full bg-gradient-to-br ${post.accent} opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-45`} />
                    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
                      {post.productName}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">
                      <span>{post.department}</span>
                      {post.featured ? <span className="text-fuchsia-200">Featured</span> : null}
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-100">
                      {post.title}
                    </h2>
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
                      {post.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-300" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-cyan-300" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors duration-300 group-hover:text-white">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full rounded-[26px] border border-white/10 bg-white/[0.03] px-6 py-12 text-center text-slate-400 backdrop-blur-xl">
                No blogs match your current search.
              </div>
            )}
          </motion.div>

          {!loadingPosts && totalPages > 1 ? (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onPageChange(Math.max(1, page - 1))}
                disabled={page === 1}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => onPageChange(pageNumber)}
                  aria-current={page === pageNumber ? "page" : undefined}
                  className={`relative h-12 w-12 overflow-hidden rounded-2xl border text-sm font-semibold shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ${
                    page === pageNumber
                      ? "scale-105 border-cyan-300/50 bg-gradient-to-br from-fuchsia-500/30 via-violet-500/25 to-cyan-400/25 text-white ring-2 ring-cyan-300/35"
                      : "border-white/10 bg-white/[0.05] text-slate-300 hover:border-fuchsia-300/30 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                onClick={() => onPageChange(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next
              </button>
            </div>
          ) : null}
        </section>
      </main>

      <Footer
        onHomeClick={onHome}
        onAboutClick={onAbout}
        onProductClick={onProducts}
        onContactClick={onContact}
        onDocumentationClick={onDocumentation}
        onBlogClick={scrollToBlogSection}
        onFAQClick={onFAQ}
        onPrivacyClick={onPrivacy}
        onTermsClick={onTerms}
        onCookieClick={onCookie}
      />
    </div>
  );
};

export default BlogPage;
