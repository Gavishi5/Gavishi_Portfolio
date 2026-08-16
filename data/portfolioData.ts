export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  playStoreUrl?: string;
  highlights: string[];
  features: {
    title: string;
    description: string;
  }[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  screenshotsPlaceholder: string;
  screenshots?: string[];
  themeColor: string;
  accentGradient: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Gavishi Raj",
  role: "React Native Developer — Mobile Application Engineer",
  tagline: "Building production-ready cross-platform mobile applications for Android & iOS with 3+ years of experience.",
  experienceYears: "3+",
  publishedAppsCount: "3",
  cgpa: "8.2",
  email: "gavishiraj5@gmail.com",
  phone: "+91-9927652596",
  location: "Greater Noida, Uttar Pradesh",
  github: "https://github.com/Gavishi5",
  linkedin: "https://linkedin.com/in/gavishi-raj",
  resumeUrl: "/Gavishi_Raj_Resume.pdf",
  heroBadges: [
    "React Native (3+ Yrs)",
    "TypeScript",
    "Flutter",
    "Kotlin",
    "Android Native Modules",
    "Redux",
    "Socket.IO",
    "REST APIs",
    "Firebase / FCM",
    "Payment Gateways",
  ],
};

export const QUICK_STATS = [
  { label: "Software Development Experience", value: "3+ Years", badge: "Production" },
  { label: "Production Apps Published", value: "3 Apps", badge: "Google Play" },
  { label: "Cross-Platform Tech", value: "Android + iOS", badge: "React Native & Flutter" },
  { label: "B.Tech Academic CGPA", value: "8.2 CGPA", badge: "RKGIT Computer Science" },
];

export const ABOUT_SUMMARY = {
  paragraph1:
    "I am a results-driven React Native Developer with 3+ years of hands-on software engineering experience specializing in designing, building, and maintaining robust cross-platform mobile applications for Android and iOS.",
  paragraph2:
    "My expertise spans enterprise domains including HRMS, CRM, POS, Tax Management, and Society Management. I excel at integrating complex REST APIs, developing custom Kotlin Native Modules, implementing GPS location tracking, face recognition AI features, and optimizing performance for seamless user experiences.",
  highlights: [
    "Cross-Platform Native Engineering (React Native & Flutter)",
    "Custom Android Native Modules using Kotlin",
    "Real-time Socket.IO & FCM Push Notifications",
    "Payment Gateway Integrations (Razorpay & PayU)",
    "GPS Attendance & Geofencing Systems",
    "AI & Facial Recognition Visitor Workflows",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Mobile Development",
    items: [
      "React Native",
      "Flutter",
      "Android",
      "iOS",
      "React Native Native Modules",
      "Android Bridge Development",
    ],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Kotlin", "Dart", "C++", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "State Management",
    items: ["Redux", "Context API"],
  },
  {
    category: "APIs & Networking",
    items: ["REST APIs", "Axios", "JSON", "Socket.IO", "WebSockets"],
  },
  {
    category: "Backend Services",
    items: ["Firebase", "Firebase Cloud Messaging (FCM)"],
  },
  {
    category: "Navigation & Storage",
    items: ["React Navigation", "SQLite", "AsyncStorage"],
  },
  {
    category: "Tools",
    items: ["Android Studio", "Xcode", "VS Code", "Postman"],
  },
  {
    category: "Version Control & DevOps",
    items: ["Git", "GitHub", "GitLab", "Google Play Console", "Microsoft Azure"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "LeadChain Systems",
    role: "React Native Developer",
    period: "March 2024 – Present",
    location: "Greater Noida, Uttar Pradesh",
    points: [
      "Built and maintained cross-platform React Native applications across HRMS, CRM, POS, Tax Management, and Society Management domains.",
      "Integrated REST APIs using Axios with Redux for authentication, payroll, attendance, sales reports, and application state synchronization.",
      "Implemented Firebase/FCM and Socket.IO for real-time customer support chat, task alerts, and instant push notifications.",
      "Developed reusable UI component libraries ensuring visual consistency and high execution performance.",
      "Engineered GPS-based location tracking, geofenced attendance check-in/check-out, and shift validation workflows.",
      "Implemented AI-powered assistance and visitor verification using facial recognition features.",
      "Developed custom Android Native Modules in Kotlin for post-call overlays and OS-level system bridges.",
      "Published and actively maintain 3 production mobile applications on the Google Play Store.",
      "Optimized application performance, startup times, and resolved complex third-party integration issues in Agile releases.",
    ],
    technologies: ["React Native", "TypeScript", "Kotlin", "Redux", "REST APIs", "Socket.IO", "Firebase", "GPS Tracking"],
  },
  {
    company: "The Local Sandbox",
    role: "Associate Developer",
    period: "September 2023 – February 2024",
    location: "Remote / On-site",
    points: [
      "Developed responsive web application interfaces utilizing React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Built modular, reusable UI components and integrated RESTful APIs for client portals.",
      "Identified and fixed front-end UI bugs, improving cross-browser responsiveness and page loading speeds.",
      "Collaborated efficiently using Git workflows within an Agile development framework.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "REST APIs", "Git"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "taxlin",
    title: "Taxlin",
    category: "POS & Tax Management",
    shortDescription:
      "Comprehensive mobile business ERP, POS & tax management app featuring Sales, Purchase, Inventory, Accounting, E-Way/E-Invoice, Payment Gateways & Bluetooth Thermal Printing.",
    fullDescription:
      "Taxlin is an enterprise-grade mobile ERP & tax management ecosystem engineered for businesses. It streamlines complete end-to-end commercial operations including Sales & Goods Return, Customer & Vendor profiling, Purchase & Goods Receipts, full Double-entry Accounting (Payments, Receipts, Cash/Bank, TDS, Tax categories), Inventory Control (Stock Transfers, Godowns, Units), and E-Way/E-Invoice automation. Features custom Kotlin native bridges for Bluetooth thermal printers and multi-gateway payment integrations.",
    technologies: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Redux",
      "Razorpay",
      "PayU",
      "Paystack",
      "Bluetooth Thermal ESC/POS Bridge",
      "POS Engine",
      "SQLite / AsyncStorage",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.leadchain.taxlin",
    themeColor: "from-blue-600 to-indigo-700",
    accentGradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
    screenshotsPlaceholder: "/projects/taxlin/",
    screenshots: [
      "/projects/taxlin/Media (27).jpeg",
      "/projects/taxlin/Media (28).jpeg",
      "/projects/taxlin/Media (29).jpeg",
      "/projects/taxlin/Media (30).jpeg",
      "/projects/taxlin/Media (31).jpeg",
      "/projects/taxlin/Media (32).jpeg",
      "/projects/taxlin/Media (33).jpeg",
      "/projects/taxlin/Media (34).jpeg",
      "/projects/taxlin/Media (35).jpeg",
      "/projects/taxlin/Media (36).jpeg",
      "/projects/taxlin/Media (37).jpeg",
    ],
    highlights: [
      "Integrated multi-gateway payment collections (Razorpay, PayU, and Paystack).",
      "Built native Bluetooth Thermal Printer module supporting multi-size ESC/POS receipt generation.",
      "Engineered full accounting suite: Payments, Receipts, Journal, Cash/Bank, Tax, and TDS Categories.",
      "Implemented GST compliance rules for E-Way Bills, E-Invoicing, and multi-format PDF generation.",
    ],
    features: [
      {
        title: "Sales & Customer Module",
        description: "POS billing, sales orders, goods return, customer profiling, and auto invoice generation.",
      },
      {
        title: "Vendor & Purchase Module",
        description: "Purchase orders, goods receipt notes (GRN), purchase returns, and supplier management.",
      },
      {
        title: "Accounting & Finance",
        description: "Payment & receipt vouchers, journal entries, cash & bank ledger tracking, tax & TDS categories.",
      },
      {
        title: "Inventory & Warehousing",
        description: "Item categories, multi-godown stock transfers, charges, units of measurement, and transport logs.",
      },
      {
        title: "E-Way & E-Invoice Compliance",
        description: "Instant government portal compliant E-Way bill & E-Invoice generation directly from mobile transactions.",
      },
      {
        title: "Role-Based Access & Settings",
        description: "Granular permissions for Admin, Sub-Admin & Managers with company financial year numbering rules.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Connecting and printing thermal receipts across diverse multi-size Bluetooth printer hardware.",
        solution: "Engineered a custom native Android ESC/POS socket wrapper handling dynamic receipt formatting, text alignment, and raw byte stream printing without freezing the React Native thread.",
      },
      {
        challenge: "Maintaining double-entry accounting integrity across offline transactions and online server sync.",
        solution: "Built a robust Redux state sync engine backed by local SQLite storage to queue transaction vouchers and re-reconcile balance ledgers automatically upon reconnecting.",
      },
    ],
  },
  {
    slug: "hrmtree",
    title: "HRMTree",
    category: "Enterprise HRMS",
    shortDescription:
      "Enterprise HRMS & workforce platform with GPS geofenced attendance tracking, shift scheduling, Provident Fund/ESI/TDS compliance, asset management, and payroll.",
    fullDescription:
      "HRMTree is a comprehensive mobile Human Resource Management System (HRMS) engineered for modern enterprise workforces. It integrates GPS location tracking and geofencing for shift check-ins/check-outs, real-time employee directories, ticketing support desks, calendar scheduling, performance goals, training modules, project timesheets, Provident Fund (PF) & ESI compliance, TDS calculations, asset allocation, and multi-tier payroll processing.",
    technologies: [
      "React Native",
      "TypeScript",
      "GPS Location Engine",
      "Geofencing",
      "REST APIs",
      "Redux",
      "FCM Push Notifications",
      "PF / ESI / TDS Tax Engine",
      "AsyncStorage",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.leadchain.hrmtree",
    themeColor: "from-emerald-600 to-teal-700",
    accentGradient: "bg-gradient-to-r from-emerald-500 to-teal-500",
    screenshotsPlaceholder: "/projects/hrmtree/",
    screenshots: [
      "/projects/hrmtree/Media (36).jpeg",
      "/projects/hrmtree/Media (27).jpeg",
      "/projects/hrmtree/Media (28).jpeg",
      "/projects/hrmtree/Media (29).jpeg",
      "/projects/hrmtree/Media (30).jpeg",
      "/projects/hrmtree/Media (31).jpeg",
      "/projects/hrmtree/Media (32).jpeg",
      "/projects/hrmtree/Media (33).jpeg",
      "/projects/hrmtree/Media (34).jpeg",
      "/projects/hrmtree/Media (35).jpeg",
    ],
    highlights: [
      "Engineered GPS geofenced attendance check-in/out with anti-spoof location validation.",
      "Built Provident Fund (PF), ESI, and TDS compliance tax engine with PDF withdrawal requests.",
      "Integrated shift scheduling, overtime calculation, and leave approval workflows.",
      "Comprehensive HR suite: Asset Management, Performance Goals, Training, Projects & Timesheets.",
    ],
    features: [
      {
        title: "GPS Geofenced Attendance & Shifts",
        description: "Location-based perimeter check-in validation, shift rosters, overtime tracking, and leave management.",
      },
      {
        title: "Employee Directory & Organization",
        description: "Comprehensive employee records, department structures, designations, policies, and experience verification.",
      },
      {
        title: "Provident Fund, ESI & TDS Compliance",
        description: "Monthly contributions, PF withdrawal & loan requests, passbook statements, ESI tracking, and TDS tax slabs.",
      },
      {
        title: "Projects, Tasks & Timesheets",
        description: "Project allocations, taskboards, employee timesheet logging, and productivity monitoring.",
      },
      {
        title: "Support Tickets & Internal Helpdesk",
        description: "Employee query desk with ticket categories, priority levels, and SLA resolution tracking.",
      },
      {
        title: "Assets, Training & Performance",
        description: "Company hardware allocation, maintenance logs, employee goal setting, training schedules, and appraisal metrics.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Preventing fake GPS location spoofing during shift check-in and check-out.",
        solution: "Implemented native Android location provider inspection checks, checking for mock provider flags and OS hardware clock integrity before accepting attendance check-ins.",
      },
      {
        challenge: "Maintaining smooth UI responsiveness when computing complex statutory tax deductions (PF, ESI, TDS) across large workforce payroll batches.",
        solution: "Engineered isolated calculations in Redux selectors with memoized tax rules, preventing main thread lag during payslip rendering.",
      },
    ],
  },
  {
    slug: "teampage",
    title: "Teampage",
    category: "Enterprise CRM & Field Tracking",
    shortDescription:
      "Mobile CRM & Field Force app featuring lead/ticket creation, live GPS location tracking for field visits, and custom Kotlin/Java native post-call overlay modals.",
    fullDescription:
      "Teampage is a comprehensive Mobile CRM and Field Force Management application designed for sales, support, and field operations teams. It empowers organizations to seamlessly manage Leads, Tickets, Tasks, Opportunities, Products, Contacts, and Accounts. The app incorporates live GPS tracking for field executives during client visits to ensure verified check-ins at target locations. Crucially, it features custom Kotlin & Java native modules that render a system-level overlay call modal immediately when a phone call ends, enabling executives to instantly convert calls into Lead Tickets, Tasks, or Opportunities without opening the main app.",
    technologies: ["React Native", "Kotlin Native Modules", "Java Native Modules", "REST APIs", "Android Overlay System", "Redux", "GPS Validation"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.leadchain.teampage",
    themeColor: "from-purple-600 to-violet-700",
    accentGradient: "bg-gradient-to-r from-purple-500 to-violet-500",
    screenshotsPlaceholder: "/projects/teampage/",
    screenshots: [
      "/projects/teampage/Media (27).jpeg",
      "/projects/teampage/Media (28).jpeg",
      "/projects/teampage/Media (29).jpeg",
      "/projects/teampage/Media (30).jpeg",
      "/projects/teampage/Media (31).jpeg",
      "/projects/teampage/Media (32).jpeg",
      "/projects/teampage/Media (33).jpeg",
    ],
    highlights: [
      "Engineered custom Kotlin & Java Android Native Modules for system-level post-call overlay window modals.",
      "Instant post-call action window to directly convert disconnected phone calls into Lead Tickets, Tasks, or Opportunities.",
      "Live GPS Executive Location Tracking during field visits with geo-verified check-in at client locations.",
      "Complete CRM Lifecycle Management: Leads, Tickets, Tasks, Opportunities, Products, Contacts, and Accounts.",
    ],
    features: [
      { title: "Native Post-Call Overlay Modal", description: "Built with Kotlin & Java native modules; triggers an overlay window immediately when a call disconnects for instant conversion into Lead Tickets, Tasks, or Opportunities." },
      { title: "Field Executive Live GPS Tracking", description: "Tracks real-time executive location during field visits and restricts check-in to verified target client locations." },
      { title: "Full CRM Entity Creation", description: "Seamless creation and management of Leads, Tickets, Tasks, Opportunities, Products, Contacts, and Accounts." },
      { title: "Call-to-Lead Direct Conversion", description: "Streamlines sales workflows by logging call context and auto-populating CRM records directly from call events." },
    ],
    technicalChallenges: [
      {
        challenge: "Building a reliable system-level post-call overlay window on Android across Android 10 to 14 without crashing or getting killed by OS memory management.",
        solution: "Wrote custom Kotlin & Java Android Native Bridge utilizing Android `SYSTEM_ALERT_WINDOW` permissions, listening to telephony call states (`TelephonyManager.CALL_STATE_IDLE`) and managing lifecycle state directly in native code.",
      },
      {
        challenge: "Ensuring field executives check in strictly at the client's actual location during field visits.",
        solution: "Implemented live GPS tracking and anti-spoofing location verification that compares executive's current hardware GPS coordinates against target location radiuses before allowing check-in.",
      },
    ],
  },
  {
    slug: "society-flow",
    title: "Society Flow",
    category: "Smart Society Management & AI",
    shortDescription:
      "AI-powered gated community mobile platform featuring facial recognition visitor entry, resident alerts, and emergency dispatch.",
    fullDescription:
      "Society Flow is an advanced society and visitor management application designed to elevate security and community living in residential complexes. It replaces manual registers with AI-driven face verification, instant gate notifications, and automated visitor pass management.",
    technologies: ["React Native", "AI Facial Recognition", "REST APIs", "Socket.IO", "FCM Notifications", "Camera Bridge", "Redux"],
    themeColor: "from-amber-600 to-orange-700",
    accentGradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    screenshotsPlaceholder: "/projects/society-flow/",
    highlights: [
      "Integrated AI-powered face recognition module for fast, contact-free visitor & staff verification.",
      "Real-time gate approval notifications sent to resident phones with visitor photo verification.",
      "Emergency panic button sending instant audio-visual alerts to security guards and emergency contacts.",
      "Digital amenity booking, maintenance bill payments, and community bulletin boards.",
    ],
    features: [
      { title: "Facial Recognition Entry", description: "Instant visitor identification at guard gates using on-device/cloud AI face matching." },
      { title: "Resident Pass Approval", description: "One-click visitor pre-approvals, delivery code verification, and daily staff passes." },
      { title: "Emergency Panic Alerts", description: "High-priority alert dispatch to security desks during fire, medical, or security emergencies." },
      { title: "Society Operations", description: "Maintenance dues tracking, facility bookings, resident directories, and community polls." },
    ],
    technicalChallenges: [
      {
        challenge: "Achieving high accuracy and low latency for camera-based facial matching at gate terminals.",
        solution: "Optimized image compression pipelines before passing frame buffers to the recognition model, dropping processing time under 500ms.",
      },
      {
        challenge: "Ensuring emergency SOS alerts bypass phone silent settings.",
        solution: "Configured high-priority FCM notification channels with custom ringtone alert triggers on native platforms.",
      },
    ],
  },
];

export const EDUCATION: Education = {
  institution: "Raj Kumar Goel Institute of Technology, Ghaziabad",
  degree: "B.Tech — Computer Science and Engineering",
  period: "2020 – 2024",
  cgpa: "8.2",
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    year: "2024",
  },
  {
    title: "Back-End Development",
    issuer: "Meta",
    year: "2024",
  },
  {
    title: "Web Development Internship",
    issuer: "CodeClause",
    year: "2023",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "3 Production Apps Published",
    description: "Successfully built, deployed, and maintain 3 production mobile applications on Google Play Store with thousands of active business users.",
  },
  {
    title: "Multi-Domain Enterprise Architecture",
    description: "Engineered scalable cross-platform mobile solutions across HRMS, CRM, POS, Tax Management, and Smart Society Management domains.",
  },
  {
    title: "HackerRank C++ 4-Star Rating",
    description: "Demonstrated strong computer science fundamentals, algorithmic problem solving, and memory management through a 4-Star C++ rating on HackerRank.",
  },
];
