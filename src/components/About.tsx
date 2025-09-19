import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Sparkles, Eye, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Purpose",
      description: "Dedicated to meaningful healing and empowerment for survivors"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Dignity",
      description: "Every woman deserves respect, compassion, and honor in her journey"
    },
    {
      icon: <Heart className="w-8 h-8 text-healing" />,
      title: "Confidentiality", 
      description: "Safe spaces where stories are protected and trust is sacred"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-empowerment" />,
      title: "Resilience",
      description: "Building strength through community support and shared healing"
    },
    {
      icon: <Users className="w-8 h-8 text-community" />,
      title: "Inclusivity",
      description: "Welcoming all women survivors, regardless of background or experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from passion and commitment to mental health and survivor empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <Card className="p-8 shadow-gentle hover:shadow-healing transition-healing border-0 bg-gradient-card">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in July 2025 by a passionate group of young women, SisterHealing Alliance 
              emerged from a shared commitment to addressing the mental health needs of trauma survivors 
              in our community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a world where every woman survivor has access to healing resources, 
              supportive community, and the tools needed to rebuild her life with dignity and strength.
            </p>
          </Card>

          {/* Mission */}
          <Card className="p-8 shadow-gentle hover:shadow-empowerment transition-healing border-0 bg-gradient-empowerment/20">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To provide comprehensive support, healing resources, and empowerment opportunities 
              for women survivors of trauma through community-driven programs and sisterhood.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in the power of community healing, where women support women in 
              reclaiming their strength and building resilient, meaningful lives.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Values</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and shape our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 text-center shadow-gentle hover:shadow-healing transition-healing border-0 bg-white/70 hover:bg-white/90"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;