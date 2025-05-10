import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import CTFs from "@/components/CTFs";
import Organizations from "@/components/Organizations";
import Footer from "@/components/Footer";
import CyberSecurityBackground from "@/components/CyberSecurityBackground";
import ParticleNetwork from "@/components/ParticleNetwork";

const HomePage = () => {
  return (
    <div className="bg-primary text-neutral font-sans min-h-screen relative">
      {/* Add dynamic cybersecurity background */}
      <CyberSecurityBackground />
      {/* Add subtle network particle background */}
      <ParticleNetwork />
      
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <CTFs />
        <Organizations />
      </motion.main>
      <Footer />
    </div>
  );
};

export default HomePage;
