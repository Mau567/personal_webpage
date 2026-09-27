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
      "Production full-stack hotel search chatbot serving 50+ hotels across Ecuador's hospitality sector, Next.js 14, TypeScript, Prisma ORM and PostgreSQL behind 4 RESTful API endpoints. Integrates a Mistral AI LLM with dynamic database context injection, NextAuth.js role-based access control, and an admin dashboard for hotel registration, approval, and payment status management.",
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
    tech: "React Native · TypeScript · Health API",
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
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="column header-inner">
          <p className="site-name">Mauricio Javier Letort</p>
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map(([label, href]) => (
              <a key={href} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="column">
          <section aria-label="Introduction">
            <h1>I build AI-powered products and full-stack applications that make a difference.</h1>
            <p className="subtitle">
              Computer Science &amp; Artificial Intelligence — McGill University · Montréal
            </p>
            <p className="byline">
              <a href="#contact">Get in touch</a>
              {" · "}
              <a href="#projects">View my work</a>
              {" · "}
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                View CV
              </a>
              {" · "}
              <a href="https://github.com/Mau567" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </section>

          <section id="about">
            <h2>About</h2>
            <Image
              src="/images/linkedin_profile_photo.jpeg"
              alt="Mauricio Javier Letort"
              width={340}
              height={420}
              priority
              className="mb-6 h-auto w-full max-w-[340px] object-cover"
            />
            <div className="prose-gap">
              <p>
                I&apos;m a Computer Science and Artificial Intelligence student passionate about
                shipping real products — from Python ETL tooling at Robalino Law, to AI guest-support
                chatbots at San Jose de Puembo, to a production hotel-search platform serving 50+
                Ecuadorian hotels.
              </p>
              <p>
                French Ecuadorian, based in Montréal. With a multicultural background, fluency in
                English and Spanish, and elementary French, I bring an international perspective and
                adaptability to everything I do. I&apos;m always eager to collaborate on new challenges
                that leverage technology for meaningful outcomes.
              </p>
              <p className="muted">
                <strong>Now</strong> — Software developer
                <br />
                <strong>Based in</strong> — Montréal · open to remote
              </p>
            </div>
          </section>

          <section id="experience">
            <h2>Where I&apos;ve worked</h2>
            <div>
              {experience.map((entry, i) => (
                <ExperienceRow key={entry.role} entry={entry} index={i} />
              ))}
            </div>
          </section>

          <section id="education">
            <h2>Academic background</h2>
            {education.map(({ school, degree, dates }) => (
              <div key={school} className="entry">
                <h3>{school}</h3>
                <p>{degree}</p>
                <p className="muted">{dates}</p>
              </div>
            ))}
          </section>

          <section id="skills">
            <h2>What I work with</h2>
            {skillGroups.map(({ group, items }) => (
              <div key={group}>
                <h3>{group}</h3>
                <p>{items.join(", ")}</p>
              </div>
            ))}
          </section>

          <section id="projects">
            <h2>Things I&apos;ve built</h2>
            {projects.map(({ title, date, description, tech, links }) => (
              <article key={title} className="entry">
                <h3>{title}</h3>
                <p className="muted">{date}</p>
                <p>{description}</p>
                <p className="muted">{tech}</p>
                {links.length > 0 && (
                  <p>
                    {links.map(({ label, href }, i) => (
                      <span key={label}>
                        {i > 0 ? " · " : null}
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {label} →
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </section>

          <section id="contact">
            <h2>Let&apos;s talk</h2>
            <p>
              <a href="mailto:mjletort@gmail.com">mjletort@gmail.com</a>
            </p>
            <p>
              Open to opportunities, collaborations, and interesting conversations. Montréal, Canada ·
              open to remote.
            </p>
            <p>
              {contactLinks.map(({ label, href, external }, i) => (
                <span key={label}>
                  {i > 0 ? " · " : null}
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </a>
                </span>
              ))}
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="send-btn">
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
              {submitStatus === "success" && (
                <p className="muted mt-4">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4">
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}
            </form>
          </section>

        </div>
      </main>

      <footer className="column site-footer">
        <p>
          © {new Date().getFullYear()} Mauricio Javier Letort
          {" · "}
          Montréal, Canada
        </p>
      </footer>
    </>
  );
}

function ExperienceRow({ entry, index }: { entry: Experience; index: number }) {
  const [open, setOpen] = useState(false);
  const { role, org, dates, description, bullets, tools, impact } = entry;
  const detailsId = `experience-${index}-details`;

  return (
    <div className="entry">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="expand-btn"
      >
        <span className="role-title">
          {String(index + 1).padStart(2, "0")}. {role}
        </span>
        <span className="muted expand-meta">
          {org}
          <br />
          {dates}
          {" "}
          <span aria-hidden>{open ? "–" : "+"}</span>
        </span>
      </button>

      {open && (
        <div id={detailsId} className="mt-4">
          <p>{description}</p>
          {bullets && bullets.length > 0 && (
            <ul className="essay-list">
              {bullets.map(({ heading, body }) => (
                <li key={heading}>
                  <strong>{heading}. </strong>
                  {body}
                </li>
              ))}
            </ul>
          )}
          <p>
            <strong>Tools. </strong>
            {tools}
          </p>
          <p>
            <strong>Impact. </strong>
            {impact}
          </p>
        </div>
      )}
    </div>
  );
}
