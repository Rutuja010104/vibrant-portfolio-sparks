
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  
  // Project data
  const projects = [
    {
      title: 'E-Commerce Platform Shopify',
      description: 'A full-stack e-commerce application with features like product catalog, user authentication, cart management, and payment integration.',
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "Time Series", "Data Analysis"],
      githubLink: 'https://github.com/Thenameisyashraj1707/shopify.git',
      demoLink: 'https://yashrajweb-shopify.netlify.app/'
    },
    {
      title: 'Friendly Ai Chatbot',
      description: 'A weather application providing real-time forecasts, historical data, and visualizations for locations worldwide.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['JavaScript', 'React', 'OpenWeather API', 'Chart.js'],
      githubLink: 'https://github.com/Yashraj170704/friendify-ai',
      demoLink: 'https://friendlyaichatbot.netlify.app/'
   
    },
    
    {
      title: 'Ai Voice Assistant',
      description: 'A productivity application for managing tasks, projects, and deadlines with features like reminders and progress tracking.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubLink: 'https://github.com/Thenameisyashraj1707/Ai-assistant-chatbot',
      
    }
  ];
  
  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const displayedProjects = projects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my technical capabilities and creative solutions
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 shadow-md card-hover h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 py-2 flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 py-4 border-t border-border/50 flex justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <Github size={16} className="mr-1" /> Code
                </a>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrevPage}
                aria-label="Previous Page"
              >
                <ArrowLeft size={16} />
              </Button>
              
              <span className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </span>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNextPage}
                aria-label="Next Page"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
