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
            
            // Animate counters
            if (entry.target.querySelector('.counter')) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute('data-target') || '0');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
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
      // Initialize EmailJS with your public key
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
    const phoneNumber = "14389794330"; // Canadian format
    const message = "Hi Mauricio! I&apos;d like to get in touch with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          {/* Main Floating Button */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            title="Contact via WhatsApp"
          >
            <span className="text-2xl">💬</span>
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 shadow-md transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold">Mauricio Javier Letort</div>
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
                  className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 via-teal-600 to-blue-500 text-white animate-gradient relative overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200">
              Hi, I&apos;m Mauricio Javier Letort
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">Hotel Chatbot Developer &amp; Computer Science Student</p>
            <div className="flex justify-center space-x-4 mb-6">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow transition-transform hover:bg-blue-700 hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow transition-transform hover:bg-blue-50 hover:scale-105"
              >
                View Projects
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="/cv.pdf"
                download
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow transition-transform hover:bg-green-700 hover:scale-105 flex items-center"
              >
                <span className="mr-2">📄</span>
                Download CV
              </a>
              <a
                href="https://github.com/Mau567"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log('GitHub link clicked')}
                className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow transition-transform hover:bg-gray-900 hover:scale-105 flex items-center"
              >
                <span className="mr-2">🐙</span>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 counter" data-target="8">0</div>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 counter" data-target="3">0</div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 counter" data-target="12">0</div>
              <p className="text-gray-600 dark:text-gray-400">Technologies</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 counter" data-target="3">0</div>
              <p className="text-gray-600 dark:text-gray-400">Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m a Computer Science student at McGill University specializing in Artificial Intelligence and entrepreneurship. My passion lives at the intersection of hospitality, automation, and design—building AI-powered products that make travel experiences seamless for both guests and operators.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Recently, I launched a large-scale hotel management platform for the Ecuadorian Hotel Federation, integrating chatbots, analytics, and property registration for more than 50 hotels. I also collaborate on government-backed tourism initiatives, craft mobile experiences, and prototype wellness and productivity tools.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With multicultural roots from Ecuador and France, fluency in English and Spanish, and growing French proficiency, I bring an adaptable, international perspective to every project I join.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image 
                src="/images/linkedin_profile_photo.jpeg" 
                alt="Mauricio Javier Letort" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Freelance Projects */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Hotel Chatbot Developer – AHOTEC Hotel Assistant Platform</h3>
              <p className="text-blue-600 dark:text-blue-400">Federación Hotelera del Ecuador (AHOTEC) – Freelance Project | Online</p>
              <p className="text-gray-600 dark:text-gray-400">07/2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Leading the end-to-end development of a large-scale hotel management ecosystem supporting 50+ Ecuadorian hotels. The platform blends AI-driven guest discovery with streamlined registration workflows for property managers.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Full-Stack Development &amp; AI Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Built a modern web application with Next.js, React, and TypeScript using Tailwind CSS for responsive UI and Prisma ORM with PostgreSQL for resilient data models. Integrated AskSuite and custom chatbot flows that automate hotel discovery and guest engagement in real time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Database Design &amp; Backend Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Designed structured schemas with Prisma ORM and PostgreSQL, exposing RESTful APIs and secure file management pipelines for property assets. Implemented analytics dashboards and automation that generate marketing content, onboarding collateral, and performance reports.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Operations Automation &amp; Impact</h4>
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
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Ecuador Interactive Tourism Map</h3>
              <p className="text-blue-600 dark:text-blue-400">Ñan – Freelance Project (BID-funded)</p>
              <p className="text-gray-600 dark:text-gray-400">03/2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Government-backed digital initiative to promote Ecuador&apos;s lesser-known touristic destinations through an intuitive interactive map experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Independently developed a web-based map allowing users to explore Ecuador&apos;s diverse regions through curated highlights, images, and local recommendations. The project integrates geolocation and interactive UI features to boost engagement.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Project is funded by the Inter-American Development Bank (BID) through Ñan and will be presented to the Ecuadorian government and President as part of a national tourism revitalization strategy, giving visibility to culturally rich yet overlooked locations.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tools:</strong> JavaScript, Leaflet.js/Mapbox GL, HTML/CSS, Figma, government tourism datasets
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <strong>Impact:</strong> National-level digital tool for rural tourism areas, expected integration into Ecuador&apos;s official tourism platforms
                </p>
              </div>
            </div>
            {/* Experience Item */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Hotel Innovation Intern</h3>
              <p className="text-blue-600 dark:text-blue-400">San Jose de Puembo – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">01/2025 – 05/2025</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led two high-impact digital transformation initiatives at this landmark hotel near Quito&apos;s international airport.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">1. NFC Card Design & Deployment</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conceptualized, designed, and deployed NFC-enabled guest cards providing seamless access to digital TV guides, WhatsApp contact, and hotel services with a single tap. Optimized hardware configuration and guest interaction flow for scalability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">2. AI Chatbot Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Spearheaded AI-powered chatbot integration for the hotel website and OTA platforms (Booking.com, Expedia). Built centralized knowledge bases, automated follow-ups, and analytics that improved response accuracy and reduced guest wait times.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">3. Data &amp; Operations Enablement</h4>
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
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Junior Programmer</h3>
              <p className="text-blue-600 dark:text-blue-400">Robalino Law – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2024 – 08/2024</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contributed to the BIPAT (Business Intelligence Process Automated Technology) team, developing innovative solutions for corporate clients while gaining hands-on experience with enterprise-level software development.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Python Development & Automation</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Developed custom Python scripts and automation tools to streamline client workflows and improve data processing efficiency. Collaborated with senior developers to implement best practices and code optimization techniques.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Team Collaboration & Project Management</h4>
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
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Data Mining Searcher</h3>
              <p className="text-blue-600 dark:text-blue-400">San Jose de Puembo Hotel and Conference Center, an Ascend Hotel Collection – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2023 – 08/2023</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led comprehensive vendor research and database development initiative for a major hotel chain, creating a centralized supplier management system to optimize procurement processes and cost analysis.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Vendor Research & Database Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conducted extensive research on hotel suppliers across multiple categories including food & beverage, housekeeping, maintenance, and technology services. Built a comprehensive database with detailed vendor profiles, contact information, and service offerings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Financial Analysis & Profitability Assessment</h4>
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
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Design Specialist</h3>
              <p className="text-blue-600 dark:text-blue-400">Grupo Más – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">05/2023 – 06/2023</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Spearheaded the design and prototyping of an innovative parking solution mobile application, focusing on user experience optimization and intuitive interface design for urban mobility challenges.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Mobile App Design & Prototyping</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Designed comprehensive user interface mockups and user experience flows for a parking management application. Created wireframes, user journey maps, and interactive prototypes to demonstrate app functionality and user interactions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">UX/UI Development & User Research</h4>
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
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Volunteering Co-Founder</h3>
              <p className="text-blue-600 dark:text-blue-400">English for Puembo – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">08/2022 – 12/2022</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founded and established a community-based English education initiative, bringing together students from Colegio Menor to provide free English language instruction to underprivileged children in the Puembo area.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Program Development & Community Outreach</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Collaborated with Colegio Menor administration and local community leaders to establish program structure, secure resources, and recruit volunteer teachers. Developed curriculum materials and assessment methods tailored to different age groups and skill levels.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Volunteer Coordination & Student Support</h4>
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
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow fade-in">
              <h3 className="text-xl font-bold">McGill University</h3>
              <p className="text-blue-600 dark:text-blue-400">B.Sc. Computer Science – Artificial Intelligence, Minor in Entrepreneurship</p>
              <p className="text-gray-600 dark:text-gray-400">09/2022 – 05/2027 | Montreal, Canada</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow fade-in">
              <h3 className="text-xl font-bold">Colegio Menor San Francisco de Quito</h3>
              <p className="text-blue-600 dark:text-blue-400">Magna Cum Laude – 93.34 GPA</p>
              <p className="text-gray-600 dark:text-gray-400">06/2022 | Quito, Ecuador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-6 text-lg">Programming &amp; Data Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">TypeScript</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">JavaScript</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">SQL</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Java</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">C</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Bash</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-sky-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">OCaml</span>
                    <span className="text-sm text-gray-500">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Command Line Tools (CLI)</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-6 text-lg">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Spanish (Native)</span>
                    <span className="text-sm text-gray-500">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">English (Fluent)</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">French (Elementary Proficiency)</span>
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '20%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-6 text-lg">Frameworks, Databases &amp; Design</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Prisma",
                  "PostgreSQL",
                  "SQL",
                  "Git",
                  "EmailJS",
                  "Figma",
                  "Adobe Creative Suite"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/globe.svg" alt="AHOTEC Hotel Search Assistant" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AHOTEC Hotel Search Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive web application built for the Ecuadorian Hotel Federation (Federación Hotelera del Ecuador) that combines intelligent hotel search capabilities with a streamlined hotel registration system. The platform features an AI-powered chatbot that helps users find hotels based on location and preferences, while providing hotel owners with an intuitive form to register their properties with detailed amenities, services, and location information.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">Next.js</span>
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">TypeScript</span>
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">Prisma</span>
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">PostgreSQL</span>
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">Mistral AI</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mau567/AHOTEC_chatbot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View on GitHub
                  </a>
                  <a href="https://ahotec-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/globe.svg" alt="Nutria Health & Nutrition App" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
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
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-xs">React Native</span>
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-xs">TypeScript</span>
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-xs">Health API</span>
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-xs">Nutrition Data</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mau567/Nutria_App" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View on GitHub
                  </a>
                  <a href="https://nutria-app-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/globe.svg" alt="Ñan Interactive Map" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ñan Interactive Map</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I am creating an interactive digital map for Ñan magazine that showcases Ecuador&apos;s diverse destinations and cultural highlights. The map allows users to explore key points of interest—such as hotels, attractions, and natural landmarks—in an engaging, visual format. Its goal is to make Ecuador&apos;s tourism more accessible by combining storytelling with intuitive navigation.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">JavaScript</span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Leaflet.js</span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">HTML/CSS</span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Tourism Data</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/globe.svg" alt="Personal Portfolio Website" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A modern, responsive personal portfolio website built with Next.js and React. Features include smooth animations, contact forms with email integration, interactive project showcases, and a professional design that highlights my skills, experience, and projects. The website demonstrates my frontend development abilities and attention to user experience.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Next.js</span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">TypeScript</span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mau567/personal_webpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View on GitHub
                  </a>
                  <a href="https://mauriciopersonalwebpage.vercel.app" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/window.svg" alt="Mini-MIPS CPU" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mini-MIPS CPU</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed a single-cycle MIPS CPU in Logisim implementing instructions such as load, save, add, subtract and halt.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Logisim</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">MIPS</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">CPU Design</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Assembly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <span className="mr-3 text-xl">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:mjletort@gmail.com" className="text-blue-600 hover:underline">
                      mjletort@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <span className="mr-3 text-xl">📱</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+14389794330" className="text-blue-600 hover:underline">
                      (438) 979 4330
                    </a>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-sm transition-colors"
                >
                  <span className="mr-2 text-xl">💬</span>
                  <span>Chat on WhatsApp</span>
                </button>
                <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <span className="mr-3 text-xl">🔗</span>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/mauricio-letort-129b30258" className="text-blue-600 hover:underline">
                      linkedin.com/in/mauricio-letort-129b30258
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <span className="mr-3 text-xl">📄</span>
                  <div>
                    <p className="font-medium">CV/Resume</p>
                    <a href="/cv.pdf" download className="text-blue-600 hover:underline">
                      Download PDF
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <span className="mr-3 text-xl">🐙</span>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/Mau567" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <span className="mr-3 text-xl">🌐</span>
                  <div>
                    <p className="font-medium">Nationality</p>
                    <p className="text-gray-600 dark:text-gray-300">French & Ecuadorian</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
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
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
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
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Contact Section - Always Available */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Need to Get in Touch?</h3>
            <p className="text-blue-100">I&apos;m always available for opportunities and collaborations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a 
                href="mailto:mjletort@gmail.com" 
                className="text-blue-100 hover:text-white transition-colors"
              >
                mjletort@gmail.com
              </a>
            </div>
            
            {/* WhatsApp Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <button 
                onClick={openWhatsApp}
                className="text-blue-100 hover:text-white transition-colors"
              >
                (438) 979 4330
              </button>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a 
                href="tel:+14389794330" 
                className="text-blue-100 hover:text-white transition-colors"
              >
                (438) 979 4330
              </a>
            </div>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
            >
              <span className="mr-2">💬</span>
              Start WhatsApp Chat
            </button>
            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="mr-2">✉️</span>
              Send Detailed Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mauricio Javier Letort. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
