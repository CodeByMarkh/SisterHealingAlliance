import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Handshake, 
  DollarSign, 
  UserPlus, 
  Calendar,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: <Heart className="w-8 h-8 text-healing" />,
      title: "Volunteer with Us",
      description: "Join our team of dedicated volunteers supporting healing circles, workshops, and community outreach.",
      requirements: ["18+ years old", "Commitment to our values", "Basic training provided"],
      action: "Sign Up",
      variant: "healing" as const,
      benefits: ["Make real impact", "Gain experience", "Build community", "Personal growth"]
    },
    {
      icon: <UserPlus className="w-8 h-8 text-empowerment" />,
      title: "Become a Member",
      description: "Join our community as a full member and be part of the SisterHealing Alliance family.",
      requirements: ["18+ years old", "KES 500 membership fee", "Commitment to sisterhood"],
      action: "Join Now",
      variant: "empowerment" as const,
      benefits: ["Voting rights", "Program discounts", "Exclusive events", "Network access"]
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Partner with Us",
      description: "Organizations and businesses can partner with us to expand our reach and impact in the community.",
      requirements: ["Aligned values", "Community focus", "Long-term commitment"],
      action: "Partner",
      variant: "hero" as const,
      benefits: ["Social impact", "Brand alignment", "Community presence", "Tax benefits"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary" />,
      title: "Support Our Mission",
      description: "Financial contributions help us provide free services and resources to women who need them most.",
      requirements: ["Any amount welcome", "Tax-deductible receipts", "Transparent reporting"],
      action: "Donate",
      variant: "cta" as const,
      benefits: ["Direct impact", "Tax deduction", "Progress updates", "Recognition"]
    }
  ];

  return (
    <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get <span className="text-primary">Involved</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of the healing journey. Together, we can create lasting change in our community.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="p-8 shadow-gentle hover:shadow-healing transition-healing border-0 bg-white/80 group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-healing/20 group-hover:scale-110 transition-transform">
                  {opportunity.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {opportunity.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {opportunity.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                <div className="space-y-2">
                  {opportunity.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {opportunity.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Heart className="w-3 h-3 text-secondary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                variant={opportunity.variant}
                size="lg" 
                className="w-full"
              >
                {opportunity.action}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <Card className="p-8 shadow-healing border-0 bg-gradient-empowerment/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Upcoming Opportunities</h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Stay tuned for our inaugural events and programs launching soon. Be among the first 
              to join our healing circles and community initiatives.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">First Healing Circle</p>
                <p className="text-sm text-muted-foreground">Coming October 2025</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Volunteer Training</p>
                <p className="text-sm text-muted-foreground">Registration Open</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Handshake className="w-8 h-8 text-community mx-auto mb-2" />
                <p className="font-semibold text-foreground">Partnership Forum</p>
                <p className="text-sm text-muted-foreground">Planning Phase</p>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Stay Updated
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GetInvolved;