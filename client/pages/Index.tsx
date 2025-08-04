import { useState, useEffect, useRef } from "react";
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
  MousePointer,
  Layers,
  Settings,
  BarChart3,
  Search,
  Smartphone,
  Layout,
  Brush,
  Code,
  Target,
  Award,
  Coffee,
  Headphones,
  Calendar,
  FileText,
  ChevronDown,
  Timer,
  PenTool,
  Figma
} from "lucide-react";

// Project showcase data
const showcaseProjects = [
  {
    id: 1,
    title: "EcoTech Solutions",
    category: "Business Website",
    url: "https://midday.ai/",
    description: "Modern business website for a sustainable technology company with interactive features and lead generation.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: { visitors: "12K+", conversion: "+180%", rating: "4.8/5", timeline: "4 weeks" },
    color: "from-emerald-500 to-teal-500",
    industry: "Technology"
  },
  {
    id: 2,
    title: "Artisan Marketplace",
    category: "E-Commerce Website",
    url: "https://react-storefront-kappa.vercel.app/",
    description: "Custom e-commerce platform for handmade crafts with advanced filtering and payment integration.",
    tech: ["Next.js", "Stripe", "Sanity CMS", "TypeScript"],
    metrics: { sales: "+220%", orders: "3.2K+", rating: "4.7/5", timeline: "6 weeks" },
    color: "from-blue-500 to-purple-500",
    industry: "E-Commerce"
  },
  {
    id: 3,
    title: "Creative Studio Hub",
    category: "Portfolio Website",
    url: "https://bruno-simon.com/",
    description: "Interactive portfolio website for a design agency featuring smooth animations and case studies.",
    tech: ["React", "Three.js", "GSAP", "Netlify"],
    metrics: { engagement: "+150%", inquiries: "89", rating: "4.9/5", timeline: "5 weeks" },
    color: "from-pink-500 to-orange-500",
    industry: "Design Agency"
  },
  {
    id: 4,
    title: "HealthFirst Clinic",
    category: "Medical Website",
    url: "https://midday.ai/",
    description: "Professional medical website with appointment booking and patient portal integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: { bookings: "+95%", patients: "450+", rating: "4.6/5", timeline: "3 weeks" },
    color: "from-green-500 to-emerald-500",
    industry: "Healthcare"
  }
];

// Web development services
const webServices = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Custom Website Design",
    description: "Unique, responsive websites tailored to your brand and business goals.",
    features: ["Responsive Design", "Custom Layouts", "Brand Integration", "Mobile Optimization"],
    interactive: true,
    hoverColor: "hover:border-emerald-500"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description: "Modern, fast-loading websites built with the latest technologies.",
    features: ["React/Next.js", "TypeScript", "Performance Optimization", "SEO Ready"],
    interactive: true,
    hoverColor: "hover:border-blue-500"
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    interactive: true,
    hoverColor: "hover:border-purple-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Website Maintenance",
    description: "Ongoing support to keep your website secure and up-to-date.",
    features: ["Security Updates", "Content Updates", "Performance Monitoring", "24/7 Support"],
    interactive: true,
    hoverColor: "hover:border-orange-500"
  }
];

// Interactive tech stack
const techStack = [
  { name: "React", category: "Frontend", proficiency: 95, icon: "⚛️" },
  { name: "Next.js", category: "Framework", proficiency: 90, icon: "▲" },
  { name: "TypeScript", category: "Language", proficiency: 88, icon: "📘" },
  { name: "Tailwind CSS", category: "Styling", proficiency: 92, icon: "🎨" },
  { name: "Framer Motion", category: "Animation", proficiency: 85, icon: "🎭" },
  { name: "Figma", category: "Design", proficiency: 87, icon: "🎯" },
  { name: "Vercel", category: "Deployment", proficiency: 90, icon: "▲" },
  { name: "Git", category: "Version Control", proficiency: 93, icon: "🔧" }
];

// Interactive process with more details
const developmentProcess = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business goals and target audience",
    details: ["Business Analysis", "Competitor Research", "User Personas", "Project Roadmap"],
    duration: "1-2 weeks",
    icon: <Search className="w-6 h-6" />
  },
  {
    number: "02", 
    title: "Design & Wireframing",
    description: "Creating beautiful, user-centered designs",
    details: ["Wireframes", "Visual Design", "Interactive Prototypes", "Design Review"],
    duration: "2-3 weeks",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    number: "03",
    title: "Development & Testing", 
    description: "Building your website with modern technologies",
    details: ["Frontend Development", "Responsive Implementation", "Quality Testing", "Performance Optimization"],
    duration: "3-6 weeks",
    icon: <Code className="w-6 h-6" />
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Going live and providing ongoing support",
    details: ["Domain Setup", "SEO Configuration", "Analytics Setup", "Ongoing Maintenance"],
    duration: "Ongoing",
    icon: <Rocket className="w-6 h-6" />
  }
];

// Client testimonials with realistic ratings
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "EcoTech Solutions",
    content: "WebDrop transformed our online presence completely. The new website increased our lead generation by 180% and looks absolutely stunning.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    project: "Business Website",
    metric: "+180% Lead Generation"
  },
  {
    name: "James Rodriguez",
    role: "Founder",
    company: "Artisan Marketplace",
    content: "The e-commerce website they built for us is incredible. Sales increased by 220% in the first quarter after launch.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    project: "E-Commerce Platform",
    metric: "+220% Sales Growth"
  },
  {
    name: "Emily Chen",
    role: "Creative Director",
    company: "Studio Hub",
    content: "Working with WebDrop was amazing. They understood our vision perfectly and delivered a portfolio site that wows our clients.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    project: "Portfolio Website",
    metric: "+150% Client Inquiries"
  }
];

// Interactive FAQ
const faqs = [
  {
    question: "How long does a typical website project take?",
    answer: "Most websites take 3-8 weeks depending on complexity. Simple business sites take 3-4 weeks, while complex e-commerce or custom applications can take 6-8 weeks. We provide detailed timelines during our consultation."
  },
  {
    question: "What's included in your web development service?",
    answer: "Our service includes design consultation, custom development, responsive design, SEO optimization, content management system setup, 3 months of free support, and training on how to manage your site."
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Absolutely! We specialize in website redesigns to improve performance, user experience, and conversion rates. We can work with your existing content or help create new content."
  },
  {
    question: "How much does a website cost?",
    answer: "Websites typically range from $2,500 for simple business sites to $15,000+ for complex e-commerce platforms. We provide custom quotes based on your specific requirements and goals."
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer: "Yes! We offer maintenance packages starting at $199/month that include security updates, content updates, performance monitoring, and priority support."
  },
  {
    question: "Can you help with website hosting and domain setup?",
    answer: "Definitely! We handle all technical aspects including domain registration, hosting setup, SSL certificates, and email configuration. We use reliable hosting providers for optimal performance."
  }
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for small businesses",
    features: ["5-page website", "Responsive design", "Contact forms", "Basic SEO", "3 months support"],
    popular: false
  },
  {
    name: "Professional",
    price: "$4,500",
    description: "Great for growing businesses",
    features: ["10-page website", "Custom design", "CMS integration", "Advanced SEO", "6 months support", "Analytics setup"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$8,500+",
    description: "For complex requirements",
    features: ["Unlimited pages", "Custom functionality", "E-commerce ready", "Performance optimization", "12 months support", "Priority updates"],
    popular: false
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(showcaseProjects[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", website: "", message: "" });
    setIsSubmitting(false);
    alert("Thanks! We'll get back to you within 24 hours.");
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <div className="relative w-4 h-4">
            <Star className="w-4 h-4 text-gray-300 fill-current absolute" />
            <div className="overflow-hidden w-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300 fill-current" />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Interactive Elements */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Interactive floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-32 right-32 w-40 h-40 bg-emerald-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Interactive Hero Badge */}
            <Badge className="mb-8 px-6 py-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Web Development
            </Badge>

            {/* Hero Title with Interactive Hover */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight group">
              We Create
              <span className="text-gradient block hover:scale-105 transition-transform duration-300 cursor-default">
                Beautiful Websites
              </span>
              That Drive Results
            </h1>

            {/* Hero Description */}
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Custom web development solutions that convert visitors into customers. 
              From design to deployment, we build websites that grow your business.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="btn-glow px-8 py-6 text-lg group hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-glow px-8 py-6 text-lg group hover:scale-105 transition-all duration-300"
              >
                View Our Work
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group cursor-default">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">87+</div>
                <div className="text-sm text-muted-foreground">Websites Built</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">4.7</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Featured Project */}
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
              See how we helped {selectedProject.company || 'a client'} achieve amazing results with their new website.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="card-glow overflow-hidden hover:scale-[1.02] transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Interactive Project Preview */}
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <iframe
                      src={selectedProject.url}
                      className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-110"
                      title={selectedProject.title}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" className="bg-black/50 backdrop-blur-sm border-white/20 hover:scale-110 transition-transform">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info with Interactive Elements */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 hover:bg-primary/20 transition-colors cursor-default">{selectedProject.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-default">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Interactive Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-default group">
                        <div className="text-lg font-bold text-gradient group-hover:scale-110 transition-transform">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Built with</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Interactive Project Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              {showcaseProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    selectedProject.id === project.id 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Web Development Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Code2 className="w-4 h-4 mr-2" />
              Web Development Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Specialize In</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive web development services to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webServices.map((service, index) => (
              <Card 
                key={index} 
                className={`card-gradient hover-lift group cursor-pointer transition-all duration-500 ${service.hoverColor}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardContent className="p-8">
                  <div className={`text-primary mb-6 transition-all duration-300 ${
                    hoveredService === index ? 'scale-125 rotate-12' : 'group-hover:scale-110'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm transition-transform duration-200 hover:translate-x-2">
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

      {/* Interactive Development Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              Development Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven 4-step process ensures your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div 
                    className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 cursor-pointer hover:scale-110"
                    onClick={() => setExpandedProcess(expandedProcess === index ? null : index)}
                  >
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  {index < developmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-border ml-10"></div>
                  )}
                </div>
                
                <div 
                  className="cursor-pointer"
                  onClick={() => setExpandedProcess(expandedProcess === index ? null : index)}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-primary mr-2">{step.icon}</div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <Badge variant="secondary" className="mb-4">{step.duration}</Badge>
                </div>

                {/* Expandable Details */}
                {expandedProcess === index && (
                  <div className="mt-4 p-4 bg-card/50 rounded-lg animate-slide-up">
                    <h4 className="font-semibold mb-2 text-sm">What's Included:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Code2 className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Modern <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use cutting-edge tools and frameworks to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <Card 
                key={index} 
                className="card-gradient hover-lift text-center cursor-pointer group"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{tech.category}</p>
                  
                  {/* Interactive Proficiency Bar */}
                  {hoveredTech === index && (
                    <div className="mt-3 animate-slide-up">
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-primary font-semibold">{tech.proficiency}%</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Target className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the package that fits your needs. All packages include responsive design and basic SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`hover-lift transition-all duration-300 cursor-pointer ${
                  tier.popular 
                    ? 'card-glow ring-2 ring-primary scale-105' 
                    : 'card-gradient hover:scale-105'
                }`}
              >
                <CardContent className="p-8 text-center">
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gradient mb-2">{tier.price}</div>
                  <p className="text-muted-foreground mb-8">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'btn-glow' 
                        : 'btn-outline-glow'
                    } hover:scale-105 transition-transform`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Client Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from real clients who've seen real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="card-gradient hover-lift group cursor-pointer transition-all duration-500"
              >
                <CardContent className="p-8">
                  {/* Interactive Rating */}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-lg leading-relaxed mb-8 italic group-hover:text-primary/80 transition-colors">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Result:</span>
                      <span className="font-bold text-primary">{testimonial.metric}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Recent Projects
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse through our collection of successful web development projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-glow hover-lift group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <iframe
                    src={project.url}
                    className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-125"
                    title={project.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Badge className="bg-black/50 backdrop-blur-sm border-white/20 mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-white font-bold">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our web development process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="card-gradient hover:card-glow transition-all duration-300"
              >
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors group"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold pr-8 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-primary transition-all duration-300 flex-shrink-0 ${
                        expandedFaq === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                      }`} 
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 animate-slide-up">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Contact Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Send className="w-4 h-4 mr-2" />
              Start Your Project
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build Your <span className="text-gradient">Website?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss your project and create something amazing together.
            </p>
          </div>

          <Card className="card-glow hover:scale-[1.02] transition-all duration-500">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                      className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="website" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                    Current Website (if any)
                  </label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    placeholder="https://yourwebsite.com"
                    className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your project goals, timeline, budget, and any specific requirements..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-glow group hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-3"></div>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      Get Started Today
                      <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              {/* Interactive Contact Info */}
              <div className="mt-12 pt-8 border-t border-border grid md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center group cursor-default">
                  <Mail className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground mb-1">Email</span>
                  <span className="font-medium group-hover:text-primary transition-colors">hello@webdrop.dev</span>
                </div>
                <div className="flex flex-col items-center group cursor-default">
                  <Phone className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground mb-1">Phone</span>
                  <span className="font-medium group-hover:text-primary transition-colors">+1 (555) 123-4567</span>
                </div>
                <div className="flex flex-col items-center group cursor-default">
                  <Clock className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground mb-1">Response</span>
                  <span className="font-medium group-hover:text-primary transition-colors">Within 24 hours</span>
                </div>
                <div className="flex flex-col items-center group cursor-default">
                  <Calendar className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground mb-1">Consultation</span>
                  <span className="font-medium group-hover:text-primary transition-colors">Free 30min call</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Footer */}
      <footer className="py-16 border-t border-border bg-card/50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-emerald-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform">WebDrop</span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Building beautiful, functional websites that grow your business.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 WebDrop. All rights reserved. Made with ❤️ for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
