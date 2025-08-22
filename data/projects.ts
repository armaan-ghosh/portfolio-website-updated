export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "hackademics",
    title: "Hackademics",
    description: "AI-powered study tool that converts files/audio into ready-to-use Anki flashcards.",
    longDescription: "Built at Hack the North ’24. Processes PDFs, Word, PPT, text, and audio to generate Q/A cards quickly using LLM + speech-to-text, with a React/Next.js front end.",
    technologies: ["React", "Next.js", "Cohere API", "AssemblyAI", "Python", "Flask"],
    achievements: [
      "Automated flashcard creation ~60× faster than manual workflows.",
      "Generated 200+ Q/A pairs during demos with strong user/judge interest."
    ],
    image: "/images/projects/hackademics/hackademics.jpg",
    featured: true
  },
  {
    id: "budgetroyale",
    title: "BudgetRoyale",
    description: "Gamified personal finance tracker for students.",
    longDescription: "React + Firebase app that prioritizes expenses and helps students cut waste via simple goals and feedback loops.",
    technologies: ["React", "Firebase", "TailwindCSS"],
    achievements: [
      "Early cohort cut unnecessary expenses by ~20%/month.",
      "Achieved ~30% engagement lift in month one."
    ],
    image: "/images/projects/budgetroyale/budgetroyale.jpg",
    featured: true
  },
  {
    id: "ai-career-advisor",
    title: "AI Career Advisor",
    description: "Computer-vision-assisted career feedback and project suggestions.",
    longDescription: "Prototype using OpenCV + LLM to analyze resumes/roles and recommend skill gaps, projects, and action plans.",
    technologies: ["OpenCV", "OpenAI API", "Node.js", "TypeScript"],
    achievements: [
      "Created structured feedback that guided users toward specific, shippable projects.",
      "Outlined roadmap for portfolio upgrades based on target roles."
    ],
    image: "/images/projects/ai-career-advisor/ai-career-advisor.jpg",
    featured: false
  },
  {
    id: "claims-automation-api",
    title: "Claims Automation API",
    description: "TypeScript/Node.js service that automates claims ingestion with validation, enrichment, and persistence.",
    longDescription: "Internal service with Swagger docs and 200+ Jest tests; integrates with Power Automate and MySQL to streamline ingestion.",
    technologies: ["TypeScript", "Node.js", "MySQL", "Jest", "OpenAPI"],
    achievements: [
      "Reduced processing time from ~2 hours to <1 minute.",
      "Cut data errors by ~40% through schema validation and enrichment."
    ],
    image: "/images/projects/claims-automation/claims-automation.jpg",
    featured: true
  },
  {
    id: "worldcup-predictor",
    title: "Football World Cup Predictor",
    description: "Match outcome model with recency and knockout-phase weighting.",
    longDescription: "TensorFlow model trained on multi-season datasets; aims for ~70% accuracy with live API integration for fixtures/results.",
    technologies: ["Python", "TensorFlow", "pandas", "scikit-learn", "APIs"],
    achievements: [
      "Implemented recency weighting on last ~20 matches.",
      "Added knockout-round emphasis for high-stakes accuracy."
    ],
    image: "/images/projects/worldcup-predictor/worldcup-predictor.jpg",
    featured: false
  },
  {
    id: "pantrychef",
    title: "PantryChef",
    description: "AI pantry management + recipe suggestions.",
    longDescription: "Next.js + Firebase app using Google Vision for item recognition and GPT for recipe ideas.",
    technologies: ["Next.js", "Firebase", "TailwindCSS", "Google Vision API", "OpenAI"],
    achievements: [
      "Improved item recognition accuracy in tests; boosted engagement with quick-add workflows."
    ],
    image: "/images/projects/pantrychef/pantrychef.jpg",
    featured: false
  }
];