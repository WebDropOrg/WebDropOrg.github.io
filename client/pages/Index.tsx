import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Code2, 
  Palette, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle,
  Play,
  ExternalLink,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Rocket,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Send,
  Eye,
  Heart,
  MessageCircle,
  ArrowUp
} from "lucide-react";

// Project showcase data
const showcaseProjects = [
  {
    id: 1,
    title: "TechVault SaaS",
    category: "SaaS Platform",
    url: "https://midday.ai/",
    description: "Modern SaaS dashboard with real-time analytics and team collaboration features.",
    tech: ["React", "TypeScript", "Prisma", "Next.js"],
    metrics: { users: "15K+", growth: "+240%", rating: "4.9/5" },
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    title: "StoreFlow Commerce",
    category: "E-Commerce",
    url: "https://react-storefront-kappa.vercel.app/",
    description: "High-performance e-commerce platform with advanced inventory management.",
    tech: ["Next.js", "Stripe", "Sanity", "Vercel"],
    metrics: { revenue: "+350%", conversion: "12.4%", orders: "50K+" },
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 3,
    title: "CreativeHub Portfolio",
    category: "Portfolio",
    url: "https://bruno-simon.com/",
    description: "Interactive portfolio with 3D elements and smooth animations.",
    tech: ["Three.js", "GSAP", "React", "WebGL"],
    metrics: { views: "100K+", engagement: "+400%", awards: "8" },
    color: "from-pink-500 to-orange-500"
  }
];

// Services data
const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites built with modern frameworks and technologies.",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "App Store Deploy", "Push Notifications"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Scalable APIs and server infrastructure for your applications.",
    features: ["Node.js", "PostgreSQL", "API Design", "Database Optimization"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Modern cloud infrastructure and deployment strategies.",
    features: ["AWS/Vercel", "CI/CD", "Auto Scaling", "Performance Monitoring"]
  }
];

// Tech stack
const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Vercel", category: "Deployment" },
  { name: "AWS", category: "Cloud" }
];

// Process steps
const process = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision and requirements"
  },
  {
    number: "02", 
    title: "Design",
    description: "Creating intuitive and beautiful interfaces"
  },
  {
    number: "03",
    title: "Development", 
    description: "Building with modern technologies"
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploying and supporting your project"
  }
];

// FAQ data
const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Most projects take 4-12 weeks depending on complexity. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer maintenance packages including updates, security patches, and feature enhancements."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We focus on modern web technologies like React, Next.js, TypeScript, and cloud platforms like Vercel and AWS."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use Slack for daily communication and provide weekly progress updates with demos of completed features."
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(showcaseProjects[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Badge */}
            <Badge className="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Web Development
            </Badge>

            {/* Hero Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              We Build
              <span className="text-gradient block">
                Digital Products
              </span>
              That Actually Work
            </h1>

            {/* Hero Description */}
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Modern web applications and mobile apps that drive business growth. 
              From idea to deployment, we handle everything.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="btn-glow px-8 py-6 text-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-glow px-8 py-6 text-lg">
                View Our Work
                <Eye className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">48h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Play className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Project</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at our most recent work and see how we solve real business problems.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="card-glow overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Preview */}
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <iframe
                      src={selectedProject.url}
                      className="w-full h-full border-0 transition-transform duration-300 group-hover:scale-105"
                      title={selectedProject.title}
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Button size="sm" className="bg-black/50 backdrop-blur-sm border-white/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4">{selectedProject.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-3 bg-secondary/50 rounded-lg">
                        <div className="text-lg font-bold text-gradient">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Built with</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              {showcaseProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedProject.id === project.id 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              What We Do
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end development services to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-gradient hover-lift group">
                <CardContent className="p-8">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              How We Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Simple <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A straightforward approach that gets results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-border ml-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Code2 className="w-4 h-4 mr-2" />
              Technology
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Modern <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use the latest technologies to build fast, secure, and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <Card key={index} className="card-gradient hover-lift text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse through our collection of successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <Card key={project.id} className="card-glow hover-lift group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    src={project.url}
                    className="w-full h-full border-0 transition-transform duration-300 group-hover:scale-110"
                    title={project.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge className="bg-black/50 backdrop-blur-sm border-white/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-gradient">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold">{faq.question}</h3>
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform ${
                        expandedFaq === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Send className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Start Your <span className="text-gradient">Project</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to bring your ideas to life? Let's talk about your project.
            </p>
          </div>

          <Card className="card-glow">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-border grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground mb-1">Email</span>
                  <span className="font-medium">hello@webdrop.dev</span>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground mb-1">Phone</span>
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground mb-1">Response</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-card/50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-emerald-400 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">WebDrop</span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Building digital products that make a difference.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 WebDrop. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
