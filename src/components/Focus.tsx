import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  Phone, 
  Briefcase, 
  MapPin, 
  Calendar,
  ArrowRight,
  Star
} from "lucide-react";

const Focus = () => {
  const programs = [
    {
      icon: <Users className="w-10 h-10 text-healing" />,
      title: "SisterHealing Circles",
      description: "Peer-support groups where women come together in safe, confidential spaces to share experiences and healing journeys.",
      status: "Launching Soon",
      features: ["Weekly meetings", "Trained facilitators", "Confidential environment", "Peer support"],
      color: "bg-gradient-healing"
    },
    {
      icon: <Heart className="w-10 h-10 text-empowerment" />,
      title: "Healing Journeys & Workshops",
      description: "Therapeutic workshops focused on trauma recovery, self-care, mindfulness, and personal empowerment.",
      status: "In Development",
      features: ["Trauma-informed therapy", "Mindfulness training", "Art & music therapy", "Personal growth"],
      color: "bg-gradient-empowerment"
    },
    {
      icon: <Phone className="w-10 h-10 text-primary" />,
      title: "Digital Empathy Helpline",
      description: "24/7 digital support platform providing immediate assistance and professional guidance for women in crisis.",
      status: "Coming Soon",
      features: ["24/7 availability", "Professional counselors", "Crisis intervention", "Follow-up support"],
      color: "bg-gradient-hero"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-secondary" />,
      title: "Skills & Livelihood Training",
      description: "Practical skills development programs to help survivors achieve economic independence and self-sufficiency.",
      status: "Planning Phase",
      features: ["Vocational training", "Business skills", "Financial literacy", "Job placement"],
      color: "bg-gradient-empowerment"
    },
    {
      icon: <MapPin className="w-10 h-10 text-community" />,
      title: "Community Outreach",
      description: "Awareness campaigns and community education programs to reduce stigma and promote understanding.",
      status: "Ongoing Initiative",
      features: ["Awareness campaigns", "Educational programs", "Stigma reduction", "Community partnerships"],
      color: "bg-gradient-healing"
    }
  ];

  return (
    <section id="focus" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Focus Areas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to support healing, empowerment, and community building
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="p-6 shadow-gentle hover:shadow-healing transition-healing border-0 bg-white/80 hover:bg-white group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${program.color}/20 group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {program.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {program.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-3 h-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-4 group-hover:bg-primary/10 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 shadow-healing border-0 bg-gradient-empowerment/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Get Involved Today</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              We're actively seeking partners, volunteers, and supporters to help us expand our reach 
              and impact in the Nairobi community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Become a Volunteer
              </Button>
              <Button variant="cta" size="lg">
                Partner with Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Focus;