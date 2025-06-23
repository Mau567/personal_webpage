"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => {
      fadeObserver.observe(el);
    });

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const level = el.dataset.level;
          if (level) {
            el.style.width = `${level}%`;
          }
          skillObserver.unobserve(el);
        }
      });
    });

    document.querySelectorAll<HTMLElement>(".skill-level").forEach((el) => {
      skillObserver.observe(el);
    });

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target ?? "0", 10);
            let count = 0;
            const step = Math.max(1, Math.ceil(target / 60));
            const interval = setInterval(() => {
              count += step;
              if (count >= target) {
                el.textContent = String(target);
                clearInterval(interval);
              } else {
                el.textContent = String(count);
              }
            }, 30);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 1 }
    );

    document.querySelectorAll<HTMLElement>(".counter").forEach((el) => {
      counterObserver.observe(el);
    });

    return () => {
      fadeObserver.disconnect();
      counterObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);
  return (
    <main className="min-h-screen">
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 via-teal-600 to-blue-500 text-white animate-gradient parallax">
        <div className="max-w-5xl mx-auto">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Skill Item */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Programming</h3>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Python</li>
                <li>C</li>
                <li>Java</li>
                <li>Bash</li>
                <li>Command-Line Interface</li>
                <li>Assembler</li>
                <li>Logisim</li>
                <li>OCaml</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Languages</h3>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Spanish: Native</li>
                <li>English: Fluent</li>
                <li>French: Basic</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {[
              ["Python", 90],
              ["C", 80],
              ["Java", 70],
              ["Bash", 60],
            ].map(([skill, level]) => (
              <div key={skill as string}>
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-level={level} style={{ width: 0 }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 parallax fade-in">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["Projects", 12],
              ["Years Experience", 2],
              ["Languages", 3],
              ["Cups of Coffee", 100],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-4xl font-bold counter" data-target={value as number}>0</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="project-card bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/globe.svg" alt="Virtual Coin Transaction Program" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="tech-overlay">
                Python, REST API
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Virtual Coin Transaction Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a program in Python that allows users to transfer coins to each other using an API to request user information.
                </p>
                <a href="https://github.com" className="text-blue-600 hover:underline">
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="project-card bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/file.svg" alt="Instagram Database Program" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="tech-overlay">
                C, CLI
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Instagram Database Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  CLI application written in C to manage an Instagram database using dynamic arrays, custom structs and UNIX Epoch timestamps.
                </p>
                <a href="https://github.com" className="text-blue-600 hover:underline">
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="project-card bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden fade-in">
              <Image src="/window.svg" alt="Mini-MIPS CPU" width={400} height={192} className="w-full h-48 object-contain bg-gray-100" />
              <div className="tech-overlay">
                Logisim, Assembly
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mini-MIPS CPU</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed a single-cycle MIPS CPU in Logisim implementing instructions such as load, save, add, subtract and halt.
                </p>
                <a href="https://github.com" className="text-blue-600 hover:underline">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 fade-in parallax">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  mjletort@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span>
                  (438) 979 4330
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  1430 City Councillors St, Montreal, Canada
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🔗</span>
                  <a href="https://linkedin.com/in/mauricio-letort-129b30258" className="hover:underline">
                    linkedin.com/in/mauricio-letort-129b30258
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🌐</span>
                  French Nationality
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600" rows={4}></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
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
