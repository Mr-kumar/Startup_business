export type PageContentType = {
  overview: {
    heading: string;
    paragraphs: string[];
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  documents: {
    steps: { title: string; desc: string }[];
    violations: string[];
    consequences: string[];
  };
  eligibility: { heading: string; items: string[] }[];
  services: { title: string; desc: string }[];
  postRegistration?: {
    heading: string;
    paragraphs: string[];
  };
  foSCOS?: {
    heading: string;
    paragraphs: string[];
  };
  faqs: { question: string; answer: string }[];
  types: {
    cards: { title: string; shortText: string; backText: string }[];
    roleBenefits: string[];
    differenceTable: {
      columns: string[];
      rows: string[][];
    };
    timelineFees: string[];
  };
};




export const pageContent: Record<string, PageContentType> = {
  "gst-registration": {
    overview: {
      heading: "GST Registration in India – Everything You Need to Know",
      paragraphs: [
        "If you are looking for GST registration to empower your business legally, you are at the right place.",
        "The Goods and Services Tax, popularly known as GST, was introduced on July 1, 2017, as a replacement for various central and state-level taxes, including Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax, and VAT. GST has streamlined compliance, lowered tax evasions, and boosted the efficacy of the economy.",
        "GST has united multiple indirect taxes into a unified system, promoting the ease of doing business and eliminating cascading tax effects.",
        "Talk to consultants at Corpbiz and enjoy easy and timely GST registration in India.",
      ],
    },
    features: [
      {
        icon: "🏢",
        title: "Central Goods and Services Tax (CGST)",
        description:
          "Central Goods and Services Tax (CGST) is a tax imposed by the Central Government on the supply of goods and services within a specified period.",
      },
      {
        icon: "🏛️",
        title: "State Goods and Services Tax (SGST)",
        description:
          "State Goods and Services Tax (SGST) is a tax imposed by the State Government on the supply of goods and services within the state.",
      },
      {
        icon: "🌐",
        title: "Integrated Goods and Services Tax (IGST)",
        description:
          "Integrated GST (IGST) is a tax imposed on inter-state goods and services supply.",
      },
    ],
    benefits: [
      {
        title: "Regulatory Compliance",
        description:
          "GST registration safeguards interests by ensuring legal and tax compliance.",
      },
      {
        title: "Easy Compliance",
        description: "Helps streamline filing returns and online payments.",
      },
      {
        title: "Maintains Transparency",
        description:
          "Allows maintaining updated records and operational transparency.",
      },
      {
        title: "Legal Protection",
        description:
          "Safeguards legal and regulatory standards of the business.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Apply on GST Portal",
          desc: "Visit the GST portal and provide business details.",
        },
        {
          title: "Authenticate OTP",
          desc: "Verify via OTP sent to your mobile and email.",
        },
        {
          title: "TRN Generated",
          desc: "Receive the generated TRN number via email.",
        },
        {
          title: "Submission for Verification",
          desc: "Submit promoter, business, and Aadhar details.",
        },
        {
          title: "Receive ARN Confirmation",
          desc: "Get ARN confirmation via SMS.",
        },
      ],
      violations: [
        "Penalty of 10% of pending tax for accidental underpayment.",
        "100% penalty for intentional tax evasion.",
        "Minimum INR 10,000 penalty for late payments.",
        "Interest on outstanding GST liabilities.",
        "Suspension or cancellation of GST registration.",
      ],
      consequences: [
        "Rs. 10,000 or tax evaded, whichever is greater (Section 122).",
        "Penalty for non-registration: Rs. 2 lakhs or Rs. 10,000 (whichever higher).",
        "Rs. 2 lakh if GST registration is not obtained.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Checklist for Filing GST Registration",
        items: [
          "Businesses with turnover over INR 40 Lakhs (INR 20 Lakhs for special states).",
          "Service providers with turnover over INR 20 Lakhs (INR 10 Lakhs for special states).",
          "Businesses previously under old tax structures must migrate.",
          "Non-residents supplying taxable services in India require registration.",
        ],
      },
      {
        heading: "Other Entities Eligible to Apply",
        items: [
          "Inter-state goods suppliers.",
          "Reverse charge liable entities.",
          "Input service distributors.",
          "E-commerce operators.",
        ],
      },
      {
        heading: "Documents Required for GST Registration Online",
        items: [
          "PAN Card",
          "Aadhar Card",
          "Company Registration Certificate",
          "Identity & Address Proof",
          "Photographs",
          "Business Address Proof",
          "Bank Statement",
          "Digital Signature Certificate",
          "Lease Agreement",
          "Authorization Letter",
        ],
      },
    ],
    services: [
      {
        title: "Simplified Registration",
        desc: "Processed 5000+ GST applications successfully.",
      },
      {
        title: "High Success Rate",
        desc: "99% success rate in obtaining certificates.",
      },
      {
        title: "Simplify Documentation",
        desc: "Assisting in documentation for GST registration.",
      },
      { title: "Legal Advice", desc: "Regular legal updates and advice." },
      { title: "End-to-End Solutions", desc: "Complete compliance solutions." },
      {
        title: "Affordable Pricing",
        desc: "Transparent pricing for GST services.",
      },
      {
        title: "Reduced Compliance Burden",
        desc: "Reduce burden by up to 30%.",
      },
      {
        title: "10+ Years of Experience",
        desc: "Extensive expertise in GST registration.",
      },
      {
        title: "24/7 Customer Support",
        desc: "Round-the-clock compliance assistance.",
      },
    ],
    faqs: [
      {
        question: "What is GST?",
        answer: "GST stands for Goods and Services Tax.",
      },
      {
        question: "When is GST registration crucial?",
        answer:
          "For businesses exceeding threshold, e-commerce, and inter-state suppliers.",
      },
      {
        question: "Is photograph required for registration?",
        answer: "Yes, recent photograph is mandatory.",
      },
      {
        question: "Do e-commerce operators register in each state?",
        answer: "Yes, registration is state-specific.",
      },
      {
        question: "Is GST registration mandatory in India?",
        answer: "Yes for eligible businesses.",
      },
      {
        question: "Is GST certificate mandatory?",
        answer: "Yes, it is proof of registration.",
      },
    ],
    types: {
      cards: [
        {
          title: "Wrong Documentation",
          shortText: "Avoid wrong documentation.",
          backText: "Avoid preparing invoices and bills incorrectly.",
        },
        {
          title: "Understanding Composition Scheme",
          shortText: "Misunderstanding can cause issues.",
          backText: "Be aware of the GST composition scheme implications.",
        },
        {
          title: "Missing Return Deadlines",
          shortText: "Don't miss filing due dates.",
          backText: "Late filings lead to penalties.",
        },
        {
          title: "Invoice Inaccuracies",
          shortText: "Ensure invoice accuracy.",
          backText: "Mistakes lead to compliance risks.",
        },
        {
          title: "GSTR-2A/3B Discrepancies",
          shortText: "Reconcile purchases regularly.",
          backText: "Avoid mismatches in returns.",
        },
        {
          title: "Unverified GSTIN",
          shortText: "Verify supplier GSTINs.",
          backText: "Prevent input tax credit issues.",
        },
      ],
      roleBenefits: [
        "Allows collection of GST from customers.",
        "Enables input tax credit claims.",
        "Facilitates loan applications.",
        "Qualifies for government tenders.",
        "Boosts business credibility.",
      ],
      differenceTable: {
        columns: ["Serial Number", "GST", "Income Tax"],
        rows: [
          ["1", "Indirect tax on consumption", "Direct tax on income"],
          ["2", "Multi-stage tax with input credit", "Single-level tax"],
          ["3", "Filed monthly/quarterly", "Filed annually"],
          ["4", "Central & State governments", "Central government only"],
          ["5", "Mandatory above Rs. 40 Lakhs turnover", "Above Rs. 3 Lakhs income"]
        ]
      },
      timelineFees: [
        "Approval timeline: 7-10 working days.",
        "Full process: approx. 30 days.",
        "Starting fees from Rs. 1999/-.",
        "Government charges no direct fees online.",
        "Fees influenced by state policies and business nature.",
      ],
    },
  },
  "fssai-annual-return": {
    overview: {
      heading:
        "FSSAI Annual Return Filing – A Complete Guide (An Overview of FSSAI Annual Return)",
      paragraphs: [
        "In India, all Food Business Operators (FBOs) holding an FSSAI license — including manufacturers, importers, packers, and labellers — are required to file an FSSAI Annual Return. This mandatory compliance ensures that businesses report crucial details regarding their food production, storage, handling, and distribution activities to the Food Safety and Standards Authority of India (FSSAI) every year.",
        "As per the latest FSSAI guidelines, filing the FSSAI Annual Return must be done online, promoting greater transparency and regulatory compliance across the food sector. Timely filing of the FSSAI return is not only a legal obligation but also a sign of a responsible and compliant food business.",
        "Facing challenges in filing your FSSAI Annual Return? Connect with our experts at Ctax for professional assistance and seamless support in FSSAI Annual Return filing.",
      ],
    },
    features: [],
    benefits: [
      {
        title: "Boosts Market Reputation",
        description:
          "Timely FSSAI annual return filing enhances a business's market reputation, reflecting its commitment to maintaining food safety and quality standards.",
      },
      {
        title: "Increases Brand Value and Trust",
        description:
          "A compliant business earns greater customer trust and brand loyalty. Filing the FSSAI annual return showcases a company's adherence to food safety norms, boosting its overall brand value.",
      },
      {
        title: "Access to Government Support",
        description:
          "Businesses that comply with FSSAI regulations are more likely to receive government incentives, recognition, and other forms of official support.",
      },
      {
        title: "Ensures Regulatory Compliance",
        description:
          "Filing the annual return ensures that the business aligns with the mandatory FSSAI standards, helping avoid penalties and maintain uninterrupted operations.",
      },
      {
        title: "Enhances Operational Efficiency",
        description:
          "Following structured compliance processes like annual return filing can streamline operations, improve internal efficiency, and promote better food handling practices.",
      },
      {
        title: "Safeguards Consumer Health",
        description:
          "By adhering to FSSAI standards through annual return filing, businesses ensure the delivery of hygienic, safe, and high-quality food products, strengthening consumer safety and trust.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Login to the FSSAI Portal",
          desc: "Visit the official FSSAI website and log in to your registered account.",
        },
        {
          title: "Step 2: Receive Verification Code",
          desc: "Select 'Annual Return' and enter the OTP sent to your registered contact details.",
        },
        {
          title: "Step 3: Fill in Annual Return Forms",
          desc: "Complete Form D-1 or D-2 with your license number, product details, and other required information.",
        },
        {
          title: "Step 4: Upload Required Documents",
          desc: "Upload all mandatory supporting documents accurately.",
        },
        {
          title: "Step 5: Review and Submit",
          desc: "Verify all information and submit the form electronically before the deadline.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Must File an FSSAI Annual Return?",
        items: [
          "FBOs with an annual turnover exceeding ₹12 lakhs",
          "FBOs involved in the import, sale, sorting, handling, export, distribution, or transportation of food products",
          "FBOs engaged in the manufacturing, repackaging, or relabelling of food items",
          "FBO license holders involved in the manufacturing and distribution of milk and milk-based products",
        ],
      },
    ],
    services: [
      {
        title: "Expert Assistance",
        desc: "Connect with our experts at Ctax for professional assistance and seamless support in FSSAI Annual Return filing.",
      },
    ],
    faqs: [
      {
        question: "What is an FSSAI Return?",
        answer:
          "A mandatory report filed by Food Business Operators (FBOs) to the Food Safety and Standards Authority of India (FSSAI), detailing food production, handling, and distribution activities throughout the year.",
      },
      {
        question: "How can I file an FSSAI Return?",
        answer:
          "Log in to the FSSAI portal, select the appropriate form (D-1 or D-2), fill in the required details, upload documents, and submit before the due date.",
      },
      {
        question: "What details are required for FSSAI Return?",
        answer:
          "Details include FSSAI license number, quantities of products handled/manufactured/imported/exported, packaging details, and a compliance declaration.",
      },
      {
        question: "Who is exempted from filing an FSSAI Annual Return?",
        answer:
          "Canteens, restaurants, fast-food outlets, and grocery stores primarily serving household products.",
      },
      {
        question: "What is the penalty for late filing?",
        answer:
          "₹100 per day, up to a maximum of five times the annual license fee.",
      },
      {
        question: "What are Form D-1 and D-2?",
        answer:
          "Form D-1 is the annual return for most FBOs; Form D-2 is the half-yearly return for milk and milk-based units.",
      },
      {
        question: "What is FoSCoS Annual Return filing?",
        answer:
          "Food Safety Compliance System (FoSCoS) is the digital platform for filing annual returns and other food safety compliances.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Serial Number", "Type", "Description"],
        rows: []
      },
      timelineFees: [
        "Form D-1 due by 31 May each year",
        "Form D-2 due by 31 October and 30 April",
        "Late filing penalty of ₹100 per day (max five times annual license fee)",
      ],
    },
  },
  "fssai-license-registration": {
    overview: {
      heading: "FSSAI License and Registration in India – A Complete Guide",
      paragraphs: [
        "If you're planning to start or run a food-related business in India, obtaining an FSSAI license is a legal requirement. The Food Safety and Standards Authority of India (FSSAI) mandates this registration for all entities involved in the production, processing, packaging, distribution, and sale of food items.",
        "An FSSAI registration not only ensures compliance with food safety regulations but also enhances your brand's credibility and consumer trust. It assures your customers that the food you offer meets the highest quality and hygiene standards. With our expert FSSAI license consultants, you can simplify the registration process and ensure full compliance with FSSAI norms—making your food business safe, reliable, and legally sound."
      ]
    },
    features: [],

    benefits: [
      {
        title: "Ensures Legal Compliance",
        description: "FSSAI registration is mandatory under Indian law for anyone involved in the food business. Holding a valid food license confirms that your business complies with the Food Safety and Standards Act, helping you avoid hefty penalties and legal hassles."
      },
      {
        title: "Builds Consumer Trust",
        description: "Displaying the FSSAI license number on your food packaging or premises reinforces transparency and quality assurance. It builds consumer confidence in your brand and showcases your commitment to food safety."
      },
      {
        title: "Enables Market Expansion",
        description: "An FSSAI license enhances your brand's credibility, making it easier to expand into new markets—including retail chains, exports, and online food delivery platforms."
      },
      {
        title: "Boosts Business Credibility",
        description: "Having an FSSAI license signals to investors, stakeholders, and partners that your business meets industry standards for safety and hygiene."
      },
      {
        title: "Promotes Better Hygiene & Quality",
        description: "Maintaining FSSAI compliance requires strict safety and hygiene protocols, reducing contamination risks and ensuring high product quality."
      },
      {
        title: "Access to Government Support",
        description: "FSSAI-registered businesses are eligible for various government subsidies, funding schemes, and promotional support."
      }
    ],

    documents: {
      steps: [
        {
          title: "Step 1: Application Filing",
          desc: "Fill out Form A (Basic) or Form B (State/Central) online via FoSCoS or submit to your local Food Safety Department."
        },
        {
          title: "Step 2: Document Submission",
          desc: "Attach all mandatory documents correctly to avoid delays or rejection."
        },
        {
          title: "Step 3: Application Verification",
          desc: "FSSAI reviews your application and documents—any missing info will be flagged."
        },
        {
          title: "Step 4: Premises Inspection",
          desc: "For State/Central licenses, an officer inspects your food premises for hygiene and safety compliance."
        },
        {
          title: "Step 5: License Issuance",
          desc: "Upon successful verification and inspection, you receive your FSSAI license certificate with a unique number."
        }
      ],
      violations: [
        "Operating with an expired license",
        "Non-compliance with hygiene standards",
        "Misbranded or sub-standard food products"
      ],
      consequences: [
        "Penalties up to ₹2 Lakhs for non-compliance",
        "Possible license cancellation",
        "Legal action under the Food Safety and Standards Act"
      ]
    },

    eligibility: [
      {
        heading: "Eligibility Criteria for FSSAI License",
        items: [
          "Annual turnover: up to ₹12 L for Basic, ₹12 L–₹20 Cr for State, above ₹20 Cr for Central",
          "Production: up to 2 MT/day or 50,000 L/day for State; above for Central",
          "Business type: single-state → State License; multi-state/import-export → Central License",
          "Storage: up to 50,000 MT for State; above for Central"
        ]
      },
      {
        heading: "Who Needs an FSSAI License?",
        items: [
          "Manufacturers, processors, importers, exporters",
          "Distributors, wholesalers, retailers, foodservice outlets",
          "Restaurants, cafés, caterers, food trucks, home-based kitchens",
          "Food delivery aggregators, transporters, logistics",
          "Packaging, labeling units, warehouses, cold storage"
        ]
      }
    ],

    services: [
      {
        title: "Expert FSSAI Consultation",
        desc: "Our specialists guide you through every step: documentation, application filing, inspections, and renewals."
      }
    ],

    faqs: [
      {
        question: "What is FoSCoS?",
        answer: "The Food Safety Compliance System (FoSCoS) is FSSAI's modern portal for applying, renewing, and tracking licenses digitally."
      },
      {
        question: "How long does FSSAI registration take?",
        answer: "Typically 7–60 days, depending on license type, completeness of documents, and inspection schedules."
      },
      {
        question: "What documents are required?",
        answer: "Includes Form A/B, ID proof, address proof, layout plan, FSMS plan (for Central), NOC, and business constitution proof."
      },
      {
        question: "What's the difference between registration and license?",
        answer: "Basic Registration is for turnover ≤₹12 L; State License for ₹12 L–₹20 Cr; Central License for >₹20 Cr or multi-state operations."
      },
      {
        question: "How do I renew my FSSAI license?",
        answer: "Apply for renewal via FoSCoS at least 30 days before expiry to avoid penalties."
      }
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Serial Number", "Type", "Description"],
        rows: [
          ["1", "Basic Registration", "turnover ≤₹12 L, Form A"],
          ["2", "Central License", "turnover >₹20 Cr or multi-state, Form B"]
        ]
      },
      timelineFees: [
        "Form A/B application",
        "Document upload",
        "Verification & inspection",
        "License issuance",
        "Annual renewal"
      ]
    }
  }
  
};
