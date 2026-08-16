# Portfolio Project Architecture & Code Structure Documentation

This document explains the entire code architecture and file layout of your Next.js Developer Portfolio website. It is designed to give you a clear, simple understanding of how every component, page, and data structure works together.

---

## 🏛️ High-Level Architecture Overview

Your website follows a clean **Component-Driven Architecture** built with **Next.js (App Router)** and **TypeScript**:

```
gavishi-portfolio/
 ├── data/                     <-- CENTRAL DATA SOURCE (Single Source of Truth)
 │    └── portfolioData.ts     (All text, resume info, experiences, projects, skills)
 │
 ├── components/               <-- REUSABLE UI COMPONENTS
 │    ├── Navbar.tsx           (Header navigation bar)
 │    ├── Hero.tsx             (Top section with title, badges, download resume CTA)
 │    ├── QuickStats.tsx       (Key metrics & achievements counter)
 │    ├── About.tsx            (Bio, highlights, core values)
 │    ├── TechStack.tsx        (Categorized mobile & web engineering skills)
 │    ├── Experience.tsx       (Interactive career timeline)
 │    ├── Projects.tsx         (Featured production app cards)
 │    ├── Education.tsx        (Degree & academic summary)
 │    ├── Achievements.tsx     (Key professional milestones)
 │    ├── Contact.tsx          (Get in touch form & contact links)
 │    ├── DeviceMockup.tsx     (Smartphone graphic container)
 │    └── Footer.tsx           (Bottom copyright & back-to-top button)
 │
 ├── app/                      <-- NEXT.JS APP ROUTER (Page Layouts & Routing)
 │    ├── layout.tsx           (Root html/body structure & global fonts)
 │    ├── page.tsx             (Homepage - imports and stacks all components)
 │    ├── globals.css          (Global styling, dark theme colors, animations)
 │    └── projects/
 │         └── [slug]/
 │              └── page.tsx   (Dynamic project detail case study page)
 │
 └── public/                   <-- STATIC ASSETS & MEDIA
      ├── Gavishi_Raj_Resume.pdf  (Your downloadable resume)
      └── projects/            (Folder containing real mobile app screenshots)
           ├── taxlin/
           ├── hrmtree/
           ├── teampage/
           └── society-flow/
```

---

## 🔑 Key Architectural Principles Explained Simply

### 1. Centralized Data Source (`/data/portfolioData.ts`)
Instead of hardcoding text inside HTML/JSX elements, **all content is stored in a single file**: `data/portfolioData.ts`.
- If you want to update your resume link, phone number, bio, skills, or job experience, **you only edit `data/portfolioData.ts`**.
- Components automatically receive and render this updated data.

### 2. Homepage Flow (`app/page.tsx`)
The homepage is simple and lightweight. It imports each visual section from `components/` and stacks them top-to-bottom:
1. `<Navbar />` — Fixed top menu with smooth-scroll section links
2. `<Hero />` — Headline, badges, profile intro, and interactive smartphone mockup
3. `<QuickStats />` — Highlight numbers (3+ Years Experience, 3 Published Apps, etc.)
4. `<About />` — Executive summary & engineering highlights
5. `<TechStack />` — Filterable skill category cards
6. `<Experience />` — Timeline of roles at LeadChain Systems & past work
7. `<Projects />` — Production app cards (Taxlin, HRMTree, Teampage, Society Flow)
8. `<Education />` — B.Tech Computer Science & CGPA details
9. `<Achievements />` — Certifications & milestones
10. `<Contact />` — Direct email form & quick connect links
11. `<Footer />` — Navigation links & back-to-top scroll

### 3. Dynamic Case Study Pages (`app/projects/[slug]/page.tsx`)
When a visitor clicks on any project card (e.g., *Taxlin*, *HRMTree*, or *Teampage*), Next.js dynamically renders `app/projects/[slug]/page.tsx`:
- It fetches the exact project data matching the slug from `data/portfolioData.ts`.
- It renders a dedicated case study page with full app descriptions, native module highlights, features, and the high-definition screenshot gallery.
- **Static Generation (`generateStaticParams`)**: Ensures every case study page is pre-rendered at build time for instant page loading speed.

---

## 🛠️ How to Maintain & Update Content

| Task | File Location |
| :--- | :--- |
| **Update Personal Info / Resume Link** | Edit `PERSONAL_INFO` in `data/portfolioData.ts` |
| **Add / Edit Skills** | Edit `SKILL_CATEGORIES` in `data/portfolioData.ts` |
| **Add / Edit Job Roles** | Edit `EXPERIENCES` in `data/portfolioData.ts` |
| **Add / Edit Projects** | Edit `PROJECTS` in `data/portfolioData.ts` |
| **Add App Screenshots** | Place `.jpeg` / `.png` files inside `public/projects/<project-folder>/` |

---

## 🚀 Build & Deployment Commands

- `npm run dev`: Starts the local development server at `http://localhost:3000`
- `npm run build`: Creates an optimized, static production build
- `npm run start`: Runs the built production app locally
