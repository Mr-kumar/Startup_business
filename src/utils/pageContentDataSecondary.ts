export type PageContentType = {
  overview: {
    heading: string;
    paragraphs: string[];
  };
  features: {
    icon?: string;
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
        "Talk to consultants at DoStartup and enjoy easy and timely GST registration in India.",
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
          [
            "5",
            "Mandatory above Rs. 40 Lakhs turnover",
            "Above Rs. 3 Lakhs income",
          ],
        ],
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
        rows: [],
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
        "An FSSAI registration not only ensures compliance with food safety regulations but also enhances your brand's credibility and consumer trust. It assures your customers that the food you offer meets the highest quality and hygiene standards. With our expert FSSAI license consultants, you can simplify the registration process and ensure full compliance with FSSAI norms—making your food business safe, reliable, and legally sound.",
      ],
    },
    features: [],

    benefits: [
      {
        title: "Ensures Legal Compliance",
        description:
          "FSSAI registration is mandatory under Indian law for anyone involved in the food business. Holding a valid food license confirms that your business complies with the Food Safety and Standards Act, helping you avoid hefty penalties and legal hassles.",
      },
      {
        title: "Builds Consumer Trust",
        description:
          "Displaying the FSSAI license number on your food packaging or premises reinforces transparency and quality assurance. It builds consumer confidence in your brand and showcases your commitment to food safety.",
      },
      {
        title: "Enables Market Expansion",
        description:
          "An FSSAI license enhances your brand's credibility, making it easier to expand into new markets—including retail chains, exports, and online food delivery platforms.",
      },
      {
        title: "Boosts Business Credibility",
        description:
          "Having an FSSAI license signals to investors, stakeholders, and partners that your business meets industry standards for safety and hygiene.",
      },
      {
        title: "Promotes Better Hygiene & Quality",
        description:
          "Maintaining FSSAI compliance requires strict safety and hygiene protocols, reducing contamination risks and ensuring high product quality.",
      },
      {
        title: "Access to Government Support",
        description:
          "FSSAI-registered businesses are eligible for various government subsidies, funding schemes, and promotional support.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Step 1: Application Filing",
          desc: "Fill out Form A (Basic) or Form B (State/Central) online via FoSCoS or submit to your local Food Safety Department.",
        },
        {
          title: "Step 2: Document Submission",
          desc: "Attach all mandatory documents correctly to avoid delays or rejection.",
        },
        {
          title: "Step 3: Application Verification",
          desc: "FSSAI reviews your application and documents—any missing info will be flagged.",
        },
        {
          title: "Step 4: Premises Inspection",
          desc: "For State/Central licenses, an officer inspects your food premises for hygiene and safety compliance.",
        },
        {
          title: "Step 5: License Issuance",
          desc: "Upon successful verification and inspection, you receive your FSSAI license certificate with a unique number.",
        },
      ],
      violations: [
        "Operating with an expired license",
        "Non-compliance with hygiene standards",
        "Misbranded or sub-standard food products",
      ],
      consequences: [
        "Penalties up to ₹2 Lakhs for non-compliance",
        "Possible license cancellation",
        "Legal action under the Food Safety and Standards Act",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria for FSSAI License",
        items: [
          "Annual turnover: up to ₹12 L for Basic, ₹12 L–₹20 Cr for State, above ₹20 Cr for Central",
          "Production: up to 2 MT/day or 50,000 L/day for State; above for Central",
          "Business type: single-state → State License; multi-state/import-export → Central License",
          "Storage: up to 50,000 MT for State; above for Central",
        ],
      },
      {
        heading: "Who Needs an FSSAI License?",
        items: [
          "Manufacturers, processors, importers, exporters",
          "Distributors, wholesalers, retailers, foodservice outlets",
          "Restaurants, cafés, caterers, food trucks, home-based kitchens",
          "Food delivery aggregators, transporters, logistics",
          "Packaging, labeling units, warehouses, cold storage",
        ],
      },
    ],

    services: [
      {
        title: "Expert FSSAI Consultation",
        desc: "Our specialists guide you through every step: documentation, application filing, inspections, and renewals.",
      },
    ],

    faqs: [
      {
        question: "What is FoSCoS?",
        answer:
          "The Food Safety Compliance System (FoSCoS) is FSSAI's modern portal for applying, renewing, and tracking licenses digitally.",
      },
      {
        question: "How long does FSSAI registration take?",
        answer:
          "Typically 7–60 days, depending on license type, completeness of documents, and inspection schedules.",
      },
      {
        question: "What documents are required?",
        answer:
          "Includes Form A/B, ID proof, address proof, layout plan, FSMS plan (for Central), NOC, and business constitution proof.",
      },
      {
        question: "What's the difference between registration and license?",
        answer:
          "Basic Registration is for turnover ≤₹12 L; State License for ₹12 L–₹20 Cr; Central License for >₹20 Cr or multi-state operations.",
      },
      {
        question: "How do I renew my FSSAI license?",
        answer:
          "Apply for renewal via FoSCoS at least 30 days before expiry to avoid penalties.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Serial Number", "Type", "Description"],
        rows: [
          ["1", "Basic Registration", "turnover ≤₹12 L, Form A"],
          ["2", "Central License", "turnover >₹20 Cr or multi-state, Form B"],
        ],
      },
      timelineFees: [
        "Form A/B application",
        "Document upload",
        "Verification & inspection",
        "License issuance",
        "Annual renewal",
      ],
    },
  },
  "opc-registration": {
    overview: {
      heading: "One Person Company Registration – An Overview",
      paragraphs: [
        "Are you a solopreneur who wants to give wings to your entrepreneurial dreams? One Person Company registration is the best option for you. Enjoy merits such as ease of incorporation, fewer compliance needs and sole ownership and control with stress-free OPC registration.",
        "OPC was introduced under the Companies Act, 2013, to safeguard solo entrepreneurs’ interests. Section 2(62) allows incorporation with just one director and one member, providing full control plus limited liability.",
        "Worried about hurdles in your OPC registration path? Talk to our business consultants for quick, budget-friendly solutions.",
      ],
    },

    features: [
      // Tax Implications
      {
        icon: "💼",
        title: "Flat Corporate Tax",
        description:
          "OPCs are taxed at a flat rate of 30% under the Income Tax Act, 1961.",
      },
      {
        icon: "🚫",
        title: "No Special Tax Breaks",
        description:
          "OPCs get no specific tax advantages compared to other structures.",
      },
      {
        icon: "📊",
        title: "Dividend Distribution Tax",
        description:
          "Profits paid out as dividends incur additional dividend distribution tax.",
      },
      {
        icon: "🗂️",
        title: "Separate Accounting",
        description:
          "An OPC’s finances are accounted for separately from the owner’s personal books.",
      },
      {
        icon: "📝",
        title: "Regular Filings",
        description:
          "OPCs must file income-tax returns annually (and GST returns, if applicable).",
      },

      // Key Features of an OPC
      {
        icon: "👤",
        title: "Single Ownership",
        description: "Managed and controlled by one individual.",
      },
      {
        icon: "🔖",
        title: "Nominee Appointment",
        description:
          "Nominee designated to ensure business continuity upon the owner’s demise.",
      },
      {
        icon: "🛡️",
        title: "Limited Liability",
        description:
          "Owner’s personal assets are protected beyond the business’s obligations.",
      },
      {
        icon: "🏢",
        title: "Separate Legal Identity",
        description:
          "OPC is a distinct legal entity that can enter contracts and be sued separately.",
      },
      {
        icon: "📋",
        title: "Single Director Permissible",
        description: "Can operate with just one director and one member.",
      },
      {
        icon: "🚫",
        title: "Restricted Investment Powers",
        description:
          "Prohibited from investing in other companies’ securities.",
      },
    ],

    benefits: [
      {
        title: "Simple Incorporation Process",
        description:
          "Requires only one member and one nominee, and minimal capital of ₹1 Lakh.",
      },
      {
        title: "Access to Funding",
        description:
          "OPCs can raise capital from VCs, angel investors, and banks more easily than sole proprietorships.",
      },
      {
        title: "Fewer Compliances",
        description:
          "Exempt from cash flow statements and company secretary signatures on annual returns.",
      },
      {
        title: "Limited Liability",
        description:
          "Liability is capped at the shareholder’s investment, protecting personal assets.",
      },
      {
        title: "Easy Management",
        description:
          "Single-director decision-making with minute-book resolutions simplifies governance.",
      },
      {
        title: "Exclusive Privileges",
        description:
          "Enjoy exemptions and privileges not available to other private companies.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Step 1: Obtain DSC & DIN",
          desc: "Get Digital Signature Certificate and apply for Director Identification Number via SPICe+.",
        },
        {
          title: "Step 2: Reserve Name",
          desc: "Reserve your unique company name (with “OPC” suffix) on the MCA portal.",
        },
        {
          title: "Step 3: Draft MoA & AoA",
          desc: "Prepare Memorandum and Articles (Forms INC-33/34), including nominee details.",
        },
        {
          title: "Step 4: File SPICe+ & AGILE-PRO",
          desc: "Submit incorporation forms with all mandatory documents via the FoSCoS portal.",
        },
        {
          title: "Step 5: Receive Incorporation Certificate",
          desc: "Get your Certificate of Incorporation from the Registrar and start operations.",
        },
      ],
      violations: [],
      consequences: [],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria for OPC",
        items: [
          "One shareholder & one director (nominee mandatory).",
          "Annual turnover ≤ ₹2 crores (must convert if exceeded).",
          "Minimum authorized capital of ₹1 lakh.",
          "Member & nominee must be Indian residents (NRIs post-2021 eligible).",
          "Company name must end with “OPC Private Limited.”",
        ],
      },
    ],

    services: [
      {
        title: "End-to-End OPC Support",
        desc: "Our experts handle everything—DSC/DIN, paperwork, filings, and follow-ups for seamless incorporation & renewal.",
      },
    ],

    faqs: [
      {
        question: "When must an OPC convert to a Private Limited company?",
        answer:
          "If annual turnover exceeds ₹2 crores or paid-up capital crosses ₹50 lakhs for three consecutive years.",
      },
      {
        question: "Can NRIs form an OPC?",
        answer:
          "Yes—post-2021 Union Budget, NRIs meeting residency criteria (≥182 days) can incorporate OPCs.",
      },
      {
        question: "What happens if the sole member dies?",
        answer:
          "The nominated individual automatically assumes ownership and operational control.",
      },
      {
        question: "Are OPCs taxed differently?",
        answer:
          "No—OPCs pay a flat corporate tax of 30%, plus additional dividend distribution tax on payouts.",
      },
      {
        question: "Do OPCs require annual general meetings (AGMs)?",
        answer: "No—OPCs are exempt from AGMs under the Companies Act, 2013.",
      },
      {
        question: "Is a DSC & DIN mandatory?",
        answer:
          "Yes—at least the sole director needs a DSC and DIN to sign incorporation forms.",
      },
      {
        question: "Are cash flow statements mandatory?",
        answer: "No—OPCs are exempt from preparing cash flow statements.",
      },
      {
        question: "Can an OPC invest in other companies?",
        answer: "No—OPCs cannot invest in securities of other companies.",
      },
      {
        question: "Which forms are used for incorporation?",
        answer:
          "SPICe+ (INC-32) with AGILE-PRO attachments for various licenses and registrations.",
      },
      {
        question: "How long does OPC registration take?",
        answer:
          "Typically 7–15 working days, depending on document completeness and ROC workload.",
      },
      {
        question: "What is Form INC-3?",
        answer:
          "Nominee’s consent form—mandatory to appoint a nominee in the MoA.",
      },
      {
        question: "Is a company secretary required?",
        answer:
          "Not mandatory—OPCs can operate without a company secretary but must maintain statutory records.",
      },
      {
        question: "What’s the validity of an OPC registration?",
        answer:
          "Valid for 20 years, subject to timely compliance and renewals.",
      },
      {
        question: "Are board meetings mandatory?",
        answer:
          "Yes—one board meeting per half-year with a minimum 90-day gap.",
      },
      {
        question: "What exemptions do OPCs enjoy?",
        answer:
          "No AGMs, no cash flow statements, relaxed board meeting norms, and single-director management.",
      },
      {
        question: "Can OPCs add partners later?",
        answer:
          "They must convert to Private Limited before issuing shares to new members.",
      },
      {
        question: "Is a DSC required for renewal?",
        answer: "Yes—the director’s DSC is needed for filing renewal returns.",
      },
      {
        question: "What are the ROC filing fees?",
        answer:
          "Fees depend on authorized capital—ranging from ₹200 to ₹1,000+ per filing.",
      },
      {
        question: "Who issues OPC certificates?",
        answer:
          "The Registrar of Companies (ROC) under the Ministry of Corporate Affairs.",
      },
      {
        question: "Can an OPC change its registered office?",
        answer:
          "Yes—file Form INC-22 with proof of new address for ROC approval.",
      },
      {
        question: "Is a separate PAN mandatory?",
        answer:
          "Yes—OPCs must obtain their own PAN for corporate tax purposes.",
      },
      {
        question: "Can an LLP form an OPC?",
        answer:
          "No—only natural persons (including NRIs) can incorporate an OPC.",
      },
      {
        question: "What is AGILE-PRO?",
        answer:
          "It’s an integrated form for GST, ESIC/EPF, and other registrations alongside company incorporation.",
      },
      {
        question: "Do OPCs require GST registration?",
        answer:
          "Yes—if turnover exceeds the GST threshold or if involved in interstate supply.",
      },
      {
        question: "Who issues OPC licenses at ports/airports?",
        answer:
          "The Central Licensing Authority issues those for units operating in ports and airports.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },
  "partnership-firm-registration": {
    overview: {
      heading: "Partnership Firm Registration: A Complete Guide",
      paragraphs: [
        "A partnership firm is a flexible and widely adopted business structure in India, ideal for entrepreneurs seeking to collaborate. It enables two or more individuals to combine resources, skills, and expertise while sharing profits as per a mutually agreed ratio outlined in the partnership deed.",
        "Unlike entities formed by status (e.g., Hindu Undivided Families), partnerships are established through a formal contract. While registration isn’t mandatory, obtaining a certificate from the Registrar of Partnership Firms strengthens legal credibility and operational security.",
      ],
    },

    features: [
      {
        icon: "🛡️",
        title: "Asset Protection",
        description:
          "Safeguard personal assets from business liabilities by registering your firm.",
      },
      {
        icon: "🤝",
        title: "Dispute Resolution",
        description:
          "Enables partners to legally pursue claims against third parties or co-partners.",
      },
      {
        icon: "🔒",
        title: "Limited Liability",
        description:
          "Partners’ financial responsibilities are capped at their capital contributions.",
      },
      {
        icon: "🚀",
        title: "Credibility Boost",
        description:
          "Registration enhances trust with clients, investors, and financial institutions.",
      },
      {
        icon: "💰",
        title: "Funding Access",
        description:
          "Registered firms attract loans and investments more easily than unregistered ones.",
      },
    ],

    benefits: [
      {
        title: "Simplified Compliance",
        description:
          "Minimal documentation and lower costs compared to private companies; exemption from complex financial reporting.",
      },
      {
        title: "Tax Efficiency",
        description:
          "Profits are taxed at partners’ individual income-slab rates—avoiding double taxation.",
      },
      {
        title: "Operational Flexibility",
        description:
          "Full control over decision-making and profit-sharing terms without excessive regulation.",
      },
      {
        title: "Diverse Expertise",
        description:
          "Combine complementary skills of partners, fostering innovation and resilience.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Draft the Partnership Deed",
          desc: "Outline terms, capital contributions, and profit-sharing ratios.",
        },
        {
          title: "Apply for DSC & DPIN",
          desc: "Obtain Digital Signatures and Designated Partner IDs via the MCA portal.",
        },
        {
          title: "Name Reservation",
          desc: "Submit a unique business name for approval with the Registrar of Firms.",
        },
        {
          title: "Submit Registration Forms",
          desc: "File Form A (or state-specific equivalent) with the Registrar, attaching deed and proofs.",
        },
        {
          title: "Post-Registration Formalities",
          desc: "Apply for PAN, TAN, and GST (if turnover exceeds ₹40 lakh).",
        },
      ],
      violations: [
        "Unregistered firms cannot sue third parties or enforce contractual rights.",
        "Failure to file ITR or pay taxes attracts penalties and interest.",
        "Ambiguous deed terms can lead to disputes and legal complications.",
        "Late GST filings incur penalties and interest on unpaid tax.",
      ],
      consequences: [
        "Loss of legal enforcement rights",
        "Monetary fines and interest under the Income Tax Act",
        "Potential business disruption due to disputes",
        "Suspension of GST registration",
      ],
    },

    eligibility: [
      {
        heading: "Who Can Register",
        items: [
          "Partners must be legally competent (minors excluded).",
          "HUFs, trusts, and registered firms may join if allowed by their rules.",
        ],
      },
      {
        heading: "Basic Requirements",
        items: [
          "Minimum 2 partners, maximum 100.",
          "Unique business name not conflicting with existing entities.",
          "Registered office address in India.",
        ],
      },
    ],

    services: [
      {
        title: "Expert Support",
        desc: "Our CAs and legal advisors guide you through every step—deed drafting, filings, and follow-ups.",
      },
      {
        title: "Quick Turnaround",
        desc: "Complete partnership firm registration within 7–10 working days.",
      },
      {
        title: "Affordable Pricing",
        desc: "Transparent, budget-friendly packages with no hidden costs.",
      },
      {
        title: "Post-Setup Assistance",
        desc: "Support for PAN, GST, MSME registration, and ongoing compliance filings.",
      },
    ],

    faqs: [
      {
        question: "Is GST mandatory for partnership firms?",
        answer:
          "Yes—if annual turnover exceeds ₹40 lakh, GST registration and filings are mandatory.",
      },
      {
        question: "Can spouses be partners?",
        answer:
          "Yes—provided each meets legal competency requirements and is not a minor.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Typically 2–3 weeks, depending on state regulations and document completeness.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "Partnership Firm", "LLP"],
        rows: [
          [
            "Liability",
            "Unlimited personal liability",
            "Limited to capital contribution",
          ],
          ["Registration", "Optional", "Mandatory"],
          ["Governance", "Indian Partnership Act, 1932", "LLP Act, 2008"],
          ["Max Partners", "100", "No limit"],
        ],
      },
      timelineFees: [
        "Registration timeline: 2–3 weeks",
        "Government fee: state-dependent (₹500–₹2000 approx.)",
      ],
    },
  },
  "sole-proprietorship-registration": {
    overview: {
      heading: "Start Your Business Journey with a Sole Proprietorship",
      paragraphs: [
        "A sole proprietorship is one of the simplest and most common business structures in India. It’s ideal for entrepreneurs looking to start with minimal investment and compliance. In this model, a single individual owns, manages, and controls the entire business.",
        "While it offers ease of setup and complete control, it's important to understand the registration process, benefits, and compliance obligations associated with a sole proprietorship.",
      ],
    },

    features: [
      {
        icon: "✅",
        title: "Easy to Establish",
        description:
          "Requires minimal documentation and can often be initiated without formal registration, depending on local rules.",
      },
      {
        icon: "🎯",
        title: "Complete Control",
        description:
          "You have full authority over all business decisions, enabling quick and flexible decision-making.",
      },
      {
        icon: "📉",
        title: "Minimal Compliance",
        description:
          "No annual filings with MCA and no mandatory audits unless specified under tax laws.",
      },
      {
        icon: "💸",
        title: "Tax Advantages",
        description:
          "Business income is taxed as personal income, simplifying filings and offering certain deductions.",
      },
      {
        icon: "🏦",
        title: "Easy Banking",
        description:
          "Open a current account easily with GST or Shop & Establishment registration, enhancing credibility.",
      },
    ],

    benefits: [],

    documents: {
      steps: [
        {
          title: "Step 1: Choose a Business Name",
          desc: "Select a unique name that doesn’t infringe trademarks and meets naming guidelines.",
        },
        {
          title: "Step 2: Obtain Registrations",
          desc: "Get GST registration, Shop & Establishment license, and/or Udyam registration based on your activities.",
        },
        {
          title: "Step 3: Open a Bank Account",
          desc: "Submit identity proof, address proof, and business registration certificates to open a current account.",
        },
      ],
      violations: [],
      consequences: [],
    },

    eligibility: [],

    services: [
      {
        title: "End-to-End Registration Support",
        desc: "We help you select a business name, obtain all necessary registrations, and ensure compliance.",
      },
    ],

    faqs: [],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },
  "mauritius-company-registration": {
    overview: {
      heading: "Why Choose Mauritius for Company Registration?",
      paragraphs: [
        "Mauritius, a thriving island nation in the Indian Ocean near Africa’s southeastern coast, has emerged as a top destination not just for tourism but for international business ventures. With its pro-business policies, strategic location, and stable political environment, Mauritius offers an ideal setting for entrepreneurs looking to expand globally.",
        "At Ctax, we simplify the process of company registration in Mauritius, helping you take advantage of its investor-friendly ecosystem, competitive tax rates, and well-developed financial infrastructure. The country’s transparent legal system and access to multiple international trade agreements make it a preferred gateway for businesses targeting African and Asian markets.",
        "Registering a company in Mauritius enhances your global credibility while offering flexibility, tax efficiency, and ease of doing business. Let Ctax handle the complexities so you can focus on growing your business with confidence.",
      ],
    },

    features: [
      {
        icon: "💰",
        title: "Favourable Tax Environment",
        description:
          "Low corporate tax rates, no capital gains tax, and extensive DTAA network make Mauritius a tax‑efficient hub.",
      },
      {
        icon: "🏛️",
        title: "Stable Political & Economic Climate",
        description:
          "Consistent governance and strong regulation guarantee a secure platform for international operations.",
      },
      {
        icon: "⚡",
        title: "Simple & Fast Incorporation",
        description:
          "Clear legal requirements and minimal bureaucracy allow quick company setup without delays.",
      },
      {
        icon: "🌍",
        title: "Gateway to International Markets",
        description:
          "Strategically located between Africa, Asia, and Europe, Mauritius offers access to multiple trade agreements.",
      },
      {
        icon: "🏦",
        title: "Robust Financial Services Sector",
        description:
          "A well‑regulated financial industry provides efficient banking, investment, and advisory solutions.",
      },
      {
        icon: "🏡",
        title: "Business‑Friendly Residency Options",
        description:
          "Company formation opens residency routes for foreign investors, easing relocation and operations.",
      },
      {
        icon: "🔄",
        title: "Flexible Business Structures",
        description:
          "Choose from GBCs, Authorised Companies, Domestic Companies, LLPs, and more to suit your goals.",
      },
      {
        icon: "⚖️",
        title: "Reliable Legal & Regulatory Framework",
        description:
          "A hybrid civil/common law system ensures investor protection and transparent regulation.",
      },
    ],

    benefits: [
      {
        title: "Favourable Tax Environment",
        description:
          "Low corporate tax, no capital gains tax, and DTAA coverage make Mauritius highly tax‑efficient.",
      },
      {
        title: "Stable Governance",
        description:
          "Consistent political and economic stability gives investors confidence in long‑term planning.",
      },
      {
        title: "Fast & Easy Incorporation",
        description:
          "Transparent requirements and minimal red tape enable quick company setup.",
      },
      {
        title: "Strategic Global Access",
        description:
          "Acts as a bridge between Africa, Asia, and Europe, enhancing market reach.",
      },
      {
        title: "Advanced Financial Sector",
        description:
          "A regulated banking and financial ecosystem supports global expansion.",
      },
      {
        title: "Residency & Relocation Benefits",
        description:
          "Company formation can unlock residency options for foreign entrepreneurs.",
      },
      {
        title: "Tailored Business Structures",
        description:
          "Multiple entity types (GBC, Authorized Company, LLP, etc.) to match diverse needs.",
      },
      {
        title: "Strong Legal Protection",
        description:
          "Transparent laws and investor safeguards foster trust and security.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Minimum One Director & Shareholder",
          desc: "Must appoint at least one director and one shareholder. The same individual can fill both roles.",
        },
        {
          title: "Local Resident Director",
          desc: "At least one director must be a Mauritius resident to meet statutory compliance.",
        },
        {
          title: "Registered Office Address",
          desc: "A valid physical address in Mauritius is mandatory for official correspondence.",
        },
        {
          title: "Unique Company Name Approval",
          desc: "Proposed name must be distinct and approved by the Registrar of Companies.",
        },
        {
          title: "Company Constitution (Optional)",
          desc: "Submitting a Memorandum & Articles of Association can offer greater internal flexibility.",
        },
        {
          title: "Appointment of Company Secretary",
          desc: "Certain entities (e.g., GBCs) must appoint a qualified secretary.",
        },
        {
          title: "Corporate Bank Account",
          desc: "Opening a bank account in Mauritius is required for all financial transactions.",
        },
        {
          title: "TAN Registration",
          desc: "Register with the Mauritius Revenue Authority to obtain a Tax Account Number.",
        },
        {
          title: "FSC Licensing (If Applicable)",
          desc: "Businesses in regulated sectors must secure licenses from the Financial Services Commission.",
        },
        {
          title: "Annual Compliance & Record Keeping",
          desc: "Maintain accounting records and file annual returns with the Registrar to remain in good standing.",
        },
      ],
      violations: [],
      consequences: [],
    },

    eligibility: [
      {
        heading: "Eligibility Checklist",
        items: [
          "At least one director and one shareholder (can be the same person).",
          "Minimum one director must be resident in Mauritius.",
          "Valid registered office address in Mauritius.",
          "Unique business name, pre‑approved by the Registrar.",
          "Appointment of company secretary if required (e.g., GBCs).",
          "Corporate bank account opened in Mauritius.",
          "TAN registration with the Mauritius Revenue Authority.",
          "FSC license for regulated activities, if applicable.",
          "Ongoing maintenance of accounting records and annual filings.",
        ],
      },
    ],

    services: [
      {
        title: "Business Structure Consultation",
        desc: "Expert advice to select the right entity (GBC, Authorised Company, Domestic Company, LLP, etc.).",
      },
      {
        title: "Name Reservation & Approval",
        desc: "Assist in choosing and reserving a unique company name per Registrar guidelines.",
      },
      {
        title: "Document Preparation & Filing",
        desc: "Full support in preparing and submitting incorporation documents to the Registrar.",
      },
      {
        title: "Corporate Bank Account Setup",
        desc: "Help open a corporate bank account with top Mauritius banks for seamless financial operations.",
      },
      {
        title: "Tax Registration & Compliance",
        desc: "Guidance on TAN registration, VAT (if applicable), and MRA compliance.",
      },
      {
        title: "Annual Filing & Regulatory Compliance",
        desc: "Ongoing support for annual returns, license renewals, and financial reporting.",
      },
      {
        title: "Trademark Registration",
        desc: "Assistance with trademark search and registration to protect your brand.",
      },
      {
        title: "Yacht & Ship Registration",
        desc: "Specialized services for registering marine vessels under the Mauritius flag.",
      },
      {
        title: "Company Secretarial Services",
        desc: "Maintain statutory records, file resolutions, and manage board meeting documentation.",
      },
      {
        title: "Registered Office & Virtual Office",
        desc: "Provision of a registered office address, virtual office solutions, and domain registration.",
      },
    ],

    faqs: [
      {
        question:
          "What are the steps involved in company registration in Mauritius?",
        answer:
          "Choose a business structure, reserve a company name, prepare and submit incorporation documents, open a corporate bank account, register for TAN (and VAT if required), and maintain post‑incorporation compliance.",
      },
      {
        question:
          "What types of structures are available for business setup in Mauritius?",
        answer:
          "Global Business Company (GBC), Authorised Company, Domestic Company, Limited Liability Partnership (LLP), Branch of a Foreign Company, Sole Proprietorship, and Freeport Company.",
      },
      {
        question: "Can foreign investors have 100% ownership?",
        answer:
          "Yes, foreign investors may hold 100% equity in most company types, making Mauritius highly attractive for international ventures.",
      },
      {
        question:
          "What tax benefits does company formation in Mauritius offer?",
        answer:
          "Low corporate tax rates, no capital gains tax, and extensive DTAA network. GBCs enjoy additional tax privileges.",
      },
      {
        question: "How long does the online registration process take?",
        answer:
          "Typically 3–7 working days, depending on document readiness and regulatory approvals.",
      },
      {
        question: "What documents are needed for company incorporation?",
        answer:
          "Certified passport copies, proof of address, business plan, company constitution, consent forms, registered office proof, bank reference letter, and due diligence for corporate shareholders.",
      },
      {
        question: "Are there minimum capital requirements?",
        answer:
          "Most company types have no minimum capital requirement. Specific industries or licenses may impose thresholds.",
      },
      {
        question: "Which cities are best for business setup in Mauritius?",
        answer:
          "Port Louis (capital), Ebene (Cybercity), Curepipe, Quatre Bornes, and Vacoas‑Phoenix—each offers strong infrastructure and business ecosystems.",
      },
      {
        question: "What post‑registration compliance is required?",
        answer:
          "Annual return filing, financial statement submission, TAN/VAT filings, license renewals, and FSC reporting (for regulated entities).",
      },
      {
        question: "How does the legal framework support investors?",
        answer:
          "A hybrid civil/common law system, investor protection policies, and a well‑regulated corporate/financial sector ensure transparency and security.",
      },
      {
        question:
          "What role does the Financial Services Commission (FSC) play?",
        answer:
          "The FSC regulates non‑bank financial services, grants licenses to GBCs, and enforces anti‑money laundering and regulatory compliance.",
      },
      {
        question: "Are there restrictions on any business activities?",
        answer:
          "Yes—certain sectors like banking, insurance, and financial services require prior FSC approval, and some industries may restrict foreign ownership without government clearance.",
      },
      {
        question: "What support services are available?",
        answer:
          "Business advisory, corporate service providers, banking partners, compliance consultants, virtual offices, and government investment incentives via Ctax.",
      },
    ],

    types: {
      cards: [],

      roleBenefits: [
        "Strategic Location for Global Trade",
        "Low and Transparent Taxation Policies",
        "Fast Company Formation Process",
        "Reputation as a Trusted Financial Hub",
        "Access to Double Taxation Avoidance Agreements",
        "Investor-Friendly Legal System",
      ],

      differenceTable: {
        columns: [],
        rows: [],
      },

      timelineFees: [],
    },
  },
  "dubai-company-registration": {
    overview: {
      heading: "Company Registration in Dubai – A Complete Guide",
      paragraphs: [
        "Setting up a company in Dubai offers global entrepreneurs attractive benefits, including access to over 30 free trade zones, 100% foreign ownership, and favorable tax treatment through double taxation treaties with more than 140 countries. Whether you’re looking to establish a Limited Liability Company (LLC) or a Free Zone Company, our expert team simplifies the entire process of company registration in Dubai from India.",
        "Our specialists handle every step—from drafting the Memorandum of Association (MoA) and Articles of Association (AoA) to securing your Ejari Certificate, residence visa, Emirates ID, trade license, and Import Export Code (IEC). We also offer end-to-end accounting and bookkeeping services to ensure smooth business operations. Leave the complexities of Dubai business setup to us—our consultants ensure a fast, hassle-free registration experience so you can focus on growing your business.",
      ],
    },

    features: [],

    benefits: [
      {
        title: "Quick & Seamless Registration",
        description:
          "Complete company formation and obtain essential licenses in as little as 15 minutes via the advanced Basher Portal.",
      },
      {
        title: "Strategic Global Location",
        description:
          "Situated at the crossroads of Asia, Europe, and Africa, Dubai serves as a premier trading hub with excellent connectivity.",
      },
      {
        title: "Attractive Corporate Tax Benefits",
        description:
          "Zero corporate tax on income up to AED 375,000 and exemptions on dividends, capital gains, interest, and royalties.",
      },
      {
        title: "Low VAT Rates",
        description:
          "Enjoy 0% VAT on exports outside the GCC, international logistics, healthcare, and education; free zones offer tax-free movement of goods.",
      },
      {
        title: "100% Profit Repatriation",
        description:
          "Fully repatriate profits and capital without branch profits tax or withholding tax—ideal for foreign companies.",
      },
      {
        title: "Duty-Free Imports",
        description:
          "Benefit from low or zero tariffs under free trade agreements with India, Singapore, Turkey, and EFTA members.",
      },
      {
        title: "Full Foreign Ownership",
        description:
          "Own 100% of your business across mainland, free zone, and offshore structures without needing a local sponsor.",
      },
      {
        title: "Advanced Infrastructure & Facilities",
        description:
          "Access cutting-edge ports, logistics hubs, smart cities, and digital connectivity for efficient operations.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Identity Proofs",
          desc: "Valid ID proofs (passport, Emirates ID) for owners, directors, and shareholders for verification.",
        },
        {
          title: "Passport Copies",
          desc: "Clear copies of passports for all directors and shareholders to be submitted during the application.",
        },
        {
          title: "Memorandum of Association (MoA)",
          desc: "Notarized MoA outlining company scope, structure, and operational framework.",
        },
        {
          title: "Articles of Association (AoA)",
          desc: "Notarized AoA defining internal rules and responsibilities of directors and shareholders.",
        },
        {
          title: "Dubai Residence Visa",
          desc: "Valid residence permit or visa for the company owner and key personnel (if operating from a physical office).",
        },
        {
          title: "Emirates ID",
          desc: "Copy of Emirates ID (if applicable) for identification and residency verification.",
        },
        {
          title: "Business Address Proof",
          desc: "Proof of Dubai-based office address or virtual address for official correspondence.",
        },
        {
          title: "Business Name Reservation Certificate",
          desc: "Certificate confirming reservation of the approved company name issued by the relevant authority.",
        },
        {
          title: "Certificate of Good Standing",
          desc: "Also known as Certificate of Good Conduct, verifies that the business or individual has no outstanding liabilities.",
        },
        {
          title: "Proof of Share Capital",
          desc: "Documentation showing share capital or minimum capital requirements based on business structure.",
        },
      ],
      violations: [],
      consequences: [],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria for Company Registration in Dubai",
        items: [
          "Unique Business Name that complies with UAE naming guidelines.",
          "Valid passport and, if applicable, a UAE residence visa.",
          "Emirates ID for identity verification (for residents).",
          "Predetermined Business Capital—proof of initial investment.",
          "Local or Virtual Business Address in Dubai for official correspondence.",
          "Trade License from the Department of Economy & Tourism (DET) based on activity.",
          "Import-Export Code (IEC) from Dubai Customs for international trade.",
          "VAT Registration (if annual turnover exceeds AED 375,000).",
          "Local Sponsor or Service Agent (for mainland setups, if required).",
          "Corporate Bank Account opened in the UAE.",
          "Notarized Company MoA & AoA to define structure and responsibilities.",
          "Appointment of Professional Advisors—company secretary, chartered accountant, and auditor.",
        ],
      },
    ],

    services: [
      {
        title: "Free Pre‑Registration Consultation",
        desc: "Complimentary guidance on capital requirements, legal prerequisites, tax liabilities, and annual compliance.",
      },
      {
        title: "Business Name Search & Reservation",
        desc: "Thorough name availability check and reservation process to ensure compliance with regulations.",
      },
      {
        title: "Company Incorporation & Document Filing",
        desc: "End‑to‑end management of business registration, including application preparation and submission.",
      },
      {
        title: "Import‑Export Code (IEC) Assistance",
        desc: "Fast‑track registration of Import‑Export Code for seamless cross‑border trade operations.",
      },
      {
        title: "Ejari Certificate Procurement",
        desc: "Obtain your Ejari certificate for tenancy contracts to legally lease commercial premises.",
      },
      {
        title: "Trade License Acquisition",
        desc: "Secure commercial, professional, or industrial trade licenses based on your business activity.",
      },
      {
        title: "Business Domain Registration",
        desc: "Help secure and register a professional domain name tailored to your Dubai‑based business.",
      },
      {
        title: "Virtual CFO Services",
        desc: "Access expert financial leadership, including accounting, tax planning, compliance reporting, and strategic management.",
      },
      {
        title: "Trademark Registration in Dubai",
        desc: "Protect your brand identity with trademark search, application, and registration services in the UAE.",
      },
      {
        title: "Registered Agent Representation",
        desc: "Free registered agent services for the first 12 months to ensure smooth incorporation and regulatory representation.",
      },
      {
        title: "Corporate Tax Registration (UAE CT Number)",
        desc: "Guidance through the UAE Corporate Tax registration process, ensuring all statutory filings and payments.",
      },
      {
        title: "VAT Registration Support",
        desc: "Assist with VAT registration and compliance for businesses exceeding the VAT threshold.",
      },
    ],

    faqs: [
      {
        question: "How do I register a company in Dubai?",
        answer:
          "Choose a business activity, select a jurisdiction (Mainland, Free Zone, or Offshore), reserve a trade name, prepare necessary documents, and submit your application to the relevant authority. A formation expert like Dostartup™ can simplify this process.",
      },
      {
        question: "How long does it take to set up a company in Dubai?",
        answer:
          "Typically 3–10 business days, depending on your chosen jurisdiction, business activity, and document accuracy.",
      },
      {
        question: "Who is eligible to register a company in Dubai?",
        answer:
          "Both UAE residents and foreign nationals can establish a company. Foreigners may retain 100% ownership in most free zones and certain mainland activities under current laws.",
      },
      {
        question: "What documents are required to form a company in Dubai?",
        answer:
          "A valid passport copy, recent photographs, proof of residential address, MoA/AoA, and completed application form. Additional documents vary by structure and jurisdiction.",
      },
      {
        question:
          "Is a registered agent necessary for foreign business owners?",
        answer:
          "Yes, foreign entrepreneurs often appoint a registered agent or local service provider, especially in free zones or offshore jurisdictions.",
      },
      {
        question: "Do I need a lawyer to register a business in Dubai?",
        answer:
          "Not mandatory, but hiring legal counsel is highly recommended to ensure compliance and avoid delays.",
      },
      {
        question: "Are licenses and permits required to start operations?",
        answer:
          "Yes, after incorporation, you must obtain relevant trade licenses and any additional permits specific to your industry.",
      },
      {
        question: "How can a foreigner obtain an Emirates ID?",
        answer:
          "Foreign nationals apply after receiving their UAE residence visa, involving a medical exam, biometric data collection, and visa documents.",
      },
      {
        question: "Is obtaining an Ejari certificate mandatory?",
        answer:
          "Yes, if operating from a physical office, you must secure an Ejari certificate to legalize your lease with the Dubai Land Department.",
      },
      {
        question: "What types of trade licenses are available?",
        answer:
          "Commercial, Professional, and Industrial licenses, each tailored to specific business activities.",
      },
      {
        question: "How many free zones are there in Dubai?",
        answer:
          "Over 30 specialized free zones catering to sectors like technology, media, finance, logistics, and healthcare.",
      },
      {
        question: "What business structure options exist in Dubai?",
        answer:
          "LLC, Sole Proprietorship, Free Zone Establishment (FZE), Free Zone Company (FZC), Branch Office, Limited Liability Partnership (LLP), Private & Public Joint Stock Companies, Civil Companies.",
      },
      {
        question: "Which structure is most profitable?",
        answer:
          "Depends on your business model. Free Zone companies are popular for full ownership and tax benefits; LLCs offer broader mainland market access.",
      },
      {
        question: "Can I start a business in Dubai virtually?",
        answer:
          "Yes—Dubai offers virtual company formation options for digital entrepreneurs and freelancers.",
      },
      {
        question: "Do I need a Power of Attorney (POA)?",
        answer:
          "Often required. A POA lets your agent act on your behalf during incorporation if you’re not present in the UAE.",
      },
      {
        question: "When should I renew my trade license?",
        answer:
          "Annually before expiration to avoid penalties or suspension. Dostartup™ sends renewal reminders to keep you compliant.",
      },
    ],

    types: {
      cards: [],

      roleBenefits: [],

      differenceTable: {
        columns: [],
        rows: [],
      },

      timelineFees: [
        "Choose the right business structure (LLC, Sole Proprietorship, Free Zone, etc.).",
        "Reserve a unique trade name with DET or the relevant Free Zone authority.",
        "Decide on business location—Mainland or Free Zone, and obtain Ejari certificate if needed.",
        "Apply for the appropriate trade license (Commercial, Professional, or Industrial).",
        "Prepare and submit required documentation (passport copies, MoA/AoA, proof of address, etc.).",
        "Receive your business incorporation certificate upon approval.",
        "Obtain industry‑specific permits or operational licenses (e.g., tourism, manufacturing).",
        "Apply for UAE residence visas for owners and key personnel (if operating a physical office).",
        "Acquire Emirates ID for identity verification and official transactions.",
        "Open a corporate bank account in the UAE to manage financial operations.",
        "Register for VAT with the Federal Tax Authority if annual turnover exceeds AED 375,000.",
        "Set up accounting and compliance systems for proper financial management and reporting.",
      ],
    },
  },
  "sri-lanka-company-registration": {
    overview: {
      heading:
        "Why Global Entrepreneurs Choose Company Registration in Sri Lanka",
      paragraphs: [
        "Sri Lanka has emerged as a preferred destination for global entrepreneurs seeking to register a company in a strategically located and business‑friendly environment. Positioned in the heart of the Indian Ocean, the island offers seamless access to key regional and international markets, making it an ideal hub for international trade and investment.",
        "Beyond its natural beauty and appeal to tourists, Sri Lanka provides a thriving economic landscape supported by investor‑friendly policies, attractive tax incentives, sector‑specific exemptions, and investment holidays. These benefits make it easier for foreign investors to establish a cost‑effective and profitable presence.",
        "Entrepreneurs also gain access to a well‑educated and skilled workforce, a growing consumer base, and several free trade agreements that streamline cross‑border business operations. With a straightforward incorporation process and the expert guidance of Ctax professionals, setting up a business in Sri Lanka becomes a smooth and rewarding journey.",
      ],
    },

    features: [],

    benefits: [
      {
        title: "Strategic Location",
        description:
          "Situated at the crossroads of major shipping routes in Asia, Sri Lanka provides direct access to regional and global markets, making it a key hub for international trade and logistics.",
      },
      {
        title: "Attractive Tax Incentives",
        description:
          "Sri Lanka offers competitive tax benefits including tax holidays, investment allowances, and sector‑specific exemptions, encouraging foreign investment and sustainable business growth.",
      },
      {
        title: "Skilled and Educated Workforce",
        description:
          "With a highly literate, English‑speaking talent pool, businesses in Sri Lanka can easily recruit skilled professionals across various industries, ensuring efficient operations and innovation.",
      },
      {
        title: "Business‑Friendly Environment",
        description:
          "Sri Lanka’s streamlined incorporation process, supported by pro‑investor regulations, makes starting a company easy and efficient, with minimal bureaucratic hurdles.",
      },
      {
        title: "Expanding Consumer Market",
        description:
          "The country’s growing middle class and evolving economic landscape offer entrepreneurs the opportunity to tap into an expanding domestic market across multiple sectors.",
      },
      {
        title: "Investment Protection Framework",
        description:
          "Foreign investors benefit from strong legal safeguards under Sri Lankan law, offering a secure and stable environment for long‑term business ventures.",
      },
      {
        title: "Access to Global Markets through Trade Agreements",
        description:
          "Sri Lanka’s network of free trade agreements with countries like India, China, and members of SAARC allows businesses to export goods with reduced tariffs and gain access to major international markets.",
      },
      {
        title: "Cost‑Effective Business Operations",
        description:
          "From affordable labor to low infrastructure and overhead costs, Sri Lanka provides an economical platform for establishing and scaling business operations.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Minimum of One Director",
          desc: "Every company must have at least one director to be legally registered.",
        },
        {
          title: "Name Reservation",
          desc: "Secure a unique business name approved by the Registrar of Companies (ROC).",
        },
        {
          title: "Registered Office Address",
          desc: "A valid physical address within Sri Lanka is required as the official business location.",
        },
        {
          title: "At Least One Shareholder",
          desc: "Your company must have a minimum of one shareholder, who can be local or foreign.",
        },
        {
          title: "No Minimum Capital Requirement",
          desc: "Private limited companies in Sri Lanka do not require a minimum capital investment.",
        },
        {
          title: "Core Legal Documents",
          desc: "Submit essential documents including the Memorandum and Articles of Association.",
        },
        {
          title: "Taxpayer Identification Number (TIN)",
          desc: "Obtain a TIN from the Inland Revenue Department for tax compliance.",
        },
        {
          title: "Director’s Consent Form",
          desc: "All directors must submit a signed consent form confirming their willingness to serve.",
        },
        {
          title: "Company Secretary Appointment",
          desc: "Appoint a qualified company secretary, preferably a Sri Lankan resident.",
        },
        {
          title: "Regulatory Compliance",
          desc: "Ensure full compliance with the Companies Act of Sri Lanka and relevant regulatory authorities.",
        },
      ],
      violations: [],
      consequences: [],
    },

    eligibility: [],

    services: [
      {
        title: "Business Structure Consultation",
        desc: "Expert guidance to help you select the most suitable legal entity—Private Limited, Public Limited, Overseas Branch, Offshore, Sole Proprietorship, Partnership, or Joint Venture.",
      },
      {
        title: "Company Name Reservation Assistance",
        desc: "Fast‑tracked support for securing ROC approval of a unique and compliant business name.",
      },
      {
        title: "Document Drafting & Application Preparation",
        desc: "Assistance in drafting the Memorandum & Articles of Association, consent forms, and preparing complete registration documents.",
      },
      {
        title: "Registrar of Companies (ROC) Filing Support",
        desc: "Timely and accurate submission of incorporation forms and documents with the ROC.",
      },
      {
        title: "Complete Company Setup Solutions",
        desc: "End‑to‑end incorporation services for local and foreign investors, ensuring smooth registration.",
      },
      {
        title: "Tax, TIN & VAT Registration Services",
        desc: "Guidance on obtaining a Taxpayer Identification Number and VAT registration, plus other tax formalities.",
      },
      {
        title: "Corporate Bank Account Opening",
        desc: "Support in opening a business bank account with trusted local banking partners.",
      },
      {
        title: "Post‑Incorporation Compliance Support",
        desc: "Ongoing assistance with annual returns, financial statements, and regulatory filings to keep your company in good standing.",
      },
    ],

    faqs: [
      {
        question: "How can I start a business in Sri Lanka?",
        answer:
          "Choose an entity type, reserve a company name with the ROC, prepare MoA & AoA, submit incorporation documents, obtain the Certificate of Incorporation, register for TIN (and VAT if required), and open a bank account.",
      },
      {
        question: "What are the steps for company registration in Sri Lanka?",
        answer:
          "1. Choose a business structure  2. Reserve a unique name  3. Prepare MoA & AoA and supporting documents  4. File application with ROC  5. Obtain Certificate of Incorporation  6. Register for tax and open a bank account.",
      },
      {
        question: "What is the cost of business registration in Sri Lanka?",
        answer:
          "Costs vary based on entity type, number of directors, and professional services. It typically includes government fees, documentation costs, and consultant fees.",
      },
      {
        question: "Can foreigners register a company in Sri Lanka?",
        answer:
          "Yes—foreign investors can fully own a Private Limited Company subject to compliance with local regulations and sector‑specific guidelines.",
      },
      {
        question: "Is online company registration in Sri Lanka possible?",
        answer:
          "Yes—registration can be completed online via the ROC portal. Consultants like Dostartup™ can streamline and expedite the process.",
      },
      {
        question: "How long does company registration in Sri Lanka take?",
        answer:
          "Typically 5–10 working days, depending on document accuracy and name approval timelines.",
      },
      {
        question: "What types of companies can be registered in Sri Lanka?",
        answer:
          "Private Limited Company, Public Limited Company, Overseas (branch) office, Offshore Company, Sole Proprietorship, Partnership Firm, and Joint Venture.",
      },
      {
        question:
          "What documents do I need for business registration in Sri Lanka?",
        answer:
          "Approved name reservation certificate, MoA & AoA, director/shareholder ID and address proof, director consent forms, registered office proof, TIN application, and passport copies for foreign directors.",
      },
      {
        question: "How do I register a company name in Sri Lanka?",
        answer:
          "Submit an application through the ROC portal. The name must be unique, comply with naming guidelines, and receive ROC approval before incorporation.",
      },
      {
        question:
          "Do I need a local director to register a company in Sri Lanka?",
        answer:
          "No—a local director is not mandatory. However, at least one director and one shareholder (who can be foreign) are required.",
      },
      {
        question:
          "What is the role of business registration agents in Sri Lanka?",
        answer:
          "Agents assist with documentation, name approval, ROC filings, compliance support, and ongoing advisory services to simplify registration.",
      },
      {
        question:
          "What are the tax compliance requirements after registration?",
        answer:
          "Obtain a TIN, register for VAT (if applicable), maintain accounting records, file annual returns, and pay corporate tax per Inland Revenue Act deadlines.",
      },
      {
        question:
          "Which are the top 5 cities for corporate registration in Sri Lanka?",
        answer:
          "Colombo, Kandy, Galle, Negombo, and Jaffna—each offers strong infrastructure and business ecosystems.",
      },
      {
        question: "Which are the top 10 sectors for investment in Sri Lanka?",
        answer:
          "Tourism & Hospitality, Apparel & Textiles, Agriculture & Food Processing, IT & BPM Services, Renewable Energy, Real Estate & Construction, Logistics & Transport, Education Services, Healthcare & Pharmaceuticals, and Export‑oriented Manufacturing.",
      },
      {
        question: "Are there any popular tourist destinations in Sri Lanka?",
        answer:
          "Yes: Sigiriya Rock, Ella, Yala National Park, Galle Fort, Temple of the Tooth (Kandy), Mirissa, Nuwara Eliya, Anuradhapura, Arugam Bay, and Dambulla Cave Temple.",
      },
    ],

    types: {
      cards: [],

      roleBenefits: [
        "Strategic Location for Trade",
        "Attractive Tax Incentives & Exemptions",
        "Skilled English‑Speaking Workforce",
        "Streamlined Incorporation Process",
        "Expanding Domestic Consumer Market",
        "Strong Investment Protection",
        "Access via Free Trade Agreements",
        "Low Operational Costs",
      ],

      differenceTable: {
        columns: [],
        rows: [],
      },

      timelineFees: [],
    },
  },

  "usa-company-registration": {
    overview: {
      heading: "Why Choose DoStartup for Company Registration in the USA",
      paragraphs: [
        "Registering a business in the United States opens doors to the world's largest consumer economy, but navigating legal and procedural complexities can be overwhelming—especially for foreign entrepreneurs. DoStartup offers end-to-end, affordable, and hassle-free incorporation services tailored to global founders, startups, and small businesses.",
        "From selecting the right entity to securing your EIN and U.S. business address, our tech‑enabled process and state‑specific legal expertise ensure smooth, fully compliant registration—no matter where you’re located.",
      ],
    },

    features: [
      {
        icon: "🚀",
        title: "End‑to‑End Service",
        description:
          "We handle everything: entity selection, name reservation, EIN, registered agent, and bank account setup.",
      },
      {
        icon: "💻",
        title: "100% Online & Paperless",
        description:
          "Complete the entire process remotely without ever visiting the U.S.",
      },
      {
        icon: "🗺️",
        title: "State‑Specific Expertise",
        description:
          "Personalized advice on choosing the best state and entity type based on your goals.",
      },
    ],

    benefits: [
      {
        title: "Start‑to‑Finish Support",
        description:
          "From initial consultation to post‑incorporation compliance, we’re with you every step of the way.",
      },
      {
        title: "Quick Turnaround",
        description:
          "Get your company registered in as little as 2–5 business days.",
      },
      {
        title: "Affordable & Transparent",
        description:
          "Transparent pricing with no hidden fees or recurring charges.",
      },
      {
        title: "Registered Agent & Address",
        description:
          "One year of registered agent service plus a free virtual U.S. address included.",
      },
      {
        title: "EIN & Bank Account Assistance",
        description:
          "We help you obtain your EIN and open a U.S. business bank account remotely.",
      },
      {
        title: "Global Clientele",
        description:
          "Trusted by entrepreneurs from over 30 countries to launch their U.S. ventures.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Free Expert Consultation",
          desc: "Discuss your goals and choose the optimal entity and state.",
        },
        {
          title: "Name Reservation & Filing",
          desc: "We check availability and file your formation documents with the Secretary of State.",
        },
        {
          title: "EIN Application",
          desc: "We apply for your Employer Identification Number with the IRS.",
        },
        {
          title: "Registered Agent & Address Setup",
          desc: "Get one year of registered agent service and a virtual U.S. address with mail forwarding.",
        },
        {
          title: "Bank Account Support",
          desc: "Open a U.S. business bank account remotely through our partner network.",
        },
        {
          title: "Post‑Incorporation Compliance",
          desc: "We provide ongoing support for annual filings, licenses, and tax registrations.",
        },
      ],
      violations: [
        "Valid passport or government‑issued ID",
        "Unique and available company name",
        "U.S. business address (we provide)",
        "Registered agent information (included)",
        "Operating agreement or corporate bylaws",
        "EIN application authorization",
      ],
      consequences: [
        "Delays or rejections due to missing or incorrect documents",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria",
        items: [
          "A unique, valid company name",
          "At least one member (LLC) or director/shareholder (Corp)",
          "Valid passport or national ID",
          "A U.S. address and registered agent (we provide)",
          "ITIN for non‑U.S. residents (we assist with this)",
        ],
      },
      {
        heading: "Who Can Use DoStartup?",
        items: [
          "Individual entrepreneurs and freelancers",
          "Global startups and small businesses",
          "Non‑residents and residents alike",
          "International businesses expanding to the U.S.",
        ],
      },
    ],

    services: [
      {
        title: "LLC (Limited Liability Company)",
        desc: "Ideal for small to medium businesses seeking flexibility and tax efficiency.",
      },
      {
        title: "C‑Corporation",
        desc: "Preferred by startups planning to raise venture capital or go public.",
      },
      {
        title: "S‑Corporation",
        desc: "Best for U.S. residents wanting pass‑through taxation.",
      },
      {
        title: "LLP/LP",
        desc: "Suited for professional service firms and investment ventures.",
      },
      {
        title: "Sole Proprietorship",
        desc: "For freelancers or solopreneurs entering the U.S. market simply.",
      },
    ],

    faqs: [
      {
        question: "Can a non‑resident register a U.S. company?",
        answer:
          "Yes—there is no residency requirement. DoStartup enables fully remote formation for foreign nationals.",
      },
      {
        question: "LLC or C‑Corp— which is better?",
        answer:
          "LLCs offer flexibility and simpler taxes; C‑Corps are preferred for venture funding. We guide you based on your goals.",
      },
      {
        question: "Which state should I choose?",
        answer:
          "Delaware for C‑Corps, Wyoming for LLCs, Nevada for privacy. We advise on the best fit for your needs.",
      },
      {
        question: "Do I need a U.S. address or phone?",
        answer:
          "No—you must have a registered agent in the state, which we provide, and we supply a virtual U.S. address.",
      },
      {
        question: "What is an EIN?",
        answer:
          "An Employer Identification Number issued by the IRS, required for banking, hiring, and tax filings.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Typically 2–5 business days for incorporation; EIN may take a few additional days.",
      },
      {
        question: "What are annual compliance requirements?",
        answer:
          "Most states require annual reports and franchise tax filings; we offer ongoing compliance packages.",
      },
      {
        question: "Will I pay U.S. taxes?",
        answer:
          "Yes—tax obligations depend on your entity type and income. We connect you with U.S. tax professionals.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "DoStartup Service", "DIY Formation"],
        rows: [
          [
            "Process",
            "Fully managed and paperless",
            "Self‑file through various state portals",
          ],
          ["Speed", "2–5 business days", "Varies by state; often longer"],
          [
            "Support",
            "Dedicated experts & ongoing compliance",
            "No professional support included",
          ],
          [
            "Pricing",
            "Transparent all‑in‑one packages",
            "Variable state and filing fees",
          ],
        ],
      },
      timelineFees: [],
    },
  },

  "france-company-registration": {
    overview: {
      heading: "Company Registration in France – A Comprehensive Guide",
      paragraphs: [
        "Establishing a company in France provides access to Europe’s third‑largest economy, with strong markets in finance, insurance, real estate, e‑commerce, and professional services.",
        "France offers 100% foreign ownership, tax benefits via double‑taxation treaties with 120+ countries, and a strategic EU location for trade expansion.",
        "DoStartup™ simplifies setting up an LLC in France—drafting MOA/AOA, securing SIRENE/SIRET numbers, handling corporate tax & VAT registrations, obtaining industry licenses, and providing ongoing accounting support.",
      ],
    },

    features: [
      {
        icon: "💰",
        title: "Tax Benefits",
        description:
          "Access to DTAs with 120+ countries, 15% corporate tax for turnovers under €10 M, and VAT reverse‑charge for non‑residents.",
      },
      {
        icon: "🌍",
        title: "EU Market Access",
        description:
          "Gateway to trade in Germany, Belgium, Spain, Italy, Switzerland and beyond.",
      },
      {
        icon: "🏗️",
        title: "Robust Infrastructure",
        description:
          "Advanced logistics, telecom, and tech sectors ideal for e‑commerce, freight, and IT businesses.",
      },
      {
        icon: "👥",
        title: "Tourism & Skilled Workforce",
        description:
          "Over 85 M annual tourists and a pool of highly skilled professionals in finance, IT, and legal.",
      },
    ],

    benefits: [],

    documents: {
      steps: [
        {
          title: "Choose Business Structure",
          desc: "Select from LLC (SARL), SAS, SA, EURL, SNC, etc.",
        },
        {
          title: "Name Reservation",
          desc: "Reserve your unique company name with the Trade Register (RCS).",
        },
        {
          title: "Submit Incorporation Documents",
          desc: "File MOA/AOA, passports, proof of address and pay registration fees at the RCS.",
        },
        {
          title: "Obtain Certificates",
          desc: "Receive the Incorporation Certificate and SIREN/SIRET numbers.",
        },
        {
          title: "Publish Notice",
          desc: "Publish incorporation notice in the Official Journal (BODACC).",
        },
        {
          title: "Tax & Social Registrations",
          desc: "Register for corporate tax, VAT, URSSAF, CPAM and open a French bank account.",
        },
      ],
      violations: [
        "Passport copies of directors/shareholders",
        "MOA & AOA (Company Charter)",
        "Proof of French business address",
        "Visa or Residence Permit (if applicable)",
        "Business Name Reservation Certificate",
        "Industry‑specific licenses & permits",
      ],
      consequences: [
        "Obtain KBIS Extract (proof of registration)",
        "File annual financial returns",
        "Renew trade licenses & permits yearly",
        "Submit UBO declarations",
        "Maintain VAT compliance (turnover > €85,000)",
        "Hold annual shareholder meetings",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria",
        items: [
          "Structured business plan submitted",
          "Unique company name reserved",
          "Minimum capital as per structure",
          "Passport copies of directors/shareholders",
          "Local representative appointed (if foreign)",
          "French corporate bank account opened",
          "Short‑stay Schengen or long‑stay VLS‑TS visa",
        ],
      },
      {
        heading: "Director Requirements",
        items: ["Must be 18+ years old", "Valid passport & digital signature"],
      },
    ],

    services: [
      {
        title: "SARL (LLC)",
        desc: "100% foreign ownership, no minimum capital, 1+ director, limited liability, 15–25% tax rate.",
      },
      {
        title: "SAS (Simplified JSC)",
        desc: "100% foreign ownership, no minimum capital, 1+ director, limited liability, moderate tax rate.",
      },
      {
        title: "SA (Public JSC)",
        desc: "100% foreign ownership, ≥ €37,000 capital, 3+ directors, limited liability, higher tax rate.",
      },
      {
        title: "EURL (Single‑Member LLC)",
        desc: "100% foreign ownership, ≥ €1 capital, 1 director, limited liability, moderate tax rate.",
      },
      {
        title: "SNC (General Partnership)",
        desc: "100% foreign ownership, no minimum capital, 2+ partners, unlimited liability, lower tax rate.",
      },
    ],

    faqs: [
      {
        question: "Can I register a company in France from India?",
        answer:
          "Yes—DoStartup™ provides 100% online registration services for foreign entrepreneurs.",
      },
      {
        question: "What’s the cheapest structure?",
        answer:
          "EURL requires just €1 in capital and offers single‑member liability protection.",
      },
      {
        question: "How long does incorporation take?",
        answer: "Typically 2–4 weeks with DoStartup™’s expedited services.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },

  "singapore-company-registration": {
    overview: {
      heading:
        "Company Registration in Singapore – A Complete Guide for Foreign Entrepreneurs",
      paragraphs: [
        "Setting up a company in Singapore is a smart move for foreign individuals and businesses looking to establish a presence in one of Asia’s most advanced economies. Known for its strong fintech sector, import‑export trade, and electronics manufacturing industry, Singapore offers a transparent regulatory framework and a pro‑business environment.",
        "Whether you’re registering a private limited company or an LLC, Singapore provides the ideal foundation for global growth. At [Your Client’s Brand Name], we simplify the process—drafting MoA & AoA, assisting with EntrePass visas, corporate & GST registration, trade licenses, and virtual CFO support.",
      ],
    },

    features: [
      {
        icon: "💸",
        title: "Attractive Tax Rates",
        description:
          "Corporate tax from 5%–15% for first five years, plus R&D and IP deductions up to 400%.",
      },
      {
        icon: "🌐",
        title: "DTAs & GST",
        description:
          "Double‑taxation treaties with 90+ countries and a low 9% GST (0% on exports).",
      },
      {
        icon: "🏢",
        title: "100% Foreign Ownership",
        description:
          "Full foreign ownership allowed with minimal paid‑up capital requirement (SGD 1).",
      },
      {
        icon: "🚀",
        title: "Fast EntrePass Visa",
        description:
          "EntrePass approval in under 8 weeks, renewable for 2 years—ideal for startup founders.",
      },
      {
        icon: "👩‍💼",
        title: "Skilled Workforce & Infrastructure",
        description:
          "Access to top‑ranked talent and advanced digital banking, fintech, and logistic ecosystems.",
      },
    ],

    benefits: [],

    documents: {
      steps: [
        {
          title: "Choose Business Structure",
          desc: "Select Private Limited (Pte Ltd), LLP, LP or other entities based on your needs.",
        },
        {
          title: "Reserve & Register Name",
          desc: "Search and reserve your company name via ACRA’s BizFile+ portal (valid for 120 days).",
        },
        {
          title: "Submit Incorporation Filing",
          desc: "Provide MoA, AoA, director/shareholder IDs, address proof, and pay registration fees to ACRA.",
        },
        {
          title: "Obtain UEN & Certificate",
          desc: "Receive your Unique Entity Number and Certificate of Incorporation from ACRA.",
        },
        {
          title: "Apply Licenses & Passes",
          desc: "Use GoBusiness to apply for trade licenses, EntrePass/Employment Pass, and industry permits.",
        },
        {
          title: "Open Bank Account & Register Taxes",
          desc: "Open corporate bank account, register for Corporate Tax, GST, CPF and employee health insurance.",
        },
      ],
      violations: [
        "Company Registration Application Form",
        "Passport copies of all directors & shareholders",
        "MoA & AoA",
        "Registered Singapore business address proof",
        "Singpass digital identity for local agent",
        "Visa or pass documents (EntrePass/Employment Pass)",
        "Power of Attorney for foreign applicants",
        "Certified translations for non‑English documents",
      ],
      consequences: [
        "Appoint company secretary within 6 months",
        "Hold AGM within 6 months of FY‑end",
        "File annual returns & financial statements",
        "Submit corporate tax returns to IRAS",
        "Maintain records with ACRA at registered address",
        "Make CPF contributions for local employees",
        "Renew licenses, passes and notify ACRA of changes",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria",
        items: [
          "Approved business name via ACRA",
          "Singpass account for local filings",
          "Minimum paid‑up capital of SGD 1",
          "EntrePass or Employment Pass for foreign directors",
          "Appoint local company secretary and auditor",
          "Registered physical or virtual Singapore address",
          "Engage a local filing agent",
          "Open corporate bank account",
          "GST registration if turnover exceeds SGD 1 M",
        ],
      },
      {
        heading: "Director Requirements",
        items: [
          "At least 18 years old",
          "Valid Singapore pass or residency status",
          "Minimum one Singapore‑resident director",
        ],
      },
    ],

    services: [
      {
        title: "Private Limited Company (Pte Ltd)",
        desc: "Most popular; 100% foreign‑owned, separate legal entity, limited liability.",
      },
      {
        title: "Limited Liability Partnership (LLP)",
        desc: "Flexibility of partnership with limited liability for partners.",
      },
      {
        title: "Limited Partnership (LP)",
        desc: "Combines general partner management with passive limited partner investment.",
      },
      {
        title: "Sole Proprietorship",
        desc: "Simplest form; owner bears unlimited liability.",
      },
      {
        title: "Exempt Private Company (EPC)",
        desc: "Private company with ≤20 shareholders, audit exemptions under conditions.",
      },
      {
        title: "Foreign Subsidiary",
        desc: "Separate legal entity owned by a foreign parent; enjoys local tax benefits.",
      },
      {
        title: "Branch Office",
        desc: "Extension of foreign company; parent company fully liable.",
      },
    ],

    faqs: [
      {
        question: "Why register in Singapore?",
        answer:
          "Pro‑business environment, low taxes, DTAs, advanced fintech, and 100% foreign ownership.",
      },
      {
        question: "How quickly can I incorporate?",
        answer:
          "Usually within 1–3 business days after submitting complete documents to ACRA.",
      },
      {
        question: "What is the minimum capital?",
        answer: "Only SGD 1 paid‑up capital required for most entities.",
      },
      {
        question: "Do I need a local director?",
        answer:
          "Yes—at least one director must be a Singapore citizen, PR, or valid pass holder.",
      },
      {
        question: "What visas are required?",
        answer:
          "EntrePass for innovative startups; Employment Pass for professionals, both handled for you.",
      },
      {
        question: "When must I register for GST?",
        answer:
          "If annual turnover exceeds SGD 1 million, or voluntarily at any time.",
      },
      {
        question: "Do I need a company secretary?",
        answer:
          "Yes—must appoint a qualified secretary within six months of incorporation.",
      },
      {
        question: "What are ongoing compliance needs?",
        answer:
          "Annual returns, AGM, audits (if not exempt), tax filings, CPF contributions, and pass renewals.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },

  "hong-kong-company-registration": {
    overview: {
      heading:
        "Company Registration in Hong Kong – A Gateway to Global Business",
      paragraphs: [
        "Hong Kong stands as a premier business hub with a free port, minimal customs regulations, and 0% VAT on imports and exports, creating a highly attractive trade environment.",
        "With just US$1 minimum capital you can register a Private Limited Company and benefit from a competitive corporate tax rate of 8.25% on annual profits below US$258,056.",
        "Backed by FTAs with 21 countries and IPAs with 24 nations, Hong Kong ensures smooth cross‑border trade and robust investment protection for global entrepreneurs.",
      ],
    },

    features: [
      {
        icon: "🚢",
        title: "Free Port & Minimal Customs",
        description:
          "0% VAT on imports/exports and streamlined trade procedures for maximum efficiency.",
      },
      {
        icon: "💵",
        title: "Low Minimum Capital",
        description:
          "Incorporate with only US$1 and enjoy 8.25% tax on the first US$258,056 of profits.",
      },
      {
        icon: "🤝",
        title: "Strong Trade Agreements",
        description:
          "FTAs with 21 countries and IPAs with 24 nations for duty‑free trade and investment protection.",
      },
      {
        icon: "🌐",
        title: "Gateway to Mainland China",
        description:
          "CEPA grants preferential access and duty‑free trade with China’s vast market.",
      },
    ],

    benefits: [
      {
        title: "Attractive Tax Benefits",
        description:
          "No VAT, no capital gains tax, and no withholding tax on foreign-sourced dividends, interest, or royalties.",
      },
      {
        title: "Low Corporate Income Tax",
        description:
          "Tiered rate of 8.25% on the first US$258,056 of profits—much lower than many major economies.",
      },
      {
        title: "Double Taxation Agreements",
        description:
          "DTAs with over 50 countries allow credits and exemptions to avoid double taxation.",
      },
      {
        title: "Global Financial Hub",
        description:
          "Home to HKEX, no foreign exchange controls, with free trading in bonds, stocks, ETFs, and REITs.",
      },
      {
        title: "SME Support Schemes",
        description:
          "Government programs like SFGS, EMF, ITF, TID, and SUCCESS offer funding and advisory services.",
      },
      {
        title: "Strategic Location",
        description:
          "Asia’s leading free port with world‑class legal, financial, and logistics infrastructure.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Choose Business Structure",
          desc: "Select from Private Ltd, PLC, subsidiary, branch office, sole proprietorship, GP or LP.",
        },
        {
          title: "Name Search & Reservation",
          desc: "Reserve a unique company name via the Companies Registry portal.",
        },
        {
          title: "Submit Incorporation Application",
          desc: "File NNC1/NNC1G form and supporting docs through e‑Registry or in person.",
        },
        {
          title: "Registry Review",
          desc: "Companies Registry reviews for accuracy and legal compliance.",
        },
        {
          title: "Receive Certificate & UBI",
          desc: "Obtain your Certificate of Incorporation and Unique Business Identifier.",
        },
        {
          title: "Register UBI with IRD",
          desc: "Record your UBI with the Inland Revenue Department for tax purposes.",
        },
        {
          title: "Open Corporate Bank Account",
          desc: "Set up a Hong Kong business bank account for operational transactions.",
        },
        {
          title: "Apply Business Licenses",
          desc: "Obtain any required trade or industry‑specific licenses before starting.",
        },
        {
          title: "Apply Investment/Employment Visa",
          desc: "Foreigners secure the relevant visa to reside and operate in Hong Kong.",
        },
      ],
      violations: [
        "Completed NNC1/NNC1G incorporation form",
        "MOA & AOA (Memorandum & Articles of Association)",
        "ID proof and residential address proof for directors, shareholders, secretary",
        "Proof of registered office address",
        "Consent to Act forms signed by all officers",
        "Business plan or description for bank and licensing",
        "Board resolution for corporate shareholders",
        "Shareholder agreement (if applicable)",
      ],
      consequences: [
        "Open and maintain a corporate bank account",
        "Appoint a company secretary and certified auditor within 6 months",
        "Maintain statutory registers at registered office",
        "Hold AGMs within 6 months of financial year‑end",
        "File annual returns within 42 days of anniversary",
        "Submit profits tax, N/D/M code returns on schedule",
        "Contribute to MPF and comply with labor laws",
        "Maintain Significant Controllers Register",
        "Issue share certificates within 2 months of allotment",
        "Notify registry of changes within 15 days",
      ],
    },

    eligibility: [
      {
        heading: "Checklist for Company Registration in Hong Kong",
        items: [
          "Reserve a unique company name with the Companies Registry",
          "Provide a local physical or virtual registered office address",
          "Appoint at least one shareholder and one director",
          "Show evidence of paid‑up capital (minimum HKD 1)",
          "Enroll employees in the MPF scheme if applicable",
          "Open a Hong Kong corporate bank account",
          "Appoint a company secretary and auditor (both ≥18 years old)",
          "Ensure compliance with the Companies Ordinance (Cap. 622)",
        ],
      },
      {
        heading: "Director Requirements",
        items: [
          "At least one director appointed (no residency requirement)",
          "Director must be ≥18 years old",
          "Local company secretary must be a Hong Kong resident",
        ],
      },
    ],

    services: [
      {
        title: "Private Limited Company",
        desc: "Separate legal entity with limited liability for up to 50 shareholders.",
      },
      {
        title: "Public Limited Company",
        desc: "Raise capital from public investors with no shareholder limit.",
      },
      {
        title: "Subsidiary Company",
        desc: "Foreign parent owns a separate legal entity enjoying local tax benefits.",
      },
      {
        title: "Branch Office",
        desc: "Extension of a foreign company where liability rests with the parent.",
      },
      {
        title: "Sole Proprietorship",
        desc: "Single‑owner business with full personal liability.",
      },
      {
        title: "General Partnership",
        desc: "Two or more partners sharing management and unlimited liability.",
      },
      {
        title: "Limited Partnership",
        desc: "General partner manages with full liability; limited partners invest with capped liability.",
      },
    ],

    faqs: [
      {
        question: "Why register in Hong Kong?",
        answer:
          "Pro‑business tax regime, no VAT or capital gains tax, DTAs, and strategic Asia‑Pacific location.",
      },
      {
        question: "How long does incorporation take?",
        answer:
          "Online applications can be approved within one hour; paper filings up to four business days.",
      },
      {
        question: "What is a UBI?",
        answer:
          "Unique Business Identifier issued at incorporation, replacing the old Business Registration Number.",
      },
      {
        question: "Is HKD 1 paid‑up capital sufficient?",
        answer: "Yes—the legal minimum is HKD 1 for most company types.",
      },
      {
        question: "Do I need a local director?",
        answer:
          "No—directors can be foreign nationals, but you must appoint a Hong Kong resident company secretary.",
      },
      {
        question: "Are offshore profits taxed?",
        answer:
          "No—Hong Kong taxes only profits sourced within its territory, exempting properly documented offshore income.",
      },
      {
        question: "What post‑incorporation filings are required?",
        answer:
          "Annual returns, profits tax returns, MPF contributions, AGMs, and statutory register upkeep.",
      },
      {
        question: "Can I operate without a Hong Kong ID?",
        answer:
          "Yes—foreigners can fully own and direct a company; only the secretary must be resident.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },

  "nbfc-compliance": {
    overview: {
      heading: "Simplifying NBFC Compliance for a Stronger Financial Future",
      paragraphs: [
        "Navigating NBFC compliance is crucial for regulatory alignment and maintaining a trustworthy presence in the competitive financial sector. Non‑Banking Financial Companies (NBFCs) play a vital role in offering credit alternatives to individuals and businesses, making compliance a key aspect of operational integrity.",
        "Establishing an NBFC in India involves fulfilling several legal and regulatory requirements, including registration with the RBI, securing licenses, implementing data protection measures, maintaining minimum capital standards, and safeguarding organizational reputation. Regardless of the size or focus area, all NBFCs must comply with stringent operational and financial guidelines.",
        "Facing challenges with NBFC compliance? Our team of experts is here to streamline the process for you—so you can focus on growth while we handle the complexities of compliance management.",
      ],
    },

    features: [
      {
        title: "What is an NBFC?",
        description:
          "A Non‑Banking Financial Company (NBFC) is a financial institution registered under the Companies Act, 2013 that offers services such as deposits, loans, and investments without holding a banking license.",
      },
      {
        title: "Core Activities",
        description:
          "Accepting deposits, providing loans and advances, and investing in stocks, bonds, debentures, and government securities.",
      },
      {
        title: "Regulatory Framework",
        description:
          "NBFCs must comply with RBI’s Master Directions, maintain minimum capital adequacy, and adhere to KYC/AML and data‐protection norms.",
      },
    ],

    benefits: [
      {
        title: "Legal Adherence",
        description:
          "Stay compliant with RBI guidelines to avoid penalties or license revocation.",
      },
      {
        title: "Enhanced Market Reputation",
        description:
          "Build credibility with customers, investors, and regulators through transparent operations.",
      },
      {
        title: "Improved Consumer Confidence",
        description:
          "Regulatory compliance reassures customers about the legitimacy and reliability of your financial services.",
      },
      {
        title: "Business Continuity",
        description:
          "Meeting compliance requirements minimizes the risk of regulatory action and ensures uninterrupted operations.",
      },
      {
        title: "Market Expansion Opportunities",
        description:
          "A well‑regulated NBFC gains easier access to new markets and investor funding.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Reduces legal, financial, and operational risks through robust governance frameworks.",
      },
      {
        title: "Operational Excellence",
        description:
          "Compliance drives higher internal standards, data protection, and governance practices.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Memorandum & Articles of Association",
          desc: "Define your company’s purpose, structure, and scope under the Companies Act.",
        },
        {
          title: "Minutes of Board & Committee Meetings",
          desc: "Maintain detailed records of internal resolutions and governance decisions.",
        },
        {
          title: "Statutory Registers",
          desc: "Keep registers for members, directors, charges, and other statutory records.",
        },
        {
          title: "Audited Financial Statements",
          desc: "Submit audited balance sheet and profit & loss account verified by a certified auditor.",
        },
        {
          title: "Shareholding & Director Information",
          desc: "Maintain up‑to‑date records of shareholders, directors’ profiles, and their consents.",
        },
      ],
      violations: [
        "Operating without an RBI certificate of registration",
        "Failing to maintain minimum Net Owned Funds",
        "Non‑submission of periodic returns (e.g., NBS‑7, ALM)",
        "KYC/AML lapses leading to regulatory penalties",
      ],
      consequences: [
        "Monetary fines up to ₹10 lakh or more per violation",
        "Suspension or cancellation of NBFC registration",
        "Legal action under the RBI Act and Companies Act",
        "Reputational damage and loss of customer trust",
      ],
    },

    eligibility: [
      {
        heading: "Pre‑Registration Compliance Checklist",
        items: [
          "Apply for NBFC registration and obtain RBI license.",
          "Maintain minimum Net Owned Fund (NOF) as mandated.",
          "Implement data protection measures under PDPA 2019.",
          "Establish robust KYC and AML systems with due diligence.",
        ],
      },
    ],

    services: [
      {
        title: "Expert Paperwork Assistance",
        desc: "From document preparation to timely submissions, we simplify the entire compliance process.",
      },
      {
        title: "End‑to‑End Filing Support",
        desc: "We handle RBI and MCA filings—annual returns, statutory registers, and event‑based reports.",
      },
      {
        title: "Integrated KYC/AML Solutions",
        desc: "Streamline customer onboarding and AML obligations with our turnkey platforms.",
      },
      {
        title: "Free Legal Consultation",
        desc: "Complimentary legal guidance to ensure your NBFC meets all regulatory requirements.",
      },
      {
        title: "24/7 Customer Support",
        desc: "Our dedicated team is available around the clock for any compliance queries.",
      },
    ],

    faqs: [
      {
        question: "What is NBFC compliance?",
        answer:
          "Statutory and regulatory requirements NBFCs must follow under RBI, MCA, and other authorities, including periodic returns and governance norms.",
      },
      {
        question: "Which periodic returns must NBFCs file?",
        answer:
          "Returns such as NBS‑1 to NBS‑7, ALM returns, CRILC, monthly and quarterly filings as per RBI Master Directions.",
      },
      {
        question: "What pre‑registration steps are required for an NBFC?",
        answer:
          "Obtain RBI registration, maintain mandatory NOF, implement data‑protection, and set up KYC/AML before launch.",
      },
      {
        question: "What happens if an NBFC misses a compliance deadline?",
        answer:
          "Penalties can include fines, RBI action, license suspension, and reputational damage.",
      },
      {
        question: "Which NBFC categories require annual compliance?",
        answer:
          "All NBFCs—deposit-taking, non‑deposit-taking, systemically important, MFIs, IFIs, and P2P platforms—must comply.",
      },
      {
        question:
          "How often do NBFCs need to update their statutory registers?",
        answer:
          "Registers must be updated immediately upon any change—appointments, removals, capital alterations, or share transfers.",
      },
      {
        question: "Who enforces NBFC compliance in India?",
        answer:
          "The Reserve Bank of India (RBI) for financial norms and the Ministry of Corporate Affairs (MCA) for company law obligations.",
      },
      {
        question: "Can DoStartup handle all NBFC compliance requirements?",
        answer:
          "Yes—we offer end‑to‑end support from registration to annual filings, KYC/AML, and ongoing legal advisory.",
      },
    ],

    types: {
      cards: [
        {
          title: "Base Layer NBFCs",
          shortText: "Asset size ≤ ₹1,000 Cr",
          backText:
            "Low‑risk NBFCs with basic compliance under Master Directions.",
        },
        {
          title: "Middle Layer NBFCs",
          shortText: "Deposit‑taking & specialized NBFCs",
          backText:
            "Enhanced governance, risk management, and prudential norms apply.",
        },
        {
          title: "Upper Layer NBFCs",
          shortText: "Top 10 systemically significant",
          backText:
            "Stringent disclosures, governance standards, and risk mitigation required.",
        },
        {
          title: "Top Layer NBFCs",
          shortText: "Highest‑risk NBFCs",
          backText:
            "Subject to the most intensive RBI supervision and potential additional norms.",
        },
      ],
      roleBenefits: [
        "Clear roadmap for pre‑ and post‑registration compliance",
        "Reduced risk of penalties through timely filings",
        "Stronger credibility with regulators and investors",
        "Access to integrated KYC/AML and data‑protection frameworks",
      ],
      differenceTable: {
        columns: ["Compliance Category", "Frequency", "Key Returns"],
        rows: [
          [
            "Annual Filings",
            "Yearly",
            "Audited financials, NBS‑7, AOC‑4, MGT‑7",
          ],
          ["Half‑Yearly Filings", "Twice a year", "ALM‑II, IRF statements"],
          [
            "Quarterly Filings",
            "Every 3 months",
            "NBS‑2, CRILC, major exposure returns",
          ],
          ["Monthly Filings", "Every month", "NBS‑1, CTR, Branch info returns"],
          [
            "Event‑Based Filings",
            "As required",
            "Director changes, capital alterations, FDI disclosures",
          ],
        ],
      },
      timelineFees: [
        "Initial compliance application and RBI license filing",
        "Set up NOF and KYC/AML systems",
        "Monthly and quarterly return preparation and submission",
        "Annual audit, financial statements, and MCA filings",
        "Ongoing legal advisory and 24/7 support",
      ],
    },
  },

  "change-registered-office": {
    overview: {
      heading: "Change in Registered Office Address – Complete Guide",
      paragraphs: [
        "The registered office of a company serves as its official address for receiving all legal and government correspondence. While a company may operate from multiple locations such as corporate offices, branch offices, administrative units, or factories, it is mandatory to register its registered office with the Ministry of Corporate Affairs (MCA).",
        "The registered office determines the company’s legal domicile and the jurisdiction of the relevant Registrar of Companies (ROC). Any change in address must be updated with the ROC within 15 days by filing Form INC‑22 to remain compliant under the Companies Act, 2013.",
      ],
    },
    features: [
      {
        icon: "📍",
        title: "Within Same City/Town",
        description:
          "Move within the same ROC jurisdiction by passing a board resolution and filing INC‑22.",
      },
      {
        icon: "🏙️",
        title: "Within State, Different City",
        description:
          "Requires special resolution at an EGM (MGT‑14) plus INC‑22 filing.",
      },
      {
        icon: "🔄",
        title: "Within State, Different ROC",
        description:
          "Involves MOA amendment, newspaper ads, RD approval (INC‑23) and INC‑22.",
      },
      {
        icon: "🌐",
        title: "Inter‑State Shift",
        description:
          "Special resolution, stakeholder notices, RD approval (INC‑23), then INC‑28 & INC‑22.",
      },
    ],
    benefits: [
      {
        title: "Legal Compliance",
        description:
          "Meets statutory ROC requirements and avoids penalties for late filing.",
      },
      {
        title: "Strategic Location",
        description:
          "Aligns registered office with business operations and stakeholder convenience.",
      },
      {
        title: "Operational Clarity",
        description:
          "Ensures government notices and legal correspondence reach the correct address.",
      },
      {
        title: "Flexibility",
        description:
          "Allows shifts between jurisdictions and states to support growth or restructuring.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Board Resolution",
          desc: "Pass a board resolution approving the new registered office address.",
        },
        {
          title: "EGM & Special Resolution",
          desc: "If moving outside the same city, convene an EGM and pass a special resolution (MGT‑14).",
        },
        {
          title: "Form INC‑22 Filing",
          desc: "File INC‑22 within 15 days of resolution, attaching proof of new address and NOC.",
        },
        {
          title: "Regional Director Approval",
          desc: "For jurisdiction or state changes, file INC‑23 with RD and then INC‑28 post‑approval.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Incorporation Requirements",
        items: [
          "Latest electricity or water bill",
          "Property tax receipt",
          "NOC from property owner",
          "Lease or rent agreement",
          "Address must match across all documents",
        ],
      },
    ],
    services: [
      {
        title: "End‑to‑End Filing",
        desc: "We draft resolutions, prepare INC‑22/INC‑23/INC‑28 and handle all ROC submissions.",
      },
      {
        title: "RD Liaison",
        desc: "Expert handling of Regional Director approvals and stakeholder notices.",
      },
      {
        title: "Document Vetting",
        desc: "Thorough verification of utility bills, NOCs, and lease agreements to avoid rejections.",
      },
      {
        title: "Timely Compliance",
        desc: "Ensure filings are completed within 15‑day statutory window to prevent penalties.",
      },
    ],
    faqs: [
      {
        question: "Can I use a residential property as registered office?",
        answer:
          "Yes, residential properties are permitted provided valid NOC and utility bills are submitted.",
      },
      {
        question: "What if I miss the 15‑day filing deadline?",
        answer:
          "Late filing attracts penalties; fee increases with delay multiplier up to 10x.",
      },
      {
        question: "Do I need RD approval for every move?",
        answer:
          "Only when changing ROC jurisdiction or moving to another state.",
      },
      {
        question: "Will PAN or TAN change?",
        answer:
          "No. However, GST registration may need updating if the state changes.",
      },
      {
        question: "Do I need to notify stakeholders?",
        answer:
          "Yes. Update address on letterheads, website, banks, vendors, and statutory bodies.",
      },
    ],
    types: {
      cards: [
        {
          title: "Missing Utility Bill",
          shortText: "Use recent bills only",
          backText:
            "Always attach a utility bill not older than 2 months, or INC‑22 will be rejected.",
        },
        {
          title: "No NOC from Owner",
          shortText: "Obtain proper NOC",
          backText:
            "Failure to include a valid No Objection Certificate invalidates the filing.",
        },
        {
          title: "Late Filing",
          shortText: "Within 15 days mandatory",
          backText:
            "Filing INC‑22 after 15 days incurs heavy penalties—file on time.",
        },
        {
          title: "Incorrect Form Usage",
          shortText: "Use correct INC form",
          backText:
            "Form INC‑23 is required for ROC‑to‑ROC or state changes; INC‑22 alone isn’t enough.",
        },
      ],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [
        "Within city: 15–30 days",
        "Within state: 30–45 days",
        "Cross-ROC/state: 45–60 days",
        "Filing fee INR 2,000–5,000 approx.",
        "Additional RD application fee applies",
      ],
    },
  },

  "mca-compliance": {
    overview: {
      heading: "A Complete Guide to MCA Compliance",
      paragraphs: [
        "MCA compliance, also known as corporate or regulatory compliance, ensures that a company adheres to all legal requirements relevant to its business operations, as mandated by local, state, or central government authorities. Staying compliant is critical to the smooth and lawful functioning of any organization.",
        "With frequent changes in corporate laws and regulatory norms, MCA compliance helps your business stay up to date and prepared. At [Your Company Name], we help you navigate these shifts with confidence and clarity.",
        "Failing to comply with statutory regulations can result in financial penalties, loss of business credibility, or even license cancellation. Compliance helps maintain your company’s integrity and fosters trust among customers and stakeholders.",
        "MCA compliance encourages systematic record‑keeping, streamlined workflows, and timely updates of business activities. This not only helps meet legal standards but also enhances overall business efficiency and reduces operational costs.",
      ],
    },

    features: [
      {
        icon: "📋",
        title: "Dynamic Regulatory Updates",
        description:
          "Stay ahead with real‑time tracking of amendments to the Companies Act, 2013, and related rules.",
      },
      {
        icon: "🏛️",
        title: "Statutory Filings",
        description:
          "Ensure timely submission of key forms—DIR‑3 KYC, DPT‑3, BEN‑1, ADT‑1, AOC‑4, MGT‑7 and more.",
      },
      {
        icon: "⚖️",
        title: "LLP & Company Coverage",
        description:
          "Comprehensive compliance support for LLPs, Private, Public, Section 8 and One Person Companies.",
      },
    ],

    benefits: [
      {
        title: "Adapt to Regulatory Changes",
        description:
          "Rapidly integrate amendments and notifications into your compliance calendar.",
      },
      {
        title: "Protect Reputation",
        description:
          "Avoid penalties, prosecutions, and adverse publicity through perfect statutory adherence.",
      },
      {
        title: "Boost Efficiency",
        description:
          "Automated reminders and standardized processes reduce administrative burden and costs.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Compile KYC Filings",
          desc: "File DIR‑3 KYC / Web KYC for all directors within six months of financial year‑end.",
        },
        {
          title: "Deposit Returns",
          desc: "Submit Form DPT‑3 by June 30 for outstanding deposits and exempted receipts.",
        },
        {
          title: "Beneficial Ownership",
          desc: "File Form BEN‑1 to declare significant beneficial owners under Section 90.",
        },
        {
          title: "Auditor Intimation",
          desc: "Use Form ADT‑1 within 15 days of AGM to notify ROC of auditor appointments.",
        },
        {
          title: "Financial Statements",
          desc: "File AOC‑4 (or AOC‑4 CFS) within 30 days of AGM for standalone or consolidated accounts.",
        },
        {
          title: "Annual Return",
          desc: "Submit MGT‑7 (or MGT‑7A) within 60 days of AGM to report shareholding and management details.",
        },
      ],
      violations: [
        "Late or non‑filing of DIR‑3 KYC",
        "Failure to submit DPT‑3 and BEN‑1 on time",
        "Audited statements not filed within AGM timelines",
        "Annual return (MGT‑7) delayed or incomplete",
      ],
      consequences: [
        "Penalties up to ₹100 per day per form",
        "Additional fines for repeated non‑compliance",
        "Disqualification of directors for defaults",
        "Potential prosecution and license cancellation",
      ],
    },

    eligibility: [
      {
        heading: "Who Must File MCA Forms?",
        items: [
          "All companies registered under the Companies Act, 2013",
          "Limited Liability Partnerships governed by the LLP Act, 2008",
          "Section 8 (non‑profit) companies",
          "One Person Companies (OPCs)",
        ],
      },
    ],

    services: [
      {
        title: "Form Preparation & Filing",
        desc: "Accurate drafting and e‑submission of all MCA e‑Forms with digital signatures.",
      },
      {
        title: "Compliance Calendar",
        desc: "Interactive schedule of all due dates, automated reminders, and real‑time tracking.",
      },
      {
        title: "Audit Readiness",
        desc: "Organize statutory registers and board minutes to streamline your annual audit.",
      },
      {
        title: "LLP & OPC Support",
        desc: "Specialized services for LLP returns (Form 11, Form 8) and OPC‑specific filings.",
      },
      {
        title: "Expert Advisory",
        desc: "Ongoing legal guidance on corporate law changes, ROC queries, and investigation responses.",
      },
    ],

    faqs: [
      {
        question: "What is DIR‑3 KYC and when is it filed?",
        answer:
          "DIR‑3 KYC is the annual KYC form for all DIN‑holding directors, due within six months of the financial year‑end.",
      },
      {
        question: "Which form reports deposits accepted by a company?",
        answer:
          "Form DPT‑3 must be filed by June 30 each year for deposits and exempted sums.",
      },
      {
        question: "What are the key LLP compliance forms?",
        answer:
          "LLPs file DIR‑3 KYC, Form 11 (annual return) and Form 8 (statement of solvency) with respective due dates and late‑filing penalties.",
      },
      {
        question: "Which forms must Private Limited Companies file annually?",
        answer:
          "They must file DPT‑3, INC‑20A, INC‑22, MSME Form I, ADT‑1, DIR‑3 KYC, DIR‑9, DIR‑12, MGT‑7, and AOC‑4 as applicable.",
      },
      {
        question: "How do public limited companies differ in MCA compliance?",
        answer:
          "In addition to Private Company forms, PLCs must conduct at least two board meetings per year and file MGT‑8 certification of annual return by a company secretary.",
      },
      {
        question: "Are Section 8 and OPCs subject to the same filings?",
        answer:
          "Yes—both must file AOC‑4 and MGT‑7 within AGM timelines, plus OPCs file OPC‑specific forms like MBP‑1 and DPT‑3.",
      },
      {
        question: "What penalties apply for late AGM‑linked filings?",
        answer:
          "Late AOC‑4 attracts ₹100 per day; late MGT‑7 similarly ₹100 per day; auditor intimation via ADT‑1 late filing penalty is ₹25,000 or as prescribed.",
      },
      {
        question: "How can [Your Company Name] help with MCA compliance?",
        answer:
          "We offer end‑to‑end e‑Form filing, real‑time compliance tracking, audit support, and legal advisory to keep you fully compliant.",
      },
    ],

    types: {
      cards: [
        {
          title: "Corporate Compliance",
          shortText: "Form filings & statutory registers",
          backText:
            "All ROC e‑Forms, board minutes, and registers maintained per the Companies Act.",
        },
        {
          title: "LLP Compliance",
          shortText: "Annual returns & solvency statements",
          backText:
            "LLP Form 11, Form 8 filings under LLP Act, 2008 with partner KYC and solvency checks.",
        },
        {
          title: "OPC Compliance",
          shortText: "Single-member company obligations",
          backText:
            "OPC-specific filings like MBP‑1, DIR‑8, DPT‑3, plus standard annual returns.",
        },
        {
          title: "Section 8 Compliance",
          shortText: "Non-profit entity filings",
          backText:
            "AOC‑4 and MGT‑7 for Section 8 companies, plus additional charitable disclosures.",
        },
      ],
      roleBenefits: [
        "Unified compliance framework for all entity types",
        "Automated reminders for every ROC e‑Form deadline",
        "Reduced risk of penalties and legal notices",
        "Dedicated support for complex investigations and ROC queries",
      ],
      differenceTable: {
        columns: ["Entity Type", "Key Forms", "Due Dates"],
        rows: [
          [
            "Private Limited",
            "DPT‑3, MGT‑7, AOC‑4, ADT‑1, DIR‑3",
            "Jun 30, 60 days post‑AGM, 30 days post‑AGM, 15 days post‑AGM, 6 months FY‑end",
          ],
          ["LLP", "Form 11, Form 8, DIR‑3", "May 30, Oct 30, 6 months FY‑end"],
          [
            "OPC",
            "MBP‑1, DIR‑8, DPT‑3, MGT‑7, AOC‑4",
            "First BM FY, first BM FY, Jun 30, 60 days post‑AGM, 30 days post‑AGM",
          ],
          ["Section 8", "MGT‑7, AOC‑4", "60 days post‑AGM, 30 days post‑AGM"],
          [
            "Public Ltd.",
            "INC‑20A, MGT‑7, AOC‑4, DIR‑3, ADT‑1",
            "180 days Inc., 60/30 days AGM, 6 months FY‑end, 15 days post‑appointment, 15 days post‑AGM",
          ],
        ],
      },
      timelineFees: [
        "Initial board & member KYC within 6 months of FY‑end",
        "Deposit returns by June 30 each year",
        "Annual returns & financials 30‑60 days post‑AGM",
        "LLP returns by May 30/Oct 30",
        "OPC-specific and Section 8 filings per entity timelines",
      ],
    },
  },

  "mgt-7-compliance": {
    overview: {
      heading: "Form MGT-7 Filing – Annual Return Compliance for Companies",
      paragraphs: [
        "Filing Form MGT-7 is a statutory compliance requirement for every registered company in India. As per Section 92(1) of the Companies Act, 2013 and Rule 11(1) of the Companies (Management and Administration) Rules, 2014, companies must file their annual return using Form MGT-7. This form captures key details of the company’s structure, shareholding, management, and financial position as on the close of the financial year.",
        "Submitting the MGT-7 form enables the Registrar of Companies (ROC) to maintain updated records based on the company’s declaration of accuracy. It ensures legal transparency and helps the company stay compliant with corporate governance norms.",
        "Need help with Form MGT-7 filing? Connect with our compliance experts today for end-to-end support and hassle-free filing.",
      ],
    },

    features: [
      {
        icon: "⚖️",
        title: "Legal Requirement",
        description:
          "MGT-7 is a statutory form that must be filed annually by all eligible companies under Section 92(1).",
      },
      {
        icon: "📊",
        title: "Comprehensive Disclosure",
        description:
          "Captures detailed shareholding patterns, directorship changes, financial positions, and statutory disclosures.",
      },
      {
        icon: "🔏",
        title: "Digital Signature",
        description:
          "Must be signed electronically by a director (and company secretary, if applicable) before submission.",
      },
      {
        icon: "✅",
        title: "Certification (MGT-8)",
        description:
          "Requires certification of accuracy by a Practicing Company Secretary for certain companies under Section 92(2).",
      },
      {
        icon: "📄",
        title: "Extract for Board’s Report (MGT-9)",
        description:
          "An extract of the return to be included in the Board’s Report under Section 92(3).",
      },
    ],

    benefits: [
      {
        title: "Promotes Transparency",
        description:
          "Ensures stakeholders have clear visibility into the company’s governance and compliance status.",
      },
      {
        title: "Ensures Legal Compliance",
        description:
          "Helps avoid penalties and legal issues by meeting statutory deadlines and requirements.",
      },
      {
        title: "Provides Financial & Operational Insights",
        description:
          "Delivers key data on shareholding, indebtedness, and management structure for analysis.",
      },
      {
        title: "Supports Ease of Doing Business",
        description:
          "Enhances credibility with regulators, investors, and lenders, facilitating growth opportunities.",
      },
      {
        title: "Strengthens Corporate Governance",
        description:
          "Demonstrates commitment to accountability and high governance standards.",
      },
      {
        title: "Boosts Reputation",
        description:
          "A compliant track record builds trust with market participants and regulatory bodies.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Document Preparation",
          desc: "Collect and verify all required documents: financial statements, statutory registers, shareholder and director details, and meeting minutes.",
        },
        {
          title: "Access MCA Portal & Fill Form",
          desc: "Log in to the MCA portal and complete Form MGT-7 for the financial year ending March 31, entering company particulars and disclosures.",
        },
        {
          title: "Upload Attachments",
          desc: "Attach all supporting files—financials, MGT-8 (if applicable), ROC acknowledgments, and any extension approvals.",
        },
        {
          title: "Pay Filing Fees",
          desc: "Calculate and pay the ROC fee online based on the company’s authorized share capital.",
        },
        {
          title: "ROC Review & Approval",
          desc: "Upon submission, the ROC reviews the filing and updates the company’s compliance status once approved.",
        },
      ],
      violations: [],
      consequences: [
        "Late filing penalty of ₹100 per day beyond the 60‑day deadline",
        "Company‑level fines from ₹50,000 up to ₹500,000 for non‑compliance",
        "Continued daily fines until the form is filed",
        "Possible legal action under the Companies Act, 2013",
      ],
    },

    eligibility: [
      {
        heading: "Conditions Required for Form MGT-7 Filing",
        items: [
          "Incorporated under the Companies Act, 2013 with electronic submission to ROC",
          "Authorized & paid‑up capital of at least ₹2 crores (or as prescribed)",
          "Annual turnover between ₹20 crores and ₹100 crores (or revised thresholds)",
          "Not classified as an OPC or eligible Small Company (which file MGT‑7A instead)",
        ],
      },
      {
        heading: "Who is Eligible to File Form MGT-7?",
        items: [
          "All private and public limited companies (except OPCs and eligible small companies)",
          "Holding and subsidiary companies",
          "Section 8 (non‑profit) companies",
          "Companies under Special Acts",
          "Parent companies overseeing other entities",
        ],
      },
    ],

    services: [
      {
        title: "Over a Decade of Expertise",
        desc: "10+ years’ industry experience ensuring error‑free, efficient MGT-7 filings.",
      },
      {
        title: "Tailored Compliance Packages",
        desc: "Customized filing solutions based on your company’s size, structure, and needs.",
      },
      {
        title: "Complete Post‑Filing Support",
        desc: "Ongoing assistance with record‑keeping and compliance updates after submission.",
      },
      {
        title: "Hassle‑Free Documentation",
        desc: "We handle all paperwork and portal uploads so you can focus on your business.",
      },
      {
        title: "Guaranteed Timely Filing",
        desc: "We ensure your return is filed well before the deadline to avoid penalties.",
      },
      {
        title: "Expert Legal Guidance",
        desc: "Continuous advisory on corporate law changes, ROC queries, and investigations.",
      },
      {
        title: "End‑to‑End Compliance Solutions",
        desc: "From data gathering to final ROC approval, we manage every step.",
      },
      {
        title: "Cost‑Effective Pricing",
        desc: "Transparent, competitive fees with no hidden charges.",
      },
      {
        title: "24×7 Customer Assistance",
        desc: "Round‑the‑clock support for any compliance queries or emergencies.",
      },
    ],

    faqs: [
      {
        question: "What is Form MGT-7?",
        answer:
          "The annual return every eligible company must file under Section 92(1) of the Companies Act, 2013, detailing structure, shareholding, and governance.",
      },
      {
        question: "What is the difference between AOC-4 and MGT-7?",
        answer:
          "AOC-4 is for financial statements; MGT-7 is for the annual return covering directors, shareholders, and governance.",
      },
      {
        question: "Who is eligible to file Form MGT-7?",
        answer:
          "All private/public limited companies except OPCs and eligible small companies (which file MGT‑7A).",
      },
      {
        question: "What is Form MGT-7A?",
        answer:
          "A simplified annual return for OPCs and small companies (paid‑up capital ≤ ₹2 cr, turnover ≤ ₹20 cr).",
      },
      {
        question: "Who signs Form MGT-7?",
        answer:
          "A director (and company secretary, if any) must digitally sign; certification by a practicing professional may be required.",
      },
      {
        question: "Is filing MGT-7 mandatory?",
        answer:
          "Yes—failure to file by the deadline invites penalties and legal consequences under the Companies Act.",
      },
      {
        question: "Can MGT-7 be revised after filing?",
        answer:
          "No—ensure all information is accurate before submission, as revisions are not permitted.",
      },
      {
        question: "What are the penalties for late filing?",
        answer:
          "₹100 per day delay plus company‑level fines up to ₹5 lakh and possible legal action.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "Form MGT-7", "Form MGT-7A"],
        rows: [
          [
            "Definition",
            "Standard annual return for most companies",
            "Simplified return for OPCs & small companies",
          ],
          [
            "Purpose",
            "Comprehensive disclosure of governance, shareholding, and financials",
            "Basic operational and financial information",
          ],
          [
            "Who Should File",
            "All companies except OPCs & eligible small companies",
            "OPCs and small companies (paid‑up ≤ ₹2 cr, turnover ≤ ₹20 cr)",
          ],
          [
            "Certification",
            "Requires MGT‑8 by PCS for certain companies",
            "Certification by CS if applicable",
          ],
          [
            "Deadline",
            "Within 60 days of AGM",
            "Within 60 days of AGM (standard: Nov 29 for FY‑end Mar 31)",
          ],
        ],
      },
      timelineFees: [],
    },
  },

  "spice-plus-compliance": {
    overview: {
      heading:
        "SPICe+ Form: A Comprehensive Solution for Company Registration in India",
      paragraphs: [
        "The SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) Form is a powerful web‑based application introduced by the Ministry of Corporate Affairs in 2020 to streamline the company incorporation process in India.",
        "Designed to reduce paperwork and enhance efficiency, SPICe+ enables entrepreneurs to handle multiple registrations through a single, integrated platform—covering name reservation, incorporation, PAN, TAN, GST, EPFO, ESIC and more.",
        "By merging several compliance procedures into one simplified process, SPICe+ (INC‑32) has become a vital tool for startups and businesses aiming for quick and hassle‑free company formation.",
      ],
    },

    features: [
      {
        icon: "🌐",
        title: "Integrated Online Platform",
        description:
          "Replaces multiple forms with a single digital solution for company incorporation.",
      },
      {
        icon: "🧩",
        title: "Dual‑Part Structure",
        description:
          "Part A for name reservation (RUN), Part B for incorporation and linked registrations.",
      },
      {
        icon: "🔗",
        title: "Multi‑Service Access",
        description:
          "Apply simultaneously for PAN, TAN, GST, EPFO, ESIC, professional tax, bank account, etc.",
      },
      {
        icon: "📊",
        title: "User‑Friendly Dashboard",
        description:
          "Track progress, make updates, and manage submissions via an intuitive interface.",
      },
      {
        icon: "✅",
        title: "Real‑Time Data Validation",
        description:
          "Instant checks during on‑screen filing to minimize errors and ensure accuracy.",
      },
      {
        icon: "🔄",
        title: "Seamless Resubmission",
        description:
          "Easily correct and resubmit forms without starting from scratch.",
      },
      {
        icon: "🔍",
        title: "Pre‑Scrutiny & System Checks",
        description:
          "Automated validations catch issues before final submission.",
      },
      {
        icon: "📝",
        title: "Auto‑Generated Declarations",
        description:
          "Standard declarations for first directors and subscribers are populated automatically.",
      },
      {
        icon: "📑",
        title: "Section‑Based Navigation",
        description:
          "Logical form sections make data entry and review straightforward.",
      },
    ],

    benefits: [
      {
        title: "Simplified Compliance Process",
        description:
          "Consolidates incorporation, PAN/TAN/GST/EPFO/ESIC registrations into one application.",
      },
      {
        title: "Digitally Signed & Legally Valid",
        description:
          "All documents are digitally signed, ensuring security, authenticity, and legal validity.",
      },
      {
        title: "Seamless Department Integration",
        description:
          "Built‑in links to multiple government departments speed up approvals.",
      },
      {
        title: "Reduced Processing Time",
        description:
          "Automated workflows and combined filings enable faster company incorporation.",
      },
      {
        title: "Enhanced User Experience",
        description:
          "On‑screen submission, intuitive navigation, and real‑time feedback simplify the process.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Create SPICe+ Login",
          desc: "Register or log in on the MCA portal and generate filing credentials.",
        },
        {
          title: "File Part A (Name Reservation)",
          desc: "Submit company type, proposed name, class, category and get RUN approval.",
        },
        {
          title: "File Part B (Incorporation)",
          desc: "Enter incorporation details: address, directors, shareholders, capital, etc.",
        },
        {
          title: "Submit Linked Forms",
          desc: "Attach eMoA, eAoA, AGILE PRO (INC‑35), URC‑1 (if conversion), INC‑9 declarations.",
        },
        {
          title: "Certificate of Incorporation",
          desc: "Receive CIN, PAN, TAN and date of incorporation once ROC verifies submission.",
        },
      ],
      violations: [
        "Electronic Memorandum of Association (eMoA)",
        "Electronic Articles of Association (eAoA)",
        "Declaration by first directors and subscribers",
        "Proof of registered office address & recent utility bill",
        "No Objection Certificate from property owner",
        "COI of foreign body corporate (if applicable)",
        "Board resolution from promoter company",
        "Disclosure of interest by directors",
        "Consent of nominee (INC‑3 for OPCs)",
        "Identity & address proofs (PAN, Aadhaar, passport)",
        "Form INC‑14 & INC‑15 for Section 8 companies",
        "Estimated annual income & expenditure (Section 8)",
      ],
      consequences: [
        "Delays or rejections due to incomplete or incorrect documentation",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility Criteria for SPICe+ Filing",
        items: [
          "Compliance with Companies Act, 2013 (Sections 4, 7, 8(1), 12, 152, 153)",
          "Correctly filled Form INC‑32 (SPICe+) including all required fields",
          "Registered office owned or lawfully occupied by the applicant",
          "Consolidated challan generated for government fees (MoA, AoA, PAN, TAN)",
          "Authorized capital up to ₹15 lakhs for zero‑fee benefit",
          "eMoA & eAoA prepared electronically",
        ],
      },
      {
        heading: "Who Can File SPICe+?",
        items: [
          "Entrepreneurs under Section 8 (non‑profits)",
          "Indian residents or registered businesses",
          "Foreign nationals or entities setting up in India",
          "Private & Public Limited Companies",
          "One Person Companies (OPC)",
          "Producer Companies",
        ],
      },
    ],

    services: [
      {
        title: "Name Reservation",
        desc: "Integrated RUN service for instant company name approval.",
      },
      {
        title: "Company Incorporation",
        desc: "Unified filing for company setup—type, category, address, directors.",
      },
      {
        title: "DIN Allotment",
        desc: "Automatic Director Identification Number issuance during incorporation.",
      },
      {
        title: "PAN & TAN Application",
        desc: "Embedded PAN/TAN filings with Income Tax Department.",
      },
      {
        title: "EPFO & ESIC Registration",
        desc: "One‑click registration for employee welfare schemes.",
      },
      {
        title: "Professional Tax & Bank Account",
        desc: "Apply for professional tax and open a corporate bank account seamlessly.",
      },
      {
        title: "GSTIN Allotment",
        desc: "Integrated GST registration within the SPICe+ workflow.",
      },
    ],

    faqs: [
      {
        question: "What is the SPICe+ Form?",
        answer:
          "An integrated e‑application by MCA to streamline company incorporation and multiple registrations.",
      },
      {
        question: "Where do I file SPICe+?",
        answer: "Online via the official MCA portal under the SPICe+ section.",
      },
      {
        question: "Who can certify SPICe+?",
        answer: "A CA, CS, or CMA authorized under the Companies Act, 2013.",
      },
      {
        question: "What services does SPICe+ cover?",
        answer:
          "Name reservation, incorporation, DIN, PAN, TAN, GST, EPFO, ESIC, professional tax, bank account, etc.",
      },
      {
        question: "Do I need INC‑22 with SPICe+?",
        answer:
          "Not generally—INC‑22 is only required for changes in registered office after incorporation.",
      },
      {
        question: "What’s the file size limit?",
        answer: "Each attachment must not exceed 6 MB (PDF or JPG).",
      },
      {
        question: "Can I resubmit SPICe+ multiple times?",
        answer: "Yes—ensure details are correct to avoid delays or rejections.",
      },
      {
        question: "How does SPICe+ differ from SPICe?",
        answer:
          "SPICe+ adds integrated multi‑service registrations and real‑time validation over the older SPICe form.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "SPICe Form", "SPICe+ Form"],
        rows: [
          [
            "Scope",
            "Basic incorporation (INC‑32)",
            "Incorporation + multiple registrations",
          ],
          [
            "Integration",
            "Limited to company setup",
            "PAN, TAN, GST, EPFO, ESIC, bank account, etc.",
          ],
          [
            "User Experience",
            "Multiple separate filings",
            "Single unified workflow",
          ],
          ["Validation", "Manual checks", "Real‑time data validation"],
          [
            "Processing Time",
            "Longer turnaround",
            "Faster approvals via automation",
          ],
        ],
      },
      timelineFees: [],
    },
  },

  "agile-pro-s-compliance": {
    overview: {
      heading: "What is Form AGILE PRO S? – A Comprehensive Guide",
      paragraphs: [
        "Form AGILE PRO S is a crucial application filed with the MCA alongside SPICe+ to obtain GST, EPFO, ESIC, Profession Tax and bank account registration in one go under Rule 38(A) of the Companies (Incorporation) Rules, 2014.",
        "Designed as a single‑window system, AGILE PRO S (INC‑35) streamlines mandatory post‑incorporation registrations, reducing paperwork and accelerating business readiness.",
        "It ensures new companies are legally compliant from day one by bundling multiple statutory filings into one integrated form.",
      ],
    },

    features: [
      {
        icon: "🌐",
        title: "Multi‑Service Integration",
        description:
          "Consolidates GSTIN, EPFO, ESIC, Professional Tax, Shops & Establishment and bank account registrations under one application.",
      },
      {
        icon: "⚡",
        title: "Accelerated Registration",
        description:
          "Enables faster operational setup by filing all mandatory post‑incorporation registrations in a single workflow.",
      },
      {
        icon: "🔄",
        title: "Eliminates Redundancy",
        description:
          "Minimizes repetitive data entry by integrating with SPICe+ and other MCA e‑services.",
      },
      {
        icon: "✅",
        title: "Regulatory Compliance Made Easy",
        description:
          "Ensures statutory obligations to GST, EPFO, ESIC and other authorities are met seamlessly.",
      },
      {
        icon: "📑",
        title: "Mandatory Proof Submission",
        description:
          "Captures business address proof, KYC documents, board resolutions and declarations within the same form.",
      },
    ],

    benefits: [
      {
        title: "Single‑Window Registration",
        description:
          "Automatic filing for multiple services—GST, EPFO, ESIC, Professional Tax, bank account—through one form.",
      },
      {
        title: "Integrated with SPICe+",
        description:
          "Smooth name reservation and incorporation linkage saves time and effort.",
      },
      {
        title: "Boosts Operational Efficiency",
        description:
          "Reduces administrative workload and speeds up business readiness.",
      },
      {
        title: "Ensures Legal Compliance",
        description:
          "Meets key statutory obligations for tax, labor laws, and banking in one go.",
      },
      {
        title: "Access to Government Schemes",
        description:
          "Unlock eligibility for Startup India, MSME registration and other incentives immediately.",
      },
      {
        title: "Minimizes Paperwork",
        description:
          "Combines multiple registrations into a single submission to reduce documentation.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Fill Out Application",
          desc: "Download AGILE PRO S (INC‑35) after SPICe+ submission and enter registration details.",
        },
        {
          title: "Attach Supporting Documents",
          desc: "Upload proof of business address, authorized signatory ID/KYC, board resolution, specimen signature and utility bills.",
        },
        {
          title: "Submit Declarations",
          desc: "File EPFO, ESIC and bank account declarations as required by respective authorities.",
        },
        {
          title: "Sign & Pay",
          desc: "Affix the DSC of the authorized signatory and pay government fees to finalize filing.",
        },
        {
          title: "Processing & Approval",
          desc: "MCA reviews the application and grants multiple registrations in one go.",
        },
      ],
      violations: [
        "Proof of business address (rent agreement, utility bill)",
        "Board resolution and authorization letter",
        "ID & address proof of authorized signatory (PAN, Aadhaar, passport)",
        "Specimen signature for EPFO",
        "Utility bill for bank KYC",
        "Standard declarations for ESIC/EPFO",
        "INC‑35 e-form correctly filled",
      ],
      consequences: [
        "Delays or rejections due to incomplete or incorrect documentation",
      ],
    },

    eligibility: [
      {
        heading: "Basic Requirements for AGILE PRO S Filing",
        items: [
          "Mandatory EPFO & ESIC registration applications",
          "All supporting documents prepared and verified",
          "Bank KYC norms complied for current account setup",
          "Compliance with any state‑specific requirements",
        ],
      },
      {
        heading: "Who Can Apply for AGILE PRO S?",
        items: [
          "Startups and SMEs during incorporation",
          "Private & Public Limited Companies",
          "Limited Liability Partnerships (LLPs)",
        ],
      },
    ],

    services: [
      {
        title: "GSTIN Registration",
        desc: "Automatic application for Goods and Services Tax Identification Number.",
      },
      {
        title: "ESIC Registration",
        desc: "Registration under the Employees’ State Insurance Act for establishments with ≥10 employees.",
      },
      {
        title: "EPFO Registration",
        desc: "Provident fund registration for businesses with ≥20 employees.",
      },
      {
        title: "Professional Tax",
        desc: "Professional tax registration as per state requirements.",
      },
      {
        title: "Bank Account Opening",
        desc: "Seamless setup of a corporate current account through partner banks.",
      },
      {
        title: "Shops & Establishment",
        desc: "State‑specific Shops & Establishment registration where applicable.",
      },
      {
        title: "Import‑Export Code",
        desc: "IEC application for import/export activities via DGFT.",
      },
    ],

    faqs: [
      {
        question: "What is the AGILE PRO S Form?",
        answer:
          "An MCA e‑form (INC‑35) for obtaining GST, EPFO, ESIC, Professional Tax, bank account and other registrations post–incorporation.",
      },
      {
        question: "What does AGILE PRO S stand for?",
        answer:
          "Application for GSTIN, ESIC, EPFO, Professional Tax Registration, Shops & Establishment (and bank account opening).",
      },
      {
        question: "Who must file AGILE PRO S?",
        answer:
          "All newly incorporated entities seeking mandatory post‑incorporation registrations.",
      },
      {
        question: "Is bank KYC part of AGILE PRO S?",
        answer:
          "Yes—you must upload KYC documents for the authorized signatory to open the corporate bank account.",
      },
      {
        question: "What is the file size limit?",
        answer:
          "Attachments should not exceed 2 MB per document as per MCA portal guidelines.",
      },
      {
        question: "Can I correct and resubmit?",
        answer:
          "Yes—AGILE PRO S allows seamless resubmission in case of errors.",
      },
      {
        question: "How long for approvals?",
        answer:
          "Typically processed together with SPICe+ approvals, often within a few working days.",
      },
      {
        question: "Difference between SPICe+ and AGILE PRO S?",
        answer:
          "SPICe+ handles incorporation and name reservation; AGILE PRO S handles post‑incorporation registrations.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "SPICe+ Form", "AGILE PRO S Form"],
        rows: [
          [
            "Primary Purpose",
            "Company incorporation & name reservation",
            "Post‑incorporation statutory registrations",
          ],
          [
            "Services",
            "DIN, PAN, TAN, GST (optional)",
            "GSTIN, ESIC, EPFO, Professional Tax, bank account, etc.",
          ],
          [
            "Timing",
            "Filed first for incorporation",
            "Filed immediately after SPICe+ submission",
          ],
          ["Focus", "Formation compliance", "Operational readiness"],
        ],
      },
      timelineFees: [],
    },
  },

  "ce-certification-compliance": {
    overview: {
      heading: "CE Certification: Your Gateway to the European Market",
      paragraphs: [
        "Obtaining the CE mark demonstrates that your product complies with EU health, safety, and environmental protection standards—mandatory for lawful distribution across the European Economic Area (EEA).",
        "The CE mark, or Conformité Européenne, acts as a passport allowing free movement of goods within the EEA and signifies conformity with all applicable EU directives and regulations.",
        "Partner with DoStartup™ to streamline the CE certification process and confidently enter one of the world’s most robust and business-friendly markets.",
      ],
    },

    features: [
      {
        icon: "🔖",
        title: "Legal Market Access",
        description:
          "CE marking is a legal requirement for many regulated products to enter and circulate freely within the EEA.",
      },
      {
        icon: "⚖️",
        title: "Harmonized Standards",
        description:
          "Ensures all manufacturers adhere to the same EU directives for health, safety, and environmental protection.",
      },
      {
        icon: "🔬",
        title: "Conformity Assessment",
        description:
          "Supports both self-assessment for low-risk products and notified body evaluation where required.",
      },
      {
        icon: "🛡️",
        title: "Consumer Safety",
        description:
          "Protects end users by mandating rigorous testing and risk assessment before market entry.",
      },
      {
        icon: "🌍",
        title: "Free Movement of Goods",
        description:
          "Eliminates country-specific approvals—once CE marked, products can be sold across the entire EEA.",
      },
    ],

    benefits: [
      {
        title: "Fair Competition",
        description:
          "Level playing field ensuring all products meet the same mandatory EU requirements.",
      },
      {
        title: "Market Confidence",
        description:
          "Enhances product credibility and consumer trust through demonstrated compliance.",
      },
      {
        title: "Regulatory Protection",
        description:
          "CE mark holders gain legal protection from enforcement actions when correctly certified.",
      },
      {
        title: "Global Recognition",
        description:
          "Widely respected outside Europe as a mark of high regulatory compliance.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Identify Applicable Directives",
          desc: "Determine which EU directives and harmonized standards apply to your product.",
        },
        {
          title: "Conformity Assessment",
          desc: "Choose self-assessment or engage a notified body based on product risk classification.",
        },
        {
          title: "Compile Technical File",
          desc: "Assemble product specifications, test reports, risk assessments, and design documentation.",
        },
        {
          title: "Draft EU Declaration of Conformity",
          desc: "Formalize compliance in a signed declaration, referencing all applicable directives.",
        },
        {
          title: "Affix CE Mark",
          desc: "Place the CE logo (minimum 5 mm height) and notified body number (if any) on the product or packaging.",
        },
      ],
      violations: [
        "Product description and technical specifications",
        "Test reports verifying compliance with EU harmonized standards",
        "Risk assessment documentation",
        "Signed EU Declaration of Conformity",
        "Notified body certificate number (if applicable)",
      ],
      consequences: [
        "Market withdrawal or bans for non-compliant products",
        "Fines or legal action by EU authorities",
        "Damage to brand reputation and customer trust",
      ],
    },

    eligibility: [
      {
        heading: "Who Needs CE Certification?",
        items: [
          "Manufacturers, importers, or distributors of products covered by EU directives",
          "Products in categories such as medical devices, toys, PPE, electronics, machinery, and more",
          "Low‑risk products may self‑certify; higher‑risk items require notified body involvement",
        ],
      },
      {
        heading: "Key Technical Requirements",
        items: [
          "Compliance with all relevant EU directives and harmonized standards",
          "Maintenance of a complete technical file for at least 10 years post‑market placement",
          "Signed EU Declaration of Conformity kept up to date",
        ],
      },
      {
        heading: "Products Eligible for CE Certification",
        items: [
          "Electrical and Electronic Equipment",
          "Medical Devices",
          "Toys and Children’s Products",
          "Household Refrigerators and Freezers",
          "Personal Protective Equipment (PPE)",
          "Radio and Telecommunications Equipment",
          "Gas‑Fired Hot‑Water Boilers",
          "Lifts and Elevators",
          "Measuring Instruments",
          "Pressure Equipment and Simple Pressure Vessels",
        ],
      },
      {
        heading: "Checklist to Obtain CE Marking",
        items: [
          "Identify applicable EU directives and regulations",
          "Determine appropriate conformity assessment procedure",
          "Prepare and maintain a comprehensive technical file",
          "Conduct product testing (in‑house or third‑party)",
          "Draft and sign the EU Declaration of Conformity",
          "Affix CE marking and notified body number (if required)",
          "Retain Declaration of Conformity and technical file for 10 years",
          "Self‑verify low‑risk products when third‑party testing is not mandatory",
        ],
      },
    ],

    services: [
      {
        title: "Directive & Standard Mapping",
        desc: "Identify all applicable EU directives and harmonized standards for your product category.",
      },
      {
        title: "Technical File Assembly",
        desc: "Compile and review product specifications, test reports, risk assessments, and manuals.",
      },
      {
        title: "Notified Body Coordination",
        desc: "Liaise with EU‑recognized notified bodies for required third‑party assessments.",
      },
      {
        title: "Declaration Drafting",
        desc: "Prepare a precise EU Declaration of Conformity signed by authorized representatives.",
      },
      {
        title: "Marking & Labeling Guidance",
        desc: "Ensure CE logo and notified body numbers are correctly sized, proportioned, and placed.",
      },
    ],

    faqs: [
      {
        question: "What is CE Certification?",
        answer:
          "CE certification indicates that a product complies with EU safety, health, and environmental protection standards, allowing free movement of goods across the EEA.",
      },
      {
        question: "Is CE Certification valid in India?",
        answer:
          "While CE marking is not mandatory in India, it enhances product credibility and is often required for exporting goods to the European market.",
      },
      {
        question: "Is CE Marking accepted in the United States?",
        answer:
          "CE marking is not a regulatory requirement in the U.S., but it may be recognized as a mark of product quality and safety in global markets.",
      },
      {
        question: "Who issues CE Certification?",
        answer:
          "CE certification is issued by the manufacturer or authorized representative, often with support from a notified body depending on the product category.",
      },
      {
        question: "When is CE Certification mandatory in Europe?",
        answer:
          "CE marking is mandatory for products falling under one or more EU directives—such as electronics, medical devices, machinery, and toys—before sale in the EEA.",
      },
      {
        question: "What is the difference between ISO and CE Certification?",
        answer:
          "ISO focuses on voluntary international quality and management standards; CE is a mandatory product conformity mark for the EEA.",
      },
      {
        question: "Do medical devices require CE marking?",
        answer:
          "Yes—medical devices must comply with the MDR or IVDR and bear the CE mark to be sold in the EEA.",
      },
      {
        question: "Is CE marking required for machinery?",
        answer:
          "Yes—machinery must meet the EU Machinery Directive safety requirements and carry the CE mark.",
      },
      {
        question: "What is minimal risk in CE Certification?",
        answer:
          "Minimal risk products can be self-certified by the manufacturer without third-party assessment, provided they meet all relevant EU requirements.",
      },
      {
        question: "What is a Declaration of Conformity?",
        answer:
          "The EU Declaration of Conformity is a formal, signed document stating that the product meets all applicable EU directives and standards.",
      },
      {
        question: "How do you affix the CE mark?",
        answer:
          "The CE logo must be at least 5 mm high, with correct proportions, and placed visibly on the product, packaging, or accompanying documents.",
      },
      {
        question: "Does CE Certification expire?",
        answer:
          "CE marking itself has no expiry, but the Declaration of Conformity must be updated whenever product design or relevant legislation changes.",
      },
      {
        question: "How long must I keep the technical file?",
        answer:
          "Manufacturers must retain the technical file and Declaration of Conformity for at least 10 years after the last unit is placed on the EU market.",
      },
      {
        question: "When is an independent assessment needed?",
        answer:
          "If the applicable EU directive requires notified body involvement, a third-party assessment and body number must accompany the CE mark.",
      },
      {
        question: "How do I find a Notified Body?",
        answer:
          "Use the EU’s NANDO database to locate an authorized notified body for your specific product type.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "ISO Certification", "CE Certification"],
        rows: [
          [
            "Purpose",
            "Quality and process standards",
            "Product compliance with EU directives",
          ],
          [
            "Scope",
            "Organizations across all sectors",
            "Products sold in the EEA",
          ],
          [
            "Assessment",
            "External audit by certification body",
            "Self‑declaration or notified body assessment",
          ],
          [
            "Voluntary vs Mandatory",
            "Voluntary",
            "Mandatory for regulated product categories",
          ],
        ],
      },
      timelineFees: [],
    },
  },

  "wpc-certification-compliance": {
    overview: {
      heading: "WPC Certification: Mandatory Wireless Compliance in India",
      paragraphs: [
        "To operate a wireless device business in India, securing WPC certification is mandatory. The Wireless Planning and Coordination (WPC) Wing under the DoT issues Equipment Type Approval (ETA) and import licenses to ensure all RF devices comply with national frequency standards.",
        "DoStartup™ assists manufacturers and importers with WPC licenses for Bluetooth, Wi‑Fi, and other wireless devices—handling Saral Sanchar portal filings, RF testing, technical documentation, and post‑compliance coordination.",
        "With regional offices in New Delhi, Mumbai, Chennai, Kolkata, and Guwahati, the WPC Wing manages spectrum allocation, frequency testing, and certification for legal marketing of wireless products in India.",
      ],
    },

    features: [
      {
        icon: "📶",
        title: "Device Compatibility",
        description:
          "Ensures your wireless products operate on approved Indian frequency bands without interference.",
      },
      {
        icon: "🔒",
        title: "National Security Compliance",
        description:
          "Regulates RF devices to prevent unauthorized use and safeguard public safety.",
      },
      {
        icon: "⚙️",
        title: "Frequency Management",
        description:
          "Prevents signal conflicts by enforcing strict band usage per device type.",
      },
      {
        icon: "🏷️",
        title: "Market Access",
        description:
          "Mandatory WPC ETA certification or import license to legally sell wireless devices in India.",
      },
    ],

    benefits: [
      {
        title: "Seamless Import Licensing",
        description:
          "Obtain WPC import authorization for Bluetooth, Wi‑Fi, and other RF devices through a single portal.",
      },
      {
        title: "Equipment Type Approval",
        description:
          "Secure ETA certification to demonstrate compliance with Indian RF regulations.",
      },
      {
        title: "Streamlined Testing",
        description:
          "Use ISO/IEC 17025 lab reports to waive redundant in‑country testing post‑2021.",
      },
      {
        title: "Regulatory Expertise",
        description:
          "DoStartup™ coordinates with designated Indian representatives for foreign applicants.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Portal Registration",
          desc: "Register on Saral Sanchar portal to generate your WPC Import ID.",
        },
        {
          title: "ETA Application",
          desc: "Submit self‑declaration and check device exemption status with Import ID.",
        },
        {
          title: "RF Test Report",
          desc: "Upload lab‑accredited RF test results detailing frequency, bandwidth, and sweep specs.",
        },
        {
          title: "Document Submission",
          desc: "Provide technical datasheet, IEC code, authorization letters, and mandatory documents.",
        },
        {
          title: "Fee Payment",
          desc: "Pay WPC fees online via card, UPI, or digital wallets.",
        },
        {
          title: "Certificate Issuance",
          desc: "Receive the WPC ETA certificate permitting legal import and sale.",
        },
      ],
      violations: [
        "Device technical specifications",
        "Authorized signatory ID & address proof",
        "Company registration & GST certificates",
        "RF test report from accredited lab",
        "Authorization letter for AIR (foreign applicants)",
        "Import‑Export Code (IEC)",
        "Purchase order or invoice",
        "ASTM/EN/RoHS/CE compliance reports",
      ],
      consequences: [
        "Maintain records of approved frequency bands",
        "Submit periodic updates to WPC",
        "Notify WPC of any device modifications",
        "Renew ETA or import license as needed",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility for WPC Import License",
        items: [
          "Manufacturers or importers of Bluetooth, Wi‑Fi, and other RF devices",
          "Foreign companies must appoint an Authorized Indian Representative (AIR)",
          "Submit RF test reports from ISO/IEC 17025 labs to waive in‑India retesting",
          "Devices must operate within India’s delicensed frequency bands",
          "Maintain a complete technical data sheet for authority review",
        ],
      },
    ],

    services: [
      {
        title: "Non‑Network License",
        desc: "Import, dealer possession, and non‑dealer possession licenses for non‑network service providers.",
      },
      {
        title: "Network License",
        desc: "ISP, experimental, and telecom provider licenses for mobile, DTH, and data services.",
      },
      {
        title: "WPC ETA Certification",
        desc: "Equipment Type Approval for devices using unlicensed bands (e.g., Bluetooth, Wi‑Fi).",
      },
    ],

    faqs: [
      {
        question: "What are radio frequency bands?",
        answer:
          "Specific frequency ranges allocated for wireless signal transmission to avoid interference.",
      },
      {
        question: "What is WPC Certification?",
        answer:
          "Mandatory approval from the WPC Wing to import or sell wireless devices in India.",
      },
      {
        question: "Who issues WPC certificates?",
        answer:
          "The Wireless Planning & Coordination Wing under the Department of Telecommunications.",
      },
      {
        question: "Can foreign companies apply?",
        answer:
          "Yes, through a designated Authorized Indian Representative (AIR).",
      },
      {
        question: "What is WPC ETA?",
        answer:
          "Equipment Type Approval certificate for compliance with Indian RF regulations.",
      },
      {
        question: "Is ISO lab testing accepted?",
        answer:
          "Yes—reports from ISO/IEC 17025 labs eliminate the need for in‑country retesting post‑2021.",
      },
      {
        question: "What is an Import ID?",
        answer:
          "A unique identifier generated upon Saral Sanchar portal registration for your application.",
      },
      {
        question: "How long is WPC certification valid?",
        answer:
          "Typically aligns with the product lifecycle; renew when significant modifications occur.",
      },
      {
        question: "Who needs a WPC license?",
        answer:
          "All manufacturers and importers of RF or wireless devices in India.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },

  "peso-certification-compliance": {
    overview: {
      heading: "PESO Certification: A Simplified Guide",
      paragraphs: [
        "PESO Certification is mandatory in India for businesses handling hazardous materials—explosives, compressed gases, petroleum, and flammable substances—under the Explosives Act (1884) and Petroleum Act (1934).",
        "The Petroleum and Explosives Safety Organization (PESO) Wing issues licenses and Equipment Type Approval (ETA) to ensure safety standards for equipment, storage, and processes in industries like oil & gas, manufacturing, logistics, and more.",
        "DoStartup™ guides you through the PESO certification process—application, technical review, factory audits, and post‑certification support—for seamless compliance and operational continuity.",
      ],
    },

    features: [
      {
        icon: "📅",
        title: "Validity & Renewal",
        description:
          "Certificates are valid for 3 years with an online renewal process requiring updated documentation.",
      },
      {
        icon: "🔒",
        title: "Scope of Coverage",
        description:
          "Applies to explosives, gas cylinders, petroleum pipelines, flameproof equipment, fireworks, and more.",
      },
      {
        icon: "🌐",
        title: "Global Alignment",
        description:
          "Recognizes ATEX/IECEx test reports for imported machinery, simplifying approvals.",
      },
      {
        icon: "🔍",
        title: "Random Audits",
        description:
          "PESO conducts unannounced inspections to ensure ongoing compliance with safety protocols.",
      },
    ],

    benefits: [
      {
        title: "Legal Compliance",
        description:
          "Avoid fines, shutdowns, or legal disputes by adhering to the Explosives and Petroleum Acts.",
      },
      {
        title: "Operational Safety",
        description:
          "Standardized protocols minimize risks of explosions, leaks, and workplace accidents.",
      },
      {
        title: "Market Trust",
        description:
          "Certification enhances credibility, unlocking government tenders and high‑value contracts.",
      },
      {
        title: "Environmental Protection",
        description:
          "Ensures eco‑friendly handling, reducing spills, emissions, and environmental hazards.",
      },
      {
        title: "Employee Welfare",
        description:
          "Mandates training and emergency preparedness, prioritizing worker safety.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Application Preparation",
          desc: "Fill the PESO form and compile test reports, technical drawings, and business proofs.",
        },
        {
          title: "Online Submission",
          desc: "Apply via the PESO portal with commercial details—client list, sales data, and facility records.",
        },
        {
          title: "Fee Payment",
          desc: "Pay license fees according to category (₹10,000–₹50,000 for manufacturing).",
        },
        {
          title: "Technical Review",
          desc: "PESO experts verify compliance and may request clarifications on your submission.",
        },
        {
          title: "Factory Audit",
          desc: "Inspectors assess high‑risk facilities (e.g., pressure vessels) for infrastructure and safety systems.",
        },
        {
          title: "Certificate Issuance",
          desc: "Receive your CCOE PESO Certificate and AIR license within 30–60 days.",
        },
      ],
      violations: [
        "Duly filled application form",
        "IECEx or ATEX test reports (≤2 years old)",
        "Product drawings and technical specifications",
        "Trade license, ISO certificates, GST registration",
        "Production unit video and safety audit reports",
        "Authorization letter for AIR (foreign applicants)",
        "Import‑Export Code (IEC) and purchase invoices",
      ],
      consequences: [
        "Maintain approved safety protocols and frequency of audits",
        "Submit modifications or updates to PESO promptly",
        "Renew certificates every 3 years to avoid lapses",
        "Comply with random inspection requests to retain certification",
      ],
    },

    eligibility: [
      {
        heading: "Entities Requiring PESO Certification",
        items: [
          "Manufacturers of explosives, fireworks, LPG regulators, oxygen cylinders, and pressure vessels",
          "Storage facilities for petroleum, ammonium nitrate, CNG, LPG, or carbide",
          "Transporters moving hazardous materials by road, rail, or sea",
          "Retailers such as petrol pumps, gas agencies, and fireworks shops",
          "Industrial units like gas bottling plants, CNG stations, and petroleum pipelines",
        ],
      },
    ],

    services: [
      {
        title: "Manufacturing & Storage",
        desc: "Licenses for explosives, petroleum products, LPG cylinders, oxygen plants, and ammonium nitrate storage.",
      },
      {
        title: "Transportation",
        desc: "Road, rail, and marine transport licenses for hazardous materials.",
      },
      {
        title: "Import/Export",
        desc: "ETA certificates and import licenses for compressed gases, explosive materials, and carbide.",
      },
      {
        title: "Retail Operations",
        desc: "Licenses for petrol pumps, gas distribution agencies, and fireworks retail outlets.",
      },
      {
        title: "Industrial Use",
        desc: "Approvals for pipeline purging, cylinder testing stations, and refinery maintenance.",
      },
    ],

    faqs: [
      {
        question: "What is the validity of a PESO certificate?",
        answer:
          "PESO certificates are valid for 3 years and must be renewed before expiry to avoid penalties.",
      },
      {
        question: "Is PESO certification mandatory for oxygen plants?",
        answer:
          "Yes—manufacturing, storing, or distributing compressed gases like oxygen requires PESO certification.",
      },
      {
        question: "What is PESO?",
        answer:
          "The Petroleum and Explosives Safety Organization under the DoT regulates the safe handling of explosives, petroleum, and gases.",
      },
      {
        question: "How long does PESO renewal take?",
        answer:
          "Renewals typically process within 15–30 days if all documents are submitted correctly.",
      },
      {
        question: "Do I need a license to store LPG cylinders?",
        answer:
          "Yes—storage units for LPG, CNG, and other compressed gases must hold a PESO license.",
      },
      {
        question: "Who needs PESO certification?",
        answer:
          "Manufacturers, storage units, transporters, and retailers handling hazardous materials in India.",
      },
      {
        question: "How to apply for a cylinder testing station approval?",
        answer:
          "Submit a detailed application with facility layouts, safety protocols, and technical certifications to PESO.",
      },
      {
        question: "Can foreign companies apply directly?",
        answer:
          "Foreign firms must appoint an Authorized Indian Representative (AIR) to file on their behalf.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },

  "tec-certification-compliance": {
    overview: {
      heading:
        "TEC Certification: Mandatory Telecom Equipment Approval in India",
      paragraphs: [
        "The Telecommunication Engineering Centre (TEC) under the Department of Telecommunications (DoT) mandates certification for telecom equipment before sale, import, or usage in India.",
        "TEC certification ensures compliance with national safety and quality standards. The process includes Mandatory Testing and Certification of Telecom Equipment (MTCTE) and CSC certification schemes.",
        "DoStartup™ simplifies TEC registration through expert assistance in document preparation, Conformity Assessment Body (CAB) coordination, variant submission, and fee management.",
      ],
    },

    features: [
      {
        icon: "✅",
        title: "Standards Compliance",
        description:
          "Assures telecom devices meet Indian and global safety benchmarks.",
      },
      {
        icon: "🔒",
        title: "Network Protection",
        description:
          "Prevents equipment-induced disruptions in telecom infrastructure.",
      },
      {
        icon: "📈",
        title: "Market Legality",
        description:
          "Facilitates lawful sale, import, and manufacturing under the Indian Telegraph Rules, 2017.",
      },
      {
        icon: "🤝",
        title: "Customer Trust",
        description: "Boosts product reliability and consumer confidence.",
      },
    ],

    benefits: [
      {
        title: "Regulatory Compliance",
        description:
          "Meets Essential Requirements (ER) for safe and lawful operation in Indian networks.",
      },
      {
        title: "Brand Credibility",
        description:
          "Strengthens stakeholder confidence through verified safety and performance.",
      },
      {
        title: "Fair Competition",
        description:
          "Ensures a level playing field for all market participants via uniform compliance norms.",
      },
      {
        title: "Wider Market Access",
        description:
          "Enables legal entry and distribution across Indian telecom markets.",
      },
    ],

    documents: {
      steps: [
        {
          title: "File Application",
          desc: "Submit your TEC application online or offline. No edits allowed post-submission.",
        },
        {
          title: "Document Scrutiny",
          desc: "TEC verifies all documents; discrepancies must be corrected.",
        },
        {
          title: "Provide Variant Details",
          desc: "Include model information, datasheets, BoM, and manufacturing location.",
        },
        {
          title: "Pay Fees",
          desc: "Administrative and evaluation fees depend on product complexity.",
        },
        {
          title: "Select CAB",
          desc: "Choose a TEC-designated Conformity Assessment Body for lab testing.",
        },
        {
          title: "Testing & Approval",
          desc: "CAB conducts product testing; TEC issues certificate upon approval.",
        },
      ],
      violations: [
        "Application form with technical details",
        "Test reports from TEC-accredited labs",
        "Compliance declarations and authorization letters",
        "BoM, manuals, circuit/PCB diagrams",
        "Company registration proof",
        "ISO 9001 certification",
        "Trademark registration (if applicable)",
        "Authorized Indian Representative (AIR) documents for foreign OEMs",
      ],
      consequences: [
        "Fines and legal penalties for non-compliance",
        "Loss of license or market access",
        "Heightened regulatory scrutiny",
        "Product recall or blacklisting",
      ],
    },

    eligibility: [
      {
        heading: "Who Must Apply for TEC Certification?",
        items: [
          "Indian telecom equipment manufacturers",
          "Foreign OEMs via an Authorized Indian Representative (AIR)",
          "Importers and dealers of notified telecom devices",
          "Entities using telecom devices under Indian Telegraph Rules, 2017",
        ],
      },
    ],

    services: [
      {
        title: "Type Approval",
        desc: "Certification for compliance with Generic Requirements (GR) related to telecom product safety.",
      },
      {
        title: "Interface Approval",
        desc: "Approval for interoperability with Indian telecom networks as per Interface Requirements (IR).",
      },
      {
        title: "Technology Approval",
        desc: "Issued for prototypes or emerging technologies like C-DoT innovations meeting GR standards.",
      },
    ],

    faqs: [
      {
        question: "What is TEC?",
        answer:
          "TEC is the Telecommunication Engineering Centre under DoT that regulates telecom equipment standards in India.",
      },
      {
        question: "Is TEC certification mandatory?",
        answer:
          "Yes, for all notified telecom products under the Indian Telegraph Rules, 2017.",
      },
      {
        question: "Who can issue TEC certificates?",
        answer:
          "Only TEC-authorized Conformity Assessment Bodies (CABs) can conduct testing. TEC grants final certification.",
      },
      {
        question: "Where is testing done?",
        answer:
          "In TEC-accredited labs or CABs, including those in MRA partner countries for imports.",
      },
      {
        question: "How long does TEC certification take?",
        answer:
          "Typically 4–8 weeks depending on equipment complexity and CAB availability.",
      },
      {
        question: "What is the TEC Certificate Number?",
        answer:
          "A unique identifier issued post-approval, valid for five years and must be displayed on products.",
      },
      {
        question: "What are the benefits of TEC certification?",
        answer:
          "It ensures legal access to the Indian market, boosts customer trust, and avoids network issues.",
      },
      {
        question: "Is TEC certification needed for CSC products?",
        answer:
          "Yes, Certification Scheme for Convergence (CSC) is covered under TEC for specific products like IoT gateways.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },

  "msme-registration-india": {
    overview: {
      heading:
        "MSME Registration in India: Udyam Compliance for Small Businesses",
      paragraphs: [
        "MSME (Micro, Small, and Medium Enterprises) registration is a government-backed initiative that provides businesses with access to tax benefits, financial assistance, and easier credit facilities. It is essential for SSIs and enterprises aiming for growth and support.",
        "The process has transitioned to Udyam Registration, a simplified online system launched by the Ministry of MSME. Eligible businesses can obtain a permanent identity number via the Udyam portal.",
        "Do Startup offers fast and expert-guided MSME registration services to help businesses unlock government incentives with minimal effort.",
      ],
    },

    features: [
      {
        icon: "💰",
        title: "Affordable Loan Access",
        description:
          "MSMEs can access credit at interest rates as low as 1%–1.5%.",
      },
      {
        icon: "📜",
        title: "Rebates & Subsidies",
        description:
          "Enjoy tax benefits, scheme subsidies, and barcode registration support.",
      },
      {
        icon: "⚡",
        title: "Electricity Discounts",
        description: "Reduced power bills for registered MSMEs.",
      },
      {
        icon: "📈",
        title: "Priority Sector Lending",
        description: "Easier bank loans with priority under RBI lending norms.",
      },
    ],

    benefits: [
      {
        title: "Tax Relief & Subsidies",
        description:
          "Includes MAT credit extension, ISO fee discounts, and GST input credits.",
      },
      {
        title: "Government Tender Access",
        description:
          "Bid on public sector contracts without security deposits.",
      },
      {
        title: "Ease of Doing Business",
        description:
          "Online Udyam portal makes registration fast, paperless, and accessible.",
      },
      {
        title: "Collateral-Free Loans",
        description:
          "MSME-registered businesses qualify for government-backed unsecured loans.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Visit Udyam Portal",
          desc: "Go to the official Udyam Registration website.",
        },
        {
          title: "Enter Aadhaar Details",
          desc: "Input Aadhaar for validation and identity verification.",
        },
        {
          title: "Add PAN & Organisation Info",
          desc: "Submit business type, name, and tax identification details.",
        },
        {
          title: "Fill Investment & Turnover Data",
          desc: "Provide relevant financial metrics and business activities.",
        },
        {
          title: "Receive Certificate",
          desc: "Get the MSME/Udyam Certificate via email after successful submission.",
        },
      ],
      violations: [
        "Aadhaar Number",
        "PAN Card",
        "GSTIN (for companies/LLPs)",
        "Business address and bank details",
        "Business activity description and NIC Code",
        "Turnover and investment figures",
        "Partnership deed or incorporation documents",
        "Invoices and machinery purchase bills",
      ],
      consequences: [
        "MSME Form 1 to be filed bi-annually with MCA",
        "Annual ROC submission for outstanding vendor payments",
        "Penalty if payment is delayed beyond 45 days to MSMEs",
      ],
    },

    eligibility: [
      {
        heading: "Who Can Register for MSME?",
        items: [
          "Sole Proprietorships",
          "HUFs and Partnership Firms",
          "LLPs and One-Person Companies",
          "Cooperative Societies and Associations",
          "Any business meeting the investment & turnover criteria",
        ],
      },
    ],

    services: [
      {
        title: "MSME Udyam Registration",
        desc: "Full guidance on the new Aadhaar-based online registration process.",
      },
      {
        title: "Document Preparation",
        desc: "Assistance with collating PAN, Aadhaar, GST, and business proofs.",
      },
      {
        title: "Post-Registration Compliance",
        desc: "Support with Form 1, outstanding payment returns, and updates.",
      },
    ],

    faqs: [
      {
        question: "Is MSME registration now Udyam registration?",
        answer:
          "Yes, Udyam registration has replaced the older MSME registration process.",
      },
      {
        question: "Is Aadhaar mandatory for MSME registration?",
        answer: "Yes, Aadhaar is required to register under the Udyam portal.",
      },
      {
        question: "Can startups register under MSME?",
        answer:
          "Yes, startups can apply if they fulfill the classification criteria.",
      },
      {
        question: "What is the validity of Udyam registration?",
        answer: "It is valid for a lifetime unless canceled or updated.",
      },
      {
        question: "Are traders eligible for MSME?",
        answer:
          "Currently, traders are excluded from MSME registration benefits.",
      },
      {
        question: "What are the MSME registration charges?",
        answer:
          "Do Startup offers cost-effective registration with expert support.",
      },
      {
        question: "Do I need separate registrations for multiple units?",
        answer:
          "Yes, separate registrations are required for each business unit.",
      },
      {
        question: "What documents are required for MSME registration?",
        answer:
          "Aadhaar, PAN, GSTIN, investment/turnover details, and activity description.",
      },
      {
        question: "Who can apply for MSME registration?",
        answer: "Any small business entity that meets eligibility criteria.",
      },
      {
        question: "Is MSME registration mandatory?",
        answer:
          "No, but it is highly beneficial due to the multiple government incentives offered.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "MSME Registration", "Udyam Registration"],
        rows: [
          ["Documents", "Aadhaar & PAN", "Aadhaar only"],
          ["Portal Integration", "Not integrated", "Fully integrated"],
          ["Form", "Basic info", "Detailed info"],
          [
            "Multiple Registrations",
            "Possible",
            "One Aadhaar = One Registration",
          ],
        ],
      },
      timelineFees: [],
    },
  },

  "iec-code-registration": {
    overview: {
      heading: "IEC Code Registration – Unlock Global Trade Opportunities",
      paragraphs: [
        "To legally import or export goods and services from India, Import Export Code (IEC) registration is essential. Issued by the Directorate General of Foreign Trade (DGFT), the IEC is a unique 10-digit number under the Ministry of Commerce and Industry.",
        "With lifetime validity, the IEC simplifies customs clearance, enables foreign currency transactions, and ensures compliance with trade regulations. Do Startup offers end-to-end assistance in obtaining your IEC license quickly and affordably.",
        "Whether you are an individual entrepreneur or a growing company, IEC registration is your gateway to explore and expand in international markets.",
      ],
    },

    features: [
      {
        icon: "🌍",
        title: "Global Market Access",
        description:
          "IEC enables Indian businesses to legally trade goods and services across international borders.",
      },
      {
        icon: "🔒",
        title: "Lifetime Validity",
        description:
          "IEC is issued once and remains valid for a lifetime—no renewal required.",
      },
      {
        icon: "💳",
        title: "Simplified Banking",
        description:
          "Facilitates international money transfers and foreign exchange dealings through banks.",
      },
      {
        icon: "📜",
        title: "Legal Trade Authorization",
        description:
          "Acts as official approval from the Government of India to conduct import/export operations.",
      },
    ],

    benefits: [
      {
        title: "No Annual Compliance",
        description:
          "IEC has no requirement for filing returns or renewals, reducing operational burden.",
      },
      {
        title: "Government Incentives",
        description:
          "Eligible businesses can avail DGFT and customs schemes, including export benefits and GST refunds.",
      },
      {
        title: "Improved Business Credibility",
        description:
          "A valid IEC enhances your brand’s reliability and trust among global buyers and partners.",
      },
      {
        title: "Fast Processing",
        description:
          "IEC applications are typically approved within 10–15 working days by DGFT.",
      },
    ],

    documents: {
      steps: [
        {
          title: "Prepare Required Documents",
          desc: "Collect PAN, Aadhaar, address proof, bank certificate, and digital signature.",
        },
        {
          title: "Register on DGFT Portal",
          desc: "Create an account with valid mobile number and email ID to begin the process.",
        },
        {
          title: "Fill IEC Application Form",
          desc: "Enter business details and submit Form ANF-2A online.",
        },
        {
          title: "Upload Documents & Pay Fees",
          desc: "Upload scanned documents and pay the prescribed fee via DGFT portal.",
        },
        {
          title: "Submit & Track Application",
          desc: "Track your application status and receive the IEC certificate via email once approved.",
        },
      ],
      violations: [
        "Recent passport-sized photograph (3x3 cm)",
        "PAN card of individual/business",
        "Aadhaar card or voter ID/passport/driver’s license",
        "Cancelled cheque of current/savings account",
        "Business address proof: lease deed, utility bill, etc.",
        "Digital Signature Certificate (DSC)",
        "Self-addressed envelope for postal delivery",
        "Valid email ID and mobile number",
      ],
      consequences: [
        "Annual IEC update via DGFT portal",
        "File GST returns for import/export activities",
        "Pay customs duties to avoid delays or penalties",
        "Maintain transaction records for audits",
        "Report foreign currency transactions to bank",
        "Respond to DGFT queries and notices promptly",
        "Stay updated with latest DGFT trade notifications",
      ],
    },

    eligibility: [
      {
        heading: "Eligibility for IEC Registration",
        items: [
          "Individuals undertaking import/export (business registration optional)",
          "Sole Proprietorship, Partnership Firm, LLP, Company, HUF",
          "PAN card (individual or business)",
          "Functional bank account in applicant's name",
          "Authorized signatory must apply on behalf of a registered business",
        ],
      },
    ],

    services: [
      {
        title: "Expert Consultation",
        desc: "Our consultants assess your eligibility and guide you through the registration process.",
      },
      {
        title: "Document Preparation",
        desc: "We help ensure your application has 100% accurate and complete documentation.",
      },
      {
        title: "Application Filing",
        desc: "We file your IEC application with DGFT and manage all procedural requirements.",
      },
      {
        title: "Post-Approval Support",
        desc: "We assist with compliance, trade practices, and future IEC-related queries.",
      },
    ],

    faqs: [
      {
        question: "What is IEC code?",
        answer:
          "A unique 10-digit code issued by DGFT, mandatory for anyone conducting international trade.",
      },
      {
        question: "Why is IEC registration necessary?",
        answer:
          "It legitimizes cross-border trade and is required for customs clearance and foreign transactions.",
      },
      {
        question:
          "I am a textile manufacturer in Kanpur. What documents are needed?",
        answer:
          "You’ll need PAN, Aadhaar, address proof, bank certificate, and business proof like registration certificate or partnership deed.",
      },
      {
        question: "Can I cancel my IEC registration voluntarily?",
        answer:
          "Yes, you can cancel your IEC registration via the DGFT portal.",
      },
      {
        question: "Is DSC mandatory for IEC application?",
        answer:
          "Yes, a Digital Signature Certificate is generally required for filing the IEC form online.",
      },
      {
        question: "How long does it take to obtain IEC registration?",
        answer:
          "Typically, it takes 10 to 15 working days if all documents are in order.",
      },
      {
        question: "Can I apply through Do Startup?",
        answer:
          "Absolutely! Do Startup offers full support from application to final IEC certificate delivery.",
      },
    ],

    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "Details"],
        rows: [
          [
            "What is the IEC Code?",
            "A 10-digit identification number issued by DGFT for foreign trade.",
          ],
          [
            "Who Needs IEC?",
            "Individuals and entities involved in cross-border trade.",
          ],
          [
            "Issuing Authority",
            "Directorate General of Foreign Trade (DGFT), Govt. of India.",
          ],
          ["Validity", "Lifetime validity, no renewal needed."],
          ["Application Process", "Online through DGFT portal."],
          [
            "Documents Required",
            "PAN, Aadhaar, address proof, bank details, photos.",
          ],
          [
            "Application Cost",
            "As per DGFT norms, plus consultant fee if applicable.",
          ],
          ["Processing Time", "Around 10–15 days."],
          [
            "Post-Registration Compliance",
            "Annual updates, GST returns, record keeping, customs duties.",
          ],
          [
            "Benefits",
            "Global market access, tax incentives, simplified trade transactions.",
          ],
        ],
      },
      timelineFees: [],
    },
  },

  "rera-registration": {
    overview: {
      heading: "RERA Registration – A Complete Overview",
      paragraphs: [
        "Are you a real estate developer, builder, promoter, or agent involved in commercial or residential projects? If yes, securing RERA Registration is mandatory for lawful operations under the Real Estate (Regulation and Development) Act, 2016.",
        "The RERA Act was introduced to tackle the long-standing issues in the real estate sector by introducing transparency, standardization, and accountability.",
        "RERA registration is carried out at the state level and is essential for both project registration and agent registration in the real estate sector.",
        "Whether you are selling, marketing, or developing a project, RERA registration empowers the concerned Authority to regulate your operations and safeguard the interests of homebuyers and investors.",
      ],
    },
    features: [
      {
        icon: "📄",
        title: "Mandatory Registration",
        description:
          "RERA registration is compulsory for developers and agents involved in projects exceeding 500 sq. meters or more than 8 units.",
      },
      {
        icon: "🔍",
        title: "Enhanced Transparency",
        description:
          "Ensures legal compliance, public disclosures, and trustworthy dealings in real estate transactions.",
      },
      {
        icon: "⚖️",
        title: "Legal Protection",
        description:
          "Provides legal remedies to buyers against defaulting developers or agents.",
      },
    ],
    benefits: [
      {
        title: "Timely Possession",
        description:
          "Developers are mandated to deliver possession on time, failing which strict penalties are levied.",
      },
      {
        title: "Reputation Boost",
        description:
          "Registration builds credibility and showcases commitment to regulatory compliance.",
      },
      {
        title: "Fraud Minimization",
        description:
          "RERA eliminates deceptive practices, increasing buyer confidence.",
      },
      {
        title: "Consumer Protection",
        description:
          "Buyers receive full protection against defaults, misrepresentation, and delays.",
      },
    ],
    documents: {
      steps: [
        {
          title: "File the Application",
          desc: "Submit Form A online with respective State RERA authority.",
        },
        {
          title: "Attach Required Documents",
          desc: "Submit project and promoter/agent documents including layout, agreements, and certifications.",
        },
        {
          title: "Pay Applicable Fees",
          desc: "Deposit the fees as per the rules notified by the State RERA authority.",
        },
        {
          title: "Verification by Authority",
          desc: "The authority scrutinizes the application and attached documents.",
        },
        {
          title: "Receive Registration Certificate",
          desc: "Once approved, a RERA registration number is issued within 30 days.",
        },
      ],
      violations: [
        "Penalty under Section 3 for non-registration of project.",
        "Up to ₹10,000 per day or 5% of project cost for agent default.",
        "Imprisonment up to 1 year for fraudulent real estate practices.",
        "Cancellation of registration for non-compliance or misrepresentation.",
        "Blacklisting of developers or agents violating provisions.",
      ],
      consequences: [
        "Legal suits by buyers for delay or fraud.",
        "Financial penalties and loss of registration status.",
        "Disqualification from future real estate projects.",
        "Mandatory refund to buyers with interest.",
        "Permanent barring from real estate activities by authority.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for RERA Project Registration",
        items: [
          "Real estate projects over 500 sq. meters or more than 8 units.",
          "Projects without a completion certificate.",
          "Construction or modification of buildings for sale.",
          "Land development with intention to sell.",
          "Government authorities or housing societies involved in construction.",
          "Holders of power of attorney developing and selling property.",
        ],
      },
      {
        heading: "Who Can Apply for RERA Agent Registration",
        items: [
          "Individuals over 18/19 years (varies by state).",
          "Cleared Real Estate License Examination (if applicable).",
          "Completed pre-licensing education/training.",
          "Compliance with RERA marketing and ethical codes.",
        ],
      },
      {
        heading: "Documents Required for RERA Registration",
        items: [
          "Certificate of Incorporation, PAN, TAN, MOA, AOA (for promoters).",
          "Project layout, sanctioned plans, and development details.",
          "Draft sale agreements and allotment letters.",
          "Carpet/garage area details and contractors' info.",
          "Promoter’s affidavit/declaration.",
          "Agent firm PAN, address proof, and bylaws.",
          "Real estate license qualification proof (if required).",
          "Authorized signatory details and project lists.",
        ],
      },
    ],
    services: [
      {
        title: "Expert Legal Support",
        desc: "RERA consultants ensure complete compliance with state-specific requirements.",
      },
      {
        title: "200+ Real Estate Experts",
        desc: "A team of industry professionals for document and process management.",
      },
      {
        title: "End-to-End RERA Filing",
        desc: "From application to certificate issuance – we manage it all.",
      },
      {
        title: "Document Assistance",
        desc: "End-to-end support for document preparation and review.",
      },
      {
        title: "Strong Government Liaison",
        desc: "Connections with RERA authorities ensure fast processing.",
      },
      {
        title: "Dispute Resolution",
        desc: "Legal help for RERA-related buyer or promoter disputes.",
      },
      {
        title: "Renewal Services",
        desc: "On-time renewals to avoid penalties or revocation.",
      },
      {
        title: "24/7 Customer Support",
        desc: "Always-on helpdesk for real estate regulatory questions.",
      },
    ],
    faqs: [
      {
        question: "What is RERA?",
        answer:
          "RERA is the Real Estate (Regulation and Development) Act, 2016 to regulate the real estate sector in India.",
      },
      {
        question: "Is RERA registration mandatory?",
        answer: "Yes, for eligible promoters and real estate agents.",
      },
      {
        question: "How long is RERA registration valid?",
        answer: "For the duration of the project or as per state regulations.",
      },
      {
        question: "Can RERA registration be revoked?",
        answer: "Yes, for non-compliance, misrepresentation, or fraud.",
      },
      {
        question: "Is registration required for ongoing projects?",
        answer: "Yes, if no completion certificate has been obtained.",
      },
      {
        question: "Can agents operate without RERA registration?",
        answer: "No, dealing in unregistered projects is prohibited.",
      },
    ],
    types: {
      cards: [
        {
          title: "Delayed Possession",
          shortText: "Avoid delayed handover.",
          backText:
            "Register under RERA to guarantee timely delivery to buyers.",
        },
        {
          title: "Fraudulent Agents",
          shortText: "Verify agent credentials.",
          backText: "Only deal with RERA-registered agents to avoid scams.",
        },
        {
          title: "Dispute Risk",
          shortText: "Avoid legal conflicts.",
          backText:
            "RERA compliance ensures structured redressal for disputes.",
        },
        {
          title: "Illegal Projects",
          shortText: "Ensure legality.",
          backText:
            "Only RERA-approved projects are allowed to advertise and sell.",
        },
        {
          title: "Lack of Transparency",
          shortText: "Ensure full disclosure.",
          backText:
            "Registered promoters must update project details regularly.",
        },
        {
          title: "Loss of Investment",
          shortText: "Safeguard money.",
          backText: "Buyers get compensation if promoters default under RERA.",
        },
      ],
      roleBenefits: [
        "Improves market credibility of developers and agents.",
        "Builds buyer confidence and trust.",
        "Helps avoid penalties and legal action.",
        "Simplifies access to real estate financing.",
        "Ensures compliance with state rules and regulations.",
      ],
      differenceTable: {
        columns: [
          "S. No.",
          "RERA Project Registration",
          "RERA Agent Registration",
        ],
        rows: [
          [
            "1",
            "Registering real estate projects",
            "Registering real estate agents/brokers",
          ],
          [
            "2",
            "Ensures timely delivery and buyer protection",
            "Promotes ethical dealings and compliance",
          ],
          [
            "3",
            "Applicable to developers and promoters",
            "Applicable to individuals and firms",
          ],
          [
            "4",
            "Requires project, promoter, and legal documents",
            "Requires identity, company, and license proof",
          ],
          [
            "5",
            "Focus on project development compliance",
            "Focus on transaction records and marketing ethics",
          ],
          [
            "6",
            "Mandatory for all new/ongoing large projects",
            "Mandatory for all intermediaries in property sales",
          ],
        ],
      },
      timelineFees: [
        "Approval timeline: within 30 days of application.",
        "Entire process duration: 30–45 days.",
        "Fees vary by state and project type.",
        "Additional charges may apply for document certification.",
        "No central fixed fee – state rules prevail.",
      ],
    },
  },

  "nsic-registration": {
    overview: {
      heading: "NSIC Registration in India – Everything You Need to Know",
      paragraphs: [
        "NSIC Registration is essential for MSMEs seeking access to government tenders, financial schemes, discounted raw materials, and technical support.",
        "The National Small Industries Corporation (NSIC), a Mini Ratna PSU under the Ministry of MSME, was established in 1955 and is ISO 9001:2015 certified. It plays a crucial role in empowering Micro, Small, and Medium Enterprises through schemes like the Single Point Registration Scheme (SPRS).",
        "NSIC promotes MSME participation in public procurement and provides support through initiatives in marketing, finance, and technology access.",
        "Get hassle-free NSIC Certificate support from Do Startup – your reliable compliance partner.",
      ],
    },
    features: [
      {
        icon: "📜",
        title: "Single Point Registration Scheme (SPRS)",
        description:
          "Enables MSMEs to participate in government procurement through a streamlined registration mechanism.",
      },
      {
        icon: "🏛️",
        title: "Marketing Assistance",
        description:
          "Support for participating in trade fairs, exhibitions, and global buyer-seller meets.",
      },
      {
        icon: "🏦",
        title: "Bank Credit Facilitation",
        description:
          "Helps MSMEs access financing from banks and financial institutions with reduced interest.",
      },
    ],
    benefits: [
      {
        title: "Tender Benefits",
        description:
          "Exemption from tender fee and Earnest Money Deposit (EMD) for NSIC-registered units.",
      },
      {
        title: "Mandatory Procurement",
        description:
          "25% of government purchases are reserved for MSEs, encouraging participation.",
      },
      {
        title: "Financial Assistance",
        description:
          "Easy and low-interest financing from banks and NBFCs for NSIC-certified MSMEs.",
      },
      {
        title: "Increased Visibility",
        description:
          "Opportunity to showcase products in domestic and international exhibitions.",
      },
      {
        title: "Raw Material Access",
        description:
          "Priority supply and discounted rates for essential inputs.",
      },
      {
        title: "Technology Upgradation",
        description:
          "Access to machinery and tools through NSIC leasing or procurement schemes.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Portal Login",
          desc: "Visit the official NSIC portal and login with Udyam credentials.",
        },
        {
          title: "Application Filing",
          desc: "Fill out the NSIC online registration form accurately.",
        },
        {
          title: "Document Upload",
          desc: "Upload all required documents based on your business structure.",
        },
        {
          title: "Fee Payment",
          desc: "Pay the government fee based on turnover and business type.",
        },
        {
          title: "Verification",
          desc: "Authorities verify your documents and conduct inspection if needed.",
        },
        {
          title: "Certificate Issuance",
          desc: "Get your NSIC Registration Certificate valid for 2 years.",
        },
      ],
      violations: [
        "Application rejection due to document discrepancy.",
        "Non-renewal within expiry window leads to suspension.",
        "Failure to maintain quality or update information may invite revocation.",
        "Non-compliance with MSME or NSIC norms can result in blacklisting.",
      ],
      consequences: [
        "Loss of NSIC procurement privileges.",
        "Suspension from government tender eligibility.",
        "Revocation of benefits like EMD exemption or tax rebate.",
        "Financial penalties or restriction from future registration.",
      ],
    },
    eligibility: [
      {
        heading: "Who is Eligible for NSIC Registration?",
        items: [
          "Micro Enterprises with up to ₹25 lakh (manufacturing) or ₹10 lakh (services).",
          "Small Enterprises with up to ₹5 crore (manufacturing) or ₹2 crore (services).",
          "Businesses that completed one year of operations.",
          "Entities with Udyam Registration.",
          "New MSMEs can apply for provisional registration under SPRS.",
        ],
      },
      {
        heading: "Eligible Entity Types",
        items: [
          "Private and Public Limited Companies",
          "Proprietorship Firms",
          "Partnerships",
          "Industrial Cooperative Societies",
          "Hindu Undivided Families (HUFs)",
          "LLPs",
          "Registered Trusts",
        ],
      },
      {
        heading: "Documents Required for NSIC Registration",
        items: [
          "PAN Card",
          "Udyam Registration",
          "Audited Financial Statements (3 years)",
          "CA-certified operational report",
          "Ownership/rent proof of premises",
          "List of machinery and test equipment",
          "Banker’s report",
          "MOA, AOA, Partnership Deed, or LLP Agreement as applicable",
          "Board Resolution or Authorization Letter",
        ],
      },
    ],
    services: [
      {
        title: "Simplified NSIC Filing",
        desc: "End-to-end support from login to certificate issuance.",
      },
      {
        title: "5000+ Successful Registrations",
        desc: "Extensive MSME onboarding experience nationwide.",
      },
      {
        title: "Dedicated Expert Network",
        desc: "Access to 500+ legal and compliance professionals.",
      },
      {
        title: "Low-Cost Solutions",
        desc: "Affordable pricing with maximum value delivery.",
      },
      {
        title: "24/7 Support",
        desc: "Anytime access to compliance assistance across India.",
      },
      {
        title: "Renewal & Compliance Help",
        desc: "Stay updated and avoid penalties through our renewal service.",
      },
      {
        title: "PAN-India Coverage",
        desc: "Support available across all states and union territories.",
      },
      {
        title: "Dispute & Grievance Resolution",
        desc: "Resolve certificate issues via NSIC-authorized channels.",
      },
      {
        title: "Offline/Online Process Guidance",
        desc: "Support for both online and offline NSIC registration.",
      },
    ],
    faqs: [
      {
        question: "What is NSIC?",
        answer:
          "NSIC stands for National Small Industries Corporation, a PSU under the Ministry of MSME.",
      },
      {
        question: "Is Udyam registration necessary for NSIC?",
        answer: "Yes, Udyam Registration is mandatory for applying to NSIC.",
      },
      {
        question: "What is the validity of the NSIC Certificate?",
        answer:
          "The NSIC certificate is valid for 2 years and must be renewed on time.",
      },
      {
        question: "Can a startup apply for NSIC registration?",
        answer:
          "Yes, startups can apply for provisional registration under SPRS.",
      },
      {
        question: "What are the charges for NSIC Registration?",
        answer:
          "Fees vary by turnover and business type. Micro: ₹3,000+, Small: ₹5,000+ (excluding inspection/GST).",
      },
      {
        question: "Does NSIC registration help in getting loans?",
        answer:
          "Yes, it facilitates easier bank credit for MSMEs through tie-ups with banks and NBFCs.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incorrect Documentation",
          shortText: "Upload only accurate and updated paperwork.",
          backText: "Mismatched documents may delay approval.",
        },
        {
          title: "Wrong Turnover Category",
          shortText: "Choose micro or small correctly.",
          backText: "Misclassification affects fees and eligibility.",
        },
        {
          title: "Missing Udyam Registration",
          shortText: "Ensure Udyam registration before applying.",
          backText: "NSIC relies on Udyam verification.",
        },
        {
          title: "Expired Financials",
          shortText: "Submit latest audited reports.",
          backText: "Outdated statements lead to rejection.",
        },
        {
          title: "Lack of Plant Details",
          shortText: "Submit machinery and location proof.",
          backText: "Necessary for SPRS inspection.",
        },
        {
          title: "Late Renewal",
          shortText: "Apply for renewal on time.",
          backText: "Delays result in suspension.",
        },
      ],
      roleBenefits: [
        "Boosts credibility with government buyers.",
        "Qualifies for exclusive government tenders.",
        "Enables access to financial schemes.",
        "Exemption from bid and tender costs.",
        "Enhances brand image in the public sector.",
      ],
      differenceTable: {
        columns: ["Serial Number", "NSIC", "Udyam"],
        rows: [
          ["1", "Procurement registration", "Business identification"],
          [
            "2",
            "Allows govt. tender participation",
            "Mandatory MSME recognition",
          ],
          ["3", "Involves fee & inspection", "Free and self-declared"],
          ["4", "Valid for 2 years", "Lifetime validity unless updated"],
          [
            "5",
            "Detailed operational evaluation",
            "Based on investment & turnover",
          ],
        ],
      },
      timelineFees: [
        "Total processing time: 30–45 days.",
        "Application submission: 1–2 weeks.",
        "Verification & inspection: 1–3 weeks.",
        "Issuance of certificate: 3–5 working days.",
        "Fees start at ₹3,000 for micro units and ₹5,000 for small enterprises.",
        "Max fee capped at ₹1,00,000 (excluding taxes).",
      ],
    },
  },

  "apeda-registration": {
    overview: {
      heading: "APEDA Registration – A Complete Overview",
      paragraphs: [
        "Are you a farmer, grower, food manufacturer, processor, exporter, trader, or packer involved in the production or export of agricultural or processed food items from India? If yes, then obtaining APEDA registration is a critical step for you.",
        "The Agricultural & Processed Food Products Export Development Authority (APEDA) was set up by an Act of Parliament in 1985 to promote the export of scheduled products. To export them, businesses must register with APEDA and acquire a Registration Cum Membership Certificate (RCMC).",
        "APEDA, under the Ministry of Commerce and Industry, provides financial aid, strategic export guidance, and industry insights—essential for tapping global markets and leveraging government export schemes.",
      ],
    },
    features: [
      {
        icon: "✅",
        title: "Legal Export License",
        description:
          "RCMC issued by APEDA is mandatory for exporting scheduled agricultural and processed food products.",
      },
      {
        icon: "🌐",
        title: "Global Market Access",
        description:
          "Enables exporters to participate in international trade fairs and buyer-seller meets.",
      },
      {
        icon: "💸",
        title: "Financial Assistance",
        description:
          "Access to export subsidies, infrastructure grants, and low-interest loans.",
      },
    ],
    benefits: [
      {
        title: "Regulatory Compliance",
        description:
          "Ensures adherence to international quality and safety standards.",
      },
      {
        title: "Subsidies & Grants",
        description:
          "Eligible for export promotion capital goods scheme and transport subsidies.",
      },
      {
        title: "Technical Guidance",
        description:
          "Receive training and technical support on processing, packaging, and marketing.",
      },
      {
        title: "Market Intelligence",
        description:
          "Industry data and reports to help you adapt to changing export trends.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Visit APEDA Portal",
          desc: "Go to the official APEDA website and click 'Register as Member'.",
        },
        {
          title: "Enter IEC & Details",
          desc: "Provide your Import-Export Code (IEC), business and contact information.",
        },
        {
          title: "Upload Documents",
          desc: "Upload IEC copy, bank certificate, account statements, cancelled cheque, and application form.",
        },
        {
          title: "Pay Fee",
          desc: "Submit ₹5,000 (plus applicable taxes) via credit/debit card or demand draft.",
        },
        {
          title: "Receive Application No.",
          desc: "Get your application number and track status online.",
        },
        {
          title: "Download RCMC",
          desc: "Upon approval, download your Registration Cum Membership Certificate.",
        },
      ],
      violations: [
        "Non-submission of correct IEC details leads to application rejection.",
        "Delayed fee payment invalidates the application session.",
        "Incomplete document uploads result in processing delays.",
        "False information may attract penalties under APEDA Act.",
        "Failure to renew lifetime updates may revoke certification.",
      ],
      consequences: [
        "Denial of export license for scheduled products.",
        "Ineligibility for APEDA subsidies and incentives.",
        "Penalties or legal action for misrepresentation.",
        "Blacklisting from APEDA schemes for repeated violations.",
      ],
    },
    eligibility: [
      {
        heading: "Who Must Register with APEDA?",
        items: [
          "Any exporter of scheduled agricultural products under APEDA Act.",
          "Entities dealing in dairy, meat, poultry, fruits, vegetables, nuts, spices, and processed foods.",
          "Businesses with a valid IEC issued by DGFT.",
          "Firms, companies, cooperatives, and producer organizations exporting listed products.",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Duly signed APEDA application form",
          "Copy of Import-Export Code (IEC)",
          "Bank certificate on letterhead",
          "Last two months’ bank statements",
          "Cancelled cheque leaf",
          "Digital signature for online filing",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End Filing",
        desc: "Complete assistance from portal login to RCMC download.",
      },
      {
        title: "Expert Guidance",
        desc: "Consultation on product schedules and export norms.",
      },
      {
        title: "Document Preparation",
        desc: "Review and validate all supporting documents.",
      },
      {
        title: "Fee Handling",
        desc: "Secure payment processing and application tracking.",
      },
      {
        title: "Renewal & Updates",
        desc: "Assistance with any data changes post-registration.",
      },
    ],
    faqs: [
      {
        question: "What is APEDA?",
        answer:
          "Agricultural & Processed Food Products Export Development Authority, promoting India’s food exports.",
      },
      {
        question: "Who needs APEDA registration?",
        answer:
          "Exporters of products listed in the First and Second Schedules of the APEDA Act.",
      },
      {
        question: "What is the fee for APEDA registration?",
        answer:
          "₹5,000 plus applicable taxes, paid online or via demand draft.",
      },
      {
        question: "Is APEDA registration renewable?",
        answer:
          "RCMC is lifetime valid; update only if business details change.",
      },
      {
        question: "What does RCMC stand for?",
        answer: "Registration Cum Membership Certificate issued by APEDA.",
      },
    ],
    types: {
      cards: [
        {
          title: "Invalid IEC",
          shortText: "Ensure your IEC is active.",
          backText: "An inactive IEC will block APEDA registration.",
        },
        {
          title: "Incomplete Uploads",
          shortText: "Upload all required files.",
          backText: "Missing documents delay approval.",
        },
        {
          title: "Fee Payment Issues",
          shortText: "Confirm payment success.",
          backText: "Failed transactions invalidate your session.",
        },
        {
          title: "Wrong Product Schedule",
          shortText: "Select correct product code.",
          backText: "Mismatch leads to rejection.",
        },
        {
          title: "Expired Bank Certificate",
          shortText: "Use a current bank certificate.",
          backText: "Old certificates are not accepted.",
        },
        {
          title: "Signature Verification",
          shortText: "Use valid digital signature.",
          backText: "Unsigned forms are invalid.",
        },
      ],
      roleBenefits: [
        "Grants legal status for food exports.",
        "Qualifies for APEDA export incentives.",
        "Improves buyer confidence internationally.",
        "Access to training and market data.",
        "Facilitates smoother customs clearance.",
      ],
      differenceTable: {
        columns: ["S. No.", "APEDA", "IEC Only"],
        rows: [
          [
            "1",
            "Mandatory for scheduled food exports",
            "Mandatory for all exports",
          ],
          ["2", "Enables subsidy schemes", "Does not cover subsidies"],
          ["3", "Provides RCMC certification", "Provides only IEC number"],
          ["4", "Access to APEDA training & data", "No training support"],
          ["5", "Lifetime validity of RCMC", "IEC validity as per DGFT"],
        ],
      },
      timelineFees: [
        "Application submission: same day.",
        "Processing time: 7–10 working days.",
        "Fee: ₹5,000 + applicable taxes.",
        "No renewal required unless details change.",
      ],
    },
  },

  "rni-registration": {
    overview: {
      heading: "An Overview of RNI Registration in India",
      paragraphs: [
        "Planning to launch a newspaper, magazine, or periodical in India? You need an RNI (now PRGI) registration certificate under the Press and Registration of Periodicals Act, 2023.",
        "Every publication—daily, weekly, monthly, or journal—must register with the Press Registrar General of India for legal compliance before circulation.",
        "The PRGI certificate, governed by the Ministry of Information and Broadcasting, ensures your title is protected and your operations adhere to statutory publishing norms.",
      ],
    },
    features: [
      {
        icon: "📜",
        title: "Modernized Framework",
        description:
          "Streamlined under the PRP Act, 2023, replacing the old 1867 Act to reduce bureaucratic delays.",
      },
      {
        icon: "🔒",
        title: "Title Protection",
        description:
          "Secures your publication’s title from infringement or third-party claims.",
      },
      {
        icon: "⚡",
        title: "Time-Bound Processing",
        description:
          "Automated online workflow via Press Sewa speeds up registration and title verification.",
      },
    ],
    benefits: [
      {
        title: "Ease of Doing Business",
        description:
          "Simplified title verification and online filing improve publisher experience.",
      },
      {
        title: "Transparency",
        description:
          "Automated status updates and clear timelines for each step.",
      },
      {
        title: "Foreign Publication Clarity",
        description:
          "Defines rules for foreign title registration and ownership transfer.",
      },
      {
        title: "Copyright Assurance",
        description: "Legal protection for your content, masthead, and logo.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Submit Application",
          desc: "Provide title details and Form 1 declaration via Press Sewa Portal.",
        },
        {
          title: "Receive ARN",
          desc: "Get a 10-digit Application Reference Number for tracking.",
        },
        {
          title: "Pay Fee",
          desc: "₹1,000 via Bharatkosh integrated payment gateway.",
        },
        {
          title: "District Magistrate Review",
          desc: "Within 60 days, DM issues No-Objection or comments.",
        },
        {
          title: "Download Certificate",
          desc: "On approval, PRGI issues your Registration Cum Membership Certificate.",
        },
      ],
      violations: [
        "Non-submission of title verification letter: rejection.",
        "Incorrect Form 1 declaration: application held.",
        "Failure to pay fee within window: session invalidated.",
        "Incomplete supporting documents: processing delays.",
        "Bypassing press sewa portal: non-compliance penalty.",
      ],
      consequences: [
        "No legal status to publish periodicals.",
        "Penalties under PRP Act for unregistered publishing.",
        "Title disputes without statutory backing.",
        "Ineligibility for government advertising rates.",
      ],
    },
    eligibility: [
      {
        heading: "Requirements for Title Registration",
        items: [
          "Full imprint: publisher, editor, printer, owner details.",
          "Publication address and press location.",
          "Issue volume, date, and page numbering.",
          "Clear display of title on cover and internal pages.",
        ],
      },
      {
        heading: "Publishers Needing PRGI Certificate",
        items: [
          "Indian newspapers and journals.",
          "Magazines, periodicals, weeklies, monthlies.",
          "Foreign publications operating in India.",
          "Editorial and commentary publications.",
        ],
      },
    ],
    services: [
      {
        title: "Title Verification Support",
        desc: "Assistance with document preparation and Form 1 drafting.",
      },
      {
        title: "Online Filing Assistance",
        desc: "Guidance through each Press Sewa Portal step.",
      },
      {
        title: "Fee Payment Facilitation",
        desc: "Secure payment processing via Bharatkosh.",
      },
      {
        title: "Status Tracking",
        desc: "Real-time ARN-based tracking until certificate issue.",
      },
      {
        title: "Post-Registration Compliance",
        desc: "Help with ownership transfer, discontinuation, and annual statements.",
      },
      {
        title: "Government Liaison",
        desc: "Direct follow-up with District Magistrate and PRGI offices.",
      },
      {
        title: "24/7 Support",
        desc: "Round-the-clock helpline for publishers.",
      },
    ],
    faqs: [
      {
        question: "What is PRGI?",
        answer:
          "Press Registrar General of India, previously RNI, under the PRP Act, 2023.",
      },
      {
        question: "Who must register?",
        answer:
          "Any publisher of newspapers, magazines, or periodicals in India.",
      },
      {
        question: "How much is the fee?",
        answer: "₹1,000 payable online via Bharatkosh.",
      },
      {
        question: "What’s ARN?",
        answer: "Application Reference Number for tracking your registration.",
      },
      {
        question: "Is online registration mandatory?",
        answer: "Yes—via Press Sewa Portal as per PRP Act, 2023.",
      },
    ],
    types: {
      cards: [
        {
          title: "Invalid Title Format",
          shortText: "Follow naming rules.",
          backText: "Non-compliant titles are rejected.",
        },
        {
          title: "Missing Imprint Details",
          shortText: "Include all required names.",
          backText: "Imprint omissions delay approval.",
        },
        {
          title: "Unpaid Fee",
          shortText: "Complete Bharatkosh payment.",
          backText: "Unpaid fees void the application.",
        },
        {
          title: "Late Submission",
          shortText: "Apply before first issue.",
          backText: "Delay may block publication.",
        },
        {
          title: "Portal Glitches",
          shortText: "Save progress regularly.",
          backText: "Session timeouts lose data.",
        },
        {
          title: "Wrong Declaration",
          shortText: "Use correct Form 1.",
          backText: "Wrong form invalidates registration.",
        },
      ],
      roleBenefits: [
        "Secures legal right to publish.",
        "Protects title from infringement.",
        "Ensures transparent approval timelines.",
        "Opens access to government advertising rates.",
        "Simplifies foreign publication procedures.",
      ],
      differenceTable: {
        columns: ["S. No.", "PRB Act, 1867", "PRP Act, 2023"],
        rows: [
          [
            "1",
            "Covers books & periodicals",
            "Excludes books & academic journals",
          ],
          ["2", "Manual DM approval", "Online via Press Sewa Portal"],
          ["3", "RNI as authority", "PRGI as authority"],
          ["4", "No appellate body", "Includes appellate mechanism"],
          ["5", "Bureaucratic delays", "Automated, time-bound process"],
        ],
      },
      timelineFees: [
        "Application submission: immediate.",
        "ARN issuance: same day.",
        "DM review: up to 60 days.",
        "Certificate issuance: within 5 days post-approval.",
        "Registration fee: ₹1,000 via Bharatkosh.",
        "No renewal required unless title changes.",
      ],
    },
  },

  "pm-wani-registration": {
    overview: {
      heading: "PM WANI WiFi Registration Scheme: A Complete Overview",
      paragraphs: [
        "PM-WANI, or Prime Minister WiFi Access Network Interface, is a flagship scheme launched on December 9, 2020, to promote public Wi-Fi networks across India in alignment with the National Digital Communications Policy, 2018.",
        "The scheme enables small entrepreneurs and businesses to become Wi-Fi service providers without requiring a telecom license, making affordable internet widely accessible, especially in rural and underserved areas.",
        "With over 200 PDO Aggregators, 100+ App Providers, and nearly 2.5 lakh hotspots already active, PM WANI is transforming India's digital landscape.",
      ],
    },
    features: [
      {
        icon: "📶",
        title: "No License Requirement",
        description:
          "Businesses only need to register with the Department of Telecommunications, no telecom license is required.",
      },
      {
        icon: "🌐",
        title: "Pan-India Operations",
        description:
          "Entities registered under PM WANI can operate across India with no geographic limitations.",
      },
      {
        icon: "💼",
        title: "Zero Master Franchise Charges",
        description:
          "No franchise fees, making it a cost-effective model for public Wi-Fi provisioning.",
      },
      {
        icon: "📈",
        title: "High Revenue Potential",
        description:
          "Entrepreneurs can monetize internet access through multiple models and user bases.",
      },
      {
        icon: "👥",
        title: "Empowers Local Vendors",
        description:
          "Small retail shops and startups can offer broadband services, creating employment and digital access.",
      },
    ],
    benefits: [
      {
        title: "Legal Compliance",
        description:
          "Provides a legitimate route to offer public Wi-Fi without telecom licensing complexities.",
      },
      {
        title: "User Data Protection",
        description:
          "Data logs must be maintained and stored securely on Indian servers for transparency.",
      },
      {
        title: "No Registration Fee",
        description:
          "The Department of Telecommunications offers the registration free of charge.",
      },
      {
        title: "Boosts Digital India Mission",
        description:
          "Supports rural connectivity and digital inclusion goals of the government.",
      },
      {
        title: "Government Coordination",
        description:
          "Backed by DoT, TRAI, and C-DOT for secure operations and system-level regulation.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Register on SARALSANCHAR",
          desc: "Log in to the SARAL SANCHAR portal and create a company account for PM WANI application.",
        },
        {
          title: "Fill Application (Annexure C)",
          desc: "Select the relevant entity type (PDOA or App Provider) and complete Annexure C.",
        },
        {
          title: "Upload Documents",
          desc: "Submit documents like PAN, CIN, MoA, AoA, address proof, and promoter details.",
        },
        {
          title: "Get Registration Certificate",
          desc: "Receive DoT approval and registration certificate within 7 working days.",
        },
        {
          title: "Certification by Central Registry",
          desc: "Get system/app software certified by C-DOT for full operational readiness.",
        },
      ],
      violations: [
        "Misrepresentation or falsified documentation may lead to cancellation of registration.",
        "Failure to safeguard user data will attract penal action from DoT.",
        "Using foreign servers for data storage violates scheme conditions.",
        "Offering telephone services under PM WANI is strictly prohibited.",
        "Non-compliance with Made in India hardware usage norms can result in suspension.",
      ],
      consequences: [
        "DoT can suspend or revoke registration in case of national security concerns.",
        "Entities may be held liable for privacy breaches or user data misuse.",
        "Failure to address complaints or display tariffs can lead to regulatory penalties.",
        "Repeat violations can lead to permanent disqualification from the scheme.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility for PDOA Registration",
        items: [
          "Company registered under Companies Act, 2013",
          "Own or manage internet infrastructure",
          "Able to handle multiple PDOs",
          "Develop a Wi-Fi access mobile app",
          "Submit required information to DoT",
        ],
      },
      {
        heading: "Key Components of PM WANI Framework",
        items: [
          "Public Data Office (PDO)",
          "Public Data Office Aggregator (PDOA)",
          "App Provider",
          "Central Registry maintained by C-DOT",
          "WANI (Wireless Access Network Interface)",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Certificate of Incorporation",
          "PAN Card and CIN",
          "MoA and AoA",
          "Business Address Proof",
          "Equity and Capital Certificates",
          "MHA Clearance (if foreign nationals involved)",
          "Board Resolution and Authorized ID proof",
        ],
      },
    ],
    services: [
      {
        title: "Fast-Track Registration",
        desc: "Get DoT registration within 7 working days.",
      },
      {
        title: "End-to-End Support",
        desc: "Complete assistance from application to Central Registry approval.",
      },
      {
        title: "Expert Consultation",
        desc: "Guidance on legal and technical infrastructure compliance.",
      },
      {
        title: "Document Preparation",
        desc: "Full support in compiling and uploading required documents.",
      },
      {
        title: "Regulatory Liaison",
        desc: "Strong connections with DoT for smooth processing.",
      },
      {
        title: "Indigenous Technology Promotion",
        desc: "Helps entities comply with Made in India hardware mandates.",
      },
    ],
    faqs: [
      {
        question: "What is PM WANI?",
        answer:
          "PM WANI stands for Prime Minister WiFi Access Network Interface, a government-backed public Wi-Fi initiative.",
      },
      {
        question: "Is a telecom license needed for PM WANI?",
        answer: "No, only registration with DoT is required.",
      },
      {
        question: "What is the role of PDOA?",
        answer:
          "PDOA manages infrastructure and facilitates service between PDOs and App Providers.",
      },
      {
        question: "Can an entity be both PDOA and App Provider?",
        answer: "Yes, one entity can perform both roles under PM WANI.",
      },
      {
        question: "What is the registration fee?",
        answer: "There is no government fee for PM WANI registration.",
      },
      {
        question: "What is SARALSANCHAR?",
        answer:
          "It is the official DoT portal for telecom and Wi-Fi related registrations.",
      },
      {
        question: "What are the compliance requirements post-registration?",
        answer:
          "Maintain user logs for 1 year, use Indian servers, ensure tariff transparency, and use Made in India technology.",
      },
    ],
    types: {
      cards: [
        {
          title: "PDO Registration",
          shortText:
            "Retail shops and individuals can become public Wi-Fi providers.",
          backText: "No license required, only registration through PDOAs.",
        },
        {
          title: "PDOA Registration",
          shortText: "Companies managing PDOs register as aggregators.",
          backText: "Responsible for compliance, app interface, and bandwidth.",
        },
        {
          title: "App Provider Registration",
          shortText:
            "Firms offering mobile apps for Wi-Fi access must register.",
          backText: "Facilitates user login, authentication, and billing.",
        },
        {
          title: "Central Registry",
          shortText: "Managed by C-DOT for all PM WANI registrations.",
          backText: "Ensures interoperability and secure access.",
        },
      ],
      roleBenefits: [
        "Allows local vendors to provide internet without heavy investment.",
        "Increases digital access in underserved areas.",
        "Supports Digital India and rural internet goals.",
        "Creates self-employment and income streams.",
        "Promotes indigenous tech solutions.",
      ],
      differenceTable: {
        columns: ["Aspect", "BharatNet Project", "PM WANI Project"],
        rows: [
          ["Year of Launch", "2011", "2020"],
          [
            "Objective",
            "Broadband to Gram Panchayats",
            "Widespread public Wi-Fi access",
          ],
          ["Connectivity Type", "Wired (Optical Fiber)", "Wireless (Wi-Fi)"],
          ["Funding Model", "Government funded", "Privately operated"],
          ["Focus Area", "Rural infrastructure", "Urban and rural hotspots"],
        ],
      },
      timelineFees: [
        "Registration certificate issued within 7 working days.",
        "No registration or license fee charged by DoT.",
        "PDOs may incur minimal infrastructure setup costs.",
        "Certification by Central Registry required post-registration.",
        "Regular compliance audits may be conducted by authorities.",
      ],
    },
  },

  "coconut-board-registration": {
    overview: {
      heading: "Coconut Board Registration – Everything You Need to Know",
      paragraphs: [
        "If you're operating a business related to coconut products, securing Coconut Board Registration is crucial to avail various schemes, subsidies, and incentives offered by the Coconut Development Board (CDB).",
        "The Coconut Development Board, under the Ministry of Agriculture and Farmers’ Welfare, issues the Coconut Board Certificate to eligible businesses. Registration enables businesses to leverage growth opportunities and streamline coconut-based operations.",
        "Coconut Board Registration is essential for businesses dealing in the manufacture, processing, export, and training of coconut-based goods. It provides legal validation, opens access to government support, and strengthens market presence.",
      ],
    },
    features: [
      {
        icon: "✅",
        title: "Access to Government Schemes",
        description:
          "Registered entities can avail various CDB subsidies, grants, and development schemes.",
      },
      {
        icon: "📜",
        title: "Legal Recognition",
        description:
          "Provides official recognition and authorization from the Coconut Development Board.",
      },
      {
        icon: "🤝",
        title: "Stakeholder Collaboration",
        description:
          "Builds trust and cooperation with CDB and related industry bodies.",
      },
      {
        icon: "🏛️",
        title: "Eligibility for Tenders",
        description:
          "Enables participation in tenders and government contracts related to coconut procurement and supply.",
      },
    ],
    benefits: [
      {
        title: "Increased Market Access",
        description:
          "Boosts credibility and market visibility across domestic and international platforms.",
      },
      {
        title: "Export Promotion",
        description:
          "Facilitates RCMC for exporters and enables access to global coconut markets.",
      },
      {
        title: "Financial Support",
        description:
          "Eligibility for loans, subsidies, and incentives related to coconut production and processing.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensures alignment with government norms and CDB quality standards.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Fill Application Form",
          desc: "Complete the RCMC application form on the CDB portal with business details.",
        },
        {
          title: "Document Submission",
          desc: "Upload MoA, AoA, financials, revenue plan, and other mandatory documents.",
        },
        {
          title: "Verification & Inspection",
          desc: "CDB will verify submitted documents and may inspect the business premises.",
        },
        {
          title: "Approval & Fee Payment",
          desc: "Once verified, pay the applicable ₹8,000 registration fee to receive the certificate.",
        },
      ],
      violations: [
        "Providing false or misleading documents.",
        "Failure to comply with eligibility norms post-registration.",
        "Misrepresentation of core coconut-based business operations.",
      ],
      consequences: [
        "RCMC cancellation by the CDB in case of non-compliance.",
        "Disqualification from government tenders and incentive programs.",
        "Delisting and show-cause notices for breaching registration conditions.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Coconut Board Registration",
        items: [
          "Must be a company registered with the Registrar of Companies (RoC).",
          "Authorized capital must be ₹20 lakhs or more.",
          "Paid-up capital must be at least ₹10 lakhs.",
          "Should have 250 shareholders or 100 CPSs or 10 CPFs.",
          "Must have a revenue-generating business plan focused on coconut.",
        ],
      },
      {
        heading: "Entities Required to Register",
        items: [
          "Coconut Producer Companies (CPCs)",
          "Coconut Processing Units",
          "Exporters of Coconut Products",
          "Institutions offering training in coconut-related activities",
        ],
      },
      {
        heading: "Documents Checklist",
        items: [
          "Memorandum of Association (MoA)",
          "Articles of Association (AoA)",
          "Certificate of Incorporation",
          "Proof of paid-up capital",
          "Annual reports and audited financials (previous year)",
          "Certificate of Commencement of Business",
          "Revenue-generating business plan",
          "Demand Draft of ₹1000 to Chairman, CDB at Ernakulam",
        ],
      },
    ],
    services: [
      {
        title: "Hassle-Free Registration",
        desc: "Fast-track Coconut Board Certificate with expert assistance.",
      },
      {
        title: "Documentation Support",
        desc: "Complete support with preparing and filing accurate documentation.",
      },
      {
        title: "Expert Guidance",
        desc: "Consultation by industry experts for eligibility and compliance.",
      },
      {
        title: "Government Liaison",
        desc: "Assistance in correspondence with the CDB and other bodies.",
      },
      {
        title: "Nationwide Coverage",
        desc: "Pan-India services to help coconut businesses across all states.",
      },
      {
        title: "Post-Approval Support",
        desc: "Ongoing compliance help after certification.",
      },
    ],
    faqs: [
      {
        question: "What is Coconut Board Registration?",
        answer:
          "It is a mandatory registration for coconut businesses to obtain a Coconut Board Certificate from the CDB.",
      },
      {
        question: "Who regulates the Coconut Board?",
        answer:
          "The Coconut Development Board under the Ministry of Agriculture.",
      },
      {
        question: "What is the fee for registration?",
        answer:
          "The registration fee is ₹8,000 excluding documentation charges.",
      },
      {
        question: "What is the validity of the certificate?",
        answer: "Valid for 2 years from the date of issuance.",
      },
      {
        question: "What if I fail to meet eligibility post-registration?",
        answer: "The CDB may revoke or cancel the RCMC certificate.",
      },
      {
        question: "What is the full form of CDB?",
        answer: "Coconut Development Board.",
      },
    ],
    types: {
      cards: [
        {
          title: "Kernel-Based Products",
          shortText: "Products from coconut kernel.",
          backText:
            "Includes oil, milk, copra, desiccated coconut, virgin coconut oil, and cream.",
        },
        {
          title: "Coconut Water-Based",
          shortText: "Drinks and fermentations.",
          backText:
            "Includes nata-de-coco, vinegar, squash, and tender coconut water.",
        },
        {
          title: "Inflorescence Products",
          shortText: "From coconut flowers.",
          backText: "Includes neera, palm sugar, jaggery, and flower syrup.",
        },
        {
          title: "Coconut Snacks",
          shortText: "Convenient coconut food.",
          backText: "Includes barfi, candy, biscuits, and chocolate.",
        },
        {
          title: "Shell-Based Products",
          shortText: "Hard coconut shell goods.",
          backText: "Includes shell powder, charcoal, and activated carbon.",
        },
        {
          title: "Haustorium Products",
          shortText: "From sprouted coconut.",
          backText:
            "Includes haustorium candy, ice cream, cookies, and clusters.",
        },
      ],
      roleBenefits: [
        "Ensures legal compliance for coconut businesses.",
        "Enables access to government schemes and export incentives.",
        "Facilitates credibility in international markets.",
        "Boosts supply chain participation in coconut procurement.",
        "Encourages innovation and diversification in coconut products.",
      ],
      differenceTable: {
        columns: [
          "Aspect",
          "Coconut Board Registration",
          "General Business Registration",
        ],
        rows: [
          [
            "Purpose",
            "For coconut-based businesses",
            "For all types of businesses",
          ],
          [
            "Regulatory Body",
            "Coconut Development Board",
            "MCA or Local Authority",
          ],
          [
            "Eligibility",
            "Strict shareholder/capital criteria",
            "Minimal criteria",
          ],
          ["Validity", "2 years", "Lifetime (unless changed)"],
          [
            "Export Benefits",
            "Eligible for incentives",
            "Not specific to coconut exports",
          ],
        ],
      },
      timelineFees: [
        "Registration fee: ₹8,000 (excluding documentation charges).",
        "Validity of RCMC certificate: 2 years.",
        "Application processing time: 30 to 45 days.",
        "Steps: Form filling, verification, inspection, approval.",
        "Non-compliance can lead to revocation of certificate.",
      ],
    },
  },

  "gst-return-filing": {
    overview: {
      heading: "An Overview of GST Return Filing",
      paragraphs: [
        "GST return filing is the process of reporting business transactions to the government under the Goods and Services Tax system in India. Returns must be filed monthly, quarterly, or annually based on turnover and registration category.",
        "A GST return contains details of total purchases and sales, output tax, input tax credit, and net GST payable. Filing ensures compliance, maintains financial transparency, and helps calculate net tax liability.",
        "Need assistance with GST filing? DoStartup expert consultants can help ensure error-free GST return submissions.",
      ],
    },
    features: [
      {
        icon: "📝",
        title: "Comprehensive Reporting",
        description:
          "Reports outward supplies, inward supplies, input tax credit, and tax liability in one dashboard.",
      },
      {
        icon: "⏱️",
        title: "Timely Compliance",
        description:
          "File returns within prescribed deadlines to avoid penalties.",
      },
      {
        icon: "🔄",
        title: "Multiple Return Types",
        description:
          "Supports all standard GSTR filings including monthly, quarterly, and annual returns.",
      },
    ],
    benefits: [
      {
        title: "Tax Transparency",
        description:
          "Curb tax evasion through clear reporting of transactions.",
      },
      {
        title: "Input Credit Claims",
        description:
          "Set off input tax credit against output liability seamlessly.",
      },
      {
        title: "Penalty Avoidance",
        description: "Timely filings prevent interest and late fees.",
      },
      {
        title: "Business Insights",
        description: "Track performance and creditworthiness for loans.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Obtain GSTIN",
          desc: "Register and receive your 15-digit GST identification number.",
        },
        {
          title: "Login to GST Portal",
          desc: "Sign in at gst.gov.in with your credentials.",
        },
        {
          title: "Select Return Type",
          desc: "Choose the correct form (e.g., GSTR-1, 3B) based on your category.",
        },
        {
          title: "Enter Transaction Details",
          desc: "Upload sales, purchase, and ITC data as per formats.",
        },
        {
          title: "Verify & Submit",
          desc: "Review entries and generate ARN for your filing.",
        },
        {
          title: "Make Payment",
          desc: "Pay any net tax via challan or electronic payment.",
        },
      ],
      violations: [
        "Late filing results in ₹200 per day penalty (₹100 CGST + ₹100 SGST).",
        "Interest at 18% per annum on outstanding tax dues.",
        "Failure to file composition scheme returns invites higher penalties.",
        "Incorrect data submission may trigger notices and audits.",
      ],
      consequences: [
        "Denial of input tax credit claims.",
        "Blocked e-way bill generation for goods movement.",
        "Restriction on export benefits and refunds.",
        "Legal notices and potential prosecution for fraud.",
      ],
    },
    eligibility: [
      {
        heading: "Who Must File?",
        items: [
          "All GST-registered businesses",
          "Composition scheme taxpayers",
          "E-commerce operators",
          "Non-resident foreign taxpayers",
          "Entities with turnover above ₹5 crore",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Certificate of Incorporation or LLP agreement",
          "PAN, MoA, AOA",
          "Board resolution or authorization letter",
          "Digital Signature Certificate (DSC)",
          "GST-compliant invoices and credit/debit notes",
          "Customer GSTIN details and HSN/SAC codes",
        ],
      },
    ],
    services: [
      {
        title: "Automated Return Filling",
        desc: "Upload bulk data and auto-populate GST returns.",
      },
      {
        title: "Error Validation",
        desc: "Pre-submission checks to eliminate mismatches.",
      },
      {
        title: "Expert Review",
        desc: "Tax consultants verify filings to ensure compliance.",
      },
      {
        title: "Penalty Advisory",
        desc: "Guidance on minimizing late fees and interest.",
      },
    ],
    faqs: [
      {
        question: "What is GST?",
        answer:
          "GST (Goods and Services Tax) is a unified indirect tax introduced in India on July 1, 2017, replacing various earlier taxes like excise duty, service tax, and VAT.",
      },
      {
        question: "What is a GST return?",
        answer:
          "A GST return is a document filed by registered taxpayers containing details of sales, purchases, tax collected and paid, used to calculate net tax liability.",
      },
      {
        question: "Who must file GST returns?",
        answer:
          "All GST-registered entities, including those under composition scheme, e-commerce operators, non-resident taxpayers, and those with turnover above ₹5 crore.",
      },
      {
        question: "What are GSTR-1, GSTR-2A, and GSTR-3B?",
        answer:
          "GSTR-1 reports outward supplies, GSTR-2A is an auto-drafted inward supplies statement, and GSTR-3B is a monthly self-declaration of net tax liability.",
      },
      {
        question: "Can GST returns be revised once filed?",
        answer:
          "No, returns cannot be revised; corrections must be made in subsequent filings via the amendment section.",
      },
      {
        question: "What is GSTR-4?",
        answer:
          "GSTR-4 is a quarterly return for taxpayers under the composition scheme.",
      },
      {
        question: "What is GSTR-9?",
        answer:
          "GSTR-9 is the annual consolidated return summarizing all transactions for the financial year.",
      },
      {
        question: "What is GSTR-9C?",
        answer:
          "GSTR-9C is a reconciliation statement required for businesses with turnover above ₹2 crore.",
      },
      {
        question: "What is GSTR-10?",
        answer:
          "GSTR-10 is the final return filed upon cancellation of GST registration.",
      },
      {
        question: "What is GSTR-11?",
        answer:
          "GSTR-11 is filed by UIN holders (e.g., foreign embassies) to report supplies received.",
      },
      {
        question: "What are the GST slab rates?",
        answer:
          "Current GST slab rates are 0%, 0.25%, 3%, 5%, 12%, 18%, and 28%.",
      },
      {
        question: "What is the Composition Scheme?",
        answer:
          "A simplified tax scheme for small taxpayers allowing payment of GST at a fixed rate of turnover with minimal filings.",
      },
      {
        question: "What are CGST, SGST, IGST, and UGST?",
        answer:
          "CGST is collected by the Center, SGST by States, IGST on inter-state transactions, and UGST in Union Territories.",
      },
      {
        question: "Who determines GST rates?",
        answer:
          "The GST Council, comprising Central and State representatives, finalizes rates based on recommendations from the Fitment Committee.",
      },
      {
        question: "Is monthly filing mandatory?",
        answer:
          "Yes, monthly filing is mandatory for regular taxpayers unless enrolled under the QRMP Scheme for quarterly returns and monthly payments.",
      },
      {
        question: "Can filing frequency be changed?",
        answer:
          "Yes, taxpayers can change their return filing frequency at the start of a new financial year.",
      },
      {
        question: "What are new GST compliances?",
        answer:
          "Recent compliances include e-Way Bills for goods transport and e-Invoicing for B2B transactions to enhance transparency.",
      },
      {
        question: "What are the benefits of filing with DoStartup?",
        answer:
          "Eliminates cascading taxes, offers expert support, ensures compliance, and streamlines the filing process for all taxpayer categories.",
      },
    ],
    types: {
      cards: [
        {
          title: "GSTR-1",
          shortText: "Sales Return",
          backText: "Reports outward supplies monthly/quarterly.",
        },
        {
          title: "GSTR-3B",
          shortText: "Summary Return",
          backText: "Self-declaration of net tax liability every month.",
        },
        {
          title: "GSTR-4",
          shortText: "Composition Return",
          backText: "Quarterly return for composition scheme taxpayers.",
        },
        {
          title: "GSTR-9",
          shortText: "Annual Return",
          backText: "Consolidated annual filing for turnover > ₹2 crore.",
        },
      ],
      roleBenefits: [
        "Collect GST from customers legally.",
        "Claim and utilize input tax credits.",
        "Maintain compliance to avoid penalties.",
        "Demonstrate financial transparency to stakeholders.",
      ],
      differenceTable: {
        columns: ["Return Type", "Frequency", "Who Files"],
        rows: [
          ["GSTR-1", "Monthly/Quarterly", "Outward supplies providers"],
          ["GSTR-3B", "Monthly", "All regular taxpayers"],
          ["GSTR-4", "Quarterly", "Composition scheme taxpayers"],
          ["GSTR-9", "Annually", "Turnover > ₹2 crore taxpayers"],
        ],
      },
      timelineFees: [
        "GSTR-1 due date: 11th of next month.",
        "GSTR-3B due date: 20th of next month.",
        "Late fee: ₹200/day (₹100 CGST + ₹100 SGST).",
        "Interest: 18% p.a. on outstanding tax.",
        "Annual return GSTR-9 due: 31st December post-FY.",
      ],
    },
  },
  
  "legal-heir-certificate": {
    overview: {
      heading: "Legal Heir Certificate – An Overview",
      paragraphs: [
        "A Legal Heir Certificate, also known as a Waris or Survivor Certificate, is issued by local revenue authorities (Tehsildar, Mandal Officer) to establish the rightful heirs of a deceased person.",
        "It serves as proof of relationship for claiming pensions, gratuity, provident fund, insurance, bank balances, and property transfer without a court order.",
        "Though not governed by the Indian Succession Act directly, it is universally accepted by banks, insurers, and private entities for settlement of claims and asset distribution.",
      ],
    },
    features: [
      {
        icon: "👪",
        title: "Heir Identification",
        description:
          "Officially lists all surviving legal heirs entitled to inherit assets.",
      },
      {
        icon: "📜",
        title: "Asset Transfer",
        description:
          "Facilitates smooth transfer of pension, PF, gratuity, insurance and other benefits.",
      },
      {
        icon: "🏦",
        title: "Widely Accepted",
        description:
          "Recognized by banks, financial institutions, and government departments for claims settlement.",
      },
    ],
    benefits: [
      {
        title: "Property Transfer",
        description:
          "Enables the legal transfer of movable and immovable assets to heirs.",
      },
      {
        title: "Insurance Claims",
        description:
          "Required by insurers to release claim amounts to family members.",
      },
      {
        title: "Retirement Benefits",
        description:
          "Essential for claiming provident fund, gratuity, and pension dues.",
      },
      {
        title: "Government Services",
        description:
          "Used for compassionate appointment and other administrative functions.",
      },
      {
        title: "Legal Proceedings",
        description:
          "Supports court and tribunal processes by identifying rightful heirs.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Obtain Application Form",
          desc: "Collect and fill the Legal Heir Certificate form from the local revenue office or portal.",
        },
        {
          title: "Attach Documents",
          desc: "Submit death certificate, address proof of deceased, ID and DOB proofs of heirs, affidavit, and filled form.",
        },
        {
          title: "Submit & Pay Fees",
          desc: "File application at the Tehsildar's office with applicable state fee.",
        },
        {
          title: "Verification",
          desc: "Revenue authority verifies documents and may conduct local enquiry.",
        },
        {
          title: "Certificate Issuance",
          desc: "Upon approval, the Legal Heir Certificate is issued, usually within 15–30 days.",
        },
      ],
      violations: [
        "Rejected application due to incomplete documents.",
        "False declarations may attract legal penalties.",
        "Non-payment of fees invalidates the application.",
        "Incorrect heir details cause processing delays.",
      ],
      consequences: [
        "Delay or denial of asset transfer and claims.",
        "Ineligibility for pension, PF, insurance settlement.",
        "Need to reapply or appeal for certificate issuance.",
        "Possible legal action for misrepresentation.",
      ],
    },
    eligibility: [
      {
        heading: "Who Can Apply?",
        items: [
          "Spouse, children, parents of the deceased",
          "Siblings, grandchildren, great-grandchildren (Class II heirs)",
          "Extended family members (if Class I heirs are unavailable)",
        ],
      },
      {
        heading: "Governing Laws",
        items: [
          "Indian Succession Act, 1925",
          "Hindu Succession Act, 1956",
          "Finance Act, 2023 (Section 165)",
          "Relevant State Revenue Rules",
          "Personal laws for Muslims, Christians, etc.",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End Filing",
        desc: "Complete support from form filling to certificate download.",
      },
      {
        title: "Document Assistance",
        desc: "Review and preparation of affidavits, ID proofs, and death certificate.",
      },
      {
        title: "State-Specific Guidance",
        desc: "Advice on varying procedures and fees across states.",
      },
      {
        title: "Application Tracking",
        desc: "Real-time updates and follow-ups with revenue authorities.",
      },
      {
        title: "Duplicate Certificate",
        desc: "Assistance in obtaining replacement if original is lost.",
      },
    ],
    faqs: [
      {
        question: "What is the processing time?",
        answer:
          "Typically 15–30 days from submission, depending on local authority.",
      },
      {
        question: "Is online application available?",
        answer:
          "Available in select states; otherwise, apply in person at revenue office.",
      },
      {
        question: "What is the fee?",
        answer:
          "Varies by state—usually nominal government fee as per local rules.",
      },
      {
        question: "Can a legal heir certificate be cancelled?",
        answer:
          "It can be revoked by authority on valid objections or misrepresentation.",
      },
      {
        question: "How is it different from a succession certificate?",
        answer:
          "Legal Heir Certificate identifies heirs for basic claims; Succession Certificate is a court order for all movable assets.",
      },
    ],
    types: {
      cards: [
        {
          title: "Missing Death Certificate",
          shortText: "Obtain authenticated death cert.",
          backText:
            "No certificate can be issued without original death proof.",
        },
        {
          title: "Incorrect Heir List",
          shortText: "Verify all heir names.",
          backText: "Errors in heir names delay issuance.",
        },
        {
          title: "Incomplete Affidavit",
          shortText: "Use proper format.",
          backText: "Affidavit lapses if not notarized correctly.",
        },
        {
          title: "Fee Payment Error",
          shortText: "Confirm payment receipt.",
          backText: "Invalid payment cancels application session.",
        },
        {
          title: "Wrong Application Form",
          shortText: "Use updated state form.",
          backText: "Old versions may be rejected.",
        },
        {
          title: "Delayed Verification",
          shortText: "Provide local address proof.",
          backText: "Verification hinges on accurate local info.",
        },
      ],
      roleBenefits: [
        "Establishes rightful heirs for asset claims.",
        "Clears legal roadblocks in pension and PF settlements.",
        "Simplifies bank and insurance claim processes.",
        "Facilitates compassionate employment benefits.",
        "Reduces litigation by clarifying heirship.",
      ],
      differenceTable: {
        columns: ["S. No.", "Legal Heir Certificate", "Succession Certificate"],
        rows: [
          ["1", "Issued by revenue authority", "Issued by civil court"],
          ["2", "For basic benefit claims", "For full estate distribution"],
          ["3", "Takes ~30 days", "May take 4–5 months"],
          ["4", "Minimal formalities", "Court petition required"],
          ["5", "No fee standardization", "Court fees apply"],
        ],
      },
      timelineFees: [
        "Application filing: Day 1",
        "Document verification: Days 2–15",
        "Inspection (if any): Days 10–20",
        "Certificate issuance: Day 15–30",
        "State fee range: ₹50–₹500 (varies)",
      ],
    },
  },

  "bis-registration": {
    overview: {
      heading: "BIS Registration Certificate – An Overview",
      paragraphs: [
        "BIS stands for Bureau of Indian Standards, the National Standard Body established under the BIS Act, 2016 to promote standardization, certification, and quality assurance for goods in India.",
        "All manufacturers—Indian or foreign—producing items under the Compulsory Registration Scheme (CRS) must obtain a BIS Registration Certificate via the online BIS portal.",
        "DoStartup’s BIS Certification Consultants guide you through every step—application filing, document submission, product testing, and final approval—to ensure smooth compliance.",
      ],
    },
    features: [
      {
        icon: "⚙️",
        title: "Compulsory Registration Scheme",
        description:
          "Mandatory certification for electronic and IT goods under MeitY’s CRS.",
      },
      {
        icon: "🔖",
        title: "ISI Mark Certification",
        description:
          "Quality mark for 644+ product categories preventing substandard goods.",
      },
      {
        icon: "🌐",
        title: "Foreign Manufacturers Scheme",
        description:
          "FMCS for certifying foreign-made products against Indian standards.",
      },
      {
        icon: "💍",
        title: "Hallmarking Scheme",
        description:
          "Certification for gold, silver, and platinum articles to ensure purity.",
      },
    ],
    benefits: [
      {
        title: "Total Quality Management",
        description:
          "Foundation for implementing TQM across all production stages.",
      },
      {
        title: "Resource Optimization",
        description:
          "Streamlines manufacturing processes to reduce operational costs.",
      },
      {
        title: "Global Recognition",
        description:
          "BIS mark opens doors to international markets and consumer trust.",
      },
      {
        title: "Safety Assurance",
        description:
          "Meets stringent safety benchmarks, boosting market share.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Submit Online Application",
          desc: "File the application via BIS portal and pay fees.",
        },
        {
          title: "Upload Documents",
          desc: "Provide identity, factory details, test reports, and technical specifications.",
        },
        {
          title: "Product Sampling & Testing",
          desc: "Samples sent to BIS-approved labs for quality evaluation.",
        },
        {
          title: "Factory Inspection",
          desc: "BIS officials inspect manufacturing site for compliance.",
        },
        {
          title: "Final Approval",
          desc: "Upon successful review, BIS issues the registration certificate.",
        },
      ],
      violations: [
        "Failure to submit hard copies within 15 days invalidates application.",
        "Non-compliance with QCO mandates leads to certificate suspension.",
        "Misrepresentation of product details can attract penalties.",
        "Using expired lab reports results in rejection.",
      ],
      consequences: [
        "Inability to market or sell regulated products in India.",
        "Seizure of non-compliant goods by authorities.",
        "Financial penalties and damage to brand reputation.",
        "Mandatory recall of products from the market.",
      ],
    },
    eligibility: [
      {
        heading: "Manufacturer Eligibility",
        items: [
          "Domestic or foreign manufacturer of CRS-listed electronic goods.",
          "Factory-wise application required for each manufacturing unit.",
          "Brand-specific registration if multiple brands are produced.",
        ],
      },
      {
        heading: "Scheme-Specific Criteria",
        items: [
          "ISI Mark: Manufacturer in any of the 644+ categories.",
          "FMCS: Foreign entity with an Indian authorized agent.",
          "Hallmarking: Jewellers and refineries under Hallmarking Regulations.",
          "Management Systems: Organizations seeking ISO, food safety, or environmental cert.",
        ],
      },
    ],
    services: [
      {
        title: "Scheme Selection",
        desc: "Advice on choosing the correct BIS registration scheme for your product.",
      },
      {
        title: "Document Preparation",
        desc: "Compilation and validation of all mandatory documents and reports.",
      },
      {
        title: "Lab Coordination",
        desc: "Liaison with BIS-approved laboratories for efficient sample testing.",
      },
      {
        title: "Factory Audit Support",
        desc: "Pre-audit readiness checks and on-site inspection assistance.",
      },
      {
        title: "Application Tracking",
        desc: "Real-time status updates and follow‑ups with BIS officials.",
      },
      {
        title: "Renewal & Amendments",
        desc: "Timely renewal services and assistance with scope changes.",
      },
      {
        title: "QCO Monitoring",
        desc: "Alerts for new Quality Control Orders affecting your products.",
      },
    ],
    faqs: [
      {
        question: "Is BIS certification mandatory for my product?",
        answer:
          "If your product falls under CRS, ISI, FMCS, Hallmarking, or other BIS schemes, certification is mandatory before sale.",
      },
      {
        question: "How long does BIS registration take?",
        answer:
          "Typically 30 days from application to certificate issuance, subject to lab and factory inspection timelines.",
      },
      {
        question: "What is the validity of a BIS license?",
        answer:
          "BIS certificates are valid for one year and must be renewed annually.",
      },
      {
        question: "Can one certificate cover multiple factories?",
        answer:
          "No—each manufacturing location requires a separate BIS certificate for the same product.",
      },
      {
        question: "How do I apply for ISI mark?",
        answer:
          "File under ISI Mark Certification scheme with relevant product category code and test reports.",
      },
      {
        question: "What are Quality Control Orders (QCOs)?",
        answer:
          "Government mandates requiring BIS certification for specific product categories to ensure consumer safety.",
      },
      {
        question: "Are imported goods exempt?",
        answer:
          "No—foreign manufacturers must obtain BIS certification via FMCS and appoint an Indian agent.",
      },
      {
        question: "What happens if I don't renew on time?",
        answer:
          "Failure to renew leads to automatic cancellation and ineligibility to sell regulated products.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incorrect Scheme Selection",
          shortText: "Choose wrong BIS scheme",
          backText:
            "Applying under an inappropriate scheme leads to rejections and delays.",
        },
        {
          title: "Incomplete Documentation",
          shortText: "Missing or improper docs",
          backText:
            "Omitting required identity, factory, or test reports stalls application processing.",
        },
        {
          title: "Delayed Sample Testing",
          shortText: "Lab backlogs",
          backText:
            "Failure to submit samples or lab delays can push certification beyond expected timelines.",
        },
        {
          title: "Hard Copy Non‑Submission",
          shortText: "Missing physical docs",
          backText:
            "Not sending hard copies within 15 days invalidates your online application.",
        },
        {
          title: "Factory Non‑Compliance",
          shortText: "Inspection failures",
          backText:
            "Poor on‑site practices can result in adverse inspection reports or rejection.",
        },
        {
          title: "Renewal Lapses",
          shortText: "Missed renewal date",
          backText:
            "Failure to renew annually leads to automatic cancellation of BIS license.",
        },
      ],
      roleBenefits: [
        "Assures compliance with Indian safety and quality norms.",
        "Enables market access for regulated product categories.",
        "Enhances brand credibility with the BIS mark.",
        "Facilitates faster customs clearance for imports.",
        "Reduces risk of regulatory penalties and product seizures.",
      ],
      differenceTable: {
        columns: ["S. No.", "Scheme", "Scope"],
        rows: [
          ["1", "CRS", "Electronics & IT goods under MeitY mandate"],
          ["2", "ISI Mark", "644+ diverse product categories"],
          ["3", "FMCS", "Foreign manufacturer imports"],
          ["4", "Hallmarking", "Gold, silver, platinum jewelry"],
          ["5", "Eco Mark", "Environment-friendly product certification"],
        ],
      },
      timelineFees: [
        "Application & fee payment: Day 1",
        "Document review & portal generation: Days 2–7",
        "Lab testing: Days 8–15",
        "Factory inspection: Days 10–20",
        "License issuance: By Day 30",
        "Government fees vary by scheme & product category",
        "Renewal required annually",
      ],
    },
  },

  "cdsco-registration": {
    overview: {
      heading: "CDSCO Registration Certificate – An Overview",
      paragraphs: [
        "The Central Drugs Standard Control Organisation (CDSCO) is India’s national regulatory body under the Ministry of Health and Family Welfare, responsible for approving new drugs, medical devices, and clinical trials under the Drugs & Cosmetics Act, 1940.",
        "All manufacturers, importers, and authorized agents of pharmaceuticals, medical devices, cosmetics, and diagnostics must obtain a CDSCO Registration Certificate to market and distribute their products legally in India.",
        "DoStartup’s expert consultants help you navigate device classification, online application filing, documentation, and ongoing compliance for a seamless CDSCO approval process.",
      ],
    },
    features: [
      {
        icon: "💻",
        title: "Online Application",
        description:
          "Submit and track your CDSCO application via the official online portal.",
      },
      {
        icon: "⏱️",
        title: "Faster Approvals",
        description:
          "Digital processing speeds up review and licensing timelines.",
      },
      {
        icon: "💼",
        title: "Centralized Documentation",
        description: "Store all regulatory documents securely in one platform.",
      },
      {
        icon: "📬",
        title: "Direct Communication",
        description:
          "Interact with CDSCO officials through the portal for queries and updates.",
      },
    ],
    benefits: [
      {
        title: "Regulatory Compliance",
        description:
          "Ensures adherence to Indian safety, efficacy, and quality standards.",
      },
      {
        title: "Market Access",
        description:
          "Legal authorization to sell drugs, devices, and cosmetics across India.",
      },
      {
        title: "Cost Savings",
        description:
          "Reduces paperwork and travel costs with fully online processing.",
      },
      {
        title: "Transparency",
        description: "Real‑time status updates and clear audit trails.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Prepare Application",
          desc: "Compile product specs, clinical data, manufacturing licences, and QMS certifications.",
        },
        {
          title: "Submit Online",
          desc: "Upload all documents and pay fees via the CDSCO portal.",
        },
        {
          title: "Respond to Queries",
          desc: "Address any CDSCO‑raised clarifications or additional information requests.",
        },
        {
          title: "Factory Inspection",
          desc: "Host CDSCO officials for site inspection and GMP audit (if applicable).",
        },
        {
          title: "Receive Certificate",
          desc: "On approval, download your CDSCO Registration Certificate online.",
        },
      ],
      violations: [
        "Incomplete or incorrect document uploads leading to application rejection.",
        "Failure to respond to portal queries within stipulated timelines.",
        "Non-compliance with GMP, GCP, or labeling requirements.",
        "Submission of misleading clinical or technical data.",
      ],
      consequences: [
        "Application suspension or rejection by CDSCO.",
        "Legal penalties and potential product recall.",
        "Disqualification from future registrations.",
        "Market access barred until compliance is restored.",
      ],
    },
    eligibility: [
      {
        heading: "Who Must Register",
        items: [
          "Domestic and foreign manufacturers of drugs, medical devices, cosmetics, diagnostics.",
          "Importers and authorized Indian agents representing foreign manufacturers.",
          "Clinical trial sponsors seeking to conduct trials in India.",
        ],
      },
      {
        heading: "Pre-Requisite Criteria",
        items: [
          "Valid manufacturing or wholesale licence.",
          "Quality Management System in place (ISO 13485 for devices).",
          "Complete product testing and clinical trial data.",
          "Adherence to Drugs & Cosmetics Act and Medical Devices Rules.",
        ],
      },
    ],
    services: [
      {
        title: "Classification Support",
        desc: "Accurate device and drug classification under CDSCO rules.",
      },
      {
        title: "End-to-End Filing",
        desc: "Application drafting, upload, fee payment, and portal tracking.",
      },
      {
        title: "Query Resolution",
        desc: "Timely responses to CDSCO portal queries and audit findings.",
      },
      {
        title: "Audit Preparation",
        desc: "Pre‑inspection checks and GMP/GCP compliance readiness.",
      },
      {
        title: "Renewal Management",
        desc: "Automated reminders and assistance for certificate renewal.",
      },
    ],
    faqs: [
      {
        question: "What products require CDSCO registration?",
        answer:
          "All drugs, medical devices, cosmetics, and diagnostics sold or imported in India.",
      },
      {
        question: "How long does CDSCO approval take?",
        answer:
          "Typically 3–6 months, depending on product complexity and query resolution.",
      },
      {
        question: "What is the validity of the CDSCO certificate?",
        answer:
          "Import registration certificates are valid for 3 years; manufacturing licences vary.",
      },
      {
        question: "Can application be revised after submission?",
        answer:
          "Yes, you may submit corrections via the online portal until final review.",
      },
      {
        question: "Is onsite inspection mandatory?",
        answer:
          "Required for manufacturing licences and certain high‑risk medical devices.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incorrect Classification",
          shortText: "Mis‑classify your device or drug",
          backText:
            "Leads to improper application pathway and possible rejection.",
        },
        {
          title: "Incomplete Clinical Data",
          shortText: "Missing trial reports",
          backText:
            "CDSCO will pause or reject approval without robust evidence.",
        },
        {
          title: "GMP Non‑Compliance",
          shortText: "Audit failures",
          backText:
            "Poor site practices will trigger corrective actions or denial.",
        },
        {
          title: "Delayed Fee Payment",
          shortText: "Missed deadlines",
          backText:
            "Application session expires if fees aren’t remitted timely.",
        },
        {
          title: "Technical Upload Errors",
          shortText: "Portal file format issues",
          backText:
            "Invalid document formats or sizes block successful submission.",
        },
        {
          title: "Failure to Respond",
          shortText: "Portal query lapses",
          backText:
            "Not answering CDSCO queries within 30 days leads to automatic closure.",
        },
      ],
      roleBenefits: [
        "Legal authorization for drug and device marketing.",
        "Enhanced consumer trust with CDSCO‑approved products.",
        "Avoidance of regulatory penalties and recalls.",
        "Streamlined market entry and expansion.",
      ],
      differenceTable: {
        columns: ["Aspect", "Import Reg. Cert.", "Manufacturing Licence"],
        rows: [
          [
            "Purpose",
            "Legalize imported products",
            "Approve domestic production",
          ],
          ["Validity", "3 years", "5 years (renewable)"],
          ["Inspection", "No site audit", "GMP audit required"],
          ["Applicant", "Importers/agents", "Manufacturers"],
          [
            "Data Required",
            "Product compliance data",
            "Full production details",
          ],
        ],
      },
      timelineFees: [
        "Application filing: Day 1",
        "Portal review & fee payment: Days 2–7",
        "Document evaluation: Days 8–60",
        "Site inspection (if required): Days 30–90",
        "Certificate issuance: By Day 120",
        "Fees depend on product class and application type",
      ],
    },
  },

  "insurance-broker-license": {
    overview: {
      heading: "Insurance Broker License in India – A Comprehensive Guide",
      paragraphs: [
        "An Insurance Broker License is issued by the Insurance Regulatory and Development Authority of India (IRDAI) under the Insurance Brokers Regulations, 2018, authorizing intermediaries to facilitate insurance policies between insurers and customers.",
        "Holding a license signifies financial stability, professional competence, and ethical conduct, allowing brokers to offer unbiased advice and access a wide range of insurance products.",
        "DoStartup guides you through every step—eligibility, documentation, application filing, and compliance—to secure your broker license swiftly and efficiently.",
      ],
    },
    features: [
      {
        icon: "🔑",
        title: "IRDAI Authorization",
        description:
          "Official approval to act as an insurance broker under IRDAI regulations.",
      },
      {
        icon: "📈",
        title: "Market Access",
        description:
          "Permission to offer life, general, and specialized reinsurance products.",
      },
      {
        icon: "🤝",
        title: "Client Representation",
        description:
          "Act on behalf of clients to negotiate and place policies.",
      },
    ],
    benefits: [
      {
        title: "Wide Product Portfolio",
        description:
          "Access to multiple insurers’ products for tailored client solutions.",
      },
      {
        title: "Enhanced Credibility",
        description:
          "License demonstrates trustworthiness and regulatory compliance.",
      },
      {
        title: "Revenue Streams",
        description:
          "Earn commissions from various insurance lines—life, health, motor, reinsurance.",
      },
      {
        title: "Professional Growth",
        description:
          "Build a reputable network and expand business through IRDAI’s framework.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Form B Submission",
          desc: "File Schedule I Form B with IRDAI along with prescribed fees.",
        },
        {
          title: "Attach Supporting Docs",
          desc: "Upload MOA/AOA, board resolutions, KMP details, infrastructure proofs.",
        },
        {
          title: "Capital & Security Deposit",
          desc: "Submit evidence of capital adequacy and security deposit as per category.",
        },
        {
          title: "Background Verification",
          desc: "IRDAI conducts checks on promoters, directors, and key managerial personnel.",
        },
        {
          title: "License Grant",
          desc: "Upon successful scrutiny, IRDAI issues the broker license.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "General Eligibility Criteria",
        items: [
          "Graduate degree in finance, insurance, or business.",
          "Minimum 2 years’ relevant work experience.",
          "IRDA-approved training and certification.",
          "Clean legal record with no regulatory violations.",
        ],
      },
      {
        heading: "Capital & Deposit Requirements",
        items: [
          "Direct Broker: ₹75 Lakhs capital, ₹10 Lakhs deposit.",
          "Reinsurance Broker: ₹4 Crores capital, 10% deposit.",
          "Composite Broker: ₹5 Crores capital, 10% deposit.",
          "Equity min. 50% of required capital for all categories.",
        ],
      },
    ],
    services: [
      {
        title: "Eligibility Assessment",
        desc: "Evaluate your profile against IRDAI criteria.",
      },
      {
        title: "Document Preparation",
        desc: "Compile MOA, AOA, board resolutions, and KMP declarations.",
      },
      {
        title: "Application Filing",
        desc: "Submit Form B and fees through IRDAI’s online portal.",
      },
      {
        title: "Regulatory Liaison",
        desc: "Manage background verifications and queries from IRDAI.",
      },
      {
        title: "Renewal & Compliance",
        desc: "Timely renewals, audit support, and quarterly returns.",
      },
    ],
    faqs: [
      {
        question: "What are the broker categories?",
        answer:
          "Direct, Reinsurance, and Composite brokers, each with distinct capital requirements.",
      },
      {
        question: "How long is the license valid?",
        answer:
          "Valid for 3 years; renewal must be applied 90–30 days before expiry.",
      },
      {
        question: "Can NRIs apply?",
        answer:
          "Yes, subject to the same eligibility and infrastructure requirements.",
      },
      {
        question: "What if application is rejected?",
        answer:
          "IRDAI issues reasons; reapplication allowed after one year from rejection.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incomplete Form B",
          shortText: "Omitted schedule details",
          backText: "Missing schedules or signatures leads to rejection.",
        },
        {
          title: "Wrong Capital Category",
          shortText: "Understate paid-up capital",
          backText: "Capital below IRDAI norms invalidates application.",
        },
        {
          title: "Insufficient Deposit",
          shortText: "Missed security deposit",
          backText:
            "Deposit less than required percentage stalls license grant.",
        },
        {
          title: "Documentation Errors",
          shortText: "Invalid MOA/AOA",
          backText: "Non-compliant or unregistered documents are unacceptable.",
        },
        {
          title: "Delayed Filings",
          shortText: "Late renewal",
          backText: "Missing renewal window leads to license suspension.",
        },
        {
          title: "Non-Compliance",
          shortText: "Ethical breaches",
          backText: "Misrepresentation or MLM practices result in penalties.",
        },
      ],
      roleBenefits: [
        "Ensures legal standing in insurance broking.",
        "Grants access to leading insurers’ products.",
        "Boosts client confidence and business growth.",
        "Enables diversified commission earnings.",
      ],
      differenceTable: {
        columns: [
          "S. No.",
          "Direct Broker",
          "Reinsurance Broker",
          "Composite Broker",
        ],
        rows: [
          [
            "1",
            "Life & non-life products",
            "Reinsurance contracts",
            "All insurance lines",
          ],
          [
            "2",
            "₹75 L capital, ₹10 L deposit",
            "₹4 Cr capital, 10% deposit",
            "₹5 Cr capital, 10% deposit",
          ],
          [
            "3",
            "Equity 50% of capital",
            "Equity 50% of capital",
            "Equity 50% of capital",
          ],
          [
            "4",
            "Client advisory & placement",
            "Reinsurance placement",
            "Both advisory and reinsurance",
          ],
        ],
      },
      timelineFees: [
        "Application filing: Day 1",
        "Document verification: Days 2–15",
        "Background checks: Days 10–30",
        "License issuance: By Day 60",
        "License validity: 3 years",
        "Renewal fee: As per IRDAI schedule",
      ],
    },
  },

  "trademark-registration": {
    overview: {
      heading: "Overview of Trademark Registration in India",
      paragraphs: [
        "Trademark registration gives a business the legal right to its brand name, logo, slogan, or other identifying marks. The process begins with an application to the Indian Trade Marks Registry, followed by examination, possible objections and—if everything is in order—entry of the mark on the register.",
        "Protection lasts ten years at a time and may be renewed indefinitely. A registered trademark deters imitators, raises customer confidence and can be enforced worldwide through treaties such as the Madrid Protocol.",
      ],
    },
    features: [
      {
        icon: "™",
        title: "Exclusive Rights",
        description:
          "Nationwide monopoly on your mark’s commercial use once registered.",
      },
      {
        icon: "🔍",
        title: "Legal Remedies",
        description:
          "Stronger enforcement options against infringement and passing off.",
      },
      {
        icon: "🌎",
        title: "International Protection",
        description:
          "Access foreign registers via the Madrid Protocol for global coverage.",
      },
    ],
    benefits: [
      {
        title: "Intangible Asset",
        description:
          "Your mark becomes a licensable, franchisable, and sellable property.",
      },
      {
        title: "Brand Trust",
        description:
          "Signals professionalism and builds consumer and investor confidence.",
      },
      {
        title: "Market Differentiation",
        description: "Helps your products stand out in crowded marketplaces.",
      },
      {
        title: "Global Expansion",
        description: "Simplifies filing in multiple jurisdictions.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Trademark Search",
          desc: "Ensure no identical or confusingly similar marks exist.",
        },
        {
          title: "File Form TM‑A",
          desc: "Submit applicant details, mark image, class and description.",
        },
        {
          title: "Examination Report",
          desc: "Registry reviews for distinctiveness and compliance.",
        },
        {
          title: "Objection Response",
          desc: "File a reply within one month if there are exam objections.",
        },
        {
          title: "Journal Publication",
          desc: "Mark published for four months to allow third‑party oppositions.",
        },
        {
          title: "Registration Certificate",
          desc: "Issued after opposition period or successful defence.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Should Apply?",
        items: [
          "Business owners, start‑ups, service providers, designers, NGOs.",
          "Any person or entity seeking exclusive rights over a brand identifier.",
        ],
      },
      {
        heading: "Application Criteria",
        items: [
          "Mark must be distinctive and not generic or deceptive.",
          "Not confusingly similar to existing registered marks.",
          "Precise specification of goods/services under 45 classes.",
        ],
      },
    ],
    services: [
      {
        title: "Comprehensive Search",
        desc: "In‑depth clearance search to minimize objection risk.",
      },
      {
        title: "Application Drafting",
        desc: "Accurate preparation of Form TM‑A and supporting affidavits.",
      },
      {
        title: "Objection Handling",
        desc: "Expert responses to examination and opposition proceedings.",
      },
      {
        title: "Renewal & Monitoring",
        desc: "Ongoing watch services and timely renewal every 10 years.",
      },
    ],
    faqs: [
      {
        question: "What is a trademark?",
        answer:
          "A sign, word, logo or design that identifies the source of goods or services.",
      },
      {
        question: "Is registration compulsory?",
        answer:
          "No, but registration provides statutory protection and ® rights.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Typically 6–18 months, depending on objections and oppositions.",
      },
      {
        question: "What is Form TM‑48?",
        answer:
          "A power of attorney authorizing an agent to act on your behalf.",
      },
      {
        question: "How often renew?",
        answer: "Every ten years, with a six‑month grace period after expiry.",
      },
    ],
    types: {
      cards: [
        {
          title: "Wrong Class Selection",
          shortText: "Choosing incorrect trademark class",
          backText:
            "Filing in the wrong class leaves coverage gaps and weakens protection.",
        },
        {
          title: "Insufficient Search",
          shortText: "Skipping clearance search",
          backText:
            "Undetected similar marks lead to objections or opposition.",
        },
        {
          title: "Inaccurate Specimen",
          shortText: "Poor quality mark image",
          backText: "Blurry or incomplete images cause application rejection.",
        },
        {
          title: "Missed Deadlines",
          shortText: "Failure to respond on time",
          backText:
            "Missing the one‑month reply window forfeits your application.",
        },
        {
          title: "Improper Use of Symbols",
          shortText: "Misuse of ® or ™",
          backText: "Using ® pre‑registration can incur penalties.",
        },
        {
          title: "Incomplete Affidavits",
          shortText: "Lacking proof of prior use",
          backText: "Claims of use without evidence face objection.",
        },
      ],
      roleBenefits: [
        "Exclusive rights to use ® symbol.",
        "Stronger legal remedies against infringers.",
        "Ability to license or franchise your brand.",
        "Enhanced brand valuation as an asset.",
        "Facilitates foreign trademark filings.",
      ],
      differenceTable: {
        columns: ["S. No.", "Trademark", "Copyright"],
        rows: [
          ["1", "Protects brand identifiers", "Protects original works"],
          ["2", "Requires registration", "Arises automatically"],
          [
            "3",
            "Renew every 10 years",
            "Duration = author’s life + 60/70 years",
          ],
          [
            "4",
            "Covers goods/services classes",
            "Covers literary, artistic works",
          ],
          ["5", "Statutory ® rights", "No symbol, uses © mark"],
        ],
      },
      timelineFees: [
        "Search & filing: Day 1–3",
        "Exam report: Day 30–60",
        "Objection reply: Within 30 days of exam report",
        "Publication: 4‑month opposition window",
        "Certificate issuance: ~Day 180–540",
        "Government fee: ₹4,500–₹9,000 per class",
        "Renewal fee: ₹9,000 per class",
      ],
    },
  },

  "copyright-registration": {
    overview: {
      heading: "Copyright Registration in India – A Comprehensive Overview",
      paragraphs: [
        "Copyright registration grants legal protection for original literary, artistic, musical, dramatic, cinematographic, and software works under the Copyright Act, 1957.",
        "Registration establishes ownership, enables exclusive rights to use and monetize the work, and serves as prima facie evidence in infringement actions.",
        "Dostatup handles your end‑to‑end registration—from filing Form IV to securing the certificate—ensuring your creative assets are fully protected.",
      ],
    },
    features: [
      {
        icon: "©",
        title: "Statutory Ownership",
        description:
          "Official record of authorship and ownership in the Copyright Register.",
      },
      {
        icon: "🔒",
        title: "Exclusive Rights",
        description:
          "Rights to reproduce, distribute, adapt, perform, and communicate the work.",
      },
      {
        icon: "⏳",
        title: "Long‑Term Protection",
        description:
          "Duration: life of author + 60 years (films & sound recordings: 60 years from publication).",
      },
    ],
    benefits: [
      {
        title: "Legal Evidence",
        description: "Registered copyright is prima facie proof in court.",
      },
      {
        title: "Revenue Generation",
        description: "Enables licensing, assignment, and royalty streams.",
      },
      {
        title: "Infringement Recourse",
        description:
          "Allows injunctions, damages, and criminal actions against infringers.",
      },
      {
        title: "Public Notice",
        description:
          "Registration makes your claim publicly searchable, deterring misuse.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Prepare Application",
          desc: "Complete Form IV with author, work details, and class of work.",
        },
        {
          title: "Attach Documents",
          desc: "Include identity proof, work copies, NOC (if needed), POA for agents.",
        },
        {
          title: "Pay Fee",
          desc: "Submit prescribed fee online or via demand draft.",
        },
        {
          title: "Receive Diary Number",
          desc: "Acknowledgment with diary number; 30‑day objection window opens.",
        },
        {
          title: "Respond to Objections",
          desc: "File written replies if any objections are raised.",
        },
        {
          title: "Grant of Registration",
          desc: "Upon clearance, Copyright Office issues registration certificate.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Can Apply?",
        items: [
          "Original author or rightful owner of the work",
          "Assignee, publisher or producer of the work",
          "Joint authors under joint ownership",
        ],
      },
      {
        heading: "Works Covered",
        items: [
          "Literary (books, articles, scripts)",
          "Artistic (paintings, graphics)",
          "Musical & dramatic compositions",
          "Cinematographic films & sound recordings",
          "Computer software & digital content",
        ],
      },
    ],
    services: [
      {
        title: "Work Classification",
        desc: "Identify the correct category and form for your work.",
      },
      {
        title: "Document Compilation",
        desc: "Gather ID proofs, work samples, NOCs, and POAs.",
      },
      {
        title: "Application Filing",
        desc: "File Form IV, pay fees, and track diary number issuance.",
      },
      {
        title: "Objection Management",
        desc: "Handle office queries and objections swiftly.",
      },
      {
        title: "Certificate Delivery",
        desc: "Ensure timely receipt of the registration certificate.",
      },
    ],
    faqs: [
      {
        question: "Is registration mandatory?",
        answer:
          "No, but registration provides legal presumption of ownership and stronger enforcement.",
      },
      {
        question: "How long is protection?",
        answer:
          "Life of author plus 60 years; films & sound recordings 60 years from publication.",
      },
      {
        question: "What is Form IV?",
        answer:
          "The prescribed application form for copyright registration in India.",
      },
      {
        question: "Can I register online?",
        answer:
          "Yes—through the Copyright Office portal for faster, paperless filing.",
      },
      {
        question: "How soon after filing is certificate granted?",
        answer:
          "Typically within 7–12 months, subject to objections and workload.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incorrect Work Type",
          shortText: "Misclassifying your work",
          backText:
            "Filing under wrong category delays processing and may cause objections.",
        },
        {
          title: "Poor Quality Samples",
          shortText: "Blurry or incomplete work copies",
          backText: "Unclear samples can lead to application rejection.",
        },
        {
          title: "Missing NOC",
          shortText: "Omitting required permissions",
          backText:
            "Failure to attach NOCs for publishers or joint authors stalls registration.",
        },
        {
          title: "Fee Miscalculation",
          shortText: "Underpaying application fee",
          backText: "Incomplete fee payment invalidates the application.",
        },
        {
          title: "Deadline Lapses",
          shortText: "Ignoring objection window",
          backText: "Not responding within 30 days forfeits your application.",
        },
        {
          title: "Incomplete POA",
          shortText: "Invalid power of attorney",
          backText: "Incorrect POA format invalidates agent filings.",
        },
      ],
      roleBenefits: [
        "Official proof of authorship and date of creation.",
        "Legal basis for enforcement and damages claims.",
        "Enables licensing, assignment, and monetization.",
        "Deters unauthorized copying and distribution.",
      ],
      differenceTable: {
        columns: ["S. No.", "Copyright", "Trademark"],
        rows: [
          ["1", "Protects creative works", "Protects brand identifiers"],
          [
            "2",
            "Automatic on creation; registration optional",
            "Registration required for ® rights",
          ],
          [
            "3",
            "Duration = life + 60 years",
            "Duration = renewable every 10 years",
          ],
          [
            "4",
            "Forms: literary, artistic, films, software",
            "Forms: word, logo, sound, shape",
          ],
          [
            "5",
            "Enforced under Copyright Act",
            "Enforced under Trade Marks Act",
          ],
        ],
      },
      timelineFees: [
        "Form IV filing & fee payment: Day 1",
        "Diary number issuance: Day 1–2",
        "Objection window: Days 1–30",
        "Application examination: Days 31–180",
        "Certificate issuance: Day 210–360",
        "Application fee: ₹500–₹4,000 (depending on applicant type)",
        "Offline DD mode also available",
      ],
    },
  },

  "copyright-disclaimer": {
    overview: {
      heading: "Overview of Copyright Disclaimer",
      paragraphs: [
        "A Copyright Disclaimer is a statement that notifies users about the copyright status of content and warns against unauthorized use, while clarifying the scope of permitted fair use under the law.",
        "It typically appears on websites, apps, publications, and media where third‑party or user‑generated content may be displayed, providing legal protection and setting user expectations.",
        "Dostatup helps you draft clear, legally sound copyright disclaimers tailored to your content and jurisdiction.",
      ],
    },
    features: [
      {
        icon: "⚠️",
        title: "Legal Warning",
        description:
          "Alerts users to copyright ownership and the risks of unauthorized use.",
      },
      {
        icon: "📜",
        title: "Fair Use Acknowledgment",
        description:
          "Specifies that certain uses (commentary, critique, education) may be permitted under Section 107 of the US Copyright Act or equivalent provisions.",
      },
      {
        icon: "🔒",
        title: "Rights Reserved",
        description:
          "Clearly states that all rights are retained by the content owner unless expressly licensed.",
      },
    ],
    benefits: [
      {
        title: "Risk Mitigation",
        description:
          "Reduces potential liability by informing users of their obligations.",
      },
      {
        title: "Ownership Assertion",
        description: "Publicly records your claim to the creative work.",
      },
      {
        title: "Fair Use Clarity",
        description:
          "Outlines permissible uses to avoid inadvertent infringement.",
      },
      {
        title: "Professionalism",
        description: "Signals that you take intellectual property seriously.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Identify Content Scope",
          desc: "List all materials (text, images, video) that require a disclaimer.",
        },
        {
          title: "Draft Disclaimer Text",
          desc: "Include © symbol, owner name, year, rights reserved, and fair use notice.",
        },
        {
          title: "Legal Review",
          desc: "Have counsel vet the disclaimer for jurisdictional compliance.",
        },
        {
          title: "Placement & Formatting",
          desc: "Add the disclaimer to footers, code headers, or media descriptions.",
        },
        {
          title: "Periodic Update",
          desc: "Review and revise the disclaimer as content or laws change.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Needs a Disclaimer?",
        items: [
          "Websites or blogs publishing third‑party content",
          "Apps and software displaying user‑generated works",
          "Educational materials quoting excerpts",
          "Media platforms incorporating images, video, or audio",
        ],
      },
    ],
    services: [
      {
        title: "Custom Drafting",
        desc: "We draft a disclaimer tailored to your content and jurisdiction.",
      },
      {
        title: "Compliance Audit",
        desc: "Review your existing notices and suggest improvements.",
      },
      {
        title: "Implementation Guidance",
        desc: "Advise on optimal placement and formatting for maximum effect.",
      },
      {
        title: "Updates & Maintenance",
        desc: "Keep your disclaimer current with evolving IP laws.",
      },
    ],
    faqs: [
      {
        question: "Is a disclaimer legally binding?",
        answer:
          "While not a substitute for registration, a clear disclaimer strengthens your position by warning users and clarifying permitted uses.",
      },
      {
        question: "Do I still need copyright registration?",
        answer:
          "Yes—registration provides proof of ownership, while disclaimers manage user expectations.",
      },
      {
        question: "Can a disclaimer prevent all infringement?",
        answer:
          "No, but it serves as a deterrent and may limit your exposure by establishing clear terms.",
      },
      {
        question: "Where should I place the disclaimer?",
        answer:
          "Common placements include website footers, app about screens, document front pages, and media descriptions.",
      },
    ],
    types: {
      cards: [
        {
          title: "Vague Wording",
          shortText: "Unclear disclaimer text",
          backText:
            "Ambiguous language fails to inform users of their obligations, weakening protection.",
        },
        {
          title: "Missing Fair Use",
          shortText: "No mention of fair use",
          backText:
            "Omitting a fair‑use clause may expose you to unintentional infringement claims.",
        },
        {
          title: "Poor Placement",
          shortText: "Hard to find",
          backText:
            "Burying the disclaimer in deep pages reduces its visibility and effectiveness.",
        },
        {
          title: "Outdated Law",
          shortText: "Non‑compliant text",
          backText:
            "Using old statutory references can render the disclaimer obsolete after legal changes.",
        },
        {
          title: "Overly Broad",
          shortText: "Too restrictive",
          backText:
            "An excessively strict disclaimer may confuse users about legitimate, permissible uses.",
        },
        {
          title: "Formatting Errors",
          shortText: "Broken markup",
          backText:
            "HTML or CSS mistakes can hide the disclaimer or make it unreadable.",
        },
      ],
      roleBenefits: [
        "Provides clear public notice of your copyright claim.",
        "Defines permissible fair‑use activities.",
        "Helps deter unauthorized copying or distribution.",
        "Supports legal recourse in case of infringement.",
      ],
      differenceTable: {
        columns: ["S. No.", "Disclaimer", "Registration"],
        rows: [
          ["1", "Notices rights & warnings", "Establishes legal ownership"],
          ["2", "Easy to implement", "Requires formal application"],
          ["3", "Covers user expectations", "Provides prima facie evidence"],
          ["4", "No government fee", "Fees apply as per law"],
          ["5", "Must be updated", "Valid until renewal"],
        ],
      },
      timelineFees: [
        "Drafting & review: 1–2 days",
        "Legal vetting: 3–5 days",
        "Implementation: 1 day",
        "Updates: As required",
        "Cost: Customized per scope, starting ₹5,000",
      ],
    },
  },

  "copyright-licensing": {
    overview: {
      heading: "Copyright Licensing in India – An Overview",
      paragraphs: [
        "Copyright licensing is governed by the Copyright Act, 1957, and allows creators to grant others permission to use, reproduce, or distribute their works without transferring ownership.",
        "Licenses define the scope, duration, territory, and fees for using literary, artistic, musical, or cinematographic works, as well as software and sound recordings.",
      ],
    },
    features: [
      {
        icon: "📄",
        title: "Legal Contract",
        description:
          "A written agreement specifying rights granted and restrictions.",
      },
      {
        icon: "⏲️",
        title: "Defined Term",
        description: "License duration is clearly set—fixed term or perpetual.",
      },
      {
        icon: "🌍",
        title: "Territorial Scope",
        description: "Usage rights limited to specified countries or regions.",
      },
      {
        icon: "💰",
        title: "Royalty Structure",
        description: "Fees or revenue‑share terms agreed between parties.",
      },
    ],
    benefits: [
      {
        title: "Monetization",
        description: "Earn revenue through authorized use of your work.",
      },
      {
        title: "Controlled Distribution",
        description: "Manage how and where your content is used.",
      },
      {
        title: "Risk Mitigation",
        description: "Reduces infringement by defining clear usage terms.",
      },
      {
        title: "Collaboration",
        description: "Enables partnerships and creative expansions.",
      },
    ],
    types: {
      cards: [
        {
          title: "Missing Scope Details",
          shortText: "Unclear usage rights",
          backText:
            "Omitting precise rights (e.g., digital vs print) leads to disputes.",
        },
        {
          title: "No Term Clause",
          shortText: "Undefined duration",
          backText:
            "Absence of term expiry can trap creators or licensees indefinitely.",
        },
        {
          title: "Geo Ambiguity",
          shortText: "Vague territory",
          backText:
            "Failure to specify territory risks unauthorized cross‑border use.",
        },
        {
          title: "Undefined Fees",
          shortText: "Unclear payments",
          backText:
            "Not detailing royalty rates or payment schedule causes conflicts.",
        },
        {
          title: "Lacking Termination",
          shortText: "No exit terms",
          backText:
            "Without termination clauses, parties cannot easily end the license.",
        },
        {
          title: "No Dispute Mechanism",
          shortText: "Missing resolution",
          backText:
            "Omitting arbitration or courts-of-law clause delays conflict resolution.",
        },
      ],
      roleBenefits: [
        "Allows creators to retain ownership while monetizing works.",
        "Gives licensees legal certainty to use content without infringement risk.",
        "Facilitates clear revenue‑share or fee arrangements.",
        "Supports scalability through sublicensing provisions.",
      ],
      differenceTable: {
        columns: ["S. No.", "Voluntary License", "Compulsory License"],
        rows: [
          [
            "1",
            "Granted by owner’s consent",
            "Mandated by Copyright Board under Section 31",
          ],
          ["2", "Can be exclusive or non‑exclusive", "Typically non‑exclusive"],
          ["3", "Terms freely negotiated", "Terms set by statute or board"],
          [
            "4",
            "Owner retains full control",
            "Owner’s consent bypassed under conditions",
          ],
          [
            "5",
            "Applies to existing & future works",
            "Limited to works in public interest",
          ],
        ],
      },
      timelineFees: [
        "Drafting & negotiation: 1–5 days",
        "Legal review: 2–7 days",
        "Signing & execution: 1 day",
        "Registration (optional): 15–30 days",
        "Professional fees: Customized per scope",
        "Government filing fee: Nil (private contract)",
      ],
    },
    documents: {
      steps: [
        {
          title: "Draft License Agreement",
          desc: "Include parties, work details, rights, term, territory, fees, and termination.",
        },
        {
          title: "Identity Proofs",
          desc: "Submit owner’s and licensee’s ID and address proofs.",
        },
        {
          title: "Work Description",
          desc: "Provide title, category, and classification of the copyrighted work.",
        },
        {
          title: "Royalty Schedule",
          desc: "Outline payment amounts, frequency, and reporting requirements.",
        },
        {
          title: "Signatures",
          desc: "Get the agreement signed by both copyright owner and licensee.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Can License?",
        items: [
          "Original author or copyright holder",
          "Legal assignee or rights holder",
          "Publisher or producer with assigned rights",
        ],
      },
      {
        heading: "Works Eligible",
        items: [
          "Literary, artistic, musical, dramatic works",
          "Cinematograph films & sound recordings",
          "Software and digital content",
        ],
      },
    ],
    services: [
      {
        title: "Agreement Drafting",
        desc: "Tailored license contracts covering all key terms.",
      },
      {
        title: "Negotiation Support",
        desc: "Assist parties in reaching mutually acceptable terms.",
      },
      {
        title: "Legal Vetting",
        desc: "Ensure compliance with the Copyright Act and related rules.",
      },
      {
        title: "Registration Guidance",
        desc: "Advise on voluntary registration of license terms for public record.",
      },
      {
        title: "Dispute Resolution",
        desc: "Set up arbitration or mediation mechanisms in the license.",
      },
    ],
    faqs: [
      {
        question: "Is a license mandatory?",
        answer:
          "You must license to authorize use legally; otherwise, use infringes copyright.",
      },
      {
        question: "Can licenses be exclusive?",
        answer:
          "Yes—exclusive licenses grant sole rights to one licensee, barring all others.",
      },
      {
        question: "What is a compulsory license?",
        answer:
          "A license granted by the Copyright Board when owner refuses reasonable terms.",
      },
      {
        question: "Must agreements be registered?",
        answer:
          "Registration isn’t mandatory but helps in enforcement by public record.",
      },
      {
        question: "Can I sublicense?",
        answer: "Only if the agreement expressly grants sublicensing rights.",
      },
    ],
  },

  "copyright-objection": {
    overview: {
      heading: "An Overview of Copyright Objection",
      paragraphs: [
        "A Copyright Objection is a formal challenge to the validity, ownership, or scope of a registered copyright under the Copyright Act, 1957.",
        "It provides a legal mechanism to dispute infringements or incorrect registrations, safeguarding creators’ exclusive rights.",
        "Dostatup offers end‑to‑end support—from drafting objections to representing you at hearings—to resolve disputes efficiently.",
      ],
    },
    features: [
      {
        icon: "⚖️",
        title: "Legal Challenge",
        description:
          "Allows you to formally dispute a copyright registration or alleged infringement.",
      },
      {
        icon: "🕵️",
        title: "Evidence Submission",
        description:
          "You can submit proof of authorship, registration irregularities, or infringement.",
      },
      {
        icon: "⏱️",
        title: "30‑Day Response",
        description:
          "Registered owner has 30 days to reply once notified of your objection.",
      },
      {
        icon: "🏛️",
        title: "Hearing & Appeal",
        description:
          "Cases may proceed to hearing before the Copyright Office or IPAB appeal.",
      },
    ],
    benefits: [
      {
        title: "Protect Your Rights",
        description:
          "Asserts your claim against unauthorized registrations or uses.",
      },
      {
        title: "Prevent Infringement",
        description: "Stops ongoing misuse while the objection is pending.",
      },
      {
        title: "Formal Resolution",
        description:
          "Provides an official decision to clarify ownership disputes.",
      },
      {
        title: "Compensation Claims",
        description: "Enables recovery of damages if infringement is proven.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Draft Statement of Objection",
          desc: "Clearly outline grounds—ownership dispute, infringement, or procedural error.",
        },
        {
          title: "Attach Evidence",
          desc: "Provide registration certificate, work samples, authorship proof, and POA.",
        },
        {
          title: "Submit to Copyright Office",
          desc: "File objection with prescribed fee and receive acknowledgment.",
        },
        {
          title: "Respond to Queries",
          desc: "Answer any queries or provide additional documents if requested.",
        },
        {
          title: "Attend Hearing",
          desc: "Present your case before the examiner or IPAB tribunal.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Can Object?",
        items: [
          "Original author or copyright owner",
          "Licensed user disputing misuse",
          "Assignee or transferee of exclusive rights",
        ],
      },
      {
        heading: "Valid Grounds",
        items: [
          "Dispute over authorship or ownership",
          "Allegation of substantial infringement",
          "Procedural irregularities in registration",
        ],
      },
    ],
    services: [
      {
        title: "Objection Drafting",
        desc: "Prepare legally sound statements and gather supporting evidence.",
      },
      {
        title: "Procedure Management",
        desc: "Handle all filings, fee payments, and office correspondence.",
      },
      {
        title: "Representation",
        desc: "Advocate for you at hearings before the Copyright Office or IPAB.",
      },
      {
        title: "Appeal Support",
        desc: "Assist in appeals if the initial decision is unfavorable.",
      },
    ],
    faqs: [
      {
        question: "What is a copyright objection?",
        answer:
          "A formal challenge against a copyright registration or alleged infringement.",
      },
      {
        question: "Who may file an objection?",
        answer:
          "The owner, author, licensee, or assignee of the copyrighted work.",
      },
      {
        question: "How long to respond?",
        answer:
          "The registered owner has 30 days from notice to reply under the Act.",
      },
      {
        question: "Can objections be appealed?",
        answer:
          "Yes—unsatisfied parties may appeal to the IPAB within 3 months.",
      },
    ],
    types: {
      cards: [
        {
          title: "Weak Evidence",
          shortText: "Insufficient proof",
          backText:
            "Failing to submit clear authorship or registration documents weakens the objection.",
        },
        {
          title: "Late Filing",
          shortText: "Missed deadlines",
          backText:
            "Objecting after the statutory period or without notice risks dismissal.",
        },
        {
          title: "Vague Grounds",
          shortText: "Unclear basis",
          backText:
            "Lacking specific infringement or ownership claims undermines the challenge.",
        },
        {
          title: "Incomplete Fees",
          shortText: "Underpaid charges",
          backText: "Incorrect fee payment invalidates the objection filing.",
        },
        {
          title: "No Representation",
          shortText: "Skipping hearings",
          backText:
            "Not appearing at scheduled hearings forfeits your right to argue the case.",
        },
        {
          title: "Poor Documentation",
          shortText: "Missing attachments",
          backText:
            "Omitting required proofs or POA delays or dismisses the objection.",
        },
      ],
      roleBenefits: [
        "Officially assert your ownership or usage rights.",
        "Obtain an enforceable decision to resolve disputes.",
        "Prevent further unauthorized exploitation.",
        "Establish a record that supports future infringement claims.",
      ],
      differenceTable: {
        columns: ["S. No.", "Objection", "Infringement Suit"],
        rows: [
          [
            "1",
            "Procedure before Copyright Office/IPAB",
            "Civil suit in Courts",
          ],
          ["2", "30‑day response window", "Follows civil procedure timelines"],
          [
            "3",
            "Can cancel or amend registration",
            "Seeks damages and injunctions",
          ],
          ["4", "Lower filing fees", "Higher court filing costs"],
          ["5", "Administrative remedy", "Judicial remedy"],
        ],
      },
      timelineFees: [
        "Drafting & filing: 1–3 days",
        "Acknowledgment & notice: 7–14 days",
        "Owner’s reply period: 30 days",
        "Hearing scheduling: 30–60 days",
        "Decision issuance: 90–180 days",
        "Filing fee: ₹1,000–₹2,000",
      ],
    },
  },

  "patent-registration": {
    overview: {
      heading: "Patent Registration in India – An Overview",
      paragraphs: [
        "Patent registration grants inventors exclusive rights over their inventions—preventing others from making, using, or selling the invention without authorization for 20 years.",
        "The process begins with a patentability search, followed by filing a detailed application with the Indian Patent Office, publication, examination, and—if unopposed—grant of the patent.",
        "DoStartup leverages over a decade of IP expertise to streamline each step, ensuring robust protection and commercialization readiness for your innovations.",
      ],
    },
    features: [
      {
        icon: "🔍",
        title: "Patent Search",
        description:
          "Comprehensive novelty and prior‑art analysis to confirm patentability.",
      },
      {
        icon: "📝",
        title: "Application Drafting",
        description:
          "Preparation of complete specifications, claims, abstract, and drawings.",
      },
      {
        icon: "⚖️",
        title: "Examination Support",
        description:
          "Responding to objections and handling oppositions for smooth grant.",
      },
    ],
    benefits: [
      {
        title: "Exclusive Rights",
        description:
          "20‑year monopoly to manufacture, use, or license your invention.",
      },
      {
        title: "Monetization",
        description:
          "Generate revenue through licensing, assignments, or commercialization.",
      },
      {
        title: "Investment Magnet",
        description:
          "Patents enhance credibility and attract investors or partners.",
      },
      {
        title: "Global Expansion",
        description:
          "PCT and convention filings extend protection internationally.",
      },
    ],
    eligibility: [
      {
        heading: "Patentable Inventions",
        items: [
          "New products or processes (gadgets, chemical compositions, pharmaceuticals).",
          "Machines and apparatus with inventive steps.",
          "Innovative manufacturing or business methods.",
          "Biotechnology and certain software‑related inventions.",
        ],
      },
      {
        heading: "Non‑Patentable",
        items: [
          "Scientific theories, mathematical models, and abstract ideas.",
          "Literary, artistic or aesthetic creations.",
          "Natural phenomena and discoveries of known substances.",
        ],
      },
    ],
    documents: {
      steps: [
        {
          title: "Conduct Patent Search",
          desc: "Verify novelty via global patent databases.",
        },
        {
          title: "Draft Application",
          desc: "Prepare specification, claims, abstract, drawings and Section 8 statement.",
        },
        {
          title: "File with IPO",
          desc: "Submit provisional or complete application, forms, and fees online.",
        },
        {
          title: "Request Examination",
          desc: "File Form 18 within 48 months to initiate substantive examination.",
        },
        {
          title: "Respond to Objections",
          desc: "Address examination reports and any oppositions raised.",
        },
        {
          title: "Grant & Publication",
          desc: "Patent granted and published in the Patent Journal.",
        },
      ],
      violations: [],
      consequences: [],
    },
    services: [
      {
        title: "Patentability Analysis",
        desc: "Technical prior‑art search and freedom‑to‑operate opinion.",
      },
      {
        title: "Drafting & Filing",
        desc: "End‑to‑end preparation and e‑filing of provisional/complete applications.",
      },
      {
        title: "Office Action Management",
        desc: "Drafting responses to examination reports and opposition defense.",
      },
      {
        title: "Global Filings",
        desc: "Assistance with PCT national phase and convention country entries.",
      },
    ],
    faqs: [
      {
        question: "What is a patent?",
        answer:
          "A legal grant giving inventors exclusive rights to their invention for 20 years.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Approximately 3–5 years, depending on examination workload and objections.",
      },
      {
        question: "Can I commercialize immediately?",
        answer:
          "You may use ‘patent pending’ status; full enforcement rights begin upon grant.",
      },
      {
        question: "What fees apply?",
        answer:
          "Government fees vary by applicant type and claim count; professional fees extra.",
      },
      {
        question: "Is international protection automatic?",
        answer:
          "No—separate PCT or convention filings are required for foreign patents.",
      },
    ],
    types: {
      cards: [
        {
          title: "Inadequate Search",
          shortText: "Skipping prior‑art check",
          backText:
            "Fails to detect existing disclosures, risking rejection for lack of novelty.",
        },
        {
          title: "Vague Claims",
          shortText: "Overly broad or unclear claims",
          backText: "Leads to objections or narrow scope of protection.",
        },
        {
          title: "Deadline Miss",
          shortText: "Missing examination request",
          backText:
            "Application deemed withdrawn if Form 18 not filed in time.",
        },
        {
          title: "Poor Drawings",
          shortText: "Low‑quality figures",
          backText: "Unsuitable drawings can cause non‑compliance objections.",
        },
        {
          title: "Incomplete Forms",
          shortText: "Missing declarations or forms",
          backText:
            "Administrative defects delay processing or lead to refusal.",
        },
        {
          title: "Expired Priority",
          shortText: "Late convention claim",
          backText: "Loss of priority date reduces patent term or novelty.",
        },
      ],
      roleBenefits: [
        "Ensures exclusive commercialization rights.",
        "Provides legal basis for infringement actions.",
        "Enables licensing and technology transfer.",
        "Attracts funding and strategic partnerships.",
      ],
      differenceTable: {
        columns: ["S. No.", "Patent", "Copyright"],
        rows: [
          [
            "1",
            "Protects inventions (products/processes)",
            "Protects creative expression",
          ],
          ["2", "20‑year term from filing", "Life of author + 60 years"],
          ["3", "Requires substantive examination", "Automatic on fixation"],
          ["4", "Claims define scope", "Covers entire work as fixed"],
          ["5", "Enforced via Patent Act", "Enforced via Copyright Act"],
        ],
      },
      timelineFees: [
        "Search & drafting: 1–2 weeks",
        "Provisional filing: Day 1",
        "Complete filing: +12 months from provisional",
        "Examination request: ≤48 months",
        "Response to report: Within prescribed months",
        "Grant: ~3–5 years",
        "Official fees: ₹1,600–₹8,000 (per applicant type)",
      ],
    },
  },

  "indian-patent-search": {
    overview: {
      heading: "An Overview of Indian Patent Search",
      paragraphs: [
        "Indian Patent Search examines patent databases like InPASS and the Patent Register to assess novelty, inventive step, and freedom to operate for inventions.",
        "It is the critical first step in the patent lifecycle—informing patentability, guiding application strategy, and minimizing infringement risk.",
        "DoStartup’s experts deliver thorough searches and actionable insights to support your IP decisions.",
      ],
    },
    features: [
      {
        icon: "🔍",
        title: "InPASS Advanced Search",
        description:
          "Keyword, IPC code, applicant and inventor name queries in India’s official patent database.",
      },
      {
        icon: "📑",
        title: "Patent Register Lookup",
        description:
          "Access legal status, grant dates, and full specifications of published and granted patents.",
      },
      {
        icon: "🌐",
        title: "Global Coverage",
        description:
          "Supplement with WIPO PATENTSCOPE, Google Patents, and USPTO to map international prior art.",
      },
    ],
    benefits: [
      {
        title: "Patentability Assessment",
        description: "Determine novelty and inventive step before filing.",
      },
      {
        title: "Freedom to Operate",
        description:
          "Identify third‑party patents that may block commercialization.",
      },
      {
        title: "Competitive Intelligence",
        description: "Analyze rival technologies and filing trends.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Avoid costly infringement and litigation by early detection.",
      },
    ],
    eligibility: [
      {
        heading: "Who Should Conduct a Search?",
        items: [
          "Inventors planning a patent application",
          "Companies evaluating R&D investments",
          "Investors assessing IP portfolios",
          "Law firms and patent attorneys advising clients",
        ],
      },
    ],
    documents: {
      steps: [
        {
          title: "Invention Disclosure",
          desc: "Complete technical description, drawings, and claims outline.",
        },
        {
          title: "Classification Codes",
          desc: "Identify relevant IPC/CPC codes for targeted searching.",
        },
        {
          title: "Pre‑existing Filings",
          desc: "Gather any prior provisional or PCT application details.",
        },
      ],
      violations: [],
      consequences: [],
    },
    services: [
      {
        title: "Comprehensive Prior Art Search",
        desc: "In‑depth review of Indian and global patent literature.",
      },
      {
        title: "Freedom to Operate Analysis",
        desc: "Mapping of existing patents that may affect your product launch.",
      },
      {
        title: "Patentability Opinion",
        desc: "Expert assessment of novelty, inventive step, and industrial applicability.",
      },
      {
        title: "Monitoring & Watch",
        desc: "Ongoing alerts for new patent publications in your technology area.",
      },
    ],
    faqs: [
      {
        question: "Is a patent search mandatory?",
        answer:
          "No, but it is highly recommended to validate novelty and avoid infringement.",
      },
      {
        question: "Can I search patents myself?",
        answer:
          "Yes, using InPASS, but professional analysis ensures comprehensiveness.",
      },
      {
        question: "How long does a search take?",
        answer: "Typically 1–2 weeks, depending on complexity and scope.",
      },
      {
        question: "Does a search guarantee patentability?",
        answer:
          "It informs patentability but does not replace examination by the Patent Office.",
      },
      {
        question: "How often should I update my search?",
        answer: "Monitor monthly or quarterly for new filings in your field.",
      },
    ],
    types: {
      cards: [
        {
          title: "Keyword Overload",
          shortText: "Too broad keywords",
          backText:
            "Yields irrelevant results—narrow down with synonyms and codes.",
        },
        {
          title: "IPC Misclassification",
          shortText: "Wrong patent class",
          backText:
            "Misses key documents—ensure correct IPC/CPC codes are used.",
        },
        {
          title: "Database Gaps",
          shortText: "Ignoring non‑patent literature",
          backText:
            "Overlooks prior art in journals and technical publications.",
        },
        {
          title: "Single‑Jurisdiction",
          shortText: "Only Indian patents",
          backText:
            "Fails to spot global conflicts—include PCT and foreign filings.",
        },
        {
          title: "No Monitoring",
          shortText: "One‑time search only",
          backText: "Misses new publications—set up patent watch services.",
        },
        {
          title: "Superficial Analysis",
          shortText: "Skipping full-text review",
          backText:
            "Important details hidden in claims or descriptions can be overlooked.",
        },
      ],
      roleBenefits: [
        "Supports strategic patent filing decisions.",
        "Reduces risk of infringing third‑party rights.",
        "Guides R&D by identifying technological gaps.",
        "Enhances value of IP portfolio through timely updates.",
      ],
      differenceTable: {
        columns: [
          "S. No.",
          "Patentability Search",
          "Freedom to Operate Search",
        ],
        rows: [
          [
            "1",
            "Checks novelty vs. prior art",
            "Checks third‑party rights clearance",
          ],
          ["2", "Focused on inventive step", "Focused on infringement risk"],
          ["3", "Conducted pre‑filing", "Conducted pre‑launch"],
          ["4", "Broad literature review", "Targeted patent analysis"],
          [
            "5",
            "Advises on filing strategy",
            "Advises on market entry strategy",
          ],
        ],
      },
      timelineFees: [
        "Initial scoping & k‑map: 1–2 days",
        "Full search report: 1–2 weeks",
        "FTO analysis: +1 week",
        "Monitoring setup: 1 day",
        "Fees: ₹15,000–₹50,000 depending on scope",
      ],
    },
  },

  "patent-revocation": {
    overview: {
      heading: "Overview of Patent Revocation in India",
      paragraphs: [
        "Patent revocation is the legal process to challenge and nullify a granted patent on grounds such as lack of novelty, wrongful grant, public policy conflict, or non‑working in India.",
        "Sections 64–66 and 85 of the Patents Act, 1970 empower any interested person, the Central Government, or an infringement defendant to file petitions before IPAB or the appropriate court.",
        "DoStartup guides clients through every step—from grounds analysis and petition drafting to representation—ensuring robust defense or attack on patent validity.",
      ],
    },
    features: [
      {
        icon: "📄",
        title: "Grounds Analysis",
        description:
          "Identify applicable revocation grounds under Sections 64, 65, 66 or 85.",
      },
      {
        icon: "🖋️",
        title: "Petition Drafting",
        description:
          "Prepare Form 19/Form 22 petitions with supporting evidence and pleadings.",
      },
      {
        icon: "⚖️",
        title: "Representation",
        description:
          "Advocate before IPAB or High Court in infringement counterclaims.",
      },
    ],
    benefits: [
      {
        title: "Market Clearance",
        description:
          "Remove invalid patents to avoid pay‑to‑play royalties or injunctions.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Challenge weak patents early to reduce litigation expense.",
      },
      {
        title: "Public Interest",
        description:
          "Ensure essential innovations are accessible and affordable.",
      },
      {
        title: "Portfolio Clean‑Up",
        description: "Maintain a valid and enforceable patent portfolio.",
      },
    ],
    eligibility: [
      {
        heading: "Who Can File?",
        items: [
          "Any interested person or competitor",
          "Central Government (public interest or atomic energy)",
          "Defendant in an infringement suit via counterclaim",
        ],
      },
    ],
    documents: {
      steps: [
        {
          title: "Identify Grounds",
          desc: "Select relevant section(s)—64 (general), 65 (atomic energy), 66 (public interest), 85 (non‑working).",
        },
        {
          title: "Gather Evidence",
          desc: "Collect prior art, TKDL references, working statements, licensing records.",
        },
        {
          title: "Draft Petition",
          desc: "Prepare detailed revocation petition (Form 19/22) with affidavit and exhibits.",
        },
        {
          title: "File with Jurisdiction",
          desc: "Submit to IPAB or District/High Court as appropriate.",
        },
        {
          title: "Attend Hearings",
          desc: "Argue the case, respond to counter‑arguments, and present witnesses.",
        },
      ],
      violations: [],
      consequences: [],
    },
    services: [
      {
        title: "Grounds Evaluation",
        desc: "Expert analysis of patent claims and statutory non‑compliance.",
      },
      {
        title: "Evidence Compilation",
        desc: "Prior art search, TKDL review, working affidavit preparation.",
      },
      {
        title: "Petition Filing",
        desc: "Electronic and physical filing with IPAB or courts.",
      },
      {
        title: "Full Litigation Support",
        desc: "Representation through hearings, appeals, and settlement negotiations.",
      },
    ],
    faqs: [
      {
        question: "What is patent revocation?",
        answer:
          "Cancellation of a granted patent’s rights, rendering it void ab initio or prospectively.",
      },
      {
        question: "Which sections cover revocation?",
        answer:
          "Sections 64 (general), 65 (atomic energy), 66 (public interest) and 85 (non‑working).",
      },
      {
        question: "Who may file a counterclaim?",
        answer:
          "A defendant in a patent infringement suit may seek revocation as a counterclaim.",
      },
      {
        question: "Where are petitions filed?",
        answer:
          "Before IPAB (for standalone revocation) or High/District Court (as counterclaim).",
      },
      {
        question: "Can government revoke patents?",
        answer:
          "Yes—under Section 66 for public interest or Section 65 for atomic energy inventions.",
      },
    ],
    types: {
      cards: [
        {
          title: "Weak Grounds",
          shortText: "Insufficient statutory basis",
          backText:
            "Petition fails if grounds do not match Sections 64–66 or 85 criteria.",
        },
        {
          title: "Poor Evidence",
          shortText: "Unsubstantiated prior art",
          backText:
            "Rejection if prior art documents are outdated or irrelevant.",
        },
        {
          title: "Wrong Forum",
          shortText: "Incorrect filing venue",
          backText: "Delay or dismissal if filed outside IPAB or proper court.",
        },
        {
          title: "Missed Deadline",
          shortText: "Statutory time lapses",
          backText:
            "Certain revocations (e.g., Section 25 post‑grant) have strict windows.",
        },
        {
          title: "Incomplete Petition",
          shortText: "Missing forms or affidavits",
          backText:
            "Administrative defects can lead to abandon or return of petition.",
        },
        {
          title: "Ignoring TKDL",
          shortText: "Overlooking traditional knowledge",
          backText:
            "Government revokes when patent conflicts with documented TKDL entries.",
        },
      ],
      roleBenefits: [
        "Invalid patents removed, reducing royalty burdens.",
        "Strengthens freedom‑to‑operate for new products.",
        "Clears way for generic or competing innovations.",
        "Aligns patent estate with business objectives.",
      ],
      differenceTable: {
        columns: ["S. No.", "Post‑Grant Opposition", "Revocation Petition"],
        rows: [
          [
            "1",
            "File within 1 year of grant (Section 25)",
            "No time limit—any time after grant",
          ],
          ["2", "Handled by Controller", "Heard by IPAB or courts"],
          [
            "3",
            "Limited grounds under Section 25(2)",
            "Broad grounds under Section 64–66 & 85",
          ],
          ["4", "Non‑litigious process", "Litigation‑style hearings & appeals"],
          [
            "5",
            "No counterclaim in infringement",
            "Can be counterclaim in suit",
          ],
        ],
      },
      timelineFees: [
        "Grounds analysis: 1–3 days",
        "Petition drafting: 1 week",
        "Filing & adm. fees: ₹10,000–₹25,000",
        "First hearing: 1–3 months",
        "Final decision: 12–18 months",
      ],
    },
  },

  "design-registration": {
    overview: {
      heading: "Design Registration with DOstartup",
      paragraphs: [
        "Secure your product’s visual identity in just 1–2 working days with our legal experts.",
        "Design registration grants exclusive legal rights to the visual features of your product—its shape, style, surface pattern, or ornamentation—under the Designs Act, 2000.",
        "Protect your innovation, prevent copying, and build a strong visual brand identity with end‑to‑end online filing and support.",
      ],
    },
    features: [
      {
        icon: "🔍",
        title: "Design Search",
        description:
          "Comprehensive search of up to 10 concepts for prior‑art clearance.",
      },
      {
        icon: "✅",
        title: "Expert Review",
        description:
          "Originality & eligibility check by design law specialists.",
      },
      {
        icon: "📂",
        title: "End‑to‑End Filing",
        description: "Complete application preparation and submission.",
      },
      {
        icon: "⚡",
        title: "Priority Filing",
        description: "Expedited processing for urgent registrations.",
      },
      {
        icon: "🤝",
        title: "Assignment & Licensing",
        description: "Drafting and recording of assignments or licenses.",
      },
      {
        icon: "💬",
        title: "Free Consultation",
        description: "30‑min session with IPR experts to clarify your needs.",
      },
    ],
    benefits: [
      {
        title: "Legal Monopoly",
        description: "Exclusive rights to use and license your design.",
      },
      {
        title: "Market Advantage",
        description: "Enhance product desirability and investor confidence.",
      },
      {
        title: "Innovation Incentive",
        description:
          "Encourage creativity and differentiation in your industry.",
      },
      {
        title: "Global Leverage",
        description:
          "Use Indian registration as a basis for WTO member filings.",
      },
      {
        title: "Long‑Term Protection",
        description:
          "10 years initial term with a one‑time 5‑year renewal option.",
      },
    ],
    eligibility: [
      {
        heading: "Who Can Apply?",
        items: [
          "Author or original proprietor",
          "Assignee or legal representative (including NRIs)",
          "Firms, partnerships, or companies",
        ],
      },
    ],
    documents: {
      steps: [
        {
          title: "Prepare Application",
          desc: "Complete Form‑1 and power of attorney (Form‑21/Form‑24 if small entity).",
        },
        {
          title: "Create Representations",
          desc: "Provide clear drawings or images of your design.",
        },
        {
          title: "Submit Priority Docs",
          desc: "Include priority proof if filing within 6 months of foreign application.",
        },
        {
          title: "File Online",
          desc: "E‑file all forms and upload supporting affidavits and MSME certificate.",
        },
        {
          title: "Receive Certificate",
          desc: "Controller issues registration certificate upon acceptance.",
        },
      ],
      violations: [],
      consequences: [],
    },
    types: {
      cards: [
        {
          title: "Incorrect Class",
          shortText: "Wrong product classification",
          backText:
            "Can leave gaps in protection if filed under the wrong class.",
        },
        {
          title: "Poor Representations",
          shortText: "Low‑quality images",
          backText: "May lead to objections or refusal during examination.",
        },
        {
          title: "Non‑Original Designs",
          shortText: "Lack of novelty",
          backText: "Existing designs in prior art can result in rejection.",
        },
        {
          title: "Missing Affidavits",
          shortText: "Incomplete paperwork",
          backText:
            "Affidavit under Rule 42 is mandatory for small entities or fast track.",
        },
        {
          title: "Late Renewal",
          shortText: "Missed renewal window",
          backText:
            "Design rights lapse if not renewed before expiry or in grace period.",
        },
        {
          title: "Trademark Overlap",
          shortText: "Conflicts with brand marks",
          backText:
            "Logos and brand identifiers belong under trademark law, not design.",
        },
      ],
      roleBenefits: [
        "Secure exclusive use and enforcement rights.",
        "Leverage design as a valuable intangible asset.",
        "License or assign for new revenue streams.",
        "Prevent unauthorized copying and market dilution.",
      ],
      differenceTable: {
        columns: ["Aspect", "Trademark", "Design Registration"],
        rows: [
          ["Coverage", "Brand identifiers (name, logo)", "Product appearance"],
          ["Governing Law", "Trademark Act, 1999", "Designs Act, 2000"],
          ["Duration", "10 yrs renewable", "10 yrs + 5‑yr renewal"],
          ["Focus", "Source identification", "Aesthetic features"],
          ["Example", "Nike swoosh", "Unique shoe silhouette"],
        ],
      },
      timelineFees: [
        "Search & review: 1–2 days",
        "Filing completion: same day",
        "Examination report: 4–6 months",
        "Government fee: ₹1,000–₹4,000",
        "Certificate issuance: 10–12 months",
      ],
    },
    services: [],
    faqs: [
      {
        question: "What does design registration protect?",
        answer:
          "The visual appearance—shape, pattern, ornamentation—of an article.",
      },
      {
        question: "How long is the protection?",
        answer:
          "10 years from registration date, with a one‑time 5‑year extension.",
      },
      {
        question: "Can I register a logo under design law?",
        answer:
          "No. Logos fall under trademark or copyright, not industrial design.",
      },
      {
        question: "Is online filing mandatory?",
        answer:
          "Yes. DOstartup offers a full online process with no physical visits needed.",
      },
      {
        question: "What if my application is rejected?",
        answer:
          "We assist with objections, modifications, re‑filing, or appeals if necessary.",
      },
      {
        question: "Can I claim priority?",
        answer:
          "Yes—file within 6 months of first application in a convention country.",
      },
      {
        question: "How do I renew my design?",
        answer:
          "File Form‑3 within one year before expiry; 12‑month grace period with late fees.",
      },
      {
        question: "Can designs be assigned?",
        answer:
          "Yes. Assignments or licenses are recorded with the Controller of Designs.",
      },
      {
        question: "What are the government fees?",
        answer:
          "Varies by applicant type: individuals/SMEs from ₹1,000, companies up to ₹4,000.",
      },
      {
        question: "Why choose DOstartup?",
        answer:
          "Fast 1–2 day filing, 99% success, transparent pricing, and 5,000+ designs registered.",
      },
    ],
  },

  "trademark-rectification": {
    overview: {
      heading: "Trademark Rectification with DOstartup",
      paragraphs: [
        "Correct errors or remove outdated entries in the Trademark Register with expert guidance from DOstartup’s IPR team.",
        "Under Section 57 of the Trade Marks Act, 1999, aggrieved parties can apply to correct, modify, or cancel registered trademark entries post‑registration.",
        "Avoid legal conflicts and ensure your trademark record aligns with current business use and regulations.",
      ],
    },
    services: [],
    features: [
      {
        icon: "📝",
        title: "Application Drafting",
        description:
          "Prepare and file TM‑O with clear grounds and supporting evidence.",
      },
      {
        icon: "⚖️",
        title: "Legal Representation",
        description:
          "Court and Registry hearings handled by experienced trademark attorneys.",
      },
      {
        icon: "📂",
        title: "Document Preparation",
        description:
          "Compile affidavits, counter‑statements, and proof of misuse or non‑use.",
      },
      {
        icon: "🔔",
        title: "Status Updates",
        description:
          "Regular notifications on registry actions, objections, and orders.",
      },
      {
        icon: "💡",
        title: "Strategic Advice",
        description:
          "Prevent future errors and ensure compliance with renewal and usage requirements.",
      },
    ],
    benefits: [
      {
        title: "Correct Registry Entries",
        description:
          "Update or remove incorrect, expired, or unused trademarks.",
      },
      {
        title: "Maintain Brand Integrity",
        description:
          "Avoid marketplace confusion and protect your trademark’s distinctiveness.",
      },
      {
        title: "Prevent Legal Disputes",
        description:
          "Resolve inaccuracies before they escalate into infringement or opposition.",
      },
      {
        title: "Ensure Compliance",
        description:
          "Align your trademark record with current use and statutory requirements.",
      },
    ],
    eligibility: [
      {
        heading: "Who Can Apply?",
        items: [
          "Trademark proprietors seeking to correct their own entries",
          "Aggrieved third parties or competitors",
          "Any person misled or affected by a wrongly registered mark",
        ],
      },
    ],
    documents: {
      steps: [
        {
          title: "Form TM‑O Preparation",
          desc: "Draft in triplicate, stating grounds for rectification or cancellation.",
        },
        {
          title: "Evidence Collection",
          desc: "Affidavits and documents proving non‑use, expiry, or mis‑registration.",
        },
        {
          title: "Filing & Fees",
          desc: "E‑file TM‑O with prescribed government fee at the appropriate Registry.",
        },
        {
          title: "Registry Hearing",
          desc: "Attend hearing; submit counter‑statements and additional proof if required.",
        },
        {
          title: "Final Order",
          desc: "Receive Registrar’s decision to rectify, remove, or cancel the trademark entry.",
        },
      ],
      violations: [],
      consequences: [],
    },
    types: {
      cards: [
        {
          title: "Non‑Use for 5 Years",
          shortText: "Trademark unused",
          backText:
            "Can be removed if not used for 5 consecutive years post‑registration.",
        },
        {
          title: "Failure to Renew",
          shortText: "Expired registration",
          backText:
            "Expired marks remain on register until formally rectified.",
        },
        {
          title: "Clerical Errors",
          shortText: "Incorrect details",
          backText:
            "Typos or wrong class entries can be corrected via rectification.",
        },
        {
          title: "Scope Overreach",
          shortText: "Excess goods/services",
          backText: "Remove goods/services beyond the mark’s actual use.",
        },
        {
          title: "Fraudulent Registration",
          shortText: "Misrepresentation",
          backText:
            "Cancel registrations obtained by concealment or false statements.",
        },
        {
          title: "Similarity Conflicts",
          shortText: "Likelihood of confusion",
          backText:
            "Remove marks confusingly similar to earlier registered trademarks.",
        },
      ],
      roleBenefits: [
        "Restore accuracy of the Trademark Register.",
        "Eliminate risks of enforcement challenges.",
        "Streamline future trademark maintenance.",
        "Reinforce legal standing of your marks.",
      ],
      differenceTable: {
        columns: ["Aspect", "Opposition", "Rectification"],
        rows: [
          ["Purpose", "Block new registrations", "Correct existing entries"],
          ["When Filed", "Before registration", "After registration"],
          [
            "Grounds",
            "Prior use, bad faith",
            "Non‑use, clerical errors, mis‑registration",
          ],
          ["Form", "TM‑E or TM‑A", "TM‑O"],
          ["Outcome", "Refusal or partial acceptance", "Amendment or removal"],
        ],
      },
      timelineFees: [
        "Draft & review: 1–2 days",
        "Filing to Registry number: 3–5 days",
        "Hearing notice: 6–8 weeks",
        "Final order: 4–6 months",
        "Government fee: ₹2,000–₹5,000",
      ],
    },
    faqs: [
      {
        question: "What is trademark rectification?",
        answer:
          "A procedure to correct, modify, or delete entries in the Trademark Register under Section 57.",
      },
      {
        question: "Who can file for rectification?",
        answer:
          "Proprietors, aggrieved third parties, or anyone misled by a wrongly registered mark.",
      },
      {
        question: "Which form is used?",
        answer: "TM‑O, filed in triplicate with supporting evidence.",
      },
      {
        question: "Can I rectify my own trademark?",
        answer:
          "Yes—you can correct clerical errors, update classes, or remove expired entries.",
      },
      {
        question: "What happens after filing?",
        answer:
          "Registry serves notice, conducts hearings, and issues a final order to amend or cancel the entry.",
      },
      {
        question: "Will rectification cancel my mark?",
        answer:
          "Only if non‑use, fraud, or mis‑registration grounds are proven; otherwise corrections are made.",
      },
      {
        question: "Can pending rectification stop infringement suits?",
        answer:
          "No—rectification and infringement actions proceed independently.",
      },
      {
        question: "How long does rectification take?",
        answer:
          "Typically 4–6 months, depending on Registry workload and complexity.",
      },
      {
        question: "What is the fee?",
        answer:
          "Varies by entity type and grounds; contact DOstartup for a personalized quote.",
      },
      {
        question: "Why choose DOstartup?",
        answer:
          "Over 10 years’ experience, 400+ experts, 99% on‑time delivery, and pan‑India reach.",
      },
    ],
  },

  "international-trademark-registration": {
    overview: {
      heading:
        "International Trademark Registration – Madrid Protocol Made Simple",
      paragraphs: [
        "DOstartup helps you protect your brand in over 120 countries with a single international trademark application through the Madrid Protocol.",
        "International trademark registration streamlines the process of securing brand rights across multiple jurisdictions. With DOstartup's legal and procedural support, the process is completed in just 3 to 5 working days.",
        "It enables brand owners to gain exclusive usage rights, fight infringement globally, and enhance global brand value through a single WIPO-compliant filing.",
        "The system is ideal for exporters, e-commerce platforms, startups, and global businesses looking to expand internationally.",
      ],
    },

    benefits: [
      {
        title: "Legal Protection",
        description:
          "Safeguard your brand against global infringement and unauthorized usage.",
      },
      {
        title: "Global Business Opportunities",
        description:
          "Facilitates licensing, franchising, and global expansion in foreign markets.",
      },
      {
        title: "Consistent Global Identity",
        description:
          "Maintain a uniform brand presence and exclusivity across borders.",
      },
      {
        title: "Ideal for Digital & E-Commerce",
        description:
          "Protect your brand while conducting cross-border e-commerce and exports.",
      },
      {
        title: "Brand Valuation",
        description:
          "Registered trademarks increase brand credibility and investor confidence.",
      },
    ],
    features: [
      {
        icon: "📝",
        title: "International Filing via Madrid Protocol",
        description:
          "Single application process for 120+ countries under WIPO's Madrid System.",
      },
      {
        icon: "🔍",
        title: "Trademark Search in 10 Jurisdictions",
        description:
          "Free availability check across selected global markets to avoid conflicts.",
      },
      {
        icon: "🌐",
        title: "Multilingual Documentation",
        description:
          "WIPO-compliant forms prepared in multiple languages for designated countries.",
      },
      {
        icon: "🌎",
        title: "Liaison with Designated Member Countries",
        description:
          "Coordination with national IP offices for objections, approvals, or renewals.",
      },
      {
        icon: "🔔",
        title: "Trademark Watch & Monitoring",
        description:
          "Active surveillance to prevent infringement or misuse of your registered marks.",
      },
      {
        icon: "📞",
        title: "Free 30-minute IP Consultation",
        description:
          "Connect with expert consultants to plan jurisdiction and trademark classes.",
      },
      {
        icon: "📋",
        title: "End-to-End Legal Support",
        description:
          "From filing to appeals, we handle all procedural and legal documentation.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Identity and Address Proof",
          desc: "Government-issued ID and proof of address for the applicant or business entity.",
        },
        {
          title: "Indian Trademark Certificate or Application",
          desc: "Copy of the existing or pending Indian trademark, which forms the basis for international filing.",
        },
        {
          title: "Business Incorporation Proof",
          desc: "Certificate of incorporation or business registration for companies or firms.",
        },
        {
          title: "Power of Attorney",
          desc: "Authorization to represent the applicant during filing and legal follow-up (if applicable).",
        },
        {
          title: "List of Designated Countries",
          desc: "Countries where the applicant seeks protection under the Madrid Protocol.",
        },
        {
          title: "Trademark Logo and Specification",
          desc: "Visual representation and classification of goods/services under NICE classification.",
        },
        {
          title: "Form MM2",
          desc: "WIPO's official application form for international registration.",
        },
        {
          title: "MSME/Udyam Certificate (Optional)",
          desc: "For startups and small entities seeking fee concessions (if applicable).",
        },
        {
          title: "Priority Documents or Affidavits",
          desc: "If claiming priority from an earlier trademark application abroad.",
        },
      ],
      violations: [],
      consequences: [],
    },

    eligibility: [
      {
        heading: "Eligibility for International Trademark Filing",
        items: [
          "Must be a national or domiciled in India or have a real business establishment in India.",
          "Must own a registered or pending trademark with the Indian Trademark Registry.",
          "The international application must correspond to the Indian trademark in goods/services scope.",
          "Must designate one or more Madrid Protocol member countries for protection.",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Identity and address proof of the applicant",
          "Business registration certificate",
          "Power of Attorney (if applicable)",
          "Copy of registered/pending Indian trademark",
          "List of target Madrid member countries",
          "Trademark logo (if applicable)",
          "List of goods and services",
          "MSME certificate (optional)",
          "Form MM2 (WIPO application form)",
          "Priority documents or user affidavit (if applicable)",
        ],
      },
    ],
    services: [],
    faqs: [
      {
        question: "What is an international trademark registration?",
        answer:
          "It allows a trademark owner to seek protection in multiple countries with a single application under the Madrid Protocol administered by WIPO.",
      },
      {
        question:
          "Who is eligible to apply for international trademark registration?",
        answer:
          "Nationals or residents of a Madrid Protocol country with a registered or pending national trademark.",
      },
      {
        question: "Do I need to register my trademark in India first?",
        answer:
          "Yes, Indian applicants must first file or register a trademark with the Indian Trademark Registry.",
      },
      {
        question: "Which countries are covered under the Madrid Protocol?",
        answer:
          "More than 120 countries including the USA, EU, China, Japan, UK, and Australia.",
      },
      {
        question: "How long is the international trademark valid?",
        answer:
          "Valid for 10 years and can be renewed indefinitely every 10 years.",
      },
      {
        question: "Can I add more countries later?",
        answer:
          "Yes, additional countries can be designated later via subsequent designation.",
      },
      {
        question: "What happens if my mark is opposed in one country?",
        answer:
          "You can respond or appeal under that country’s national laws; DOstartup provides assistance.",
      },
      {
        question: "Can I transfer my international trademark?",
        answer:
          "Yes, it can be assigned or transferred with proper documentation through WIPO.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [
        "Centralized protection for brand in 120+ countries.",
        "Single-window application via Madrid Protocol.",
        "Reduced costs and paperwork vs. filing separately.",
        "WIPO-backed legal recognition and credibility.",
        "Ease of monitoring, renewing, and assigning trademarks globally.",
      ],
      differenceTable: {
        columns: [
          "Feature",
          "National Registration",
          "International Registration",
        ],
        rows: [
          ["Scope", "Single country", "Multiple countries"],
          ["Authority", "National IP office", "WIPO + national offices"],
          [
            "Filing",
            "Country-wise, individually",
            "Single centralized application",
          ],
          ["Renewal", "Individually in each country", "Centralized via WIPO"],
          [
            "Enforcement",
            "Within registered country only",
            "In all designated countries",
          ],
        ],
      },
      timelineFees: [
        "Trademark Search – We conduct a comprehensive search using WIPO’s Global Brand Database to ensure there are no conflicts.",
        "Application Filing – File the international application through India’s IP office or directly via WIPO’s e-filing system.",
        "WIPO Formal Examination – WIPO checks for formal compliance and publishes the mark in the International Register and Gazette.",
        "Examination by Designated Countries – National IP offices review the application within 12–18 months and issue acceptance or objections.",
        "Handle Objections – DOstartup assists in responding to objections or oppositions in coordination with local attorneys.",
        "Registration Certificate – Upon approval, WIPO issues the final international trademark registration.",
      ],
    },
  },

  "epr-registration": {
    overview: {
      heading: "EPR Registration in India – A Comprehensive Overview",
      paragraphs: [
        "Are you a manufacturer, importer, or brand owner dealing with electrical and electronic equipment (EEE), batteries, plastic packaging, or tires? If yes, then EPR registration with dostartup experts is essential to ensure regulatory compliance.",
        "Extended Producer Responsibility (EPR) registration involves obtaining official approval from either the Central Pollution Control Board (CPCB) or the State Pollution Control Board (SPCB). This process helps implement EPR responsibilities under the Plastic Waste Management Rules, 2016, E‑Waste (Management) Rules, 2016, or the Environment (Protection) Act, 1986.",
        "To specifically regulate plastic packaging, CPCB issues EPR registration certificates. All Producers, Importers, and Brand Owners (PIBOs) are required to register on the CPCB EPR Portal to fulfill their responsibilities under the plastic waste management framework.",
        "This combined effort of both central and state authorities supports a robust system for environmental protection, with CPCB leading in plastic waste oversight. The integration of processes ensures a well‑rounded waste management strategy across the country.",
      ],
    },
    features: [
      {
        icon: "💡",
        title: "Electrical & Electronic Equipment (EEE)",
        description:
          "Covered under the E‑Waste (Management) Rules, 2016; includes computers, TVs, refrigerators, etc.",
      },
      {
        icon: "🛍️",
        title: "Plastic Packaging Products",
        description:
          "Regulated by the Plastic Waste Management Rules, 2016; includes single‑use and multilayer packaging.",
      },
      {
        icon: "🔋",
        title: "Batteries & Accumulators",
        description:
          "Managed under the Batteries (Management and Handling) Rules, 2001; covers lead‑acid, lithium, and other chemistries.",
      },
      {
        icon: "📦",
        title: "Other Packaging Materials",
        description:
          "Governed by applicable environmental rules for paper, glass, metal and composite packaging.",
      },
    ],
    benefits: [
      {
        title: "Efficient Waste Management",
        description:
          "Ensures proper processing, recycling and disposal of plastic and electronic waste.",
      },
      {
        title: "Cost Optimization",
        description:
          "Reduces long‑term waste processing costs through better product design and partnerships.",
      },
      {
        title: "Positive Brand Image",
        description:
          "Boosts organizational goodwill as eco‑conscious customers prefer sustainable brands.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Demonstrates legal adherence and avoids penalties under CPCB/SPCB norms.",
      },
      {
        title: "Sustainable Development",
        description:
          "Conserves natural resources and promotes cleaner production practices.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Signed Application Form",
          desc: "Duly filled and signed EPR application on the CPCB/SPCB portal.",
        },
        {
          title: "Detailed EPR Plan",
          desc: "Description of collection, recycling and disposal mechanisms.",
        },
        {
          title: "Business Authorization",
          desc: "Certificate of Incorporation, PAN, IEC and address proof.",
        },
        {
          title: "MoUs & Agreements",
          desc: "Partnerships with recyclers, waste collectors and transporters.",
        },
        {
          title: "Awareness Programs",
          desc: "Details and budget for consumer awareness and outreach.",
        },
        {
          title: "Compliance Reports",
          desc: "Estimates of waste generation and evidence of past recycling performance.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Must Register",
        items: [
          "Producers, Importers and Brand Owners (PIBOs) operating in more than 2 states/UTs must apply via CPCB.",
          "PIBOs operating in 1–2 states/UTs must apply via the respective SPCB/PCC portals.",
        ],
      },
      {
        heading: "Importer-Specific Criteria",
        items: [
          "Products sold under your brand or original owner's name in India.",
          "Sales made directly or through third‑party distributors.",
        ],
      },
    ],
    services: [
      {
        title: "Portal Account Setup",
        desc: "Registration and login credentials on the CPCB EPR portal.",
      },
      {
        title: "Document Preparation",
        desc: "Compilation and digitization of all required files for upload.",
      },
      {
        title: "End-to-End Filing",
        desc: "Online application, fee payment and liaison with authorities.",
      },
      {
        title: "Renewal & Compliance",
        desc: "Reminders, updated submissions and performance reporting.",
      },
      {
        title: "Legal Advisory",
        desc: "Expert guidance on EPR obligations under Plastic & E‑Waste Rules.",
      },
    ],
    faqs: [
      {
        question: "What is EPR registration?",
        answer:
          "A mandatory certification for Producers, Importers and Brand Owners to manage their plastic, e‑waste, battery and other waste under environmental rules.",
      },
      {
        question: "How long does EPR registration take?",
        answer:
          "Typically 15–30 working days for issuance of the digital certificate.",
      },
      {
        question: "What is the validity of the certificate?",
        answer:
          "Plastic packaging: 1 year; EEE: 5 years, subject to continued compliance.",
      },
      {
        question: "When should I renew?",
        answer:
          "Apply for renewal at least 3 months before expiry, with updated documents and fees.",
      },
      {
        question: "Can I update my details post‑registration?",
        answer:
          "Yes, registered users can modify application data anytime via the portal.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incomplete Documentation",
          shortText: "Missing MoUs or incomplete EPR plan.",
          backText: "Leads to application rejection or delays.",
        },
        {
          title: "Wrong Category Selection",
          shortText: "Misclassifying waste type.",
          backText: "Causes non‑compliance with the correct rules.",
        },
        {
          title: "Late Renewal",
          shortText: "Missing the 3‑month pre‑expiry window.",
          backText: "Results in certificate lapse and penalties.",
        },
        {
          title: "Portal Errors",
          shortText: "Incorrect form submissions online.",
          backText: "Requires multiple corrections and follow‑ups.",
        },
        {
          title: "Incorrect Fee Payment",
          shortText: "Underpaying or overpaying initial or annual fees.",
          backText: "Leads to payment reconciliation issues.",
        },
        {
          title: "Unverified Partnerships",
          shortText: "MOUs with non‑CPCB approved recyclers.",
          backText: "Invalidates waste collection commitments.",
        },
      ],
      roleBenefits: [
        "Shifts waste management to producers, reducing public burden.",
        "Supports circular economy through recycling and reuse.",
        "Enhances brand value by demonstrating environmental responsibility.",
      ],
      differenceTable: {
        columns: ["Feature", "EPR for E‑Waste", "EPR for Plastic Waste"],
        rows: [
          ["Scope", "Entire electronics lifecycle", "Packaging materials only"],
          [
            "Authority",
            "CPCB/SPCB under E‑Waste Rules",
            "CPCB under PWM Rules",
          ],
          ["Validity", "5 years", "1 year"],
          ["Review Body", "SPCB/PCC or CPCB", "CPCB only"],
          [
            "Primary Goal",
            "Reduce hazardous e‑waste",
            "Minimize plastic pollution",
          ],
        ],
      },
      timelineFees: [
        "Application Filing & Portal Setup: 1–2 days",
        "Review & Approval: 15–30 working days",
        "Certificate Issuance: digital certificate upon approval",
        "Initial Fees: ₹5,000–₹50,000 depending on category and TPA",
        "Annual Fee: 25% of initial registration fee",
      ],
    },
  },

  "plastic-waste-authorization": {
    overview: {
      heading:
        "Plastic Waste Authorization in India – An Overview by DoStartup",
      paragraphs: [
        "India is facing a growing challenge in managing plastic waste due to rapid increase in disposable plastics. The existing waste management systems often struggle to keep up.",
        "Under the Plastic Waste Management Rules 2016, any entity involved in collecting, storing, transporting, processing or recycling plastic waste must obtain Plastic Waste Authorization from designated pollution control authorities.",
        "Timely authorization ensures legal compliance, avoids supply chain disruptions, and supports environmental sustainability.",
        "At DoStartup, we guide businesses through the entire authorization process for smooth compliance and fast approvals.",
      ],
    },
    features: [
      {
        icon: "✅",
        title: "Regulated Framework",
        description:
          "Ensures all plastic‑waste handlers operate under CPCB/SPCB oversight.",
      },
      {
        icon: "🌱",
        title: "Environmental Protection",
        description:
          "Reduces land and marine pollution through authorized disposal methods.",
      },
      {
        icon: "🤝",
        title: "CSR & Grants",
        description:
          "Demonstrates CSR commitment and unlocks government grants and incentives.",
      },
      {
        icon: "💼",
        title: "Business Expansion",
        description:
          "Taps new opportunities in recycling and waste‑management sectors.",
      },
    ],
    benefits: [
      {
        title: "Sustainable Operations",
        description:
          "Adopt best practices for plastic‑waste handling and recycling.",
      },
      {
        title: "Legal Compliance",
        description:
          "Avoid penalties under Plastic Waste Management Rules, 2016.",
      },
      {
        title: "Brand Reputation",
        description:
          "Enhance public trust by demonstrating environmental responsibility.",
      },
      {
        title: "GHG Reduction",
        description:
          "Minimize greenhouse gas emissions through proper waste disposal.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Consent/Approval",
          desc: "Valid consent from CPCB/SPCB/UTPCC.",
        },
        {
          title: "Business Proof",
          desc: "Certificate of Incorporation, MSME/Udyam certificate.",
        },
        {
          title: "Process Flowchart",
          desc: "Manufacturing/waste flow chart with volumes.",
        },
        {
          title: "EPR Plan",
          desc: "Extended Producer Responsibility action plan, if applicable.",
        },
        {
          title: "Testing Reports",
          desc: "Waste characterization or ETP/emission test reports.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Who Must Apply",
        items: [
          "Entities collecting, storing, transporting, processing or recycling plastic waste.",
          "Facilities with operational premises and required machinery.",
        ],
      },
      {
        heading: "Key Criteria",
        items: [
          "Valid business registration and environmental management plan.",
          "Annual reporting capability to SPCB/CPCB.",
        ],
      },
    ],
    services: [
      {
        title: "Application Filing",
        desc: "End‑to‑end online submission and fee payment support.",
      },
      {
        title: "Document Management",
        desc: "Compilation, digitization and portal upload of all required documents.",
      },
      {
        title: "Liaison with Authorities",
        desc: "Follow‑up with SPCB/CPCB for faster approvals.",
      },
      {
        title: "Renewals & Reporting",
        desc: "Timely reminders, updated submissions and annual return support.",
      },
    ],
    faqs: [
      {
        question: "What is Plastic Waste Authorization?",
        answer:
          "A legal certificate for entities handling plastic waste under PWM Rules, 2016.",
      },
      {
        question: "Who issues the authorization?",
        answer: "SPCB/UTPCC for 1–2 states; CPCB for multi‑state operations.",
      },
      {
        question: "How long is it valid?",
        answer: "Initially 1 year; renewable for further three‑year periods.",
      },
      {
        question: "When to renew?",
        answer: "Submit renewal at least 120 days before expiry.",
      },
      {
        question: "Penalties for non-compliance?",
        answer: "Cancellation, suspension or debarment under PWM Rules, 2016.",
      },
    ],
    types: {
      cards: [
        {
          title: "False Information",
          shortText: "Submitting misleading data",
          backText: "Leads to authorization cancellation",
        },
        {
          title: "Late Renewal",
          shortText: "Missing the 120‑day window",
          backText: "Results in lapse and penalties",
        },
        {
          title: "Incomplete Docs",
          shortText: "Missing flowcharts or reports",
          backText: "Causes application rejection",
        },
        {
          title: "Wrong Authority",
          shortText: "Applying to wrong board",
          backText: "Delays approval",
        },
        {
          title: "Non‑Compliance",
          shortText: "Failing annual returns",
          backText: "Triggers enforcement actions",
        },
        {
          title: "Unauthorized Activities",
          shortText: "Operations beyond scope",
          backText: "Leads to legal action",
        },
      ],
      roleBenefits: [
        "Ensures environmental compliance for waste handlers",
        "Supports circular economy through authorized recycling",
        "Enhances CSR credentials and access to incentives",
      ],
      differenceTable: {
        columns: [
          "Feature",
          "Plastic Waste Authorization",
          "Extended Producer Responsibility (EPR)",
        ],
        rows: [
          [
            "Businesses Involved",
            "Recyclers, processors, waste managers",
            "Producers, importers, brand owners",
          ],
          [
            "Scope",
            "Authorization to handle waste",
            "Obligation to collect/recycle branded waste",
          ],
          [
            "Governing Rule",
            "PWM Rules 2016",
            "PWM Rules 2016 + E‑Waste Rules 2016",
          ],
          [
            "Authority",
            "SPCB/UTPCC/CPCB",
            "CPCB for multi‑state; SPCB for local",
          ],
          [
            "Primary Objective",
            "Regulate waste handling operations",
            "Ensure producer accountability",
          ],
        ],
      },
      timelineFees: [
        "Account Setup & Application: 1–2 days",
        "Review & Document Scrutiny: 7–15 working days",
        "Approval & Certificate Issuance: within 30 days",
        "Initial Fees: ₹5,000–₹50,000 depending on capacity",
        "Renewal Fees: Same as initial; apply 120 days prior",
      ],
    },
  },

  "cd-waste-recycling": {
    overview: {
      heading: "Construction and Demolition Waste Recycling – An Overview",
      paragraphs: [
        "If you're aiming to build a scalable, sustainable business in waste management, starting a C&D Waste Recycling Plant could be your next strategic move. C&D Waste Recycling refers to the systematic collection, segregation, processing, and reuse of debris generated from construction, renovation, and demolition projects.",
        "As India urbanizes, the volume of construction‑related waste surges. Recycling this waste isn't just an environmental obligation—it’s an untapped business opportunity that addresses material shortages, supports circular‑economy practices, and aligns with national sustainability goals.",
        "Construction and Demolition Waste is generated during activities like site clearance, excavation, construction, renovation, and dismantling of structures—residential, commercial, and public infrastructure alike. It includes both hazardous and non‑hazardous waste, and accounts for nearly 40% of India’s total solid waste output.",
      ],
    },
    features: [
      {
        icon: "🚜",
        title: "Feed Hoppers & Pre‑Screening",
        description:
          "Automated loading and trommel/disc screening to remove oversized debris and lightweight material.",
      },
      {
        icon: "⚙️",
        title: "Crushing & Sizing",
        description:
          "High‑efficiency crushers and sizing screens break down concrete, brick, and masonry into graded aggregates.",
      },
      {
        icon: "🔄",
        title: "Metal & Wood Separation",
        description:
          "Magnetic, eddy‑current, and air‑classification systems recover steel, rebar, and wood for reuse.",
      },
      {
        icon: "💧",
        title: "Wash & Recovery Systems",
        description:
          "Hydrocyclones and water‑recovery plants clean aggregates and recycle process water.",
      },
    ],
    benefits: [
      {
        title: "Sustainable Development",
        description:
          "Reduces carbon footprint of infrastructure projects by reusing materials like sand and gravel.",
      },
      {
        title: "Cost Optimization",
        description:
          "Lowers procurement costs, landfill levies, and overall project expenditure through material recovery.",
      },
      {
        title: "Resource Conservation",
        description:
          "Diverts reusable materials from landfills, extending finite resources such as wood, cement, and steel.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Aligns operations with India’s C&D Waste Management Rules and SPCB/PCC environmental norms.",
      },
      {
        title: "Brand Reputation",
        description:
          "Demonstrates ESG commitment, boosting credibility with investors and sustainability‑focused clients.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Submit Form I",
          desc: "File your C&D Waste Recycling Plant application under the C&D Waste Management Rules, 2016 with your State Pollution Control Board.",
        },
        {
          title: "Attach Supporting Docs",
          desc: "Include layout plan, process flow diagram, GST/Udyam certificates, property proof, and machinery purchase receipts.",
        },
        {
          title: "Pay Fees & Scrutiny",
          desc: "Pay the prescribed SPCB consent fees; authorities will review your submission for completeness.",
        },
        {
          title: "SPCB Site Inspection",
          desc: "State Pollution Control Board officials will audit your premises for environmental and operational compliance.",
        },
        {
          title: "Authorization Granted",
          desc: "Upon successful inspection, receive your Consent to Establish (CTE) and Consent to Operate (CTO).",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Registrations & Approvals Required",
        items: [
          "GST Registration",
          "MSME/Udyam Registration",
          "Factory License under local labor & safety laws",
          "SPCB/PCC Consent to Establish and Operate",
          "Municipal and Occupational Health Licenses",
        ],
      },
      {
        heading: "Site & Facility Criteria",
        items: [
          "Minimum buffer zone from water bodies, forests, and residential areas",
          "Fencing, air‑quality monitoring, and vegetative barriers",
          "Compliance with SPCB air, water and noise emission norms",
        ],
      },
    ],
    services: [
      {
        title: "End‑to‑End Licensing",
        desc: "We handle all applications, document collation, fee payments and follow‑ups with SPCB/PCC.",
      },
      {
        title: "Turnkey Plant Design",
        desc: "Customized layout and process‑flow diagrams to maximize throughput and compliance.",
      },
      {
        title: "Technology Selection",
        desc: "Advice on the right mix of traditional and AI‑enhanced recycling equipment.",
      },
      {
        title: "Regulatory Renewal",
        desc: "Ongoing support for annual reports, consent renewals, and compliance audits.",
      },
    ],
    faqs: [
      {
        question: "Is C&D waste recycling mandatory in India?",
        answer:
          "Yes. Under the C&D Waste Management Rules, 2016, bulk waste generators must ensure disposal via authorized recyclers.",
      },
      {
        question: "What percentage of C&D waste is recycled currently?",
        answer:
          "Less than 1% is officially recycled today, though policy targets aim for over 30% in major urban centers.",
      },
      {
        question: "What materials can be recovered?",
        answer:
          "Concrete, brick, masonry, metals, timber, plastics, glass and other inert construction debris.",
      },
      {
        question: "How long does authorization take?",
        answer:
          "Typically 60–90 days, including document scrutiny and site inspection by SPCB authorities.",
      },
      {
        question: "Can demolition waste be reused directly?",
        answer:
          "After proper sorting and crushing, materials like concrete and steel can re‑enter new construction.",
      },
    ],
    types: {
      cards: [
        {
          title: "Site Clearance Failures",
          shortText: "Improper segregation",
          backText:
            "Leads to contamination of recyclable streams and higher disposal costs.",
        },
        {
          title: "Permit Lapses",
          shortText: "Expired consents",
          backText:
            "Operating without SPCB CTE/CTO can invite fines and plant shutdowns.",
        },
        {
          title: "Technology Mismatch",
          shortText: "Wrong equipment",
          backText: "Reduces throughput and increases operating expenses.",
        },
      ],
      roleBenefits: [
        "Helps meet mandatory recycling targets",
        "Unlocks government subsidies for MSMEs",
        "Enhances site‑safety and worker health",
        "Improves margins through recovered‑material sales",
        "Strengthens ESG credentials for investors",
      ],
      differenceTable: {
        columns: ["Aspect", "Landfilling", "Recycling"],
        rows: [
          [
            "Environmental Impact",
            "High (methane, leachate)",
            "Low (closed‑loop reuse)",
          ],
          ["Cost", "Rising landfill levies", "Reduced raw‑material spend"],
          [
            "Regulatory Risk",
            "Penalties for non‑compliance",
            "Aligned with C&D Waste Rules",
          ],
          ["Resource Use", "Finite extraction", "Circular‑economy model"],
        ],
      },
      timelineFees: [
        "Application filing to CTE: ~30 days",
        "Site inspection & CTO grant: additional 30–60 days",
        "SPCB consent fees range: ₹25,000–₹1,00,000 (state‑dependent)",
        "Annual renewal fees and compliance report submission",
      ],
    },
  },

  "carbon-credit-trading-scheme": {
    overview: {
      heading: "Carbon Credit Trading Scheme – An Overview",
      paragraphs: [
        "On June 26, 2023, the Ministry of Environment, Forests, and Climate Change introduced the draft Green Credit Programme Implementation Rules. Just two days later, on June 28, the Ministry of Power launched the Carbon Credit Trading Scheme (CCTS) 2023. Both programs reflect India’s strategic push toward climate responsibility through market-based mechanisms.",
        "The Bureau of Energy Efficiency (BEE), under the Ministry of Power, is leading this effort. Under the CCTS, each ton of CO₂ reduced or avoided earns a carbon credit, which can be bought, sold, or traded. This incentivizes sustainability while enabling businesses to generate measurable financial returns.",
        "Unsure how to report carbon credits or unlock their value? DoStartup’s environmental advisors can simplify compliance and maximize your gains.",
      ],
    },
    features: [
      {
        icon: "♻️",
        title: "Emission Reduction Pooling",
        description:
          "Enables pooling of emission reduction efforts across projects and entities.",
      },
      {
        icon: "📈",
        title: "Carbon Certificate Generation",
        description:
          "Facilitates generation and trading of carbon credits with verified certification.",
      },
      {
        icon: "💰",
        title: "Financial Returns",
        description: "Maximizes profitability by monetizing emissions savings.",
      },
      {
        icon: "🏭",
        title: "Mandatory Compliance",
        description:
          "Obligates high GHG-emitting industries to buy credits to meet reduction targets.",
      },
      {
        icon: "🔋",
        title: "Promotes Renewable Energy",
        description: "Drives shift toward clean energy adoption.",
      },
    ],
    benefits: [
      {
        title: "Improves ESG Scores",
        description:
          "Aligns operations with environmental governance norms and boosts ESG ratings.",
      },
      {
        title: "Incentivizes Sustainability",
        description:
          "Encourages proactive climate action through tangible financial benefits.",
      },
      {
        title: "Reduces Operational Costs",
        description:
          "Emission-reduction efforts often lead to long-term cost savings.",
      },
      {
        title: "Attracts Green Investors",
        description:
          "Strengthens brand equity with CSR-driven investors and eco-conscious partners.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Project Structuring",
          desc: "Identify eligible emission-reduction activities under CCTS.",
        },
        {
          title: "Project Registration",
          desc: "Register the green project with the Bureau of Energy Efficiency (BEE).",
        },
        {
          title: "Verification",
          desc: "Undergo validation from an accredited verification agency.",
        },
        {
          title: "Credit Issuance",
          desc: "Upon successful verification, carbon credits are issued.",
        },
        {
          title: "Trading",
          desc: "Sell or trade credits through approved power exchanges regulated by CERC.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Ways to Generate Carbon Credits in India",
        items: [
          "Renewable Energy Projects",
          "Energy Efficiency Measures",
          "Waste-to-Energy Projects",
          "Direct Seeded Rice and Mulching",
          "No-till or Conservation Tillage",
          "Crop Rotation and Cover Crops",
        ],
      },
      {
        heading: "Top Industries That Benefit",
        items: [
          "Energy & Utilities",
          "Cement, Steel & Chemical Manufacturing",
          "Transport and Fleet Operations",
          "Green Real Estate Projects",
        ],
      },
    ],
    services: [
      {
        title: "Expert Consultation",
        desc: "Climate, ESG, and carbon trading specialists to guide project execution.",
      },
      {
        title: "Carbon Project Structuring",
        desc: "Design and document green initiatives for credit eligibility.",
      },
      {
        title: "End-to-End Compliance",
        desc: "Ensure seamless registration, verification, and reporting.",
      },
      {
        title: "Marketplace Access",
        desc: "Get listed on power exchanges approved by CERC.",
      },
    ],
    faqs: [
      {
        question: "What is a carbon trading scheme?",
        answer:
          "It is a regulated market where carbon credits representing one ton of CO₂ reduced can be traded to offset emissions.",
      },
      {
        question: "Is carbon trading legal in India?",
        answer:
          "Yes. It was formalized under the CCTS 2023 and full implementation is expected by 2025–26.",
      },
      {
        question: "Can carbon credits generate revenue?",
        answer:
          "Yes. Businesses can earn and sell verified credits for financial gain.",
      },
      {
        question: "What are the types of carbon trading?",
        answer: "Compliance-based (mandatory) and Voluntary (optional).",
      },
      {
        question: "Who are the governing bodies?",
        answer:
          "BEE, CERC, Grid Controller of India, and the National Steering Committee.",
      },
    ],
    types: {
      cards: [
        {
          title: "Taxation on Credits",
          shortText: "Carbon credits are taxed at 18% GST in India.",
          backText:
            "However, exports of credits are exempt from GST, encouraging international sales.",
        },
        {
          title: "Penalty for Non-compliance",
          shortText: "Obligated entities must meet emission targets.",
          backText:
            "Failure attracts financial penalties and compliance actions.",
        },
        {
          title: "Market Volatility",
          shortText: "Prices are market-driven.",
          backText:
            "Credits trade on CERC-authorized exchanges; value fluctuates.",
        },
      ],
      roleBenefits: [
        "Access new revenue from green initiatives",
        "Gain early-mover advantage in Indian carbon markets",
        "Boost brand reputation with eco-compliance",
        "Lower indirect tax liabilities via exemptions",
        "Qualify for global carbon market partnerships",
      ],
      differenceTable: {
        columns: ["Aspect", "Compliance-Based", "Voluntary"],
        rows: [
          ["Regulation", "Mandatory, government-led", "Optional, industry-led"],
          ["Emission Limits", "Enforced by targets", "No specific limits"],
          [
            "Credit Purchase",
            "Required for over-emitting",
            "Optional participation",
          ],
          [
            "Credit Sales",
            "Only eligible projects",
            "Any verified reduction project",
          ],
        ],
      },
      timelineFees: [
        "Project registration to credit issuance: 60–120 days",
        "Verification agency fees apply",
        "CERC exchange listing fees vary",
        "18% GST on carbon credit transactions",
        "Exported credits exempt from GST",
      ],
    },
  },

  "copyright-assignment": {
    overview: {
      heading: "An Overview of Copyright Assignment",
      paragraphs: [
        "Copyright assignment is the legal process through which ownership of copyright is transferred from one party to another under Section 196 of the Copyright Act, 1957.",
        "This transfer—whether exclusive or non‑exclusive, partial or complete—must be in writing and signed, and must clearly identify the work and the rights being assigned.",
        "Assignments allow creators to monetize, expand distribution, and shift legal responsibilities to the assignee.",
        "DoStartup’s IP experts will guide you through every step, from drafting the agreement to registering it with the Copyright Office.",
      ],
    },
    features: [
      {
        icon: "✍️",
        title: "Written Agreement",
        description:
          "Must be in writing and signed by the assignor to be valid.",
      },
      {
        icon: "🗺️",
        title: "Territorial Scope",
        description:
          "Defines the geographical area in which the assignee can exploit the rights.",
      },
      {
        icon: "⏳",
        title: "Duration",
        description:
          "Specifies the length of time for which the rights are transferred.",
      },
      {
        icon: "💰",
        title: "Consideration",
        description:
          "Details lump‑sum payments, royalties, or other compensation to the assignor.",
      },
      {
        icon: "📜",
        title: "Clear Work Description",
        description:
          "Identifies the specific work or categories of works being assigned.",
      },
      {
        icon: "⚖️",
        title: "Retention of Moral Rights",
        description:
          "Moral rights remain with the author unless expressly waived.",
      },
    ],
    benefits: [
      {
        title: "Monetization",
        description:
          "Creators earn upfront or ongoing payments through assignment.",
      },
      {
        title: "Risk Transfer",
        description: "Legal and financial liabilities shift to the assignee.",
      },
      {
        title: "Expanded Reach",
        description: "Assignees leverage broader distribution networks.",
      },
      {
        title: "Focus on Creation",
        description:
          "Creators can devote time to new works while assignees handle exploitation.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Draft Agreement",
          desc: "Prepare a written assignment specifying work, rights, duration, territory, and compensation.",
        },
        {
          title: "Sign & Witness",
          desc: "Obtain signatures of assignor, assignee, and two witnesses.",
        },
        {
          title: "Submit to Office",
          desc: "File Form XIV and agreement with the Copyright Office along with the fee.",
        },
        {
          title: "Record Creation",
          desc: "Office reviews and records the assignment in the Register of Assignments.",
        },
      ],
      violations: [
        "Assignment without writing or signature is void.",
        "Ambiguous scope may lead to disputes.",
        "Failure to register may hamper enforcement.",
        "Conflicting prior assignments breach Section 19.",
      ],
      consequences: [
        "Void assignment if unwritten or unsigned.",
        "Inability to enforce unregistered assignments.",
        "Potential litigation for breach of contract.",
      ],
    },
    eligibility: [
      {
        heading: "Who Can Assign",
        items: [
          "Original authors or creators",
          "Legal assignees or heirs",
          "Employers under work‑for‑hire agreements",
        ],
      },
      {
        heading: "Work Requirements",
        items: [
          "Original work fixed in tangible form",
          "Work must be registered or registrable",
          "No conflicting assignments exist",
        ],
      },
    ],
    services: [
      {
        title: "Agreement Drafting",
        desc: "Tailored, legally sound assignment agreements.",
      },
      {
        title: "Registration Support",
        desc: "End‑to‑end filing with the Copyright Office.",
      },
      {
        title: "Legal Advice",
        desc: "Expert consultation on moral rights, royalties, and more.",
      },
      {
        title: "Dispute Resolution",
        desc: "Guidance on enforcement and cancellation proceedings.",
      },
    ],
    faqs: [
      {
        question: "What is a copyright assignment?",
        answer:
          "A legal transfer of copyright ownership from assignor to assignee.",
      },
      {
        question: "Must an assignment be registered?",
        answer:
          "Registration is recommended to enforce rights but not mandatory for validity.",
      },
      {
        question: "Can moral rights be assigned?",
        answer:
          "Moral rights generally remain with the author unless expressly waived.",
      },
      {
        question: "How long does registration take?",
        answer: "Typically 2–4 weeks after submission of all documents.",
      },
    ],
    types: {
      cards: [
        {
          title: "Exclusive Assignment",
          shortText: "All rights transferred to the assignee.",
          backText: "Assignor retains no exploitation rights.",
        },
        {
          title: "Non‑Exclusive Assignment",
          shortText: "Shared rights between assignor and assignee.",
          backText: "Assignor can exploit rights alongside the assignee.",
        },
        {
          title: "Partial Assignment",
          shortText: "Rights limited by region, duration, or format.",
          backText: "Specific uses or territories defined in the agreement.",
        },
      ],
      roleBenefits: [
        "Assignor: Upfront or royalty payments.",
        "Assignee: Exclusive exploitation rights.",
        "Both: Clarity on rights and responsibilities.",
      ],
      differenceTable: {
        columns: ["Aspect", "Copyright Licensing", "Copyright Assignment"],
        rows: [
          ["Ownership", "Retained by licensor", "Transferred to assignee"],
          ["Duration", "Limited term", "As stipulated (often permanent)"],
          ["Scope", "Specific uses", "Broader exploitation rights"],
          ["Compensation", "Royalty-based", "Lump‑sum or royalties"],
          [
            "Revocability",
            "Generally revocable",
            "Difficult to revoke once executed",
          ],
        ],
      },
      timelineFees: [
        "Drafting and negotiation: 1–2 weeks.",
        "Execution and witnessing: 1 week.",
        "Office filing & registration: 2–4 weeks.",
        "Fee: ₹1,000–₹5,000 depending on work volume.",
      ],
    },
  },

  "fcra-registration": {
    overview: {
      heading: "FCRA Registration – Open Your NGO to Global Funding",
      paragraphs: [
        "FCRA stands for the Foreign Contribution Regulation Act. It governs Indian NGOs, trusts, societies, and Section 8 companies that wish to receive foreign donations.",
        "FCRA registration is issued by the Ministry of Home Affairs and ensures transparency, accountability, and national security when accepting overseas contributions.",
        "With DoStartup’s end‑to‑end support, you can unlock international funding, boost credibility, and stay fully compliant with Indian law.",
      ],
    },
    services: [],
    features: [
      {
        icon: "🌐",
        title: "Legal Access to Foreign Funds",
        description:
          "Accept overseas donations for charitable, social, educational, cultural, or religious activities.",
      },
      {
        icon: "🏆",
        title: "Global Recognition",
        description:
          "Build trust with international donors and funding agencies.",
      },
      {
        icon: "💸",
        title: "Tax Exemptions",
        description:
          "Eligible for 12A and 80G benefits on foreign contributions.",
      },
      {
        icon: "📈",
        title: "Sustained Growth",
        description:
          "Secure long‑term foreign funding to scale up your projects.",
      },
      {
        icon: "🎖️",
        title: "Government Grant Eligibility",
        description:
          "Access certain Indian government schemes that require FCRA status.",
      },
    ],
    benefits: [
      {
        title: "Enhanced Credibility",
        description:
          "FCRA status signals strong governance and financial probity.",
      },
      {
        title: "Broader Donor Base",
        description:
          "Tap into global foundations, corporates, and individual philanthropists.",
      },
      {
        title: "Regulatory Compliance",
        description: "Meets stringent MHA norms for foreign fund utilization.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Assess Eligibility",
          desc: "Verify 3‑year track record, ₹15 lakhs core spending, 12A registration, and clean legal record.",
        },
        {
          title: "Prepare Documents",
          desc: "Gather registration certificate, MoA/Trust Deed, activity reports, audited accounts, IDs, affidavits, and bank details.",
        },
        {
          title: "Online Application",
          desc: "Register and submit Form FC‑3A/FC‑3B at fcraonline.nic.in, upload PDFs, and pay the fee.",
        },
        {
          title: "Verification & Review",
          desc: "MHA examines your submission and may request clarifications.",
        },
        {
          title: "Certificate Issuance",
          desc: "Receive your FCRA license—Permanent (5 years) or Prior Permission for specific projects.",
        },
      ],
      violations: [
        "Accepting foreign funds without FCRA registration.",
        "Using funds for unapproved purposes.",
        "Failure to maintain FCRA‑designated bank account.",
        "Non‑submission of annual FC‑4 returns.",
      ],
      consequences: [
        "Suspension or cancellation of FCRA license.",
        "Seizure of foreign contributions and assets.",
        "Monetary penalties and legal prosecution.",
      ],
    },
    eligibility: [
      {
        heading: "Organizational Criteria",
        items: [
          "Registered under Societies/Trusts/Section 8 Company Acts",
          "Minimum 3 years of proven social work",
          "At least ₹15 lakhs spent on core activities over past 3 years",
        ],
      },
      {
        heading: "Regulatory Requirements",
        items: [
          "12A income‑tax registration",
          "Dedicated FCRA bank account at SBI New Delhi",
          "No involvement in prohibited activities or benami arrangements",
        ],
      },
    ],
    types: {
      cards: [
        {
          title: "Permanent Registration",
          shortText: "Valid for 5 years, renewable",
          backText: "For NGOs active ≥3 years with strong track records.",
        },
        {
          title: "Prior Permission",
          shortText: "Project‑specific approval",
          backText: "For one‑time or short‑term foreign funding needs.",
        },
      ],
      roleBenefits: [
        "NGO Leadership: Stable access to global grants.",
        "Finance Teams: Simplified accounting and audit processes.",
        "Program Managers: Predictable funding for project planning.",
      ],
      differenceTable: {
        columns: ["Aspect", "Permanent Registration", "Prior Permission"],
        rows: [
          ["Validity", "5 years (renewable)", "Duration of approved project"],
          [
            "Eligibility",
            "≥3 years’ work + ₹15 L core spend",
            "Any registered NGO/project",
          ],
          ["Renewal", "Required every 5 years", "Not applicable"],
          ["Use Cases", "Ongoing programs", "Specific initiatives"],
        ],
      },
      timelineFees: [
        "Application processing: 2–3 months",
        "Permanent registration fee: ₹10,000",
        "Prior permission fee: ₹10,000",
        "Renewal fee: ₹10,000",
        "Professional services from DoStartup: bespoke pricing",
      ],
    },
    faqs: [
      {
        question: "What is FCRA registration?",
        answer:
          "Legal approval from MHA allowing Indian NGOs to accept and use foreign contributions.",
      },
      {
        question: "Who is eligible to apply?",
        answer:
          "NGOs, trusts, societies, Section 8 companies with ≥3 years’ activity and ₹15 L core spend.",
      },
      {
        question: "What bank account is mandatory?",
        answer: "A dedicated FCRA account at SBI, New Delhi Main Branch.",
      },
      {
        question: "How long is the certificate valid?",
        answer:
          "Permanent registration: 5 years; Prior Permission: for the project’s duration.",
      },
      {
        question: "What returns must be filed?",
        answer: "Annual Form FC‑4 within 6 months of financial year‑end.",
      },
      {
        question: "What if we miss renewal?",
        answer:
          "Your FCRA license may be suspended or canceled; re‑apply as per MHA rules.",
      },
      {
        question: "Can political parties register?",
        answer:
          "No—political entities and certain individuals are barred under FCRA.",
      },
      {
        question: "Is professional help needed?",
        answer:
          "While optional, expert guidance from DoStartup ensures faster, error‑free approval.",
      },
    ],
  },

  "12aa-registration": {
    overview: {
      heading:
        "12AA Registration in India – Your Gateway to Tax Exemption for NGOs",
      paragraphs: [
        "Is documentation complexity slowing down your 12AA registration? DoStartup.in simplifies the process! Our experts guide you from paperwork to approval—minimizing errors, avoiding rejections, and ensuring timely certification.",
        "12AA Registration (now 12AB) under the Income Tax Act, 1961, is essential for trusts, societies, and non-profit organizations to secure income tax exemption.",
        "With 12AA registration, your organization can maximize resources, attract more donations, and build credibility—while fulfilling all compliance requirements set by Indian law.",
      ],
    },
    features: [
      {
        icon: "📜",
        title: "Tax Exemption",
        description:
          "Enjoy full exemption on income earned from charitable or religious activities.",
      },
      {
        icon: "🎁",
        title: "Encourage Donations",
        description:
          "Donors get tax benefits, motivating more contributions and boosting fundraising.",
      },
      {
        icon: "🌍",
        title: "Access to Foreign Funding",
        description:
          "Eligible for FCRA registration to receive legal foreign donations.",
      },
      {
        icon: "✅",
        title: "Credibility & Transparency",
        description:
          "Undergoes government scrutiny, boosting donor and stakeholder trust.",
      },
      {
        icon: "🏛️",
        title: "Government Grants Eligibility",
        description:
          "Registered NGOs can access public funds and benefit from official schemes.",
      },
      {
        icon: "👩‍⚕️",
        title: "Recruitment Advantage",
        description:
          "Tax-exempt status helps attract qualified professionals for impactful growth.",
      },
    ],
    benefits: [
      {
        title: "Tax-Free Income",
        description:
          "Income applied toward charitable activities is fully exempt from tax.",
      },
      {
        title: "Enhanced Donor Confidence",
        description:
          "Donors are more likely to contribute when assured of tax benefits.",
      },
      {
        title: "Foreign Contributions Access",
        description: "Helps NGOs become eligible for FCRA registration.",
      },
      {
        title: "Compliance with Law",
        description:
          "Ensures adherence to regulatory norms and builds long-term sustainability.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Document Preparation",
          desc: "Gather all required documents and prepare audited accounts.",
        },
        {
          title: "Application Filing",
          desc: "Fill out and submit Form 10A with supporting paperwork to the Income Tax Department.",
        },
        {
          title: "Verification",
          desc: "Authorities review documents and may seek clarifications or schedule a field visit.",
        },
        {
          title: "Approval & Certificate Issuance",
          desc: "Upon satisfaction, the Commissioner grants 12AA registration and issues a certificate.",
        },
        {
          title: "Ongoing Compliance",
          desc: "Maintain records and file annual returns to retain tax-exempt status.",
        },
      ],
      violations: [
        "Misuse of funds or deviation from charitable objectives.",
        "Non-compliance with annual filing requirements.",
        "Failure to maintain proper books and records.",
        "Use of income for non-charitable purposes.",
        "Fraudulent or misleading representation in application.",
      ],
      consequences: [
        "Cancellation of 12AA registration by the Income Tax Department.",
        "Loss of tax-exempt status for the organization.",
        "Taxation of all income at applicable rates.",
        "Ineligibility for donor tax deductions.",
        "Disqualification from foreign funding and government schemes.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for 12AA Registration",
        items: [
          "Entity must be a registered trust, society, or Section 8 company.",
          "Primary objective should be charitable or religious in nature.",
          "Must provide a clear mission and comply with legal requirements.",
          "Proof of activities and proper financial records are necessary.",
        ],
      },
      {
        heading: "Types of Eligible Entities",
        items: [
          "Charitable Trusts (public or private)",
          "Registered Societies",
          "Section 8 Companies",
          "NGOs",
          "Cooperative Societies (with charitable purpose)",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Trust Deed (for trusts) / MoA (for societies) / MoA & AoA (for Section 8 companies)",
          "PAN card of the organization",
          "Address proof (utility bill, bank statement)",
          "Audited financials for the past 3 years (if applicable)",
          "Details of activities conducted",
          "List of trustees/directors/members",
          "Income & expenditure statements",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End Documentation",
        desc: "Assistance in preparing, verifying, and compiling necessary documents.",
      },
      {
        title: "Form Filing & Submission",
        desc: "Expert filing of Form 10A with the Income Tax Department.",
      },
      {
        title: "Post-Registration Support",
        desc: "Ongoing compliance and filing guidance after registration.",
      },
      {
        title: "Error-Free Filing",
        desc: "Minimize risk of rejection by ensuring accurate submissions.",
      },
      {
        title: "Legal Advisory",
        desc: "Expert consultation on 12AA legal provisions and updates.",
      },
      {
        title: "Transparent Pricing",
        desc: "Affordable service fees with no hidden costs.",
      },
      {
        title: "Dedicated Customer Support",
        desc: "Support team available for queries and follow-up.",
      },
      {
        title: "Expert Network",
        desc: "Access to 3500+ legal and tax advisors across India.",
      },
      {
        title: "Trusted by NGOs",
        desc: "Trusted by 98% of NGOs and 50+ DoStartup branch offices nationwide.",
      },
    ],
    faqs: [
      {
        question: "What is the validity of a 12AA certificate?",
        answer:
          "The 12AA registration is valid for the organization’s lifetime but must be renewed as per latest guidelines and can be canceled for non-compliance.",
      },
      {
        question: "Which organizations are eligible for 12AA registration?",
        answer:
          "Registered trusts, societies, Section 8 companies, and NGOs involved in charitable or religious activities.",
      },
      {
        question: "How do I obtain a 12AA certificate?",
        answer:
          "Submit Form 10A online with required documents to the Income Tax Department; after verification and approval, you’ll receive the certificate.",
      },
      {
        question: "What is the difference between 12A and 12AA registration?",
        answer:
          "12A refers to initial eligibility for tax exemption; 12AA is the procedural step granting official registration after compliance and verification.",
      },
      {
        question: "What is Form 10A?",
        answer:
          "Form 10A is the application form for 12AA/12AB registration, submitted online with supporting documents.",
      },
      {
        question: "What records are needed for 12AA registration?",
        answer:
          "Trust deed or MoA, PAN, audited accounts, activity details, member list, and address proof.",
      },
      {
        question: "What is the tax exemption limit under 12AA?",
        answer:
          "All income applied to charitable or religious purposes is exempt, but income used for non-charitable purposes is taxable.",
      },
      {
        question: "What happens if a trust does not register under 12A/12AA?",
        answer:
          "Without 12AA, any surplus income of the trust or NGO becomes fully taxable.",
      },
      {
        question: "Who requires a 12AA certificate for a trust or NGO?",
        answer:
          "Any trust, society, or Section 8 company seeking to claim tax exemption on income from donations or activities.",
      },
      {
        question: "Can 12AA registration be canceled?",
        answer:
          "Yes, the certificate can be canceled for violation of objectives, misuse of funds, or non-compliance with regulatory requirements.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incomplete Documentation",
          shortText: "Avoid missing documents.",
          backText:
            "Ensure trust deed, financials, and member details are all in order.",
        },
        {
          title: "Wrong Form Selection",
          shortText: "Use Form 10A.",
          backText: "Incorrect form usage can delay or reject application.",
        },
        {
          title: "Non-Compliance Post Approval",
          shortText: "Maintain compliance.",
          backText:
            "File annual returns and maintain proper records post-registration.",
        },
        {
          title: "Activity Mismatch",
          shortText: "Ensure alignment with objectives.",
          backText: "Only charitable/religious activities qualify under 12AA.",
        },
      ],
      roleBenefits: [
        "Helps secure legal tax exemption.",
        "Encourages donations through donor benefits.",
        "Enables eligibility for foreign contributions.",
        "Builds trust among stakeholders and donors.",
        "Facilitates participation in government schemes and grants.",
      ],
      differenceTable: {
        columns: [
          "Serial Number",
          "12AA Registration",
          "Non-Registered Entity",
        ],
        rows: [
          ["1", "Tax-exempt on eligible income", "Taxed on all income"],
          [
            "2",
            "Eligible for FCRA and government grants",
            "Not eligible for foreign or public funding",
          ],
          ["3", "Enhanced trust among donors", "Less credible in fundraising"],
          ["4", "Donor tax deductions allowed", "No tax benefit for donors"],
          [
            "5",
            "Formal compliance and reporting",
            "No structured reporting obligations",
          ],
        ],
      },
      timelineFees: [
        "Approval timeline: 2-3 months (depending on case complexity).",
        "Form 10A must be filed online with attachments.",
        "No government fees for filing Form 10A.",
        "Service charges vary by provider and documentation status.",
        "Fees influenced by number of documents and legal consultation needed.",
      ],
    },
  },

  "trust-registration": {
    overview: {
      heading: "Trust Registration in India – Fast, Reliable, and Compliant",
      paragraphs: [
        "Ready to make a lasting impact through charity, education, or social welfare? DoStartup.in offers expert guidance for hassle-free trust registration anywhere in India.",
        "1000+ trusts registered | Rs 2500+ crore assets managed | 3500+ experts nationwide",
        "Trust registration is the process of legally creating a trust—a special entity formed to manage assets for charitable, religious, or private purposes—under the Indian Trusts Act, 1882. A trust deed outlines the mission, powers, and roles of trustees and beneficiaries, setting a transparent framework for managing property and donations.",
      ],
    },
    features: [
      {
        icon: "🏛️",
        title: "Legal Status & Asset Protection",
        description:
          "Registered trusts enjoy legal recognition, making it easy to own assets, open bank accounts, and enter contracts.",
      },
      {
        icon: "📜",
        title: "Tax Benefits",
        description:
          "Access tax exemptions under Section 12A & 80G of the Income Tax Act.",
      },
      {
        icon: "🤝",
        title: "Trust & Transparency",
        description:
          "Registration builds donor confidence, attracts grants, and ensures smooth compliance.",
      },
      {
        icon: "💼",
        title: "Efficient Asset Management",
        description:
          "Simplifies family inheritance, wealth planning, and charitable distribution.",
      },
      {
        icon: "🛡️",
        title: "Safeguard Interests",
        description:
          "Shields trustees and beneficiaries against future disputes or claims.",
      },
    ],
    benefits: [
      {
        title: "Legal Recognition",
        description:
          "Registered trusts are legal entities with formal rights to own and manage assets.",
      },
      {
        title: "Tax Exemptions",
        description:
          "Eligibility for Section 12A and 80G exemptions boosts savings and donor confidence.",
      },
      {
        title: "Dispute Prevention",
        description:
          "Structured framework prevents internal conflicts among trustees or beneficiaries.",
      },
      {
        title: "Funding Access",
        description:
          "Eligible to receive government grants and corporate donations (CSR).",
      },
    ],
    documents: {
      steps: [
        {
          title: "Draft the Trust Deed",
          desc: "Include objectives, details of trustees/beneficiaries, and operational clauses.",
        },
        {
          title: "Collect All Documents",
          desc: "Gather IDs, address proofs, and property documents.",
        },
        {
          title: "Apply Online",
          desc: "Submit application and upload documents via the state/national registration portal.",
        },
        {
          title: "Pay the Registration Fee",
          desc: "As applicable in your state.",
        },
        {
          title: "Verification",
          desc: "Registrar reviews documents and may request clarifications.",
        },
        {
          title: "Get Certificate",
          desc: "On approval, you’ll receive a legal trust registration certificate.",
        },
      ],
      violations: [
        "Using trust property for personal benefit.",
        "Operating outside the objectives of the trust deed.",
        "Non-maintenance of proper financial records.",
        "Failure to comply with tax filing requirements.",
        "Disputes among trustees affecting operations.",
      ],
      consequences: [
        "Loss of tax-exempt status under 12A/80G.",
        "Trust registration can be revoked by authorities.",
        "Ineligibility for government and CSR funding.",
        "Legal liability of trustees in case of fraud.",
        "Court intervention or dissolution of trust.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Trust Registration",
        items: [
          "Minimum 2 trustees required (no upper limit).",
          "Purpose must be charitable, religious, or for defined beneficiaries.",
          "Must create a Trust Deed on appropriate stamp paper.",
          "Name must comply with the Emblems & Names Act and not infringe trademarks.",
          "Settlor and trustees must be legally competent adults (18+).",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Trust Deed (on stamp paper of prescribed value)",
          "Passport-sized photos of settlor and trustees",
          "PAN cards and ID proof (Aadhaar, Voter ID, Passport, DL)",
          "Address proof (utility bill, bank statement)",
          "NOC from property owner (if required)",
          "Details of trust’s registered office",
        ],
      },
    ],
    services: [
      {
        title: "Trust Deed Drafting",
        desc: "Professionally crafted deeds tailored to your purpose and structure.",
      },
      {
        title: "Online Registration Support",
        desc: "Assistance with portal filing and state-specific procedures.",
      },
      {
        title: "PAN & Compliance Filing",
        desc: "Help with PAN application, 12A, and 80G registration.",
      },
      {
        title: "Expert Legal Advice",
        desc: "Consultation on legal structuring, trustee roles, and asset protection.",
      },
      {
        title: "Affordable Pricing",
        desc: "No hidden costs. Transparent packages for every budget.",
      },
      {
        title: "Nationwide Assistance",
        desc: "Available across India with localized legal expertise.",
      },
      {
        title: "Post-Registration Compliance",
        desc: "Filing, audits, and ITR assistance to keep you compliant.",
      },
      {
        title: "Dedicated Support",
        desc: "24/7 helpdesk and status tracking for your application.",
      },
    ],
    faqs: [
      {
        question: "What is a trust?",
        answer:
          "A trust is a legal entity where trustees manage assets or property for the benefit of beneficiaries, guided by the terms of a trust deed.",
      },
      {
        question: "Who can register a trust in India?",
        answer:
          "Any Indian citizen (18+), or group of adults, can create a trust for charitable, religious, or private purposes.",
      },
      {
        question: "What are the tax benefits of trust registration?",
        answer:
          "Registered charitable trusts can apply for Section 12A and 80G to get tax exemptions and enable donors to claim tax deductions.",
      },
      {
        question: "How many trustees are required to form a trust?",
        answer:
          "A minimum of two trustees is required; there’s no maximum limit.",
      },
      {
        question: "What documents are needed for trust registration?",
        answer:
          "Trust deed, photos, PAN & ID proof, address proof, NOC (if property is rented), and proof of registered office.",
      },
      {
        question: "Can NRIs or foreign nationals create a trust in India?",
        answer:
          "Yes, NRIs and foreign nationals can be trustees, subject to legal guidelines.",
      },
      {
        question: "Can a trust operate in multiple states?",
        answer:
          "Yes, a trust registered in one state can carry out activities across India, provided the trust deed permits.",
      },
      {
        question: "What is the difference between a trustee and a beneficiary?",
        answer:
          "Trustees manage and administer the trust’s assets; beneficiaries receive the benefits from the trust.",
      },
      {
        question: "Can a trust be dissolved or cancelled?",
        answer:
          "Yes, trusts can be dissolved for violation of deed, completion of purpose, mutual agreement, or by court order.",
      },
      {
        question: "Is trust registration mandatory in India?",
        answer:
          "Registration is not compulsory for all trusts but is highly recommended for legal protection, asset ownership, and tax benefits.",
      },
    ],
    types: {
      cards: [
        {
          title: "Public Trust",
          shortText: "Charitable or religious purpose",
          backText:
            "Created for public benefit; eligible for tax exemptions and grants.",
        },
        {
          title: "Private Trust",
          shortText: "For family/inheritance",
          backText:
            "Formed to manage assets for specific individuals or families.",
        },
        {
          title: "Revocable/Irrevocable Trusts",
          shortText: "Flexible or permanent",
          backText:
            "Revocable trusts can be modified; irrevocable ones are fixed post-creation.",
        },
        {
          title: "Fixed/Living Trusts",
          shortText: "Specific or lifetime-based",
          backText:
            "Fixed trusts allocate fixed shares; living trusts are active during settlor’s life.",
        },
      ],
      roleBenefits: [
        "Ensures smooth inheritance and asset transfer",
        "Provides tax planning for high-value estates",
        "Enables structured charity and philanthropy",
        "Protects family wealth from legal claims",
        "Grants access to CSR, NGO, and donor funding",
      ],
      differenceTable: {
        columns: ["Serial Number", "Registered Trust", "Unregistered Trust"],
        rows: [
          [
            "1",
            "Legal recognition with asset ownership",
            "No legal status for ownership",
          ],
          ["2", "Eligible for tax benefits", "Not eligible for exemptions"],
          [
            "3",
            "Trust deed is legally enforceable",
            "Trust deed holds no legal weight",
          ],
          [
            "4",
            "Can open bank accounts and receive grants",
            "Restricted access to funding",
          ],
          [
            "5",
            "Higher transparency and credibility",
            "Low donor confidence and compliance issues",
          ],
        ],
      },
      timelineFees: [
        "Processing time: 4–8 weeks depending on registrar and location.",
        "Stamp duty cost depends on state regulations (Rs 500 – Rs 1000 typical).",
        "Government registration fee: state-specific (Rs 1000 – Rs 3000).",
        "DoStartup service charges start from Rs 4999 (inclusive of consultation and filing).",
        "Post-registration: PAN, 12A, and 80G filing may involve additional fees.",
      ],
    },
  },

  "trust-annual-compliance": {
    overview: {
      heading:
        "Simplify Your Trust’s Annual Compliance – Accurate, Timely, and Hassle-Free Solutions",
      paragraphs: [
        "Struggling to keep up with annual compliance for your trust? DoStartup.in’s team of expert advisors and CAs streamline the process, ensuring that your trust stays fully compliant with Indian legal requirements—helping you avoid penalties and build long-term credibility.",
        "Efficient Turnaround: 10X faster compliance solutions for over 1,000+ trusts, including those registered under Section 80G.",
        "Pan-India Support: 50+ offices, 3,500+ compliance experts.",
        "Google & Trustpilot 5-Star Rated.",
        "43,000+ Happy Clients.",
        "Free Consultation & Personalized Compliance Plans.",
      ],
    },
    features: [
      {
        icon: "✅",
        title: "Legal Protection",
        description:
          "Avoids penalties, cancellation, or legal action by staying up-to-date with statutory filings.",
      },
      {
        icon: "💸",
        title: "Tax Benefits",
        description:
          "Maintains eligibility for tax exemptions under Section 12A/12AB and 80G of the Income Tax Act.",
      },
      {
        icon: "📈",
        title: "Enhanced Credibility",
        description:
          "Builds confidence with donors, partners, and financial institutions.",
      },
      {
        icon: "📊",
        title: "Smooth Operations",
        description:
          "Ensures financial discipline, regular audits, and transparency in all trust activities.",
      },
      {
        icon: "🏛️",
        title: "Access to Funding",
        description:
          "Keeps your trust eligible for government grants and CSR funding.",
      },
      {
        icon: "🤝",
        title: "Beneficiary Satisfaction",
        description:
          "Promotes trustworthiness and organizational accountability.",
      },
    ],
    benefits: [
      {
        title: "Avoid Legal Complications",
        description:
          "Stay protected from penalties, cancellation of registration, and scrutiny by regulatory bodies.",
      },
      {
        title: "Ensure Funding Eligibility",
        description:
          "Remain eligible for government schemes, CSR funds, and foreign contributions.",
      },
      {
        title: "Retain Tax-Exempt Status",
        description:
          "Maintain your 12A, 12AB, and 80G registrations through timely filings.",
      },
      {
        title: "Boost Donor Confidence",
        description:
          "Transparent and compliant organizations are more attractive to donors.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Collect & Organize Documents",
          desc: "Gather trust deed, PAN, audited accounts, list of trustees, and relevant certificates.",
        },
        {
          title: "Accounting & Bookkeeping",
          desc: "Update financial transactions, ledgers, and receipts.",
        },
        {
          title: "Statutory Audit",
          desc: "Appoint a Chartered Accountant for annual audit if required.",
        },
        {
          title: "File ITR-7",
          desc: "Submit ITR-7 along with the audit report (Form 10B) to the Income Tax Department.",
        },
        {
          title: "File TDS and GST Returns",
          desc: "Submit quarterly/annual returns as applicable and issue certificates.",
        },
        {
          title: "Submit FCRA Returns",
          desc: "File FCRA returns to MHA if receiving foreign funds.",
        },
        {
          title: "Publication (If Required)",
          desc: "Publish annual accounts in a local newspaper if income exceeds ₹1 crore.",
        },
        {
          title: "Renewals/Registrations",
          desc: "Update or renew 80G, 12A/12AB, or FCRA certificates if due.",
        },
      ],
      violations: [
        "Failure to file ITR-7 on time.",
        "Not conducting or submitting statutory audit.",
        "Missing or incorrect TDS/GST/FCRA filings.",
        "Non-maintenance of minutes or board resolutions.",
        "Operating outside charitable objectives.",
      ],
      consequences: [
        "Penalties and interest on delayed filings.",
        "Loss of tax exemptions under 12A/80G.",
        "Rejection of donor contributions from tax deduction eligibility.",
        "Cancellation of FCRA registration.",
        "Ineligibility for future grants and funding.",
      ],
    },
    eligibility: [
      {
        heading: "Who Needs to Comply",
        items: [
          "Public trusts",
          "Private trusts",
          "Public-cum-private trusts",
          "Charitable or religious trusts",
          "NGOs operating as trusts",
          "Trusts with 12A/80G registration",
          "Trusts receiving foreign contributions",
          "Trusts registered for GST/TDS/PAN",
        ],
      },
      {
        heading: "Documents Checklist",
        items: [
          "Trust Deed (Registered Copy)",
          "PAN Card of the Trust",
          "List of Trustees (with Name, Address, Aadhaar)",
          "Audit Report prepared by a Chartered Accountant (CA)",
          "Balance Sheet & Income-Expenditure Statement",
          "Receipts & Payments Account",
          "Contribution Calculation Sheet",
          "Membership Certificate of CA (ICAI)",
          "Affidavit by Trustees",
          "Office Address Proof/NOC from Landlord",
          "Supporting documents for FCRA, GST, TDS as applicable",
        ],
      },
    ],
    services: [
      {
        title: "Expert Consultation",
        desc: "10+ years’ experience in trust compliance and regulatory matters.",
      },
      {
        title: "Efficient Paperwork",
        desc: "Streamlined documentation and CA-backed audit reports.",
      },
      {
        title: "Pan-India Reach",
        desc: "Services available in all states and union territories.",
      },
      {
        title: "Customized Solutions",
        desc: "Tailored compliance plans for your trust’s unique needs.",
      },
      {
        title: "Peace of Mind",
        desc: "Avoid missed deadlines and legal hassles with proactive support.",
      },
      {
        title: "Transparent Pricing",
        desc: "No hidden charges—get value for every rupee spent.",
      },
      {
        title: "24/7 Client Support",
        desc: "Our team is always available to resolve your queries.",
      },
    ],
    faqs: [
      {
        question: "What is annual compliance for a trust?",
        answer:
          "Annual compliance includes filing ITR, audited accounts, GST/TDS/FCRA returns (if applicable), and meeting other statutory requirements each year.",
      },
      {
        question: "Who must file annual returns for a trust?",
        answer:
          "All registered trusts, whether public or private, must file annual returns if they meet the prescribed income or registration thresholds.",
      },
      {
        question: "What is the due date for trust ITR filing?",
        answer:
          "The ITR for trusts (Form ITR-7) is usually due by September 30th of the assessment year.",
      },
      {
        question: "Is audit mandatory for all trusts?",
        answer:
          "Audit is mandatory if the total income exceeds the basic exemption limit as per the Income Tax Act, 1961.",
      },
      {
        question: "What is Form 10B?",
        answer:
          "Form 10B is the audit report to be submitted along with ITR-7 for trusts subject to audit.",
      },
      {
        question: "What if a trust does not file annual compliance?",
        answer:
          "Non-compliance attracts penalties, loss of tax exemption, and even cancellation of registration.",
      },
      {
        question:
          "Is annual compliance required for trusts with 80G/12A/12AB registration?",
        answer:
          "Yes, such trusts must strictly follow annual compliance to retain tax benefits and registrations.",
      },
      {
        question: "What are the consequences of delayed filings?",
        answer:
          "Late filing may lead to hefty penalties, legal action, and loss of trust credibility.",
      },
      {
        question:
          "Do trusts receiving foreign funds have special compliance needs?",
        answer:
          "Yes, they must file FCRA annual returns and comply with additional reporting requirements.",
      },
      {
        question:
          "Can DoStartup.in help with FCRA, GST, and TDS filings for trusts?",
        answer:
          "Absolutely! Our experts handle all aspects of trust compliance, including FCRA, GST, TDS, and more.",
      },
      {
        question: "How can I get a compliance checklist for my trust?",
        answer:
          "Contact DoStartup.in for a free compliance audit and a personalized checklist for your trust.",
      },
      {
        question:
          "How do I renew or update my trust’s 80G, 12A, or FCRA registration?",
        answer:
          "Our team manages renewals and updates for all statutory registrations to keep your trust fully compliant.",
      },
    ],
    types: {
      cards: [
        {
          title: "Public Trusts",
          shortText: "Serving the public good",
          backText:
            "Charitable organizations like schools, hospitals, and temples.",
        },
        {
          title: "Private Trusts",
          shortText: "Serving specific families",
          backText: "Trusts created for private or family benefit.",
        },
        {
          title: "Public-cum-Private Trusts",
          shortText: "Dual benefit trusts",
          backText:
            "Serve both public charitable purposes and private beneficiaries.",
        },
        {
          title: "Charitable/Religious Trusts",
          shortText: "Registered under 80G/12A",
          backText: "Eligible for tax exemption and public donations.",
        },
      ],
      roleBenefits: [
        "Avoids penalties and legal notices from IT or MCA.",
        "Maintains eligibility for tax exemption and foreign funds.",
        "Ensures credibility and transparency for all stakeholders.",
        "Supports funding, CSR, and donor retention.",
        "Protects the trust from cancellation or disqualification.",
      ],
      differenceTable: {
        columns: ["Aspect", "Compliant Trust", "Non-Compliant Trust"],
        rows: [
          [
            "Legal Status",
            "Legally valid and active",
            "Risk of cancellation and penalties",
          ],
          [
            "Tax Benefits",
            "Eligible for 80G/12AB",
            "Loses tax exemption benefits",
          ],
          [
            "Funding Access",
            "Eligible for CSR and grants",
            "Ineligible for institutional funding",
          ],
          ["Donor Trust", "High credibility", "Reduced donor confidence"],
          [
            "Operations",
            "Smooth and audit-ready",
            "Disruptions due to non-compliance",
          ],
        ],
      },
      timelineFees: [
        "Document collection and bookkeeping: 1 week",
        "Audit completion: 7–10 days (after financials are ready)",
        "ITR and Form 10B filing: Before Sept 30 (AY)",
        "FCRA/GST/TDS returns: As per due dates",
        "Fee varies based on services required and size of trust",
      ],
    },
  },

  "ngo-darpan-registration": {
    overview: {
      heading:
        "NGO Darpan Registration in India – Secure More Funding, Credibility & Government Partnerships",
      paragraphs: [
        "Are you an NGO looking to boost your access to government schemes, grants, and CSR funds? DoStartup.in’s specialists help you navigate the complete NGO Darpan registration process—enabling you to unlock new growth opportunities and build trust with donors and government agencies.",
        "NGO Darpan is an official portal managed by NITI Aayog, connecting NGOs and voluntary organizations (VOs) with various Indian Government Ministries and Departments. Darpan registration is highly recommended—and increasingly required—for any NGO wishing to receive central or state grants, participate in government projects, or access CSR funds.",
        "Darpan (meaning 'mirror') acts as a central repository, fostering transparency, accountability, and streamlined communication between NGOs and government agencies. It helps maintain a verified database of NGOs, ensures better monitoring, and increases the efficiency of grant disbursement.",
      ],
    },
    features: [
      {
        icon: "🏛️",
        title: "Government Recognition",
        description: "Mandatory for most government and CSR funding in India.",
      },
      {
        icon: "🌐",
        title: "FCRA Prerequisite",
        description:
          "Required for NGOs seeking foreign contributions (FCRA registration).",
      },
      {
        icon: "📚",
        title: "Centralized Information Repository",
        description: "Ensures up-to-date records of all registered NGOs.",
      },
      {
        icon: "🔍",
        title: "Improved Transparency",
        description:
          "Promotes accountability and transparency in funding and operations.",
      },
      {
        icon: "🤝",
        title: "Collaboration Opportunities",
        description:
          "Facilitates networking with other NGOs, government bodies, and corporates.",
      },
      {
        icon: "📈",
        title: "Automated Reporting",
        description:
          "Easy online submission of annual reports, financial statements, and project updates.",
      },
      {
        icon: "💸",
        title: "CSR & Multi-State Support",
        description:
          "Attracts funding from national and international donors, PSUs, and large companies.",
      },
    ],
    benefits: [
      {
        title: "Direct Access to Government Grants",
        description:
          "Only Darpan-registered NGOs can apply for most government schemes, grants, and funding opportunities.",
      },
      {
        title: "Enhanced Credibility",
        description:
          "Registration increases your trustworthiness with ministries, donors, and CSR partners.",
      },
      {
        title: "Tax Benefits",
        description:
          "Darpan-registered NGOs are eligible for 12A and 80G tax exemptions.",
      },
      {
        title: "Priority in CSR Funding",
        description:
          "Many corporates and PSUs require Darpan registration for CSR tie-ups.",
      },
      {
        title: "Up-to-Date Notifications",
        description:
          "Get real-time updates about new government initiatives, programs, and grant opportunities.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Document Preparation",
          desc: "Gather all required documents, board member info, area of activity, and funding details.",
        },
        {
          title: "Sign Up on Darpan Portal",
          desc: "Visit NGO Darpan Portal, create your user profile, and verify via OTP.",
        },
        {
          title: "Online Application Filing",
          desc: "Enter organizational details, office bearers, registration particulars, areas of work, and funding history.",
        },
        {
          title: "Upload Documents",
          desc: "Attach scanned copies of the required documents for verification.",
        },
        {
          title: "Submission & Departmental Review",
          desc: "Submit the application for validation by NITI Aayog and relevant ministries.",
        },
        {
          title: "Issuance of Unique ID (UIN)",
          desc: "Upon approval, receive a Unique Identification Number (Darpan ID) for your NGO. Use this UIN to apply for government schemes, FCRA, and CSR opportunities.",
        },
      ],
      violations: [
        "Failure to update NGO details after changes in board or structure.",
        "Not uploading annual reports or audited accounts on time.",
        "Using grants for unapproved or unrelated activities.",
        "Submitting false or misleading information during registration.",
        "Non-compliance with FCRA or government grant terms.",
      ],
      consequences: [
        "Blacklisting from NGO Darpan portal and grant databases.",
        "Ineligibility for CSR and government funding.",
        "Potential cancellation of FCRA registration.",
        "Loss of credibility with donors and partners.",
        "Legal action for misuse or misreporting of funds.",
      ],
    },
    eligibility: [
      {
        heading: "Eligible Entities",
        items: [
          "Charitable Trusts",
          "Registered Societies",
          "Section 8 Companies (Non-profit under Companies Act, 2013)",
          "Voluntary Organizations (VOs)",
          "Civil Society Organizations (CSOs)",
          "Charitable Associations",
          "Other not-for-profit entities legally registered in India",
        ],
      },
      {
        heading: "Key Office Bearers Required",
        items: [
          "Chairman / President",
          "Secretary / Chief Functionary",
          "Treasurer / Financial Trustee",
          "All Governing Body Members",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Registration Certificate of the NGO",
          "PAN Card of NGO & all board members",
          "Aadhaar Card of Office Bearers / Trustees",
          "List of all Trustees / Directors",
          "Copy of Trust Deed, Society MoA, or Section 8 Incorporation Certificate",
          "Proof of registered office address",
          "Details of grants / donations received (last 5 years, if applicable)",
          "Area of activities & sources of funds",
          "Contact person’s details & email ID",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End Documentation",
        desc: "We assist in document collection, review, and compliance formatting.",
      },
      {
        title: "Online Portal Setup",
        desc: "Help in creating and verifying NGO profile on the official portal.",
      },
      {
        title: "Expert Filing",
        desc: "Accurate input of organizational and compliance data.",
      },
      {
        title: "Compliance Advisory",
        desc: "Guidance on annual uploads, amendments, and government notifications.",
      },
      {
        title: "Multi-Registration Support",
        desc: "Seamless coordination with 12A, 80G, CSR, and FCRA processes.",
      },
      {
        title: "Dedicated Consultant",
        desc: "Personal advisor for timely assistance and document tracking.",
      },
      {
        title: "Post-Approval Services",
        desc: "Help with Darpan UIN usage, grant tracking, and future updates.",
      },
      {
        title: "Free Consultation Call",
        desc: "Get expert advice before you even begin—no upfront commitment.",
      },
    ],
    faqs: [
      {
        question: "What is NGO Darpan registration?",
        answer:
          "It’s an online government registration that connects NGOs with ministries, enables access to grants, and is required for most government and CSR funding in India.",
      },
      {
        question: "Is Darpan registration mandatory for NGOs?",
        answer:
          "While not mandatory for registration, it’s essential for applying for most government schemes, grants, and FCRA registration.",
      },
      {
        question: "Who can register on NGO Darpan?",
        answer:
          "Any Indian NGO—Trust, Society, Section 8 Company, or voluntary group—can register if legally recognized.",
      },
      {
        question: "What documents are required for Darpan registration?",
        answer:
          "You’ll need your registration certificate, PAN, board member Aadhaar, trust deed/MoA, area of activity, funding details, and address proof.",
      },
      {
        question: "Can I register an NGO on Darpan for free?",
        answer:
          "Yes, the Darpan registration process is completely free and online.",
      },
      {
        question: "Is NGO Darpan needed for FCRA registration?",
        answer:
          "Yes, a Darpan UIN is required before applying for or renewing FCRA registration.",
      },
      {
        question: "What is the Unique ID (UIN) from Darpan?",
        answer:
          "It’s a special identification number provided to your NGO after successful Darpan registration, needed for funding and compliance.",
      },
      {
        question:
          "Is Darpan registration compulsory for 12A/80G or opening a bank account?",
        answer:
          "Darpan is not required for 12A/80G or basic bank accounts, but is needed for government and CSR grants, and increasingly for compliance.",
      },
      {
        question: "How long does Darpan registration take?",
        answer:
          "Typically, it takes 7–15 working days, subject to document accuracy and verification speed.",
      },
      {
        question: "What if my NGO’s details change?",
        answer:
          "Update your Darpan portal profile immediately and provide revised documents to maintain compliance.",
      },
      {
        question: "How do NGO workers get paid?",
        answer:
          "Salaries/stipends are paid from grants, donations, or project funds received by the NGO, as per its bylaws.",
      },
      {
        question: "Can Darpan-registered NGOs collaborate internationally?",
        answer:
          "Yes, but FCRA registration is required to receive foreign contributions or partner with overseas entities.",
      },
    ],
    types: {
      cards: [
        {
          title: "Missed Deadlines",
          shortText: "Avoid blacklisting.",
          backText: "Upload returns and documents on time to stay compliant.",
        },
        {
          title: "Incorrect Document Format",
          shortText: "File correctly.",
          backText:
            "Ensure scanned documents are legible and meet portal requirements.",
        },
        {
          title: "Board Member Mismatch",
          shortText: "Consistency matters.",
          backText: "Names and IDs must match official NGO filings.",
        },
        {
          title: "Not Updating Changes",
          shortText: "Stay current.",
          backText:
            "Update your Darpan profile if structure or trustees change.",
        },
      ],
      roleBenefits: [
        "Required for accessing CSR and government grants.",
        "Mandatory step for FCRA approval.",
        "Promotes operational transparency and donor trust.",
        "Simplifies communication with ministries and agencies.",
        "Ensures long-term legal recognition of NGO activities.",
      ],
      differenceTable: {
        columns: ["Aspect", "NGO Darpan Registration", "Section 8 Company"],
        rows: [
          [
            "Legal Structure",
            "Trust/Society/VO/NPO",
            "Registered under Companies Act",
          ],
          [
            "Government Grants",
            "Mandatory for funding",
            "Must also register on Darpan",
          ],
          ["Tax Exemption", "12A/80G available", "12A/80G available"],
          ["Governance", "Various state acts", "Companies Act, 2013"],
          [
            "International Work",
            "Limited without FCRA",
            "FCRA allowed after approval",
          ],
        ],
      },
      timelineFees: [
        "Typical registration time: 7–15 working days.",
        "Darpan registration is completely free of cost.",
        "Requires accurate documentation and Aadhaar-linked verification.",
        "No government fee involved—only professional service charges (if any).",
        "Timely updates and renewals help maintain funding eligibility.",
      ],
    },
  },

  "gi-registration": {
    overview: {
      heading:
        "Geographical Indication (GI) Registration in India – Protect Your Product’s Legacy",
      paragraphs: [
        "Worried about copycats misusing your region’s iconic product name? Safeguard your unique product’s legacy and market value with DoStartup.in’s expert Geographical Indication (GI) Registration services. Our in-house IP team boasts a 99% approval rate, with end-to-end support from application filing to opposition management and renewal.",
        "A Geographical Indication (GI) is a distinctive sign used on products that have a specific geographical origin and possess qualities, reputation, or characteristics inherent to that location. GI registration provides legal protection against misuse, boosts market recognition, and preserves the unique heritage of your product—be it tea, sarees, spices, crafts, or agricultural produce.",
        "In India, GI is governed by the Geographical Indications of Goods (Registration & Protection) Act, 1999. Once registered, only authorized users in the identified region can use the GI tag, helping fight fakes, enhance product value, and promote local economic growth.",
      ],
    },
    features: [
      {
        icon: "⚖️",
        title: "Legal Protection",
        description:
          "Prevents unauthorized usage, imitation, or counterfeiting of the GI-tagged product.",
      },
      {
        icon: "📈",
        title: "Brand Value & Marketing",
        description:
          "Transforms your product into a recognized brand, attracting higher profits and market demand.",
      },
      {
        icon: "🔒",
        title: "Authenticity & Trust",
        description:
          "Certifies the origin, quality, and traditional know-how of your goods.",
      },
      {
        icon: "💰",
        title: "Premium Pricing",
        description:
          "GI products command premium rates due to their exclusive reputation.",
      },
      {
        icon: "🌎",
        title: "Export Boost",
        description:
          "GI tags support global marketing and open up international trade opportunities.",
      },
      {
        icon: "🏡",
        title: "Supports Local Communities",
        description:
          "Encourages sustainable economic growth in the region and protects traditional livelihoods.",
      },
      {
        icon: "🎨",
        title: "Cultural Preservation",
        description:
          "Safeguards the legacy, history, and heritage crafts of your community.",
      },
    ],
    benefits: [
      {
        title: "IP Protection",
        description:
          "Provides legal protection and exclusive rights over GI-tagged products.",
      },
      {
        title: "Marketing Edge",
        description:
          "Enhances visibility, consumer trust, and commercial appeal in domestic and international markets.",
      },
      {
        title: "Monopoly Advantage",
        description:
          "Only authorized producers in the designated area can use the GI tag.",
      },
      {
        title: "Consumer Confidence",
        description:
          "Assures buyers of authenticity, quality, and traceability.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Eligibility Check",
          desc: "Confirm product meets GI criteria under Section 2(1)(e) of the Act.",
        },
        {
          title: "Application Filing",
          desc: "Submit GI application with product statement and evidence.",
        },
        {
          title: "Documentation",
          desc: "Include maps, production details, inspection plans, and legal proof.",
        },
        {
          title: "Examination",
          desc: "Registry reviews documents and may raise objections.",
        },
        {
          title: "Show Cause Notice",
          desc: "Respond to any objections within the deadline with clarifications.",
        },
        {
          title: "Publication",
          desc: "Accepted applications published in the GI Journal for public notice.",
        },
        {
          title: "Opposition Handling",
          desc: "Respond to any oppositions with a counter-statement and supporting evidence.",
        },
        {
          title: "Registration & Certification",
          desc: "Receive the GI registration certificate after successful scrutiny.",
        },
        {
          title: "Renewal & Restoration",
          desc: "Renew every 10 years or restore within 6 months of expiry with fee.",
        },
      ],
      violations: [
        "Use of a registered GI by unauthorized producers.",
        "Using misleading, deceptive, or generic GI indications.",
        "Filing a false or fraudulent GI application.",
        "Failure to maintain quality standards defined in the GI application.",
      ],
      consequences: [
        "Rejection of GI application.",
        "Removal of GI from the registry.",
        "Fines and penalties under the Act.",
        "Loss of legal protection and branding rights.",
        "Civil/criminal action against misuse.",
      ],
    },
    eligibility: [
      {
        heading: "Who Can Apply for GI Registration?",
        items: [
          "Associations of persons or producers",
          "Registered organizations, authorities, or cooperatives representing producers’ interests",
          "Any legally established entity representing producers in the region",
        ],
      },
      {
        heading: "Non-Eligible GIs",
        items: [
          "Generic names no longer linked to a location",
          "Misleading or confusing indications",
          "Names that offend public order or morality",
          "False or religiously sensitive indications",
        ],
      },
      {
        heading: "Documents Required",
        items: [
          "Duly filled Form GI-1 application",
          "Statement of case showing uniqueness and geographical link",
          "Maps, photos, historical records, control methods",
          "Authorization letter or Power of Attorney",
          "Details about quality inspection infrastructure",
          "Certified copy of foreign registration (if applicable)",
        ],
      },
    ],
    services: [
      {
        title: "GI Application Filing",
        desc: "End-to-end preparation and submission of GI application and documentation.",
      },
      {
        title: "Show Cause Replies",
        desc: "Draft and file timely responses to registry objections.",
      },
      {
        title: "Opposition Management",
        desc: "Handle counter-statements and legal responses if application is opposed.",
      },
      {
        title: "Evidence Preparation",
        desc: "Collate historical, geographical, and cultural proof supporting the GI.",
      },
      {
        title: "Expert Consultation",
        desc: "1:1 guidance with experienced IP lawyers throughout the process.",
      },
      {
        title: "Portfolio Management",
        desc: "Support for renewal, restoration, and long-term GI compliance.",
      },
    ],
    faqs: [
      {
        question: "What is a Geographical Indication (GI)?",
        answer:
          "A GI is a sign used on products with a specific geographical origin and qualities or reputation linked to that location.",
      },
      {
        question: "How long is a GI registration valid?",
        answer:
          "10 years from the date of registration, renewable indefinitely every 10 years.",
      },
      {
        question: "Who can apply for a GI?",
        answer:
          "Associations, cooperatives, or authorities representing producers in a specific region.",
      },
      {
        question: "What documents are needed for GI registration?",
        answer:
          "Application form, case statement, proof of origin, inspection details, authorization letter, and supporting documents.",
      },
      {
        question: "What happens if there’s an opposition to my GI application?",
        answer:
          "You must respond with a counter-statement and possibly attend a hearing. If successful, your GI gets registered.",
      },
      {
        question: "Can a GI registration be restored if expired?",
        answer:
          "Yes, apply within 6 months of expiry with payment of restoration fee.",
      },
      {
        question: "What are examples of GI products in India?",
        answer:
          "Darjeeling Tea, Basmati Rice, Banarasi Sarees, Kolhapuri Chappals, Kanjivaram Sarees, etc.",
      },
      {
        question: "What is the difference between a trademark and a GI?",
        answer:
          "A trademark identifies a producer; a GI identifies a product from a specific location with inherent qualities.",
      },
      {
        question: "Can I use a GI tag for export purposes?",
        answer:
          "Yes, GI enhances global credibility and protects product identity in international markets.",
      },
      {
        question: "What if my product is not from the registered region?",
        answer:
          "Only producers from the designated region can legally use the GI tag.",
      },
      {
        question: "Is online GI registration mandatory?",
        answer:
          "Yes, most procedures are processed online for efficiency and transparency.",
      },
      {
        question: "Can a GI be cancelled or removed?",
        answer:
          "Yes, for reasons like non-renewal, loss of product quality, or fraudulent filing.",
      },
    ],
    types: {
      cards: [
        {
          title: "Generic Naming Risk",
          shortText: "Avoid common names.",
          backText:
            "Use only names with clear geographic linkage and cultural value.",
        },
        {
          title: "Incomplete Evidence",
          shortText: "Include robust proof.",
          backText:
            "Missing historical or geographic data weakens your application.",
        },
        {
          title: "Opposition Handling",
          shortText: "Prepare for challenges.",
          backText: "A strong counter-statement and evidence may be required.",
        },
        {
          title: "Non-Renewal",
          shortText: "Renew on time.",
          backText:
            "Avoid GI lapse by renewing every 10 years or restoring within 6 months.",
        },
      ],
      roleBenefits: [
        "Provides legal exclusivity for your product",
        "Enhances product’s brand and export potential",
        "Drives regional employment and economic growth",
        "Boosts investor and buyer trust",
        "Preserves local art, craft, and food heritage",
      ],
      differenceTable: {
        columns: ["Aspect", "Trademark", "Geographical Indication (GI)"],
        rows: [
          [
            "Ownership",
            "Belongs to an individual or company",
            "Belongs to a group of producers",
          ],
          [
            "Coverage",
            "Applies to goods/services from a business",
            "Applies to region-specific products",
          ],
          [
            "Function",
            "Distinguishes producer",
            "Identifies origin and quality",
          ],
          [
            "Transferability",
            "Can be sold/licensed",
            "Cannot be transferred or licensed",
          ],
          [
            "Duration",
            "10 years, renewable",
            "10 years, renewable indefinitely",
          ],
        ],
      },
      timelineFees: [
        "GI registration process typically takes 12–18 months.",
        "Initial validity: 10 years from registration.",
        "Renewal required every 10 years.",
        "Restoration possible within 6 months of lapse (with fees).",
        "Professional fees depend on product complexity and required legal support.",
      ],
    },
  },
  "psara-license": {
    overview: {
      heading:
        "PSARA License in India – Start Your Private Security Agency Legally",
      paragraphs: [
        "Are you planning to launch or expand a private security agency in India? Secure your business’s future with expert PSARA License registration from DoStartup.in. We simplify the process, ensuring compliance with the Private Security Agencies (Regulation) Act, 2005 so you can focus on growing your business—fast.",
        "A PSARA License is a legal approval required for running a private security agency in India. Issued under the Private Security Agencies (Regulation) Act, 2005 (PSARA), it ensures only reliable, trained, and law‑abiding agencies can provide security services to industries, offices, residences, banks, malls, and government entities.",
        "Without a valid PSARA certificate, operating a security agency is strictly illegal and punishable. With a PSARA License, your agency can bid for contracts, offer services in multiple states, and build a reputation for reliability and professionalism.",
      ],
    },
    features: [
      {
        icon: "🏢",
        title: "5,000+ Licenses Processed",
        description: "Across UP, Delhi, Maharashtra, Haryana and pan‑India.",
      },
      {
        icon: "💰",
        title: "High Agency Earnings",
        description:
          "Average ₹1 Lakh–₹10 Lakh/month with PSARA‑compliant operations.",
      },
      {
        icon: "📄",
        title: "Fast Application Filing",
        description:
          "Document review & filing completed within 3 working days.",
      },
      {
        icon: "👩‍💼",
        title: "Dedicated Legal Experts",
        description: "In‑house team of advisors guiding you end‑to‑end.",
      },
      {
        icon: "🌐",
        title: "All‑India Presence",
        description: "50+ branch offices and 3,500+ consultants nationwide.",
      },
      {
        icon: "⭐",
        title: "Trusted by Clients",
        description:
          "43,000+ happy clients and Google & Trustpilot 5‑star ratings.",
      },
    ],
    benefits: [
      {
        title: "Legal Compliance",
        description:
          "Operate lawfully under PSARA and avoid penalties or shutdowns.",
      },
      {
        title: "Enhanced Credibility",
        description:
          "Gain client trust and win more corporate and government contracts.",
      },
      {
        title: "Market Access",
        description:
          "Eligible for lucrative security tenders across industries and states.",
      },
      {
        title: "Standardized Operations",
        description:
          "Mandatory training and background checks ensure professionalism.",
      },
      {
        title: "Risk Management",
        description:
          "Insurance and legal safeguards become easier with a valid license.",
      },
      {
        title: "Growth Potential",
        description:
          "Seamlessly expand your agency across multiple states or nationwide.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Document Preparation",
          desc: "Gather incorporation deeds, PAN, address proofs, labor registrations and affidavits.",
        },
        {
          title: "MoU with Training Institute",
          desc: "Partner with an accredited security guard training centre.",
        },
        {
          title: "Application Submission",
          desc: "File Form‑I along with Form‑II & Form‑III affidavits to state PSARA authority.",
        },
        {
          title: "Police Verification",
          desc: "Obtain clearance certificates for directors, partners and key staff.",
        },
        {
          title: "Authority Review",
          desc: "State officials examine your application and compliance.",
        },
        {
          title: "Grant of License",
          desc: "Receive your PSARA certificate valid for 5 years.",
        },
        {
          title: "Post-License Compliance",
          desc: "Maintain training records, renew license and update authorities as required.",
        },
      ],
      violations: [
        "Operating without a valid PSARA License.",
        "Failure to partner with a recognised training institute.",
        "Non‑compliance with labor, ESI or PF regulations.",
        "Omitting police verification for key personnel.",
      ],
      consequences: [
        "Heavy fines and business closure orders.",
        "Criminal prosecution under PSARA Act.",
        "Ineligibility for security contracts and tenders.",
        "Reputational damage and loss of client trust.",
      ],
    },
    eligibility: [
      {
        heading: "Who Can Apply for PSARA License?",
        items: [
          "Registered company, partnership or LLP in India.",
          "All directors/partners must be Indian citizens (≥18 years) with clean criminal record.",
          "Adequate capital to run operations efficiently.",
          "Physical office address with necessary infrastructure.",
          "MoU signed with an accredited training institute.",
          "Compliance with ESI, PF and other labour laws.",
          "Police clearance for all key persons.",
          "Affidavit declaring PSARA compliance.",
        ],
      },
    ],
    services: [
      {
        title: "End‑to‑End Support",
        desc: "From eligibility checks to final licence issuance and post‑grant compliance.",
      },
      {
        title: "Document Compilation",
        desc: "Prepare, review and verify all required business and compliance documents.",
      },
      {
        title: "Form Filing & Follow‑Up",
        desc: "Expert submission of Form‑I, II & III and liaison with authorities.",
      },
      {
        title: "Training Institute Tie‑Up",
        desc: "Assist in MoU and guard training partnerships.",
      },
      {
        title: "Police Verification Management",
        desc: "Co‑ordinate background checks and clearances for your team.",
      },
      {
        title: "Renewal & Audit Support",
        desc: "Handle licence renewals, annual audits and regulatory updates.",
      },
    ],
    faqs: [
      {
        question: "What is PSARA License and why is it necessary?",
        answer:
          "Government approval mandated by the Private Security Agencies (Regulation) Act, 2005 to operate legally.",
      },
      {
        question: "Who can apply for a PSARA License?",
        answer:
          "Any registered Indian company, partnership or LLP meeting the eligibility criteria.",
      },
      {
        question: "Is PSARA License mandatory for all security agencies?",
        answer:
          "Yes, operating without it invites heavy fines, closure and prosecution.",
      },
      {
        question: "How long does it take to get a PSARA License?",
        answer:
          "Typically 30–90 days; expert assistance can expedite filing and verification.",
      },
      {
        question: "What is the validity of a PSARA License?",
        answer:
          "Valid for 5 years and must be renewed at least 90 days before expiry.",
      },
      {
        question: "What documents are needed for PSARA registration?",
        answer:
          "Incorporation deed, PAN, GST proof, address proofs, affidavits, police clearances, training MoU, labour registrations.",
      },
      {
        question: "Can I operate across India with one PSARA License?",
        answer:
          "You need state‑wise approval or a multi‑state/all‑India licence meeting additional requirements.",
      },
      {
        question: "What are the penalties for operating without a licence?",
        answer: "Severe fines, business shutdown and criminal prosecution.",
      },
      {
        question: "Are guard trainings mandatory under PSARA?",
        answer:
          "Yes, all security personnel must undergo certified training via an accredited institute.",
      },
      {
        question: "How do I renew my PSARA License?",
        answer:
          "Submit renewal application with updated documents and clearances at least 90 days before expiry.",
      },
    ],
    types: {
      cards: [
        {
          title: "Incomplete Documents",
          shortText: "Missing incorporation or ID proofs.",
          backText:
            "Ensure all deeds, PAN, GST and affidavits are compiled before filing.",
        },
        {
          title: "No Training Tie‑Up",
          shortText: "MoU not established.",
          backText:
            "Partner with a recognized institute and file the MoU upfront.",
        },
        {
          title: "Police Verification Delay",
          shortText: "Bgc clearance pending.",
          backText: "Coordinate with local police early to avoid hold‑ups.",
        },
        {
          title: "License Lapse",
          shortText: "Failure to renew on time.",
          backText: "Track expiry and submit renewal at least 90 days before.",
        },
      ],
      roleBenefits: [
        "Operate legally and avoid shutdowns",
        "Bid for corporate and government contracts",
        "Expand operations across states",
        "Maintain professional standards via training",
        "Manage risks with insurance and compliances",
      ],
      differenceTable: {
        columns: [
          "Serial Number",
          "With PSARA License",
          "Without PSARA License",
        ],
        rows: [
          [
            "1",
            "Legal operation and contract eligibility",
            "Illegal operations and penalties",
          ],
          [
            "2",
            "Professional training and compliance",
            "Untrained staff and regulatory risk",
          ],
          [
            "3",
            "Access to tenders and markets",
            "Ineligible for government/corporate contracts",
          ],
          [
            "4",
            "Insurance & risk cover",
            "Higher liability without safeguards",
          ],
          ["5", "Renewable 5‑year validity", "Cannot legally renew or operate"],
        ],
      },
      timelineFees: [
        "Processing time: 30–90 days depending on state authority workload.",
        "Initial validity: 5 years from grant date.",
        "Renewal window: apply ≥90 days before expiry.",
        "Government fees vary by state; professional fees depend on document complexity.",
        "No hidden costs; transparent pricing based on service scope.",
      ],
    },
  },

  "iso-45001-certification": {
    overview: {
      heading: "ISO 45001 Certification – An Overview",
      paragraphs: [
        "ISO 45001 is an international certification issued by the International Organization for Standardization (ISO) — an independent, non-governmental body that develops standards across various sectors, including Occupational Health and Safety Management Systems (OHSMS). ISO 45001 Certification is designed to enhance workplace safety, minimize occupational hazards, and promote healthier working environments by aligning organizations with global safety benchmarks.",
        "This standard replaces OHSAS 18001 and incorporates guidelines from the International Labour Organization (ILO), along with various national frameworks. It is a part of a broader Safety Management System (SMS), supporting companies in formulating safety policies that prevent injuries and promote overall employee well-being. The ISO 45001 certification cost may vary depending on factors like company size, number of employees, and operational complexity.",
        "Achieving ISO 45001 Certification demonstrates your company’s commitment to occupational health and safety. It promotes a proactive risk management approach, enhances internal safety culture, and reinforces your dedication to employee welfare. This commitment builds trust among stakeholders, clients, and your workforce, setting your brand apart as a responsible and safety-conscious entity.",
        "Additionally, ISO 45001 certification unlocks new business opportunities, as many clients and partners now prefer to associate with companies that value worker safety. It’s not just about compliance—it’s a strategic step toward business growth with a strong safety foundation.",
      ],
    },
    benefits: [
      {
        title: "Reduced Operating Costs",
        description:
          "Fewer incidents and robust health policies lower legal liabilities, insurance expenses, and operational disruptions.",
      },
      {
        title: "Improved Stakeholder Relationships",
        description:
          "Prioritizing health and safety builds trust, loyalty, and long-term collaboration with employees, customers, and suppliers.",
      },
      {
        title: "Legal Compliance",
        description:
          "Ensures your organization meets current health and safety laws, reducing the risk of penalties and improving efficiency.",
      },
      {
        title: "Enhanced Risk Management",
        description:
          "Facilitates effective identification, evaluation, and mitigation of workplace risks, minimizing losses and downtime.",
      },
      {
        title: "Business Credibility & Market Recognition",
        description:
          "ISO 45001 certification strengthens your brand image and attracts clients who value safety and responsibility.",
      },
      {
        title: "Customer Safety and Satisfaction",
        description:
          "Demonstrates your commitment to health and safety, increasing customer trust and retention.",
      },
      {
        title: "Corporate Social Responsibility (CSR)",
        description:
          "Supports CSR initiatives and highlights your dedication to ethical, employee-focused business practices.",
      },
    ],
    features: [
      {
        icon: "✅",
        title: "Strong safety culture",
        description:
          "Registered entities can avail various CDB subsidies, grants, and development schemes.",
      },
      {
        icon: "📜",
        title: "Reduced operational risks",
        description:
          "Provides official recognition and authorization from the Coconut Development Board.",
      },
      {
        icon: "🤝",
        title: "Enhanced health protections",
        description:
          "Builds trust and cooperation with CDB and related industry bodies.",
      },
      {
        icon: "🏛️",
        title: "Focus on worker well-being",
        description:
          "Enables participation in tenders and government contracts related to coconut procurement and supply.",
      },
      {
        icon: "🏛️",
        title: "Lower insurance premiums",
        description:
          "Enables participation in tenders and government contracts related to coconut procurement and supply.",
      },
      {
        icon: "🏛️",
        title: "Stronger stakeholder trust",
        description:
          "Enables participation in tenders and government contracts related to coconut procurement and supply.",
      },
      {
        icon: "🏛️",
        title: "Proactive safety management",
        description:
          "Enables participation in tenders and government contracts related to coconut procurement and supply.",
      },
    ],
    eligibility: [
      {
        heading: "Eligibility Criteria for ISO 45001 Certification",
        items: [
          "A documented Occupational Health & Safety Management System (OH&SMS) in place.",
          "Demonstrated leadership commitment and active participation of workers.",
          "Processes for risk identification, hazard assessment, and proactive risk management.",
          "Compliance with all applicable legal obligations and organization-wide safety training.",
        ],
      },
      {
        heading: "ISO 45001 Certification Audit Checklist",
        items: [
          "Comprehensive understanding of the organization and its operational structure.",
          "Awareness of stakeholder needs and expectations.",
          "Clearly defined OH&S scope, objectives, and policies.",
          "Active leadership involvement and enforcement of safety policies.",
          "Assigned responsibilities and accountability at all organizational levels.",
          "Transparent communication, consultation, and worker representation mechanisms.",
        ],
      },
    ],
    documents: {
      steps: [
        {
          title: "ISO 45001 Certification Registration Process",
          desc: "Initiate the registration process with an accredited certification body for ISO 45001.",
        },
        {
          title: "Preliminary Audit",
          desc: "The Occupational Health and Safety (OH&S) Management System and its documentation are reviewed to identify any possible non-conformities.",
        },
        {
          title: "On-site Audit",
          desc: "Evaluate the implementation and effectiveness of the OH&SMS through interviews, site observations, and document review to ensure compliance with ISO 45001 standards.",
        },
        {
          title: "Addressing Non-conformities",
          desc: "Any non-conformities found during the audit are highlighted, and corrective actions must be taken based on detailed feedback.",
        },
        {
          title: "Certificate Issuance",
          desc: "Once all compliance criteria are met, the accredited body issues the ISO 45001 certificate.",
        },
        {
          title: "Surveillance Audits",
          desc: "Annual audits are conducted to maintain compliance and ensure continuous improvement.",
        },
        {
          title: "Recertification Audit",
          desc: "At the end of the three-year certification period, a recertification audit is conducted to renew the ISO 45001 certification.",
        },
      ],
      violations: [],
      consequences: [],
    },
    services: [],
    faqs: [
      {
        question: "What is ISO 45001 certification?",
        answer:
          "It is a global health and safety standard designed to reduce workplace risks and promote safe working environments.",
      },
      {
        question: "What are the 7 elements of ISO 45001?",
        answer:
          "Context of the organization, Leadership, Planning, Support, Operation, Performance evaluation, Improvement.",
      },
      {
        question: "What is the difference between ISO 14001 and 45001?",
        answer:
          "ISO 14001 focuses on the environment, while ISO 45001 targets occupational health and safety.",
      },
      {
        question: "What is the full form of ISO?",
        answer: "International Organization for Standardization.",
      },
      {
        question: "What is the objective of ISO 45001?",
        answer:
          "To safeguard employees by proactively identifying risks and promoting safe workplace practices.",
      },
      {
        question: "Who needs ISO 45001 certification?",
        answer:
          "Organizations of any size or sector prioritizing employee safety.",
      },
      {
        question: "What is the ISO 45001 certification cost?",
        answer:
          "Cost varies by company size, scope, and existing safety systems.",
      },
      {
        question: "Does ISO 45001 replace other certifications?",
        answer:
          "No, but it complements other ISO standards like ISO 14001 or 9001.",
      },
      {
        question: "Is ISO certification mandatory?",
        answer:
          "No, it's voluntary but highly recommended for safety-driven businesses.",
      },
      {
        question: "How long is ISO 45001 valid?",
        answer:
          "The certificate is valid for three years, subject to annual surveillance audits.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [
        "In-depth understanding of ISO 45001 standards",
        "Boost auditing and assessment capabilities.",
        "Strengthen credibility and reduce risks.",
        "Contribute to workplace safety efforts.",
        "Deliver detailed audit reports and insights.",
        "Gain global recognition and improve career prospects.",
      ],
      differenceTable: {
        columns: ["Aspect", "ISO 14001", "ISO 45001"],
        rows: [
          [
            "Focus",
            "Environmental Performance",
            "Occupational Health and Safety",
          ],
          [
            "System",
            "Environmental Management System",
            "OH&S Management System",
          ],
          [
            "Controls",
            "Environmental impact mitigation",
            "Workplace stress, hours, harassment",
          ],
          [
            "Objective",
            "Minimize environmental damage",
            "Maximize employee health and safety",
          ],
        ],
      },
      timelineFees: [],
    },
  },
  "isi-mark-certification": {
    overview: {
      heading: "ISI Mark Certification",
      paragraphs: [
        "The Indian Standards Institute (ISI) mark, issued by the Bureau of Indian Standards (BIS), acts as a seal of quality assurance for products sold within India. It is granted only to those products that undergo rigorous testing and inspections and meet BIS-prescribed standards and compliances.",
        "An ISI mark is a clear indication that a product adheres to BIS’s stringent quality and safety regulations. Products bearing the ISI certification are seen as reliable, safe, and trustworthy—earning the confidence of consumers in the marketplace.",
      ],
    },
    benefits: [
      {
        title: "Quality Assurance",
        description:
          "ISI certification assures consumers of a product’s high quality, as it meets strict manufacturing and safety standards set by BIS.",
      },
      {
        title: "Consumer Confidence",
        description:
          "The ISI mark fosters trust. Consumers prefer ISI-marked products due to their perceived safety, performance, and reliability—ultimately boosting brand loyalty.",
      },
      {
        title: "Market Access",
        description:
          "For many product categories, ISI certification is legally required to be sold in the Indian market.",
      },
      {
        title: "Competitive Advantage",
        description:
          "Products bearing the ISI mark stand out with a distinct edge in the marketplace over uncertified alternatives.",
      },
      {
        title: "Reduced Legal Liability",
        description:
          "Certified products have undergone thorough checks, minimizing the likelihood of safety failures and liability issues.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Having an ISI mark ensures legal sale within India and eases regulatory burdens for manufacturers.",
      },
      {
        title: "Export Facilitation",
        description:
          "Products with ISI certification are recognized internationally for quality and compliance, easing entry into global markets.",
      },
      {
        title: "Consumer Safety",
        description:
          "The ISI mark guarantees that the product has been verified for safety and quality, helping customers make informed choices.",
      },
      {
        title: "Quality Control",
        description:
          "The certification drives manufacturers to maintain consistent quality, improving overall production standards.",
      },
      {
        title: "Brand Reputation",
        description:
          "Products with ISI marks gain stronger brand credibility and customer acceptance, improving market positioning.",
      },
      {
        title: "Scope of the ISI Certificate",
        description:
          "Electrical appliances \n" +
          "Consumer goods\n" +
          "Building materials\n" +
          "Automotive components",
      },
    ],
    features: [],
    eligibility: [],
    documents: {
      steps: [
        {
          title: "Duly Filled Application Form V",
          desc: "The completed application form that outlines your request for ISI Mark certification.",
        },
        {
          title: "Application and License Fees",
          desc: "The requisite application and licensing fees must be submitted as part of the certification process.",
        },
        {
          title: "Address Proof of Manufacturing Unit",
          desc: "Proof of the physical address where the manufacturing unit is located.",
        },
        {
          title: "GST & MSME Certificates",
          desc: "Proof of GST registration and MSME certificate (if applicable).",
        },
        {
          title: "Trademark Certificate",
          desc: "Provide a certificate that demonstrates the product or company holds a registered trademark.",
        },
        {
          title: "Manufacturing Capacity Details",
          desc: "Details about the manufacturing capacity of the unit, including production volumes.",
        },
        {
          title: "Supplier Details and Raw Material Test Reports",
          desc: "Information about suppliers and test reports of raw materials used in manufacturing.",
        },
        {
          title: "Factory Layout and Location Map",
          desc: "A detailed layout of the factory along with a map showing its location.",
        },
        {
          title: "Packaging and Storage Details",
          desc: "Details on how the product is packaged and stored to ensure compliance with ISI standards.",
        },
        {
          title: "In-house Test Equipment List",
          desc: "A list of test equipment available within the factory for product testing.",
        },
        {
          title: "Quality Control Staff Qualifications",
          desc: "Details about the qualifications and experience of the quality control staff.",
        },
        {
          title: "Organizational Structure",
          desc: "A document describing the organizational structure, including key management roles.",
        },
        {
          title: "MoA/AoA (for companies), Partnership Deed (for firms)",
          desc: "Memorandum of Association (MoA) and Articles of Association (AoA) for companies, or the Partnership Deed for firms.",
        },
        {
          title: "Authorization Letter",
          desc: "A letter authorizing a representative to submit and manage the application for ISI certification on behalf of the company.",
        },
        {
          title: "Factory Test Report",
          desc: "A test report from the factory, confirming the compliance of products with ISI standards.",
        },
      ],
      violations: [],
      consequences: [],
    },
    services: [],
    faqs: [
      {
        question: "What is an ISI Certificate?",
        answer:
          "The ISI certificate, which stands for the Indian Standards Institute mark, is issued by the Bureau of Indian Standards (BIS). It serves as a symbol of quality and compliance, indicating that a product meets the standards, regulations, and safety norms prescribed by BIS. The ISI mark builds trust among consumers and confirms product reliability.",
      },
      {
        question: "What is the validity of the ISI Mark Certification?",
        answer:
          "The ISI certificate remains valid for one year from the date of issue. Manufacturers must renew it annually by adhering to BIS compliance standards. Renewal ensures that the product continues to meet the required quality parameters set by BIS.",
      },
      {
        question:
          "How long does it take to obtain an ISI Certificate in India?",
        answer:
          "The time frame for receiving an ISI certificate from BIS is typically 60 to 90 working days. However, depending on factors such as documentation, testing procedures, and factory inspection timelines, the process may extend up to 180 days. With DoStartup, this process is handled efficiently to minimize delays.",
      },
      {
        question: "Who issues the ISI Certificate in India?",
        answer:
          "The Bureau of Indian Standards (BIS) is the sole authority responsible for issuing ISI certificates to manufacturers who meet the specified quality and regulatory requirements under Indian law.",
      },
      {
        question: "Who can apply for an ISI Certificate in India?",
        answer:
          "Any manufacturer operating in India or abroad, provided they meet all BIS-mandated standards and compliance norms, can apply for an ISI certificate. DoStartup assists businesses of all sizes in preparing for and completing this process smoothly.",
      },
      {
        question:
          "What should you do if you find a fake or duplicate ISI mark?",
        answer:
          "If you identify a product with a duplicate or counterfeit ISI mark, you must immediately report the issue to BIS. Reporting helps ensure consumer protection and enforcement of quality standards.",
      },
      {
        question: "What is mandatory ISI registration?",
        answer:
          "Certain products under the BIS mandate require compulsory ISI registration to be legally sold in the Indian market. Products failing to obtain this certification cannot be marketed or distributed. DoStartup helps manufacturers navigate this process effortlessly and legally.",
      },
      {
        question: "What are the penalties for misuse of the ISI mark?",
        answer:
          "Manufacturers found misusing the ISI mark or using it without proper certification can face legal consequences, including a fine of up to INR 50,000 or imprisonment of up to one year, or both. With DoStartup, businesses ensure compliance and avoid such penalties.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },
  "environmental-clearance": {
    overview: {
      heading: "Environmental Clearance (EC) – A Complete Overview",
      paragraphs: [
        "Environmental Clearance (EC) is the statutory approval required for initiating certain notified projects in India. This clearance ensures that proposed development activities are environmentally sustainable and compliant with government norms.",
        "The Ministry of Environment, Forest and Climate Change (MoEFCC) is the central authority responsible for granting EC to projects classified under Category A, while State Environmental Impact Assessment Authorities (SEIAAs) handle Category B projects at the state level.",
        "Before any site development begins, the project proponent must secure an Environmental Clearance Certificate. Additionally, the MoEFCC must make a decision within 105 days of receiving the final Environmental Impact Assessment (EIA) and Environmental Management Plan (EMP) reports.",
      ],
    },
    features: [
      {
        icon: "🌱",
        title: "Balancing Development & Environment",
        description:
          "EC ensures a balanced approach to economic development while protecting natural resources and ecosystems.",
      },
      {
        icon: "🌍",
        title: "Boosting Environmental Performance",
        description:
          "Environmental Clearance supports sustainable practices, enhancing overall environmental outcomes through responsible development.",
      },
      {
        icon: "⚖️",
        title: "Legal Compliance",
        description:
          "Projects with valid EC are in compliance with environmental laws, minimizing legal risks and regulatory violations.",
      },
      {
        icon: "👥",
        title: "Encouraging Public Involvement",
        description:
          "The EC process includes mechanisms like public hearings that improve transparency and stakeholder engagement.",
      },
      {
        icon: "💰",
        title: "Economic Sustainability",
        description:
          "Environmental Clearance helps foster economic benefits by encouraging eco-friendly, long-term project planning.",
      },
      {
        icon: "💧",
        title: "Conservation of Resources",
        description:
          "By mitigating environmental damage, EC promotes resource conservation and ecological balance.",
      },
    ],
    benefits: [
      {
        title: "Balancing Development & Environment",
        description:
          "EC ensures a balanced approach to economic development while protecting natural resources and ecosystems.",
      },
      {
        title: "Boosting Environmental Performance",
        description:
          "Environmental Clearance supports sustainable practices, enhancing overall environmental outcomes through responsible development.",
      },
      {
        title: "Legal Compliance",
        description:
          "Projects with valid EC are in compliance with environmental laws, minimizing legal risks and regulatory violations.",
      },
      {
        title: "Encouraging Public Involvement",
        description:
          "The EC process includes mechanisms like public hearings that improve transparency and stakeholder engagement.",
      },
      {
        title: "Economic Sustainability",
        description:
          "Environmental Clearance helps foster economic benefits by encouraging eco-friendly, long-term project planning.",
      },
      {
        title: "Conservation of Resources",
        description:
          "By mitigating environmental damage, EC promotes resource conservation and ecological balance.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Cover Letter",
          desc: "A letter introducing the project and seeking clearance.",
        },
        {
          title: "Detailed Project Proposal or Feasibility Report",
          desc: "A comprehensive description of the project and its feasibility, including environmental considerations.",
        },
        {
          title: "Environmental Impact Assessment (EIA) Report",
          desc: "A report assessing the potential environmental impacts of the project.",
        },
        {
          title: "Site Plan and Location Maps",
          desc: "Maps indicating the project site, including details about land acquisition.",
        },
        {
          title: "Local Authority Consent",
          desc: "Consent from the local authorities for the project's development.",
        },
        {
          title: "Details of the Project Proponent",
          desc: "Information about the entity or individual proposing the project.",
        },
        {
          title: "Public Hearing Report",
          desc: "A report on public consultations or hearings conducted for the project.",
        },
        {
          title: "Environmental Management Plan (EMP)",
          desc: "A plan detailing measures to mitigate environmental impacts during the project's life cycle.",
        },
        {
          title: "Registered Address Proof of the Applicant Entity",
          desc: "Proof of the registered address of the applicant entity or individual.",
        },
        {
          title: "Personal Details of the Authorized Applicant",
          desc: "Personal identification details of the individual authorized to apply for clearance.",
        },
        {
          title:
            "Terms of Reference (ToR), Previous EC, and Certified Compliance Reports",
          desc: "If applicable, include the Terms of Reference, previous Environmental Clearances, and compliance reports.",
        },
        {
          title: "Any Other Relevant Information",
          desc: "Any additional information pertinent to the project or required by the authorities.",
        },
      ],
      violations: [],
      consequences: [],
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
        title: "Application Submission",
        desc: "Submit the EC application in Form 1 along with Supplementary Form 1A after finalizing the project site.",
      },
      {
        title: "Application Screening",
        desc: "The SEAC evaluates the application to determine whether a detailed EIA study is necessary for Category B projects.",
      },
      {
        title: "Scoping",
        desc: "Prepare and submit the Terms of Reference (ToR) highlighting key environmental concerns to SEAC or EAC.",
      },
      {
        title: "Public Consultation",
        desc: "Conduct public hearings and stakeholder engagements to gather feedback from local communities.",
      },
      {
        title: "Appraisal by Expert Committee",
        desc: "The EAC or SEAC reviews the application, EIA report, and public consultation outcomes to recommend whether to grant EC.",
      },
      {
        title: "Forest Clearance",
        desc: "Obtain clearance under the Forest Conservation Act, 1980 if required for the project.",
      },
      {
        title: "Wildlife Clearance",
        desc: "Ensure wildlife clearance under the Wildlife Protection Act, 1972 from the National Board for Wildlife (NBWL).",
      },
      {
        title: "Coastal Regulation Zone (CRZ) Clearance",
        desc: "Obtain CRZ clearance as per the 2011 Notification for projects in coastal areas.",
      },
      {
        title: "Central Ground Water Authority (CGWA) NOC",
        desc: "Get the NOC from CGWA if the project involves groundwater extraction.",
      },
      {
        title: "Fire Department NOC",
        desc: "Ensure obtaining the NOC from the Fire Department as part of the safety protocol.",
      },
      {
        title: "Distance from Forest Boundary Certificate",
        desc: "Provide a certificate indicating the distance from the forest boundary for the project.",
      },
      {
        title: "Airport Authority of India (AAI) Height Clearance NOC",
        desc: "Obtain the NOC from AAI if the project exceeds specific height limits near airports.",
      },
      {
        title: "National Highway Authority of India (NHAI) NOC",
        desc: "Secure the NOC from NHAI for projects near national highways.",
      },
    ],
    faqs: [
      {
        question: "What is the validity period of an environmental clearance?",
        answer:
          "10 years for River Valley projects, 30 years for mini-projects, and 5 years for other projects.",
      },
      {
        question: "What is the primary objective of environmental clearance?",
        answer:
          "To ensure development projects do not adversely affect the environment.",
      },
      {
        question: "How can I submit a proposal for EC?",
        answer:
          "Submit Form 1 and 1A along with relevant documents through the prescribed online platform.",
      },
      {
        question: "Which types of projects require an EIA?",
        answer:
          "Large-scale industrial, infrastructure, mining, and river valley projects.",
      },
      {
        question: "Where is EC required?",
        answer:
          "Projects falling under Category A or B as per the EIA Notification 2006.",
      },
      {
        question: "What laws govern environmental clearance in India?",
        answer:
          "Environment Protection Act, Forest Conservation Act, Wildlife Protection Act, and EIA Notification.",
      },
      {
        question: "What are the steps for environmental clearance?",
        answer:
          "Application > Screening > Scoping > Public Consultation > Appraisal > Grant or Rejection.",
      },
      {
        question: "What is Category A and B in EC classification?",
        answer:
          "Category A: High impact projects assessed by MoEF&CC. Category B: Lower impact, assessed by SEAC/SEIAA.",
      },
      {
        question: "What are the 6 stages of environmental policy?",
        answer:
          "Problem Identification, Policy Formulation, Policy Adoption, Implementation, Evaluation, and Revision.",
      },
      {
        question: "Who grants the EC certificate?",
        answer:
          "Ministry of Environment, Forest and Climate Change (MoEF&CC) or SEIAA (State Environmental Impact Assessment Authority).",
      },
    ],
    types: {
      cards: [
        {
          title: "Consent to Establish (CTE)",
          shortText: "Obtain approval before beginning construction.",
          backText: "CTE is necessary before setting up the project.",
        },
        {
          title: "Consent to Operate (CTO)",
          shortText: "Apply for consent before commencing operations.",
          backText: "CTO is required to begin industrial operations.",
        },
        {
          title: "Half-Yearly Certified EC Compliance Reports",
          shortText: "Submit certified compliance reports every 6 months.",
          backText: "Provide documentation of ongoing compliance with EC.",
        },
        {
          title: "Voluntary Green Building Certification",
          shortText:
            "Optional certification for sustainable building practices.",
          backText: "Shows commitment to environmental sustainability.",
        },
        {
          title: "Grant/Rejection of EC",
          shortText: "Approval or rejection within 45 days.",
          backText:
            "The competent authority makes a decision after committee recommendation.",
        },
        {
          title: "Transferability of EC",
          shortText: "EC can be transferred to another entity.",
          backText:
            "Valid EC certificates can be transferred during their validity period.",
        },
      ],
      roleBenefits: [
        "Ensures legal compliance with environmental regulations.",
        "Promotes sustainable development practices.",
        "Minimizes environmental risks and hazards.",
        "Improves social and community relations through consultations.",
        "Boosts project credibility and acceptance.",
      ],
      differenceTable: {
        columns: ["Serial Number", "EC Grant", "EC Renewal"],
        rows: [
          [
            "1",
            "Approval granted after detailed assessment",
            "Renewal based on compliance reports",
          ],
          [
            "2",
            "Requires full EIA and public consultation",
            "Submission of half-yearly compliance reports",
          ],
          [
            "3",
            "Decision within 45 days after committee recommendation",
            "Renewal timeline varies based on project type",
          ],
          [
            "4",
            "Subject to forest, wildlife, and other clearances",
            "Valid for 5 to 30 years depending on project type",
          ],
          [
            "5",
            "Can be transferred to another entity",
            "Transferable within validity period with application",
          ],
        ],
      },
      timelineFees: [
        "Grant/Rejection Decision: 45 days post committee recommendation.",
        "EC Validity Period: 5 to 30 years based on project type.",
        "Transfer Process: Available during EC validity period.",
        "Fees: Government does not charge direct online fees for EC.",
        "Additional fees may apply based on project nature and state policies.",
      ],
    },
  },
  "social-impact-assessment": {
    overview: {
      heading: "Social Impact Assessment",
      paragraphs: [
        "Social Impact Assessment (SIA) is a systematic process to analyze, monitor, and manage the social consequences—both intended and unintended—of planned projects or interventions. In India, SIA is conducted as part of the Environmental Impact Assessment (EIA) process but still requires more focused attention to address social factors comprehensively.",
        "SIA plays a crucial role in project planning, especially for Resettlement Action Plans (RAPs), by assessing the socioeconomic effects on individuals and communities displaced or affected by development projects. The insights from SIA help design mitigation strategies and monitor their implementation to minimize adverse impacts.",
        "Social impact refers to the changes or effects that an individual, organization, or initiative has on society and its members. It extends beyond typical EIA concerns like demographics or employment, including cultural shifts in societal values, norms, and relationships.",
      ],
    },
    features: [],
    benefits: [
      {
        title: "Legal Compliance",
        description:
          "Helps meet regulatory requirements related to social aspects of development.",
      },
      {
        title: "Informed Decision-Making",
        description:
          "Provides valuable insights for planning and implementing projects responsibly.",
      },
      {
        title: "Mitigation of Negative Effects",
        description:
          "Enables the formulation of measures to reduce harm and enhance benefits.",
      },
      {
        title: "Builds Consumer and Community Trust",
        description: "Enhances credibility and reputation among stakeholders.",
      },
      {
        title: "Supports Market Expansion",
        description: "Facilitates acceptance and smoother project execution.",
      },
      {
        title: "Upholds Professional Values",
        description:
          "Ensures fairness, equity, accountability, and respect for human rights.",
      },
      {
        title: "Empowers Vulnerable Groups",
        description:
          "Focuses on improving conditions for women, minorities, and marginalized populations.",
      },
      {
        title: "Complements Economic & Technical Models",
        description:
          "Adds social dimensions to standard development frameworks.",
      },
      {
        title: "Government Support",
        description: "Strengthens relations with regulatory bodies.",
      },
      {
        title: "Risk Management",
        description:
          "Identifies social risks and guides mitigation strategies.",
      },
      {
        title: "Understand Impacted Parties",
        description:
          "Gain detailed knowledge about affected individuals and communities.",
      },
      {
        title: "Identify Social Impacts",
        description:
          "Assess positive and negative social consequences of the project.",
      },
      {
        title: "Formulate Mitigation Measures",
        description:
          "Develop strategies to reduce adverse effects and maximize benefits.",
      },
      {
        title: "Support Monitoring",
        description:
          "Establish frameworks for ongoing social impact tracking and reporting.",
      },
      {
        title: "Engage Stakeholders",
        description:
          "Maintain continuous community and stakeholder involvement.",
      },
      {
        title: "Consider Workforce and Housing Impacts",
        description: "Evaluate effects on workers and local accommodation.",
      },
      {
        title: "Analyze Health and Well-being",
        description: "Assess community health implications.",
      },
      {
        title: "Review Local Business Effects",
        description: "Consider impacts on local economies and procurement.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Project Proposal and Description",
          desc: "A detailed description of the project including its objectives, scope, and expected outcomes.",
        },
        {
          title: "Site Plan or Project Layout",
          desc: "A map or design showing the project layout and its placement on the site.",
        },
        {
          title: "Equipment Installation Proofs",
          desc: "Documentation or evidence proving the installation of necessary equipment for the project.",
        },
        {
          title: "Identification of Signatories",
          desc: "Information identifying the individuals who will sign off on project documents and reports.",
        },
        {
          title: "Quality Test Reports",
          desc: "Reports that provide evidence of the quality of materials, equipment, or methods used in the project.",
        },
        {
          title: "Evidence of Mitigation Measures",
          desc: "Documentation proving the implementation of mitigation strategies to address potential negative impacts.",
        },
        {
          title: "Utilities Connection Evidence (Electricity, Water)",
          desc: "Proof that the necessary utilities (electricity, water, etc.) have been secured for the project.",
        },
        {
          title: "Environmental and Social Impact Assessment Reports",
          desc: "Reports evaluating the potential environmental and social impacts of the project.",
        },
        {
          title: "Government Census and Land Records",
          desc: "Relevant census and land documentation from government authorities to support the project.",
        },
        {
          title: "Administrative and NGO Documents",
          desc: "Documentation from government agencies or non-governmental organizations (NGOs) involved in the project.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Role and Importance of Social Impact Assessment",
        items: [
          "Mandatory for food-related and other businesses to ensure social equity.",
          "Promotes sustainable, equitable community development and empowerment.",
          "Builds social capital by strengthening trust and networks.",
          "Proactively identifies opportunities and risks to optimize project outcomes.",
          "Supports stakeholders in defining development goals and maximizing benefits.",
          "Provides a basis for mitigation strategies to minimize harm and enhance positives.",
        ],
      },
      {
        heading: "Principles of Social Impact Assessment",
        items: [
          "Lifecycle Focused: Considers impacts throughout the entire project lifecycle.",
          "Reasonable Scope: Aligns project scope with social environment sensitivity.",
          "Participatory: Inclusive, respectful, and engages local knowledge and affected communities.",
          "Rigorous: Comprehensive and objective analysis with updated community data.",
          "Effective Management: Integrates measures to enhance benefits and reduce harm.",
          "Adaptive: Continuously monitors and adjusts management strategies.",
          "No Coercion: Ensures voluntary participation without undue pressure.",
        ],
      },
      {
        heading: "Examples of Socio-economic Impact Assessments in India",
        items: [
          "Hydroelectric Dams: Narmada River Valley Development Project",
          "Thermal Power: Dahanu Thermal Power Station",
          "Railways: Konkan Railway Project",
          "Ports: Vadhavan Ports, JSW Port at Nandgaon",
          "Renewable Energy: Tamil Nadu Renewable Energy Project",
          "Smart Cities: Ahmedabad Smart City, Karnataka Upper Bhadra Project",
        ],
      },
    ],
    services: [
      {
        title: "Application Submission",
        desc: "Submit the EC application in Form 1 along with Supplementary Form 1A after finalizing the project site.",
      },
      {
        title: "Application Screening",
        desc: "The SEAC evaluates the application to determine whether a detailed EIA study is necessary for Category B projects.",
      },
      {
        title: "Scoping",
        desc: "Prepare and submit the Terms of Reference (ToR) highlighting key environmental concerns to SEAC or EAC.",
      },
      {
        title: "Public Consultation",
        desc: "Conduct public hearings and stakeholder engagements to gather feedback from local communities.",
      },
      {
        title: "Appraisal by Expert Committee",
        desc: "The EAC or SEAC reviews the application, EIA report, and public consultation outcomes to recommend whether to grant EC.",
      },
      {
        title: "Forest Clearance",
        desc: "Obtain clearance under the Forest Conservation Act, 1980 if required for the project.",
      },
      {
        title: "Wildlife Clearance",
        desc: "Ensure wildlife clearance under the Wildlife Protection Act, 1972 from the National Board for Wildlife (NBWL).",
      },
      {
        title: "Coastal Regulation Zone (CRZ) Clearance",
        desc: "Obtain CRZ clearance as per the 2011 Notification for projects in coastal areas.",
      },
      {
        title: "Central Ground Water Authority (CGWA) NOC",
        desc: "Get the NOC from CGWA if the project involves groundwater extraction.",
      },
      {
        title: "Fire Department NOC",
        desc: "Ensure obtaining the NOC from the Fire Department as part of the safety protocol.",
      },
      {
        title: "Distance from Forest Boundary Certificate",
        desc: "Provide a certificate indicating the distance from the forest boundary for the project.",
      },
      {
        title: "Airport Authority of India (AAI) Height Clearance NOC",
        desc: "Obtain the NOC from AAI if the project exceeds specific height limits near airports.",
      },
      {
        title: "National Highway Authority of India (NHAI) NOC",
        desc: "Secure the NOC from NHAI for projects near national highways.",
      },
    ],
    faqs: [
      {
        question: "What is SIA?",
        answer:
          "Social Impact Assessment evaluates the social effects of projects, helping understand how they impact communities and people.",
      },
      {
        question: "Why is SIA necessary?",
        answer:
          "SIA is necessary to ensure socially sustainable, equitable development by identifying potential positive and negative impacts on the community.",
      },
      {
        question: "Is SIA mandatory in India?",
        answer:
          "Yes, SIA is mandatory in India, especially under the Land Acquisition Act, 2013, to assess social impacts before project approval.",
      },
      {
        question: "What tools are used in SIA?",
        answer:
          "Common tools used in SIA include surveys, interviews, Randomized Controlled Trials (RCT), Propensity Score Matching (PSM), and Social Capital Method (SCM).",
      },
      {
        question: "What are the social impact types?",
        answer:
          "Social impacts can be both positive and negative, affecting the community in various ways such as economic changes, social relationships, and health outcomes.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [],
    },
  },


  "tpap-license": {
    overview: {
      heading: "TPAP License Registration in India",
      paragraphs: [
        "A TPAP (Third-Party Application Provider) License is issued by the National Payments Corporation of India (NPCI) to entities looking to offer services within the UPI ecosystem. It is essential for companies aiming to provide UPI-based digital payment services.",
        "TPAPs operate in partnership with Payment Service Provider (PSP) banks to process secure and efficient UPI transactions. This license ensures strict adherence to UPI guidelines, enhancing trust, reliability, and regulatory compliance for all parties involved.",
        "DoStartup offers professional TPAP licensing support — from documentation and application to regulatory liaison and ongoing compliance — ensuring a smooth path to entering India's UPI infrastructure.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Official Entry into the UPI Ecosystem",
        description:
          "Gain access to India's most popular real-time payment infrastructure regulated by NPCI.",
      },
      {
        title: "Boosts Trust and Credibility",
        description:
          "TPAP registration enhances your company's reputation and assures users of secure digital payment operations.",
      },
      {
        title: "Facilitates Smooth UPI Transactions",
        description:
          "Licensed TPAPs enjoy uninterrupted access to UPI services, ensuring fast and reliable transaction experiences.",
      },
      {
        title: "Access to Dispute Resolution",
        description:
          "TPAPs benefit from NPCI's dispute handling mechanisms, simplifying grievance redressal for users.",
      },
      {
        title: "Compliance and Market Stability",
        description:
          "Meet all legal obligations, assuring long-term business viability and protection from penalties.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Eligibility Confirmation",
          desc: "Verify that your business is registered and meets NPCI's requirements for TPAP applicants.",
        },
        {
          title: "Step 2: Application Preparation",
          desc: "Gather required documents like incorporation proof, MoA, financials, and KYC details of directors.",
        },
        {
          title: "Step 3: Online Application Submission",
          desc: "Fill out FORM A on NPCI's portal with accurate business and contact information.",
        },
        {
          title: "Step 4: Document Upload",
          desc: "Submit all required documents for review including business plan and privacy policies.",
        },
        {
          title: "Step 5: NPCI Review & Evaluation",
          desc: "NPCI conducts verification, financial scrutiny, and compliance assessment.",
        },
        {
          title: "Step 6: Approval and License Grant",
          desc: "Once approved, NPCI issues the TPAP license allowing operation in the UPI ecosystem.",
        },
      ],
      violations: [
        "Exceeding UPI transaction market share cap of 30% without exemption.",
        "Failure to follow NPCI's operational and data protection guidelines.",
        "Non-compliance with dispute resolution and reporting obligations.",
      ],
      consequences: [
        "Revocation of TPAP license.",
        "NPCI-imposed penalties or suspension from UPI participation.",
        "Compliance audits and scrutiny by regulators.",
        "Merchant and user trust erosion, leading to business loss.",
      ],
    },
    eligibility: [
      {
        heading: "Who Can Apply for a TPAP License?",
        items: [
          "Companies registered under the Companies Act, 2013 or applicable laws.",
          "Banks, NBFCs, or licensed financial institutions.",
          "Payment Aggregators facilitating merchant transactions.",
          "Entities with robust data privacy, security, and UPI compliance policies.",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End TPAP License Support",
        desc: "From eligibility checks and FORM A filing to audit assistance and post-approval compliance, we handle the entire licensing process.",
      },
    ],
    faqs: [
      {
        question: "What is a TPAP License?",
        answer:
          "A TPAP (Third Party Application Provider) License is issued by NPCI to entities enabling UPI-based transactions via apps or platforms.",
      },
      {
        question: "Is GPay a TPAP or PSP?",
        answer:
          "Google Pay is a TPAP that operates in partnership with a PSP bank to facilitate UPI transactions.",
      },
      {
        question: "Is the TPAP License mandatory?",
        answer:
          "Yes, for any entity acting as a third-party application provider in the UPI network, this license is mandatory.",
      },
      {
        question: "What is the cost of obtaining a TPAP license?",
        answer:
          "The license may cost between ₹7,00,000 to ₹50,00,000 including integration and compliance fees.",
      },
      {
        question: "What is the role of NPCI?",
        answer:
          "NPCI is the governing body for UPI operations in India, managing transaction routing, licensing, dispute resolution, and platform integrity.",
      },
      {
        question: "What is the TPAP market share cap?",
        answer:
          "TPAPs cannot exceed 30% of UPI transaction volume (based on a rolling 3-month average).",
      },
      {
        question: "How long does it take to get a TPAP License?",
        answer:
          "Typically, the process takes 4 to 12 months depending on documentation and compliance checks.",
      },
      {
        question: "What is FORM A in TPAP license registration?",
        answer:
          "FORM A is the application format required by NPCI for TPAP license submission online.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      // "differenceTable": [],
      timelineFees: [
        "Application via FORM A on NPCI's UPI portal.",
        "License cost ranges between ₹7 lakh to ₹50 lakh based on entity type and scope.",
        "Typical timeline for approval: 4 to 12 months.",
        "Post-approval: Ongoing compliance reports and audits are mandatory.",
      ],
    },
  },
  "mobile-wallet-license": {
    overview: {
      heading: "Mobile Wallet (PPI) License in India",
      paragraphs: [
        "A Mobile Wallet License, also known as a Prepaid Payment Instrument (PPI) License, is issued by the Reserve Bank of India (RBI) under the Payment and Settlement Systems Act, 2007. It authorizes companies to offer digital wallets for secure electronic transactions.",
        "PPIs allow users to make payments and remit funds using prepaid balances. These instruments include mobile wallets, smart cards, debit cards, and other digital formats. Any company planning to offer wallet-based payment solutions must acquire this license to operate legally.",
        "DoStartup offers complete support for PPI/Mobile Wallet license application, compliance with RBI guidelines, anti-money laundering rules, and full regulatory documentation and processing.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Enables Secure Digital Transactions",
        description:
          "Mobile wallets offer instant, low-risk, and cashless transactions for daily use.",
      },
      {
        title: "Supports Micro and Recurring Payments",
        description:
          "Allows seamless handling of small-value and scheduled payments such as subscriptions or EMIs.",
      },
      {
        title: "Minimal Charges Compared to Banks",
        description:
          "Typically, mobile wallets come with no hidden fees or service charges, making them more cost-effective.",
      },
      {
        title: "Reward Programs and Cashback",
        description:
          "Users benefit from promotional offers, referral bonuses, and cashbacks linked with wallet usage.",
      },
      {
        title: "Automated Loan/Credit Repayments",
        description:
          "Prepaid wallets can be used for auto-debit and repayments to banks or financial service providers.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Company Incorporation",
          desc: "Register your business under the Companies Act, 2013 as a private or public limited company.",
        },
        {
          title: "Step 2: File Form A",
          desc: "Download and fill Form A from RBI's official portal for PPI applications.",
        },
        {
          title: "Step 3: Submit Documents",
          desc: "Attach all necessary documents including audited financials, business plans, and identification proofs.",
        },
        {
          title: "Step 4: RBI Due Diligence",
          desc: "RBI conducts an initial review and grants in-principle approval post-inspection.",
        },
        {
          title: "Step 5: Compliance & Final License",
          desc: "Post satisfactory audit review, RBI grants the final PPI License for wallet operations.",
        },
      ],
      violations: [
        "Offering wallet services without RBI license.",
        "Non-compliance with AML and KYC norms.",
        "Unauthorized PPI brand usage or rebranding without informing RBI.",
        "Issuing paper-voucher-based PPIs (prohibited in India).",
      ],
      consequences: [
        "Suspension or revocation of license by RBI.",
        "Penalties for non-compliance under PSS Act and AML guidelines.",
        "Disqualification of directors or promoters.",
        "Reputational damage and restricted access to financial partnerships.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Mobile Wallet License",
        items: [
          "Must be a company registered under the Companies Act, 1956 or 2013.",
          "Non-NBFC entities must have a minimum net worth of ₹5 crores.",
          "FEMA compliance is mandatory for foreign investment handling.",
          "Banks and NBFCs require RBI approval but no specific net worth threshold.",
          "Company must maintain financial and technical capability to issue and manage PPIs.",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End Wallet Licensing",
        desc: "We manage RBI communication, compliance checks, documentation, audit preparation, and post-licensing reporting.",
      },
    ],
    faqs: [
      {
        question: "What is a PPI license?",
        answer:
          "It is a license issued by RBI under the PSS Act, 2007 allowing companies to offer prepaid digital wallets for transactions.",
      },
      {
        question: "What is the validity of the PPI license?",
        answer:
          "The RBI grants a license with minimum validity of 1 year and renewable for up to 5 years depending on compliance.",
      },
      {
        question: "Which application form is required for the license?",
        answer:
          "FORM A must be submitted to RBI along with supporting documentation.",
      },
      {
        question: "What is the minimum capital for non-NBFC applicants?",
        answer:
          "Non-NBFCs must have at least ₹5 crore in net worth at the time of application.",
      },
      {
        question: "What types of mobile wallets are allowed?",
        answer:
          "Closed, semi-closed, semi-open, open wallets, and instruments for cross-border transactions are permitted under PPI norms.",
      },
      {
        question: "Are interest payments allowed on wallet balances?",
        answer:
          "No. PPI issuers are not allowed to offer interest on wallet balances.",
      },
      {
        question: "Can PPI issuers appoint agents?",
        answer:
          "Yes, with board-approved policies, proper background checks, and annual monitoring by the issuer.",
      },
      {
        question: "How are PPIs reloaded?",
        answer:
          "Via INR cash, bank transfers, debit/credit cards, or UPI — subject to RBI-defined monthly and overall limits.",
      },
      {
        question: "What security measures are necessary?",
        answer:
          "Issuers must follow AML and KYC guidelines, report suspicious transactions to FIU-IND, and ensure strong data protection.",
      },
      {
        question: "Who regulates mobile wallet services in India?",
        answer:
          "RBI's Department of Regulation (DoR) under the PSS Act and Money Laundering Act, 2002.",
      },
    ],
    types: {
      cards: [
        {
          title: "Closed Wallets",
          shortText:
            "Usable only for purchases within the issuing company's platform (e.g., Ola Money).",
          backText: "",
        },
        {
          title: "Semi-Closed Wallets",
          shortText:
            "Used with approved merchants/services in a restricted network but no cash withdrawal (e.g., Paytm).",
          backText: "",
        },
        {
          title: "Semi-Open Wallets",
          shortText:
            "Accepted at stores or websites with digital card infrastructure; cannot be used for cash withdrawal.",
          backText: "",
        },
        {
          title: "Open Wallets",
          shortText:
            "Offered by banks or authorized entities allowing both purchase and cash withdrawal (e.g., MobiKwik ICICI).",
          backText: "",
        },
      ],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [
        "Application via Form A submitted to RBI with detailed business plan.",
        "Initial license valid for 1 year from last PPI load activity.",
        "Renewable for 5 years based on compliance.",
        "Minimum capital of ₹5 crore for non-NBFCs.",
        "Audit inspections and agent monitoring mandatory during the validity.",
      ],
    },
  },
  "nbfc-registration": {
    overview: {
      heading: "NBFC Registration in India – A Complete Overview by DoStartup",
      paragraphs: [
        "Non-Banking Financial Companies (NBFCs) play a pivotal role in India's financial ecosystem by offering financial services without holding a traditional banking license. NBFCs registered with the Reserve Bank of India (RBI) are permitted to engage in financial activities such as acquiring stocks, bonds, debentures, government-issued securities, and more.",
        "These institutions are incorporated under the Companies Act, 2013 and governed by the Reserve Bank of India Act, 1934. Under Section 45-I (c) of the RBI Act, any company engaged in financial activities—without being a bank—is categorized as an NBFC.",
        "Facing challenges in NBFC registration? Connect with our consultants at DoStartup for expert-led guidance and simplified NBFC licensing services.",
      ],
      // imageUrl: "https://tse4.mm.bing.net/th/id/OIP.TTQXN6R8ZY7XpILqWea4rAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      // buttonText: "",
    },
    features: [],
    benefits: [
      {
        title: "Legal Authorization",
        // img: "https://images.unsplash.com/photo-1554224154-8e4e719180fe?w=400&h=300&fit=crop&crop=center",
        description:
          "An NBFC license allows companies to legally offer a wide range of financial services including loans, investments, and wealth management.",
      },
      {
        title: "Efficient Fund Management",
        // img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
        description:
          "NBFCs can manage liquidity efficiently by participating in short-term money market instruments and other financial instruments.",
      },
      {
        title: "Wealth & Portfolio Management",
        // img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
        description:
          "NBFCs can manage investment portfolios and engage in share and stock-related activities for wealth maximization.",
      },
      {
        title: "Access to Investment Opportunities",
        // img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
        description:
          "NBFCs can explore diverse investment projects across India, expanding their business footprint and profitability.",
      },
      {
        title: "Technology-Driven Operations",
        // img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        description:
          "NBFCs are more agile and digitally focused compared to traditional banks, offering modern, customer-friendly services.",
      },
      {
        title: "Enhanced Market Reach and Reputation",
        // img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
        description:
          "With faster loan disbursal, personalized services, and government collaborations, NBFCs build strong reputations and expand market reach.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Company Incorporation",
          desc: "Register your company under the Companies Act, 2013 with a minimum paid-up capital of ₹10 Crores.",
        },
        {
          title: "Step 2: Prepare a Business Plan",
          desc: "Draft a 5-year business plan outlining your objectives, operations, financial goals, and public benefit.",
        },
        {
          title: "Step 3: Document Collection & Scrutiny",
          desc: "Compile all required documents including net worth certificates, credit reports, KYC, and financial projections.",
        },
        {
          title: "Step 4: Online Application via COSMOS",
          desc: "File the NBFC application through RBI's online COSMOS portal and obtain a reference number.",
        },
        {
          title: "Step 5: Submission of Hard Copy",
          desc: "Send physical copies of the application and annexures to the respective RBI regional office.",
        },
        {
          title: "Step 6: Review and Certificate Issuance",
          desc: "RBI verifies documents and issues NBFC Registration Certificate within 180 working days if all conditions are met.",
        },
      ],
      violations: [
        "Accepting demand deposits",
        "Engaging in foreign exchange trading",
        "Operating payment systems or issuing cheques",
        "Offering banking-exclusive services without approval",
      ],
      consequences: [
        "Operating without registration is illegal and can attract heavy penalties",
        "Non-compliance with RBI norms may lead to cancellation of NBFC license",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for NBFC Registration",
        items: [
          "Must be registered as a Private or Public Limited Company under the Companies Act, 2013",
          "Minimum Net Owned Fund (NOF) of ₹10 Crores",
          "At least 1/3rd directors with 10+ years of financial services experience",
          "Detailed 5-year business plan with risk assessment",
          "No financial defaults by company, directors, or associated firms",
        ],
      },
      {
        heading: "Restricted Activities for NBFCs",
        items: [
          "Agriculture sector activities",
          "Industrial manufacturing",
          "Trading in goods (except securities)",
          "Real estate construction and sales",
        ],
      },
    ],
    services: [
      {
        title: "DoStartup NBFC Registration Services",
        desc: "DoStartup provides end-to-end consultancy for NBFC registration—from company incorporation and document preparation to RBI liaison and compliance.",
      },
    ],
    faqs: [
      {
        question: "How do I register an NBFC in India?",
        answer:
          "Register a company under Companies Act, prepare business plan, ensure ₹10 Crores NOF, file application on RBI's COSMOS portal, submit documents, and obtain the license upon approval.",
      },
      {
        question: "Who regulates NBFCs in India?",
        answer:
          "The Reserve Bank of India (RBI) is the sole regulatory authority overseeing NBFC registration and compliance.",
      },
      {
        question: "What is the minimum capital required for NBFC registration?",
        answer:
          "A minimum Net Owned Fund (NOF) of ₹10 Crores is mandatory as per latest RBI guidelines.",
      },
      {
        question: "Can a foreign company register as an NBFC in India?",
        answer:
          "Yes, foreign companies can apply by forming an Indian entity, complying with FDI policies, and fulfilling RBI norms.",
      },
      {
        question: "Can existing finance businesses apply for NBFC license?",
        answer:
          "Yes, but existing lending licenses must be surrendered before applying to avoid regulatory conflict.",
      },
      {
        question: "Is hiring a consultant like DoStartup mandatory?",
        answer:
          "Not mandatory, but highly recommended to avoid errors, save time, and ensure successful registration.",
      },
      {
        question: "How long does NBFC registration take?",
        answer:
          "The process typically takes 90 to 180 working days depending on documentation and RBI approvals.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [
        "Company Incorporation: 1–2 weeks",
        "Document Preparation & Business Plan: 2–4 weeks",
        "Application Submission & Verification: 1–2 weeks",
        "RBI Review & Approval: 3–6 months",
        "Total Timeline: 90–180 working days",
        "Government Fee: ₹3.5 Lakhs+ | Consultation Fee: Starting ₹6 Lakhs",
      ],
    },
  },
  "nbfc-takeover": {
    overview: {
      heading:
        "NBFC Takeover – A Complete Guide (An Overview of NBFC Acquisition in India)",
      paragraphs: [
        "A Non-Banking Financial Company (NBFC) takeover refers to the acquisition of an existing RBI-registered NBFC by another entity instead of registering a new one. This allows businesses to enter the financial sector swiftly while retaining legal compliance and operational benefits.",
        "This route, while faster than fresh registration, requires adherence to strict RBI regulations concerning ownership transfer, capital adequacy, and public disclosures. It involves acquiring control, management, and shareholding of the target NBFC.",
        "DoStartup offers seamless support throughout the NBFC takeover journey with its team of 150+ legal, financial, and regulatory experts, helping clients achieve acquisition completion within 60 days, including post-takeover services like capital restructuring and financial planning.",
      ],
      // "imageUrl": "https://images.unsplash.com/photo-1554224154-8e4e719180fe?w=800&h=600&fit=crop&crop=center",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Faster Market Entry",
        // "img": "https://images.unsplash.com/photo-1554224154-8e4e719180fe?w=400&h=300&fit=crop&crop=center",
        description:
          "Avoid delays of new registration by acquiring an existing licensed NBFC and begin financial operations almost immediately.",
      },
      {
        title: "Existing Customer Base",
        // "img": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
        description:
          "Gain access to the target company's existing customers, market relationships, and revenue streams.",
      },
      {
        title: "Diversified Portfolio",
        // "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
        description:
          "Expand your financial offerings by acquiring NBFCs operating in complementary domains.",
      },
      {
        title: "Regulatory Advantage",
        // "img": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
        description:
          "Operate under the existing Certificate of Registration (CoR) and leverage previous approvals and compliance records.",
      },
      {
        title: "Operational Continuity",
        // "img": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        description:
          "Resume business activities without disruption by acquiring ongoing systems, SOPs, and teams.",
      },
      {
        title: "Cost and Time Efficiency",
        // "img": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
        description:
          "Takeovers offer quicker returns and reduce regulatory burdens compared to fresh NBFC incorporation.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Sign Memorandum of Understanding (MoU)",
          desc: "The acquiring and target entities sign an MoU and token consideration is exchanged.",
        },
        {
          title: "Step 2: Obtain RBI Approval",
          desc: "Seek RBI's prior approval for takeovers involving significant change in control or shareholding.",
        },
        {
          title: "Step 3: Issue First Public Notice",
          desc: "Publish a public notice in regional and English newspapers 30 days before transaction execution.",
        },
        {
          title: "Step 4: Execute Formal Agreement",
          desc: "Sign Share Purchase Agreement and relevant legal documentation between acquirer and target.",
        },
        {
          title: "Step 5: Issue Second Public Notice",
          desc: "Reiterate the transaction details in public to maintain transparency before final execution.",
        },
        {
          title: "Step 6: Settle Liabilities and Liquidate Assets",
          desc: "Target NBFC clears all outstanding liabilities and liquidates assets to determine net worth.",
        },
        {
          title: "Step 7: Obtain NOC from Creditors",
          desc: "Obtain necessary No Objection Certificates from creditors to proceed with acquisition.",
        },
        {
          title: "Step 8: Asset Transfer and Valuation",
          desc: "Complete asset transfer post-approval and determine value using Discounted Cash Flow (DCF) method.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for NBFC Takeover",
        items: [
          "Both acquiring and target companies must be registered under the Companies Act.",
          "Target NBFC must have a valid Certificate of Registration (CoR) from the RBI.",
          "Acquirer must have a minimum Net Owned Fund (NOF) of ₹2 crore (recommended ₹5 crore).",
          "Acquirer must fulfill RBI's Fit and Proper criteria.",
          "Operational systems and compliance records of target NBFC must be satisfactory.",
        ],
      },
    ],
    services: [
      {
        title: "Complete Takeover Assistance",
        desc: "Get expert-led support from DoStartup for documentation, RBI approval, legal due diligence, and post-acquisition services.",
      },
    ],
    faqs: [
      {
        question: "What is an NBFC Takeover?",
        answer:
          "It is the process where one company acquires an existing RBI-licensed NBFC to gain market entry and financial operation capabilities without registering a new NBFC.",
      },
      {
        question: "Is RBI approval mandatory for NBFC takeover?",
        answer:
          "Yes, RBI approval is required if there is a change in management (>30%) or shareholding (>26%).",
      },
      {
        question: "What documents are needed for takeover?",
        answer:
          "PAN, DINs, KYC of shareholders/directors, financial reports, business plan, due diligence report, public notice proof, and RBI declarations.",
      },
      {
        question: "What is the average timeline for NBFC takeover?",
        answer:
          "The complete process typically takes around 5 to 6 months, depending on documentation and RBI approvals.",
      },
      {
        question: "What are the benefits of acquiring an NBFC?",
        answer:
          "It allows quick market entry, portfolio diversification, faster revenue generation, and bypassing initial registration delays.",
      },
      {
        question: "What are the RBI's Fit and Proper norms?",
        answer:
          "Acquirers must have a clean financial history, professional qualifications, and no criminal or financial misconduct.",
      },
      {
        question: "Is public notice mandatory for NBFC takeover?",
        answer:
          "Yes, a public notice must be published 30 days in advance in one English and one regional newspaper.",
      },
      {
        question: "Can a company with foreign investment acquire an NBFC?",
        answer: "Yes, subject to compliance with FDI guidelines and RBI norms.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [],
    },
  },
  "microfinance-company-registration": {
    overview: {
      heading:
        "Microfinance Company Registration – Complete Guide to Start Your MFI in India",
      paragraphs: [
        "A Microfinance Company (MFC) is an institution that delivers financial services to underserved populations, particularly in rural and semi-urban areas. It plays a pivotal role in empowering economically weaker sections by offering banking and credit services.",
        "Microfinance Companies are classified as Non-Deposit Taking NBFCs and are governed under the RBI Act, 1934. They differ from Section 8 companies and require registration with the Reserve Bank of India (RBI) to operate legally.",
        "DoStartup offers expert support throughout the Microfinance Company registration process, including company incorporation, compliance, RBI approval, and post-registration consulting.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Collateral-Free Lending",
        description:
          "Enable access to credit without the requirement of collateral security.",
      },
      {
        title: "Promotes Employment",
        description:
          "Stimulates job creation and self-employment opportunities in rural and backward areas.",
      },
      {
        title: "Supports Rural Development",
        description:
          "Accelerates financial inclusion and rural infrastructure through targeted lending.",
      },
      {
        title: "Favorable Loan Terms",
        description:
          "Offers low-interest loans and flexible repayment terms aligned with RBI guidelines.",
      },
      {
        title: "Empowers Low-Income Groups",
        description:
          "Provides necessary financial tools for economic self-reliance and entrepreneurial growth.",
      },
      {
        title: "No Minimum Capital for Section 8",
        description:
          "Section 8 registered MFIs do not require mandatory minimum capital to operate.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Register a Company",
          desc: "Incorporate a Private/Public Limited Company under Companies Act using the SPICe+ Form on the MCA portal.",
        },
        {
          title: "Step 2: Use SPICe+ Services",
          desc: "Utilize SPICe+ for integrated services like DIN, PAN, TAN, EPFO, ESIC, GST, and more.",
        },
        {
          title: "Step 3: File SPICe+ Application",
          desc: "Submit SPICe+ Part A and B with linked forms (AGILE-Pro, MOA, AOA) and obtain application number.",
        },
        {
          title: "Step 4: Raise Required Capital",
          desc: "Raise ₹2–5 crore depending on whether you're applying as an NBFC-MFI or a Section 8 company.",
        },
        {
          title: "Step 5: Open a Bank Account",
          desc: "Open a no-lien current account and obtain a banker's certificate.",
        },
        {
          title: "Step 6: Apply to RBI for Registration",
          desc: "Submit application with supporting documents such as CoI, MOA, AOA, and fixed deposit proof.",
        },
        {
          title: "Step 7: File Online Application with RBI",
          desc: "Apply on the RBI portal and obtain the Company Application Reference Number (CARN).",
        },
        {
          title: "Step 8: Submit Hard Copies to RBI",
          desc: "Send physical copies of all documents to the RBI regional office for review and approval.",
        },
      ],
      violations: [],
      consequences: [],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Microfinance Company Registration",
        items: [
          "Must be registered under Companies Act, 1956 or 2013.",
          "Minimum Net Owned Fund (NOF) of ₹5 crores (not applicable for Section 8).",
          "Loan range allowed: ₹50,000 to ₹1.25 lakhs.",
          "Promoter details must be disclosed.",
          "85% of NOF should be used as Qualifying Assets.",
          "Permissible sectors: agriculture, small-scale trade, artisans, professionals, transport.",
        ],
      },
    ],
    services: [
      {
        title: "Complete MFI Setup Support",
        desc: "Get expert-led assistance from DoStartup on documentation, RBI filing, company registration, and compliance.",
      },
    ],
    faqs: [
      {
        question: "What is a Microfinance Company?",
        answer:
          "Microfinance Companies provide small loans and financial services to low-income individuals and businesses lacking access to traditional banks.",
      },
      {
        question: "How can I register a Microfinance Company in India?",
        answer:
          "You must incorporate a company, obtain DSC/DIN, apply for name reservation, raise capital, and apply for registration with the RBI.",
      },
      {
        question:
          "What are the basic documents required for Microfinance Company registration?",
        answer:
          "PAN, Aadhaar, address proof, passport-size photos, ownership proof, utility bills, NOC, MOA/AOA, banker's certificate, and CA-certified compliance.",
      },
      {
        question:
          "What are the benefits of registering a Microfinance Company through DoStartup?",
        answer:
          "Promotes entrepreneurship, simplifies funding access, ensures regulatory compliance, and speeds up approval process.",
      },
      {
        question:
          "What is the initial cost of registering a Microfinance Company?",
        answer:
          "Registration starts from ₹11,90,000. Contact DoStartup for a customized quote.",
      },
      {
        question: "Can Microfinance Companies offer loans for personal use?",
        answer:
          "Yes, but personal-use loans must not exceed 30% of the total loan portfolio.",
      },
      {
        question:
          "Are Microfinance Companies allowed to charge a prepayment penalty?",
        answer:
          "No, RBI regulations prohibit prepayment penalties on microfinance loans.",
      },
      {
        question:
          "What are the limitations on interest rates and processing fees?",
        answer:
          "Interest rates cannot exceed 4% above benchmark, and processing fees are capped at 1% of the loan amount.",
      },
      {
        question: "What is the procedure for loan recovery?",
        answer:
          "Recovery must follow Fair Practices Code – no coercion, collections at central locations, and fair practices.",
      },
      {
        question: "What is meant by Net Assets?",
        answer:
          "Net Assets refer to the value of all assets excluding cash, bank balances, and market instruments.",
      },
      {
        question: 'What are "Qualifying Assets" in microfinance?',
        answer:
          "Loans to households earning < ₹1,00,000 (rural) or < ₹1,60,000 (urban/semi-urban).",
      },
      {
        question:
          "Are there restrictions on the remaining 15% of NBFC-MFI assets?",
        answer:
          "No specific restrictions apply to the remaining 15% of the total assets.",
      },
      {
        question:
          "Can NBFC-MFIs lend for emergencies like education or medical needs?",
        answer:
          "Yes. Up to 50% of total loans can be used for non-income-generating purposes such as healthcare or education.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [],
    },
  },
  "ffmc-license-registration": {
    overview: {
      heading:
        "FFMC License Registration – Full Fledged Money Changer License in India",
      paragraphs: [
        "A Full Fledged Money Changer (FFMC) License is issued by the Reserve Bank of India (RBI) to companies enabling them to legally conduct foreign exchange and money-changing transactions. Businesses with this license can buy foreign currency from NRIs and sell it to Indian residents for travel or business.",
        "As per Section 10 of FEMA, 1999, only Authorised Money Changers (AMCs) are allowed to perform money-changing functions. This license plays a vital role in enhancing India's forex infrastructure, particularly for tourists and international businesses.",
        "DoStartup simplifies the FFMC license registration process, offering expert support from application to RBI approval, renewal, compliance, and audits.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Legal Foreign Exchange Services",
        description:
          "Legally purchase and sell foreign currency to both residents and non-residents.",
      },
      {
        title: "Encashment Certificate Issuance",
        description:
          "Provide encashment certificates for forex transactions and traveller's cheques.",
      },
      {
        title: "Enhanced Services for Tourists",
        description:
          "Offer convenient money exchange solutions at hotels and authorized outlets for international visitors.",
      },
      {
        title: "Support for Cross-Border Trade",
        description:
          "Facilitate foreign exchange for travel, business, remittances, and education.",
      },
      {
        title: "Prepaid Forex Cards",
        description:
          "Issue prepaid Forex cards for Indian nationals traveling abroad for business or leisure.",
      },
      {
        title: "Revenue from Transaction Margins",
        description:
          "Earn revenue via margins on buy/sell transactions, commissions, and forex card services.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Fulfill Fit and Proper Criteria",
          desc: "Ensure all directors meet RBI's fit and proper requirements including age, integrity, and professional background.",
        },
        {
          title: "Step 2: Collect Documents",
          desc: "Gather all documents including incorporation certificate, MoA, AoA, financials, and statutory auditor certificates.",
        },
        {
          title: "Step 3: Submit Application to RBI",
          desc: "Submit the FFMC license application to the RBI's regional office with required enclosures.",
        },
        {
          title: "Step 4: RBI Review and Background Checks",
          desc: "RBI scrutinizes submitted documents and conducts due diligence on company and promoters.",
        },
        {
          title: "Step 5: Approval by Empowered Committee",
          desc: "Company directors are evaluated and approved by the Empowered Committee for license issuance.",
        },
        {
          title: "Step 6: License Issuance and Commencement",
          desc: "Upon approval, FFMC license is granted. Operations must begin within six months of issuance.",
        },
      ],
      violations: [
        "Non-compliance with FEMA, 1999 provisions.",
        "Failure to maintain Net Owned Funds (NOF).",
        "Unauthorized money-changing or operations beyond license scope.",
        "Late renewal or expired license usage.",
        "Non-submission of audit reports or transaction records.",
      ],
      consequences: [
        "RBI may revoke or suspend the FFMC license.",
        "Imposition of penalties under FEMA, 1999.",
        "Rejection of future applications and permanent disqualification.",
        "Legal and regulatory scrutiny for non-compliant transactions.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for FFMC License Registration",
        items: [
          "Company must be incorporated under Companies Act, 1956 or 2013.",
          "Net Owned Funds (NOF) of ₹25 lakhs for a single-branch license.",
          "Net Owned Funds (NOF) of ₹50 lakhs for multiple branches.",
          "No legal or regulatory investigations pending.",
          "Memorandum of Association (MoA) must have money-changing clause.",
          "Operations must commence within 6 months of license issuance.",
        ],
      },
    ],
    services: [
      {
        title: "Complete FFMC License Assistance",
        desc: "DoStartup provides end-to-end consultation for FFMC registration, document filing, compliance, audit preparation, and renewals.",
      },
    ],
    faqs: [
      {
        question: "What does FFMC stand for?",
        answer: "FFMC stands for Full-Fledged Money Changer.",
      },
      {
        question: "What is an FFMC?",
        answer:
          "An FFMC is an entity licensed by RBI to buy and sell foreign currency for personal, business, or tourism-related purposes.",
      },
      {
        question: "Who is eligible to apply for an FFMC license?",
        answer:
          "Any company registered under the Companies Act with required Net Owned Funds and no legal proceedings can apply.",
      },
      {
        question: "What is the validity of an FFMC license issued by RBI?",
        answer:
          "The FFMC license is valid for 3 years and must be renewed before expiry.",
      },
      {
        question: "How many types of FFMC licenses are there?",
        answer:
          "There are four types: Authorised Dealer Category I, II, III, and Full-Fledged Money Changers (FFMCs).",
      },
      {
        question: "How can I become a Forex dealer?",
        answer:
          "Pursue relevant finance education and apply for licensing via RBI or act as an FFMC franchisee.",
      },
      {
        question: "Can FFMCs issue Forex cards?",
        answer:
          "Yes, FFMCs and their authorized agents can issue prepaid Forex cards to Indian nationals.",
      },
      {
        question: "How do FFMCs earn revenue?",
        answer:
          "From commission, transaction spreads, service fees, and foreign currency exchange services.",
      },
      {
        question: "Can the FFMC license be revoked?",
        answer:
          "Yes, RBI may revoke licenses for non-compliance with FEMA, AML, CFT, or RBI directions.",
      },
      {
        question: "What is the franchise model in FFMC?",
        answer:
          "Businesses with NOF ≥ ₹10 lakhs can partner with FFMCs to operate under limited authorization for money-changing services.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [
        "Typical RBI approval takes 2–3 months.",
        "License valid for 3 years, annual renewal required.",
        "Consultation fees for FFMC registration start at ₹15 lakhs.",
        "Applications must be submitted one month prior to expiry for renewal.",
      ],
    },
  },
  "housing-finance-company-registration": {
    overview: {
      heading: "Housing Finance Company Registration in India",
      paragraphs: [
        "A Housing Finance Company (HFC) is a type of Non-Banking Financial Company (NBFC) focused on providing housing finance for construction, acquisition, or improvement of residential properties. It must be registered with the National Housing Bank (NHB), the apex authority governing housing finance institutions in India.",
        "The NHB was established under the NHB Act, 1987 and is responsible for regulating, licensing, and supervising HFCs. Any company intending to engage in housing finance activities must obtain a Certificate of Registration (COR) from NHB before commencing operations.",
        "DoStartup offers expert guidance and complete assistance in registering an HFC with NHB, ensuring compliance with all legal, financial, and operational prerequisites.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Affordable Housing Loans",
        description:
          "Offer housing finance to individuals at competitive interest rates.",
      },
      {
        title: "Corporate Housing Development",
        description:
          "Support housing initiatives for companies and employee accommodation.",
      },
      {
        title: "Rural and Urban Redevelopment",
        description:
          "Finance rural housing and slum redevelopment projects for sustainable growth.",
      },
      {
        title: "Government Collaboration",
        description:
          "Participate in public-private partnership models for affordable housing.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Download Application Form",
          desc: "Download the HFC registration form from the official NHB website.",
        },
        {
          title: "Step 2: Document Preparation",
          desc: "Compile all required documents including MOA, AOA, financials, board resolution, and business plan.",
        },
        {
          title: "Step 3: Submit to NHB",
          desc: "Submit the completed form, documents, and ₹10,000 DD to NHB's Head Office.",
        },
        {
          title: "Step 4: Verification Process",
          desc: "NHB will verify compliance with capital, object clause, and public interest norms.",
        },
        {
          title: "Step 5: Certificate of Registration",
          desc: "Once approved, the NHB issues a Certificate of Registration to operate as an HFC.",
        },
      ],
      violations: [
        "Failure to maintain minimum Net Owned Fund (NOF) of ₹20 Crores.",
        "Non-compliance with NHB guidelines or reporting formats.",
        "Failure to commence operations post-COR issuance.",
        "Submission of incorrect or incomplete financial documents.",
        "Deposit-taking in violation of NHB directives.",
      ],
      consequences: [
        "Revocation or suspension of Certificate of Registration (COR).",
        "Fines and penalties under the NHB Act, 1987.",
        "Ineligibility for future financial services or regulatory licenses.",
        "Reputational damage and legal consequences.",
      ],
    },
    eligibility: [
      {
        heading:
          "Eligibility Criteria for Housing Finance Company Registration",
        items: [
          "The applicant must be registered as a company under the Companies Act, 2013 or 1956.",
          "Must be registered as an NBFC with the RBI.",
          "Should have a minimum Net Owned Fund (NOF) of ₹20 Crores.",
          "The MOA should state housing finance as the primary business objective.",
          "Must operate in the public interest and have ethical practices.",
        ],
      },
    ],
    services: [
      {
        title: "Complete HFC Registration Assistance",
        desc: "From eligibility verification, document preparation, and NHB filing to post-registration compliance, DoStartup offers end-to-end support for Housing Finance Company setup.",
      },
    ],
    faqs: [
      {
        question: "What is a Housing Finance Company?",
        answer:
          "A Housing Finance Company (HFC) is a non-banking financial institution that provides loans for the purchase, construction, or renovation of residential properties. It is regulated by the National Housing Bank (NHB).",
      },
      {
        question: "Is a Housing Finance Company considered an NBFC?",
        answer:
          "Yes, an HFC is a type of NBFC, but it must be registered separately with NHB. It may be exempted from RBI registration under certain conditions as per the RBI Act.",
      },
      {
        question: "Who regulates HFCs in India?",
        answer:
          "Housing Finance Companies are regulated by the National Housing Bank (NHB), while RBI oversees broader NBFC guidelines. Coordination among NHB, RBI, and MCA ensures sectoral regulation.",
      },
      {
        question: "What documents are required for HFC registration?",
        answer:
          "MOA, AOA, ₹10,000 demand draft, board resolution, NOF compliance certificate, director profiles, business plan, and audited financials of the last 3 years.",
      },
      {
        question: "What is the minimum capital required to register an HFC?",
        answer:
          "A minimum Net Owned Fund (NOF) of ₹20 Crores is mandatory for obtaining a Certificate of Registration from NHB.",
      },
      {
        question: "Can a company apply for a housing loan?",
        answer:
          "Yes, companies are eligible for housing loans depending on their creditworthiness and compliance with lender norms.",
      },
      {
        question: "Can HFC registration be cancelled?",
        answer:
          "Yes. NHB can cancel the registration if the HFC fails to maintain accounts, violates deposit norms, or doesn't comply with NHB inspections or filing obligations.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [],
    },
  },
  "nbfc-account-aggregator-license": {
    overview: {
      heading: "NBFC Account Aggregator License in India",
      paragraphs: [
        "An NBFC Account Aggregator (NBFC AA) is a specialized non-banking financial company authorized by the Reserve Bank of India (RBI) to securely collect and share financial data between Financial Information Providers (FIPs) and Financial Information Users (FIUs) with customer consent.",
        "NBFC AAs act as consent brokers, helping individuals and businesses aggregate their financial information from multiple sources in a secure, encrypted, and standardized format. They are crucial to India's evolving digital financial infrastructure, operating under RBI's Account Aggregator Directions, 2016.",
        "DoStartup provides complete assistance for obtaining the NBFC Account Aggregator license, including consultation, documentation, and regulatory compliance management.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Improved Credit Access",
        description:
          "NBFC AAs allow users with limited credit history to access better financial services by aggregating their financial data.",
      },
      {
        title: "Cost-Efficient Data Sharing",
        description:
          "Streamline the collection and transfer of financial data at lower operational costs.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensure full adherence to RBI norms for data privacy, protection, and consent-based sharing.",
      },
      {
        title: "Operational Risk Management",
        description:
          "Minimize operational and data-handling risks through secure infrastructure.",
      },
      {
        title: "Encrypted IT Infrastructure",
        description:
          "Facilitate real-time, end-to-end encrypted data aggregation between FIPs and FIUs.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Application Filing",
          desc: "Submit an online application to the RBI using the prescribed format (Annexure A).",
        },
        {
          title: "Step 2: Document Submission",
          desc: "Attach required documents such as net worth statements, business plans, and fit and proper declarations.",
        },
        {
          title: "Step 3: RBI Due Diligence",
          desc: "RBI conducts verification and compliance checks based on NBFC-AA Master Directions.",
        },
        {
          title: "Step 4: In-Principle Approval",
          desc: "RBI may grant an in-principle approval valid for 12 months upon satisfactory verification.",
        },
        {
          title: "Step 5: Final License Issuance",
          desc: "After meeting all conditions, RBI issues the Certificate of Registration (CoR) to operate as NBFC AA.",
        },
      ],
      violations: [
        "Failure to meet the minimum Net Owned Fund (₹2 Cr) requirement.",
        "Sharing financial information without user consent.",
        "Operating businesses other than account aggregation.",
        "Accessing user credentials or using unauthorized third-party services.",
        "Non-submission of audit reports or failure to implement grievance redressal mechanisms.",
      ],
      consequences: [
        "Suspension or cancellation of NBFC AA license by the RBI.",
        "Monetary penalties and regulatory action under RBI Directions, 2016.",
        "Legal proceedings for breach of data privacy or customer rights.",
        "Public trust loss and restricted access to AA framework.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for NBFC Account Aggregator License",
        items: [
          "Must be a company registered under the Companies Act, 2013.",
          "Minimum Net Owned Fund (NOF) of ₹2 Crores.",
          "Company name must include 'AA' indicating Account Aggregator activity.",
          "Directors and promoters must meet RBI's 'fit and proper' criteria.",
          "Detailed business plan outlining IT infrastructure, data policies, and risk controls.",
          "Covenant Deed signed by directors/CEO/MD in accordance with RBI guidelines.",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End NBFC AA License Assistance",
        desc: "We offer a comprehensive package that includes RBI consultation, application filing, document preparation, business planning, and post-approval compliance management.",
      },
    ],
    faqs: [
      {
        question: "What is an NBFC Account Aggregator?",
        answer:
          "An NBFC Account Aggregator is a type of NBFC regulated by the RBI that collects, manages, and shares financial data securely with the user's consent, helping institutions and individuals better manage their financial profiles.",
      },
      {
        question: "Who is eligible for an NBFC AA license?",
        answer:
          "Fintech companies, banks, NBFCs, investment platforms, insurance firms, loan providers, and credit rating agencies meeting the regulatory requirements can apply for an NBFC AA license.",
      },
      {
        question:
          "What is the capital requirement for an NBFC Account Aggregator license?",
        answer:
          "Applicants must have a minimum Net Owned Fund of ₹2 Crores as prescribed by the RBI.",
      },
      {
        question: "Is the service only for individuals?",
        answer:
          "No, NBFC Account Aggregators serve both individuals and entities, including companies and small businesses registered under the Companies Act.",
      },
      {
        question: "What documents are required for registration?",
        answer:
          "Key documents include Certificate of Incorporation, KYC details, net worth certificates, audited financials, banker's report, fit and proper declarations, and business plan.",
      },
      {
        question: "What is the role of FIP and FIU in this framework?",
        answer:
          "FIPs (Financial Information Providers) hold data (like banks, NBFCs), while FIUs (Financial Information Users) use data (like lenders, regulators) via consented access provided by AAs.",
      },
      {
        question: "What kind of data is included under financial information?",
        answer:
          "Data includes bank deposits, mutual funds, insurance, bonds, equity shares, NPS, AIF, SIPs, GST returns, and more as per RBI directions.",
      },
      {
        question: "Can NBFC AAs engage in other business activities?",
        answer:
          "No, NBFC AAs are strictly prohibited from performing any business other than account aggregation.",
      },
    ],
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: { columns: [], rows: [] },
      timelineFees: [],
    },
  },
  "prepaid-wallet-license": {
    overview: {
      heading: "Prepaid Wallet License (PPI License) in India",
      paragraphs: [
        "A Prepaid Payment Instrument (PPI) License, also known as a Prepaid Wallet License, is issued by the Reserve Bank of India (RBI) under the Payment and Settlement Systems Act, 2007. It allows businesses to operate digital wallets for making purchases, fund transfers, and remittances using preloaded funds.",
        "PPIs include digital wallets, prepaid cards, and mobile apps like Paytm, PhonePe, etc. To ensure customer safety, regulatory compliance, and smooth operations, businesses must obtain RBI authorization before offering such services.",
        "At DoStartup, we provide complete support—from documentation and filing to audit assistance—to help you launch your digital payment wallet with ease.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Regulatory Compliance",
        description:
          "Ensures the wallet system meets RBI's Payment and Settlement guidelines for secure operations.",
      },
      {
        title: "Customer Trust & Credibility",
        description:
          "Increases user confidence with RBI-backed legitimacy and operational transparency.",
      },
      {
        title: "Revenue Opportunities",
        description:
          "Enables income from transaction fees, top-ups, value-added services, and brand partnerships.",
      },
      {
        title: "Scalable Business Network",
        description:
          "Allows partnerships with banks and fintechs for broader service offerings.",
      },
      {
        title: "Cross-Border Flexibility",
        description:
          "Supports limited foreign transactions under FEMA guidelines (up to ₹5,000).",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Application Submission",
          desc: "File an application with required documents and fees under Regulation 3(2) of the Payment and Settlement Systems Regulations, 2008.",
        },
        {
          title: "Step 2: Screening by RBI",
          desc: "RBI evaluates the application for eligibility, infrastructure, cybersecurity readiness, and service capabilities.",
        },
        {
          title: "Step 3: In-Principle Approval",
          desc: "RBI may grant a 6-month in-principle approval. Extensions of another 6 months are possible upon request.",
        },
        {
          title: "Step 4: Submit System Audit Report",
          desc: "Applicants must submit a satisfactory SAR and audit report within the validity period.",
        },
        {
          title: "Step 5: Final License Issuance",
          desc: "On meeting all conditions, RBI issues the final license, authorizing prepaid wallet operations.",
        },
      ],
      violations: [
        "Failure to meet the net worth requirement of ₹15 crores.",
        "Operating without RBI authorization.",
        "Issuing wallets not aligned with MOA objectives.",
        "Non-submission of audit or SAR within the approval period.",
        "Security breaches in wallet operations.",
      ],
      consequences: [
        "Revocation of license by RBI.",
        "Financial penalties and compliance orders.",
        "Reputational damage and operational suspension.",
        "Legal proceedings under the Payment and Settlement Systems Act, 2007.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Prepaid Wallet License",
        items: [
          "Entity must be a company registered under the Companies Act, 2013.",
          "The MOA must clearly include the objective to issue PPIs.",
          "Minimum net worth of ₹15 crores is mandatory.",
          "NBFCs and scheduled banks can issue mobile-based PPIs with RBI authorization.",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End PPI License Support",
        desc: "We assist with documentation, project reports, regulatory filings, audit coordination, and compliance for launching your wallet business.",
      },
    ],
    faqs: [
      {
        question: "What is a Prepaid Payment Instrument (PPI)?",
        answer:
          "PPI is an RBI-authorized payment method allowing consumers to make purchases or transfer funds using preloaded amounts via wallets, cards, or mobile apps.",
      },
      {
        question: "Who can apply for a PPI License?",
        answer:
          "Companies registered under the Companies Act, 2013 with a ₹15 crore net worth, as well as authorized NBFCs and scheduled banks.",
      },
      {
        question: "What is the validity of the license?",
        answer:
          "The license is typically valid for 5 years, with periodic reviews and compliance evaluations by the RBI.",
      },
      {
        question: "What is a closed wallet?",
        answer:
          "A closed wallet is used only for purchasing goods or services from the issuing entity and cannot be used at third-party merchants.",
      },
      {
        question: "What is a semi-closed wallet?",
        answer:
          "Semi-closed wallets allow transactions at multiple merchants contracted with the issuer but prohibit cash withdrawal.",
      },
      {
        question: "What is an open wallet?",
        answer:
          "Only banks can issue open wallets, which allow purchases, fund transfers, and cash withdrawals.",
      },
      {
        question: "How do prepaid wallets generate income?",
        answer:
          "By charging merchants a transaction fee, earning interest on wallet balances, and partnering with brands for promotions.",
      },
      {
        question: "What are the fees for PPI license?",
        answer:
          "The government license fee starts at ₹10,000. Consulting and compliance service charges are additional.",
      },
    ],
    types: {
      cards: [
        {
          title: "Closed PPI",
          shortText:
            "For use only with the issuing entity's products or services. RBI approval not required.",
          backText: "Examples: Store gift cards, food vouchers.",
        },
        {
          title: "Semi-Closed PPI",
          shortText:
            "Used at multiple merchant outlets under issuer agreements. RBI authorization is mandatory.",
          backText: "Examples: Paytm Wallet, PhonePe.",
        },
        {
          title: "Open PPI",
          shortText:
            "Issued only by banks. Allows full functionality including purchases, remittance, and cash withdrawal.",
          backText: "Examples: Visa Prepaid Card, Mastercard Wallet.",
        },
      ],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [
        "Typical application processing takes 6 months.",
        "Government fees start from ₹10,000 depending on entity type.",
        "The license is valid for 5 years subject to compliance and periodic review.",
      ],
    },
  },
  "p2p-lending-license": {
    overview: {
      heading: "Peer-to-Peer (P2P) Lending License in India",
      paragraphs: [
        "A Peer-to-Peer (P2P) Lending License is issued by the Reserve Bank of India (RBI) and allows companies to operate platforms that connect individual borrowers and lenders without traditional financial intermediaries. These platforms facilitate unsecured digital loans, fostering financial inclusion and innovation in the lending space.",
        "With a P2P license, businesses can offer consumer, business, or property-based lending via a secure online interface. The license ensures transparency, legal compliance, and operational safety for users.",
        "DoStartup offers expert assistance in filing, documentation, compliance, and IT readiness to help you launch a successful and RBI-compliant P2P lending platform.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Faster Loan Processing",
        description:
          "Enables quicker disbursal and approval without traditional banking delays.",
      },
      {
        title: "Lower Interest Rates",
        description:
          "Borrowers often access credit at lower rates compared to banks.",
      },
      {
        title: "Transparent Digital Ecosystem",
        description:
          "Both parties can view all terms, track transactions, and remain in full control.",
      },
      {
        title: "Financial Inclusion",
        description:
          "Empowers underserved segments like MSMEs and individuals with limited banking access.",
      },
      {
        title: "Increased Trust & Market Reputation",
        description:
          "Holding an RBI-approved license enhances credibility and user confidence.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: File Application",
          desc: "Apply online via the RBI COSMOS portal or submit offline at RBI's Mumbai regional office.",
        },
        {
          title: "Step 2: Submit Documents",
          desc: "Send the required documents including business model, IT plan, and financials to the RBI.",
        },
        {
          title: "Step 3: Receive In-Principle Approval",
          desc: "Upon successful review, RBI issues a 12-month in-principle license.",
        },
        {
          title: "Step 4: Setup Technology Platform",
          desc: "Develop and launch your secure P2P tech infrastructure within 12 months.",
        },
        {
          title: "Step 5: Obtain Final License",
          desc: "After RBI's compliance review, the full P2P license is issued, allowing commercial operations.",
        },
      ],
      violations: [
        "Lending money from the platform's balance sheet.",
        "Accepting public deposits or offering guarantees.",
        "Failing to perform credit assessments and risk profiling.",
        "Inadequate data protection policies or violation of user privacy.",
        "Failure to disclose NPAs or provide mandatory transparency metrics.",
      ],
      consequences: [
        "Cancellation of in-principle or final license by RBI.",
        "Monetary penalties and legal liabilities.",
        "Public listing of non-compliant entities.",
        "Reputational harm and regulatory blacklisting.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for P2P Lending License",
        items: [
          "Must be a company registered under the Companies Act, 2013.",
          "Net Owned Fund (NOF) of at least ₹2 crores.",
          "Promoters and directors must be 'fit and proper' as per RBI norms.",
          "Sound financial structure and viable business model.",
          "Secure and scalable IT infrastructure.",
          "Prior compliance if already operating in the P2P sector.",
        ],
      },
    ],
    services: [
      {
        title: "Complete P2P Licensing Support",
        desc: "We help you prepare the application, submit documentation, build secure IT systems, and receive RBI approval for launching your P2P platform.",
      },
    ],
    faqs: [
      {
        question: "What is the validity of the P2P lending license?",
        answer:
          "The in-principle license is valid for 12 months. Final approval depends on compliance and platform setup within this period.",
      },
      {
        question: "Is P2P lending legal in India?",
        answer:
          "Yes, it is regulated by the RBI under NBFC-P2P guidelines introduced in 2017.",
      },
      {
        question: "What are the key benefits for borrowers?",
        answer:
          "Borrowers enjoy quick processing, flexible loan terms, and lower interest rates than traditional lenders.",
      },
      {
        question: "How do P2P platforms earn revenue?",
        answer:
          "Through loan origination fees, subscription plans, transaction charges, and value-added services like credit scoring and financial tools.",
      },
      {
        question: "What disclosures are mandatory?",
        answer:
          "Platforms must disclose credit assessments, borrower information, NPAs, grievance redressal processes, and data privacy policies.",
      },
      {
        question: "Is cash allowed for lending transactions?",
        answer:
          "No. All P2P transactions must be digital and routed through approved channels for transparency and legal compliance.",
      },
    ],
    types: {
      cards: [
        {
          title: "Consumer Lending",
          shortText:
            "Loans for weddings, travel, education, or medical emergencies.",
          backText:
            "Offered to individuals seeking personal loans via digital platforms.",
        },
        {
          title: "Small Business Lending",
          shortText:
            "Funding for MSMEs, working capital, or business expansion.",
          backText:
            "Ideal for startups and entrepreneurs needing capital support.",
        },
        {
          title: "Commercial & Real Estate Lending",
          shortText:
            "Loans for residential/commercial projects, refinancing, or development.",
          backText:
            "Useful for real estate investors seeking alternative financing options.",
        },
      ],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [
        "In-principle approval takes 3–6 months.",
        "Final approval requires platform setup and audit within 12 months.",
        "There are no fixed government fees, but RBI may charge processing fees.",
        "Consultancy fees are additional based on scope of services offered.",
      ],
    },
  },
  "payment-bank-license": {
    overview: {
      heading: "Payment Bank License in India",
      paragraphs: [
        "Payment Banks are a special category of banks introduced by the Reserve Bank of India (RBI) in 2013 to drive financial inclusion by offering digital banking services like remittance, savings, and payments without lending or credit card issuance.",
        "These banks serve the unbanked and underbanked populations, including migrant workers, low-income households, and small businesses, providing access to essential banking services in a cost-effective and secure manner.",
        "DoStartup offers end-to-end guidance for obtaining a Payment Bank License — from company registration and compliance documentation to submission via the RBI's PRAVAAH portal and post-licensing support.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "Financial Inclusion",
        description:
          "Enable banking access for low-income groups, small businesses, and rural areas.",
      },
      {
        title: "Zero Balance Accounts",
        description:
          "Offer savings accounts without requiring a minimum balance, often linked with mobile numbers.",
      },
      {
        title: "Secure Digital Banking",
        description:
          "Provide safe and user-friendly banking via mobile, internet, and ATMs.",
      },
      {
        title: "Regulatory Recognition",
        description:
          "Operate under RBI's regulatory framework, ensuring trust and compliance.",
      },
      {
        title: "Agent Network Expansion",
        description:
          "Widen service reach through extensive agent or business correspondent networks.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Company Incorporation",
          desc: "Register as a Public Limited Company under the Companies Act, 2013.",
        },
        {
          title: "Step 2: File Form III",
          desc: "Submit Form III (under Rule 11) with required documents to RBI.",
        },
        {
          title: "Step 3: Evaluation by EAC",
          desc: "RBI and the External Advisory Committee assess eligibility and business model.",
        },
        {
          title: "Step 4: In-Principle Approval",
          desc: "Receive in-principle approval valid for 18 months to establish infrastructure.",
        },
        {
          title: "Step 5: Final License Grant",
          desc: "After verifying compliance, RBI issues the Payment Bank license.",
        },
      ],
      violations: [
        "Engaging in lending or issuing credit cards.",
        "Raising deposits beyond ₹2 lakh per customer.",
        "Accepting cheque deposits or providing overdraft facilities.",
        "Non-compliance with cybersecurity and KYC norms.",
      ],
      consequences: [
        "License rejection or cancellation by RBI.",
        "Penalties and legal action under banking laws.",
        "Disqualification of directors/promoters from financial services.",
        "Blacklist under RBI's regulatory list for non-compliance.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Payment Bank License",
        items: [
          "Registered as a Public Limited Company under the Companies Act, 2013.",
          "Minimum paid-up equity capital of ₹100 crore.",
          "40% promoter contribution locked in for at least 5 years.",
          "Promoters must be 'fit and proper' with 5+ years of financial experience.",
          "Maintain 15% Capital Adequacy Ratio (CAR), with 7.5% in Tier-I capital.",
          "Clear plan for technology infrastructure and financial services delivery.",
        ],
      },
    ],
    services: [
      {
        title: "Complete Payment Bank Licensing Support",
        desc: "We handle everything from incorporation, compliance, and document drafting to filing with RBI via PRAVAAH portal.",
      },
    ],
    faqs: [
      {
        question: "Who grants the Payment Bank License?",
        answer:
          "The Reserve Bank of India (RBI) under Section 22 of the Banking Regulation Act, 1949.",
      },
      {
        question: "What is the capital requirement for a Payment Bank?",
        answer:
          "The minimum paid-up capital is ₹100 crore, with 40% promoter stake locked in for 5 years.",
      },
      {
        question: "What are the permitted activities?",
        answer:
          "Accept deposits up to ₹2 lakh, issue debit cards, offer utility bill payments, remittance services, and act as business correspondents.",
      },
      {
        question: "Are NRIs allowed to open accounts in Payment Banks?",
        answer: "No, NRIs are not permitted to hold deposits in Payment Banks.",
      },
      {
        question: "Is lending allowed under a Payment Bank License?",
        answer:
          "No, lending and issuance of credit cards are strictly prohibited.",
      },
      {
        question: "What is the validity of in-principle approval?",
        answer: "It is valid for 18 months from the date of issuance.",
      },
      {
        question: "Are Payment Banks allowed to issue chequebooks?",
        answer: "No, they are not permitted to issue chequebooks.",
      },
      {
        question: "What is the project report requirement?",
        answer:
          "It must demonstrate financial viability, business objectives, and digital banking delivery model.",
      },
      {
        question: "What is the role of the External Advisory Committee?",
        answer:
          "The EAC evaluates applicants' financial strength, promoter background, and operational plan before RBI approval.",
      },
      {
        question: "Do I need legal assistance for this license?",
        answer:
          "Yes, legal experts help ensure compliance with RBI guidelines and proper documentation.",
      },
    ],
    types: {
      cards: [
        {
          title: "Remittance Services",
          shortText:
            "Domestic and cross-border personal remittance under FEMA.",
          backText: "Useful for migrant workers and small remitters.",
        },
        {
          title: "Savings Accounts",
          shortText: "Provide zero balance savings and deposits up to ₹2 lakh.",
          backText:
            "Targeted at the underbanked population and small businesses.",
        },
        {
          title: "Utility Payment & PPI",
          shortText:
            "Support bill payments, mobile recharge, and prepaid instruments.",
          backText:
            "Acts as a digital wallet alternative for small transactions.",
        },
      ],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [
        "Processing usually takes 25–30 working days.",
        "In-principle license is valid for 18 months for setup.",
        "Final approval is based on compliance and infrastructure readiness.",
        "Application is filed via RBI's PRAVAAH portal from May 1, 2025.",
        "Government charges and consultancy fees vary based on scope of work.",
      ],
    },
  },
  "payment-gateway-license": {
    overview: {
      heading: "Payment Gateway License in India",
      paragraphs: [
        "A Payment Gateway License is issued by the Reserve Bank of India (RBI) under Section 5 of the Payment and Settlement Systems Act, 2007, allowing entities to securely transmit online transaction data between buyers, sellers, and financial institutions.",
        "Payment gateways serve as digital intermediaries that ensure secure processing of payments for online purchases, supporting a broad array of services from card payments to mobile wallet integration.",
        "DoStartup provides complete assistance in obtaining a Payment Gateway License — including documentation, RBI compliance, technical setup, and authorization — helping businesses expand their digital presence and accept secure online payments.",
      ],
      // "imageUrl": "/gst.jpg",
      // "buttonText": ""
    },
    features: [],
    benefits: [
      {
        title: "PCI-DSS Wallet Compliance",
        description:
          "Ensures data privacy and security for recurring payments in compliance with international security standards.",
      },
      {
        title: "White-Label Wallet Support",
        description:
          "Allows integration of branded digital wallets within your own app or platform.",
      },
      {
        title: "Fraud Detection Tools",
        description:
          "Integrates security measures like CVV, AVS, OTP, and AI-based fraud prevention systems.",
      },
      {
        title: "Unified API Access",
        description:
          "Seamlessly connects with e-commerce platforms and other software via a single API.",
      },
      {
        title: "International Payment Acceptance",
        description:
          "Facilitates cross-border transactions, enabling global business expansion.",
      },
    ],
    documents: {
      steps: [
        {
          title: "Step 1: Submit Application",
          desc: "Submit Form A to RBI's Department of Payment & Settlement Systems along with required documents.",
        },
        {
          title: "Step 2: RBI Authentication",
          desc: "RBI verifies business credentials, documents, and compliance requirements.",
        },
        {
          title: "Step 3: Compliance Review",
          desc: "RBI reviews applicant's conformity with Section 7 of the PSS Act, 2007.",
        },
        {
          title: "Step 4: Issuance of Authorization",
          desc: "Upon satisfactory compliance, RBI grants the Payment Gateway Authorization Certificate (Form B).",
        },
        {
          title: "Step 5: Processing Time",
          desc: "RBI processes applications within 6 months from submission as per the PSS Act.",
        },
      ],
      violations: [
        "Operating a payment gateway without RBI authorization.",
        "Non-compliance with PCI-DSS or data security standards.",
        "Failure to disclose financials or code audit reports.",
        "Delayed settlement or mishandling of merchant funds.",
      ],
      consequences: [
        "License cancellation by RBI under Section 8 of the PSS Act.",
        "Legal action or monetary penalties under Indian banking laws.",
        "Merchant blacklisting and reputational damage.",
        "Restricted access to banking partnerships or API integrations.",
      ],
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Payment Gateway License",
        items: [
          "Must be a company incorporated under the Companies Act, 1956 or 2013.",
          "Minimum of 2 directors and 2 shareholders.",
          "Net worth of ₹15 crores, to be increased to ₹25 crores within 3 years.",
          "Current account in the company's name.",
          "Registered office address proof.",
          "5-year business and financial plan.",
          "Code testing report from a certified software agency.",
          "Service Tax Registration and PCI-DSS compliance.",
        ],
      },
    ],
    services: [
      {
        title: "End-to-End Payment Gateway Licensing",
        desc: "We handle RBI filings, PCI-DSS compliance, code testing reports, and documentation for seamless authorization.",
      },
    ],
    faqs: [
      {
        question: "Who grants the Payment Gateway License in India?",
        answer:
          "The Reserve Bank of India (RBI) under Section 5 of the Payment and Settlement Systems (PSS) Act, 2007.",
      },
      {
        question:
          "What is the minimum capital required for a Payment Gateway License?",
        answer:
          "A net worth of ₹15 crores initially, to be increased to ₹25 crores within 3 years.",
      },
      {
        question: "How long does it take to get a Payment Gateway License?",
        answer:
          "RBI processes applications within 6 months as per Section 7(4) of the PSS Act, 2007.",
      },
      {
        question: "Is PCI-DSS compliance mandatory?",
        answer:
          "Yes, PCI-DSS compliance is required to ensure secure handling of payment card data.",
      },
      {
        question: "Can a startup apply for a Payment Gateway License?",
        answer:
          "Yes, if it meets all RBI criteria including capital, documentation, and technical compliance.",
      },
      {
        question: "What documents are required to apply?",
        answer:
          "CoI, PAN, DIN, DSC, address proof, current account details, business plan, code audit report, and KYC of directors.",
      },
      {
        question: "What are second-party vs third-party gateway providers?",
        answer:
          "Second-party providers are banks; third-party providers are fintech companies offering gateway services to merchants.",
      },
      {
        question: "Is international payment acceptance allowed?",
        answer:
          "Yes, authorized gateways can enable cross-border payments with proper compliance.",
      },
      {
        question: "What is the role of Form A and Form B?",
        answer:
          "Form A is for application submission; Form B is the RBI-issued Authorization Certificate.",
      },
      {
        question: "Do I need a merchant agreement?",
        answer:
          "Yes, a legal agreement with merchants is essential for transaction processing and settlement responsibilities.",
      },
    ],
    types: {
      cards: [
        {
          title: "Second-Party Payment Gateways",
          shortText:
            "Bank-operated gateways with low TDR but high fixed costs.",
          backText: "Best for high-volume enterprise-level merchants.",
        },
        {
          title: "Third-Party Payment Gateways",
          shortText:
            "Fintech or non-bank aggregators offering cost-effective digital payment infrastructure.",
          backText: "Popular among startups, MSMEs, and online retailers.",
        },
      ],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: [],
      },
      timelineFees: [
        "Net worth requirement: ₹15 crores (to be increased to ₹25 crores in 3 years).",
        "Application is filed via Form A to RBI's Payment & Settlement Systems Department.",
        "Authorization is granted within 6 months as per Section 7(4) of the PSS Act.",
        "PCI-DSS certification and code audit are mandatory before operations begin.",
        "Legal, consultancy, and audit fees depend on company scale and complexity.",
      ],
    },
  },
  "bio-medical-waste-treatment-plant": {
    overview: {
      heading: "Biomedical Waste Treatment Plant – Overview",
      paragraphs: [
        "India’s large population is driving a sharp rise in patients and healthcare activity, causing biomedical waste generation to increase rapidly. Establishing dedicated biomedical waste treatment and disposal facilities is essential to manage this hazardous waste safely and sustainably.",
        "Biomedical waste originates from diagnosis, treatment, immunization, medical research, and health camps involving humans or animals. It includes blood-contaminated items, bodily fluids, used instruments, lab waste, plastics, and chemical residues — all of which pose serious health and environmental risks if not handled properly.",
        "Approximately 15% of healthcare waste is biomedical and must be managed under the Biomedical Waste Management Rules, 2016, which prescribes segregation into color-coded categories (Yellow, Red, White, Blue) and specific treatment/disposal methods."
      ]
    },
    features: [
      {
        icon: "🏭",
        title: "Dedicated Treatment Infrastructure",
        description: "High-temperature incinerators, autoclaves, microwave units, and plasma pyrolysis systems for safe destruction of hazardous waste."
      },
      {
        icon: "⚙️",
        title: "Automated Segregation & Storage",
        description: "Automated segregation systems and secure storage units to reduce human exposure and improve compliance."
      },
      {
        icon: "🔬",
        title: "Multiple Treatment Methods",
        description: "Options including incineration, autoclaving, microwave treatment, chemical disinfection and plasma pyrolysis depending on waste type."
      },
      {
        icon: "🌬️",
        title: "Emission Control & Monitoring",
        description: "Advanced filtration and air quality control systems to meet pollution norms and protect surrounding communities."
      },
      {
        icon: "🧯",
        title: "Safety & Emergency Protocols",
        description: "Comprehensive emergency response plans, worker PPE, and regular drills to handle spills and accidents."
      },
      {
        icon: "📊",
        title: "Regulatory Reporting Tools",
        description: "Monitoring tools and documentation systems for reporting waste volumes, disposal methods and audit compliance."
      }
    ],
    benefits: [
      {
        title: "Legal Compliance",
        description: "Operate in accordance with Biomedical Waste Management Rules and environmental consents, avoiding penalties."
      },
      {
        title: "Environmental Protection",
        description: "Prevent soil, water and air contamination through controlled treatment and pollution control measures."
      },
      {
        title: "Public Health Safeguarding",
        description: "Reduce disease transmission risk by safe handling and disposal of infectious and hazardous waste."
      },
      {
        title: "Worker Safety",
        description: "Mandates PPE, training and safe workflows to protect staff who manage hazardous waste."
      },
      {
        title: "Resource Efficiency",
        description: "Enables recycling where appropriate, reduces disposal costs and supports sustainable waste workflows."
      },
      {
        title: "Reputation & Trust",
        description: "Demonstrates commitment to safety and sustainability, improving trust among clients and regulators."
      },
      {
        title: "Operational Streamlining",
        description: "Standardised segregation and treatment workflows increase efficiency across healthcare partners."
      }
    ],
    documents: {
      steps: [
        {
          title: "Project Report",
          desc: "Detailed project report covering financials, operations, waste flow and processing capacity."
        },
        {
          title: "Land Documents",
          desc: "Proof of land ownership or valid lease for the facility site."
        },
        {
          title: "Consent to Establish (CTE)",
          desc: "CTE from the State Pollution Control Board for construction and setup."
        },
        {
          title: "Consent to Operate (CTO)",
          desc: "CTO from the SPCB to legally run treatment operations."
        },
        {
          title: "Environmental Clearance",
          desc: "Clearance from MoEFCC where applicable based on project scale and impact."
        },
        {
          title: "Pollution Control Details",
          desc: "Documentation of emission controls, effluent treatment, and monitoring plans."
        },
        {
          title: "Company Registration",
          desc: "CIN/LLP/Partnership deed, PAN and GST registration of the operator."
        },
        {
          title: "Fire & Municipal Approvals",
          desc: "Fire department NOC and local municipal permissions as required."
        },
        {
          title: "Worker Safety Plans",
          desc: "PPE policy, training records, emergency and occupational health plans."
        }
      ],
      violations: [
        "Operating without CTE/CTO or environmental clearance.",
        "Improper segregation or mixing of biomedical and general waste.",
        "Substandard incineration causing harmful emissions.",
        "Failure to maintain records or submit regulatory reports.",
        "Lack of PPE and training for waste handlers."
      ],
      consequences: [
        "Fines and legal action under environmental laws.",
        "Cancellation of consent to operate and forced shutdown.",
        "Remediation orders and civil liabilities for contamination.",
        "Criminal prosecution in severe negligence cases.",
        "Reputational damage and loss of client contracts."
      ]
    },
    eligibility: [
      {
        heading: "Eligibility Criteria for Operators / Manufacturers",
        items: [
          "Registered business entity (Company, LLP or Partnership).",
          "Environmental clearances and SPCB consents (CTE/CTO) as applicable.",
          "Adequate land and infrastructure for collection, segregation, treatment and storage.",
          "Pollution control systems to meet emission standards.",
          "Demonstrated financial viability and operational plan.",
          "Willingness to undergo regular inspections and audits."
        ]
      },
      {
        heading: "Eligibility Criteria for Healthcare Facilities",
        items: [
          "Authorization under Biomedical Waste Management Rules for waste generation and handling.",
          "Trained personnel assigned for segregation and handling.",
          "Implementation of health, safety and emergency protocols.",
          "Systems for recordkeeping and participation in audits and inspections."
        ]
      }
    ],
    services: [
      {
        title: "Market Research & Feasibility",
        desc: "Analyze demand, competition and target healthcare clients in your region."
      },
      {
        title: "Business Planning",
        desc: "Prepare business model, investment estimates and operational roadmaps."
      },
      {
        title: "Licensing & Permits Support",
        desc: "End-to-end assistance for CTE, CTO, environmental clearances and biomedical authorizations."
      },
      {
        title: "Facility Design & Setup",
        desc: "Design plant layout, procure equipment (incinerators, autoclaves, microwaves) and install pollution control systems."
      },
      {
        title: "Training & SOPs",
        desc: "Train staff on segregation, PPE use, emergency response and regulatory compliance."
      },
      {
        title: "Compliance & Monitoring",
        desc: "Set up reporting systems, monitoring tools and conduct periodic audits."
      },
      {
        title: "Partnerships & Client Acquisition",
        desc: "Help build tie-ups with hospitals, clinics and diagnostic centres for waste collection contracts."
      },
      {
        title: "Post-Grant Support",
        desc: "Annual audit assistance, equipment maintenance planning and renewal guidance."
      }
    ],
    postRegistration: {
      heading: "Post-Registration Compliance Requirements",
      paragraphs: [
        "Submit reports on waste volume and disposal methods to local authorities.",
        "Ensure pollution control through regular monitoring of air, water, and soil standards.",
        "Train staff on safe handling and emergency response.",
        "Implement emergency plans to deal with spills and accidents.",
        "Maintain equipment regularly for optimal performance.",
        "Undergo annual audits to verify legal compliance and keep records ready for inspections."
      ]
    },
    faqs: [
      {
        question: "What is biomedical waste?",
        answer: "Biomedical waste includes hazardous materials generated during medical care, diagnosis, treatment and research such as contaminated dressings, sharps, used instruments, lab reagents and expired medicines."
      },
      {
        question: "Who needs a biomedical waste recycling plant?",
        answer: "Hospitals, clinics, pathology labs, blood banks, pharmaceutical and veterinary facilities frequently need treatment options; entrepreneurs can set up centralised plants to service multiple healthcare units."
      },
      {
        question: "What documents are required to start this business?",
        answer: "Project report, land/lease proof, CTE/CTO from SPCB, environmental clearance (if applicable), company registration, PAN, GST, fire NOC, municipal approvals and worker safety plans."
      },
      {
        question: "What are common treatment methods?",
        answer: "Incineration, autoclaving (steam sterilization), microwave disinfection, chemical treatment for liquids, and advanced plasma pyrolysis for high-temperature destruction."
      },
      {
        question: "What happens if biomedical waste is handled improperly?",
        answer: "Improper handling can spread infections (Hepatitis, HIV), contaminate soil and groundwater, emit toxic pollutants, foster drug-resistant organisms and lead to heavy legal penalties."
      },
      {
        question: "How long does regulatory approval take?",
        answer: "Timelines vary: SPCB consents and environmental clearances depend on state authority workload and project size; planning for several weeks to months is prudent."
      },
      {
        question: "Who can start this business in India?",
        answer: "Any registered entity (Company/LLP/Partnership) with required environmental consents, infrastructure, trained staff and financial capacity can establish a treatment plant."
      },
      {
        question: "What are penalties for non-compliance?",
        answer: "Fines, closure orders, remediation directives and potential criminal prosecution under the Environment (Protection) Act and related regulations."
      }
    ],
    types: {
      cards: [
        {
          title: "Improper Incineration",
          shortText: "Harmful emissions risk.",
          backText: "Ensure high-standard incinerators and emission control systems to prevent toxic releases."
        },
        {
          title: "Inadequate Segregation",
          shortText: "Mixing hazardous and general waste.",
          backText: "Implement training and colour-coded segregation at source to reduce cross-contamination."
        },
        {
          title: "Lack of PPE & Training",
          shortText: "Worker exposure risk.",
          backText: "Provide PPE, SOPs and regular training to all waste-handling staff."
        },
        {
          title: "Missing Consents",
          shortText: "Operate without CTE/CTO.",
          backText: "Obtain SPCB consents and environmental clearances before commencing operations."
        }
      ],
      roleBenefits: [
        "Ensures legal operation and avoids penalties",
        "Protects public health and the environment",
        "Enables service contracts with hospitals and clinics",
        "Reduces liability through documented compliance",
        "Supports sustainable and efficient waste management"
      ],
      differenceTable: {
        columns: ["Aspect", "With Authorization & Proper Treatment", "Without Authorization / Improper Handling"],
        rows: [
          ["Legal Status", "Compliant with rules and consents", "Subject to fines, closure and prosecution"],
          ["Environmental Impact", "Controlled emissions and safe disposal", "Soil, water and air contamination risks"],
          ["Public Health", "Reduced infection and pathogen spread", "Higher disease transmission and outbreaks"],
          ["Operational Continuity", "Eligibility for contracts and renewals", "Risk of shutdown and loss of clients"],
          ["Financial Risk", "Predictable costs and access to clients", "Exposure to heavy remediation costs and liabilities"]
        ]
      },
      timelineFees: [
        "Project planning & market study: 2–6 weeks.",
        "SPCB CTE/CTO processing: timelines vary by state (weeks to a few months).",
        "Environmental clearance (MoEFCC) if applicable: several months depending on scale.",
        "Equipment procurement & installation: 1–6 months depending on technology.",
        "Annual audits and monitoring: recurring yearly requirement.",
        "Professional fees and government charges vary by state and project complexity."
      ]
    }
  },


 "industrialWasteContent": {
    overview: {
      heading: "Introduction to Industrial Waste Management",
      paragraphs: [
        "Industrial waste management refers to the structured process of safely removing, treating, recycling, and disposing of unwanted waste generated from industrial processes. This includes emissions to air, discharges to water, and solid by-products.",
        "Proper waste management is essential as it prevents environmental pollution and safeguards public health. Implementing an online industrial waste management system not only reduces the ecological footprint of a business but also lowers operational costs.",
        "All manufacturing units that produce waste require Consent to Establish (CTE) and Consent to Operate (CTO) from the Central Pollution Control Board (CPCB). Authorization is also needed from State Pollution Control Boards (SPCBs).",
        "Connect with environmental experts at DoStartUp to explore tailored online industrial waste management solutions for your business."
      ]
    },
    features: [
      { title: "Regulatory Compliance", description: "Obtain CTE and CTO approvals from CPCB and SPCB." },
      { title: "Expert Consultation", description: "Get tailored industrial waste management strategies." },
      { title: "Cost Savings", description: "Efficient waste handling reduces operational costs." },
      { title: "Recycling Support", description: "Transform waste into reusable resources effectively." }
    ],
    benefits: [
      { title: "Waste Minimization", description: "Advanced techniques reduce volume and raw material use." },
      { title: "Recycling", description: "Common materials like glass, paper, and plastic can be recycled efficiently." },
      { title: "Employment Generation", description: "Recycling creates more jobs than landfilling or incineration." },
      { title: "Legal Compliance", description: "Ensures adherence to local, state, and national laws." },
      { title: "Cost Savings", description: "Efficient processes reduce material and operational expenses." },
      { title: "Enhanced Reputation", description: "Strong environmental strategy builds goodwill." }
    ],
    documents: {
      steps: [
        { title: "Consent to Establish (CTE)", desc: "Application, site plan, machinery list, project details, water use, GST, flow charts, and consent fees." },
        { title: "Consent to Operate (CTO)", desc: "CA-certified balance sheet, CTE copy, lab reports, pollution control details, environmental clearance." },
        { title: "Mandatory Compliance", desc: "Waste classification, tank cleaning schedules, disposal laws, hazardous thresholds, spill plans, emergency response." }
      ],
      violations: [
        "Failure to obtain CTE/CTO authorizations",
        "Improper segregation and disposal",
        "Not maintaining pollution control equipment",
        "Absence of spill or emergency response plans"
      ],
      consequences: [
        "Regulatory fines and penalties",
        "Legal action and business shutdown",
        "Environmental pollution liabilities",
        "Reputational damage and public backlash"
      ]
    },
    eligibility: [
      { heading: "Industries That Require Waste Management", items: [
        "Manufacturing", "Pharmaceuticals", "Chemicals", "Mining", "Heavy Machinery", 
        "Food Processing", "Electronics", "Paper and Pulp", "Agriculture and Livestock"
      ]},
      { heading: "Licenses and Approvals Needed", items: [
        "Hazardous Waste Authorization from TSDFs",
        "NOC Renewal from SPCBs",
        "CGWA Clearance for groundwater use",
        "Trademark & Environmental Compliance"
      ]}
    ],
    services: [
      { title: "Expert Consultation", desc: "Customized waste management strategies for industries." },
      { title: "Waste-to-Energy Conversion", desc: "Convert 15–20% of waste into energy." },
      { title: "Annual Waste Audits", desc: "Over 1500 audits performed for compliance." },
      { title: "ETP Setup", desc: "Efficient Effluent Treatment Plant setup." },
      { title: "Legal Assistance", desc: "End-to-end licensing and compliance support." },
      { title: "24/7 Support", desc: "Continuous assistance across all stages." }
    ],
    postRegistration: {
      heading: "Best Practices in Industrial Waste Management",
      paragraphs: [
        "Adopt the 3Rs: Reduce, Reuse, Recycle.",
        "Conduct employee training on waste handling.",
        "Use licensed transporters for safe waste movement.",
        "Implement waste tracking and reporting systems.",
        "Plan for minimization at the source."
      ]
    },
    faqs: [
      { question: "What is industrial waste?", answer: "Residual materials generated during manufacturing, mining, power generation, and other industrial activities." },
      { question: "What is waste in industrial management?", answer: "Any by-product or material generated that has no immediate use and requires treatment, recycling, or disposal." },
      { question: "What are the main types of industrial waste?", answer: "Hazardous, non-hazardous, chemical, radioactive, biodegradable, non-biodegradable, and organic." },
      { question: "Why is industrial waste a problem?", answer: "It pollutes air, water, and soil, poses health risks, and contributes to climate change." },
      { question: "What industries require industrial waste management?", answer: "Manufacturing, pharmaceuticals, chemicals, mining, electronics, food processing." },
      { question: "Why is it essential to manage industrial waste?", answer: "To ensure compliance, conserve resources, reduce pollution, and protect health." },
      { question: "What is zero waste?", answer: "A philosophy encouraging the reuse of all products so nothing goes to landfills or incinerators." },
      { question: "How to manage industrial waste in India?", answer: "Segregate waste, obtain authorizations, use approved treatment methods, and partner with TSDFs." },
      { question: "What causes industrial waste?", answer: "Excessive production, poor raw material use, outdated technology, lack of environmental awareness." },
      { question: "What are the principles of industrial waste treatment?", answer: "Minimization, segregation, recycling, treatment, and safe disposal." }
    ],
    types: {
      cards: [
        { title: "Hazardous Waste", shortText: "Toxic, reactive, corrosive", backText: "Requires special handling, SPCB authorization, and strict disposal rules." },
        { title: "Non-hazardous Waste", shortText: "General industrial residues", backText: "Can often be recycled or disposed of using conventional methods." },
        { title: "Chemical Waste", shortText: "By-products of production", backText: "Includes solvents, acids, alkalis—needs neutralization or specialized disposal." },
        { title: "Radioactive Waste", shortText: "From nuclear/medical industries", backText: "Highly regulated and requires shielding and containment." },
        { title: "Biodegradable Waste", shortText: "Organic by-products", backText: "Can be composted or anaerobically digested." }
      ],
      roleBenefits: [
        "Prevents pollution and health hazards",
        "Ensures legal and regulatory compliance",
        "Optimizes resource recovery",
        "Improves corporate reputation"
      ],
      differenceTable: {
        columns: ["Aspect", "Hazardous Waste", "Non-Hazardous Waste"],
        rows: [
          ["Definition", "Dangerous/toxic waste materials", "General non-toxic industrial by-products"],
          ["Handling", "Special precautions, authorization required", "Standard handling and recycling possible"],
          ["Examples", "Chemical residues, radioactive material", "Packaging waste, scrap metal, organic matter"]
        ]
      },
      timelineFees: [
        "CTE: Processing time ~60 days, fees vary by industry scale",
        "CTO: Processing time ~45 days, fees depend on pollution load and size"
      ]
    }
  },



  
  
  
  

  
};
