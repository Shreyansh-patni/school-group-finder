import { Button } from "@/components/ui/button";
import { Search, Users, Calendar, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students collaborating in study groups and clubs" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/5" />
      </div>

      <div className="container relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Discover Your Perfect School Club
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with like-minded students, explore your passions, and build lasting friendships through our comprehensive club management platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Search className="h-5 w-5" />
              Explore Clubs
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Users className="h-5 w-5" />
              For Club Leaders
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur p-6 rounded-xl shadow-card border animate-scale-in">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Active Clubs</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur p-6 rounded-xl shadow-card border animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg mx-auto mb-4">
                <Calendar className="h-6 w-6 text-accent-bright-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">1,500+</div>
              <div className="text-muted-foreground">Events This Year</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur p-6 rounded-xl shadow-card border animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Student Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;