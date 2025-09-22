import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Star, Users, Crown } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Lydia Were",
      role: "Chairperson & Co-Founder",
      quote: "Every woman deserves a space where her story is heard, her pain is understood, and her healing is supported.",
      expertise: "Mental Health Advocacy",
      icon: <Crown className="w-6 h-6 text-primary" />,
      gradient: "from-primary/20 to-healing/20"
    },
    {
      name: "Mourine Wanja",
      role: "Vice chairperson & Co-Founder",
      quote: "Every woman deserves a space where her story is heard, her pain is understood, and her healing is supported.",
      expertise: "Mental Health Advocacy",
      icon: <Crown className="w-6 h-6 text-primary" />,
      gradient: "from-primary/20 to-healing/20"
    },
    {
      name: "Winfred Mwangi",
      role: "Secretary & Co-Founder", 
      quote: "Through sisterhood, we transform individual healing into collective strength and community resilience.",
      expertise: "Community Organizing",
      icon: <Users className="w-6 h-6 text-secondary" />,
      gradient: "from-secondary/20 to-empowerment/20"
    },
    {
      name: "Giselle Nekesa",
      role: "Treasurer & Co-Founder",
      quote: "Sustainable healing requires sustainable resources. I ensure our mission has the foundation to thrive.",
      expertise: "Financial Management",
      icon: <Star className="w-6 h-6 text-community" />,
      gradient: "from-community/20 to-healing/20"
    }
  ];

  return (
    <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every movement starts with committed people. Meet the women building SisterHealing Alliance.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="p-6 shadow-gentle hover:shadow-healing transition-healing border-0 bg-white/90 group"
            >
              {/* Profile Image Placeholder */}
              <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center group-hover:scale-105 transition-transform shadow-gentle`}>
                <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center">
                  {founder.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {founder.role}
                </p>
                <p className="text-sm text-secondary mb-4">
                  {founder.expertise}
                </p>

                {/* Quote */}
                <div className="relative mt-6">
                  <Quote className="w-6 h-6 text-primary/30 mb-3 mx-auto" />
                  <p className="text-muted-foreground italic leading-relaxed text-sm">
                    "{founder.quote}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Founders Story */}
        <Card className="p-8 shadow-healing border-0 bg-gradient-empowerment/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Our Founding Story</h3>
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              In July 2025, three young women in Nairobi came together with a shared vision: 
              to create a safe haven for women survivors of trauma. United by their passion for mental health 
              and community empowerment, Sarah, Grace, and Faith founded SisterHealing Alliance as a beacon of hope 
              in their community.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Each bringing unique skills and perspectives, they established an organization rooted in the belief 
              that healing happens best in community. Their constitution, signed with hope and determination, 
              outlines a future where no woman survivor stands alone.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Passion for Healing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <p className="font-semibold text-foreground">Community Focus</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-community/20 flex items-center justify-center">
                  <Star className="w-8 h-8 text-community" />
                </div>
                <p className="font-semibold text-foreground">Shared Vision</p>
              </div>
            </div>

            <Button variant="cta" size="lg">
              Join Our Journey
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Founders;