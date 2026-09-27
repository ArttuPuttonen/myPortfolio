// The CV content. The Home page, the About page and the PDF CV
// (`npm run cv`) are all built from this file, so edit it here only.
//
// Dates are "YYYY-MM"; leave `to` out for things that are still going on.
// `minor: true` keeps an entry off the Home page (it still shows on About and
// in the PDF). `project` links to a case study on the Work page.

export const headline = "AI and automation developer";

export const summary =
  "Developer building AI agents, n8n automations and full-stack web apps. Bachelor of Engineering in ICT from Tampere University of Applied Sciences, 2026. Co-founder and CEO of Kuutiostore, an online store for speedcubers.";

export const story = [
  "I'm Arttu, a developer from Finland. I build AI agents, workflow automations and the web apps around them.",
  "I graduated from Tampere University of Applied Sciences in 2026 with a degree in ICT, majoring in software engineering. I started out studying automation technology at Tampere University, but after a year I knew I wanted to build software, so I switched.",
  "Since February 2026 I've worked with Rascal Company as their AI and automation developer, on contract through my own business. Before that I did a full-stack internship in Málaga, and since 2022 I've run Kuutiostore, an online store for speedcubers, with a friend. Running a small company taught me more about what software is for than any course did.",
];

export const experience = [
  {
    title: "AI and automation developer",
    org: "Rascal Company",
    from: "2026-02",
    bullets: [
      "AI features and n8n workflow automations for the Rascal AI platform",
      "Contract work through my own business",
    ],
  },
  {
    title: "Web developer intern",
    org: "South Tours, Málaga",
    from: "2025-05",
    to: "2025-08",
    project: "south-tours",
    bullets: [
      "Full-stack development in an international team, working in English",
      "Internal booking and finance system: React, JavaScript, Node.js, PHP, MySQL",
      "API integrations bringing data from several sources into one platform",
    ],
  },
  {
    title: "Secretary and web developer",
    org: "Speedcubing Finland ry",
    from: "2025-01",
    project: "speedcubing-finland",
    bullets: [
      "Built and maintain the association's website and membership system: React, Node.js, Express, MySQL",
      "Board secretary",
    ],
  },
  {
    title: "Co-founder and CEO",
    org: "Kuutiostore Oy",
    from: "2022-04",
    project: "kuutiostore",
    bullets: [
      "Online store for speedcubing puzzles, run with a co-founder",
      "Website, marketing and product content, including YouTube tutorials with 100k+ views",
      "Built a Python bot that flags stalled parcels in Matkahuolto's network",
      "Customer service and day-to-day operations",
    ],
  },
  {
    title: "Race track worker",
    org: "Formula Center Helsinki and VM-karting Vantaa",
    from: "2021-06",
    to: "2022-07",
    minor: true,
    bullets: ["Customer service, driving instruction and group events"],
  },
];

export const education = [
  {
    title: "Bachelor of Engineering, ICT",
    org: "Tampere University of Applied Sciences",
    from: "2023-08",
    to: "2026-06",
    project: "traffic-sign-cnn",
    bullets: [
      "Major in software engineering",
      "Thesis: comparing CNN architectures for traffic sign recognition (TensorFlow, FastAPI, React)",
    ],
  },
  {
    title: "Automation technology",
    org: "Tampere University",
    from: "2022-08",
    to: "2023-06",
    bullets: ["One year of studies before switching to ICT"],
  },
  {
    title: "Upper secondary school",
    org: "Tikkurilan lukio",
    from: "2019-08",
    to: "2022-06",
    minor: true,
    bullets: [],
  },
];

// Grouped by what the tools are for; AI first.
export const skills = [
  {
    group: "AI",
    items: ["LLM apps and agents (Claude, OpenAI)", "Tool use and MCP servers", "Retrieval over your own data", "Prompt design"],
  },
  {
    group: "Automation",
    items: ["n8n", "API integrations and webhooks", "Scheduled jobs and alerts"],
  },
  {
    group: "Web",
    items: ["React, Next.js, Tailwind CSS", "Node.js, Express, Python, FastAPI", "Supabase, MySQL", "Vercel, Docker, Stripe"],
  },
  {
    group: "Tools",
    items: ["Claude Code", "Cursor", "Git and GitHub"],
  },
];

export const languages = [
  { name: "Finnish", level: "native" },
  { name: "English", level: "fluent (C1)" },
  { name: "Spanish", level: "intermediate (B1)" },
];

export const interests = ["Speedcubing: 135 competitions, 205 podiums", "Climbing", "Guitar"];
