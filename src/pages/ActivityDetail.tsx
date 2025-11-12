import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Trophy, Target, Heart, Star, Clock, User } from "lucide-react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
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

import piano1 from "@/assets/tree_imgs/piano1.png";
import piano2 from "@/assets/tree_imgs/piano2.png";
import piano3 from "@/assets/tree_imgs/piano3.png";
import draw1 from "@/assets/tree_imgs/draw1.png";
import draw2 from "@/assets/tree_imgs/draw2.png";
import draw3 from "@/assets/tree_imgs/draw3.png";
import golf1 from "@/assets/tree_imgs/golf1.png";
import golf2 from "@/assets/tree_imgs/golf2.png";
import golf3 from "@/assets/tree_imgs/golf3.png";
import surf1 from "@/assets/tree_imgs/surf1.png";
import surf2 from "@/assets/tree_imgs/surf2.png";
import surf3 from "@/assets/tree_imgs/surf3.png";
import pets1 from "@/assets/tree_imgs/pets1.png";
import pets2 from "@/assets/tree_imgs/pets2.png";
import pets3 from "@/assets/tree_imgs/pets3.png";
import paddle1 from "@/assets/tree_imgs/paddle1.png";
import default1 from "@/assets/tree_imgs/default1.png";
import paddle3 from "@/assets/tree_imgs/paddle3.png";

const ActivityDetail = () => {
  const { activityId } = useParams();
  useScrollRestoration();

  const activities = {
    surfing: {
      title: "Surfing Adventures",
      category: "Ocean Sports",
      description: "Riding waves with courage and grace, mastering balance and ocean respect.",
      image: surfingAction,
      gallery: [surf1, surf2, surf3],
      gradient: "bg-gradient-ocean",
      textColor: "text-ocean",
      bgColor: "bg-ocean/10",
      startAge: 5,
      currentLevel: "Advanced Beginner",
      achievements: [
        "First wave at age 5",
        "Advanced balance techniques", 
        "Ocean safety certified",
        "Can read wave patterns",
        "Proper surfboard handling"
      ],
      skills: [
        "Wave reading and timing",
        "Balance and coordination", 
        "Ocean safety awareness",
        "Equipment maintenance",
        "Physical fitness and endurance"
      ],
      awards: [
        {
          title: "Ocean Safety Champion",
          description: "Completed junior lifeguard certification and water safety training"
        },
        {
          title: "Wave Rider Excellence",
          description: "Demonstrated exceptional balance and wave-riding skills"
        },
        {
          title: "Fearless Water Warrior",
          description: "Showing courage and determination in challenging ocean conditions"
        },
        {
          title: "Surfing Technique Master",
          description: "Outstanding progress in advanced surfing techniques and wave reading"
        }
      ],
      goals: [
        "Master advanced turning techniques",
        "Compete in junior surfing competitions",
        "Learn different surfboard types",
        "Advance to bigger waves safely"
      ]
    },
    piano: {
      title: "Piano Mastery",
      category: "Creative Arts",
      description: "Creating beautiful melodies and developing musical expression through dedicated practice.",
      image: pianoPlaying,
      gallery: [piano1, piano2, piano3],
      gradient: "bg-gradient-creativity",
      textColor: "text-creativity",
      bgColor: "bg-creativity/10",
      startAge: 3,
      currentLevel: "Intermediate",
      achievements: [
        "Classical pieces mastery",
        "Original compositions",
        "Performance ready",
        "Music theory foundation",
        "Recital performances"
      ],
      skills: [
        "Classical technique",
        "Music reading and theory",
        "Composition and creativity",
        "Performance confidence",
        "Rhythm and timing"
      ],
      awards: [
        {
          title: "Musical Prodigy Recognition",
          description: "Exceptional musical talent and rapid progress in piano mastery"
        },
        {
          title: "Original Composer Award",
          description: "Created beautiful original compositions showing creativity and musical understanding"
        },
        {
          title: "Performance Excellence",
          description: "Outstanding stage presence and musical expression in recital performances"
        },
        {
          title: "Classical Music Scholar",
          description: "Demonstrated mastery of classical pieces by renowned composers"
        }
      ],
      goals: [
        "Master more complex classical pieces",
        "Compose longer original works",
        "Learn jazz improvisation",
        "Participate in piano competitions"
      ]
    },
    programming: {
      title: "Programming Journey",
      category: "Technology",
      description: "Building digital worlds through code, logic, and creative problem-solving.",
      image: codingTech,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-tech",
      textColor: "text-tech",
      bgColor: "bg-tech/10",
      startAge: 7,
      currentLevel: "Creative Beginner",
      achievements: [
        "Wrote first Python scripts",
        "Explored basic programming concepts",
        "Built simple console applications",
        "Created small web page templates",
        "Solved beginner-level coding exercises"
      ],
      skills: [
        "Basic Python programming",
        "Fundamental problem-solving",
        "Analytical thinking",
        "Eagerness to learn",
        "Understanding of programming logic"
      ],
      awards: [
        {
          title: "Python Beginner Recognition",
          description: "Acknowledged for successfully learning Python fundamentals"
        },
        {
          title: "Code Explorer",
          description: "Demonstrated curiosity and persistence in exploring programming basics"
        },
        {
          title: "Problem Solver",
          description: "Showed ability to apply logical reasoning to simple programming challenges"
        }
      ],
      goals: [
        "Improve Python programming skills",
        "Learn data analysis and visualization",
        "Develop small Python-based projects",
        "Explore basics of artificial intelligence"
      ]
    },
    golf: {
      title: "Golf Excellence", 
      category: "Precision Sports",
      description: "Developing patience, precision, and sportsmanship on the green.",
      image: golfSwing,
      gallery: [golf1, golf2, golf3],
      gradient: "bg-gradient-nature",
      textColor: "text-nature",
      bgColor: "bg-nature/10",
      startAge: 3,
      currentLevel: "Competitive Amateur",
      achievements: [
        "Perfect swing form foundation",
        "Course strategy basics",
        "Tournament ready mindset",
        "Equipment knowledge",
        "Golf etiquette mastery"
      ],
      skills: [
        "Swing mechanics",
        "Course strategy",
        "Mental focus and patience",
        "Sportsmanship",
        "Equipment selection"
      ],
      awards: [
        {
          title: "Precision Golf Award",
          description: "Exceptional accuracy and consistency in golf swing mechanics"
        },
        {
          title: "First Par Achievement",
          description: "Successfully achieved first par score on junior golf course"
        },
        {
          title: "Golf Technique Excellence",
          description: "Outstanding progress in fundamental golf techniques and form"
        },
        {
          title: "Tournament Ready Recognition",
          description: "Demonstrated skills and sportsmanship ready for competitive play"
        }
      ],
      goals: [
        "Achieve consistent par golf",
        "Compete in junior tournaments",
        "Improve short game skills",
        "Learn advanced course management"
      ]
    },
    languages: {
      title: "Languages",
      category: "Academic Achievement",
      description: "Mastering communication across different cultures and languages.",
      image: languagesImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-tech",
      textColor: "text-tech",
      bgColor: "bg-tech/10",
      startAge: 1,
      currentLevel: "Multilingual",
      achievements: [
        "Fluent in native language",
        "Conversational in second language",
        "Basic third language skills",
        "Cultural awareness",
        "Translation abilities"
      ],
      skills: [
        "Vocabulary building",
        "Grammar understanding",
        "Pronunciation practice",
        "Cultural context",
        "Communication confidence"
      ],
      awards: [
        {
          title: "Multilingual Communicator",
          description: "Demonstrated exceptional ability to communicate across multiple languages"
        },
        {
          title: "Cultural Bridge Builder",
          description: "Recognized for connecting different cultures through language skills"
        },
        {
          title: "Language Learning Excellence",
          description: "Outstanding progress in mastering new languages through dedication"
        },
        {
          title: "Global Citizen Award",
          description: "Showing curiosity and respect for different cultures and languages"
        }
      ],
      goals: [
        "Achieve fluency in second language",
        "Expand third language vocabulary",
        "Learn about different cultures",
        "Practice with native speakers"
      ]
    },
    "school-program": {
      title: "School Program",
      category: "Academic Achievement",
      description: "Excellence in academic curriculum and educational achievements.",
      image: schoolProgramImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-tech",
      textColor: "text-tech",
      bgColor: "bg-tech/10",
      startAge: 5,
      currentLevel: "Honor Student",
      achievements: [
        "Top academic performance",
        "Perfect attendance",
        "Leadership roles",
        "Academic awards",
        "Peer tutoring"
      ],
      skills: [
        "Critical thinking",
        "Problem solving",
        "Research abilities",
        "Presentation skills",
        "Time management"
      ],
      awards: [
        {
          title: "Academic Excellence Award",
          description: "Consistently achieving outstanding performance across all subjects"
        },
        {
          title: "Student Leadership Recognition",
          description: "Demonstrated exceptional leadership qualities in classroom activities"
        },
        {
          title: "Peer Mentor Certificate",
          description: "Recognized for helping and supporting fellow students"
        },
        {
          title: "Perfect Attendance Honor",
          description: "Commitment to education through consistent school attendance"
        }
      ],
      goals: [
        "Maintain academic excellence",
        "Develop leadership skills",
        "Explore advanced subjects",
        "Mentor younger students"
      ]
    },
    chess: {
      title: "Chess",
      category: "Academic Achievement",
      description: "Strategic thinking and tactical mastery on the chessboard.",
      image: chessImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-tech",
      textColor: "text-tech",
      bgColor: "bg-tech/10",
      startAge: 3,
      currentLevel: "Strategic Player",
      achievements: [
        "Basic chess rules mastery",
        "Opening strategies learned",
        "Tactical pattern recognition",
        "Tournament participation",
        "Chess club membership"
      ],
      skills: [
        "Strategic planning",
        "Pattern recognition",
        "Critical thinking",
        "Patience and focus",
        "Decision making"
      ],
      awards: [
        {
          title: "Strategic Thinking Champion",
          description: "Exceptional ability to plan and execute complex chess strategies"
        },
        {
          title: "Chess Club Rising Star",
          description: "Outstanding performance and sportsmanship in chess club activities"
        },
        {
          title: "Pattern Recognition Master",
          description: "Demonstrated excellent ability to recognize tactical patterns"
        },
        {
          title: "Young Grandmaster Potential",
          description: "Showing remarkable chess talent and dedication to improvement"
        }
      ],
      goals: [
        "Learn advanced chess strategies",
        "Participate in chess tournaments",
        "Improve tactical skills",
        "Study famous chess games"
      ]
    },
    tennis: {
      title: "Tennis",
      category: "Physical Activity",
      description: "Power, agility, and competitive spirit on the court.",
      image: tennisImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-ocean",
      textColor: "text-ocean",
      bgColor: "bg-ocean/10",
      startAge: 3,
      currentLevel: "Rising Player",
      achievements: [
        "Basic stroke techniques mastered",
        "Court positioning skills",
        "Competitive match experience",
        "Sportsmanship recognition",
        "Fitness improvement"
      ],
      skills: [
        "Hand-eye coordination",
        "Agility and speed",
        "Strategic thinking",
        "Mental toughness",
        "Physical endurance"
      ],
      awards: [
        {
          title: "Tennis Technique Champion",
          description: "Mastered fundamental forehand and backhand stroke techniques"
        },
        {
          title: "Rally Consistency Award",
          description: "Exceptional ability to maintain long rallies with precision"
        },
        {
          title: "Competitive Spirit Recognition",
          description: "Outstanding sportsmanship and competitive attitude in match play"
        },
        {
          title: "Court Awareness Excellence",
          description: "Demonstrated excellent court positioning and strategic thinking"
        }
      ],
      goals: [
        "Improve serve technique",
        "Participate in junior tournaments",
        "Develop advanced strategies",
        "Master different court surfaces"
      ]
    },
    "paddle-tennis": {
      title: "Paddle Tennis",
      category: "Physical Activity",
      description: "Fast-paced racquet sport combining strategy and reflexes.",
      image: paddleTennisImage,
      gallery: [paddle1, default1, paddle3],
      gradient: "bg-gradient-ocean",
      textColor: "text-ocean",
      bgColor: "bg-ocean/10",
      startAge: 3,
      currentLevel: "Developing Skills",
      achievements: [
        "Basic paddle techniques learned",
        "Wall play mastery",
        "Team coordination skills",
        "Quick reflex development",
        "Strategic positioning"
      ],
      skills: [
        "Quick reflexes",
        "Hand-eye coordination",
        "Team communication",
        "Strategic positioning",
        "Adaptability"
      ],
      awards: [
        {
          title: "Paddle Technique Master",
          description: "Excellent paddle grip and wall bouncing technique development"
        },
        {
          title: "Team Player Excellence",
          description: "Outstanding teamwork and coordination in doubles play"
        },
        {
          title: "Strategic Shot Placement",
          description: "Demonstrated advanced understanding of shot positioning and strategy"
        },
        {
          title: "Quick Reflex Champion",
          description: "Exceptional reaction time and adaptability in fast-paced play"
        }
      ],
      goals: [
        "Master advanced shot techniques",
        "Improve team communication",
        "Participate in local tournaments",
        "Develop signature playing style"
      ]
    },
    "horse-riding": {
      title: "Horse Riding",
      category: "Physical Activity",
      description: "Building trust and connection with these magnificent animals.",
      image: horseRidingImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-nature",
      textColor: "text-nature",
      bgColor: "bg-nature/10",
      startAge: 4,
      currentLevel: "Confident Rider",
      achievements: [
        "Basic riding posture mastered",
        "Horse care knowledge",
        "Trust building with horses",
        "Safety protocol adherence",
        "Independent riding"
      ],
      skills: [
        "Balance and posture",
        "Animal communication",
        "Responsibility and care",
        "Confidence building",
        "Patience and empathy"
      ],
      awards: [
        {
          title: "Equestrian Safety Champion",
          description: "Exceptional understanding and practice of horse safety protocols"
        },
        {
          title: "Independent Rider Achievement",
          description: "Successfully developed confidence for independent riding"
        },
        {
          title: "Horse Care Specialist",
          description: "Outstanding dedication to horse grooming, feeding, and general care"
        },
        {
          title: "Animal Bond Builder",
          description: "Remarkable ability to build trust and connection with horses"
        }
      ],
      goals: [
        "Learn advanced riding techniques",
        "Participate in riding competitions",
        "Develop deeper horse relationships",
        "Master different riding styles"
      ]
    },
    motorsport: {
      title: "Motorsport",
      category: "Physical Activity",
      description: "Speed, precision, and technical understanding of racing.",
      image: motorsportImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-tech",
      textColor: "text-tech",
      bgColor: "bg-tech/10",
      startAge: 4,
      currentLevel: "Future Racer",
      achievements: [
        "Go-kart basics mastered",
        "Safety protocol knowledge",
        "Racing line understanding",
        "Vehicle control skills",
        "Competitive spirit development"
      ],
      skills: [
        "Hand-eye coordination",
        "Quick decision making",
        "Technical understanding",
        "Risk assessment",
        "Competitive mindset"
      ],
      awards: [
        {
          title: "Racing Safety Excellence",
          description: "Outstanding knowledge and application of motorsport safety protocols"
        },
        {
          title: "Track Master Recognition",
          description: "Exceptional understanding of racing lines and track optimization"
        },
        {
          title: "Vehicle Control Champion",
          description: "Demonstrated excellent go-kart handling and control skills"
        },
        {
          title: "Future Racer Potential",
          description: "Showing remarkable talent and competitive spirit in junior racing"
        }
      ],
      goals: [
        "Improve lap times consistently",
        "Learn advanced racing techniques",
        "Participate in championships",
        "Understand vehicle mechanics"
      ]
    },
    "art-drawing": {
      title: "Art Drawing",
      category: "Self Expression",
      description: "Visual storytelling through sketches, paintings, and artistic expression.",
      image: artDrawingImage,
      gallery: [draw1, draw2, draw3],
      gradient: "bg-gradient-creativity",
      textColor: "text-creativity",
      bgColor: "bg-creativity/10",
      startAge: 3,
      currentLevel: "Creative Artist",
      achievements: [
        "Basic drawing techniques mastered",
        "Color theory understanding",
        "Creative composition skills",
        "Art exhibition participation",
        "Personal style development"
      ],
      skills: [
        "Fine motor control",
        "Visual observation",
        "Creative expression",
        "Color coordination",
        "Artistic patience"
      ],
      awards: [
        {
          title: "Young Artist Recognition",
          description: "Outstanding creativity and artistic expression in drawing and painting"
        },
        {
          title: "Art Exhibition Participant",
          description: "Successfully displayed artwork in local children's art exhibition"
        },
        {
          title: "Color Theory Master",
          description: "Exceptional understanding and application of color combinations"
        },
        {
          title: "Advanced Technique Achievement",
          description: "Mastered complex drawing techniques including shading and perspective"
        }
      ],
      goals: [
        "Master advanced drawing techniques",
        "Explore different art mediums",
        "Create a personal art portfolio",
        "Participate in art competitions"
      ]
    },
    "emotional-intelligence": {
      title: "Emotional Intelligence",
      category: "Self Expression",
      description: "Understanding emotions and building meaningful connections.",
      image: emotionalIntelligenceImage,
      gallery: [default1, default1, default1],
      gradient: "bg-gradient-creativity",
      textColor: "text-creativity",
      bgColor: "bg-creativity/10",
      startAge: 1,
      currentLevel: "Empathetic Leader",
      achievements: [
        "Emotion recognition skills",
        "Empathy development",
        "Conflict resolution abilities",
        "Leadership qualities",
        "Social awareness"
      ],
      skills: [
        "Emotional awareness",
        "Active listening",
        "Empathy and compassion",
        "Communication skills",
        "Social intelligence"
      ],
      awards: [
        {
          title: "Emotional Awareness Champion",
          description: "Exceptional ability to identify and understand different emotions"
        },
        {
          title: "Empathy Excellence Award",
          description: "Outstanding compassion and understanding toward others' feelings"
        },
        {
          title: "Conflict Resolution Specialist",
          description: "Remarkable skills in helping resolve disagreements peacefully"
        },
        {
          title: "Young Leader Recognition",
          description: "Natural leadership abilities and positive influence on group dynamics"
        }
      ],
      goals: [
        "Develop advanced communication skills",
        "Become a peer mediator",
        "Strengthen leadership abilities",
        "Build deeper friendships"
      ]
    },
    "pets-animals": {
      title: "Pets and Animals",
      category: "Self Expression",
      description: "Caring for and connecting with our animal companions.",
      image: petsAnimalsImage,
      gallery: [pets1, pets2, pets3],
      gradient: "bg-gradient-nature",
      textColor: "text-nature",
      bgColor: "bg-nature/10",
      startAge: 1,
      currentLevel: "Animal Lover",
      achievements: [
        "Pet care responsibility",
        "Animal behavior understanding",
        "Veterinary knowledge basics",
        "Animal training skills",
        "Compassionate caregiving"
      ],
      skills: [
        "Responsibility and routine",
        "Animal communication",
        "Patience and gentleness",
        "Observation skills",
        "Nurturing instincts"
      ],
      awards: [
        {
          title: "Compassionate Caregiver",
          description: "Exceptional dedication to pet care and animal welfare"
        },
        {
          title: "Animal Behavior Expert",
          description: "Outstanding understanding of pet needs and communication signals"
        },
        {
          title: "Pet Training Assistant",
          description: "Remarkable skills in helping with basic pet training and commands"
        },
        {
          title: "Animal Advocate Recognition",
          description: "Strong commitment to animal welfare and protection initiatives"
        }
      ],
      goals: [
        "Learn about different animal species",
        "Volunteer at animal shelters",
        "Study veterinary basics",
        "Become an animal advocate"
      ]
    }
  };

  const activity = activities[activityId as keyof typeof activities];

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Activity Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className={`${activity.gradient} text-white py-20`}>
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <Badge className="bg-white/20 text-white border-0 mb-4">
                  {activity.category}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {activity.title}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  {activity.description}
                </p>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Started at age {activity.startAge}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    <span>{activity.currentLevel}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-glow"
                />
                <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activity.gallery.map((img, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl group flex flex-col items-center justify-end" style={{ width: 236, height: 420, margin: '0 auto' }}>
                  <img 
                    src={img} 
                    alt={`${activity.title} gallery ${index + 1}`}
                    style={{ width: 236, height: 420, objectFit: 'cover', borderRadius: '1rem', margin: '0 auto' }}
                  />
                  <div 
                    className="absolute left-0 top-0 bg-white/20 group-hover:bg-white/10 transition-colors rounded-xl"
                    style={{ width: 236, height: 420 }}
                  ></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
                    <Badge className="bg-white/30 text-white border-0 text-base px-4 py-2 shadow-md rounded-lg">
                      Gallery {index + 1}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Awards & Recognition or Journey Timeline */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {(activity as any).awards ? (
                      <>
                        <Star className="h-6 w-6 text-primary" />
                        Journey and Awards
                      </>
                    ) : (
                      <>
                        <Target className="h-6 w-6 text-primary" />
                        Learning Journey
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {(activity as any).awards ? (
                      (activity as any).awards.map((award: any, index: number) => (
                        <div key={index} className="relative flex gap-4">
                          <div className={`w-8 h-8 ${activity.gradient} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                            <Star className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">
                              {award.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {award.description}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      (activity as any).journey?.map((milestone: any, index: number) => (
                        <div key={index} className="relative flex gap-4">
                          <div className={`w-8 h-8 ${activity.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                            {milestone.age}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">
                              {milestone.milestone}
                            </h4>
                            <p className="text-muted-foreground">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Skills Development */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Skills & Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activity.skills.map((skill, index) => (
                      <div key={index} className={`p-3 rounded-lg ${activity.bgColor} border border-current/20`}>
                        <span className={`font-medium ${activity.textColor}`}>
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Future Goals */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    Future Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activity.goals.map((goal, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${activity.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{goal}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Achievements */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activity.achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary" className="w-full justify-start p-2">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivityDetail;