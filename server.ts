import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy GoogleGenAI initialization
let aiClient: GoogleGenAI | null = null;
function getAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== 'MY_GEMINI_API_KEY') {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
  }
  return aiClient;
}

const startMillis = new Date('2019-08-01').getTime();
const currentMillis = new Date().getTime();
const yearsOfExp = ((currentMillis - startMillis) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

const SYSTEM_PROMPT = `
You are the interactive AI Career Assistant for Shashidhara H V.
Shashidhara H V is a Senior Software Engineer / Full Stack Java Developer with ${yearsOfExp} years of experience (started August 2019).
Current Role: Senior Software Developer at Qualcomm (Apr 2022 - Present).
Previous Role: Software Engineer at Heraizen (Jul 2019 - Feb 2022).
Education: B.E. in Industrial & Production Engineering from SJCE, Mysore (2019).

Key Highlights & Achievements:
- Slashed 100M+ FTP file synchronization time on Kubernetes worker pods from 24+ hours down to 1 hour.
- Optimized heavily joined ECCN data grid with caching & TIBCO messaging, reducing load times by 90% (3 minutes to 18 seconds).
- Architected high-throughput LCD employee processing pipeline for 52,000+ records in under 2 minutes.
- Migrated legacy Grails/AngularJS monoliths to modern Spring Boot & Angular stacks.
- Integrated Zero Trust IAP, SiteMinder, LDAP enterprise authentication.
- Built automated student exam seating allocation at Heraizen (reduced 2 days to 2 minutes).
- Integrated Zoom, Moxtra, PayU, and Razorpay APIs for 10,000+ students.
- Winners of Qualcomm QSparkler Award and QAchiever Award.
- Gen AI Hackathon prototype demonstrating 50% reduction in manual review effort.

Core Skills:
Backend: Java, Spring Boot, Microservices, REST APIs, Spring Data JPA, Hibernate, Multithreading, System Design.
Cloud/Infra: AWS EKS, S3, EC2, RDS, Lambda, Kubernetes, Docker, Jenkins, CI/CD, Git, Maven.
Messaging/DB: Kafka, RabbitMQ, TIBCO, PostgreSQL, MySQL, MongoDB.
Security/Monitoring: Zero Trust IAP, SiteMinder, LDAP, Splunk, CloudWatch, JWT.
Frontend: Angular, TypeScript, HTML5, CSS3, Bootstrap, React.

Answer questions politely, accurately, concisely, and professionally on behalf of Shashidhara H V. Keep responses under 3 paragraphs. If asked about contact info, provide email (hvshashidhar@gmail.com) and LinkedIn (linkedin.com/in/shashidhara-h-v-465b7116b).
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getAI();
    if (!ai) {
      // Intelligent fallback response when API key is not supplied or mock
      const lower = message.toLowerCase();
      let reply = `Shashidhara H V is a Senior Software Engineer with ${yearsOfExp} years of experience specializing in Java, Spring Boot, Microservices, Kubernetes, and AWS.`;
      if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('hire') || lower.includes('reach')) {
        reply = "You can reach Shashidhara via Email: hvshashidhar@gmail.com, Phone: +91 7676215649, or LinkedIn: https://linkedin.com/in/shashidhara-h-v-465b7116b.";
      } else if (lower.includes('qualcomm') || lower.includes('experience') || lower.includes('work') || lower.includes('job')) {
        reply = "At Qualcomm (Apr 2022 - Present), Shashidhara architected a Kubernetes distributed FTP sync framework (24h -> 1h), optimized ECCN data grid loads by 90% (3 min -> 18s), and won both QSparkler and QAchiever awards!";
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('java') || lower.includes('aws') || lower.includes('spring')) {
        reply = "Shashidhara's core stack includes Java 17, Spring Boot, Microservices, Kubernetes (AWS EKS), Docker, Apache Kafka, PostgreSQL, Angular, Zero Trust IAP, and Splunk observability.";
      } else if (lower.includes('award') || lower.includes('achievement') || lower.includes('recognition')) {
        reply = "Shashidhara has won the Qualcomm QSparkler Award and QAchiever Award for outstanding technical contributions and cloud migration performance.";
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('degree')) {
        reply = "Shashidhara holds a Bachelor of Engineering (B.E.) in Industrial & Production Engineering from Sri Jayachamarajendra College of Engineering (SJCE), Mysore (2019).";
      }
      return res.json({ response: reply });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `${SYSTEM_PROMPT}\n\nUser Question: ${message}`,
    });

    const replyText = response.text || "Thank you for asking about Shashidhara H V. Feel free to reach out via email at hvshashidhar@gmail.com!";
    res.json({ response: replyText });
  } catch (error: any) {
    console.error('Error calling Gemini API:', error);
    // Intelligent fallback when Gemini API encounters rate limits or errors
    const { message } = req.body;
    const lower = (message || '').toLowerCase();
    let reply = `Shashidhara H V is a Senior Software Engineer with ${yearsOfExp} years of experience specializing in Java, Spring Boot, Microservices, Kubernetes, and AWS.`;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('hire') || lower.includes('reach')) {
      reply = "You can reach Shashidhara via Email: hvshashidhar@gmail.com, Phone: +91 7676215649, or LinkedIn: https://linkedin.com/in/shashidhara-h-v-465b7116b.";
    } else if (lower.includes('qualcomm') || lower.includes('experience') || lower.includes('work') || lower.includes('job')) {
      reply = "At Qualcomm (Apr 2022 - Present), Shashidhara architected a Kubernetes distributed FTP sync framework (24h -> 1h), optimized ECCN data grid loads by 90% (3 min -> 18s), and won both QSparkler and QAchiever awards!";
    } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('java') || lower.includes('aws') || lower.includes('spring')) {
      reply = "Shashidhara's core stack includes Java 17, Spring Boot, Microservices, Kubernetes (AWS EKS), Docker, Apache Kafka, PostgreSQL, Angular, Zero Trust IAP, and Splunk observability.";
    } else if (lower.includes('award') || lower.includes('achievement') || lower.includes('recognition')) {
      reply = "Shashidhara has won the Qualcomm QSparkler Award and QAchiever Award for outstanding technical contributions and cloud migration performance.";
    } else if (lower.includes('education') || lower.includes('college') || lower.includes('degree')) {
      reply = "Shashidhara holds a Bachelor of Engineering (B.E.) in Industrial & Production Engineering from Sri Jayachamarajendra College of Engineering (SJCE), Mysore (2019).";
    }
    return res.json({ response: reply });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
