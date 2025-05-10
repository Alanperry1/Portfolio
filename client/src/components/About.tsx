import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Headshot from "@/assets/headshot";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  const resumePath = `/api/download-resume`;

  return (
    <section id="about" className="py-16 bg-cyber-pattern relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hex-pattern opacity-20"></div>
      
      {/* Scanning lines */}
      <motion.div 
        className="absolute left-0 w-full h-[2px] bg-accent/30 z-10"
        initial={{ top: "30%" }}
        animate={{ 
          top: ["30%", "80%"], 
          opacity: [0, 0.5, 0] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute left-0 w-full h-[1px] bg-accent/20 z-10"
        initial={{ top: "50%" }}
        animate={{ 
          top: ["50%", "20%"], 
          opacity: [0, 0.3, 0] 
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
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
              <span className="relative z-10 text-neon">ABOUT</span>
              <span className="text-accent absolute -left-1 top-0 blur-sm opacity-70 z-0">ABOUT</span>
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">ME</span>
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/2"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Cyber frame and effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/70"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/70"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/70"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/70"></div>
              
              {/* Image with overlay */}
              <div className="relative z-10 rounded-lg overflow-hidden border border-accent/50">
                <div className="absolute inset-0 bg-cyber-grid opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/20"></div>
                
                <Headshot className="w-full h-auto rounded-lg" />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-4">
                  <div className="text-xs font-cyber text-accent/80 flex justify-between items-center">
                    <span>SCAN::COMPLETE</span>
                    <span>STATUS::VERIFIED</span>
                  </div>
                </div>
                
                {/* Scan line effect */}
                <motion.div 
                  className="absolute left-0 w-full h-[2px] bg-accent/40 z-10"
                  initial={{ top: 0, opacity: 0 }}
                  animate={{ 
                    top: ["0%", "100%"], 
                    opacity: [0, 0.8, 0] 
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.h3 
              className="text-2xl font-heading font-semibold mb-4 font-cyber text-neon"
              variants={itemVariants}
            >
              Cybersecurity Professional
            </motion.h3>
            
            <motion.div
              className="mb-8 relative bg-secondary/5 p-5 rounded-md border-l-2 border-accent/40"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 p-1 font-cyber text-xs text-accent/70">
                PROFILE::SUMMARY
              </div>
              
              <p className="mb-4 text-neutral/90 font-cyber relative z-10">
                <span className="text-accent/90">&gt;</span> I am a passionate cybersecurity student at Grambling State University, pursuing a Bachelor of Science in Cybersecurity and Computer Science. 
                My hands-on experience spans offensive security, digital forensics, and cloud security, gained through various professional roles.
              </p>
              
              <p className="mb-4 text-neutral/90 font-cyber relative z-10">
                <span className="text-accent/90">&gt;</span> Throughout my career, I have conducted vulnerability assessments, malware analysis, and forensic investigations, leveraging industry-standard tools 
                like Splunk, Metasploit, Wireshark, and Nmap.
              </p>
              
              <p className="text-neutral/90 font-cyber relative z-10">
                <span className="text-accent/90">&gt;</span> My technical expertise includes programming in Python, C++, Bash, and PowerShell, as well as proficiency in security frameworks such as MITRE ATT&CK 
                and NIST CSF. Certified in Security+, C3SA, CAP, CNSP, and ISC2 CC, I am committed to mastering the field of cybersecurity with a focus on offensive security and incident response.
              </p>
              
              {/* Digital noise overlay for the text box */}
              <div className="absolute inset-0 bg-cyber-grid opacity-10 mix-blend-overlay rounded-md"></div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-6"
            >
              <Button 
                asChild
                className="btn-cyber font-cyber border-2 border-accent/70 border-neon relative overflow-hidden py-6 group bg-transparent"
              >
                <a 
                  href={resumePath} 
                  download="Baning_Philip_Amponsah_Resume.pdf"
                  className="relative z-10 flex items-center justify-center px-8 text-center"
                >
                  <span className="bg-accent/10 p-2 rounded mr-4 group-hover:bg-accent/30 transition-all flex-shrink-0">
                    <Download className="h-5 w-5 text-accent" />
                  </span>
                  <span className="uppercase tracking-wider font-medium text-white">Download Resume</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent/50 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
