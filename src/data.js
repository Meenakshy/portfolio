
export const profile = {
  name: "Meenakshy Kurup",
  title: "Software Engineer — Full‑Stack & Cloud",
  location: "Vancouver, BC, Canada",
  email: "meenakshykurup@gmail.com",
  phone: "437-818-4552",
  linkedin: "https://www.linkedin.com/in/meenakshy-kurup97",
  github: "https://github.com/Meenakshy",
  summary: "Software Engineer with 5+ years of experience in backend and full‑stack development, building scalable systems, automating workflows, and delivering cloud‑based applications in Agile environments."
};

export const skills = {
  Languages: ["Python", "SQL", "JavaScript", "Shell Scripting", "HTML", "CSS"],
  Frameworks: ["Django", "FastAPI", "React.js", "Next.js", "SQLAlchemy"],
  Cloud_DevOps: ["AWS", "GCP", "Docker", "Git", "Zapier", "Celery", "Django Q"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  Data_Eng: ["ETL Pipelines", "Apache Beam", "PyTorch", "LLMs", "TTS Models"],
  Testing_APIs: ["PyTest", "Postman", "Unit Testing", "RESTful APIs", "Schema Validation"],
  Tools_Processes: ["Jira", "Confluence", "Agile/Scrum", "Code Reviews", "Documentation"]
};

export const experience = [
  {
    company: "Vosyn",
    role: "Software Engineer",
    location: "Mississauga, ON (Remote)",
    period: "Jun 2024 – Sep 2025",
    bullets: [
      "Engineered scalable backend systems in Python and Django for Callisto, a real-time multilingual content translation platform, improving concurrency handling and API performance.",
      "Built and optimized RESTful APIs and WebSocket-based real-time updates, reducing frontend workload by 80% and enhancing user engagement.",
      "Developed responsive front-end components with React.js and Next.js, integrating AI-driven search using OpenAI APIs to improve product discoverability by 35%.",
      " Architected cloud-based ETL pipelines for Comet, processing multilingual audio data with PyTorch and Apache Beam, enhancing LLM and TTS model training efficiency.",
      "Automated investor workflows through Dockerized Python backends and GCP Cloud Run, reducing manual operations by 80% using Zapier-based triggers."
    ],
    stack: ["Python", "Django", "React", "Next.js", "GCP", "PostgreSQL", "Docker", "REST APIs"]
  },
  {
    company: "QBurst",
    role: "Senior Software Engineer",
    location: "Kochi, India",
    period: "2019 – 2023",
    bullets: [
      "Led backend and full-stack development of the AWARE platform, integrating sensor data pipelines with Django APIs and AWS cloud services to deliver real-time performance analytics.",
      "Optimized REST APIs and database queries, achieving a 40% performance improvement through caching, indexing, and architectural enhancements.",
      "Implemented AWS Lambda-based data processing workflows to manage and transform high-volume sensor data stored in RDS, DynamoDB, and S3.",
      "Automated asynchronous background tasks using Celery and Django Q, streamlining operational processes like reporting and notifications.",
      "Drove Agile collaboration and code quality, performing code reviews, sprint planning, and stakeholder communication while maintaining comprehensive technical documentation."
    ],
    stack: ["Django", "AWS", "PostgreSQL", "Redis", "Celery", "CloudWatch"]
  }
];

export const projects = [
  {
    title: "Cloud Environment Provisioning API (Simulator)",
    description: "Backend API that simulates automated provisioning of cloud environments with FastAPI, Pydantic, and SQLModel. Demonstrates environment lifecycle, async simulation, and is ready for AWS integrations (Lambda, Step Functions, DynamoDB).",
    tech: ["FastAPI", "Pydantic", "SQLModel", "JWT", "Docker", "Pytest"],
    links: [
      { label: "GitHub", href: "https://github.com/Meenakshy/cloud-environment-provisioning-api" }
    ]
  },
  {
    title: "FastAPI Playground",
    description: "Hands‑on project exploring FastAPI: CRUD blog API, JWT auth, dependency injection, SQLAlchemy ORM, and API testing. Includes Swagger UI and ReDoc.",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL/SQLite", "JWT", "Pydantic", "Uvicorn"],
    links: [
      { label: "GitHub", href: "https://github.com/Meenakshy/fastapi-playground" }
    ]
  }
];

export const education = [
  { title: "B.Tech. in Computer Science", org: "Rajiv Gandhi Institute of Technology, India", period: "2015 – 2019" }
];

export const certifications = [
  { title: "Certified Professional Scrum Master", org: "Scrum.org", year: "2023" },
  { title: "Big Data Management Systems and Tools", org: "University of Waterloo", year: "2025" }
];
