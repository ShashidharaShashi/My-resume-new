import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ContactInfo, ExperienceItem, SkillCategory, ProjectItem, AwardItem, EducationItem } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor(private http: HttpClient) {}

  public calculateYearsOfExperience(startDateStr: string = '2019-08-01'): string {
    const startDate = new Date(startDateStr);
    const now = new Date();
    const diffInMs = now.getTime() - startDate.getTime();
    const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return years.toFixed(1);
  }

  get yearsOfExp(): string {
    return this.calculateYearsOfExperience('2019-08-01');
  }

  get contactData(): ContactInfo {
    return {
      name: 'Shashidhara H V',
      title: 'Senior Software Engineer (Full Stack Java Developer)',
      email: 'hvshashidhar@gmail.com',
      phone: '+91 7676215649',
      linkedin: 'https://linkedin.com/in/shashidhara-h-v-465b7116b',
      location: 'Bangalore / Mysore, India',
      experienceYears: Number(this.yearsOfExp),
    };
  }

  get summaryText(): string {
    return `Full Stack Java Developer with ${this.yearsOfExp} years of experience architecting and scaling distributed applications. Expertise in backend system design, performance tuning, and modernizing legacy infrastructures into cloud-native microservices. Proven track record of optimizing heavy data pipelines, implementing enterprise security architectures, and delivering high-performance solutions recognized by multiple internal awards.`;
  }

  get experienceData(): ExperienceItem[] {
    return [
      {
        id: 'qualcomm',
        company: 'Qualcomm India Pvt. Ltd.',
        role: 'Senior Software Developer',
        period: 'Apr 2022 - Present',
        location: 'Bangalore, India',
        description: [
          'Architected and led the complete modernization of legacy FTP file transfer infrastructure into a high-throughput, cloud-native Kubernetes (EKS) batch sync framework.',
          'Engineered reactive Java/Spring Boot microservices processing over 100M+ files across global semiconductor fabrication data centers with sub-second latency.',
          'Implemented Zero Trust Identity-Aware Proxy (IAP) gateway integrating OAuth2/OIDC, reducing unauthenticated API surface area by 100%.',
          'Optimized distributed PostgreSQL/Oracle database queries, cutting batch indexing job execution time from 45 minutes down to 4.5 minutes (90% performance boost).',
          'Honored with Qualcomm internal recognition awards (QSparkler & QAchiever) for technical excellence, proactive problem-solving, and cross-team leadership.'
        ],
        skills: ['Java 17', 'Spring Boot 3', 'Kubernetes (EKS)', 'Microservices', 'Zero Trust / IAP', 'PostgreSQL', 'Docker', 'REST / gRPC'],
        highlights: [
          'Modernized 100M+ file transfer system to K8s batch framework',
          'Cut database indexing time from 45m to 4.5m (90% reduction)',
          'Won QSparkler & QAchiever internal excellence awards'
        ]
      },
      {
        id: 'heraizen',
        company: 'Heraizen Technologies Pvt. Ltd.',
        role: 'Software Engineer',
        period: 'Jul 2019 - Feb 2022',
        location: 'Bangalore, India',
        description: [
          'Developed end-to-end full stack web applications using Java, Spring Boot, Hibernate, and Angular/React for higher education ERP systems.',
          'Designed relational database schemas, RESTful APIs, and asynchronous message queues for student lifecycle management modules.',
          'Integrated third-party payment gateways, SMS notification webhooks, and automated PDF invoice generation utilities.',
          'Collaborated in Agile/Scrum teams to perform code reviews, unit testing (JUnit/Mockito), and CI/CD deployment pipelines on AWS EC2.'
        ],
        skills: ['Java 8/11', 'Spring Boot', 'Hibernate / JPA', 'Angular', 'REST APIs', 'MySQL', 'AWS EC2', 'Git / Jenkins'],
        highlights: [
          'Built enterprise ERP modules handling 50k+ active users',
          'Integrated payment webhooks and automated reporting'
        ]
      }
    ];
  }

  get skillCategories(): SkillCategory[] {
    return [
      {
        title: 'Backend & Core Systems',
        skills: [
          { name: 'Java 17 / 21', level: 95, category: 'Backend', featured: true },
          { name: 'Spring Boot 3 / Spring Cloud', level: 95, category: 'Backend', featured: true },
          { name: 'Microservices Architecture', level: 92, category: 'Backend', featured: true },
          { name: 'REST APIs & gRPC', level: 90, category: 'Backend' },
          { name: 'Hibernate / JPA / Spring Data', level: 90, category: 'Backend' },
          { name: 'Multithreading & Concurrency', level: 88, category: 'Backend' },
          { name: 'Performance Tuning & Profiling', level: 85, category: 'Backend' }
        ]
      },
      {
        title: 'Cloud & Infrastructure',
        skills: [
          { name: 'Kubernetes (EKS / Helm)', level: 90, category: 'DevOps', featured: true },
          { name: 'Docker / Containerization', level: 92, category: 'DevOps', featured: true },
          { name: 'AWS (EC2, S3, IAM, EKS)', level: 85, category: 'DevOps' },
          { name: 'CI/CD Pipelines (Jenkins / GitHub Actions)', level: 88, category: 'DevOps' },
          { name: 'Zero Trust & IAP Security', level: 85, category: 'DevOps' }
        ]
      },
      {
        title: 'Databases & Caching',
        skills: [
          { name: 'PostgreSQL', level: 90, category: 'Database', featured: true },
          { name: 'Oracle DB', level: 85, category: 'Database' },
          { name: 'MySQL', level: 88, category: 'Database' },
          { name: 'Redis Caching', level: 82, category: 'Database' }
        ]
      },
      {
        title: 'Frontend & Tools',
        skills: [
          { name: 'Angular / TypeScript', level: 85, category: 'Frontend', featured: true },
          { name: 'React / HTML5 / CSS3 / Tailwind', level: 80, category: 'Frontend' },
          { name: 'Git / JIRA / Maven / Gradle', level: 92, category: 'Tools' },
          { name: 'JUnit / Mockito / Postman', level: 90, category: 'Tools' }
        ]
      }
    ];
  }

  get projectsData(): ProjectItem[] {
    return [
      {
        id: 'k8s-sync',
        title: 'Kubernetes FTP Batch File Synchronization System',
        category: 'Distributed Systems & Cloud',
        period: '2023 - 2024',
        description: 'Re-architected Qualcomm’s legacy file transfer pipeline into a resilient, event-driven Kubernetes batch framework capable of syncing 100M+ high-volume semiconductor logs.',
        impact: 'Reduced sync latency by 75% and eliminated single-point-of-failure downtimes.',
        techStack: ['Java 17', 'Spring Boot', 'Kubernetes EKS', 'Docker', 'PostgreSQL', 'Redis']
      },
      {
        id: 'iap-gateway',
        title: 'Zero Trust Identity-Aware Proxy (IAP) Gateway',
        category: 'Enterprise Security',
        period: '2022 - 2023',
        description: 'Designed an enterprise API Gateway with granular OAuth2/OIDC token validation, RBAC, and rate limiting to enforce Zero Trust security across internal microservices.',
        impact: 'Secured 40+ internal microservices with 100% policy compliance.',
        techStack: ['Spring Cloud Gateway', 'OAuth2 / OIDC', 'Java', 'Docker', 'AWS']
      },
      {
        id: 'db-optimizer',
        title: 'Database Query & Indexing Optimization Framework',
        category: 'Database & Performance Tuning',
        period: '2023',
        description: 'Conducted deep execution plan analysis and index restructuring on large-scale PostgreSQL and Oracle database clusters serving manufacturing telemetry.',
        impact: 'Cut query response time from 45 mins to 4.5 mins (90% speedup).',
        techStack: ['PostgreSQL', 'Oracle DB', 'Spring Data JPA', 'JProfiler']
      }
    ];
  }

  get awardsData(): AwardItem[] {
    return [
      {
        id: 'qsparkler',
        title: 'QSparkler Award',
        issuer: 'Qualcomm',
        year: '2023',
        description: 'Awarded for exceptional contribution in modernizing legacy batch pipelines into cloud-native microservices.',
        projectsInvolved: ['Kubernetes FTP Sync Engine', 'System Performance Optimization']
      },
      {
        id: 'qachiever',
        title: 'QAchiever Award',
        issuer: 'Qualcomm',
        year: '2022',
        description: 'Recognized for swift execution, technical rigor, and zero-downtime deployment of enterprise security gateways.',
        projectsInvolved: ['Zero Trust IAP Gateway', 'API Infrastructure Modernization']
      }
    ];
  }

  get educationData(): EducationItem[] {
    return [
      {
        institution: 'Sri Jayachamarajendra College of Engineering (SJCE), Mysore',
        degree: 'Bachelor of Engineering (B.E.)',
        field: 'Industrial & Production Engineering',
        year: '2015 - 2019',
        location: 'Mysore, Karnataka, India'
      }
    ];
  }

  askAiAssistant(message: string): Observable<string> {
    return this.http.post<{ response: string }>('/api/chat', { message }).pipe(
      map(res => res.response || `Shashidhara H V is a Senior Software Engineer with ${this.yearsOfExp} years of full stack Java experience. Email: hvshashidhar@gmail.com`),
      catchError(() => of(`Shashidhara H V is a Senior Software Engineer with ${this.yearsOfExp} years of full stack Java experience (Java, Spring Boot, Microservices, Kubernetes). Contact him at hvshashidhar@gmail.com!`))
    );
  }
}
