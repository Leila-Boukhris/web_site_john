import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroPortrait from "@/assets/john.jpg";

const HeroSection = () => {
  const currentAge = new Date().getFullYear() - 2017;
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-creativity/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-ocean/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={heroPortrait} 
                alt="Talented young achiever"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-glow animate-pulse-glow"
              />
              <div className="absolute -top-4 -right-4 bg-achievement text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center animate-bounce-gentle">
                {currentAge}
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Meet <span className="text-primary-glow">John Wright</span>
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              At just <span className="font-bold text-achievement-light">{currentAge} years old</span>, John Wright surfs the waves,
              codes his first programs, swings on the golf course, and plays piano with passion.<br />
              Welcome to his amazing journey!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-playful"
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Explore Talents
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;