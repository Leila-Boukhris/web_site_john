import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Heart, Lightbulb } from "lucide-react";

const StorySection = () => {
  const currentAge = new Date().getFullYear() - 2018;
  const milestones = [
    {
      age: "Age 5",
      title: "First Wave",
      description: "Started surfing with fearless determination",
      icon: "🏄‍♂️",
      gradient: "bg-gradient-ocean"
    },
    {
      age: "Age 3",
      title: "Musical Discovery",
      description: "Fell in love with piano melodies",
      icon: "🎹",
      gradient: "bg-gradient-creativity"
    },
    {
      age: "Age 7",
      title: "Code Explorer",
      description: "Wrote his first 'Hello World' program",
      icon: "💻",
      gradient: "bg-gradient-tech"
    },
    {
      age: "Age 3",
      title: "Golf Champion",
      description: "Discovered precision and patience on the green",
      icon: "⛳",
      gradient: "bg-gradient-nature"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Journey So Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every champion starts with a dream. Here's how JOHN's extraordinary journey began,
            one passion at a time.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-hero rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-card z-10 flex items-center justify-center">
                  <span className="text-lg">{milestone.icon}</span>
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className={`${milestone.gradient} text-white shadow-playful hover:shadow-glow transition-all duration-300 group hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="h-5 w-5 text-white/80" />
                        <span className="font-semibold text-white/90">{milestone.age}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">
                        {milestone.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { number: "+15", label: "Talents", icon: Heart },
            { number: currentAge.toString(), label: "Years Old", icon: Award },
            { number: "100+", label: "Hours Practice", icon: Lightbulb },
            { number: "∞", label: "Dreams", icon: Lightbulb }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-card hover:shadow-playful transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;