import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {

  return (

    <div className="bg-[#081121] text-white min-h-screen overflow-x-hidden">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-6 border-b border-cyan-900 sticky top-0 bg-[#081121]/90 backdrop-blur-md z-50">

        <h1 className="text-3xl font-bold text-cyan-400">
          MS.
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300 font-semibold">

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#internship" className="hover:text-cyan-400 transition">
              Internship
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </nav>


      {/* Hero Section */}

      <section id="home" className="min-h-screen flex items-center px-10">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="max-w-4xl"
        >

          <div className="mb-6">

            <span className="border border-cyan-500 text-cyan-400 px-5 py-2 rounded-full text-sm">

              Available for opportunities

            </span>

          </div>

          <h1 className="text-7xl md:text-9xl font-extrabold leading-tight">

            Mohnish

            <br />

            <span className="text-cyan-400">
              Sharma
            </span>

          </h1>

          <p className="mt-10 text-gray-400 text-xl leading-10 max-w-3xl">

            MCA graduate passionate about building intelligent AI/ML applications,
            healthcare prediction systems, and modern Python web applications using
            FastAPI, Streamlit, Django, and Machine Learning.

          </p>


          {/* Buttons */}

          <div className="flex flex-wrap gap-6 mt-12">

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">

              View Projects →

            </button>

            <a
              href="https://github.com/Mohnish4246"
              target="_blank"
              className="border border-cyan-500 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-cyan-400 hover:text-black transition"
            >

              <FaGithub />

              GitHub

            </a>

            <a
              href="https://linkedin.com/in/mohnish-sharma-32763428b"
              target="_blank"
              className="border border-cyan-500 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-cyan-400 hover:text-black transition"
            >

              <FaLinkedin />

              LinkedIn

            </a>

          </div>

        </motion.div>

      </section>

      {/* About Section */}

      <section id="about" className="px-10 py-32">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Side */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

          >

            <p className="text-cyan-400 tracking-[6px] uppercase mb-6">
              About Me
            </p>

            <h2 className="text-6xl font-bold leading-tight mb-12">

              Building AI that
              <br />
              solves real problems

            </h2>

            <div className="space-y-10 text-gray-400 text-xl leading-10">

              <p>

                I'm an
                <span className="text-white font-semibold">
                  {" "}MCA graduate
                </span>
                {" "}from HP University Regional Center, Dharamshala.

              </p>

              <p>

                I completed my BCA from SVGC Ghumarwin and developed strong
                interest in Python development, AI/ML, and intelligent systems.

              </p>

              <p>

                I completed a
                <span className="text-white font-semibold">
                  {" "}Python with AI/ML Internship
                </span>
                {" "}at NCPL Mohali from January 2025 to July 2025.

              </p>

              <p>

                My expertise includes Python, Django, FastAPI,
                Machine Learning, Deep Learning, SQL, TensorFlow,
                Streamlit, and Jupyter Notebook.

              </p>

            </div>

          </motion.div>


          {/* Right Side Skills */}

          <motion.div

            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

          >

            {/* Languages */}

            <div className="mb-10">

              <h3 className="text-gray-500 uppercase tracking-[4px] mb-6">

                Languages & Frameworks

              </h3>

              <div className="flex flex-wrap gap-4">

                <span className="skill">Python</span>
                <span className="skill">Django</span>
                <span className="skill">FastAPI</span>
                <span className="skill">SQL</span>
                <span className="skill">HTML/CSS</span>

              </div>

            </div>


            {/* AI Skills */}

            <div className="mb-10">

              <h3 className="text-gray-500 uppercase tracking-[4px] mb-6">

                AI / ML

              </h3>

              <div className="flex flex-wrap gap-4">

                <span className="skill">Machine Learning</span>
                <span className="skill">Deep Learning</span>
                <span className="skill">Data Analysis</span>
                <span className="skill">TensorFlow</span>
                <span className="skill">scikit-learn</span>

              </div>

            </div>


            {/* Tools */}

            <div>

              <h3 className="text-gray-500 uppercase tracking-[4px] mb-6">

                Tools & Platforms

              </h3>

              <div className="flex flex-wrap gap-4">

                <span className="skill">GitHub</span>
                <span className="skill">Render</span>
                <span className="skill">Jupyter Notebook</span>
                <span className="skill">Streamlit</span>
                <span className="skill">Netlify</span>
                <span className="skill">VS Code</span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Projects Section */}

      <section id="projects" className="px-10 py-32">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

        >

          <p className="text-cyan-400 tracking-[6px] uppercase mb-6">
            Projects
          </p>

          <h2 className="text-6xl font-bold mb-20">

            Things I've
            <br />
            Built

          </h2>

        </motion.div>


        {/* Project Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Smart Healthcare */}

          <motion.div

            whileHover={{ y: -10 }}

            className="project-card"
          >

            <img
              src="/images/shs.png"
              alt="Smart Healthcare"
              className="project-image"
            />

            <div className="p-8">

              <p className="text-gray-500 mb-4">
                01 — Featured Project
              </p>

              <h3 className="text-4xl font-bold mb-6">

                Smart Healthcare
                Management System

              </h3>

              <p className="text-gray-400 text-lg leading-8 mb-8">

                AI-powered healthcare platform that predicts heart disease
                risk using machine learning with FastAPI backend and
                Streamlit frontend deployment.

              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="project-skill">Python</span>
                <span className="project-skill">FastAPI</span>
                <span className="project-skill">Streamlit</span>
                <span className="project-skill">Machine Learning</span>

              </div>


              {/* Buttons */}

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://smart-healthcare-frontend-7rzo.onrender.com"
                  target="_blank"
                  className="project-btn"
                >

                  Live Demo

                </a>

                <a
                  href="https://smart-healthcare-backend-d01v.onrender.com"
                  target="_blank"
                  className="project-btn-outline"
                >

                  Backend API

                </a>

              </div>

            </div>

          </motion.div>



          {/* AI Chatbot */}

          <motion.div

            whileHover={{ y: -10 }}

            className="project-card"
          >

            <img
              src="/images/ai-chatbot.png"
              alt="AI Chatbot"
              className="project-image"
            />

            <div className="p-8">

              <p className="text-gray-500 mb-4">
                02 — AI Project
              </p>

              <h3 className="text-4xl font-bold mb-6">

                AI Chatbot
                using Gemini API

              </h3>

              <p className="text-gray-400 text-lg leading-8 mb-8">

                Intelligent AI chatbot built using Streamlit and Gemini API
                for real-time conversational responses and interaction.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="project-skill">Python</span>
                <span className="project-skill">Gemini API</span>
                <span className="project-skill">Streamlit</span>
                <span className="project-skill">AI Chatbot</span>

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://ai-chatbot-geminii.streamlit.app/"
                  target="_blank"
                  className="project-btn"
                >

                  Live Demo

                </a>

              </div>

            </div>

          </motion.div>



          {/* AI Skill Predictor */}

          <motion.div

            whileHover={{ y: -10 }}

            className="project-card"
          >

            <img
              src="/images/ai-skill.png"
              alt="AI Skill Predictor"
              className="project-image"
            />

            <div className="p-8">

              <p className="text-gray-500 mb-4">
                03 — ML Project
              </p>

              <h3 className="text-4xl font-bold mb-6">

                AI Skill Predictor

              </h3>

              <p className="text-gray-400 text-lg leading-8 mb-8">

                Machine learning system that predicts user skills
                and recommends suitable technologies and career paths.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="project-skill">Machine Learning</span>
                <span className="project-skill">Python</span>
                <span className="project-skill">Data Analysis</span>

              </div>

              <div className="flex flex-wrap gap-5">

                <button className="project-btn">

                  Deployment Soon

                </button>

              </div>

            </div>

          </motion.div>

          {/* AI Finance Advisor */}

          <motion.div

            whileHover={{ y: -10 }}

            className="project-card"
          >

            <img
              src="/images/finance.png"
              alt="AI Finance Advisor"
              className="project-image"
            />

            <div className="p-8">

              <p className="text-gray-500 mb-4">
                04 — AI Finance Project
              </p>

              <h3 className="text-4xl font-bold mb-6">

                AI Smart Finance Advisor

              </h3>

              <p className="text-gray-400 text-lg leading-8 mb-8">

                Intelligent finance management system that provides
                smart budgeting insights, financial analysis,
                and AI-powered recommendations.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="project-skill">Python</span>
                <span className="project-skill">Machine Learning</span>
                <span className="project-skill">Data Analysis</span>
                <span className="project-skill">AI</span>

              </div>

              <div className="flex flex-wrap gap-5">

                <button className="project-btn">

                  Project Showcase

                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Experience Section */}

      <section id="internship" className="px-10 py-32">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

        >

          <p className="text-cyan-400 tracking-[6px] uppercase mb-6">
            Experience
          </p>

          <h2 className="text-6xl font-bold mb-24">

            Research &
            <br />
            Internships

          </h2>

        </motion.div>


        {/* Timeline */}

        <div className="relative border-l border-cyan-500 ml-4 space-y-24">


          {/* Internship 1 */}

          <div className="ml-10 relative">

            <div className="timeline-dot"></div>

            <p className="text-cyan-400 mb-4">
              January 2025 — July 2025
            </p>

            <h3 className="text-4xl font-bold mb-4">

              Python with AI/ML Intern

            </h3>

            <p className="text-blue-400 text-2xl mb-8">

              NCPL Mohali

            </p>

            <ul className="space-y-4 text-gray-400 text-lg leading-8">

              <li>
                → Worked on Python and AI/ML based applications.
              </li>

              <li>
                → Built Machine Learning projects using real-world datasets.
              </li>

              <li>
                → Worked with FastAPI, Streamlit, SQL, and TensorFlow.
              </li>

              <li>
                → Developed deployment-ready intelligent web applications.
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* Education Section */}

      <section id="education" className="px-10 py-32">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

        >

          <p className="text-cyan-400 tracking-[6px] uppercase mb-6">
            Education
          </p>

          <h2 className="text-6xl font-bold mb-20">

            Academic
            <br />
            Background

          </h2>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-10">


          {/* MCA */}

          <div className="project-card p-10">

            <p className="text-cyan-400 mb-4">
              2023 — 2025
            </p>

            <h3 className="text-4xl font-bold mb-6">

              Master of Computer Applications

            </h3>

            <p className="text-gray-400 text-xl leading-10">

              HP University Regional Center (HPURC),
              Dharamshala

            </p>

          </div>



          {/* BCA */}

          <div className="project-card p-10">

            <p className="text-cyan-400 mb-4">
              2020 — 2023
            </p>

            <h3 className="text-4xl font-bold mb-6">

              Bachelor of Computer Applications

            </h3>

            <p className="text-gray-400 text-xl leading-10">

              SVGC Ghumarwin,
              Himachal Pradesh

            </p>

          </div>

        </div>

      </section>

      {/* Certifications Section */}

      <section className="px-10 py-32">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

        >

          <p className="text-cyan-400 tracking-[6px] uppercase mb-6">
            Certifications
          </p>

          <h2 className="text-6xl font-bold mb-20">

            Courses &
            <br />
            Certifications

          </h2>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-10">


          <div className="project-card p-10">

            <h3 className="text-3xl font-bold mb-6">

              AI/ML Certification

            </h3>

            <p className="text-gray-400 text-lg leading-8">

              Completed Artificial Intelligence and Machine Learning
              training focused on model building, prediction systems,
              and intelligent applications.

            </p>

          </div>



          <div className="project-card p-10">

            <h3 className="text-3xl font-bold mb-6">

              Django Development Course

            </h3>

            <p className="text-gray-400 text-lg leading-8">

              Learned backend web development using Django,
              database integration, authentication systems,
              and deployment concepts.

            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section id="contact" className="px-10 py-32">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

        >

          <p className="text-cyan-400 tracking-[6px] uppercase mb-6">
            Contact
          </p>

          <h2 className="text-7xl font-bold leading-tight mb-10">

            Let's Work
            <br />

            <span className="text-cyan-400">
              Together.
            </span>

          </h2>

          <p className="text-gray-400 text-2xl mb-20 max-w-3xl leading-10">

            Open to Python Developer, AI/ML,
            Data Science, and Backend Development opportunities.

          </p>

        </motion.div>


        <div className="grid lg:grid-cols-2 gap-10">


          {/* Left Side */}

          <div className="space-y-8">


            {/* Email */}

            <a
              href="mailto:mohnishs848@gmail.com"
              className="project-card p-8 flex items-center justify-between hover:border-cyan-400"
            >

              <div>

                <p className="text-gray-500 uppercase mb-3">
                  Email
                </p>

                <h3 className="text-2xl font-semibold">
                  mohnishs848@gmail.com
                </h3>

              </div>

              <span className="text-3xl text-cyan-400">
                →
              </span>

            </a>



            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/mohnish-sharma-32763428b"
              target="_blank"
              className="project-card p-8 flex items-center justify-between hover:border-cyan-400"
            >

              <div>

                <p className="text-gray-500 uppercase mb-3">
                  LinkedIn
                </p>

                <h3 className="text-2xl font-semibold">
                  Mohnish Sharma
                </h3>

              </div>

              <span className="text-3xl text-cyan-400">
                →
              </span>

            </a>



            {/* GitHub */}

            <a
              href="https://github.com/Mohnish4246"
              target="_blank"
              className="project-card p-8 flex items-center justify-between hover:border-cyan-400"
            >

              <div>

                <p className="text-gray-500 uppercase mb-3">
                  GitHub
                </p>

                <h3 className="text-2xl font-semibold">
                  github.com/Mohnish4246
                </h3>

              </div>

              <span className="text-3xl text-cyan-400">
                →
              </span>

            </a>

          </div>



          {/* Right Side */}

          <div className="space-y-8">


            <div className="project-card p-8">

              <h3 className="text-3xl font-bold mb-4">

                Location

              </h3>

              <p className="text-gray-400 text-xl">

                Bilaspur (Ghumarwin),
                Himachal Pradesh

              </p>

            </div>



            <div className="project-card p-8">

              <h3 className="text-3xl font-bold mb-4">

                Phone

              </h3>

              <p className="text-gray-400 text-xl">

                +91 7876831808

              </p>

            </div>



            <div className="project-card p-8">

              <h3 className="text-3xl font-bold mb-4">

                Career Interests

              </h3>

              <p className="text-gray-400 text-xl leading-9">

                Python Developer,
                AI/ML Engineer,
                Data Science,
                Backend Development

              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Footer */}

      <footer className="border-t border-cyan-900 py-10 px-10 text-center text-gray-500">

        © 2026 Mohnish Sharma.
        Built with React, Tailwind CSS, and Framer Motion.

      </footer>
    </div>

  )
}

export default App