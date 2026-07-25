import { ContactInfo, ExperienceItem, SkillCategory, ProjectItem, AwardItem, EducationItem } from '../types';

export function calculateYearsOfExperience(startDateStr: string = '2019-08-01'): string {
  const startDate = new Date(startDateStr);
  const now = new Date();
  const diffInMs = now.getTime() - startDate.getTime();
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
}

export const yearsOfExp = calculateYearsOfExperience('2019-08-01');

export const contactData: ContactInfo = {
  name: 'Shashidhara H V',
  title: 'Senior Software Engineer (Full Stack Java Developer)',
  email: 'hvshashidhar@gmail.com',
  phone: '+91 7676215649',
  linkedin: 'https://linkedin.com/in/shashidhara-h-v-465b7116b',
  location: 'Bangalore / Mysore, India',
  experienceYears: Number(yearsOfExp),
};

export const summaryText = `Full Stack Java Developer with ${yearsOfExp} years of experience architecting and scaling distributed applications. Expertise in backend system design, performance tuning, and modernizing legacy infrastructures into cloud-native microservices. Proven track record of optimizing heavy data pipelines, implementing enterprise security architectures, and delivering high-performance solutions recognized by multiple internal awards.`;

export const coreMetrics = [
  {
    id: 'ftp-sync',
    value: '24h → 1h',
    label: 'FTP File Sync Time',
    detail: 'Slashed sync time for 100M+ FTP files on Kubernetes worker pods',
    percent: '95.8% reduction',
  },
  {
    id: 'data-grid',
    value: '3m → 18s',
    label: 'Data Grid Load Time',
    detail: 'Optimized heavily joined ECCN data grid with caching & TIBCO messaging',
    percent: '90% speedup',
  },
  {
    id: 'exam-seating',
    value: '2d → 2m',
    label: 'Exam Seating Automation',
    detail: 'Automated administrative seating allocation for 10k+ students',
    percent: '99.9% faster',
  },
  {
    id: 'employee-records',
    value: '52,000+',
    label: 'Records Processed',
    detail: 'High-throughput multithreaded processing engine completed under 2 minutes',
    percent: 'Real-time throughput',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend & Architecture',
    iconName: 'Server',
    skills: [
      { name: 'Java', level: 'Expert', featured: true, description: 'Core Java, Multithreading, Memory Optimization' },
      { name: 'Spring Boot', level: 'Expert', featured: true, description: 'REST, Auto-config, Spring Security, Actuator' },
      { name: 'Microservices', level: 'Expert', featured: true, description: 'Distributed System Design, Service Mesh, REST APIs' },
      { name: 'Spring Data JPA / Hibernate', level: 'Expert', featured: true, description: 'ORMs, Batch processing, Query tuning' },
      { name: 'Multithreading & Concurrency', level: 'Expert', featured: true, description: 'Java Executor framework, Parallel streams' },
      { name: 'System Design & Data Structures', level: 'Expert', featured: true, description: 'Scalable architecture, Clean Architecture' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    iconName: 'Cloud',
    skills: [
      { name: 'Kubernetes (K8s)', level: 'Expert', featured: true, description: 'EKS, Pod auto-scaling, Distributed job scheduling' },
      { name: 'AWS Cloud', level: 'Expert', featured: true, description: 'AWS EKS, S3, EC2, RDS, Lambda' },
      { name: 'Docker', level: 'Expert', featured: true, description: 'Multi-stage builds, Containerization' },
      { name: 'Jenkins & CI/CD', level: 'Advanced', featured: true, description: 'Automated pipelines, WAR packaging, Blue-Green deploy' },
      { name: 'Git & Maven', level: 'Expert', description: 'Version control, Multi-module Maven builds' },
    ],
  },
  {
    name: 'Messaging & Databases',
    iconName: 'Database',
    skills: [
      { name: 'Apache Kafka', level: 'Advanced', featured: true, description: 'Event streaming, Distributed logs, Consumer groups' },
      { name: 'RabbitMQ & TIBCO', level: 'Advanced', description: 'Enterprise messaging queues, Pub-Sub' },
      { name: 'PostgreSQL & MySQL', level: 'Expert', featured: true, description: 'Complex joins, Index tuning, Partitioning' },
      { name: 'MongoDB', level: 'Advanced', description: 'Document stores, Aggregation pipelines' },
    ],
  },
  {
    name: 'Frontend & Web',
    iconName: 'Code',
    skills: [
      { name: 'Angular & AngularJS', level: 'Advanced', featured: true, description: 'Modern Angular stacks, Monolith modernization' },
      { name: 'TypeScript', level: 'Advanced', featured: true, description: 'Strict typing, Modern ESNext syntax' },
      { name: 'HTML5 & CSS3', level: 'Expert', description: 'Responsive design, Flexbox, CSS Grid' },
      { name: 'Bootstrap & Tailwind', level: 'Advanced', description: 'Component styling, Responsive layouts' },
      { name: 'React', level: 'Intermediate', description: 'Modern UI hooks, State management' },
    ],
  },
  {
    name: 'Security & Monitoring',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Zero Trust IAP', level: 'Expert', featured: true, description: 'Identity Aware Proxy, Fine-grained access control' },
      { name: 'SiteMinder & LDAP', level: 'Advanced', description: 'Enterprise IdP, Single Sign-On (SSO)' },
      { name: 'Splunk & CloudWatch', level: 'Expert', featured: true, description: 'Distributed tracing, Log analytics, Alerting' },
      { name: 'JWT & OAuth2', level: 'Expert', description: 'Stateless session tokens, API security' },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'qualcomm',
    role: 'Senior Software Developer',
    company: 'Qualcomm',
    period: 'Apr 2022 - Present',
    location: 'Bangalore, India',
    isCurrent: true,
    summary: 'Lead backend architect and full stack engineer optimizing high-scale data synchronization, enterprise security, and microservices for critical Qualcomm software systems.',
    bulletPoints: [
      'Designed and implemented a distributed, Kubernetes-based batch processing framework to dynamically parallelize the synchronization of 100M+ FTP files across worker pods, slashing execution time from 24+ hours to approximately 1 hour.',
      'Optimized heavily joined data grids for the ECCN application by developing intelligent caching utilities and integrating TIBCO messaging, reducing load times by 90% (from 3 minutes to 18 seconds).',
      'Architected a high-throughput processing pipeline for LCD managing 52,000+ employee records leveraging Java multithreading and batch inserts, reducing processing time to under 2 minutes and automating secure Robocopy file transfers.',
      'Spearheaded the migration of legacy Grails and AngularJS monolithic applications to modern Spring Boot and Angular stacks. Streamlined CI/CD by packaging Angular distributions within Spring Boot WAR files for unified deployment.',
      'Enabled scalable cloud deployment on AWS EKS, and established robust observability across the Kubernetes environment using Splunk and CloudWatch.',
      'Implemented secure enterprise authentication and session management for internal applications leveraging Zero Trust IAP, SiteMinder as an Identity Provider, and LDAP integration.',
      'Developed a real-time Goodies Management System integrated with physical badge readers, effectively eliminating employee queue times during distribution events.',
      'Mentored junior engineers, guiding them on complex system architecture, codebase navigation, and scalable software development best practices.',
    ],
    techStack: [
      'Java 17',
      'Spring Boot',
      'Kubernetes',
      'AWS EKS',
      'Angular',
      'Kafka',
      'TIBCO',
      'Splunk',
      'Zero Trust IAP',
      'PostgreSQL',
      'Docker',
    ],
    keyMetrics: [
      { label: 'FTP Parallel Sync', value: '100M+ files', detail: 'Reduced 24h+ execution down to 1 hour' },
      { label: 'ECCN Load Speedup', value: '90% faster', detail: '3 min grid load reduced to 18 seconds' },
      { label: 'LCD Employee Engine', value: '52k records', detail: 'Batch multithread processing under 2 min' },
    ],
  },
  {
    id: 'heraizen',
    role: 'Software Engineer',
    company: 'Heraizen',
    period: 'Jul 2019 - Feb 2022',
    location: 'Bangalore, India',
    isCurrent: false,
    summary: 'Core full stack engineer responsible for building scalable educational software components, third-party integrations, exam automation algorithms, and payment systems.',
    bulletPoints: [
      'Automated student exam seating allocation by integrating customized Java libraries, drastically reducing administrative processing time from 2 days to 2 minutes.',
      'Integrated Zoom and Moxtra APIs into the core platform, ensuring seamless and highly available online examination environments for over 10,000 students.',
      'Engineered secure payment gateway integrations utilizing PayU and Razorpay, reliably processing exam fee transactions at scale.',
      'Revamped the SGPA/CGPA grading calculation logic, streamlining the results evaluation process and improving overall system processing efficiency by 30%.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Zoom / Moxtra APIs',
      'PayU / Razorpay',
      'REST APIs',
      'Bootstrap',
      'JavaScript',
    ],
    keyMetrics: [
      { label: 'Seating Automation', value: '2 days → 2 mins', detail: 'Automated administrative seating allocation' },
      { label: 'Live Online Exams', value: '10,000+ students', detail: 'High-availability Zoom/Moxtra integration' },
      { label: 'Grading Efficiency', value: '+30% performance', detail: 'Optimized SGPA/CGPA calculation engine' },
    ],
  },
];

export const projectHighlights: ProjectItem[] = [
  {
    id: 'k8s-ftp-sync',
    title: 'Kubernetes Distributed FTP Sync Engine',
    subtitle: 'Massive parallel file synchronization framework',
    category: 'Distributed Systems & Cloud',
    companyName: 'Qualcomm',
    description: 'A cloud-native batch processing system built on Kubernetes to synchronize over 100 million FTP files across distributed worker pods with dynamic job allocation and automated failover.',
    highlights: [
      'Slashing execution time from 24+ hours to ~1 hour (95.8% reduction)',
      'Dynamic workload balancing across Kubernetes worker pods',
      'Built-in fault tolerance and retry mechanisms for high-volume network transfers',
    ],
    techStack: ['Java', 'Kubernetes', 'AWS EKS', 'Docker', 'Spring Boot', 'FTP/SFTP'],
    impactMetric: '100M+ files synced in 1 hour',
  },
  {
    id: 'eccn-data-grid',
    title: 'ECCN Data Grid & Caching Architecture',
    subtitle: 'High-performance query & messaging optimization',
    category: 'Performance Engineering',
    companyName: 'Qualcomm',
    description: 'Redesigned heavy database join operations for the ECCN application using intelligent distributed caching strategies and TIBCO enterprise messaging queues.',
    highlights: [
      'Reduced grid load latency from 3 minutes (180 seconds) down to 18 seconds (90% faster)',
      'Integrated TIBCO event messaging to decouple real-time updates from heavy query execution',
      'Implemented Multi-Level Caching to eliminate repeated database round-trips',
    ],
    techStack: ['Spring Boot', 'PostgreSQL', 'TIBCO Messaging', 'Redis Cache', 'Hibernate'],
    impactMetric: '90% reduction in query latency',
  },
  {
    id: 'genai-hackathon',
    title: 'Gen AI Request Summarization Tool',
    subtitle: 'ECCN AI Hackathon Prototype',
    category: 'AI & Automation',
    companyName: 'Qualcomm (Gen AI Hackathon)',
    description: 'Proposed and prototyped an AI-powered automated request summarization tool to streamline complex engineering workflow reviews.',
    highlights: [
      'Demonstrated 50% reduction in manual review effort',
      'Automated extraction of key technical parameters from lengthy request documents',
      'Compressed 2-week manual review cycles into instant actionable summaries',
    ],
    techStack: ['Generative AI', 'Python / Java Bridge', 'LLM Prompt Engineering', 'Spring Boot'],
    impactMetric: '50% reduction in review effort',
  },
  {
    id: 'goodies-management',
    title: 'Real-Time Goodies & Badge Reader System',
    subtitle: 'Physical hardware badge reader integration',
    category: 'Real-Time Systems',
    companyName: 'Qualcomm',
    description: 'Engineered a real-time event management system integrated with IoT physical RFID badge readers for Qualcomm distribution events.',
    highlights: [
      'Eliminated long employee queue times during distribution events',
      'Instant sub-second badge verification & inventory deduction',
      'Real-time event dashboard for administrators',
    ],
    techStack: ['Java', 'Spring Boot', 'WebSockets', 'Hardware API', 'PostgreSQL'],
    impactMetric: 'Zero queue delay during events',
  },
  {
    id: 'exam-seating-automation',
    title: 'Automated Student Seating Allocation',
    subtitle: 'Algorithmic administrative automation',
    category: 'Algorithms & Automation',
    companyName: 'Heraizen',
    description: 'Created a customized Java graph & constraint-matching algorithm to assign student examination seating, preventing collision and optimizing hall capacity.',
    highlights: [
      'Cut administrative processing time from 2 days to 2 minutes',
      'Enforced exam conflict constraints for 10,000+ students automatically',
      'Exported ready-to-print hall allocation matrices',
    ],
    techStack: ['Java', 'Algorithms', 'Spring Boot', 'MySQL'],
    impactMetric: '2 days → 2 minutes execution',
  },
];

export const awardsData: AwardItem[] = [
  {
    id: 'qsparkler',
    title: 'QSparkler Award',
    issuer: 'Qualcomm',
    badgeType: 'sparkler',
    description: 'Recognized for outstanding technical contributions to ECCN, LCD, and large-scale cloud migration projects at Qualcomm.',
    projectsInvolved: ['ECCN Data Grid Optimization', 'LCD Employee Pipeline', 'AWS Cloud Migration'],
  },
  {
    id: 'qachiever',
    title: 'QAchiever Award',
    issuer: 'Qualcomm',
    badgeType: 'achiever',
    description: 'Awarded for driving continuous innovation, process optimization, and system modernization across core Qualcomm software applications.',
    projectsInvolved: ['Monolith to Microservices Migration', 'Kubernetes FTP Sync Engine', 'Zero Trust Security Integration'],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Industrial & Production Engineering',
    institution: 'Sri Jayachamarajendra College of Engineering (SJCE), Mysore',
    location: 'Mysore, Karnataka, India',
    year: 'Graduated 2019',
  },
];
