import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook, MessageCircle, Video,Youtube ,ExternalLink } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "TikTok",
      icon: Video,
      gradient: "bg-gradient-to-r from-pink-500 to-red-500",
      url: "https://www.tiktok.com/@wrightjohn.official",
      description: "Follow JOHN's journey"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://www.instagram.com/jw_johnwright",
      description: "Photos & updates"
    },
    {
      name: "Facebook",
      icon: Facebook,
      gradient: "bg-gradient-to-r from-blue-600 to-blue-500",
      url: "https://www.facebook.com/wrightjohn.official/",
      description: "Connect with family"
    },
    {
      name: "Youtube",
      icon: Youtube,
      gradient: "bg-gradient-to-r from-red-600 to-pink-800",
      url: "https://www.youtube.com/@John-Wright-Official",
      description: "Youtube channel"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Follow JOHN's Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with JOHN's latest achievements, updates, and adventures across all his talents.
            Connect with us on social media or reach out directly.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {socialLinks.map((social, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-playful transition-all duration-300 group hover:scale-105 cursor-pointer"
              onClick={() => handleSocialClick(social.url)}
            >
              <CardContent className="p-6 text-center">
                <div className={`${social.gradient} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <social.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {social.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-16 w-16 mx-auto mb-6 animate-bounce-gentle" />
              <h3 className="text-3xl font-bold mb-4">
                Get in Touch
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Have questions, collaboration ideas, or want to learn more about JOHN's talents?
                We'd love to hear from you! Reach out through any of our social channels or send us a direct message.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                  onClick={() => handleSocialClick("mailto:inquiry.johnwright@gmail.com")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All inquiries are reviewed with care. We typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;