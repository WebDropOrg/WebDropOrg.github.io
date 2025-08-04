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
  Cloud,
  Sparkles,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Send,
  ArrowUpRight,
  MousePointer,
  Cpu,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

// Premium project showcase with enhanced metadata
const premiumProjects = [
  {
    id: 1,
    title: "Nexus E-Commerce Platform",
    url: "https://react-storefront-kappa.vercel.app/",
    category: "E-Commerce",
    industry: "Retail Technology",
    description: "Revolutionary e-commerce platform featuring AI-powered recommendations, real-time inventory management, and advanced analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Stripe", "ML"],
    metrics: {
      conversion: "+340%",
      revenue: "$2.4M",
      users: "50K+",
      performance: "98/100"
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&crop=center",
    timeline: "8 weeks",
    team: "5 developers"
  },
  {
    id: 2,
    title: "Vertex Creative Studio",
    url: "https://bruno-simon.com/",
    category: "Portfolio",
    industry: "Creative Agency",
    description: "Immersive 3D portfolio experience with WebGL animations, showcasing cutting-edge creative work and interactive storytelling.",
    tech: ["Three.js", "React", "GSAP", "WebGL", "Blender", "GLSL"],
    metrics: {
      engagement: "+520%",
      inquiries: "800+",
      awards: "12",
      performance: "95/100"
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&crop=center",
    timeline: "12 weeks",
    team: "6 developers"
  },
  {
    id: 3,
    title: "Quantum SaaS Dashboard",
    url: "https://midday.ai/",
    category: "SaaS Platform",
    industry: "Business Intelligence",
    description: "Enterprise-grade analytics platform with real-time data visualization, predictive insights, and collaborative workspace features.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "D3.js", "Python"],
    metrics: {
      users: "25K+",
      dataPoints: "10M+",
      uptime: "99.9%",
      performance: "97/100"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
    timeline: "16 weeks",
    team: "8 developers"
  },
  {
    id: 4,
    title: "Zenith Marketing Hub",
    url: "https://www.awwwards.com/",
    category: "Agency Website",
    industry: "Digital Marketing",
    description: "Award-winning agency website featuring dynamic case studies, interactive client testimonials, and advanced lead generation system.",
    tech: ["Vue.js", "Nuxt", "Sanity CMS", "Netlify", "GSAP", "WebGL"],
    metrics: {
      leads: "+280%",
      conversion: "15.8%",
      awards: "8",
      performance: "96/100"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
    timeline: "10 weeks",
    team: "4 developers"
  },
  {
    id: 5,
    title: "MedFlow Healthcare Platform",
    url: "https://react-storefront-kappa.vercel.app/",
    category: "Healthcare",
    industry: "Medical Technology",
    description: "HIPAA-compliant telemedicine platform with AI diagnostics, patient management, and secure video consultations.",
    tech: ["React Native", "Firebase", "WebRTC", "AWS", "TensorFlow", "FHIR"],
    metrics: {
      consultations: "100K+",
      satisfaction: "4.9/5",
      compliance: "100%",
      performance: "94/100"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&crop=center",
    timeline: "20 weeks",
    team: "10 developers"
  },
  {
    id: 6,
    title: "Alpha Trading Terminal",
    url: "https://midday.ai/",
    category: "Fintech",
    industry: "Financial Services",
    description: "Real-time trading platform with advanced charting, algorithmic trading capabilities, and risk management tools.",
    tech: ["Angular", "D3.js", "Python", "Docker", "WebSocket", "ML"],
    metrics: {
      volume: "$100M+",
      latency: "<10ms",
      accuracy: "99.7%",
      performance: "99/100"
    },
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&crop=center",
    timeline: "24 weeks",
    team: "12 developers"
  }
];

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "Chief Technology Officer",
    company: "Nexus Retail",
    content: "WebDrop delivered beyond our wildest expectations. The e-commerce platform they built increased our revenue by 340% in just 6 months. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    project: "E-Commerce Platform",
    result: "+340% Revenue Growth"
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    company: "Vertex Studios",
    content: "The immersive 3D portfolio WebDrop created for us is a masterpiece. We've received 12 industry awards and our client inquiries increased by 520%. They're not just developers, they're digital artists.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    project: "3D Portfolio Website",
    result: "12 Industry Awards"
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    company: "MedFlow Health",
    content: "WebDrop's healthcare platform has revolutionized how we deliver patient care. With 100,000+ successful consultations and 99.9% uptime, they've proven themselves as the premier healthcare technology partner.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    project: "Healthcare Platform",
    result: "100K+ Consultations"
  }
];

const technologies = [
  { name: "React", icon: "⚛️", category: "Frontend", description: "Modern UI Framework" },
  { name: "Next.js", icon: "▲", category: "Framework", description: "Full-Stack React" },
  { name: "TypeScript", icon: "📘", category: "Language", description: "Type-Safe JavaScript" },
  { name: "Node.js", icon: "🟢", category: "Backend", description: "Server Runtime" },
  { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Relational Database" },
  { name: "MongoDB", icon: "🍃", category: "Database", description: "Document Database" },
  { name: "AWS", icon: "☁️", category: "Cloud", description: "Cloud Platform" },
  { name: "Docker", icon: "🐳", category: "DevOps", description: "Containerization" },
  { name: "Three.js", icon: "🎲", category: "3D", description: "WebGL Library" },
  { name: "TensorFlow", icon: "🧠", category: "AI/ML", description: "Machine Learning" },
  { name: "Redis", icon: "🔴", category: "Cache", description: "In-Memory Database" },
  { name: "GraphQL", icon: "🔺", category: "API", description: "Query Language" }
];

const processSteps = [
  {
    step: "01",
    title: "Strategic Discovery",
    description: "Deep-dive analysis of your business objectives, target audience, competitive landscape, and technical requirements to craft the perfect digital strategy.",
    icon: <Lightbulb className="w-10 h-10" />,
    duration: "1-2 weeks",
    deliverables: ["Market Analysis", "Technical Audit", "Strategy Document"]
  },
  {
    step: "02",
    title: "Premium Design",
    description: "Create stunning, conversion-optimized designs with advanced prototyping, user journey mapping, and comprehensive design systems.",
    icon: <Palette className="w-10 h-10" />,
    duration: "2-3 weeks",
    deliverables: ["Design System", "Interactive Prototypes", "User Testing"]
  },
  {
    step: "03",
    title: "Elite Development",
    description: "Build with cutting-edge technologies, rigorous testing, performance optimization, and enterprise-grade security implementations.",
    icon: <Code className="w-10 h-10" />,
    duration: "4-12 weeks",
    deliverables: ["MVP Development", "Quality Assurance", "Performance Testing"]
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Seamless deployment with monitoring, analytics setup, ongoing optimization, and dedicated support for continuous growth.",
    icon: <Rocket className="w-10 h-10" />,
    duration: "Ongoing",
    deliverables: ["Deployment", "Analytics Setup", "Continuous Support"]
  }
];

const services = [
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for maximum performance and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Hardening"]
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Push Notifications", "Offline Support"]
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Backend Systems",
    description: "Scalable server architectures, APIs, and database solutions designed for high-performance and reliability.",
    features: ["API Development", "Database Design", "Cloud Architecture", "Microservices"]
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure, DevOps implementation, and continuous deployment pipelines.",
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Auto Scaling", "Monitoring"]
  }
];

const faqs = [
  {
    question: "What makes WebDrop different from other development agencies?",
    answer: "We combine cutting-edge technology with business strategy to deliver measurable results. Our projects consistently achieve 200-500% improvements in key metrics like conversion rates, user engagement, and revenue growth."
  },
  {
    question: "How do you ensure project success and timeline adherence?",
    answer: "We use agile methodologies with weekly sprints, continuous client communication, and milestone-based delivery. Our average project completion rate is 98% on-time with 100% client satisfaction."
  },
  {
    question: "What level of ongoing support do you provide?",
    answer: "We offer comprehensive support packages including 24/7 monitoring, security updates, performance optimization, feature enhancements, and dedicated technical support with guaranteed response times."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely. We're experts in integrating with existing systems, whether it's legacy databases, third-party APIs, or enterprise software. We ensure seamless transitions and minimal disruption."
  },
  {
    question: "What's your approach to mobile-first and accessibility?",
    answer: "Every project is built mobile-first with responsive design principles. We follow WCAG 2.1 AA standards for accessibility and conduct thorough testing across all devices and browsers."
  },
  {
    question: "How do you handle data security and compliance?",
    answer: "Security is paramount in everything we build. We implement enterprise-grade security measures, conduct regular audits, and ensure compliance with regulations like GDPR, HIPAA, and SOC 2."
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(premiumProjects[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
    budget: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % premiumProjects.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedProject(premiumProjects[currentProjectIndex]);
  }, [currentProjectIndex]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Premium inquiry submitted:", formData);
    setFormData({ name: "", email: "", company: "", requirements: "", budget: "", timeline: "" });
    setIsSubmitting(false);
    alert("Thank you for your inquiry! Our team will contact you within 24 hours.");
  };

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "24/7", label: "Elite Support", icon: <Shield className="w-8 h-8" /> },
    { number: "350%", label: "Avg ROI Increase", icon: <TrendingUp className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Badge className="mb-8 px-6 py-3 text-sm font-medium glass-strong">
              <Sparkles className="w-4 h-4 mr-2" />
              Elite Web Development Agency
            </Badge>
          </div>

          {/* Hero Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight">
              <span className="block">
                <span className="gradient-text">WebDrop</span>
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl mt-4 text-foreground/90">
                Where Vision Meets
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl gradient-text">
                Digital Excellence
              </span>
            </h1>
          </div>

          {/* Hero Subtitle */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              We craft extraordinary digital experiences that drive exponential business growth. 
              From concept to conversion, we deliver results that exceed expectations.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="magnetic-btn px-12 py-6 text-lg font-semibold">
              Start Your Project
              <ArrowUpRight className="w-6 h-6 ml-3" />
            </Button>
            <Button size="lg" variant="outline" className="glass px-12 py-6 text-lg font-semibold hover-glow">
              View Portfolio
              <Eye className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Premium Stats */}
          <div className="animate-slide-up grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto" style={{ animationDelay: '1s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="premium-card p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-32 relative"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.services ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <Target className="w-4 h-4 mr-2" />
              Our Expertise
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Premium</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End-to-end digital solutions engineered for performance, scalability, and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`premium-card p-8 hover-tilt spotlight ${isVisible.services ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process" 
        className="py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.process ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <Settings className="w-4 h-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Proven</span> Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A systematic approach that consistently delivers exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className={`premium-card p-8 h-full spotlight ${isVisible.process ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-6xl font-black gradient-text mb-6 opacity-50">{step.step}</div>
                  <div className="text-primary mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">{step.duration}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-muted-foreground">DELIVERABLES</div>
                      {step.deliverables.map((deliverable, i) => (
                        <div key={i} className="text-xs flex items-center">
                          <CheckCircle className="w-3 h-3 text-primary mr-2" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section 
        id="portfolio" 
        className="py-32"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.portfolio ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <Award className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Elite</span> Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real results from real clients. Each project represents breakthrough performance and exceptional outcomes.
            </p>
          </div>

          {/* Featured Project Display */}
          <div className={`mb-16 ${isVisible.portfolio ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="premium-card overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Preview */}
                <div className="lg:col-span-2 relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                    <iframe
                      src={selectedProject.url}
                      className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-105"
                      title={selectedProject.title}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-6 right-6">
                      <Button size="sm" className="glass-strong">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Project
                      </Button>
                    </div>
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="glass-strong">{selectedProject.category}</Badge>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-white/5 to-white/10">
                  <Badge className="mb-4">{selectedProject.industry}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-4 glass rounded-lg">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-sm tracking-wide">TECHNOLOGY STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{selectedProject.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Team Size:</span>
                      <span className="font-medium">{selectedProject.team}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumProjects.map((project, index) => (
              <div
                key={project.id}
                className={`premium-card cursor-pointer hover-lift spotlight group ${
                  selectedProject.id === project.id ? 'ring-2 ring-primary' : ''
                } ${isVisible.portfolio ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentProjectIndex(index);
                }}
              >
                <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
                  <iframe
                    src={project.url}
                    className="w-full h-full border-0 pointer-events-none transition-transform duration-300 group-hover:scale-110"
                    title={project.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="glass-strong">
                      <Play className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                  {selectedProject.id === project.id && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <span className="text-xs text-muted-foreground">{project.timeline}</span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-primary">
                      {Object.values(project.metrics)[0]} improvement
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section 
        id="technology" 
        className="py-32 bg-gradient-to-b from-primary/5 to-transparent"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.technology ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <Cpu className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Cutting-Edge</span> Tech
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We leverage the most advanced technologies to build fast, secure, and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`premium-card p-6 text-center hover-lift group ${isVisible.technology ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">{tech.category}</p>
                <p className="text-xs text-muted-foreground/70">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section 
        id="testimonials" 
        className="py-32"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.testimonials ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <Heart className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Exceptional</span> Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what industry leaders say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`premium-card p-8 hover-lift ${isVisible.testimonials ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Project:</span>
                    <span className="font-medium">{testimonial.project}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-muted-foreground">Result:</span>
                    <span className="font-bold text-primary">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq" 
        className="py-32 bg-gradient-to-b from-transparent to-primary/5"
        data-animate
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.faq ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <MessageCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Expert</span> Answers
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get clarity on our processes, technologies, and what makes us the premier choice.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`premium-card overflow-hidden ${isVisible.faq ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-bold text-lg pr-8 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 animate-slide-up">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section 
        id="contact" 
        className="py-32"
        data-animate
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 glass">
              <Send className="w-4 h-4 mr-2" />
              Start Your Project
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Ready for <span className="gradient-text">Excellence?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss your vision and create something extraordinary together. 
              Our team is ready to deliver results that exceed your expectations.
            </p>
          </div>

          <div className={`glass-strong rounded-2xl overflow-hidden ${isVisible.contact ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Contact Form */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 tracking-wide">
                        FULL NAME
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        required
                        className="glass h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 tracking-wide">
                        EMAIL ADDRESS
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@company.com"
                        required
                        className="glass h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-3 tracking-wide">
                        COMPANY
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Your company name"
                        className="glass h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold mb-3 tracking-wide">
                        BUDGET RANGE
                      </label>
                      <Input
                        id="budget"
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                        placeholder="$10k - $50k"
                        className="glass h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold mb-3 tracking-wide">
                      PROJECT TIMELINE
                    </label>
                    <Input
                      id="timeline"
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                      placeholder="When do you need this completed?"
                      className="glass h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-semibold mb-3 tracking-wide">
                      PROJECT REQUIREMENTS
                    </label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                      placeholder="Tell us about your project vision, key features, target audience, and any specific requirements..."
                      rows={6}
                      required
                      className="glass resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full magnetic-btn py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-3"></div>
                        Processing Your Request...
                      </>
                    ) : (
                      <>
                        Start Your Project
                        <Send className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ready to transform your business with cutting-edge web solutions? 
                      Our expert team is standing by to bring your vision to life.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-muted-foreground">hello@webdrop.dev</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Global Reach</div>
                        <div className="text-muted-foreground">Remote & Worldwide</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <div className="text-sm text-muted-foreground mb-4">Response Time</div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Within 4 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-20 border-t border-white/10 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-400 rounded-2xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <span className="text-4xl font-black gradient-text">WebDrop</span>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting extraordinary digital experiences for forward-thinking businesses worldwide.
            </p>

            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-muted-foreground">
              <span className="font-semibold">5.0</span> rating from <span className="font-semibold">500+</span> satisfied clients
            </p>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground">
                © 2024 WebDrop. All rights reserved. Excellence delivered worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
