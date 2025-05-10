import { motion } from "framer-motion";
import { Trophy, Target, Terminal } from "lucide-react";

// CTF data
const ctfs = [
  {
    name: "VishwaCTF",
    event: "14th Place",
    icon: <Trophy className="h-6 w-6 text-accent" />,
    description: "Placed 14th overall in the VishwaCTF competition, demonstrating skills in cryptography, web exploitation, reverse engineering, and forensics."
  },
  {
    name: "H4CKP13T 0X01 CTF",
    event: "Participant",
    icon: <Terminal className="h-6 w-6 text-accent" />,
    description: "Participated in the H4CKP13T 0X01 CTF, tackling complex security challenges in a competitive environment."
  },
  {
    name: "HTB University CTF",
    event: "Participant",
    icon: <Target className="h-6 w-6 text-accent" />,
    description: "Competed in the HackTheBox University CTF, solving advanced cybersecurity challenges designed for university students."
  }
];

const CTFs = () => {
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
    <section id="ctfs" className="py-16 bg-gradient-to-b from-dark to-dark/95 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      {/* Animated code snippets floating in background */}
      <motion.div 
        className="absolute top-1/4 left-10 text-accent/10 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        flag&#123;c4ptur3_th3_fl4g&#125;
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-10 text-accent/10 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        0xA57F3C9B
      </motion.div>
      
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
            CTF <span className="text-accent">Competitions</span>
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ctfs.map((ctf, index) => (
            <motion.div 
              key={index}
              className="rounded-lg p-5 bg-secondary/20 backdrop-blur-sm border border-accent/20 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px -5px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.2 }
              }}
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
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md bg-dark/80 border border-accent/40 flex items-center justify-center mr-4 relative overflow-hidden">
                  {ctf.icon}
                  <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {ctf.name}
                  </h3>
                  <div className="text-xs text-accent/80">
                    {ctf.event}
                  </div>
                </div>
              </div>
              
              <p className="text-neutral/80 text-sm mt-3 pl-2 border-l border-accent/30">
                {ctf.description}
              </p>
              
              {/* Small badge in the corner */}
              <div className="absolute top-2 right-2 bg-accent/20 text-accent/90 text-xs py-1 px-2 rounded-sm font-mono">
                CTF
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTFs;