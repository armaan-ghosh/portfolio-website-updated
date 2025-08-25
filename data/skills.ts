// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'ML/Data'
  | 'Cloud/DevOps' 
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript',  category: 'Languages', logoKey: 'typescript' },
    { name: 'Python',      category: 'Languages', logoKey: 'python' },
    { name: 'C++',         category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java',        category: 'Languages', logoKey: 'java' },
    { name: 'Kotlin',      category: 'Languages', logoKey: 'kotlin' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js',     category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Next.js',      category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Express.js',   category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Flask',        category: 'Frameworks/Libraries', logoKey: 'flask' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'Android SDK',  category: 'Frameworks/Libraries', logoKey: 'android' },
  ],
  'ML/Data': [
    { name: 'TensorFlow',        category: 'ML/Data', logoKey: 'tensorflow' },
    { name: 'scikit-learn',      category: 'ML/Data', logoKey: 'python' },
    { name: 'pandas',            category: 'ML/Data', logoKey: 'pandas' },
    { name: 'Data Visualization',category: 'ML/Data', logoKey: 'jupyter' },
  ],
  'Cloud/DevOps': [
    { name: 'AWS',      category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'MongoDB',  category: 'Cloud/DevOps', logoKey: 'mongodb' },
    { name: 'MySQL',    category: 'Cloud/DevOps', logoKey: 'mysql' },
  ],
  'Concepts': [
    { name: 'System Design',               category: 'Concepts', logoKey: 'github' },
    { name: 'Data Structures & Algorithms',category: 'Concepts', logoKey: 'github' },
    { name: 'API Design',                  category: 'Concepts', logoKey: 'swagger' },
    { name: 'Microservices',               category: 'Concepts', logoKey: 'docker' },
    { name: 'Security',                    category: 'Concepts', logoKey: 'github' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};