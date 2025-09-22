import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-healing-sisterhood.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Women supporting each other in healing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-glow/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Sister <span className="text-secondary">Healing </span> <span className="text-healing">Alliance</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-white/90 text-lg sm:text-xl">
              <Heart className="w-6 h-6 text-secondary" />
              <span>Dada Kwa Dada </span>
              <Heart className="w-6 h-6 text-secondary" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            We are a newly formed community-based organization in Nairobi, 
            dedicated to supporting women survivors of trauma with healing, dignity, and empowerment.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Founded July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-healing" />
              <span className="font-semibold">Nairobi Based</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Women Focused</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('founders')}
              className="min-w-48"
            >
              Meet the Founders
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => scrollToSection('get-involved')}
              className="min-w-48"
            >
              Join Our Mission
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;