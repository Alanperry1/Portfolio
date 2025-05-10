import { Code, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-heading font-bold text-accent">
              <span className="text-glitch flex items-center"><Code className="mr-1" /> PA</span>
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-neutral/70">&copy; {new Date().getFullYear()} Baning Philip Amponsah. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/pabaning" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral/70 hover:text-accent transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Alanperry1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral/70 hover:text-accent transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:baningphilip1@gmail.com" 
              className="text-neutral/70 hover:text-accent transition-colors"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
