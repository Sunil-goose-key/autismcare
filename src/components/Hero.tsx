import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                🧩 Supporting Every Child's Journey
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Autism Support
              </span>
              {" "}in One Platform
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Empowering parents and caregivers with professional assessments, expert connections, 
              personalized activities, and a supportive community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Families</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Professionals</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Diverse children learning and playing together in an inclusive environment" 
              className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
