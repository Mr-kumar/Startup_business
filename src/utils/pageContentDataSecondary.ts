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
        "From selecting the right entity to securing your EIN and U.S. business address, our tech‑enabled process and state‑specific legal expertise ensure smooth, fully compliant registration—no matter where you’re located."
      ]
    },
  
    features: [
      {
        icon: "🚀",
        title: "End‑to‑End Service",
        description: "We handle everything: entity selection, name reservation, EIN, registered agent, and bank account setup."
      },
      {
        icon: "💻",
        title: "100% Online & Paperless",
        description: "Complete the entire process remotely without ever visiting the U.S."
      },
      {
        icon: "🗺️",
        title: "State‑Specific Expertise",
        description: "Personalized advice on choosing the best state and entity type based on your goals."
      }
    ],
  
    benefits: [
      {
        title: "Start‑to‑Finish Support",
        description: "From initial consultation to post‑incorporation compliance, we’re with you every step of the way."
      },
      {
        title: "Quick Turnaround",
        description: "Get your company registered in as little as 2–5 business days."
      },
      {
        title: "Affordable & Transparent",
        description: "Transparent pricing with no hidden fees or recurring charges."
      },
      {
        title: "Registered Agent & Address",
        description: "One year of registered agent service plus a free virtual U.S. address included."
      },
      {
        title: "EIN & Bank Account Assistance",
        description: "We help you obtain your EIN and open a U.S. business bank account remotely."
      },
      {
        title: "Global Clientele",
        description: "Trusted by entrepreneurs from over 30 countries to launch their U.S. ventures."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Free Expert Consultation",
          desc: "Discuss your goals and choose the optimal entity and state."
        },
        {
          title: "Name Reservation & Filing",
          desc: "We check availability and file your formation documents with the Secretary of State."
        },
        {
          title: "EIN Application",
          desc: "We apply for your Employer Identification Number with the IRS."
        },
        {
          title: "Registered Agent & Address Setup",
          desc: "Get one year of registered agent service and a virtual U.S. address with mail forwarding."
        },
        {
          title: "Bank Account Support",
          desc: "Open a U.S. business bank account remotely through our partner network."
        },
        {
          title: "Post‑Incorporation Compliance",
          desc: "We provide ongoing support for annual filings, licenses, and tax registrations."
        }
      ],
      violations: [
        "Valid passport or government‑issued ID",
        "Unique and available company name",
        "U.S. business address (we provide)",
        "Registered agent information (included)",
        "Operating agreement or corporate bylaws",
        "EIN application authorization"
      ],
      consequences: [
        "Delays or rejections due to missing or incorrect documents"
      ]
    },
  
    eligibility: [
      {
        heading: "Eligibility Criteria",
        items: [
          "A unique, valid company name",
          "At least one member (LLC) or director/shareholder (Corp)",
          "Valid passport or national ID",
          "A U.S. address and registered agent (we provide)",
          "ITIN for non‑U.S. residents (we assist with this)"
        ]
      },
      {
        heading: "Who Can Use DoStartup?",
        items: [
          "Individual entrepreneurs and freelancers",
          "Global startups and small businesses",
          "Non‑residents and residents alike",
          "International businesses expanding to the U.S."
        ]
      }
    ],
  
    services: [
      {
        title: "LLC (Limited Liability Company)",
        desc: "Ideal for small to medium businesses seeking flexibility and tax efficiency."
      },
      {
        title: "C‑Corporation",
        desc: "Preferred by startups planning to raise venture capital or go public."
      },
      {
        title: "S‑Corporation",
        desc: "Best for U.S. residents wanting pass‑through taxation."
      },
      {
        title: "LLP/LP",
        desc: "Suited for professional service firms and investment ventures."
      },
      {
        title: "Sole Proprietorship",
        desc: "For freelancers or solopreneurs entering the U.S. market simply."
      }
    ],
  
    faqs: [
      {
        question: "Can a non‑resident register a U.S. company?",
        answer: "Yes—there is no residency requirement. DoStartup enables fully remote formation for foreign nationals."
      },
      {
        question: "LLC or C‑Corp— which is better?",
        answer: "LLCs offer flexibility and simpler taxes; C‑Corps are preferred for venture funding. We guide you based on your goals."
      },
      {
        question: "Which state should I choose?",
        answer: "Delaware for C‑Corps, Wyoming for LLCs, Nevada for privacy. We advise on the best fit for your needs."
      },
      {
        question: "Do I need a U.S. address or phone?",
        answer: "No—you must have a registered agent in the state, which we provide, and we supply a virtual U.S. address."
      },
      {
        question: "What is an EIN?",
        answer: "An Employer Identification Number issued by the IRS, required for banking, hiring, and tax filings."
      },
      {
        question: "How long does registration take?",
        answer: "Typically 2–5 business days for incorporation; EIN may take a few additional days."
      },
      {
        question: "What are annual compliance requirements?",
        answer: "Most states require annual reports and franchise tax filings; we offer ongoing compliance packages."
      },
      {
        question: "Will I pay U.S. taxes?",
        answer: "Yes—tax obligations depend on your entity type and income. We connect you with U.S. tax professionals."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "DoStartup Service", "DIY Formation"],
        rows: [
          ["Process", "Fully managed and paperless", "Self‑file through various state portals"],
          ["Speed", "2–5 business days", "Varies by state; often longer"],
          ["Support", "Dedicated experts & ongoing compliance", "No professional support included"],
          ["Pricing", "Transparent all‑in‑one packages", "Variable state and filing fees"]
        ]
      },
      timelineFees: []
    }
  },


  "france-company-registration": {
    overview: {
      heading: "Company Registration in France – A Comprehensive Guide",
      paragraphs: [
        "Establishing a company in France provides access to Europe’s third‑largest economy, with strong markets in finance, insurance, real estate, e‑commerce, and professional services.",
        "France offers 100% foreign ownership, tax benefits via double‑taxation treaties with 120+ countries, and a strategic EU location for trade expansion.",
        "Corpbiz™ simplifies setting up an LLC in France—drafting MOA/AOA, securing SIRENE/SIRET numbers, handling corporate tax & VAT registrations, obtaining industry licenses, and providing ongoing accounting support."
      ]
    },
  
    features: [
      {
        icon: "💰",
        title: "Tax Benefits",
        description: "Access to DTAs with 120+ countries, 15% corporate tax for turnovers under €10 M, and VAT reverse‑charge for non‑residents."
      },
      {
        icon: "🌍",
        title: "EU Market Access",
        description: "Gateway to trade in Germany, Belgium, Spain, Italy, Switzerland and beyond."
      },
      {
        icon: "🏗️",
        title: "Robust Infrastructure",
        description: "Advanced logistics, telecom, and tech sectors ideal for e‑commerce, freight, and IT businesses."
      },
      {
        icon: "👥",
        title: "Tourism & Skilled Workforce",
        description: "Over 85 M annual tourists and a pool of highly skilled professionals in finance, IT, and legal."
      }
    ],
  
    benefits: [],
  
    documents: {
      steps: [
        {
          title: "Choose Business Structure",
          desc: "Select from LLC (SARL), SAS, SA, EURL, SNC, etc."
        },
        {
          title: "Name Reservation",
          desc: "Reserve your unique company name with the Trade Register (RCS)."
        },
        {
          title: "Submit Incorporation Documents",
          desc: "File MOA/AOA, passports, proof of address and pay registration fees at the RCS."
        },
        {
          title: "Obtain Certificates",
          desc: "Receive the Incorporation Certificate and SIREN/SIRET numbers."
        },
        {
          title: "Publish Notice",
          desc: "Publish incorporation notice in the Official Journal (BODACC)."
        },
        {
          title: "Tax & Social Registrations",
          desc: "Register for corporate tax, VAT, URSSAF, CPAM and open a French bank account."
        }
      ],
      violations: [
        "Passport copies of directors/shareholders",
        "MOA & AOA (Company Charter)",
        "Proof of French business address",
        "Visa or Residence Permit (if applicable)",
        "Business Name Reservation Certificate",
        "Industry‑specific licenses & permits"
      ],
      consequences: [
        "Obtain KBIS Extract (proof of registration)",
        "File annual financial returns",
        "Renew trade licenses & permits yearly",
        "Submit UBO declarations",
        "Maintain VAT compliance (turnover > €85,000)",
        "Hold annual shareholder meetings"
      ]
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
          "Short‑stay Schengen or long‑stay VLS‑TS visa"
        ]
      },
      {
        heading: "Director Requirements",
        items: [
          "Must be 18+ years old",
          "Valid passport & digital signature"
        ]
      }
    ],
  
    services: [
      {
        title: "SARL (LLC)",
        desc: "100% foreign ownership, no minimum capital, 1+ director, limited liability, 15–25% tax rate."
      },
      {
        title: "SAS (Simplified JSC)",
        desc: "100% foreign ownership, no minimum capital, 1+ director, limited liability, moderate tax rate."
      },
      {
        title: "SA (Public JSC)",
        desc: "100% foreign ownership, ≥ €37,000 capital, 3+ directors, limited liability, higher tax rate."
      },
      {
        title: "EURL (Single‑Member LLC)",
        desc: "100% foreign ownership, ≥ €1 capital, 1 director, limited liability, moderate tax rate."
      },
      {
        title: "SNC (General Partnership)",
        desc: "100% foreign ownership, no minimum capital, 2+ partners, unlimited liability, lower tax rate."
      }
    ],
  
    faqs: [
      {
        question: "Can I register a company in France from India?",
        answer: "Yes—Corpbiz™ provides 100% online registration services for foreign entrepreneurs."
      },
      {
        question: "What’s the cheapest structure?",
        answer: "EURL requires just €1 in capital and offers single‑member liability protection."
      },
      {
        question: "How long does incorporation take?",
        answer: "Typically 2–4 weeks with Corpbiz™’s expedited services."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: []
      },
      timelineFees: []
    }
  },  

  "singapore-company-registration": {
    overview: {
      heading: "Company Registration in Singapore – A Complete Guide for Foreign Entrepreneurs",
      paragraphs: [
        "Setting up a company in Singapore is a smart move for foreign individuals and businesses looking to establish a presence in one of Asia’s most advanced economies. Known for its strong fintech sector, import‑export trade, and electronics manufacturing industry, Singapore offers a transparent regulatory framework and a pro‑business environment.",
        "Whether you’re registering a private limited company or an LLC, Singapore provides the ideal foundation for global growth. At [Your Client’s Brand Name], we simplify the process—drafting MoA & AoA, assisting with EntrePass visas, corporate & GST registration, trade licenses, and virtual CFO support."
      ]
    },
  
    features: [
      {
        icon: "💸",
        title: "Attractive Tax Rates",
        description: "Corporate tax from 5%–15% for first five years, plus R&D and IP deductions up to 400%."
      },
      {
        icon: "🌐",
        title: "DTAs & GST",
        description: "Double‑taxation treaties with 90+ countries and a low 9% GST (0% on exports)."
      },
      {
        icon: "🏢",
        title: "100% Foreign Ownership",
        description: "Full foreign ownership allowed with minimal paid‑up capital requirement (SGD 1)."
      },
      {
        icon: "🚀",
        title: "Fast EntrePass Visa",
        description: "EntrePass approval in under 8 weeks, renewable for 2 years—ideal for startup founders."
      },
      {
        icon: "👩‍💼",
        title: "Skilled Workforce & Infrastructure",
        description: "Access to top‑ranked talent and advanced digital banking, fintech, and logistic ecosystems."
      }
    ],
  
    benefits: [],
  
    documents: {
      steps: [
        {
          title: "Choose Business Structure",
          desc: "Select Private Limited (Pte Ltd), LLP, LP or other entities based on your needs."
        },
        {
          title: "Reserve & Register Name",
          desc: "Search and reserve your company name via ACRA’s BizFile+ portal (valid for 120 days)."
        },
        {
          title: "Submit Incorporation Filing",
          desc: "Provide MoA, AoA, director/shareholder IDs, address proof, and pay registration fees to ACRA."
        },
        {
          title: "Obtain UEN & Certificate",
          desc: "Receive your Unique Entity Number and Certificate of Incorporation from ACRA."
        },
        {
          title: "Apply Licenses & Passes",
          desc: "Use GoBusiness to apply for trade licenses, EntrePass/Employment Pass, and industry permits."
        },
        {
          title: "Open Bank Account & Register Taxes",
          desc: "Open corporate bank account, register for Corporate Tax, GST, CPF and employee health insurance."
        }
      ],
      violations: [
        "Company Registration Application Form",
        "Passport copies of all directors & shareholders",
        "MoA & AoA",
        "Registered Singapore business address proof",
        "Singpass digital identity for local agent",
        "Visa or pass documents (EntrePass/Employment Pass)",
        "Power of Attorney for foreign applicants",
        "Certified translations for non‑English documents"
      ],
      consequences: [
        "Appoint company secretary within 6 months",
        "Hold AGM within 6 months of FY‑end",
        "File annual returns & financial statements",
        "Submit corporate tax returns to IRAS",
        "Maintain records with ACRA at registered address",
        "Make CPF contributions for local employees",
        "Renew licenses, passes and notify ACRA of changes"
      ]
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
          "GST registration if turnover exceeds SGD 1 M"
        ]
      },
      {
        heading: "Director Requirements",
        items: [
          "At least 18 years old",
          "Valid Singapore pass or residency status",
          "Minimum one Singapore‑resident director"
        ]
      }
    ],
  
    services: [
      {
        title: "Private Limited Company (Pte Ltd)",
        desc: "Most popular; 100% foreign‑owned, separate legal entity, limited liability."
      },
      {
        title: "Limited Liability Partnership (LLP)",
        desc: "Flexibility of partnership with limited liability for partners."
      },
      {
        title: "Limited Partnership (LP)",
        desc: "Combines general partner management with passive limited partner investment."
      },
      {
        title: "Sole Proprietorship",
        desc: "Simplest form; owner bears unlimited liability."
      },
      {
        title: "Exempt Private Company (EPC)",
        desc: "Private company with ≤20 shareholders, audit exemptions under conditions."
      },
      {
        title: "Foreign Subsidiary",
        desc: "Separate legal entity owned by a foreign parent; enjoys local tax benefits."
      },
      {
        title: "Branch Office",
        desc: "Extension of foreign company; parent company fully liable."
      }
    ],
  
    faqs: [
      {
        question: "Why register in Singapore?",
        answer: "Pro‑business environment, low taxes, DTAs, advanced fintech, and 100% foreign ownership."
      },
      {
        question: "How quickly can I incorporate?",
        answer: "Usually within 1–3 business days after submitting complete documents to ACRA."
      },
      {
        question: "What is the minimum capital?",
        answer: "Only SGD 1 paid‑up capital required for most entities."
      },
      {
        question: "Do I need a local director?",
        answer: "Yes—at least one director must be a Singapore citizen, PR, or valid pass holder."
      },
      {
        question: "What visas are required?",
        answer: "EntrePass for innovative startups; Employment Pass for professionals, both handled for you."
      },
      {
        question: "When must I register for GST?",
        answer: "If annual turnover exceeds SGD 1 million, or voluntarily at any time."
      },
      {
        question: "Do I need a company secretary?",
        answer: "Yes—must appoint a qualified secretary within six months of incorporation."
      },
      {
        question: "What are ongoing compliance needs?",
        answer: "Annual returns, AGM, audits (if not exempt), tax filings, CPF contributions, and pass renewals."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: []
      },
      timelineFees: []
    }
  },

  "hong-kong-company-registration": {
    overview: {
      heading: "Company Registration in Hong Kong – A Gateway to Global Business",
      paragraphs: [
        "Hong Kong stands as a premier business hub with a free port, minimal customs regulations, and 0% VAT on imports and exports, creating a highly attractive trade environment.",
        "With just US$1 minimum capital you can register a Private Limited Company and benefit from a competitive corporate tax rate of 8.25% on annual profits below US$258,056.",
        "Backed by FTAs with 21 countries and IPAs with 24 nations, Hong Kong ensures smooth cross‑border trade and robust investment protection for global entrepreneurs."
      ]
    },
  
    features: [
      {
        icon: "🚢",
        title: "Free Port & Minimal Customs",
        description: "0% VAT on imports/exports and streamlined trade procedures for maximum efficiency."
      },
      {
        icon: "💵",
        title: "Low Minimum Capital",
        description: "Incorporate with only US$1 and enjoy 8.25% tax on the first US$258,056 of profits."
      },
      {
        icon: "🤝",
        title: "Strong Trade Agreements",
        description: "FTAs with 21 countries and IPAs with 24 nations for duty‑free trade and investment protection."
      },
      {
        icon: "🌐",
        title: "Gateway to Mainland China",
        description: "CEPA grants preferential access and duty‑free trade with China’s vast market."
      }
    ],
  
    benefits: [
      {
        title: "Attractive Tax Benefits",
        description: "No VAT, no capital gains tax, and no withholding tax on foreign-sourced dividends, interest, or royalties."
      },
      {
        title: "Low Corporate Income Tax",
        description: "Tiered rate of 8.25% on the first US$258,056 of profits—much lower than many major economies."
      },
      {
        title: "Double Taxation Agreements",
        description: "DTAs with over 50 countries allow credits and exemptions to avoid double taxation."
      },
      {
        title: "Global Financial Hub",
        description: "Home to HKEX, no foreign exchange controls, with free trading in bonds, stocks, ETFs, and REITs."
      },
      {
        title: "SME Support Schemes",
        description: "Government programs like SFGS, EMF, ITF, TID, and SUCCESS offer funding and advisory services."
      },
      {
        title: "Strategic Location",
        description: "Asia’s leading free port with world‑class legal, financial, and logistics infrastructure."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Choose Business Structure",
          desc: "Select from Private Ltd, PLC, subsidiary, branch office, sole proprietorship, GP or LP."
        },
        {
          title: "Name Search & Reservation",
          desc: "Reserve a unique company name via the Companies Registry portal."
        },
        {
          title: "Submit Incorporation Application",
          desc: "File NNC1/NNC1G form and supporting docs through e‑Registry or in person."
        },
        {
          title: "Registry Review",
          desc: "Companies Registry reviews for accuracy and legal compliance."
        },
        {
          title: "Receive Certificate & UBI",
          desc: "Obtain your Certificate of Incorporation and Unique Business Identifier."
        },
        {
          title: "Register UBI with IRD",
          desc: "Record your UBI with the Inland Revenue Department for tax purposes."
        },
        {
          title: "Open Corporate Bank Account",
          desc: "Set up a Hong Kong business bank account for operational transactions."
        },
        {
          title: "Apply Business Licenses",
          desc: "Obtain any required trade or industry‑specific licenses before starting."
        },
        {
          title: "Apply Investment/Employment Visa",
          desc: "Foreigners secure the relevant visa to reside and operate in Hong Kong."
        }
      ],
      violations: [
        "Completed NNC1/NNC1G incorporation form",
        "MOA & AOA (Memorandum & Articles of Association)",
        "ID proof and residential address proof for directors, shareholders, secretary",
        "Proof of registered office address",
        "Consent to Act forms signed by all officers",
        "Business plan or description for bank and licensing",
        "Board resolution for corporate shareholders",
        "Shareholder agreement (if applicable)"
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
        "Notify registry of changes within 15 days"
      ]
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
          "Ensure compliance with the Companies Ordinance (Cap. 622)"
        ]
      },
      {
        heading: "Director Requirements",
        items: [
          "At least one director appointed (no residency requirement)",
          "Director must be ≥18 years old",
          "Local company secretary must be a Hong Kong resident"
        ]
      }
    ],
  
    services: [
      {
        title: "Private Limited Company",
        desc: "Separate legal entity with limited liability for up to 50 shareholders."
      },
      {
        title: "Public Limited Company",
        desc: "Raise capital from public investors with no shareholder limit."
      },
      {
        title: "Subsidiary Company",
        desc: "Foreign parent owns a separate legal entity enjoying local tax benefits."
      },
      {
        title: "Branch Office",
        desc: "Extension of a foreign company where liability rests with the parent."
      },
      {
        title: "Sole Proprietorship",
        desc: "Single‑owner business with full personal liability."
      },
      {
        title: "General Partnership",
        desc: "Two or more partners sharing management and unlimited liability."
      },
      {
        title: "Limited Partnership",
        desc: "General partner manages with full liability; limited partners invest with capped liability."
      }
    ],
  
    faqs: [
      {
        question: "Why register in Hong Kong?",
        answer: "Pro‑business tax regime, no VAT or capital gains tax, DTAs, and strategic Asia‑Pacific location."
      },
      {
        question: "How long does incorporation take?",
        answer: "Online applications can be approved within one hour; paper filings up to four business days."
      },
      {
        question: "What is a UBI?",
        answer: "Unique Business Identifier issued at incorporation, replacing the old Business Registration Number."
      },
      {
        question: "Is HKD 1 paid‑up capital sufficient?",
        answer: "Yes—the legal minimum is HKD 1 for most company types."
      },
      {
        question: "Do I need a local director?",
        answer: "No—directors can be foreign nationals, but you must appoint a Hong Kong resident company secretary."
      },
      {
        question: "Are offshore profits taxed?",
        answer: "No—Hong Kong taxes only profits sourced within its territory, exempting properly documented offshore income."
      },
      {
        question: "What post‑incorporation filings are required?",
        answer: "Annual returns, profits tax returns, MPF contributions, AGMs, and statutory register upkeep."
      },
      {
        question: "Can I operate without a Hong Kong ID?",
        answer: "Yes—foreigners can fully own and direct a company; only the secretary must be resident."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: []
      },
      timelineFees: []
    }
  }
  
  ,
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
        question: "Can Corpbiz handle all NBFC compliance requirements?",
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
      notes: [
        "Utility bill not older than 2 months",
        "No Objection Certificate (NOC) from property owner",
        "Lease or rent agreement",
        "Certified copy of special resolution (where applicable)",
        "Newspaper advertisements for jurisdictional shifts",
      ],
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
          backText: "Always attach a utility bill not older than 2 months, or INC‑22 will be rejected."
        },
        {
          title: "No NOC from Owner",
          shortText: "Obtain proper NOC",
          backText: "Failure to include a valid No Objection Certificate invalidates the filing."
        },
        {
          title: "Late Filing",
          shortText: "Within 15 days mandatory",
          backText: "Filing INC‑22 after 15 days incurs heavy penalties—file on time."
        },
        {
          title: "Incorrect Form Usage",
          shortText: "Use correct INC form",
          backText: "Form INC‑23 is required for ROC‑to‑ROC or state changes; INC‑22 alone isn’t enough."
        }
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
        "MCA compliance encourages systematic record‑keeping, streamlined workflows, and timely updates of business activities. This not only helps meet legal standards but also enhances overall business efficiency and reduces operational costs."
      ]
    },
  
    features: [
      {
        icon: "📋",
        title: "Dynamic Regulatory Updates",
        description: "Stay ahead with real‑time tracking of amendments to the Companies Act, 2013, and related rules."
      },
      {
        icon: "🏛️",
        title: "Statutory Filings",
        description: "Ensure timely submission of key forms—DIR‑3 KYC, DPT‑3, BEN‑1, ADT‑1, AOC‑4, MGT‑7 and more."
      },
      {
        icon: "⚖️",
        title: "LLP & Company Coverage",
        description: "Comprehensive compliance support for LLPs, Private, Public, Section 8 and One Person Companies."
      }
    ],
  
    benefits: [
      {
        title: "Adapt to Regulatory Changes",
        description: "Rapidly integrate amendments and notifications into your compliance calendar."
      },
      {
        title: "Protect Reputation",
        description: "Avoid penalties, prosecutions, and adverse publicity through perfect statutory adherence."
      },
      {
        title: "Boost Efficiency",
        description: "Automated reminders and standardized processes reduce administrative burden and costs."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Compile KYC Filings",
          desc: "File DIR‑3 KYC / Web KYC for all directors within six months of financial year‑end."
        },
        {
          title: "Deposit Returns",
          desc: "Submit Form DPT‑3 by June 30 for outstanding deposits and exempted receipts."
        },
        {
          title: "Beneficial Ownership",
          desc: "File Form BEN‑1 to declare significant beneficial owners under Section 90."
        },
        {
          title: "Auditor Intimation",
          desc: "Use Form ADT‑1 within 15 days of AGM to notify ROC of auditor appointments."
        },
        {
          title: "Financial Statements",
          desc: "File AOC‑4 (or AOC‑4 CFS) within 30 days of AGM for standalone or consolidated accounts."
        },
        {
          title: "Annual Return",
          desc: "Submit MGT‑7 (or MGT‑7A) within 60 days of AGM to report shareholding and management details."
        }
      ],
      violations: [
        "Late or non‑filing of DIR‑3 KYC",
        "Failure to submit DPT‑3 and BEN‑1 on time",
        "Audited statements not filed within AGM timelines",
        "Annual return (MGT‑7) delayed or incomplete"
      ],
      consequences: [
        "Penalties up to ₹100 per day per form",
        "Additional fines for repeated non‑compliance",
        "Disqualification of directors for defaults",
        "Potential prosecution and license cancellation"
      ]
    },
  
    eligibility: [
      {
        heading: "Who Must File MCA Forms?",
        items: [
          "All companies registered under the Companies Act, 2013",
          "Limited Liability Partnerships governed by the LLP Act, 2008",
          "Section 8 (non‑profit) companies",
          "One Person Companies (OPCs)"
        ]
      }
    ],
  
    services: [
      {
        title: "Form Preparation & Filing",
        desc: "Accurate drafting and e‑submission of all MCA e‑Forms with digital signatures."
      },
      {
        title: "Compliance Calendar",
        desc: "Interactive schedule of all due dates, automated reminders, and real‑time tracking."
      },
      {
        title: "Audit Readiness",
        desc: "Organize statutory registers and board minutes to streamline your annual audit."
      },
      {
        title: "LLP & OPC Support",
        desc: "Specialized services for LLP returns (Form 11, Form 8) and OPC‑specific filings."
      },
      {
        title: "Expert Advisory",
        desc: "Ongoing legal guidance on corporate law changes, ROC queries, and investigation responses."
      }
    ],
  
    faqs: [
      {
        question: "What is DIR‑3 KYC and when is it filed?",
        answer: "DIR‑3 KYC is the annual KYC form for all DIN‑holding directors, due within six months of the financial year‑end."
      },
      {
        question: "Which form reports deposits accepted by a company?",
        answer: "Form DPT‑3 must be filed by June 30 each year for deposits and exempted sums."
      },
      {
        question: "What are the key LLP compliance forms?",
        answer: "LLPs file DIR‑3 KYC, Form 11 (annual return) and Form 8 (statement of solvency) with respective due dates and late‑filing penalties."
      },
      {
        question: "Which forms must Private Limited Companies file annually?",
        answer: "They must file DPT‑3, INC‑20A, INC‑22, MSME Form I, ADT‑1, DIR‑3 KYC, DIR‑9, DIR‑12, MGT‑7, and AOC‑4 as applicable."
      },
      {
        question: "How do public limited companies differ in MCA compliance?",
        answer: "In addition to Private Company forms, PLCs must conduct at least two board meetings per year and file MGT‑8 certification of annual return by a company secretary."
      },
      {
        question: "Are Section 8 and OPCs subject to the same filings?",
        answer: "Yes—both must file AOC‑4 and MGT‑7 within AGM timelines, plus OPCs file OPC‑specific forms like MBP‑1 and DPT‑3."
      },
      {
        question: "What penalties apply for late AGM‑linked filings?",
        answer: "Late AOC‑4 attracts ₹100 per day; late MGT‑7 similarly ₹100 per day; auditor intimation via ADT‑1 late filing penalty is ₹25,000 or as prescribed."
      },
      {
        question: "How can [Your Company Name] help with MCA compliance?",
        answer: "We offer end‑to‑end e‑Form filing, real‑time compliance tracking, audit support, and legal advisory to keep you fully compliant."
      }
    ],
  
    types: {
      cards: [
        {
          title: "Corporate Compliance",
          shortText: "Form filings & statutory registers",
          backText: "All ROC e‑Forms, board minutes, and registers maintained per the Companies Act."
        },
        {
          title: "LLP Compliance",
          shortText: "Annual returns & solvency statements",
          backText: "LLP Form 11, Form 8 filings under LLP Act, 2008 with partner KYC and solvency checks."
        },
        {
          title: "OPC Compliance",
          shortText: "Single-member company obligations",
          backText: "OPC-specific filings like MBP‑1, DIR‑8, DPT‑3, plus standard annual returns."
        },
        {
          title: "Section 8 Compliance",
          shortText: "Non-profit entity filings",
          backText: "AOC‑4 and MGT‑7 for Section 8 companies, plus additional charitable disclosures."
        }
      ],
      roleBenefits: [
        "Unified compliance framework for all entity types",
        "Automated reminders for every ROC e‑Form deadline",
        "Reduced risk of penalties and legal notices",
        "Dedicated support for complex investigations and ROC queries"
      ],
      differenceTable: {
        columns: ["Entity Type", "Key Forms", "Due Dates"],
        rows: [
          ["Private Limited", "DPT‑3, MGT‑7, AOC‑4, ADT‑1, DIR‑3", "Jun 30, 60 days post‑AGM, 30 days post‑AGM, 15 days post‑AGM, 6 months FY‑end"],
          ["LLP", "Form 11, Form 8, DIR‑3", "May 30, Oct 30, 6 months FY‑end"],
          ["OPC", "MBP‑1, DIR‑8, DPT‑3, MGT‑7, AOC‑4", "First BM FY, first BM FY, Jun 30, 60 days post‑AGM, 30 days post‑AGM"],
          ["Section 8", "MGT‑7, AOC‑4", "60 days post‑AGM, 30 days post‑AGM"],
          ["Public Ltd.", "INC‑20A, MGT‑7, AOC‑4, DIR‑3, ADT‑1", "180 days Inc., 60/30 days AGM, 6 months FY‑end, 15 days post‑appointment, 15 days post‑AGM"]
        ]
      },
      timelineFees: [
        "Initial board & member KYC within 6 months of FY‑end",
        "Deposit returns by June 30 each year",
        "Annual returns & financials 30‑60 days post‑AGM",
        "LLP returns by May 30/Oct 30",
        "OPC-specific and Section 8 filings per entity timelines"
      ]
    }
  },


  "mgt-7-compliance": {
    overview: {
      heading: "Form MGT-7 Filing – Annual Return Compliance for Companies",
      paragraphs: [
        "Filing Form MGT-7 is a statutory compliance requirement for every registered company in India. As per Section 92(1) of the Companies Act, 2013 and Rule 11(1) of the Companies (Management and Administration) Rules, 2014, companies must file their annual return using Form MGT-7. This form captures key details of the company’s structure, shareholding, management, and financial position as on the close of the financial year.",
        "Submitting the MGT-7 form enables the Registrar of Companies (ROC) to maintain updated records based on the company’s declaration of accuracy. It ensures legal transparency and helps the company stay compliant with corporate governance norms.",
        "Need help with Form MGT-7 filing? Connect with our compliance experts today for end-to-end support and hassle-free filing."
      ]
    },
  
    features: [
      {
        icon: "⚖️",
        title: "Legal Requirement",
        description: "MGT-7 is a statutory form that must be filed annually by all eligible companies under Section 92(1)."
      },
      {
        icon: "📊",
        title: "Comprehensive Disclosure",
        description: "Captures detailed shareholding patterns, directorship changes, financial positions, and statutory disclosures."
      },
      {
        icon: "🔏",
        title: "Digital Signature",
        description: "Must be signed electronically by a director (and company secretary, if applicable) before submission."
      },
      {
        icon: "✅",
        title: "Certification (MGT-8)",
        description: "Requires certification of accuracy by a Practicing Company Secretary for certain companies under Section 92(2)."
      },
      {
        icon: "📄",
        title: "Extract for Board’s Report (MGT-9)",
        description: "An extract of the return to be included in the Board’s Report under Section 92(3)."
      }
    ],
    
  
    benefits: [
      {
        title: "Promotes Transparency",
        description: "Ensures stakeholders have clear visibility into the company’s governance and compliance status."
      },
      {
        title: "Ensures Legal Compliance",
        description: "Helps avoid penalties and legal issues by meeting statutory deadlines and requirements."
      },
      {
        title: "Provides Financial & Operational Insights",
        description: "Delivers key data on shareholding, indebtedness, and management structure for analysis."
      },
      {
        title: "Supports Ease of Doing Business",
        description: "Enhances credibility with regulators, investors, and lenders, facilitating growth opportunities."
      },
      {
        title: "Strengthens Corporate Governance",
        description: "Demonstrates commitment to accountability and high governance standards."
      },
      {
        title: "Boosts Reputation",
        description: "A compliant track record builds trust with market participants and regulatory bodies."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Document Preparation",
          desc: "Collect and verify all required documents: financial statements, statutory registers, shareholder and director details, and meeting minutes."
        },
        {
          title: "Access MCA Portal & Fill Form",
          desc: "Log in to the MCA portal and complete Form MGT-7 for the financial year ending March 31, entering company particulars and disclosures."
        },
        {
          title: "Upload Attachments",
          desc: "Attach all supporting files—financials, MGT-8 (if applicable), ROC acknowledgments, and any extension approvals."
        },
        {
          title: "Pay Filing Fees",
          desc: "Calculate and pay the ROC fee online based on the company’s authorized share capital."
        },
        {
          title: "ROC Review & Approval",
          desc: "Upon submission, the ROC reviews the filing and updates the company’s compliance status once approved."
        }
      ],
      violations: [],
      consequences: [
        "Late filing penalty of ₹100 per day beyond the 60‑day deadline",
        "Company‑level fines from ₹50,000 up to ₹500,000 for non‑compliance",
        "Continued daily fines until the form is filed",
        "Possible legal action under the Companies Act, 2013"
      ]
    },
  
    eligibility: [
      {
        heading: "Conditions Required for Form MGT-7 Filing",
        items: [
          "Incorporated under the Companies Act, 2013 with electronic submission to ROC",
          "Authorized & paid‑up capital of at least ₹2 crores (or as prescribed)",
          "Annual turnover between ₹20 crores and ₹100 crores (or revised thresholds)",
          "Not classified as an OPC or eligible Small Company (which file MGT‑7A instead)"
        ]
      },
      {
        heading: "Who is Eligible to File Form MGT-7?",
        items: [
          "All private and public limited companies (except OPCs and eligible small companies)",
          "Holding and subsidiary companies",
          "Section 8 (non‑profit) companies",
          "Companies under Special Acts",
          "Parent companies overseeing other entities"
        ]
      }
    ],
  
    services: [
      {
        title: "Over a Decade of Expertise",
        desc: "10+ years’ industry experience ensuring error‑free, efficient MGT-7 filings."
      },
      {
        title: "Tailored Compliance Packages",
        desc: "Customized filing solutions based on your company’s size, structure, and needs."
      },
      {
        title: "Complete Post‑Filing Support",
        desc: "Ongoing assistance with record‑keeping and compliance updates after submission."
      },
      {
        title: "Hassle‑Free Documentation",
        desc: "We handle all paperwork and portal uploads so you can focus on your business."
      },
      {
        title: "Guaranteed Timely Filing",
        desc: "We ensure your return is filed well before the deadline to avoid penalties."
      },
      {
        title: "Expert Legal Guidance",
        desc: "Continuous advisory on corporate law changes, ROC queries, and investigations."
      },
      {
        title: "End‑to‑End Compliance Solutions",
        desc: "From data gathering to final ROC approval, we manage every step."
      },
      {
        title: "Cost‑Effective Pricing",
        desc: "Transparent, competitive fees with no hidden charges."
      },
      {
        title: "24×7 Customer Assistance",
        desc: "Round‑the‑clock support for any compliance queries or emergencies."
      }
    ],
  
    faqs: [
      {
        question: "What is Form MGT-7?",
        answer: "The annual return every eligible company must file under Section 92(1) of the Companies Act, 2013, detailing structure, shareholding, and governance."
      },
      {
        question: "What is the difference between AOC-4 and MGT-7?",
        answer: "AOC-4 is for financial statements; MGT-7 is for the annual return covering directors, shareholders, and governance."
      },
      {
        question: "Who is eligible to file Form MGT-7?",
        answer: "All private/public limited companies except OPCs and eligible small companies (which file MGT‑7A)."
      },
      {
        question: "What is Form MGT-7A?",
        answer: "A simplified annual return for OPCs and small companies (paid‑up capital ≤ ₹2 cr, turnover ≤ ₹20 cr)."
      },
      {
        question: "Who signs Form MGT-7?",
        answer: "A director (and company secretary, if any) must digitally sign; certification by a practicing professional may be required."
      },
      {
        question: "Is filing MGT-7 mandatory?",
        answer: "Yes—failure to file by the deadline invites penalties and legal consequences under the Companies Act."
      },
      {
        question: "Can MGT-7 be revised after filing?",
        answer: "No—ensure all information is accurate before submission, as revisions are not permitted."
      },
      {
        question: "What are the penalties for late filing?",
        answer: "₹100 per day delay plus company‑level fines up to ₹5 lakh and possible legal action."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "Form MGT-7", "Form MGT-7A"],
        rows: [
          ["Definition", "Standard annual return for most companies", "Simplified return for OPCs & small companies"],
          ["Purpose", "Comprehensive disclosure of governance, shareholding, and financials", "Basic operational and financial information"],
          ["Who Should File", "All companies except OPCs & eligible small companies", "OPCs and small companies (paid‑up ≤ ₹2 cr, turnover ≤ ₹20 cr)"],
          ["Certification", "Requires MGT‑8 by PCS for certain companies", "Certification by CS if applicable"],
          ["Deadline", "Within 60 days of AGM", "Within 60 days of AGM (standard: Nov 29 for FY‑end Mar 31)"]
        ]
      },
      timelineFees: []
    }
  },


  "spice-plus-compliance": {
    overview: {
      heading: "SPICe+ Form: A Comprehensive Solution for Company Registration in India",
      paragraphs: [
        "The SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) Form is a powerful web‑based application introduced by the Ministry of Corporate Affairs in 2020 to streamline the company incorporation process in India.",
        "Designed to reduce paperwork and enhance efficiency, SPICe+ enables entrepreneurs to handle multiple registrations through a single, integrated platform—covering name reservation, incorporation, PAN, TAN, GST, EPFO, ESIC and more.",
        "By merging several compliance procedures into one simplified process, SPICe+ (INC‑32) has become a vital tool for startups and businesses aiming for quick and hassle‑free company formation."
      ]
    },
  
    features: [
      {
        icon: "🌐",
        title: "Integrated Online Platform",
        description: "Replaces multiple forms with a single digital solution for company incorporation."
      },
      {
        icon: "🧩",
        title: "Dual‑Part Structure",
        description: "Part A for name reservation (RUN), Part B for incorporation and linked registrations."
      },
      {
        icon: "🔗",
        title: "Multi‑Service Access",
        description: "Apply simultaneously for PAN, TAN, GST, EPFO, ESIC, professional tax, bank account, etc."
      },
      {
        icon: "📊",
        title: "User‑Friendly Dashboard",
        description: "Track progress, make updates, and manage submissions via an intuitive interface."
      },
      {
        icon: "✅",
        title: "Real‑Time Data Validation",
        description: "Instant checks during on‑screen filing to minimize errors and ensure accuracy."
      },
      {
        icon: "🔄",
        title: "Seamless Resubmission",
        description: "Easily correct and resubmit forms without starting from scratch."
      },
      {
        icon: "🔍",
        title: "Pre‑Scrutiny & System Checks",
        description: "Automated validations catch issues before final submission."
      },
      {
        icon: "📝",
        title: "Auto‑Generated Declarations",
        description: "Standard declarations for first directors and subscribers are populated automatically."
      },
      {
        icon: "📑",
        title: "Section‑Based Navigation",
        description: "Logical form sections make data entry and review straightforward."
      }
    ],
  
    benefits: [
      {
        title: "Simplified Compliance Process",
        description: "Consolidates incorporation, PAN/TAN/GST/EPFO/ESIC registrations into one application."
      },
      {
        title: "Digitally Signed & Legally Valid",
        description: "All documents are digitally signed, ensuring security, authenticity, and legal validity."
      },
      {
        title: "Seamless Department Integration",
        description: "Built‑in links to multiple government departments speed up approvals."
      },
      {
        title: "Reduced Processing Time",
        description: "Automated workflows and combined filings enable faster company incorporation."
      },
      {
        title: "Enhanced User Experience",
        description: "On‑screen submission, intuitive navigation, and real‑time feedback simplify the process."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Create SPICe+ Login",
          desc: "Register or log in on the MCA portal and generate filing credentials."
        },
        {
          title: "File Part A (Name Reservation)",
          desc: "Submit company type, proposed name, class, category and get RUN approval."
        },
        {
          title: "File Part B (Incorporation)",
          desc: "Enter incorporation details: address, directors, shareholders, capital, etc."
        },
        {
          title: "Submit Linked Forms",
          desc: "Attach eMoA, eAoA, AGILE PRO (INC‑35), URC‑1 (if conversion), INC‑9 declarations."
        },
        {
          title: "Certificate of Incorporation",
          desc: "Receive CIN, PAN, TAN and date of incorporation once ROC verifies submission."
        }
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
        "Estimated annual income & expenditure (Section 8)"
      ],
      consequences: [
        "Delays or rejections due to incomplete or incorrect documentation"
      ]
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
          "eMoA & eAoA prepared electronically"
        ]
      },
      {
        heading: "Who Can File SPICe+?",
        items: [
          "Entrepreneurs under Section 8 (non‑profits)",
          "Indian residents or registered businesses",
          "Foreign nationals or entities setting up in India",
          "Private & Public Limited Companies",
          "One Person Companies (OPC)",
          "Producer Companies"
        ]
      }
    ],
  
    services: [
      {
        title: "Name Reservation",
        desc: "Integrated RUN service for instant company name approval."
      },
      {
        title: "Company Incorporation",
        desc: "Unified filing for company setup—type, category, address, directors."
      },
      {
        title: "DIN Allotment",
        desc: "Automatic Director Identification Number issuance during incorporation."
      },
      {
        title: "PAN & TAN Application",
        desc: "Embedded PAN/TAN filings with Income Tax Department."
      },
      {
        title: "EPFO & ESIC Registration",
        desc: "One‑click registration for employee welfare schemes."
      },
      {
        title: "Professional Tax & Bank Account",
        desc: "Apply for professional tax and open a corporate bank account seamlessly."
      },
      {
        title: "GSTIN Allotment",
        desc: "Integrated GST registration within the SPICe+ workflow."
      }
    ],
  
    faqs: [
      {
        question: "What is the SPICe+ Form?",
        answer: "An integrated e‑application by MCA to streamline company incorporation and multiple registrations."
      },
      {
        question: "Where do I file SPICe+?",
        answer: "Online via the official MCA portal under the SPICe+ section."
      },
      {
        question: "Who can certify SPICe+?",
        answer: "A CA, CS, or CMA authorized under the Companies Act, 2013."
      },
      {
        question: "What services does SPICe+ cover?",
        answer: "Name reservation, incorporation, DIN, PAN, TAN, GST, EPFO, ESIC, professional tax, bank account, etc."
      },
      {
        question: "Do I need INC‑22 with SPICe+?",
        answer: "Not generally—INC‑22 is only required for changes in registered office after incorporation."
      },
      {
        question: "What’s the file size limit?",
        answer: "Each attachment must not exceed 6 MB (PDF or JPG)."
      },
      {
        question: "Can I resubmit SPICe+ multiple times?",
        answer: "Yes—ensure details are correct to avoid delays or rejections."
      },
      {
        question: "How does SPICe+ differ from SPICe?",
        answer: "SPICe+ adds integrated multi‑service registrations and real‑time validation over the older SPICe form."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "SPICe Form", "SPICe+ Form"],
        rows: [
          ["Scope", "Basic incorporation (INC‑32)", "Incorporation + multiple registrations"],
          ["Integration", "Limited to company setup", "PAN, TAN, GST, EPFO, ESIC, bank account, etc."],
          ["User Experience", "Multiple separate filings", "Single unified workflow"],
          ["Validation", "Manual checks", "Real‑time data validation"],
          ["Processing Time", "Longer turnaround", "Faster approvals via automation"]
        ]
      },
      timelineFees: []
    }
  },

  "agile-pro-s-compliance": {
    overview: {
      heading: "What is Form AGILE PRO S? – A Comprehensive Guide",
      paragraphs: [
        "Form AGILE PRO S is a crucial application filed with the MCA alongside SPICe+ to obtain GST, EPFO, ESIC, Profession Tax and bank account registration in one go under Rule 38(A) of the Companies (Incorporation) Rules, 2014.",
        "Designed as a single‑window system, AGILE PRO S (INC‑35) streamlines mandatory post‑incorporation registrations, reducing paperwork and accelerating business readiness.",
        "It ensures new companies are legally compliant from day one by bundling multiple statutory filings into one integrated form."
      ]
    },
  
    features: [
      {
        icon: "🌐",
        title: "Multi‑Service Integration",
        description: "Consolidates GSTIN, EPFO, ESIC, Professional Tax, Shops & Establishment and bank account registrations under one application."
      },
      {
        icon: "⚡",
        title: "Accelerated Registration",
        description: "Enables faster operational setup by filing all mandatory post‑incorporation registrations in a single workflow."
      },
      {
        icon: "🔄",
        title: "Eliminates Redundancy",
        description: "Minimizes repetitive data entry by integrating with SPICe+ and other MCA e‑services."
      },
      {
        icon: "✅",
        title: "Regulatory Compliance Made Easy",
        description: "Ensures statutory obligations to GST, EPFO, ESIC and other authorities are met seamlessly."
      },
      {
        icon: "📑",
        title: "Mandatory Proof Submission",
        description: "Captures business address proof, KYC documents, board resolutions and declarations within the same form."
      }
    ],
  
    benefits: [
      {
        title: "Single‑Window Registration",
        description: "Automatic filing for multiple services—GST, EPFO, ESIC, Professional Tax, bank account—through one form."
      },
      {
        title: "Integrated with SPICe+",
        description: "Smooth name reservation and incorporation linkage saves time and effort."
      },
      {
        title: "Boosts Operational Efficiency",
        description: "Reduces administrative workload and speeds up business readiness."
      },
      {
        title: "Ensures Legal Compliance",
        description: "Meets key statutory obligations for tax, labor laws, and banking in one go."
      },
      {
        title: "Access to Government Schemes",
        description: "Unlock eligibility for Startup India, MSME registration and other incentives immediately."
      },
      {
        title: "Minimizes Paperwork",
        description: "Combines multiple registrations into a single submission to reduce documentation."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Fill Out Application",
          desc: "Download AGILE PRO S (INC‑35) after SPICe+ submission and enter registration details."
        },
        {
          title: "Attach Supporting Documents",
          desc: "Upload proof of business address, authorized signatory ID/KYC, board resolution, specimen signature and utility bills."
        },
        {
          title: "Submit Declarations",
          desc: "File EPFO, ESIC and bank account declarations as required by respective authorities."
        },
        {
          title: "Sign & Pay",
          desc: "Affix the DSC of the authorized signatory and pay government fees to finalize filing."
        },
        {
          title: "Processing & Approval",
          desc: "MCA reviews the application and grants multiple registrations in one go."
        }
      ],
      violations: [
        "Proof of business address (rent agreement, utility bill)",
        "Board resolution and authorization letter",
        "ID & address proof of authorized signatory (PAN, Aadhaar, passport)",
        "Specimen signature for EPFO",
        "Utility bill for bank KYC",
        "Standard declarations for ESIC/EPFO",
        "INC‑35 e-form correctly filled"
      ],
      consequences: [
        "Delays or rejections due to incomplete or incorrect documentation"
      ]
    },
  
    eligibility: [
      {
        heading: "Basic Requirements for AGILE PRO S Filing",
        items: [
          "Mandatory EPFO & ESIC registration applications",
          "All supporting documents prepared and verified",
          "Bank KYC norms complied for current account setup",
          "Compliance with any state‑specific requirements"
        ]
      },
      {
        heading: "Who Can Apply for AGILE PRO S?",
        items: [
          "Startups and SMEs during incorporation",
          "Private & Public Limited Companies",
          "Limited Liability Partnerships (LLPs)"
        ]
      }
    ],
  
    services: [
      {
        title: "GSTIN Registration",
        desc: "Automatic application for Goods and Services Tax Identification Number."
      },
      {
        title: "ESIC Registration",
        desc: "Registration under the Employees’ State Insurance Act for establishments with ≥10 employees."
      },
      {
        title: "EPFO Registration",
        desc: "Provident fund registration for businesses with ≥20 employees."
      },
      {
        title: "Professional Tax",
        desc: "Professional tax registration as per state requirements."
      },
      {
        title: "Bank Account Opening",
        desc: "Seamless setup of a corporate current account through partner banks."
      },
      {
        title: "Shops & Establishment",
        desc: "State‑specific Shops & Establishment registration where applicable."
      },
      {
        title: "Import‑Export Code",
        desc: "IEC application for import/export activities via DGFT."
      }
    ],
  
    faqs: [
      {
        question: "What is the AGILE PRO S Form?",
        answer: "An MCA e‑form (INC‑35) for obtaining GST, EPFO, ESIC, Professional Tax, bank account and other registrations post–incorporation."
      },
      {
        question: "What does AGILE PRO S stand for?",
        answer: "Application for GSTIN, ESIC, EPFO, Professional Tax Registration, Shops & Establishment (and bank account opening)."
      },
      {
        question: "Who must file AGILE PRO S?",
        answer: "All newly incorporated entities seeking mandatory post‑incorporation registrations."
      },
      {
        question: "Is bank KYC part of AGILE PRO S?",
        answer: "Yes—you must upload KYC documents for the authorized signatory to open the corporate bank account."
      },
      {
        question: "What is the file size limit?",
        answer: "Attachments should not exceed 2 MB per document as per MCA portal guidelines."
      },
      {
        question: "Can I correct and resubmit?",
        answer: "Yes—AGILE PRO S allows seamless resubmission in case of errors."
      },
      {
        question: "How long for approvals?",
        answer: "Typically processed together with SPICe+ approvals, often within a few working days."
      },
      {
        question: "Difference between SPICe+ and AGILE PRO S?",
        answer: "SPICe+ handles incorporation and name reservation; AGILE PRO S handles post‑incorporation registrations."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "SPICe+ Form", "AGILE PRO S Form"],
        rows: [
          ["Primary Purpose", "Company incorporation & name reservation", "Post‑incorporation statutory registrations"],
          ["Services", "DIN, PAN, TAN, GST (optional)", "GSTIN, ESIC, EPFO, Professional Tax, bank account, etc."],
          ["Timing", "Filed first for incorporation", "Filed immediately after SPICe+ submission"],
          ["Focus", "Formation compliance", "Operational readiness"]
        ]
      },
      timelineFees: []
    }
  },


  "ce-certification-compliance": {
    overview: {
      heading: "CE Certification: Your Gateway to the European Market",
      paragraphs: [
        "Obtaining the CE mark demonstrates that your product complies with EU health, safety, and environmental protection standards—mandatory for lawful distribution across the European Economic Area (EEA).",
        "The CE mark, or Conformité Européenne, acts as a passport allowing free movement of goods within the EEA and signifies conformity with all applicable EU directives and regulations.",
        "Partner with Corpbiz™ to streamline the CE certification process and confidently enter one of the world’s most robust and business-friendly markets."
      ]
    },
  
    features: [
      {
        icon: "🔖",
        title: "Legal Market Access",
        description: "CE marking is a legal requirement for many regulated products to enter and circulate freely within the EEA."
      },
      {
        icon: "⚖️",
        title: "Harmonized Standards",
        description: "Ensures all manufacturers adhere to the same EU directives for health, safety, and environmental protection."
      },
      {
        icon: "🔬",
        title: "Conformity Assessment",
        description: "Supports both self-assessment for low-risk products and notified body evaluation where required."
      },
      {
        icon: "🛡️",
        title: "Consumer Safety",
        description: "Protects end users by mandating rigorous testing and risk assessment before market entry."
      },
      {
        icon: "🌍",
        title: "Free Movement of Goods",
        description: "Eliminates country-specific approvals—once CE marked, products can be sold across the entire EEA."
      }
    ],
  
    benefits: [
      {
        title: "Fair Competition",
        description: "Level playing field ensuring all products meet the same mandatory EU requirements."
      },
      {
        title: "Market Confidence",
        description: "Enhances product credibility and consumer trust through demonstrated compliance."
      },
      {
        title: "Regulatory Protection",
        description: "CE mark holders gain legal protection from enforcement actions when correctly certified."
      },
      {
        title: "Global Recognition",
        description: "Widely respected outside Europe as a mark of high regulatory compliance."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Identify Applicable Directives",
          desc: "Determine which EU directives and harmonized standards apply to your product."
        },
        {
          title: "Conformity Assessment",
          desc: "Choose self-assessment or engage a notified body based on product risk classification."
        },
        {
          title: "Compile Technical File",
          desc: "Assemble product specifications, test reports, risk assessments, and design documentation."
        },
        {
          title: "Draft EU Declaration of Conformity",
          desc: "Formalize compliance in a signed declaration, referencing all applicable directives."
        },
        {
          title: "Affix CE Mark",
          desc: "Place the CE logo (minimum 5 mm height) and notified body number (if any) on the product or packaging."
        }
      ],
      violations: [
        "Product description and technical specifications",
        "Test reports verifying compliance with EU harmonized standards",
        "Risk assessment documentation",
        "Signed EU Declaration of Conformity",
        "Notified body certificate number (if applicable)"
      ],
      consequences: [
        "Market withdrawal or bans for non-compliant products",
        "Fines or legal action by EU authorities",
        "Damage to brand reputation and customer trust"
      ]
    },
  
    eligibility: [
      {
        heading: "Who Needs CE Certification?",
        items: [
          "Manufacturers, importers, or distributors of products covered by EU directives",
          "Products in categories such as medical devices, toys, PPE, electronics, machinery, and more",
          "Low‑risk products may self‑certify; higher‑risk items require notified body involvement"
        ]
      },
      {
        heading: "Key Technical Requirements",
        items: [
          "Compliance with all relevant EU directives and harmonized standards",
          "Maintenance of a complete technical file for at least 10 years post‑market placement",
          "Signed EU Declaration of Conformity kept up to date"
        ]
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
          "Pressure Equipment and Simple Pressure Vessels"
        ]
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
          "Self‑verify low‑risk products when third‑party testing is not mandatory"
        ]
      }
    ],
  
    services: [
      {
        title: "Directive & Standard Mapping",
        desc: "Identify all applicable EU directives and harmonized standards for your product category."
      },
      {
        title: "Technical File Assembly",
        desc: "Compile and review product specifications, test reports, risk assessments, and manuals."
      },
      {
        title: "Notified Body Coordination",
        desc: "Liaise with EU‑recognized notified bodies for required third‑party assessments."
      },
      {
        title: "Declaration Drafting",
        desc: "Prepare a precise EU Declaration of Conformity signed by authorized representatives."
      },
      {
        title: "Marking & Labeling Guidance",
        desc: "Ensure CE logo and notified body numbers are correctly sized, proportioned, and placed."
      }
    ],
  
    faqs: [
      {
        question: "What is CE Certification?",
        answer: "CE certification indicates that a product complies with EU safety, health, and environmental protection standards, allowing free movement of goods across the EEA."
      },
      {
        question: "Is CE Certification valid in India?",
        answer: "While CE marking is not mandatory in India, it enhances product credibility and is often required for exporting goods to the European market."
      },
      {
        question: "Is CE Marking accepted in the United States?",
        answer: "CE marking is not a regulatory requirement in the U.S., but it may be recognized as a mark of product quality and safety in global markets."
      },
      {
        question: "Who issues CE Certification?",
        answer: "CE certification is issued by the manufacturer or authorized representative, often with support from a notified body depending on the product category."
      },
      {
        question: "When is CE Certification mandatory in Europe?",
        answer: "CE marking is mandatory for products falling under one or more EU directives—such as electronics, medical devices, machinery, and toys—before sale in the EEA."
      },
      {
        question: "What is the difference between ISO and CE Certification?",
        answer: "ISO focuses on voluntary international quality and management standards; CE is a mandatory product conformity mark for the EEA."
      },
      {
        question: "Do medical devices require CE marking?",
        answer: "Yes—medical devices must comply with the MDR or IVDR and bear the CE mark to be sold in the EEA."
      },
      {
        question: "Is CE marking required for machinery?",
        answer: "Yes—machinery must meet the EU Machinery Directive safety requirements and carry the CE mark."
      },
      {
        question: "What is minimal risk in CE Certification?",
        answer: "Minimal risk products can be self-certified by the manufacturer without third-party assessment, provided they meet all relevant EU requirements."
      },
      {
        question: "What is a Declaration of Conformity?",
        answer: "The EU Declaration of Conformity is a formal, signed document stating that the product meets all applicable EU directives and standards."
      },
      {
        question: "How do you affix the CE mark?",
        answer: "The CE logo must be at least 5 mm high, with correct proportions, and placed visibly on the product, packaging, or accompanying documents."
      },
      {
        question: "Does CE Certification expire?",
        answer: "CE marking itself has no expiry, but the Declaration of Conformity must be updated whenever product design or relevant legislation changes."
      },
      {
        question: "How long must I keep the technical file?",
        answer: "Manufacturers must retain the technical file and Declaration of Conformity for at least 10 years after the last unit is placed on the EU market."
      },
      {
        question: "When is an independent assessment needed?",
        answer: "If the applicable EU directive requires notified body involvement, a third-party assessment and body number must accompany the CE mark."
      },
      {
        question: "How do I find a Notified Body?",
        answer: "Use the EU’s NANDO database to locate an authorized notified body for your specific product type."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: ["Aspect", "ISO Certification", "CE Certification"],
        rows: [
          ["Purpose", "Quality and process standards", "Product compliance with EU directives"],
          ["Scope", "Organizations across all sectors", "Products sold in the EEA"],
          ["Assessment", "External audit by certification body", "Self‑declaration or notified body assessment"],
          ["Voluntary vs Mandatory", "Voluntary", "Mandatory for regulated product categories"]
        ]
      },
      timelineFees: []
    }
  },


  "wpc-certification-compliance": {
    overview: {
      heading: "WPC Certification: Mandatory Wireless Compliance in India",
      paragraphs: [
        "To operate a wireless device business in India, securing WPC certification is mandatory. The Wireless Planning and Coordination (WPC) Wing under the DoT issues Equipment Type Approval (ETA) and import licenses to ensure all RF devices comply with national frequency standards.",
        "Corpbiz™ assists manufacturers and importers with WPC licenses for Bluetooth, Wi‑Fi, and other wireless devices—handling Saral Sanchar portal filings, RF testing, technical documentation, and post‑compliance coordination.",
        "With regional offices in New Delhi, Mumbai, Chennai, Kolkata, and Guwahati, the WPC Wing manages spectrum allocation, frequency testing, and certification for legal marketing of wireless products in India."
      ]
    },
  
    features: [
      {
        icon: "📶",
        title: "Device Compatibility",
        description: "Ensures your wireless products operate on approved Indian frequency bands without interference."
      },
      {
        icon: "🔒",
        title: "National Security Compliance",
        description: "Regulates RF devices to prevent unauthorized use and safeguard public safety."
      },
      {
        icon: "⚙️",
        title: "Frequency Management",
        description: "Prevents signal conflicts by enforcing strict band usage per device type."
      },
      {
        icon: "🏷️",
        title: "Market Access",
        description: "Mandatory WPC ETA certification or import license to legally sell wireless devices in India."
      }
    ],
  
    benefits: [
      {
        title: "Seamless Import Licensing",
        description: "Obtain WPC import authorization for Bluetooth, Wi‑Fi, and other RF devices through a single portal."
      },
      {
        title: "Equipment Type Approval",
        description: "Secure ETA certification to demonstrate compliance with Indian RF regulations."
      },
      {
        title: "Streamlined Testing",
        description: "Use ISO/IEC 17025 lab reports to waive redundant in‑country testing post‑2021."
      },
      {
        title: "Regulatory Expertise",
        description: "Corpbiz™ coordinates with designated Indian representatives for foreign applicants."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Portal Registration",
          desc: "Register on Saral Sanchar portal to generate your WPC Import ID."
        },
        {
          title: "ETA Application",
          desc: "Submit self‑declaration and check device exemption status with Import ID."
        },
        {
          title: "RF Test Report",
          desc: "Upload lab‑accredited RF test results detailing frequency, bandwidth, and sweep specs."
        },
        {
          title: "Document Submission",
          desc: "Provide technical datasheet, IEC code, authorization letters, and mandatory documents."
        },
        {
          title: "Fee Payment",
          desc: "Pay WPC fees online via card, UPI, or digital wallets."
        },
        {
          title: "Certificate Issuance",
          desc: "Receive the WPC ETA certificate permitting legal import and sale."
        }
      ],
      violations: [
        "Device technical specifications",
        "Authorized signatory ID & address proof",
        "Company registration & GST certificates",
        "RF test report from accredited lab",
        "Authorization letter for AIR (foreign applicants)",
        "Import‑Export Code (IEC)",
        "Purchase order or invoice",
        "ASTM/EN/RoHS/CE compliance reports"
      ],
      consequences: [
        "Maintain records of approved frequency bands",
        "Submit periodic updates to WPC",
        "Notify WPC of any device modifications",
        "Renew ETA or import license as needed"
      ]
    },
  
    eligibility: [
      {
        heading: "Eligibility for WPC Import License",
        items: [
          "Manufacturers or importers of Bluetooth, Wi‑Fi, and other RF devices",
          "Foreign companies must appoint an Authorized Indian Representative (AIR)",
          "Submit RF test reports from ISO/IEC 17025 labs to waive in‑India retesting",
          "Devices must operate within India’s delicensed frequency bands",
          "Maintain a complete technical data sheet for authority review"
        ]
      }
    ],
  
    services: [
      {
        title: "Non‑Network License",
        desc: "Import, dealer possession, and non‑dealer possession licenses for non‑network service providers."
      },
      {
        title: "Network License",
        desc: "ISP, experimental, and telecom provider licenses for mobile, DTH, and data services."
      },
      {
        title: "WPC ETA Certification",
        desc: "Equipment Type Approval for devices using unlicensed bands (e.g., Bluetooth, Wi‑Fi)."
      }
    ],
  
    faqs: [
      {
        question: "What are radio frequency bands?",
        answer: "Specific frequency ranges allocated for wireless signal transmission to avoid interference."
      },
      {
        question: "What is WPC Certification?",
        answer: "Mandatory approval from the WPC Wing to import or sell wireless devices in India."
      },
      {
        question: "Who issues WPC certificates?",
        answer: "The Wireless Planning & Coordination Wing under the Department of Telecommunications."
      },
      {
        question: "Can foreign companies apply?",
        answer: "Yes, through a designated Authorized Indian Representative (AIR)."
      },
      {
        question: "What is WPC ETA?",
        answer: "Equipment Type Approval certificate for compliance with Indian RF regulations."
      },
      {
        question: "Is ISO lab testing accepted?",
        answer: "Yes—reports from ISO/IEC 17025 labs eliminate the need for in‑country retesting post‑2021."
      },
      {
        question: "What is an Import ID?",
        answer: "A unique identifier generated upon Saral Sanchar portal registration for your application."
      },
      {
        question: "How long is WPC certification valid?",
        answer: "Typically aligns with the product lifecycle; renew when significant modifications occur."
      },
      {
        question: "Who needs a WPC license?",
        answer: "All manufacturers and importers of RF or wireless devices in India."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: []
      },
      timelineFees: []
    }
  },

  "peso-certification-compliance": {
    overview: {
      heading: "PESO Certification: A Simplified Guide",
      paragraphs: [
        "PESO Certification is mandatory in India for businesses handling hazardous materials—explosives, compressed gases, petroleum, and flammable substances—under the Explosives Act (1884) and Petroleum Act (1934).",
        "The Petroleum and Explosives Safety Organization (PESO) Wing issues licenses and Equipment Type Approval (ETA) to ensure safety standards for equipment, storage, and processes in industries like oil & gas, manufacturing, logistics, and more.",
        "Corpbiz™ guides you through the PESO certification process—application, technical review, factory audits, and post‑certification support—for seamless compliance and operational continuity."
      ]
    },
  
    features: [
      {
        icon: "📅",
        title: "Validity & Renewal",
        description: "Certificates are valid for 3 years with an online renewal process requiring updated documentation."
      },
      {
        icon: "🔒",
        title: "Scope of Coverage",
        description: "Applies to explosives, gas cylinders, petroleum pipelines, flameproof equipment, fireworks, and more."
      },
      {
        icon: "🌐",
        title: "Global Alignment",
        description: "Recognizes ATEX/IECEx test reports for imported machinery, simplifying approvals."
      },
      {
        icon: "🔍",
        title: "Random Audits",
        description: "PESO conducts unannounced inspections to ensure ongoing compliance with safety protocols."
      }
    ],
  
    benefits: [
      {
        title: "Legal Compliance",
        description: "Avoid fines, shutdowns, or legal disputes by adhering to the Explosives and Petroleum Acts."
      },
      {
        title: "Operational Safety",
        description: "Standardized protocols minimize risks of explosions, leaks, and workplace accidents."
      },
      {
        title: "Market Trust",
        description: "Certification enhances credibility, unlocking government tenders and high‑value contracts."
      },
      {
        title: "Environmental Protection",
        description: "Ensures eco‑friendly handling, reducing spills, emissions, and environmental hazards."
      },
      {
        title: "Employee Welfare",
        description: "Mandates training and emergency preparedness, prioritizing worker safety."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "Application Preparation",
          desc: "Fill the PESO form and compile test reports, technical drawings, and business proofs."
        },
        {
          title: "Online Submission",
          desc: "Apply via the PESO portal with commercial details—client list, sales data, and facility records."
        },
        {
          title: "Fee Payment",
          desc: "Pay license fees according to category (₹10,000–₹50,000 for manufacturing)."
        },
        {
          title: "Technical Review",
          desc: "PESO experts verify compliance and may request clarifications on your submission."
        },
        {
          title: "Factory Audit",
          desc: "Inspectors assess high‑risk facilities (e.g., pressure vessels) for infrastructure and safety systems."
        },
        {
          title: "Certificate Issuance",
          desc: "Receive your CCOE PESO Certificate and AIR license within 30–60 days."
        }
      ],
      violations: [
        "Duly filled application form",
        "IECEx or ATEX test reports (≤2 years old)",
        "Product drawings and technical specifications",
        "Trade license, ISO certificates, GST registration",
        "Production unit video and safety audit reports",
        "Authorization letter for AIR (foreign applicants)",
        "Import‑Export Code (IEC) and purchase invoices"
      ],
      consequences: [
        "Maintain approved safety protocols and frequency of audits",
        "Submit modifications or updates to PESO promptly",
        "Renew certificates every 3 years to avoid lapses",
        "Comply with random inspection requests to retain certification"
      ]
    },
  
    eligibility: [
      {
        heading: "Entities Requiring PESO Certification",
        items: [
          "Manufacturers of explosives, fireworks, LPG regulators, oxygen cylinders, and pressure vessels",
          "Storage facilities for petroleum, ammonium nitrate, CNG, LPG, or carbide",
          "Transporters moving hazardous materials by road, rail, or sea",
          "Retailers such as petrol pumps, gas agencies, and fireworks shops",
          "Industrial units like gas bottling plants, CNG stations, and petroleum pipelines"
        ]
      }
    ],
  
    services: [
      {
        title: "Manufacturing & Storage",
        desc: "Licenses for explosives, petroleum products, LPG cylinders, oxygen plants, and ammonium nitrate storage."
      },
      {
        title: "Transportation",
        desc: "Road, rail, and marine transport licenses for hazardous materials."
      },
      {
        title: "Import/Export",
        desc: "ETA certificates and import licenses for compressed gases, explosive materials, and carbide."
      },
      {
        title: "Retail Operations",
        desc: "Licenses for petrol pumps, gas distribution agencies, and fireworks retail outlets."
      },
      {
        title: "Industrial Use",
        desc: "Approvals for pipeline purging, cylinder testing stations, and refinery maintenance."
      }
    ],
  
    faqs: [
      {
        question: "What is the validity of a PESO certificate?",
        answer: "PESO certificates are valid for 3 years and must be renewed before expiry to avoid penalties."
      },
      {
        question: "Is PESO certification mandatory for oxygen plants?",
        answer: "Yes—manufacturing, storing, or distributing compressed gases like oxygen requires PESO certification."
      },
      {
        question: "What is PESO?",
        answer: "The Petroleum and Explosives Safety Organization under the DoT regulates the safe handling of explosives, petroleum, and gases."
      },
      {
        question: "How long does PESO renewal take?",
        answer: "Renewals typically process within 15–30 days if all documents are submitted correctly."
      },
      {
        question: "Do I need a license to store LPG cylinders?",
        answer: "Yes—storage units for LPG, CNG, and other compressed gases must hold a PESO license."
      },
      {
        question: "Who needs PESO certification?",
        answer: "Manufacturers, storage units, transporters, and retailers handling hazardous materials in India."
      },
      {
        question: "How to apply for a cylinder testing station approval?",
        answer: "Submit a detailed application with facility layouts, safety protocols, and technical certifications to PESO."
      },
      {
        question: "Can foreign companies apply directly?",
        answer: "Foreign firms must appoint an Authorized Indian Representative (AIR) to file on their behalf."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: []
      },
      timelineFees: []
    }
  },

  "tec-certification-compliance": {
    overview: {
      heading: "TEC Certification: Mandatory Telecom Equipment Approval in India",
      paragraphs: [
        "The Telecommunication Engineering Centre (TEC) under the Department of Telecommunications (DoT) mandates certification for telecom equipment before sale, import, or usage in India.",
        "TEC certification ensures compliance with national safety and quality standards. The process includes Mandatory Testing and Certification of Telecom Equipment (MTCTE) and CSC certification schemes.",
        "Corpbiz™ simplifies TEC registration through expert assistance in document preparation, Conformity Assessment Body (CAB) coordination, variant submission, and fee management."
      ]
    },
  
    features: [
      {
        icon: "✅",
        title: "Standards Compliance",
        description: "Assures telecom devices meet Indian and global safety benchmarks."
      },
      {
        icon: "🔒",
        title: "Network Protection",
        description: "Prevents equipment-induced disruptions in telecom infrastructure."
      },
      {
        icon: "📈",
        title: "Market Legality",
        description: "Facilitates lawful sale, import, and manufacturing under the Indian Telegraph Rules, 2017."
      },
      {
        icon: "🤝",
        title: "Customer Trust",
        description: "Boosts product reliability and consumer confidence."
      }
    ],
  
    benefits: [
      {
        title: "Regulatory Compliance",
        description: "Meets Essential Requirements (ER) for safe and lawful operation in Indian networks."
      },
      {
        title: "Brand Credibility",
        description: "Strengthens stakeholder confidence through verified safety and performance."
      },
      {
        title: "Fair Competition",
        description: "Ensures a level playing field for all market participants via uniform compliance norms."
      },
      {
        title: "Wider Market Access",
        description: "Enables legal entry and distribution across Indian telecom markets."
      }
    ],
  
    documents: {
      steps: [
        {
          title: "File Application",
          desc: "Submit your TEC application online or offline. No edits allowed post-submission."
        },
        {
          title: "Document Scrutiny",
          desc: "TEC verifies all documents; discrepancies must be corrected."
        },
        {
          title: "Provide Variant Details",
          desc: "Include model information, datasheets, BoM, and manufacturing location."
        },
        {
          title: "Pay Fees",
          desc: "Administrative and evaluation fees depend on product complexity."
        },
        {
          title: "Select CAB",
          desc: "Choose a TEC-designated Conformity Assessment Body for lab testing."
        },
        {
          title: "Testing & Approval",
          desc: "CAB conducts product testing; TEC issues certificate upon approval."
        }
      ],
      violations: [
        "Application form with technical details",
        "Test reports from TEC-accredited labs",
        "Compliance declarations and authorization letters",
        "BoM, manuals, circuit/PCB diagrams",
        "Company registration proof",
        "ISO 9001 certification",
        "Trademark registration (if applicable)",
        "Authorized Indian Representative (AIR) documents for foreign OEMs"
      ],
      consequences: [
        "Fines and legal penalties for non-compliance",
        "Loss of license or market access",
        "Heightened regulatory scrutiny",
        "Product recall or blacklisting"
      ]
    },
  
    eligibility: [
      {
        heading: "Who Must Apply for TEC Certification?",
        items: [
          "Indian telecom equipment manufacturers",
          "Foreign OEMs via an Authorized Indian Representative (AIR)",
          "Importers and dealers of notified telecom devices",
          "Entities using telecom devices under Indian Telegraph Rules, 2017"
        ]
      }
    ],
  
    services: [
      {
        title: "Type Approval",
        desc: "Certification for compliance with Generic Requirements (GR) related to telecom product safety."
      },
      {
        title: "Interface Approval",
        desc: "Approval for interoperability with Indian telecom networks as per Interface Requirements (IR)."
      },
      {
        title: "Technology Approval",
        desc: "Issued for prototypes or emerging technologies like C-DoT innovations meeting GR standards."
      }
    ],
  
    faqs: [
      {
        question: "What is TEC?",
        answer: "TEC is the Telecommunication Engineering Centre under DoT that regulates telecom equipment standards in India."
      },
      {
        question: "Is TEC certification mandatory?",
        answer: "Yes, for all notified telecom products under the Indian Telegraph Rules, 2017."
      },
      {
        question: "Who can issue TEC certificates?",
        answer: "Only TEC-authorized Conformity Assessment Bodies (CABs) can conduct testing. TEC grants final certification."
      },
      {
        question: "Where is testing done?",
        answer: "In TEC-accredited labs or CABs, including those in MRA partner countries for imports."
      },
      {
        question: "How long does TEC certification take?",
        answer: "Typically 4–8 weeks depending on equipment complexity and CAB availability."
      },
      {
        question: "What is the TEC Certificate Number?",
        answer: "A unique identifier issued post-approval, valid for five years and must be displayed on products."
      },
      {
        question: "What are the benefits of TEC certification?",
        answer: "It ensures legal access to the Indian market, boosts customer trust, and avoids network issues."
      },
      {
        question: "Is TEC certification needed for CSC products?",
        answer: "Yes, Certification Scheme for Convergence (CSC) is covered under TEC for specific products like IoT gateways."
      }
    ],
  
    types: {
      cards: [],
      roleBenefits: [],
      differenceTable: {
        columns: [],
        rows: []
      },
      timelineFees: []
    }
  }
  
  
  
  

  
  


  
  
  
  


};
