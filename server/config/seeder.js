const Job = require('../models/Job');
const Article = require('../models/Article');

const seedDatabase = async () => {
  try {
    const jobCount = await Job.countDocuments();
    if (jobCount === 0) {
      console.log('Seeding initial Job data...');
      const OPEN_POSITIONS = [
        {
          id: 'staff-ai-researcher', title: 'Staff AI / ML Research Engineer', department: 'AI / ML', location: 'Bengaluru / San Francisco / Remote', type: 'Full-time', description: 'Lead the architecture of our multi-agent career graph and dynamic vector reasoning engine.', responsibilities: ['Design graph neural networks modeling skills, role evolutions, and competency gaps', 'Optimize multi-agent planning frameworks for real-time roadmap synthesis', 'Scale vector indexing and semantic retrieval over millions of technical criteria'], requirements: ['5+ years building and deploying deep learning or graph representation systems in production', 'Deep fluency with PyTorch, distributed training, and LLM orchestration', 'Demonstrated passion for education systems or talent intelligence']
        },
        {
          id: 'senior-distributed-systems', title: 'Senior Distributed Systems Engineer', department: 'Engineering', location: 'Bengaluru / Remote', type: 'Full-time', description: 'Build the low-latency backbone powering real-time code evaluation and telemetry ingestion.', responsibilities: ['Architect robust event streams handling AST parsing and live repo indexing', 'Ensure sub-100ms response times across complex neural graph querying', 'Maintain enterprise-grade security and isolation for user source code sandbox environments'], requirements: ['Strong expertise with Go or Rust, Kafka, gRPC, and PostgreSQL', 'Experience containerizing and sandboxing untrusted execution environments', 'Rigorous focus on high availability, telemetry, and distributed profiling']
        },
        {
          id: 'lead-product-designer', title: 'Lead Product Designer', department: 'Design', location: 'Bengaluru / Remote', type: 'Full-time', description: 'Define the visual and interaction language of next-generation career intelligence systems.', responsibilities: ['Translate intricate neural graph models into intuitive, empowering user interfaces', 'Design complex data visualizations for skill gaps, roadmaps, and candidate readiness', 'Uphold our minimalist, high-contrast, technical design constitution'], requirements: ['Portfolio demonstrating exceptional craft in developer tools, complex SaaS, or financial UI', 'Mastery of Figma design systems, motion principles, and frontend execution', 'Deep empathy for engineers, students, and talent leaders']
        },
        {
          id: 'principal-product-manager', title: 'Principal Product Manager, Talent Infrastructure', department: 'Product', location: 'Bengaluru / Remote', type: 'Full-time', description: 'Spearhead the product roadmap connecting student readiness signals to enterprise hiring workflows.', responsibilities: ['Define feature roadmaps for both candidate preparation and enterprise discovery suites', 'Collaborate closely with AI research and engineering to translate capabilities into customer value', 'Engage directly with engineering hiring managers and university placement deans'], requirements: ['6+ years technical product management in developer tools, enterprise HRTech, or AI SaaS', 'Proven track record scaling B2B or B2C products from 0 to 1 and 1 to 10', 'Exceptional analytical rigor and technical fluency']
        },
        {
          id: 'enterprise-growth-lead', title: 'Enterprise Growth & Partnerships Lead', department: 'Growth', location: 'Bengaluru / Hybrid', type: 'Full-time', description: 'Build strategic hiring partnerships with high-growth technology companies and premier universities.', responsibilities: ['Drive enterprise adoption of Aptivo AI Candidate Discovery across tech companies', 'Establish institutional deployment programs with leading engineering universities', 'Build long-term pipeline trust with engineering VPs and Heads of Talent'], requirements: ['4+ years B2B tech sales, strategic partnerships, or corporate talent solutions', 'Strong existing network among CTOs, engineering directors, and campus recruiting leads', 'Ability to clearly articulate deep technical product value']
        }
      ];
      await Job.insertMany(OPEN_POSITIONS);
      console.log('Jobs seeded.');
    }

    const articleCount = await Article.countDocuments();
    if (articleCount === 0) {
      console.log('Seeding initial Article data...');
      const RESOURCE_ARTICLES = [
        {
          id: 'skill-graph-revolution', title: 'The Death of the Static Resume: How Graph Embeddings Map Verified Capability', category: 'Career Intelligence', readTime: '6 min read', date: 'September 2026', summary: 'Why PDF resumes fail both engineers and hiring managers, and how multidimensional skill graphs represent actual engineering capacity with mathematical fidelity.', content: ['For thirty years, hiring in technology has relied on a flat, two-dimensional document invented in the industrial era: the resume. In an age where engineering requires nuanced mastery of distributed systems, concurrency primitives, and dynamic cloud environments, a bullet point stating "worked on microservices" conveys almost zero useful signal.', 'Aptivo AI approaches capability through graph representation learning. Rather than treating skills as isolated buzzwords, our ontology models the dependency structures between conceptual knowledge and execution artifacts. A developer who demonstrates clean cache eviction strategies and atomic database transactions in production code is mathematically mapped to system reliability readiness.', 'By decoupling career assessment from self-reported credentials and anchoring it in verifiable telemetry, both candidates and employers save hundreds of hours of wasted interview loops.']
        },
        {
          id: 'backend-system-design-rubrics', title: 'Deconstructing Top-Tier System Design Interviews: What Real Rubrics Measure', category: 'Engineering Careers', readTime: '9 min read', date: 'September 2026', summary: 'A deep dive into the evaluation criteria used by high-scale software organizations to differentiate Staff-level architects from mid-level implementers.', content: ['In senior engineering interviews, candidates rarely fail because they cannot draw boxes for load balancers or databases. They fail because they fail to articulate back-of-the-envelope throughput calculations, fail to identify single points of failure under partition, and treat distributed consensus as a trivial plug-in.', 'Aptivo AI simulated interview modules analyze your structural trade-offs in real time. Are you considering read-heavy versus write-heavy caching ratios? How does your design handle catastrophic node failover?', 'When you practice with clear, quantified feedback on each architectural decision, your ability to defend design decisions under pressure accelerates exponentially.']
        },
        {
          id: 'ai-native-career-infrastructure', title: 'Adaptive Career Engines: Why Linear Curriculums Are Obsolete', category: 'AI & Careers', readTime: '7 min read', date: 'August 2026', summary: 'Traditional bootcamps and courses force every learner through the same static sequential steps. Here is how adaptive AI loops dynamically recalculate learning vectors.', content: ['Linear education models operate under the false assumption that all individuals start with identical baselines and learn at identical rates. If you are already fluent in React component lifecycles, forcing you through 40 hours of beginner JavaScript syntax is not merely inefficient — it drains motivation.', 'Aptivo AI treats your preparation as an optimization function with constraints: target role, target timeline, and available hours per week. If you grasp asynchronous event streaming in half the projected time, the engine immediately elevates your next challenge to distributed tracing or raft consensus.', 'Continuous reassessment ensures that every hour you invest yields maximum marginal increase in your career readiness score.']
        },
        {
          id: 'hiring-beyond-pedigree', title: 'Signal Over Pedigree: How Enterprise Engineering Teams Discover Hidden Talent', category: 'Hiring', readTime: '5 min read', date: 'August 2026', summary: 'How leading tech companies are shifting away from college tier filtering and towards verified code depth, PR quality, and real problem-solving proof.', content: ['College pedigree and historical brand names have long served as crude proxies for engineering aptitude. But in a global talent market, this filter excludes thousands of exceptional engineers who learned through non-traditional pathways or lesser-known universities.', 'Aptivo AI provides hiring partners with candidate telemetry that matters: pull request quality, test coverage discipline, architectural coherence, and performance under simulated technical scrutiny.', 'The result is a meritocratic pipeline where talent is discovered and hired based purely on verifiable engineering readiness.']
        }
      ];
      await Article.insertMany(RESOURCE_ARTICLES);
      console.log('Articles seeded.');
    }
  } catch (error) {
    console.error('Error seeding DB:', error);
  }
};

module.exports = seedDatabase;
