/**
 * PORTFOLIO DATA FILE
 * -------------------
 * All portfolio content is stored here in one central location.
 * Easy for anyone to update, add new projects, adjust skills, or update contact info.
 */

export const portfolioData = {
  // Personal & Brand Information
  personal: {
    fullName: "MUHAMAD NUR HIDAYAT BIN ABDUL RAZAK",
    shortName: "Muhamad Nur Hidayat",
    logoText: "Hidayat",
    tagline: "Fresh Graduate | Aspiring Data Analyst",
    heroHeading: "Hi, I’m Muhamad Nur Hidayat.",
    supportingHeadline: "Exploring data. Understanding problems. Supporting better decisions.",
    intro: "I’m a Business Technology Management graduate from Universiti Teknologi MARA (UiTM), with skills in SQL, Microsoft Excel, and data reporting. I’m seeking a Junior Data Analyst opportunity where I can contribute, learn, and grow.",
    location: "Kota Bharu, Kelantan, Malaysia",
    email: "hidayatrazak185@gmail.com",
    portraitUrl: "/images/hidayat-profile.png",
    portraitAlt: "Portrait of Muhamad Nur Hidayat smiling in front of a blue background",
    resumeUrl: "/resume/Muhamad_Nur_Hidayat_Resume.pdf",
    resumeFilename: "Muhamad_Nur_Hidayat_Resume.pdf",
    
    // Optional social profile URLs.
    // Set to valid URLs when available. If left empty (""), the website will cleanly omit the buttons.
    socialLinks: {
      linkedin: "", // e.g. "https://www.linkedin.com/in/your-profile"
      github: "",   // e.g. "https://github.com/your-username"
    }
  },

  // Understated Hero Metric / Highlight Cards
  // Transparent, honest milestones — strictly academic & internship
  heroMetrics: [
    {
      id: "cgpa",
      value: "3.63",
      label: "Degree CGPA",
      context: "UiTM Bachelor of Business Technology Management (Hons.)",
      badge: "Academic Excellence"
    },
    {
      id: "applications",
      value: "100+",
      label: "Zakat Aid Applications",
      context: "Processed and validated during internship at MAIK",
      badge: "Operational Data"
    },
    {
      id: "skills",
      value: "SQL & Excel",
      label: "Core Technical Skills",
      context: "Data querying, spreadsheet calculation, and reporting",
      badge: "Applied Skills"
    }
  ],

  // About Me Section
  about: {
    title: "About Me",
    subtitle: "A practical foundation in business technology, administrative data, and analytical thinking.",
    // Exact requested copy
    paragraphs: [
      "I recently completed my Bachelor of Business Technology Management (Hons.) at UiTM. My academic projects and internship strengthened my ability to organise information, check data accuracy, solve problems, and communicate with others.",
      "During my internship at MAIK’s Zakat Distribution Unit, I processed and validated applications, reviewed supporting documents, and maintained administrative records. This experience developed my attention to detail and interest in using reliable information to support decisions.",
      "I’m now looking to begin my career in data analysis and continue developing my skills in data visualisation, statistical analysis, and business intelligence."
    ],
    keyPillars: [
      {
        title: "Data Accuracy & Integrity",
        description: "Hands-on experience reviewing sensitive documentation and maintaining dependable records where precision matters."
      },
      {
        title: "Business & Tech Intersection",
        description: "Equipped with a Business Technology Management background to understand how workflow data powers organizational choices."
      },
      {
        title: "Growth Mindset",
        description: "Active commitment to expanding practical analysis methodologies, spreadsheet modeling, and SQL database queries."
      }
    ]
  },

  // Skills Section (Categorized cards without arbitrary percentages)
  skills: {
    title: "Skills & Proficiencies",
    subtitle: "Factual technical capabilities, tools, and professional attributes backed by academic study and internship experience.",
    categories: [
      {
        id: "core-technical",
        title: "Core Data & Technical Skills",
        description: "Hands-on capabilities used in academic coursework and real-world administrative data operations.",
        accentColor: "blue",
        skills: [
          { name: "SQL", description: "Relational database querying, filtering, and data extraction" },
          { name: "Microsoft Excel", description: "Spreadsheet calculation, formulas, data tables, and formatting" },
          { name: "Data Reporting", description: "Compiling structured summaries and factual performance updates" },
          { name: "Data Organisation & Validation", description: "Reviewing documentation completeness and verifying data accuracy" },
          { name: "Document Management", description: "Maintaining structured administrative records and archiving" }
        ]
      },
      {
        id: "additional-tools",
        title: "Additional Productivity Tools",
        description: "Software utilized for business documentation, project tracking, and professional presentation.",
        accentColor: "navy",
        skills: [
          { name: "Microsoft Word", description: "Formal documentation, project proposals, and executive reports" },
          { name: "Microsoft Project", description: "Task scheduling, milestone tracking, and resource allocation" },
          { name: "Microsoft PowerPoint", description: "Clear visual business pitches and meeting presentations" },
          { name: "Canva", description: "Visual asset creation, infographics, and event collateral" }
        ]
      },
      {
        id: "professional-skills",
        title: "Professional & Transferable Skills",
        description: "Workplace competencies proven through project leadership, operational service, and team collaboration.",
        accentColor: "indigo",
        skills: [
          { name: "Analytical Thinking", description: "Breaking complex business problems into manageable components" },
          { name: "Attention to Detail", description: "Diligent verification to avoid errors in records and submissions" },
          { name: "Problem-Solving", description: "Identifying root causes and recommending practical resolutions" },
          { name: "Teamwork & Leadership", description: "Directing student initiatives and collaborating with cross-functional groups" },
          { name: "Communication & Customer Service", description: "Clear stakeholder interactions honed in service and committee roles" },
          { name: "Time Management", description: "Prioritizing urgent tasks during peak operational volumes" }
        ]
      },
      {
        id: "languages",
        title: "Languages",
        description: "Communication proficiencies for bilingual professional environments.",
        accentColor: "emerald",
        skills: [
          { name: "Malay", description: "Native / Mother tongue — Full professional written and spoken fluency" },
          { name: "English", description: "MUET Band 4 — Professional working proficiency in speech and business writing" }
        ]
      }
    ]
  },

  // Professional & Internship Experience
  experience: {
    title: "Experience",
    subtitle: "A timeline of administrative data processing, document management, and fast-paced operational teamwork.",
    items: [
      {
        id: "maik-internship",
        role: "Intern",
        unit: "Zakat Distribution Unit",
        company: "Majlis Agama Islam dan Adat Istiadat Melayu Kelantan (MAIK)",
        location: "Kota Bharu, Kelantan",
        period: "2026",
        type: "Internship",
        highlight: "100+ Applications Processed",
        description: "Assisted the Zakat Distribution Unit in handling sensitive public welfare applications with meticulous record verification and data entry.",
        responsibilities: [
          "Processed and validated 100+ zakat aid applications, checking documentation accuracy and completeness.",
          "Reviewed applicant information and supporting documents to support accurate records and informed decisions.",
          "Prepared and maintained administrative documentation with attention to detail and organisational requirements."
        ],
        tags: ["Data Validation", "Document Integrity", "Administrative Operations", "Compliance"]
      },
      {
        id: "arra-crew",
        role: "Service Crew",
        unit: "Customer Operations & POS",
        company: "The Arra Western and Coffee",
        location: "Kelantan, Malaysia",
        period: "2025–2026",
        type: "Part-time",
        highlight: "Fast-Paced Operations",
        description: "Maintained accurate register transactions and high service standards in an active hospitality setting.",
        responsibilities: [
          "Processed customer orders and transactions accurately in a fast-paced environment.",
          "Responded to customer enquiries using communication and problem-solving skills.",
          "Prioritised tasks and supported team coordination during busy periods."
        ],
        tags: ["Transaction Accuracy", "Customer Service", "Team Coordination", "Multi-tasking"]
      }
    ]
  },

  // University Projects
  // Transferable analytical, coordination, and communication skills
  // Ready for future Excel / SQL additions as needed
  projects: {
    title: "University Projects",
    subtitle: "Transferable analytical, communication, and coordination projects carried out during university studies.",
    introNote: "These projects showcase my capabilities in stakeholder communication, project governance, and structured idea analysis. The section is architected so upcoming SQL & Excel analytical case studies can be seamlessly added.",
    items: [
      {
        id: "digital-workforce",
        title: "Digital Workforce: Click, Connect and Work",
        role: "Project Director",
        year: "2025",
        category: "University Project",
        type: "Leadership & Event Governance",
        summary: "Led a university project promoting awareness of freelancing and digital career opportunities among students.",
        contributions: [
          "Planned and coordinated project activities and event logistics.",
          "Communicated with stakeholders and team members.",
          "Supported delivery within established timelines.",
          "Developed project plans and facilitated collaboration among team members."
        ],
        skillsDemonstrated: [
          "Leadership",
          "Planning",
          "Stakeholder Communication",
          "Teamwork",
          "Project Management"
        ],
        details: "As Project Director, spearheaded the end-to-end planning, resource scheduling, and execution for the university initiative. Coordinated across student committees, faculty advisors, and attendees to promote modern digital freelancing tools and sustainable workforce readiness."
      },
      {
        id: "pitch-competition",
        title: "International 3-Minute Business Idea Pitch and Innovation Competition",
        role: "Participant",
        year: "2025",
        category: "Innovation Pitch",
        type: "University Level Innovation",
        summary: "Developed and presented a business idea within a three-minute presentation format.",
        contributions: [
          "Analysed a business challenge and developed a proposed solution.",
          "Organised the idea into a concise, structured presentation.",
          "Communicated recommendations to judges and participants.",
          "Applied critical thinking and market analysis techniques to support strategic decision-making."
        ],
        skillsDemonstrated: [
          "Problem Analysis",
          "Idea Development",
          "Critical Thinking",
          "Presentation",
          "Market Analysis"
        ],
        details: "Identified a practical business problem and engineered a concise, evidence-grounded innovation proposal. Delivered the complete problem-solution argument under rigorous 3-minute pitch parameters, demonstrating rapid syntheses of business needs and effective vocal delivery."
      }
    ],
    // Extension guide for future projects:
    // Simply duplicate an object above and set category: "SQL & Excel Case Study", etc.
  },

  // Education and Academic Honors
  education: {
    title: "Education & Recognition",
    subtitle: "Formal academic foundations in business technology and pre-university achievements.",
    institutions: [
      {
        id: "uitm",
        institution: "Universiti Teknologi MARA (UiTM)",
        degree: "Bachelor of Business Technology Management (Hons.)",
        status: "Fresh Graduate",
        cgpa: "3.63",
        honors: [
          "Dean's List Award: 2025",
          "Dean's List Award: 2026"
        ],
        description: "Comprehensive curriculum combining business operations, management information systems, database fundamentals (SQL), analytical decision support, and digital productivity tools.",
        keySubjects: [
          "Database Systems & SQL",
          "Business Information Systems",
          "Project Management",
          "Data Reporting & Analysis"
        ]
      },
      {
        id: "smkkb",
        institution: "Sekolah Menengah Kebangsaan Kota Bharu",
        degree: "Sijil Tinggi Pelajaran Malaysia (STPM)",
        status: "Completed",
        period: "2021–2023",
        cgpa: "3.00",
        honors: [
          "MUET (Malaysian University English Test): Band 4"
        ],
        description: "STPM pre-university stream focusing on analytical writing, history, social sciences, and language communication.",
        keySubjects: [
          "Pengajian Am",
          "Bahasa Melayu",
          "Sejarah",
          "Sastera"
        ]
      }
    ],
    recognitionSummary: {
      title: "Academic Recognition",
      items: [
        {
          title: "UiTM Dean's List Award (2025)",
          description: "Conferred for outstanding academic semester performance in Bachelor of Business Technology Management."
        },
        {
          title: "UiTM Dean's List Award (2026)",
          description: "Conferred for sustained excellence and top-tier academic performance in advanced degree modules."
        },
        {
          title: "MUET Band 4",
          description: "Certified competent English communication proficiency in listening, speaking, reading, and academic writing."
        }
      ]
    }
  },

  // Contact Information
  contact: {
    title: "Let’s Connect",
    subtitle: "I’m interested in Junior Data Analyst opportunities where I can apply my skills, contribute to a team, and continue learning.",
    email: "hidayatrazak185@gmail.com",
    location: "Kota Bharu, Kelantan, Malaysia",
    relocationNote: "Open to opportunities in Kelantan, Greater Kuala Lumpur / Klang Valley, or remote Junior Data Analyst roles across Malaysia.",
    phoneNote: "Full contact details including direct phone number are available in my downloadable résumé PDF for verified recruiter screening.",
    ctaMessage: "Feel free to reach out via email for job inquiries, junior data analyst positions, or interview opportunities."
  },

  // Footer Information
  footer: {
    fullName: "Muhamad Nur Hidayat",
    role: "Aspiring Data Analyst",
    quote: "Dedicated to data accuracy, structured problem-solving, and continuous learning."
  }
};
