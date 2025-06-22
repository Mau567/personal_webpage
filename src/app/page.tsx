export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 shadow-md transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold">Mauricio Javier Letort</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-pink-500 dark:hover:text-pink-400">About</a>
              <a href="#experience" className="hover:text-pink-500 dark:hover:text-pink-400">Experience</a>
              <a href="#education" className="hover:text-pink-500 dark:hover:text-pink-400">Education</a>
              <a href="#skills" className="hover:text-pink-500 dark:hover:text-pink-400">Skills</a>
              <a href="#projects" className="hover:text-pink-500 dark:hover:text-pink-400">Projects</a>
              <a href="#photos" className="hover:text-pink-500 dark:hover:text-pink-400">Photos</a>
              <a href="#contact" className="hover:text-pink-500 dark:hover:text-pink-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-500 text-white animate-gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-400">
              Hi, I&apos;m Mauricio Javier Letort
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">Junior Programmer</p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-white/30 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl">
                Contact Me
              </a>
              <a href="#projects" className="border border-white/70 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:bg-white/20 hover:scale-110 hover:shadow-xl">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a Computer Science student at McGill University, focusing on Artificial Intelligence and software development. I enjoy working on projects that combine code, design, and real-world impact — from building legal automation tools at Robalino Law to improving hotel operations with databases and AI chatbots.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I've worked with technologies like Python, web development frameworks, and design tools, and I've contributed to projects in both corporate and volunteer settings. I'm also exploring how to use AI and automation to improve user experiences in areas like hospitality, productivity, and fitness.
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
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold">Junior Programmer</h3>
              <p className="text-blue-600 dark:text-blue-400">Robalino Law – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2024 – 08/2024</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Worked on the BIPAT (Business Intelligence Process Automated Technology) team creating solutions for the firm's clients.</li>
                <li>Worked in some team projects simultaneously and created scripts in Python for the clients' solutions.</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold">Supplier Database</h3>
              <p className="text-blue-600 dark:text-blue-400">San Jose de Puembo Hotel and Conference Center, an Ascend Hotel Collection – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">07/2023 – 08/2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Contacted and researched information regarding each vendor to build a complete database for all the hotel suppliers.</li>
                <li>Analyzed the profitability of each client.</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold">Design Specialist</h3>
              <p className="text-blue-600 dark:text-blue-400">Grupo Más – Quito, Ecuador</p>
              <p className="text-gray-600 dark:text-gray-400">06/2023 – 07/2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Created and planned the front-end of an app design to help in parking solutions.</li>
                <li>Used the Justinmind software for the prototyping of the app.</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
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
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold">McGill University</h3>
              <p className="text-blue-600 dark:text-blue-400">B.Sc. Computer Science – Artificial Intelligence, Minor in Entrepreneurship</p>
              <p className="text-gray-600 dark:text-gray-400">09/2022 – 05/2026 | Montreal, Canada</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold">Colegio Menor San Francisco de Quito</h3>
              <p className="text-blue-600 dark:text-blue-400">Magna Cum Laude – 93.34 GPA</p>
              <p className="text-gray-600 dark:text-gray-400">06/2022 | Quito, Ecuador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Virtual Coin Transaction Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a program in Python that allows users to transfer coins to each other using an API to request user information.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Instagram Database Program</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  CLI application written in C to manage an Instagram database using dynamic arrays, custom structs and UNIX Epoch timestamps.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mini-MIPS CPU</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed a single-cycle MIPS CPU in Logisim implementing instructions such as load, save, add, subtract and halt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
