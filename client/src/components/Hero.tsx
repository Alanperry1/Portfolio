import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Shield, Code } from "lucide-react";
import CyberBackground from "@/assets/cyber-background";

const titles = [
  "Cybersecurity Expert",
  "Security Analyst",
  "Penetration Tester",
  "Ethical Hacker"
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "System secure. Access granted.";
  const typingSpeed = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.1, 0.9, 1],
      x: [0, 30, -20, 0],
      y: [0, -50, 20, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  const gridLineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 0.3,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-mesh digital-noise relative overflow-hidden">
      {/* Animated cyber grid lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 bg-hex-pattern opacity-50"></div>

      {/* Animated glowing lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          d="M0,33 L100,67" 
          stroke="rgba(122, 54, 250, 0.2)" 
          strokeWidth="0.2" 
          fill="none"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
        />
        <motion.path 
          d="M0,67 L100,33" 
          stroke="rgba(122, 54, 250, 0.2)" 
          strokeWidth="0.2" 
          fill="none"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.path 
          d="M50,0 L50,100" 
          stroke="rgba(122, 54, 250, 0.2)" 
          strokeWidth="0.2" 
          fill="none"
          variants={gridLineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
      </svg>
      
      {/* Animated background blobs - enhanced glow */}
      <motion.div 
        className="absolute -top-64 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-30"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Terminal-style header */}
          <motion.div 
            className="terminal p-1 px-3 mb-4 inline-flex items-center"
            variants={itemVariants}
          >
            <span className="font-cyber text-xs text-accent mr-2">&gt;</span>
            <span className="font-cyber text-xs text-neon">{typedText}</span>
            <span className={`terminal-cursor font-cyber text-xs text-accent ${typedText.length === fullText.length ? 'ml-1' : ''}`}></span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 font-cyber text-left"
            variants={itemVariants}
          >
            <span className="block text-neon">Baning Philip Amponsah</span>
            <div className="h-20 md:h-24 overflow-hidden flex items-center justify-start border-l-2 border-accent pl-3 mt-2">
              <motion.span 
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-accent font-cyber text-neon text-2xl md:text-3xl text-left"
              >
                {titles[titleIndex]}
              </motion.span>
            </div>
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-8 text-neutral/80 max-w-lg font-cyber border-l border-accent/40 pl-4 text-left"
            variants={itemVariants}
          >
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              asChild 
              className="btn-cyber font-cyber px-8 py-6 border-neon"
            >
              <a href="#contact">
                <Shield className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="btn-cyber font-cyber px-8 py-6"
            >
              <a href="#projects">
                <Code className="mr-2 h-5 w-5" />
                View My Work
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex mt-8 space-x-4"
            variants={itemVariants}
          >
            <a 
              href="https://linkedin.com/in/pabaning" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary/50 p-3 rounded-full text-accent hover:text-dark hover:bg-accent transition-all transform hover:scale-110 border-neon"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Alanperry1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary/50 p-3 rounded-full text-accent hover:text-dark hover:bg-accent transition-all transform hover:scale-110 border-neon"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:baningphilip1@gmail.com" 
              className="bg-secondary/50 p-3 rounded-full text-accent hover:text-dark hover:bg-accent transition-all transform hover:scale-110 border-neon"
              aria-label="Send email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
          

        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Enhanced cyber background with glow effects */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-accent/20 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
            <CyberBackground className="rounded-2xl shadow-lg border-neon border border-accent/70 transform hover:scale-105 transition-all duration-500 relative z-10" />
            
            {/* Animated corners */}
            <svg className="absolute top-0 left-0 w-8 h-8 -m-1 z-20" viewBox="0 0 24 24">
              <motion.polyline 
                points="2,8 2,2 8,2" 
                fill="none" 
                stroke="rgb(122, 54, 250)" 
                strokeWidth="2" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </svg>
            <svg className="absolute top-0 right-0 w-8 h-8 -m-1 z-20" viewBox="0 0 24 24">
              <motion.polyline 
                points="16,2 22,2 22,8" 
                fill="none" 
                stroke="rgb(122, 54, 250)" 
                strokeWidth="2" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </svg>
            <svg className="absolute bottom-0 left-0 w-8 h-8 -m-1 z-20" viewBox="0 0 24 24">
              <motion.polyline 
                points="2,16 2,22 8,22" 
                fill="none" 
                stroke="rgb(122, 54, 250)" 
                strokeWidth="2" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />
            </svg>
            <svg className="absolute bottom-0 right-0 w-8 h-8 -m-1 z-20" viewBox="0 0 24 24">
              <motion.polyline 
                points="16,22 22,22 22,16" 
                fill="none" 
                stroke="rgb(122, 54, 250)" 
                strokeWidth="2" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
      
      {/* Security scan line effect */}
      <motion.div 
        className="absolute left-0 w-full h-[2px] bg-accent/40 z-10"
        initial={{ top: 0, opacity: 0 }}
        animate={{ 
          top: ["0%", "100%", "0%"], 
          opacity: [0, 0.5, 0] 
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
    </section>
  );
};

export default Hero;
