import { Button } from "@/components/ui/button";
import { ClipboardList, Users, Activity, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Complete Assessment",
    description: "Take our comprehensive screening questionnaire designed by certified professionals",
    step: "01",
  },
  {
    icon: Users,
    title: "Connect with Experts",
    description: "Get matched with verified specialists based on your child's specific needs",
    step: "02",
  },
  {
    icon: Activity,
    title: "Start Activities",
    description: "Follow personalized daily exercises and track your child's engagement",
    step: "03",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor improvements and celebrate milestones with detailed progress reports",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AutismCare+
            </span>
            {" "}Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to start supporting your child's development journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"></div>
                )}
                
                <div className="relative bg-card rounded-2xl p-6 border-2 hover:border-primary/50 transition-colors group">
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.step}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-[var(--gradient-hero)] flex items-center justify-center mb-4 shadow-[var(--shadow-elegant)] group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
