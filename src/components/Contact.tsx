import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Heart
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You could integrate with a form service here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reach out to us. We're here to listen, support, and connect with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-gentle border-0 bg-white/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-healing/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Our Office</h3>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Nairobi, our office serves as the central hub for 
                SisterHealing Alliance operations and community programs.
              </p>
            </Card>

            <Card className="p-6 shadow-gentle border-0 bg-white/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-empowerment/20">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Phone & WhatsApp</h3>
                  <p className="text-muted-foreground">Available during office hours</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Call or message us for immediate support, information about our programs, 
                or to schedule a consultation.
              </p>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </Card>

            <Card className="p-6 shadow-gentle border-0 bg-white/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-hero/20">
                  <Mail className="w-6 h-6 text-community" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">sisterhealingalliance@gmail.com</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Send us an email for detailed inquiries, partnership opportunities, 
                or if you prefer written communication.
              </p>
            </Card>

            <Card className="p-6 shadow-gentle border-0 bg-white/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-empowerment/20">
                  <Clock className="w-6 h-6 text-healing" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday</p>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Office Hours:</span> 9:00 AM - 5:00 PM</p>
                <p><span className="font-semibold">Crisis Support:</span> 24/7 (Coming Soon)</p>
                <p><span className="font-semibold">Weekend:</span> Emergency contact only</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-healing border-0 bg-white/90">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="shadow-gentle"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="shadow-gentle"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="shadow-gentle"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry or how you'd like to get involved..."
                  rows={6}
                  className="shadow-gentle resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Your privacy and confidentiality are our priority</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;