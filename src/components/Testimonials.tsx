import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of 6-year-old",
    content: "AutismCare+ has been life-changing for our family. The screening helped us understand our son's needs, and the activities are engaging and effective.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Father of 4-year-old",
    content: "The professional network is incredible. We found an amazing therapist within days, and the community support has been invaluable.",
    rating: 5,
  },
  {
    name: "Emily Martinez",
    role: "Mother of 8-year-old twins",
    content: "Having everything in one place makes such a difference. The progress tracking helps us celebrate small wins every day.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thousands of Families
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what parents are saying about their experience with AutismCare+
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
