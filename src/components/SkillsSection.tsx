
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Code, 
  Server, 
  Globe, 
  UserCheck, 
  GitBranch, 
  Cpu, 
  FileCode, 
  Heart, 
  Database, 
  Cloud, 
  Bot, 
  LineChart, 
  Microscope, 
  BookOpen,
  Layers,
  Award,
  Clock,
  Lightbulb
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  // Technical skills with icons and gradient colors
  const technicalSkills = [
    { 
      category: "AI/ML", 
      icon: <Brain className="w-6 h-6 text-white mb-2" />,
      gradient: "from-purple-500 to-indigo-600", 
      skills: [
        { name: "Python", level: 90, icon: <FileCode className="w-4 h-4 text-primary" /> },
        { name: "TensorFlow", level: 85, icon: <Brain className="w-4 h-4 text-primary" /> },
        { name: "PyTorch", level: 80, icon: <Bot className="w-4 h-4 text-primary" /> },
        { name: "Scikit-Learn", level: 87, icon: <LineChart className="w-4 h-4 text-primary" /> },
        { name: "Computer Vision", level: 78, icon: <Microscope className="w-4 h-4 text-primary" /> },
        { name: "NLP", level: 75, icon: <BookOpen className="w-4 h-4 text-primary" /> },
      ]
    },
    { 
      category: "Web Development", 
      icon: <Code className="w-6 h-6 text-white mb-2" />,
      gradient: "from-cyan-500 to-blue-600", 
      skills: [
        { name: "HTML/CSS", level: 92, icon: <Layers className="w-4 h-4 text-primary" /> },
        { name: "JavaScript", level: 88, icon: <Code className="w-4 h-4 text-primary" /> },
        { name: "React", level: 86, icon: <Code className="w-4 h-4 text-primary" /> },
        { name: "Node.js", level: 75, icon: <Server className="w-4 h-4 text-primary" /> },
        { name: "Next.js", level: 72, icon: <Code className="w-4 h-4 text-primary" /> },
        { name: "Tailwind CSS", level: 90, icon: <Layers className="w-4 h-4 text-primary" /> },
      ]
    },
    { 
      category: "Backend & DevOps", 
      icon: <Server className="w-6 h-6 text-white mb-2" />,
      gradient: "from-orange-500 to-red-600", 
      skills: [
        { name: "Java", level: 82, icon: <FileCode className="w-4 h-4 text-primary" /> },
        { name: "SQL", level: 78, icon: <Database className="w-4 h-4 text-primary" /> },
        { name: "MongoDB", level: 75, icon: <Database className="w-4 h-4 text-primary" /> },
        { name: "Docker", level: 70, icon: <Cloud className="w-4 h-4 text-primary" /> },
        { name: "AWS", level: 65, icon: <Cloud className="w-4 h-4 text-primary" /> },
        { name: "CI/CD", level: 68, icon: <GitBranch className="w-4 h-4 text-primary" /> },
      ]
    }
  ];
  
  // Soft skills with gradient colors
  const softSkills = [
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5 text-white" />, gradient: "from-purple-500 to-violet-600" },
    { name: "Teamwork", icon: <UserCheck className="w-5 h-5 text-white" />, gradient: "from-blue-500 to-cyan-600" },
    { name: "Communication", icon: <Globe className="w-5 h-5 text-white" />, gradient: "from-green-500 to-emerald-600" },
    { name: "Adaptability", icon: <GitBranch className="w-5 h-5 text-white" />, gradient: "from-yellow-500 to-amber-600" },
    { name: "Time Management", icon: <Clock className="w-5 h-5 text-white" />, gradient: "from-orange-500 to-red-600" },
    { name: "Critical Thinking", icon: <Brain className="w-5 h-5 text-white" />, gradient: "from-pink-500 to-rose-600" },
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
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="text-sm font-medium ml-2">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2" 
                        indicatorClassName={`bg-gradient-to-r ${category.gradient}`}
                      />
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
            <Card 
              key={index} 
              className="bg-card/70 backdrop-blur-sm border border-border/50 shadow-md card-hover h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>
                  {skill.icon}
                </div>
                <h4 className="font-medium mt-2">{skill.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
