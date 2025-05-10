import { motion } from "framer-motion";

const experiences = [
  {
    title: "Security Research Assistant",
    company: "Grambling State University",
    location: "Grambling, LA",
    period: "Feb 2025 - Present",
    category: "Research"
  },
  {
    title: "Digital Forensics Intern",
    company: "CFSS Cyber & Forensics Solutions",
    location: "Remote",
    period: "June 2024 - Sep 2024",
    category: "Internship"
  },
  {
    title: "Cybersecurity Job Simulation",
    company: "Forage",
    location: "Remote",
    period: "Jan 2024 - Mar 2024",
    category: "Simulation"
  },
  {
    title: "Cybersecurity Engineer Intern",
    company: "Ideation Axis",
    location: "Accra, Ghana",
    period: "Jul 2023 - Nov 2023",
    category: "Internship"
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="experience" className="py-16 bg-mesh-light">
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
              <span className="relative z-10 text-neon">WORK</span>
              <span className="text-accent absolute -left-1 top-0 blur-sm opacity-70 z-0">WORK</span>
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-container relative pl-10 pb-10"
              variants={itemVariants}
            >
              {/* Cyber-themed timeline node */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-dark/80 rounded-full border border-accent/70 flex items-center justify-center overflow-hidden group-hover:border-accent transition-colors duration-300">
                <div className="w-3 h-3 bg-accent/80 rounded-full group-hover:bg-accent relative z-10"></div>
                <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-60"></div>
                {/* Animated pulse ring */}
                <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping-slow opacity-70"></div>
              </div>
              
              {/* Vertical connector line */}
              <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>
              <motion.div 
                className="bg-secondary/30 backdrop-blur-sm rounded-lg p-6 border border-accent/20 transition-all hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Digital noise overlay */}
                <div className="absolute inset-0 bg-cyber-grid opacity-10 mix-blend-overlay"></div>
                
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
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/60"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/60"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/60"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/60"></div>
                
                {/* Terminal-style header */}
                <div className="flex justify-between mb-4 pb-3 border-b border-accent/10 relative">
                  <div className="flex items-center">
                    <span className="text-xs text-accent/60 font-cyber mr-2">&gt;</span>
                    <h3 className="text-xl font-cyber font-semibold text-accent">{exp.title}</h3>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-xs text-accent/70 font-cyber bg-dark/30 px-3 py-1 rounded-sm border border-accent/20">
                      {exp.category}
                    </span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="font-cyber text-sm text-neutral/80 flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent/70 rounded-full mr-2"></div>
                    <span className="font-semibold text-accent/90">{exp.company}</span>
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

export default Experience;
