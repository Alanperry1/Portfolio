import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Menu, X, Lock, Shield, Terminal, AlertTriangle, Award, Flag, Target } from "lucide-react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [securityStatus, setSecurityStatus] = useState("SECURE");
  const [scanPercentage, setScanPercentage] = useState(0);
  const scanTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Simulate security scanning
    scanTimer.current = setInterval(() => {
      setScanPercentage(prev => {
        const newValue = Math.min(prev + Math.random() * 5, 100);
        if (newValue === 100) {
          clearInterval(scanTimer.current as NodeJS.Timeout);
          setSecurityStatus("SECURE");
        }
        return newValue;
      });
    }, 200);

    return () => {
      if (scanTimer.current) clearInterval(scanTimer.current);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset scan when opening menu
    if (!isMobileMenuOpen) {
      setSecurityStatus("SCANNING");
      setScanPercentage(0);
      if (scanTimer.current) clearInterval(scanTimer.current);
      scanTimer.current = setInterval(() => {
        setScanPercentage(prev => {
          const newValue = Math.min(prev + Math.random() * 5, 100);
          if (newValue === 100) {
            clearInterval(scanTimer.current as NodeJS.Timeout);
            setSecurityStatus("SECURE");
          }
          return newValue;
        });
      }, 100);
    }
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-accent/20 ${
        isScrolled ? "py-2 shadow-lg shadow-accent/10" : "py-3"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cyber background overlay */}
      <div className="absolute inset-0 bg-dark/90 backdrop-blur-md bg-cyber-grid z-0"></div>
      
      {/* Security scan line */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-accent/60 transition-all duration-300" 
        style={{ width: `${scanPercentage}%` }}
      ></div>
      
      <div className="container mx-auto flex justify-between items-center px-4 relative z-10">
        <div className="flex items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-cyber font-bold text-accent text-neon flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="mr-1" /> <span className="text-glitch">PA</span>
          </motion.a>
          
          {/* Security status indicator */}
          <div className="hidden md:flex items-center ml-6 border-l border-accent/30 pl-4">
            <div className={`h-2 w-2 rounded-full ${securityStatus === "SECURE" ? "bg-accent animate-pulse" : "bg-red-500"} mr-2`}></div>
            <span className="text-xs font-cyber text-accent/80">
              STATUS: <span className="text-accent">{securityStatus}</span>
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block relative">
          {/* Top border with glow */}
          <div className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          
          <ul className="flex space-x-1 font-cyber">
            {[
              { href: "#home", label: "HOME" },
              { href: "#about", label: "ABOUT" },
              { href: "#experience", label: "EXPERIENCE" },
              { href: "#projects", label: "PROJECTS" },
              { href: "#skills", label: "SKILLS" },
              { href: "#certifications", label: "CERTS" },
              { href: "#ctfs", label: "CTFs" },
              { href: "#contact", label: "CONTACT" }
            ].map((item, index) => (
              <motion.li key={index} whileHover={{ y: -2 }}>
                <a 
                  href={item.href} 
                  className="px-4 py-2 inline-flex items-center text-sm hover:text-accent hover:bg-accent/10 transition-all border border-transparent hover:border-accent/30 rounded-sm"
                >
                  {index === 0 && <Shield className="w-3 h-3 mr-1" />}
                  {index === 1 && <Terminal className="w-3 h-3 mr-1" />}
                  {index === 5 && <Award className="w-3 h-3 mr-1" />}
                  {index === 6 && <Flag className="w-3 h-3 mr-1" />}
                  {index === 7 && <Lock className="w-3 h-3 mr-1" />}
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Bottom border with glow */}
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-accent border border-accent/30 rounded-md p-2 hover:bg-accent/10 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping"></div>
          </div>
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.header>
  );
};

export default Header;
