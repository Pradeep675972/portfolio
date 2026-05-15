function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold">
          Pradeep Rathore
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
       <img
  src="/profile.png"
  alt=""
  className="w-40 h-40 rounded-full border-4 border-blue-600 mb-8 object-cover"
/>
        <h2 className="text-6xl font-bold leading-tight max-w-4xl">
          Building Modern & Scalable Web Experiences
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          I build responsive and modern web applications using
          React.js, Next.js, Node.js, Express.js, and MongoDB.
        </p>

       <div className="flex gap-4 mt-8">

  <a
  href="#projects"
  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl"
>
  View Projects
</a>

 <a
  href="#contact"
  className="border border-gray-600 hover:bg-slate-800 transition px-6 py-3 rounded-xl"
>
  Contact Me
</a>

<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-800 hover:bg-slate-700 transition px-6 py-3 rounded-xl"
>
  Download Resume
</a>

</div>

      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="px-10 mt-32"
      >

        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">

            <h3 className="text-2xl font-semibold">
              Doctor Appointment App
            </h3>

            <p className="text-gray-400 mt-4">
              MERN stack application with authentication,
              appointment booking, and REST APIs.
            </p>

            <div className="flex gap-3 mt-5">

              <a
                href="https://doctor-appointment-nine-brown.vercel.app"
                target="_blank"
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Pradeep675972/Doctor-Appointment"
                target="_blank"
                className="bg-slate-700 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">

            <h3 className="text-2xl font-semibold">
              AI App Generator
            </h3>

            <p className="text-gray-400 mt-4">
              AI-powered application generator using
              Next.js and React.js.
            </p>

            <div className="flex gap-3 mt-5">

              <a
                href="https://ai-app-generator-ruby.vercel.app"
                target="_blank"
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Pradeep675972/ai-app-generator.git"
                target="_blank"
                className="bg-slate-700 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">

            <h3 className="text-2xl font-semibold">
              macOS Web UI
            </h3>

            <p className="text-gray-400 mt-4">
              Interactive macOS-inspired UI built with React.js.
            </p>

            <div className="flex gap-3 mt-5">

              <a
                href="https://macos-web-os.vercel.app"
                target="_blank"
                // className="bg-blue-600 px-4 py-2 rounded-lg"
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Pradeep675972/macos-web-os.git"
                target="_blank"
                className="bg-slate-700 hover:bg-slate-600 transition px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mt-32 text-center px-6"
      >

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "React.js",
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-600 px-5 py-3 rounded-xl"
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-32 pb-20 text-center px-6"
      >

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg">
          Let’s work together and build amazing web experiences.
        </p>

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://github.com/Pradeep675972"
            target="_blank"
            className="bg-slate-800 px-6 py-3 rounded-xl hover:bg-slate-700 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

        </div>

      </section>
      <footer className="text-center py-8 text-gray-500">
  © 2026 Pradeep Rathore. All rights reserved.
</footer>

    </div>
  )
}

export default App