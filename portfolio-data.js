/**
 * ============================================================================
 * MAHIR AHMED — PORTFOLIO PRODUCTION DATA CONFIGURATION
 * ============================================================================
 *
 * This file is the single, authoritative data source for the portfolio.
 * All personal content, bios, skills, projects, education, timeline events,
 * and social channels are configured here.
 *
 * HOW TO MAINTAIN THIS FILE:
 * - Update Identity & Titles: Edit SEGMENT 1 (titles, order, timing).
 * - Update Biographies & Mission: Edit SEGMENT 2.
 * - Update Education: Edit SEGMENT 3.
 * - Update Skills: Edit SEGMENT 4.
 * - Add a Project: Copy an entry in SEGMENT 5 or use the provided template.
 * - Add a Timeline Milestone: Copy an entry in SEGMENT 6.
 * - Enable a Social Profile: Set `enabled: true` and paste your URL in SEGMENT 9.
 *
 * No HTML or rendering code needs to be modified when updating this data.
 * ============================================================================
 */

'use strict';

const PORTFOLIO_DATA = {
  /* ==========================================================================
     SEGMENT 1: IDENTITY & PUBLIC PROFILE
     ========================================================================== */
  identity: {
    fullName: 'Mahir Ahmed',
    displayName: 'Mahir Ahmed',

    // Primary professional identity heading
    headline: 'Developer, Black Hat Hacker & Reverse Engineer',
    role: 'Developer, Black Hat Hacker & Reverse Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'mahirahmed966@gmail.com',
    pronouns: 'He',
    status: 'Available for research, security & technical collaboration',

    // Animated titles displayed below name in exact required sequence
    titles: [
      'Developer',
      'Black Hat Hacker',
      'Reverse Engineer',
      'LLM & Agentic AI Enthusiast',
      'Digital Forensics Expert',
      'Creative Designer',
      'Linux Administrator'
    ],

    // Animation timing settings (in milliseconds)
    titleAnimation: {
      typeSpeed: 80,        // Character by character typing speed (ms)
      typeVariance: 20,     // Keystroke variance for natural cadence (+/- ms)
      deleteSpeed: 35,      // Character by character deletion speed (ms)
      pauseFull: 1000,      // Pause for 1 second when title is fully typed
      pauseEmpty: 350       // Pause after erasing before typing next title
    },

    // Core disciplines displayed as technical identity chips in About section
    disciplines: [
      'Cybersecurity & Black Hat Hacking',
      'Reverse Engineering & Forensics',
      'Software & Web Development',
      'Embedded Systems & Robotics',
      'Leadership & Strategic Planning'
    ]
  },

  /* ==========================================================================
     SEGMENT 2: BIOGRAPHIES & CORE VALUES
     ========================================================================== */
  biography: {
    // Short Bio: Compact overview for cards and meta summaries
    shortBio: 'A curious learner and developer with a focus on Information Technology, cybersecurity, programming, and emerging digital trends. Beyond tech, I enjoy creativity, leadership, communication, and exploring new ideas. I prefer learning through hands-on experience, practical problem solving, and continuous experimentation. My goal is to build meaningful and problem-solving projects, develop versatile skills, and create a positive impact through both technology and innovation.',

    // Long Bio: Narrative covering technology, philosophy, leadership, and ambitions
    longBio: [
      'I am a curious learner, developer, and aspiring leader driven by one simple idea: never stop becoming better than who I was yesterday. My interests exist at the intersection of technology, strategy, human behavior, leadership, and entrepreneurship. I do not want to be defined by a single skill or a single field. I want to understand systems, people, ideas, and the world around me—and turn that understanding into something meaningful.',
      'My journey began with curiosity. I wanted to know how technology worked, how digital systems were built, and how problems could be solved creatively. Over time, that curiosity evolved into a deeper interest in Information Technology, programming, cybersecurity, web development, digital products, and emerging technologies. I learn best by building rather than simply observing. Projects, experiments, failures, and problem-solving have become some of my most valuable teachers.',
      'Working with technology has also changed the way I think. I have learned to approach problems logically, break complex challenges into smaller parts, question assumptions, and remain patient when things do not work on the first attempt. More importantly, I have learned that technical ability means little without discipline, judgment, ethics, and responsibility.',
      'My identity, however, extends far beyond technology. I have a strong interest in geopolitics, philosophy, psychology, human behavior, and the dynamics of influence and decision-making. Books are one of my favorite ways to explore these subjects. I am fascinated by why people think differently, what drives human decisions, how power shapes societies, how nations compete, and how individuals respond to pressure, uncertainty, and influence. These interests have taught me to look beyond the obvious and search for the deeper forces behind events.',
      'Entrepreneurship is another important part of my vision. I want to build ideas, products, and ventures rather than remain only a consumer of existing systems. I am interested in innovation, leadership, strategy, branding, and creating things that solve real problems.',
      'At the same time, I have a long-term ambition that is deeply connected with discipline and service: I aspire to become a military officer. I am drawn to the values of courage, responsibility, leadership, resilience, decision-making under pressure, and commitment to something larger than oneself. I also aspire to become an entrepreneur, creating a life where leadership and innovation work together.',
      'My ultimate goal is not simply to become successful. I want to become capable. Capable of leading, building, adapting, thinking critically, making difficult decisions, and standing firm when circumstances become difficult. I am still at the beginning of the journey. There is much more to learn, build, experience, and overcome. But that is exactly what makes the journey exciting. I am not trying to fit into one definition—I am building my own.'
    ],

    // Personal Mission Statement
    mission: 'To continuously develop myself in knowledge, discipline, leadership, technology, and strategic thinking; to understand people, systems, and the world with depth; and to use what I learn to lead with integrity, build meaningful ventures, serve a greater purpose, and create lasting impact through courage, responsibility, and relentless self-improvement.',

    // Guiding Personal Principle
    philosophyQuote: 'If I play, I play to win.',

    // Core Values
    values: [
      { name: 'Discipline', description: 'Consistency, structured effort, and staying committed through resistance.' },
      { name: 'Integrity', description: 'Honesty in code, actions, and ethical responsibility in security research.' },
      { name: 'Continuous Learning', description: 'Relentless curiosity and expanding capabilities across disciplines.' },
      { name: 'Leadership', description: 'Taking initiative, organizing teams, and serving a purpose greater than oneself.' },
      { name: 'Courage', description: 'Embracing difficult problems, testing assumptions, and standing firm under pressure.' }
    ]
  },

  /* ==========================================================================
     SEGMENT 3: EDUCATION & LEARNING JOURNEY
     ========================================================================== */
  education: {
    institution: 'Shaheed Police Smrity College, Dhaka',
    program: 'Class 9 — Science Group',
    period: '2026 – Present',
    status: 'Current Education',
    highlights: [
      'Currently serving as President of the SPSC IT and Robotics Club, leading students in programming, robotics, innovation, and technological initiatives.',
      'Former BNCC Cadet, developing discipline, leadership, teamwork, and operational resilience.',
      'Actively involved with multiple volunteer and social service organizations, contributing to community welfare and outreach projects.',
      'Participated in school-level technology competitions, extracurricular activities, and cross-functional student projects.',
      'Developed practical organizational, event coordination, and public engagement skills through student leadership.'
    ],
    selfLearning: [
      'Cybersecurity, Penetration Testing & Ethical Hacking',
      'Digital Forensics, Reverse Engineering & Malware Analysis',
      'Programming (Python, JavaScript, Kotlin, Bash)',
      'Web Architecture & Client-Side Systems Engineering',
      'Computer Networking & Linux Systems Administration',
      'Artificial Intelligence, LLM Pipelines & Agentic Systems',
      'Electronics, ESP32 Microcontrollers & Embedded IoT',
      'Geopolitics, International Relations & Strategic Analysis',
      'Philosophy, Logic, Human Behavior & Decision-Making'
    ],
    languages: [
      { language: 'Bengali (Bangla)', proficiency: 'Native / First Language' },
      { language: 'English', proficiency: 'Professional Working Proficiency' }
    ]
  },

  /* ==========================================================================
     SEGMENT 4: SKILLS & CAPABILITY MATRIX
     ==========================================================================
     Categorized across 9 major capability domains.
     Levels are self-assessed qualitative states:
       - 'advanced': In-depth practical mastery and frequent application
       - 'practicing': Working competence and active project usage
       - 'learning': Active exploration, research, and lab experimentation
     ========================================================================== */
  skills: [
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Black Hat Hacking',
      blurb: 'Vulnerability assessment, reconnaissance, network defense, and offensive security tooling.',
      items: [
        { name: 'Cybersecurity & Ethical Hacking', level: 'practicing', note: 'Hands-on CTF labs, offensive methodology, and defensive fundamentals.' },
        { name: 'Web Security & Vulnerability Assessment', level: 'practicing', note: 'OWASP Top 10, authentication logic, input validation, and headers.' },
        { name: 'Reconnaissance & OSINT', level: 'advanced', note: 'Attack-surface mapping, open-source intelligence gathering, and target profiling.' },
        { name: 'Network Security', level: 'practicing', note: 'Packet capture analysis, protocol inspection, and perimeter segmentation.' },
        { name: 'Linux / Kali Linux / Termux', level: 'advanced', note: 'Daily driver environments for automated scripting, recon, and security tools.' },
        { name: 'Security Research', level: 'practicing', note: 'Documentation-driven vulnerability analysis and responsible testing.' }
      ]
    },
    {
      id: 'forensics',
      name: 'Forensics & Reverse Engineering',
      blurb: 'Binary inspection, code decompilation, and Android application security analysis.',
      items: [
        { name: 'Digital Forensics', level: 'practicing', note: 'Artifact analysis, log inspection, and evidentiary file recovery concepts.' },
        { name: 'APK & Android Security', level: 'practicing', note: 'Decompiling Android APKs, inspecting manifests, and analyzing app permissions.' },
        { name: 'Reverse Engineering', level: 'practicing', note: 'Static and dynamic analysis of binaries and runtime behavior.' },
        { name: 'Malware Analysis', level: 'learning', note: 'Safe sandbox execution, behavior profiling, and signature identification.' },
        { name: 'Decompilation & Code Analysis', level: 'practicing', note: 'Bytecode analysis, reverse-engineering logic, and obfuscation breakdown.' }
      ]
    },
    {
      id: 'programming',
      name: 'Programming & Software Development',
      blurb: 'Multi-language application development, automation, and algorithmic problem solving.',
      items: [
        { name: 'Python', level: 'advanced', note: 'Automation scripts, CLI tools, security utilities, and data processing.' },
        { name: 'Modern JavaScript (ES6+)', level: 'advanced', note: 'Vanilla client-side state engines, DOM animation, and zero-dependency web applications.' },
        { name: 'Kotlin', level: 'practicing', note: 'Modern native Android development with Jetpack Compose and SQLite.' },
        { name: 'HTML5 & Modular CSS3', level: 'advanced', note: 'Semantic markup, custom properties, responsive systems, and design tokens.' },
        { name: 'Scripting & Automation', level: 'advanced', note: 'Shell pipelines, file processors, and workflow efficiency tooling.' },
        { name: 'REST APIs & Data Handling', level: 'practicing', note: 'API integration, JSON serialization, and persistent local storage patterns.' },
        { name: 'Debugging & Problem Solving', level: 'advanced', note: 'Root-cause isolation, error tracing, and defensive code design.' }
      ]
    },
    {
      id: 'networking',
      name: 'Networking & Systems',
      blurb: 'Computer networking protocols, operating system internals, and CLI administration.',
      items: [
        { name: 'Computer Networking', level: 'practicing', note: 'OSI layers, packet routing, switching, and socket communication.' },
        { name: 'TCP/IP, IP Addressing & DNS', level: 'practicing', note: 'Subnetting, name resolution, handshake mechanics, and troubleshooting.' },
        { name: 'Linux Systems Administration', level: 'advanced', note: 'File system permissions, services, process management, and shell pipelines.' },
        { name: 'Windows Internals & CLI', level: 'practicing', note: 'PowerShell scripting, task scheduling, and system administration.' },
        { name: 'Network Troubleshooting', level: 'practicing', note: 'Diagnostics using Nmap, Wireshark, netstat, and ping/traceroute.' }
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics, Robotics & Embedded IoT',
      blurb: 'Microcontrollers, sensor fusion, hardware prototyping, and physical computing.',
      items: [
        { name: 'ESP32 & Microcontrollers', level: 'practicing', note: 'Dual-core task orchestration, Wi-Fi/BLE integration, and GPIO control.' },
        { name: 'Sensors, Displays & Modules', level: 'practicing', note: 'I2C/SPI interfaces, sensor data calibration, and visual telemetry.' },
        { name: 'Robotics & IoT Telemetry', level: 'practicing', note: 'Motor control, autonomous sensor logic, and device-to-dashboard streaming.' },
        { name: 'Electronics & Circuit Prototyping', level: 'practicing', note: 'Breadboard wiring, component debugging, and power profiling.' },
        { name: 'Hardware Troubleshooting', level: 'practicing', note: 'Serial UART diagnostics, logic level checking, and hardware fault finding.' }
      ]
    },
    {
      id: 'ai',
      name: 'AI & Emerging Technologies',
      blurb: 'Applied artificial intelligence, LLM workflows, and intelligent agent architectures.',
      items: [
        { name: 'Generative AI & LLMs', level: 'practicing', note: 'Context framing, prompt architecture, and practical model application.' },
        { name: 'Agentic AI Workflows', level: 'practicing', note: 'Tool-assisted execution loops, multi-agent concepts, and structured reasoning.' },
        { name: 'AI-Assisted Development', level: 'advanced', note: 'Pair-programming with advanced coding agents and architectural design.' },
        { name: 'Emerging Technology Research', level: 'practicing', note: 'Evaluating breakthrough technologies across compute, security, and hardware.' }
      ]
    },
    {
      id: 'design',
      name: 'Graphic Design, UI/UX & Creative',
      blurb: 'Visual composition, design systems, editorial layouts, and digital media production.',
      items: [
        { name: 'UI/UX Engineering', level: 'advanced', note: 'Information architecture, micro-interactions, responsive states, and ergonomics.' },
        { name: 'Graphic Design & Branding', level: 'practicing', note: 'Color theory, typography hierarchy, vector graphics, and brand identity.' },
        { name: 'Video Editing & Motion', level: 'practicing', note: 'Timeline composition, pacing, transitions, and multimedia production.' },
        { name: 'Digital Content Creation', level: 'practicing', note: 'Technical documentation, visual assets, and instructional media.' }
      ]
    },
    {
      id: 'leadership',
      name: 'Leadership, Communication & Strategy',
      blurb: 'Team coordination, organizational leadership, public presentation, and strategic planning.',
      items: [
        { name: 'Club & Team Leadership', level: 'advanced', note: 'President of SPSC IT & Robotics Club; motivating teams and guiding projects.' },
        { name: 'Communication & Public Speaking', level: 'practicing', note: 'Presenting technical concepts clearly to diverse audiences and teams.' },
        { name: 'Event & Project Coordination', level: 'practicing', note: 'Organizing workshops, club sessions, and collaborative group initiatives.' },
        { name: 'Entrepreneurship & Strategy', level: 'practicing', note: 'Product ideation, problem-solution alignment, and execution discipline.' }
      ]
    },
    {
      id: 'research',
      name: 'Research, Analysis & Strategic Thinking',
      blurb: 'Evidence-based inquiry, critical thinking, and cross-domain synthesis.',
      items: [
        { name: 'Technology & Security Research', level: 'practicing', note: 'Systematic analysis of software behaviors, vulnerabilities, and architectures.' },
        { name: 'Critical & Analytical Thinking', level: 'advanced', note: 'Breaking complex problems into first principles and questioning assumptions.' },
        { name: 'Geopolitics & Human Behavior', level: 'practicing', note: 'Studying international relations, strategic competition, and decision dynamics.' },
        { name: 'Strategic Decision-Making', level: 'practicing', note: 'Evaluating trade-offs under uncertainty with long-term perspective.' }
      ]
    }
  ],

  /* ==========================================================================
     SEGMENT 5: PROJECTS & SELECTED WORK
     ==========================================================================
     All entries represent genuine projects verified against source repositories
     and live deployments on GitHub.
     ========================================================================== */
  projects: [
    {
      id: 'mcq-hub',
      title: 'MCQ HUB — Offline-First SSC Learning Platform',
      category: 'Software',
      status: 'Version 11 Released',
      year: 2026,
      featured: true,
      description: 'An offline-first Android learning application for SSC students in Bangladesh, featuring 4,590 textbook MCQs across 153 chapters, exam simulations, and an embedded Study Tracker.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Material 3', 'SQLite', 'WebView', 'Gradle DSL'],
      github: 'https://github.com/Mahir966/MCQ-HUB',
      demo: 'https://mahir966.github.io/MCQ-HUB/',
      image: '',
      problem: 'Secondary students in Bangladesh face high mobile data costs, intermittent connectivity, and fragmented study resources when preparing for nationwide board examinations.',
      solution: 'Engineered an offline-first mobile application combining randomized chapter drills, instant evaluation, persistent local progress tracking, and curated revision notes with zero recurring network dependency.',
      architecture: 'Clean Architecture with MVI/MVVM design patterns. Built with Kotlin and Jetpack Compose on Material 3; SQLite for persistent local candidate exam records; bundled JSON assets for 4,590 question sets; integrated 15-view Study Tracker running via embedded WebView with localStorage persistence.',
      challenges: 'Handling thousands of questions without memory overhead; ensuring strict option randomization without desynchronizing answer keys; maintaining local state across Android lifecycle events.',
      results: 'Shipped Version 11 covering 153 curriculum chapters with zero backend latency or API costs. Awarded 3rd Place in the App Showcase at the 9th International Tech Carnival.'
    },
    {
      id: 'study-os',
      title: 'Study OS — Class 9 Annual Examination System',
      category: 'Software',
      status: 'Active System',
      year: 2026,
      featured: true,
      description: 'An offline-first study operating system tailored for the NCTB Class 9 Annual Examination (20 November 2026), uniting verified syllabus tracking, spaced revision, and Pomodoro focus workflows.',
      technologies: ['HTML5', 'Modular CSS', 'JavaScript (ES6+)', 'Canvas API', 'LocalStorage'],
      github: 'https://github.com/Mahir966/Study-OS-v2',
      demo: 'https://mahir966.github.io/Study-OS-v2/',
      image: '',
      problem: 'Students preparing for annual board exams lack a centralized, distraction-free environment that balances complete syllabus coverage, spaced revision cycles, and daily progress analytics.',
      solution: 'Created a unified client-side operating system providing authoritative NCTB chapter breakdowns for 12 subjects, a dynamic catch-up planner, formula banks, mistake trackers, and focus sessions.',
      architecture: '100% Client-side static architecture with zero third-party dependencies. Custom Pomodoro timing engine utilizing absolute Date.now() timestamp deltas for background persistence across tab switches; 4-stage spaced revision scheduler; custom Canvas visual charts computed from real activity logs; localStorage persistence with JSON export/import backup schemas.',
      challenges: 'Formulating subject-specific task archetypes tailored to NCTB examination formats and building resilient data redistribution algorithms when scheduled days are missed.',
      results: 'Deployed as an ultra-fast static application functioning fully offline after loading, featuring 9 color themes and tested down to 360px mobile viewports.'
    },
    {
      id: 'ssc-countdown',
      title: 'SSC Countdown — Real-Time Academic Journey Tracker',
      category: 'Web',
      status: 'Production Live',
      year: 2026,
      featured: true,
      description: 'A precision countdown engine and educational roadmap tracking student preparation for the Secondary School Certificate examination in Bangladesh Standard Time.',
      technologies: ['JavaScript (Vanilla)', 'HTML5', 'CSS Design Tokens', 'ARIA Landmark Regions'],
      github: 'https://github.com/Mahir966/SSC-Countdown',
      demo: 'https://mahir966.github.io/SSC-Countdown/',
      image: '',
      problem: 'Secondary students frequently struggle to conceptualize long-term preparation timelines, milestones, and daily progress toward high-stakes board examinations.',
      solution: 'Engineered an accessible web application that automatically identifies the student’s exact grade level based on batch year, calculates examination commencement dates (February 1), and maps a complete 10-year academic trajectory.',
      architecture: 'High-precision vanilla JavaScript timer loop synchronized to Bangladesh Standard Time (BST, UTC+6); modular CSS with glassmorphic depth effects; dynamic milestone milestone cards with automated grade mapping.',
      challenges: 'Eliminating timer drift across tab suspensions and ensuring high-contrast readability across mobile and desktop devices.',
      results: 'Verified mathematically sound and distributed live on GitHub Pages with zero external dependencies.'
    },
    {
      id: 'retirement-countdown',
      title: 'Retirement Countdown & BD Career Tools',
      category: 'Web',
      status: 'Production Live',
      year: 2026,
      featured: true,
      description: 'An informational countdown calculator for Bangladesh public service personnel based on statutory retirement provisions under Section 43 of the Government Service Act, 2018.',
      technologies: ['TypeScript', 'Vite', 'React', 'Date Engine', 'Tailwind CSS'],
      github: 'https://github.com/Mahir966/Retirement-Countdown',
      demo: 'https://mahir966.github.io/Retirement-Countdown/',
      image: '',
      problem: 'Determining exact statutory retirement dates in Bangladesh government service involves navigating specific service categories, birth certificate rules, and statutory age exceptions.',
      solution: 'Developed an interactive calculation utility applying general retirement rules (age 59) and Freedom Fighter employee provisions (age 60) with instant remaining tenure breakdowns.',
      architecture: 'Proleptic-Gregorian date arithmetic accounting for leap years, February 29 clamps, and month-end boundaries; expanded into BD-Career-Tools platform with verified unit tests for edge-case dates.',
      challenges: 'Handling date edge cases, leap years, and calendar boundaries cleanly in client-side code while clearly presenting non-authoritative statutory disclaimers.',
      results: 'Deployed publicly on GitHub Pages as an intuitive, privacy-first reference utility.'
    },
    {
      id: 'spsc-itrc-cv-form',
      title: 'SPSC ITRC Intake & CV System',
      category: 'Web',
      status: 'Production Live',
      year: 2026,
      featured: false,
      description: 'Club membership intake, candidate profiling, and automated CV generator application for the Shaheed Police Smrity College IT & Robotics Club.',
      technologies: ['HTML5', 'Modular CSS', 'JavaScript', 'Client-side PDF Generation'],
      github: 'https://github.com/Mahir966/SPSC-ITRC-CV-Form',
      demo: 'https://mahir966.github.io/SPSC-ITRC-CV-Form/',
      image: '',
      problem: 'Managing student club applicant profiles and technical skill inventories required a structured, accessible digital intake method.',
      solution: 'Engineered a branded membership application system capturing student technical interests, club department choices, and generating print-ready PDF CVs directly in-browser.',
      architecture: '12-step guided intake workflow with dynamic repeatable skill fields, soft skills rating assessments, client-side validation, and in-browser print styling.',
      challenges: 'Creating an intuitive user experience for students across mobile devices and school desktop computers.',
      results: 'Successfully deployed on GitHub Pages for club intake operations at Shaheed Police Smrity College.'
    },
    {
      id: 'physics-study-tracker',
      title: 'Physics Study Tracker — NCTB Curriculum Mastery',
      category: 'Web',
      status: 'Production Live',
      year: 2026,
      featured: false,
      description: 'Curriculum-aligned chapter mastery and formula tracking workspace for secondary physics students.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
      github: 'https://github.com/Mahir966/Physics-Study-Tracker',
      demo: 'https://mahir966.github.io/Physics-Study-Tracker/',
      image: '',
      problem: 'Physics students need structured tracking across numerical problem solving, core definitions, and board exam revision cycles.',
      solution: 'A focused, responsive checklist and formula repository with chapter-level completion states stored locally.',
      architecture: 'Single-page static web application utilizing native Web Storage APIs and responsive CSS grid layout.',
      challenges: 'Organizing complex NCTB physics chapters into bite-sized, actionable study milestones.',
      results: 'Active learning utility maintained and deployed publicly on GitHub Pages.'
    },
    {
      id: 'tools-collections',
      title: 'Tools Collections — Multi-Utility Web Suite',
      category: 'Web',
      status: 'Production Live',
      year: 2026,
      featured: false,
      description: 'A curated collection of client-side web utilities, converters, and computational tools deployed on GitHub Pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Mahir966/Tools-Collections',
      demo: 'https://mahir966.github.io/Tools-Collections/',
      image: '',
      problem: 'Users need instant access to essential web tools without tracking, ad walls, or backend network dependencies.',
      solution: 'Engineered a lightweight, static multi-utility suite running 100% locally in the browser.',
      architecture: 'Clean static layout with modular tools and responsive styling.',
      challenges: 'Maintaining high performance across varying devices without external dependencies.',
      results: 'Deployed and maintained live on GitHub Pages.'
    }

    // ========================================================================
    // OPTIONAL TEMPLATE FOR FUTURE PROJECTS:
    // To add another project, simply uncomment the template below and fill in
    // your details. It will automatically render into the grid, filters,
    // search, and details modal!
    // ========================================================================
    // ,{
    //   id: 'my-new-project',
    //   title: 'Project Title',
    //   category: 'Cybersecurity', // Choices: 'Software', 'Web', 'Cybersecurity', 'AI', 'Robotics'
    //   status: 'Completed',
    //   year: 2026,
    //   featured: false,
    //   description: 'A concise 1-2 sentence overview of what this project accomplishes.',
    //   technologies: ['Python', 'Linux', 'Security'],
    //   github: 'https://github.com/Mahir966/my-new-project',
    //   demo: 'https://mahir966.github.io/my-new-project/',
    //   image: '',
    //   problem: 'The problem this project solves.',
    //   solution: 'How you solved it.',
    //   architecture: 'Technical stack and architecture details.',
    //   challenges: 'Key engineering hurdles overcome.',
    //   results: 'Verified outcomes and metrics.'
    // }
  ],

  /* ==========================================================================
     SEGMENT 6: EXPERIENCE & LEADERSHIP TIMELINE
     ========================================================================== */
  timeline: [
    {
      year: '2026',
      date: '2026 — Present',
      title: 'President, SPSC IT & Robotics Club',
      org: 'Shaheed Police Smrity College, Dhaka',
      kind: 'leadership',
      text: 'Serving as President to mentor students, organize technology workshops, oversee club programming initiatives, and guide teams in robotics and IT innovation.',
      tech: ['Leadership', 'Event Coordination', 'Robotics', 'Programming', 'Public Speaking']
    },
    {
      year: '2026',
      date: 'October 2026',
      title: '3rd Place — 9th International Tech Carnival',
      org: 'App Showcase Competition',
      kind: 'achievement',
      text: 'Competed with MCQ HUB Version 11, presenting the offline-first Android architecture, 4,590 question database, and embedded study tracker to earn 3rd place in the showcase.',
      tech: ['Kotlin', 'Android', 'App Showcase', 'Offline-First']
    },
    {
      year: '2026',
      date: '2026',
      title: 'Architected & Shipped Study OS and Educational Systems',
      org: 'Independent Projects',
      kind: 'project',
      text: 'Designed and deployed Study OS, SSC Countdown, and Retirement Countdown as high-performance, client-side applications built for Bangladeshi students and public users.',
      tech: ['JavaScript', 'HTML5', 'CSS Design Tokens', 'Canvas API', 'LocalStorage']
    },
    {
      year: '2025',
      date: '2025 — Present',
      title: 'Security Research & Hands-on CTF Competitions',
      org: 'TryHackMe & Independent Labs',
      kind: 'learning',
      text: 'Engaging in penetration testing labs, CTF challenges, web application security reviews, OSINT investigations, and digital forensics analysis.',
      tech: ['Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Python', 'Reverse Engineering']
    },
    {
      year: '2024',
      date: '2024 — 2025',
      title: 'Cadet Leadership & Training',
      org: 'Bangladesh National Cadet Corps (BNCC)',
      kind: 'leadership',
      text: 'Underwent military-oriented cadet training developing discipline, leadership under pressure, physical resilience, team coordination, and civic duty.',
      tech: ['Discipline', 'Leadership', 'Teamwork', 'Resilience', 'Physical Training']
    },
    {
      year: '2023',
      date: '2023 — Present',
      title: 'Community Volunteer & Social Service Initiatives',
      org: 'Community & Volunteer Organizations',
      kind: 'leadership',
      text: 'Participated in community social welfare projects, volunteer coordination, public support campaigns, and teamwork initiatives.',
      tech: ['Public Service', 'Volunteering', 'Coordination', 'Community Welfare']
    }

    // ========================================================================
    // OPTIONAL TEMPLATE FOR FUTURE TIMELINE ENTRIES:
    // To add a new milestone, uncomment below and customize.
    // ========================================================================
    // ,{
    //   year: '2027',
    //   date: '2027',
    //   title: 'Future Milestone Title',
    //   org: 'Organization / Context',
    //   kind: 'leadership', // Choices: 'leadership', 'project', 'achievement', 'learning', 'education'
    //   text: 'Description of what was accomplished and learned.',
    //   tech: ['Skill1', 'Skill2']
    // }
  ],

  /* ==========================================================================
     SEGMENT 7: INTELLECTUAL & NON-TECHNICAL INTERESTS
     ========================================================================== */
  intellectualInterests: [
    {
      category: 'Literature & Philosophy',
      summary: 'Exploring classic literature, novels, and philosophical inquiry to understand ethics, human nature, and critical thinking.',
      topics: ['Novels & Literature', 'Stoicism & Discipline', 'Ethics & Critical Thinking', 'Philosophy of Power & Influence']
    },
    {
      category: 'Science & Physics',
      summary: 'Fascinated by cosmology, astrophysics, and physical laws governing the universe from micro to macro scales.',
      topics: ['Astronomy & Stargazing', 'Modern Physics', 'Orbital Mechanics & Space Science', 'Scientific Methodology']
    },
    {
      category: 'Geopolitics & History',
      summary: 'Studying international relations, historical conflicts, institutional power, and global strategic competition.',
      topics: ['Geopolitics', 'World History', 'Diplomatic Strategy', 'Comparative Systems']
    },
    {
      category: 'Psychology & Human Behavior',
      summary: 'Analyzing human decision-making, cognitive biases, influence under pressure, and organizational dynamics.',
      topics: ['Cognitive Psychology', 'Human Decision Dynamics', 'Leadership Psychology', 'Societal Behavior']
    },
    {
      category: 'World Religions & Intellectual Study',
      summary: 'Objective academic examination of major world theological traditions, moral frameworks, and cultural history.',
      topics: ['Comparative Religion', 'Theological History', 'Moral Frameworks']
    },
    {
      category: 'Creative Expression & The Outdoors',
      summary: 'Balancing intellectual focus with physical observation, creativity, and outdoor persistence.',
      topics: ['Photography', 'Creative Writing', 'Graphic & UI Design', 'Fishing & Outdoor Exploration', 'Hunting']
    }
  ],

  /* ==========================================================================
     SEGMENT 8: SOCIAL MEDIA & CHANNELS
     ==========================================================================
     Confirmed profiles are marked `enabled: true`.
     Unconfirmed networks are provided as commented/disabled templates.
     ========================================================================== */
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/Mahir966/',
      username: '@Mahir966',
      enabled: true
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mahirahmed966/',
      username: 'mahirahmed966',
      enabled: true
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/mahirahmed966/',
      username: 'mahirahmed966',
      enabled: true
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/mahirahmed_966',
      username: '@mahirahmed_966',
      enabled: true
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:mahirahmed966@gmail.com',
      username: 'mahirahmed966@gmail.com',
      enabled: true
    }

    // ========================================================================
    // OPTIONAL CHANNELS FOR FUTURE USE:
    // To enable any of these, set `enabled: true` and paste your profile URL.
    // ========================================================================
    // ,{
    //   id: 'telegram',
    //   label: 'Telegram',
    //   url: 'https://t.me/yourusername',
    //   username: '@yourusername',
    //   enabled: false
    // },
    // {
    //   id: 'x',
    //   label: 'X / Twitter',
    //   url: 'https://x.com/yourusername',
    //   username: '@yourusername',
    //   enabled: false
    // },
    // {
    //   id: 'discord',
    //   label: 'Discord',
    //   url: 'https://discord.com/users/yourusername',
    //   username: 'yourusername',
    //   enabled: false
    // },
    // {
    //   id: 'youtube',
    //   label: 'YouTube',
    //   url: 'https://youtube.com/@yourchannel',
    //   username: '@yourchannel',
    //   enabled: false
    // }
  ],

  /* ==========================================================================
     SEGMENT 9: CONTACT SETTINGS & NOTES
     ========================================================================== */
  contact: {
    directEmail: 'mahirahmed966@gmail.com',
    ctaHeading: 'Let\'s Connect & Build',
    ctaNote: 'Direct channels only — no intermediary forms or third-party databases. Reach out via email or connect on LinkedIn and GitHub.',
    availability: [
      'Technical collaboration on open-source and educational tools',
      'Cybersecurity research and ethical CTF team participation',
      'Student leadership, technology workshops, and club activities',
      'Software development projects and creative design initiatives'
    ],
    notes: [
      'Replies typically within 24–48 hours',
      'Open to technical collaboration, research, and open-source contributions',
      'Security research inquiries must follow ethical disclosure principles'
    ]
  }
};

// Expose on global window object for browser access
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
