// app/registerpage/[slug]/data/heroData.ts
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  searchPlaceholder: string;
  rating: number;
  customers: number;
}

export const getHeroData = (slug: string): HeroData => {
  const heroDataMap: Record<string, HeroData> = {
    'environmental-industry': {
      title: "Ensure Complete Compliance in the Environmental Industry with Us",
      subtitle: "",
      description: "Looking to conduct ESDD compliance for your business? Connect with our experts and experience a smooth, streamlined process.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000
    },
    'eia': {
      title: "Get your Environmental Impact Assessment (EIA) completed with the expert assistance of",
      subtitle: "DoStartup",
      description: "Corpbiz offers a one-stop solution for environmental clearance for your development projects. With 100+ NABET-qualified EIA and ESG consultants, we bring unmatched expertise to the table. Contact us today to get your EIA process started.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'environmental-advisory':{
      title: "Environmental Advisory for Long-Term Success",
      subtitle: "",
      description: "DoStartUp is the leading consultancy company in providing sustainable development plans and giving Environmental Advisory Services.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'environmental-licensing': {
      title: "Get End-to-End Environmental Licensing Assistance",
      subtitle: "",
      description: "Looking for Environmental Licensing support? Partner with Do Startup to move forward confidently.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'battery-waste-management': {
      title: "Battery Waste Management Made Simple — ",
      subtitle: "Do Startup Experts at Your Service.",
      description: "DoStartUp – Your one-stop platform for Battery Waste Management tailored to your needs.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'hazardous-waste-management':{
      title: "Get Eco-smart Solutions for Hazardous Waste Management ",
      subtitle: "",
      description: "Hazardous Waste Management requires expert solutions to be treated efficiently. Connect with DoStartup for smart and compliant waste management planning.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'plastic-waste-management':{
      title: "Plastic Waste Management Solutions Under One Roof",
      subtitle: "",
      description: "No need to worry! Corpbiz is here to help you with end-to-end Plastic Waste Management Solutions – from authorization and compliance to recycling and reporting. Our team ensures that your business stays compliant with environmental laws while contributing to sustainability.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'e-waste':{
      title: "EPR Compliance Solutions for E-waste Management",
      subtitle: "",
      description: "Managing EPR Compliance for E-Waste is now simpler with DoStartUp. Give us a call today to understand the complete compliance structure!",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'pollution-noc': {
      title: "Get Pollution NOC and Contribute to Sustainable Development",
      subtitle: "",
      description: "Want to get Pollution NOC and contribute to sustainable development programs? DoStartUp is the right channel to approach!",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'business-document-templates': {
      title: "Business Document Templates",
      subtitle: "",
      description: "DoStartUp offers a range of templates to streamline your business activities and make processes more efficient.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'advisory-service': {
      title: "India's AI-powered Platform for Advisory Services",
      subtitle: "",
      description: "Advisory services are now more affordable and efficient! Gain the benefits of expert business advice with guidance from DoStartUp professionals.",
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'legal-services':{
      title: "Gain Access to Top-Quality Legal Services in India",
      subtitle: "",
      description: `Looking for reliable legal services in India? \n End your search and connect with us for effective solutions to all your legal challenges.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'property-related': {
      title: "Get Expert Support in Drafting Property Related Agreements",
      subtitle: "",
      description: `Do you require drafting Property Related Agreements? Drop a query and our experts will help you out in the matter`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'servicerelated': {
      title: "Drafting Service-related Agreements is now simple and hassle-free with DoStartUp!",
      subtitle: "",
      description: `Do you require drafting Property Related Agreements? Drop a query and our experts will help you out in the matter`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'tax-filing': {
      title: "Experience Easy and Streamlined Tax Filing for Individuals and Businesses",
      subtitle: "with DoStartUp!",
      description: `Get quick and reliable tax filing solutions for both individuals and businesses with DoStartUp, while ensuring full compliance with tax regulations.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'fssai-eating-license': {
      title: "Running a Food Business? Get your FSSAI License quickly and hassle-free with ",
      subtitle: "DoStartUp!",
      description: `DoStartUp can help you obtain an FSSAI License in India quickly and efficiently. We also assist with FSSAI Registration. Our experts will guide you in choosing the right food license and category to match your business needs.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'business-registration': {
      title: "Make Your Business Ready to Scale with",
      subtitle: "DoStartUp!",
      description: `50,000+ start-ups have scaled new heights with DoStartUp’s registration and compliance services. Backed by 250+ experts, we’ve helped entrepreneurs and emerging businesses expand their presence across the globe.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'secretarial-compliances': {
      title: "End-to-end Management of Secretarial Compliances in India with",
      subtitle: "DoStartUp!",
      description: `End-to-End Secretarial Compliance Management – Is your business seeking complete management of secretarial compliances? DoStartUp is your trusted partner to ensure accurate, timely, and hassle-free compliance management.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'global-company-formation': {
      title: "Easiest way to mining your Business with",
      subtitle: "DoStartUp!",
      description: `We are highly focused on business services and that will lead positively to the future web with DoStartUp.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'government-licenses': {
      title: "Secure Government Licenses without Wasting Your Time with",
      subtitle: "DoStartUp!",
      description: `Want to acquire certain Government Licenses? DoStartUp's experts can guide you through the process in a hassle-free manner`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'government-registration': {
      title: "Get Hassle-Free Government Registration Solutions with DoStartUp – Simple, Fast, and Worry-Free!",
      subtitle: "",
      description: `Here at DoStartUp, you can get tailored solutions for all government licensing in a quick interval and without much trouble`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'it-services': {
      title: "Easiest way to mining your Business with",
      subtitle: "DoStartUp!",
      description: `We are highly focused on business services and that will lead positively to the future web with DoStartUp.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'ngo': {
      title: "Get Your Online NGO Registration in India With",
      subtitle: "DoStartUp!",
      description: `Did you know? Registering an NGO as a Trust, Society, or Section 8 Company provides an ideal structure for non-profit organizations. Connect with DoStartUp to open an NGO that can operate PAN India with full flexibility.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
    'iso': {
      title: "Get ISO Certified Faster in No Time with",
      subtitle: "DoStartUp!",
      description: `Do you want to get an ISO certification in a quick time frame? Connect with the experts at Corpbiz to obtain a quick certification.`,
      searchPlaceholder: "Search Your Services",
      rating: 4.9,
      customers: 30000,
    },
  };
  
  return heroDataMap[slug] || heroDataMap['global-company-formation'];
};
