import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free 30-day trial",
  "No credit card required",
  "Cancel anytime",
  "Full access to all features",
];

const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Support Your Child's Journey?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of families who are already using AutismCare+ to make a positive difference
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              Schedule a Demo
            </Button>
          </div>
          
          <p className="text-sm text-white/70">
            Questions? Contact our support team at{" "}
            <a href="mailto:support@autismcareplus.com" className="underline hover:text-white">
              support@autismcareplus.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
