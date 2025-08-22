// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
  {
    id: "shopify-se-intern",
    title: "Incoming Software Engineering Intern",
    company: "Shopify",
    location: "Canada",
    startDate: "September 2025",
    endDate: "December 2025",
    description: "Offer accepted for a Fall 2025 SWE internship.",
    achievements: [
      "Joining the team to build and ship merchant-facing features at scale.",
    ],
    type: "work"
  },
  {
    id: "boxx-cyber-intern",
    title: "Cyber Technology Intern · Data",
    company: "BOXX Insurance",
    location: "Remote (Canada)",
    startDate: "January 2025",
    endDate: "April 2025",
    description: "Automated claims ingestion and improved BI/Q&A accuracy for US datasets.",
    achievements: [
      "Designed a TypeScript/Node.js API to automate claims ingestion from Power Automate to MySQL, cutting processing time from ~2 hours to <1 minute and reducing data errors by ~40%.",
      "Trained Amazon QuickSight Q with synonyms/entities/calculated fields, improving answer accuracy to ~95% on US datasets.",
      "Updated ETL for US home sales migration and collaborated on RDS replica with data masking.",
    ],
    type: "work"
  },
  {
    id: "headstarter-fellow",
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote",
    startDate: "July 2024",
    endDate: "September 2024",
    description: "Built AI apps/APIs with Next.js and LLMs; practiced Agile, CI/CD, and product thinking.",
    achievements: [
      "Shipped 3+ AI apps and APIs using Next.js and OpenAI/Cohere, targeting high response quality and fast UX.",
      "Collaborated with mentors from Amazon, Bloomberg, and Capital One; strengthened CI/CD and code review habits.",
    ],
    type: "work"
  },
  {
    id: "nowfloats-pm",
    title: "Product Management Intern",
    company: "NowFloats Technologies",
    location: "Remote (India)",
    startDate: "May 2024",
    endDate: "August 2024",
    description: "Market research and GTM for MSME marketing automation.",
    achievements: [
      "Synthesized insights from 100+ industry reports; identified 5 key customer segments and market gaps.",
      "Built GTM and pricing proposals; led competitor analysis (e.g., Wati vs AiSensy) to inform roadmap.",
    ],
    type: "work"
  },
  {
    id: "engsoc-fyc-director",
    title: "First Year Conference Director",
    company: "Waterloo Engineering Society",
    location: "Waterloo, ON",
    startDate: "September 2024",
    endDate: "September 2024",
    description: "Directed 3-day conference introducing first-years to clubs and resources.",
    achievements: [
      "Coordinated presenters including the First Year Office; hosted ~1,800 students in a career-fair-style format.",
      "Optimized booth flow and comms to increase student–presenter interactions.",
    ],
    type: "leadership"
  },
  {
    id: "orientation-leader-big",
    title: "Orientation Leader (Big)",
    company: "University of Waterloo",
    location: "Waterloo, ON",
    startDate: "September 2024",
    endDate: "September 2024",
    description: "Mentored incoming engineering students during O-Week.",
    achievements: [
      "Facilitated large-group activities; strengthened communication and team leadership.",
    ],
    type: "leadership"
  }
];
