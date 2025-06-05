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
  },
  "opc-registration": {
      overview: {
        heading: "One Person Company Registration – An Overview",
        paragraphs: [
          "Are you a solopreneur who wants to give wings to your entrepreneurial dreams? One Person Company registration is the best option for you. Enjoy merits such as ease of incorporation, fewer compliance needs and sole ownership and control with stress-free OPC registration.",
          "OPC was introduced under the Companies Act, 2013, to safeguard solo entrepreneurs’ interests. Section 2(62) allows incorporation with just one director and one member, providing full control plus limited liability.",
          "Worried about hurdles in your OPC registration path? Talk to our business consultants for quick, budget-friendly solutions."
        ]
      },
  
      features: [
        // Tax Implications
        {
          icon: "💼",
          title: "Flat Corporate Tax",
          description: "OPCs are taxed at a flat rate of 30% under the Income Tax Act, 1961."
        },
        {
          icon: "🚫",
          title: "No Special Tax Breaks",
          description: "OPCs get no specific tax advantages compared to other structures."
        },
        {
          icon: "📊",
          title: "Dividend Distribution Tax",
          description: "Profits paid out as dividends incur additional dividend distribution tax."
        },
        {
          icon: "🗂️",
          title: "Separate Accounting",
          description: "An OPC’s finances are accounted for separately from the owner’s personal books."
        },
        {
          icon: "📝",
          title: "Regular Filings",
          description: "OPCs must file income-tax returns annually (and GST returns, if applicable)."
        },
  
        // Key Features of an OPC
        {
          icon: "👤",
          title: "Single Ownership",
          description: "Managed and controlled by one individual."
        },
        {
          icon: "🔖",
          title: "Nominee Appointment",
          description: "Nominee designated to ensure business continuity upon the owner’s demise."
        },
        {
          icon: "🛡️",
          title: "Limited Liability",
          description: "Owner’s personal assets are protected beyond the business’s obligations."
        },
        {
          icon: "🏢",
          title: "Separate Legal Identity",
          description: "OPC is a distinct legal entity that can enter contracts and be sued separately."
        },
        {
          icon: "📋",
          title: "Single Director Permissible",
          description: "Can operate with just one director and one member."
        },
        {
          icon: "🚫",
          title: "Restricted Investment Powers",
          description: "Prohibited from investing in other companies’ securities."
        }
      ],
  
      benefits: [
        {
          title: "Simple Incorporation Process",
          description:
            "Requires only one member and one nominee, and minimal capital of ₹1 Lakh."
        },
        {
          title: "Access to Funding",
          description:
            "OPCs can raise capital from VCs, angel investors, and banks more easily than sole proprietorships."
        },
        {
          title: "Fewer Compliances",
          description:
            "Exempt from cash flow statements and company secretary signatures on annual returns."
        },
        {
          title: "Limited Liability",
          description:
            "Liability is capped at the shareholder’s investment, protecting personal assets."
        },
        {
          title: "Easy Management",
          description:
            "Single-director decision-making with minute-book resolutions simplifies governance."
        },
        {
          title: "Exclusive Privileges",
          description:
            "Enjoy exemptions and privileges not available to other private companies."
        }
      ],
  
      documents: {
        steps: [
          {
            title: "Step 1: Obtain DSC & DIN",
            desc:
              "Get Digital Signature Certificate and apply for Director Identification Number via SPICe+."
          },
          {
            title: "Step 2: Reserve Name",
            desc:
              "Reserve your unique company name (with “OPC” suffix) on the MCA portal."
          },
          {
            title: "Step 3: Draft MoA & AoA",
            desc:
              "Prepare Memorandum and Articles (Forms INC-33/34), including nominee details."
          },
          {
            title: "Step 4: File SPICe+ & AGILE-PRO",
            desc:
              "Submit incorporation forms with all mandatory documents via the FoSCoS portal."
          },
          {
            title: "Step 5: Receive Incorporation Certificate",
            desc:
              "Get your Certificate of Incorporation from the Registrar and start operations."
          }
        ],
        violations: [],
        consequences: []
      },
  
      eligibility: [
        {
          heading: "Eligibility Criteria for OPC",
          items: [
            "One shareholder & one director (nominee mandatory).",
            "Annual turnover ≤ ₹2 crores (must convert if exceeded).",
            "Minimum authorized capital of ₹1 lakh.",
            "Member & nominee must be Indian residents (NRIs post-2021 eligible).",
            "Company name must end with “OPC Private Limited.”"
          ]
        }
      ],
  
      services: [
        {
          title: "End-to-End OPC Support",
          desc:
            "Our experts handle everything—DSC/DIN, paperwork, filings, and follow-ups for seamless incorporation & renewal."
        }
      ],
  
      faqs: [
        {
          question: "When must an OPC convert to a Private Limited company?",
          answer:
            "If annual turnover exceeds ₹2 crores or paid-up capital crosses ₹50 lakhs for three consecutive years."
        },
        {
          question: "Can NRIs form an OPC?",
          answer:
            "Yes—post-2021 Union Budget, NRIs meeting residency criteria (≥182 days) can incorporate OPCs."
        },
        {
          question: "What happens if the sole member dies?",
          answer:
            "The nominated individual automatically assumes ownership and operational control."
        },
        {
          question: "Are OPCs taxed differently?",
          answer:
            "No—OPCs pay a flat corporate tax of 30%, plus additional dividend distribution tax on payouts."
        },
        {
          question: "Do OPCs require annual general meetings (AGMs)?",
          answer:
            "No—OPCs are exempt from AGMs under the Companies Act, 2013."
        },
        {
          question: "Is a DSC & DIN mandatory?",
          answer:
            "Yes—at least the sole director needs a DSC and DIN to sign incorporation forms."
        },
        {
          question: "Are cash flow statements mandatory?",
          answer:
            "No—OPCs are exempt from preparing cash flow statements."
        },
        {
          question: "Can an OPC invest in other companies?",
          answer:
            "No—OPCs cannot invest in securities of other companies."
        },
        {
          question: "Which forms are used for incorporation?",
          answer:
            "SPICe+ (INC-32) with AGILE-PRO attachments for various licenses and registrations."
        },
        {
          question: "How long does OPC registration take?",
          answer:
            "Typically 7–15 working days, depending on document completeness and ROC workload."
        },
        {
          question: "What is Form INC-3?",
          answer:
            "Nominee’s consent form—mandatory to appoint a nominee in the MoA."
        },
        {
          question: "Is a company secretary required?",
          answer:
            "Not mandatory—OPCs can operate without a company secretary but must maintain statutory records."
        },
        {
          question: "What’s the validity of an OPC registration?",
          answer:
            "Valid for 20 years, subject to timely compliance and renewals."
        },
        {
          question: "Are board meetings mandatory?",
          answer:
            "Yes—one board meeting per half-year with a minimum 90-day gap."
        },
        {
          question: "What exemptions do OPCs enjoy?",
          answer:
            "No AGMs, no cash flow statements, relaxed board meeting norms, and single-director management."
        },
        {
          question: "Can OPCs add partners later?",
          answer:
            "They must convert to Private Limited before issuing shares to new members."
        },
        {
          question: "Is a DSC required for renewal?",
          answer:
            "Yes—the director’s DSC is needed for filing renewal returns."
        },
        {
          question: "What are the ROC filing fees?",
          answer:
            "Fees depend on authorized capital—ranging from ₹200 to ₹1,000+ per filing."
        },
        {
          question: "Who issues OPC certificates?",
          answer:
            "The Registrar of Companies (ROC) under the Ministry of Corporate Affairs."
        },
        {
          question: "Can an OPC change its registered office?",
          answer:
            "Yes—file Form INC-22 with proof of new address for ROC approval."
        },
        {
          question: "Is a separate PAN mandatory?",
          answer:
            "Yes—OPCs must obtain their own PAN for corporate tax purposes."
        },
        {
          question: "Can an LLP form an OPC?",
          answer:
            "No—only natural persons (including NRIs) can incorporate an OPC."
        },
        {
          question: "What is AGILE-PRO?",
          answer:
            "It’s an integrated form for GST, ESIC/EPF, and other registrations alongside company incorporation."
        },
        {
          question: "Do OPCs require GST registration?",
          answer:
            "Yes—if turnover exceeds the GST threshold or if involved in interstate supply."
        },
        {
          question: "Who issues OPC licenses at ports/airports?",
          answer:
            "The Central Licensing Authority issues those for units operating in ports and airports."
        }
      ],
  
      types: {
        cards: [],
        roleBenefits: [],
        differenceTable: {
          columns: [],
          rows: []
        },
        timelineFees: [],
      }
  },
  "partnership-firm-registration": {
      overview: {
        heading: "Partnership Firm Registration: A Complete Guide",
        paragraphs: [
          "A partnership firm is a flexible and widely adopted business structure in India, ideal for entrepreneurs seeking to collaborate. It enables two or more individuals to combine resources, skills, and expertise while sharing profits as per a mutually agreed ratio outlined in the partnership deed.",
          "Unlike entities formed by status (e.g., Hindu Undivided Families), partnerships are established through a formal contract. While registration isn’t mandatory, obtaining a certificate from the Registrar of Partnership Firms strengthens legal credibility and operational security."
        ]
      },
  
      features: [
        {
          icon: "🛡️",
          title: "Asset Protection",
          description:
            "Safeguard personal assets from business liabilities by registering your firm."
        },
        {
          icon: "🤝",
          title: "Dispute Resolution",
          description:
            "Enables partners to legally pursue claims against third parties or co-partners."
        },
        {
          icon: "🔒",
          title: "Limited Liability",
          description:
            "Partners’ financial responsibilities are capped at their capital contributions."
        },
        {
          icon: "🚀",
          title: "Credibility Boost",
          description:
            "Registration enhances trust with clients, investors, and financial institutions."
        },
        {
          icon: "💰",
          title: "Funding Access",
          description:
            "Registered firms attract loans and investments more easily than unregistered ones."
        }
      ],
  
      benefits: [
        {
          title: "Simplified Compliance",
          description:
            "Minimal documentation and lower costs compared to private companies; exemption from complex financial reporting."
        },
        {
          title: "Tax Efficiency",
          description:
            "Profits are taxed at partners’ individual income-slab rates—avoiding double taxation."
        },
        {
          title: "Operational Flexibility",
          description:
            "Full control over decision-making and profit-sharing terms without excessive regulation."
        },
        {
          title: "Diverse Expertise",
          description:
            "Combine complementary skills of partners, fostering innovation and resilience."
        }
      ],
  
      documents: {
        steps: [
          {
            title: "Draft the Partnership Deed",
            desc:
              "Outline terms, capital contributions, and profit-sharing ratios."
          },
          {
            title: "Apply for DSC & DPIN",
            desc:
              "Obtain Digital Signatures and Designated Partner IDs via the MCA portal."
          },
          {
            title: "Name Reservation",
            desc:
              "Submit a unique business name for approval with the Registrar of Firms."
          },
          {
            title: "Submit Registration Forms",
            desc:
              "File Form A (or state-specific equivalent) with the Registrar, attaching deed and proofs."
          },
          {
            title: "Post-Registration Formalities",
            desc:
              "Apply for PAN, TAN, and GST (if turnover exceeds ₹40 lakh)."
          }
        ],
        violations: [
          "Unregistered firms cannot sue third parties or enforce contractual rights.",
          "Failure to file ITR or pay taxes attracts penalties and interest.",
          "Ambiguous deed terms can lead to disputes and legal complications.",
          "Late GST filings incur penalties and interest on unpaid tax."
        ],
        consequences: [
          "Loss of legal enforcement rights",
          "Monetary fines and interest under the Income Tax Act",
          "Potential business disruption due to disputes",
          "Suspension of GST registration"
        ]
      },
  
      eligibility: [
        {
          heading: "Who Can Register",
          items: [
            "Partners must be legally competent (minors excluded).",
            "HUFs, trusts, and registered firms may join if allowed by their rules."
          ]
        },
        {
          heading: "Basic Requirements",
          items: [
            "Minimum 2 partners, maximum 100.",
            "Unique business name not conflicting with existing entities.",
            "Registered office address in India."
          ]
        }
      ],
  
      services: [
        {
          title: "Expert Support",
          desc:
            "Our CAs and legal advisors guide you through every step—deed drafting, filings, and follow-ups."
        },
        {
          title: "Quick Turnaround",
          desc:
            "Complete partnership firm registration within 7–10 working days."
        },
        {
          title: "Affordable Pricing",
          desc:
            "Transparent, budget-friendly packages with no hidden costs."
        },
        {
          title: "Post-Setup Assistance",
          desc:
            "Support for PAN, GST, MSME registration, and ongoing compliance filings."
        }
      ],
  
      faqs: [
        {
          question: "Is GST mandatory for partnership firms?",
          answer:
            "Yes—if annual turnover exceeds ₹40 lakh, GST registration and filings are mandatory."
        },
        {
          question: "Can spouses be partners?",
          answer:
            "Yes—provided each meets legal competency requirements and is not a minor."
        },
        {
          question: "How long does registration take?",
          answer:
            "Typically 2–3 weeks, depending on state regulations and document completeness."
        }
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
              "Limited to capital contribution"
            ],
            [
              "Registration",
              "Optional",
              "Mandatory"
            ],
            [
              "Governance",
              "Indian Partnership Act, 1932",
              "LLP Act, 2008"
            ],
            [
              "Max Partners",
              "100",
              "No limit"
            ]
          ]
        },
        timelineFees: [
          "Registration timeline: 2–3 weeks",
          "Government fee: state-dependent (₹500–₹2000 approx.)"
        ]
      }
  },
  "sole-proprietorship-registration": {
    overview: {
      heading: "Start Your Business Journey with a Sole Proprietorship",
      paragraphs: [
        "A sole proprietorship is one of the simplest and most common business structures in India. It’s ideal for entrepreneurs looking to start with minimal investment and compliance. In this model, a single individual owns, manages, and controls the entire business.",
        "While it offers ease of setup and complete control, it's important to understand the registration process, benefits, and compliance obligations associated with a sole proprietorship."
      ]
    },

    features: [
      {
        icon: "✅",
        title: "Easy to Establish",
        description:
          "Requires minimal documentation and can often be initiated without formal registration, depending on local rules."
      },
      {
        icon: "🎯",
        title: "Complete Control",
        description:
          "You have full authority over all business decisions, enabling quick and flexible decision-making."
      },
      {
        icon: "📉",
        title: "Minimal Compliance",
        description:
          "No annual filings with MCA and no mandatory audits unless specified under tax laws."
      },
      {
        icon: "💸",
        title: "Tax Advantages",
        description:
          "Business income is taxed as personal income, simplifying filings and offering certain deductions."
      },
      {
        icon: "🏦",
        title: "Easy Banking",
        description:
          "Open a current account easily with GST or Shop & Establishment registration, enhancing credibility."
      }
    ],

    benefits: [],

    documents: {
      steps: [
        {
          title: "Step 1: Choose a Business Name",
          desc:
            "Select a unique name that doesn’t infringe trademarks and meets naming guidelines."
        },
        {
          title: "Step 2: Obtain Registrations",
          desc:
            "Get GST registration, Shop & Establishment license, and/or Udyam registration based on your activities."
        },
        {
          title: "Step 3: Open a Bank Account",
          desc:
            "Submit identity proof, address proof, and business registration certificates to open a current account."
        }
      ],
      violations: [],
      consequences: []
    },

    eligibility: [],

    services: [
      {
        title: "End-to-End Registration Support",
        desc:
          "We help you select a business name, obtain all necessary registrations, and ensure compliance."
      }
    ],

    faqs: [],

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
  "mauritius-company-registration": {
      overview: {
        heading: "Why Choose Mauritius for Company Registration?",
        paragraphs: [
          "Mauritius, a thriving island nation in the Indian Ocean near Africa’s southeastern coast, has emerged as a top destination not just for tourism but for international business ventures. With its pro-business policies, strategic location, and stable political environment, Mauritius offers an ideal setting for entrepreneurs looking to expand globally.",
          "At Ctax, we simplify the process of company registration in Mauritius, helping you take advantage of its investor-friendly ecosystem, competitive tax rates, and well-developed financial infrastructure. The country’s transparent legal system and access to multiple international trade agreements make it a preferred gateway for businesses targeting African and Asian markets.",
          "Registering a company in Mauritius enhances your global credibility while offering flexibility, tax efficiency, and ease of doing business. Let Ctax handle the complexities so you can focus on growing your business with confidence."
        ]
      },
  
      features: [
        {
          icon: "💰",
          title: "Favourable Tax Environment",
          description:
            "Low corporate tax rates, no capital gains tax, and extensive DTAA network make Mauritius a tax‑efficient hub."
        },
        {
          icon: "🏛️",
          title: "Stable Political & Economic Climate",
          description:
            "Consistent governance and strong regulation guarantee a secure platform for international operations."
        },
        {
          icon: "⚡",
          title: "Simple & Fast Incorporation",
          description:
            "Clear legal requirements and minimal bureaucracy allow quick company setup without delays."
        },
        {
          icon: "🌍",
          title: "Gateway to International Markets",
          description:
            "Strategically located between Africa, Asia, and Europe, Mauritius offers access to multiple trade agreements."
        },
        {
          icon: "🏦",
          title: "Robust Financial Services Sector",
          description:
            "A well‑regulated financial industry provides efficient banking, investment, and advisory solutions."
        },
        {
          icon: "🏡",
          title: "Business‑Friendly Residency Options",
          description:
            "Company formation opens residency routes for foreign investors, easing relocation and operations."
        },
        {
          icon: "🔄",
          title: "Flexible Business Structures",
          description:
            "Choose from GBCs, Authorised Companies, Domestic Companies, LLPs, and more to suit your goals."
        },
        {
          icon: "⚖️",
          title: "Reliable Legal & Regulatory Framework",
          description:
            "A hybrid civil/common law system ensures investor protection and transparent regulation."
        }
      ],
  
      benefits: [
        {
          title: "Favourable Tax Environment",
          description:
            "Low corporate tax, no capital gains tax, and DTAA coverage make Mauritius highly tax‑efficient."
        },
        {
          title: "Stable Governance",
          description:
            "Consistent political and economic stability gives investors confidence in long‑term planning."
        },
        {
          title: "Fast & Easy Incorporation",
          description:
            "Transparent requirements and minimal red tape enable quick company setup."
        },
        {
          title: "Strategic Global Access",
          description:
            "Acts as a bridge between Africa, Asia, and Europe, enhancing market reach."
        },
        {
          title: "Advanced Financial Sector",
          description:
            "A regulated banking and financial ecosystem supports global expansion."
        },
        {
          title: "Residency & Relocation Benefits",
          description:
            "Company formation can unlock residency options for foreign entrepreneurs."
        },
        {
          title: "Tailored Business Structures",
          description:
            "Multiple entity types (GBC, Authorized Company, LLP, etc.) to match diverse needs."
        },
        {
          title: "Strong Legal Protection",
          description:
            "Transparent laws and investor safeguards foster trust and security."
        }
      ],
  
      documents: {
        steps: [
          {
            title: "Minimum One Director & Shareholder",
            desc:
              "Must appoint at least one director and one shareholder. The same individual can fill both roles."
          },
          {
            title: "Local Resident Director",
            desc:
              "At least one director must be a Mauritius resident to meet statutory compliance."
          },
          {
            title: "Registered Office Address",
            desc:
              "A valid physical address in Mauritius is mandatory for official correspondence."
          },
          {
            title: "Unique Company Name Approval",
            desc:
              "Proposed name must be distinct and approved by the Registrar of Companies."
          },
          {
            title: "Company Constitution (Optional)",
            desc:
              "Submitting a Memorandum & Articles of Association can offer greater internal flexibility."
          },
          {
            title: "Appointment of Company Secretary",
            desc:
              "Certain entities (e.g., GBCs) must appoint a qualified secretary."
          },
          {
            title: "Corporate Bank Account",
            desc:
              "Opening a bank account in Mauritius is required for all financial transactions."
          },
          {
            title: "TAN Registration",
            desc:
              "Register with the Mauritius Revenue Authority to obtain a Tax Account Number."
          },
          {
            title: "FSC Licensing (If Applicable)",
            desc:
              "Businesses in regulated sectors must secure licenses from the Financial Services Commission."
          },
          {
            title: "Annual Compliance & Record Keeping",
            desc:
              "Maintain accounting records and file annual returns with the Registrar to remain in good standing."
          }
        ],
        violations: [],
        consequences: []
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
            "Ongoing maintenance of accounting records and annual filings."
          ]
        }
      ],
  
      services: [
        {
          title: "Business Structure Consultation",
          desc:
            "Expert advice to select the right entity (GBC, Authorised Company, Domestic Company, LLP, etc.)."
        },
        {
          title: "Name Reservation & Approval",
          desc:
            "Assist in choosing and reserving a unique company name per Registrar guidelines."
        },
        {
          title: "Document Preparation & Filing",
          desc:
            "Full support in preparing and submitting incorporation documents to the Registrar."
        },
        {
          title: "Corporate Bank Account Setup",
          desc:
            "Help open a corporate bank account with top Mauritius banks for seamless financial operations."
        },
        {
          title: "Tax Registration & Compliance",
          desc:
            "Guidance on TAN registration, VAT (if applicable), and MRA compliance."
        },
        {
          title: "Annual Filing & Regulatory Compliance",
          desc:
            "Ongoing support for annual returns, license renewals, and financial reporting."
        },
        {
          title: "Trademark Registration",
          desc:
            "Assistance with trademark search and registration to protect your brand."
        },
        {
          title: "Yacht & Ship Registration",
          desc:
            "Specialized services for registering marine vessels under the Mauritius flag."
        },
        {
          title: "Company Secretarial Services",
          desc:
            "Maintain statutory records, file resolutions, and manage board meeting documentation."
        },
        {
          title: "Registered Office & Virtual Office",
          desc:
            "Provision of a registered office address, virtual office solutions, and domain registration."
        }
      ],
  
      faqs: [
        {
          question: "What are the steps involved in company registration in Mauritius?",
          answer:
            "Choose a business structure, reserve a company name, prepare and submit incorporation documents, open a corporate bank account, register for TAN (and VAT if required), and maintain post‑incorporation compliance."
        },
        {
          question: "What types of structures are available for business setup in Mauritius?",
          answer:
            "Global Business Company (GBC), Authorised Company, Domestic Company, Limited Liability Partnership (LLP), Branch of a Foreign Company, Sole Proprietorship, and Freeport Company."
        },
        {
          question: "Can foreign investors have 100% ownership?",
          answer:
            "Yes, foreign investors may hold 100% equity in most company types, making Mauritius highly attractive for international ventures."
        },
        {
          question: "What tax benefits does company formation in Mauritius offer?",
          answer:
            "Low corporate tax rates, no capital gains tax, and extensive DTAA network. GBCs enjoy additional tax privileges."
        },
        {
          question: "How long does the online registration process take?",
          answer:
            "Typically 3–7 working days, depending on document readiness and regulatory approvals."
        },
        {
          question: "What documents are needed for company incorporation?",
          answer:
            "Certified passport copies, proof of address, business plan, company constitution, consent forms, registered office proof, bank reference letter, and due diligence for corporate shareholders."
        },
        {
          question: "Are there minimum capital requirements?",
          answer:
            "Most company types have no minimum capital requirement. Specific industries or licenses may impose thresholds."
        },
        {
          question: "Which cities are best for business setup in Mauritius?",
          answer:
            "Port Louis (capital), Ebene (Cybercity), Curepipe, Quatre Bornes, and Vacoas‑Phoenix—each offers strong infrastructure and business ecosystems."
        },
        {
          question: "What post‑registration compliance is required?",
          answer:
            "Annual return filing, financial statement submission, TAN/VAT filings, license renewals, and FSC reporting (for regulated entities)."
        },
        {
          question: "How does the legal framework support investors?",
          answer:
            "A hybrid civil/common law system, investor protection policies, and a well‑regulated corporate/financial sector ensure transparency and security."
        },
        {
          question: "What role does the Financial Services Commission (FSC) play?",
          answer:
            "The FSC regulates non‑bank financial services, grants licenses to GBCs, and enforces anti‑money laundering and regulatory compliance."
        },
        {
          question: "Are there restrictions on any business activities?",
          answer:
            "Yes—certain sectors like banking, insurance, and financial services require prior FSC approval, and some industries may restrict foreign ownership without government clearance."
        },
        {
          question: "What support services are available?",
          answer:
            "Business advisory, corporate service providers, banking partners, compliance consultants, virtual offices, and government investment incentives via Ctax."
        }
      ],
  
      types: {
        cards: [],
  
        roleBenefits: [
          "Strategic Location for Global Trade",
          "Low and Transparent Taxation Policies",
          "Fast Company Formation Process",
          "Reputation as a Trusted Financial Hub",
          "Access to Double Taxation Avoidance Agreements",
          "Investor-Friendly Legal System"
        ],
  
        differenceTable: {
          columns: [],
          rows: []
        },
  
        timelineFees: []
      }
  },
  "dubai-company-registration": {
      overview: {
        heading: "Company Registration in Dubai – A Complete Guide",
        paragraphs: [
          "Setting up a company in Dubai offers global entrepreneurs attractive benefits, including access to over 30 free trade zones, 100% foreign ownership, and favorable tax treatment through double taxation treaties with more than 140 countries. Whether you’re looking to establish a Limited Liability Company (LLC) or a Free Zone Company, our expert team simplifies the entire process of company registration in Dubai from India.",
          "Our specialists handle every step—from drafting the Memorandum of Association (MoA) and Articles of Association (AoA) to securing your Ejari Certificate, residence visa, Emirates ID, trade license, and Import Export Code (IEC). We also offer end-to-end accounting and bookkeeping services to ensure smooth business operations. Leave the complexities of Dubai business setup to us—our consultants ensure a fast, hassle-free registration experience so you can focus on growing your business."
        ]
      },
  
      features: [],
  
      benefits: [
        {
          title: "Quick & Seamless Registration",
          description:
            "Complete company formation and obtain essential licenses in as little as 15 minutes via the advanced Basher Portal."
        },
        {
          title: "Strategic Global Location",
          description:
            "Situated at the crossroads of Asia, Europe, and Africa, Dubai serves as a premier trading hub with excellent connectivity."
        },
        {
          title: "Attractive Corporate Tax Benefits",
          description:
            "Zero corporate tax on income up to AED 375,000 and exemptions on dividends, capital gains, interest, and royalties."
        },
        {
          title: "Low VAT Rates",
          description:
            "Enjoy 0% VAT on exports outside the GCC, international logistics, healthcare, and education; free zones offer tax-free movement of goods."
        },
        {
          title: "100% Profit Repatriation",
          description:
            "Fully repatriate profits and capital without branch profits tax or withholding tax—ideal for foreign companies."
        },
        {
          title: "Duty-Free Imports",
          description:
            "Benefit from low or zero tariffs under free trade agreements with India, Singapore, Turkey, and EFTA members."
        },
        {
          title: "Full Foreign Ownership",
          description:
            "Own 100% of your business across mainland, free zone, and offshore structures without needing a local sponsor."
        },
        {
          title: "Advanced Infrastructure & Facilities",
          description:
            "Access cutting-edge ports, logistics hubs, smart cities, and digital connectivity for efficient operations."
        }
      ],
  
      documents: {
        steps: [
          {
            title: "Identity Proofs",
            desc:
              "Valid ID proofs (passport, Emirates ID) for owners, directors, and shareholders for verification."
          },
          {
            title: "Passport Copies",
            desc:
              "Clear copies of passports for all directors and shareholders to be submitted during the application."
          },
          {
            title: "Memorandum of Association (MoA)",
            desc:
              "Notarized MoA outlining company scope, structure, and operational framework."
          },
          {
            title: "Articles of Association (AoA)",
            desc:
              "Notarized AoA defining internal rules and responsibilities of directors and shareholders."
          },
          {
            title: "Dubai Residence Visa",
            desc:
              "Valid residence permit or visa for the company owner and key personnel (if operating from a physical office)."
          },
          {
            title: "Emirates ID",
            desc:
              "Copy of Emirates ID (if applicable) for identification and residency verification."
          },
          {
            title: "Business Address Proof",
            desc:
              "Proof of Dubai-based office address or virtual address for official correspondence."
          },
          {
            title: "Business Name Reservation Certificate",
            desc:
              "Certificate confirming reservation of the approved company name issued by the relevant authority."
          },
          {
            title: "Certificate of Good Standing",
            desc:
              "Also known as Certificate of Good Conduct, verifies that the business or individual has no outstanding liabilities."
          },
          {
            title: "Proof of Share Capital",
            desc:
              "Documentation showing share capital or minimum capital requirements based on business structure."
          }
        ],
        violations: [],
        consequences: []
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
            "Appointment of Professional Advisors—company secretary, chartered accountant, and auditor."
          ]
        }
      ],
  
      services: [
        {
          title: "Free Pre‑Registration Consultation",
          desc:
            "Complimentary guidance on capital requirements, legal prerequisites, tax liabilities, and annual compliance."
        },
        {
          title: "Business Name Search & Reservation",
          desc:
            "Thorough name availability check and reservation process to ensure compliance with regulations."
        },
        {
          title: "Company Incorporation & Document Filing",
          desc:
            "End‑to‑end management of business registration, including application preparation and submission."
        },
        {
          title: "Import‑Export Code (IEC) Assistance",
          desc:
            "Fast‑track registration of Import‑Export Code for seamless cross‑border trade operations."
        },
        {
          title: "Ejari Certificate Procurement",
          desc:
            "Obtain your Ejari certificate for tenancy contracts to legally lease commercial premises."
        },
        {
          title: "Trade License Acquisition",
          desc:
            "Secure commercial, professional, or industrial trade licenses based on your business activity."
        },
        {
          title: "Business Domain Registration",
          desc:
            "Help secure and register a professional domain name tailored to your Dubai‑based business."
        },
        {
          title: "Virtual CFO Services",
          desc:
            "Access expert financial leadership, including accounting, tax planning, compliance reporting, and strategic management."
        },
        {
          title: "Trademark Registration in Dubai",
          desc:
            "Protect your brand identity with trademark search, application, and registration services in the UAE."
        },
        {
          title: "Registered Agent Representation",
          desc:
            "Free registered agent services for the first 12 months to ensure smooth incorporation and regulatory representation."
        },
        {
          title: "Corporate Tax Registration (UAE CT Number)",
          desc:
            "Guidance through the UAE Corporate Tax registration process, ensuring all statutory filings and payments."
        },
        {
          title: "VAT Registration Support",
          desc:
            "Assist with VAT registration and compliance for businesses exceeding the VAT threshold."
        }
      ],
  
      faqs: [
        {
          question: "How do I register a company in Dubai?",
          answer:
            "Choose a business activity, select a jurisdiction (Mainland, Free Zone, or Offshore), reserve a trade name, prepare necessary documents, and submit your application to the relevant authority. A formation expert like Dostartup™ can simplify this process."
        },
        {
          question: "How long does it take to set up a company in Dubai?",
          answer:
            "Typically 3–10 business days, depending on your chosen jurisdiction, business activity, and document accuracy."
        },
        {
          question: "Who is eligible to register a company in Dubai?",
          answer:
            "Both UAE residents and foreign nationals can establish a company. Foreigners may retain 100% ownership in most free zones and certain mainland activities under current laws."
        },
        {
          question: "What documents are required to form a company in Dubai?",
          answer:
            "A valid passport copy, recent photographs, proof of residential address, MoA/AoA, and completed application form. Additional documents vary by structure and jurisdiction."
        },
        {
          question: "Is a registered agent necessary for foreign business owners?",
          answer:
            "Yes, foreign entrepreneurs often appoint a registered agent or local service provider, especially in free zones or offshore jurisdictions."
        },
        {
          question: "Do I need a lawyer to register a business in Dubai?",
          answer:
            "Not mandatory, but hiring legal counsel is highly recommended to ensure compliance and avoid delays."
        },
        {
          question: "Are licenses and permits required to start operations?",
          answer:
            "Yes, after incorporation, you must obtain relevant trade licenses and any additional permits specific to your industry."
        },
        {
          question: "How can a foreigner obtain an Emirates ID?",
          answer:
            "Foreign nationals apply after receiving their UAE residence visa, involving a medical exam, biometric data collection, and visa documents."
        },
        {
          question: "Is obtaining an Ejari certificate mandatory?",
          answer:
            "Yes, if operating from a physical office, you must secure an Ejari certificate to legalize your lease with the Dubai Land Department."
        },
        {
          question: "What types of trade licenses are available?",
          answer:
            "Commercial, Professional, and Industrial licenses, each tailored to specific business activities."
        },
        {
          question: "How many free zones are there in Dubai?",
          answer:
            "Over 30 specialized free zones catering to sectors like technology, media, finance, logistics, and healthcare."
        },
        {
          question: "What business structure options exist in Dubai?",
          answer:
            "LLC, Sole Proprietorship, Free Zone Establishment (FZE), Free Zone Company (FZC), Branch Office, Limited Liability Partnership (LLP), Private & Public Joint Stock Companies, Civil Companies."
        },
        {
          question: "Which structure is most profitable?",
          answer:
            "Depends on your business model. Free Zone companies are popular for full ownership and tax benefits; LLCs offer broader mainland market access."
        },
        {
          question: "Can I start a business in Dubai virtually?",
          answer:
            "Yes—Dubai offers virtual company formation options for digital entrepreneurs and freelancers."
        },
        {
          question: "Do I need a Power of Attorney (POA)?",
          answer:
            "Often required. A POA lets your agent act on your behalf during incorporation if you’re not present in the UAE."
        },
        {
          question: "When should I renew my trade license?",
          answer:
            "Annually before expiration to avoid penalties or suspension. Dostartup™ sends renewal reminders to keep you compliant."
        }
      ],
  
      types: {
        cards: [],
  
        roleBenefits: [],
  
        differenceTable: {
          columns: [],
          rows: []
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
          "Set up accounting and compliance systems for proper financial management and reporting."
        ]
      }
  },
  "sri-lanka-company-registration": {
      overview: {
        heading: "Why Global Entrepreneurs Choose Company Registration in Sri Lanka",
        paragraphs: [
          "Sri Lanka has emerged as a preferred destination for global entrepreneurs seeking to register a company in a strategically located and business‑friendly environment. Positioned in the heart of the Indian Ocean, the island offers seamless access to key regional and international markets, making it an ideal hub for international trade and investment.",
          "Beyond its natural beauty and appeal to tourists, Sri Lanka provides a thriving economic landscape supported by investor‑friendly policies, attractive tax incentives, sector‑specific exemptions, and investment holidays. These benefits make it easier for foreign investors to establish a cost‑effective and profitable presence.",
          "Entrepreneurs also gain access to a well‑educated and skilled workforce, a growing consumer base, and several free trade agreements that streamline cross‑border business operations. With a straightforward incorporation process and the expert guidance of Ctax professionals, setting up a business in Sri Lanka becomes a smooth and rewarding journey."
        ]
      },
  
      features: [],
  
      benefits: [
        {
          title: "Strategic Location",
          description:
            "Situated at the crossroads of major shipping routes in Asia, Sri Lanka provides direct access to regional and global markets, making it a key hub for international trade and logistics."
        },
        {
          title: "Attractive Tax Incentives",
          description:
            "Sri Lanka offers competitive tax benefits including tax holidays, investment allowances, and sector‑specific exemptions, encouraging foreign investment and sustainable business growth."
        },
        {
          title: "Skilled and Educated Workforce",
          description:
            "With a highly literate, English‑speaking talent pool, businesses in Sri Lanka can easily recruit skilled professionals across various industries, ensuring efficient operations and innovation."
        },
        {
          title: "Business‑Friendly Environment",
          description:
            "Sri Lanka’s streamlined incorporation process, supported by pro‑investor regulations, makes starting a company easy and efficient, with minimal bureaucratic hurdles."
        },
        {
          title: "Expanding Consumer Market",
          description:
            "The country’s growing middle class and evolving economic landscape offer entrepreneurs the opportunity to tap into an expanding domestic market across multiple sectors."
        },
        {
          title: "Investment Protection Framework",
          description:
            "Foreign investors benefit from strong legal safeguards under Sri Lankan law, offering a secure and stable environment for long‑term business ventures."
        },
        {
          title: "Access to Global Markets through Trade Agreements",
          description:
            "Sri Lanka’s network of free trade agreements with countries like India, China, and members of SAARC allows businesses to export goods with reduced tariffs and gain access to major international markets."
        },
        {
          title: "Cost‑Effective Business Operations",
          description:
            "From affordable labor to low infrastructure and overhead costs, Sri Lanka provides an economical platform for establishing and scaling business operations."
        }
      ],
  
      documents: {
        steps: [
          {
            title: "Minimum of One Director",
            desc: "Every company must have at least one director to be legally registered."
          },
          {
            title: "Name Reservation",
            desc: "Secure a unique business name approved by the Registrar of Companies (ROC)."
          },
          {
            title: "Registered Office Address",
            desc: "A valid physical address within Sri Lanka is required as the official business location."
          },
          {
            title: "At Least One Shareholder",
            desc: "Your company must have a minimum of one shareholder, who can be local or foreign."
          },
          {
            title: "No Minimum Capital Requirement",
            desc: "Private limited companies in Sri Lanka do not require a minimum capital investment."
          },
          {
            title: "Core Legal Documents",
            desc: "Submit essential documents including the Memorandum and Articles of Association."
          },
          {
            title: "Taxpayer Identification Number (TIN)",
            desc: "Obtain a TIN from the Inland Revenue Department for tax compliance."
          },
          {
            title: "Director’s Consent Form",
            desc: "All directors must submit a signed consent form confirming their willingness to serve."
          },
          {
            title: "Company Secretary Appointment",
            desc: "Appoint a qualified company secretary, preferably a Sri Lankan resident."
          },
          {
            title: "Regulatory Compliance",
            desc: "Ensure full compliance with the Companies Act of Sri Lanka and relevant regulatory authorities."
          }
        ],
        violations: [],
        consequences: []
      },
  
      eligibility: [],
  
      services: [
        {
          title: "Business Structure Consultation",
          desc:
            "Expert guidance to help you select the most suitable legal entity—Private Limited, Public Limited, Overseas Branch, Offshore, Sole Proprietorship, Partnership, or Joint Venture."
        },
        {
          title: "Company Name Reservation Assistance",
          desc:
            "Fast‑tracked support for securing ROC approval of a unique and compliant business name."
        },
        {
          title: "Document Drafting & Application Preparation",
          desc:
            "Assistance in drafting the Memorandum & Articles of Association, consent forms, and preparing complete registration documents."
        },
        {
          title: "Registrar of Companies (ROC) Filing Support",
          desc:
            "Timely and accurate submission of incorporation forms and documents with the ROC."
        },
        {
          title: "Complete Company Setup Solutions",
          desc:
            "End‑to‑end incorporation services for local and foreign investors, ensuring smooth registration."
        },
        {
          title: "Tax, TIN & VAT Registration Services",
          desc:
            "Guidance on obtaining a Taxpayer Identification Number and VAT registration, plus other tax formalities."
        },
        {
          title: "Corporate Bank Account Opening",
          desc:
            "Support in opening a business bank account with trusted local banking partners."
        },
        {
          title: "Post‑Incorporation Compliance Support",
          desc:
            "Ongoing assistance with annual returns, financial statements, and regulatory filings to keep your company in good standing."
        }
      ],
  
      faqs: [
        {
          question: "How can I start a business in Sri Lanka?",
          answer:
            "Choose an entity type, reserve a company name with the ROC, prepare MoA & AoA, submit incorporation documents, obtain the Certificate of Incorporation, register for TIN (and VAT if required), and open a bank account."
        },
        {
          question: "What are the steps for company registration in Sri Lanka?",
          answer:
            "1. Choose a business structure  2. Reserve a unique name  3. Prepare MoA & AoA and supporting documents  4. File application with ROC  5. Obtain Certificate of Incorporation  6. Register for tax and open a bank account."
        },
        {
          question: "What is the cost of business registration in Sri Lanka?",
          answer:
            "Costs vary based on entity type, number of directors, and professional services. It typically includes government fees, documentation costs, and consultant fees."
        },
        {
          question: "Can foreigners register a company in Sri Lanka?",
          answer:
            "Yes—foreign investors can fully own a Private Limited Company subject to compliance with local regulations and sector‑specific guidelines."
        },
        {
          question: "Is online company registration in Sri Lanka possible?",
          answer:
            "Yes—registration can be completed online via the ROC portal. Consultants like Dostartup™ can streamline and expedite the process."
        },
        {
          question: "How long does company registration in Sri Lanka take?",
          answer:
            "Typically 5–10 working days, depending on document accuracy and name approval timelines."
        },
        {
          question: "What types of companies can be registered in Sri Lanka?",
          answer:
            "Private Limited Company, Public Limited Company, Overseas (branch) office, Offshore Company, Sole Proprietorship, Partnership Firm, and Joint Venture."
        },
        {
          question: "What documents do I need for business registration in Sri Lanka?",
          answer:
            "Approved name reservation certificate, MoA & AoA, director/shareholder ID and address proof, director consent forms, registered office proof, TIN application, and passport copies for foreign directors."
        },
        {
          question: "How do I register a company name in Sri Lanka?",
          answer:
            "Submit an application through the ROC portal. The name must be unique, comply with naming guidelines, and receive ROC approval before incorporation."
        },
        {
          question: "Do I need a local director to register a company in Sri Lanka?",
          answer:
            "No—a local director is not mandatory. However, at least one director and one shareholder (who can be foreign) are required."
        },
        {
          question: "What is the role of business registration agents in Sri Lanka?",
          answer:
            "Agents assist with documentation, name approval, ROC filings, compliance support, and ongoing advisory services to simplify registration."
        },
        {
          question: "What are the tax compliance requirements after registration?",
          answer:
            "Obtain a TIN, register for VAT (if applicable), maintain accounting records, file annual returns, and pay corporate tax per Inland Revenue Act deadlines."
        },
        {
          question: "Which are the top 5 cities for corporate registration in Sri Lanka?",
          answer:
            "Colombo, Kandy, Galle, Negombo, and Jaffna—each offers strong infrastructure and business ecosystems."
        },
        {
          question: "Which are the top 10 sectors for investment in Sri Lanka?",
          answer:
            "Tourism & Hospitality, Apparel & Textiles, Agriculture & Food Processing, IT & BPM Services, Renewable Energy, Real Estate & Construction, Logistics & Transport, Education Services, Healthcare & Pharmaceuticals, and Export‑oriented Manufacturing."
        },
        {
          question: "Are there any popular tourist destinations in Sri Lanka?",
          answer:
            "Yes: Sigiriya Rock, Ella, Yala National Park, Galle Fort, Temple of the Tooth (Kandy), Mirissa, Nuwara Eliya, Anuradhapura, Arugam Bay, and Dambulla Cave Temple."
        }
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
          "Low Operational Costs"
        ],
  
        differenceTable: {
          columns: [],
          rows: []
        },
  
        timelineFees: []
      }
  }
  
  
  

  

  
  
  
};
