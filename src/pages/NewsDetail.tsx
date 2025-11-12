import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, Heart } from "lucide-react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

const NewsDetail = () => {
  const { newsId } = useParams();
  const currentAge = new Date().getFullYear() - 2018;
  useScrollRestoration();

  const newsArticles = {
    "golf-achievement": {
      date: "2024-12-15",
      title: "New Golf Achievement Unlocked!",
      summary: "JOHN just mastered the perfect chip shot and scored his personal best on the junior course.",
      category: "Sports",
      gradient: "bg-gradient-nature",
      bgColor: "bg-nature/10",
      textColor: "text-nature",
      readTime: "3 min read",
      content: [
        "This weekend marked another incredible milestone in JOHN's golf journey! After weeks of dedicated practice, he finally mastered the chip shot that had been challenging him.",
        "The breakthrough came during his regular Saturday morning lesson at Sunshine Golf Club. His instructor, Coach Martinez, had been working with JOHN on the delicate wrist action required for a perfect chip shot. 'The moment it clicked for him was magical,' Coach Martinez recalls. 'His face just lit up when he saw the ball land exactly where he intended.'",
        "But the achievements didn't stop there. Later that same day, JOHN played his best round ever on the junior course, shooting a personal best score that had him jumping with excitement. The improvement in his short game was immediately evident, with several shots landing within putting distance of the pin.",
        `What makes this achievement even more special is the patience and persistence JOHN has shown. Golf requires a unique combination of physical skill and mental discipline, and at just ${currentAge} years old, JOHN is developing both beautifully.`,
        "His dedication to practice, even when shots weren't going as planned, shows the character that will serve him well both on and off the golf course. Coach Martinez notes that JOHN's positive attitude and willingness to learn make him a joy to teach.",
        "Looking ahead, JOHN is now preparing for his first junior tournament next spring. With achievements like this under his belt, we can't wait to see what he accomplishes next on the green!"
      ],
      relatedTopics: [
        "Golf fundamentals for young players",
        "The importance of patience in sports",
        "Building confidence through practice",
        "Junior golf tournament preparation"
      ],
      nextSteps: [
        "Continue practicing chip shots daily",
        "Work on putting consistency", 
        "Learn course management strategies",
        "Prepare mentally for tournament play"
      ]
    },
    "piano-recital": {
      date: "2024-12-10",
      title: "Piano Recital Success",
      summary: "Performed three classical pieces at the winter recital, receiving standing ovation from the audience.",
      category: "Music",
      gradient: "bg-gradient-creativity",
      bgColor: "bg-creativity/10", 
      textColor: "text-creativity",
      readTime: "4 min read",
      content: [
        "The winter recital at Harmony Music Academy was a night to remember! JOHN took the stage with confidence and delivered three beautiful classical pieces that had the audience completely captivated.",
        "The evening began with Mozart's 'Für Elise' - a piece JOHN has been perfecting for months. His interpretation was both technically sound and emotionally expressive, showing a musical maturity beyond his years. The delicate phrasing and dynamic control demonstrated the hours of careful practice he's put in.",
        "Next came Bach's 'Minuet in G Major,' a piece that requires precise finger work and careful attention to baroque style. JOHN's performance was crisp and clean, with each note ringing clearly through the concert hall. His teacher, Ms. Rodriguez, beamed with pride from the audience.",
        "The final piece was perhaps the most special - an original composition JOHN wrote called 'Rainy Day Dreams.' This gentle, contemplative piece showcased not just his technical skills but his creativity and personal musical voice. The melody, inspired by watching raindrops on his bedroom window, told a story that resonated with everyone present.",
        "But what truly made the evening magical was JOHN's stage presence. Despite being the youngest performer, he showed no signs of nervousness. Instead, he seemed to genuinely enjoy sharing his music with others, smiling between pieces and taking his bow with genuine appreciation for the audience's applause.",
        "The standing ovation at the end was well-deserved and heartwarming. Several audience members commented on how moved they were by such a young performer's dedication and talent. It's clear that JOHN's musical journey is just beginning, and we can't wait to see where it leads!"
      ],
      relatedTopics: [
        "Building performance confidence",
        "The benefits of classical music education",
        "Encouraging young composers",
        "Stage presence for young performers"
      ],
      nextSteps: [
        "Begin learning more advanced repertoire",
        "Continue developing original compositions",
        "Explore different musical styles",
        "Prepare for spring music festival"
      ]
    },
    "mobile-app": {
      date: "2024-12-05", 
      title: "First Mobile App Published",
      summary: "Successfully launched a simple calculator app, marking the first step into mobile development.",
      category: "Technology",
      gradient: "bg-gradient-tech",
      bgColor: "bg-tech/10",
      textColor: "text-tech", 
      readTime: "5 min read",
      content: [
        "In an exciting milestone for his programming journey, JOHN has officially published his first mobile application! The simple calculator app represents months of learning, coding, and problem-solving.",
        "The project began when JOHN expressed interest in creating something that people could actually use on their phones. 'I wanted to make something real that could help people,' he explained with enthusiasm. His mentor at the local coding club helped guide him through the process.",
        "The app includes all the basic calculator functions - addition, subtraction, multiplication, and division. While this might seem simple, the process of building it taught JOHN fundamental programming concepts including user interface design, event handling, and testing.",
        "What impressed his mentors most was JOHN's attention to detail. He insisted on making the app's buttons colorful and fun, choosing bright colors that would appeal to other kids who might use it. He also added sound effects for button presses, making the calculator more engaging to use.",
        "The development process wasn't without challenges. JOHN encountered several bugs along the way, including issues with decimal calculations and button layouts. But rather than getting frustrated, he approached each problem as a puzzle to solve, often coming up with creative solutions.",
        "Publishing the app was a learning experience in itself. JOHN had to understand app store guidelines, write a description, and even design an icon. The whole process gave him insight into what it takes to bring a digital product from idea to reality.",
        "Since publication, the app has received positive feedback from family and friends who've downloaded it. JOHN is already brainstorming ideas for his next app - perhaps a simple game or a tool to help with his music practice. The future of technology is bright with young innovators like JOHN leading the way!"
      ],
      relatedTopics: [
        "Introduction to mobile app development",
        "Teaching programming to children",
        "Problem-solving through coding",
        "The app development lifecycle"
      ],
      nextSteps: [
        "Learn more advanced programming concepts",
        "Explore game development",
        "Study user experience design",
        "Begin work on second app project"
      ]
    },
    "surfing-conditions": {
      date: "2024-11-28",
      title: "Surfing in Perfect Conditions", 
      summary: "Caught some amazing waves during the family beach trip, improving balance and technique.",
      category: "Surfing",
      gradient: "bg-gradient-ocean",
      bgColor: "bg-ocean/10",
      textColor: "text-ocean",
      readTime: "3 min read",
      content: [
        "The family Thanksgiving beach trip turned into an incredible surfing session for JOHN! Perfect weather conditions and consistent waves created the ideal environment for him to practice and improve his technique.",
        "The day started early with calm winds and chest-high waves - exactly what JOHN needed to work on his fundamentals. His surf instructor, who joined the family for the holiday session, was amazed at how much JOHN's balance had improved since their last lesson.",
        "One of the highlights was watching JOHN successfully ride a wave from start to finish, maintaining his stance and control throughout the entire ride. The joy on his face as he kicked out at the end was absolutely infectious - pure happiness that only comes from conquering a personal challenge.",
        "During the session, JOHN focused particularly on his pop-up technique and weight distribution. The consistent waves allowed him to practice the same movements repeatedly, building muscle memory that will serve him well in future sessions.",
        `What's particularly impressive about JOHN's surfing development is his ocean awareness. At just ${currentAge} years old, he's learning to read the water, understand wave patterns, and respect the power of the ocean. These skills go far beyond just riding waves - they're life lessons in awareness and respect for nature.`,
        "The family beach trip also provided opportunities for JOHN to observe more experienced surfers, learning by watching their techniques and timing. He spent time between his own sessions studying how other surfers approached different types of waves.",
        "As the sun set on a perfect day of surfing, JOHN was already asking when the next session would be. His passion for the sport continues to grow, and with each wave he rides, his confidence and ability expand. The ocean has found a new young ambassador in JOHN!"
      ],
      relatedTopics: [
        "Ocean safety for young surfers",
        "Building confidence in water sports",
        "The importance of proper instruction",
        "Family activities that inspire passion"
      ],
      nextSteps: [
        "Continue regular surf lessons",
        "Practice ocean safety skills",
        "Learn about different surfboard types",
        "Plan next surf trip destination"
      ]
    }
  };

  const article = newsArticles[newsId as keyof typeof newsArticles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className={`${article.bgColor} ${article.textColor} border-0`}>
                {article.category}
              </Badge>
              <div className="flex items-center text-muted-foreground text-sm gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none">
                      {article.content.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Next Steps */}
                <Card className="shadow-card mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-primary" />
                      What's Next?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {article.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={`w-2 h-2 ${article.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Article Info */}
                <Card className={`${article.gradient} text-white shadow-glow`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <User className="h-5 w-5" />
                      <span className="font-medium">JOHN's Journey</span>
                    </div>
                    <div className="space-y-3 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Published {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Share This Story</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: article.title,
                            text: article.summary,
                            url: window.location.href
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                        }
                      }}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Story
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Topics */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {article.relatedTopics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="w-full justify-start p-2 text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Inspired by JOHN's Story?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Connect with us to learn more about JOHN's journey and upcoming opportunities.
                    </p>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        const subject = encodeURIComponent(`Inspired by: ${article.title}`);
                        window.open(`mailto:contact@example.com?subject=${subject}`);
                      }}
                    >
                      Get in Touch
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;