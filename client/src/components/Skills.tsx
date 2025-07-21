import { motion } from "framer-motion";
import { 
  Search, 
  Bug, 
  Microscope, 
  Worm, 
  LineChart, 
  Network
} from "lucide-react";

const languages = [
  { name: "Python", proficiency: 90, level: "Proficient" },
  { name: "JavaScript", proficiency: 85, level: "Proficient" },
  { name: "C++", proficiency: 85, level: "Proficient" },
  { name: "Bash", proficiency: 75, level: "Intermediate" },
  { name: "SQL", proficiency: 70, level: "Intermediate" },
  { name: "PowerShell", proficiency: 65, level: "Intermediate" },
  { name: "YARA", proficiency: 50, level: "Beginner" }
];

const securityTools = [
  "Splunk", "Metasploit", "Wireshark", "Nmap", "BurpSuite", 
  "Ghidra", "IDA Pro", "Autopsy", "Nessus", "IBM X-Force", "OWASP ZAP", "OpenVAS"
];

const frameworks = ["STRIDE", "NIST CSF", "MITRE ATT&CK", "PCI-DSS", "OWASP", "Cyber Kill Chain", "Diamond Model", "ISO 27001"];

const coreSkills = [
  { name: "Risk Assessment", icon: <Search className="h-6 w-6" /> },
  { name: "Penetration Testing", icon: <Bug className="h-6 w-6" /> },
  { name: "Digital Forensics", icon: <Microscope className="h-6 w-6" /> },
  { name: "Malware Analysis", icon: <Worm className="h-6 w-6" /> },
  { name: "SIEM Management", icon: <LineChart className="h-6 w-6" /> },
  { name: "Threat Modeling", icon: <Network className="h-6 w-6" /> }
];

const Skills = () => {
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
    <section id="skills" className="py-16 bg-mesh-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            
            {/* Programming Languages */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h4 className="text-2xl font-heading font-semibold mb-6 pl-2 border-l-4 border-accent">Programming Languages</h4>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{lang.name}</span>
                      <span>{lang.level}</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2.5">
                      <motion.div 
                        className="bg-accent h-2.5 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Security Tools */}
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-heading font-semibold mb-6 pl-2 border-l-4 border-accent">Security Tools</h4>
              <div className="flex flex-wrap gap-3">
                {securityTools.map((tool, index) => (
                  <motion.span 
                    key={index}
                    className="bg-secondary/50 py-2 px-4 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -3, backgroundColor: "rgba(52, 65, 85, 0.7)" }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Frameworks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-heading font-semibold mb-6 pl-2 border-l-4 border-accent"
              variants={itemVariants}
            >
              Security Frameworks
            </motion.h3>
            
            {/* Security Frameworks */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="flex flex-wrap gap-3 mb-6">
                {frameworks.map((framework, index) => (
                  <motion.span 
                    key={index}
                    className="bg-secondary/50 py-2 px-4 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -3, backgroundColor: "rgba(52, 65, 85, 0.7)" }}
                  >
                    {framework}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Key Security Skills */}
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-heading font-semibold mb-6 pl-2 border-l-4 border-accent">Key Security Skills</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Vulnerability Assessment", "Penetration Testing", "Digital Forensics", "Malware Analysis", 
                "SIEM Management", "Threat Modelling", "Cyber Threat Intelligence", "Cloud Security"].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-secondary/50 py-2 px-4 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -3, backgroundColor: "rgba(52, 65, 85, 0.7)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Core Skills */}
        <motion.div 
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-heading font-semibold mb-6 text-center"
            variants={itemVariants}
          >
            Core Areas of Expertise
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {coreSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-secondary/30 p-5 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(52, 65, 85, 0.7)" }}
              >
                <div className="text-accent text-3xl mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-medium">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
