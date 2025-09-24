export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  href: string;
}

const servicesMap: Record<string, Service[]> = {
  'environmental-industry': [
    {
      id: 'ESDD in Food Processing Industry',
      title: 'ESDD in Food Processing Industry',
      description:
        'Ensure smooth Environmental & Social Due Diligence in the Food Processing Industry with Corpbiz — your partner in compliance and sustainability.',
      price: 'Register Now',
      href: '/esdd-food-processing'
    },
    {
      id: 'ESDD in Tobacco Industry',
      title: 'ESDD in Tobacco Industry',
      description:
        'Environmental & Social Due Diligence in the Tobacco Industry – Corpbiz helps you navigate the process smoothly, making compliance more accessible.',
      price: 'Register Now',
      href: '/esdd-tobacco-industry'
    },
    {
      id: 'ESDD in Aerospace Industry',
      title: 'ESDD in Aerospace Industry',
      description:
        'Environmental & Social Due Diligence in the Aerospace Industry – Seamlessly handled by Corpbiz, your trusted compliance partner.',
      price: 'Register Now',
      href: '/esdd-aerospace-industry'
    },
    {
      id: 'ESDD in Renewable Energy Industry',
      title: 'ESDD in Renewable Energy Industry',
      description:
        'ESDD Compliance in the Renewable Energy Industry – Let Corpbiz’s expert team conduct Environmental & Social Due Diligence to ensure smooth compliance.',
      price: 'Register Now',
      href: '/esdd-renewable-energy-industry'
    },
    {
      id: 'ESDD in Financial & Banking Sector',
      title: 'ESDD in Financial & Banking Sector',
      description:
        'Conduct Environmental & Social Due Diligence in the Financial & Banking Sector efficiently with the support of Corpbiz’s expert team.',
      price: 'Register Now',
      href: '/esdd-financial-banking-sector'
    },
    {
      id: 'ESDD in Dairy Industry',
      title: 'ESDD in Dairy Industry',
      description:
        'Get ESDD in the Dairy Industry done smoothly with Corpbiz by your side.',
      price: 'Register Now',
      href: '/esdd-dairy-industry'
    },
    {
      id: 'ESDD in the Sugar Industry',
      title: 'ESDD in the Sugar Industry',
      description:
        'Simplify Environmental & Social Due Diligence in the Sugar Industry — trust Corpbiz to make compliance seamless.',
      price: 'Register Now',
      href: '/esdd-sugar-industry'
    },
    {
      id: 'ESDD in Iron and Steel Industry',
      title: 'ESDD in Iron and Steel Industry',
      description:
        'Get Environmental & Social Due Diligence in the Iron & Steel Industry done effortlessly with Corpbiz.',
      price: 'Register Now',
      href: '/esdd-iron-steel-industry'
    },
    {
      id: 'ESDD in Agricultural Equipment Manufacturing Industry',
      title: 'ESDD in Agricultural Equipment Manufacturing Industry',
      description:
        'Conduct ESDD in the Agricultural Equipment Manufacturing Industry with Corpbiz — backed by 500+ ESDD and ESG experts.',
      price: 'Register Now',
      href: '/esdd-agricultural-equipment-industry'
    },
    {
      id: 'ESDD in Solar Energy Industry',
      title: 'ESDD in Solar Energy Industry',
      description:
        'Ensure ESDD compliance in the Solar Energy Industry with Corpbiz, supported by 500+ ESDD and ESG experts.',
      price: 'Register Now',
      href: '/esdd-solar-energy-sector'
    },
    {
      id: 'ESDD in Furniture and Fixtures Industry',
      title: 'ESDD in Furniture and Fixtures Industry',
      description:
        'Ensure smooth ESDD for the Furniture & Fixtures Industry with Corpbiz — delivering 99.8% proficiency without hassle.',
      price: 'Register Now',
      href: '/esdd-furniture-fixtures'
    }
  ],
  "eia": [
    {
      id: 'State Pollution Control Board (SPCB) - NOC',
      title: 'State Pollution Control Board (SPCB) - NOC',
      description:
        'Get your SPCB NOC done effortlessly! DoStartup simplifies the approval process so you can start your business without delays.',
      price: 'Register Now',
      href: '/state-pollution-control-board-spcb-noc'
    },
    {
      id: 'Environmental Clearance',
      title: 'Environmental Clearance',
      description:
        'Embrace sustainability and reduce your carbon footprint with hassle-free environmental auditing services from DoStartup. We have successfully conducted numerous environmental audits across industries.',
      price: 'Register Now',
      href: '/startup/environmental-clearance'
    },
    {
      id: 'Environmental Impact Assessment (EIA)',
      title: 'Environmental Impact Assessment (EIA)',
      description:
        'Struggling with the lengthy Environmental Clearance process? DoStartUp’s expert consultants ensure fast, smooth, and hassle-free approvals for your projects.',
      price: 'Register Now',
      href: '/environmental-impact-assessment-eia'
    },
    {
      id: 'Hydrogeological survey report',
      title: 'Hydrogeological survey report',
      description:
        'Is your project ready for a sustainable future? Start your Environmental Impact Assessment with DoStartUp today to ensure a positive impact on the environment.',
      price: 'Register Now',
      href: '/hydrogeological-survey-report'
    },
    {
      id: 'Half-Yearly Environmental Compliance',
      title: 'Half-Yearly Environmental Compliance',
      description:
        'Conduct Environmental & Social Due Diligence in the Financial & Banking Sector efficiently with the support of Corpbiz’s expert team.',
      price: 'Register Now',
      href: '/half-yearly-environmental-compliance'
    },
    {
      id: 'Wildlife Conservation Plan',
      title: 'Wildlife Conservation Plan',
      description:
        'Secure your project with confidence! DoStartUp provides accurate Hydrogeological Survey Reports and expert guidance to meet compliance seamlessly.',
      price: 'Register Now',
      href: '/wildlife-conservation-plan'
    },
    {
      id: 'Environmental Management Plan Report',
      title: 'Environmental Management Plan Report',
      description:
        'Don’t risk your accreditation! DoStartUp ensures hassle-free Half-Yearly Environmental Compliance reporting so your business stays audit-ready.',
      price: 'Register Now',
      href: '/consent-for-establishment-cfe-from-spcb'
    },
    {
      id: 'Consent for Operation (CFO)',
      title: 'Consent for Operation (CFO)',
      description:
        'For Consent for Operation (CFO) of your company, get your Pollution NOC seamlessly with the assistance of DoStartUp.',
      price: 'Register Now',
      href: '/consent-for-operation-cfo'
    },
    {
      id: 'Extended Producer Responsibility',
      title: 'Extended Producer Responsibility',
      description:
        'Get your Extended Producer Responsibility (EPR) Authorization hassle-free with the expert assistance of DoStartUp.',
      price: 'Register Now',
      href: '/extended-producer-responsibility'
    },
    {
      id: 'Soil Testing',
      title: 'Soil Testing',
      description:
        'Worried about soil fertility and productivity? Schedule a call with DoStartUp’s professionals for soil testing services to maximize your agricultural potential.',
      price: 'Register Now',
      href: '/soil-testing'
    }
  ],
  'environmental-advisory': [
    {
      id: 'Environment, Social and Governance (ESG) Strategies',
      title: 'Environment, Social and Governance (ESG) Strategies',
      description:
        'Strong Environment, Social, and Governance (ESG) strategies are now a key performance metric for businesses. DoStartUp helps you design and implement sustainable ESG practices to enhance long-term growth.',
      price: 'Register Now',
      href: '/esg-strategies'
    },
    {
      id: 'Construction and Demolition (C&D) Waste Recycling',
      title: 'Construction and Demolition (C&D) Waste Recycling',
      description:
        'Start your Construction & Demolition Waste Recycling plant with ease. DoStartUp helps you secure all required approvals.',
      price: 'Register Now',
      href: '/startup/cd-waste-recycling'
    },
    {
      id: 'Risk Assessment',
      title: 'Risk Assessment',
      description:
        'Ensure compliance by identifying and addressing risks during Environmental Clearance. DoStartUp helps you with comprehensive Risk Assessment in line with applicable laws.',
      price: 'Register Now',
      href: '/risk-assessment'
    },
    {
      id: 'Supply Chain and Human Rights and Environmental Due Diligence',
      title: 'Supply Chain and Human Rights and Environmental Due Diligence',
      description:
        'Strengthen your supply chain with effective Human Rights and Environmental Due Diligence. DoStartUp helps you build robust, digital, and compliant risk management processes.',
      price: 'Register Now',
      href: '/supply-chain-human-rights-esdd'
    },
    {
      id: 'Carbon Credit Trading Scheme',
      title: 'Carbon Credit Trading Scheme',
      description:
        'Maximize revenue opportunities with the Carbon Credit Trading Scheme. DoStartUp guides you in optimizing carbon credit trading for compliance and profitability.',
      price: 'Register Now',
      href: '/startup/carbon-credit-trading-scheme'
    },
    {
      id: 'Environmental Due Diligence Services',
      title: 'Environmental Due Diligence Services',
      description:
        'Ensure seamless compliance with Environmental Due Diligence (EDD) in India. DoStartUp assists businesses in meeting EDD guidelines with expert support.',
      price: 'Register Now',
      href: '/environmental-due-diligence'
    }
  ],
  'environmental-licensing': [
    {
      id: 'Authorized Vehicle Scrapping Facility (AVSF)',
      title: 'Authorized Vehicle Scrapping Facility (AVSF)',
      description:
        'Set up your Authorized Vehicle Scrapping Facility (AVSF) with Do Startup. Get expert assistance for hassle-free registration, compliance, and documentation.',
      price: 'Register Now',
      href: '/authorized-vehicle-scrapping-facility-avsf'
    },
    {
      id: 'TSDF Facility Services',
      title: 'TSDF Facility Services',
      description:
        'Start your TSDF Facility with Do Startup — licensing, compliance & setup made easy.',
      price: 'Register Now',
      href: '/how-to-start-treatment-storage-disposal-facility-tsdf'
    },
    {
      id: 'iCAT Certification',
      title: 'iCAT Certification',
      description:
        'Get iCAT Certification with Do Startup. Expert assistance for automotive and non-automotive sectors, including Noise Vibration, Powertrain, and Harshness testing.',
      price: 'Register Now',
      href: '/icat-certification'
    },
    {
      id: 'Carbon Credit Accounting',
      title: 'Carbon Credit Accounting',
      description:
        'Are you looking to align your carbon credit accounting with global sustainability goals? Let Do Startup experts simplify the entire process for you',
      price: 'Register Now',
      href: '/carbon-credit-accounting'
    },
    {
      id: 'LEED Zero Carbon Certification',
      title: 'LEED Zero Carbon Certification',
      description:
        'Get LEED Zero Carbon Certification for your projects now! Achieve Net Zero Carbon Emissions with the expert guidance of our 400+ LEED consultants at Do Startup.',
      price: 'Register Now',
      href: '/leed-zero-carbon-certification'
    },
    {
      id: 'LEED Zero Water Certification',
      title: 'LEED Zero Water Certification',
      description:
        'Get LEED Zero Water Certification for your projects worldwide with the support of our 400+ expert LEED consultants at Do Startup.',
      price: 'Register Now',
      href: '/leed-zero-water-certification'
    },
    {
      id: 'Green Building Certification',
      title: 'Green Building Certification',
      description:
        'Make your building sustainable and compliant with global environmental standards. Get your Green Building Certification today with Do Startup experts.',
      price: 'Register Now',
      href: '/green-building-certification'
    },
    {
      id: 'PEFC Certification',
      title: 'PEFC Certification',
      description:
        'Is your business part of the forest-based products supply chain? Get PEFC Certification with Do Startup experts and ensure sustainable sourcing & compliance.',
      price: 'Register Now',
      href: '/pefc-certification'
    },
    {
      id: 'FSC Certification',
      title: 'FSC Certification',
      description:
        'Using forest-based raw materials in your business? Get FSC Certification with Do Startup experts and showcase your commitment to sustainable forestry.',
      price: 'Register Now',
      href: '/fsc-certification'
    }
  ],
  'battery-waste-management': [
    {
      id: 'New Lead Acid Battery Import License',
      title: 'New Lead Acid Battery Import License',
      description:
        'Want to import lead acid batteries? A New Lead Acid Battery Import License is mandatory for businesses dealing in their import. Importers must apply to the CPCB to obtain approval. Let DoStartup experts simplify the process and ensure smooth compliance for you!',
      price: 'Register Now',
      href: '/new-lead-acid-battery-import-license'
    },
    {
      id: 'Lithium-Ion Battery Import License',
      title: 'Lithium-Ion Battery Import License',
      description:
        'Planning to import lithium-ion batteries? A Lithium-Ion Battery Import License is mandatory for businesses dealing in their import. Let DoStartup experts help you with end-to-end guidance, from application to approval, ensuring quick and hassle-free compliance.',
      price: 'Register Now',
      href: '/lithium-ion-battery-import-license'
    },
    {
      id: 'Registration for Lead Acid Battery Recycling',
      title: 'Registration for Lead Acid Battery Recycling',
      description:
        'Lead Acid Battery Recycling is crucial to prevent major environmental hazards. Get your Lead Acid Battery Recycling Registration done with ease through DoStartup, where our experts handle everything from documentation to approval seamlessly.',
      price: 'Register Now',
      href: '/lead-acid-battery-recycling-registration'
    },
    {
      id: 'Registration for Scrap Battery Import',
      title: 'Registration for Scrap Battery Import',
      description:
        'Anyone who wishes to deal in scrap battery import must first secure the proper registration. Get expert guidance and end-to-end assistance with DoStartup to make your import process hassle-free.',
      price: 'Register Now',
      href: '/scrap-battery-import-registration'
    }
  ],
  'hazardous-waste-management': [
    {
      id: 'Solid Waste Management Authorization',
      title: 'Solid Waste Management Authorization',
      description:
        'Any individual or business involved in the processing, treatment, recycling, or disposal of solid waste must obtain Solid Waste Management Authorization from the concerned authority. This authorization ensures that all activities are carried out in compliance with environmental regulations, promoting safe and sustainable waste management practices.',
      price: 'Register Now',
      href: '/solid-waste-management-authorisation'
    },
    {
      id: 'Hazardous Waste Management Authorization',
      title: 'Hazardous Waste Management Authorization',
      description:
        'If your business is involved in handling, generating, collecting, storing, packaging, or transporting hazardous waste, obtaining Hazardous Waste Management Authorization is mandatory. Corpbiz assists you in securing authorization seamlessly while ensuring compliance with all environmental regulations.',
      price: 'Register Now',
      href: '/hazardous-waste-management-authorisation-domestic'
    },
    {
      id: 'Authorization for Import of Hazardous Waste',
      title: 'Authorization for Import of Hazardous Waste',
      description:
        'Looking to import hazardous waste? Authorization is mandatory. Corpbiz helps you obtain the required approvals while ensuring full compliance with environmental regulations.',
      price: 'Register Now',
      href: '/authorization-for-import-of-hazardous-waste'
    },
    {
      id: 'Authorization for Export of Hazardous Waste',
      title: 'Authorization for Export of Hazardous Waste',
      description:
        'Planning to export hazardous waste? Obtaining authorization is mandatory. Corpbiz ensures smooth approval and compliance with all regulatory requirements.',
      price: 'Register Now',
      href: '/authorization-for-export-of-hazardous-waste'
    },
    {
      id: 'Bio Medical Waste Recycling Plant',
      title: 'Bio Medical Waste Recycling Plant',
      description:
        'Struggling with setting up your bio-medical waste recycling plant? Get expert assistance from Corpbiz for affordable, reliable, and timely setup solutions that ensure full compliance with regulations.',
      price: 'Register Now',
      href: '/startup/bio-medical-waste-treatment-plant'
    },
    {
      id: 'Hazardous Waste Export Authorisation',
      title: 'Hazardous Waste Export Authorisation',
      description:
        'Ensure complete compliance for Hazardous Waste Export Authorisation. Our experts assist you in meeting all regulatory requirements, mitigating risks, and obtaining necessary approvals smoothly.',
      price: 'Register Now',
      href: '/hazardous-waste-export-authorisation'
    },
    {
      id: 'Land Waste Management',
      title: 'Land Waste Management',
      description:
        'Ensure compliance with all regulations related to land waste. Get expert assistance in Land Waste Management with DoStartup and stay risk-free.',
      price: 'Register Now',
      href: '/land-waste-management'
    },
    {
      id: 'Hazardous Waste Management and Compliance Assurance',
      title: 'Hazardous Waste Management and Compliance Assurance',
      description:
        'Ensure full compliance with all risks associated with hazardous waste. Get reliable Hazardous Waste Management support with DoStartup experts by your side.',
      price: 'Register Now',
      href: '/hazardous-waste-management-and-compliance-assurance'
    },
    {
      id: 'Industrial Waste Management',
      title: 'Industrial Waste Management',
      description:
        'Facing hurdles in complying with industrial waste management regulations? Let DoStartup experts help you mitigate business risks and ensure sustainable growth with eco-smart solutions.',
      price: 'Register Now',
      href: '/startup/industrialWasteContent'
    }
  ],
  'plastic-waste-management': [
    {
      id: 'EPR Authorization for Plastic waste Management',
      title: 'EPR Authorization for Plastic waste Management',
      description:
        'Extended Producer Responsibility (EPR) Authorization is mandatory for any business dealing in plastic waste management. Without it, companies cannot manufacture, import, or sell plastic products in compliance with environmental regulations.',
      price: 'Register Now',
      href: '/epr-authorization-for-plastic-waste-management'
    },
    {
      id: 'EPR Post Compliance – Plastic Waste',
      title: 'EPR Post Compliance – Plastic Waste',
      description:
        'After obtaining EPR Authorisation for plastic waste management, every Producer, Importer, Brand Owner (PIBOs), Recycler, Plastic Trader, and Manufacturer must ensure strict post-compliance reporting.',
      price: 'Register Now',
      href: '/epr-post-compliance-plastic-waste'
    },
    {
      id: 'Plastic Waste Recycling Plant & PWM',
      title: 'Plastic Waste Recycling Plant & PWM',
      description:
        'Planning to set up a Plastic Waste Recycling Plant in India? Connect with DoStartUp and turn plastic waste into a profitable and eco-friendly business opportunity!',
      price: 'Register Now',
      href: '/plastic-waste-recycling-plant-pwm-setup'
    },
    {
      id: 'Plastic Waste Processors Authorisation',
      title: 'Plastic Waste Processors Authorisation',
      description:
        'Want to step into the field of plastic waste processing and contribute to reducing environmental impact? Obtain your Plastic Waste Processors Authorisation with DoStartUp and start your eco-friendly journey today!',
      price: 'Register Now',
      href: '/plastic-waste-processors-authorisation'
    },
    {
      id: 'EPR Fulfilment For Plastic Waste Management',
      title: 'EPR Fulfilment For Plastic Waste Management',
      description:
        'Ensure smooth EPR Fulfilment in Plastic Waste Management with the expert assistance of DoStartUp.',
      price: 'Register Now',
      href: '/epr-fulfilment-plastic-waste-management'
    }
  ],
  'e-waste': [
    {
      id: 'EPR Registration',
      title: 'EPR Registration',
      description:
        'Hey PIBOs! Struggling with EPR registration in India? Don’t worry! Our environmental consultants at DoStartUp are here to help.',
      price: 'Register Now',
      href: '/startup/epr-registration'
    },
    {
      id: 'Refurbisher Authorization and License',
      title: 'Refurbisher Authorization and License',
      description:
        'Refurbisher Authorization and License - Looking to obtain your refurbisher authorization and license? Ensure compliance, build credibility, and drive sustainable growth with DoStartUp experts.',
      price: 'Register Now',
      href: '/refurbisher-authorization'
    },
    {
      id: 'PRO Authorization',
      title: 'PRO Authorization',
      description:
        'Planning to set up a Producer Responsibility Organisation in India? Get expert assistance from DoStartUp for PRO Authorization and fulfill your EPR obligations.',
      price: 'Register Now',
      href: '/pro-authorization'
    },
    {
      id: 'Plastic Waste Authorization',
      title: 'Plastic Waste Authorization',
      description:
        'Unmanaged plastic waste can damage your brand’s reputation! Secure your plastic waste authorization and efficiently manage plastic waste disposal with DoStartUp.',
      price: 'Register Now',
      href: '/startup/plastic-waste-authorization'
    },
    {
      id: 'E-Waste Recycling Authorization',
      title: 'E-Waste Recycling Authorization',
      description:
        'Want to obtain your e-waste recycling authorization? Let DoStartUp guide you in taking the first step toward sustainable e-waste management for a greener future.',
      price: 'Register Now',
      href: '/e-waste-recycling-authorization'
    },
    {
      id: 'EPR Authorization for E-waste',
      title: 'EPR Authorization for E-waste',
      description:
        'Easily get EPR Authorization for E-Waste management. Ensure compliance with extended producer responsibility regulations with guidance from DoStartUp experts.',
      price: 'Register Now',
      href: '/epr-authorization-e-waste'
    },
    {
      id: 'EPR Post Compliance (E-Waste)',
      title: 'EPR Post Compliance (E-Waste)',
      description:
        'Unsure how to fulfill EPR post-compliance requirements for e-waste? Let DoStartUp experts help you drive positive change in the electronics recycling sector.',
      price: 'Register Now',
      href: '/epr-post-compliance'
    },
    {
      id: 'Authorization for Export of E-waste',
      title: 'Authorization for Export of E-waste',
      description:
        'Companies exporting e-waste must obtain authorization from the relevant authorities, such as MoEF and SPCB. DoStartUp can assist in this process.',
      price: 'Register Now',
      href: '/export-e-waste'
    },
    {
      id: 'EPR Target Fulfilment',
      title: 'EPR Target Fulfilment',
      description:
        'Our network of 500+ EPR experts ensures your business meets its EPR targets on time, with support from DoStartUp.',
      price: 'Register Now',
      href: '/epr-target-fulfilment'
    },
    {
      id: 'EPR Authorization For Battery Waste',
      title: 'EPR Authorization For Battery Waste',
      description:
        'Obtain EPR Authorization for Battery Waste management with support from DoStartUp experts. Ensure eco-friendly operations and regulatory compliance.',
      price: 'Register Now',
      href: '/epr-battery-waste'
    },
    {
      id: 'EPR Credits From Plastic Waste Recyclers',
      title: 'EPR Credits From Plastic Waste Recyclers',
      description:
        'DoStartUp provides brand partners with information about plastic collection through EPR Credits.',
      price: 'Register Now',
      href: '/plastic-credit-scheme'
    },
    {
      id: 'EPR for Importers',
      title: 'EPR for Importers',
      description:
        'Are you an importer aiming to reduce your product’s environmental impact? Get your EPR Certificate for importers with guidance from DoStartUp experts.',
      price: 'Register Now',
      href: '/epr-certificate-importers'
    },
    {
      id: 'EPR Credits',
      title: 'EPR Credits',
      description:
        'Get verified EPR credits for e-waste compliance. Connect with certified recyclers, trade credits legally, and fulfill your CPCB EPR obligations efficiently with DoStartUp.',
      price: 'Register Now',
      href: '/epr-credits-overview'
    },
    {
      id: 'E-waste Recycling license',
      title: 'E-waste Recycling license',
      description:
        'With DoStartUp’s help, obtain an E-waste recycling license from start to finish with ease.',
      price: 'Register Now',
      href: '/e-waste-recycling-license'
    },
    {
      id: 'EPR Registration for Producers and Brand Owners',
      title: 'EPR Registration for Producers and Brand Owners',
      description:
        'Secure EPR Registration for Producers and Brand Owners with guidance from DoStartUp, along with full compliance support.',
      price: 'Register Now',
      href: '/epr-registration-for-producers-and-brand-owners'
    },
    {
      id: 'EPR Fulfillment in E-Waste Management',
      title: 'EPR Fulfillment in E-Waste Management',
      description:
        'Achieve seamless EPR compliance for E-Waste management. Let DoStartUp experts guide you toward a greener, sustainable future.',
      price: 'Register Now',
      href: '/epr-fullfillment-e-waste-management'
    },
    {
      id: 'EPR Compliance',
      title: 'EPR Compliance',
      description:
        'Ensure EPR Compliance in India with DoStartUp. Get expert advice on Extended Producer Responsibility regulations, documentation, and hassle-free compliance solutions.',
      price: 'Register Now',
      href: '/need-for-epr-compliance-in-india'
    }
  ],
  'pollution-noc': [
    {
      id: 'EPR Registration',
      title: 'EPR Registration',
      description:
        'Hey PIBOs! Struggling with EPR registration in India? Don’t worry! Our environmental consultants at DoStartUp are here to help.',
      price: 'Register Now',
      href: '/startup/epr-registration'
    },
    {
      id: 'Refurbisher Authorization and License',
      title: 'Refurbisher Authorization and License',
      description:
        'Refurbisher Authorization and License - Looking to obtain your refurbisher authorization and license? Ensure compliance, build credibility, and drive sustainable growth with DoStartUp experts.',
      price: 'Register Now',
      href: '/refurbisher-authorization'
    },
    {
      id: 'PRO Authorization',
      title: 'PRO Authorization',
      description:
        'Planning to set up a Producer Responsibility Organisation in India? Get expert assistance from DoStartUp for PRO Authorization and fulfill your EPR obligations.',
      price: 'Register Now',
      href: '/pro-authorization'
    },
    {
      id: 'Plastic Waste Authorization',
      title: 'Plastic Waste Authorization',
      description:
        'Unmanaged plastic waste can damage your brand’s reputation! Secure your plastic waste authorization and efficiently manage plastic waste disposal with DoStartUp.',
      price: 'Register Now',
      href: '/startup/plastic-waste-authorization'
    },
    {
      id: 'E-Waste Recycling Authorization',
      title: 'E-Waste Recycling Authorization',
      description:
        'Want to obtain your e-waste recycling authorization? Let DoStartUp guide you in taking the first step toward sustainable e-waste management for a greener future.',
      price: 'Register Now',
      href: '/e-waste-recycling-authorization'
    },
    {
      id: 'EPR Authorization for E-waste',
      title: 'EPR Authorization for E-waste',
      description:
        'Easily get EPR Authorization for E-Waste management. Ensure compliance with extended producer responsibility regulations with guidance from DoStartUp experts.',
      price: 'Register Now',
      href: '/epr-authorization-e-waste'
    },
    {
      id: 'EPR Post Compliance (E-Waste)',
      title: 'EPR Post Compliance (E-Waste)',
      description:
        'Unsure how to fulfill EPR post-compliance requirements for e-waste? Let DoStartUp experts help you drive positive change in the electronics recycling sector.',
      price: 'Register Now',
      href: '/epr-post-compliance'
    },
    {
      id: 'Authorization for Export of E-waste',
      title: 'Authorization for Export of E-waste',
      description:
        'Companies exporting e-waste must obtain authorization from the relevant authorities, such as MoEF and SPCB. DoStartUp can assist in this process.',
      price: 'Register Now',
      href: '/export-e-waste'
    },
    {
      id: 'EPR Target Fulfilment',
      title: 'EPR Target Fulfilment',
      description:
        'Our network of 500+ EPR experts ensures your business meets its EPR targets on time, with support from DoStartUp.',
      price: 'Register Now',
      href: '/epr-target-fulfilment'
    },
    {
      id: 'EPR Authorization For Battery Waste',
      title: 'EPR Authorization For Battery Waste',
      description:
        'Obtain EPR Authorization for Battery Waste management with support from DoStartUp experts. Ensure eco-friendly operations and regulatory compliance.',
      price: 'Register Now',
      href: '/epr-battery-waste'
    },
    {
      id: 'EPR Credits From Plastic Waste Recyclers',
      title: 'EPR Credits From Plastic Waste Recyclers',
      description:
        'DoStartUp provides brand partners with information about plastic collection through EPR Credits.',
      price: 'Register Now',
      href: '/plastic-credit-scheme'
    },
    {
      id: 'EPR for Importers',
      title: 'EPR for Importers',
      description:
        'Are you an importer aiming to reduce your product’s environmental impact? Get your EPR Certificate for importers with guidance from DoStartUp experts.',
      price: 'Register Now',
      href: '/epr-certificate-importers'
    },
    {
      id: 'EPR Credits',
      title: 'EPR Credits',
      description:
        'Get verified EPR credits for e-waste compliance. Connect with certified recyclers, trade credits legally, and fulfill your CPCB EPR obligations efficiently with DoStartUp.',
      price: 'Register Now',
      href: '/epr-credits-overview'
    },
    {
      id: 'E-waste Recycling license',
      title: 'E-waste Recycling license',
      description:
        'With DoStartUp’s help, obtain an E-waste recycling license from start to finish with ease.',
      price: 'Register Now',
      href: '/e-waste-recycling-license'
    },
    {
      id: 'EPR Registration for Producers and Brand Owners',
      title: 'EPR Registration for Producers and Brand Owners',
      description:
        'Secure EPR Registration for Producers and Brand Owners with guidance from DoStartUp, along with full compliance support.',
      price: 'Register Now',
      href: '/epr-registration-for-producers-and-brand-owners'
    },
    {
      id: 'EPR Fulfillment in E-Waste Management',
      title: 'EPR Fulfillment in E-Waste Management',
      description:
        'Achieve seamless EPR compliance for E-Waste management. Let DoStartUp experts guide you toward a greener, sustainable future.',
      price: 'Register Now',
      href: '/epr-fullfillment-e-waste-management'
    },
    {
      id: 'EPR Compliance',
      title: 'EPR Compliance',
      description:
        'Ensure EPR Compliance in India with DoStartUp. Get expert advice on Extended Producer Responsibility regulations, documentation, and hassle-free compliance solutions.',
      price: 'Register Now',
      href: '/need-for-epr-compliance-in-india'
    }
  ],
  'business-document-templates': [
    {
      id: 'Premium Business Templates',
      title: 'Premium Business Templates',
      description:
        'Our premium business templates are divided into 11 major categories, designed to meet global business standards. These templates provide companies with professional, high-quality resources that enhance efficiency and maintain a competitive edge.',
      price: 'Register Now',
      href: '/premium-business-templates'
    },
    {
      id: 'Human Resource Templates',
      title: 'Human Resource Templates',
      description:
        'Our human resource templates bring you one step closer to creating the perfect survey. Designed to simplify your tasks, these templates make survey creation faster and more efficient.',
      price: 'Register Now',
      href: '/human-resource-templates'
    }
  ],
  'advisory-service': [
    {
      id: 'Professional Advisory Services',
      title: 'Professional Advisory Services',
      description:
        'Professional Advisory Services DoStartUp offers comprehensive business consultancy services, covering financial, taxation, and legal aspects, to help your organization achieve sustainable market growth.',
      price: 'Register Now',
      href: '/premium-business-templates'
    },
    {
      id: 'Legal Advisory Services',
      title: 'Legal Advisory Services',
      description:
        'Legal advisory services are becoming increasingly popular in the Indian legal market. Outsourcing these services has emerged as a growing trend, and DoStartUp provides expert support to help businesses navigate legal complexities efficiently.',
      price: 'Register Now',
      href: '/human-resource-templates'
    },
    {
      id: 'GST Advisory Services',
      title: 'GST Advisory Services',
      description:
        'We offer a comprehensive range of GST advisory services, including analyzing the impact of GST on your business, evaluating various market scenarios, and ensuring compliance with legal requirements, all with expert guidance from DoStartUp.',
      price: 'Register Now',
      href: '/human-resource-templates'
    },
    {
      id: 'Pharma Consultancy Services in India',
      title: 'Pharma Consultancy Services in India',
      description:
        'Pharma consultancy services in India offer companies expert guidance on regulatory compliance, market research, clinical trials, manufacturing, and other critical areas, with professional support from DoStartUp.',
      price: 'Register Now',
      href: '/human-resource-templates'
    }
  ],
  'legal-services':[
    {
      id: 'Legal Notice',
      title: 'Legal Notice',
      description:
        'Choosing DoStartUp for your legal notice is the perfect choice if you want a quick, hassle-free, and efficient procedure.',
      price: 'Register Now',
      href: '/legal-notice'
    },
    {
      id: 'RERA Complaint',
      title: 'RERA Complaint',
      description:
        'RERA governs the residential and commercial subdivision sector of real estate. Introduced in 2016, the Real Estate Regulatory Authority (RERA) ensures transparency and accountability in the real estate market. DoStartUp can guide you through the complaint process effectively.',
      price: 'Register Now',
      href: '/rera-complaint-by-dostatup'
    },
    {
      id: 'Cheque Bounce Notice',
      title: 'Cheque Bounce Notice',
      description:
        'Stressed about a cheque bounce notice? DoStartUp provides legal support and simplifies the procedures for handling cheque bounce cases.',
      price: 'Register Now',
      href: '/cheque-bounce-notice'
    },
    {
      id: 'Consumer Complaint',
      title: 'Consumer Complaint',
      description:
        'We believe the customer is king! If a company fails to deliver proper service or the right product, you can take immediate action with DoStartUp’s assistance in filing consumer complaints.',
      price: 'Register Now',
      href: '/consumer-complaint'
    },
    {
      id: 'Public Interest Litigation',
      title: 'Public Interest Litigation',
      description:
        'Obtain a well-drafted Public Interest Litigation petition to ensure speedy trials for the protection of public interests. With DoStartUp, legal help is just a phone call away.',
      price: 'Register Now',
      href: '/public-interest-litigation'
    },{
      id: 'Caveat Petition',
      title: 'Caveat Petition',
      description:
        'Worried about a potential civil case? File your Caveat Petition with DoStartUp to address the situation before it escalates. Take proactive legal action today!',
      price: 'Register Now',
      href: '/caveat-petition'
    },{
      id: 'Legal Heir Certificate',
      title: 'Legal Heir Certificate',
      description:
        'Concerned about securing your rights to family assets or facing delays in claiming inheritance? Get a legal heir certificate with DoStartUp to ensure rightful ownership.',
      price: 'Register Now',
      href: '/startup/legal-heir-certificate'
    },{
      id: 'Section 8-Demand Notice',
      title: 'Section 8-Demand Notice',
      description:
        'Under the IBC, a debtor has an opportunity to settle debts before the start of insolvency proceedings. DoStartUp helps creditors issue a Section 8 Demand Notice efficiently.',
      price: 'Register Now',
      href: '/section-8-demand-notice'
    },{
      id: 'Succession Certificate in India',
      title: 'Succession Certificate in India',
      description:
        'Successors of a deceased person who did not leave a will can obtain authority to use and manage the property legally. DoStartUp assists in acquiring a succession certificate smoothly.',
      price: 'Register Now',
      href: '/succession-certificate'
    },
    {
      id: 'Lease Agreement Drafting',
      title: 'Lease Agreement Drafting',
      description:
        'A lease agreement is a contract where one party grants property usage rights to another party. DoStartUp helps draft precise agreements to protect the interests of both parties.',
      price: 'Register Now',
      href: '/lease-agreement-drafting'
    },{
      id: 'Will Drafting',
      title: 'Will Drafting',
      description:
        'Those wishing to distribute their personal assets to loved ones after their death can create a will. The will is executed posthumously, and DoStartUp can guide you through the process efficiently.',
      price: 'Register Now',
      href: '/will-drafting'
    },{
      id: 'Mutual Divorce',
      title: 'Mutual Divorce',
      description:
        'When both parties agree to divorce mutually, they can file a joint petition in court with consent, free from any pressure or undue influence. DoStartUp provides expert support throughout the process.',
      price: 'Register Now',
      href: '/mutual-divorce'
    },{
      id: 'Marriage Registration',
      title: 'Marriage Registration',
      description:
        'Couples looking to register their marriage in India can apply to the registrar following the specified procedure. Contact DoStartUp! Our legal experts will assist you smoothly.',
      price: 'Register Now',
      href: '/marriage-registration'
    },{
      id: 'Divorce Notice',
      title: 'Divorce Notice',
      description:
        'If a party wishes to initiate a divorce, they can apply to the court accordingly. DoStartUp legal experts can guide you at every step.',
      price: 'Register Now',
      href: '/divorce-notice'
    },{
      id: 'Property Registration',
      title: 'Property Registration',
      description:
        'In India, registering purchased or transferred property is mandatory. Whether bought or received through other modes of transfer, DoStartUp ensures your property registration is seamless and compliant.',
      price: 'Register Now',
      href: '/property-registration'
    },
    {
      id: 'Property Valuation',
      title: 'Property Valuation',
      description:
        'Property valuation is crucial for transfers, helping determine the exact market value. DoStartUp assists with accurate property valuation using various recognized methods.',
      price: 'Register Now',
      href: '/property-valuation'
    },
    {
      id: 'Property Verification',
      title: 'Property Verification',
      description:
        'Property verification, or due diligence, is essential when buying or selling property in India. DoStartUp ensures proper verification of property titles to avoid legal complications.',
      price: 'Register Now',
      href: '/property-verification'
    },
    {
      id: 'Sexual Harassment at Workplace',
      title: 'Sexual Harassment at Workplace',
      description:
        'Following a landmark 1997 case, the Supreme Court issued guidelines to prevent workplace sexual harassment. DoStartUp helps organizations implement these policies and comply with the law.',
      price: 'Register Now',
      href: '/sexual-harassment-workplace'
    },
    {
      id: 'Lease Registration',
      title: 'Lease Registration',
      description:
        'Need lease registration services? Whether for residential or commercial purposes, short-term or long-term, DoStartUp facilitates smooth lease registration between parties.',
      price: 'Register Now',
      href: '/lease-registration'
    },
    {
      id: 'Will Registration',
      title: 'Will Registration',
      description:
        'Safeguard your assets with hassle-free will registration. DoStartUp offers expert assistance to ensure a secure and smooth registration process. Click to register your will today.',
      price: 'Register Now',
      href: '/will-registration'
    },
    {
      id: 'Power of Attorney (POA)',
      title: 'Power of Attorney (POA)',
      description:
        'A Power of Attorney is governed under the Powers of Attorney Act, 1888. While not mandatory, obtaining a POA ensures legal authorization for specific actions. DoStartUp can guide you through the process efficiently.',
      price: 'Register Now',
      href: '/power-of-attorney'
    },
    {
      id: 'Divorce Settlement Agreement',
      title: 'Divorce Settlement Agreement',
      description:
        'Marriage and divorce matters are governed by personal laws. Couples can seek divorce either mutually or through contested proceedings. DoStartUp provides expert assistance in drafting and managing divorce settlement agreements.',
      price: 'Register Now',
      href: '/divorce-settlement-agreement'
    },
    {
      id: 'Hindu Marriage Act',
      title: 'Hindu Marriage Act',
      description:
        'Marriages between Hindus are governed under the provisions of the Hindu Marriage Act. DoStartUp offers guidance to ensure compliance with all legal requirements.',
      price: 'Register Now',
      href: '/hindu-marriage-act'
    },
    {
      id: 'Bail Application',
      title: 'Bail Application',
      description:
        'An accused individual has the right to apply for bail if the offence is bailable. DoStartUp legal experts can clarify all queries and assist in filing a bail application effectively.',
      price: 'Register Now',
      href: '/bail-application'
    },
    {
      id: 'Judicial Separation',
      title: 'Judicial Separation',
      description:
        'Facing marital challenges or considering separation? Protect your rights with legal advisory services for judicial separation provided by DoStartUp.',
      price: 'Register Now',
      href: '/judicial-separation'
    },
    {
      id: 'Special Leave Petition',
      title: 'Special Leave Petition',
      description:
        'A Special Leave Petition (SLP) is an important legal provision in India. DoStartUp helps resolve all queries related to filing and managing SLPs.',
      price: 'Register Now',
      href: '/startup/special-leave-petition'
    },
    {
      id: 'Consulting Agreement',
      title: 'Consulting Agreement',
      description:
        'A Consulting Agreement is a legal document used by companies to hire a consultant or consultancy firm for a specific duration and scope of work. DoStartUp ensures proper drafting and legal compliance.',
      price: 'Register Now',
      href: '/consulting-agreement'
    },
    {
      id: 'Tenant Eviction Notice',
      title: 'Tenant Eviction Notice',
      description:
        'Finding suitable tenants or rental properties can be challenging. DoStartUp assists landlords in issuing legally compliant tenant eviction notices.',
      price: 'Register Now',
      href: '/tenant-eviction-notice'
    },
    {
      id: 'Vendor Agreement',
      title: 'Vendor Agreement',
      description:
        'A Vendor Agreement is a legal document detailing the obligations and work to be performed by a vendor. DoStartUp helps draft clear and enforceable vendor agreements.',
      price: 'Register Now',
      href: '/vendor-agreement'
    },
    {
      id: 'License Agreement',
      title: 'License Agreement',
      description:
        'License agreements serve multiple purposes and can vary by type. Contact DoStartUp, and our legal experts will assist you in drafting a comprehensive and effective license agreement.',
      price: 'Register Now',
      href: '/license-agreement'
    },
    {
      id: 'Legal Notice for Defamation',
      title: 'Legal Notice for Defamation',
      description:
        'Looking for a strong response to defamation and want to restore your reputation? Get immediate legal support to draft a well-prepared legal notice for defamation with DoStartUp experts guiding you through the process.',
      price: 'Register Now',
      href: '/legal-notice-for-defamation'
    },
    {
      id: 'Legal Notice for Non-Payment of Salary',
      title: 'Legal Notice for Non-Payment of Salary',
      description:
        'If you are an employee aggrieved by unpaid salary, there are multiple options to recover your dues. One effective approach is sending a Legal Notice for Non-Payment of Salary. DoStartUp can help you prepare and send it promptly and efficiently.',
      price: 'Register Now',
      href: '/legal-notice-for-non-payment-of-salary'
    },
    {
      id: 'Civil Law',
      title: 'Civil Law',
      description:
        'Civil law governs the rights and obligations of individuals and organizations, resolving disputes related to property, contracts, and liabilities. DoStartUp provides expert legal guidance to navigate civil law matters effectively.',
      price: 'Register Now',
      href: '/civil-law-overview'
    },
    {
      id: 'Quashing of FIR',
      title: 'Quashing of FIR',
      description:
        'The process of quashing an FIR begins in the High Court with jurisdiction over the area where the FIR was filed. DoStartUp legal experts assist you in filing petitions and handling the process smoothly.',
      price: 'Register Now',
      href: '/quashing-of-fir'
    },
    {
      id: 'Asset Purchase Agreement',
      title: 'Asset Purchase Agreement',
      description:
        'An Asset Purchase Agreement is a legal contract between a seller and a buyer for acquiring an asset. Contact DoStartUp for professional assistance in drafting precise and legally sound agreements.',
      price: 'Register Now',
      href: '/asset-purchase-agreement'
    },
    {
      id: 'Writ Petition',
      title: 'Writ Petition',
      description:
        'A Writ Petition is an order from a higher court directing a lower court or authority to perform or refrain from certain actions. DoStartUp helps draft and file writ petitions, ensuring compliance with legal formalities.',
      price: 'Register Now',
      href: '/writ-petition'
    },
    {
      id: 'Domestic Violence',
      title: 'Domestic Violence',
      description:
        'If you are facing domestic violence, contact DoStartUp. Our legal experts will understand your situation and assist in filing a domestic violence complaint, ensuring protection and legal support.',
      price: 'Register Now',
      href: '/domestic-violence'
    },
    {
      id: 'Defamation Law in India',
      title: 'Defamation Law in India',
      description:
        'If your reputation has been harmed, you can approach the competent court to seek redressal for damages caused. Whether filing a civil suit or a criminal complaint for defamation, DoStartUp provides comprehensive legal guidance.',
      price: 'Register Now',
      href: '/defamation'
    },
    {
      id: 'Legal Notice for Non-Payment of Dues',
      title: 'Legal Notice for Non-Payment of Dues',
      description:
        'Tired of unpaid payments or loan defaults? With DoStartUp, you can send a legal notice for non-payment of dues quickly, often within just one hour, ensuring prompt legal action.',
      price: 'Register Now',
      href: '/legal_notice_non_payment'
    }   
  ],
  'property-related': [
    {
      id: 'Sale Deed Registration',
      title: 'Sale Deed Registration',
      description:
        'A well-drafted Sale Deed helps eliminate legal risks, reduce disputes, and ensure clarity in property transactions. At DoStartUp, we simplify the entire process—ensuring realistic expectations with a seamless interaction.',
      price: 'Register Now',
      href: '/sale-deed-registration'
    },
    {
      id: 'Gift Deed',
      title: 'Gift Deed',
      description:
        'A well-drafted Gift Deed ensures clarity, avoids future disputes, and safeguards the rights of both the donor and recipient. At DoStartUp, we make the process simple and transparent—ensuring realistic expectations with a seamless interaction.',
      price: 'Register Now',
      href: '/gift-deed'
    },
    {
      id: 'Residential Rental Agreement',
      title: 'Residential Rental Agreement',
      description:
        'Secure your property and avoid unnecessary disputes with a well-drafted Residential Rental Agreement. At DoStartUp, we ensure that your agreement is clear, legally compliant, and safeguards the interests of both parties. You’re just a call away from getting expert assistance for a hassle-free rental experience.',
      price: 'Register Now',
      href: '/residential-rental-agreement'
    },
    {
      id: 'Commercial Rental Agreement',
      title: 'Commercial Rental Agreement',
      description:
        'Ensure smooth business operations with a professionally drafted Commercial Rental Agreement. At DoStartUp, we help you eliminate legal risks, avoid disputes, and create a strong legal foundation for your commercial property dealings. Just a call away, our experts are ready to provide you with the finest assistance for a secure and hassle-free rental process.',
      price: 'Register Now',
      href: '/commercial-rental-agreement'
    },
    {
      id: 'Relinquishment Deed',
      title: 'Relinquishment Deed',
      description:
        'Secure your legal rights and avoid future disputes with a carefully drafted Relinquishment Deed. At DoStartUp, we ensure clarity in ownership transfer, reduce legal risks, and help you stay litigation-free. Just one phone call connects you to our expert team for a smooth and hassle-free process.',
      price: 'Register Now',
      href: '/relinquishment-deed'
    },
    {
      id: 'Probate of Will',
      title: 'Probate of Will',
      description:
        'The probate of a will follows a well-defined legal procedure established by the authorities. At DoStartUp, our experienced legal experts guide you through every step of the process, ensuring a smooth and hassle-free execution of the will. Connect with us today for reliable support.',
      price: 'Register Now',
      href: '/probate-will'
    }
  ],
  'servicerelated': [
    {
      id: 'Service Level Agreement',
      title: 'Service Level Agreement',
      description:
        'In simple terms, a Service Level Agreement (SLA) is a contract between a service provider and the end-user that clearly defines the expected level of service. With DoStartUp, you can ensure your SLA is well-drafted, legally compliant, and protects the interests of both parties. Our experts make the process seamless and hassle-free.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Share Purchase Agreement',
      title: 'Share Purchase Agreement',
      description:
        'A Share Purchase Agreement is a legal contract between two parties — the seller and the buyer — where the seller agrees to transfer a specific number of shares to the buyer. Such agreements ensure clarity in terms of rights, obligations, and consideration involved in the transaction. With DoStartUp, you can get a professionally drafted Share Purchase Agreement that minimizes risks and secures your interests.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Franchise Agreement',
      title: 'Franchise Agreement',
      description:
        'A Franchise Agreement is a legally binding contract between the franchisor and the franchisee. Its primary purpose is to grant the franchisee the rights to operate under the franchisor’s brand, while also outlining obligations, terms, and conditions to ensure smooth business operations. With DoStartUp, you can get a well-drafted Franchise Agreement that protects both parties and avoids future disputes.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Shareholder’s Agreement',
      title: 'Shareholder’s Agreement',
      description:
        'A Shareholders Agreement is essential for defining the relationship between a company’s shareholders and the business itself. It outlines rights, responsibilities, and decision-making powers, helping to prevent disputes and ensure smooth operations. With DoStartUp, you can get a well-drafted Shareholders Agreement that minimizes legal risks and safeguards everyone’s interests.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Joint Venture Agreement',
      title: 'Joint Venture Agreement',
      description:
        'Joint Venture Agreement If you want to get, your Joint venture agreement drafted. Contact Corpbiz Now!',
      price: 'Register Now',
      href: '/'
    }
  ],
  'tax-filing': [
    {
      id: 'GST Registration',
      title: 'GST Registration',
      description:
        'GST Registration in India – Facing challenges with GST registration? Let DoStartUp experts simplify the entire process, from application filing and status tracking to online document submission, ensuring a smooth and hassle-free experience.',
      price: 'Register Now',
      href: '/startup/gst-registration'
    },
    {
      id: 'GST Return Filing',
      title: 'GST Return Filing',
      description:
        'GST Return Filing – Starting at just ₹999/month! Want to maximize your input tax credit while filing GST? Connect with DoStartUp experts and let us handle your GST return filing with ease and efficiency.',
      price: 'Register Now',
      href: '/startup/gst-return-filing'
    },
    {
      id: 'TDS Return Filing',
      title: 'TDS Return Filing',
      description:
        'TDS Return Filing Online – Worried about missing deadlines? DoStartUp has assisted 25,000+ employers and organizations with seamless TDS return filing. We also provide one year of dedicated support to ensure complete compliance without stress.',
      price: 'Register Now',
      href: '/tds-return-filing-online'
    },
    {
      id: 'Professional Tax Registration',
      title: 'Professional Tax Registration',
      description:
        'Professional Tax Registration – Apply with DoStartUp and experience guaranteed application filing within 48 hours. Get your certificate hassle-free with the help of our experts in just 5 business days.',
      price: 'Register Now',
      href: '/professional-tax-registration'
    },
    {
      id: 'Income Tax Return Filing',
      title: 'Income Tax Return Filing',
      description:
        'Income Tax Return Filing – Worried about missing the ITR deadline? Connect with DoStartUp for personalized support and seamless income tax return filing in India. Join 10,000+ satisfied clients who trust us for timely and accurate filings.',
      price: 'Register Now',
      href: '/income-tax-return-filing'
    }
  ],
  'fssai-eating-license': [
    {
      id: 'FSSAI License',
      title: 'FSSAI License',
      description:
        'FSSAI License in India – Starting at just ₹1999 + Govt. Fee! Finding the FSSAI registration process time-consuming? DoStartUp’s expert consultants ensure quick approvals and a smooth licensing experience for your food business.',
      price: 'Register Now',
      href: '/startup/fssai-license-registration'
    },
    {
      id: 'FSSAI License Renewal',
      title: 'FSSAI License Renewal',
      description:
        'FSSAI Renewal – Is your FSSAI license nearing expiry? DoStartUp consultants provide quick and hassle-free renewal services to keep your business compliant and safeguard you from penalties!',
      price: 'Register Now',
      href: '/fssai-license-renewal'
    },
    {
      id: 'FSSAI State License',
      title: 'FSSAI State License',
      description:
        'FSSAI State License – Unsure about the legal requirements for obtaining an FSSAI State License? Let DoStartUp experts simplify the licensing process, minimize legal hurdles, and ensure smooth compliance for your food business.',
      price: 'Register Now',
      href: '/fssai-state-license'
    },
    {
      id: 'Eating House License',
      title: 'Eating House License',
      description:
        'Eating House License – An Eating House License is a mandatory requirement, in addition to the FSSAI License, for running a food business at a specific location. The validity of this license varies from state to state. DoStartUp experts can help you obtain it quickly and without hassle.',
      price: 'Register Now',
      href: '/eating-house-license'
    },
    {
      id: 'Central FSSAI License',
      title: 'Central FSSAI License',
      description:
        'Central FSSAI License – Looking to apply for a Central FSSAI License? DoStartUp helps you simplify food safety compliance and ensures your food business operates legally and seamlessly.',
      price: 'Register Now',
      href: '/fssai-central-license'
    },
    {
      id: 'FSSAI Annual Return',
      title: 'FSSAI Annual Return',
      description:
        'FSSAI Annual Return – Are you a food business owner looking to stay compliant with food safety regulations and maintain your business reputation? Let DoStartUp experts assist you in filing your FSSAI Annual Return quickly and accurately.',
      price: 'Register Now',
      href: '/startup/fssai-annual-return'
    },
    {
      id: 'FSSAI Product Approval',
      title: 'FSSAI Product Approval',
      description:
        'FSSAI Product Approval Process If you want to apply for a Product Approval of ingredients, you can contact us to avail of FSSAI Product Approval Process service from our professional expert..',
      price: 'Register Now',
      href: '/fssai-product-approval'
    },
    {
      id: 'Food Recycling License',
      title: 'Food Recycling License',
      description:
        'Food Recycling License – Planning to start your food recycling business in India? Obtain your Food Recycling License easily with expert assistance from DoStartUp and kickstart your sustainable venture.',
      price: 'Register Now',
      href: '/food-recycling-license'
    },
    {
      id: 'FPO Mark Certification',
      title: 'FPO Mark Certification',
      description:
        'FPO Certification in India – Are you a manufacturer or seller of processed fruit products? Get your FPO Certification seamlessly with DoStartUp and ensure your products are safe, compliant, and ready for consumption!',
      price: 'Register Now',
      href: '/fpo-certification'
    }
  ],
  'business-registration': [
    {
      id: 'Company Registration',
      title: 'Company Registration',
      description:
        'Company Registration in India – Starting at just ₹599 + Govt. Fee! Get expert consultation from DoStartUp’s seasoned professionals for hassle-free company registration in India. Register your private limited company with ease and confidence.',
      price: 'Register Now',
      href: '/private-limited-company-registration'
    },
    {
      id: 'LLP Registration',
      title: 'LLP Registration',
      description:
        'LLP Registration in India – Facing delays in online LLP registration? DoStartUp consultants ensure a smooth and hassle-free Limited Liability Partnership registration process, completed within minimal time and with expert precision.',
      price: 'Register Now',
      href: '/LLPRegistrationPage'
    },
    {
      id: 'Public Limited Company Registration',
      title: 'Public Limited Company Registration',
      description:
        'Public Limited Company Registration – Looking to register your Public Limited Company online in India but unsure about the process? DoStartUp experts are here to guide you through every step, ensuring a seamless and compliant registration experience.',
      price: 'Register Now',
      href: '/PublicLimitedCompanyPage'
    },
    {
      id: 'One Person Company Registration',
      title: 'One Person Company Registration',
      description:
        'One Person Company (OPC) Registration – Are you a solopreneur facing challenges in choosing the right business structure? DoStartUp experts make OPC registration simple and hassle-free, helping you successfully launch your business with confidence.',
      price: 'Register Now',
      href: '/startup/opc-registration'
    },
    {
      id: 'Partnership Firm Registration',
      title: 'Partnership Firm Registration',
      description:
        'Partnership Firm Registration in India – Want to register your partnership firm but unsure about the process? DoStartUp makes partnership firm registration simple, fast, and hassle-free. Get expert guidance and start your business journey with confidence.',
      price: 'Register Now',
      href: '/startup/partnership-firm-registration'
    },
    {
      id: 'Sole Proprietorship Registration',
      title: 'Sole Proprietorship Registration',
      description:
        'Sole Proprietorship Registration – Facing delays in registration? DoStartUp experts provide end-to-end support to simplify and speed up the sole proprietorship registration process, so you can focus on growing your business.',
      price: 'Register Now',
      href: '/startup/sole-proprietorship-registration'
    },
    {
      id: 'Nidhi Company Registration',
      title: 'Nidhi Company Registration',
      description:
        'Nidhi Company Registration in India – Planning to start your Nidhi Company but unsure of the process? DoStartUp experts simplify the registration journey and help you establish a compliant Nidhi Company to contribute to financial inclusion.',
      price: 'Register Now',
      href: '/nidhi-company-registration'
    },
    {
      id: 'Conversion of Pvt. Ltd. to Public Limited',
      title: 'Conversion of Pvt. Ltd. to Public Limited',
      description:
        'Conversion of Private Limited to Public Limited – Looking to expand your company’s potential? DoStartUp provides expert guidance for smooth and compliant conversion from private limited to public limited, ensuring faster growth and credibility',
      price: 'Register Now',
      href: '/llp-to-private-company-conversion'
    },
    {
      id: 'Indian Subsidiary Company Registration',
      title: 'Indian Subsidiary Company Registration',
      description:
        'Indian Subsidiary Company Registration – Planning to set up a subsidiary in India? DoStartUp experts make the process simple and hassle-free with complete compliance support, so you can focus on growing your business.',
      price: 'Register Now',
      href: '/indian-subsidiary-company-registration'
    },
    {
      id: 'Conversion of LLP to Private Company',
      title: 'Conversion of LLP to Private Company',
      description:
        'Conversion of LLP to Private Limited Company – Planning to scale your business? Many LLPs eventually convert into Private Limited Companies for better growth opportunities, credibility, and funding. DoStartUp experts ensure a smooth and compliant conversion process.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Partnership Firm into Pvt. Ltd. Company',
      title: 'Partnership Firm into Pvt. Ltd. Company',
      description:
        'Conversion of Partnership Firm to Private Limited Company – Looking to expand and gain credibility? Transform your partnership firm into a Private Limited Company with DoStartUp. Our experts handle compliance, legalities, and registration for a hassle-free transition.',
      price: 'Register Now',
      href: '/llp-to-private-company-conversion'
    },
    {
      id: 'Clinical Establishment Registration',
      title: 'Clinical Establishment Registration',
      description:
        'Clinical Establishment Registration – Mandatory for hospitals, clinics, nursing homes, and maternity homes. Get expert assistance from Corpbiz for quick and hassle-free registration.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Carbon Black Manufacturing',
      title: 'Carbon Black Manufacturing',
      description:
        'Carbon Black Manufacturing Business Setup – Planning to start a carbon black manufacturing business in India? DoStartUp provides dedicated support to help you establish your business smoothly and successfully.',
      price: 'Register Now',
      href: '/carbon-black-manufacturing-business'
    },
    {
      id: 'Green Hydrogen Plant',
      title: 'Green Hydrogen Plant',
      description:
        'Green Hydrogen Plant Setup – Begin your journey toward a sustainable future with your own green hydrogen plant. Connect with DoStartUp for expert guidance and full support!',
      price: 'Register Now',
      href: '/green-hydrogen-plant-setup'
    },
    {
      id: 'Green Ammonia Plant',
      title: 'Green Ammonia Plant',
      description:
        'Green Ammonia Plant Setup – Excited to set up your green ammonia plant? Get expert assistance from DoStartUp and take the lead in clean energy innovation.',
      price: 'Register Now',
      href: '/green-ammonia'
    },
    {
      id: 'Synthetic Rubber Business',
      title: 'Synthetic Rubber Business',
      description:
        'Synthetic Rubber Business Setup – Planning to launch your synthetic rubber business? Get expert support from DoStartUp and make your mark in the Indian synthetic rubber market worth US$ 2.02 Billion.',
      price: 'Register Now',
      href: '/synthetic-rubber-manufacturing-business-complete-guide'
    },
    {
      id: 'Paper and Paperboard Packaging Industry',
      title: 'Paper and Paperboard Packaging Industry',
      description:
        'Paper and Paperboard Packaging Industry Setup – Ready to tap into the booming demand for sustainable packaging? DoStartUp provides expert guidance to successfully establish your paper and paperboard packaging business in India.',
      price: 'Register Now',
      href: '/paper-paperboard-packaging-industry-setup-guide'
    },
    {
      id: 'Fermentation Industry',
      title: 'Fermentation Industry',
      description:
        'Fermentation Industry Business Setup – Excited about starting a fermentation business? Connect with DoStartUp experts to transform your business idea into a successful and compliant venture.',
      price: 'Register Now',
      href: '/fermentation-industry-setup'
    },
    {
      id: 'Renewable energy business',
      title: 'Renewable energy business',
      description:
        '“Renewable Energy Business – A renewable energy business offers sustainable and cost-effective solutions for India’s energy needs. DoStartUp provides expert legal, financial, and compliance support to help you establish and grow your renewable energy venture.',
      price: 'Register Now',
      href: '/start-your-renewable-energy-business-india'
    }
  ],
  'secretarial-compliances':[
    {
      id: 'Winding Up of Private Limited Company',
      title: 'Winding Up of Private Limited Company',
      description:
        'Winding Up of Private Limited Company – Winding up refers to the process of liquidating a company’s assets, which are collected and sold to repay debts. Essentially, it marks the formal closure of a private limited company. DoStartUp provides expert guidance to ensure a smooth and compliant winding-up process.',
      price: 'Register Now',
      href: '/winding-up-private-limited-company'
    },
    {
      id: 'Closing a Limited Liability Partnership',
      title: 'Closing a Limited Liability Partnership',
      description:
        'Closing a Limited Liability Partnership – Looking to close your LLP by liquidating assets and settling creditors? Get expert assistance from DoStartUp to ensure a smooth and compliant closure of your limited liability partnership.',
      price: 'Register Now',
      href: '/closing-llp'
    },
    {
      id: 'Annual Compliance of a Pvt. Ltd. Company',
      title: 'Annual Compliance of a Pvt. Ltd. Company',
      description:
        'Annual Compliances for Private Limited Company – Stay on top of your private limited company’s annual compliances! Trust DoStartUp for hassle-free compliance services, expert guidance, and timely submissions to keep your company fully compliant.',
      price: 'Register Now',
      href: '/compliances-private-limited-company'
    },
    {
      id: 'Annual Filing for LLP',
      title: 'Annual Filing for LLP',
      description:
        'Annual Filing for LLP – Running an LLP and need expert assistance for annual filing in India? Connect with DoStartUp to ensure timely and accurate filing of your LLP returns, keeping your business fully compliant.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Event Based Compliances in a Company',
      title: 'Event Based Compliances in a Company',
      description:
        'Event-Based Compliances in a Company – Event-based compliances are mandatory obligations that differ from regular annual or periodic compliances required by the Registrar. DoStartUp provides expert guidance to ensure your company meets these event-driven compliance requirements accurately and on time.',
      price: 'Register Now',
      href: '/company-naming-guidelines'
    },
    {
      id: 'Change in Object Clause',
      title: 'Change in Object Clause',
      description:
        'Change in Object Clause – The object clause of a company defines the purpose for which it was incorporated. If a company wishes to modify its object after incorporation, the Memorandum of Association must be amended. DoStartUp provides expert guidance to ensure a smooth and compliant change in the object clause.',
      price: 'Register Now',
      href: '/director-removal-process'
    },
    {
      id: 'Appointment and Resignation of Directors',
      title: 'Appointment and Resignation of Directors',
      description:
        'Appointment and Resignation of Directors – Handle the appointment and resignation of directors efficiently. DoStartUp offers expert assistance in compliance, documentation, and all legal formalities to ensure a smooth process.',
      price: 'Register Now',
      href: '/director-appointment-resignation'
    },
    {
      id: 'Change in Name Clause',
      title: 'Change in Name Clause',
      description:
        'Change in Name Clause – A company can change its name by passing a special resolution during a board meeting. Section 13 of the Companies Act governs the process of changing a company’s name. DoStartUp provides expert guidance to ensure a smooth and compliant name change process.',
      price: 'Register Now',
      href: '/company-naming-guidelines'
    },
    {
      id: 'Removal of Director',
      title: 'Removal of Director',
      description:
        'Removal of Director – Looking to remove a director? Navigate the director removal process with ease. DoStartUp provides expert assistance for legal compliance and ensures a smooth, hassle-free procedure.',
      price: 'Register Now',
      href: '/director-removal-process'
    },
    {
      id: 'Nidhi Company Compliance',
      title: 'Nidhi Company Compliance',
      description:
        'Nidhi Company Compliance – Ensure smooth and hassle-free Nidhi Company compliance with expert support from DoStartUp. Stay updated on all legal requirements and avoid penalties efficiently.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'Section 8 Company Compliance',
      title: 'Section 8 Company Compliance',
      description:
        'Section 8 Company Compliance – Ensure your Section 8 company stays fully compliant with all regulations. DoStartUp offers expert guidance on annual filings, audits, and legal requirements for smooth and seamless operations.',
      price: 'Register Now',
      href: '/nidhi-company-compliance'
    },
    {
      id: 'NBFC Compliance',
      title: 'NBFC Compliance',
      description:
        'NBFC Compliance in India – Struggling with paperwork for NBFC compliance? Connect with DoStartUp for expert guidance and seamless adherence to regulatory standards, ensuring your NBFC remains fully compliant.',
      price: 'Register Now',
      href: '/startup/nbfc-compliance'
    },
    {
      id: 'Change in Registered Office',
      title: 'Change in Registered Office',
      description:
        'Change in Registered Office – The promoters of a company determine the location of its registered office. Once the office is declared through INC-22, any subsequent changes must follow the prescribed legal process. DoStartUp provides expert guidance to ensure a smooth and compliant change of registered office.',
      price: 'Register Now',
      href: '/startup/change-registered-office'
    },
    {
      id: 'Change in Share Capital',
      title: 'Change in Share Capital',
      description:
        'Change in Share Capital – Unlock maximum benefits for investors by changing your company’s share capital! DoStartUp experts assist you in planning and executing the process seamlessly and cost-effectively, ensuring full compliance with legal requirements.',
      price: 'Register Now',
      href: '/change-in-share-capital'
    },
    {
      id: 'Revival of Struck Off Companies',
      title: 'Revival of Struck Off Companies',
      description:
        'Revival of Struck Off Companies – Looking to revive your struck-off company? Connect with experienced professionals at DoStartUp and benefit from expert services for the timely and compliant revival of your company.',
      price: 'Register Now',
      href: '/change-in-struck-off-companies'
    },
    {
      id: 'MCA Compliance',
      title: 'MCA Compliance',
      description:
        'MCA Compliance – Need assistance with MCA compliance? Connect with DoStartUp experts for seamless, end-to-end support in fulfilling all MCA compliance obligations within statutory deadlines, ensuring smooth and hassle-free operations.',
      price: 'Register Now',
      href: '/startup/mca-compliance'
    },
    {
      id: 'Change in Directors',
      title: 'Change in Directors',
      description:
        'Change in Directors – Adding or removing a director in a company requires proper legal documentation. DoStartUp helps you add or remove directors efficiently, ensuring a hassle-free and compliant process.',
      price: 'Register Now',
      href: '/change-in-directors'
    },
    {
      id: 'Change in LLP Agreement',
      title: 'Change in LLP Agreement',
      description:
        'Change in LLP Agreement – Make amendments to your LLP agreement with expert assistance from DoStartUp. We manage compliance, documentation, and legal requirements to ensure a smooth and hassle-free process.',
      price: 'Register Now',
      href: '/change-in-llp-agreement'
    },
    {
      id: 'Liquidation of Company',
      title: 'Liquidation of Company',
      description:
        'Liquidation of a Company – Is your company facing liquidation or financial difficulties? Let DoStartUp ease the process and provide expert guidance to simplify company liquidation efficiently and compliantly.',
      price: 'Register Now',
      href: '/liquidation-of-a-company'
    },
    {
      id: 'AGR-Return Filing',
      title: 'AGR-Return Filing',
      description:
        'AGR-Return Filing Services – Ensure timely and accurate AGR return filing with expert guidance from DoStartUp. Our professionals help you meet compliance standards, avoid penalties, and ensure a smooth, hassle-free process.  ',
      price: 'Register Now',
      href: '/agr-return-filing'
    },
    {
      id: 'Form AOC-4',
      title: 'Form AOC-4',
      description:
        'Form AOC-4 – File Form AOC-4 accurately with expert assistance from DoStartUp. Get professional support in preparing and submitting financial statements and compliance reports on time, ensuring full adherence to regulatory requirements.',
      price: 'Register Now',
      href: '/form-aoc-4'
    },
    {
      id: 'Form MGT-7',
      title: 'Form MGT-7',
      description:
        'Form MGT-7 Filing – Looking to simplify the process of Form MGT-7 filing? DoStartUp experts provide hassle-free assistance, ensuring your company meets all annual compliance requirements in India efficiently and on time.',
      price: 'Register Now',
      href: '/startup/mgt-7-compliance'
    },
    {
      id: 'SPICe+ Form',
      title: 'SPICe+ Form',
      description:
        'SPICe+ Form (New Web Form for Company Incorporation) – Ready to simplify your company incorporation process? Connect with DoStartUp for expert assistance with the SPICe+ form and ensure a smooth, hassle-free registration experience.',
      price: 'Register Now',
      href: '/startup/spice-plus-compliance'
    },
    {
      id: 'AGILE PRO S',
      title: 'AGILE PRO S',
      description:
        'AGILE PRO S Form – Looking to simplify your business registration? Connect with DoStartUp for easy and timely filing of the AGILE PRO S Form, ensuring a smooth and hassle-free compliance experience.',
      price: 'Register Now',
      href: '/startup/agile-pro-s-compliance'
    }
  ],
  'global-company-formation': [
    {
      id: 'Company Registration in USA',
      title: 'Company Registration in USA',
      description:
        'Company Registration in USA – Looking to register your company in the USA but facing challenges? You’re at the right place. Join over 4,000 global entrepreneurs who’ve successfully established their businesses with expert guidance from DoStartUp.',
      price: 'Register Now',
      href: '/startup/usa-company-registration'
    },
    {
      id: 'Company Registration in Mauritius',
      title: 'Company Registration in Mauritius',
      description:
        'Company Registration in Mauritius – Are you an entrepreneur planning to register your business in Mauritius? Get expert assistance from DoStartUp for hassle-free company registration in Mauritius and expand your global business presence.',
      price: 'Register Now',
      href: '/startup/mauritius-company-registration'
    },
    {
      id: 'Company Registration in Dubai',
      title: 'Company Registration in Dubai',
      description:
        'Company Registration in Dubai – Looking to register your company in Dubai but overwhelmed by the complex process? DoStartUp offers expert assistance for stress-free company formation and smooth registration in Dubai.',
      price: 'Register Now',
      href: '/startup/dubai-company-registration'
    },
    {
      id: 'Company Registration in Sri Lanka',
      title: 'Company Registration in Sri Lanka',
      description:
        'Company Registration in Sri Lanka – Expand your business in the island nation with DoStartUp. Get prompt and hassle-free company registration in Sri Lanka to leverage a favorable tax regime and explore new growth opportunities.',
      price: 'Register Now',
      href: '/startup/sri-lanka-company-registration'
    },
    {
      id: 'Company Registration in France',
      title: 'Company Registration in France',
      description:
        'Company Registration in France – Planning to establish a strong business presence in the 7th largest economy in the world? Join over 3,000 satisfied clients and get expert assistance from DoStartUp for smooth company registration in France.',
      price: 'Register Now',
      href: '/startup/france-company-registration'
    },
    {
      id: 'Company Registration in Singapore',
      title: 'Company Registration in Singapore',
      description:
        'Company Registration in Singapore – Planning to start a business in Singapore? DoStartUp offers stress-free company registration at competitive costs. Contact us now to get expert guidance and a smooth setup process.',
      price: 'Register Now',
      href: '/startup/singapore-company-registration'
    },
    {
      id: 'Company Registration in Hong Kong',
      title: 'Company Registration in Hong Kong',
      description:
        'Company Registration in Hong Kong – Looking to register a company in Hong Kong? DoStartUp has successfully assisted in over 1,000 business registrations. Let our experts guide you for a seamless and hassle-free setup.',
      price: 'Register Now',
      href: '/startup/hong-kong-company-registration'
    },
    // {
    //   id: 'Company Registration in UK',
    //   title: 'Company Registration in UK',
    //   description:
    //     'Company Registration in Luxembourg – Looking to establish your business in Luxembourg? DoStartUp offers expert guidance to register your company in one of Europe’s most attractive financial hubs efficiently and hassle-free.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Indonesia',
    //   title: 'Company Registration in Indonesia',
    //   description:
    //     'Company Registration in Indonesia – Planning to launch a business in Indonesia? Connect with DoStartUp for expert assistance in securing your company registration in this key Southeast Asian market efficiently and seamlessly.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Poland',
    //   title: 'Company Registration in Poland',
    //   description:
    //     'Company Registration in Poland – Looking to establish your business in Poland? Partner with DoStartUp to simplify your company registration process in this central European hub, unlocking strategic opportunities for growth.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Germany',
    //   title: 'Company Registration in Germany',
    //   description:
    //     'Company Registration in Germany – Hey aspiring entrepreneur! Planning to set up your business in Germany? Collaborate with DoStartUp for a smooth, fast, and cost-effective company registration process in Germany.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Japan',
    //   title: 'Company Registration in Japan',
    //   description:
    //     'Company Registration in Japan – Are you seeking expert guidance for company registration in Japan? Book an appointment with DoStartUp consultants with 10+ years of experience to ensure a smooth and hassle-free registration process.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Egypt',
    //   title: 'Company Registration in Egypt',
    //   description:
    //     'Company Registration in Egypt – Hey entrepreneur! Looking for effortless and timely company registration in Egypt? You’re at the right place. DoStartUp will assist you in setting up your business smoothly and efficiently.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Canada',
    //   title: 'Company Registration in Canada',
    //   description:
    //     'Company Registration in Canada – Hey business dreamers! Planning to register your dream business in Canada? DoStartUp’s experts will guide you through a smooth and hassle-free company registration process.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Meydan',
    //   title: 'Company Registration in Meydan',
    //   description:
    //     'Company Registration in Meydan – Planning to establish your business in Meydan? Connect with DoStartUp for a simplified company registration process, leveraging a strategic location and seamless setup experience.',
    //   price: 'Register Now',
    //   href: '/'
    // },
    // {
    //   id: 'Company Registration in Russia',
    //   title: 'Company Registration in Russia',
    //   description:
    //     'Company Registration in Russia – Planning to register your company in Russia? Connect with DoStartUp to simplify your business setup in this strategically located hub between Europe and Asia.',
    //   price: 'Register Now',
    //   href: '/'
    // }
  ],
  'government-licenses':[
    {
      id: 'Shop & Establishment License',
      title: 'Shop & Establishment License',
      description:
        'The Shops and Establishment Act ensures that both organized and unorganized sectors provide proper working conditions for their employees. Get hassle-free support with DoStartUp for obtaining your shop and establishment license.',
      price: 'Register Now',
      href: '/shop-and-establishment-license'
    },
    {
      id: 'CE Certification',
      title: 'CE Certification',
      description:
        'Experiencing delays in getting CE certification online? DoStartUp experts streamline the process to make your products market-ready for Europe quickly and efficiently.',
      price: 'Register Now',
      href: '/startup/ce-certification-compliance'
    },
    {
      id: 'PSARA License',
      title: 'PSARA License',
      description:
        'File your PSARA License application within 3 working days! DoStartUp has assisted over 5000 business owners in securing their PSARA license hassle-free.',
      price: 'Register Now',
      href: '/startup/psara-license'
    },
    {
      id: 'Trade License',
      title: 'Trade License',
      description:
        'Looking to get a trade license in India but unsure about the process? DoStartUp ensures a smooth online trade license application with a high approval success rate.',
      price: 'Register Now',
      href: '/trade-license'
    },
    {
      id: 'Music License',
      title: 'Music License',
      description:
        'Artists and businesses playing music in cafes, restaurants, hotels, or bars must have a music license. DoStartUp helps you obtain this license quickly to legally monetize or use music.',
      price: 'Register Now',
      href: '/music-license'
    },
    {
      id: 'Health Trade License',
      title: 'Health Trade License',
      description:
        'If your business impacts public health, obtaining a health trade license is crucial. DoStartUp assists you in getting the license to ensure consumer safety and trust.',
      price: 'Register Now',
      href: '/health-trade-license'
    },
    {
      id: 'Factory License',
      title: 'Factory License',
      description:
        'Under the Factories Act 1948, factory building plan approval and registration are mandatory. DoStartUp guides you through factory license registration efficiently.',
      price: 'Register Now',
      href: '/factory-license'
    },
    {
      id: 'FDA Certification',
      title: 'FDA Certification',
      description:
        'FDA issues Form 483 post-inspection for certification. DoStartUp helps you get FDA Certification for your food and drug plants in India while ensuring compliance with all guidelines.',
      price: 'Register Now',
      href: '/fda-certification'
    },
    {
      id: 'GMP Certification',
      title: 'GMP Certification',
      description:
        'Seeking GMP certification for individuals or businesses? DoStartUp simplifies the process and helps acquire approval at reduced costs.',
      price: 'Register Now',
      href: '/gmpCertification'
    },
    {
      id: 'Liquor License',
      title: 'Liquor License',
      description:
        'Selling alcohol in India requires a valid liquor license. DoStartUp assists you in obtaining this license legally, avoiding penalties or legal issues.',
      price: 'Register Now',
      href: '/liquor-license'
    },
    {
      id: 'AYUSH License',
      title: 'AYUSH License',
      description:
        'If you manufacture Ayurveda, Yoga, Unani, Siddha, or Homeopathy (AYUSH) products, secure your AYUSH license effortlessly with DoStartUp experts today.',
      price: 'Register Now',
      href: '/ayush-license'
    },
    {
      id: 'WPC Certification',
      title: 'WPC Certification',
      description:
        'Stuck in long queues for WPC certification for wireless devices? DoStartUp experts simplify the process and help you get WPC certification efficiently, with a high success rate.',
      price: 'Register Now',
      href: '/startup/wpc-certification-compliance'
    },
    {
      id: 'PESO Certification',
      title: 'PESO Certification',
      description:
        'Operating in the oil, gas, coal, or mining industries with explosion-proof products? Obtain PESO certification and stay fully compliant with DoStartUp’s guidance.',
      price: 'Register Now',
      href: '/startup/peso-certification-compliance'
    },
    {
      id: 'CAPEXIL Certificate',
      title: 'CAPEXIL Certificate',
      description:
        'Looking to obtain CAPEXIL certification for your export business? DoStartUp experts streamline the entire CAPEXIL application process for smooth approvals.',
      price: 'Register Now',
      href: '/capexil-registration'
    },
    {
      id: 'TEC Certification',
      title: 'TEC Certification',
      description:
        'Telecom equipment dealers engaged in importing, manufacturing, or selling telecom products can rely on DoStartUp for hassle-free TEC certification, ensuring compliance at every step.',
      price: 'Register Now',
      href: '/startup/tec-certification-compliance'
    },
    {
      id: 'NASSCOM Membership',
      title: 'NASSCOM Membership',
      description:
        'Aiming to make your mark in India’s booming technology sector? DoStartUp helps you secure a NASSCOM certificate quickly and efficiently.',
      price: 'Register Now',
      href: '/nasscom-membership'
    },
    {
      id: 'MSO License',
      title: 'MSO License',
      description:
        'Obtaining an MSO license can be complicated, but DoStartUp ensures a smooth process without paperwork hassles, helping you focus on business growth.',
      price: 'Register Now',
      href: '/mso-license'
    },
    {
      id: 'DOT OSP Compliance',
      title: 'DOT OSP Compliance',
      description:
        'Running a call center, BPO, or KPO? DoStartUp experts simplify your DOT OSP compliance requirements, saving time and reducing operational stress.',
      price: 'Register Now',
      href: '/dot-osp-compliance'
    },
    {
      id: 'IP-1 License in India',
      title: 'IP-1 License in India',
      description:
        'IP-1 license authorizes infrastructure providers in India. Connect with DoStartUp to initiate the process smoothly and stay compliant with telecom regulations.',
      price: 'Register Now',
      href: '/ip-1-license'
    },
    {
      id: 'HITS Operator',
      title: 'HITS Operator',
      description:
        'HITS operators help cable providers deliver more channels to clients. DoStartUp manages all paperwork and procedural requirements for a seamless setup.',
      price: 'Register Now',
      href: '/hits-operator'
    },
    {
      id: 'FIFP Approval for Telecom',
      title: 'FIFP Approval for Telecom',
      description:
        'If you’re a telecom service provider seeking foreign investment but don’t qualify for automatic FDI approval, DoStartUp assists in obtaining FIFP approval efficiently.',
      price: 'Register Now',
      href: '/fifp-approval-telecom'
    },
    {
      id: 'Halal Certification',
      title: 'Halal Certification',
      description:
        'Looking to certify your business with Halal standards? DoStartUp provides expert assistance to get Halal certification quickly.',
      price: 'Register Now',
      href: '/halal-certification'
    },
    {
      id: 'Homologation Certificate in India',
      title: 'Homologation Certificate in India',
      description:
        'Manufacturers or importers of automotive and non-automotive products can get homologation certificates with ease. DoStartUp ensures a smooth process for compliance and approval.',
      price: 'Register Now',
      href: '/homologation-certificate'
    },
    {
      id: 'Vehicle Type Approval Certificate in India',
      title: 'Vehicle Type Approval Certificate in India',
      description:
        'DoStartUp is a trusted provider of vehicle type approval certificates, serving many of the world’s leading car brands and OEMs.',
      price: 'Register Now',
      href: '/vehicle-type-approval-certificate'
    },
    {
      id: 'IMEI Number Registration',
      title: 'IMEI Number Registration',
      description:
        'IMEI registration simplifies mobile imports for companies. DoStartUp’s team of 200+ experts ensures timely, smooth IMEI number registration and complete support throughout the process.',
      price: 'Register Now',
      href: '/imei-registration'
    },
    {
      id: 'IMEI Certificate for Import of Mobile Handsets',
      title: 'IMEI Certificate for Import of Mobile Handsets',
      description:
        'DoStartUp professionals are ready to assist you at every stage of IMEI certificate services for mobile handset imports in India, ensuring compliance and efficiency.',
      price: 'Register Now',
      href: '/imei-certificate-import-mobile-handsets'
    },
    {
      id: 'IMEI Certificate Generation',
      title: 'IMEI Certificate Generation',
      description:
        'Boost your compliance and credibility with DoStartUp. Get started with your IMEI certificate generation quickly and hassle-free.',
      price: 'Register Now',
      href: '/imei-certificate-generation'
    }
  ],
  'government-registration':[
    {
      id: 'MSME Registration',
      title: 'MSME Registration',
      description:
        'Looking to expand your business and access government schemes? Get your MSME registration done with DoStartUp consultants and help your business claim the benefits seamlessly.',
      price: 'Register Now',
      href: '/startup/msme-registration-india'
    },
    {
      id: 'IEC Registration',
      title: 'IEC Registration',
      description:
        'Planning to scale your business internationally? Manage your import-export requirements effortlessly with DGFT IEC Code Registration via DoStartUp experts.',
      price: 'Register Now',
      href: '/startup/iec-code-registration'
    },
    {
      id: 'EPF Registration',
      title: 'EPF Registration',
      description:
        'Facing delays or worried about mistakes during EPF registration? DoStartUp ensures accurate, cost-effective employee provident fund registration for your organization.',
      price: 'Register Now',
      href: '/epf-registration'
    },
    {
      id: 'RERA Registration',
      title: 'RERA Registration',
      description:
        'Struggling with RERA registration? Choose DoStartUp to simplify the process and stay compliant under the RERA Act efficiently.',
      price: 'Register Now',
      href: '/startup/rera-registration'
    },
    {
      id: 'NSIC Registration',
      title: 'NSIC Registration',
      description:
        'Looking for government grants or want your business to participate in government tenders? Get expert assistance from DoStartUp for hassle-free NSIC registration online.',
      price: 'Register Now',
      href: '/startup/nsic-registration'
    },
    {
      id: 'ESI Registration',
      title: 'ESI Registration',
      description:
        'Ensure compliance with the Employees’ State Insurance Act with DoStartUp’s expert support for smooth and timely ESI registration.',
      price: 'Register Now',
      href: '/esi-registration'
    },
    {
      id: 'FIEO Registration',
      title: 'FIEO Registration',
      description:
        'Expand your export business globally with FIEO registration. Let DoStartUp guide you through the registration process for faster approvals.',
      price: 'Register Now',
      href: '/fieo-registration'
    },
    {
      id: 'Building NOC',
      title: 'Building NOC',
      description:
        'Before constructing a building, approvals and sanctions from respective authorities are mandatory. DoStartUp helps secure all necessary Building NOCs efficiently.',
      price: 'Register Now',
      href: '/building-noc'
    },
    {
      id: 'BOCW Act Registration',
      title: 'BOCW Act Registration',
      description:
        'Engaged in construction work? Let DoStartUp handle your BOCW registration process and ensure full compliance with the law.',
      price: 'Register Now',
      href: '/bocw-registration'
    },
    {
      id: 'RERA Registration for Agents',
      title: 'RERA Registration for Agents',
      description:
        'Agents involved in buying or selling real estate require RERA registration. Get expert assistance from DoStartUp for a smooth registration process.',
      price: 'Register Now',
      href: '/rera-registration-for-agents'
    },
    {
      id: 'RERA Registration For Promoters',
      title: 'RERA Registration For Promoters',
      description:
        'Promoters responsible for constructing buildings can ensure timely RERA compliance with DoStartUp’s expert guidance.',
      price: 'Register Now',
      href: '/rera-registration-for-agents'
    },
    {
      id: 'APEDA Registration',
      title: 'APEDA Registration',
      description:
        'Planning to export agricultural or processed food products from India? DoStartUp expedites your APEDA registration for faster approvals.',
      price: 'Register Now',
      href: '/startup/apeda-registration'
    },
    {
      id: 'RNI Registration',
      title: 'RNI Registration',
      description:
        'Looking to print, publish, or establish a newspaper, magazine, or periodical? DoStartUp helps you obtain RNI registration effortlessly.',
      price: 'Register Now',
      href: '/startup/rni-registration'
    },
    {
      id: 'Spice Board Registration',
      title: 'Spice Board Registration',
      description:
        'Grow your spice business with DoStartUp’s expert support for Spice Board registration, ensuring compliance and market credibility',
      price: 'Register Now',
      href: '/spice-board-registration'
    },
    {
      id: 'Guest House Registration',
      title: 'Guest House Registration',
      description:
        'Dreaming of a guest house business in India? DoStartUp assists in obtaining Guest House Registration Certificates quickly and legally.',
      price: 'Register Now',
      href: '/guest-house-registration'
    },
    {
      id: 'Barcode Registration',
      title: 'Barcode Registration',
      description:
        'Need barcodes on your products for faster billing and inventory management? Get Barcode Registration done hassle-free with DoStartUp.',
      price: 'Register Now',
      href: '/barcode-registration'
    },
    {
      id: 'World Manufacturer Identifier (WMI) Code',
      title: 'World Manufacturer Identifier (WMI) Code',
      description:
        'Obtain your WMI code for automobiles and ensure global compliance with DoStartUp’s professional guidance.',
      price: 'Register Now',
      href: '/world-manufacturer-identifier-wmi-code'
    },
    {
      id: 'Telemarketing Registration in India',
      title: 'Telemarketing Registration in India',
      description:
        'Streamline the telemarketing registration process legally with DoStartUp and run your operations smoothly.',
      price: 'Register Now',
      href: '/telemarketing-registration-india'
    },
    {
      id: 'Trusted Telecom Approval',
      title: 'Trusted Telecom Approval',
      description:
        'Start your telecom business without complexities. DoStartUp provides professional guidance to secure trusted telecom approvals.',
      price: 'Register Now',
      href: '/trusted-telecom-approval'
    },
    {
      id: 'Get Uplinking or Downlinking Channels Permission in India',
      title: 'Get Uplinking or Downlinking Channels Permission in India',
      description:
        'Planning to broadcast new channels? DoStartUp assists in obtaining uplinking/downlinking permissions efficiently.',
      price: 'Register Now',
      href: '/uplinking-downlinking-permission'
    },
    {
      id: 'PM-WANI Registration',
      title: 'PM-WANI Registration',
      description:
        'Looking to become a public Wi-Fi provider? Secure PM WANI Wifi registration through DoStartUp and provide internet access legally.',
      price: 'Register Now',
      href: '/startup/pm-wani-registration'
    },
    {
      id: 'Flipkart Seller Registration',
      title: 'Flipkart Seller Registration',
      description:
        'Enter the Indian e-commerce market confidently. Get timely and affordable Flipkart seller registration with DoStartUp experts.',
      price: 'Register Now',
      href: '/flipkart-seller-registration'
    },
    {
      id: 'Sanitary Import Permit',
      title: 'Sanitary Import Permit',
      description:
        'Import livestock or livestock products in India? DoStartUp ensures smooth processing of sanitary import permit certificates.',
      price: 'Register Now',
      href: '/sanitary-import-permit'
    },
    {
      id: 'NPOP Certification',
      title: 'NPOP Certification',
      description:
        'Expand your organic business with NPOP certification. DoStartUp helps you meet India’s organic standards efficiently.',
      price: 'Register Now',
      href: '/npop-certification'
    },
    {
      id: 'Coconut Board Registration',
      title: 'Coconut Board Registration',
      description:
        'Engaged in the coconut business? Unlock growth opportunities with Coconut Board Registration and access government schemes with DoStartUp.',
      price: 'Register Now',
      href: '/startup/coconut-board-registration'
    },
    {
      id: 'Drone Registration',
      title: 'Drone Registration',
      description:
        'Launching a drone business? Secure your drone registration and start operations legally with DoStartUp’s expert assistance.',
      price: 'Register Now',
      href: '/drone-registration'
    }
  ],
  'it-services':[
    {
      id: 'Web Development Company',
      title: 'Web Development Company',
      description:
        'Website Development Services – Enhance your business visibility with expert website development services from the professional and experienced team at DoStartUp. Build credibility, engage customers, and grow your brand online seamlessly.',
      price: 'Register Now',
      href: '/web-development-services'
    }
  ],
  'ngo':[
    {
      id: 'NGO Registration',
      title: 'NGO Registration',
      description:
        'NGO Registration Online in India – Experience a smooth and hassle-free NGO registration process in India with DoStartUp experts. Take the first step toward making a positive social impact for a better tomorrow.',
      price: 'Register Now',
      href: '/ngo-registration-india'
    },
    {
      id: '80G and 12A Registration',
      title: '80G and 12A Registration',
      description:
        '80G and 12A Registration in India – Get hassle-free 80G and 12A registration with DoStartUp. Unlock tax exemptions for your NGO and provide benefits to your donors effortlessly.',
      price: 'Register Now',
      href: '/12a-80g-registration'
    },
    {
      id: 'Section 8 Company Registration',
      title: 'Section 8 Company Registration',
      description:
        'Section 8 Company Registration – Looking to register a Section 8 Company and prioritize social welfare over profits? Connect with DoStartUp experts for a smooth, stress-free, and timely registration process.',
      price: 'Register Now',
      href: '/section8-company-registration'
    },
    {
      id: 'Society Registration',
      title: 'Society Registration',
      description:
        'Society Registration – Unlock the potential of your society by registering hassle-free with DoStartUp. Get expert guidance, a seamless process, and full legal compliance in just a few steps.',
      price: 'Register Now',
      href: '/society-registration-india'
    },
    {
      id: 'FCRA Registration',
      title: 'FCRA Registration',
      description:
        'FCRA Registration – Looking to receive foreign donations for your cause? Partner with DoStartUp for a smooth FCRA registration process and unlock new funding opportunities. We’ve successfully processed over 5,000 registrations.',
      price: 'Register Now',
      href: '/startup/fcra-registration'
    },
    {
      id: '12AA Registration',
      title: '12AA Registration',
      description:
        '12AA Registration in India – Struggling with complex documentation for 12AA registration? DoStartUp experts streamline your process, minimizing rejections and delays. Our success rate is 98 out of 100 cases.',
      price: 'Register Now',
      href: '/startup/12aa-registration'
    },
    {
      id: 'Trust Registration',
      title: 'Trust Registration',
      description:
        'Trust Registration in India – Planning to support literature, science, or other public interest causes? Connect with DoStartUp experts for a hassle-free trust registration process and bring your vision to life.',
      price: 'Register Now',
      href: '/startup/trust-registration'
    },
    {
      id: '12AB Registration',
      title: '12AB Registration',
      description:
        '12AB Registration – Concerned about challenges in obtaining 12AB registration for your NGO? Get your 12AB certificate with DoStartUp and enjoy numerous tax benefits and exemptions effortlessly.',
      price: 'Register Now',
      href: '/12ab-registration-india'
    },
    {
      id: 'Strike off Section 8 Companies',
      title: 'Strike off Section 8 Companies',
      description:
        'Strike Off Section 8 Companies – ‘Strike off’ is the process where the ROC removes a company’s name from the register. Section 8 companies, however, do not have a limited timeline for this process. Connect with DoStartUp for expert guidance and hassle-free completion.',
      price: 'Register Now',
      href: '/'
    },
    {
      id: 'NGO CSR-1 Filing',
      title: 'NGO CSR-1 Filing',
      description:
        'NGO CSR-1 Filing – Without filing Form CSR-1, an NGO cannot receive CSR funds from corporates. Let DoStartUp handle your NGO CSR-1 filing efficiently and hassle-free!',
      price: 'Register Now',
      href: '/startup/ngo-darpan-registration'
    },
    {
      id: 'NGO CSR Consultancy',
      title: 'NGO CSR Consultancy',
      description:
        'NGO CSR Consultancy – DoStartUp provides expert CSR consultancy for non-governmental organizations. With a proven track record of successfully assisting 100+ NGOs, DoStartUp ensures effective CSR strategy and compliance.',
      price: 'Register Now',
      href: '/ngo-csr-1-filing'
    },
    {
      id: 'NGO Income Tax Advisory',
      title: 'NGO Income Tax Advisory',
      description:
        'NGO Income Tax Advisory – Unsure how to fulfill income tax compliance requirements for your NGO? Connect with DoStartUp experts and get top-notch NGO income tax advisory services.',
      price: 'Register Now',
      href: '/ngo-csr-consultancy'
    },
    {
      id: 'NGO Accounting',
      title: 'NGO Accounting',
      description:
        'NGO Accounting – Every registered NGO must maintain a proper system to record and submit all financial transactions to efficiently manage projects and run their organization. DoStartUp provides expert support to ensure accurate and compliant NGO accounting.',
      price: 'Register Now',
      href: '/ngo-income-tax-advisory'
    },
    {
      id: 'NGO Project Report',
      title: 'NGO Project Report',
      description:
        'NGO Project Report – Need expert help to prepare your NGO project report? Connect with the DoStartUp team to get a detailed, error-free report quickly and efficiently.',
      price: 'Register Now',
      href: '/ngo-accounting'
    },
    {
      id: 'Trust Annual Compliance',
      title: 'Trust Annual Compliance',
      description:
        'Trust Annual Compliance in India – Facing challenges with trust annual compliance? DoStartUp’s expert consultants simplify the process, ensuring timely and accurate submissions for your trust.',
      price: 'Register Now',
      href: '/startup/trust-annual-compliance'
    },
    {
      id: 'NGO Darpan Registration',
      title: 'NGO Darpan Registration',
      description:
        'NGO Darpan Registration – Concerned about missing funding opportunities? Get expert assistance from DoStartUp for the NGO Darpan registration process and enjoy faster, hassle-free approval for government funding.',
      price: 'Register Now',
      href: '/ngo-project-report'
    },
    {
      id: '80G Registration',
      title: '80G Registration',
      description:
        '80G Registration – Apply for 80G registration online in just ₹4999 + Govt. Fee with DoStartUp experts, who bring 10+ years of industry experience. Get your registration certificate quickly and hassle-free.',
      price: 'Register Now',
      href: '/12a-80g-registration'
    }
  ],
  'iso':[
    {
      id: 'ISO Registration',
      title: 'ISO Registration',
      description:
        'ISO Registration – Looking to enhance your brand’s credibility? DoStartUp experts help you obtain ISO Certification, ensuring global standards, quality assurance, and lasting trust for your business.',
      price: 'Register Now',
      href: '/iso-registration'
    },
    {
      id: 'ISO 14001 EMS',
      title: 'ISO 14001 EMS',
      description:
        'ISO 14001 EMS – ISO 14001 EMS applies to organizations of any type or sector. DoStartUp guides you in setting specific environmental objectives, ensuring compliance, and implementing an effective Environmental Management System (EMS) tailored to your business.',
      price: 'Register Now',
      href: '/iso-certification-14001-ems'
    },
    {
      id: 'ISO 22000 FSMS',
      title: 'ISO 22000 FSMS',
      description:
        'ISO 22000 FSMS – DoStartUp helps your organization obtain ISO 22000 FSMS certification, ensuring that as a food producer, you maintain proper food safety management for your products and meet international quality standards.',
      price: 'Register Now',
      href: '/iso-22000-certification-fsms'
    },
    {
      id: 'ISO 9001 2015',
      title: 'ISO 9001 2015',
      description:
        'ISO 9001:2015 Certification – Get your ISO 9001:2015 Certification with DoStartUp. Our experts assist you in obtaining the certification smoothly and hassle-free, ensuring your organization meets international quality standards.',
      price: 'Register Now',
      href: '/iso-9001-2015-certification-quality-management-systems'
    },
    {
      id: 'ISO 50001 Energy Management',
      title: 'ISO 50001 Energy Management',
      description:
        'ISO 50001 Energy Management Certification – DoStartUp helps your organization obtain ISO 50001 Energy Management Certification, enabling efficient energy management and compliance with international energy standards.',
      price: 'Register Now',
      href: '/iso-50001-energy-management'
    },
    {
      id: 'ISO 45001 certification',
      title: 'ISO 45001 certification',
      description:
        'ISO 45001 Certification – Looking to create a safer workplace? DoStartUp experts ensure a smooth and stress-free ISO 45001 certification process, helping you reduce workplace risks and maintain compliance efficiently.',
      price: 'Register Now',
      href: '/startup/iso-45001-certification'
    },
    {
      id: 'ISO 20000 Certification',
      title: 'ISO 20000 Certification',
      description:
        'ISO 20000 Certification – If your organization aims to achieve ISO 20000 certification, DoStartUp experts assist you in obtaining it smoothly and hassle-free, ensuring compliance with international IT service management standards.',
      price: 'Register Now',
      href: '/iso-20000-certification'
    },
    {
      id: 'ISO 31000 Certification',
      title: 'ISO 31000 Certification',
      description:
        'ISO 31000 Certification – For effective risk management and strategic planning, get ISO 31000 Certification with DoStartUp. Our experts guide you through a smooth and compliant certification process.',
      price: 'Register Now',
      href: '/iso-31000-certification'
    },
    {
      id: 'ISO 13485 Certification',
      title: 'ISO 13485 Certification',
      description:
        'ISO 13485 Certification – DoStartUp assists you in obtaining ISO 13485 certification, ensuring compliance with international quality management standards for medical devices and related products.',
      price: 'Register Now',
      href: '/iso-13485-certification'
    },
    {
      id: 'ISO 21101:2014 Certification',
      title: 'ISO 21101:2014 Certification',
      description:
        'ISO 21101:2014 Certification – DoStartUp helps adventure tourism providers comply with all safety management system requirements. Our experts guide you in obtaining ISO 21101:2014 certification smoothly and efficiently.',
      price: 'Register Now',
      href: '/iso-21101-2014-certification'
    },
    {
      id: 'ISO 37001:2016 Certification',
      title: 'ISO 37001:2016 Certification',
      description:
        'ISO 37001:2016 Certification – DoStartUp provides expert assistance to help your organization comply with ISO 37001:2016 requirements, ensuring effective anti-bribery management and establishing a culture of integrity.',
      price: 'Register Now',
      href: '/iso-37001-2016-certification'
    },
    {
      id: 'ISO 27001 ISMS Certification',
      title: 'ISO 27001 ISMS Certification',
      description:
        'ISO 27001 ISMS Certification – DoStartUp guides you in obtaining ISO 27001 ISMS certification, ensuring your organization complies with international standards for information security management.',
      price: 'Register Now',
      href: '/iso-27001-isms-certification'
    },
    {
      id: 'ISO 16001 Certification',
      title: 'ISO 16001 Certification',
      description:
        'ISO 16001 Certification – DoStartUp guides you in obtaining ISO 16001 certification, helping your organization comply with international standards and enhance energy efficiency and operational performance.',
      price: 'Register Now',
      href: '/iso-16001-certification'
    },
    {
      id: 'ISO 39001 Certification',
      title: 'ISO 39001 Certification',
      description:
        'ISO 39001 Certification – Looking to enhance road traffic safety? DoStartUp provides expert guidance to help your organization achieve ISO 39001 certification efficiently and save time.',
      price: 'Register Now',
      href: '/iso-39001-certification'
    },
    {
      id: 'ISO 2768-1 Certification',
      title: 'ISO 2768-1 Certification',
      description:
        'ISO 2768-1 Certification – Ensure accurate general tolerances for your mechanical products with ISO 2768-1 certification. Connect with DoStartUp for expert guidance and seamless compliance.',
      price: 'Register Now',
      href: '/startup/iso-2768-1'
    }
  ]
};

export const getServicesData = (slug: string): Service[] => {
  return servicesMap[slug] || [];
};
