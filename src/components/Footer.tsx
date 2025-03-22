
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="py-10 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Yashraj</span> Sah
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Yashraj Sah. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/yashrajsah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yashrajsah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yashrajsah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:yashrajsah082@gmail.com" 
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        {/* Navigation */}
        <div className="mt-8 border-t border-border/50 pt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#certifications" className="text-sm text-muted-foreground hover:text-primary transition-colors">Certifications</a></li>
            <li><a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
