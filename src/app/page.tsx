"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.querySelector('.counter')) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute('data-target') || '0');
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                const updateCounter = () => {
                  current += increment;
                  if (current < target) {
                    counter.textContent = Math.floor(current).toString();
                    requestAnimationFrame(updateCounter);
                  } else {
                    counter.textContent = target.toString();
                  }
                };
                updateCounter();
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const openWhatsApp = () => {
    const message = "Hi Mauricio! I'd like to get in touch with you.";
    window.open(`https://wa.me/14389794330?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main id="top" className="min-h-screen">

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 bg-[#25d366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </button>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/72 dark:bg-black/72 backdrop-blur-2xl z-50 border-b border-black/[0.08] dark:border-white/[0.08] transition-colors">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            <a href="#top" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center shrink-0 group-hover:scale-95 transition-transform">
                <span className="text-white dark:text-black text-[10px] font-bold tracking-tight">MJL</span>
              </span>
              <span className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">Mauricio Javier Letort</span>
            </a>
            <div className="hidden md:flex items-center gap-7">
              {[
                ["About", "about"],
                ["Experience", "experience"],
                ["Education", "education"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Contact", "contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
        {/* Very subtle background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a2e_0%,_#000_60%)]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center pt-14">
          {/* Profile photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-[1.5px] ring-white/20 shadow-2xl">
              <Image
                src="/images/linkedin_profile_photo.jpeg"
                alt="Mauricio Javier Letort"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="text-sm font-medium text-[#2997ff] mb-4 tracking-wide">
            Computer Science · McGill University · Montréal
          </p>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Hi, I&apos;m Mauricio<br />
            <span className="text-white/50">Javier Letort.</span>
          </h1>

          {/* Subline */}
          <p className="text-lg sm:text-xl text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            I build AI-powered products and full-stack applications that make a difference.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
            >
              View my work
            </a>
            <a
              href="https://flowcv.com/resume/fd36ulsq7t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
            >
              View CV
            </a>
            <a
              href="https://github.com/Mau567"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => console.log('GitHub link clicked')}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
            >
              GitHub
            </a>
          </div>

          {/* Scroll cue */}
          <div className="flex flex-col items-center gap-1.5 text-white/20">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-[#f5f5f7] dark:bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { target: 6, label: "Projects completed" },
              { target: 3, label: "Years of experience" },
              { target: 18, label: "Technologies" },
              { target: 9, label: "Languages spoken" },
            ].map(({ target, label }) => (
              <div key={label} className="fade-in bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 text-center shadow-sm">
                <div
                  className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-1 counter tracking-tight"
                  data-target={target}
                >
                  0
                </div>
                <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-black fade-in">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-heading mb-12">Who I am.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-[#1d1d1f] dark:text-[#f5f5f7] text-lg leading-relaxed">
                I am a Computer Science student passionate about AI and Software Development. With experience ranging from developing innovative tools at Robalino Law to optimizing hotel operations through databases and AI chatbots at AHOTEC and San Jose de Puembo, I thrive on creating solutions that improve efficiency and enhance user experiences.
              </p>
              <p className="text-[#6e6e73] dark:text-[#a1a1a6] leading-relaxed">
                With a multicultural background, fluency in English and Spanish, and elementary proficiency in French, I bring an international perspective and adaptability to all my endeavors. I am always eager to collaborate on new challenges that leverage technology for meaningful outcomes.
              </p>
            </div>
            <div className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden bg-[#f5f5f7] dark:bg-[#1d1d1f]">
              <Image
                src="/images/linkedin_profile_photo.jpeg"
                alt="Mauricio Javier Letort"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-[#f5f5f7] dark:bg-[#111] fade-in">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Work</p>
          <h2 className="section-heading mb-12">Where I&apos;ve worked.</h2>
          <div className="space-y-4">

            <ExperienceCard
              title="Hotel Chatbot Developer – AHOTEC Hotel Assistant Platform"
              company="Federación Hotelera del Ecuador (AHOTEC) – Freelance | Online"
              date="07/2025 – Present"
              description="Leading the end-to-end development of a large-scale hotel management ecosystem supporting 50+ Ecuadorian hotels. The platform blends AI-driven guest discovery with streamlined registration workflows for property managers."
              bullets={[
                { heading: "Full-Stack Development & AI Integration", body: "Built a modern web application with Next.js, React, and TypeScript using Tailwind CSS for responsive UI and Prisma ORM with PostgreSQL for resilient data models. Integrated AskSuite and custom chatbot flows that automate hotel discovery and guest engagement in real time." },
                { heading: "Database Design & Backend Architecture", body: "Designed structured schemas with Prisma ORM and PostgreSQL, exposing RESTful APIs and secure file management pipelines for property assets. Implemented analytics dashboards and automation that generate marketing content, onboarding collateral, and performance reports." },
                { heading: "Operations Automation & Impact", body: "Delivered real-time property analytics, multilingual chatbot responses, and automated onboarding that reduce manual workload for hotel teams. Positioned AHOTEC with a scalable digital platform for national tourism growth." },
              ]}
              tools="Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, AskSuite, Generative AI"
              impact="Streamlined hotel discovery for travelers, simplified property registration for hoteliers, and established a scalable automation hub for Ecuadorian tourism"
            />

            <ExperienceCard
              title="Ecuador Interactive Tourism Map"
              company="Ñan Magazine – Freelance Project (IDB-funded)"
              date="03/2025 – Present"
              description="Government-backed digital initiative to promote Ecuador's lesser-known touristic destinations through an intuitive interactive map experience. Project is funded by the Inter-American Development Bank (IDB) and will be presented to the Ecuadorian government as part of a national tourism revitalization strategy."
              tools="Google My Maps, Research & Data Collection, Government Tourism Datasets"
              impact="National-level digital tool for rural tourism areas, expected integration into Ecuador's official tourism platforms"
            />

            <ExperienceCard
              title="Hotel Innovation Intern"
              company="San Jose de Puembo – Quito, Ecuador"
              date="05/2025 – 08/2025"
              description="Led two high-impact digital transformation initiatives at this landmark hotel near Quito's international airport."
              bullets={[
                { heading: "NFC Card Design & Deployment", body: "Conceptualized, designed, and deployed NFC-enabled guest cards providing seamless access to digital TV guides, WhatsApp contact, and hotel services with a single tap." },
                { heading: "AI Chatbot Integration", body: "Spearheaded AI-powered chatbot integration for the hotel website and OTA platforms (Booking.com, Expedia). Built centralized knowledge bases, automated follow-ups, and analytics." },
                { heading: "Data & Operations Enablement", body: "Consolidated marketing collateral, WhatsApp automations, and guest usage analytics that now serve as a blueprint for future tech rollouts." },
              ]}
              tools="NFC Tools, Inkscape, Illustrator, AskSuite, Google Sheets, ChatGPT API, WhatsApp integration"
              impact="Enhanced guest experience, reduced operational workload, created scalable tech foundation"
            />

            <ExperienceCard
              title="Junior Programmer"
              company="Robalino Law – Quito, Ecuador"
              date="07/2024 – 08/2024"
              description="Contributed to the BIPAT (Business Intelligence Process Automated Technology) team, developing innovative solutions for corporate clients while gaining hands-on experience with enterprise-level software development."
              bullets={[
                { heading: "Python Development & Automation", body: "Developed custom Python scripts and automation tools to streamline client workflows and improve data processing efficiency." },
                { heading: "Team Collaboration & Project Management", body: "Managed multiple concurrent projects while maintaining high code quality standards. Participated in code reviews and contributed to technical documentation." },
              ]}
              tools="Python, Git, JIRA, API Testing, Business Intelligence Tools"
              impact="Improved client solution delivery, enhanced team productivity, gained enterprise development experience"
            />

            <ExperienceCard
              title="Supplier Database Specialist"
              company="San Jose de Puembo Hotel and Conference Center – Quito, Ecuador"
              date="07/2023 – 08/2023"
              description="Led comprehensive vendor research and database development initiative for a major hotel chain, creating a centralized supplier management system to optimize procurement processes and cost analysis."
              bullets={[
                { heading: "Vendor Research & Database Development", body: "Conducted extensive research on hotel suppliers across multiple categories. Built a comprehensive database with detailed vendor profiles, contact information, and service offerings." },
                { heading: "Financial Analysis & Profitability Assessment", body: "Analyzed vendor pricing structures and service quality to assess profitability. Created detailed reports for management decision-making on vendor selection." },
              ]}
              tools="Google Sheets, Excel, CRM Systems, Vendor Management Platforms"
              impact="Streamlined procurement processes, improved vendor selection criteria, enhanced cost control"
            />

            <ExperienceCard
              title="Design Specialist"
              company="Grupo Más – Quito, Ecuador"
              date="06/2023 – 07/2023"
              description="Spearheaded the design and prototyping of an innovative parking solution mobile application, focusing on user experience optimization for urban mobility challenges."
              bullets={[
                { heading: "Mobile App Design & Prototyping", body: "Designed comprehensive UI mockups and user experience flows for a parking management application. Created wireframes, user journey maps, and interactive prototypes." },
                { heading: "UX/UI Development & User Research", body: "Conducted user research to understand parking pain points. Utilized Justinmind prototyping software for high-fidelity interactive prototypes." },
              ]}
              tools="Justinmind, Figma, Adobe Creative Suite"
              impact="Improved parking app UX, enhanced stakeholder communication, established design foundation"
            />

            <ExperienceCard
              title="Volunteering Co-Founder"
              company="English for Puembo – Quito, Ecuador"
              date="08/2022 – 12/2022"
              description="Co-founded and established a community-based English education initiative, bringing together students from Colegio Menor to provide free English language instruction to underprivileged children in the Puembo area."
              bullets={[
                { heading: "Program Development & Community Outreach", body: "Collaborated with administration and community leaders to establish program structure, secure resources, and recruit volunteer teachers." },
                { heading: "Volunteer Coordination & Student Support", body: "Managed a team of student volunteers, providing training on teaching methodologies. Organized weekly classes and tracked student progress." },
              ]}
              tools="Curriculum Development, Volunteer Management, Community Outreach"
              impact="Provided English education to 30+ underprivileged children, developed sustainable volunteer program model"
            />

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white dark:bg-black fade-in">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Education</p>
          <h2 className="section-heading mb-12">Academic background.</h2>
          <div className="space-y-4">
            <div className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 fade-in">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  MCG
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-white">McGill University</h3>
                  <p className="text-[#0071e3] dark:text-[#2997ff] text-sm mt-0.5">B.Sc. Computer Science – Artificial Intelligence &amp; Entrepreneurship</p>
                  <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm mt-1">09/2022 – 12/2026 · Montréal, Canada</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 fade-in">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  CM
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-white">Colegio Menor San Francisco de Quito</h3>
                  <p className="text-[#0071e3] dark:text-[#2997ff] text-sm mt-0.5">Magna Cum Laude – 93.34 GPA</p>
                  <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm mt-1">06/2022 · Quito, Ecuador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#f5f5f7] dark:bg-[#111] fade-in">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="section-heading mb-12">What I work with.</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-5">Programming Languages</h3>
              <div className="space-y-3.5">
                {[
                  { name: "TypeScript", pct: 90 },
                  { name: "JavaScript", pct: 85 },
                  { name: "Python", pct: 90 },
                  { name: "SQL", pct: 85 },
                  { name: "Java", pct: 80 },
                  { name: "C", pct: 75 },
                  { name: "OCaml", pct: 70 },
                  { name: "Bash", pct: 60 },
                  { name: "Command Line (CLI)", pct: 80 },
                ].map(({ name, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">{name}</span>
                      <span className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]">{pct}%</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-[#0071e3] dark:bg-[#2997ff] transition-all duration-1000 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-5">Spoken Languages</h3>
                <div className="space-y-3.5">
                  {[
                    { name: "Spanish (Native)", pct: 100 },
                    { name: "English (Fluent)", pct: 95 },
                    { name: "French (Elementary)", pct: 20 },
                  ].map(({ name, pct }) => (
                    <div key={name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">{name}</span>
                        <span className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]">{pct}%</span>
                      </div>
                      <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-[#0071e3] dark:bg-[#2997ff] transition-all duration-1000 ease-out"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "React Native", "Prisma", "Tailwind CSS", "PostgreSQL", "FastAPI"].map((s) => (
                    <span key={s} className="px-3 py-1.5 text-sm bg-[#f5f5f7] dark:bg-black/40 text-[#1d1d1f] dark:text-[#f5f5f7] rounded-full border border-black/[0.06] dark:border-white/[0.08]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-4">Tools &amp; Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Vercel", "Git & GitHub", "API Integration", "AI Chatbots", "EmailJS", "Cursor"].map((t) => (
                    <span key={t} className="px-3 py-1.5 text-sm bg-[#f5f5f7] dark:bg-black/40 text-[#1d1d1f] dark:text-[#f5f5f7] rounded-full border border-black/[0.06] dark:border-white/[0.08]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white dark:bg-black fade-in">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="section-heading mb-12">Things I&apos;ve built.</h2>
          <div className="grid md:grid-cols-2 gap-5">

            <ProjectCard
              gradient="from-teal-400 to-cyan-500"
              emoji="🏨"
              title="AHOTEC Hotel Search Assistant"
              description="A comprehensive web application built for the Ecuadorian Hotel Federation combining intelligent hotel search with an AI-powered chatbot that helps users find hotels based on location and preferences."
              tags={["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Mistral AI"]}
              tagColor="teal"
              links={[
                { label: "GitHub", href: "https://github.com/Mau567/AHOTEC_chatbot" },
                { label: "Live site", href: "https://ahotec-chatbot.vercel.app/" },
              ]}
            />

            <ProjectCard
              gradient="from-pink-400 to-rose-500"
              emoji="🥗"
              title="Nutria Health & Nutrition App"
              description="A mobile app that helps users track meals, receive personalized recommendations, and maintain balanced diets. Developed as part of a McGill course, integrating wellness guidance with practical nutrition tools."
              note="MVP"
              tags={["React Native", "TypeScript", "Health API"]}
              tagColor="pink"
              links={[
                { label: "GitHub", href: "https://github.com/Mau567/Nutria_App" },
                { label: "Live site", href: "https://nutria-app-eta.vercel.app/" },
              ]}
            />

            <ProjectCard
              gradient="from-emerald-400 to-green-500"
              emoji="🗺️"
              title="Ñan Interactive Map"
              description="An interactive digital map for Ñan Magazine showcasing Ecuador's diverse destinations. IDB-funded initiative to be presented to the Ecuadorian government as part of a national tourism revitalization strategy."
              tags={["Google My Maps", "Research", "GIS"]}
              tagColor="emerald"
              links={[
                { label: "View map", href: "https://www.google.com/maps/d/viewer?mid=1VYOkfvdiMfGwaKRNGpo1WSmr8Kpv11Q&ll=-1.013817206379277%2C-79.38940824999999&z=8" },
              ]}
            />

            <ProjectCard
              gradient="from-indigo-400 to-violet-500"
              emoji="💻"
              title="Personal Portfolio Website"
              description="This website — a modern, responsive portfolio built with Next.js and React, featuring smooth animations, contact form integration, and interactive project showcases."
              tags={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              tagColor="indigo"
              links={[
                { label: "GitHub", href: "https://github.com/Mau567/personal_webpage" },
                { label: "Live site", href: "https://mauriciopersonalwebpage.vercel.app" },
              ]}
            />

            <ProjectCard
              gradient="from-violet-500 to-purple-600"
              emoji="⚡"
              title="Mini-MIPS CPU"
              description="Designed a single-cycle MIPS CPU in Logisim implementing instructions such as load, save, add, subtract and halt — a hardware architecture project from scratch."
              tags={["Logisim", "MIPS", "CPU Design", "Assembly"]}
              tagColor="violet"
              links={[]}
            />

            <ProjectCard
              gradient="from-purple-500 to-indigo-600"
              emoji="🎤"
              title="KaraokeJam"
              description="Full-stack karaoke app with real-time pitch detection under 100ms WebSocket latency. Integrates Demucs, Whisper, and Librosa for vocal separation and lyric alignment. Won at CodeJam hackathon, built in one weekend."
              note="CodeJam winner"
              tags={["FastAPI", "React", "Web Audio API", "Whisper", "Demucs", "Supabase"]}
              tagColor="purple"
              links={[
                { label: "GitHub", href: "https://github.com/AlanBrotherton/KaraokeJam" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#f5f5f7] dark:bg-[#111] fade-in">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-heading mb-4">Let&apos;s talk.</h2>
          <p className="text-[#6e6e73] dark:text-[#a1a1a6] mb-12 text-lg">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[
                { icon: "📧", label: "Email", value: "mjletort@gmail.com", href: "mailto:mjletort@gmail.com" },
                { icon: "📱", label: "Phone", value: "(438) 979 4330", href: "tel:+14389794330" },
                { icon: "🔗", label: "LinkedIn", value: "mauricio-javier-letort", href: "https://www.linkedin.com/in/mauricio-javier-letort-129b30258/" },
                { icon: "🐙", label: "GitHub", value: "github.com/Mau567", href: "https://github.com/Mau567" },
                { icon: "📄", label: "CV / Résumé", value: "View on FlowCV", href: "https://flowcv.com/resume/fd36ulsq7t" },
                { icon: "📍", label: "Location", value: "Montréal, Canada · open to remote", href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="bg-white dark:bg-[#1d1d1f] rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm">
                  <span className="text-xl w-8 text-center">{icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sm text-[#0071e3] dark:text-[#2997ff] hover:underline truncate block">{value}</a>
                    ) : (
                      <p className="text-sm text-[#1d1d1f] dark:text-[#f5f5f7] truncate">{value}</p>
                    )}
                  </div>
                </div>
              ))}
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25d366] hover:bg-[#1ebe5d] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <span>💬</span> Chat on WhatsApp
              </button>
            </div>

            <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-black/40 rounded-xl text-sm text-[#1d1d1f] dark:text-white placeholder:text-[#6e6e73] border border-transparent focus:border-[#0071e3] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-black/40 rounded-xl text-sm text-[#1d1d1f] dark:text-white placeholder:text-[#6e6e73] border border-transparent focus:border-[#0071e3] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-black/40 rounded-xl text-sm text-[#1d1d1f] dark:text-white placeholder:text-[#6e6e73] border border-transparent focus:border-[#0071e3] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending…' : 'Send message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-3.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm rounded-xl">
                    Message sent — I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3.5 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-xl">
                    Something went wrong. Please try again or reach out directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#f5f5f7] dark:bg-[#111] border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            © {new Date().getFullYear()} Mauricio Javier Letort
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Mau567" target="_blank" rel="noopener noreferrer"
              className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mauricio-javier-letort-129b30258/" target="_blank" rel="noopener noreferrer"
              className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:mjletort@gmail.com"
              className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────── */

type Bullet = { heading: string; body: string };

function ExperienceCard({
  title,
  company,
  date,
  description,
  bullets,
  tools,
  impact,
}: {
  title: string;
  company: string;
  date: string;
  description: string;
  bullets?: Bullet[];
  tools: string;
  impact: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl overflow-hidden shadow-sm fade-in">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
      >
        <div className="min-w-0">
          <h3 className="font-semibold text-[#1d1d1f] dark:text-white leading-snug">{title}</h3>
          <p className="text-sm text-[#0071e3] dark:text-[#2997ff] mt-0.5">{company}</p>
          <p className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] mt-0.5">{date}</p>
        </div>
        <span className={`text-[#6e6e73] text-lg shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-black/[0.04] dark:border-white/[0.04]">
          <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] mt-4 leading-relaxed">{description}</p>
          {bullets && bullets.length > 0 && (
            <div className="mt-4 space-y-3">
              {bullets.map((b) => (
                <div key={b.heading}>
                  <p className="text-sm font-medium text-[#1d1d1f] dark:text-white">{b.heading}</p>
                  <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] mt-0.5 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04] space-y-1.5">
            <p className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]"><span className="font-medium text-[#1d1d1f] dark:text-white">Tools: </span>{tools}</p>
            <p className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]"><span className="font-medium text-[#1d1d1f] dark:text-white">Impact: </span>{impact}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const tagColors: Record<string, string> = {
  teal:    "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300",
  pink:    "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300",
  emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300",
  indigo:  "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300",
  violet:  "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300",
  purple:  "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
};

function ProjectCard({
  gradient,
  emoji,
  title,
  description,
  note,
  tags,
  tagColor,
  links,
}: {
  gradient: string;
  emoji: string;
  title: string;
  description: string;
  note?: string;
  tags: string[];
  tagColor: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 fade-in">
      <div className={`h-28 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-4xl">{emoji}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-[#1d1d1f] dark:text-white leading-snug">{title}</h3>
          {note && (
            <span className="text-xs bg-[#f5f5f7] dark:bg-black/40 text-[#6e6e73] dark:text-[#a1a1a6] px-2 py-0.5 rounded-full shrink-0">{note}</span>
          )}
        </div>
        <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((t) => (
            <span key={t} className={`text-xs px-2.5 py-1 rounded-full ${tagColors[tagColor] ?? tagColors.indigo}`}>{t}</span>
          ))}
        </div>
        {links.length > 0 && (
          <div className="flex gap-4">
            {links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-sm text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium">
                {label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
