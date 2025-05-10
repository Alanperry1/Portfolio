import { motion } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import usbSanitizationImage from "../assets/projects/usb-sanitization.svg";
import reverseShellImage from "../assets/projects/reverse-shell.svg";
import sshHoneypotImage from "../assets/projects/ssh-honeypot.svg";
import malwareAnalysisImage from "../assets/projects/malware-analysis.svg";
import awsVulnerabilityImage from "../assets/projects/aws-vulnerability.svg";
import ctfCompetitionImage from "../assets/projects/ctf-competition.svg";
import sqliScannerImage from "../assets/projects/sqli-scanner.svg";

interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  isPrivate: boolean;
}

const projects = [
  {
    title: "SQLi Scanner",
    type: "Personal Project",
    description: "Created an advanced SQL injection vulnerability scanner with intelligent payload generation and risk assessment capabilities. Built with pattern recognition to identify vulnerable entry points in web applications.",
    tags: ["Python", "Web Security", "SQL Injection", "Vulnerability Assessment"],
    image: sqliScannerImage,
    github: "https://github.com/Alanperry1/SQLi-Scanner",
    isPrivate: false
  },
  {
    title: "WIZARD",
    type: "Personal Project",
    description: "Developed a Python-based USB drive sanitization program utilizing the Gutmann algorithm with three-pass randomization techniques to securely overwrite sensitive data, ensuring it is unrecoverable.",
    tags: ["Python", "Security", "Data Sanitization"],
    image: usbSanitizationImage,
    github: "https://github.com/Alanperry1/WIZARD",
    isPrivate: false
  },
  {
    title: "Reverse Shell Payload Generator",
    type: "Personal Project",
    description: "Developed and obfuscated PowerShell reverse shell payloads, enhancing stealth and evasion with custom error messages and IP address encoding, ensuring successful exploitation in penetration testing.",
    tags: ["PowerShell", "Pen Testing", "Payload Development"],
    image: reverseShellImage,
    github: "https://github.com/Alanperry1/Payload-Generator",
    isPrivate: false
  },
  {
    title: "SSH Honeypot",
    type: "Personal Project",
    description: "Developed and deployed honeypot on AWS to capture unauthorized login attempts and attacker credentials for threat intelligence and improving the detection of emerging attack vectors.",
    tags: ["Python", "AWS", "Threat Intelligence"],
    image: sshHoneypotImage,
    github: "https://github.com/Alanperry1/ssh_honeypot",
    isPrivate: false
  },
  {
    title: "Malware Analysis",
    type: "Team Project",
    description: "Analyzed Zeus Trojan malware samples using static and dynamic analysis to identify propagation and data exfiltration methods, tracing malware's execution flow and pinpointing malicious payloads.",
    tags: ["Malware Analysis", "YARA Rules", "IOC Detection"],
    image: malwareAnalysisImage,
    isPrivate: true
  },
  {
    title: "AWS Automated Vulnerability Management",
    type: "Personal Project",
    description: "Configured and deployed Nessus for automated vulnerability assessments on AWS-based systems, identifying and prioritizing high-risk CVEs and misconfigurations to enhance security posture.",
    tags: ["AWS", "Nessus", "Vulnerability Management"],
    image: awsVulnerabilityImage,
    isPrivate: true
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              className="py-1 px-8 border-2 border-purple-600 rounded-full mb-4 shadow-purple"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-7xl font-heading font-extrabold">
                <span className="bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
                  PROJECTS
                </span>
              </h2>
            </motion.div>
            
            {/* Decorative line */}
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-purple-600 to-accent rounded-full mb-8 shadow-glow opacity-80"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            ></motion.div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
        {/* Project grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-secondary/40 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple relative group h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow overlay on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"></div>
                
                {/* Digital noise overlay */}
                <div className="absolute inset-0 bg-cyber-grid opacity-10 mix-blend-overlay"></div>
                
                {/* Scanning line effect on hover */}
                <motion.div 
                  className="absolute left-0 w-full h-[2px] bg-accent/60 opacity-0 group-hover:opacity-100 z-10 shadow-glow"
                  initial={{ top: 0 }}
                  whileHover={{ 
                    top: ["0%", "100%"], 
                    transition: { 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }
                  }}
                />
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500/70 z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/70 z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/70 z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500/70 z-10"></div>
                
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/10"></div>
                  <div className="absolute bottom-0 left-0 w-full p-3">
                    <span className="text-xs font-cyber bg-purple-900/70 border border-purple-500/60 py-1 px-3 rounded-full text-white font-medium shadow-purple">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="bg-dark/40 p-4 rounded-md border-l-4 border-purple-500 mb-5 text-white/90">
                    <p className="leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center text-xs mb-5 gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-accent/40 border border-accent/60 text-white font-medium rounded-full px-3 py-1.5 shadow-sm shadow-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-accent/20">
                    {project.github ? (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white bg-purple-600/70 hover:bg-purple-600 px-4 py-2 rounded-full inline-flex items-center text-sm font-medium shadow-purple transition-all duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" /> 
                        <span className="relative">
                          View Code
                        </span>
                      </a>
                    ) : (
                      <span className="text-neutral/70 text-sm font-medium flex items-center">
                        <span className="bg-yellow-500/50 h-2.5 w-2.5 rounded-full mr-2 shadow-sm"></span>
                        Team Project
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
