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
    title: "Digital Infrastructure Risk Assessment",
    type: "Personal Project",
    description: "Performed comprehensive risk assessment to assess compliance and access risks using ISO 27001 controls and role-based access mapping. Remediated critical control gaps by enforcing developer access policies and design review checkpoints.",
    tags: ["ISO 27001", "Risk Assessment", "Compliance", "Access Control"],
    image: sqliScannerImage,
    isPrivate: true
  },
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
    <section id="projects" className="py-16 bg-gradient-to-b from-dark to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold font-cyber mt-4">
            <span className="relative inline-block">
              <span className="relative z-10 text-neon">CYBER</span>
              <span className="text-accent absolute -left-1 top-0 blur-sm opacity-70 z-0">CYBER</span>
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
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
              className="bg-gradient-to-br from-secondary/40 to-dark/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-accent/20 group hover:shadow-accent/20 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <img src={project.image} alt={project.title} className="w-16 h-16 object-contain" />
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-neutral/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-dark/30 text-white rounded border border-accent/50 backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(122, 54, 250, 0.3)',
                        borderColor: 'rgba(122, 54, 250, 0.5)',
                        boxShadow: '0 0 10px rgba(122, 54, 250, 0.2)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {!project.isPrivate && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-accent/80 to-purple-600/80 text-white rounded-lg hover:from-accent hover:to-purple-600 transition-all text-xs font-medium shadow-md hover:shadow-accent/30 transform hover:scale-105"
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  <div className="flex items-center gap-2 px-3 py-2 bg-dark/40 text-neutral border border-accent/30 rounded-lg text-xs">
                    <FileText size={14} />
                    <span>Documentation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
