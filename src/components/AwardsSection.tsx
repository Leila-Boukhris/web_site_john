import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Award, Calendar } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      year: "2024",
      title: "Young Innovator Recognition",
      category: "Technology",
      description: "Outstanding creativity in programming and digital innovation",
      icon: Star,
      gradient: "bg-gradient-tech",
      level: "Gold"
    },
    {
      year: "2024", 
      title: "Rising Musical Talent",
      category: "Arts",
      description: "Excellence in piano performance and musical expression",
      icon: Medal,
      gradient: "bg-gradient-creativity",
      level: "Silver"
    },
    {
      year: "2023",
      title: "Ocean Safety Champion",
      category: "Sports",
      description: "Demonstrating exceptional water safety knowledge and skills",
      icon: Award,
      gradient: "bg-gradient-ocean",
      level: "Certified"
    },
    {
      year: "2024",
      title: "Junior Golf Achievement",
      category: "Sports", 
      description: "Outstanding progress in golf fundamentals and sportsmanship",
      icon: Trophy,
      gradient: "bg-gradient-nature",
      level: "Bronze"
    },
    {
      year: "2023",
      title: "Creative Problem Solver",
      category: "General",
      description: "Innovative thinking and persistence in overcoming challenges",
      icon: Star,
      gradient: "bg-gradient-achievement",
      level: "Special"
    }
  ];

  const getIconColor = (gradient: string) => {
    switch (gradient) {
      case "bg-gradient-tech": return "text-tech";
      case "bg-gradient-creativity": return "text-creativity";
      case "bg-gradient-ocean": return "text-ocean";
      case "bg-gradient-nature": return "text-nature";
      default: return "text-achievement";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Gold": return "bg-yellow-100 text-yellow-800";
      case "Silver": return "bg-gray-100 text-gray-800";
      case "Bronze": return "bg-orange-100 text-orange-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating milestones, achievements, and the recognition of hard work, 
            dedication, and natural talent across multiple disciplines.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-achievement rounded-full"></div>
            
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-card z-10 flex items-center justify-center">
                  <award.icon className="h-4 w-4 text-white" />
                </div>
                
                {/* Award card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="shadow-card hover:shadow-playful transition-all duration-300 group hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getLevelColor(award.level)}>
                          {award.level}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {award.year}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {award.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${award.gradient} p-2 rounded-lg`}>
                          <award.icon className="h-5 w-5 text-white" />
                        </div>
                        <Badge variant="outline" className={getIconColor(award.gradient)}>
                          {award.category}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement summary */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-gradient-achievement text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <Trophy className="h-16 w-16 mx-auto mb-4 animate-bounce-gentle" />
              <h3 className="text-2xl font-bold mb-4">
                Recognition Across All Disciplines
              </h3>
              <p className="text-white/90 leading-relaxed">
                These awards represent not just talent, but dedication, perseverance, 
                and the joy of learning. Each recognition motivates continued growth 
                and inspires others to pursue their passions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;