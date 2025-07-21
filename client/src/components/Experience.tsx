import { motion } from "framer-motion";

const experiences = [
  {
    title: "Application Security Engineer",
    company: "Georim",
    location: "Ruston, LA",
    period: "May 2025 - Present",
    category: "Full-time"
  },
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
    title: "Cybersecurity Engineer Intern",
    company: "Ideation Axis",
    location: "Accra, Ghana",
    period: "Jul 2023 - Nov 2023",
    category: "Internship"
  },
  {
    title: "Cybersecurity Job Simulation",
    company: "Forage",
    location: "Remote",
    period: "Jan 2024 - Mar 2024",
    category: ""
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
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-secondary/40 to-dark/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-accent/20 hover:shadow-accent/20 transition-all duration-300 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                        {experience.title}
                      </h3>
                      {experience.category && (
                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                          {experience.category}
                        </span>
                      )}
                    </div>
                    <p className="text-accent font-medium mb-1">{experience.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
