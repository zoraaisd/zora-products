import hrmsImage from "../assets/hrms-recruitment-card.svg";
import crmsImage from "../assets/crms.webp";
import crmsPipelineImage from "../assets/crms-pipeline-blog.svg";
import orbileadsImage from "../assets/orbileads.webp";
import orbileadsCampaignImage from "../assets/orbileads-campaign-blog.svg";

export interface MockBlogSection {
  subtitle: string;
  paragraph: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  mediaCaption?: string;
}

export interface MockBlogPost {
  slug: string;
  title: string;
  description: string;
  department: string;
  image: string;
  date: string;
  readTime: string;
  sections: MockBlogSection[];
  featured?: boolean;
}

export const mockBlogPosts: MockBlogPost[] = [
  {
    slug: "hrms-recruitment-module-for-modern-hiring",
    title: "HRMS Recruitment Module: A Faster Way to Manage Hiring Workflows",
    description:
      "Discover how HRMS helps teams manage job postings, applicant progress, interview stages, and hiring communication in one streamlined workflow.",
    department: "Recruitment",
    image: hrmsImage,
    date: "2026-01-12",
    readTime: "5 min read",
    featured: true,
    sections: [
      {
        subtitle: "Centralized Candidate Tracking",
        paragraph:
          "The HRMS recruitment module gives hiring teams a single place to monitor applications, shortlist profiles, and manage interview progress without scattered spreadsheets. Every candidate record can hold profile details, source information, interview notes, and status history in one timeline. That makes it easier for recruiters to understand where someone stands before the next call or review. It also reduces duplicate effort when multiple team members are involved in screening. As a result, the hiring process feels more controlled and far less fragmented.",
        image: hrmsImage,
        imageAlt: "HRMS candidate tracking dashboard",
        mediaCaption:
          "A unified candidate dashboard helps recruiters review application volume, current pipeline stages, and pending actions without moving between separate tools.",
      },
      {
        subtitle: "Faster Team Collaboration",
        paragraph:
          "Recruiters and department heads can review profiles, leave feedback, and move applicants through stages with less back-and-forth and fewer delays. Instead of relying on long email threads, the team can collaborate directly around the same candidate record. Internal comments, evaluation notes, and stage recommendations stay visible for future decisions. That shared context helps interviewers stay aligned on what matters for the role. It also speeds up approvals when hiring needs to move quickly.",
      },
      {
        subtitle: "Better Hiring Visibility",
        paragraph:
          "With dashboards and clear stage-based workflows, teams gain a better understanding of hiring bottlenecks and can improve the overall recruitment cycle. Hiring managers can quickly see where candidates are dropping off and which steps take the longest to complete. Recruiters can also compare role performance across departments or job types. This kind of visibility helps teams make better process decisions instead of relying on guesswork. Over time, that leads to a more predictable and measurable recruitment pipeline.",
        image: hrmsImage,
        imageAlt: "HRMS recruitment dashboard preview",
        mediaCaption:
          "This kind of pipeline view makes it easier to identify stalled stages, overloaded recruiters, and approval delays before they affect hiring timelines.",
      },
      {
        subtitle: "A Smoother Candidate Experience",
        paragraph:
          "Consistent communication and structured interview management help create a more professional process for candidates from first contact to final selection. Timely updates reduce uncertainty and show that the company respects the applicant's time. Standardized interview scheduling also helps avoid confusion between recruiters, managers, and candidates. When the process feels organized, candidates are more likely to stay engaged through later stages. That matters even more in competitive hiring environments where delays can cost strong talent.",
      },
      {
        subtitle: "Role-Based Hiring Workflows",
        paragraph:
          "Different hiring plans can be configured for high-volume roles, leadership searches, or specialist positions so each opening follows the right approval path and evaluation steps. A customer support role may need rapid screening and bulk scheduling, while a leadership opening may involve several interview rounds and executive approvals. HRMS makes those differences manageable without forcing every job into the same template. Teams can keep structure while still adapting to the needs of each department. That flexibility is useful when recruitment demands change over time.",
        video: "https://www.youtube.com/watch?v=4o0XpWUNIxs",
        imageAlt: "HRMS recruitment walkthrough video",
        mediaCaption:
          "A short walkthrough can show how candidate records move from screening to interview scheduling and final decision-making inside one structured workflow.",
      },
      {
        subtitle: "Recruitment Data That Helps Teams Improve",
        paragraph:
          "Time-to-hire, stage conversion, and source performance reporting give HR leaders a clearer view of what is working and where the hiring process needs refinement. Instead of just counting hires, teams can measure how efficiently each step supports the final outcome. They can compare sources, identify weak interview stages, and understand where response times are slipping. This makes recruiting conversations more strategic and less reactive. Better data often leads directly to better hiring decisions.",
        image: hrmsImage,
        imageAlt: "HRMS recruitment reporting overview",
        mediaCaption:
          "Recruitment reporting becomes more useful when teams can compare time-to-hire, stage conversion, and source quality from one analytics view.",
      },
      {
        subtitle: "Scaling Hiring Without Losing Control",
        paragraph:
          "As companies grow, recruitment usually becomes harder before it becomes better. More roles, more interviewers, and more candidate volume can quickly create delays if the process is not structured. HRMS helps teams scale that activity without losing oversight or consistency. Recruiters can keep moving quickly while leadership still gets the visibility needed for approvals and planning. That balance is what turns hiring from an operational burden into a repeatable business process.",
      },
    ],
  },
  {
    slug: "crms-lead-intelligence-for-sales-teams",
    title: "CRMS Lead Intelligence: Turning Customer Data Into Sales Action",
    description:
      "Learn how CRMS helps growing teams organize leads, automate follow-ups, and keep sales pipelines moving with smarter customer visibility.",
    department: "Sales Automation",
    image: crmsImage,
    date: "2026-02-21",
    readTime: "6 min read",
    sections: [
      {
        subtitle: "Lead Capture in One Workspace",
        paragraph:
          "CRMS brings inquiry capture, customer records, and opportunity tracking together so teams can respond quickly without losing context. New inquiries from forms, calls, campaigns, or referrals can feed directly into the same workspace. Sales teams do not have to search across disconnected tools to understand who a lead is or what happened last. That saves time during first response and reduces the chance of missing valuable opportunities. A more unified lead view usually creates a stronger start to the sales cycle.",
        image: crmsPipelineImage,
        imageAlt: "CRMS lead capture and pipeline overview",
        mediaCaption:
          "A shared pipeline snapshot helps teams understand which leads are new, which ones need follow-up, and which opportunities are ready for the next step.",
      },
      {
        subtitle: "Automation That Supports Growth",
        paragraph:
          "With automated reminders and follow-up flows, sales teams can stay active on warm leads while reducing repetitive manual work. Follow-up tasks can be triggered based on stage movement, inactivity, or lead score changes. This helps the team maintain momentum without relying entirely on memory or manual lists. Automation does not replace the salesperson's judgment, but it does make consistency easier to achieve. That becomes especially useful when pipeline volume starts growing.",
      },
      {
        subtitle: "Clearer Sales Priorities",
        paragraph:
          "Lead scoring and organized deal stages help teams focus on high-value opportunities instead of treating every lead the same way. Teams can quickly separate exploratory conversations from serious buying intent. That allows managers to coach on the right deals and helps account executives spend more time where it matters most. A better prioritization model also makes forecasting more reliable. When the pipeline is structured well, effort becomes easier to direct.",
        image: crmsImage,
        imageAlt: "CRM illustration representing sales intelligence",
        mediaCaption:
          "Sales intelligence works best when customer history, active deals, and next actions stay connected in the same record.",
      },
      {
        subtitle: "Stronger Relationship Management",
        paragraph:
          "Better timeline visibility and communication tracking make it easier to build trust with prospects and maintain momentum across longer sales cycles. Every meeting, note, follow-up, and decision can be attached to the same customer record. That gives salespeople a more complete understanding of the relationship instead of just the current opportunity. It also helps new team members step in without forcing the prospect to repeat information. In longer buying journeys, that continuity can make a significant difference.",
      },
      {
        subtitle: "Shared Context for Sales Teams",
        paragraph:
          "Account notes, meeting summaries, and conversation history stay attached to the customer record so handoffs between SDRs, account executives, and managers are smoother. This shared context reduces confusion and helps each role understand what has already been discussed. It also prevents deals from stalling when ownership changes or when managers step in to support closing. A strong CRM workflow keeps the entire revenue team aligned around the same customer narrative. That alignment is difficult to achieve with disconnected notes and inboxes.",
        video: "https://www.youtube.com/watch?v=ktbXZ-6ZXZk",
        imageAlt: "CRMS sales workflow video",
        mediaCaption:
          "A process walkthrough can help explain how reminders, handoffs, and deal updates support a more consistent sales rhythm across the team.",
      },
      {
        subtitle: "Pipeline Reviews Become Easier",
        paragraph:
          "When every deal stage includes next-step ownership and confidence signals, weekly reviews become less about chasing updates and more about coaching on the right opportunities. Managers can spot stalled deals, missing follow-ups, or weak qualification patterns faster. That turns review meetings into more useful conversations about strategy and execution. It also helps leadership understand where pipeline health is strong and where support is needed. Better reviews usually lead to stronger discipline across the whole sales motion.",
        image: crmsPipelineImage,
        imageAlt: "CRMS pipeline review dashboard",
        mediaCaption:
          "Reviewing stage counts and next-step ownership in one place makes pipeline coaching more practical and less dependent on manual status chasing.",
      },
      {
        subtitle: "A CRM That Supports Revenue Planning",
        paragraph:
          "Beyond day-to-day selling, CRMS can also support smarter revenue planning. Sales leaders can use stage data, lead quality, and close confidence to understand what the quarter may actually deliver. That creates a more realistic view than relying on instinct alone. It also helps teams decide where to increase outreach, where to improve qualification, and where to add coaching support. In that way, the CRM becomes a planning tool as much as a tracking system.",
      },
    ],
  },
  {
    slug: "orbileads-outbound-campaigns-that-convert",
    title: "Orbileads Outbound Campaigns: Smarter Prospecting for Growing Businesses",
    description:
      "Explore how Orbileads supports outbound growth with targeted campaign management, lead organization, and more efficient prospect conversion.",
    department: "Lead Generation",
    image: orbileadsImage,
    date: "2026-03-03",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Targeted Outreach at Scale",
        paragraph:
          "Orbileads helps teams structure outbound campaigns around the right audience segments so messaging stays relevant and conversion potential improves. Rather than sending the same message to everyone, teams can build outreach around audience needs and buying context. That makes cold outreach feel more intentional and less generic. Strong segmentation also helps teams test positioning more effectively across industries or company types. Better targeting usually improves both response quality and campaign efficiency.",
        image: orbileadsCampaignImage,
        imageAlt: "Orbileads outbound campaign dashboard",
        mediaCaption:
          "Segment-level campaign views help teams compare audience performance and refine messaging based on what actually gets replies.",
      },
      {
        subtitle: "Organized Prospect Pipelines",
        paragraph:
          "Teams can track prospects from first outreach to qualification in a more structured way, making follow-up timing and ownership clearer. Each touchpoint can be connected to a campaign, audience segment, and current prospect stage. That gives outbound teams a better sense of what is active, what is stalled, and what needs another attempt. It also improves accountability when multiple people are involved in outreach. Structure matters even more when campaign volume increases.",
      },
      {
        subtitle: "Campaign Visibility for Teams",
        paragraph:
          "A shared outbound workflow gives sales and marketing teams a better view of performance, response quality, and active pipeline movement. Both teams can understand which campaigns are generating conversations and which ones are only producing surface-level engagement. That visibility supports better message iteration and more useful collaboration between departments. It also reduces the guesswork that often slows down outbound improvement. Shared reporting creates a stronger feedback loop for growth.",
        image: orbileadsImage,
        imageAlt: "Orbileads analytics dashboard on laptop",
        mediaCaption:
          "Campaign reporting is more actionable when teams can track opens, replies, and qualification outcomes side by side.",
      },
      {
        subtitle: "Faster Path to Qualified Leads",
        paragraph:
          "By simplifying campaign execution and reducing friction in lead management, Orbileads helps businesses move more prospects toward meaningful conversations. Teams can move from list building to outreach to qualification with fewer manual steps in between. That speed is valuable when timing matters or when several campaigns are running at once. It also helps teams protect momentum after a prospect shows interest. Faster movement through the funnel creates more chances to convert attention into pipeline.",
      },
      {
        subtitle: "Better Segmentation Improves Reply Quality",
        paragraph:
          "When audiences are grouped by industry, company size, or buying intent, outreach becomes more specific and replies are more likely to turn into useful conversations. The tone, offer, and problem framing can all be adjusted to match what that audience is most likely to care about. This makes messages feel more relevant and less like mass outreach. Better segmentation also improves campaign analysis because teams can compare audience performance more clearly. Over time, that leads to stronger targeting decisions.",
        video: "https://www.youtube.com/watch?v=ktbXZ-6ZXZk",
        imageAlt: "Orbileads outbound campaign video",
        mediaCaption:
          "A campaign explainer can illustrate how targeting, sequencing, and follow-up discipline work together to improve outbound results.",
      },
      {
        subtitle: "Outbound Programs Can Scale Without Losing Control",
        paragraph:
          "Templates, sequence tracking, and campaign-level reporting let teams increase outreach volume while still spotting which messages, audiences, and owners are producing real pipeline. Growth often creates complexity, and complexity can weaken outbound quality if systems are loose. Orbileads helps teams keep standards in place while still increasing volume. That makes scaling feel more deliberate and less chaotic. The result is a program that can grow without losing focus.",
        image: orbileadsCampaignImage,
        imageAlt: "Orbileads campaign performance and segment insights",
        mediaCaption:
          "As outbound activity grows, clear reporting helps teams scale with better control over message quality, owner performance, and campaign efficiency.",
      },
      {
        subtitle: "Learning From Campaign Patterns Over Time",
        paragraph:
          "One of the biggest advantages of a structured outbound platform is the ability to learn from patterns over time. Teams can see which audiences respond best, which sequences create meetings, and which messaging angles consistently underperform. Those insights make each new campaign smarter than the last one. Instead of restarting from scratch, outbound teams can build on proven patterns with more confidence. That is how prospecting becomes a repeatable growth engine rather than a one-off effort.",
      },
    ],
  },
  {
    slug: "hrms-onboarding-workflows-for-distributed-teams",
    title: "HRMS Onboarding Workflows: Helping Distributed Teams Start Strong",
    description:
      "See how structured onboarding workflows help HR teams manage tasks, documents, access requests, and employee readiness across locations.",
    department: "Recruitment",
    image: hrmsImage,
    date: "2026-03-18",
    readTime: "4 min read",
    sections: [
      {
        subtitle: "A Consistent First-Day Experience",
        paragraph:
          "Distributed teams often struggle to make onboarding feel organized because tasks are spread across HR, IT, and managers. A structured HRMS onboarding workflow brings those activities into one visible process. New joiners can receive the right documents, approvals, and orientation steps in the correct order. Internal teams also know what is complete and what is still pending before the employee starts. That consistency reduces avoidable confusion during the first week.",
        image: hrmsImage,
        imageAlt: "HRMS onboarding workflow overview",
        mediaCaption:
          "A single onboarding workflow helps HR, managers, and support teams coordinate first-day readiness without relying on scattered checklists.",
      },
      {
        subtitle: "Task Ownership Stays Clear",
        paragraph:
          "When onboarding is tracked inside one system, laptop setup, access provisioning, policy review, and team introductions can all be assigned with clear ownership. That prevents important setup work from being delayed simply because nobody realized it was theirs to complete. It also makes status reviews easier because each requirement is visible in one place. Teams can work in parallel without losing accountability. The result is a smoother experience for everyone involved.",
      },
      {
        subtitle: "Better Visibility Across Locations",
        paragraph:
          "Companies hiring across multiple offices or remote regions need a process that works without in-person handholding. HRMS helps standardize the essential steps while still leaving room for role-based variation. Managers can quickly see whether a new hire is ready to begin or whether access and paperwork are still pending. That visibility supports a faster ramp-up and fewer operational surprises. It is especially useful when several hires start during the same week.",
        video: "https://www.youtube.com/watch?v=4o0XpWUNIxs",
        imageAlt: "HRMS onboarding workflow video",
        mediaCaption:
          "A guided walkthrough can show how onboarding steps move from pre-joining preparation to first-week readiness inside one workflow.",
      },
    ],
  },
  {
    slug: "crms-follow-up-discipline-for-faster-conversions",
    title: "CRMS Follow-Up Discipline: Turning More Conversations Into Closures",
    description:
      "Understand how structured reminders, activity tracking, and deal context help sales teams follow up consistently and close with less leakage.",
    department: "Sales Automation",
    image: crmsPipelineImage,
    date: "2026-03-27",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Follow-Ups Stop Falling Through",
        paragraph:
          "Many sales teams lose deals not because of poor product fit but because momentum fades between conversations. CRMS helps reduce that risk by turning next steps into visible actions instead of relying on memory alone. Reps can see overdue tasks, recent activity, and pending commitments without digging through inboxes. That structure makes follow-up discipline easier to sustain across busy weeks. Consistency often matters as much as persuasion in mid-funnel sales work.",
        image: crmsPipelineImage,
        imageAlt: "CRMS follow-up workflow board",
        mediaCaption:
          "When next actions and due dates stay attached to each deal, teams can maintain pipeline momentum with less manual tracking.",
      },
      {
        subtitle: "Managers Can Coach Earlier",
        paragraph:
          "A shared follow-up history gives managers a better view into where deals are slipping and where support is needed. They can spot long response gaps, unclear next steps, or deals that have stalled after a proposal. That makes coaching more timely and more specific. Instead of reacting after a quarter is missed, leaders can guide better habits while opportunities are still active. This creates a healthier sales rhythm overall.",
      },
      {
        subtitle: "More Reliable Pipeline Movement",
        paragraph:
          "When each stage has expected actions and timing, pipeline reviews become easier to trust. Teams can tell the difference between active opportunities and deals that only appear healthy on paper. That clarity improves forecasting and helps sales operations identify where process improvement is needed. Strong follow-up discipline does not just help individual reps. It improves the quality of the whole revenue pipeline.",
        image: crmsImage,
        imageAlt: "CRMS opportunity overview",
        mediaCaption:
          "Healthy pipeline movement depends on visible follow-ups, clear stage criteria, and a stronger record of what should happen next.",
      },
    ],
  },
  {
    slug: "orbileads-segmentation-strategies-for-better-outbound",
    title: "Orbileads Segmentation Strategies: Building Better Outbound Lists",
    description:
      "Learn why stronger audience segmentation improves outreach quality, reply rates, and campaign learnings for outbound growth teams.",
    department: "Lead Generation",
    image: orbileadsCampaignImage,
    date: "2026-04-01",
    readTime: "4 min read",
    sections: [
      {
        subtitle: "Segmentation Improves Message Fit",
        paragraph:
          "Outbound performance usually improves when teams stop treating every prospect as part of the same list. Orbileads supports more focused segmentation by industry, company size, use case, and buyer signals. That gives teams a better foundation for writing messages that feel relevant instead of generic. It also helps campaigns stay more measurable because each audience group has a clearer purpose. Better fit is often the starting point for better replies.",
        image: orbileadsCampaignImage,
        imageAlt: "Orbileads audience segmentation dashboard",
        mediaCaption:
          "Segmentation works best when list criteria and campaign intent stay visible together, making audience quality easier to evaluate.",
      },
      {
        subtitle: "Testing Gets Smarter",
        paragraph:
          "When segments are clearly defined, message experiments become much easier to interpret. Teams can compare one audience against another without mixing too many variables at once. That makes reply quality, meeting rates, and conversion outcomes more meaningful. Instead of guessing why a campaign performed well, outbound teams can identify whether targeting or messaging made the difference. Those learnings compound over time.",
      },
      {
        subtitle: "Campaigns Become Easier to Scale",
        paragraph:
          "A well-segmented outbound motion is easier to expand because new lists and sequences can build on patterns that already worked. Teams can preserve quality while increasing volume, which is difficult when targeting rules are loose. Orbileads gives growth teams a better way to keep that structure in place as more campaigns launch. That balance between control and scale is what turns outbound into a repeatable system. It also makes collaboration between SDRs and marketing more productive.",
        video: "https://www.youtube.com/watch?v=ktbXZ-6ZXZk",
        imageAlt: "Orbileads segmentation strategy video",
        mediaCaption:
          "A short campaign explainer can show how segmentation rules influence list quality, outreach relevance, and reporting clarity.",
      },
    ],
  },
  {
    slug: "hrms-attendance-visibility-for-growing-teams",
    title: "HRMS Attendance Insights: Smarter Workforce Tracking for Scaling Teams",
    description:
      "Explore how HRMS attendance workflows help teams monitor shifts, absenteeism, and daily workforce trends with less manual follow-up.",
    department: "Recruitment",
    image: hrmsImage,
    date: "2026-04-03",
    readTime: "4 min read",
    sections: [
      {
        subtitle: "Centralized Attendance Records",
        paragraph:
          "Attendance data becomes more useful when it is visible in one place instead of being split between spreadsheets, chats, and manual logs. HRMS gives teams a clearer way to review presence, exceptions, and late arrivals without spending hours reconciling data. Managers can respond more quickly to repeated patterns and support staff before small issues turn into larger operational problems.",
        image: hrmsImage,
        imageAlt: "HRMS attendance tracking dashboard",
        mediaCaption:
          "A shared attendance dashboard helps HR and managers review daily presence, exceptions, and staffing trends from one place.",
      },
      {
        subtitle: "Better Daily Planning",
        paragraph:
          "When attendance status is visible early, shift leads and managers can make faster coverage decisions. That helps teams keep operations stable even when schedules change at short notice.",
      },
      {
        subtitle: "Stronger Workforce Reporting",
        paragraph:
          "Over time, attendance records also support better workforce planning by showing absence trends, recurring issues, and department-level patterns that need attention.",
      },
    ],
  },
  {
    slug: "crms-sales-pipeline-hygiene-for-better-forecasting",
    title: "CRMS Forecast Readiness: How Cleaner Pipelines Create Better Revenue Signals",
    description:
      "See how disciplined pipeline updates, cleaner deal stages, and clearer ownership help sales leaders forecast with more confidence.",
    department: "Sales Automation",
    image: crmsImage,
    date: "2026-04-04",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Accurate Stages Matter",
        paragraph:
          "Forecasting breaks down when deals sit in the wrong stage for too long. CRMS helps teams keep deal movement more realistic by attaching clear expectations and ownership to each stage. That makes forecast reviews more useful because the pipeline reflects actual buying progress instead of best-case assumptions.",
        image: crmsImage,
        imageAlt: "CRMS deal stage and forecast view",
        mediaCaption:
          "Clear deal stages make it easier to separate real revenue opportunities from stalled pipeline noise.",
      },
      {
        subtitle: "Managers Spot Risk Earlier",
        paragraph:
          "A cleaner pipeline helps managers identify stalled opportunities, missing next steps, and inconsistent rep habits before quarter-end pressure builds.",
      },
      {
        subtitle: "Forecast Meetings Improve",
        paragraph:
          "When updates are disciplined, forecast conversations become more strategic and less about chasing status corrections during the meeting itself.",
      },
    ],
  },
  {
    slug: "orbileads-reply-management-for-outbound-teams",
    title: "Orbileads Reply Workflows: Turning First Responses Into Real Opportunities",
    description:
      "Learn how structured reply handling helps outbound teams qualify interest faster and avoid losing warm conversations.",
    department: "Lead Generation",
    image: orbileadsImage,
    date: "2026-04-05",
    readTime: "4 min read",
    sections: [
      {
        subtitle: "Replies Need Fast Triage",
        paragraph:
          "The first reply in an outbound sequence often determines whether a prospect moves forward or disappears. Orbileads helps teams keep responses organized so positive signals, objections, and follow-up requests are easier to route. That speed matters because warm interest cools quickly when inboxes become messy.",
        image: orbileadsImage,
        imageAlt: "Orbileads reply management view",
        mediaCaption:
          "Reply organization helps outbound teams separate warm leads, objections, and dead-end conversations without delay.",
      },
      {
        subtitle: "Qualification Gets Easier",
        paragraph:
          "With cleaner reply tracking, teams can identify intent faster and decide which conversations need meetings, nurturing, or a different outreach angle.",
      },
      {
        subtitle: "Momentum Stays Stronger",
        paragraph:
          "A more structured response workflow reduces leakage after initial engagement and helps more replies turn into real sales conversations.",
      },
    ],
  },
  {
    slug: "hrms-leave-management-with-less-admin-overhead",
    title: "HRMS Leave Operations: Faster Approvals With Less HR Admin Overhead",
    description:
      "Understand how structured leave workflows help HR teams manage approvals, balances, and employee requests with less confusion.",
    department: "Recruitment",
    image: hrmsImage,
    date: "2026-04-06",
    readTime: "4 min read",
    sections: [
      {
        subtitle: "Requests Become Easier to Track",
        paragraph:
          "Leave management becomes much smoother when requests, balances, and approval status are all visible in one workflow. HRMS helps teams reduce back-and-forth by keeping request history and policy alignment attached to the same record. That makes it easier for both employees and managers to understand what is pending and what has already been approved.",
        image: hrmsImage,
        imageAlt: "HRMS leave management overview",
        mediaCaption:
          "A structured leave workflow helps teams review balances, request dates, and approval status without manual checking.",
      },
      {
        subtitle: "Managers Make Faster Decisions",
        paragraph:
          "When calendars and balances are easy to review, approvals become quicker and less dependent on private spreadsheets or message threads.",
      },
      {
        subtitle: "Policy Compliance Improves",
        paragraph:
          "Clear rules and centralized records help HR teams apply leave policies more consistently across departments and locations.",
      },
    ],
  },
  {
    slug: "crms-customer-history-for-better-account-handovers",
    title: "CRMS Account Handover History: Keeping Sales Context Intact Across Teams",
    description:
      "Discover how shared customer timelines make account transitions smoother between SDRs, account executives, and managers.",
    department: "Sales Automation",
    image: crmsPipelineImage,
    date: "2026-04-07",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Context Should Travel With the Account",
        paragraph:
          "Handovers are more effective when deal history, notes, and next steps stay attached to the same customer record. CRMS gives sales teams a better way to transfer ownership without losing important context. That helps prospects avoid repeating themselves and allows the next rep to continue the conversation with more confidence.",
        image: crmsPipelineImage,
        imageAlt: "CRMS customer history and handover workflow",
        mediaCaption:
          "Shared customer history helps teams manage account transitions with less information loss and less friction for prospects.",
      },
      {
        subtitle: "Internal Coordination Improves",
        paragraph:
          "A visible account timeline helps managers and reps align around what has already happened, what was promised, and what should happen next.",
      },
      {
        subtitle: "Customer Experience Feels Smoother",
        paragraph:
          "Better handovers reduce confusion during ownership changes and make the relationship feel more professional from the buyer's perspective.",
      },
    ],
  },
  {
    slug: "orbileads-sequence-performance-insights-for-better-campaigns",
    title: "Orbileads Sequence Analytics: Finding the Outreach Patterns That Actually Convert",
    description:
      "See how campaign sequence reporting helps teams refine messaging, compare variants, and improve outbound performance over time.",
    department: "Lead Generation",
    image: orbileadsCampaignImage,
    date: "2026-04-08",
    readTime: "4 min read",
    featured: true,
    sections: [
      {
        subtitle: "Sequence Data Creates Better Campaign Decisions",
        paragraph:
          "Outbound teams improve faster when they can compare sequence performance with more clarity. Orbileads helps teams review opens, replies, and qualification outcomes across different message flows so the next campaign is based on evidence instead of instinct. That turns outbound iteration into a more repeatable process.",
        image: orbileadsCampaignImage,
        imageAlt: "Orbileads sequence performance dashboard",
        mediaCaption:
          "Sequence-level reporting helps teams compare which outreach patterns create replies, meetings, and stronger qualification outcomes.",
      },
      {
        subtitle: "Messaging Tests Become More Useful",
        paragraph:
          "When sequence reporting is structured well, teams can tell whether better outcomes came from targeting, timing, or message construction.",
      },
      {
        subtitle: "Campaign Learning Compounds",
        paragraph:
          "Over time, reporting on sequence performance helps outbound teams scale what works and retire patterns that no longer create quality pipeline.",
      },
    ],
  },
];

export const blogIndex = mockBlogPosts.map((post) => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  date: post.date,
  readTime: post.readTime,
  category: post.department,
  featured: Boolean(post.featured),
}));
