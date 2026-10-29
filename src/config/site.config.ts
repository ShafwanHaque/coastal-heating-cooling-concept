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
  "brand": {
    "name": "Coastal Heating & Cooling",
    "shortName": "Coastal",
    "logo": "/brand/coastal-official-logo.png",
    "logoLight": "/brand/coastal-official-logo.png",
    "region": "Baldwin County · Alabama Gulf Coast"
  },
  "theme": {
    "style": "clean",
    "colors": {
      "brandPrimary": "#096C78",
      "brandSecondary": "#69C8C8",
      "brandAccent": "#E7AA59",
      "page": "#09252C",
      "surfaceDark": "#09252C",
      "surfaceDarkAlt": "#0E363D",
      "surfaceElevated": "#18515B",
      "surfaceSoft": "#EAF5F5",
      "textPrimary": "#FCFDFD",
      "textSecondary": "#DBE9E9",
      "textMuted": "#91A9A9",
      "textOnBrand": "#FFFFFF",
      "borderSubtle": "#2E4D51",
      "borderStrong": "#55767A",
      "glowPrimary": "#096C78",
      "glowSecondary": "#69C8C8",
      "networkLine": "#E7AA59",
      "success": "#70A982",
      "service1": "#096C78",
      "service2": "#E7AA59",
      "service3": "#69C8C8",
      "service4": "#789A9A",
      "service5": "#C59A65"
    }
  },
  "header": {
    "navServices": "Services",
    "navAreas": "Service areas",
    "navContact": "Contact",
    "helpLabel": "Call 251-501-HVAC (4822)",
    "ctaLabel": "Request service",
    "mobileEyebrow": "BALDWIN COUNTY · ALABAMA GULF COAST",
    "mobileCallLabel": "Call now"
  },
  "opening": {
    "enabled": true,
    "durationMs": 2300,
    "eyebrow": "COASTAL HEATING & COOLING · FOLEY",
    "line1": "Coastal care.",
    "line2": "Lasting comfort.",
    "detail": "Coastal Heating & Cooling · Baldwin County, Alabama",
    "location": "NATE-CERTIFIED · 24/7 SERVICE",
    "skipLabel": "Skip intro"
  },
  "hero": {
    "layout": "open-door",
    "eyebrow": "A COOLER KIND OF COMFORT · BALDWIN COUNTY",
    "headlineLine1": "Comfort, in its",
    "headlineLine2": "element.",
    "description": "Heating, cooling and 24/7 emergency service for homes across Baldwin County.",
    "primaryCta": "Schedule service",
    "secondaryCta": "Call Coastal",
    "locationLabel": "FOLEY · BALDWIN COUNTY",
    "locationValue": "GULF SHORES · ORANGE BEACH · FAIRHOPE",
    "edgeLabel": "REPAIR · INSTALLATION · MAINTENANCE",
    "bottomStatement": "Comfort that feels right at home.",
    "sillLabel": "BALDWIN COUNTY · GULF COAST",
    "serviceLabels": [
      "Cooling",
      "Heating",
      "Air quality"
    ],
    "discoverLabel": "Explore services",
    "motion": {
      "enabled": true,
      "pace": "balanced",
      "ambient": true
    },
    "system": {
      "eyebrow": "LOCAL COMFORT / IN MOTION",
      "modes": [
        {
          "id": "cool",
          "label": "Cooling",
          "detail": "A considered path from warm intake to balanced, conditioned air."
        },
        {
          "id": "warm",
          "label": "Heating",
          "detail": "Steady circulation, carefully controlled for colder days."
        },
        {
          "id": "pure",
          "label": "Air quality",
          "detail": "A focus on filtration and the air moving through every room."
        }
      ]
    },
    "media": {
      "primarySrc": "/hero/coastal-thermostat-family.png",
      "primaryAlt": "A woman adjusts her home thermostat in a bright, comfortable room.",
      "primaryPosition": "center center",
      "fit": "contain",
      "backdrop": "matte"
    }
  },
  "seo": {
    "title": "Coastal Heating & Cooling | Heating, Cooling & HVAC Services",
    "description": "Coastal Heating & Cooling provides HVAC repair, installation, maintenance, duct services and indoor air quality solutions throughout Baldwin County, Alabama."
  },
  "contact": {
    "phoneDisplay": "251-501-HVAC (4822)",
    "phoneHref": "tel:+12515014822",
    "email": "Nick@CoastalCoolingPro.com",
    "address": "626 E. Orange Avenue, Foley, AL 36535",
    "contactUrl": "#contact",
    "servicesUrl": "#services"
  },
  "brandStandard": {
    "eyebrow": "LOCAL KNOW-HOW · PERSONAL SERVICE",
    "titleLine1": "Keeping the Gulf Coast cool.",
    "titleLine2": "Coastal comfort, handled with care.",
    "bodyTitle": "Comfort starts with a team that listens.",
    "body": "Locally owned and operated, Coastal Heating & Cooling brings NATE-certified expertise to Gulf Coast homes and businesses, with no extra night or weekend service charge.",
    "callLabel": "Call now",
    "availabilityLabel": "Baldwin County · Alabama Gulf Coast",
    "panelEyebrow": "COASTAL SERVICE STANDARD",
    "panelTitle": "Coastal Heating & Cooling provides Baldwin County HVAC repair, replacement, installation and maintenance with a NATE-certified team.",
    "panelFooter": "Baldwin County · Alabama Gulf Coast",
    "handoff": "Explore services from Coastal.",
    "items": [
      {
        "icon": "cooling",
        "label": "Cooling and repair",
        "detail": "Reliable cooling service for homes and businesses."
      },
      {
        "icon": "heating",
        "label": "Complete HVAC care",
        "detail": "Installation, maintenance and repair through every season."
      },
      {
        "icon": "maintenance",
        "label": "Local service",
        "detail": "Keeping the Gulf Coast cool."
      }
    ]
  },
  "services": {
    "eyebrow": "HEATING · COOLING · MORE",
    "introLine1": "Comfort built",
    "introLine2": "for the coast.",
    "summaryEyebrow": "COASTAL SERVICE DESK",
    "summaryTitle": "One local team. Year-round comfort.",
    "summaryBody": "AC repair, heating, duct services and air filtration for the salty, humid Gulf Coast climate.",
    "summaryCta": "Talk to our team",
    "items": [
      {
        "name": "AC Repair & Replacement",
        "shortName": "Cooling",
        "image": "/services/01.svg"
      },
      {
        "name": "AC Installation",
        "shortName": "Heating",
        "image": "/services/02.svg"
      },
      {
        "name": "Heating & Heat Pumps",
        "shortName": "Installation",
        "image": "/services/03.svg"
      },
      {
        "name": "Duct Services & Air Balancing",
        "shortName": "Maintenance",
        "image": "/services/04.svg"
      },
      {
        "name": "Air Filtration & Indoor Air Quality",
        "shortName": "Air quality",
        "image": "/services/05.svg"
      }
    ]
  },
  "coverage": {
    "eyebrow": "NEARBY SERVICE AREA",
    "titleLine1": "Keeping the Gulf Coast",
    "titleLine2": "comfortable.",
    "description": "Gulf Shores, Orange Beach, Foley, Elberta, Lillian, Magnolia Springs, Fairhope, Daphne, Spanish Fort, Summerdale, Silverhill, Robertsdale, Loxley and Bay Minette.",
    "featuredLocation": "Gulf Shores, AL",
    "locationDetail": "Proud to serve Baldwin County · Alabama Gulf Coast.",
    "ctaLabel": "Request service",
    "networkLabel": "THE LOCAL SERVICE NETWORK",
    "regionLabel": "Baldwin County · Alabama Gulf Coast",
    "metrics": [
      {
        "value": "14 communities",
        "label": "Local coverage"
      },
      {
        "value": "NATE-certified team",
        "label": "Service area"
      },
      {
        "value": "24/7 emergency service",
        "label": "Local team"
      }
    ],
    "locations": [
      {
        "name": "Gulf Shores, AL",
        "kind": "city",
        "lat": 30.246,
        "lng": -87.7008,
        "hub": false
      },
      {
        "name": "Orange Beach, AL",
        "kind": "city",
        "lat": 30.2944,
        "lng": -87.5736,
        "hub": false
      },
      {
        "name": "Foley, AL",
        "kind": "city",
        "lat": 30.4066,
        "lng": -87.6836,
        "hub": true
      },
      {
        "name": "Elberta, AL",
        "kind": "city",
        "lat": 30.4144,
        "lng": -87.5978,
        "hub": false
      },
      {
        "name": "Lillian, AL",
        "kind": "city",
        "lat": 30.4191,
        "lng": -87.4478,
        "hub": false
      },
      {
        "name": "Magnolia Springs, AL",
        "kind": "city",
        "lat": 30.3905,
        "lng": -87.7769,
        "hub": false
      },
      {
        "name": "Fairhope, AL",
        "kind": "city",
        "lat": 30.5227,
        "lng": -87.9033,
        "hub": false
      },
      {
        "name": "Daphne, AL",
        "kind": "city",
        "lat": 30.6035,
        "lng": -87.9036,
        "hub": false
      },
      {
        "name": "Spanish Fort, AL",
        "kind": "city",
        "lat": 30.6749,
        "lng": -87.9153,
        "hub": false
      },
      {
        "name": "Summerdale, AL",
        "kind": "city",
        "lat": 30.4863,
        "lng": -87.6994,
        "hub": false
      },
      {
        "name": "Silverhill, AL",
        "kind": "city",
        "lat": 30.5469,
        "lng": -87.7503,
        "hub": false
      },
      {
        "name": "Robertsdale, AL",
        "kind": "city",
        "lat": 30.5538,
        "lng": -87.7111,
        "hub": false
      },
      {
        "name": "Loxley, AL",
        "kind": "city",
        "lat": 30.6188,
        "lng": -87.7536,
        "hub": false
      },
      {
        "name": "Bay Minette, AL",
        "kind": "city",
        "lat": 30.8829,
        "lng": -87.773,
        "hub": false
      }
    ]
  },
  "contactSection": {
    "eyebrow": "YOUR LOCAL COMFORT TEAM",
    "titleLine1": "A local team.",
    "titleLine2": "Ready to help.",
    "body": "Tell Coastal what your home or business needs, or call the team directly to get started.",
    "primaryCta": "Request service",
    "secondaryCta": "Call Coastal",
    "submissionMode": "demo",
    "formEndpoint": "",
    "successMessage": "Thanks for reaching out. This preview form is not connected yet; please call 251-501-HVAC (4822) to reach Coastal."
  }
};
