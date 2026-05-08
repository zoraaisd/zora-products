import {
  ArrowRight,
  Check,
  Code2,
  PenTool,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand business goals, users and operating context before defining scope.",
    bullets: ["Business Analysis", "User Research", "Opportunity Mapping"],
    Icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape the right user flows, technical direction and solution blueprint for delivery.",
    bullets: [
      "UX & UI Planning",
      "Architecture & Prototyping",
      "Stakeholder Alignment",
    ],
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build with precision, test continuously and keep execution aligned with real priorities.",
    bullets: ["Agile Development", "Quality & Testing", "Performance & Security"],
    Icon: Code2,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Launch, support, iterate and help teams turn technology into long-term business value.",
    bullets: [
      "Deployment & Integration",
      "Monitoring & Optimization",
      "Ongoing Support",
    ],
    Icon: Rocket,
  },
];

const colors = {
  bg: "#ffffff",
  navy: "#10163c",
  body: "#66607c",
  purple: "#8f7ae6",
  purpleSoft: "#c2b5f4",
  line: "#9b88eb",
  border: "#e8e0f7",
  pillBg: "#f6f1ff",
  pillBorder: "#ece2fb",
};

const ProcessIcon = ({ Icon }: { Icon: LucideIcon }) => (
  <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full"
    style={{
      background: "#ffffff",
      border: "1px solid #ede3fb",
      boxShadow: "0 10px 22px rgba(143,122,230,0.16)",
      color: colors.purple,
    }}
  >
    <Icon size={20} strokeWidth={2.1} />
  </div>
);

const DeliveryProcess: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      style={{ background: colors.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(143,122,230,0.10), transparent 24%), radial-gradient(circle at 84% 72%, rgba(143,122,230,0.05), transparent 24%)",
        }}
      />
      <div className="relative mx-auto max-w-[1420px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h3
            className="mx-auto max-w-[20ch] font-serif text-[1.25rem] font-bold leading-[1.08] tracking-[-0.03em] sm:max-w-[20ch] sm:text-[1.5rem] md:text-[1.75rem] lg:max-w-[20ch] lg:text-[2rem]"
            style={{ color: colors.navy }}
          >
            From idea to impact,
            <br />
            we follow a{" "}
            <span style={{ color: colors.purple }}>proven process</span>
          </h3>

          <p
            className="mx-auto mt-3 max-w-[48rem] text-[14px] leading-[1.8] sm:mt-4 sm:text-[15px] md:text-[16px] md:leading-[1.85] lg:max-w-[52rem]"
            style={{ color: colors.body }}
          >
            A structured delivery model across strategy, design, engineering,
            and rollout ensuring clarity, momentum and measurable outcomes at
            every stage.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 md:mt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ number, title, description, bullets, Icon }, index) => (
            <div key={title} className="relative">
              <article
                className="group relative flex h-full min-h-[302px] flex-col rounded-[24px] px-6 pb-6 pt-5 transition-all duration-300 ease-out hover:-translate-y-2"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${colors.border}`,
                  boxShadow:
                    "0 10px 28px rgba(143,122,230,0.10), 0 0 0 1px rgba(143,122,230,0.04), 0 0 32px rgba(143,122,230,0.12)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 22px 48px rgba(143,122,230,0.18), 0 0 0 1px rgba(143,122,230,0.06), 0 0 44px rgba(143,122,230,0.18)";
                  e.currentTarget.style.borderColor = "#dacdfa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 28px rgba(143,122,230,0.10), 0 0 0 1px rgba(143,122,230,0.04), 0 0 32px rgba(143,122,230,0.12)";
                  e.currentTarget.style.borderColor = colors.border;
                }}
              >
                <div className="mb-5 flex min-h-[56px] items-start justify-between gap-4">
                  <div className="pt-0.5 transition-transform duration-300 group-hover:scale-[1.04]">
                    <ProcessIcon Icon={Icon} />
                  </div>
                  <span
                    className="pt-3 text-[1.75rem] font-semibold leading-none tracking-[-0.03em]"
                    style={{ color: colors.purpleSoft }}
                  >
                    {number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3
                    className="min-h-[30px] text-[1.52rem] font-semibold leading-none tracking-[-0.03em]"
                    style={{ color: colors.navy }}
                  >
                    {title}
                  </h3>

                  <p
                    className="mt-3 min-h-[92px] max-w-[31ch] text-[14px] leading-[1.7]"
                    style={{ color: colors.body }}
                  >
                    {description}
                  </p>

                  <div className="mt-auto space-y-2.5 pt-4 pb-2">
                    {bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex min-h-[40px] items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 group-hover:translate-x-1"
                        style={{
                          background: colors.pillBg,
                          border: `1px solid ${colors.pillBorder}`,
                          boxShadow: "0 4px 14px rgba(143,122,230,0.08)",
                        }}
                      >
                        <span
                          className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-white"
                          style={{ background: colors.purple }}
                        >
                          <Check size={10.5} strokeWidth={3.2} />
                        </span>
                        <span
                          className="whitespace-nowrap text-[12px] font-medium leading-none tracking-[-0.015em]"
                          style={{ color: "#444a64" }}
                        >
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {index < steps.length - 1 && (
                <>
                  <div className="pointer-events-none absolute left-1/2 top-full z-10 hidden h-8 -translate-x-1/2 md:block lg:hidden">
                    <div className="flex h-full flex-col items-center justify-center">
                      <span
                        className="h-5 w-px"
                        style={{ background: colors.line }}
                      />
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                        style={{
                          background: colors.purple,
                          boxShadow: "0 8px 18px rgba(143,122,230,0.24)",
                        }}
                      >
                        <ArrowRight
                          size={13}
                          className="rotate-90"
                          strokeWidth={2.8}
                        />
                      </span>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute left-full z-20 hidden -translate-y-1/2 lg:flex lg:w-[82px] lg:-translate-x-[41px] xl:w-[88px] xl:-translate-x-[44px]"
                    style={{ top: "118px" }}
                  >
                    <div className="flex w-full items-center">
                      <span
                        className="h-[2px] flex-1"
                        style={{ background: colors.line }}
                      />
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                        style={{
                          background: colors.purple,
                          boxShadow: "0 8px 18px rgba(143,122,230,0.24)",
                        }}
                      >
                        <ArrowRight size={13} strokeWidth={2.8} />
                      </span>
                      <span
                        className="h-[2px] flex-1"
                        style={{ background: colors.line }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
