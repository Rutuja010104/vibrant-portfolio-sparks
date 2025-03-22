
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Award, Briefcase, Code } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  isLast?: boolean;
}

const AboutSection: React.FC = () => {
  // Timeline data
  const timelineItems = [
    {
      year: '2022-26 - Present',
      title: 'Computer Science Engineering(Artificial Intelligence and Machine learning :-From : VIIT)',
      organization: 'Vishwakarma Institute of Information Technology',
      description: 'Pursuing a Bachelor\'s degree in Computer Science with a focus on AI, ML, and Web Development.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: '2024-25',
      title: 'Intern At Infosys :- Ai domain',
      organization: 'Infosys',
      description: 'Worked onAnalysing Income Statement Balance Sheet Table with OpenAI conducted from October 25, 2024 to December 31, 2024',
      icon: <Briefcase size={20} />,
    },
    {
      year: '2024',
      title: 'Intern At VOIS:-Data Analyticsusing AI-LLMs',
      organization: 'VOIS',
      description: 'Developed Doctors Visit, This project analyzes healthcare data to understand factors affecting doctor visits, illness distribution, and reduced activity due to health issues',
      
      icon: <Briefcase size={20} />,
    },
    {
      year: '2024',
      title: 'CDAC Drones Technology Certification',
      organization: 'CDAC',
      description: 'Specialized certification in drone technology and applications.',
      icon: <Award size={20} />,
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
                  I'm a Computer Science Engineer with a passion for Artificial Intelligence 🤖 and Machine Learning 📊, currently pursuing my B.Tech at Vishwakarma Institute of Information Technology (VIIT), Pune.
               I thrive on building innovative AI solutions, exploring the latest tech trends, and working on real-world projects that drive impact 🌍.
              Whether it's machine learning models, intelligent automation, or AI-driven applications, I love creating cutting-edge solutions that push the boundaries of technology! 💡✨                  </p>
                  <p>
                  <p>
            My journey in tech started back in 12th grade at SNBP International Jr. College, Morwadi, where I developed a strong interest in computer science and artificial intelligence.
             Before that, I completed my 10th grade at Priyadarshani English Medium High School. Since then, 
             I've been passionate about building AI-driven solutions and working on cutting-edge technologies.
             </p>
             With expertise in Python, Java, AI/ML frameworks (TensorFlow, PyTorch), and Web Development, I am constantly exploring new technologies and improving my skills. 
            My goal is to leverage AI to build intelligent systems that solve real-world problems and make an impact.
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
