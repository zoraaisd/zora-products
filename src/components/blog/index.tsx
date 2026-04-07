import { useEffect, useState } from "react";
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
import hrmsImage from "../../assets/hrms.webp";
import crmsImage from "../../assets/crms.webp";
import orbileadsImage from "../../assets/orbileads.webp";
import blogHeroVideo from "../../assets/blog-hero.mp4";

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

interface BlogPost {
  id: number;
  name: string;
  slug: string;
  url: string;
  description: string;
  banner_image: string;
  intro_video: string | null;
  is_active: boolean;
  sort_order: number;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  created_at: string;
  updated_at: string;
  category: string;
  readTime: string;
  publishDate: string;
  accent: string;
  kicker: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    name: "HRMS",
    slug: "hrms",
    url: "/blog/hrms",
    description:
      "Streamline every aspect of human resources with an intelligent, end-to-end HRMS platform. From employee onboarding and payroll to talent analytics and succession planning, HRMS automates routine tasks and gives you insights to build a better workplace.",
    banner_image: hrmsImage,
    intro_video: null,
    is_active: true,
    sort_order: 1,
    seo_title: "HRMS | ZORA Blog",
    seo_description:
      "Discover how ZORA HRMS simplifies onboarding, payroll, talent analytics and performance management for modern teams.",
    seo_keywords:
      "HRMS, human resource management, payroll automation, talent analytics, ZORA",
    canonical_url: "/blog/hrms",
    og_title: "HRMS | ZORA Blog",
    og_description:
      "Explore ZORA HRMS and see how intelligent HR automation supports hiring, payroll and employee growth.",
    og_image: hrmsImage,
    created_at: "2026-04-03T00:00:00Z",
    updated_at: "2026-04-03T00:00:00Z",
    category: "HR Product",
    readTime: "6 min read",
    publishDate: "Apr 2026",
    accent: "from-fuchsia-500/80 via-violet-500/60 to-cyan-400/70",
    kicker: "People Systems",
  },
  {
    id: 2,
    name: "CRMS",
    slug: "crms",
    url: "/blog/crms",
    description:
      "Transform customer relationships with enterprise-grade CRM powered by AI. CRMS provides a 360-degree view of every customer, automates sales processes and delivers predictive insights that accelerate deals and reduce churn.",
    banner_image: crmsImage,
    intro_video: null,
    is_active: true,
    sort_order: 2,
    seo_title: "CRMS | ZORA Blog",
    seo_description:
      "Learn how ZORA CRMS improves customer visibility, sales acceleration and churn reduction with AI-powered relationship intelligence.",
    seo_keywords:
      "CRMS, customer relationship management, AI CRM, sales automation, ZORA",
    canonical_url: "/blog/crms",
    og_title: "CRMS | ZORA Blog",
    og_description:
      "See how ZORA CRMS delivers customer intelligence, pipeline acceleration and smarter revenue growth.",
    og_image: crmsImage,
    created_at: "2026-04-03T00:00:00Z",
    updated_at: "2026-04-03T00:00:00Z",
    category: "Sales Product",
    readTime: "5 min read",
    publishDate: "Apr 2026",
    accent: "from-cyan-500/80 via-blue-500/65 to-violet-500/70",
    kicker: "Revenue Systems",
  },
  {
    id: 3,
    name: "OrbiLeads",
    slug: "orbileads",
    url: "/blog/orbileads",
    description:
      "Revolutionize your sales pipeline with intelligent lead generation and acquisition. OrbiLeads combines AI-driven targeting, real-time analytics and automated follow-up to turn prospects into customers at scale.",
    banner_image: orbileadsImage,
    intro_video: null,
    is_active: true,
    sort_order: 3,
    seo_title: "OrbiLeads | ZORA Blog",
    seo_description:
      "Discover how OrbiLeads helps teams generate better leads, automate follow-ups and improve conversion performance.",
    seo_keywords:
      "OrbiLeads, lead generation, sales pipeline, AI targeting, ZORA",
    canonical_url: "/blog/orbileads",
    og_title: "OrbiLeads | ZORA Blog",
    og_description:
      "Explore how OrbiLeads powers lead generation, prospect targeting and conversion-focused outreach.",
    og_image: orbileadsImage,
    created_at: "2026-04-03T00:00:00Z",
    updated_at: "2026-04-03T00:00:00Z",
    category: "Lead Gen Product",
    readTime: "7 min read",
    publishDate: "Apr 2026",
    accent: "from-violet-500/80 via-purple-500/65 to-pink-500/75",
    kicker: "Growth Engine",
  },
];

const insightPills = [
  "Interactive Stories",
  "AI Strategy",
  "Automation Notes",
  "Launch Ready",
];

const BlogCardMedia = ({ post }: { post: BlogPost }) => (
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
      src={post.banner_image}
      alt={post.name}
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
          {post.name}
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHeroPointerMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

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
        <section
          onMouseMove={handleHeroPointerMove}
          className="relative min-h-[76vh] overflow-hidden"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            poster={hrmsImage}
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
                Move around the screen to shift the light field This page now opens
                with a live video stage and a more editorial blog layout instead of a
                standard hero card
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
                    What teams are reading now
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  03 stories
                </div>
              </div>
              <div className="space-y-3">
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ x: 8, scale: 1.015 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={post.banner_image}
                        alt={post.name}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                          {post.kicker}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          {post.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                          {post.readTime} | {post.publishDate}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.85fr)] lg:px-8">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
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
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-purple-300" />
                        {post.publishDate}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-cyan-300" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-100">
                      {post.name}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
                      {post.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <button
                        type="button"
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
            ))}
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
                  <p className="text-sm text-gray-400">
                    More editorial More motion More ZORA
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-medium text-purple-200">
                    Interactive background
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    The hero uses a live video layer plus cursor-reactive lighting to
                    make the page feel active instead of static
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-medium text-cyan-200">
                    Unique layout
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    The page now opens like an editorial landing experience, then
                    flows into story panels instead of a standard hero card and grid
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-600/25 via-gray-900/75 to-cyan-500/15 p-6 backdrop-blur-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Need a custom AI roadmap?
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-200">
                Move from ideas to production with consulting, automation design
                and customer-facing AI systems built by ZORA.
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
