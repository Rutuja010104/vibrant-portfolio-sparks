
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
      title: "Stock Price Prediction System",
      description: "An ML-based system that predicts stock prices using historical data and market indicators with high accuracy.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "Time Series", "Data Analysis"],
      githubLink: "https://github.com/yashrajsah/stock-predictor",
      demoLink: "https://stock-predictor-demo.com",
    },
    {
      title: "Smart Drone Navigation",
      description: "A computer vision system for autonomous drone navigation that identifies obstacles and maps optimal flight paths.",
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=1470&auto=format&fit=crop",
      tags: ["Computer Vision", "Python", "OpenCV", "Embedded Systems"],
      githubLink: "https://github.com/yashrajsah/drone-nav",
      demoLink: "https://drone-nav-demo.com",
    },
    {
      title: "AI-powered Recommendation Engine",
      description: "A content recommendation system using collaborative filtering and deep learning to suggest personalized content.",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1074&auto=format&fit=crop",
      tags: ["Machine Learning", "NLP", "Python", "Flask"],
      githubLink: "https://github.com/yashrajsah/ai-recommender",
      demoLink: "https://ai-recommender.com",
    },
    {
      title: "Personal Finance Dashboard",
      description: "A full-stack application to track expenses, visualize spending patterns, and set budget goals with alerts.",
      image: "https://images.unsplash.com/photo-1579170053380-58828d634a0c?q=80&w=1470&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "D3.js"],
      githubLink: "https://github.com/yashrajsah/finance-tracker",
      demoLink: "https://finance-tracker-demo.com",
    },
    {
      title: "Sentiment Analysis Tool",
      description: "A web application that analyzes sentiment in text from various sources including social media and customer reviews.",
      image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=1469&auto=format&fit=crop",
      tags: ["NLP", "Python", "React", "AWS"],
      githubLink: "https://github.com/yashrajsah/sentiment-analyzer",
      demoLink: "https://sentiment-analyzer-demo.com",
    },
    {
      title: "E-Learning Platform",
      description: "An interactive platform for online learning with video courses, quizzes, and progress tracking.",
      image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=1470&auto=format&fit=crop",
      tags: ["React", "Firebase", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yashrajsah/elearn-platform",
      demoLink: "https://elearn-platform-demo.com",
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
