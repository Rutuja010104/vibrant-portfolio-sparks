
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="space-y-1">
              <h2 className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Yashraj Sah
              </h1>
              <h3 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
                AI/ML Engineer • Full-Stack Developer • Problem Solver
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Building intelligent systems and beautiful interfaces. 
              Passionate about AI, web development, and creating innovative solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a 
                href="https://drive.google.com/file/d/1NF9kBtEZ0Z4Lh0VIULM5SItuEF8K_eXP/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="btn-primary group relative overflow-hidden transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #8B5CF6, #D946EF)",
                    boxShadow: "0 4px 14px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <Download size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                    Download Resume
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md"></span>
                </Button>
              </a>
              
              <a href="#contact">
                <Button 
                  variant="outline" 
                  className="btn-outline group relative overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: "#F97316",
                    color: "#F97316",
                    boxShadow: "0 4px 14px rgba(249, 115, 22, 0.2)",
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Let's Connect
                    <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></span>
                </Button>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com/Thenameisyashraj1707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yashrajsah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yashrajsah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary p-1 animate-float shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFSL_ip6iqhjQ/profile-displayphoto-shrink_800_800/B4DZW_qPmmHIAg-/0/1742677277837?e=1747872000&v=beta&t=qHhufnTEni5yK4FXD6BlT_ZamdtmCl4c9jsJt-EA5qE" 
                    alt="Yashraj Sah"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements with improved shadows and animations */}
              <div className="absolute -top-4 -right-4 p-3 rounded-full bg-white dark:bg-secondary shadow-lg animate-float" 
                   style={{ 
                     animationDelay: '1s',
                     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                   }}>
                <span className="text-xl">🧠</span>
              </div>
              <div className="absolute -bottom-2 -left-2 p-3 rounded-full bg-white dark:bg-secondary shadow-lg animate-float" 
                   style={{ 
                     animationDelay: '1.5s',
                     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                   }}>
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-6 p-3 rounded-full bg-white dark:bg-secondary shadow-lg animate-float" 
                   style={{ 
                     animationDelay: '2s',
                     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                   }}>
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
