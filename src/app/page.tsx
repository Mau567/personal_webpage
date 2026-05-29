"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

    document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      emailjs.init("583A_UDAfuwiMmy1c");

      const result = await emailjs.send(
        "service_ewblw3w",
        "template_h9t47g6",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "mjletort@gmail.com"
        }
      );

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
    const phoneNumber = "14389794330";
    const message = "Hi Mauricio! I'd like to get in touch with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main id="top" className="min-h-screen">
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            title="Contact via WhatsApp"
          >
            <span className="text-2xl">💬</span>
          </button>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 shadow-md transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#top" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                MJL
              </span>
              <span className="text-xl font-bold">Mauricio Javier Letort</span>
            </a>
            <div className="hidden md:flex space-x-8">
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
                  className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 right-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-violet-600/15 rounded-full blur-2xl animate-float-fast" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-6">

            {/* Profile photo with gradient ring */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 to-cyan-400">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/linkedin_profile_photo.jpeg"
                    alt="Mauricio Javier Letort"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Role badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/20 text-cyan-300 border border-indigo-500/30 tracking-wide">
              Computer Science Student · McGill University
            </span>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-7xl font-black leading-tight text-white">
              Hi, I&apos;m Mauricio<br className="hidden sm:block" />
              <span className="gradient-text"> Javier Letort</span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl">
              Building AI-powered products · Full-stack developer · Problem solver
            </p>

            {/* CTA row 1 */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border-2 border-white/30 hover:border-white/60 text-white px-7 py-3 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                View Projects
              </a>
            </div>

            {/* CTA row 2 */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://flowcv.com/resume/fd36ulsq7t"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>📄</span> View CV
              </a>
              <a
                href="https://github.com/Mau567"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log('GitHub link clicked')}
                className="bg-slate-800 hover:bg-slate-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-slate-600"
              >
                <span>🐙</span> GitHub Profile
              </a>
            </div>

            {/* Social links row */}
            <div className="flex gap-5 pt-2">
              <a href="https://www.linkedin.com/in/mauricio-javier-letort-129b30258/" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                LinkedIn
              </a>
              <span className="text-slate-600">·</span>
              <a href="https://github.com/Mau567" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                GitHub
              </a>
              <span className="text-slate-600">·</span>
              <a href="mailto:mjletort@gmail.com"
                className="text-slate-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                Email
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="fade-in bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-black mb-2 counter" data-target="6">0</div>
              <p className="text-indigo-100 text-sm font-medium">Projects Completed</p>
            </div>
            <div className="fade-in bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-black mb-2 counter" data-target="3">0</div>
              <p className="text-indigo-100 text-sm font-medium">Years Experience</p>
            </div>
            <div className="fade-in bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-black mb-2 counter" data-target="18">0</div>
              <p className="text-indigo-100 text-sm font-medium">Technologies</p>
            </div>
            <div className="fade-in bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-black mb-2 counter" data-target="9">0</div>
              <p className="text-indigo-100 text-sm font-medium">Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
            About Me
            <span className="section-accent-bar" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am a Computer Science student passionate about AI and Software Development. With experience ranging from developing innovative tools at Robalino Law to optimizing hotel operations through databases and AI chatbots at AHOTEC and San Jose de Puembo, I thrive on creating solutions that improve efficiency and enhance user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With a multicultural background, fluency in English and Spanish, and elementary proficiency in French, I bring an international perspective and adaptability to all my endeavors. I am always eager to collaborate on new challenges that leverage technology for meaningful outcomes.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden ring-4 ring-indigo-100 dark:ring-indigo-900">
              <Image
                src="/images/linkedin_profile_photo.jpeg"
                alt="Mauricio Javier Letort"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
            Experience
            <span className="section-accent-bar" />
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Hotel Chatbot Developer – AHOTEC Hotel Assistant Platform</h3>
              <p className="text-indigo-600 dark:text-indigo-400">Federación Hotelera del Ecuador (AHOTEC) – Freelance Project | Online</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">07/2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Leading the end-to-end development of a large-scale hotel management ecosystem supporting 50+ Ecuadorian hotels. The platform blends AI-driven guest discovery with streamlined registration workflows for property managers.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Full-Stack Development &amp; AI Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Built a modern web application with Next.js, React, and TypeScript using Tailwind CSS for responsive UI and Prisma ORM with PostgreSQL for resilient data models. Integrated AskSuite and custom chatbot flows that automate hotel discovery and guest engagement in real time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Database Design &amp; Backend Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Designed structured schemas with Prisma ORM and PostgreSQL, exposing RESTful APIs and secure file management pipelines for property assets. Implemented analytics dashboards and automation that generate marketing content, onboarding collateral, and performance reports.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Operations Automation &amp; Impact</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Delivered real-time property analytics, multilingual chatbot responses, and automated onboarding that reduce manual workload for hotel teams. Positioned AHOTEC with a scalable digital platform for national tourism growth.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, AskSuite, Generative AI, File Management
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> Streamlined hotel discovery for travelers, simplified property registration for hoteliers, and established a scalable automation hub for Ecuadorian tourism
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Ecuador Interactive Tourism Map</h3>
              <p className="text-indigo-600 dark:text-indigo-400">Ñan Magazine – Freelance Project (IDB-funded)</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">03/2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Government-backed digital initiative to promote Ecuador&apos;s lesser-known touristic destinations through an intuitive interactive map experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The project involved extensive research to identify and catalog Ecuador&apos;s diverse regions, curating highlights, images, and local recommendations. Each location was carefully researched to provide accurate and engaging information for potential visitors.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Project is funded by the Inter-American Development Bank (IDB) through Ñan Magazine and will be presented to the Ecuadorian government and President as part of a national tourism revitalization strategy, giving visibility to culturally rich yet overlooked locations.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> Google My Maps, Research & Data Collection, Government Tourism Datasets
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> National-level digital tool for rural tourism areas, expected integration into Ecuador&apos;s official tourism platforms
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Hotel Innovation Intern</h3>
              <p className="text-indigo-600 dark:text-indigo-400">San Jose de Puembo – Quito, Ecuador</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">05/2025 – 08/2025</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Led two high-impact digital transformation initiatives at this landmark hotel near Quito&apos;s international airport.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">1. NFC Card Design & Deployment</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conceptualized, designed, and deployed NFC-enabled guest cards providing seamless access to digital TV guides, WhatsApp contact, and hotel services with a single tap. Optimized hardware configuration and guest interaction flow for scalability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">2. AI Chatbot Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Spearheaded AI-powered chatbot integration for the hotel website and OTA platforms (Booking.com, Expedia). Built centralized knowledge bases, automated follow-ups, and analytics that improved response accuracy and reduced guest wait times.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">3. Data &amp; Operations Enablement</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Consolidated marketing collateral, WhatsApp automations, and guest usage analytics that now serve as a blueprint for future tech rollouts across the property.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> NFC Tools, Inkscape, Illustrator, AskSuite, Google Sheets, ChatGPT API, WhatsApp integration
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> Enhanced guest experience, reduced operational workload, created scalable tech foundation
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Junior Programmer</h3>
              <p className="text-indigo-600 dark:text-indigo-400">Robalino Law – Quito, Ecuador</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">07/2024 – 08/2024</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Contributed to the BIPAT (Business Intelligence Process Automated Technology) team, developing innovative solutions for corporate clients while gaining hands-on experience with enterprise-level software development.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Python Development & Automation</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Developed custom Python scripts and automation tools to streamline client workflows and improve data processing efficiency. Collaborated with senior developers to implement best practices and code optimization techniques.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Team Collaboration & Project Management</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Successfully managed multiple concurrent projects while maintaining high code quality standards. Participated in code reviews, team meetings, and contributed to technical documentation for client deliverables.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> Python, Git, JIRA, API Testing, Business Intelligence Tools, Team Coordination
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> Improved client solution delivery, enhanced team productivity, gained enterprise development experience
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Supplier Database Specialist</h3>
              <p className="text-indigo-600 dark:text-indigo-400">San Jose de Puembo Hotel and Conference Center, an Ascend Hotel Collection – Quito, Ecuador</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">07/2023 – 08/2023</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Led comprehensive vendor research and database development initiative for a major hotel chain, creating a centralized supplier management system to optimize procurement processes and cost analysis.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Vendor Research & Database Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conducted extensive research on hotel suppliers across multiple categories including food & beverage, housekeeping, maintenance, and technology services. Built a comprehensive database with detailed vendor profiles, contact information, and service offerings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Financial Analysis & Profitability Assessment</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Analyzed vendor pricing structures, payment terms, and service quality to assess profitability and value for each supplier relationship. Created detailed reports for management decision-making on vendor selection and contract negotiations.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> Google Sheets, Excel, CRM Systems, Vendor Management Platforms, Financial Analysis Tools
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> Streamlined procurement processes, improved vendor selection criteria, enhanced cost control and profitability analysis
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Design Specialist</h3>
              <p className="text-indigo-600 dark:text-indigo-400">Grupo Más – Quito, Ecuador</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">06/2023 – 07/2023</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Spearheaded the design and prototyping of an innovative parking solution mobile application, focusing on user experience optimization and intuitive interface design for urban mobility challenges.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Mobile App Design & Prototyping</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Designed comprehensive user interface mockups and user experience flows for a parking management application. Created wireframes, user journey maps, and interactive prototypes to demonstrate app functionality and user interactions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">UX/UI Development & User Research</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conducted user research to understand parking pain points and developed user-centered design solutions. Utilized Justinmind prototyping software to create high-fidelity interactive prototypes for stakeholder presentations and user testing.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> Justinmind, Figma, Adobe Creative Suite, User Research Methods, Prototyping Tools
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> Improved parking app user experience, enhanced stakeholder communication, established design foundation for development team
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold">Volunteering Co-Founder</h3>
              <p className="text-indigo-600 dark:text-indigo-400">English for Puembo – Quito, Ecuador</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">08/2022 – 12/2022</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 mt-2">
                Co-founded and established a community-based English education initiative, bringing together students from Colegio Menor to provide free English language instruction to underprivileged children in the Puembo area.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Program Development & Community Outreach</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Collaborated with Colegio Menor administration and local community leaders to establish program structure, secure resources, and recruit volunteer teachers. Developed curriculum materials and assessment methods tailored to different age groups and skill levels.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Volunteer Coordination & Student Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Managed a team of student volunteers, providing training on teaching methodologies and classroom management. Organized weekly classes, tracked student progress, and created a supportive learning environment that encouraged regular attendance and engagement.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> Curriculum Development, Volunteer Management, Community Outreach, Educational Assessment, Program Monitoring
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> Provided English education to 30+ underprivileged children, developed sustainable volunteer program model, strengthened community ties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
            Education
            <span className="section-accent-bar" />
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-red-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">🎓</span>
                <div>
                  <h3 className="text-xl font-bold">McGill University</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">B.Sc. Computer Science – Artificial Intelligence, Minor in Entrepreneurship</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">09/2022 – 12/2026 | Montreal, Canada</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-l-4 border-yellow-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">🏫</span>
                <div>
                  <h3 className="text-xl font-bold">Colegio Menor San Francisco de Quito</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">Magna Cum Laude – 93.34 GPA</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">06/2022 | Quito, Ecuador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
            Skills
            <span className="section-accent-bar" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-6 text-lg">Programming &amp; Data Languages</h3>
              <div className="space-y-4">
                {[
                  { name: "TypeScript", pct: 90 },
                  { name: "JavaScript", pct: 85 },
                  { name: "Python", pct: 90 },
                  { name: "SQL", pct: 85 },
                  { name: "Java", pct: 80 },
                  { name: "C", pct: 75 },
                  { name: "Bash", pct: 60 },
                  { name: "OCaml", pct: 70 },
                  { name: "Command Line Tools (CLI)", pct: 80 },
                ].map(({ name, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{name}</span>
                      <span className="text-sm text-gray-500">{pct}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-6 text-lg">Languages</h3>
              <div className="space-y-4">
                {[
                  { name: "Spanish (Native)", pct: 100 },
                  { name: "English (Fluent)", pct: 95 },
                  { name: "French (Elementary Proficiency)", pct: 20 },
                ].map(({ name, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{name}</span>
                      <span className="text-sm text-gray-500">{pct}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-6 text-lg">Frameworks &amp; Design</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Prisma", "Tailwind CSS", "PostgreSQL"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-6 text-lg">Technologies &amp; Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Node.js", "Vercel", "Git & GitHub", "API Integration", "AI Chatbots", "EmailJS", "Cursor"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
            Projects
            <span className="section-accent-bar" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="h-32 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <span className="text-5xl">🏨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AHOTEC Hotel Search Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive web application built for the Ecuadorian Hotel Federation (Federación Hotelera del Ecuador) that combines intelligent hotel search capabilities with a streamlined hotel registration system. The platform features an AI-powered chatbot that helps users find hotels based on location and preferences, while providing hotel owners with an intuitive form to register their properties with detailed amenities, services, and location information.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Mistral AI"].map((t) => (
                      <span key={t} className="bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700 px-2 py-1 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mau567/AHOTEC_chatbot" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-sm font-medium">
                    View on GitHub
                  </a>
                  <a href="https://ahotec-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 text-sm font-medium">
                    View Website
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="h-32 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <span className="text-5xl">🥗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nutria Health & Nutrition App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In one of my McGill classes, I developed Nutria, a mobile app focused on health and nutrition. The app helps users track their meals, receive personalized recommendations, and maintain balanced diets aligned with their goals. It integrates wellness guidance with practical tools, offering a simple yet powerful way for people to improve their daily eating habits and overall lifestyle.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <em>Note: This is an MVP (Minimum Viable Product)</em>
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "TypeScript", "Health API", "Nutrition Data"].map((t) => (
                      <span key={t} className="bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-700 px-2 py-1 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mau567/Nutria_App" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-sm font-medium">
                    View on GitHub
                  </a>
                  <a href="https://nutria-app-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 text-sm font-medium">
                    View Website
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="h-32 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <span className="text-5xl">🗺️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ñan Interactive Map</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Created an interactive digital map for Ñan Magazine showcasing Ecuador&apos;s diverse destinations and cultural highlights using Google My Maps. Through extensive research, I gathered comprehensive information about key points of interest including hotels, attractions, and natural landmarks. The map provides an engaging, visual format to make Ecuador&apos;s tourism more accessible and highlight lesser-known destinations.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.google.com/maps/d/viewer?mid=1VYOkfvdiMfGwaKRNGpo1WSmr8Kpv11Q&ll=-1.013817206379277%2C-79.38940824999999&z=8" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 text-sm font-medium">
                    View Map
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="h-32 bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A modern, responsive personal portfolio website built with Next.js and React. Features include smooth animations, contact forms with email integration, interactive project showcases, and a professional design that highlights my skills, experience, and projects. The website demonstrates my frontend development abilities and attention to user experience.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((t) => (
                      <span key={t} className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 px-2 py-1 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mau567/personal_webpage" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-sm font-medium">
                    View on GitHub
                  </a>
                  <a href="https://mauriciopersonalwebpage.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 text-sm font-medium">
                    View Website
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="h-32 bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
                <span className="text-5xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mini-MIPS CPU</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed a single-cycle MIPS CPU in Logisim implementing instructions such as load, save, add, subtract and halt.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Logisim", "MIPS", "CPU Design", "Assembly"].map((t) => (
                      <span key={t} className="bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700 px-2 py-1 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 fade-in">
              <div className="h-32 bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <span className="text-5xl">🎤</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">KaraokeJam - AI-Powered Karaoke</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Engineered a full-stack karaoke application with real-time pitch detection, achieving less than 100 ms WebSocket latency. Integrated Demucs, Whisper, and Librosa YIN for vocal separation, lyric alignment, and melody analysis. Architected an asynchronous audio pipeline using FastAPI and React, leveraging the Web Audio API for microphone capture with base64 float32 streaming and a semitone-based scoring algorithm. Implemented an end-to-end audio system capable of handling MP3/WAV conversion, utilizing Supabase PostgreSQL with Row Level Security (RLS), and object storage. The system manages background tasks to process songs from upload to a playable karaoke experience in under 3 minutes.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <em>Group project of 2 people for CodeJam coding competition, completed in 1 weekend for this hacking competition.</em>
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "React", "Web Audio API", "Whisper", "Demucs", "Librosa", "Supabase"].map((t) => (
                      <span key={t} className="bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700 px-2 py-1 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/AlanBrotherton/KaraokeJam" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-sm font-medium">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
            Contact Me
            <span className="section-accent-bar" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:mjletort@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      mjletort@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">📱</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+14389794330" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      (438) 979 4330
                    </a>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-sm transition-colors"
                >
                  <span className="mr-2 text-xl">💬</span>
                  <span>Chat on WhatsApp</span>
                </button>
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">🔗</span>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/mauricio-javier-letort-129b30258/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      linkedin.com/in/mauricio-javier-letort-129b30258
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">📍</span>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Montreal, Canada (open to remote collaboration)</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">📄</span>
                  <div>
                    <p className="font-medium">CV/Resume</p>
                    <a href="https://flowcv.com/resume/fd36ulsq7t" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      View CV
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">🐙</span>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/Mau567" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <span className="mr-3 text-xl">🌐</span>
                  <div>
                    <p className="font-medium">Nationality</p>
                    <p className="text-gray-600 dark:text-gray-300">French & Ecuadorian</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-xl dark:bg-gray-900 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-xl dark:bg-gray-900 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border rounded-xl dark:bg-gray-900 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-500 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-xl">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Contact Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Need to Get in Touch?</h3>
            <p className="text-indigo-200">I&apos;m always available for opportunities and collaborations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:mjletort@gmail.com" className="text-indigo-200 hover:text-white transition-colors">
                mjletort@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <button onClick={openWhatsApp} className="text-indigo-200 hover:text-white transition-colors">
                (438) 979 4330
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:+14389794330" className="text-indigo-200 hover:text-white transition-colors">
                (438) 979 4330
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-indigo-200">Montreal, Canada (open to remote collaboration)</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl transition-colors font-semibold"
            >
              <span className="mr-2">💬</span>
              Start WhatsApp Chat
            </button>
            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl transition-colors font-semibold"
            >
              <span className="mr-2">✉️</span>
              Send Detailed Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mauricio Javier Letort. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
