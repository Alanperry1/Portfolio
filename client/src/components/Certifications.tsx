import { motion } from "framer-motion";
import { Shield, Award, Clock } from "lucide-react";

// Certification data
const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Validates the baseline skills necessary to perform core security functions and pursue an IT security career."
  },
  {
    name: "Google Cybersecurity Professional",
    issuer: "Google",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Demonstrates practical skills for an entry-level cybersecurity role including risk management, threat hunting, and SIEM tools."
  },
  {
    name: "IBM Cybersecurity Practitioner",
    issuer: "IBM",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Validates practical knowledge in cybersecurity threat intelligence, incident response, and security operations center procedures."
  },
  {
    name: "Certified Cybersecurity Analyst (C3SA)",
    issuer: "CyberwareFare Labs",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Validates advanced skills in threat analysis, digital forensics, and proactive security monitoring across enterprise environments."
  },
  {
    name: "Certified Network Security Professional (CNSP)",
    issuer: "SecOps Group",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Demonstrates ability to implement security controls and protect organizational networks."
  },
  {
    name: "Certified AppSec Practitioner (CAP)",
    issuer: "SecOps Group",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Validates expertise in application security, including secure coding practices, vulnerability assessment, and security testing methodologies."
  },
  {
    name: "Certified in Cybersecurity (ISC² CC)",
    issuer: "ISC²",
    icon: <Shield className="h-6 w-6 text-accent" />,
    description: "Validates foundation of knowledge in IT security and covers key cybersecurity principles and practices."
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section id="certifications" className="py-16 bg-cyber-pattern relative overflow-hidden">
      {/* Overlay with security grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Security scan line effect */}
      <motion.div 
        className="absolute left-0 w-full h-[1px] bg-accent/50 z-10"
        initial={{ top: 0, opacity: 0 }}
        animate={{ 
          top: ["0%", "100%"], 
          opacity: [0, 0.5, 0] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
            Professional <span className="text-accent">Certifications</span>
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          
          <p className="text-center text-neutral/70 mt-8 mb-4 max-w-3xl mx-auto">
            Professional certifications validating technical expertise and security knowledge in critical domains.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline container */}
          <div className="relative pl-8 sm:pl-32">
            {/* Main vertical timeline line */}
            <div className="absolute left-0 sm:left-16 top-0 bottom-0 w-0.5 bg-accent/30">
              {/* Animated dot that travels down the timeline */}
              <motion.div 
                className="absolute w-3 h-3 bg-accent rounded-full -left-[5px] sm:-left-1"
                initial={{ top: "0%" }}
                animate={{ top: ["0%", "100%"] }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  repeatType: "loop", 
                  ease: "linear" 
                }}
              />
            </div>
            
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                variants={itemVariants}
              >
                {/* Timeline node */}
                <div className="absolute -left-8 sm:-left-16 top-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-dark/80 border border-accent/50 flex items-center justify-center relative overflow-hidden">
                    {cert.icon}
                    <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
                  </div>
                  {/* Connecting line */}
                  <div className="absolute left-12 w-[calc(2rem-1px)] h-0.5 bg-accent/30 hidden sm:block"></div>
                </div>
                
                {/* Certification card */}
                <motion.div 
                  className="rounded-lg p-5 bg-secondary/30 backdrop-blur-sm border border-accent/20 relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Digital noise overlay */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-10 mix-blend-overlay"></div>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/60"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/60"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/60"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/60"></div>
                  
                  {/* Scanning line effect on hover */}
                  <motion.div 
                    className="absolute left-0 w-full h-[1px] bg-accent/40 opacity-0 group-hover:opacity-100 z-10"
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
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-accent mb-1 sm:mb-0">
                      {cert.name}
                    </h3>
                    <div className="text-xs text-accent/70 flex items-center bg-accent/5 py-1 px-2 rounded">
                      <Award className="w-3 h-3 mr-1" /> {cert.issuer}
                    </div>
                  </div>
                  
                  <p className="text-neutral/80 text-sm mt-3 pl-2 border-l border-accent/30">
                    {cert.description}
                  </p>
                  
                  {/* Certificate status */}
                  <div className="mt-4 bg-dark/20 p-3 rounded border-t border-accent/10 flex items-center justify-end">
                    <div className="flex items-center text-xs text-accent/60">
                      <Clock className="w-3 h-3 mr-1" /> 
                      <span>Active</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;