import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import PageSEO from "../components/PageSEO";
import {
  estimateReadTime,
  fetchPublicBlogs,
  getBlogDescription,
  getBlogCardImage,
  type BlogPost,
} from "../lib/blogApi";

const POSTS_PER_PAGE = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCardTitle(post: BlogPost) {
  return post.ogTitle || post.metaTitle || post.title || "Untitled Blog";
}

function getPublishedDate(post: BlogPost) {
  return post.publishedAt || post.updatedAt || post.createdAt || "";
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetchPublicBlogs(1, 100)
      .then((response) => {
        if (cancelled) {
          return;
        }

        setPosts(response.data.filter((post) => !post.deletedAt));
        setError("");
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setError("Unable to load blogs right now.");
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const sortedPosts = useMemo(
    () =>
      [...posts].sort((a, b) => {
        const dateA = new Date(getPublishedDate(a) || 0).getTime();
        const dateB = new Date(getPublishedDate(b) || 0).getTime();
        return dateB - dateA;
      }),
    [posts]
  );

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#fcfbff] text-slate-900">
      <PageSEO
        title="Blog - SEO, Web & App Development Insights | Zora Global AI"
        description="Read Zora Global AI articles on SEO, website development, mobile app development, custom software and digital growth for modern businesses."
        canonical="/blog"
      />

      <section className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet-300/30 blur-[120px]" />
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroContainer}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <motion.h1
            variants={heroItem}
            className="mb-5 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Insights That Drive
            </span>{" "}
            <span className="bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Smarter Growth
            </span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            Explore practical articles on AI, software engineering, automation,
            digital strategy and business transformation designed to help teams
            make better technology decisions with confidence.
          </motion.p>
        </motion.div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-32 sm:px-6 lg:px-8">
        {sortedPosts.length > 0 && (
          <div className="mb-10 mt-8">
            <div className="inline-flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Latest Blogs
              </h2>
              <span className="mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />
            </div>
          </div>
        )}

        {paginated.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {paginated.map((post, i) => (
                <motion.div
                  key={post.id}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  className="h-full"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full min-h-[500px] flex-col overflow-hidden rounded-[28px] border border-violet-100 bg-white p-2 shadow-[0_18px_40px_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50/40 hover:shadow-[0_24px_54px_rgba(167,139,250,0.16)]"
                  >
                    <div className="h-56 w-full overflow-hidden rounded-[22px]">
                      <img
                        src={getBlogCardImage(post)}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-grow flex-col px-5 pb-5 pt-6 md:px-6 md:pb-6 md:pt-7">
                      <h2 className="mb-4 text-xl font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-violet-700">
                        {getCardTitle(post)}
                      </h2>
                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-500">
                        {getBlogDescription(post)}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-violet-500" />
                          <span className="font-medium text-slate-600">
                            Published:
                          </span>
                          <span>
                            {getPublishedDate(post)
                              ? formatDate(getPublishedDate(post))
                              : "N/A"}
                          </span>
                        </div>
                        <span className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-xs text-slate-600">
                          {estimateReadTime(post.content)}
                        </span>
                      </div>

                      <div className="mt-6">
                        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 text-sm font-semibold text-violet-700 transition-all duration-300 group-hover:border-violet-300 group-hover:bg-violet-100 group-hover:text-violet-800">
                          <span>Read More</span>
                          <span aria-hidden="true">{"->"}</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-violet-100 bg-white px-4 py-2 text-sm text-slate-500 transition-all hover:border-violet-300 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {"<- Prev"}
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-9 w-9 rounded-lg border text-sm font-semibold transition-all ${
                      currentPage === n
                        ? "border-violet-600 bg-violet-600 text-white"
                        : "border-violet-100 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-700"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-violet-100 bg-white px-4 py-2 text-sm text-slate-500 transition-all hover:border-violet-300 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {"Next ->"}
                </button>
              </div>
            )}
          </>
        ) : !loading && !error ? (
          <p className="mt-12 text-center text-slate-500">
            No blogs are available yet.
          </p>
        ) : null}

        {loading && (
          <p className="mt-20 text-center text-slate-500">Loading posts...</p>
        )}

        {!loading && error && (
          <p className="mt-20 text-center text-slate-500">{error}</p>
        )}
      </div>
    </div>
  );
}
