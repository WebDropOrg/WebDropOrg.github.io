import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { submitContactForm } from "@/lib/supabase";
import { showcaseProjects, getAllProjects } from "@/config/projects";
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
  Figma,
  Pause,
  RotateCcw,
  Maximize2,
  Volume2,
  VolumeX,
  RefreshCw,
  Minimize2,
  Move,
  Square,
  Circle,
  Triangle,
  Zap as ZapIcon,
  Lightbulb,
  Cpu,
  Wifi,
  Battery,
  Signal,
  Download,
  Upload,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  Filter,
  SortAsc,
  Grid3X3,
  List,
  Image as ImageIcon,
  Video,
  Music,
  FileCode,
  Folder,
  FolderOpen,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  MoreHorizontal,
  ChevronLeft,
  ChevronUp,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CornerDownRight,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart2,
  Server,
  Wrench,
  PaintBucket,
  Gauge,
  ShieldCheck,
  Headset,
} from "lucide-react";

// Updated web development services - focused on hosting, maintenance, redesign
const webServices = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Website Hosting",
    description:
      "Reliable, fast hosting solutions with 99.9% uptime guarantee and global CDN.",
    features: [
      "99.9% Uptime",
      "Global CDN",
      "SSL Certificates",
      "Daily Backups",
    ],
    interactive: true,
    hoverColor: "hover:border-emerald-500",
    tools: ["Vercel", "Netlify", "AWS", "Cloudflare"],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with regular updates and monitoring.",
    features: [
      "Security Updates",
      "Performance Monitoring",
      "Content Updates",
      "24/7 Support",
    ],
    interactive: true,
    hoverColor: "hover:border-blue-500",
    tools: ["Monitoring", "Analytics", "Security", "Backup"],
  },
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Website Redesign",
    description:
      "Modernize your existing website with fresh design and improved functionality.",
    features: [
      "Modern Design",
      "Mobile Optimization",
      "Speed Improvements",
      "SEO Enhancement",
    ],
    interactive: true,
    hoverColor: "hover:border-purple-500",
    tools: ["Figma", "React", "Next.js", "Tailwind"],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Custom Development",
    description:
      "Build new features and functionality for your existing website.",
    features: [
      "New Features",
      "API Integration",
      "Database Setup",
      "Custom Forms",
    ],
    interactive: true,
    hoverColor: "hover:border-orange-500",
    tools: ["React", "Next.js", "TypeScript", "Supabase"],
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance Optimization",
    description:
      "Speed up your website for better user experience and SEO rankings.",
    features: [
      "Speed Optimization",
      "Core Web Vitals",
      "Image Compression",
      "Code Minification",
    ],
    interactive: true,
    hoverColor: "hover:border-green-500",
    tools: ["Lighthouse", "GTmetrix", "WebPageTest", "ImageOptim"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Security & Backup",
    description:
      "Protect your website with security monitoring and automated backups.",
    features: [
      "Security Scanning",
      "Malware Protection",
      "Automated Backups",
      "SSL Management",
    ],
    interactive: true,
    hoverColor: "hover:border-red-500",
    tools: ["Security Plugins", "SSL", "Firewall", "Backup Services"],
  },
];

// Interactive tech stack with more details
const techStack = [
  {
    name: "React",
    category: "Frontend",
    proficiency: 95,
    icon: "⚛️",
    description: "Component-based UI library",
    experience: "5+ years",
  },
  {
    name: "Next.js",
    category: "Framework",
    proficiency: 90,
    icon: "▲",
    description: "Full-stack React framework",
    experience: "4+ years",
  },
  {
    name: "TypeScript",
    category: "Language",
    proficiency: 88,
    icon: "📘",
    description: "Type-safe JavaScript",
    experience: "4+ years",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    proficiency: 92,
    icon: "🎨",
    description: "Utility-first CSS framework",
    experience: "3+ years",
  },
  {
    name: "Vercel",
    category: "Hosting",
    proficiency: 90,
    icon: "▲",
    description: "Frontend cloud platform",
    experience: "3+ years",
  },
  {
    name: "Netlify",
    category: "Hosting",
    proficiency: 85,
    icon: "🌐",
    description: "JAMstack hosting platform",
    experience: "3+ years",
  },
  {
    name: "Supabase",
    category: "Backend",
    proficiency: 82,
    icon: "🗄️",
    description: "Open source Firebase",
    experience: "2+ years",
  },
  {
    name: "Figma",
    category: "Design",
    proficiency: 87,
    icon: "🎯",
    description: "Collaborative design tool",
    experience: "4+ years",
  },
];

// Updated development process with realistic timelines
const developmentProcess = [
  {
    number: "01",
    title: "Analysis & Planning",
    description: "We analyze your current website and plan improvements",
    details: [
      "Current Site Review",
      "Performance Audit",
      "User Experience Analysis",
      "Improvement Plan",
    ],
    duration: "1 day",
    icon: <Search className="w-6 h-6" />,
    deliverables: [
      "Site Audit Report",
      "Improvement Recommendations",
      "Timeline",
      "Cost Estimate",
    ],
  },
  {
    number: "02",
    title: "Design & Setup",
    description: "Create designs and set up development environment",
    details: [
      "Design Mockups",
      "Hosting Setup",
      "Development Environment",
      "Asset Preparation",
    ],
    duration: "1-2 days",
    icon: <PenTool className="w-6 h-6" />,
    deliverables: [
      "Design Previews",
      "Hosting Account",
      "Development Access",
      "Asset Library",
    ],
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Build or update your website with modern technologies",
    details: [
      "Frontend Development",
      "Content Migration",
      "Feature Implementation",
      "Quality Testing",
    ],
    duration: "2-3 days",
    icon: <Code className="w-6 h-6" />,
    deliverables: [
      "Updated Website",
      "Mobile Optimization",
      "Performance Testing",
      "Browser Testing",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Go live and provide ongoing support",
    details: [
      "Final Testing",
      "Domain Setup",
      "SSL Configuration",
      "Launch Support",
    ],
    duration: "1 day + ongoing",
    icon: <Rocket className="w-6 h-6" />,
    deliverables: [
      "Live Website",
      "SSL Certificate",
      "Analytics Setup",
      "Support Documentation",
    ],
  },
];

// Updated testimonials without result guarantees
const testimonials = [
  {
    name: "Sarah M.",
    role: "Business Owner",
    company: "Local Tech Company",
    content:
      "WebDrop helped us modernize our outdated website. The new design looks professional and loads much faster. Our customers love the improved experience.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    project: "Website Redesign",
    metric: "Faster Loading",
    location: "San Francisco, CA",
    industry: "Technology",
  },
  {
    name: "James R.",
    role: "Store Owner",
    company: "Online Marketplace",
    content:
      "The hosting service is reliable and the support team is very responsive. They helped us migrate from our old host without any downtime.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h-150&fit=crop&crop=face",
    project: "Website Hosting",
    metric: "Zero Downtime",
    location: "Austin, TX",
    industry: "E-Commerce",
  },
  {
    name: "Emily C.",
    role: "Creative Director",
    company: "Design Studio",
    content:
      "The maintenance service keeps our portfolio website running smoothly. Regular updates and monitoring give us peace of mind to focus on our clients.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    project: "Website Maintenance",
    metric: "Reliable Service",
    location: "New York, NY",
    industry: "Design Agency",
  },
  {
    name: "Dr. Michael P.",
    role: "Practice Owner",
    company: "Medical Clinic",
    content:
      "They redesigned our medical website with a focus on patient experience. The new appointment system is much easier for our patients to use.",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    project: "Medical Website",
    metric: "Better UX",
    location: "Chicago, IL",
    industry: "Healthcare",
  },
];

// Enhanced FAQ with categories
const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "How quickly can you complete a project?",
        answer:
          "Most projects are completed within 5 days or less. Simple updates can be done in 1-2 days, while complete redesigns typically take 3-5 days depending on complexity.",
      },
      {
        question: "What's included in your services?",
        answer:
          "Our services include hosting, maintenance, redesign, and custom development. We also provide SSL certificates, backups, security monitoring, and ongoing support.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "Do you work with existing websites?",
        answer:
          "Yes! We specialize in improving existing websites through redesigns, performance optimization, and adding new features. We can work with most website platforms.",
      },
      {
        question: "What hosting options do you provide?",
        answer:
          "We offer fast, reliable hosting with 99.9% uptime, global CDN, SSL certificates, and daily backups. Our hosting is optimized for performance and security.",
      },
    ],
  },
  {
    category: "Business",
    questions: [
      {
        question: "How much do your services cost?",
        answer:
          "Costs vary based on the scope of work. Hosting starts at $29/month, maintenance packages from $99/month, and redesign projects are quoted individually based on requirements.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes! We offer various support packages including maintenance, security monitoring, content updates, and technical support with response times under 24 hours.",
      },
    ],
  },
];

// New sections data
const whyChooseUs = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "Most projects completed in 5 days or less",
    stat: "< 5 days",
  },
  {
    icon: <Headset className="w-8 h-8" />,
    title: "Quick Support",
    description: "We respond to all inquiries within 24 hours",
    stat: "< 24 hours",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Reliable Hosting",
    description: "99.9% uptime with global CDN and SSL",
    stat: "99.9% uptime",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Modern Design",
    description: "Mobile-first, fast-loading websites",
    stat: "100% mobile",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Contact Us",
    description: "Tell us about your website needs",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    step: 2,
    title: "Get Quote",
    description: "Receive a detailed proposal in 24h",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    step: 3,
    title: "Start Work",
    description: "We begin working on your project",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    step: 4,
    title: "Go Live",
    description: "Launch your improved website",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(showcaseProjects[0]);
  const [projectAutoPlay, setProjectAutoPlay] = useState(true);
  const [previewMode, setPreviewMode] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isProjectPaused, setIsProjectPaused] = useState(false);
  const [previewScale, setPreviewScale] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState("General");
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );

  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const projectIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Get projects from config
  const projects = getAllProjects();

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Auto-rotate through projects
  useEffect(() => {
    if (projectAutoPlay && !isProjectPaused) {
      projectIntervalRef.current = setInterval(() => {
        setSelectedProject((prev) => {
          const currentIndex = projects.findIndex((p) => p.id === prev.id);
          const nextIndex = (currentIndex + 1) % projects.length;
          return projects[nextIndex];
        });
      }, 10000);
    }

    return () => {
      if (projectIntervalRef.current) {
        clearInterval(projectIntervalRef.current);
      }
    };
  }, [projectAutoPlay, isProjectPaused, projects]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
        <span className="ml-2 text-sm text-muted-foreground font-medium">
          {rating}
        </span>
      </div>
    );
  };

  const getPreviewWidth = () => {
    switch (previewMode) {
      case "mobile":
        return "w-80";
      case "tablet":
        return "w-96";
      default:
        return "w-full";
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating cursor follower */}
      <div
        className="fixed w-6 h-6 pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(2px)",
        }}
      />

      {/* Hero Section - SMALLER TEXT */}
      <section
        className="section-padding relative overflow-hidden min-h-screen flex items-center"
        data-animate
        id="hero"
      >
        <div className="absolute inset-0 grid-pattern opacity-10"></div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-primary/5 rounded-full blur-xl animate-float`}
              style={{
                width: `${Math.random() * 60 + 30}px`,
                height: `${Math.random() * 60 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Badge */}
            <div
              className={`mb-6 ${isVisible("hero") ? "animate-slide-up" : "opacity-0"}`}
            >
              <Badge className="px-6 py-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-500 cursor-default hover:scale-110">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Website Hosting • Maintenance • Redesign
                <TrendingUp className="w-4 h-4 ml-2" />
              </Badge>
            </div>

            {/* Hero Title - SMALLER */}
            <h1
              className={`text-4xl lg:text-6xl font-black mb-6 leading-tight ${isVisible("hero") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block hover:scale-105 transition-transform duration-500 cursor-default">
                Professional
              </span>
              <span className="text-gradient block hover:scale-110 transition-transform duration-500 cursor-default relative">
                Website Services
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </span>
              <span className="block hover:scale-105 transition-transform duration-500 cursor-default text-muted-foreground">
                In 5 Days or Less
              </span>
            </h1>

            {/* Hero Description - SMALLER */}
            <p
              className={`text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed ${isVisible("hero") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              Fast, reliable website hosting, maintenance, and redesign
              services.
              <span className="text-primary font-semibold">
                {" "}
                We keep your website running smoothly
              </span>{" "}
              while you focus on your business.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${isVisible("hero") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="btn-glow px-8 py-4 text-lg group hover:scale-110 transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-outline-glow px-8 py-4 text-lg group hover:scale-110 transition-all duration-500"
              >
                <span className="relative z-10">View Our Work</span>
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </Button>
            </div>

            {/* Stats - SMALLER */}
            <div
              className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto ${isVisible("hero") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.8s" }}
            >
              {[
                {
                  number: "47+",
                  label: "Websites Maintained",
                  icon: <Monitor className="w-6 h-6" />,
                },
                {
                  number: "4.7",
                  label: "Client Rating",
                  icon: <Star className="w-6 h-6" />,
                },
                {
                  number: "< 24h",
                  label: "Response Time",
                  icon: <Clock className="w-6 h-6" />,
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="bg-card/50 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:bg-primary/5">
                    <div className="text-primary mb-2 flex justify-center group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl lg:text-3xl font-black text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - NEW */}
      <section
        className="section-padding bg-secondary/20"
        data-animate
        id="why-choose"
      >
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("why-choose") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Target className="w-4 h-4 mr-2" />
              Why Choose WebDrop
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on what matters most: reliable service, fast delivery,
              and excellent support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className={`text-center hover-lift group ${isVisible("why-choose") ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {item.stat}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - NEW SECTION */}
      <section className="section-padding" data-animate id="how-it-works">
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("how-it-works") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your website improved in just 4 easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className={`text-center group ${isVisible("how-it-works") ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border"></div>
                  )}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Featured Project - Updated with config */}
      <section
        className="section-padding bg-secondary/20"
        data-animate
        id="featured"
      >
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("featured") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Play className="w-4 h-4 mr-2" />
              Recent Projects
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See examples of websites we've hosted, maintained, and redesigned
              for our clients.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Project Preview Controls */}
            <div
              className={`flex flex-wrap items-center justify-between mb-6 p-4 bg-card/50 rounded-xl border border-border/50 ${isVisible("featured") ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setProjectAutoPlay(!projectAutoPlay)}
                  className="hover:scale-110 transition-transform"
                >
                  {projectAutoPlay ? (
                    <Pause className="w-4 h-4 mr-2" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  {projectAutoPlay ? "Pause" : "Play"}
                </Button>
              </div>

              {/* Device Preview Toggle */}
              <div className="flex items-center space-x-2 bg-secondary/50 rounded-lg p-1">
                {[
                  {
                    mode: "desktop" as const,
                    icon: <Monitor className="w-4 h-4" />,
                    label: "Desktop",
                  },
                  {
                    mode: "tablet" as const,
                    icon: <Smartphone className="w-4 h-4 rotate-90" />,
                    label: "Tablet",
                  },
                  {
                    mode: "mobile" as const,
                    icon: <Smartphone className="w-4 h-4" />,
                    label: "Mobile",
                  },
                ].map(({ mode, icon, label }) => (
                  <Button
                    key={mode}
                    variant={previewMode === mode ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setPreviewMode(mode)}
                    className="hover:scale-110 transition-all"
                  >
                    {icon}
                    <span className="ml-1 hidden sm:inline text-xs">
                      {label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Project Display */}
            <Card
              className={`card-glow overflow-hidden hover:scale-[1.01] transition-all duration-1000 ${isVisible("featured") ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Preview */}
                <div className="lg:col-span-2 relative group">
                  <div className="relative">
                    <div
                      className={`mx-auto transition-all duration-500 ${getPreviewWidth()}`}
                      style={{ transform: `scale(${previewScale})` }}
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden rounded-lg border-2 border-border/50">
                        {/* Browser Chrome */}
                        <div className="bg-secondary/80 h-6 flex items-center px-3 border-b border-border/50">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 mx-3">
                            <div className="bg-background/50 rounded px-2 py-0.5 text-xs text-muted-foreground text-center">
                              {selectedProject.title
                                .toLowerCase()
                                .replace(/\s+/g, "")}
                              .com
                            </div>
                          </div>
                        </div>

                        {/* Website Content */}
                        <iframe
                          src={selectedProject.url}
                          className="w-full h-full border-0 transition-transform duration-700 group-hover:scale-105"
                          title={selectedProject.title}
                          loading="lazy"
                        />

                        {/* Feature Indicators */}
                        <div className="absolute top-8 right-3 space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          {selectedProject.previewFeatures.hasAnimations && (
                            <Badge className="bg-emerald-500/80 text-white text-xs">
                              <Activity className="w-3 h-3 mr-1" />
                              Smooth
                            </Badge>
                          )}
                          {selectedProject.previewFeatures.mobileOptimized && (
                            <Badge className="bg-purple-500/80 text-white text-xs">
                              <Smartphone className="w-3 h-3 mr-1" />
                              Mobile
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 lg:p-8 bg-gradient-to-br from-card to-secondary/30">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-3 hover:bg-primary/30 transition-colors cursor-default">
                        {selectedProject.industry}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-default">
                        {selectedProject.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(selectedProject.metrics).map(
                        ([key, value], index) => (
                          <div
                            key={index}
                            className="text-center p-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-default group"
                          >
                            <div className="text-lg font-bold text-gradient group-hover:scale-110 transition-transform duration-300">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize font-medium">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ),
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-110"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center group cursor-default text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="group-hover:text-primary transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Grid Navigation */}
            <div
              className={`mt-8 ${isVisible("featured") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                {projects.map((project, index) => (
                  <Card
                    key={project.id}
                    className={`cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden ${
                      selectedProject.id === project.id
                        ? "ring-2 ring-primary scale-105 bg-primary/10"
                        : "hover:bg-card/80"
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 pointer-events-none transition-transform duration-300 hover:scale-110"
                        title={project.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-1 left-1 right-1">
                        <Badge className="bg-black/70 text-white text-xs w-full justify-center backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                      {selectedProject.id === project.id && (
                        <div className="absolute top-1 right-1">
                          <CheckCircle className="w-5 h-5 text-primary bg-background rounded-full" />
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Web Services */}
      <section className="section-padding" data-animate id="services">
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("services") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Code2 className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive website services to keep your online presence
              running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((service, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-700 overflow-hidden ${
                  activeService === index
                    ? "scale-105 ring-2 ring-primary bg-primary/5"
                    : "hover:scale-105"
                } ${service.hoverColor} ${isVisible("services") ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardContent className="p-6 h-full relative">
                  <div className="relative z-10">
                    <div
                      className={`text-primary mb-6 transition-all duration-500 ${
                        activeService === index
                          ? "scale-125 rotate-12"
                          : "group-hover:scale-125"
                      }`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">INCLUDES</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center text-sm transition-all duration-300 hover:translate-x-1"
                            >
                              <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className={`transition-all duration-500 ${activeService === index ? "opacity-100" : "opacity-0 h-0"}`}
                      >
                        <h4 className="font-semibold mb-2 text-sm">TOOLS</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.tools.map((tool, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs hover:bg-primary/20 transition-colors"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Process Section */}
      <section
        className="section-padding bg-secondary/20"
        data-animate
        id="process"
      >
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("process") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Settings className="w-4 h-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures your project is completed quickly and
              efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="group">
                <Card
                  className={`cursor-pointer transition-all duration-700 h-full overflow-hidden ${
                    expandedProcess === index
                      ? "scale-105 ring-2 ring-primary bg-primary/5"
                      : "hover:scale-105"
                  } ${isVisible("process") ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() =>
                    setExpandedProcess(expandedProcess === index ? null : index)
                  }
                >
                  <CardContent className="p-6 text-center relative">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-primary/20 group-hover:border-primary/50">
                        <span className="text-xl font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mb-3">
                      <div className="text-primary mr-2 group-hover:scale-125 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    <Badge
                      variant="secondary"
                      className="mb-4 group-hover:bg-primary/20 transition-colors"
                    >
                      {step.duration}
                    </Badge>

                    {/* Expandable Details */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        expandedProcess === index
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-border/50 space-y-3">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">
                            DELIVERABLES
                          </h4>
                          <ul className="space-y-1 text-xs">
                            {step.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-primary mr-1 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-muted-foreground">
                      Click to{" "}
                      {expandedProcess === index ? "collapse" : "expand"}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Tech Stack */}
      <section className="section-padding" data-animate id="tech">
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("tech") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Cpu className="w-4 h-4 mr-2" />
              Technologies
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tools We <span className="text-gradient">Use</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern technologies and platforms for reliable, fast websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-700 overflow-hidden ${
                  hoveredTech === index
                    ? "scale-110 ring-2 ring-primary bg-primary/5"
                    : "hover:scale-110"
                } ${isVisible("tech") ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <CardContent className="p-4 text-center h-full relative">
                  <div className="relative z-10">
                    <div className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-500">
                      {tech.icon}
                    </div>

                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm">
                      {tech.name}
                    </h3>

                    <p className="text-xs text-muted-foreground mb-2">
                      {tech.category}
                    </p>

                    {/* Interactive Proficiency Bar */}
                    <div
                      className={`transition-all duration-700 ${hoveredTech === index ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="mb-2">
                        <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/60 h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width:
                                hoveredTech === index
                                  ? `${tech.proficiency}%`
                                  : "0%",
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-primary font-bold">
                          {tech.proficiency}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Testimonials */}
      <section
        className="section-padding bg-secondary/20"
        data-animate
        id="testimonials"
      >
        <div className="container-custom">
          <div
            className={`text-center mb-16 ${isVisible("testimonials") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              Client Feedback
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from clients who use our hosting, maintenance, and
              redesign services.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div
            className={`mb-12 ${isVisible("testimonials") ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Card className="card-glow max-w-3xl mx-auto overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="text-6xl text-primary/20 font-serif absolute top-2 left-4">
                  "
                </div>
                <div className="text-6xl text-primary/20 font-serif absolute bottom-2 right-4 rotate-180">
                  "
                </div>

                <div className="relative z-10">
                  <div className="mb-6">
                    {renderStars(testimonials[selectedTestimonial].rating)}
                  </div>

                  <blockquote className="text-lg leading-relaxed mb-6 italic font-light">
                    {testimonials[selectedTestimonial].content}
                  </blockquote>

                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={testimonials[selectedTestimonial].image}
                      alt={testimonials[selectedTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4 border-4 border-primary/20"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg">
                        {testimonials[selectedTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[selectedTestimonial].role}
                      </p>
                      <p className="text-primary font-semibold">
                        {testimonials[selectedTestimonial].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-semibold ml-2">
                        {testimonials[selectedTestimonial].project}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Result:</span>
                      <span className="font-bold text-primary ml-2">
                        {testimonials[selectedTestimonial].metric}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    selectedTestimonial === index
                      ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedTestimonial === index
                    ? "ring-2 ring-primary scale-105"
                    : "hover:scale-105"
                } ${isVisible("testimonials") ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                onClick={() => setSelectedTestimonial(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2">{renderStars(testimonial.rating)}</div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {testimonial.content}
                  </p>

                  <div className="mt-3 pt-3 border-t border-border/50">
                    <div className="text-xs">
                      <span className="text-muted-foreground">Result: </span>
                      <span className="font-bold text-primary">
                        {testimonial.metric}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated FAQ Section */}
      <section className="section-padding" data-animate id="faq">
        <div className="container-custom max-w-4xl">
          <div
            className={`text-center mb-16 ${isVisible("faq") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our services.
            </p>
          </div>

          {/* FAQ Categories */}
          <div
            className={`flex justify-center mb-8 ${isVisible("faq") ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex space-x-1 bg-card/50 p-1 rounded-lg border border-border/50">
              {faqCategories.map((category) => (
                <Button
                  key={category.category}
                  variant={
                    activeFaqCategory === category.category
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() => setActiveFaqCategory(category.category)}
                  className="hover:scale-105 transition-all duration-300"
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqCategories
              .find((cat) => cat.category === activeFaqCategory)
              ?.questions.map((faq, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden transition-all duration-500 hover:scale-[1.01] ${isVisible("faq") ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-all duration-300 group"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                    >
                      <h3 className="font-bold pr-6 group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-primary transition-all duration-300 flex-shrink-0 ${
                          expandedFaq === index
                            ? "rotate-180 scale-110"
                            : "group-hover:scale-110"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedFaq === index
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Updated Contact Section - NO PERSONAL DETAILS */}
      <section
        className="section-padding bg-secondary/20"
        data-animate
        id="contact"
      >
        <div className="container-custom max-w-5xl">
          <div
            className={`text-center mb-16 ${isVisible("contact") ? "animate-slide-up" : "opacity-0"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Send className="w-4 h-4 mr-2" />
              Get Started
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Improve Your{" "}
              <span className="text-gradient">Website?</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us about your needs and we'll get back to you within 24
              hours.
            </p>
          </div>

          <Card
            className={`card-glow overflow-hidden hover:scale-[1.01] transition-all duration-1000 ${isVisible("contact") ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Contact Form */}
              <div className="lg:col-span-2 p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2 group-hover:text-primary transition-colors"
                      >
                        NAME *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                        className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 group-hover:bg-secondary/70"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2 group-hover:text-primary transition-colors"
                      >
                        EMAIL *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                        className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 group-hover:bg-secondary/70"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold mb-2 group-hover:text-primary transition-colors"
                    >
                      CURRENT WEBSITE
                    </label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          website: e.target.value,
                        }))
                      }
                      placeholder="https://yourwebsite.com (optional)"
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 group-hover:bg-secondary/70"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 group-hover:text-primary transition-colors"
                    >
                      YOUR NEEDS *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Tell us what you need: hosting, maintenance, redesign, or custom development..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 resize-none group-hover:bg-secondary/70"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="flex items-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Thank you! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Sorry, there was an error. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-glow group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                </form>
              </div>

              {/* Contact Info - NO PERSONAL DETAILS */}
              <div className="bg-gradient-to-br from-primary/10 to-emerald-500/10 p-6 lg:p-8 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Let's Work Together
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ready to improve your website? We're here to help with
                      hosting, maintenance, and redesign services.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Clock className="w-6 h-6" />,
                        label: "Response Time",
                        value: "< 24 hours",
                        sublabel: "We reply quickly",
                      },
                      {
                        icon: <Target className="w-6 h-6" />,
                        label: "Delivery",
                        value: "5 days or less",
                        sublabel: "Fast turnaround",
                      },
                      {
                        icon: <ShieldCheck className="w-6 h-6" />,
                        label: "Reliability",
                        value: "99.9% uptime",
                        sublabel: "Dependable hosting",
                      },
                      {
                        icon: <Headset className="w-6 h-6" />,
                        label: "Support",
                        value: "Ongoing help",
                        sublabel: "We're always here",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 group cursor-default"
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold group-hover:text-primary transition-colors">
                            {item.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="text-xs text-muted-foreground/70">
                            {item.sublabel}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border/30">
                    <h4 className="font-bold mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {[
                        "Free consultation",
                        "Detailed proposal",
                        "Fast delivery",
                        "Ongoing support",
                      ].map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center group cursor-default"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="group-hover:text-primary transition-colors text-sm">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-card/30">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black text-gradient group-hover:scale-105 transition-transform duration-500">
                WebDrop
              </span>
            </div>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              Professional website hosting, maintenance, and redesign services
              for growing businesses.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 group"
                  aria-label={social.label}
                >
                  <div className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm">
                © 2024 WebDrop. All rights reserved.
                <span className="text-primary ml-2">
                  Built for businesses that want reliable websites.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
