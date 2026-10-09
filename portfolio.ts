/**
 * Central portfolio data — Preethi Kanipakam's Portfolio
 * Generated for GitHub / Web Portfolio Integration.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Preethi Kanipakam',
  displayName: 'Preethi Kanipakam',
  firstName: 'PREETHI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A PREETHI ORIGINAL',
  role: 'Backend Developer / Data Analyst',
  tagline: ['Python', 'SQL', 'Power BI', 'AWS', 'Azure'],
  intro:
    'A Chemical Engineering graduate with a strong passion for the IT sector, specializing in Python, SQL, Power BI, Tableau, AWS, and Azure, with a focus on data visualization and backend logic.',
  location: 'Bangalore, Karnataka, India',
  email: 'preethikanipakam506@gmail.com',
  links: {
    linkedin: '',
    github: 'https://github.com/preethi212',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Preethi Kanipakam',
  },
  interests: ['Database Optimization', 'Data Visualization', 'Cloud Services (AWS & Azure)', 'Machine Learning'],
};

export const education = [
  {
    school: 'Sri Venkateswara University College of Engineering',
    place: 'Tirupati, AP',
    degree: 'Bachelor of Technology — Chemical Engineering',
    period: '2021 – 2025',
    score: 'CGPA 6.0',
  },
];

export const experience = [
  {
    company: 'Besant Technologies',
    role: 'Data Analytics Trainee',
    place: 'Bangalore, KA',
    period: 'August 2025 – January 2026',
    points: [
      'Completed intensive training in Data Analytics, mastering SQL query optimization, data transformation, and dashboard creation.',
      'Designed dynamic data visualizations using Power BI and Tableau to uncover key business insights.',
      'Worked on real-world projects analyzing multi-regional sales patterns and structuring web application databases.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'bookmyshow-clone',
    title: 'BookMyShow Clone',
    year: '2026',
    genre: 'Web App • Backend • Database',
    logline: 'A full web application feature clone for browsing movies, scheduling timings, and managing ticket bookings.',
    stack: ['Python', 'JavaScript', 'SQL', 'MySQL', 'HTML', 'CSS'],
    build: [
      'Architected a structured database system storing user profiles, unique user IDs, active bookings, movie schedules, and pricing metrics.',
      'Implemented genre filtering and dynamic ticket price calculation based on user selection and movie showtimes.',
    ],
    features: [
      'Multi-genre movie categorization',
      'Showtime and pricing calculator',
      'User ID and booking tracker',
      'Real-time seating & user booking analytics',
    ],
    metrics: [
      { value: '4-5+', label: 'featured movies rendered' },
      { value: '100%', label: 'accurate price calculations' },
      { value: 'Real-time', label: 'booking tracking' },
    ],
    github: 'https://github.com/preethi212',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'pizza-sales-analytics',
    title: 'Global Pizza Sales Dashboard',
    year: '2025',
    genre: 'Data Analytics • Power BI • SQL',
    logline: 'An interactive analytical dashboard detailing global and regional pizza sales performance across yearly and monthly intervals.',
    stack: ['SQL', 'Power BI', 'Tableau', 'Python'],
    build: [
      'Built custom dashboards detailing multi-country pizza category demand across various regional markets.',
      'Processed sales datasets to extract time-series trends, tracking monthly and yearly revenue distribution.',
    ],
    features: [
      'Country and region-wise drill-down filters',
      'Yearly and monthly sales trend tracking',
      'Best-selling vs. lowest-selling pizza analysis',
      'Dynamic key performance indicator (KPI) metric cards',
    ],
    metrics: [
      { value: 'Multi-Region', label: 'sales analysis' },
      { value: 'Monthly/Yearly', label: 'trend granularity' },
      { value: 'Dynamic', label: 'interactive dashboards' },
    ],
    github: 'https://github.com/preethi212',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'hackerrank-sql',
    title: 'SQL Badges (Beginner & Intermediate)',
    org: 'HackerRank',
    detail: 'Earned certifications in SQL query optimization, joins, aggregations, and subqueries.',
    laurel: 'Verified Skill',
  },
  {
    id: 'hackerrank-python',
    title: 'Python Badge',
    org: 'HackerRank',
    detail: 'Demonstrated mastery in core Python concepts, data structures, and functional logic.',
    laurel: 'Verified Skill',
  },
  {
    id: 'leetcode-python',
    title: '13 Levels Cleared',
    org: 'LeetCode',
    detail: 'Solved foundational logic and algorithmic problem-solving levels using Python.',
    laurel: 'Problem Solver',
  },
  {
    id: 'career-transition',
    title: 'Chemical to IT Transition',
    org: 'Self-Driven / Besant Technologies',
    detail: 'Successfully upskilled in Python, SQL, Power BI, and Cloud platforms from a non-CS background.',
    laurel: 'Milestone',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Besant Technologies', name: 'Data Analytics Training Program', link: '' },
  { issuer: 'HackerRank', name: 'SQL (Beginner & Intermediate)', link: '' },
  { issuer: 'HackerRank', name: 'Python (Beginner)', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming logic',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq', note: 'Primary' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Essentials',
    subtitle: 'Web structures',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    subtitle: 'Visualizations & dashboards',
    skills: [
      { name: 'Power BI', mono: 'Pb', note: 'Focus' },
      { name: 'Tableau', mono: 'Tb' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data querying & relational storage',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'infra',
    title: 'Cloud & Tools',
    subtitle: 'Deployment & version control',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Azure', mono: 'Az' },
      { name: 'Git', mono: 'Gt' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core Concepts',
    subtitle: 'Foundation knowledge',
    skills: [
      { name: 'Data Structures (DSA)', mono: 'Ds' },
      { name: 'Machine Learning Basics', mono: 'Ml' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['BookMyShow Clone', 'HackerRank Python Badge', 'LeetCode 13 Levels'],
  SQL: ['Pizza Sales Analytics', 'HackerRank SQL Badges', 'BookMyShow Clone'],
  'Power BI': ['Global Pizza Sales Dashboard'],
  Tableau: ['Besant Technologies Data Analytics Training'],
  MySQL: ['BookMyShow Clone'],
  AWS: ['Cloud Foundations'],
  Azure: ['Cloud Foundations'],
  JavaScript: ['BookMyShow Clone'],
  HTML: ['BookMyShow Clone'],
  CSS: ['BookMyShow Clone'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Engineering Foundations',
    period: '2021 – 2025',
    synopsis: 'B.Tech in Chemical Engineering at Sri Venkateswara University College of Engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Chemical Engineer',
        description: 'Completed B.Tech in Chemical Engineering from Sri Venkateswara University.',
        tags: ['Chemical Engg', 'SVUCE', 'B.Tech'],
        runtime: '2021 – 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Pivot to IT',
    period: '2025 – 2026',
    synopsis: 'Transitioning to IT through Data Analytics training at Besant Technologies.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Data Analytics Upskilling',
        description: 'Trained in Python, SQL, Power BI, Tableau, AWS, and Azure.',
        tags: ['Besant Tech', 'Data Analytics', 'Python', 'SQL'],
        runtime: 'Aug 2025 – Jan 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description: 'Cleared 13 levels on LeetCode and earned HackerRank SQL & Python badges.',
        tags: ['LeetCode', 'HackerRank', 'Python', 'SQL'],
        runtime: 'Skill Building',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Projects',
    period: '2026',
    synopsis: 'Developing full-stack web applications and analytics dashboards.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'BookMyShow Clone',
        description: 'Engineered a web application for booking movie tickets with dynamic price and slot logic.',
        tags: ['Python', 'SQL', 'JavaScript', 'MySQL'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Pizza Sales Dashboard',
        description: 'Created multi-country visualization dashboards analyzing yearly and monthly pizza trends.',
        tags: ['Power BI', 'SQL', 'Tableau'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Skills', title: 'Python & SQL', detail: 'Core focus for database querying and backend tasks', palette: amber },
  { label: 'Featured Project', title: 'BookMyShow Clone', detail: 'Dynamic user booking & scheduling app', palette: crimson },
  { label: 'Analytics Focus', title: 'Pizza Sales Dashboard', detail: 'Multi-country yearly/monthly trend tracking', palette: ocean },
  { label: 'Visualization Tools', title: 'Power BI & Tableau', detail: 'Trained at Besant Technologies', palette: violet },
  { label: 'Problem Solving', title: 'LeetCode & HackerRank', detail: '13 Levels on LeetCode • HackerRank Badges', palette: jade },
  { label: 'Cloud Tech', title: 'AWS & Azure', detail: 'Familiarity with cloud platform workflows', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Chemical Engineering',
    lines: ['Sri Venkateswara University College of Engineering', '2021 – 2025'],
    chips: ['CGPA 6.0'],
  },
  {
    kicker: 'Skills',
    title: 'SQL & Python First',
    lines: ['Power BI, Tableau · JavaScript, HTML, CSS', 'MySQL, PostgreSQL · AWS, Azure, Git'],
    chips: ['Python', 'SQL', 'Power BI', 'Tableau', 'AWS', 'Azure'],
  },
  {
    kicker: 'Training',
    title: 'Data Analytics Focus',
    lines: ['Besant Technologies · August 2025 – January 2026', 'Data Visualization · Query Optimization · Dashboards'],
  },
  {
    kicker: 'Projects',
    title: 'Built Works',
    lines: ['BookMyShow Clone — Movie booking web app', 'Pizza Sales Dashboard — Global & regional analysis'],
  },
];

export type ProfileId = 'preethi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
