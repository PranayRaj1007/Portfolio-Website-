import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center items-center h-screen text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span className="text-blue-600">Pranay Raj</span>
      </motion.h2>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Full-Stack Developer | Data Analyst | Cloud | AI Enthusiast
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
export default Hero;
