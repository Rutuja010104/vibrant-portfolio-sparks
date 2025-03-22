
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Server, Globe, UserCheck, GitBranch } from 'lucide-react';

const SkillsSection: React.FC = () => {
  // Technical skills
  const technicalSkills = [
    { category: "AI/ML", skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-Learn", level: 87 },
      { name: "Computer Vision", level: 78 },
      { name: "NLP", level: 75 },
    ]},
    { category: "Web Development", skills: [
      { name: "HTML/CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 86 },
      { name: "Node.js", level: 75 },
      { name: "Next.js", level: 72 },
      { name: "Tailwind CSS", level: 90 },
    ]},
    { category: "Backend & DevOps", skills: [
      { name: "Java", level: 82 },
      { name: "SQL", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 68 },
    ]}
  ];
  
  // Soft skills
  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="w-5 h-5 text-primary" /> },
    { name: "Teamwork", icon: <UserCheck className="w-5 h-5 text-primary" /> },
    { name: "Communication", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "Adaptability", icon: <GitBranch className="w-5 h-5 text-primary" /> },
    { name: "Time Management", icon: <Code className="w-5 h-5 text-primary" /> },
    { name: "Critical Thinking", icon: <Server className="w-5 h-5 text-primary" /> },
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolbox of technical and interpersonal skills
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {technicalSkills.map((category, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-sm border border-border/50 shadow-md card-hover h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {softSkills.map((skill, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-sm border border-border/50 shadow-md card-hover h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="font-medium">{skill.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
