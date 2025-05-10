import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Clock, Code, Cpu, MessageSquare, Shield, Lock, Award, Flag } from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const staggerChildren = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  const menuItems = [
    { href: "#home", label: "HOME", icon: Home },
    { href: "#about", label: "ABOUT", icon: User },
    { href: "#experience", label: "EXPERIENCE", icon: Clock },
    { href: "#projects", label: "PROJECTS", icon: Code },
    { href: "#skills", label: "SKILLS", icon: Cpu },
    { href: "#certifications", label: "CERTIFICATIONS", icon: Award },
    { href: "#ctfs", label: "CTFs", icon: Flag },
    { href: "#contact", label: "CONTACT", icon: MessageSquare }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden overflow-hidden relative bg-dark/95 backdrop-blur-md"
        >
          {/* Digital noise overlay */}
          <div className="absolute inset-0 bg-cyber-grid digital-noise z-0"></div>
          
          {/* Security scan line */}
          <motion.div 
            className="absolute inset-0 border border-accent/30 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          ></motion.div>
          
          {/* Terminal header */}
          <div className="w-full bg-accent/10 px-4 py-2 border-b border-accent/30 flex items-center">
            <Lock className="w-4 h-4 text-accent mr-2" />
            <div className="font-cyber text-xs text-accent/80">SYSTEM::<span className="text-accent text-neon">TERMINAL</span></div>
            <div className="ml-auto flex space-x-1">
              <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
              <div className="w-2 h-2 bg-accent/80 rounded-full"></div>
            </div>
          </div>
          
          <motion.ul 
            className="flex flex-col items-center py-4 relative z-10"
            variants={staggerChildren}
          >
            <div className="w-full text-center mb-4 font-cyber text-xs text-accent/70">
              &gt; NAVIGATION::MENU
            </div>
            
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="w-full px-4 my-1"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div
                    className={`relative border border-accent/20 backdrop-blur-sm ${
                      hoveredItem === index ? 'bg-accent/10 border-accent/50 border-neon' : 'bg-secondary/10'
                    } rounded-md overflow-hidden transition-all`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-accent/60" 
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === index ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <a 
                      href={item.href} 
                      className="flex items-center py-3 px-4 font-cyber text-sm"
                      onClick={handleLinkClick}
                    >
                      <span className={`flex items-center justify-center w-8 h-8 rounded-md mr-3 ${
                        hoveredItem === index ? 'bg-accent text-dark' : 'bg-secondary/20 text-accent/70'
                      } transition-all`}>
                        <Icon size={16} />
                      </span>
                      <span className={`${hoveredItem === index ? 'text-accent text-neon' : 'text-neutral'}`}>
                        {item.label}
                      </span>
                      
                      {hoveredItem === index && (
                        <motion.div 
                          className="ml-auto text-xs text-accent/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          &gt;_
                        </motion.div>
                      )}
                    </a>
                  </motion.div>
                </motion.li>
              );
            })}
            
            <motion.div 
              className="mt-6 text-center text-xs font-cyber text-accent/60"
              variants={itemVariants}
            >
              <Shield className="inline-block mr-1 w-3 h-3" /> SECURITY STATUS: OPTIMAL
            </motion.div>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
