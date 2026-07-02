"use client";
import { useState } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const navLinks = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

type Bullet = { heading: string; body: string };

type Experience = {
  role: string;
  org: string;
  dates: string;
  description: string;
  bullets?: Bullet[];
  tools: string;
  impact: string;
};

const experience: Experience[] = [
  {
    role: "Hotel Chatbot Developer",
    org: "Federación Hotelera del Ecuador (AHOTEC) — Freelance · Online",
    dates: "07/2025 – Present",
    description:
      "Leading the end-to-end development of a large-scale hotel management ecosystem supporting 50+ Ecuadorian hotels. The platform blends AI-driven guest discovery with streamlined registration workflows for property managers.",
    bullets: [
      {
        heading: "Full-Stack Development & AI Integration",
        body: "Built a modern web application with Next.js, React, and TypeScript using Tailwind CSS for responsive UI and Prisma ORM with PostgreSQL for resilient data models. Integrated AskSuite and custom chatbot flows that automate hotel discovery and guest engagement in real time.",
      },
      {
        heading: "Database Design & Backend Architecture",
        body: "Designed structured schemas with Prisma ORM and PostgreSQL, exposing RESTful APIs and secure file management pipelines for property assets. Implemented analytics dashboards and automation that generate marketing content, onboarding collateral, and performance reports.",
      },
      {
        heading: "Operations Automation & Impact",
        body: "Delivered real-time property analytics, multilingual chatbot responses, and automated onboarding that reduce manual workload for hotel teams. Positioned AHOTEC with a scalable digital platform for national tourism growth.",
      },
    ],
    tools: "Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, AskSuite, Generative AI",
    impact:
      "Streamlined hotel discovery for travelers, simplified property registration for hoteliers, and established a scalable automation hub for Ecuadorian tourism",
  },
  {
    role: "Ecuador Interactive Tourism Map",
    org: "Ñan Magazine — Freelance project, IDB-funded",
    dates: "03/2025 – Present",
    description:
      "Government-backed digital initiative to promote Ecuador's lesser-known touristic destinations through an intuitive interactive map experience. Project is funded by the Inter-American Development Bank (IDB) and will be presented to the Ecuadorian government as part of a national tourism revitalization strategy.",
    tools: "Google My Maps, Research & Data Collection, Government Tourism Datasets",
    impact:
      "National-level digital tool for rural tourism areas, expected integration into Ecuador's official tourism platforms",
  },
  {
    role: "Hotel Innovation Intern",
    org: "San Jose de Puembo — Quito, Ecuador",
    dates: "05/2025 – 08/2025",
    description:
      "Led two high-impact digital transformation initiatives at this landmark hotel near Quito's international airport.",
    bullets: [
      {
        heading: "NFC Card Design & Deployment",
        body: "Conceptualized, designed, and deployed NFC-enabled guest cards providing seamless access to digital TV guides, WhatsApp contact, and hotel services with a single tap.",
      },
      {
        heading: "AI Chatbot Integration",
        body: "Spearheaded AI-powered chatbot integration for the hotel website and OTA platforms (Booking.com, Expedia). Built centralized knowledge bases, automated follow-ups, and analytics.",
      },
      {
        heading: "Data & Operations Enablement",
        body: "Consolidated marketing collateral, WhatsApp automations, and guest usage analytics that now serve as a blueprint for future tech rollouts.",
      },
    ],
    tools: "NFC Tools, Inkscape, Illustrator, AskSuite, Google Sheets, ChatGPT API, WhatsApp integration",
    impact: "Enhanced guest experience, reduced operational workload, created scalable tech foundation",
  },
  {
    role: "Junior Programmer",
    org: "Robalino Law — Quito, Ecuador",
    dates: "07/2024 – 08/2024",
    description:
      "Contributed to the BIPAT (Business Intelligence Process Automated Technology) team, developing innovative solutions for corporate clients while gaining hands-on experience with enterprise-level software development.",
    bullets: [
      {
        heading: "Python Development & Automation",
        body: "Developed custom Python scripts and automation tools to streamline client workflows and improve data processing efficiency.",
      },
      {
        heading: "Team Collaboration & Project Management",
        body: "Managed multiple concurrent projects while maintaining high code quality standards. Participated in code reviews and contributed to technical documentation.",
      },
    ],
    tools: "Python, Git, JIRA, API Testing, Business Intelligence Tools",
    impact: "Improved client solution delivery, enhanced team productivity, gained enterprise development experience",
  },
  {
    role: "Supplier Database Specialist",
    org: "San Jose de Puembo Hotel and Conference Center — Quito, Ecuador",
    dates: "07/2023 – 08/2023",
    description:
      "Led comprehensive vendor research and database development initiative for a major hotel chain, creating a centralized supplier management system to optimize procurement processes and cost analysis.",
    bullets: [
      {
        heading: "Vendor Research & Database Development",
        body: "Conducted extensive research on hotel suppliers across multiple categories. Built a comprehensive database with detailed vendor profiles, contact information, and service offerings.",
      },
      {
        heading: "Financial Analysis & Profitability Assessment",
        body: "Analyzed vendor pricing structures and service quality to assess profitability. Created detailed reports for management decision-making on vendor selection.",
      },
    ],
    tools: "Google Sheets, Excel, CRM Systems, Vendor Management Platforms",
    impact: "Streamlined procurement processes, improved vendor selection criteria, enhanced cost control",
  },
  {
    role: "Design Specialist",
    org: "Grupo Más — Quito, Ecuador",
    dates: "06/2023 – 07/2023",
    description:
      "Spearheaded the design and prototyping of an innovative parking solution mobile application, focusing on user experience optimization for urban mobility challenges.",
    bullets: [
      {
        heading: "Mobile App Design & Prototyping",
        body: "Designed comprehensive UI mockups and user experience flows for a parking management application. Created wireframes, user journey maps, and interactive prototypes.",
      },
      {
        heading: "UX/UI Development & User Research",
        body: "Conducted user research to understand parking pain points. Utilized Justinmind prototyping software for high-fidelity interactive prototypes.",
      },
    ],
    tools: "Justinmind, Figma, Adobe Creative Suite",
    impact: "Improved parking app UX, enhanced stakeholder communication, established design foundation",
  },
  {
    role: "Volunteering Co-Founder",
    org: "English for Puembo — Quito, Ecuador",
    dates: "08/2022 – 12/2022",
    description:
      "Co-founded and established a community-based English education initiative, bringing together students from Colegio Menor to provide free English language instruction to underprivileged children in the Puembo area.",
    bullets: [
      {
        heading: "Program Development & Community Outreach",
        body: "Collaborated with administration and community leaders to establish program structure, secure resources, and recruit volunteer teachers.",
      },
      {
        heading: "Volunteer Coordination & Student Support",
        body: "Managed a team of student volunteers, providing training on teaching methodologies. Organized weekly classes and tracked student progress.",
      },
    ],
    tools: "Curriculum Development, Volunteer Management, Community Outreach",
    impact: "Provided English education to 30+ underprivileged children, developed sustainable volunteer program model",
  },
];

const education = [
  {
    school: "McGill University",
    degree: "B.Sc. Computer Science — Artificial Intelligence & Entrepreneurship",
    dates: "09/2022 – 12/2026 · Montréal, Canada",
  },
  {
    school: "Colegio Menor San Francisco de Quito",
    degree: "Magna Cum Laude — 93.34 GPA",
    dates: "06/2022 · Quito, Ecuador",
  },
];

const skillGroups = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Java", "C", "OCaml", "Bash"],
  },
  {
    group: "Frameworks",
    items: ["Next.js", "React", "React Native", "Prisma", "Tailwind CSS", "PostgreSQL", "FastAPI"],
  },
  {
    group: "Tools & platforms",
    items: ["Node.js", "Vercel", "Git & GitHub", "API Integration", "AI Chatbots", "EmailJS", "Cursor"],
  },
  {
    group: "Spoken languages",
    items: ["Spanish — native", "English — fluent", "French — elementary"],
  },
];

const projects = [
  {
    title: "AHOTEC Hotel Search Assistant",
    description:
      "Web app for the Ecuadorian Hotel Federation combining intelligent hotel search with an AI-powered chatbot that helps users find hotels by location and preference.",
    tech: "Next.js · React · TypeScript · Prisma · PostgreSQL · Mistral AI",
    links: [
      { label: "GitHub", href: "https://github.com/Mau567/AHOTEC_chatbot" },
      { label: "Live site", href: "https://ahotec-chatbot.vercel.app/" },
    ],
  },
  {
    title: "Nutria Health & Nutrition App",
    description:
      "Mobile app that helps users track meals, receive personalized recommendations, and maintain balanced diets. Built as part of a McGill course.",
    tech: "React Native · TypeScript · Health API",
    links: [
      { label: "GitHub", href: "https://github.com/Mau567/Nutria_App" },
      { label: "Live site", href: "https://nutria-app-eta.vercel.app/" },
    ],
  },
  {
    title: "Ñan Interactive Map",
    description:
      "Interactive digital map for Ñan Magazine showcasing Ecuador's destinations. IDB-funded initiative to be presented to the Ecuadorian government as part of a national tourism strategy.",
    tech: "Google My Maps · Research · GIS",
    links: [
      { label: "View map", href: "https://www.google.com/maps/d/viewer?mid=1VYOkfvdiMfGwaKRNGpo1WSmr8Kpv11Q" },
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and React, featuring smooth animations, contact form integration, and interactive project showcases.",
    tech: "Next.js · React · TypeScript · Tailwind CSS",
    links: [
      { label: "GitHub", href: "https://github.com/Mau567/personal_webpage" },
      { label: "Live site", href: "https://mauriciopersonalwebpage.vercel.app" },
    ],
  },
  {
    title: "Mini-MIPS CPU",
    description:
      "Single-cycle MIPS CPU designed in Logisim implementing load, save, add, subtract, and halt — a hardware architecture project from scratch.",
    tech: "Logisim · MIPS · CPU Design · Assembly",
    links: [],
  },
  {
    title: "KaraokeJam",
    description:
      "Full-stack karaoke app with real-time pitch detection under 100ms WebSocket latency, integrating Demucs, Whisper, and Librosa. Built in one weekend at CodeJam.",
    tech: "FastAPI · React · Web Audio API · Whisper · Demucs · Supabase",
    links: [
      { label: "GitHub", href: "https://github.com/AlanBrotherton/KaraokeJam" },
    ],
  },
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mauricio-javier-letort-129b30258/", external: true },
  { label: "GitHub", href: "https://github.com/Mau567", external: true },
  { label: "WhatsApp", href: "https://wa.me/14389794330", external: true },
  { label: "(438) 979 4330", href: "tel:+14389794330", external: false },
  { label: "CV / Résumé", href: "https://flowcv.com/resume/fd36ulsq7t", external: true },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      emailjs.init("583A_UDAfuwiMmy1c");
      const result = await emailjs.send("service_ewblw3w", "template_h9t47g6", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "mjletort@gmail.com"
      });
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-[1060px] px-8">

      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-line py-9 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <div className="whitespace-nowrap font-serif text-[22px] font-medium tracking-[0.01em]">
          Mauricio Javier Letort
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-[0.04em]">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              className="text-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="animate-fade-up pt-[110px] pb-[120px]">
        <p className="mb-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
          Computer Science — McGill University · Montréal
        </p>
        <h1 className="max-w-[16ch] font-serif text-[clamp(48px,8vw,92px)] font-light leading-[1.05] tracking-[-0.015em] text-pretty">
          I build AI-powered products and full-stack applications that make a difference.
        </h1>
        <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium uppercase tracking-[0.04em]">
          <a
            href="#contact"
            className="border-b-2 border-accent pb-[3px] text-ink transition-colors hover:text-accent"
          >
            Get in touch
          </a>
          <a href="#projects" className="pb-[3px] text-muted transition-colors hover:text-accent">
            View my work
          </a>
          <a
            href="https://flowcv.com/resume/fd36ulsq7t"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-[3px] text-muted transition-colors hover:text-accent"
          >
            View CV
          </a>
          <a
            href="https://github.com/Mau567"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-[3px] text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid gap-16 pb-[120px] md:grid-cols-[340px_1fr] md:items-start">
        <Image
          src="/images/linkedin_profile_photo.jpeg"
          alt="Mauricio Javier Letort"
          width={340}
          height={420}
          priority
          className="h-[420px] w-full max-w-[340px] rounded-[3px] object-cover"
        />
        <div>
          <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
            About
          </h2>
          <p className="font-serif text-[26px] font-light leading-[1.45] text-pretty">
            I&apos;m a Computer Science student passionate about AI and software development — from
            building innovative tools at Robalino Law to optimizing hotel operations with databases
            and AI chatbots at AHOTEC and San Jose de Puembo.
          </p>
          <p className="mt-6 max-w-[56ch] text-muted text-pretty">
            With a multicultural background, fluency in English and Spanish, and elementary French,
            I bring an international perspective and adaptability to everything I do. I&apos;m
            always eager to collaborate on new challenges that leverage technology for meaningful
            outcomes.
          </p>
          <div className="mt-10 flex gap-12 border-t border-line pt-6">
            <div>
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">Now</div>
              <div className="mt-1.5 text-[15px] text-muted">Hotel Chatbot Developer, AHOTEC</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">Based in</div>
              <div className="mt-1.5 text-[15px] text-muted">Montréal · open to remote</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="pb-[110px]">
        <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          Where I&apos;ve worked
        </h2>
        <div className="flex flex-col">
          {experience.map((entry, i) => (
            <ExperienceRow key={entry.role} entry={entry} index={i} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="pb-[110px]">
        <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          Academic background
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map(({ school, degree, dates }) => (
            <div key={school} className="rounded-[3px] bg-card p-8">
              <div className="font-serif text-[26px]">{school}</div>
              <p className="mt-2.5 text-[15px] text-muted text-pretty">{degree}</p>
              <p className="mt-[18px] text-sm text-muted">{dates}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pb-[110px]">
        <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          What I work with
        </h2>
        <div className="flex flex-col">
          {skillGroups.map(({ group, items }) => (
            <div
              key={group}
              className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-line py-6 last:border-b md:grid-cols-[220px_1fr] md:items-baseline"
            >
              <span className="font-serif text-[22px]">{group}</span>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pb-[110px]">
        <h2 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          Things I&apos;ve built
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(({ title, description, tech, links }) => (
            <div key={title} className="flex flex-col gap-3.5 rounded-[3px] bg-card p-8">
              <div className="font-serif text-[26px]">{title}</div>
              <p className="text-[15px] text-muted text-pretty">{description}</p>
              <p className="text-[13px] uppercase tracking-[0.06em] text-muted">{tech}</p>
              {links.length > 0 && (
                <div className="mt-auto flex gap-6 pt-2 text-sm font-medium">
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line pt-[100px] pb-[90px] text-center">
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          Let&apos;s talk
        </p>
        <a
          href="mailto:mjletort@gmail.com"
          className="border-b-2 border-accent font-serif text-[clamp(32px,5vw,56px)] font-light text-ink transition-colors hover:text-accent"
        >
          mjletort@gmail.com
        </a>
        <p className="mx-auto mt-7 max-w-[44ch] text-base text-muted text-pretty">
          Open to opportunities, collaborations, and interesting conversations. Montréal, Canada ·
          open to remote.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium uppercase tracking-[0.04em]">
          {contactLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-[560px] space-y-5 rounded-[3px] bg-card p-8 text-left"
        >
          <div>
            <label className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
              className="w-full rounded-[3px] border border-line bg-bg px-4 py-3 text-[15px] text-ink transition-colors placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
              className="w-full rounded-[3px] border border-line bg-bg px-4 py-3 text-[15px] text-ink transition-colors placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-[3px] border border-line bg-bg px-4 py-3 text-[15px] text-ink transition-colors placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="border-b-2 border-accent pb-[3px] text-sm font-medium uppercase tracking-[0.04em] text-ink transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-[15px] text-muted">
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-[15px] text-accent">
              Something went wrong. Please try again or reach out directly.
            </p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="flex justify-between border-t border-line pt-6 pb-9 text-[13px] text-muted">
        <span>© {new Date().getFullYear()} Mauricio Javier Letort</span>
        <span>Montréal, Canada</span>
      </footer>

    </main>
  );
}

function ExperienceRow({ entry, index }: { entry: Experience; index: number }) {
  const [open, setOpen] = useState(false);
  const { role, org, dates, description, bullets, tools, impact } = entry;

  return (
    <div className="border-t border-line last:border-b">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="grid w-full cursor-pointer grid-cols-1 items-baseline gap-x-6 py-[26px] text-left transition-all duration-200 hover:pl-2.5 md:grid-cols-[56px_1fr_auto]"
      >
        <span className="hidden text-sm text-muted md:block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>
          <span className="font-serif text-[26px]">{role}</span>
          <span className="mt-1 block text-[15px] text-muted">{org}</span>
        </span>
        <span className="mt-2 flex items-baseline gap-4 text-sm text-muted md:mt-0 md:whitespace-nowrap">
          {dates}
          <span
            className={`inline-block transition-transform duration-200 ${open ? "rotate-45" : ""}`}
            aria-hidden
          >
            +
          </span>
        </span>
      </button>

      {open && (
        <div className="max-w-[68ch] pb-[26px] md:pl-20">
          <p className="text-[15px] text-muted text-pretty">{description}</p>
          {bullets && bullets.length > 0 && (
            <div className="mt-5 flex flex-col gap-4">
              {bullets.map(({ heading, body }) => (
                <div key={heading}>
                  <p className="text-[15px] font-medium">{heading}</p>
                  <p className="mt-1 text-[15px] text-muted text-pretty">{body}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 md:flex-row md:gap-12">
            <div className="md:flex-1">
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">Tools</div>
              <div className="mt-1.5 text-[15px] text-muted">{tools}</div>
            </div>
            <div className="md:flex-1">
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">Impact</div>
              <div className="mt-1.5 text-[15px] text-muted">{impact}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
