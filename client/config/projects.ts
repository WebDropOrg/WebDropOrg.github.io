// Website Preview Configuration
// Add or remove projects by modifying this file

export interface ProjectConfig {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  tech: string[];
  metrics: {
    visitors?: string;
    performance?: string;
    rating?: string;
    timeline?: string;
    [key: string]: string | undefined;
  };
  color: string;
  industry: string;
  features: string[];
  previewFeatures: {
    hasVideo: boolean;
    hasAnimations: boolean;
    hasInteractiveElements: boolean;
    mobileOptimized: boolean;
  };
}

export const showcaseProjects: ProjectConfig[] = [
  {
    id: 1,
    title: "EcoTech Solutions",
    category: "Business Website",
    url: "https://midday.ai/",
    description:
      "Professional business website with modern design and optimized performance for a technology company.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    metrics: {
      visitors: "8K+ monthly",
      performance: "98/100",
      rating: "4.8/5",
      timeline: "4 days",
    },
    color: "from-emerald-500 to-teal-500",
    industry: "Technology",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Contact Forms",
      "Fast Loading",
    ],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true,
    },
  },
  {
    id: 2,
    title: "Artisan Marketplace",
    category: "E-Commerce Redesign",
    url: "https://react-storefront-kappa.vercel.app/",
    description:
      "Complete redesign of existing e-commerce platform with improved user experience and modern interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    metrics: {
      visitors: "5.2K+ monthly",
      performance: "95/100",
      rating: "4.7/5",
      timeline: "5 days",
    },
    color: "from-blue-500 to-purple-500",
    industry: "E-Commerce",
    features: [
      "Modern Design",
      "Mobile Optimized",
      "Fast Checkout",
      "User Dashboard",
    ],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true,
    },
  },
  {
    id: 3,
    title: "Creative Studio Hub",
    category: "Portfolio Website",
    url: "https://bruno-simon.com/",
    description:
      "Creative portfolio website showcasing work with smooth animations and modern design.",
    tech: ["React", "GSAP", "Three.js", "Netlify"],
    metrics: {
      visitors: "3.1K+ monthly",
      performance: "92/100",
      rating: "4.9/5",
      timeline: "3 days",
    },
    color: "from-pink-500 to-orange-500",
    industry: "Design Agency",
    features: [
      "Interactive Elements",
      "Portfolio Gallery",
      "Smooth Animations",
      "Contact Integration",
    ],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true,
    },
  },
  {
    id: 4,
    title: "HealthFirst Clinic",
    category: "Medical Website",
    url: "https://vercel.com/",
    description:
      "Professional medical website with appointment booking and patient information system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: {
      visitors: "2.8K+ monthly",
      performance: "96/100",
      rating: "4.6/5",
      timeline: "4 days",
    },
    color: "from-green-500 to-emerald-500",
    industry: "Healthcare",
    features: [
      "Appointment System",
      "Patient Portal",
      "Secure Forms",
      "Mobile Friendly",
    ],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: false,
      hasInteractiveElements: true,
      mobileOptimized: true,
    },
  },
  {
    id: 5,
    title: "TechFlow Startup",
    category: "Startup Website",
    url: "https://www.figma.com/",
    description:
      "Modern startup website with product showcase and investor information sections.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    metrics: {
      visitors: "4.5K+ monthly",
      performance: "94/100",
      rating: "4.8/5",
      timeline: "5 days",
    },
    color: "from-purple-500 to-pink-500",
    industry: "Technology",
    features: [
      "Product Showcase",
      "Team Profiles",
      "Contact Forms",
      "Blog Integration",
    ],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true,
    },
  },
  {
    id: 6,
    title: "FoodieDelight Restaurant",
    category: "Restaurant Website",
    url: "https://tailwindcss.com/",
    description:
      "Restaurant website with menu showcase and location information for local business.",
    tech: ["React", "Tailwind CSS", "Next.js", "Vercel"],
    metrics: {
      visitors: "1.9K+ monthly",
      performance: "97/100",
      rating: "4.7/5",
      timeline: "3 days",
    },
    color: "from-orange-500 to-red-500",
    industry: "Restaurant",
    features: [
      "Menu Display",
      "Location Info",
      "Contact Forms",
      "Photo Gallery",
    ],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true,
    },
  },
];

// Helper function to get all projects
export const getAllProjects = (): ProjectConfig[] => {
  return showcaseProjects;
};

// Helper function to get project by ID
export const getProjectById = (id: number): ProjectConfig | undefined => {
  return showcaseProjects.find((project) => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): ProjectConfig[] => {
  return showcaseProjects.filter((project) => project.category === category);
};

// Helper function to get projects by industry
export const getProjectsByIndustry = (industry: string): ProjectConfig[] => {
  return showcaseProjects.filter((project) => project.industry === industry);
};
