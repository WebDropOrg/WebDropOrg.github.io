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
  Palette, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle,
  Users,
  Clock,
  Target,
  Layers,
  Rocket,
  Shield,
  Award,
  Lightbulb,
  ChevronDown,
  Play,
  ExternalLink,
  Monitor,
  Smartphone,
  Database,
  Cloud
} from "lucide-react";

// Configuration for past projects - easily modifiable
const pastProjects = [
  {
    id: 1,
    title: "TechFlow E-commerce",
    url: "https://react-storefront-kappa.vercel.app/",
    category: "E-commerce",
    description: "Modern e-commerce platform with advanced filtering, payment integration, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    results: "300% increase in conversion rate"
  },
  {
    id: 2,
    title: "Creative Studio Portfolio",
    url: "https://bruno-simon.com/",
    category: "Portfolio",
    description: "Interactive 3D portfolio showcasing creative work with immersive animations and smooth transitions.",
    tech: ["Three.js", "React", "GSAP", "WebGL"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
    results: "500% increase in client inquiries"
  },
  {
    id: 3,
    title: "DataSync SaaS Platform",
    url: "https://midday.ai/",
    category: "SaaS",
    description: "Comprehensive dashboard with real-time analytics, user management, and subscription handling.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    results: "10,000+ active users in 6 months"
  },
  {
    id: 4,
    title: "Fusion Marketing Agency",
    url: "https://www.awwwards.com/",
    category: "Agency",
    description: "Award-winning agency website with stunning visuals, case studies, and lead generation forms.",
    tech: ["Vue.js", "Nuxt", "Sanity CMS", "Netlify"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    results: "200% increase in qualified leads"
  },
  {
    id: 5,
    title: "HealthTech Mobile App",
    url: "https://react-storefront-kappa.vercel.app/",
    category: "Healthcare",
    description: "HIPAA-compliant telemedicine platform with video consultations and patient management.",
    tech: ["React Native", "Firebase", "WebRTC", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    results: "50,000+ consultations completed"
  },
  {
    id: 6,
    title: "FinanceFlow Dashboard",
    url: "https://midday.ai/",
    category: "Fintech",
    description: "Advanced financial dashboard with real-time trading, portfolio tracking, and risk analysis.",
    tech: ["Angular", "D3.js", "Python", "Docker"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center",
    results: "$50M+ transactions processed"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    company: "TechFlow Inc.",
    content: "WebDrop transformed our online presence completely. The e-commerce platform they built increased our sales by 300% in just 3 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    company: "Creative Studio",
    content: "The portfolio website they created is absolutely stunning. We've received more client inquiries than ever before.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DataSync Solutions",
    content: "Professional, fast, and exactly what we needed. The SaaS platform handles our 10,000+ users flawlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const technologies = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "TypeScript", icon: "����", category: "Language" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Stripe", icon: "💳", category: "Payment" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "Three.js", icon: "🎲", category: "3D" }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our designers create stunning mockups and interactive prototypes that bring your vision to life before development begins.",
    icon: <Palette className="w-8 h-8" />
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your website using cutting-edge technologies, with rigorous testing to ensure everything works perfectly.",
    icon: <Code className="w-8 h-8" />
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your website and provide ongoing support, maintenance, and optimization to ensure continued success.",
    icon: <Rocket className="w-8 h-8" />
  }
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Timeline depends on complexity. Simple websites take 2-3 weeks, while complex e-commerce or SaaS platforms can take 6-12 weeks. We provide detailed timelines during planning."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! We offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely. We specialize in integrations with CRMs, payment processors, inventory systems, marketing tools, and any API-based service your business uses."
  },
  {
    question: "What's included in the website cost?",
    answer: "Our packages include design, development, testing, deployment, SSL certificate, 3 months of free support, and training. Hosting and domain are separate."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients worldwide. We're experienced in different time zones and provide clear communication throughout the project."
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % pastProjects.length);
    }, 8000);
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
    
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", requirements: "" });
    setIsSubmitting(false);
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
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="animate-float mb-8">
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                🚀 Professional Web Development Services
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
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
              <Button size="lg" className="animate-glow text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose <span className="gradient-text">WebDrop?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites, we create digital experiences that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                    <div className="text-primary mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section - Completely Redesigned */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          {/* Featured Project Display */}
          <div className="mb-16">
            <Card className="glass overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                    <iframe
                      src={selectedProject.url}
                      className="w-full h-full border-0 transition-transform duration-300 group-hover:scale-105"
                      title={selectedProject.title}
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Button size="sm" variant="secondary" className="glass">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">{selectedProject.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <Badge key={index} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center text-primary font-semibold">
                      <Target className="w-5 h-5 mr-2" />
                      Result: {selectedProject.results}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`glass cursor-pointer transition-all duration-300 group hover:scale-105 ${
                  selectedProject.id === project.id 
                    ? 'ring-2 ring-primary bg-primary/10' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentProjectIndex(index);
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20">
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 pointer-events-none"
                        title={project.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      {selectedProject.id === project.id && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Technology</span> Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">FAQ</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our web development services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
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

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
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
                  className="w-full animate-glow text-lg py-4"
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
      <footer className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-400 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold gradient-text">WebDrop</span>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Crafting exceptional web experiences for forward-thinking businesses.
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-primary fill-current" />
              <Star className="w-6 h-6 text-primary fill-current" />
              <Star className="w-6 h-6 text-primary fill-current" />
              <Star className="w-6 h-6 text-primary fill-current" />
              <Star className="w-6 h-6 text-primary fill-current" />
            </div>
            <p className="text-muted-foreground">
              5-star rated web development service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
