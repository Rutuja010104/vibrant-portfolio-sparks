
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  // Testimonials data
  const testimonials = [
    {
      text: "Yashraj's machine learning expertise helped us build a highly accurate prediction model. His attention to detail and analytical thinking were invaluable to our project.",
      name: "Amit Patel",
      role: "CTO, TechInnovate Solutions",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "Working with Yashraj on our web application was a great experience. His technical skills combined with his ability to understand business requirements led to an exceptional product.",
      name: "Priya Singh",
      role: "Product Manager, DigitalFirst",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      text: "Yashraj demonstrated excellent problem-solving skills during his internship. His contributions to our AI research projects were significant and showed great promise.",
      name: "Dr. Raj Kumar",
      role: "Research Lead, NextGen AI",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      text: "I was impressed by Yashraj's ability to quickly learn and apply new technologies. His drone programming project was innovative and well-executed.",
      name: "Sneha Gupta",
      role: "Instructor, CDAC",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);
  
  // Navigation handlers
  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle mx-auto">
            What others say about my work and collaboration
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/70 backdrop-blur-sm border border-border/50 shadow-md overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6 text-primary">
                          <Quote size={36} />
                        </div>
                        
                        <p className="text-lg mb-8 italic">"{testimonial.text}"</p>
                        
                        <Avatar className="w-20 h-20 border-4 border-background mb-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoplay(false);
                    setActiveIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
