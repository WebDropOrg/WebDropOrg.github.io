// Website Preview Configuration
// Add or remove projects by modifying this file

export interface ProjectConfig {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  tech: string[];
  details: {
    features: string[];
    timeline: string;
    industry: string;
    scope: string;
  };
  color: string;
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
    title: "Green Energy Solutions",
    category: "Business Website",
    url: "https://midday.ai/",
    description: "Professional business website for a renewable energy company featuring modern design and clean aesthetics.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    details: { 
      features: ["Modern Design", "Mobile Responsive", "Contact Forms", "SEO Optimized"],
      timeline: "4 days", 
      industry: "Renewable Energy",
      scope: "Complete Website Build"
    },
    color: "from-emerald-500 to-teal-500",
    features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Fast Loading"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 2,
    title: "Craft Marketplace",
    category: "E-Commerce Redesign",
    url: "https://react-storefront-kappa.vercel.app/",
    description: "Complete redesign of existing marketplace with improved user experience and modern interface design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    details: { 
      features: ["Modern UI", "Better Navigation", "Fast Checkout", "User Dashboard"],
      timeline: "5 days", 
      industry: "E-Commerce",
      scope: "Website Redesign"
    },
    color: "from-blue-500 to-purple-500",
    features: ["Modern Design", "Mobile Optimized", "Fast Checkout", "User Dashboard"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 3,
    title: "Design Studio Portfolio",
    category: "Portfolio Website",
    url: "https://bruno-simon.com/",
    description: "Creative portfolio website showcasing design work with smooth animations and interactive elements.",
    tech: ["React", "GSAP", "Three.js", "Netlify"],
    details: { 
      features: ["Interactive Design", "Portfolio Gallery", "Smooth Animations", "Contact Forms"],
      timeline: "3 days", 
      industry: "Creative Agency",
      scope: "Portfolio Development"
    },
    color: "from-pink-500 to-orange-500",
    features: ["Interactive Elements", "Portfolio Gallery", "Smooth Animations", "Contact Integration"],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 4,
    title: "Medical Practice Hub",
    category: "Healthcare Website",
    url: "https://vercel.com/",
    description: "Professional medical website with appointment booking and patient information management system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    details: { 
      features: ["Appointment System", "Patient Portal", "Secure Forms", "Mobile Friendly"],
      timeline: "4 days", 
      industry: "Healthcare",
      scope: "Full Website Development"
    },
    color: "from-green-500 to-emerald-500",
    features: ["Appointment System", "Patient Portal", "Secure Forms", "Mobile Friendly"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: false,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 5,
    title: "Innovation Labs",
    category: "Tech Startup",
    url: "https://www.figma.com/",
    description: "Modern startup website with product showcase and company information for technology innovation.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    details: { 
      features: ["Product Showcase", "Team Profiles", "Contact Forms", "Modern Design"],
      timeline: "5 days", 
      industry: "Technology",
      scope: "Startup Website"
    },
    color: "from-purple-500 to-pink-500",
    features: ["Product Showcase", "Team Profiles", "Contact Forms", "Blog Integration"],
    previewFeatures: {
      hasVideo: true,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  },
  {
    id: 6,
    title: "Local Bistro",
    category: "Restaurant Website",
    url: "https://tailwindcss.com/",
    description: "Restaurant website with menu showcase and location information for local dining establishment.",
    tech: ["React", "Tailwind CSS", "Next.js", "Vercel"],
    details: { 
      features: ["Menu Display", "Location Info", "Contact Forms", "Photo Gallery"],
      timeline: "3 days", 
      industry: "Restaurant",
      scope: "Business Website"
    },
    color: "from-orange-500 to-red-500",
    features: ["Menu Display", "Location Info", "Contact Forms", "Photo Gallery"],
    previewFeatures: {
      hasVideo: false,
      hasAnimations: true,
      hasInteractiveElements: true,
      mobileOptimized: true
    }
  }
];

// Helper function to get all projects
export const getAllProjects = (): ProjectConfig[] => {
  return showcaseProjects;
};

// Helper function to get project by ID
export const getProjectById = (id: number): ProjectConfig | undefined => {
  return showcaseProjects.find(project => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): ProjectConfig[] => {
  return showcaseProjects.filter(project => project.category === category);
};

// Helper function to get projects by industry
export const getProjectsByIndustry = (industry: string): ProjectConfig[] => {
  return showcaseProjects.filter(project => project.details.industry === industry);
};
