import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { submitContactForm } from "@/lib/supabase";
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
  BarChart2
} from "lucide-react";

// Enhanced project showcase with more interactivity
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
    industry: "Technology",
    features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Analytics Integration"],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
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
    industry: "E-Commerce",
    features: ["Payment Integration", "Inventory Management", "User Accounts", "Product Search"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
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
    industry: "Design Agency",
    features: ["3D Elements", "Portfolio Gallery", "Case Studies", "Contact Integration"],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
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
    industry: "Healthcare",
    features: ["Appointment Booking", "Patient Portal", "HIPAA Compliant", "Secure Forms"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: false,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 5,
    title: "TechFlow Startup",
    category: "Startup Website",
    url: "https://vercel.com/",
    description: "Cutting-edge startup website with investor pitch sections and product demos.",
    tech: ["Next.js", "TypeScript", "Prisma", "Vercel"],
    metrics: { funding: "$2.5M", users: "1.8K+", rating: "4.8/5", timeline: "7 weeks" },
    color: "from-purple-500 to-pink-500",
    industry: "Technology",
    features: ["Investor Portal", "Product Demos", "Team Profiles", "Blog Integration"],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 6,
    title: "FoodieDelight Restaurant",
    category: "Restaurant Website",
    url: "https://www.figma.com/",
    description: "Restaurant website with online ordering, menu management, and reservation system.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    metrics: { orders: "+300%", reservations: "890+", rating: "4.7/5", timeline: "5 weeks" },
    color: "from-orange-500 to-red-500",
    industry: "Restaurant",
    features: ["Online Ordering", "Menu Management", "Reservations", "Customer Reviews"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
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
    hoverColor: "hover:border-emerald-500",
    tools: ["Figma", "Adobe XD", "Sketch", "Webflow"]
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description: "Modern, fast-loading websites built with the latest technologies.",
    features: ["React/Next.js", "TypeScript", "Performance Optimization", "SEO Ready"],
    interactive: true,
    hoverColor: "hover:border-blue-500",
    tools: ["React", "Next.js", "Vue.js", "Angular"]
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    interactive: true,
    hoverColor: "hover:border-purple-500",
    tools: ["Figma", "Principle", "InVision", "Miro"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Website Maintenance",
    description: "Ongoing support to keep your website secure and up-to-date.",
    features: ["Security Updates", "Content Updates", "Performance Monitoring", "24/7 Support"],
    interactive: true,
    hoverColor: "hover:border-orange-500",
    tools: ["Monitoring", "Analytics", "Security", "Backup"]
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Speed up your website for better user experience and SEO rankings.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Setup"],
    interactive: true,
    hoverColor: "hover:border-green-500",
    tools: ["Lighthouse", "GTmetrix", "Cloudflare", "Webpack"]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and organic traffic.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Analytics Setup"],
    interactive: true,
    hoverColor: "hover:border-yellow-500",
    tools: ["Google Analytics", "Search Console", "Semrush", "Ahrefs"]
  }
];

// Interactive tech stack with more details
const techStack = [
  { name: "React", category: "Frontend", proficiency: 95, icon: "⚛️", description: "Component-based UI library", experience: "5+ years" },
  { name: "Next.js", category: "Framework", proficiency: 90, icon: "▲", description: "Full-stack React framework", experience: "4+ years" },
  { name: "TypeScript", category: "Language", proficiency: 88, icon: "📘", description: "Type-safe JavaScript", experience: "4+ years" },
  { name: "Tailwind CSS", category: "Styling", proficiency: 92, icon: "🎨", description: "Utility-first CSS framework", experience: "3+ years" },
  { name: "Framer Motion", category: "Animation", proficiency: 85, icon: "🎭", description: "Production-ready animations", experience: "3+ years" },
  { name: "Figma", category: "Design", proficiency: 87, icon: "🎯", description: "Collaborative design tool", experience: "4+ years" },
  { name: "Vercel", category: "Deployment", proficiency: 90, icon: "▲", description: "Frontend cloud platform", experience: "3+ years" },
  { name: "Git", category: "Version Control", proficiency: 93, icon: "🔧", description: "Version control system", experience: "6+ years" },
  { name: "Supabase", category: "Backend", proficiency: 82, icon: "🗄️", description: "Open source Firebase", experience: "2+ years" },
  { name: "Stripe", category: "Payments", proficiency: 80, icon: "💳", description: "Payment processing", experience: "3+ years" },
  { name: "Three.js", category: "3D", proficiency: 75, icon: "🎲", description: "3D graphics library", experience: "2+ years" },
  { name: "GSAP", category: "Animation", proficiency: 83, icon: "🌟", description: "Animation library", experience: "3+ years" }
];

// Enhanced development process
const developmentProcess = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business goals and target audience",
    details: ["Business Analysis", "Competitor Research", "User Personas", "Project Roadmap"],
    duration: "1-2 weeks",
    icon: <Search className="w-6 h-6" />,
    deliverables: ["Project Brief", "Technical Specification", "Timeline", "Wireframes"]
  },
  {
    number: "02", 
    title: "Design & Prototyping",
    description: "Creating beautiful, user-centered designs",
    details: ["Visual Design", "Interactive Prototypes", "Design System", "User Testing"],
    duration: "2-3 weeks",
    icon: <PenTool className="w-6 h-6" />,
    deliverables: ["Design Mockups", "Interactive Prototype", "Style Guide", "Component Library"]
  },
  {
    number: "03",
    title: "Development & Integration", 
    description: "Building your website with modern technologies",
    details: ["Frontend Development", "Backend Integration", "Testing", "Performance Optimization"],
    duration: "3-6 weeks",
    icon: <Code className="w-6 h-6" />,
    deliverables: ["Functional Website", "Admin Dashboard", "Quality Assurance", "Documentation"]
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description: "Going live and continuous improvement",
    details: ["Domain Setup", "SEO Configuration", "Analytics Setup", "Performance Monitoring"],
    duration: "Ongoing",
    icon: <Rocket className="w-6 h-6" />,
    deliverables: ["Live Website", "Analytics Dashboard", "SEO Report", "Maintenance Plan"]
  }
];

// Client testimonials with more details
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "EcoTech Solutions",
    content: "WebDrop transformed our online presence completely. The new website increased our lead generation by 180% and looks absolutely stunning. The team was professional and delivered exactly what we needed.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    project: "Business Website",
    metric: "+180% Lead Generation",
    location: "San Francisco, CA",
    industry: "Technology"
  },
  {
    name: "James Rodriguez",
    role: "Founder",
    company: "Artisan Marketplace",
    content: "The e-commerce website they built for us is incredible. Sales increased by 220% in the first quarter after launch. The attention to detail and user experience is outstanding.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    project: "E-Commerce Platform",
    metric: "+220% Sales Growth",
    location: "Austin, TX",
    industry: "E-Commerce"
  },
  {
    name: "Emily Chen",
    role: "Creative Director",
    company: "Studio Hub",
    content: "Working with WebDrop was amazing. They understood our vision perfectly and delivered a portfolio site that wows our clients. The interactive elements are next-level.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    project: "Portfolio Website",
    metric: "+150% Client Inquiries",
    location: "New York, NY",
    industry: "Design Agency"
  },
  {
    name: "Dr. Michael Park",
    role: "Practice Owner",
    company: "HealthFirst Clinic",
    content: "The medical website WebDrop created for us has streamlined our patient booking process. We've seen a 95% increase in online appointments and our patients love the new system.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    project: "Medical Website",
    metric: "+95% Online Bookings",
    location: "Chicago, IL",
    industry: "Healthcare"
  }
];

// Interactive FAQ with categories
const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "How long does a typical website project take?",
        answer: "Most websites take 3-8 weeks depending on complexity. Simple business sites take 3-4 weeks, while complex e-commerce or custom applications can take 6-8 weeks. We provide detailed timelines during our consultation."
      },
      {
        question: "What's included in your web development service?",
        answer: "Our service includes design consultation, custom development, responsive design, SEO optimization, content management system setup, 3 months of free support, and training on how to manage your site."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What technologies do you use?",
        answer: "We primarily use React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend, we use Node.js, Supabase, or other modern solutions depending on your needs."
      },
      {
        question: "Do you build mobile-responsive websites?",
        answer: "Absolutely! All our websites are built mobile-first and are fully responsive across all devices. We test on various screen sizes to ensure perfect functionality."
      }
    ]
  },
  {
    category: "Business",
    questions: [
      {
        question: "How much does a website cost?",
        answer: "Project costs vary based on complexity and requirements. Simple business sites start around $3,000, while complex e-commerce platforms can be $10,000+. We provide custom quotes after understanding your specific needs."
      },
      {
        question: "Do you provide ongoing website maintenance?",
        answer: "Yes! We offer maintenance packages starting at $199/month that include security updates, content updates, performance monitoring, and priority support."
      }
    ]
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(showcaseProjects[0]);
  const [projectAutoPlay, setProjectAutoPlay] = useState(true);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isProjectPaused, setIsProjectPaused] = useState(false);
  const [previewScale, setPreviewScale] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState("General");
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const projectIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
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
    if (projectAutoPlay && !isProjectPaused) {
      projectIntervalRef.current = setInterval(() => {
        setSelectedProject(prev => {
          const currentIndex = showcaseProjects.findIndex(p => p.id === prev.id);
          const nextIndex = (currentIndex + 1) % showcaseProjects.length;
          return showcaseProjects[nextIndex];
        });
      }, 10000);
    }

    return () => {
      if (projectIntervalRef.current) {
        clearInterval(projectIntervalRef.current);
      }
    };
  }, [projectAutoPlay, isProjectPaused]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
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
        <span className="ml-2 text-sm text-muted-foreground font-medium">{rating}</span>
      </div>
    );
  };

  const getPreviewWidth = () => {
    switch (previewMode) {
      case 'mobile': return 'w-80';
      case 'tablet': return 'w-96';
      default: return 'w-full';
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating cursor follower */}
      <div 
        className="fixed w-8 h-8 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(4px)'
        }}
      />

      {/* Enhanced Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-screen flex items-center" data-animate id="hero">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        {/* Advanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-primary/5 rounded-full blur-xl animate-float`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Interactive Hero Badge */}
            <div className={`mb-8 ${isVisible('hero') ? 'animate-slide-up' : 'opacity-0'}`}>
              <Badge className="px-8 py-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-500 cursor-default hover:scale-110 text-lg">
                <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
                Award-Winning Web Development
                <TrendingUp className="w-5 h-5 ml-3" />
              </Badge>
            </div>

            {/* Enhanced Hero Title */}
            <h1 className={`text-6xl lg:text-8xl font-black mb-8 leading-tight ${isVisible('hero') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="block hover:scale-105 transition-transform duration-500 cursor-default">
                We Craft
              </span>
              <span className="text-gradient block hover:scale-110 transition-transform duration-500 cursor-default relative">
                Digital Experiences
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </span>
              <span className="block hover:scale-105 transition-transform duration-500 cursor-default text-muted-foreground">
                That Convert
              </span>
            </h1>

            {/* Enhanced Hero Description */}
            <p className={`text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${isVisible('hero') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              From concept to conversion, we build websites that don't just look amazing—
              <span className="text-primary font-semibold"> they deliver real business results</span>.
            </p>

            {/* Interactive CTAs with enhanced effects */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 ${isVisible('hero') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="btn-glow px-12 py-8 text-xl group hover:scale-110 transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-glow px-12 py-8 text-xl group hover:scale-110 transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Our Work</span>
                <Eye className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>

            {/* Enhanced Interactive Stats */}
            <div className={`grid grid-cols-3 gap-12 max-w-3xl mx-auto ${isVisible('hero') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              {[
                { number: "87+", label: "Websites Built", icon: <Monitor className="w-8 h-8" /> },
                { number: "4.7", label: "Client Rating", icon: <Star className="w-8 h-8" /> },
                { number: "24h", label: "Response Time", icon: <Clock className="w-8 h-8" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="bg-card/50 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:bg-primary/5">
                    <div className="text-primary mb-3 flex justify-center group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl lg:text-5xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Interactive Featured Project */}
      <section className="section-padding bg-secondary/20" data-animate id="featured">
        <div className="container-custom">
          <div className={`text-center mb-20 ${isVisible('featured') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <Play className="w-5 h-5 mr-3" />
              Featured Project Showcase
              <Zap className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              Interactive <span className="text-gradient">Preview</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience our work firsthand with live, interactive project previews.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Project Preview Controls */}
            <div className={`flex flex-wrap items-center justify-between mb-8 p-6 bg-card/50 rounded-2xl border border-border/50 ${isVisible('featured') ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setProjectAutoPlay(!projectAutoPlay)}
                  className="hover:scale-110 transition-transform"
                >
                  {projectAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {projectAutoPlay ? 'Pause' : 'Play'} Auto
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsProjectPaused(!isProjectPaused)}
                  className="hover:scale-110 transition-transform"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>

              {/* Device Preview Toggle */}
              <div className="flex items-center space-x-2 bg-secondary/50 rounded-lg p-2">
                {[
                  { mode: 'desktop' as const, icon: <Monitor className="w-4 h-4" />, label: 'Desktop' },
                  { mode: 'tablet' as const, icon: <Smartphone className="w-4 h-4 rotate-90" />, label: 'Tablet' },
                  { mode: 'mobile' as const, icon: <Smartphone className="w-4 h-4" />, label: 'Mobile' }
                ].map(({ mode, icon, label }) => (
                  <Button
                    key={mode}
                    variant={previewMode === mode ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setPreviewMode(mode)}
                    className="hover:scale-110 transition-all"
                  >
                    {icon}
                    <span className="ml-2 hidden sm:inline">{label}</span>
                  </Button>
                ))}
              </div>

              {/* Preview Scale Control */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewScale(Math.max(0.5, previewScale - 0.1))}
                  className="hover:scale-110 transition-transform"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium min-w-[4rem] text-center">
                  {Math.round(previewScale * 100)}%
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewScale(Math.min(1.5, previewScale + 0.1))}
                  className="hover:scale-110 transition-transform"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Enhanced Project Display */}
            <Card className={`card-glow overflow-hidden hover:scale-[1.01] transition-all duration-1000 ${isVisible('featured') ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Advanced Project Preview */}
                <div className="lg:col-span-3 relative group">
                  <div className="relative">
                    {/* Preview Frame */}
                    <div className={`mx-auto transition-all duration-500 ${getPreviewWidth()}`} style={{ transform: `scale(${previewScale})` }}>
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden rounded-lg border-4 border-border/50">
                        {/* Browser Chrome */}
                        <div className="bg-secondary/80 h-8 flex items-center px-4 border-b border-border/50">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground">
                              {selectedProject.title.toLowerCase().replace(/\s+/g, '')}.com
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <RefreshCw className="w-3 h-3 text-muted-foreground" />
                            <Share2 className="w-3 h-3 text-muted-foreground" />
                          </div>
                        </div>

                        {/* Website Content */}
                        <iframe
                          src={selectedProject.url}
                          className="w-full h-full border-0 transition-transform duration-700 group-hover:scale-105"
                          title={selectedProject.title}
                          loading="lazy"
                        />

                        {/* Interactive Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <Badge className="bg-black/60 backdrop-blur-sm border-white/20">
                                {selectedProject.category}
                              </Badge>
                              <div className="flex space-x-2">
                                <Button size="sm" className="bg-black/60 backdrop-blur-sm border-white/20 hover:scale-110 transition-transform">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Visit Live
                                </Button>
                                <Button size="sm" variant="outline" className="bg-black/60 backdrop-blur-sm border-white/20 hover:scale-110 transition-transform">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Feature Indicators */}
                        <div className="absolute top-12 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          {selectedProject.previewFeatures.hasAnimations && (
                            <Badge className="bg-emerald-500/80 text-white text-xs">
                              <Activity className="w-3 h-3 mr-1" />
                              Animations
                            </Badge>
                          )}
                          {selectedProject.previewFeatures.hasVideo && (
                            <Badge className="bg-blue-500/80 text-white text-xs">
                              <Video className="w-3 h-3 mr-1" />
                              Video
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

                {/* Enhanced Project Details */}
                <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-card to-secondary/30">
                  <div className="space-y-6">
                    <div>
                      <Badge className="mb-4 hover:bg-primary/30 transition-colors cursor-default text-base px-4 py-2">
                        {selectedProject.industry}
                      </Badge>
                      <h3 className="text-4xl font-black mb-4 hover:text-primary transition-colors cursor-default">
                        {selectedProject.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Interactive Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                        <div key={index} className="text-center p-4 bg-background/50 rounded-xl hover:bg-primary/10 transition-all duration-300 cursor-default group">
                          <div className="text-2xl font-black text-gradient group-hover:scale-125 transition-transform duration-300">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize font-medium">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold mb-4 text-lg">Built With</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="px-3 py-2 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-110"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Features */}
                    <div>
                      <h4 className="font-bold mb-4 text-lg">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-center group cursor-default">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="group-hover:text-primary transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Enhanced Project Grid Navigation */}
            <div className={`mt-12 ${isVisible('featured') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                {showcaseProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className={`cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden ${
                      selectedProject.id === project.id 
                        ? 'ring-2 ring-primary scale-105 bg-primary/10' 
                        : 'hover:bg-card/80'
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
                      <div className="absolute bottom-2 left-2 right-2">
                        <Badge className="bg-black/70 text-white text-xs w-full justify-center backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                      {selectedProject.id === project.id && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="w-6 h-6 text-primary bg-background rounded-full" />
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

      {/* Enhanced Web Development Services */}
      <section className="section-padding" data-animate id="services">
        <div className="container-custom">
          <div className={`text-center mb-20 ${isVisible('services') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <Code2 className="w-5 h-5 mr-3" />
              Our Expertise
              <Rocket className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              Web Development <span className="text-gradient">Mastery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development services designed to elevate your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-700 overflow-hidden ${
                  activeService === index 
                    ? 'scale-105 ring-2 ring-primary bg-primary/5' 
                    : 'hover:scale-105'
                } ${service.hoverColor} ${isVisible('services') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardContent className="p-8 h-full relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <div className="grid-pattern h-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`text-primary mb-8 transition-all duration-500 ${
                      activeService === index ? 'scale-125 rotate-12' : 'group-hover:scale-125'
                    }`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm tracking-wide">KEY FEATURES</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm transition-all duration-300 hover:translate-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`transition-all duration-500 ${activeService === index ? 'opacity-100' : 'opacity-0 h-0'}`}>
                        <h4 className="font-semibold mb-3 text-sm tracking-wide">TOOLS WE USE</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool, i) => (
                            <Badge key={i} variant="outline" className="text-xs hover:bg-primary/20 transition-colors">
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

      {/* Interactive Development Process */}
      <section className="section-padding bg-secondary/20" data-animate id="process">
        <div className="container-custom">
          <div className={`text-center mb-20 ${isVisible('process') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <Settings className="w-5 h-5 mr-3" />
              Development Process
              <ArrowRight className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="group">
                <Card 
                  className={`cursor-pointer transition-all duration-700 h-full overflow-hidden ${
                    expandedProcess === index 
                      ? 'scale-105 ring-2 ring-primary bg-primary/5' 
                      : 'hover:scale-105'
                  } ${isVisible('process') ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => setExpandedProcess(expandedProcess === index ? null : index)}
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Step Connection Line */}
                    {index < developmentProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-primary to-transparent z-10"></div>
                    )}

                    <div className="relative mb-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-primary/20 group-hover:border-primary/50">
                        <span className="text-3xl font-black text-primary">{step.number}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-primary mr-3 group-hover:scale-125 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <Badge variant="secondary" className="mb-6 group-hover:bg-primary/20 transition-colors">
                      {step.duration}
                    </Badge>

                    {/* Expandable Details */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedProcess === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 border-t border-border/50 space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3 text-sm tracking-wide">DELIVERABLES</h4>
                          <ul className="space-y-2 text-sm">
                            {step.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-sm tracking-wide">ACTIVITIES</h4>
                          <ul className="space-y-2 text-sm">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-center">
                                <Circle className="w-2 h-2 text-primary mr-2 flex-shrink-0 fill-current" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground">
                      Click to {expandedProcess === index ? 'collapse' : 'expand'} details
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Tech Stack */}
      <section className="section-padding" data-animate id="tech">
        <div className="container-custom">
          <div className={`text-center mb-20 ${isVisible('tech') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <Cpu className="w-5 h-5 mr-3" />
              Technology Stack
              <Code2 className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              Cutting-Edge <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We leverage the most advanced tools and frameworks to build fast, secure, and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-700 overflow-hidden ${
                  hoveredTech === index 
                    ? 'scale-110 ring-2 ring-primary bg-primary/5' 
                    : 'hover:scale-110'
                } ${isVisible('tech') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <CardContent className="p-6 text-center h-full relative">
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-150 transition-transform duration-500">
                      {tech.icon}
                    </div>
                    
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground mb-2">{tech.category}</p>
                    
                    <p className="text-xs text-muted-foreground/70 mb-3">{tech.description}</p>
                    
                    {/* Experience Badge */}
                    <Badge variant="outline" className="text-xs mb-4 group-hover:bg-primary/20 transition-colors">
                      {tech.experience}
                    </Badge>
                    
                    {/* Interactive Proficiency Bar */}
                    <div className={`transition-all duration-700 ${hoveredTech === index ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="mb-2">
                        <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: hoveredTech === index ? `${tech.proficiency}%` : '0%'
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-primary font-bold">{tech.proficiency}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Client Testimonials */}
      <section className="section-padding bg-secondary/20" data-animate id="testimonials">
        <div className="container-custom">
          <div className={`text-center mb-20 ${isVisible('testimonials') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <Heart className="w-5 h-5 mr-3" />
              Client Success Stories
              <TrendingUp className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real feedback from real clients who've achieved real results with our web development services.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className={`mb-16 ${isVisible('testimonials') ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Card className="card-glow max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-12 text-center relative">
                {/* Quote marks */}
                <div className="text-8xl text-primary/20 font-serif absolute top-4 left-8">"</div>
                <div className="text-8xl text-primary/20 font-serif absolute bottom-4 right-8 rotate-180">"</div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    {renderStars(testimonials[selectedTestimonial].rating)}
                  </div>
                  
                  <blockquote className="text-2xl leading-relaxed mb-8 italic font-light">
                    {testimonials[selectedTestimonial].content}
                  </blockquote>

                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={testimonials[selectedTestimonial].image} 
                      alt={testimonials[selectedTestimonial].name}
                      className="w-20 h-20 rounded-full mr-6 border-4 border-primary/20"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-xl">{testimonials[selectedTestimonial].name}</h4>
                      <p className="text-muted-foreground">{testimonials[selectedTestimonial].role}</p>
                      <p className="text-primary font-semibold">{testimonials[selectedTestimonial].company}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[selectedTestimonial].location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-8 text-sm">
                    <div>
                      <span className="text-muted-foreground">Project:</span>
                      <span className="font-semibold ml-2">{testimonials[selectedTestimonial].project}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Result:</span>
                      <span className="font-bold text-primary ml-2">{testimonials[selectedTestimonial].metric}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    selectedTestimonial === index 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedTestimonial === index 
                    ? 'ring-2 ring-primary scale-105' 
                    : 'hover:scale-105'
                } ${isVisible('testimonials') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                onClick={() => setSelectedTestimonial(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {testimonial.content}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="text-xs">
                      <span className="text-muted-foreground">Result: </span>
                      <span className="font-bold text-primary">{testimonial.metric}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="section-padding" data-animate id="faq">
        <div className="container-custom max-w-5xl">
          <div className={`text-center mb-20 ${isVisible('faq') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <MessageCircle className="w-5 h-5 mr-3" />
              Frequently Asked Questions
              <HelpCircle className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about our web development process and services.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className={`flex justify-center mb-12 ${isVisible('faq') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex space-x-2 bg-card/50 p-2 rounded-xl border border-border/50">
              {faqCategories.map((category) => (
                <Button
                  key={category.category}
                  variant={activeFaqCategory === category.category ? "default" : "ghost"}
                  onClick={() => setActiveFaqCategory(category.category)}
                  className="hover:scale-105 transition-all duration-300"
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqCategories
              .find(cat => cat.category === activeFaqCategory)
              ?.questions.map((faq, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden transition-all duration-500 hover:scale-[1.02] ${isVisible('faq') ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-secondary/30 transition-all duration-300 group"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <h3 className="font-bold text-lg pr-8 group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-6 h-6 text-primary transition-all duration-300 flex-shrink-0 ${
                          expandedFaq === index ? 'rotate-180 scale-125' : 'group-hover:scale-125'
                        }`} 
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-8">
                        <p className="text-muted-foreground leading-relaxed text-lg">
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

      {/* Enhanced Contact Section with Supabase */}
      <section className="section-padding bg-secondary/20" data-animate id="contact">
        <div className="container-custom max-w-6xl">
          <div className={`text-center mb-20 ${isVisible('contact') ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-lg">
              <Send className="w-5 h-5 mr-3" />
              Start Your Project
              <Rocket className="w-5 h-5 ml-3" />
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              Ready to Build Your <span className="text-gradient">Website?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss your project and create something amazing together. 
              We respond to all inquiries within 24 hours.
            </p>
          </div>

          <Card className={`card-glow overflow-hidden hover:scale-[1.01] transition-all duration-1000 ${isVisible('contact') ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Enhanced Contact Form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 group-hover:text-primary transition-colors tracking-wide">
                        FULL NAME *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                        className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 h-12 group-hover:bg-secondary/70"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 group-hover:text-primary transition-colors tracking-wide">
                        EMAIL ADDRESS *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@company.com"
                        required
                        disabled={isSubmitting}
                        className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 h-12 group-hover:bg-secondary/70"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="website" className="block text-sm font-semibold mb-3 group-hover:text-primary transition-colors tracking-wide">
                      CURRENT WEBSITE (OPTIONAL)
                    </label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      placeholder="https://yourwebsite.com"
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 h-12 group-hover:bg-secondary/70"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 group-hover:text-primary transition-colors tracking-wide">
                      PROJECT DETAILS *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us about your project goals, timeline, budget, and any specific requirements..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 resize-none group-hover:bg-secondary/70"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Thank you! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                      <AlertCircle className="w-5 h-5 mr-3" />
                      Sorry, there was an error. Please try again or email us directly.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-glow group hover:scale-105 transition-all duration-500 py-6 text-lg relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full mr-3"></div>
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          Send Project Inquiry
                          <Send className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                </form>
              </div>

              {/* Enhanced Contact Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-emerald-500/10 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Ready to transform your business with a stunning website? 
                      Our team is here to bring your vision to life.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {[
                      { icon: <Mail className="w-7 h-7" />, label: "Email", value: "hello@webdrop.dev", sublabel: "General inquiries" },
                      { icon: <Phone className="w-7 h-7" />, label: "Phone", value: "+1 (555) 123-4567", sublabel: "Mon-Fri 9AM-6PM EST" },
                      { icon: <Clock className="w-7 h-7" />, label: "Response Time", value: "Within 24 hours", sublabel: "We're quick to respond" },
                      { icon: <Calendar className="w-7 h-7" />, label: "Free Consultation", value: "30-minute call", sublabel: "Discuss your project" }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center space-x-6 group cursor-default">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                          {contact.icon}
                        </div>
                        <div>
                          <div className="font-bold text-lg group-hover:text-primary transition-colors">
                            {contact.value}
                          </div>
                          <div className="text-sm text-muted-foreground">{contact.label}</div>
                          <div className="text-xs text-muted-foreground/70">{contact.sublabel}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/30">
                    <h4 className="font-bold mb-4 text-lg">Why Choose WebDrop?</h4>
                    <ul className="space-y-3">
                      {[
                        "100% Custom Design",
                        "Mobile-First Development", 
                        "SEO Optimized",
                        "Fast Loading Times",
                        "Ongoing Support"
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-center group cursor-default">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="group-hover:text-primary transition-colors">{benefit}</span>
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

      {/* Enhanced Footer */}
      <footer className="py-20 border-t border-border bg-card/30">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8 group cursor-default">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-emerald-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-black text-gradient group-hover:scale-105 transition-transform duration-500">
                WebDrop
              </span>
            </div>
            
            <p className="text-muted-foreground mb-12 max-w-md mx-auto text-lg leading-relaxed">
              Building beautiful, functional websites that grow your business and exceed expectations.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              {[
                { icon: <Github className="w-6 h-6" />, label: "GitHub" },
                { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 group"
                  aria-label={social.label}
                >
                  <div className="p-3 rounded-full hover:bg-primary/10 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                © 2024 WebDrop. All rights reserved. 
                <span className="text-primary ml-2">Made with ❤️ for growing businesses.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
