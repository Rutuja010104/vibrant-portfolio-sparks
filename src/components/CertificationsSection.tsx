
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  // Certifications data
  const certifications = [
    {
      title: "CDAC Drones Technology",
      organization: "Centre for Development of Advanced Computing",
      date: "August 2022",
      description: "Comprehensive training in drone technology, covering hardware, software, regulations, and practical applications.",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1480&auto=format&fit=crop",
      skills: ["Drone Programming", "Control Systems", "Image Processing", "Flight Planning"],
      verificationLink: "https://cdac.in/certification/verify/123456"
    },
    {
      title: "Machine Learning Internship",
      organization: "Prodigy Infotech",
      date: "May 2022 - August 2022",
      description: "Hands-on experience developing and deploying machine learning models for business applications.",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1470&auto=format&fit=crop",
      skills: ["Supervised Learning", "Data Preprocessing", "Model Evaluation", "Deployment"],
      verificationLink: "https://prodigyinfotech.com/verify/ML78901"
    },
    {
      title: "AI/ML Internship",
      organization: "Next24Tech",
      date: "January 2023 - April 2023",
      description: "Applied AI and ML techniques to solve real-world problems, focusing on recommendation systems and predictive analytics.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1365&auto=format&fit=crop",
      skills: ["Deep Learning", "Neural Networks", "Feature Engineering", "Python"],
      verificationLink: "https://next24tech.com/verify/AI45678"
    },
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "October 2022",
      description: "Foundational knowledge of AWS cloud services, security, architecture, and pricing models.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop",
      skills: ["Cloud Computing", "AWS Services", "Security", "Cost Management"],
      verificationLink: "https://aws.amazon.com/verification/123890"
    },
    {
      title: "Full-Stack Web Development",
      organization: "Udemy",
      date: "December 2021",
      description: "Comprehensive training in modern web development technologies and best practices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
      skills: ["React", "Node.js", "MongoDB", "RESTful APIs"],
      verificationLink: "https://udemy.com/certificate/UC-12345678"
    }
  ];
  
  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle mx-auto">
            Professional credentials that validate my expertise and knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 shadow-md card-hover h-full flex flex-col"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden h-40">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <a 
                    href={cert.verificationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium flex items-center"
                  >
                    Verify <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              <CardHeader className="p-6 pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{cert.organization}</p>
              </CardHeader>
              
              <CardContent className="px-6 py-2 flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
