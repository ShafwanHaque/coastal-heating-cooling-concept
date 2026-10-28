export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {
  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };
  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };
  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };
  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };
  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
    };
  };
  seo: {
    title: string;
    description: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };
  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };
  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };
  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };
  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Wynn Creek AC",
    shortName: "Wynn Creek",
    logo: "/brand/wynn-creek-ac-logo.png",
    logoLight: "/brand/wynn-creek-ac-logo.png",
    region: "Gulf Shores to Mobile along the Alabama Gulf Coast",
  },

  theme: {
    style: "technical",
    colors: {
      brandPrimary: "#B88938",
      brandSecondary: "#E1C474",
      brandAccent: "#D3A64E",
      page: "#100F0C",
      surfaceDark: "#100F0C",
      surfaceDarkAlt: "#1B1914",
      surfaceElevated: "#2A251A",
      surfaceSoft: "#F2EBDD",
      textPrimary: "#FBF7EE",
      textSecondary: "#E8E0CF",
      textMuted: "#B8AD98",
      textOnBrand: "#FFFFFF",
      borderSubtle: "#3A3428",
      borderStrong: "#695C40",
      glowPrimary: "#B88938",
      glowSecondary: "#E1C474",
      networkLine: "#BE984A",
      success: "#73B78A",
      service1: "#B88938",
      service2: "#D5B45D",
      service3: "#7D8570",
      service4: "#9B7755",
      service5: "#C8A969",
    },
  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call (251) 359-6401",
    ctaLabel: "Request service",
    mobileEyebrow: "ALABAMA GULF COAST · GULF SHORES TO MOBILE",
    mobileCallLabel: "Call now",
  },

  opening: {
    enabled: true,
    durationMs: 2600,
    eyebrow: "WYNN CREEK AC · GULF SHORES",
    line1: "Local care.",
    line2: "Lasting comfort.",
    detail: "Wynn Creek AC · Gulf Shores to Mobile, Alabama",
    location: "Gulf Shores to Mobile · Alabama Gulf Coast",
    skipLabel: "Skip intro",
  },

  // One hero system for every outreach project. Replace these tokens per brand;
  // do not put business-specific text or a brand palette inside custom-hero.tsx.
  hero: {
    layout: "service-craft",
    eyebrow: "FAMILY-OWNED HVAC · ALABAMA GULF COAST",
    headlineLine1: "Comfort built",
    headlineLine2: "for the coast.",
    description: "Family-owned heating and cooling service for Gulf Shores and nearby Alabama Gulf Coast communities, from repairs and maintenance to system replacement, ductwork and indoor air quality.",
    primaryCta: "Request service",
    secondaryCta: "Call Wynn Creek",
    locationLabel: "GULF SHORES · ALABAMA GULF COAST",
    locationValue: "GULF SHORES · ORANGE BEACH · FOLEY · MOBILE",
    edgeLabel: "HEATING · COOLING · HOME COMFORT",
    bottomStatement: "Thoughtful service for the comfort of home.",
    sillLabel: "SERVING 14 ALABAMA GULF COAST COMMUNITIES",
    serviceLabels: ["Cooling", "Heating", "Installation"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "balanced",
      ambient: true,
    },
    system: {
      eyebrow: "CLIMATE SYSTEM / IN MOTION",
      modes: [
        { id: "cool", label: "Cooling", detail: "A considered path from warm intake to balanced, conditioned air." },
        { id: "warm", label: "Heating", detail: "Steady circulation, carefully controlled for colder days." },
        { id: "pure", label: "Air quality", detail: "A focus on filtration and the air moving through every room." },
      ],
    },
    media: {
      primarySrc: "/hero/hvac-service-craft.webp",
      primaryAlt: "Representative HVAC technician servicing an outdoor air-conditioning system beside a home.",
      primaryPosition: "center center",
      fit: "contain",
      backdrop: "matte",
    },
  },

  seo: {
    title: "Wynn Creek AC | Heating, Cooling & Home Services",
    description:
      "Wynn Creek AC is a family-owned HVAC company serving Gulf Shores, Orange Beach, Fort Morgan, Foley, Fairhope, Daphne, Spanish Fort, Loxley, Robertsdale, Silverhill, Elberta, Stapleton, Bon Secour and Mobile, Alabama.",
  },

  contact: {
    phoneDisplay: "(251) 359-6401",
    phoneHref: "tel:+12513596401",
    email: "",
    address: "Gulf Shores, Alabama",
    contactUrl: "#contact",
    servicesUrl: "#services",
  },

  brandStandard: {
    eyebrow: "LOCAL KNOW-HOW · PERSONAL SERVICE",
    titleLine1: "Coastal comfort,",
    titleLine2: "handled with care.",
    bodyTitle: "Comfort starts with a team that listens.",
    body: "A family-owned team providing reliable HVAC installation, replacement, maintenance and repair across the Gulf Coast.",
    callLabel: "Call now",
    availabilityLabel: "Locally owned · Alabama Gulf Coast",
    panelEyebrow: "WYNN CREEK SERVICE STANDARD",
    panelTitle: "Clear recommendations and dependable care for homes and businesses.",
    panelFooter: "Gulf Shores to Mobile · Alabama Gulf Coast",
    handoff: "Explore the services available from Wynn Creek.",
    items: [
      {
        icon: "cooling",
        label: "Coastal experience",
        detail: "Service for Gulf Shores and surrounding Gulf Coast communities.",
      },
      {
        icon: "heating",
        label: "Complete HVAC care",
        detail: "Repairs, new systems, ductwork and indoor air quality.",
      },
      {
        icon: "maintenance",
        label: "Family-owned service",
        detail: "Honest recommendations and quality workmanship.",
      },
    ],
  },

  services: {
    eyebrow: "HEATING · COOLING · MORE",
    introLine1: "The help you need,",
    introLine2: "in every season.",
    summaryEyebrow: "GULF SHORES SERVICE DESK",
    summaryTitle: "One local team. Year-round comfort.",
    summaryBody:
      "Wynn Creek AC provides air conditioning, heating, installation, ductwork and indoor air quality services along the Alabama Gulf Coast.",
    summaryCta: "Talk to our team",
    items: [
      {
        name: "Air Conditioning",
        shortName: "Cooling",
        image: "/services/01.svg",
      },
      {
        name: "Heating & Heat Pumps",
        shortName: "Heating",
        image: "/services/02.svg",
      },
      {
        name: "HVAC Installation & Replacement",
        shortName: "Installation",
        image: "/services/03.svg",
      },
      {
        name: "Ductwork & Airflow",
        shortName: "Ductwork",
        image: "/services/04.svg",
      },
      {
        name: "Indoor Air Quality",
        shortName: "Air quality",
        image: "/services/05.svg",
      },
    ],
  },

  coverage: {
    eyebrow: "NEARBY SERVICE AREA",
    titleLine1: "Rooted in Gulf Shores.",
    titleLine2: "Here for the coast.",
    description:
      "Proudly serving Gulf Shores, Orange Beach, Fort Morgan, Foley, Fairhope, Daphne, Spanish Fort, Loxley, Robertsdale, Silverhill, Elberta, Stapleton, Bon Secour and Mobile, Alabama.",
    featuredLocation: "Gulf Shores, AL",
    locationDetail: "Proud to serve Gulf Shores and nearby communities along the Alabama Gulf Coast.",
    ctaLabel: "Request service",
    networkLabel: "THE LOCAL SERVICE NETWORK",
    regionLabel: "Alabama Gulf Coast · Gulf Shores to Mobile",
    metrics: [
      { value: "14 communities", label: "Local coverage" },
      { value: "Gulf Shores to Mobile", label: "Alabama Gulf Coast" },
      { value: "Family owned", label: "A local team" },
    ],

    locations: [
      { name: 'Gulf Shores, AL', kind: "city", lat: 30.246, lng: -87.7008, hub: true },
      { name: 'Orange Beach, AL', kind: "city", lat: 30.2944, lng: -87.5736 },
      { name: 'Fort Morgan, AL', kind: "community", lat: 30.2297, lng: -88.0225 },
      { name: 'Foley, AL', kind: "city", lat: 30.4066, lng: -87.6836 },
      { name: 'Fairhope, AL', kind: "city", lat: 30.5227, lng: -87.9033 },
      { name: 'Daphne, AL', kind: "city", lat: 30.6035, lng: -87.9036 },
      { name: 'Spanish Fort, AL', kind: "city", lat: 30.6749, lng: -87.9153 },
      { name: 'Loxley, AL', kind: "city", lat: 30.6188, lng: -87.7536 },
      { name: 'Robertsdale, AL', kind: "city", lat: 30.5538, lng: -87.7111 },
      { name: 'Silverhill, AL', kind: "city", lat: 30.5469, lng: -87.7503 },
      { name: 'Elberta, AL', kind: "city", lat: 30.4144, lng: -87.5978 },
      { name: 'Stapleton, AL', kind: "community", lat: 30.8918, lng: -87.8003 },
      { name: 'Bon Secour, AL', kind: "community", lat: 30.3061, lng: -87.7344 },
      { name: 'Mobile, AL', kind: "city", lat: 30.6954, lng: -88.0399 }
    ],
  },

  contactSection: {
    eyebrow: "YOUR LOCAL COMFORT TEAM",
    titleLine1: "A local team.",
    titleLine2: "A cooler coast.",
    body: "Request a free estimate and tell Wynn Creek AC what your home or business needs. Call the team directly for service.",
    primaryCta: "Request service",
    secondaryCta: "Call Wynn Creek",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This preview form is not connected yet; please call (251) 359-6401 to reach Wynn Creek.",
  },
};
