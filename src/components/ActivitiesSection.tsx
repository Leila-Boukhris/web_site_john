import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap, Dumbbell, Palette, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import surfingAction from "@/assets/surfing-action.jpg";
import pianoPlaying from "@/assets/piano-playing.jpg";
import codingTech from "@/assets/coding-tech.jpg";
import golfSwing from "@/assets/golf-swing.jpg";
// New activity images
import languagesImage from "@/assets/languages.jpg";
import schoolProgramImage from "@/assets/school-program.jpg";
import chessImage from "@/assets/chess.jpg";
import tennisImage from "@/assets/tennis.jpg";
import paddleTennisImage from "@/assets/paddle-tennis.jpg";
import horseRidingImage from "@/assets/horse-riding.jpg";
import motorsportImage from "@/assets/motorsport.jpg";
import artDrawingImage from "@/assets/art-drawing.jpg";
import emotionalIntelligenceImage from "@/assets/emotional-intelligence.jpg";
import petsAnimalsImage from "@/assets/pets-animals.jpg";

const ActivitiesSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "academic",
      title: "Academic Achievement",
      description: "Excellence in learning, technology, and intellectual pursuits",
      icon: GraduationCap,
      gradient: "bg-gradient-tech",
      activities: [
        {
          id: "programming",
          title: "Programming",
          description: "Building digital worlds through code and creativity.",
          image: codingTech,
          level: "Creative Beginner"
        },
        {
          id: "languages",
          title: "Languages",
          description: "Mastering communication across different cultures and languages.",
          image: languagesImage,
          level: "Multilingual"
        },
        {
          id: "school-program",
          title: "School Program",
          description: "Excellence in academic curriculum and educational achievements.",
          image: schoolProgramImage,
          level: "Honor Student"
        },
        {
          id: "chess",
          title: "Chess",
          description: "Strategic thinking and tactical mastery on the chessboard.",
          image: chessImage,
          level: "Strategic Player"
        }
      ]
    },
    {
      id: "physical",
      title: "Physical Activity",
      description: "Sports and physical challenges that build strength and character",
      icon: Dumbbell,
      gradient: "bg-gradient-ocean",
      activities: [
        {
          id: "golf",
          title: "Golf",
          description: "Precision, patience, and sportsmanship on the green.",
          image: golfSwing,
          level: "Beginner+"
        },
        {
          id: "tennis",
          title: "Tennis",
          description: "Power, agility, and competitive spirit on the court.",
          image: tennisImage,
          level: "Rising Player"
        },
        {
          id: "paddle-tennis",
          title: "Paddle Tennis",
          description: "Fast-paced racquet sport combining strategy and reflexes.",
          image: paddleTennisImage,
          level: "Developing Skills"
        },
        {
          id: "surfing",
          title: "Surfing / Swimming",
          description: "Riding waves with courage and mastering aquatic skills.",
          image: surfingAction,
          level: "Advanced Beginner"
        },
        {
          id: "horse-riding",
          title: "Horse Riding",
          description: "Building trust and connection with these magnificent animals.",
          image: horseRidingImage,
          level: "Confident Rider"
        },
        {
          id: "motorsport",
          title: "Motorsport",
          description: "Speed, precision, and technical understanding of racing.",
          image: motorsportImage,
          level: "Future Racer"
        }
      ]
    },
    {
      id: "expression",
      title: "Self Expression",
      description: "Creative arts that showcase personality and artistic talent",
      icon: Palette,
      gradient: "bg-gradient-creativity",
      activities: [
        {
          id: "piano",
          title: "Music Education (Piano)",
          description: "Creating beautiful melodies and developing musical mastery.",
          image: pianoPlaying,
          level: "Intermediate"
        },
        {
          id: "art-drawing",
          title: "Art Drawing",
          description: "Visual storytelling through sketches, paintings, and artistic expression.",
          image: artDrawingImage,
          level: "Creative Artist"
        },
        {
          id: "emotional-intelligence",
          title: "Emotional Intelligence",
          description: "Understanding emotions and building meaningful connections.",
          image: emotionalIntelligenceImage,
          level: "Empathetic Leader"
        },
        {
          id: "pets-animals",
          title: "Pets and Animals",
          description: "Caring for and connecting with our animal companions.",
          image: petsAnimalsImage,
          level: "Animal Lover"
        }
      ]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            JOHN's Talents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discovering excellence across academic, physical, and creative domains. 
            Each category represents a unique aspect of JOHN's growing talents.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group overflow-hidden shadow-card hover:shadow-playful transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <CardHeader className="text-center">
                <div className={`${category.gradient} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                <Button 
                  className={`w-full ${category.gradient} hover:opacity-90 text-white border-0 group/btn`}
                >
                  Explore Activities
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${selectedCategory === category.id ? 'rotate-180' : ''}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activities Display */}
        {selectedCategory && (
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {categories.find(c => c.id === selectedCategory)?.title} Activities
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.find(c => c.id === selectedCategory)?.activities.map((activity) => (
                <Card 
                  key={activity.id}
                  className="group overflow-hidden shadow-card hover:shadow-playful transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  onClick={() => navigate(`/activity/${activity.id}`)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-white text-foreground">
                        {activity.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {activity.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;