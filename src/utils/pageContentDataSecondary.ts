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
  }

  
  
  
};
