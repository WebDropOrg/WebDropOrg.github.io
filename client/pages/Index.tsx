import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Zap, Palette, Code, Mail, Phone, MapPin, Star, CheckCircle } from "lucide-react";

// Configuration for past projects - easily modifiable
const pastProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    url: "https://react-storefront-kappa.vercel.app/",
    category: "E-commerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    url: "https://bruno-simon.com/",
    category: "Portfolio"
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    url: "https://midday.ai/",
    category: "SaaS"
  },
  {
    id: 4,
    title: "Creative Agency",
    url: "https://www.awwwards.com/",
    category: "Agency"
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(pastProjects[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % pastProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedProject(pastProjects[currentProjectIndex]);
  }, [currentProjectIndex]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Reset form
    setFormData({ name: "", email: "", requirements: "" });
    setIsSubmitting(false);
    
    // Show success message (you could add a toast here)
    alert("Thank you! We'll get back to you soon.");
  };

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Complete web solutions from frontend to backend, databases, and deployment."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance. Your customers won't wait."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Design",
      description: "Tailored designs that reflect your brand and captivate your audience."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Technology",
      description: "Built with the latest technologies for scalability and maintainability."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "48h", label: "Average Delivery" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-400 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">WebDrop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button size="sm" className="animate-glow">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="animate-float mb-8">
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                🚀 Professional Web Development Services
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">WebDrop</span>
              <br />
              <span className="text-foreground">Websites That</span>
              <br />
              <span className="gradient-text">Convert</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We craft stunning, high-performance websites that drive results for your business. 
              From concept to deployment, we deliver excellence that impresses your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-glow">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">WebDrop?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites, we create digital experiences that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Past Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what we've built for other businesses. Each project is crafted with precision and purpose.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Navigation */}
            <div className="space-y-4">
              {pastProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className={`glass cursor-pointer transition-all duration-300 ${
                    selectedProject.id === project.id 
                      ? 'bg-primary/20 border-primary' 
                      : 'hover:bg-white/10'
                  }`}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentProjectIndex(index);
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{project.title}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {project.category}
                        </Badge>
                      </div>
                      {selectedProject.id === project.id && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Project Preview */}
            <div className="lg:col-span-2">
              <Card className="glass overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-secondary/50 p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{selectedProject.title}</h3>
                      <Badge>{selectedProject.category}</Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <iframe
                      src={selectedProject.url}
                      className="w-full h-96 border-0"
                      title={selectedProject.title}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your project and let's create something amazing together.
            </p>
          </div>

          <Card className="glass">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium mb-2">
                    Project Requirements
                  </label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder="Tell us about your project, features you need, timeline, budget, etc."
                    rows={5}
                    required
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full animate-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span className="font-medium">hello@webdrop.dev</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Phone</span>
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium">Remote & Worldwide</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-400 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">WebDrop</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Crafting exceptional web experiences for forward-thinking businesses.
            </p>
            <div className="flex justify-center space-x-6">
              <Star className="w-5 h-5 text-primary fill-current" />
              <Star className="w-5 h-5 text-primary fill-current" />
              <Star className="w-5 h-5 text-primary fill-current" />
              <Star className="w-5 h-5 text-primary fill-current" />
              <Star className="w-5 h-5 text-primary fill-current" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              5-star rated web development service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
