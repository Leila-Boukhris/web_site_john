import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
  const navigate = useNavigate();
  const news = [
    {
      id: "golf-achievement",
      date: "2024-12-15",
      title: "New Golf Achievement Unlocked!",
      summary: "JOHN just mastered the perfect chip shot and scored his personal best on the junior course.",
      category: "Sports",
      gradient: "bg-gradient-nature",
      isRecent: true
    },
    {
      id: "piano-recital",
      date: "2024-12-10", 
      title: "Piano Recital Success",
      summary: "Performed three classical pieces at the winter recital, receiving standing ovation from the audience.",
      category: "Music",
      gradient: "bg-gradient-creativity",
      isRecent: true
    },
    {
      id: "mobile-app",
      date: "2024-12-05",
      title: "First Mobile App Published",
      summary: "Successfully launched a simple calculator app, marking the first step into mobile development.",
      category: "Technology",
      gradient: "bg-gradient-tech",
      isRecent: true
    },
    {
      id: "surfing-conditions",
      date: "2024-11-28",
      title: "Surfing in Perfect Conditions",
      summary: "Caught some amazing waves during the family beach trip, improving balance and technique.",
      category: "Surfing",
      gradient: "bg-gradient-ocean",
      isRecent: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sports": return "bg-nature/10 text-nature";
      case "Music": return "bg-creativity/10 text-creativity";
      case "Technology": return "bg-tech/10 text-tech";
      case "Surfing": return "bg-ocean/10 text-ocean";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Latest Updates
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with JOHN's latest achievements, milestones, and exciting adventures
            across all his favorite activities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {news.map((item, index) => (
              <Card 
                key={index}
                className={`shadow-card hover:shadow-playful transition-all duration-300 group hover:scale-[1.02] ${
                  item.isRecent ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{formatDate(item.date)}</span>
                      {item.isRecent && (
                        <Badge className="bg-primary text-primary-foreground animate-pulse">
                          New!
                        </Badge>
                      )}
                    </div>
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-1 ${item.gradient} rounded-full`}></div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                      onClick={() => navigate(`/news/${item.id}`)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subscribe to updates */}
          <Card className="mt-12 bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Stay in the Loop!
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Want to be the first to hear about JOHN's latest achievements and adventures?
                Connect with us to receive updates on his exciting journey.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Get Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;