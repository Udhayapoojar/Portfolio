export type EngineeringArea = {
  title: string
  points: string[]
}

export type ChallengeSolution = {
  challenge: string
  solution: string
}

export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  tags: string[]
  focus: string
  overview: string
  problem: string
  contribution: string
  engineeringAreas: EngineeringArea[]
  challenges: ChallengeSolution[]
  learned: string
  liveUrl?: string
  status?: string
}

export const projects: Project[] = [
  {
    slug: 'inventory-operations',
    title: 'Enterprise Inventory & Operations Platform',
    category: 'Professional Application · Neural Schema Pvt. Ltd.',
    summary: 'An internal business application supporting inventory management, work-order operations, authentication, and shipping integrations.',
    description: 'A practical enterprise application engineered to streamline operational inventory tracking, work-order lifecycles, user authentication, and carrier shipping workflows.',
    tags: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'MySQL', 'Tailwind CSS', 'FedEx API', 'JWT'],
    focus: 'Enterprise business application',
    overview: 'This project is an internal business application supporting day-to-day operations, inventory tracking, and work-order management. It replaces ad-hoc spreadsheets with structured, role-aware interfaces, providing teams with reliable visibility into stock items, pending approvals, and dispatch statuses.',
    problem: 'Operations teams required a centralized, dependable system to record stock changes, handle work-order lifecycles, authenticate team members securely, and coordinate parcel shipments with carrier APIs without workflow delays or manual reconciliation errors.',
    contribution: 'As a Software Developer at Neural Schema Pvt. Ltd., I contributed across full-stack development. I engineered React and TypeScript interfaces, developed Node.js REST API endpoints, implemented JWT authentication and email-based password recovery, integrated FedEx shipping services, and continuously delivered new features driven by client requirements.',
    engineeringAreas: [
      {
        title: 'Frontend Development (React & TypeScript)',
        points: [
          'Developed and maintained interactive interfaces for inventory lookup, stock adjustment, and work-order tracking.',
          'Implemented structured data forms with client-side validation, search filters, and tabular views using Tailwind CSS.',
          'Designed intuitive loading indicators, error feedback, and form recovery states to keep operational interactions smooth.',
        ],
      },
      {
        title: 'Backend Development & Authentication (Node.js & MySQL)',
        points: [
          'Built RESTful API endpoints in Node.js to handle business logic, data persistence, and relational queries in MySQL.',
          'Implemented JWT-based authentication, user login flows, session validation, and secure password-related workflows.',
          'Configured automated email notification triggers for account updates and operational alerts.',
        ],
      },
      {
        title: 'Third-Party Integrations (FedEx Shipping & Rates)',
        points: [
          'Integrated FedEx shipping and rate-related services directly into the application dispatch workflow.',
          'Handled carrier rate lookups, shipment label requests, and tracking status updates with defensive error handling.',
          'Constructed fallback error messages and retry mechanisms when carrier endpoints experience network latency.',
        ],
      },
      {
        title: 'Ongoing Feature Development & Maintenance',
        points: [
          'Continuously delivered new features and enhancements based on evolving client requirements.',
          'Investigated, debugged, and resolved application issues across browser interfaces, backend routes, and database queries.',
          'Maintained and refactored existing functionality to ensure long-term codebase health and reliability.',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Integrating third-party carrier APIs (FedEx) while keeping user workflows resilient during external network delays.',
        solution: 'Implemented strict request schema validation, normalized carrier responses, and clear UI error feedback to allow retries without losing user input.',
      },
      {
        challenge: 'Implementing secure authentication, session management, and password recovery across multi-user operational workflows.',
        solution: 'Used JWT authentication with header verification in route middleware, combined with time-limited email tokens for secure password reset flows.',
      },
      {
        challenge: 'Adapting data models and frontend components smoothly as client feature requirements evolved over time.',
        solution: 'Structured the application into modular React components and domain-driven API routes, allowing incremental additions without breaking existing workflows.',
      },
    ],
    learned: 'Building and maintaining real-world business applications requires a strong balance between practical frontend UX, dependable API boundaries, and writing maintainable code that can cleanly evolve as client needs change.',
  },
  {
    slug: 'smart-resort-chatbot',
    title: 'Smart Resort Chatbot',
    category: 'Freelance Prototype · Web Application',
    summary: 'A website-embeddable chatbot concept designed to help resort guests get quick answers about resort services, nearby attractions, and local information.',
    description: 'A prototype guest-assistance chatbot embeddable via a lightweight script snippet, featuring keyword-based query search and conversation logging for analytics.',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'Node.js', 'REST APIs', 'Embeddable Widget'],
    focus: 'Freelance Prototype',
    liveUrl: 'https://resort-chatbot-swart.vercel.app/',
    status: 'Freelance Prototype · Not commercially launched',
    overview: 'A website-embeddable chatbot concept developed to help resort guests receive immediate answers to common questions regarding resort amenities, dining, recreation, nearby attractions, and local travel information. Built as an easily embeddable widget with a supporting backend service.',
    problem: 'Resort front-desk teams frequently spend time handling repetitive guest inquiries about on-site services, facility timings, and nearby tourist destinations. The goal was to build an embeddable, low-overhead chatbot prototype that resort websites can integrate via a simple script tag without heavy AI infrastructure.',
    contribution: 'Developed as a freelance project prototype (not commercially launched). Built the end-to-end concept including the embeddable script snippet, the Next.js demo application, the Express.js API for keyword-based search processing, and MongoDB integration for conversation logging.',
    engineeringAreas: [
      {
        title: 'Embeddable Widget & Script Integration',
        points: [
          'Engineered a lightweight script snippet allowing any website to embed and configure the chatbot widget with minimal setup.',
          'Implemented an interactive floating chat button with a responsive dialog optimized for guest mobile and desktop browsers.',
        ],
      },
      {
        title: 'Backend API & Keyword Search (Express.js)',
        points: [
          'Built Express.js REST API endpoints to process guest inquiries with keyword-matching algorithms against resort service data.',
          'Designed fast query routing to return accurate answers for amenities, check-in details, and local points of interest.',
        ],
      },
      {
        title: 'Conversation Logging & Analytics Schema (MongoDB)',
        points: [
          'Configured MongoDB data models to record conversation histories, inquiry timestamps, and guest question patterns.',
          'Enabled backend logging to provide operational insights and assist with future knowledge base improvements.',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Designing a lightweight widget integration that works across arbitrary third-party web pages without layout interference.',
        solution: 'Encapsulated widget DOM elements and dynamic script loading to ensure clean mounting and prevent style conflicts with host websites.',
      },
      {
        challenge: 'Providing instant, cost-effective responses to guest questions without complex AI dependencies.',
        solution: 'Implemented structured keyword-matching logic categorized around resort amenities, services, and local tourism inquiries.',
      },
    ],
    learned: 'Developing freelance prototypes highlighted the value of prioritizing simple client integration, fast deterministic responses, and clean API design that can easily scale if commercialized.',
  },
  {
    slug: 'service-request-api',
    title: 'Service Request & Workflow API',
    category: 'Backend & API Integration',
    summary: 'A structured REST API service handling authenticated service requests, role-based workflows, and operational audit records.',
    description: 'A backend case study focused on clean API design, deterministic status transitions, and dependable request boundaries.',
    tags: ['Node.js', 'REST APIs', 'Express', 'JWT', 'MySQL', 'Next.js'],
    focus: 'API design & authentication',
    overview: 'A dedicated REST API service that provides operational teams with consistent contracts for creating, reviewing, and updating service requests with role-gated access control.',
    problem: 'Earlier request workflows mixed authorization checks with individual route handlers, causing inconsistent response formats and making permissions difficult to audit.',
    contribution: 'Designed and implemented the REST route handlers, JWT authentication middleware, input validation schemas, and database queries.',
    engineeringAreas: [
      {
        title: 'API Design & Route Architecture',
        points: [
          'Defined clean REST resource endpoints with predictable JSON request and response contracts.',
          'Centralized request payload validation to reject malformed inputs early.',
        ],
      },
      {
        title: 'Authentication & Access Control',
        points: [
          'Implemented JWT token verification middleware protecting sensitive operational endpoints.',
          'Enforced role-based access rules to restrict administrative operations.',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Enforcing role boundaries across different user tiers without duplicating check logic.',
        solution: 'Centralized permission verification into reusable route middleware, ensuring consistent enforcement across all endpoints.',
      },
      {
        challenge: 'Providing actionable error messages to client applications when validations fail.',
        solution: 'Created uniform error response envelopes containing specific error codes and clear messages for frontend consumption.',
      },
    ],
    learned: 'Consistent API design and defensive validation make consuming frontend interfaces much easier to build, debug, and maintain.',
  },
  {
    slug: 'handwritten-prescription-ocr',
    title: 'Handwritten Prescription OCR',
    category: 'College Project · In Progress',
    summary: 'A Python-based OCR project exploring text recognition on handwritten medical prescriptions across varied handwriting samples.',
    description: 'An experimental Python OCR project started during college and actively being refined to test character recognition on unclear handwritten prescriptions.',
    tags: ['Python', 'OpenCV', 'Tesseract OCR', 'Image Processing'],
    focus: 'College Project · In Progress',
    status: 'In Progress · Experimental College Project',
    overview: 'This project began during college as an exploration into optical character recognition (OCR) for handwritten medical prescriptions. Currently ongoing, the focus is on testing preprocessing techniques across diverse handwriting samples to evaluate recognition feasibility on difficult-to-read text.',
    problem: 'Handwritten doctor prescriptions feature cursive, variable penmanship, and varying image quality. Standard OCR systems struggle with unconstrained handwriting without substantial preprocessing and domain-specific adjustments.',
    contribution: 'Implemented the experimental Python pipeline using OpenCV for image cleanup (thresholding, noise reduction, contour detection) and evaluated text recognition performance across sample sets.',
    engineeringAreas: [
      {
        title: 'Image Preprocessing & Binarization (OpenCV)',
        points: [
          'Applied grayscale conversion, adaptive thresholding, and morphological filtering to clean noisy background textures and paper artifacts.',
          'Tested skew correction and contrast adjustments to improve character edge definitions.',
        ],
      },
      {
        title: 'OCR Pipeline & Sample Evaluation',
        points: [
          'Passed cleaned image segments through OCR engines to evaluate character and word recognition across handwriting styles.',
          'Cataloged specific failure modes including cursive ligatures, low-contrast ink, and inconsistent stroke widths.',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Extracting legible character boundaries from irregular cursive strokes without clinical dataset annotations.',
        solution: 'Experimented with contour-based line segmentation and adaptive thresholding to isolate text regions prior to recognition.',
      },
    ],
    learned: 'Handwritten text recognition on noisy, real-world documents is complex; reliable OCR requires thorough preprocessing pipelines and iterative testing across diverse handwriting samples.',
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
export const featuredProjects = projects

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs', 'JWT', 'Firebase'],
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'Tools & Environments',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Hoppscotch', 'Dev & QA Deployments', 'Vercel'],
  },
  {
    label: 'AI Agents & Tooling',
    skills: ['GitHub Copilot', 'Antigravity', 'AI-assisted Workflows'],
  },
  {
    label: 'Currently exploring',
    skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Bash Scripting', 'Render'],
  },
]

export type ExperienceItem = {
  role: string
  company: string
  companyUrl?: string
  period: string
  type: string
  overview: string
  contributions: string[]
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Neural Schema Pvt. Ltd.',
    companyUrl: 'https://neuralschemait.com/',
    period: '2025 — Present',
    type: 'Professional Experience',
    overview:
      'Working as a Software Developer building and maintaining business applications. My responsibilities span full-stack development using React, TypeScript, Node.js, and MySQL, implementing user authentication, integrating third-party shipping APIs, managing Dev & QA deployments, and delivering client-driven features.',
    contributions: [
      'Full-stack application development: Build and maintain web interfaces, backend API routes, and database workflows for internal business applications.',
      'React and TypeScript frontend engineering: Develop responsive, type-safe interfaces for inventory tracking, work-order operations, and day-to-day business workflows with Tailwind CSS.',
      'Node.js APIs and backend workflows: Design and maintain RESTful endpoints with Node.js and MySQL, ensuring structured validation and consistent response formatting.',
      'Authentication and email functionality: Implemented JWT-based authentication, user login, secure password management, and automated email notification features.',
      'Shipping and third-party API integrations: Integrated FedEx shipping and rate calculation services into operational dispatch workflows with defensive error handling.',
      'Dev & QA environment deployments: Manage feature deployments, environment configurations, and verification across Development (Dev) and QA environments prior to releases.',
      'Client-driven feature development & maintenance: Deliver new features aligned with evolving client requirements, investigate and fix bugs across the stack, and improve overall system maintainability.',
    ],
    bullets: [
      'Build and maintain practical full-stack web applications for operational and business workflows.',
      'Develop frontend interfaces with React, TypeScript, and Tailwind CSS.',
      'Deploy and verify applications across Dev and QA environments.',
      'Integrate REST APIs, authentication, and third-party logistics services with attention to validation and maintainability.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Neural Schema Pvt. Ltd.',
    companyUrl: 'https://neuralschemait.com/',
    period: '2024 — 2025',
    type: 'Internship',
    overview:
      'Built foundational full-stack capabilities by contributing to reusable UI components, API-connected screens, Firebase backend services, and collaborative defect investigation in a shared codebase.',
    contributions: [
      'Developed reusable React components and assisted in integrating backend REST endpoints under senior guidance.',
      'Utilized Firebase for real-time data persistence, authentication flows, and backend service prototyping.',
      'Used Git, GitHub, and VS Code for version control along with Postman and Hoppscotch for API testing across sprint deliverables.',
      'Participated in defect triage, UI styling fixes, and cross-browser testing for internal tools.',
    ],
    bullets: [
      'Contributed to frontend features, Firebase services, and API-connected screens under guidance.',
      'Tested endpoints and workflows using Postman and Hoppscotch in VS Code.',
      'Learned to debug across browser, server, and database boundaries.',
      'Worked with Git, Postman, and shared team development workflows.',
    ],
  },
]

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
]

export const mobileNavItems = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const profileFacts = [
  ['Role', 'Full Stack Developer'],
  ['Experience', '1+ years (Professional)'],
  ['Education', 'B.E. Computer Science and Engineering · 2025'],
  ['Company', 'Neural Schema Pvt. Ltd.'],
  ['Location', 'Tamil Nadu, India'],
  ['Availability', 'Open to suitable opportunities'],
] as const

export const resumeUrl = 'https://drive.google.com/file/d/1AXwJXNvCBDAXIXP1yuVEsWtkkAZbbv-9/view?usp=drivesdk'

export const socials = {
  github: 'https://github.com/Udhayapoojar',
  linkedin: 'https://www.linkedin.com/in/udhayapooja3',
  email: 'mailto:udhayapooja24@gmail.com',
  resume: resumeUrl,
}

export const email = 'udhayapooja24@gmail.com'
export const pageDescription = 'Udhaya Pooja R. is a Full-Stack Developer building practical web applications, APIs, inventory workflows, and internal business systems.'
export const siteName = 'Udhaya Pooja R. — Full Stack Developer'
export const themeColor = '#f4f1ea'
export const developerSnippet = `const developer = {\n  name: "Udhaya Pooja R.",\n  role: "Full Stack Developer",\n  company: "Neural Schema Pvt. Ltd.",\n  stack: ["React", "TypeScript", "Node.js", "MySQL"]\n}`
export const footerTagline = 'Practical software, thoughtfully shipped.'
export const homeIntro = "I'm a full-stack developer working across frontend interfaces, backend APIs, business workflows, and third-party integrations. My work involves building and improving practical web applications, implementing new features, and solving application-level problems."
export const aboutCopy = "I'm a full-stack developer working across frontend interfaces, backend APIs, business workflows, and third-party integrations. My work involves building and improving practical web applications, implementing new features based on client requirements, and solving application-level problems across the stack."
export const professionalFocus = 'Building practical full-stack web applications, internal business tools, API integrations, authentication systems, inventory management, and database-backed workflows.'
export const contactCopy = {
  heading: "Let's work together.",
  body: "I'm open to discussing software development opportunities, technical projects, and interesting engineering problems.",
}
export const currentYear = new Date().getFullYear()
export const projectIntro = 'Selected work framed as engineering case studies: purpose, role, contributions, and implementation decisions.'
export const experienceIntro = 'A focused record of practical engineering responsibilities, shipped features, and professional work.'
export const projectMetrics = ['Clear ownership', 'Validated workflows', 'Maintainable APIs']
export const threePrinciples = [
  'Useful over ornamental.',
  'Clear boundaries over clever abstractions.',
  'Fast to understand, easy to maintain.',
]
export const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'MySQL']
export const maxMessageLength = 1200
export const formNote = 'This form opens your email client with your note prefilled. No personal form data is stored on this site.'
export const siteUrl = 'https://portfolio-zeta-nine-cc8sh4g2ke.vercel.app'
export const role = 'Full Stack Developer'
export const location = 'Tamil Nadu, India'
export const education = 'B.E. Computer Science and Engineering'
export const status = 'Open to suitable software development opportunities.'
export const experienceYears = '1+ years'

