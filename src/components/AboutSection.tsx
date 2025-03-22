
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Award, Briefcase, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  // Timeline data
  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Final Year Student - Computer Science",
      description: "Pursuing B.Tech in Computer Science with a focus on AI/ML and software development.",
      icon: <GraduationCap size={20} />,
    },
    {
      year: "2023",
      title: "Next24Tech AI/ML Internship",
      description: "Applied machine learning algorithms to solve real-world problems and developed predictive models.",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2022",
      title: "Prodigy Infotech ML Internship",
      description: "Built and deployed machine learning solutions, focusing on data analysis and model optimization.",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2022",
      title: "CDAC Drones Technology Certification",
      description: "Specialized training in drone technology, including programming, control systems, and applications.",
      icon: <Award size={20} />,
    },
    {
      year: "2021",
      title: "Open Source Contributor",
      description: "Contributed to various open-source projects, improving code quality and adding new features.",
      icon: <Code size={20} />,
    },
  ];
  
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            A passionate technologist with expertise in AI/ML and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm Yashraj Sah, a final-year Computer Science student and emerging professional in AI/ML and software development. 
                    My passion lies at the intersection of artificial intelligence, web development, and solving complex technological challenges.
                  </p>
                  <p>
                    With a strong foundation in programming and data science, I bring innovative approaches to projects, 
                    leveraging cutting-edge technologies to create efficient and intelligent solutions.
                  </p>
                  <p>
                    I'm particularly interested in machine learning, deep learning, and their applications in real-world scenarios. 
                    My experience spans from developing predictive models to building responsive and user-friendly web applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> 
                    <span>Design and develop machine learning models for predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> 
                    <span>Build responsive and interactive web applications using modern frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> 
                    <span>Data analysis and visualization to derive meaningful insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> 
                    <span>Implement cloud-based solutions for scalable applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> 
                    <span>Automate processes using Python and other programming languages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Timeline */}
          <div>
            <Card className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <ScrollArea className="h-[450px] pr-4">
                  <div className="relative pl-8 border-l border-border">
                    {timelineItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="mb-10 transform transition-all duration-300 hover:translate-x-1"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground shadow-md">
                          {item.icon}
                        </div>
                        
                        <div className="ml-4">
                          <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                          <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
