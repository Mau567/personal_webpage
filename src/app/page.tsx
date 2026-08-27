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
    role: "IT Solutions Intern",
    org: "San Jose de Puembo, Ascend Hotel Collection Member · Quito, Ecuador",
    dates: "05/2025 – 08/2025",
    description:
      "Led digital transformation initiatives at this landmark hotel near Quito's international airport, spanning AI-powered guest support and NFC-enabled in-room services.",
    bullets: [
      {
        heading: "AI Chatbot & Reservation Assistant",
        body: "Integrated and deployed the Asksuite chatbot and AI reservation assistant to provide 24/7 guest support, serving 2,500+ guest interactions across the web, Facebook, and Instagram.",
      },
      {
        heading: "Engagement & Sales Conversion",
        body: "Boosted client engagement by generating 643+ monthly automated quotations and processing 25,000+ guest messages across channels at 90% accuracy, converting 20% of chatbot interactions into sales opportunities.",
      },
      {
        heading: "NFC Guest Cards",
        body: "Deployed NFC-enabled guest cards in 78 rooms, providing instant one-tap access to hotel services and increasing client satisfaction by 50%.",
      },
    ],
    tools: "Asksuite, NFC Tools, Meta Business Suite, Illustrator, Inkscape, Google Sheets",
    impact:
      "2,500+ guest interactions served, 25,000+ messages processed at 90% accuracy, 20% of chatbot conversations converted to sales, 78 rooms NFC-enabled",
  },
  {
    role: "Research Analyst",
    org: "Ñan Magazine & Inter-American Development Bank · Freelance · Ecuador",
    dates: "04/2025 – 12/2025",
    description:
      "Government-backed initiative to promote Ecuador's lesser-known destinations through an interactive digital map, funded by the Inter-American Development Bank.",
    bullets: [
      {
        heading: "Destination Research & Curation",
        body: "Researched and curated 200+ Ecuadorian tourist destinations for a government-backed interactive digital map, funded by the Inter-American Development Bank (IDB).",
      },
      {
        heading: "Ministry of Tourism Presentation",
        body: "Presented to the Ecuadorian Ministry of Tourism as part of a tourism promotion initiative aimed at increasing the number of foreign tourists in Ecuador by 500,000 per year over the next five years.",
      },
    ],
    tools: "Google My Maps, Research & Data Collection, Government Tourism Datasets",
    impact:
      "200+ destinations mapped for a national strategy targeting 500,000 additional foreign tourists per year",
  },
  {
    role: "Junior Programmer Intern",
    org: "Robalino Law · Quito, Ecuador",
    dates: "07/2024 – 08/2024",
    description:
      "Built data extraction tooling and audited the firm's time-billing platform, turning API research into concrete database and workflow recommendations for firm leadership.",
    bullets: [
      {
        heading: "Python ETL & REST API Integration",
        body: "Built Python-based ETL scripts to authenticate with and extract data from Lemontech's TimeBilling REST API (clients, matters, invoices, users), identifying underutilized fields, features, and data structures to inform database optimization recommendations.",
      },
      {
        heading: "Platform Audit & Recommendations",
        body: "Audited the firm's TimeBilling platform usage, identifying underutilized features and workflows, and presented findings and recommendations to firm leadership to improve efficiency and capture additional billable value.",
      },
    ],
    tools: "Python, REST APIs, Lemontech TimeBilling, SQL, Git",
    impact:
      "Surfaced underused platform features and data structures, giving leadership a concrete path to improved efficiency and additional billable value",
  },
  {
    role: "UI/UX Design Intern",
    org: "Grupo Más · Quito, Ecuador",
    dates: "06/2023 – 07/2023",
    description:
      "Owned the front-end design for a parking solutions mobile app, taking it from concept through to a fully clickable prototype.",
    bullets: [
      {
        heading: "Front-End UI & Prototyping",
        body: "Designed and prototyped the full front-end UI for a parking solutions app using Justinmind, covering all user flows and screen layouts from concept to clickable prototype.",
      },
    ],
    tools: "Justinmind, Figma, Adobe Creative Suite",
    impact:
      "Complete clickable prototype covering every user flow, giving stakeholders a concrete design foundation to build on",
  },
  {
    role: "Volunteering Co-Founder",
    org: "English for Puembo · Quito, Ecuador",
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
    degree: "B.Sc. Computer Science and Artificial Intelligence,  Minor in Entrepreneurship",
    dates: "09/2022 – 12/2026 · Montréal, Canada",
  },
  {
    school: "Colegio Menor San Francisco de Quito",
    degree: "High School Diploma, Magna Cum Laude, GPA 93.34/100",
    dates: "06/2022 · Quito, Ecuador",
  },
];

const skillGroups = [
  {
    group: "Programming & software",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java",
      "C",
      "OCaml",
      "Bash",
      "Assembly",
      "Git",
      "Linux",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "React Native",
      "Web Audio API",
      "Figma",
      "Justinmind",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "FastAPI",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "NextAuth.js",
      "REST APIs",
      "WebSockets",
      "Vercel",
    ],
  },
  {
    group: "AI & machine learning",
    items: ["Whisper", "Demucs", "Librosa", "PyTorch", "Scikit-Learn", "NumPy", "Pandas", "RAG"],
  },
  {
    group: "Spoken languages",
    items: ["Spanish (native)", "English (fluent)", "French (elementary)"],
  },
];

type Project = {
  title: string;
  date: string;
  description: string;
  tech: string;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "KaraokeJam",
    date: "11/2025",
    description:
      "Built at McGill's CodeJam hackathon: a 3-model real-time AI audio pipeline (Demucs vocal separation + Librosa YIN pitch analysis + Whisper lyric alignment) achieving <100ms end-to-end WebSocket latency with a two-person team in 48 hours. Web Audio API mic capture with base64 float32 streaming, a tone-based scoring engine, and Supabase Postgres with RLS and object storage for session state and background audio jobs.",
    tech: "FastAPI · React · Whisper · Demucs · Librosa · Web Audio API · Supabase",
    links: [
      { label: "GitHub", href: "https://github.com/AlanBrotherton/KaraokeJam" },
      { label: "Devpost", href: "https://devpost.com/software/karaokejam" },
    ],
  },
  {
    title: "Hotel Search Platform & AI Concierge",
    date: "07/2025 – Present · Freelance",
    description:
      "Production full-stack hotel search chatbot serving 50+ hotels across Ecuador's hospitality sector, Next.js 14, TypeScript (95.9% type coverage), Prisma ORM and PostgreSQL behind 4 RESTful API endpoints. Integrates a Mistral AI LLM with dynamic database context injection, NextAuth.js role-based access control, and an admin dashboard for hotel registration, approval, and payment status management.",
    tech: "Next.js 14 · TypeScript · Prisma ORM · PostgreSQL · Mistral AI · NextAuth.js",
    links: [
      { label: "GitHub", href: "https://github.com/Mau567/AHOTEC_chatbot" },
      { label: "Live site", href: "https://ahotec-chatbot.vercel.app/" },
    ],
  },
  {
    title: "Nutria Health & Nutrition App",
    date: "01/2025 – 04/2025",
    description:
      "Mobile app MVP built for an entrepreneurship class and later presented in a pitch. Delivers personalized meal tracking and nutrition recommendations, integrating AI APIs for tailored dietary guidance.",
    tech: "React Native · TypeScript (94.4%) · Health API",
    links: [
      { label: "GitHub", href: "https://github.com/Mau567/Nutria_App" },
      { label: "Live site", href: "https://nutria-app-eta.vercel.app/" },
    ],
  },
  {
    title: "Personal Portfolio Website",
    date: "2025",
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
    date: "2024",
    description:
      "Single-cycle MIPS CPU designed in Logisim implementing load, save, add, subtract, and halt, a hardware architecture project from scratch.",
    tech: "Logisim · MIPS · CPU Design · Assembly",
    links: [],
  },
];

const CV_URL = "/Mauricio_Letort_CV.pdf";

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mauricio-javier-letort-129b30258/", external: true },
  { label: "GitHub", href: "https://github.com/Mau567", external: true },
  { label: "WhatsApp", href: "https://wa.me/14389794330", external: true },
  { label: "(438) 979 4330", href: "tel:+14389794330", external: false },
  { label: "CV / Résumé", href: CV_URL, external: true },
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
          Computer Science &amp; Artificial Intelligence — McGill University · Montréal
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
            href={CV_URL}
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
            I&apos;m a Computer Science and Artificial Intelligence student passionate about
            shipping real products — from Python ETL tooling at Robalino Law, to AI guest-support
            chatbots at San Jose de Puembo, to a production hotel-search platform serving 50+
            Ecuadorian hotels.
          </p>
          <p className="mt-6 max-w-[56ch] text-muted text-pretty">
            French Ecuadorian, based in Montréal. With a multicultural background, fluency in
            English and Spanish, and elementary French, I bring an international perspective and
            adaptability to everything I do. I&apos;m always eager to collaborate on new challenges
            that leverage technology for meaningful outcomes.
          </p>
          <div className="mt-10 flex gap-12 border-t border-line pt-6">
            <div>
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">Now</div>
              <div className="mt-1.5 text-[15px] text-muted">Software developer</div>
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
          {projects.map(({ title, date, description, tech, links }) => (
            <div key={title} className="flex flex-col gap-3.5 rounded-[3px] bg-card p-8">
              <div>
                <div className="font-serif text-[26px]">{title}</div>
                <div className="mt-1 text-sm text-muted">{date}</div>
              </div>
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
