import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { mockBlogPosts } from "../../data/blogIndex";

const INSIGHTS_BASE = `${import.meta.env.BASE_URL}Insights/`;

const insightImageBySlug: Record<string, string> = {
  "modern-website-engineering-playbook-2026":
    `${INSIGHTS_BASE}web-application-services.webp`,
  "mobile-app-growth-strategies-for-service-brands":
    `${INSIGHTS_BASE}mobile-application-development.webp`,
  "ai-automation-workflows-for-growing-teams":
    `${INSIGHTS_BASE}automation-solutions.webp`,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const posts = mockBlogPosts.slice(0, 3);

const InsightsPreview: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8ff] px-4 py-20 sm:px-6 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(59,130,246,0.06),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl rounded-[30px] border border-violet-100 bg-white/95 p-5 shadow-[0_24px_70px_rgba(76,29,149,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="max-w-[12ch] text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                Stay Updated with the Latest Insights
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600 sm:text-[15px]">
                Explore our blogs and articles on AI, technology,
                automation and business growth.
              </p>
            </div>

            <Link
              to="/blog"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-violet-100 px-5 py-3 text-sm font-semibold text-violet-700 shadow-[0_14px_32px_rgba(167,139,250,0.16)] transition-colors hover:bg-violet-200"
            >
              View All Insights
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(91,33,182,0.14)]"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={insightImageBySlug[post.slug] || post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-medium text-violet-500">
                    {post.department}
                  </p>
                  <h3 className="mt-2 line-clamp-3 text-lg font-semibold leading-snug text-slate-900">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 sm:text-sm">
                    <span>{formatDate(post.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
