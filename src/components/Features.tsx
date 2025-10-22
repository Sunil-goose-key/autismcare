import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import screeningIcon from "@/assets/screening-icon.jpg";
import professionalsIcon from "@/assets/professionals-icon.jpg";
import activitiesIcon from "@/assets/activities-icon.jpg";
import communityIcon from "@/assets/community-icon.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Autism Screening",
    description: "Comprehensive assessment tools to understand your child's development and needs",
    icon: screeningIcon,
    benefits: ["Evidence-based questionnaires", "Instant results & reports", "Professional guidance"],
  },
  {
    title: "Professional Help",
    description: "Connect with verified specialists including psychologists, therapists, and pediatricians",
    icon: professionalsIcon,
    benefits: ["Verified experts", "Easy booking", "Secure communication"],
  },
  {
    title: "Coaching Activities",
    description: "Daily personalized exercises and activities designed by specialists for your child",
    icon: activitiesIcon,
    benefits: ["Age-appropriate tasks", "Progress tracking", "Fun & engaging"],
  },
  {
    title: "Community Support",
    description: "Join thousands of parents sharing experiences, tips, and emotional support",
    icon: communityIcon,
    benefits: ["Safe space", "Expert moderation", "24/7 support"],
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AutismCare+ provides comprehensive tools and resources to support your child's development journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden"
            >
              <CardHeader>
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={feature.icon} 
                    alt={`${feature.title} icon representing ${feature.description}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="mr-2 text-primary">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
