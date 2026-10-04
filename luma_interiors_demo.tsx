import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowUpRight, ArrowRight, Phone, Mail, MapPin, 
  CheckCircle2, ChevronRight, Filter, ExternalLink, Instagram, 
  Facebook, Compass, Shield, Sparkles, Sliders, Layers, Eye,
  Building, Home as HomeIcon, Briefcase, Maximize2, Send, MessageSquare
} from 'lucide-react';

// ============================================================================
// CENTRALIZED CLIENT CONFIGURATION (config.js equivalent)
// Easily customize this data object to white-label for new freelance clients!
// ============================================================================
const siteConfig = {
  brand: {
    name: "LUMA INTERIORS",
    tagline: "SPACES DESIGNED AROUND YOU.",
    subtitle: "INTERIOR DESIGN & EXECUTION",
    establishedYear: "2014",
    experienceYears: "10+",
    projectsCompleted: "150+",
    happyClients: "50+",
    citiesCovered: "12+"
  },
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    whatsapp: "+91 98765 43210",
    email: "hello@lumainteriors.com",
    address: "123 Design Avenue, Race Course Road, Coimbatore, Tamil Nadu - 641018",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.331234567!2d76.9612345!3d11.0012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzA0LjQiTiA3NsKwNTcnNDAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com"
  },
  hero: {
    title: "SPACES DESIGNED AROUND YOU.",
    subtitle: "Thoughtful interiors that combine functionality, craftsmanship and timeless design.",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
  },
  about: {
    heading: "WE CREATE SPACES THAT FEEL LIKE HOME.",
    storyP1: "At Luma Interiors, we believe that exceptional architecture and interior design are fundamentally about how people feel inside a space. Founded on principles of timeless minimalism and rigorous execution, we craft personal environments tailored to your lifestyle.",
    storyP2: "From sprawling luxury villas to bespoke commercial spaces, our multidisciplinary team handles every single detail—from initial architectural concept through bespoke furniture crafting down to the final handover."
  },
  services: [
    {
      id: "01",
      title: "Residential Interiors",
      desc: "Bespoke interior architecture and styling tailored specifically for villas, penthouses, and private luxury residences.",
      iconName: "HomeIcon"
    },
    {
      id: "02",
      title: "Commercial Interiors",
      desc: "Distinctive experiential retail, boutique hospitality, and modern workspace environments that elevate brand identity.",
      iconName: "Building"
    },
    {
      id: "03",
      title: "Modular Kitchens",
      desc: "Ergonomic, high-end Italian and German-style modular kitchens precision-built for culinary passion and durability.",
      iconName: "Layers"
    },
    {
      id: "04",
      title: "Living & Bedroom Design",
      desc: "Custom spatial layouts, tailored lighting schemes, mood boards, and artisan furniture for maximum comfort.",
      iconName: "Sparkles"
    },
    {
      id: "05",
      title: "Office Interiors",
      desc: "Agile, modern workspace designs that boost team productivity, collaboration, and wellness in corporate settings.",
      iconName: "Briefcase"
    },
    {
      id: "06",
      title: "Turnkey Interior Solutions",
      desc: "Seamless end-to-end management covering procurement, material testing, civil modifications, and site execution.",
      iconName: "Shield"
    }
  ],
  projects: [
    {
      id: "modern-3bhk-coimbatore",
      title: "MODERN 3BHK RESIDENCE",
      location: "Race Course, Coimbatore",
      category: "Residential",
      year: "2024",
      area: "2,800 sq. ft.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
      ],
      description: "A serene urban sanctuary featuring clean linear accents, warm oak veneer paneling, and customized ambient indirect lighting designed for a modern young family.",
      concept: "Warm Minimalist Luxury",
      materials: ["White Oak Veneer", "Italian Carrara Marble", "Brushed Brass Hardware", "Linen Wallpapers"],
      features: [
        "Hidden motorized storage panels in living room",
        "Custom acoustic plaster ceilings with recessed LED channels",
        "Integrated Italian modular kitchen with quartz waterfall island"
      ]
    },
    {
      id: "luxury-villa-chennai",
      title: "LUXURY VILLA",
      location: "ECR, Chennai",
      category: "Residential",
      year: "2023",
      area: "5,400 sq. ft.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
      ],
      description: "A sprawling coastal villa blending indoor and outdoor living with floor-to-ceiling glass walls, micro-cement flooring, and earth-toned interior textiles.",
      concept: "Biophilic Coastal Elegance",
      materials: ["Micro-cement Flooring", "Teak Wood Millwork", "Travertine Stone Cladding"],
      features: [
        "Double-height atrium with custom bronze linear chandelier",
        "Private master suite opening directly into courtyard garden",
        "Automated smart lighting and temperature climate zones"
      ]
    },
    {
      id: "contemporary-office-bangalore",
      title: "CONTEMPORARY OFFICE",
      location: "Indiranagar, Bangalore",
      category: "Commercial",
      year: "2024",
      area: "4,200 sq. ft.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
      ],
      description: "An agile, ergonomic studio environment designed for a creative tech firm, balancing collaborative open lounges with soundproof focus pods.",
      concept: "Architectural Work-Space",
      materials: ["Exposed Structural Concrete", "Acoustic Felt Baffles", "Black Steel Framing"],
      features: [
        "Custom oak desk stations with concealed cable routing",
        "Biophilic planter room partitions for air purity",
        "Executive board room with smart privacy glass technology"
      ]
    },
    {
      id: "minimalist-apartment-coimbatore",
      title: "MINIMALIST APARTMENT",
      location: "RS Puram, Coimbatore",
      category: "Residential",
      year: "2023",
      area: "2,100 sq. ft.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
      ],
      description: "Understated sophistication defined by monochromatic tones, tactile linen drapery, flush-mounted doors, and custom sculptural joinery.",
      concept: "Japandi Monochrome",
      materials: ["Limewash Paint", "Smoked Ash Joinery", "Fluted Glass Panels"],
      features: [
        "Zero-threshold floor tiles throughout the living spaces",
        "Custom fluted glass pocket doors separating kitchen area",
        "Integrated hidden mood illumination behind structural soffits"
      ]
    }
  ],
  whyChooseUs: [
    {
      num: "01",
      title: "Personalized Design",
      desc: "Every project starts with an in-depth lifestyle study. We do not copy trends; we engineer tailor-made spaces that express your unique narrative."
    },
    {
      num: "02",
      title: "Transparent Process",
      desc: "Clear 3D walkthroughs, itemized bill-of-quantities, and strict timeline commitments leave zero room for unexpected budget surprises."
    },
    {
      num: "03",
      title: "Quality Craftsmanship",
      desc: "We partner exclusively with vetted master craftsmen, premium joinery workshops, and luxury European material suppliers."
    },
    {
      num: "04",
      title: "End-to-End Execution",
      desc: "From initial civil alterations and MEP coordination down to soft furnishings and final cleanup, we manage every moving part."
    }
  ],
  process: [
    {
      step: "01",
      title: "CONSULTATION",
      desc: "We meet at your site or studio to understand your vision, functional spatial needs, architectural preferences, and target budget range."
    },
    {
      step: "02",
      title: "CONCEPT & DESIGN",
      desc: "Our team develops comprehensive mood boards, preliminary spatial floor plans, and material palettes for your feedback."
    },
    {
      step: "03",
      title: "3D VISUALIZATION",
      desc: "Photorealistic 3D renderings and VR walkthroughs allow you to feel and inspect lighting, colors, and textures before build phase."
    },
    {
      step: "04",
      title: "MATERIAL & EXECUTION",
      desc: "Upon design lock-in, procurement begins while our experienced project managers supervise civil and carpentry execution daily."
    },
    {
      step: "05",
      title: "HANDOVER",
      desc: "Final deep cleaning, soft furnishing placement, quality audit inspection, and keys handover to welcome you to your new space."
    }
  ],
  gallery: [
    { id: 1, title: "Contemporary Living Lounge", category: "Living Room", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Master Suite Sanctuary", category: "Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Marble Kitchen Island", category: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Executive Workspace", category: "Office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "Architectural Courtyard Villa", category: "Commercial", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, title: "Warm Dining Experience", category: "Living Room", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, title: "Minimalist Guest Retreat", category: "Bedroom", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, title: "Matte Black Modular Galley", category: "Kitchen", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop" }
  ],
  testimonials: [
    {
      id: 1,
      quote: "Luma Interiors understood exactly what we wanted from day one. They transformed our bare ECR villa into a tranquil, light-filled haven that feels both extraordinarily sophisticated and genuinely warm.",
      author: "Priya & Arun Krishnan",
      location: "ECR Villa, Chennai",
      role: "Homeowners"
    },
    {
      id: 2,
      quote: "The level of detail in their modular millwork and lighting design is unparalleled. They delivered our tech company headquarters ahead of schedule without sacrificing an ounce of finish quality.",
      author: "Rajesh Varma",
      location: "Bangalore",
      role: "Founder & CEO, Catalyst Tech"
    },
    {
      id: 3,
      quote: "Working with Luma was smooth and worry-free. Their 3D renderings were 100% accurate to what was delivered on handover day. Highly recommended for premium residential design!",
      author: "Dr. Sunita Raman",
      location: "Coimbatore",
      role: "3BHK Residence Owner"
    }
  ]
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    location: '',
    budget: '₹10–20 Lakhs',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) errors.phone = 'Contact number is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email address is required';
    if (!formData.location.trim()) errors.location = 'Project location is required';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Simulate successful form dispatch
    setFormSubmitted(true);
  };

  const filteredGallery = galleryFilter === 'All' 
    ? siteConfig.gallery 
    : siteConfig.gallery.filter(item => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A880] selection:text-white">
      
      {/* Dynamic Demo Watermark Banner for Freelance Prospecting */}
      <div className="bg-[#1A1A1A] text-[#C5A880] text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-[#333]">
        <Sparkles className="w-3.5 h-3.5" />
        <span>DEMO PORTFOLIO WEBSITE — READY TO CUSTOMIZE FOR YOUR STUDIO</span>
        <a href="#contact" className="underline hover:text-white transition-colors ml-2 hidden sm:inline">Request Setup</a>
      </div>

      {}
      {/* 1. NAVBAR SECTION */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4 border-b border-[#EAE6DF]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#1A1A1A] group-hover:text-[#C5A880] transition-colors font-serif">
              {siteConfig.brand.name}
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#8C7355] uppercase font-mono">
              Architecture & Interiors
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-[#4A4A4A]">
            <a href="#about" className="hover:text-[#C5A880] transition-colors">About</a>
            <a href="#services" className="hover:text-[#C5A880] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#C5A880] transition-colors">Projects</a>
            <a href="#process" className="hover:text-[#C5A880] transition-colors">Process</a>
            <a href="#gallery" className="hover:text-[#C5A880] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#C5A880] transition-colors">Contact</a>
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-[#1A1A1A] text-[#FDFBF7] hover:bg-[#C5A880] hover:text-[#1A1A1A] text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-300 font-medium border border-[#1A1A1A]"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1A1A] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slideout Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-[#EAE6DF] px-6 py-8 space-y-6 animate-fadeIn">
            <nav className="flex flex-col space-y-4 text-sm uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] py-3.5 rounded-full"
            >
              Start a Project
            </a>
          </div>
        )}
      </header>

      {}
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 lg:px-12 py-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={siteConfig.hero.bgImage} 
            alt="Luxury Interior Architecture" 
            className="w-full h-full object-cover brightness-[0.75] filter scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
          <div className="lg:col-span-9 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase font-mono border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
              <span>{siteConfig.brand.subtitle}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight leading-[1.08] text-white">
              SPACES DESIGNED <br />
              <span className="italic font-normal text-[#EAE6DF]">AROUND YOU.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-light leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a 
                href="#projects" 
                className="bg-[#C5A880] text-[#1A1A1A] hover:bg-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="border border-white/60 hover:border-white text-white hover:bg-white/10 text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
              >
                Start Your Project
              </a>
            </div>
          </div>

          {/* Floating Stats Badge */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl space-y-4 text-white">
              <div className="border-b border-white/10 pb-3">
                <p className="text-3xl font-serif font-light text-[#C5A880]">{siteConfig.brand.experienceYears}</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-300">Years Crafting Interiors</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-[#C5A880]">{siteConfig.brand.projectsCompleted}</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-300">Residences & Offices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* 3. INTRODUCTION / ABOUT */}
      <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#EAE6DF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block">
              About The Studio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1A1A1A] leading-tight">
              {siteConfig.about.heading}
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed font-light text-base">
              {siteConfig.about.storyP1}
            </p>
            <p className="text-[#4A4A4A] leading-relaxed font-light text-base">
              {siteConfig.about.storyP2}
            </p>

            {/* Stat Box Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#EAE6DF]">
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-[#C5A880]">
                  {siteConfig.brand.experienceYears}
                </span>
                <span className="text-xs text-[#666666] uppercase tracking-wider mt-1 block">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-[#C5A880]">
                  {siteConfig.brand.projectsCompleted}
                </span>
                <span className="text-xs text-[#666666] uppercase tracking-wider mt-1 block">
                  Projects Completed
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-[#C5A880]">
                  {siteConfig.brand.happyClients}
                </span>
                <span className="text-xs text-[#666666] uppercase tracking-wider mt-1 block">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" 
                alt="Studio Interior Craftsmanship" 
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/40">
                <p className="text-xs uppercase tracking-widest text-[#8C7355] font-semibold">Our Philosophy</p>
                <p className="text-sm font-serif text-[#1A1A1A] mt-1 italic">
                  "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {}
      {/* 4. SERVICES */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block mb-2">
                Expertise
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
                WHAT WE DO
              </h2>
            </div>
            <p className="text-sm text-[#666666] max-w-md font-light">
              Comprehensive interior architectural solutions crafted to perfection, balancing spatial ergonomics with high-end aesthetic value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((s) => (
              <div 
                key={s.id}
                className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#EAE6DF] hover:border-[#C5A880] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#C5A880] tracking-widest uppercase font-semibold">
                      {s.id}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-[#1A1A1A] mb-3 group-hover:text-[#8C7355] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EAE6DF] flex items-center justify-between text-xs font-medium tracking-wider uppercase text-[#1A1A1A] group-hover:text-[#C5A880]">
                  <span>Enquire Service</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      {/* 5. FEATURED PROJECTS */}
      <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
              SELECTED PROJECTS
            </h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#666] font-mono">
            Handcrafted Spaces • Tamil Nadu & South India
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {siteConfig.projects.map((p) => (
            <div 
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer space-y-4"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider font-mono text-[#1A1A1A] uppercase">
                  {p.category}
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#1A1A1A] px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#C5A880] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#666666] uppercase tracking-wider font-mono mt-1">
                    {p.location} • {p.year}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {/* 6. PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FDFBF7] w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto shadow-2xl border border-[#EAE6DF] relative">
            
            {/* Sticky Modal Close */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full text-[#1A1A1A] shadow-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-10 space-y-8">
              {/* Header */}
              <div>
                <span className="text-xs font-mono text-[#8C7355] uppercase tracking-widest">
                  {selectedProject.category} — {selectedProject.year}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1A1A] mt-1">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-[#666666] font-mono mt-1">
                  {selectedProject.location} • {selectedProject.area}
                </p>
              </div>

              {/* Primary Image Carousel / Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.gallery.map((imgUrl, i) => (
                  <img 
                    key={i} 
                    src={imgUrl} 
                    alt={`${selectedProject.title} detailed view ${i+1}`}
                    className="w-full h-64 object-cover rounded-xl border border-[#EAE6DF]" 
                  />
                ))}
              </div>

              {/* Narrative & Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#EAE6DF]">
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]">Design Concept</h4>
                  <p className="text-base font-serif text-[#8C7355] italic">{selectedProject.concept}</p>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed font-light">{selectedProject.description}</p>
                  
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A] mb-2">Key Execution Highlights</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs text-[#555] gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#F7F4EE] p-6 rounded-xl space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]">Material Palette</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((mat, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs text-[#333] border border-[#EAE6DF]">
                        {mat}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#EAE6DF]">
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedProject(null)}
                      className="block w-full text-center bg-[#1A1A1A] text-white text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-[#C5A880] transition-colors"
                    >
                      Inquire Similar Design
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {}
      {/* 7. WHY CHOOSE US */}
      <section className="py-24 px-6 lg:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#C5A880] block mb-2">
              The Studio Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light">
              WHY CLIENTS CHOOSE US
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.whyChooseUs.map((w) => (
              <div key={w.num} className="border-t border-white/20 pt-8 space-y-4">
                <span className="text-2xl font-serif text-[#C5A880]">{w.num}</span>
                <h3 className="text-xl font-serif">{w.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* 8. DESIGN PROCESS */}
      <section id="process" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block mb-2">
            Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
            OUR DESIGN PROCESS
          </h2>
          <p className="text-sm text-[#666] mt-3 font-light">
            A structured, stress-free progression from initial conceptual paper sketch to final keys handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {siteConfig.process.map((p, i) => (
            <div key={p.step} className="bg-[#F7F4EE] p-6 rounded-2xl border border-[#EAE6DF] relative flex flex-col justify-between">
              <div>
                <span className="text-2xl font-serif text-[#C5A880] block mb-3">{p.step}</span>
                <h3 className="text-base font-serif font-semibold text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="text-xs text-[#666666] leading-relaxed font-light">{p.desc}</p>
              </div>
              {i < siteConfig.process.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 border border-[#EAE6DF]">
                  <ChevronRight className="w-4 h-4 text-[#C5A880]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {}
      {/* 9. GALLERY */}
      <section id="gallery" className="py-24 px-6 lg:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block mb-2">
                Visual Showcase
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
                INTERIOR GALLERY
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Commercial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                    galleryFilter === cat 
                      ? 'bg-[#1A1A1A] text-white' 
                      : 'bg-white text-[#666] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setLightboxImage(item)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-gray-200"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880]">{item.category}</p>
                  <p className="text-sm font-serif">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#C5A880]">
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] text-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title} 
              className="max-w-full max-h-[75vh] object-contain mx-auto rounded-lg"
            />
            <p className="text-white font-serif text-xl mt-4">{lightboxImage.title}</p>
            <p className="text-xs uppercase tracking-widest font-mono text-[#C5A880]">{lightboxImage.category}</p>
          </div>
        </div>
      )}

      {}
      {/* 10. TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block mb-2">
            Client Words
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div key={t.id} className="bg-[#FDFBF7] border border-[#EAE6DF] p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <p className="text-sm text-[#4A4A4A] italic leading-relaxed font-light">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif font-medium text-[#1A1A1A]">{t.author}</p>
                <p className="text-xs text-[#8C7355] font-mono">{t.role} • {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {/* 11. CALL TO ACTION */}
      <section className="py-20 px-6 lg:px-12 bg-[#C5A880] text-[#1A1A1A]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            LET'S CREATE YOUR SPACE.
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto font-light text-[#2C261E]">
            Tell us about your architectural vision or interior requirements. We look forward to crafting your next bespoke environment.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all"
            >
              Start Your Project
            </a>
            <a 
              href={`https://wa.me/${siteConfig.contact.phoneClean}`}
              target="_blank" 
              rel="noreferrer"
              className="bg-white/90 text-[#1A1A1A] hover:bg-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {}
      {/* 12 & 13. CONTACT / PROJECT ENQUIRY & INFO */}
      <section id="contact" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C7355] block mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1A1A]">
                START A CONVERSATION
              </h2>
              <p className="text-sm text-[#666] mt-2 font-light">
                Visit our design studio or reach out directly to schedule an in-person design consultation.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#EAE6DF]">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider font-mono text-[#1A1A1A]">Studio Address</p>
                  <p className="text-sm text-[#555] font-light mt-0.5">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider font-mono text-[#1A1A1A]">Phone / WhatsApp</p>
                  <p className="text-sm text-[#555] font-light mt-0.5">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider font-mono text-[#1A1A1A]">Email</p>
                  <p className="text-sm text-[#555] font-light mt-0.5">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#EAE6DF] h-52 bg-gray-100">
              <iframe 
                title="Studio Location Map"
                src={siteConfig.contact.googleMapsEmbed}
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#F7F4EE] p-8 md:p-10 rounded-2xl border border-[#EAE6DF]">
            <h3 className="text-xl font-serif text-[#1A1A1A] mb-6">Project Enquiry Form</h3>
            
            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-serif">Enquiry Received</h4>
                <p className="text-sm font-light max-w-md mx-auto">
                  Thank you for connecting with {siteConfig.brand.name}. Our principal architect will review your project parameters and contact you within 24 business hours.
                </p>
                <button 
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', email: '', projectType: 'Residential', location: '', budget: '₹10–20 Lakhs', message: '' }); }}
                  className="mt-4 text-xs uppercase tracking-widest text-emerald-900 underline font-semibold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Ananya Sharma"
                      className={`w-full bg-white border ${formErrors.name ? 'border-red-500' : 'border-[#EAE6DF]'} px-4 py-3 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]`}
                    />
                    {formErrors.name && <p className="text-[11px] text-red-500 mt-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Phone Number *</label>
                    <input 
                      type="text" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+91 98765 43210"
                      className={`w-full bg-white border ${formErrors.phone ? 'border-red-500' : 'border-[#EAE6DF]'} px-4 py-3 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]`}
                    />
                    {formErrors.phone && <p className="text-[11px] text-red-500 mt-1">{formErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="ananya@example.com"
                      className={`w-full bg-white border ${formErrors.email ? 'border-red-500' : 'border-[#EAE6DF]'} px-4 py-3 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]`}
                    />
                    {formErrors.email && <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Site Location *</label>
                    <input 
                      type="text" 
                      name="location" 
                      value={formData.location} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Race Course, Coimbatore"
                      className={`w-full bg-white border ${formErrors.location ? 'border-red-500' : 'border-[#EAE6DF]'} px-4 py-3 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]`}
                    />
                    {formErrors.location && <p className="text-[11px] text-red-500 mt-1">{formErrors.location}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Project Type</label>
                    <select 
                      name="projectType" 
                      value={formData.projectType} 
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAE6DF] px-4 py-3 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Residential">Residential Villa / Apt</option>
                      <option value="Commercial">Commercial / Retail</option>
                      <option value="Office">Office Workspace</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Renovation">Full Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Estimated Budget</label>
                    <select 
                      name="budget" 
                      value={formData.budget} 
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAE6DF] px-4 py-3 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                      <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
                      <option value="₹10–20 Lakhs">₹10–20 Lakhs</option>
                      <option value="₹20 Lakhs+">₹20 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#333] mb-1">Message / Requirements</label>
                  <textarea 
                    name="message" 
                    rows="3" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Briefly describe your space size, layout idea or timeline requirements..."
                    className="w-full bg-white border border-[#EAE6DF] p-4 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] text-xs uppercase tracking-[0.2em] py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {}
      {/* 14. FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-12 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-serif tracking-[0.2em] text-white block">
              {siteConfig.brand.name}
            </span>
            <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
              Creating thoughtful spaces with timeless design across South India. Specialists in luxury residential and architectural commercial projects.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">Quick Links</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Selected Projects</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">Connect</h4>
            <p className="text-xs text-gray-400">{siteConfig.contact.email}</p>
            <p className="text-xs text-gray-400">{siteConfig.contact.phone}</p>
            
            <div className="flex space-x-4 pt-2">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A880] transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A880] transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2026 {siteConfig.brand.name}. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
            Freelance Demo Template • Built for Client Pitching
          </p>
        </div>
      </footer>

    </div>
  );
}