import { motion } from "framer-motion";
import { Users } from "lucide-react";

const organizations = [
  "ISC2",
  "Association of Computing Machinery", 
  "Blacks in Cybersecurity", 
  "Colorstack", 
  "NSBE", 
  "SECURE"
];

const Organizations = () => {
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
    <section id="organizations" className="py-16 bg-dark relative overflow-hidden">
      {/* Overlay with grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="relative mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
            <span className="text-accent">Organizations</span> & Clubs
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-2xl mx-auto">
              {organizations.map((org, index) => (
                <motion.span 
                  key={index}
                  className="bg-accent/30 border border-accent/50 py-4 px-6 rounded-md text-white text-center font-medium shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "rgba(138, 75, 255, 0.5)",
                    boxShadow: "0 0 15px rgba(138, 75, 255, 0.5)" 
                  }}
                >
                  {org}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Organizations;