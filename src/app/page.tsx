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
    const message = "Hi Mauricio! I'd like to get in touch with you.";
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
                ["Photos", "photos"],
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
            <p className="text-xl sm:text-2xl text-white/90 mb-8">Junior Programmer</p>
            <div className="flex justify-center space-x-4">
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
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 counter" data-target="6">0</div>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 counter" data-target="3">0</div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 counter" data-target="5">0</div>
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
                I&apos;m a Computer Science student at McGill University, focusing on Artificial Intelligence and software development. I enjoy working on projects that combine code, design, and real-world impact — from building legal automation tools at Robalino Law to improving hotel operations with databases and AI chatbots.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;ve worked with technologies like Python, web development frameworks, and design tools, and I&apos;ve contributed to projects in both corporate and volunteer settings. I&apos;m also exploring how to use AI and automation to improve user experiences in areas like hospitality, productivity, and fitness.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With a multicultural background and fluency in English, Spanish, and French, I bring an international mindset and adaptability to everything I do.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              {/* Add your image here */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Hotel Innovation Intern</h3>
              <p className="text-blue-600 dark:text-blue-400">San Jose de Puembo – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">05/2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led two high-impact digital transformation initiatives at this landmark hotel near Quito&apos;s international airport.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">1. NFC Card Design & Deployment</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Conceptualized, designed, and deployed NFC-enabled guest cards providing seamless access to WiFi, digital TV guides, WhatsApp contact, and hotel services with a single tap. Optimized hardware configuration and guest interaction flow for scalability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">2. AI Chatbot Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Spearheaded AI-powered chatbot integration for hotel website and OTA platforms (Booking.com, Expedia). Built centralized knowledge base and worked with AskSuite to create 24/7 guest support, improving information accuracy and reducing response times.
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
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Junior Programmer</h3>
              <p className="text-blue-600 dark:text-blue-400">Robalino Law – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2024 – 08/2024</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Worked on the BIPAT (Business Intelligence Process Automated Technology) team creating solutions for the firm&apos;s clients.</li>
                <li>Worked in some team projects simultaneously and created scripts in Python for the clients&apos; solutions.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Supplier Database</h3>
              <p className="text-blue-600 dark:text-blue-400">San Jose de Puembo Hotel and Conference Center, an Ascend Hotel Collection – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2023 – 08/2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Contacted and researched information regarding each vendor to build a complete database for all the hotel suppliers.</li>
                <li>Analyzed the profitability of each client.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Design Specialist</h3>
              <p className="text-blue-600 dark:text-blue-400">Grupo Más – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">06/2023 – 07/2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Created and planned the front-end of an app design to help in parking solutions.</li>
                <li>Used the Justinmind software for the prototyping of the app.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition fade-in">
              <h3 className="text-xl font-bold">Volunteering Co-Founder</h3>
              <p className="text-blue-600 dark:text-blue-400">English for Puembo – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2022 – 12/2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Co-founded a volunteering program with Colegio Menor students to help underprivileged children learn English.</li>
              </ul>
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
              <h3 className="font-bold mb-6 text-lg">Programming Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">C</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Java</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">JavaScript</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">HTML/CSS</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
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
                    <span className="text-sm font-medium">French (Basic)</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: '60%'}}></div>
                  </div>
                </div>
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
            <div className="group bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in relative">
              <Image src="/globe.svg" alt="Virtual Coin Transaction Program" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Virtual Coin Transaction Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a program in Python that allows users to transfer coins to each other using an API to request user information.
                </p>
                <a href="https://github.com" className="text-blue-600 hover:underline">
                  View on GitHub
                </a>
              </div>
              {/* Tech Stack Overlay */}
              <div className="absolute inset-0 bg-blue-600/90 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <span className="bg-white/20 px-3 py-1 rounded">Python</span>
                  <span className="bg-white/20 px-3 py-1 rounded">API</span>
                  <span className="bg-white/20 px-3 py-1 rounded">JSON</span>
                  <span className="bg-white/20 px-3 py-1 rounded">HTTP</span>
                </div>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in relative">
              <Image src="/file.svg" alt="Instagram Database Program" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Instagram Database Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  CLI application written in C to manage an Instagram database using dynamic arrays, custom structs and UNIX Epoch timestamps.
                </p>
                <a href="https://github.com" className="text-blue-600 hover:underline">
                  View on GitHub
                </a>
              </div>
              {/* Tech Stack Overlay */}
              <div className="absolute inset-0 bg-green-600/90 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <span className="bg-white/20 px-3 py-1 rounded">C</span>
                  <span className="bg-white/20 px-3 py-1 rounded">CLI</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Data Structures</span>
                  <span className="bg-white/20 px-3 py-1 rounded">UNIX</span>
                </div>
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in relative">
              <Image src="/window.svg" alt="Mini-MIPS CPU" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mini-MIPS CPU</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed a single-cycle MIPS CPU in Logisim implementing instructions such as load, save, add, subtract and halt.
                </p>
                <a href="https://github.com" className="text-blue-600 hover:underline">
                  View on GitHub
                </a>
              </div>
              {/* Tech Stack Overlay */}
              <div className="absolute inset-0 bg-purple-600/90 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <span className="bg-white/20 px-3 py-1 rounded">Logisim</span>
                  <span className="bg-white/20 px-3 py-1 rounded">MIPS</span>
                  <span className="bg-white/20 px-3 py-1 rounded">CPU Design</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Assembly</span>
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
