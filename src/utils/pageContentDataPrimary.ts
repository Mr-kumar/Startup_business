export type benefits = { heading: string; content: string };
export type documentsRequired = { heading: string; content: string };
export type registrationProcedure = {
  heading: string;
  content: string;
  penalties?: {
    description: string;
    penaltyTable: {
      serialNumber: string;
      particulars: string;
      fine: string;
    }[];
  };
};
export type feesStructure = {
  heading?: string;
  paymentMethods?: string[];
  description?: string;
  feeTable?: {
    category: string;
    amount: string;
  }[];
};

export type registrationTimeline = {
  heading: string;
  description?: string;
  steps?: {
    title: string;
    duration: string;
    description: string;
  }[];
  totalTime?: string;
};

export type whyUs = {
  heading?: string;
  description?: string[];
  points?: string[];
  footerText?: string;
};

export type faq = { question: string; answer: string };

export type Listicles = {
  category: string;
  documents?: string[];
};

export type pentalies = {};

export type renewal = {
  heading: string;
  content: string[];
};

export type duplicate = {
  heading: string;
  content: string[];
};

export type PageContentType = {
  title: string;
  description: string;
  overview: { heading: string; content: string }[];
  benefits?: benefits[];
  documentsRequired?: documentsRequired[];
  Listicles?: Listicles[];
  registrationProcedure?: registrationProcedure[];
  feesStructure?: feesStructure[];
  registrationTimeline?: registrationTimeline[];
  whyUs?: whyUs[];
  faq?: faq[];
  renewal?: renewal[];
  duplicate?: duplicate[];
  licensesRequired?: { heading: string; content: string }[];
  typesOfCertification?: { heading: string; content: string }[];
  onlineSystem?: { heading: string; content: string }[];
  fruitProductsRequireCertification?: { heading: string; content: string }[];
  whenRequired?: { heading: string; content: string }[];
  eligibilityCriteria?: { heading: string; content: string }[];
  informationRequired?: { heading: string; content: string }[];
  applicationProcedure?: { heading: string; content: string }[];
};
export const pageContent: Record<string, PageContentType> = {
  "eating-house-license": {
    title: "Eating House License Registration",
    description:
      "An Eating House License is the mandatory legal authorization required to operate any establishment serving food or beverages to the public, issued under the Delhi Police Act.",
    overview: [
      {
        heading: "Overview of Eating House License",
        content:
          "An Eating House License is essential for any premises where food and drinks are prepared, served, or sold for public consumption, including restaurants, cafés, food trucks, dhabas, takeaways, and similar outlets.",
      },
    ],
    documentsRequired: [
      {
        heading: "Personal & Business Identification",
        content:
          "- Valid identity proof (Aadhar, Passport, Voter ID, Driving License, PAN)\n- Address proof (Aadhar, Passport, utility bill, rent/lease deed)\n- Certificate of Incorporation (for companies)\n- DIR-12 or board resolution nominating authorized signatory",
      },
      {
        heading: "Establishment & Infrastructure",
        content:
          "- Ownership proof, tenancy agreement, or lease deed\n- Paid water & electricity bills\n- Building safety certificate\n- Electrical safety certificate\n- Lift fitness certificate (if applicable)\n- Property tax receipt\n- Land-use conversion & regularization charges (if applicable)\n- Parking charges receipt\n- Proof of water supply",
      },
      {
        heading: "Compliance & Regulatory Certificates",
        content:
          "- FSSAI Food License\n- GST Registration\n- PAN of proprietor/company\n- Employee medical fitness certificates\n- Employee police verification\n- Environmental clearance\n- Affidavits (Police & municipal)\n- Smoking area compliance\n- Tobacco license (if applicable)\n- Pest control records\n- Rainwater harvesting details\n- Premises layout plan",
      },
    ],
    licensesRequired: [
      {
        heading: "Mandatory Licenses & Registrations",
        content:
          "- Business Registration (Proprietorship/Partnership/LLP/Company)\n- FSSAI Food License\n- Eating House License (Police Dept.)\n- Health Trade License\n- Fire NOC\n- Liquor License (if serving alcohol)\n- Music License (PPL/IPRS)\n- Lift Clearance (if applicable)\n- Environmental Clearance\n- Shops & Establishment Registration\n- Insurance (fire, theft, liability)\n- Weights & Measures Approval",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Online Application",
        content:
          "Fill out the Eating House License application on the state police/licensing portal.",
      },
      {
        heading: "Step 2: Upload Documents",
        content:
          "Attach all mandatory documents and certificates through the portal.",
      },
      {
        heading: "Step 3: Document Verification",
        content:
          "Visit the Additional Commissioner of Police (Licensing) office for document and premises verification, if required.",
      },
      {
        heading: "Step 4: Departmental Follow-up",
        content:
          "Monitor application status and respond promptly to any queries from the licensing department.",
      },
      {
        heading: "Step 5: License Issuance",
        content:
          "Upon satisfactory verification, the Eating House License is issued within 30–60 days.",
      },
    ],
    renewal: [
      {
        heading: "Renewal of Eating House License",
        content: [
          "- Submit renewal application online",
          "- Upload updated valid documents",
          "- Pay renewal fee",
          "- Await verification and approval",
          "Ensure timely renewal to avoid penalties.",
        ],
      },
    ],
    duplicate: [
      {
        heading: "Duplicate Eating House License",
        content: [
          "- Apply online for duplicate license",
          "- Provide required details and supporting documents",
          "- Pay standard duplicate fee",
          "- Receive verification and issuance of duplicate license",
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "Extensive experience in government registrations",
          "Timely submissions and follow-ups",
          "Streamlined documentation process",
          "Expert legal guidance",
        ],
        points: [
          "Years of handling Eating House License applications",
          "Personalized support",
          "High success rate",
          "24/7 customer assistance",
        ],
      },
    ],
    faq: [
      {
        question: "How long does it take to obtain an Eating House License?",
        answer:
          "Typically 30–60 days from application submission, subject to documentation and inspections.",
      },
      {
        question: "What is the validity of the Eating House License?",
        answer:
          "Valid up to three years, depending on state regulations and related approvals.",
      },
      {
        question: "Who issues the Eating House License?",
        answer:
          "The Additional Commissioner of Police (Licensing) or equivalent local police authority.",
      },
      {
        question: "Can I operate without an Eating House License?",
        answer:
          "No. Operating without a valid license is illegal and may attract penalties or closure notices.",
      },
      {
        question:
          "Is an FSSAI license mandatory along with the Eating House License?",
        answer:
          "Yes, securing an FSSAI Food License is required for all food establishments.",
      },
    ],
  },
  "fssai-state-license": {
    title: "FSSAI State License",
    description: "Get your FSSAI state food license with our expert guidance.",
    overview: [
      {
        heading: "FSSAI State License – A Comprehensive Guide",
        content: `The Food Safety and Standards Authority of India (FSSAI) is the apex regulatory body responsible for overseeing food safety and hygiene across the country. Operating under the Ministry of Health & Family Welfare, FSSAI enforces the provisions of the Food Safety and Standards Act, 2006 to ensure that food businesses maintain strict safety standards.\n Any Food Business Operator (FBO) in India is legally required to obtain an FSSAI State License before starting operations. Running a food business without proper FSSAI registration or license is considered a legal offense and can attract penalties.`,
      },
      {
        heading:
          "Role of the Food Safety and Standards Authority of India (FSSAI)",
        content:
          "The Food Safety and Standards Authority of India (FSSAI) plays a pivotal role in regulating and supervising food safety to protect public health across the nation. As the primary authority under the Ministry of Health & Family Welfare, FSSAI enforces food safety standards and promotes responsible food practices through a range of strategic functions:\n● Establishing regulations and guidelines for the food industry\n● Launching food safety awareness initiatives nationwide\n● Issuing instructions and compliance requirements for Food Business Operators (FBOs)\n● Setting standards for food testing laboratories\n● Collecting and analyzing data on food contaminants\n● Advising the Government of India on food-related policies and legislation\n● Operating a rapid alert system to detect and respond to food safety risks promptly",
      },
      {
        heading: "",
        content:
          "FSSAI has introduced strict regulations for proprietary food businesses, many of which previously operated without defined standards. These businesses are now required to obtain a valid FSSAI State License without exception.\nTo ensure hygiene and food safety across all stages—manufacturing, storage, distribution, and sale—FSSAI has made licensing and regulation mandatory for all FBOs. Additionally, the authority has developed an extensive information network to provide the public with accurate and timely updates related to food safety and hygiene in India.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining an FSSAI State License",
        content: `Securing an FSSAI State License is not just a legal requirement for food businesses operating within a particular state in India—it also offers a range of strategic advantages. Some of the major benefits include:\n
● Enhanced Brand Credibility: Builds trust and recognition among consumers, helping your business stand out in a competitive market.\n
● Improved Business Reputation: An FSSAI license signals quality and safety, boosting your brand’s credibility and market appeal.\n
● Customer Trust and Retention: Consumers are more likely to choose and remain loyal to a licensed food business that prioritizes safety and hygiene.\n
● Legal Compliance and Stability: Avoid legal hassles and ensure smooth operations by meeting all state-level food safety regulations.\n
● Adoption of Best Practices: Encourages food businesses to follow standardized safety protocols, improving overall product quality and operational efficiency.
`,
      },
      {
        heading: "Who Requires an FSSAI State License?",
        content: `An FSSAI State License is mandatory for medium-scale food businesses operating within a single state in India. It applies to various food-related activities including manufacturing, processing, storage, distribution, and sale. If your food business meets any of the following criteria, you are required to obtain an FSSAI State License:\n
●      Annual Turnover: Businesses operating within one state with an annual turnover exceeding Rs. 12 lakhs but below Rs. 20 crores.\n
●      Proprietary Food Units: Facilities involved in the production or handling of proprietary food products.\n
●      Edible Oil Production: Units engaged in vegetable oil manufacturing or processing using solvent extraction, within the above turnover range.\n
●      Hotels: Establishments with a star rating of 4 or below.\n
●      Dairy Operations: Units handling dairy products or milk chilling plants with a daily capacity between 500 to 50,000 liters.\n
●      Storage Facilities: Warehouses or cold storages with a capacity of less than 50,000 metric tons per year.\n
●      Slaughterhouses: Units processing more than 2 and up to 50 large animals, 10 to 150 small animals, or 50 to 1,000 poultry birds per day.\n
●      Food Processing Units: All food processing or re-packing facilities handling a minimum of 100 kg/l to a maximum of 2 metric tons per day.\n
If your business falls under any of these categories, securing an FSSAI State License is not just beneficial—it’s mandatory for legal operation and public trust.\n
`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for FSSAI State License Registration",
        content: `To apply for an FSSAI State License, food business operators must submit a set of mandatory documents as per the regulatory guidelines. These documents help verify the legitimacy and operational standards of the

business. Below is a comprehensive list of documents required for FSSAI State License registration:\n
●      Details of Key Personnel: Names, addresses, and contact information of Directors, Partners, Proprietors, or Executive Members (in case of a society).\n
●      Photographs: Recent passport-sized photographs of the applicant.\n
●      Identity & Address Proof: Valid government-issued ID and address proof of the individual applying for the license.\n
●      PAN Card: A copy of the applicant’s Permanent Account Number (PAN) card.\n
●      Proof of Business Premises:\n
●  	Owned Property: Copy of property documents.\n
●      Rented Property: Copy of the rent agreement along with a No Objection Certificate (NOC) from the property owner.\n
●      Supplier Details: List of raw material suppliers associated with the business.\n
●      Form B: Duly filled and signed application form (Form B).\n
●      Machinery List: Detailed list of machinery and equipment installed at the business facility.\n
●      Municipal NOC: Clearance or No Objection Certificate issued by the local municipal authority.\n
●      Product Information: List of proposed food products and their respective food categories to be manufactured or processed.\n
●      Import Export Code (IEC): Issued by the Directorate General of Foreign Trade (DGFT), if applicable.\n
●      Form IX: Nomination of persons by a company along with a board resolution.\n
●      Authorization Letter: Letter of authorization mentioning the name and address of the responsible individual.\n
●      Food Safety Management System Plan (FSMS): A copy of the FSMS plan or certificate.\n
Submitting these documents correctly and completely is crucial for a successful application process. It helps ensure quicker processing and regulatory compliance for your food business under the FSSAI norms.\n
`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Penalties for Non-Compliance with FSSAI Regulations",
        content:
          "1. Food quality not adhering to the standards of the Act - Up to ₹2,00,000 (₹25,000 for petty manufacturers)\n 2. Sale or distribution of sub-standard food - Up to ₹5,00,000\n 3. Misbranded or misleadingly labeled food - Up to ₹3,00,000\n 4. False advertising or deceptive product description - Up to ₹10,00,000\n 5. Presence of extraneous or foreign matter in food - Up to ₹1,00,000\n 6. Failure to comply with directions of Food Safety Officer - Up to ₹2,00,000\n 7. Manufacturing or processing food in unhygienic conditions - Up to ₹1,00,000.\n Note: In addition to fines, repeated or severe violations may result in license suspension or cancellation.\n Strict adherence to FSSAI regulations is essential not only for avoiding penalties but also for ensuring consumer safety and maintaining business credibility.\n Here’s a clean, SEO-friendly, and professionally rephrased version of the “Fee Structure for Obtaining FSSAI State License” section for your client’s website.",
      },
    ],
    feesStructure: [
      {
        heading: "FSSAI State License Fee Structure",
        description:
          "The cost of obtaining an FSSAI State License depends on the scale and nature of your food business operations. Applicants can pay the applicable fees via Demand Draft (DD), Treasury Challan, or Cash, as per the norms laid out by the Food Safety and Standards Authority of India.\n Below is the categorized fee structure based on the type and capacity of the food business:",
        feeTable: [
          {
            category: "Small businesses",
            amount: "2000/-",
          },
          {
            category: "Medium businesses",
            amount: "5000/-",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain FSSAI State License",
        description: "The process typically takes 6-12 weeks.",
        steps: [
          {
            title: "Document Preparation",
            duration: "1-2 weeks",
            description: "Gather all required documents.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Us?",
        description: ["We provide expert guidance and support."],
        points: ["99% success rate", "Affordable pricing"],
      },
    ],
    faq: [
      {
        question: "What is an FSSAI state license?",
        answer: "It is a mandatory license for food businesses.",
      },
    ],
  },
  "fssai-license-renewal": {
    title: "FSSAI State License",
    description: "Get your FSSAI state food license with our expert guidance.",
    overview: [
      {
        heading: "FSSAI State License - An Overview",
        content: `FSSAI (Food Safety and Standards Authority of India) regulates the food sector across India. 
                  It ensures food safety by implementing strict guidelines. 
                  Every food business operator (FBO) must secure an FSSAI state license to operate legally. 
                  Operating without a valid license is a punishable offence under the FSS Act, 2006.`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Obtaining FSSAI State License",
        content: `- Boosts consumer confidence by assuring food safety standards
        - Improves brand credibility and goodwill
        - Helps in business expansion and legal compliance`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to Obtain FSSAI State License",
        content: `- Details of key management personnel
        - Passport-sized photos
        - Identification and address proof`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Process for Obtaining FSSAI State License",
        content: `- Arrange documents
        - Submit application
        - Inspection and approval`,
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for Obtaining FSSAI State License",
        description: "The applicable fee varies based on production capacity.",
        feeTable: [
          {
            category: "Small businesses",
            amount: "2000/-",
          },
          {
            category: "Medium businesses",
            amount: "5000/-",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain FSSAI State License",
        description:
          "Obtaining an FSSAI State License is a step-by-step process that involves documentation, application, review, and inspection stages. Here’s a breakdown of the estimated timeline involved in acquiring the license:",
        steps: [
          {
            title: "1.Document Preparation & Initial Assessment",
            duration: "1-2 weeks",
            description:
              "Begin by collecting all mandatory documents, including identity/address proof, business registration certificates, and your Food Safety Management System (FSMS) plan. Conduct a preliminary check to ensure all paperwork is in place before filing.",
          },
          {
            title: "2. Application Submission",
            duration: "Up to 1 Week",
            description:
              "Submit the duly filled Form B through the official FoSCoS (Food Safety Compliance System) portal or at your nearest FSSAI office. Make sure to pay the prescribed application fee.",
          },
          {
            title: "3.  Application Review & Scrutiny",
            duration: "2–3 Weeks",
            description:
              "FSSAI authorities will review your application and attached documents. During this phase, they may seek clarification or request additional information.",
          },
          {
            title: "4. On-Site Inspection",
            duration: "2–4 Weeks",
            description:
              "FSSAI officials may conduct a physical inspection of your premises to verify adherence to hygiene, safety, and infrastructure requirements as per FSSAI guidelines.",
          },
          {
            title: "5. Grant of License",
            duration: "1–2 Weeks",
            description:
              "Following a successful inspection and final document verification, your FSSAI State License will be approved and issued.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "2. Application Submission",
        description: ["We provide expert guidance and support."],
        points: ["99% success rate", "Affordable pricing"],
      },
    ],
    faq: [
      {
        question: "What is an FSSAI state license?",
        answer: "It is a mandatory license for food businesses.",
      },
    ],
  },
  "fpo-certification": {
    title: "FPO Certification in India – Everything You Need to Know",
    description:
      "FPO Certification (Fruit Products Order) is mandatory for businesses involved in processed fruit and vegetable products. Governed by MoFPI and regulated by FSSAI, it ensures quality, safety, and hygiene standards are met.",
    overview: [
      {
        heading: "FPO Certification – An Overview",
        content:
          "Introduced in 1955, the Fruit Products Order (FPO) Certification is required for all businesses producing processed fruit- and vegetable-based products. It validates compliance with quality, safety, and hygiene norms set by MoFPI and FSSAI.",
      },
    ],
    typesOfCertification: [
      {
        heading: "Fruit-Based Products Certification",
        content:
          "Mandatory for jams, jellies, squashes, preserves, and fruit concentrates to ensure food safety and quality.",
      },
      {
        heading: "Vegetable-Based Products Certification",
        content:
          "Required for pickles, sauces, canned vegetables, and purees, confirming hygiene and process controls.",
      },
      {
        heading: "Beverages Certification",
        content:
          "Covers fruit juices, syrups, and drinks, guaranteeing defined safety and quality benchmarks.",
      },
      {
        heading: "Canned Fruit Products Certification",
        content:
          "Applies to canned fruits, pulps, and vegetables to demonstrate hygienic processing and preservation techniques.",
      },
      {
        heading: "Frozen Fruit Products Certification",
        content:
          "Ensures freezing and storage processes for fruits and vegetables comply with safety regulations.",
      },
      {
        heading: "Dehydrated Products Certification",
        content:
          "For dried fruits, vegetables, and powders, verifying manufacturing under controlled, hygienic conditions.",
      },
      {
        heading: "Edible Oils and Fats Certification",
        content:
          "Required for refined oils, ghee, and butter to confirm food-safe practices and nutritional standards.",
      },
      {
        heading: "Honey Certification",
        content:
          "Verifies purity and quality of honey and honey-based products under FSSAI norms.",
      },
      {
        heading: "Dairy Products Certification",
        content:
          "Ensures hygienic processing of milk-derived goods like butter, cheese, and cream.",
      },
      {
        heading: "Miscellaneous Processed Food Certification",
        content:
          "Covers biscuits, snacks, and ready-to-eat items for compliance with food safety laws.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining FPO Certification",
        content:
          "- Guarantees product quality through stringent safety standards\n- Ensures regulatory compliance with MoFPI and FSSAI\n- Builds consumer trust and loyalty with the recognized FPO mark\n- Enables market expansion domestically and internationally\n- Strengthens product labeling and branding\n- Supports export opportunities without regulatory roadblocks\n- Simplifies application via an online process\n- Enhances overall brand value and competitiveness\n- Promotes hygienic and responsible manufacturing\n- Drives sustainable, long-term business growth",
      },
    ],
    fruitProductsRequireCertification: [
      {
        heading: "Fruit-Based Products",
        content:
          "Jams, jellies, marmalades, concentrates, squashes, preserves, chutneys, and pulps.",
      },
      {
        heading: "Vegetable-Based Products",
        content: "Pickles, sauces, canned vegetables, and purees.",
      },
      {
        heading: "Beverages",
        content: "Fruit juices, nectars, syrups, and fruit-flavored drinks.",
      },
      {
        heading: "Canned Fruit Products",
        content: "Canned fruits, vegetables, pulps, and purees.",
      },
      {
        heading: "Frozen Fruit Products",
        content: "Frozen fruits, vegetables, purees, and concentrates.",
      },
      {
        heading: "Dehydrated Products",
        content: "Dried fruits, vegetables, and powders.",
      },
      {
        heading: "Edible Oils and Fats",
        content: "Refined oils, ghee, and butter.",
      },
      {
        heading: "Dairy-Based Products",
        content: "Milk-based beverages, paneer, and dairy alternatives.",
      },
      {
        heading: "Honey and Natural Sweeteners",
        content: "Raw honey and infused honey blends.",
      },
      {
        heading: "Miscellaneous Processed Foods",
        content: "Biscuits, bakery items, and ready-to-eat snacks.",
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Eligibility Criteria for FPO Certification",
        content:
          "- Registered business entity (proprietorship, partnership, company, or cooperative)\n- Valid FSSAI food license\n- Operational manufacturing facility meeting hygiene standards\n- Products fall within approved FPO categories\n- Established quality control and testing systems\n- Infrastructure compliant with FPO guidelines\n- Employee health certifications\n- Proper record-keeping of sourcing, production, and audits\n- (If applicable) Trademark registration\n- Accurate and complete application submission",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for FPO Mark Certification",
        content:
          "- Duly filled application form\n- Business registration certificate\n- PAN card and GST certificate\n- Valid FSSAI food license\n- Food Safety Management Plan (FSMP)\n- Facility layout plans and blueprints\n- List of equipment and machinery\n- List of raw materials and ingredients\n- Product details, specifications, and label samples\n- Quality control and laboratory test reports\n- Quality assurance plan\n- Ownership or lease agreements\n- Employee health certificates\n- (If applicable) Trademark registration proof",
      },
    ],
    applicationProcedure: [
      {
        heading: "How to Apply for FPO Mark Certification",
        content:
          "1. Verify eligibility (registered entity, FSSAI license, compliant facility)\n2. Gather all mandatory documents\n3. Register and log in on the FSSAI portal\n4. Complete the online application form accurately\n5. Upload supporting documents in prescribed formats\n6. Pay the application fee and retain the receipt\n7. Facilitate facility inspection by FSSAI officials\n8. Submit product samples for laboratory testing\n9. Await review of documents, inspection, and test reports\n10. Receive FPO certification upon approval\n11. Monitor certificate validity and apply for renewal before expiry",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Obtaining FPO Certification",
        description:
          "The end-to-end process typically takes 30 to 45 days, covering documentation review, facility inspection, product testing, and final approval.",
        totalTime: "30–45 days",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup for FPO Certification?",
        description: [
          "Comprehensive eligibility assessment to ensure readiness.",
          "Expert support with documentation and online filing.",
          "Pre-audit facility evaluation to address gaps in advance.",
          "Coordination of sample testing with FSSAI-approved labs.",
          "Regulatory compliance advisory throughout the process.",
          "Employee training for hygiene and inspection preparedness.",
          "On-ground support during official inspections.",
          "Proactive certificate renewal management.",
          "Significant time and cost savings with our proven methodology.",
        ],
        points: [
          "10+ years of experience in food industry certifications",
          "99% first-time approval rate",
          "Dedicated project manager for seamless coordination",
          "Transparent pricing and no hidden fees",
          "24/7 customer support",
        ],
        footerText: "",
      },
    ],
    faq: [
      {
        question: "What is FPO Certification?",
        answer:
          "FPO Certification is a quality assurance mark issued by MoFPI and regulated by FSSAI, certifying that processed fruit and vegetable products meet mandatory safety, hygiene, and quality standards.",
      },
      {
        question: "How long does it take to obtain FPO Certification?",
        answer:
          "Typically, the process takes 30 to 45 days, depending on document accuracy, inspection schedules, and lab test turnaround times.",
      },
      {
        question: "Is an FSSAI license mandatory for FPO Certification?",
        answer:
          "Yes, a valid FSSAI food license is a prerequisite for applying for FPO Certification.",
      },
      {
        question: "Can I export products with FPO Certification?",
        answer:
          "Yes, FPO Certification is recognized internationally and facilitates export by demonstrating compliance with global food safety norms.",
      },
      {
        question: "How do I renew my FPO Certification?",
        answer:
          "Submit a renewal application through the FSSAI portal before the certificate expiry date, along with updated documents and applicable fees.",
      },
    ],
  },
  "fssai-product-approval": {
    title: "FSSAI Product Approval – Everything You Need to Know",
    description:
      "FSSAI Product Approval is the official process by which the Food Safety and Standards Authority of India grants permission for food products or ingredients that fall outside existing standards. Managed via the online Food Product Approval System (FPAS), it ensures safety and quality compliance before market launch.",
    overview: [
      {
        heading: "FSSAI Product Approval – An Overview",
        content:
          "FSSAI Product Approval is a crucial process through which FSSAI grants approval for food products or ingredients that do not comply with prescribed standards under the Food Safety & Standards Act. It is managed by the Central Government to ensure that new or proprietary food items meet safety and quality benchmarks before entering the Indian market.",
      },
      {
        heading: "Why Approval Is Mandatory",
        content:
          "Before launching any non-standard food product—ingredients, formulations, or novel foods—manufacturers must obtain FSSAI approval. This step guarantees adherence to safety, hygiene, and nutritional regulations, protecting consumer health and reinforcing brand trust.",
      },
    ],
    onlineSystem: [
      {
        heading: "FSSAI Online Product Approval System (FPAS)",
        content:
          "The FPAS portal replaces the earlier manual submission process. FBOs can now submit, pay fees, and track their product approval applications online, benefiting from enhanced transparency, speed, and accessibility.",
      },
    ],
    whenRequired: [
      {
        heading: "When Do You Need FSSAI Product Approval?",
        content:
          "- For ingredients or products not covered by existing FSSAI standards\n- Onboarding new or proprietary food formulations\n- Launching items never previously produced or tested globally\n- Seeking approval for substances that have never undergone a safety assessment",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining FSSAI Product Approval",
        content:
          "- Streamlined, standardized assessment procedures\n- Reduced regulatory delays and minimal risk of compliance issues\n- Enhanced consumer trust through recognized safety endorsements\n- Confidence of domestic and international buyers via rigorous quality testing\n- Greater industry engagement and market reach",
      },
    ],
    informationRequired: [
      {
        heading: "Information Required for Application",
        content:
          "- Business name, address, and FBO license details\n- Brand and common product name\n- Manufacturing method and facility address\n- Complete ingredient list and pack size\n- Shelf life, serving details, and nutritional/health claims\n- Product category, country of origin, and market status\n- Contact email and phone number",
      },
    ],
    documentsRequired: [
      {
        heading: "Supporting Documents",
        content:
          "- Detailed manufacturing process description\n- Product label design (prototype or final)\n- Real-time and accelerated stability data sheets\n- NABL-accredited laboratory analysis certificates\n- Form-9, undertaking, and end-use declaration\n- Any additional test reports or safety assessments",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Obtaining FSSAI Product Approval",
        content:
          "1. Incorporate a registered entity (Pvt. Ltd. or LLP) for smoother license transfer.\n2. Secure a valid FBO license and attach it to your application.\n3. Obtain required lab test reports from NABL-accredited facilities.\n4. Prepare compliant product label designs.\n5. Submit the complete application online via the FPAS portal.\n6. Facilitate facility inspection and sample testing as scheduled.\n7. Monitor application status and respond to any queries.\n8. Receive official FSSAI Product Approval to legally market your product.",
      },
    ],
    faq: [
      {
        question: "What is FSSAI Product Approval?",
        answer:
          "FSSAI Product Approval is the certification process for food items or ingredients not covered under existing standards, ensuring their safety and compliance before market introduction.",
      },
      {
        question: "Who can apply for product approval?",
        answer:
          "Any Food Business Operator (manufacturer, importer, or marketer) with a valid FBO license can apply via the FPAS portal.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Typical turnaround is 30–45 days, subject to complete documentation, facility inspection, and laboratory testing.",
      },
      {
        question: "Is FBO license mandatory?",
        answer:
          "Yes. A valid FBO (registration or license) is required to submit an FSSAI product approval application.",
      },
      {
        question: "Can I track my application online?",
        answer:
          "Yes. The FPAS portal allows applicants to submit, pay fees, and track approval status in real time.",
      },
    ],
  },
  "food-recycling-license": {
    title: "Food Recycling License in India – Everything You Need to Know",
    description:
      "A Food Recycling License (Consent to Establish & Operate) from the State Pollution Control Board is mandatory for any entity that processes or recycles food waste via composting, anaerobic digestion, or industrial treatment. It ensures compliance with environmental regulations and promotes sustainable waste management.",
    overview: [
      {
        heading: "Overview of Food Recycling License",
        content:
          "India generates over 817,000 tonnes of food waste annually (2021), yet recycles only 19% of it. With nearly 40% of produced food wasted and an economic loss of ₹92,000 crores each year, a Food Recycling License helps organizations implement sustainable waste‐management solutions while meeting legal requirements.",
      },
      {
        heading: "Food Waste Management Hierarchy",
        content:
          "Effective management follows a four-tier hierarchy: prevention and reduction at source; redistribution of surplus edible food; recycling and treatment (e.g., anaerobic digestion, industrial composting); and final composting into nutrient-rich soil amendments.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Composting Food Waste",
        content:
          "- Prevents soil erosion by improving soil structure\n- Promotes healthier plant growth through enhanced nutrient availability\n- Conserves water via increased soil moisture retention\n- Reduces landfill waste and associated disposal costs\n- Lowers greenhouse gas emissions and agricultural odors",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Food Recycling License",
        content:
          "- Covering letter describing recycling activities\n- Proof of site ownership or lease deed\n- Company registration (MOA or partnership deed)\n- Detailed site layout plan showing equipment, ETP, storage areas\n- Environmental impact diagram (2 km radius)\n- Process flowchart of recycling/manufacturing\n- CA certificate for pollution control provisions\n- KYC of authorized signatory (PAN/Aadhaar)\n- Recent utility bills (electricity/water)\n- GST registration certificate\n- Factory license under the Factories Act",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Obtaining Food Recycling License",
        content:
          "1. Submit the prescribed application form to the relevant State Pollution Control Board (SPCB).\n2. Attach all required documents and detailed process descriptions.\n3. SPCB conducts a site inspection to verify compliance.\n4. Authority reviews inspection report and documentation.\n5. On approval, SPCB issues Consent to Establish (CTE) and Consent to Operate (CTO).",
      },
    ],
    whyUs: [
      {
        heading: "How Dostartup Helps You Secure Your License",
        description: [
          "Tailored end-to-end support for all application steps.",
          "Expert guidance on document collection and drafting.",
          "Coordination with SPCB officials for inspections.",
          "Timely follow-up to ensure swift approval.",
        ],
        points: [
          "Dedicated project manager",
          "100% application completeness guarantee",
          "Transparent pricing and progress tracking",
          "Post-approval compliance support",
        ],
        footerText:
          "Partner with Dostartup to turn your food waste challenge into a sustainable opportunity.",
      },
    ],
    faq: [
      {
        question: "What is a Food Recycling License?",
        answer:
          "It is the combined Consent to Establish (CTE) and Consent to Operate (CTO) issued by the State Pollution Control Board, allowing you to legally set up and run a food waste recycling facility.",
      },
      {
        question: "Who issues the Food Recycling License?",
        answer:
          "The relevant State Pollution Control Board (SPCB) or Pollution Control Committee (PCC) in Union Territories.",
      },
      {
        question: "How long does the licensing process take?",
        answer:
          "Typically 45–60 days, depending on state-specific procedures and application completeness.",
      },
      {
        question: "Is a Food Recycling License mandatory?",
        answer:
          "Yes. Any entity processing or recycling food waste in India must obtain both CTE and CTO from the SPCB.",
      },
      {
        question: "Which legislation governs food waste management?",
        answer:
          "Solid Waste Management Rules, 2016 under the Environment Protection Act, 1986, along with state-specific pollution control regulations.",
      },
    ],
  },
  "private-limited-company-registration": {
    title: "Private Limited Company Registration in India – A Quick Guide",
    description:
      "Registering a Private Limited Company is one of the most popular business formation choices in India, offering limited liability protection to shareholders under the Companies Act, 2013 and a separate legal entity status.",
    overview: [
      {
        heading: "Overview of Private Limited Company Registration",
        content: `A Private Limited Company is a separate legal entity under the Companies Act, 2013.  
  It requires a minimum of 2 and a maximum of 200 shareholders, offers limited liability protection, and is ideal for startups and growing enterprises seeking capital while retaining control.`,
      },
    ],
    benefits: [
      {
        heading: "Why Register a Private Limited Company?",
        content: `- Legal identity and enhanced credibility with stakeholders  
  - Simplified access to funding and investors  
  - Protection of personal assets through limited liability  
  - Perpetual succession irrespective of ownership changes  
  - Strong foundation for long-term growth and operational stability`,
      },
    ],
    documentsRequired: [
      {
        heading: "Director Documents",
        content: `- PAN card (Indian nationals) or passport (foreign nationals)  
  - Passport-size photograph  
  - Address proof (Aadhaar, driving license, utility bill, or residence permit)  
  - Digital Signature Certificate (DSC)  
  - Director Identification Number (DIN)  
  - Self-attested declaration of directorships`,
      },
      {
        heading: "Company Documents",
        content: `- Proof of registered office (sale deed / NOC + rent agreement)  
  - Utility bill or bank statement as address proof  
  - Memorandum of Association (MOA) & Articles of Association (AOA)  
  - Certificate of Incorporation (post-registration)  
  - Appointment letters of auditor, CA & company secretary`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Registering a Private Limited Company",
        content: `1. Obtain DIN & DSC for all proposed directors  
  2. Reserve company name via MCA portal (RUN service)  
  3. Draft and file MOA & AOA  
  4. Submit incorporation forms (INC-7, DIR-12, etc.) to ROC  
  5. Pay prescribed registration fees  
  6. Receive Certificate of Incorporation (COI)  
  7. Open company bank account in the company name  
  8. Register under GST, EPFO & Professional Tax (if applicable)`,
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for Incorporation",
        paymentMethods: ["Online via MCA portal"],
        description:
          "Government fees vary by authorized share capital and state; professional fees apply separately.",
        feeTable: [
          { category: "Up to ₹1 lakh capital", amount: "₹1,500–₹2,000" },
          { category: "Above ₹1 lakh capital", amount: "₹2,000–₹5,000+" },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Complete Registration",
        description:
          "The process typically takes 7–10 working days, subject to document verification and ROC workload .",
        steps: [
          {
            title: "DIN & DSC Processing",
            duration: "1–2 days",
            description: "Issue DIN & DSC for directors.",
          },
          {
            title: "Name Approval",
            duration: "1–2 days",
            description: "Reserve company name via RUN.",
          },
          {
            title: "ROCI Incorporation",
            duration: "4–6 days",
            description: "ROC processes incorporation forms and issues COI.",
          },
        ],
        totalTime: "7–10 working days",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Our Services?",
        description: [
          "Expert guidance through each MCA compliance step",
          "End-to-end support: documentation, filings, post-incorporation",
          "High success rate and transparent pricing",
        ],
        points: [
          "Personalized project manager",
          "Dedicated legal & CA support",
          "Timely follow-ups with authorities",
        ],
        footerText:
          "Ensure smooth incorporation and compliance with our turnkey solutions.",
      },
    ],
    faq: [
      {
        question: "What is a Private Limited Company?",
        answer:
          "A Private Limited Company is a separate legal entity with limited liability, registered under the Companies Act, 2013.",
      },
      {
        question: "How many shareholders are required?",
        answer: "Minimum 2 and maximum 200 shareholders.",
      },
      {
        question: "Who can be a director?",
        answer:
          "At least two directors, one of whom must be an Indian resident, aged 18 or above, with valid DIN, DSC, and PAN.",
      },
      {
        question: "What is the processing time?",
        answer:
          "Typically 7–10 working days, depending on ROC workload and document accuracy.",
      },
      {
        question: "Is GST registration mandatory?",
        answer:
          "Yes, GST registration is required if your turnover exceeds the prescribed threshold or you engage in inter-state supply.",
      },
    ],
  },
  "fssai-central-license": {
    title: "FSSAI Central License: A Complete Overview",
    description:
      "The Food Safety and Standards Authority of India (FSSAI) enforces food safety regulations under the Food Safety and Standards Act, 2006, monitoring every stage of the food supply chain to ensure public health and consumer protection.",
    overview: [
      {
        heading: "Role & Origin of FSSAI",
        content: `Established under the Food Safety and Standards Act, 2006, FSSAI sets and enforces food safety standards, issues mandatory licenses, advises the government on food policy, and takes legal action against adulteration and other violations.`,
      },
      {
        heading: "Who Needs a Central License?",
        content: `Food Business Operators (FBOs) with annual turnover exceeding ₹20 Crores, those engaged in import/export of food products, or operating e-commerce food platforms must obtain an FSSAI Central License to operate legally in India.`,
      },
    ],
    benefits: [
      {
        heading: "Key Benefits",
        content: `- Global Recognition: Enhances credibility nationally and internationally  
  - Ease of Expansion: Simplifies opening new outlets and securing funding  
  - Legal Protection: Demonstrates compliance with food safety standards  
  - Consumer Trust: Builds confidence and market advantage`,
      },
    ],
    Listicles: [
      {
        category: "Businesses Requiring a Central License",
        documents: [
          "Multi-state FBOs with turnover > ₹20 Crores",
          "Importers/exporters of food products",
          "E-commerce platforms (Zomato, Swiggy, Amazon, Flipkart)",
          "5-star & 7-star hotels",
          "Nutraceuticals & health supplement manufacturers",
          "Transporters with >100 vehicles",
          "High-capacity dairy units (≥50,000 L solids/yr)",
          "Vegetable oil processors (≥2 MT/day)",
          "Slaughterhouses (50 large/150 small/1,000 poultry/day)",
          "Meat/food processing units (≥50 kg or ≥2 MT/day)",
          "Cold storage (≥1,000 MT capacity)",
          "Wholesalers (turnover > ₹30 Crores)",
          "Retailers & distributors (turnover > ₹20 Crores)",
        ],
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Essential Criteria",
        content: `• Annual turnover exceeding ₹20 Crores  
  • Operations across multiple states  
  • Production capacity beyond prescribed thresholds  
  • Engaged in import/export or e-commerce sale of food items`,
      },
      {
        heading: "Special Conditions",
        content: `• Businesses in nutraceuticals & health supplements  
  • Transport operators with >100 vehicles  
  • 5-star and 7-star hotels`,
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content: `• Form B (filled & signed)  
  • Facility floor plan with measurements  
  • List of key management personnel + residential proof  
  • MOA, AOA & Certificate of Incorporation (for companies)  
  • Partnership deed or trust deed (if applicable)  
  • Utility bills as address proof  
  • Food Safety Management System (FSMS) plan  
  • List of machinery & equipment  
  • Raw material supplier details  
  • NOC from local authorities  
  • Tourism certificate (for hotels)  
  • Import Export Code (IEC)  
  • Turnover declaration (if > ₹20 Crores)`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Process",
        content: `1. Submit Form B to the Licensing Authority, ensuring eligibility criteria are met.  
  2. FSSAI reviews application and documents; resolve any discrepancies.  
  3. On-site premises inspection by FSSAI officials.  
  4. Upon approval, receive your Central License certificate (display prominently).`,
      },
    ],
    renewal: {
      heading: "Validity & Renewal",
      content: [
        "Valid for 1–5 years; fees increase with longer validity. Renew at least 30 days before expiry to avoid penalties.",
        "Renewal documents: recent passport photo, government ID proof, PAN Card, address proof, land deed or rent agreement + NOC (if rented).",
      ],
    },
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "End-to-end assistance for all FSSAI licenses",
          "Efficient management of paperwork and follow-ups",
          "Real-time application tracking with full transparency",
        ],
        points: [
          "Experienced licensing consultants",
          "High success rate and timely delivery",
          "Transparent pricing with no hidden charges",
        ],
      },
    ],
    faq: [
      {
        question: "How can I obtain a Central FSSAI License?",
        answer:
          "Submit Form B with required documents, undergo review and inspection, and receive your license upon approval.",
      },
      {
        question: "Who needs an FSSAI Central License?",
        answer:
          "FBOs with turnover > ₹20 Crores, multi-state operators, importers/exporters, and large e-commerce food sellers.",
      },
      {
        question: "Can I convert my State License to Central?",
        answer:
          "Yes—apply anew for the Central License once you meet the criteria.",
      },
      {
        question: "What are the three types of FSSAI licenses?",
        answer:
          "Basic Registration for small operators, State License for medium businesses, and Central License for large/multi-state operations.",
      },
      {
        question: "How long does it take to get the Central License?",
        answer:
          "Typically 30–60 days, depending on document completeness, verification, and inspection schedules.",
      },
    ],
  },
  "nidhi-company-registration": {
    title: "Nidhi Company Registration – A Quick Guide",
    description:
      "A Nidhi Company is a member-based non-banking financial entity incorporated under the Companies Act, 2013 and governed by the Nidhi Rules, 2014. It promotes savings and financial discipline by accepting deposits and granting loans exclusively to its members.",
    overview: [
      {
        heading: "What Is a Nidhi Company?",
        content: `A Nidhi Company is a type of NBFC formed under Section 406 of the Companies Act, 2013, to foster a culture of savings and mutual benefit among its members.  
  It accepts deposits and provides loans only to its members, building financial security within a close-knit community.`,
      },
      {
        heading: "Purpose of Nidhi Companies",
        content: `Nidhi Companies promote responsible financial habits by accepting deposits and offering loans exclusively within their membership.  
  Though classified as NBFCs, they are exempt from most RBI regulations, operating under a member-centric model and the Nidhi Rules, 2014.`,
      },
      {
        heading: "Key Requirements",
        content: `• At least 7 members and 3 directors at incorporation  
  • Maximum 200 members  
  • Minimum paid-up capital of ₹10 lakhs  
  • Net Owned Funds (NOF) of ₹20 lakhs within 120 days  
  • Maintain ≥10% of deposits as unencumbered term deposits  
  • NOF to deposits ratio ≤ 1:20 (excluding intangible assets & accumulated losses)  
  • Fixed deposits ≥10% of total deposits in a nationalized bank`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Registering a Nidhi Company",
        content: `- Simple, cost-effective formation process  
  - Minimal RBI compliance requirements  
  - Low financial risk: transactions only among members  
  - Encourages savings and financial discipline  
  - Self-reliant funding model using net-owned funds`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content: `• Photographs of promoters and members  
  • PAN & identity proof (Aadhaar, Passport, Voter ID, or DL)  
  • Address proof (latest utility bill or bank statement)  
  • Business premises proof & NOC (if rented)  
  • Property deed or rent agreement  
  • DIR-2 consent to act as director  
  • DSC & DIN of all directors  
  • Director specimen signatures  
  • Subscriber sheet signed by shareholders  
  • Company registration questionnaire`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process",
        content: `1. Obtain DSC & DIN for directors (skip if already held).  
  2. Draft MOA & AOA defining objectives and governance.  
  3. Apply for name approval via SPICe+ Part A (submit 3 name options).  
  4. File SPICe+ Part B with incorporation details and documents.  
  5. Receive Certificate of Incorporation (COI) with CIN.  
  6. Within 120 days, meet member (200) & NOF (₹20L) requirements.  
  7. File Form NDH-4 to obtain formal Nidhi status (extension via Form NDH-2 if needed).`,
      },
      {
        heading: "Mandatory Compliance",
        content: `• File Form NDH-1 annually within 90 days of FY end.  
  • File Form NDH-3 (half-yearly returns) with CA/CS certificate.  
  • Hold quarterly Board meetings & annual AGM.  
  • File AOC-4 & MGT-7 annually.  
  • Maintain statutory books of accounts.  
  • File Income Tax Return by September 30 each year.  
  • Ensure locker rental income <20% of total income.`,
      },
    ],
    feesStructure: [
      {
        heading: "Registration Fees",
        description:
          "Government fees for DIN, DSC, SPICe+ filing, and statutory forms typically range from ₹10,000 to ₹15,000 (ex-GST), excluding professional charges.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Nidhi Company Registration",
        description:
          "The process generally takes 30–45 days, depending on document readiness and online form approvals.",
        totalTime: "30–45 days",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "End-to-end support for Nidhi Company incorporation",
          "Expert handling of MCA filings and compliance",
          "Real-time application tracking with full transparency",
        ],
        points: [
          "High client satisfaction and retention",
          "Average 4.3+ rating on Google",
          "100+ Nidhi Companies successfully registered",
          "Backed by 200+ experienced professionals",
        ],
      },
    ],
    faq: [
      {
        question: "What is the full form of Nidhi?",
        answer:
          "Nidhi means 'treasure' in Hindi, reflecting its mission of mutual benefit.",
      },
      {
        question: "Who regulates Nidhi Companies?",
        answer:
          "They are governed by the MCA under the Companies Act, 2013 and Nidhi Rules, 2014.",
      },
      {
        question: "How many members are required initially?",
        answer:
          "A minimum of 7 members and 3 directors are required at incorporation.",
      },
      {
        question: "Can a Nidhi Company operate across states?",
        answer:
          "Yes, but it must comply with the ROC jurisdictional requirements and maintain a branch setup.",
      },
      {
        question: "What activities are prohibited?",
        answer:
          "Chit funds, hire-purchase, leasing, insurance, securities trading, and transactions with non-members.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Typically 30–45 days, subject to document accuracy and form approvals.",
      },
    ],
  },
  "producer-company-registration": {
    title: "Farmer Producer Company Registration in India – A Complete Guide",
    description:
      "A Farmer Producer Company (FPC) combines the cooperative ethos with the legal advantages of a private company under the Companies Act, 2013. It empowers primary producers to collectively manage production, procurement, processing and marketing, unlocking funding, tax exemptions and market access.",
    overview: [
      {
        heading: "What Is a Producer Company?",
        content: `A Producer Company is a legal entity under the Companies Act, 2013 designed for farmers, artisans and rural producers.  
  It enables members to jointly handle harvesting, processing, grading, pooling, marketing, procurement and sale of their produce, while enjoying shared ownership, democratic decision-making and profit distribution.`,
      },
      {
        heading: "Objectives of FPC Registration",
        content: `• Collective management of agricultural activities (harvest, processing, marketing)  
  • Access to credit, insurance and financial services for members  
  • Educational and technical support (training, advisory services)  
  • Fostering unity, cooperation and shared growth  
  • Driving agricultural innovation for sustainability`,
      },
      {
        heading: "Legal Framework",
        content: `• Regulated under Section 465 of the Companies Act, 2013 (and certain provisions of Part IXA of the 1956 Act)  
  • Must adhere to objectives in Section 581B of the Companies Act, 1956  
  • Comply with MCA filings, governance and transparency norms for FPCs`,
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of FPC Registration",
        content: `1. Limited liability for members  
  2. Eligibility for government grants, subsidies and schemes  
  3. Distinct legal entity status for contracts and property  
  4. Tax exemptions (up to ₹100 Cr turnover) and lower rates  
  5. Easier access to capital via shares, debentures or bonds  
  6. Improved market reach and pricing power  
  7. Access to modern technologies and machinery  
  8. Simplified bank loans and institutional funding`,
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Incorporation Requirements",
        content: `• Minimum 10 individual members (all primary producers)  
  • At least 5 directors (⅔ must be producer-members)  
  • Minimum paid-up capital of ₹5 lakhs  
  • Name must end with “Producer Company Limited”  
  • Registered office address in India  
  • PAN and TAN for the company`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content: `• PAN & Aadhaar of all directors and members  
  • Passport-size photographs  
  • Proof of registered office (utility bill or rent agreement + NOC)  
  • MoA & AoA copies  
  • DSC & DIN for all directors  
  • DIR-2 consent forms  
  • Producer Certificate or registration (if pre-formed)  
  • Subscriber sheet signed by shareholders  
  • Company registration questionnaire`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Process",
        content: `1. Select company type & reserve name (SPICe+ Part A)  
  2. Obtain DIN & DSC for directors  
  3. Draft and file MoA & AoA  
  4. File SPICe+ Part B with incorporation details & documents  
  5. Receive Certificate of Incorporation (COI)  
  6. Within 120 days, meet member (≥200) & NOF (₹20 lakhs) conditions  
  7. File Form NDH-4 for formal Nidhi status (extension via NDH-2 if needed)`,
      },
      {
        heading: "Mandatory Compliance",
        content: `• Annual AGM and board meetings (min. 4 per year)  
  • File annual returns (AOC-4, MGT-7) and NDH-1/NDH-3 as applicable  
  • Maintain books of account and file ITR by Sept 30  
  • Limit locker rental income <20% of total income`,
      },
    ],
    feesStructure: [
      {
        heading: "Registration Fees",
        description:
          "Government fees (DIN, DSC, SPICe+ filings, NDH forms) typically range from ₹15,000 to ₹50,000, excluding professional charges.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Register",
        description:
          "With complete documentation and prompt filings, FPC registration usually takes 25–30 working days.",
        totalTime: "25–30 days",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "End-to-end FPC incorporation support",
          "Expert handling of MCA compliance",
          "Real-time application tracking",
        ],
        points: [
          "Trusted by 5,000+ farmers & agripreneurs",
          "75% market share in FPC registrations",
          "Zero delays & error-free filings",
          "Post-formation compliance support",
        ],
      },
    ],
    faq: [
      {
        question: "What is the motto of Producer Company Registration?",
        answer:
          "To empower farmers and producers by organizing them into a structured entity that enhances income, market access and sustainable practices.",
      },
      {
        question: "How long does incorporation take?",
        answer:
          "Approximately 25–30 working days, depending on document readiness and approvals.",
      },
      {
        question: "Who governs Producer Companies?",
        answer:
          "Section 465 of the Companies Act, 2013 and relevant provisions of Part IXA of the 1956 Act, under ROC oversight.",
      },
      {
        question: "Can cooperative societies convert to FPCs?",
        answer:
          "Yes, primary producer cooperatives can convert under the Companies Act, 2013 provisions.",
      },
      {
        question: "What activities are prohibited?",
        answer:
          "Speculative or unrelated commercial ventures not tied to primary produce are strictly forbidden.",
      },
    ],
  },
  "conversion-of-sole-proprietorship": {
    title:
      "Conversion of Sole Proprietorship into a Private Limited Company – An Overview",
    description:
      "Many entrepreneurs start as sole proprietors due to minimal compliance, but as they scale, converting into a private limited company provides enhanced credibility, limited liability, access to funding, and perpetual succession.",
    overview: [
      {
        heading: "Why Convert to a Private Limited Company?",
        content: `A private limited company offers a separate legal identity under the Companies Act, 2013, protecting personal assets with limited liability. It enables easier fundraising, share transferability, and better governance—critical for growing businesses.`,
      },
      {
        heading: "Conversion Mechanism",
        content: `Conversion involves incorporating a new private limited company, executing a formal takeover agreement to transfer assets and liabilities, mentioning the takeover in the MoA, and appointing the sole proprietor as a director with at least 50% shareholding.`,
      },
      {
        heading: "Basic Legal Requirements",
        content: `• Minimum two directors and two shareholders  
  • Unique company name approved by ROC  
  • No minimum share capital required  
  • Registered office with address proof or NOC  
  • MoA must include 'takeover of sole proprietorship' objective  
  • Filing of annual returns and financial statements with ROC  
  • DIN & DSC for all directors`,
      },
    ],
    benefits: [
      {
        heading: "Advantages of Conversion",
        content: `- Separate legal entity and legal recognition  
  - Limited liability protection for shareholders  
  - Easier access to equity funding, loans, and VC  
  - Transferability of shares for seamless ownership changes  
  - Corporate tax benefits and deductions  
  - Perpetual succession irrespective of ownership changes  
  - Ability to attract talent via ESOPs  
  - Enhanced credibility with customers, partners, and investors`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Key Conditions for Conversion",
        content: `• Execute a formal takeover agreement between the proprietorship and new company  
  • MoA must state the takeover as an objective  
  • Transfer all assets and liabilities in full  
  • Sole proprietor to hold ≥50% shares for at least 5 years  
  • No additional benefits beyond agreed share value`,
      },
      {
        heading: "Step-by-Step Conversion Process",
        content: `1. Complete slump sale formalities to transfer business assets/liabilities  
  2. Obtain DIN & DSC for all directors  
  3. Reserve and approve company name via MCA (SPICe+ Part A)  
  4. Draft MoA & AoA, including takeover clause  
  5. File SPICe+ Part B with incorporation forms and documents  
  6. Receive Certificate of Incorporation (COI) with CIN  
  7. Apply for PAN & TAN for the new company  
  8. Open/update bank account in the company’s name`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents for Directors",
        content: `• PAN, Aadhaar or Passport (identity proof)  
  • Address proof (bank statement, utility bill)  
  • Recent passport-size photo  
  • Director specimen signature  
  • DIR-2 consent form`,
      },
      {
        heading: "Business Premises Documents",
        content: `• Property deed or tax receipt (ownership proof)  
  • Rent/lease agreement + NOC (if rented)  
  • Recent utility bills as address proof`,
      },
      {
        heading: "Company Formation Documents",
        content: `• Memorandum of Association (MoA) with takeover clause  
  • Articles of Association (AoA)  
  • Registered office address details  
  • Details of directors (DIN, DSC, address, signature)`,
      },
    ],
    whyUs: [
      {
        heading: "How Dostartup Assists You",
        description: [
          "Customized service plans for smooth conversion",
          "Dedicated expert handling of all filings",
          "End-to-end support from agreement drafting to COI delivery",
        ],
        points: [
          "Step-by-step legal advisory",
          "Document review & error-free filing",
          "Transparent pricing and real-time tracking",
        ],
      },
    ],
    faq: [
      {
        question:
          "Can I convert my proprietorship without selling my business?",
        answer:
          "Yes—conversion is a restructuring, not a sale. Transfer is via slump sale without monetary exchange.",
      },
      {
        question: "Do I need to pay stamp duty on asset transfer?",
        answer:
          "Stamp duty depends on state laws. Asset transfers under slump sale may attract duty—consult your state’s stamp act.",
      },
      {
        question: "How long must I hold shares post-conversion?",
        answer:
          "The sole proprietor must retain at least 50% shareholding for a minimum of five years.",
      },
      {
        question: "Are licences transferable to the new company?",
        answer:
          "Most licences require fresh applications in the company’s name; some may allow modification—verify with issuing authority.",
      },
      {
        question: "Can I continue both entities post-conversion?",
        answer:
          "Technically yes, but to avoid compliance and tax complications, fully transfer operations to the new company.",
      },
    ],
  },
  "indian-subsidiary-company-registration": {
    title: "Indian Subsidiary Company Registration in India",
    description:
      "An Indian Subsidiary Company is a company incorporated in India that is majorly owned or controlled by a foreign parent company, governed by the Companies Act, 2013 and relevant FEMA/SEBI regulations.",
    overview: [
      {
        heading: "What Is an Indian Subsidiary Company?",
        content: `Per Section 2(87) of the Companies Act, 2013, a company is a subsidiary if a foreign parent holds >50% equity or can appoint/remove a majority of its directors.  
  This structure lets global businesses operate in India under a regulated, separate legal entity model.`,
      },
      {
        heading: "Types of Subsidiary Structures",
        content: `• Wholly Owned Subsidiary (WOS): 100% foreign ownership (auto-route sectors only).  
  • Partially Owned Subsidiary: 50–99% foreign shareholding with Indian partners.  
  • Joint Venture Subsidiary: Shared control between foreign and Indian entities.  
  • Liaison Office: Representative, non-commercial presence.  
  • Branch Office: Commercial operations subject to RBI approval.`,
      },
      {
        heading: "Legal & Regulatory Framework",
        content: `• Companies Act, 2013: Defines subsidiary control, board & reporting obligations.  
  • SEBI LODR, 2015: Disclosure requirements for listed entities and their material subsidiaries.  
  • FEMA: Governs FDI & repatriation.  
  • MCA guidelines: Company incorporation & ROC compliance.`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of an Indian Subsidiary",
        content: `- Easy market penetration in one of the fastest-growing consumer markets  
  - Attractive FDI policies via automatic/approval routes  
  - Perpetual succession and separate legal status  
  - Limited liability protection for shareholders  
  - Operational autonomy with property-holding and contracting powers`,
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Eligibility Criteria",
        content: `• ≥2 directors (≥1 resident Indian) with DIN & DSC  
  • ≥2 shareholders (individuals or entities)  
  • No minimum capital requirement  
  • Foreign parent must hold ≥50% equity  
  • RBI approval for FDI as required  
  • Compliance with MCA & ROC regulations`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content: `• Proof of registered office (utility bill or rent agreement + NOC)  
  • ID & address proof of directors/shareholders (PAN, passport, driver’s license, utility bill)  
  • MoA & AoA  
  • Parent company’s Certificate of Incorporation  
  • Power of Attorney for authorized representative  
  • DSCs & DINs of directors  
  • Shareholding declarations`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process",
        content: `1. Reserve company name via SPICe+ Part A.  
  2. Obtain DIN & DSCs for all proposed directors.  
  3. Draft and file MoA, AoA & SPICe+ Part B with shareholding structure.  
  4. Receive Certificate of Incorporation (COI) & CIN.  
  5. Open a bank account in India (within ~7 days).  
  6. Complete GSTIN, PAN, TAN, EPFO & ESIC registrations.`,
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Incorporate",
        description:
          "Typically 2–4 months, including name approval, documentation, and statutory clearances.",
        totalTime: "2–4 months",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "10+ years of industry expertise",
          "400+ in-house CAs, CSs & legal experts",
          "99% on-time service delivery",
          "Presence in 10,000+ PIN codes",
          "Trusted by 100,000+ global brands",
          "3,500+ advisors across 50+ locations",
        ],
      },
    ],
    faq: [
      {
        question: "Can a foreign parent hold 100% equity?",
        answer:
          "Yes—only in sectors permitting 100% FDI via the automatic route.",
      },
      {
        question: "Is RBI approval always required?",
        answer:
          "RBI approval is required where FDI is not permitted automatically.",
      },
      {
        question: "How many directors are needed?",
        answer:
          "At least two directors, one of whom must be an Indian resident.",
      },
      {
        question: "What is the cost of registration?",
        answer:
          "Typically between ₹50,000–₹1,00,000, depending on professional & government fees.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Generally 2–4 months, depending on document preparedness and approvals.",
      },
    ],
  },
  "llp-to-private-company-conversion": {
    title:
      "Conversion of LLP to Private Limited Company in India – A Complete Guide",
    description:
      "Convert your LLP into a Private Limited Company under Section 366 of the Companies Act, 2013. Enjoy enhanced funding options, 100% FDI, ESOPs, and limited liability while retaining your brand identity.",
    overview: [
      {
        heading: "Why Convert an LLP to a Private Limited Company?",
        content: `• Enable business expansion and attract venture capital or foreign investments  
  • Issue equity shares and offer ESOPs to attract skilled talent  
  • Carry forward unabsorbed losses and depreciation  
  • Gain legal credibility and access better funding opportunities  
  • Maintain business continuity with the same brand name  
  • Limit liabilities strictly to unpaid share capital`,
      },
      {
        heading: "Legal Basis for Conversion",
        content: `Although the LLP Act, 2008 doesn’t directly allow conversion, Section 366 of the Companies Act, 2013 and the Companies (Authorised to Register) Rules, 2014 provide the framework for LLP-to-Private Company transformation.`,
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Conditions for Conversion",
        content: `• Minimum two partners in the LLP, eligible to become directors  
  • Unanimous approval of all partners  
  • All statutory returns filed up to date  
  • Publication of conversion notice in two newspapers (English & regional)  
  • No Objection Certificate (NOC) from the LLP Registrar`,
      },
    ],
    benefits: [
      {
        heading: "Advantages of Conversion",
        content: `• 100% FDI permitted in Private Limited Companies  
  • No capital gains tax on conversion  
  • Seamless transfer of losses and depreciation  
  • Authority to offer ESOPs to employees  
  • Enhanced ability to raise equity capital  
  • Retain continuity with the same name + “Pvt. Ltd.” suffix`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content: `• Address proof, ID proof & passport-size photo of applicant  
  • Copy of LLP’s latest filed returns  
  • NOC from partners and the Registrar  
  \n**For Form URC-1:**  
  • List of shareholders & shareholding details  
  • List of first directors with IDs  
  • Directors’ affidavits under Section 164  
  • Copy of LLP agreement & registration certificate  
  • Share distribution & subscription statements  
  • Audited financial statements (≤6 days old)  
  • Newspaper advertisement of public notice`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Conversion Process",
        content: `1. **Name Approval:** Apply on MCA portal for ROC name approval.  
  2. **Obtain DSC & DIN:** Secure Digital Signature Certificates & Director IDs.  
  3. **File Form URC-1:** Submit URC-1 with all documents to ROC.  
  4. **Draft MOA & AOA:** Prepare and file Memorandum & Articles once URC-1 is approved.  
  5. **Certificate of Incorporation:** ROC issues COI, completing the conversion.`,
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "10+ years of experience in corporate conversions",
          "3500+ expert advisors across 50+ offices",
          "Free consultation and lowest fee plans",
          "End-to-end compliance support",
        ],
      },
    ],
  },
  "convert-partnership-to-privateLtd": {
    title:
      "Conversion of Partnership Firm into a Private Limited Company – A Quick Guide",
    description:
      "As businesses grow, converting a Partnership Firm into a Private Limited Company under the Companies Act, 2013 offers limited liability protection, enhanced credibility, perpetual succession, and easier access to capital.",
    overview: [
      {
        heading: "Overview of Conversion",
        content: `Entrepreneurs often start with a Partnership Firm for lower costs and minimal compliance.  
  Converting to a Private Limited Company transforms it into a separate legal entity—protecting personal assets (except in fraud), enabling share-based ownership, and unlocking funding opportunities.`,
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Key Requirements",
        content: `• At least two directors and two shareholders  
  • Registered partnership deed with the Registrar of Firms  
  • No Objection Certificate (NOC) from all secured creditors  
  • Unique company name ending with “Private Limited” or “Pvt. Ltd.”  
  • Minimum capital contribution as per rules  
  • Valid registered office address  
  • Drafted MOA & AOA in line with company objectives`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Conversion",
        content: `• Separate Legal Entity with higher credibility  
  • Limited Liability Protection for shareholders  
  • Perpetual Succession ensuring business continuity  
  • Easier Fundraising through share issuance  
  • Simple Transfer of Ownership via share transfers  
  • Tax Relief on asset transfers during conversion  
  • Stricter Governance and Transparency under the Companies Act  
  • Seamless Asset & Liability Transfer to the new company  
  • Internal Control safeguarded against hostile takeovers`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents for URC-1 (Conversion Application)",
        content: `1. Member & Director details (names, addresses, occupations, shareholdings)  
  2. Affidavits by first directors (Section 164(1) compliance)  
  3. Partnership deed and registration certificate  
  4. Statement of Assets & Liabilities by a CA (≤30 days old)  
  5. Income Tax filings of the partnership  
  6. Newspaper advertisement proof  
  7. NOC from secured creditors  
  8. Partner consents for conversion  
  9. Share capital declaration (nominal capital, shares taken, amount paid, proposed company name)`,
      },
      {
        heading: "Documents for SPICe+ (Incorporation)",
        content: `1. DIR-2 declarations (director consent)  
  2. KYC (ID & address proof) of directors & shareholders  
  3. NOC from property owner (if premises rented)  
  4. Proof of business address (rent agreement/lease deed)  
  5. Latest utility bill (≤2 months old) as address proof`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Conversion Process",
        content: `1. Hold partners’ meeting (¾ consent) & authorize team for conversion  
  2. Obtain secured creditors’ NOCs  
  3. Apply for DSC & DIN for all proposed directors  
  4. Reserve company name via RUN form on MCA portal  
  5. File E-Form URC-1 (within 30 days of name approval) with required documents  
  6. Publish incorporation advertisement in two newspapers (English & vernacular)  
  7. Draft and file MOA & AOA after URC-1 approval  
  8. Submit SPICe+ (INC-32) with MOA, AOA, and supporting documents  
  9. Receive Certificate of Incorporation (COI) and CIN`,
      },
    ],
    whyUs: [
      {
        heading: "How Dostartup Assists Your Conversion",
        description: [
          "Customized service plans to fit your budget and needs",
          "End-to-end document review and compliance guidance",
          "Dedicated legal advisory & step-by-step support",
        ],
        points: [
          "Experts in MCA filings and conversion formalities",
          "Real-time application tracking and updates",
          "High success rate with seamless execution",
        ],
      },
    ],
    faq: [
      {
        question: "Can an unregistered partnership convert?",
        answer:
          "No—only a partnership firm registered with the Registrar of Firms can convert under Section URC-1.",
      },
      {
        question: "Is NOC from creditors mandatory?",
        answer:
          "Yes—written NOCs from all secured creditors are required before filing URC-1.",
      },
      {
        question: "How many partners are needed post-conversion?",
        answer:
          "At least two directors and two shareholders must be in place for the new Private Limited Company.",
      },
      {
        question: "What is the timeline for conversion?",
        answer:
          "Typically 30–45 days, subject to name approval, documentation, and form processing.",
      },
      {
        question: "Does share capital need alteration?",
        answer:
          "Yes—the new company must declare its nominal share capital and shares taken in URC-1.",
      },
    ],
  },
  "winding-up-private-limited-company": {
    title: "Overview of Winding Up a Private Limited Company",
    description:
      "Learn the legal and procedural steps to close a Private Limited Company in India, including voluntary and compulsory winding up under the Companies Act, 2013.",
    overview: [
      {
        heading: "Winding Up of a Private Limited Company – Explained",
        content: `Winding up a Private Limited Company is the formal process of dissolving its business operations and legal existence. It may be driven by insolvency, inactivity, or a strategic decision. During liquidation, assets are sold to repay debts, and any surplus is distributed among shareholders.

Initiating the winding up process promptly is crucial to avoid penalties, fines, or director disqualification. Under Section 270 of the Companies Act, 2013, a Private Limited Company can be wound up voluntarily or by an order of the National Company Law Tribunal (NCLT).`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Winding Up a Private Limited Company",
        content: `• Relief from financial and legal liabilities: Directors and officers are discharged from future obligations once debts are cleared.
• Prevention of legal consequences: Voluntary winding up can help avoid lawsuits, fines, and forced strike‑off by ROC.
• Cost‑effective closure: Liquidation costs are generally limited to asset realization expenses.
• Termination of lease agreements: Existing leases are cancelled, and dues are settled through asset sales.
• Fair recovery for creditors: Creditors receive part or full amounts owed via asset liquidation.`,
      },
    ],
    Listicles: [
      {
        category: "Reasons for Winding Up a Private Limited Company",
        documents: [
          "Inability to repay debts or persistent insolvency",
          "Passing of a special resolution by shareholders",
          "Engagement in illegal or unlawful activities",
          "Proven fraudulent practices by the company or its members",
          "Defaulting on ROC filings for five consecutive years",
          "Directive from NCLT deeming winding up just and equitable",
          "Provisions in the Articles of Association mandating dissolution",
          "Voluntary dissolution due to inactivity, lack of business, or strategic reasons",
        ],
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Winding Up",
        content: `• Consent from all creditors of the company
• Indemnity bond notarized and signed by all directors
• Statement of assets and liabilities certified by a Chartered Accountant
• Affidavit from company directors affirming intent to wind up
• Certified True Copy (CTC) of the special resolution passed by the board
• Digital Signatures (DSC) of all directors
• PAN and Aadhaar cards of all directors
• Consent letters from each director
• Statement of pending litigations, if any
• No Objection Certificate (NOC) from the Income Tax Department`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Voluntary Winding Up",
        content: `Voluntary winding up occurs when shareholders decide to dissolve a solvent or insolvent company.

Members’ Voluntary Winding Up (Solvent Company)
• Directors must declare solvency via affidavit within five weeks before passing the resolution.
• Latest financial statements and statement of assets & liabilities must be filed with ROC.
• Shareholders pass a special resolution in a general meeting (3/4th majority required).
• A liquidator is appointed to realize assets and settle debts.
• Remaining assets are distributed among shareholders.

Creditors’ Voluntary Winding Up (Insolvent Company)
• Pass a winding up resolution in the general meeting.
• Hold a creditors’ meeting; if two‑thirds of creditors approve, appoint a liquidator.
• Form a Committee of Inspection (if required) to oversee liquidation.

Step‑by‑Step Voluntary Procedure:
1. Board meeting: Directors declare solvency (if applicable) and schedule a general meeting within five weeks.
2. Issue notice: Notify all members and creditors about the general meeting.
3. General meeting: Pass the resolution (ordinary for creditors’, special for members’ voluntary).
4. Creditors’ meeting: Convened after the general meeting; if two‑thirds of creditors disapprove, winding up cannot proceed.
5. ROC notification: Inform Registrar of Companies within ten days of resolution.
6. Liquidator appointment: Registrar appoints a liquidator to manage asset realization and debt settlement.
7. Liquidator’s report: Liquidator prepares a report and final accounts; call a final general meeting.
8. Tribunal review: Liquidator submits the report to NCLT within 14 days; NCLT issues a dissolution order within 60 days.
9. ROC filing: Liquidator forwards the dissolution order to ROC within 30 days.
10. Official Gazette notification: ROC publishes the final winding‑up notice in the Official Gazette.`,
      },
      {
        heading: "Compulsory Winding Up",
        content: `Compulsory winding up is ordered by NCLT when a company is involved in unlawful or non‑compliant activities.

Eligible petitioners:
• The company itself
• Registrar of Companies (ROC)
• Creditors
• Central or State Government
• Shareholders or contributors

Procedure:
1. Filing of petition: Submit a winding‑up petition to NCLT or court along with a detailed Statement of Affairs.
2. Review of petition: Tribunal scrutinizes the petition; if valid, it accepts and proceeds.
3. Liquidator appointment: Tribunal appoints a liquidator to take control of assets and liabilities.
4. Execution of assets: Liquidator reviews financial records, realizes assets, and drafts a liquidation report.
5. Committee review: Draft report is submitted to the Winding‑Up Committee for review and approval.
6. Final report submission: Approved report is filed with NCLT or court for issuing a dissolution order.
7. ROC filing: Liquidator files the Tribunal’s dissolution order with ROC within 30 days.
8. Strike‑off from register: ROC formally strikes off the company’s name from its records.
9. Gazette notification: Final winding‑up notice is published in the Official Gazette, confirming closure.`,
      },
      {
        heading: "Companies (Winding‑Up) Rules, 2020 – Overview",
        content: `Effective from April 1, 2020, under the Companies Act, 2013, these rules standardize formats and procedures for winding up by tribunal (Section 271) and the summary procedure (Section 361). They ensure compliance by providing clear guidelines for petitions, liquidation reports, and timelines.`,
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup for Winding Up Services?",
        description: [
          "Customized plan with expert legal guidance",
          "End-to-end support for drafting declarations and petitions",
          "Efficient management of all regulatory and compliance procedures",
        ],
        points: [
          "Dedicated team of corporate law specialists",
          "High success rate with minimum turnaround time",
          "Transparent pricing with no hidden charges",
        ],
      },
    ],
    faq: [
      {
        question: "What are the main reasons companies choose to wind up?",
        answer:
          "Common reasons include financial losses, regulatory non‑compliance, business inactivity, or a voluntary decision by shareholders or directors.",
      },
      {
        question: "What happens if a company fails to wind up officially?",
        answer:
          "Failure to wind up can lead to legal penalties, director disqualification, and forced strike‑off by the ROC.",
      },
      {
        question: "Which companies are eligible for fast‑track winding up?",
        answer:
          "Startups, small companies (not older than 10 years), and firms with assets not exceeding ₹1 crore can opt for the summary procedure under Section 361.",
      },
      {
        question: "Which companies cannot opt for voluntary winding up?",
        answer:
          "Companies under investigation, those with unresolved legal disputes, or those that haven’t filed annual returns or financial statements are ineligible for voluntary winding up.",
      },
      {
        question:
          "What is the language requirement for winding‑up petition advertisements?",
        answer:
          "Advertisements must be published in English and a vernacular newspaper, using clear, formal, and legally compliant language as per the Companies (Winding‑Up) Rules, 2020.",
      },
      {
        question:
          "What benefit do the Companies (Winding‑Up) Rules, 2020 provide?",
        answer:
          "They offer a structured, standardized process for winding up, reducing ambiguity and ensuring smooth compliance with legal requirements.",
      },
      {
        question:
          "What obligations must a company fulfill before initiating winding up?",
        answer:
          "The company must settle outstanding liabilities, prepare necessary declarations and financial statements, and pass a board or shareholder resolution approving the winding up.",
      },
      {
        question: "What is the summary procedure for liquidation?",
        answer:
          "A simplified process under Section 361 for eligible companies (small companies, startups, assets ≤ ₹1 crore) that reduces regulatory burden and accelerates closure.",
      },
      {
        question: "Which class of companies can opt for the summary procedure?",
        answer:
          "Small companies, startups (≤10 years old), and companies with assets not exceeding ₹1 crore qualify for the summary liquidation process under Section 361.",
      },
    ],
  },
  "closing-llp": {
    title:
      "Closing a Limited Liability Partnership (LLP): What You Need to Know",
    description:
      "Learn how to close a dormant or inactive LLP in India, including eligibility conditions, reasons, required documents, and step-by-step procedures under the LLP Act, 2008.",
    overview: [
      {
        heading: "Overview of Closing an LLP",
        content: `If an LLP has been inactive for over a year or never commenced operations post‑registration, it can apply for closure with the Registrar of LLPs to have its name removed from the official register. Maintaining a dormant LLP entails ongoing compliance costs; closing it avoids penalties for non‑compliance and unnecessary administrative burden.`,
      },
      {
        heading: "Conditions for Closing an LLP",
        content: `● The LLP has not commenced business since incorporation or has been inactive for at least one financial year.  
● There are no outstanding assets or liabilities in the LLP’s name at the time of application.  
● The LLP’s bank account (if any) has been closed.  
● All partners, creditors, and relevant authorities have given consent for closure.  
Meeting these conditions is necessary to proceed with the strike‑off process under MCA guidelines.`,
      },
    ],
    Listicles: [
      {
        category: "Top Reasons for Closing an LLP",
        documents: [
          "LLP formed for a specific objective that has been fulfilled",
          "Insolvency and inability to meet financial obligations",
          "LLP inactive or non‑operational for at least one year",
          "Closure mandated by a legal or court order",
          "Partners mutually decide to discontinue operations",
          "Death of one or more partners leading to dissolution",
        ],
      },
    ],
    benefits: [
      {
        heading: "Advantages of Closing an LLP",
        content: `• Simplified Compliance: No need for ongoing regulatory filings or maintenance.  
• No Future Penalties: Ensures the LLP is not liable for future fines or non‑compliance charges.  
• Better Resource Allocation: Frees up time, effort, and capital for more productive ventures.`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to Close an LLP",
        content: `✅ Registered Office Proof  
• Proof of the registered LLP address  
• NOC from landlord (if rented), along with rent agreement or utility bill  

✅ Statement of Accounts  
• CA‑certified statement of accounts showing nil assets and liabilities (not older than 30 days)  

✅ Income Tax Return  
• Acknowledgement of the latest ITR, if filed  

✅ LLP Agreement  
• Copy of the original LLP agreement and any amendments, if applicable  

✅ Affidavit by Designated Partners  
• Notarized affidavit declaring:  
  – The LLP has not commenced business or has ceased operations  
  – The LLP has no liabilities and agrees to indemnify future claims  
  – The LLP’s bank account (if any) has been closed (supported by bank closure certificate)  
  – No ITR filed if no business activity occurred  

✅ NOC from Creditors and Partners  
• NOC from secured creditors (if any) and from all partners  

✅ Detailed Application  
• Formal application stating LLP details and reasons for closure  

✅ Authority Letter  
• Authorization letter authorizing a partner to file the closure application (signed by all partners)  

✅ Indemnity Bond  
• Indemnity Bond signed by designated partners, taking responsibility for any future claims`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Method 1: Striking Off the LLP as Defunct",
        content: `1. Eligibility: LLP stopped operations for one year or more.  
2. File e‑Form 24 under Rule 37(1)(b) of the LLP Rules, 2008 to apply for strike‑off.  
3. Registrar may issue a notice and allow one month for response; if no response, name is struck off.  
4. Application or notice is published on the MCA website for public awareness for at least one month.`,
      },
      {
        heading: "Method 2: Winding Up of LLP",
        content: `Under Sections 63‑65 of the LLP Act, 2008:  
● Voluntary Winding Up: Partners mutually agree to wind up, settle liabilities, and distribute remaining assets.  
● Compulsory Winding Up: NCLT may order closure if:  
  – Number of partners falls below two for over six months  
  – Inability to pay debts  
  – Non‑filing of financial statements for five consecutive years  
  – Activities against national interest or other reasons deemed fit by the Tribunal`,
      },
      {
        heading: "Step‑by‑Step Process to Close an LLP",
        content: `1. Conduct a Meeting of Partners: Pass a resolution authorizing closure and appoint a Designated Partner to file with ROC.  
2. Settle All Liabilities: Clear all debts and liabilities before proceeding.  
3. File e‑Form 24 with ROC: Designated Partner submits e‑Form 24 with attachments:  
   • Board resolution for closure  
   • Consent from all partners and creditors (if any)  
   • Bank account closure statement  
   • Statement of assets & liabilities certified by a CA  
   • Indemnity bond and affidavit by partners  
   • Latest ITR acknowledgment  
   • Authorization letter for application submission  
   • Reasons for closure and business inactivity proof  
   • PAN and Aadhaar of partners, and PAN of LLP  
4. ROC Review: ROC verifies documents; may issue notice if discrepancies arise.  
5. Certificate of Closure: Upon approval, ROC issues a Certificate of Closure.  
6. Surrender PAN and TAN: Surrender the LLP’s PAN and TAN to the Income Tax Department.`,
      },
    ],
    whyUs: [
      {
        heading: "Why Trust Ctax for Closing Your LLP?",
        description: [
          "Expert guidance for drafting LLP closure resolutions and affidavits",
          "Over 10 years of proven experience in LLP closure services",
          "Comprehensive support in filing e‑Form 24 for official closure",
          "Assistance in striking off the LLP name from MCA records",
          "Professional help with all required closure documentation",
        ],
        points: [
          "Dedicated team of LLP compliance specialists",
          "Seamless end‑to‑end closure process",
          "100% transparent pricing with no hidden charges",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Limited Liability Partnership (LLP)?",
        answer:
          "An LLP is a business structure combining the limited liability of a company with the flexibility of a partnership, offering fewer compliance requirements than a private limited company.",
      },
      {
        question: "When should an LLP be closed?",
        answer:
          "An LLP should be closed if it is inactive, has not commenced business, or partners no longer intend to continue operations. Timely closure prevents penalties and compliance burdens.",
      },
      {
        question: "What is the ‘Strike‑Off’ method for closing an LLP?",
        answer:
          "The strike‑off method removes an LLP’s name from MCA records by filing e‑Form 24, provided the LLP is defunct with no assets or liabilities.",
      },
      {
        question: "How does e‑Form 24 help in LLP closure?",
        answer:
          "e‑Form 24 is used to apply for striking off a defunct LLP. Filing this form initiates the closure process, and the Registrar removes the LLP from the MCA database after verification.",
      },
      {
        question: "What are the conditions for striking off a defunct LLP?",
        answer:
          "The LLP must not have carried out business for at least one year, must have no outstanding liabilities, must have filed all pending returns (Form 8 and Form 11), and must have closed its bank account.",
      },
      {
        question:
          "Who is authorized to sign the closure application for an LLP?",
        answer:
          "The designated partners of the LLP must sign and file the closure application (e‑Form 24). Their Digital Signature Certificates (DSCs) are required.",
      },
      {
        question:
          "Is it mandatory to file all returns before applying for LLP closure?",
        answer:
          "Yes. All pending annual returns and statements of accounts must be filed, and there should be no outstanding government dues before submitting the closure application.",
      },
      {
        question: "Do LLPs need to file Income Tax Returns before closure?",
        answer:
          "Yes. The LLP must file income tax returns up to the financial year it was operational to ensure a smooth closure and avoid future legal complications.",
      },
      {
        question: "Is return filing required after applying for LLP closure?",
        answer:
          "Once the closure application is approved and the LLP is removed from MCA records, no further return filings are required.",
      },
    ],
  },
  "compliances-private-limited-company": {
    title:
      "Compliances for a Private Limited Company in India: A Quick Overview",
    description:
      "Adhering to statutory requirements under the Companies Act, 2013 and Income Tax Act is mandatory for all Private Limited Companies in India. This guide covers annual and event‑based compliance obligations to maintain legal standing and avoid penalties.",
    overview: [
      {
        heading: "What Is Compliance for a Private Limited Company?",
        content: `Compliance means adhering to laws, rules, and regulations. For a Private Limited Company in India, it involves meeting requirements laid out under the Companies Act, 2013—such as director appointments, board and shareholder meetings, and statutory filings with the Registrar of Companies (RoC). It also includes Income Tax Act obligations like filing returns and paying advance tax.`,
      },
      {
        heading: "Why Proper Compliance Matters",
        content: `Every registered Private Limited Company—regardless of turnover or capital—must complete annual filings (e.g., ITR, annual returns) and event‑based filings (e.g., changes in directors, share capital). Failing to comply can lead to heavy fines, director disqualification, loss of “Active” status, or even strike‑off by the RoC.`,
      },
    ],
    Listicles: [
      {
        category: "Mandatory Compliance Checklist",
        documents: [
          "Statutory Audit Compliance: Appointment of a statutory auditor and audited financial statements every year.",
          "Annual ROC Filings: Form MGT‑7 (Annual Return) within 60 days of the AGM; Form AOC‑4 (Financial Statements) within 30 days of the AGM.",
          "Appointment of Auditor: First statutory auditor must be appointed within 30 days of incorporation.",
          "Annual General Meeting (AGM): Hold within six months of financial year‑end; first AGM within nine months of first financial year‑end.",
          "Board Meetings: Minimum of four meetings per financial year, with no more than 120 days between meetings; first board meeting within 30 days of incorporation.",
          "Director’s Report: Prepare and file annually, disclosing financial performance, other directorships, and compliance declarations.",
          "Income Tax Compliances: File ITR annually; pay advance tax quarterly (if applicable); conduct a tax audit if turnover exceeds ₹1 crore.",
          "Event‑Based Filings: File applicable RoC forms for changes in share capital, director appointments/resignations, registered office address, or change of auditors.",
        ],
      },
    ],
    benefits: [
      {
        heading: "Benefits of Timely Compliance",
        content: `• Enhanced Company Credibility: Publicly visible compliance status on the MCA portal builds trust with investors, banks, and partners.  
• Easier Fundraising: Investors review ROC filings before investing; clean compliance records attract venture capital and loans.  
• Active Status Maintenance: Avoid penalties, disqualification of directors, and the risk of being struck off by RoC.  
• Legal Security: Prevents heavy fines and legal actions against both company and its officers.`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Annual Filing",
        content: `• PAN Card of the Company  
• Certificate of Incorporation (COI)  
• Audited Financial Statements (Balance Sheet, P&L Account, Cash Flow Statement)  
• Memorandum of Association (MOA) and Articles of Association (AOA)  
• Independent Auditor’s Report (signed by a registered Chartered Accountant)  
• Board Report and Audit Report (approved and signed by directors and auditors)  
• Digital Signature Certificate (DSC) of at least one director`,
      },
    ],
    feesStructure: [
      {
        heading: "Cost of Annual Compliance",
        description: `The annual compliance cost varies by company size and complexity, typically including:  
• RoC Filing Fees (Forms MGT‑7, AOC‑4, ADT‑1, etc.)  
• Accounting and Bookkeeping Charges  
• Statutory Audit Fees  
• Income Tax Return (ITR) Filing Fees  
• GST and TDS Return Filing Charges  
• Legal and Professional Fees (CA/CS/legal advisors)`,
      },
    ],
    Listicles: [
      {
        category: "Penalties for Non‑Compliance",
        documents: [
          "Heavy late fees for delayed ROC filings (Form MGT‑7, AOC‑4, etc.) and tax returns (ITR, GST, TDS).",
          "Disqualification of directors for failure to file annual returns within prescribed deadlines.",
          "Loss of “Active” status and potential strike‑off by the Registrar of Companies.",
          "Legal action and monetary fines for non‑adherence to Companies Act or Income Tax Act provisions.",
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose [Your Brand Name] as Your Compliance Partner?",
        description: [
          "End‑to‑end ROC and tax compliance services tailored to your business size and industry.",
          "Experienced team of Chartered Accountants and Company Secretaries to handle all statutory filings.",
          "Timely reminders and proactive follow‑ups to ensure no deadline is missed.",
        ],
        points: [
          "Transparent pricing with no hidden charges",
          "Dedicated account manager for personalized support",
          "In‑depth expertise on Companies Act, 2013 and Income Tax Act compliance",
        ],
      },
    ],
    faq: [
      {
        question:
          "Is ROC compliance mandatory for all Private Limited Companies?",
        answer:
          "Yes. Every Private Limited Company in India must submit all required forms and documents to the Registrar of Companies within prescribed timelines or face penalties and potential strike‑off.",
      },
      {
        question: "What happens if a company does not appoint an auditor?",
        answer:
          "Failure to appoint a statutory auditor within 30 days of incorporation attracts a penalty of ₹300 per month and restrictions on conducting business activities.",
      },
      {
        question: "Which forms must be filed after the AGM?",
        answer:
          "Form MGT‑7 (Annual Return) within 60 days of the AGM and Form AOC‑4 (Financial Statements and Director’s Report) within 30 days of the AGM.",
      },
      {
        question:
          "Can a Private Limited Company skip the AGM in its first year?",
        answer:
          "No. The first AGM must be held within nine months from the end of the first financial year, and subsequent AGMs within six months of each financial year‑end.",
      },
      {
        question:
          "Are Income Tax returns mandatory even if the company has no profit?",
        answer:
          "Yes. Every company must file an Income Tax Return annually, even if there is no taxable income, to maintain compliance and avoid penalties.",
      },
      {
        question: "What is the penalty for non‑filing of Form AOC‑4?",
        answer:
          "Late filing of Form AOC‑4 attracts a penalty at the rate of ₹100 for every day of delay, subject to a maximum penalty of ₹300,000.",
      },
      {
        question:
          "Do private limited companies need to file GST returns every month?",
        answer:
          "It depends on turnover and business structure. Companies with turnover above the threshold must file monthly/quarterly GST returns as per GST law.",
      },
    ],
  },
  "event-based-compliances": {
    title: "Event‑Based Compliances for Companies: What You Need to Know",
    description:
      "Event‑based compliances are mandatory filings a company must submit to the Registrar of Companies (ROC) upon specific corporate events. These one‑time filings under the Companies Act, 2013 ensure legal validity and transparency.",
    overview: [
      {
        heading: "What Are Event‑Based Compliances?",
        content: `Event‑based compliances refer to legal filings and disclosures triggered by specific corporate events—such as changes in directors, share capital, or registered office. Unlike annual compliances, these filings must be submitted within prescribed timelines each time a relevant event occurs.`,
      },
      {
        heading: "Why Event‑Based Compliances Matter",
        content: `Timely adherence to event‑based requirements keeps a company’s records updated with the Ministry of Corporate Affairs (MCA), helps avoid hefty penalties, and demonstrates good corporate governance. Directors or compliance officers should closely monitor all corporate actions that trigger mandatory filings.`,
      },
    ],
    Listicles: [
      {
        category: "Types of Event‑Based Compliances",
        documents: [
          "Appointment or resignation of a Director or Key Managerial Personnel (KMP)",
          "Change in Board composition or designation (e.g., Managing Director)",
          "Allotment, issuance, or transfer of shares",
          "Changes in authorized or paid‑up capital",
          "Alteration in Memorandum of Association (MOA) or Articles of Association (AOA)",
          "Change in registered office address",
          "Appointment or removal of Statutory Auditor",
          "Filing of board or general meeting resolutions",
          "Subdivision or consolidation of shares",
          "Change in company name",
          "Creation, modification, or satisfaction of charge",
          "Acquisition of DIN or DSC, or changes in digital signatories",
          "Business restructuring, expansion, or transformation",
          "Private placement or credit monitoring reporting",
          "Annual General Meeting resolutions and related filings",
          "Statutory audit filings and Income Tax Return submissions",
        ],
      },
      {
        category: "Key ROC Filings for Event‑Based Compliances",
        documents: [
          "INC‑20A – Commencement of Business: File within 180 days from the date of incorporation",
          "INC‑22 – Change in Registered Office: File within 15 days of the change",
          "INC‑24 – Change in Company Name: File within 60 days of INC‑1 approval",
          "INC‑27 – Company Conversion (e.g., Pvt Ltd to LLP): File as per conversion guidelines",
          "DIR‑3 KYC – Director KYC Update: File by 30th April of the following financial year",
          "DIR‑12 – Appointment/Resignation of Directors or KMP: File within 30 days of the change",
          "ADT‑2 – Removal of Director: File within 30 days of passing the special resolution",
          "SH‑7 – Increase in Authorized Share Capital: File within 30 days of passing the resolution",
          "MGT‑14 – Board Resolution Filings: File within 30 days of passing the resolution",
          "PAS‑3 – Increase in Paid‑up Capital: File within 15 days of share allotment",
          "CHG‑1 – Charge Creation or Modification (Secured Loans): File within 30 days of the charge event",
          "CG‑1 – Condonation of Delay: File application with necessary documents when filing delayed forms",
          "DPT‑3 – Acceptance of Deposits: File by 30th June annually and submit audited report by 31st March",
          "BEN‑1 – Significant Beneficial Ownership Disclosure: File within 30 days of becoming a beneficial owner",
          "BEN‑2 – Confirmation of Significant Beneficial Ownership: File within 30 days of receiving BEN‑1",
        ],
      },
    ],
    whyUs: [
      {
        heading: "How Ctax Simplifies Event‑Based Compliances",
        description: [
          "Choose a Compliance Plan tailored to your company’s needs",
          "Raise queries and share required documents securely",
          "Our experts handle accurate filings of all ROC forms within statutory deadlines",
        ],
        points: [
          "Dedicated team of compliance professionals",
          "End‑to‑end support for every corporate event filing",
          "100% on‑time delivery with no errors",
        ],
      },
    ],
    faq: [
      {
        question: "What are Event‑Based Compliances?",
        answer:
          "Event‑Based Compliances are mandatory filings a company must submit to the ROC upon specific corporate events—like director changes, share allottees, or MOA/AOA alterations—under the Companies Act, 2013.",
      },
      {
        question: "Which events trigger Event‑Based Compliances?",
        answer:
          "Examples include appointment/resignation of directors, increase in capital, change in registered office, alteration of MOA/AOA, or creation of a charge.",
      },
      {
        question:
          "What happens if a company misses an event‑based filing deadline?",
        answer:
          "Non‑filing within the prescribed timeline can lead to penalties, fines, officer disqualification, or legal action against the company and its directors.",
      },
      {
        question: "Who must sign these event‑based ROC forms?",
        answer:
          "Forms must be digitally signed by an Authorized Director, Company Secretary (CS), or Chartered Accountant (CA), depending on the form’s requirements.",
      },
      {
        question: "Is Form INC‑22 mandatory for every change of address?",
        answer:
          "Yes. E‑Form INC‑22 must be filed within 15 days of any change in the company’s registered office address.",
      },
      {
        question: "When should Form MGT‑14 be filed?",
        answer:
          "E‑Form MGT‑14 must be filed within 30 days of passing a board or general meeting resolution affecting share capital, management, or other statutory records.",
      },
      {
        question: "Do event‑based compliances apply to LLPs as well?",
        answer:
          "LLPs have their own set of event‑based filings under the LLP Act, 2008 (e.g., LLP Form 3 for changes in partners or capital). Private Limited Company forms do not apply to LLPs.",
      },
      {
        question: "Can Ctax handle multiple event‑based filings at once?",
        answer:
          "Yes. We provide end‑to‑end support for all event‑based ROC filings, from director changes to capital alterations, ensuring timely and accurate submissions.",
      },
    ],
  },
  "moa-memorandum-of-association": {
    title: "Memorandum of Association (MOA) – Foundation of a Company",
    description:
      "The Memorandum of Association (MOA) is a mandatory legal document that defines a company’s structure, purpose, and limitations. It serves as the foundational charter, outlining the legal framework and scope of operations under the Companies Act, 2013.",
    overview: [
      {
        heading: "What Is the Memorandum of Association (MOA)?",
        content: `The MOA acts as the company’s public charter, specifying its name, registered office location, objectives, liability of members, and authorized share capital. It is a reference for third parties entering into agreements and ensures that the company operates strictly within its defined scope. If any provision of the MOA conflicts with the Companies Act, 2013, the Act prevails.`,
      },
      {
        heading: "MOA Formats Under Schedule I",
        content: `Every company must prepare its MOA according to the prescribed format in Schedule I (Tables A–E) of the Companies Act, 2013:

● Table A – Companies limited by shares  
● Table B – Companies limited by guarantee without share capital  
● Table C – Companies limited by guarantee with share capital  
● Table D – Unlimited companies without share capital  
● Table E – Unlimited companies with share capital  

Choosing the correct format ensures legal compliance and recognition.`,
      },
    ],
    Listicles: [
      {
        category: "Object Clause in the MOA",
        documents: [
          "Main Objects – The core activities and primary business objectives for which the company is formed.",
          "Ancillary or Incidental Objects – Secondary activities that support and facilitate the main objects.",
        ],
      },
      {
        category: "Reasons to Amend the Object Clause",
        documents: [
          "Business Expansion – To broaden operations across new markets or sectors.",
          "Adopting New Methods – To use innovative or efficient approaches in achieving existing objectives.",
          "Adding Related Business Activities – To undertake complementary ventures aligned with current operations.",
          "Business Restructuring or Disposal – To restructure, sell, or dispose part of the business, requiring a shift in objectives.",
          "Amalgamation or Merger – To integrate with another company and reflect combined goals in the object clause.",
        ],
      },
      {
        category: "Contents of the MOA",
        documents: [
          "Name Clause – Official company name ending with “Private Limited”, “Limited”, or “OPC Private Limited” (except Section 8 companies).",
          "Registered Office Clause – State in which the company’s registered office is located, establishing legal domicile.",
          "Object Clause – Defines primary and ancillary objectives, restricting the company from activities outside its scope.",
          "Liability Clause – Clarifies whether members’ liability is limited or unlimited (usually limited to unpaid share value).",
          "Capital Clause – Specifies authorized share capital, including the number of shares and their face value.",
        ],
      },
    ],
    registrationProcedure: [
      {
        heading: "Board Meeting Notification",
        content: `Issue notice at least seven days before the Board Meeting to all directors. Include the agenda, explanatory notes, and a draft resolution proposing the change in the object clause.`,
      },
      {
        heading: "Conduct the Board Meeting",
        content: `During the Board Meeting, propose the new business activities and select the appropriate object clauses to be added. Pass a Board Resolution approving the amendment. Fix the date, time, and venue for an Extraordinary General Meeting (EGM), and authorize a director to send out the EGM notice to all shareholders. The EGM notice must be sent at least 21 days prior and clearly state the resolution for amendment.`,
      },
      {
        heading: "Hold the Extraordinary General Meeting (EGM)",
        content: `Members vote on the special resolution to alter the object clause. The resolution must be approved by at least 75% (three-fourths) of voting shareholders. For listed companies, or if the company has over 200 members or unutilized funds raised via a public prospectus, pass the resolution through a Postal Ballot as required.`,
      },
      {
        heading: "File with the Registrar of Companies (ROC)",
        content: `Within 30 days of the EGM, file Form MGT-14 with the ROC along with the certified copy of the special resolution, the EGM notice, amended copy of the MOA, and the EGM attendance sheet.`,
      },
      {
        heading: "Receive ROC Approval and Certificate",
        content: `Upon verification, the ROC will approve the amendment and issue a Certificate of Registration of Alteration. This certificate serves as legal proof of the updated object clause in the company’s MOA.`,
      },
    ],
    whyUs: [
      {
        heading: "CorpBiz Assistance for Amending the Object Clause",
        description: [
          "Comprehensive handling of the entire amendment process",
          "Drafting board and shareholder resolutions accurately",
          "Timely filing of Form MGT-14 with the ROC",
        ],
        points: [
          "Choose a compliance plan tailored to MOA amendment services",
          "Submit queries and upload required documents securely",
          "CorpBiz coordinates all legal formalities and ensures ROC approval",
        ],
      },
    ],
    faq: [
      {
        question:
          "What are the key points of the Memorandum of Association (MOA)?",
        answer:
          "The MOA outlines a company’s name, registered office, objectives (object clause), liability of members, and authorized share capital. It governs the company’s relationship with the outside world and restricts activities to those stated in the object clause.",
      },
      {
        question:
          "What additional steps must a public company follow to alter its object clause?",
        answer:
          "A public company with unutilized public funds must pass the special resolution via Postal Ballot, disclose justification for the change, obtain 75% shareholder approval, and report the resolution to stock exchanges if listed.",
      },
      {
        question:
          "What legal restrictions exist for altering the object clause under Section 13(2)?",
        answer:
          "Section 13(2) requires passing a special resolution in a general meeting, filing Form MGT-14 within 30 days, and obtaining any required regulatory approvals (e.g., SEBI or RBI) depending on sector and company type.",
      },
      {
        question:
          "How did the object clause differ under the Companies Act, 1956 vs. 2013?",
        answer:
          "Under the 1956 Act, objects were categorized into main, incidental, and other objects. The 2013 Act streamlined this by requiring only main objects and any other lawful objects, eliminating multiple categorization for simplicity.",
      },
      {
        question:
          "Is it necessary to physically attach the MOA when filing Form MGT-14 if SPICe forms were used for incorporation?",
        answer:
          "No. If incorporated via SPICe, the digitally signed e-MOA from SPICe is accepted. For MGT-14, attach the amended MOA in PDF format.",
      },
    ],
  },
  "director-appointment-resignation": {
    title: "Overview of Director Appointment and Resignation",
    description:
      "Directors are the ‘brain’ of a company, responsible for governance and strategic direction. This guide covers eligibility, ineligibility, types of directors, and detailed procedures for appointment (including at incorporation) and resignation under the Companies Act, 2013.",
    overview: [
      {
        heading: "Role & Evolution of the Board",
        content: `Directors steer a company’s strategic direction and ensure compliance. Over time, the Board’s composition evolves through new appointments and resignations to maintain a balanced and skilled governance team. Shareholders appoint directors, while the Board accepts resignations. All changes must be reported to the Ministry of Corporate Affairs (MCA) to remain compliant.`,
      },
      {
        heading: "Short Note: Appointment & Resignation Framework",
        content: `Section 168 of the Companies Act, 2013 provides a clear framework for appointing and resigning directors. Since a company is a legal entity without physical form, it relies on directors—individuals responsible for managing its operations. Directors are chosen based on skills and company needs, and any change must follow statutory procedures.`,
      },
    ],
    Listicles: [
      {
        category: "Eligibility Criteria to Become a Director",
        documents: [
          "Natural Person: Only an individual (not an entity) may be appointed as a director.",
          "Age: No general age limit. For Managing, Whole‑Time, or Independent Directors in a public company, age must be 21–70 years (exceptions via special resolution).",
          "Nationality: No restriction, but at least one director must be an Indian resident.",
          "DIN: Must obtain a Director Identification Number (DIN) from the MCA to prevent identity fraud.",
          "Directorship Limits: An individual can serve as director in up to 20 companies, of which only 10 can be public companies (including alternate directorships).",
        ],
      },
      {
        category: "Ineligibility to Become a Director",
        documents: [
          "Declared of unsound mind by a court or mentally incapable persons (e.g., minors).",
          "Undischarged insolvents or individuals who have filed for bankruptcy.",
          "Convicted and sentenced to imprisonment of seven years or more.",
          "Persons whose companies failed to file annual returns or financial statements in any preceding years.",
        ],
      },
      {
        category: "Types of Directors & Board Composition Requirements",
        documents: [
          "Managing Director: Oversees overall management and strategy under board authority.",
          "Executive Director: Handles day‑to‑day operations as a full‑time executive.",
          "Non‑Executive Director: Provides objective oversight without daily operational involvement.",
          "Nominee Director: Appointed by external entities (PE/VC investors, banks) to represent their interests.",
          "Independent Director: Ensures corporate governance, transparency, and unbiased board decisions.",
          "Minimum/Maximum Directors: Public Company – min 3; Private Company – min 2; OPC – min 1; Max 15 directors by default (more via special resolution).",
          "Mandatory Woman Director: Every listed company and public company with paid‑up capital ≥₹100 crore or turnover ≥₹300 crore must appoint at least one woman director within one year of meeting these thresholds.",
          "Transitional Provision: Individuals holding directorships exceeding permissible limits before the Act’s commencement have one year to resign from excess directorships and notify ROC.",
        ],
      },
      {
        category: "Reasons to Appoint or Replace Directors",
        documents: [
          "Infusion of New Talent & Expertise: To bring fresh skills onto the Board.",
          "Regulatory/Statutory Requirements: E.g., mandatory woman director or DIN compliance.",
          "Underperformance/Incompetence: Replace directors who fail to add value.",
          "Strategic Restructuring: Realign board composition with business goals.",
        ],
      },
      {
        category: "Reasons Behind Director Resignation",
        documents: [
          "Dispute with the Board: Conflicts or disagreements limiting contribution.",
          "Better Career Opportunities: Accepting positions aligned with personal goals.",
          "Involvement in Unethical/Illegal Practices: Resign to avoid personal liability.",
          "Suspension Due to Violations: Non‑compliance may lead to forced resignation.",
          "Recession of Nomination: Nominee directors step down when their nominating party withdraws or engagement ends.",
        ],
      },
    ],
    documentsRequired: [
      {
        heading: "For Appointment of Director",
        content: `● Passport‑size photograph of the proposed director  
● Self‑attested PAN card  
● Proof of residential address (Aadhaar, Voter ID, Passport, or Driving License)  
● Government‑issued identity proof (Passport, Election Card, Aadhaar, or Driving License)  
● Digital Signature Certificate (DSC) of the incoming director  
● Mobile number and email ID (personal and official)  
● For foreign/non‑resident directors: All documents must be apostilled or notarized`,
      },
      {
        heading: "For Resignation of Director",
        content: `● Digital Signature Certificate (DSC) of the outgoing director  
● Resignation letter/notice submitted by the director  
● Proof of dispatch of the resignation notice (e.g., acknowledgment of delivery)  
● Acknowledgment copy of the ROC filing (Form DIR‑11), if received`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Appointment of First Directors at Incorporation",
        content: `● When incorporating via SPICe+ Form, include up to three individuals’ details without pre‑obtained DINs; DINs are allotted automatically during incorporation.  
● If no director is specified, initial subscribers to the MOA become first directors.  
● The master data of appointed directors is updated on the MCA portal upon incorporation.`,
      },
      {
        heading: "Provisional Appointment under Section 152",
        content: `● Section 152(1): In an OPC, the sole member is its first director until a formal appointment.  
● Section 149(1): Minimum directors—Public Company 3, Private Company 2, OPC 1; max 15 by default (exceed via special resolution).  
● Transitional: Individuals holding >20 directorships (or >10 public) before the Act must resign from excess within one year and notify ROC.  
● Mandatory Woman Director: Listed or public companies with paid‑up capital ≥₹100 crore or turnover ≥₹300 crore must appoint one woman director within one year of meeting thresholds.`,
      },
      {
        heading: "Fundamental Process for Director Appointment",
        content: `1. Review AOA (Section 161(1)): Ensure Articles permit additional directors; amend AOA via shareholders’ resolution if needed.  
2. Prepare Documents: Collect identity proofs, consent (Form DIR‑2), and non‑disqualification declaration (Form DIR‑8) from proposed director.  
3. Director’s Consent: Obtain Form DIR‑2 (written consent to act as director).  
4. File Forms with ROC:  
   • DIR‑2 – Consent to act as director  
   • DIR‑8 – Declaration of non‑disqualification  
   • DIR‑12 – Particulars of appointment (to be filed within 30 days of appointment)  
5. Shareholder Approval (if required): Convene a General Meeting to pass resolution approving appointment.`,
      },
      {
        heading: "Subsequent Compliance for Director Appointment",
        content: `1. Hold a Board Meeting: Propose and pass resolution for appointment; issue a formal appointment letter.  
2. Convene a General Meeting: Obtain shareholders’ approval if required by AOA or Act.  
3. Pass Board Resolution: Record resolution in board minutes.  
4. Issue Appointment Letter: Provide Letter of Appointment to the new director.  
5. File DIR‑12: Submit Form DIR‑12 with ROC within 30 days of appointment, attaching DIR‑2, DIR‑8, and board resolution.  
6. Update Statutory Registers: Enter details in the Register of Directors & Key Managerial Personnel.  
7. Update Other Registrations: Notify GST, ESIC, and other statutory authorities of the new director (if applicable).  
8. MCA Update: New director’s details appear on the MCA portal once filings are accepted.`,
      },
      {
        heading: "Resignation of Director under Section 168",
        content: `1. Submission of Written Resignation: Director submits a written notice to the company.  
2. Board Acknowledgment: Board passes a resolution acknowledging resignation.  
3. File DIR‑11 with ROC: Company files Form DIR‑11 within 30 days of acceptance, including the resignation notice and reasons.  
4. Submit Resignation Notice: Attach the resignation letter to DIR‑11 for ROC records.  
5. Disclosure in Board’s Report: Record the resignation in the next Board’s Report.  
6. Effective Date: Resignation takes effect from the date the company receives notice or a later date specified by the director.  
7. Resignation of All Directors: If all directors resign simultaneously, promoters or Central Government appoint interim directors until new directors are elected in a general meeting.`,
      },
      {
        heading: "Manner of Resignation (Detailed Steps)",
        content: `● Board Resolution & DIR‑11: Pass board resolution accepting resignation; file Form DIR‑11 with ROC, stating reasons.  
● Timely Filing: Submit DIR‑11 within 30 days of resignation.  
● Resignation Notice: Include a copy of the resignation notice when filing DIR‑11.  
● Required Documents:  
  – Notice of Resignation submitted by the director  
  – Proof of Dispatch of the notice  
  – Acknowledgment copy of DIR‑11 (if available)  
Ensuring these steps prevents legal issues and maintains accurate ROC records.`,
      },
    ],
    faq: [
      {
        question: "Can a director’s resignation be rejected by the company?",
        answer:
          "A voluntary written resignation cannot be refused. If the director is under investigation, the company may request a delay, but the resignation takes effect on the date specified by the director or upon formal acceptance.",
      },
      {
        question: "What happens if DIR‑11 is not filed after resignation?",
        answer:
          "Until Form DIR‑11 is filed and the notice is accepted, the resignation remains ineffective. The director continues in office and is liable for any actions taken.",
      },
      {
        question: "How are first directors appointed during incorporation?",
        answer:
          "When filing SPICe+ Form, include up to three proposed directors. DINs are allotted during incorporation, and those individuals become first directors. If none are specified, subscribers to the MOA serve as initial directors.",
      },
      {
        question: "Is a Director Identification Number (DIN) mandatory?",
        answer:
          "Yes. Every person appointed as a director must have a valid DIN. For incorporation, DINs can be applied via SPICe+ Form. Existing DIN holders need not reapply.",
      },
      {
        question:
          "What is the maximum number of directorships one person can hold?",
        answer:
          "An individual may serve as director in up to 20 companies simultaneously, of which only 10 can be public companies (including alternate directorships). Exceeding these limits at Act commencement requires resigning from excess directorships within one year.",
      },
      {
        question: "How many directors can a company appoint?",
        answer:
          "By default, a company can appoint up to 15 directors. To exceed 15, the company must pass a special resolution in a general meeting; no Central Government approval is needed.",
      },
      {
        question: "Who appoints a nominee director?",
        answer:
          "Nominee directors are appointed by external entities—such as private equity or venture capital investors, banks, or institutional shareholders—to represent their interests on the board.",
      },
      {
        question: "What is the mandatory woman director requirement?",
        answer:
          "Every listed company and every other public company with paid‑up capital ≥₹100 crore or turnover ≥₹300 crore must appoint at least one woman director within one year of meeting these thresholds.",
      },
      {
        question: "Can a company appoint a foreign national as director?",
        answer:
          "Yes. A company may appoint a foreign national or NRI as director, provided at least one director is an Indian resident. Foreign director documents must be apostilled or notarized.",
      },
      {
        question: "What happens if all directors resign simultaneously?",
        answer:
          "If all directors vacate office at once, promoters or the Central Government appoint interim directors until new directors are elected by shareholders in a general meeting.",
      },
    ],
  },
  "company-naming-guidelines": {
    title: "Company Naming Guidelines: A Complete Legal Framework",
    description:
      "Under the Companies Act, 2013, a company’s name is its official legal identity. This guide covers initial name selection, MCA approval, and the process for renaming an existing company, ensuring alignment with legal standards and long‑term branding objectives.",
    overview: [
      {
        heading: "Importance of a Company Name",
        content: `A company’s name serves as its legal identity. Under the Companies Act, 2013, naming follows strict regulations for selection, MCA approval, and any future renaming. The chosen name must comply with statutory norms while supporting branding and business goals.`,
      },
    ],
    Listicles: [
      {
        category: "Mandatory Naming Norms",
        documents: [
          `Entity suffix requirements:
• Private Companies: “Private Limited” or “Pvt Ltd”
• One Person Companies (OPC): “OPC Private Limited”
• Public Companies: “Limited”`,
        ],
      },
      {
        category: "Prohibited Name Elements",
        documents: [
          "Names identical or deceptively similar to existing companies or registered trademarks (including plural/singular variations)",
          "Generic or ambiguous terms (e.g., “Textile Company Pvt Ltd”)",
          "Personal names as prefixes (e.g., “Ankita Pvt Ltd”)",
          "Misleading legal structure terms (e.g., LLP, Trust, HUF)",
          "Words restricted under the Emblems and Names (Prevention of Improper Use) Act, 1950",
        ],
      },
      {
        category: "Sector‑Specific Naming Requirements",
        documents: [
          "For financial sector entities, the name must reflect primary business activities (e.g., “Leasing Finance Pvt Ltd”)",
          "Chosen name must align with the Main Object Clause in the MOA",
        ],
      },
      {
        category: "Restrictions on Name Change",
        documents: [
          "Cannot alter name if required annual returns are not filed",
          "Cannot alter name if in default for repayment of deposits or payment of debentures or related interest",
        ],
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Board Meeting & Resolution",
        content: `Issue a 7‑day notice to conduct a Board Meeting. Pass a resolution to:
• Authorize a name availability check
• Approve an Extraordinary General Meeting (EGM) for name change`,
      },
      {
        heading: "Step 2: Name Availability Check",
        content: `Conduct a name search through:
• MCA Name Search Tool
• Trademark Public Search Database`,
      },
      {
        heading: "Step 3: RUN Form Filing",
        content: `Submit the Reserve Unique Name (RUN) application via the MCA portal.
• Fee: ₹1,000 (for up to 2 name options)
• Attach Board Resolution if applicable (in case of name change)
• Approval validity: 20 calendar days`,
      },
      {
        heading: "Step 4: Shareholder Approval",
        content: `Conduct an EGM within the 20‑day approval validity period. Pass a Special Resolution to:
• Approve the proposed name
• Amend the MOA and AOA`,
      },
      {
        heading: "Step 5: MCA Filings",
        content: `• File Form MGT‑14 to register the special resolution within 30 days of the EGM (attach EGM notice, revised MOA and AOA).  
• File Form INC‑24 for Central Government approval after MGT‑14 (attach EGM minutes and Board Resolution).`,
      },
      {
        heading: "Step 6: Issuance of New COI",
        content: `Upon approval, the Registrar of Companies (ROC) issues a revised Certificate of Incorporation (COI). The new name becomes effective immediately upon issuance.`,
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Name Change Registration?",
        description: [
          "End‑to‑end legal assistance from name availability check to filing MGT‑14 and INC‑24",
          "Expert name vetting to ensure compliance with MCA and Trademark guidelines",
          "Document preparation (board resolutions, EGM notices, MOA/AOA amendments) and timely filing",
        ],
        points: [
          "Dedicated compliance tracker and client support portal for on‑time filings",
          "Hassle‑free communication with the ROC for approvals, clarifications, and follow‑ups",
        ],
      },
    ],
    faq: [
      {
        question: "Does changing a company’s name affect its legal standing?",
        answer:
          "No. The company retains all existing rights and liabilities regardless of a name change.",
      },
      {
        question: "What are typical reasons for renaming a company?",
        answer:
          "Common reasons include rebranding, diversification of business activities, and meeting regulatory obligations.",
      },
      {
        question: "What is the average timeline for completing a name change?",
        answer:
          "Typically 15–20 working days, though actual timelines may vary by ROC jurisdiction.",
      },
      {
        question: "How long is an approved name reserved by the ROC?",
        answer:
          "An approved name is reserved for 20 calendar days from the date of approval.",
      },
    ],
  },
  "director-removal-process": {
    title: "Director Removal Process: Legal Framework & Compliance Guide",
    description:
      "Learn the legally compliant procedure to remove a company director under the Companies Act, 2013. Understand rights, resolutions, filings, and timelines to ensure governance restructuring is transparent and effective.",
    overview: [
      {
        heading: "Overview",
        content:
          "Director removal is a crucial mechanism for ensuring responsible corporate governance. Under the Companies Act, 2013, directors may be removed due to non-performance, legal violations, or criminal convictions. This process ensures the company operates in a compliant, efficient, and transparent manner.\nLegal Basis: The relevant statutory provisions include Sections 169 (Removal of Director), 167 (Vacation of Office), and 168 (Resignation) of the Companies Act, 2013.",
      },
    ],
    benefits: [
      {
        heading: "Improved Governance",
        content: "Enhances board accountability and operational integrity.",
      },
      {
        heading: "Regulatory Compliance",
        content:
          "Helps companies avoid penalties up to ₹5 lakh for non-compliance.",
      },
      {
        heading: "Conflict Resolution",
        content: "Addresses and settles boardroom disputes efficiently.",
      },
      {
        heading: "Strategic Alignment",
        content:
          "Allows restructuring of the board to align with evolving business goals.",
      },
    ],
    Listicles: [
      {
        category: "Eligibility to Initiate Removal",
        documents: [
          "Shareholders holding at least 1% voting power or ₹5 lakh in paid-up capital.",
          "Exceptions: Directors appointed by the Tribunal or the Central Government are protected.",
        ],
      },
      {
        category: "Types of Directors and Their Removal Methods",
        documents: [
          "Independent Director: Special resolution (75% approval)",
          "Nominee Director: Automatic removal on transaction fulfillment",
          "Managing Director: Ordinary resolution + MGT-14 filing",
        ],
      },
      {
        category: "Key Legal Provisions",
        documents: [
          "Section 169(3): Right of the director to present their case.",
          "Section 169(8): Director's right to contractual dues.",
          "Rule 79 (NCLT): Allows appeals via Form NCLT-1.",
        ],
      },
      {
        category: "Penalties for Delay in ROC Filings",
        documents: [
          "≤15 days: 1x standard fee",
          "16–30 days: 2x",
          "31–180 days: 4x",
          ">180 days: 10x + compounding",
          "Example: A standard fee of ₹1,000 becomes ₹10,000 after 180 days.",
        ],
      },
      {
        category: "Post-Removal Compliance",
        documents: [
          "Update company records on the MCA portal within 30 days.",
          "Notify banks, statutory bodies, and stakeholders.",
          "Cancel or revoke the director's Digital Signature Certificate (DSC).",
        ],
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Initiation",
        content:
          "• A special notice is issued by shareholders at least 28 days before the meeting.\n• The board must pass a resolution for calling an EGM within 7 days.",
      },
      {
        heading: "Step 2: Approval by Shareholders",
        content:
          "• Conduct an Extraordinary General Meeting (EGM) with 21 days' notice.\n• Pass an ordinary resolution by a simple majority.",
      },
      {
        heading: "Step 3: Regulatory Filings",
        content:
          "• DIR-11: Director's resignation (if applicable) – Within 30 days\n• DIR-12: Inform ROC about removal within 30 days\n• MGT-14: File resolution within 30 days\n\nAttachments Required:\n• Copy of board resolution\n• Resignation letter (if applicable)\n• Minutes of EGM",
      },
    ],
    faq: [
      {
        question: "Can a director be removed without their consent?",
        answer: "Yes, through a shareholder resolution under Section 169.",
      },
      {
        question: "How long does the removal process take?",
        answer: "Typically, 45–60 days, including notice periods and filings.",
      },
      {
        question: "What happens to a director's shares after removal?",
        answer:
          "They retain the shares unless the Articles of Association (AoA) provide for forfeiture.",
      },
      {
        question: "What if the company ignores ROC notices?",
        answer:
          "The company may face strike-off proceedings under Section 248(1).",
      },
      {
        question: "Can directors remove other directors?",
        answer:
          "No, only shareholders have the authority to remove a director.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Director Removal Services?",
        description: [
          "We simplify the complex legal procedure of director removal with a transparent, compliant, and efficient approach tailored to your business needs.",
          "Our experienced legal professionals ensure the process complies with the Companies Act, 2013—minimizing risks and avoiding costly penalties.",
        ],
        points: [
          "End-to-end assistance from notice drafting to ROC filings (DIR-11, DIR-12, MGT-14)",
          "Ready-to-use templates for resolutions, EGM notices, and resignation letters",
          "Quick turnaround with MCA filings completed within 3–5 working days",
        ],
      },
    ],
  },
  "nidhi-company-compliance": {
    title: "Nidhi Company Compliance: Rules, Restrictions & ROC Filings",
    description:
      "Stay updated on the latest compliance mandates under the Nidhi Rules, 2014 & 2022 Amendment. Understand key filing requirements, prohibited activities, and post-incorporation obligations to maintain legal standing.",
    overview: [
      {
        heading: "Overview of Nidhi Company",
        content:
          "A Nidhi Company is governed by Section 406 of the Companies Act, 2013, along with the Nidhi Rules, 2014, and the Nidhi (Amendment) Rules, 2022. These companies operate in the non-banking financial sector and are primarily engaged in accepting deposits from and providing loans to their members. As with any other registered entity, a Nidhi Company is required to comply with annual tax and regulatory filings as mandated by law. Though categorized as a Public Limited Company, a Nidhi Company must adhere strictly to prescribed compliance norms to avoid legal consequences.",
      },
    ],
    benefits: [
      {
        heading: "Member-Driven Lending",
        content:
          "Focused financial services limited to members only, reducing risk exposure.",
      },
      {
        heading: "Simple Incorporation",
        content:
          "Registered as a Public Limited Company with relaxed RBI oversight.",
      },
      {
        heading: "Regulated Operations",
        content:
          "Operational boundaries clearly defined under the Nidhi Rules, ensuring compliance.",
      },
      {
        heading: "Cost-Effective Financing",
        content:
          "Allows members access to low-interest loans and savings schemes.",
      },
    ],
    Listicles: [
      {
        category: "Post-Incorporation Compliances for Nidhi Company",
        documents: [
          "A minimum of 200 members within 1 year.",
          "Net Owned Funds (NOF) of at least ₹20 lakhs.",
          "NOF-to-deposit ratio must not exceed 1:20.",
          "At least 10% of deposits must be in unencumbered term deposits as per Rule 14.",
        ],
      },
      {
        category: "Prohibited Activities under Rule 6",
        documents: [
          "Leasing, hire purchase, and chit fund businesses.",
          "Purchasing securities of other corporations.",
          "Issuing preference shares, debentures, or debt instruments.",
          "Maintaining current accounts for members.",
          "Accepting or lending funds to non-members or body corporates.",
          "Operating partnerships for financial activities.",
          "Advertising for deposits in any form.",
          "Pledging member assets or paying commissions to mobilize deposits or disburse loans.",
          "Engaging in unrelated businesses without Regional Director's approval.",
        ],
      },
      {
        category: "Types of Compliance",
        documents: [
          "Annual Compliances: Routine filings like financials and returns.",
          "Event-Based Compliances: Triggered by operational changes like director or capital structure.",
        ],
      },
      {
        category: "Key ROC Filings Under Nidhi Rules",
        documents: [
          "NDH-1: Return of statutory compliance within 90 days of financial year-end (via GNL-2).",
          "NDH-2: Extension application for deposit/member requirements within 30 days of FY end (via RD-1).",
          "NDH-3: Half-yearly return on members, deposits, and loans within 30 days (via GNL-2).",
          "NDH-4: Application for Nidhi status within 60 days after 1 year of incorporation or as per rule.",
          "NDH-5: Branch closure notice within 30 days, published in vernacular paper.",
        ],
      },
      {
        category: "Other Key Forms",
        documents: [
          "AOC-4: File financial statements within 30 days of AGM.",
          "MGT-7: File annual return within 60 days of AGM.",
        ],
      },
    ],
    registrationProcedure: [],
    faq: [
      {
        question: "Can a Nidhi Company operate like a bank?",
        answer:
          "No, Nidhi Companies are restricted to lending and accepting deposits only from their members and cannot operate like traditional banks.",
      },
      {
        question: "Is RBI approval required to start a Nidhi Company?",
        answer:
          "No, RBI approval is not required, but operations must adhere to Nidhi Rules and the Companies Act.",
      },
      {
        question:
          "What if member/deposit thresholds are not met in the first year?",
        answer:
          "You must file NDH-2 within 30 days of financial year-end to request an extension from the Regional Director.",
      },
      {
        question:
          "Can a Nidhi Company pay commissions for mobilizing deposits?",
        answer:
          "No, commissions or incentives for deposit mobilization or loan disbursal are strictly prohibited.",
      },
      {
        question:
          "What happens if a Nidhi Company doesn’t get Nidhi status via NDH-4?",
        answer:
          "It cannot file forms like SH-7 and PAS-3 and may face regulatory restrictions.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Nidhi Company Compliance?",
        description: [
          "Complete assistance in all post-incorporation filings and regulatory compliance.",
          "Expert advice on meeting NOF and member thresholds to maintain legal status.",
          "Support for timely NDH-1, NDH-2, NDH-3, and NDH-4 filing.",
        ],
        points: [
          "Experienced team for ROC filings, exemptions, and director approvals.",
          "Streamlined document management and deadline tracking system.",
        ],
      },
    ],
  },
  "section8-company-compliance": {
    title: "Overview of Section 8 Company Compliance",
    description:
      "Section 8 Companies (non‑profits under the Companies Act, 2013) must adhere to specific annual and event‑based regulatory norms. All income is applied to their charitable objectives—no profit distribution is allowed.",
    overview: [
      {
        heading: "Overview",
        content: `Under the Companies Act, 2013, Section 8 Companies promote charitable causes (education, art, science, social welfare, etc.). Recognized as NGOs, they enjoy limited‑company status without using “Limited” in their name. All income furthers their mission; no dividends are paid to members.`,
      },
    ],
    benefits: [
      {
        heading: "Enhances Credibility",
        content:
          "Builds trust and improves reputation among donors, stakeholders, and regulators.",
      },
      {
        heading: "Ensures Legal Protection",
        content:
          "Safeguards the organization from legal disputes and regulatory actions.",
      },
      {
        heading: "Avoids Penalties",
        content:
          "Timely filings prevent fines, penalties, and potential disqualification.",
      },
      {
        heading: "Builds Public Trust",
        content:
          "Transparent operations foster confidence among beneficiaries and the public.",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Annual Compliance Documents",
        content: `• Memorandum of Association (MoA)  
  • Articles of Association (AoA)  
  • Digital Signature Certificate (DSC)  
  • Certificate of Incorporation`,
      },
    ],
    Listicles: [
      {
        category: "Mandatory Annual Compliances",
        documents: [
          "Appointment of Auditor each year",
          "Maintenance of Statutory Registers (members, loans, charges, investments)",
          "Preparation & filing of Financial Statements (Trading A/c, P&L, Balance Sheet)",
          "Director’s Report filing via Form AOC‑4 (Sect. 134) + signed board minutes",
          "Income Tax Return (ITR) by 30 September (Section 12A/80G holders)",
          "At least two Board Meetings (max 90 days gap)",
          "AGM by 30 September + Form MGT‑15 within 30 days",
          "File AOC‑4 within 30 days of AGM",
          "File MGT‑7 within 60 days of AGM (or 60 days from due date)",
        ],
      },
      {
        category: "Event‑Based Compliances",
        documents: [
          "Transfer or Allotment of Shares",
          "Appointment/Resignation of Directors or Auditors",
          "Change of Company Name",
          "Amendment of MoA",
          "Appointment of Key Managerial Personnel (KMP)",
          "Receipt of Share Application Money",
          "Alteration in Company Structure (merger, conversion)",
        ],
      },
      {
        category: "Tax Compliance Requirements",
        documents: [
          "Registration under Section 12A via Form 10A",
          "Adherence to Section 11 (application of income)",
          "80G certification via Form 10B for donor deductions",
        ],
      },
      {
        category: "Penalties for Non‑Compliance",
        documents: [
          "Revocation of license for fraudulent operation",
          "Company fines: ₹10 lakh to ₹1 crore",
          "Officer fines/imprisonment: up to ₹25 lakh or both",
          "Fraud penalties under Section 447: stringent fines & imprisonment",
        ],
      },
      {
        category: "Due Dates for Compliance Filings",
        documents: [
          "AGM: On or before 30 September",
          "Form AOC‑4: Within 30 days of AGM",
          "Form MGT‑7: Within 60 days of AGM",
          "Income Tax Return: On or before 30 September",
        ],
      },
    ],
    registrationProcedure: [
      {
        heading: "How Corpbiz Assists You with Section 8 Compliance",
        content: `1. Submit Online Form: Fill in basic company details.  
  2. Callback from Experts: Tailored guidance on your needs.  
  3. Share Documents: Secure upload for verification.  
  4. Track Real‑Time Progress: Stay updated at every stage.  
  5. Receive Deliverables: Compliance filings and certificates delivered to your inbox.`,
      },
    ],
    faq: [
      {
        question: "Can a Section 8 Company be private or public?",
        answer:
          "Yes, it can be registered as either Private or Public Limited, based on member count and structure.",
      },
      {
        question: "Are Secretarial Standards applicable?",
        answer:
          "Yes. ICSI Secretarial Standards apply, with certain exemptions for Section 8 companies.",
      },
      {
        question: "Penalty for not holding AGM?",
        answer:
          "Fines apply to company and directors, and related filings (AOC‑4, MGT‑7) may also be penalized.",
      },
      {
        question: "What if Annual Return isn’t filed?",
        answer:
          "Late fees accrue and directors may face disqualification and legal action.",
      },
      {
        question: "Can foreigners register a Section 8 Company?",
        answer:
          "Yes, subject to Companies Act eligibility and applicable FEMA regulations.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Corpbiz for Section 8 Compliance?",
        description: [
          "End‑to‑end handling of annual and event‑based filings",
          "Expert guidance on 12A/80G registrations and tax exemptions",
          "Real‑time tracking and timely reminders",
        ],
        points: [
          "Dedicated compliance manager",
          "Transparent pricing with no hidden fees",
          "Complete digital support and documentation",
        ],
      },
    ],
  },
  "change-in-registered-office-address": {
    title: "Change in Registered Office Address",
    description:
      "Comprehensive guide on changing the registered office address of a Private Limited Company, including procedures, requirements, and compliance aspects.",
    overview: [
      {
        heading: "Overview of the Change in Registered Office",
        content:
          "The registered office of a company is its official address for receiving legal and government correspondence. Any change in this address must be updated with the Registrar of Companies (ROC) within 15 days to ensure compliance with the Companies Act.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Updating Registered Office Address",
        content:
          "Ensures legal compliance, facilitates accurate communication with government bodies, and reflects the company's operational realities.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Address Change",
        content:
          "Proof of new address (e.g., utility bill not older than 2 months), No Objection Certificate (NOC) from the property owner, lease or rent agreement, and board resolution approving the change.",
      },
    ],
    Listicles: [
      {
        category: "Mandatory Annual Compliances",
        documents: [
          "Appointment of Auditor each year",
          "Maintenance of Statutory Registers (members, loans, charges, investments)",
          "Preparation & filing of Financial Statements (Trading A/c, P&L, Balance Sheet)",
          "Director’s Report filing via Form AOC‑4 (Sect. 134) + signed board minutes",
          "Income Tax Return (ITR) by 30 September (Section 12A/80G holders)",
          "At least two Board Meetings (max 90 days gap)",
          "AGM by 30 September + Form MGT‑15 within 30 days",
          "File AOC‑4 within 30 days of AGM",
          "File MGT‑7 within 60 days of AGM (or 60 days from due date)",
        ],
      },
      {
        category: "Event‑Based Compliances",
        documents: [
          "Transfer or Allotment of Shares",
          "Appointment/Resignation of Directors or Auditors",
          "Change of Company Name",
          "Amendment of MoA",
          "Appointment of Key Managerial Personnel (KMP)",
          "Receipt of Share Application Money",
          "Alteration in Company Structure (merger, conversion)",
        ],
      },
      {
        category: "Tax Compliance Requirements",
        documents: [
          "Registration under Section 12A via Form 10A",
          "Adherence to Section 11 (application of income)",
          "80G certification via Form 10B for donor deductions",
        ],
      },
      {
        category: "Penalties for Non‑Compliance",
        documents: [
          "Revocation of license for fraudulent operation",
          "Company fines: ₹10 lakh to ₹1 crore",
          "Officer fines/imprisonment: up to ₹25 lakh or both",
          "Fraud penalties under Section 447: stringent fines & imprisonment",
        ],
      },
      {
        category: "Due Dates for Compliance Filings",
        documents: [
          "AGM: On or before 30 September",
          "Form AOC‑4: Within 30 days of AGM",
          "Form MGT‑7: Within 60 days of AGM",
          "Income Tax Return: On or before 30 September",
        ],
      },
    ],
    registrationProcedure: [
      {
        heading: "Change Within the Same City, Town, or Village",
        content:
          "Conduct a Board Meeting to pass a resolution approving the change. File Form INC-22 with the ROC within 15 days of passing the board resolution.",
        penalties: {
          description: "Failure to comply may result in penalties.",
          penaltyTable: [
            {
              serialNumber: "1",
              particulars: "Delay in filing Form INC-22",
              fine: "₹1,000 per day of default up to ₹1,00,000",
            },
          ],
        },
      },
      {
        heading:
          "Change Within the Same State but Outside the Existing City/Town/Village",
        content:
          "Hold a Board Meeting to fix the date, time, and venue for an Extra-Ordinary General Meeting (EGM). Pass a special resolution at the EGM for address change. File Form MGT-14 within 30 days of passing the resolution. File Form INC-22 within 15 days of passing the resolution.",
        penalties: {
          description: "Non-compliance may attract penalties.",
          penaltyTable: [
            {
              serialNumber: "1",
              particulars: "Delay in filing Form MGT-14",
              fine: "₹1,000 per day of default up to ₹1,00,000",
            },
          ],
        },
      },
      {
        heading:
          "Change Within the Same State but from One ROC Jurisdiction to Another",
        content:
          "Conduct a Board Meeting and finalize the EGM schedule. Pass a special resolution at the EGM to amend the Memorandum of Association (MOA). Publish an advertisement in both English and regional language newspapers. File Form MGT-14 within 30 days of the resolution. Apply to the Regional Director using Form INC-23.",
        penalties: {
          description: "Delays can lead to legal complications.",
          penaltyTable: [
            {
              serialNumber: "1",
              particulars: "Failure to obtain Regional Director approval",
              fine: "As prescribed under the Companies Act",
            },
          ],
        },
      },
      {
        heading: "Change from One State to Another",
        content:
          "Conduct a Board Meeting to schedule the EGM. Pass a special resolution in the EGM for shifting the registered office. Publish notices in newspapers (English and regional language). Notify affected stakeholders individually (creditors, depositors, debenture holders). File Form MGT-14 within 30 days of the resolution. Apply to the Regional Director using Form INC-23.",
        penalties: {
          description: "Non-adherence may result in rejection of application.",
          penaltyTable: [
            {
              serialNumber: "1",
              particulars: "Incomplete documentation",
              fine: "Application may be rejected",
            },
          ],
        },
      },
    ],
    feesStructure: [
      {
        heading: "MCA Fees for Change in Registered Address",
        description: "Fees applicable based on the nominal share capital.",
        feeTable: [
          { category: "Less than ₹1,00,000", amount: "₹200" },
          { category: "₹1,00,000 to ₹4,99,999", amount: "₹300" },
          { category: "₹5,00,000 to ₹24,99,999", amount: "₹400" },
          { category: "₹25,00,000 to ₹99,99,999", amount: "₹500" },
          { category: "₹1,00,00,000 or more", amount: "₹600" },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Address Change",
        description:
          "Estimated timeframes for different types of address changes.",
        steps: [
          {
            title: "Change Within Same City",
            duration: "15–30 days",
            description: "Includes board resolution and filing Form INC-22.",
          },
          {
            title: "Change Within Same State (Different City)",
            duration: "30–45 days",
            description: "Includes EGM, special resolution, and filings.",
          },
          {
            title: "Change Between States",
            duration: "45–60 days",
            description:
              "Involves Regional Director approval and multiple filings.",
          },
        ],
        totalTime: "15–60 days depending on the nature of change",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Our Services",
        description: [
          "Expert guidance throughout the address change process.",
          "Assistance with documentation and filings.",
          "Ensuring compliance with the Companies Act, 2013.",
        ],
        points: [
          "Experienced professionals",
          "Timely execution",
          "Affordable pricing",
        ],
        footerText: "Contact us for a hassle-free address change experience.",
      },
    ],
    faq: [
      {
        question: "What is the registered office of a company?",
        answer:
          "It is the official address of a company, as recorded with the Registrar of Companies (ROC), where all official communications are sent.",
      },
      {
        question: "Can I change the registered office of the company?",
        answer:
          "Yes, a company can change its registered office address by following the procedures laid out in the Companies Act, 2013.",
      },
      {
        question:
          "How long does it take to change the registered office address?",
        answer:
          "The timeline varies based on the nature of the change, ranging from 15 to 60 days.",
      },
      {
        question:
          "Is it mandatory to alter the MOA and AOA under the Companies Act, 2013?",
        answer:
          "Alteration of the Memorandum of Association (MOA) is required when shifting the registered office to a different state.",
      },
      {
        question: "Is the registered office the same as the head office?",
        answer:
          "Not necessarily. The registered office is the legal address for ROC communication, while the head office is where major operations occur.",
      },
      {
        question: "Is changing the registered office an easy process?",
        answer:
          "The complexity depends on the type of change. Changes within the same city are straightforward, while inter-state changes involve more documentation and approvals.",
      },
      {
        question:
          "How to intimate the ROC about the change in registered office?",
        answer:
          "You must file Form INC-22 with the ROC within 15 days of the change. If the change involves a special resolution, Form MGT-14 must also be filed.",
      },
      {
        question: "What documents are required under Form INC-22?",
        answer:
          "Proof of the new address, NOC from the property owner, lease or rent agreement, and copy of the board resolution approving the address change.",
      },
      {
        question:
          "What documents are required while finalizing a registered office address at incorporation?",
        answer:
          "Utility bill (not older than 2 months), property tax receipt (if applicable), NOC from the landlord, and lease or rent agreement.",
      },
      {
        question: "Can two companies have the same registered address?",
        answer:
          "Yes, multiple companies can share the same registered office address, provided each has proper authorization and a valid.",
      },
    ],
  },
  "change-in-share-capital": {
    title: "Change in Share Capital",
    description:
      "Comprehensive guidance on altering a company's share capital under the Companies Act, 2013, covering definitions, types of changes, required documents, procedures, timelines, and FAQs.",
    overview: [
      {
        heading: "Overview of Change in Share Capital",
        content:
          "Deciding the amount of capital to invest is one of the most crucial steps during a company’s incorporation. As the business grows and seeks to scale its operations—whether in size, scope, or structure—it may require additional funding, leading to the need for increasing or altering the company’s share capital. A company can only issue shares up to the limit of its authorized share capital, defined under Section 2(8) of the Companies Act, 2013 in the Capital Clause of the Memorandum of Association (MOA). If a company needs to raise more funds than currently permitted, it must follow prescribed procedures to increase its authorized share capital before issuing shares beyond the existing limit.",
      },
      {
        heading: "Meaning of Share Capital",
        content:
          "Share capital refers to the total capital raised by a company through the issuance of shares, representing the portion of equity funded by shareholders in exchange for ownership. It is divided into a fixed number of shares with predetermined face value. When a company decides to raise additional funds through share issuance, it must first verify its current authorized share capital in the MOA. A company cannot issue shares beyond this limit unless it officially increases the authorized share capital. If permitted by the Articles of Association (AOA), it may alter share capital by filing necessary forms and obtaining ROC approval.",
      },
      {
        heading: "Meaning of Authorized Capital and Nominal Capital",
        content:
          "Authorized (nominal) capital is the maximum amount of share capital a company is permitted to issue, as stated in its MOA under Section 2(8) of the Companies Act, 2013. Changing share capital is governed by Sections 13, 61, and 64 of the Companies Act, 2013. To raise additional funds beyond the current authorized limit, the company must amend its MOA and follow statutory procedures, including passing resolutions and filing with the ROC.",
      },
      {
        heading: "Key Characteristics of Change in Share Capital",
        content:
          "● Ownership Rights & Liabilities: Share capital represents a shareholder’s stake, entitling rights such as voting, dividends, and claims on assets during liquidation.  \n● Movable Property: Under the Sale of Goods Act, 1930, shares are movable property (excluded from 'goods'), transferable unless restricted by AOA.  \n● Identification by Share Numbers: Shares have unique numbers; in dematerialized form, ownership is recorded electronically.  \n● Transferability: Shares are freely transferable per AOA rules, allowing transfer of ownership among investors.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Altering Share Capital",
        content:
          "Altering share capital provides strategic advantages:  \n● Access to Additional Funding: Increases ability to raise capital for expansion or new projects.  \n● Flexibility in Capital Structure: Enables consolidation, subdivision, or conversion to optimize shareholding patterns and liquidity.  \n● Improved Liquidity: Sub-division or consolidation can make shares more accessible or align with market expectations.  \n● Financial Restructuring: Reduction or cancellation can adjust capital to realistic asset values and remove unpaid capital.  \n● Alignment with Business Goals: Tailors share capital structure to evolving business needs, investor preferences, or regulatory requirements.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Change in Share Capital",
        content:
          "When planning alterations such as increase, consolidation, sub-division, conversion, or reduction of share capital, the company must submit:  \n● Notice of Extraordinary General Meeting (EGM) with explanatory statement  \n● Certified copy of the resolution passed at the shareholders’ meeting  \n● Updated Memorandum of Association reflecting proposed change  \n● Updated Articles of Association aligned with change  \n● Board resolution authorizing alteration of MOA/AOA  \n● Shareholders’ resolution approving change in share capital  \n● Audited financial statements or balance sheets for the last three financial years  \n● Resolution approving consolidation/sub-division with detailed justification  \n● Evidence of new capital structure and classification post-change  \n● Affidavit verifying contents of petition/application  \n● Bank draft or challan confirming payment of prescribed statutory fee  \n● Executed Vakalatnama or Memorandum of Appearance, if applicable  \n● Two additional copies of the application filed  \n● Any other supporting documents as required by ROC or NCLT.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Change in Share Capital",
        content:
          "Step-by-Step Process:  \n1. Issue Notice for Board Meeting: Issue notice at least seven days in advance, stating agenda to alter share capital.  \n2. Convene Board Meeting: Discuss and approve proposed change via Board Resolution, subject to shareholder consent.  \n3. Schedule Shareholders’ Meeting: Fix date, time, and venue for EGM or AGM, as applicable.  \n4. Send Notice to Shareholders: Send formal notice at least 21 clear days before meeting, including explanatory statement.  \n5. Hold Shareholders’ Meeting: Conduct EGM/AGM on scheduled date; shareholders pass ordinary or special resolution approving change.  \n6. File with ROC: File necessary forms (e.g., Form SH-7 for ordinary resolution changes or Form MGT-14 for special resolutions) within 30 days of passing resolution, along with updated MOA/AOA and prescribed fees.  \nPenalty for Delay: Failure to notify ROC within 30 days may attract penalty up to ₹10,000 per day and maximum fine up to ₹5,00,000 for company or responsible officers.",
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for Change in Share Capital",
        description:
          "ROC filing fees vary based on the company’s authorized capital and nature of alteration. Fees must be paid via bank draft or challan as per MCA schedule at time of filing forms.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Change in Share Capital",
        description: "Typical timeline from board approval to ROC filing.",
        steps: [
          {
            title: "Board Meeting and Resolutions",
            duration: "1-2 weeks",
            description:
              "Issue notice, convene board meeting, and pass board resolution approving change.",
          },
          {
            title: "Shareholders’ Meeting",
            duration: "3-4 weeks",
            description:
              "Send 21-day notice, hold EGM/AGM, pass shareholders’ resolution.",
          },
          {
            title: "ROC Filing",
            duration: "Within 30 days of resolution",
            description:
              "Prepare updated MOA/AOA, file Form SH-7 and/or MGT-14 with prescribed fees.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose CorpBiz for Change in Share Capital",
        description: [
          "We provide end-to-end support for altering share capital under the Companies Act, 2013.",
        ],
        points: [
          "Expert guidance on statutory procedures and documentation",
          "Timely filing and compliance to avoid penalties",
          "Tailored advice for optimal capital structure",
          "High success rate in ROC/NCLT applications",
        ],
      },
    ],
    faq: [
      {
        question: "What is Change in Share Capital?",
        answer:
          "Any alteration made to a company’s issued, authorized, or paid-up capital, including increase, reduction, consolidation, sub-division, conversion between shares and stock, as per Companies Act, 2013.",
      },
      {
        question: "Can Paid-up Capital be Increased?",
        answer:
          "Yes. A company can issue additional shares to existing or new shareholders by passing necessary resolutions and filing with ROC, subject to authorized capital limit.",
      },
      {
        question: "Can a Company Reduce its Share Capital?",
        answer:
          "Yes. Reduction requires compliance with Section 66, approval from NCLT (except in certain cases like buyback or redemption of preference shares), and filing with ROC.",
      },
      {
        question:
          "What is the Difference Between Authorized Capital and Paid-up Capital?",
        answer:
          "Authorized Capital is the maximum share capital a company can issue as per MOA. Paid-up Capital is the amount actually received by the company from shareholders in exchange for shares issued.",
      },
      {
        question: "How is Capital Raised Initially?",
        answer:
          "Through issuance of shares via private placement or public offering (IPO), subject to compliance with SEBI regulations if public.",
      },
      {
        question: "Can a Company Spend Share Capital Directly?",
        answer:
          "No. Share capital represents ownership value and is used for acquiring assets or financing growth; day-to-day expenses are funded through working capital or revenue.",
      },
    ],
  },
  "change-in-struck-off-companies": {
    title: "Revival of Struck Off Companies – Hassle-Free Restoration Services",
    description:
      "Guidance on restoring companies struck off the Register under the Companies Act, 2013, covering eligibility, grounds, benefits, documents, procedures, timelines, CFSS-2020 context, and FAQs.",
    overview: [
      {
        heading: "Overview on Revival of Struck Off Companies",
        content:
          "A strike-off is removal of a company's name from the Register by the Registrar under the Companies Act, 2013, either voluntarily or compulsorily. Unlike winding up, it is a temporary closure: revival is possible up to 20 years from Gazette notification under Section 252. Eligible parties (company, director, shareholder, creditor, employee) can apply for restoration—within 3 years for compulsory strike-offs and within 20 years for voluntary strike-offs.",
      },
      {
        heading: "Who Can Apply for Revival of Struck Off Companies?",
        content:
          "Eligible applicants under Section 252 include:  \n● The company itself (through directors or authorized representatives)  \n● Any creditor or member with financial interest  \n● Workmen or employees employed at time of strike-off",
      },
      {
        heading: "Grounds for Revival of Struck Off Companies",
        content:
          "NCLT may restore if valid grounds are shown:  \n● Ownership of immovable property held by the company  \n● Regulatory compliance evidence (GST, Income Tax, Provident Fund, etc.)  \n● Ongoing business operations (active bank transactions or similar)  \n● Annual license renewals showing continuity  \n● Public interest and supporting evidence proving operational status",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Revival of Struck Off Companies in India",
        content:
          "● Creditor Recovery: Enables legal action to recover dues with interest after revival.  \n● Enforcement of Liabilities: Company and directors remain accountable for past liabilities.  \n● Avoid/Reverse Director Disqualification: Revival prevents or reverses disqualification under Section 164 for non-filing of returns.  \n● Prevent Legal Prosecution: Timely revival and compliance can avoid or withdraw prosecution recommended by ROC.  \n● Reinstatement of Directorship: Disqualified directors can resume positions post-revival and compliance.  \n● File Overdue Returns: Allows filing pending annual returns/statutory documents by paying nominal fees.  \n● Waiver of Additional Penalties: No further proceedings if overdue filings submitted within scheme’s period.  \n● Withdrawal of Prosecution: Existing legal proceedings may be withdrawn upon full compliance.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Revival of Struck Off Companies",
        content:
          "● Certificate of Incorporation  \n● Memorandum of Association (MOA)  \n● Audited Financial Statements from date of strike-off to support operations  \n● Bank Statements evidencing active transactions  \n● Striking Off Order issued by ROC  \n● Affidavit Verifying the Petition  \n● Board Resolution authorizing filing of revival petition  \n● Permanent Account Number (PAN) of the company  \n● Income Tax Returns for relevant period  \n● Property Documents if company owns immovable assets  \n● Memorandum of Appearance or Vakalatnama authorizing legal representative  \n● Any other supporting documents proving operational status",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Revival of Struck Off Companies",
        content:
          "Step-by-Step Process:  \n1. Filing the Application/Petition: File Form NCLT-9 with NCLT, along with demand draft of ₹1,000 favoring Pay and Accounts Officer, MCA.  \n2. Serving Copy of Petition: Serve copy to ROC and relevant parties at least 14 days before hearing.  \n3. Hearing by the Tribunal: NCLT hears petitioner and ROC; if satisfied revival grounds exist, may order restoration.  \n4. Order of Revival: Tribunal issues restoration order; applicant must deliver certified copy to ROC within 30 days; ROC publishes order in Official Gazette; applicant bears costs; company must comply with pending filings as directed.  \n5. Filing Form INC-28: File copy of Tribunal’s order with ROC in Form INC-28 within 30 days.  \n6. Publication in Official Gazette: ROC publishes name restoration in Gazette.  \n7. Filing of Pending Documents: Submit all overdue annual returns, financial statements, and other required documents to ROC to ensure full compliance.",
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for Revival of Struck Off Companies",
        description:
          "Fees include NCLT filing fee (e.g., demand draft ₹1,000 for petition) and ROC filing fees for Form INC-28 and overdue documents as per MCA schedule. Exact ROC fees vary by company type and capital; payable via challan or bank draft at filing time.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Revival of Struck Off Companies",
        description:
          "Typical durations from petition to Gazette publication and compliance.",
        steps: [
          {
            title: "Preparation and Filing Petition",
            duration: "1-2 weeks",
            description:
              "Assemble documents, draft petition (Form NCLT-9), obtain demand draft, and file with NCLT.",
          },
          {
            title: "Serving Petition and Scheduling Hearing",
            duration: "2-4 weeks",
            description:
              "Serve ROC and stakeholders; wait for NCLT listing and hearing date.",
          },
          {
            title: "NCLT Hearing and Order",
            duration: "Depends on tribunal schedule (4-8 weeks)",
            description:
              "Attend hearing; obtain restoration order if grounds accepted.",
          },
          {
            title: "Post-Order Filings",
            duration: "Within 30 days of order",
            description:
              "File Form INC-28, deliver certified copy to ROC, publish in Gazette, then file overdue returns/statements.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Corpbiz for Revival of Struck Off Companies",
        description: [
          "End-to-end support for restoration under Companies Act, 2013.",
        ],
        points: [
          "10+ years of expertise in legal and compliance consulting",
          "Successfully handled 500+ struck off company revival cases",
          "In-depth case evaluation for eligibility and grounds",
          "Complete assistance in drafting and filing NCLT petitions",
          "Professional representation at NCLT hearings",
          "Expert advisory on Section 252 and related provisions",
          "Support with ROC filings and post-revival compliance",
          "Seamless guidance through the entire restoration process",
        ],
      },
    ],
    faq: [
      {
        question:
          "Under which legal provision can the ROC revive a struck-off company?",
        answer:
          "Under Section 252 of the Companies Act, 2013, via NCLT order or appeal.",
      },
      {
        question: "What does “strike off” mean in company law?",
        answer:
          "Removal of a company's name from the register, rendering it inactive.",
      },
      {
        question:
          "Can any company director file an appeal to revive a struck-off company?",
        answer:
          "Yes, directors, shareholders, creditors, or other aggrieved parties may apply to NCLT.",
      },
      {
        question:
          "What is the limitation period for revival in case of compulsory strike-off?",
        answer: "Within three years from date of Registrar’s order.",
      },
      {
        question:
          "What is the limitation period for revival in case of voluntary strike-off?",
        answer:
          "Within twenty years from date of Gazette notification of strike-off.",
      },
      {
        question:
          "Can the ROC strike off a company for non-filing of MGT-7 and AOC-4?",
        answer:
          "Yes, non-filing of annual returns and financial statements for three consecutive years may lead to strike-off.",
      },
      {
        question:
          "What are the common grounds for reviving a struck-off company?",
        answer:
          "Grounds include active operations wrongly struck off, ownership of assets, compliance evidence, or public interest.",
      },
      {
        question: "What are the benefits of reviving a struck-off company?",
        answer:
          "Restores legal status, enables recovery of dues, enforces liabilities, reinstates directors, allows filing overdue returns, and avoids further penalties.",
      },
      {
        question: "Which documents are required to file an appeal for revival?",
        answer:
          "Key documents: petition (Form NCLT-9), ROC strike-off order, audited financials, affidavits, bank statements, MOA, Board resolution, and other evidence of operations.",
      },
      {
        question:
          "What is the legal procedure for reviving a struck-off company?",
        answer:
          "File appeal under Section 252 with NCLT, serve petition, attend hearing, obtain restoration order, file Form INC-28 and overdue filings with ROC.",
      },
      {
        question: "What is the time limit to submit the NCLT order to the ROC?",
        answer:
          "Within 30 days of receipt of certified copy of the NCLT restoration order.",
      },
      {
        question: "Is publication of the NCLT order necessary after revival?",
        answer:
          "Yes; ROC publishes order in Official Gazette and often local newspapers to notify restoration.",
      },
      {
        question:
          "How did the Companies Fresh Start Scheme, 2020 help in reviving struck-off companies?",
        answer:
          "CFSS-2020 waived additional fees for delayed filings and simplified revival under Section 252/Rule 87A, aiding restoration without heavy penalties.",
      },
    ],
  },
  "change-in-directors": {
    title: "Change in Directors",
    description:
      "Complete guide to appointing, resigning, and removing directors under the Companies Act, 2013, including procedures, documents, timelines, and FAQs.",
    overview: [
      {
        heading: "Overview of Change in Directors",
        content:
          "A company cannot act on its own and must function through its directors, who manage its affairs and decision‑making. Appointed under the Companies Act, 2013, directors steer daily operations, ensure legal compliance, drive profitability, and uphold transparency. Any addition, resignation, or removal of a director must be reported by filing Form DIR‑12 with the ROC within 30 days of the board or general meeting resolution.",
      },
      {
        heading: "Meaning and Legal Definition of Director",
        content:
          "Under Section 2(13) of the Companies Act, 1956, a director is any individual performing the functions of a director, regardless of title. The AOA of a company lays down rules on appointment, roles, retirement, and remuneration to ensure directors act within a legal framework.",
      },
    ],
    benefits: [],
    documentsRequired: [
      {
        heading: "Documents Required for Director Changes",
        content:
          "● Certified copy of board/shareholders’ resolution  \n● Consent letter of director (Form DIR‑2)  \n● DIR‑12 attachments: resolution CTC, consent letter, appointment letter  \n● DIR‑11 resignation letter (for resignations)  \n● Special notice (for removals)  \n● Form MGT‑14 attachments (where required)  \n● Proof of DIN application (Form DIR‑3)  \n● Any other ROC‑specified supporting documents",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Appointment of a Director",
        content:
          "1. Obtain DIN via Form DIR‑3.  \n2. Pass board resolution in a Board Meeting.  \n3. Issue 21‑day notice for general meeting.  \n4. Pass shareholders’ resolution at GM.  \n5. Issue appointment letter.  \n6. File Form DIR‑12 within 30 days.  \n7. File Form MGT‑14 (and MBP‑1) disclosing interest.",
      },
      {
        heading: "Procedure for Resignation of a Director",
        content:
          "1. Director submits resignation letter.  \n2. Resignation effective on receipt or specified date.  \n3. Director files Form DIR‑11 with ROC.  \n4. Company passes board resolution acknowledging resignation.  \n5. Company files Form DIR‑12 within 30 days.",
      },
      {
        heading: "Procedure for Removal of a Director",
        content:
          "1. Shareholders pass ordinary resolution at GM.  \n2. Special notice is given by proposer.  \n3. Circulate meeting notice 7 days before GM.  \n4. Director is heard before voting.  \n5. File Form MGT‑14 within 30 days with CTC of resolution.",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Corpbiz Support for Change in Directors",
        description: [
          "Our experts handle end‑to‑end ROC filings for director appointments, resignations, and removals, ensuring full compliance.",
        ],
        points: [
          "Complete documentation and form preparation",
          "On‑time ROC e‑filings (DIR‑3, DIR‑11, DIR‑12, MGT‑14)",
          "Guidance on DIN, board/EGM notices, and resolutions",
          "Support for complex board restructurings",
        ],
      },
    ],
    faq: [
      {
        question: "Can a company remove its director without consent?",
        answer:
          "Yes, under Section 169 of the Companies Act, 2013 shareholders can remove a director via ordinary resolution, after giving the director an opportunity to be heard.",
      },
      {
        question: "Is resignation the same as removal?",
        answer:
          "No. Resignation is voluntary and filed via DIR‑11; removal is involuntary, initiated by shareholders, and filed via MGT‑14.",
      },
      {
        question: "What form is required to notify a director’s appointment?",
        answer:
          "Form DIR‑12 must be filed within 30 days of the appointment resolution.",
      },
      {
        question: "What is DIN?",
        answer:
          "Director Identification Number (DIN) is a unique ID allotted by MCA, mandatory for any director appointment.",
      },
      {
        question: "Who can be appointed as a director?",
        answer:
          "Any individual of sound mind, solvent, not disqualified under the Act, and holding a valid DIN.",
      },
    ],
  },
  "change-in-llp-agreement": {
    title: "Change in LLP Agreement",
    description:
      "Comprehensive guide to amending your LLP Agreement under the LLP Act, 2008, covering overview, common reasons, required documents, procedures, fees, and FAQs.",
    overview: [
      {
        heading: "Overview of Change in LLP Agreement",
        content:
          "A Limited Liability Partnership (LLP) combines benefits of a company and a partnership: partners enjoy limited liability while operating under the LLP Act, 2008. Every LLP in India must register its formal LLP Agreement with the ROC, defining roles, responsibilities, and operational structure. As your business grows or shifts—whether in activities, capital, or partner roles—you may need to amend this foundational agreement by executing a supplementary deed signed by all partners and filing it with the ROC.",
      },
      {
        heading: "Perpetual Existence and Flexibility",
        content:
          "Unlike traditional partnerships that dissolve on a partner’s exit or death, an LLP continues seamlessly. This perpetual existence gives LLPs the flexibility to adapt over time, making periodic amendments to their agreement essential for reflecting new business objectives, capital structures, or partner arrangements.",
      },
    ],
    benefits: [
      {
        heading: "Common Reasons for Changing an LLP Agreement",
        content:
          "● Change in business activities or clauses  \n● Change in capital contribution and profit‑sharing ratio  \n● Modification of partner rights and duties  \n● Alteration of key legal clauses (jurisdiction, notice periods, LLP duration)",
      },
      {
        heading: "Most Common Changes in an LLP",
        content:
          "● General amendments to operational or legal clauses  \n● Change in LLP name (rebranding)  \n● Change in business objectives or scope  \n● Change of registered office (within same state or across states)  \n● Addition, resignation, or removal of a partner  \n● Transmission of partner rights on death  \n● Change in profit and loss sharing ratio  \n● Complete sale or transfer of LLP ownership",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Change in LLP Agreement",
        content:
          "● PAN card of the LLP  \n● Certificate of Incorporation  \n● Original, amended & supplementary LLP Agreement  \n● Digital Signature Certificate (DSC) of an authorized partner  \n● Any other ROC‑specified supporting documents",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Making Changes in LLP Agreement",
        content:
          "1. Conduct a partner meeting and pass a resolution approving the amendments.  \n2. Authorize a designated partner for MCA filing.  \n3. Draft and execute the revised LLP Agreement or supplementary deed on appropriate stamp paper.  \n4. Obtain signatures of all partners and attestation by two witnesses.  \n5. File Form 3 with the ROC within 30 days of passing the resolution, attaching the updated agreement and supporting documents.",
      },
    ],
    feesStructure: [
      {
        heading: "Fees and Stamp Duty",
        description:
          "Stamp duty varies by state and nature of changes. Ensure payment of applicable stamp duty on the supplementary deed before filing. ROC filing fees apply as per MCA schedule.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for LLP Agreement Amendment",
        description: "Typical timelines for key steps:",
        steps: [
          {
            title: "Partner Resolution & Agreement Execution",
            duration: "1–2 weeks",
            description: "Hold meeting, pass resolution, draft & execute deed.",
          },
          {
            title: "Stamp Duty Payment",
            duration: "Varies by state",
            description: "Pay applicable stamp duty on executed deed.",
          },
          {
            title: "ROC Filing (Form 3)",
            duration: "Within 30 days of resolution",
            description: "File online with supporting documents.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose CorpBiz for LLP Agreement Amendments",
        description: [
          "End‑to‑end assistance with drafting, execution, stamping, and ROC e‑filings to ensure seamless compliance.",
        ],
        points: [
          "Expert guidance on LLP Act, 2008 requirements",
          "Timely preparation and attestation of deeds",
          "Accurate calculation and payment of stamp duty",
          "On‑time Form 3 filing and follow‑up with ROC",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Supplementary LLP Agreement?",
        answer:
          "An additional deed recording amendments to the original LLP Agreement, signed by all partners and filed with ROC.",
      },
      {
        question: "How long does an LLP Agreement change take?",
        answer:
          "Typically completed within 15–30 working days, depending on execution, stamp duty payment, and MCA approval.",
      },
      {
        question: "Are LLP amendments visible online?",
        answer:
          "Yes. Once Form 3 is approved, the updated agreement details appear on the MCA portal.",
      },
      {
        question: "What steps are required to update my LLP Agreement?",
        answer:
          "Pass a partners’ resolution, draft & execute supplementary deed, pay stamp duty, then file Form 3 within 30 days.",
      },
      {
        question: "What changes can be made in an LLP Agreement?",
        answer:
          "Common changes include business activities, capital structure, partner composition, registered office, and legal clauses.",
      },
      {
        question: "Is stamp duty payable on LLP amendments?",
        answer:
          "Yes. Stamp duty is applicable on the supplementary deed and varies by state and nature of changes.",
      },
    ],
  },

  "liquidation-of-a-company": {
    title: "Liquidation of a Company – A Complete Overview",
    description:
      "End‑to‑end guide to company liquidation in India under the IBC, covering modes, liquidator roles, procedures, timelines, costs, impacts, and FAQs.",
    overview: [
      {
        heading: "What is Liquidation of a Company?",
        content:
          "Liquidation is the legal process of closing down a company and distributing its assets to clear all liabilities. Triggered by insolvency, continuous losses, or voluntary decision, it marks the formal end of the company’s existence under Indian law, ensuring assets are converted to cash, creditors paid, and any surplus returned to shareholders.",
      },
      {
        heading: "How Company Liquidation Works in India",
        content:
          "Governed by the Insolvency and Bankruptcy Code, 2016, liquidation can be voluntary (members’ or creditors’ voluntary liquidation) or compulsory (ordered by NCLT). The process involves asset valuation, sale, claims verification, and distribution in priority order, with oversight by an appointed liquidator.",
      },
    ],
    benefits: [
      {
        heading: "Modes of Liquidation",
        content:
          "● Voluntary Liquidation – Initiated by members or creditors when the business opts to close operations.  \n● Compulsory Liquidation – Ordered by NCLT due to insolvency or failed resolution plan.",
      },
      {
        heading: "Role of the Liquidator",
        content:
          "A liquidator—often the RP—oversees asset realization, settling creditor claims, distributing surplus to shareholders, and reporting to NCLT/IBC authorities.",
      },
    ],
    documentsRequired: [],
    registrationProcedure: [
      {
        heading: "Procedure for Compulsory Liquidation",
        content:
          "1. Application to NCLT by financial/operational creditor for CIRP (default > ₹1 lakh).  \n2. NCLT appoints Interim Resolution Professional (IRP).  \n3. Moratorium halts operations and asset transfers.  \n4. IRP verifies claims and forms CoC within 30 days.  \n5. CoC appoints or confirms RP and drafts resolution plan (180‑day window).  \n6. NCLT sanctions plan or, if failed, passes liquidation order.  \n7. Liquidator takes control, sells assets, pays creditors, and distributes surplus.",
      },
      {
        heading: "Procedure for Voluntary Liquidation",
        content:
          "1. Directors declare solvency affidavit (MVL) or insolvency triggers CVL.  \n2. Board approves liquidation and calls GM.  \n3. Special resolution in GM to wind up and appoint liquidator.  \n4. Liquidator advertises in newspapers, invites claims.  \n5. Assets realized and claims settled within 12 months.  \n6. Liquidator files final report and applies to NCLT for dissolution.",
      },
    ],
    feesStructure: [
      {
        heading: "Liquidation Costs and Fees",
        description:
          "IBBI regulations prescribe liquidator remuneration and process fees as a percentage of assets realized, decreasing over the course of liquidation.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeframe for Liquidation",
        description: "Overall duration varies by complexity and mode:",
        steps: [
          {
            title: "Compulsory Liquidation",
            duration: "Several months to 2 years",
            description:
              "Dependent on resolution process, creditor claims, and NCLT orders.",
          },
          {
            title: "Voluntary Liquidation",
            duration: "Up to 12 months",
            description:
              "From declaration of solvency/insolvency to NCLT dissolution order.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Trust CorpBiz for Company Liquidation?",
        description: [
          "Our team offers expert guidance, tailored solutions, and comprehensive handling of legal, financial, and regulatory aspects to ensure a smooth, compliant liquidation.",
        ],
        points: [
          "Experienced professionals in IBC and company law",
          "Customized voluntary and compulsory liquidation support",
          "Transparent communication and regular updates",
          "Post‑liquidation assistance for complete closure",
        ],
      },
    ],
    faq: [
      {
        question: "What happens when liquidating a company?",
        answer:
          "Assets are sold, creditors paid in priority, surplus (if any) goes to shareholders, and the company is dissolved from the registry.",
      },
      {
        question: "Is liquidation good or bad?",
        answer:
          "Liquidation is a neutral legal process; voluntary liquidation may be strategic, while compulsory liquidation follows insolvency.",
      },
      {
        question: "What happens to directors during liquidation?",
        answer:
          "Directors lose control; they must cooperate with the liquidator and may face personal liability for wrongful acts.",
      },
      {
        question: "How long does liquidation take in India?",
        answer:
          "Voluntary liquidation can finish within 12 months; compulsory liquidation may extend up to two years depending on complexity.",
      },
      {
        question: "Who benefits from liquidation?",
        answer:
          "Creditors benefit first; shareholders receive any remaining funds only after debts are fully paid.",
      },
      {
        question:
          "What is the difference between voluntary and compulsory liquidation?",
        answer:
          "Voluntary is member/creditor‑initiated (MVL/CVL), compulsory is NCLT‑ordered following insolvency or failed resolution.",
      },
      {
        question: "What is the role of the liquidator?",
        answer:
          "The liquidator manages asset sales, settles claims, distributes funds, and reports to NCLT/IBC authorities.",
      },
      {
        question: "Can shareholders get money back?",
        answer:
          "Only if surplus remains after all creditor claims are settled; distribution depends on share class and remaining assets.",
      },
      {
        question: "What’s the difference between insolvency and liquidation?",
        answer:
          "Insolvency is inability to pay debts; liquidation is the formal process of selling assets and winding up the company.",
      },
    ],
  },

  "agr-return-filing": {
    title: "AGR Return Filing – A Complete Overview",
    description:
      "End‑to‑end guide to filing Adjusted Gross Revenue returns with the DoT’s SARAS portal, covering definitions, dispute history, filing requirements, process steps, and expert support.",
    overview: [
      {
        heading: "Overview of AGR Return Filing",
        content:
          "Adjusted Gross Revenue (AGR) is the total revenue earned by telecom operators—including user charges and licensing fees—mandated under Section 4 of the Indian Telegraph Act. All license‑holders must file detailed AGR returns with the Controller of Communication Accounts (CCA) under the DoT to ensure regulatory compliance.",
      },
      {
        heading: "Conflict Surrounding AGR Filing",
        content:
          "A dispute arose when DoT included non‑telecom revenues in AGR while operators argued only core telecom income should count. The Supreme Court’s 2019 ruling sided with DoT’s broader view, but a 2021 review judgment prospectively excluded non‑telecom income from AGR calculations.",
      },
    ],
    benefits: [
      {
        heading: "Who Must File AGR Returns?",
        content:
          "● UL‑VNO (Virtual Network Operators)  \n● UL‑ISP (Internet Service Providers)  \n● UL‑ACS (Access Services Category B)  \n● NLD (National Long Distance) Operators  \n● ILD (International Long Distance) Operators",
      },
      {
        heading: "Key Components of Adjusted Gross Revenue",
        content:
          "1. Entry Fee: one‑time, non‑refundable payment (capped at ₹15 crores).  \n2. Annual License Fee: 8% of AGR in year 1 (including 5% USO levy), minimum 10% of entry fee thereafter.  \n3. Spectrum Usage Charges (SUC): weighted average charge based on spectrum holdings (600 MHz–26 GHz).",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for AGR Return Filing",
        content:
          "● Authorization letter for company representative  \n● Certificate of Incorporation  \n● Copy of the Telecom License  \n● Audited Statement of Revenue  \n● Audit Report  \n● Copy of Books of Accounts",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Process to File AGR Returns",
        content:
          "1. Access the SARAS Portal and log in.  \n2. Fill AGR return details in line with DoT guidelines.  \n3. Upload supporting documents (PDFs) and financial data (.xls).  \n4. Download and print the submission for records.  \n5. Review and submit the AGR return.  \n6. Save the portal‑generated submission receipt as proof.",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Corpbiz’s End‑to‑End AGR Return Filing Services",
        description: [
          "Precise AGR liability calculation to minimize compliance risk.",
          "Error‑free return preparation and submission.",
          "Comprehensive document management and uploads.",
          "Proactive liaison with the DoT for status updates.",
          "Secure and prompt SARAS portal filing confirmation.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "How is the license fee for telecom operators calculated?",
        answer:
          "8% of AGR in the first year (including 5% USO levy), and a minimum of 10% of the entry fee from the second year onward, based on service area.",
      },
      {
        question: "What file formats are accepted on the SARAS portal?",
        answer:
          "PDF for textual documents and .xls for financial or tabulated data.",
      },
      {
        question: "Which operators must file AGR returns?",
        answer: "UL‑VNO, UL‑ISP, UL‑ACS, NLD, and ILD license‑holders.",
      },
      {
        question: "What are the main components of AGR?",
        answer: "Entry Fee, Annual License Fee, and Spectrum Usage Charges.",
      },
      {
        question: "What was the AGR dispute in India about?",
        answer:
          "Whether AGR should include non‑telecom revenues; Supreme Court 2019 ruling included them, 2021 review excluded non‑telecom income prospectively.",
      },
      {
        question: "What happens if I don’t file an AGR return?",
        answer:
          "Late filing attracts heavy penalties, interest on dues, and potential suspension or cancellation of telecom licenses.",
      },
    ],
  },

  "form-aoc-4": {
    title: "Form AOC-4 – A Complete Overview",
    description:
      "End‑to‑end guide to annual financial statement filing under the Companies Act, 2013 using Form AOC‑4 (and AOC‑4 CFS/XBRL), covering eligibility, deadlines, benefits, procedures, fees, penalties, and FAQs.",
    overview: [
      {
        heading: "Overview of Form AOC-4",
        content:
          "Every company registered in India must file its financial statements with the RoC annually using Form AOC‑4 within 30 days of the AGM. It includes the financial statements, Board’s Report, Auditor’s Report and necessary disclosures to ensure transparency and accountability. Companies preparing consolidated statements file Form AOC‑4 CFS.",
      },
      {
        heading: "Eligibility and Filing Requirements",
        content:
          "All companies under the Companies Act, 2013 must file AOC‑4. Those with consolidated statements use AOC‑4 CFS. Companies covered by Section 135(1) must attach CSR‑2 with AOC‑4 or AOC‑4 XBRL by March 1. XBRL filing is mandatory for listed companies, companies with paid‑up capital ≥ ₹2 crore, turnover ≥ ₹100 crore, or those following Ind AS.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Filing Form AOC‑4",
        content:
          "● Transparency of financial health through audited statements  \n● Effective communication with shareholders via Board’s and Auditor’s Reports  \n● Informed decision‑making by investors, lenders, and regulators",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Filing AOC‑4",
        content:
          "● Audited financial statements (Balance Sheet & P&L)  \n● Board’s Report  \n● Auditor’s Report  \n● CSR Report (if applicable)  \n● Statement of Subsidiaries (if any)  \n● Notes to Accounts  \n● Other disclosures as required",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Filing Procedure",
        content:
          "1. Pre‑fill company CIN and details on MCA portal.  \n2. Enter financial year dates and approval dates for Board’s and Auditor’s Reports.  \n3. Provide AGM details or reasons if not held.  \n4. Attach required documents (PDF/XBRL).  \n5. Review, digitally sign by authorized signatories (Director/CFO/CS/CA).  \n6. Submit within 30 days of AGM (180 days for OPCs).  \n7. Retain filing acknowledgement for records.",
      },
    ],
    feesStructure: [
      {
        heading: "AOC‑4 Filing Fees",
        description:
          "Government filing fee varies by authorised share capital:",
        feeTable: [
          {
            category: "Less than ₹1,00,000",
            amount: "₹200",
          },
          {
            category: "₹1,00,000 to ₹4,99,999",
            amount: "₹300",
          },
          {
            category: "₹5,00,000 to ₹24,99,999",
            amount: "₹400",
          },
          {
            category: "₹25,00,000 to ₹99,99,999",
            amount: "₹500",
          },
          {
            category: "₹1,00,00,000 or more",
            amount: "₹600",
          },
          {
            category: "Company without share capital",
            amount: "₹200",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Form AOC‑4 Due Dates for FY 2022–23",
        description:
          "Must be filed within 30 days of AGM; for OPCs within 180 days of FY end.",
        steps: [
          {
            title: "AGM held by September 30, 2023",
            duration: "Due by October 29, 2023",
            description: "Standard due date within 30 days of AGM",
          },
          {
            title: "OPC deadline",
            duration: "180 days from FY end",
            description: "Calculated as 180 days from March 31",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose CorpBiz for AOC‑4 Filing",
        description: [
          "Accurate pre‑fill and data entry to avoid portal errors.",
          "Comprehensive document compilation and XBRL tagging.",
          "Timely digital signing and submission within deadlines.",
          "End‑to‑end support for CSR‑2, AOC‑4 CFS and XBRL filings.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is Form AOC‑4?",
        answer:
          "Form AOC‑4 is the annual e‑form to file a company’s financial statements, Board’s Report and Auditor’s Report with the MCA under the Companies Act, 2013.",
      },
      {
        question: "Who must file AOC‑4?",
        answer:
          "All private, public and OPCs in India. Companies with consolidated statements use AOC‑4 CFS. XBRL filing is required for specified capital, turnover or listed status.",
      },
      {
        question: "What is the penalty for late filing?",
        answer:
          "₹100 per day until filing, plus multiplied fees for specified delays (up to 12× standard fee). Directors may face prosecution for severe delays.",
      },
      {
        question: "Is CA certification mandatory?",
        answer:
          "Yes. The form must be certified and digitally signed by a practicing CA, CS or Cost Accountant with membership number and designation.",
      },
      {
        question: "What is the due date for filing?",
        answer:
          "Within 30 days of the AGM; OPCs have 180 days from the end of the financial year.",
      },
      {
        question: "How does AOC‑4 differ from MGT‑7?",
        answer:
          "AOC‑4 files financial statements; MGT‑7 files the annual return detailing shareholding, directors and other statutory information.",
      },
    ],
  },

  "shop-and-establishment-license": {
    title:
      "Shop and Establishment License – An Essential Business Registration in India",
    description:
      "Mandatory registration under the Shop and Establishment Act for shops, commercial establishments, restaurants, offices and other workplaces, ensuring regulated work conditions and employee protections across India.",
    overview: [
      {
        heading: "Overview of Shop and Establishment License",
        content:
          "The Shop and Establishment License regulates working conditions, wages, holidays and employee rights in shops, cafes, restaurants, offices and other establishments under the respective State Shop and Establishment Acts. While the core provisions are uniform, specific rules vary by state.",
      },
      {
        heading: "Applicability",
        content:
          'An "establishment" includes shops, commercial establishments, residential hotels, restaurants, theatres, warehouses and any other entity defined by the State Government. A "shop" covers premises where goods are sold or services provided, including godowns and non‑factory workplaces.',
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining a Shop and Establishment License",
        content:
          "1. Legal Recognition: Grants your business a formal legal identity.\n2. Business Address Proof: Validates your establishment’s address for regulatory use.\n3. Bank Account Opening: Required by banks to open current accounts in the business name.\n4. Investment & Funding: Enhances credibility for loans and investor funding.\n5. Access to Government Schemes: Enables eligibility for state and central incentives.\n6. Quick Online Process: Many states offer fully digital registration for faster compliance.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Shop and Establishment License",
        content:
          "Basic Documents:\n● Employer identity proof (Aadhar, PAN, Voter ID, Driving License)\n● Employer passport‑size photo\n● Cancelled cheque or bank statement with notarized affidavit\n● Photograph of premises\n● Rent agreement or utility bill (electricity/water/property tax)\n\nAdditional (By Entity Type):\n● Companies: Certificate of Incorporation, MOA & AOA\n● Partnership: Partnership Deed with partner details\n● Trusts: List of trustees\n● Co‑operative Societies: List of members & chairman details",
      },
    ],
    registrationProcedure: [
      {
        heading: "Offline Registration Procedure",
        content:
          "1. Submit prescribed application form to Chief Inspector of Labour within 30 days of starting operations, including employer name, establishment address, category and employee count.\n2. Inspector verifies and issues the License certificate for display at premises.\n3. Notify Chief Inspector in writing 15 days prior to permanent closure to cancel the registration.",
      },
      {
        heading: "Online Registration Procedure",
        content:
          "1. Visit the state Labour Department portal and register with email/mobile.\n2. Create establishment profile: business name, employer details, employee count, address, PAN.\n3. Fill Shop & Establishment Registration – Form A and upload all supporting documents.\n4. Pay online registration fees via portal.\n5. Track application status under “Under Scrutiny.”\n6. Download the e‑License once approved.",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading:
          "CorpBiz Process for Securing a Shop and Establishment License",
        description: [
          "Select a service plan and connect with our experts.",
          "Share your business details and specific requirements.",
          "Upload required documents securely via our platform.",
          "We prepare and verify your application for eligibility.",
          "We handle filing, inspections and liaison with the labour department.",
          "Receive your digital or physical License delivered to your doorstep.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question:
          "Is it necessary to obtain approval from the Labour Department?",
        answer:
          "Yes. All eligible businesses must register under the Shop and Establishment Act with the state Labour Department within 30 days of commencing operations.",
      },
      {
        question: "What records must be maintained under the Act?",
        answer:
          "Employers must keep registers of employee attendance, wages, leaves, working hours, deductions, fines, and any inspection reports or notices.",
      },
      {
        question: "When should employee information be submitted?",
        answer:
          "Employee details (joining date, wages, hours, designation) must be provided at registration and updated whenever changes occur, as per state rules.",
      },
      {
        question:
          "What is the due date for Shop and Establishment registration?",
        answer:
          "Registration must be completed within 30 days of starting any commercial operation.",
      },
      {
        question: "What is the purpose of the License?",
        answer:
          "To ensure fair working conditions, compliance with labour laws, workplace safety, hygiene and employee welfare standards.",
      },
      {
        question: "Is self‑registration mandatory?",
        answer:
          "Yes. Business owners must register online via the state labour portal or offline at the local labour office, per state regulations.",
      },
      {
        question:
          "What accounting records should be maintained post‑registration?",
        answer:
          "Maintain sales and purchase registers, tax invoices, salary and wage reports, utility bills, rental agreements and audit reports if applicable.",
      },
      {
        question: "What key points to remember when registering?",
        answer:
          "Register within 30 days; gather all documents; understand state‑specific rules; prominently display the license; renew periodically.",
      },
      {
        question: "What is the fundamental objective of the Act?",
        answer:
          "To regulate working hours, holidays, wages and safety, ensuring proper employee rights and workplace standards.",
      },
      {
        question: "What is the difference between a shop and an establishment?",
        answer:
          "A shop is a premises where goods/services are offered. An establishment includes shops as well as offices, warehouses, restaurants, theatres and other commercial entities.",
      },
    ],
  },

  "trade-license": {
    title: "Trade License – A Complete Overview",
    description:
      "A trade license is an official permit issued by local municipal authorities in India, granting businesses permission to operate specified activities within a designated jurisdiction. It ensures compliance with safety, health, zoning and regulatory standards.",
    overview: [
      {
        heading: "What is a Trade License?",
        content:
          "A trade license grants permission to operate a specific type of business within a municipal area, safeguarding public health and regulating potentially hazardous activities. It is activity–specific and issued by the local municipal corporation.",
      },
      {
        heading: "Why is a Trade License Required?",
        content:
          "Trade licenses ensure businesses operate within legal boundaries, prevent unfair practices, promote healthy competition, and enforce safety and hygiene standards to protect the community.",
      },
    ],
    benefits: [
      {
        heading: "Key Objectives of a Trade License",
        content:
          "1. Regulatory Oversight: Monitors business activities within legal framework.  \n2. Prevention of Unfair Practices: Promotes fair competition.  \n3. Statutory Compliance: Ensures adherence to laws and reduces legal risks.  \n4. Public Health & Safety: Controls hazardous operations and enforces hygiene standards.",
      },
      {
        heading: "Benefits of Trade License Registration",
        content:
          "1. Legal Protection & Recognition: Grants legal status and shields from penalties.  \n2. Financial Credibility & Loan Access: Improves eligibility for funding.  \n3. Customer Trust: Demonstrates compliance and safety commitment.  \n4. Business Growth: Enables partnerships, expansions and government contracts.  \n5. Environmental Compliance: Ensures adherence to safety and pollution norms.  \n6. Tax Benefits: Makes businesses eligible for local and central incentives.  \n7. Continuity & Stability: Prevents legal disruptions.  \n8. Access to Schemes & Subsidies: Unlocks government support programs.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Trade License Application",
        content:
          "● Proof of Identity & Business Address (Aadhar, PAN, Driving License)  \n● Certificate of Incorporation, MOA & AOA (for companies)  \n● Partnership Deed (for firms)  \n● Trust Deed (for trusts)  \n● Property Ownership Documents or Lease Agreement & NOC  \n● Cancelled Cheque & Bank Statement  \n● NOC from Adjacent Businesses  \n● NOC from Pollution Control Board & Fire Department  \n● Certified Layout/Setup Plan of Premises  \n● Khata Certificate (where applicable)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Online Application Process",
        content:
          "1. Register on municipal corporation portal.  \n2. Fill trade license form with business and owner details.  \n3. Upload required documents.  \n4. Pay application fee online.  \n5. Track application using unique number.  \n6. Undergo site inspection if required.  \n7. Download approved license certificate.",
      },
      {
        heading: "Offline Application Process",
        content:
          "1. Visit local municipal office within 30 days of starting business.  \n2. Obtain and fill prescribed application form.  \n3. Submit form with supporting documents.  \n4. Receive unique application number.  \n5. Pay license fee at designated counter.  \n6. Undergo site inspection if required.  \n7. Collect physical or digital license upon approval.",
      },
    ],
    feesStructure: [
      {
        heading: "Trade License Registration Fees",
        description:
          "Fees vary by municipal corporation based on:  \n1. Type of Business  \n2. Location (metro vs rural)  \n3. Premises Size  \n4. Estimated Annual Revenue",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing Time",
        description: "License issuance time varies by region:",
        steps: [
          {
            title: "Metro & Urban Areas",
            duration: "7–15 working days",
            description: "",
          },
          {
            title: "Semi‑Urban & Rural Areas",
            duration: "30–40 working days",
            description: "",
          },
        ],
      },
      {
        heading: "Renewal Timeline",
        description:
          "Renew annually 30 days before expiry; renewal window typically January–March.",
        steps: [],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose CorpBiz for Trade License Services",
        description: [
          "10+ years of experience and 99% success rate",
          "End‑to‑end support: registration, renewal & compliance",
          "Fast filing and expert legal & financial advice",
          "24×7 customer support and post‑registration assistance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Trade License?",
        answer:
          "A trade license is a certificate issued by municipal corporations or local authorities that permits a business to operate legally within a specific jurisdiction in India.",
      },
      {
        question: "What is the purpose of a Trade License?",
        answer:
          "To ensure that businesses comply with safety, health, and legal standards, protecting the community and ensuring fair market practices.",
      },
      {
        question: "What are the different types of Trade Licenses in India?",
        answer:
          "Common types include Shop License, Industrial License, Food Establishment License, Healthcare License, Fire Safety Certificate, Occupation License, Pet Shop License, and Event Management License.",
      },
      {
        question: "Who needs to obtain a Trade License online?",
        answer:
          "Any individual or entity starting a business—including retail, restaurants, factories, hospitals, educational institutes, and entertainment venues—must obtain a trade license.",
      },
      {
        question: "Which authority issues Trade Licenses?",
        answer:
          "The Licensing Department of the respective Municipal Corporation in each state issues trade licenses.",
      },
      {
        question: "What are the eligibility criteria for a Trade License?",
        answer:
          "Applicants must be at least 18 years old, operate legally, have no criminal convictions, and have premises in a commercially designated area.",
      },
      {
        question: "What documents are required for Trade License registration?",
        answer:
          "ID & address proof, PAN, incorporation/deed documents, bank details, property ownership or lease agreements with NOC, pollution and fire NOCs, layout plan, and Khata certificate as applicable.",
      },
      {
        question: "What is the online application process?",
        answer:
          "Register on the municipal portal, fill application form, upload documents, pay fees, track status, undergo inspection, and download license.",
      },
      {
        question: "What is the offline application process?",
        answer:
          "Submit a physical form with documents at the municipal office, receive application number, pay fees, undergo inspection, and collect license.",
      },
      {
        question: "How much does a Trade License cost?",
        answer:
          "Fees depend on business type, location, premises size, and estimated revenue, as determined by the municipal corporation.",
      },
      {
        question: "How long does processing take?",
        answer:
          "7–15 working days in metro/urban areas; up to 30–40 working days in semi‑urban/rural areas.",
      },
      {
        question: "How do I download my Trade License certificate?",
        answer:
          "Log into the municipal portal, navigate to the trade license section, enter your application ID or license number, and download the certificate.",
      },
      {
        question: "How can I renew my Trade License?",
        answer:
          "Log into the municipal portal, select renewal, upload requisite documents, pay renewal fee, and download the renewed license.",
      },
      {
        question: "Can a Trade License be transferred?",
        answer:
          "No. Trade licenses are non‑transferable; a new license must be applied for if ownership changes.",
      },
      {
        question: "What happens if I operate without a Trade License?",
        answer:
          "You may face fines, penalties, or closure orders from municipal authorities.",
      },
      {
        question: "Can I modify details on my Trade License?",
        answer:
          "Yes, by submitting an application with updated documents to the municipal corporation.",
      },
      {
        question: "What if my application is rejected?",
        answer:
          "You will receive reasons for rejection, after which you can rectify issues and reapply.",
      },
      {
        question: "Can I cancel my Trade License if I close my business?",
        answer:
          "Yes, by submitting proof of business closure to the municipal corporation for cancellation.",
      },
      {
        question: "What records should be maintained post‑registration?",
        answer:
          "Maintain attendance, wage registers, tax invoices, utility bills, maintenance logs, and any inspection reports.",
      },
      {
        question: "What is the validity of a Trade License?",
        answer:
          "Typically valid for one year; must be renewed annually to remain valid.",
      },
    ],
  },

  "music-license": {
    title: "Music License – A Complete Overview",
    description:
      "A music license grants legal permission to play recorded or live music in public/commercial spaces under the Copyright Act, 1957, ensuring proper royalty payments to composers, artists, and producers.",
    overview: [
      {
        heading: "What is a Music License and Why is it Important?",
        content:
          "Playing music in public spaces—cafés, restaurants, hotels, bars, retail stores—requires a valid music license to avoid copyright infringement. PPL issues licenses for recorded music, while IPRS licenses live performances. Section 2(p) of the Act defines musical works as compositions (excluding lyrics unless set to music).",
      },
      {
        heading: "Who Needs a Music License?",
        content:
          "Any venue playing music publicly for commercial purposes must obtain a license. This includes cafés, restaurants, hotels, pubs, clubs, malls, cinemas, sports stadiums, corporate events, product launches, airlines, and other transport providers.",
      },
    ],
    benefits: [
      {
        heading: "Types of Music Licenses and Their Uses",
        content:
          "1. Public Performance License  \n2. Synchronization License  \n3. Master License  \n4. Mechanical License  \n5. Print Rights License  \n6. Theatrical License  \nEach defines scope, duration, and permitted uses—public performances, sync with visuals, reproduction, sheet music, live theatrical productions.",
      },
      {
        heading: "Key Benefits of Obtaining a Music License in India",
        content:
          "1. Legal Compliance: Avoids fines, penalties and prosecution.  \n2. Brand Reputation: Enhances credibility and ambiance.  \n3. Customer Engagement: Attracts patrons with live or background music.  \n4. Artist Support: Ensures composers and performers receive royalties.  \n5. Business Opportunities: Opens doors to events and promotions.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to Obtain a Music License",
        content:
          "● Applicant’s PAN and Aadhaar Card  \n● Business registration certificate (Incorporation/MOA/LLP agreement)  \n● GST registration certificate  \n● Proof of premises (utility bill, lease deed, NOC)  \n● Details of music usage (live, recorded, streaming)  \n● Venue specifications (area in sq. meters, seating capacity)  \n● KYC documents of authorized signatory",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Process to File for a Music License",
        content:
          "1. Visit the IPRS or PPL portal.  \n2. Select your license category (public performance, sync, mechanical, etc.).  \n3. Create an account with applicant and GST/PAN details.  \n4. Submit business and music‑usage information (premises, hours, devices).  \n5. Review applicable tariff and terms on the portal.  \n6. Verify via OTP sent to registered mobile/email.  \n7. Pay the licensing fee online.  \n8. Download the issued license certificate.",
      },
    ],
    feesStructure: [
      {
        heading: "Music License Fees in India",
        description:
          "Fees vary based on premises type, size, usage hours and location. Royalties are collected by IPRS, PPL or ISRA and distributed to rights holders.",
        feeTable: [
          {
            category: "IPRS Live Performance License (Metro)",
            amount: "₹10,000 per year",
          },
          {
            category: "IPRS Live Performance License (Non‑Metro)",
            amount: "₹5,000 per year",
          },
          {
            category: "Public Performance in Retail Stores",
            amount: "₹2,500 per 5,000 sq. ft.",
          },
          {
            category: "Minimum Royalty via ISRA",
            amount: "₹3,650 per annum",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "How CorpBiz Helps You Obtain a Music License",
        description: [
          "Choose a tailored service plan and consult our experts.",
          "Submit queries and receive prompt guidance on license types and fees.",
          "Upload and organize all required documents securely.",
          "We prepare and file your application with IPRS or PPL.",
          "Conduct preliminary eligibility screening and tariff evaluation.",
          "Handle all procedural formalities and follow‑ups with licensing bodies.",
          "Receive your music license certificate at your doorstep.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is IPRS?",
        answer:
          "IPRS (Indian Performing Rights Society) is a copyright society that licenses live performances and musical compositions, ensuring creators receive royalties.",
      },
      {
        question: "How do I get permission to use copyrighted music in India?",
        answer:
          "Obtain a license from IPRS for live performances or PPL for recorded music by applying online, submitting documents, and paying fees.",
      },
      {
        question: "Is PPL legal in India?",
        answer:
          "Yes. PPL (Phonographic Performance Limited) is a recognized copyright society issuing licenses for pre‑recorded music.",
      },
      {
        question: "What are the categories of Music License?",
        answer:
          "Public Performance, Synchronization, Mechanical, Broadcasting, Interactive/Non‑Interactive Streaming, Print Rights, Master and Theatrical Licenses.",
      },
      {
        question: "What documents are required for a Music License?",
        answer:
          "PAN, Aadhaar, GST certificate, business registration, proof of premises, music usage details, and KYC of the authorized signatory.",
      },
      {
        question: "What factors determine Music License fees?",
        answer:
          "Premises type, streaming hours, number of songs, venue size/capacity, and business category influence the fees.",
      },
      {
        question: "What is the penalty for not obtaining a music license?",
        answer:
          "Interest up to 30% p.a. on unpaid fees, penal charges up to ₹2 lakh from PPL/IPRS, and imprisonment (6 months–3 years) plus fines (₹50,000–₹2 lakh) under Section 63 of the Copyright Act.",
      },
      {
        question: "Who can obtain a Music License?",
        answer:
          "Any business or individual playing music publicly—restaurants, event organizers, retail stores, hotels, radio/TV stations—must obtain a license.",
      },
      {
        question: "What is a Theatrical License?",
        answer:
          "A license for live stage performances of copyrighted musical works in dramas, musicals or plays.",
      },
      {
        question: "What are the benefits of a Music License?",
        answer:
          "Ensures legal compliance, protects against penalties, enhances brand image, boosts customer engagement and supports artists.",
      },
    ],
  },

  "health-trade-license": {
    title: "Health Trade License – An Overview",
    description:
      "Mandatory permit for businesses dealing in goods or services impacting public health. Ensures compliance with hygiene and safety standards under municipal regulations.",
    overview: [
      {
        heading: "Types of Health Trade Licenses",
        content:
          "1. Health Care License: Issued by State Municipal Corporation for healthcare sector entities.  \n2. Health Trade License: Required for establishments trading products or services that affect consumer health—restaurants, cafes, salons, gyms, laundries, cinemas, service stations and general stores.",
      },
      {
        heading: "Objective",
        content:
          "Safeguard public health by regulating establishments dealing with food, drugs and health‑related services. Applicants must be ≥18 years old with a clean criminal record.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining a Health Trade License",
        content:
          "● Promotes Hygiene & Safety: Establishes structured cleanliness and safety protocols.  \n● Enhances Credibility: Signals professionalism and regulatory compliance.  \n● Builds Consumer Trust: Assures customers of health standards.  \n● Boosts Visibility: Licensed businesses gain recognition.  \n● Attracts Investors: Reduces legal risk and indicates transparency.",
      },
      {
        heading: "Features of a Health Trade License",
        content:
          "● Municipal Approval: Authorizes lawful operations within jurisdiction.  \n● Simplifies Other Licenses: Facilitates subsequent registrations.  \n● Fundamental Business Permit: Primary document for health‑impact businesses.  \n● Limits Liability: Protects owners from penalties.  \n● Enforces Guidelines: Mandates adherence to local health regulations.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Health Trade License",
        content:
          "● Proof of Payment (tax/dues receipts)  \n● PAN/TAN Card  \n● Site Sanction Plan (approved layout)  \n● Premises Layout Plan  \n● Ownership Proof or Lease Agreement  \n● Utility Bills (electricity, water)  \n● Medical Certificate for applicant/staff  \n● Self‑Declaration of compliance  \n● NOC from Police and/or Fire Department  \n● Water Testing Report  \n● List of Ancillary Commodities  \n● Sewer Connection Proof",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Obtain Health Trade License",
        content:
          "1. Access municipal corporation portal and complete application form.  \n2. Upload required documents.  \n3. Pay government fees online.  \n4. Authorities verify premises and documents.  \n5. License is issued upon successful verification.",
      },
      {
        heading: "Renewal Procedure & Penalties",
        content:
          "Renew at least 30 days before expiry via portal: upload existing license, ID proof, tax receipts and pay renewal fee. Late renewal invites fines or business closure.",
      },
    ],
    feesStructure: [
      {
        heading: "Health Trade License Fees",
        description:
          "Fees determined by municipal corporation based on business type, location, premises size and risk category.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing & Renewal Timeline",
        description:
          "Initial issuance and renewal typically processed within 15–30 working days, varying by municipality.",
        steps: [],
      },
    ],
    whyUs: [
      {
        heading: "Corpbiz Services for Health Trade License",
        description: [
          "Select a plan and get personalized guidance.",
          "Submit queries and required documents securely.",
          "Application preparation and eligibility review.",
          "End‑to‑end handling of procedural formalities.",
          "License delivered to your doorstep.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the verification process for application?",
        answer:
          "After online submission, municipal authorities review documents and conduct a premises inspection before granting the license.",
      },
      {
        question: "How can I submit the license fee?",
        answer:
          "Online via portal payment gateway (net banking, cards, UPI) or offline at designated municipal counters.",
      },
      {
        question: "Can the license be revoked?",
        answer:
          "Yes, authorities may suspend or revoke for violations, hygiene lapses or false application information.",
      },
      {
        question: "Is a Health Trade License mandatory for food businesses?",
        answer:
          "Yes. Restaurants, cafes, food stalls and medicine shops must obtain a Health Trade License before operations.",
      },
      {
        question: "Who issues the Health Trade License?",
        answer:
          "The Municipal Corporation or Local Civic Body of the respective state or city.",
      },
      {
        question: "Why is the license important?",
        answer:
          "Ensures compliance with public health norms, builds trust, avoids penalties and enables lawful operations.",
      },
    ],
  },

  "factory-license": {
    title: "Factory License – An Overview",
    description:
      "Mandatory registration under the Factories Act, 1948 for manufacturing premises to ensure compliance with worker safety, health and welfare standards.",
    overview: [
      {
        heading: "Factories Act, 1948",
        content:
          "Every factory employing 10+ workers with power or 20+ workers without power must register under the Act. Factories are classified as hazardous or non‑hazardous based on processes and risk to health, life or environment. Building plan approval from the Labour Department is required before licensing.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining a Factory License",
        content:
          "1. Ensures Employee Safety & Welfare: Mandates safety measures, healthy conditions and welfare provisions.  \n2. Special Provisions: Covers women, young persons, wages, hours, shifts and general working conditions.  \n3. Access to Benefits: Eligible for government schemes and legal protections.  \n4. Boosts Productivity: Improves morale through fair practices.  \n5. Regulates Employment Matters: Governs hours, overtime, leaves, recruitment, termination, and juvenile employment.  \n6. Promotes Equality: Ensures equal rights and benefits for all employees.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Factory License Registration",
        content:
          "● Form‑1: Details of factory rooms  \n● Approved factory building plan  \n● Applicant’s ID & address proof  \n● List of company directors  \n● MOA, AOA & board resolution (or partnership deed)  \n● Bank account details  \n● Proposed commencement date  \n● License fee payment receipts  \n● Land ownership or lease deeds with NOC  \n● Local authority consents  \n● Machinery & equipment details  \n● Hazardous/non‑hazardous waste info  \n● Raw material, by‑products, process flow chart  \n● Latest property/land tax receipt",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Factory License Registration",
        content:
          "1. Obtain approval of building plan from State Labour Dept or Chief Inspector.  \n2. Submit application (Form‑1) with factory details: process, workforce, owner/manager names, machinery.  \n3. Pay prescribed license fees.  \n4. Undergo site inspection if required.  \n5. Receive Factory License from Dept of Factories & Boilers upon verification.",
      },
      {
        heading: "Renewal Process & Penalties",
        content:
          "Renew annually before expiry using Form‑4 (renewal) and Form‑4B (annual return) with fee challan. Late renewal incurs 10% fee penalty per month of delay.",
      },
      {
        heading: "Voluntary Suspension of License",
        content:
          "1. Apply in writing for suspension with reasons.  \n2. Attach supporting documents and worker list with settlements.  \n3. Dept reviews application, inspects premises and suspends or cancels license.",
      },
    ],
    feesStructure: [
      {
        heading: "Factory License Fees",
        description:
          "Fees vary by state rules, factory size, workforce and hazard classification.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing & Renewal Timeline",
        description:
          "Initial licensing and renewal generally completed within 15–30 working days, subject to inspection schedules.",
      },
    ],
    whyUs: [
      {
        heading: "CorpBiz Assistance for Factory License",
        description: [
          "Select a tailored service plan for expert guidance.",
          "Submit queries and required documents to our team.",
          "We prepare and file your application and liaise with authorities.",
          "Track status and receive your Factory License at your doorstep.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who is eligible to obtain a Factory License?",
        answer:
          "Any entity operating a manufacturing unit employing 10+ workers with power or 20+ workers without power under the Factories Act, 1948.",
      },
      {
        question: "Where is the Factories Act applicable?",
        answer:
          "Across India to any premises where a manufacturing process is conducted meeting workforce thresholds, with or without power.",
      },
      {
        question: "Can a factory be licensed in a residential area?",
        answer:
          "Only if specific zoning permissions and environmental clearances are granted by local authorities.",
      },
      {
        question: "What is the validity of a Factory License?",
        answer:
          "Typically one year; must be renewed annually before expiry to avoid penalties.",
      },
      {
        question: "What documents are required for renewal?",
        answer:
          "Form‑4 (renewal application), Form‑4B (annual return) and proof of renewal fee payment.",
      },
      {
        question: "What are the occupier’s basic responsibilities?",
        answer:
          "Ensuring worker health, safety, welfare, compliance with statutes and maintenance of records.",
      },
      {
        question: "When should a factory apply for a license?",
        answer:
          "Before commencing any manufacturing activity—ideally well ahead of planned start date.",
      },
      {
        question: "How are factories classified under the Act?",
        answer:
          "As hazardous (risk to health, life, environment) or non‑hazardous (lower risk manufacturing).",
      },
      {
        question: "What are the steps to obtain a Factory License?",
        answer:
          "Plan approval, Form‑1 submission, fee payment, inspection and license issuance by authority.",
      },
      {
        question: "What is voluntary suspension of a license?",
        answer:
          "A formal process to surrender or suspend license by applying with reasons and worker settlement details.",
      },
    ],
  },
  gmpCertification: {
    title: "GMP Certification – A Complete Overview",
    description:
      "Good Manufacturing Practice (GMP) certification ensures that products are consistently produced and controlled according to quality standards to minimize risks involved in pharmaceutical manufacturing.",
    overview: [
      {
        heading: "Overview of GMP Certification",
        content:
          "Good Manufacturing Practice (GMP) Certification is a globally recognized standard that ensures the consistent quality, safety, and efficacy of pharmaceutical products. It provides a comprehensive framework for managing all aspects of manufacturing and quality control, including production processes, testing procedures, and documentation.",
      },
      {
        heading: "Purpose of Good Manufacturing Practice",
        content:
          "The primary goal of GMP is to minimize risks associated with pharmaceutical production—such as contamination, mislabeling, and incorrect dosages—by overseeing every aspect of the manufacturing process, from raw‑material sourcing and clean environments to equipment calibration and staff training.",
      },
      {
        heading: "GMP Guidelines for Certification Holders",
        content:
          "WHO‑GMP guidelines serve as the foundation for national and regional regulations (EU, ASEAN, PIC/S). They promote a quality‑centric approach, helping manufacturers prevent contamination, reduce errors, and adapt the standards flexibly to their specific processes while ensuring consistent product quality.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of GMP Certification",
        content:
          "● Enables adoption of industry best practices in production  \n● Ensures timely detection and resolution of quality issues  \n● Demonstrates compliance with national and international regulations  \n● Enhances brand credibility and consumer trust  \n● Reduces costs associated with recalls, rework, and penalties  \n● Supports global trade and export potential  \n● Lowers the frequency and duplication of regulatory inspections  \n● Drives long‑term operational efficiency and cost savings",
      },
      {
        heading: "Benefits for Manufacturers & Customers",
        content:
          "Manufacturers gain robust quality systems and a culture of continuous improvement; customers gain assurance through in‑depth, multi‑day audits that verify a supplier’s ability to manage non‑conformities responsibly.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for GMP Certification",
        content:
          "● Company information: name, address, contact details  \n● Manufacturing License copy  \n● List of approved products and Site Master File (WHO TRS 823)  \n● Master Manufacturing Formula & process documentation  \n● Finished product specifications & analytical methods  \n● Stability study data (accelerated & real‑time) for ≥3 batches  \n● Process & method validation reports  \n● Personnel qualifications & regulatory approvals  \n● Equipment lists, SOPs, STPs, plant layout, water system schematic  \n● Product summary sheet (Format B)  \n● Evidence of safety & efficacy (Rule 158B, Drugs & Cosmetics Act, 1940)  \n● Undertaking of compliance with relevant Acts (1940, 1954)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Process to Obtain GMP Certification",
        content:
          "1. Application Submission to a recognized certification body  \n2. Review of application and eligibility  \n3. Gap analysis & fee agreement  \n4. Documentation review against GMP guidelines  \n5. Stage 1 audit (documented systems) & corrective actions  \n6. Stage 2 audit (on‑site implementation) & verification  \n7. Issuance of GMP Certificate (valid for 3 years)  \n8. Surveillance audits every 6–12 months",
      },
    ],
    feesStructure: [
      {
        heading: "Costs & Penalties",
        description:
          "Certification fees vary by body and scope. Non‑compliance penalties can include license suspension, production halts, fines, recalls, and legal action.",
      },
    ],
    whyUs: [
      {
        heading: "How CorpBiz Helps You Get GMP Certified",
        description: [
          "1. Initial consultation & requirement gathering",
          "2. Appointment of a legal/regulatory expert",
          "3. Documentation preparation & gap analysis",
          "4. Audit coordination & corrective action support",
          "5. Post‑certification compliance and audit readiness",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who issues the GMP certificate?",
        answer:
          "Authorized regulatory bodies (e.g., FDA or State Drug Authorities) or designated WHO‑GMP certification bodies, typically signed by a Joint Commissioner.",
      },
      {
        question: "How do I get GMP certification?",
        answer:
          "Submit an application, undergo gap analysis, prepare documentation, complete Stage 1 & 2 audits, implement corrective actions, and receive the certificate upon compliance.",
      },
      {
        question: "What are GMP guidelines?",
        answer:
          "International quality assurance standards covering raw materials, facilities, equipment, documentation, and personnel to ensure safe, effective, and consistent products.",
      },
      {
        question: "Is GMP necessary if there is a Quality Control Laboratory?",
        answer:
          "Yes. GMP encompasses the entire manufacturing process, including hygiene, documentation, validations, and training, beyond QC testing.",
      },
      {
        question: "What are the benefits of GMP certification?",
        answer:
          "Enhanced product quality and safety, regulatory compliance, export readiness, cost reduction, and stronger brand trust.",
      },
      {
        question: "What is the objective of GMP?",
        answer:
          "To ensure consistent production of safe, high-quality pharmaceutical products while reducing risks like contamination and labeling errors.",
      },
      {
        question: "What is the validity of GMP Certification?",
        answer:
          "Typically valid for three years, with mandatory surveillance audits every 6–12 months.",
      },
      {
        question: "What is a GMP inspection?",
        answer:
          "An audit by regulatory or certification bodies to verify compliance of manufacturing facilities with GMP standards.",
      },
      {
        question: "What is the difference between cGMP and GMP?",
        answer:
          "cGMP (‘current’ GMP) indicates that standards are continuously updated to reflect the latest practices and technologies.",
      },
      {
        question: "Why is GMP important?",
        answer:
          "It protects consumer health and reinforces company credibility by ensuring products are consistently safe, effective, and high quality.",
      },
    ],
  },

  "fda-certification": {
    title: "FDA Certification – A Complete Overview",
    description:
      "Mandatory U.S. FDA registration and compliance process for exporting food, drugs, cosmetics, medical devices and other regulated products under the Federal Food, Drug, and Cosmetic Act.",
    overview: [
      {
        heading: "Overview of FDA Certification",
        content:
          "The U.S. Food and Drug Administration (FDA), established in 1906, regulates food, drugs, cosmetics, medical devices, veterinary products, tobacco and radiation devices. Exporters must register facilities, comply with Current Good Manufacturing Practices (CGMP), and pass FDA inspections, documented by Form 483 and Establishment Inspection Reports (EIR), to gain market access in the United States.",
      },
      {
        heading: "Additional Regulatory Bodies",
        content:
          "Key organizations complementing the FDA include:  \n• CDRH (Center for Devices and Radiological Health) – regulates medical devices and radiation‑emitting products.  \n• IEC (International Electrotechnical Commission) – sets global electrotechnology standards.  \n• ANSI (American National Standards Institute) – oversees U.S. voluntary consensus standards across industries.",
      },
    ],
    benefits: [
      {
        heading: "Types of Products & Approvals",
        content:
          "• Food Facilities: Register with FDA; comply with CGMP; no pre‑approval of food itself.  \n• Drugs: OTC monograph drugs bypass approval; new drugs require NDA.  \n• Cosmetics: No pre‑market approval (unless making drug claims).  \n• Color Additives: Batch certification required for certain additives.  \n• Medical Devices: Class I (low risk, often 510(k)‑exempt), Class II (510(k) submissions), Class III (PMA).",
      },
      {
        heading: "Key Benefits of FDA Certification",
        content:
          "1. Industry Impact: Global mark of safety and quality.  \n2. Consumer Confidence: Drives demand and trust.  \n3. Market Access: Enables export with Certificate of Foreign Government.  \n4. Brand Credibility: Enhances reputation among stakeholders.  \n5. Product Development: Improves processes via CGMP.  \n6. Funding Access: Attracts investors and partnerships.  \n7. Healthcare Distribution: Access to hospitals, pharmacies, and clinical trials.",
      },
      {
        heading: "Extended Advantages",
        content:
          "• Easier Access to Investment and Funding: Many investors seek FDA‑approved products.  \n• Recognition in Medical and Healthcare Networks: Hospitals and clinics prefer FDA‑cleared products.  \n• Expansion into New Markets: CFG enables entry into Japan, Brazil, Australia, China.  \n• Process Improvement: Focus on safety and efficacy from R&D through manufacturing.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for FDA Registration",
        content:
          "Entry Documentation: Bill of Lading, Airway Bill, Commercial Invoice, Purchase Order.  \nCommodity‑Specific: Packing List, Growers List (for produce), Labeling Copies, Ownership Documentation, Statement of Intended Use, plus any additional product‑specific paperwork requested by FDA.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step FDA Certification Process",
        content:
          "1. Facility Inspection by FDA to assess CGMP compliance.  \n2. Issuance of Form 483 listing inspection observations.  \n3. Submit written response to Form 483 within 15 working days with corrective action plan.  \n4. FDA issues Establishment Inspection Report (EIR) outlining need for enforcement.  \n5. If observations are inadequate or severe, FDA issues a Warning Letter (sometimes skipping Form 483).  \n6. Respond to Warning Letter within 15 working days to avoid cancellation of licenses, import alerts, or suspension.  \n7. Complete pre‑clinical testing, IND, NDA or PMA submissions as required.  \n8. Final Approval granted once all concerns are resolved and compliance demonstrated.",
      },
    ],
    feesStructure: [
      {
        heading: "FDA‑Related Fees & Penalties",
        description:
          "While the FDA does not charge for inspections, manufacturers must fund compliance activities. Failure to respond timely to Form 483 or Warning Letters may trigger import alerts, license suspension, product denial, or legal action.",
      },
    ],
    whyUs: [
      {
        heading: "How CorpBiz Facilitates Your FDA Certification",
        description: [
          "1. Consultation with FDA regulatory experts on requirements and timelines.",
          "2. Legal support from FDA‑savvy attorneys for application and inspections.",
          "3. Document preparation and submission via FDA’s Electronic Submission Gateway (ESG).",
          "4. Coordination of Form 483 responses, Warning Letter follow‑ups, and EIR debriefs.",
          "5. Regular status updates and final delivery of certification and CFG issuance.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "When is Form 483 issued?",
        answer:
          "Form 483 is issued immediately after an FDA inspection to document any non‑compliance or deviations from CGMP standards.",
      },
      {
        question: "What is the Establishment Inspection Report (EIR)?",
        answer:
          "The EIR summarizes inspection findings and indicates whether regulatory or enforcement action is required.",
      },
      {
        question: "What happens if FDA issues a Warning Letter?",
        answer:
          "A Warning Letter requires response within 15 working days; failure may result in import alerts, license revocation or product denial.",
      },
      {
        question: "What is Form 438 and how is it shared?",
        answer:
          "Form 438 outlines inspection discrepancies; it's provided in writing after inspection, either in person or via mail.",
      },
      {
        question: "What is FDA Colour Certification?",
        answer:
          "FDA Colour Certification applies to color additives in foods, drugs, cosmetics, and certain devices, requiring batch certification for safety.",
      },
      {
        question: "How long does FDA certification last?",
        answer:
          "There is no fixed validity; ongoing adherence to CGMP and readiness for re‑inspection are required to maintain certification.",
      },
      {
        question: "What if I fail to provide documents to FDA?",
        answer:
          "Delays or absence of required documentation can lead to application rejection, penalties, or prevention of U.S. market entry.",
      },
      {
        question: "Does FDA regulate tobacco products?",
        answer:
          "Yes. The FDA oversees manufacturing, marketing, and labeling of tobacco products to protect public health.",
      },
      {
        question: "How do I submit documents to FDA?",
        answer:
          "Documents can be submitted electronically via the FDA Electronic Submission Gateway or mailed to the appropriate FDA office, as guided by CorpBiz experts.",
      },
    ],
  },
  "liquor-license": {
    title: "Liquor License – A Complete Overview",
    description:
      "A liquor license is a state‑issued permit allowing the manufacture, distribution, transport, or sale of alcoholic beverages within a designated jurisdiction. Essential for restaurants, bars, hotels, and retail outlets, it ensures legal compliance with state excise regulations.",
    overview: [
      {
        heading: "What Is a Liquor License?",
        content:
          "A liquor license is issued by the State Excise Department, granting businesses the legal authority to serve, sell, distribute, or manufacture alcoholic beverages. Each state’s laws differ—types of licenses, permissible hours, dry days, and renewal rules—but all require satisfying eligibility criteria, submitting detailed documentation, and observing regulatory processes.",
      },
      {
        heading: "Key Benefits",
        content:
          "Offering alcohol legally enhances customer experience, increases footfall and dwell time, widens beverage offerings, unlocks special events and partnerships, and can significantly boost revenues in hospitality.",
      },
      {
        heading: "Types & Eligibility",
        content:
          "Common license types include on‑license (on‑premise consumption), off‑license (retail sale), wholesale, club/hotel, temporary event licenses, and special permits for festivals or weddings. Applicants generally must be 21+, have no criminal record, and legally occupy the premises.",
      },
      {
        heading: "Revocation & Compliance",
        content:
          "Licenses can be revoked or suspended for serving alcohol on dry days, selling to minors, breaching permitted hours or quantity limits, or violating any state excise rule. Maintaining compliance avoids hefty fines, legal notices, and potential business closure.",
      },
    ],
    benefits: [
      {
        heading: "Strategic Advantages",
        content:
          "● Legal authorization to serve and sell alcohol  \n● Enhanced customer experience with premium beverage options  \n● Higher footfall, customer retention, and average spend  \n● Access to special events, private parties, and partnerships  \n● Expanded market opportunities and brand differentiation",
      },
      {
        heading: "Checklist Before Applying",
        content:
          "● Verify business type eligibility (restaurant, bar, hotel, shop)  \n● Determine permitted alcohol categories (beer, wine, spirits)  \n● Confirm authorized sellers and training requirements  \n● Understand state‑specific quantity and timing limits  \n● Prepare for public notice period and objection handling  \n● Budget for license fees, security deposit, and renewal costs",
      },
    ],
    documentsRequired: [
      {
        heading: "Required Documentation",
        content:
          "● Applicant’s identity proof (Aadhaar, PAN, Passport)  \n● Residential and business premises address proof  \n● Notarized affidavit of possession and litigation status  \n● Physical possession certificate (DDA/NDMC/MCD)  \n● Detailed layout plan of establishment  \n● License fee payment proof and refundable security deposit receipt  \n● NOCs from Fire Department and Municipal Corporation  \n● Filled application form with business and owner details  \n● Company MOA, AOA, list of directors (if applicable)  \n● Latest ITR copy and GST registration  \n● Passport‑size photograph of authorized signatory  \n● Affidavits: no criminal background, no tax/dues default  \n● Refrigerator invoice for beverage storage",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Application Process",
        content:
          "1. Visit your State Excise Department portal to review license categories and download forms.  \n2. Gather, notarize, and organize all required documents.  \n3. Complete and submit the application form online or at the excise office, paying prescribed fees.  \n4. Undergo document verification and site inspection; respond to any departmental queries.  \n5. Public notice period: display notice; address objections if raised.  \n6. Final review by excise authority; upon clearance, license is granted.  \n7. Display license prominently on premises; adhere strictly to all conditions.",
      },
      {
        heading: "Renewal & Validity",
        content:
          "Licenses are valid for one year. Renewal applications must be filed at least 30 days before expiry, with renewal fee payment proof (challan) and any updated documents. Late renewals may incur penalties or risk suspension.",
      },
    ],
    feesStructure: [
      {
        heading: "Fees & Charges",
        description:
          "License and renewal fees vary widely by state, category, and premises size. Fees typically include an application charge, annual license fee, usage fee, and refundable security deposit. Consult your State Excise fee schedule for exact rates.",
      },
    ],
    whyUs: [
      {
        heading: "How CorpBiz Simplifies Licensing",
        description: [
          "1. End‑to‑end guidance tailored to your state and business model.",
          "2. Strategic document preparation and cost‑effective planning.",
          "3. Legal support from liquor‑licensing specialists.",
          "4. Complete handling of submissions, follow‑ups, and public notice compliance.",
          "5. Real‑time tracking and dedicated customer support until license delivery.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What activities does a liquor license cover?",
        answer:
          "Manufacture, distribution, transport, and sale of alcoholic beverages—either on‑premise consumption or off‑premise retail—depending on the license type.",
      },
      {
        question: "Who is eligible to apply?",
        answer:
          "Typically individuals or businesses aged 21+, with no criminal convictions, valid occupancy rights to the premises, and compliance with local zoning laws.",
      },
      {
        question: "What leads to revocation?",
        answer:
          "Serving on dry days, supplying to minors, operating outside permitted hours, exceeding quantity limits, or any breach of state excise regulations.",
      },
      {
        question: "Can I sell liquor from home?",
        answer:
          "No. Sales must occur from state‑approved commercial premises following zoning and licensing norms.",
      },
      {
        question: "What types of licenses exist?",
        answer:
          "On‑license, off‑license, wholesale, retail, club/hotel, temporary event, and special festival licenses—each with specific terms.",
      },
      {
        question: "How do I renew?",
        answer:
          "File renewal 30 days before expiry, pay renewal and usage fees, and submit proof of payment and any updated documents.",
      },
      {
        question: "Are costs uniform nationwide?",
        answer:
          "No. Fees are set by each State Excise Department and vary by license category, location, and business type.",
      },
      {
        question: "What is a temporary license?",
        answer:
          "A short‑term permit for events (weddings, festivals) requiring event details, premises proof, ID documents, and payment of a nominal fee.",
      },
      {
        question: "Why limit license numbers?",
        answer:
          "To regulate consumption, maintain public order, and align with demographic and policy objectives.",
      },
      {
        question: "What if objections arise?",
        answer:
          "The applicant must present justifications to the excise authority during the public notice period; unresolved objections can delay or deny approval.",
      },
    ],
  },

  "ayush-license": {
    title:
      "AYUSH License Made Easy – Your Gateway to the Herbal & Traditional Medicine Market",
    description:
      "AYUSH—Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homeopathy—represents India’s holistic healthcare legacy. Since the Ministry of AYUSH’s establishment in 2014, all traditional medicine manufacturing, distribution, retailing, clinic operations, export and loan licensing must comply with the Drugs & Cosmetics Act, 1940 and Rules 85A–85I & 158-B.",
    overview: [
      {
        heading: "What is AYUSH License?",
        content:
          "An AYUSH license authorizes entities to manufacture, distribute, retail, wholesale, export, or operate clinics in Ayurvedic, Unani, Siddha, Homeopathy and other traditional products under Rules 85A–85I and 158-B of the Drugs & Cosmetics Rules, 1945.",
      },
      {
        heading: "Regulations Governing AYUSH Licensing",
        content:
          "Rules 158-B govern Ayurvedic, Unani, Siddha manufacturing; Rules 85A–85I govern Homeopathic. All licensees must adhere to Good Manufacturing Practices (GMP), employ qualified practitioners (BAMS/BUMS/DPharm/BPharm), maintain approved premises, and comply with labeling, safety and quality norms.",
      },
      {
        heading: "Types of AYUSH Licenses",
        content:
          "Includes Manufacturing License (Ayurveda, Unani, Siddha, Homeopathy), Retail License, Wholesale License, Export License, Product Approval License, Clinic License, and Loan License for third‑party GMP contract manufacturing.",
      },
      {
        heading: "Eligibility Criteria",
        content:
          "Applicant must be at least 18 years old with no criminal record, operate from a GMP‑compliant facility, employ qualified technical staff (BAMS/BUMS/DPharm/BPharm), and submit evidence of premises ownership/lease, GMP certificate, product formulations, and staff credentials.",
      },
      {
        heading: "Timeline for AYUSH License Approval",
        content:
          "Standard processing takes 20–30 working days; may extend to 60 days if additional scrutiny or documentation issues arise. Complete, accurate submissions significantly reduce delays.",
      },
    ],
    benefits: [
      {
        heading: "Top 10 Benefits of AYUSH License",
        content:
          "1. Legal authorization for manufacture, sale, export, clinic operations  \n2. Enhanced brand credibility and consumer trust  \n3. Full regulatory & GMP compliance  \n4. Market expansion across India & abroad  \n5. Eligibility for government subsidies & tax benefits  \n6. Faster online application & approvals  \n7. Access to export channels and global markets  \n8. Protection of intellectual property & formulations  \n9. Ability to host private label & contract manufacturing  \n10. Competitive advantage over unlicensed players",
      },
    ],
    documentsRequired: [
      {
        heading: "Comprehensive Document Checklist",
        content:
          "• Filled AYUSH application form  \n• Proof of premises (title deed/lease agreement)  \n• GMP certificate and Site Master File  \n• Detailed product dossiers (formulation, labels)  \n• Technical staff credentials (degrees, experience letters)  \n• Identity proof (PAN, Aadhaar)  \n• Company registration (Incorporation, MSME/Udyam)  \n• Layout plan, equipment list  \n• NOCs from municipal/pollution control authorities  \n• Affidavits (no criminal record, no litigation, GMP compliance)  \n• Copy of ITR and refundable security deposit proof (if applicable)",
      },
    ],
    registrationProcedure: [
      {
        heading: "How to Apply for AYUSH License Online",
        content:
          "Step 1: Visit your State AYUSH portal and select license category  \nStep 2: Upload application form and complete document checklist  \nStep 3: Pay application and statutory fees online  \nStep 4: State AYUSH department reviews compliance, premises eligibility, GMP adherence  \nStep 5: Address any queries or inspections within 7 working days  \nStep 6: AYUSH Commissioner grants license within 15–30 working days  \nStep 7: Download license certificate from portal or receive by post",
      },
    ],
    feesStructure: [
      {
        heading: "Fees and Manufacturer Charges",
        description:
          "• Application fee: ₹5,000–₹25,000 depending on license type  \n• Annual renewal fee: ₹3,000–₹15,000  \n• Loan license conversion charges: manufacturer’s production cost + utilities + manpower  \n• Product approval statutory fee: ₹1,000 per formulation  \n• Security deposit refundable: ₹50,000–₹2,00,000",
      },
    ],
    whyUs: [
      {
        heading: "Why Trust Our AYUSH Consultants?",
        description: [
          "1. 100+ AYUSH experts across India  \n2. 10+ years regulatory experience  \n3. 20 lakh+ hours saved for clients  \n4. 75% market share in healthcare licensing  \n5. End‑to‑end online application handling  \n6. Transparent, real‑time status tracking  \n7. Personalized, state‑specific guidance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is an AYUSH license?",
        answer:
          "An official permit from the Ministry of AYUSH to manufacture, sell, distribute, export or operate clinics for Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homeopathy products.",
      },
      {
        question: "Who needs an AYUSH retail license?",
        answer:
          "Any business selling Ayurvedic, Unani, Siddha or Homeopathic products directly to consumers must obtain a retail license.",
      },
      {
        question: "What qualifications are required?",
        answer:
          "Manufacturing units must employ qualified practitioners (BAMS/BUMS) and pharmacists (DPharm/BPharm) per AYUSH norms.",
      },
      {
        question: "What is a loan license?",
        answer:
          "A permit allowing third‑party GMP‑certified manufacturers to produce products under contract; requires separate application per product.",
      },
      {
        question: "How long is the license valid?",
        answer:
          "Typically valid for 5 years, renewable upon compliance with annual inspections and fee payments.",
      },
      {
        question: "Can I export AYUSH products?",
        answer:
          "Yes—an AYUSH export license ensures compliance with international quality standards for global market access.",
      },
      {
        question: "What happens if I violate terms?",
        answer:
          "Non‑compliance can result in warnings, suspension/cancellation of license, fines, and legal action under Drugs & Cosmetics Act.",
      },
      {
        question: "Is GMP certification mandatory?",
        answer:
          "Yes—manufacturing facilities must hold a valid GMP certificate under Drugs & Cosmetics Rules, 1945.",
      },
      {
        question: "What is the application timeline?",
        answer:
          "20–30 working days for standard approval; up to 60 days if additional scrutiny or queries arise.",
      },
      {
        question: "How do I renew my license?",
        answer:
          "Submit renewal form and fee 30 days before expiry, along with up‑to‑date compliance documents.",
      },
      {
        question: "Are AYUSH licenses transferable?",
        answer:
          "No—licenses are non‑transferable and any change in premises or ownership requires a fresh application.",
      },
    ],
  },

  "capexil-registration": {
    title: "CAPEXIL Registration – An Overview",
    description:
      "CAPEXIL, the Chemical and Allied Export Promotion Council of India under the Ministry of Commerce, promotes India’s chemical and allied exports. Certification enhances credibility, provides market development assistance, and is mandatory for exporters of ceramics, rubber, glass, natural stones and related products.",
    overview: [
      {
        heading: "What is CAPEXIL?",
        content:
          "Established in 1958, CAPEXIL is a non‑profit export promotion body under the Ministry of Commerce. It supports exporters of over 80,000 chemical and allied products through international trade fairs, market delegations, and policy advocacy to boost India’s global presence.",
      },
      {
        heading: "Objectives of CAPEXIL Certification",
        content:
          "• Boost chemical exports with Market Development Assistance (MDA)\n• Foster business ties between Indian exporters and global buyers\n• Provide guidance to achieve international competitiveness\n• Implement promotional strategies to expand India’s export footprint",
      },
      {
        heading: "Types of Membership",
        content:
          "Associate Membership requires a valid IEC and suits new exporters. Ordinary Membership is open to Associate members with at least 3 years’ export experience and minimum annual export performance of ₹10 lakh (small) or ₹25 lakh (large).",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of CAPEXIL Membership",
        content:
          "• Global Market Access via MDA schemes and trade fairs\n• Detailed import-export statistics and trade insights\n• Networking at buyer-seller meets, seminars, and workshops\n• Simplified export return filings (monthly/quarterly)\n• Visa facilitation for international business travel\n• Policy advocacy and liaison with Government bodies",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content:
          "• Company incorporation certificate, MOA/AOA, PAN details\n• Import Export Code (IEC), GST registration, cancelled cheque\n• Board resolution authorizing membership and latest annual report\n• CA-certified turnover statements for specified thresholds\n• Manufacturing license (if applicable) and self-declaration of non-blacklisted status\n• Export performance data and passport-size photographs of authorized signatories",
      },
    ],
    registrationProcedure: [
      {
        heading: "How to Apply Online",
        content:
          "1. Register as new user on CAPEXIL portal with IEC and firm details\n2. Upload scanned copies of all required documents\n3. Pay membership fee via DD or online gateway (₹3,000–₹10,000 based on category)\n4. Receive application number after document verification\n5. Certificate issued by Ministry of Commerce upon successful review",
      },
    ],
    feesStructure: [
      {
        heading: "Membership Fees",
        description:
          "• MSME Domestic Suppliers: ₹3,000\n• MSME Manufacturer‑Exporters: ₹5,000\n• Large Manufacturers/Merchant Exporters: ₹10,000\nAdditional charges apply for dual RCMC or panel registration",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup for CAPEXIL Certification?",
        description: [
          "1. Over 10 years of export certification expertise",
          "2. 500+ satisfied chemical exporters supported",
          "3. End‑to‑end assistance: documentation, filing, compliance",
          "4. 24/7 query resolution and real‑time application tracking",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is CAPEXIL?",
        answer:
          "CAPEXIL is the Chemical and Allied Export Promotion Council of India under the Ministry of Commerce, promoting exports of chemical-based and allied products.",
      },
      {
        question: "Is CAPEXIL membership mandatory?",
        answer:
          "Yes, for exporters in notified sectors like ceramics, rubber, glassware, natural stones and related chemical products.",
      },
      {
        question: "How long is the certification valid?",
        answer:
          "The RCMC certificate is valid for one year from date of issue and must be renewed annually via the DGFT portal.",
      },
      {
        question: "Can MSMEs apply at reduced fees?",
        answer:
          "Yes. MSME Domestic Suppliers pay ₹3,000 and MSME Manufacturer‑Exporters pay ₹5,000.",
      },
      {
        question: "What products are covered?",
        answer:
          "Auto tyres, glassware, plywood, rubber goods, natural stones, cement, ceramics, paints, explosives, processed minerals, animal by‑products and allied chemical products.",
      },
      {
        question: "How does Dostartup assist?",
        answer:
          "We manage all documentation, online application, follow‑up and renewals, ensuring seamless compliance and fast approvals.",
      },
    ],
  },

  "nasscom-membership": {
    title: "NASSCOM Membership Certificate",
    description:
      "Joining NASSCOM—India’s premier IT‑BPM trade association—boosts your credibility, unlocks networking and policy‑making opportunities, and provides access to critical market intelligence.",
    overview: [
      {
        heading: "What is NASSCOM?",
        content:
          "The National Association of Software and Service Companies (NASSCOM) is India’s leading trade body for the IT‑BPM sector, established in 1988 under the Ministry of Commerce. It represents over 3,000 member companies—from startups to multinationals—and drives industry growth through events, research, advocacy, and global trade facilitation.",
      },
      {
        heading: "Why NASSCOM Membership Matters",
        content:
          "Membership signals your adherence to industry best practices, grants you a voice in policy discussions with government and regulators, and positions you at the forefront of India’s digital economy.",
      },
      {
        heading: "Who Can Apply?",
        content:
          "Any legally registered Indian entity—startups, private/public limited companies, LLPs—engaged in IT services, software development, SaaS, tech‑enabled services, BPO/KPO, or related digital sectors with valid GST and PAN can apply.",
      },
    ],
    benefits: [
      {
        heading: "Strong Industry Recognition",
        content:
          "Instantly enhance your brand’s credibility by associating with India’s top IT‑BPM trade body.",
      },
      {
        heading: "Global Networking Opportunities",
        content:
          "Participate in national and international forums, trade fairs, and summits to build partnerships and explore new markets.",
      },
      {
        heading: "Access to Market Intelligence",
        content:
          "Receive privileged access to NASSCOM’s proprietary research, trend reports, and white papers on technology, regulations, and market developments.",
      },
      {
        heading: "Policy Advocacy",
        content:
          "Shape industry‑friendly regulations by contributing to NASSCOM’s policy dialogues with the Government of India.",
      },
      {
        heading: "Business Growth Support",
        content:
          "Benefit from mentorship programs, innovation hubs, skill development initiatives, and startup acceleration platforms.",
      },
    ],
    documentsRequired: [
      {
        heading: "Key Documents for Application",
        content:
          "Certificate of Incorporation or LLP Agreement; PAN card; GST registration; brief company profile or pitch deck; audited financial statements or net‑worth declaration; founders’/directors’ ID proofs; URL of website or LinkedIn; declaration of business activities.",
      },
    ],
    registrationProcedure: [
      {
        heading: "DoStartup’s Seamless Process",
        content:
          "1. Initial Consultation & Eligibility Check: Free one‑on‑one to assess your fit and choose the right membership tier.  \n2. Document Collection & Review: We gather, format, and professionally review all required documents.  \n3. Application Filing: We submit your error‑free application and handle membership fee guidance.  \n4. Follow‑Up & Liaison: We track your application, respond to NASSCOM queries, and expedite approval.  \n5. Certificate Delivery: Receive your digital & print‑ready NASSCOM certificate, portal credentials, and directory listing.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "Dedicated team of tech licensing experts with deep NASSCOM insights",
          "Transparent, startup‑friendly pricing—no hidden charges",
          "End‑to‑end management from paperwork to certificate delivery",
          "Real‑time application tracking and proactive updates",
          "Rapid turnaround through established NASSCOM channels",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the cost of NASSCOM membership?",
        answer:
          "Membership fees vary by annual revenue. DoStartup will provide a precise quote, including NASSCOM’s official fee plus our service charge.",
      },
      {
        question: "How long does approval take?",
        answer:
          "With complete documentation, approval usually takes 7–14 working days. Active follow‑ups by DoStartup minimize delays.",
      },
      {
        question: "Can a pre‑revenue startup apply?",
        answer:
          "Yes, as long as you have a registered entity (company or LLP) and valid GST/PAN, you can join.",
      },
      {
        question: "Will my company be listed on the NASSCOM website?",
        answer:
          "Yes. Approved members receive a listing in NASSCOM’s official member directory, enhancing visibility.",
      },
      {
        question: "What if my application is rejected?",
        answer:
          "DoStartup analyzes rejection reasons, rectifies issues or missing documents, and resubmits until successful approval.",
      },
      {
        question: "Is renewal required?",
        answer:
          "Yes. Membership renews annually. DoStartup handles renewals and tier upgrades seamlessly.",
      },
    ],
  },

  "mso-license": {
    title: "MSO License – A Complete Overview",
    description:
      "An MSO License is mandatory for any Multi-System Operator offering cable TV services via a Digital Addressable System (DAS). Apply online through the Ministry of Information & Broadcasting’s Broadcast Seva portal.",
    overview: [
      {
        heading: "What is the MSO License?",
        content:
          "A Multi-System Operator (MSO) License authorizes cable television providers operating multiple cable or satellite TV systems to distribute a wide array of channels to end users through a DAS.",
      },
      {
        heading: "Who is a Multi-System Operator?",
        content:
          "An MSO is an entity—individual, firm, society, association, or company—that aggregates multiple local cable networks or satellite feeds and delivers encrypted digital TV signals via local cable operators (LCOs) or directly to subscribers.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages of Holding an MSO License",
        content:
          "• Legal authorization to aggregate and distribute multiple TV channels  \n• Ability to serve large subscriber bases across regions  \n• Enhanced content‑security via encryption and DAS compliance  \n• Credibility and trust with broadcasters and regulators  \n• Opportunity to negotiate carriage agreements with national broadcasters",
      },
    ],
    documentsRequired: [
      {
        heading: "Individual Applicant",
        content:
          "Identification proofs (Voter ID/Aadhaar, DOB certificate, PAN, ITR), ₹1 Lakh Bharat Kosh challan, residential proof, CA‑signed net worth certificate, P&L and balance sheet, authorization letter and ₹10 stamp‑paper undertaking.",
      },
      {
        heading: "Existing Cable Operator",
        content:
          "GST & Entertainment Tax registration, list of local cable operators, ground/local channels, mandatory & satellite channels, signed broadcaster agreements.",
      },
      {
        heading: "Non‑Cable Operator",
        content:
          "GST/Entertainment Tax registration or application receipts, provisional registration affidavit on ₹10 stamp paper, challan & fee receipt.",
      },
      {
        heading: "Association or Body of Individuals",
        content:
          "Registration deed, member ID proofs (Voter ID/Aadhaar, DOB, PAN), CA‑certified net worth, balance sheet & P&L, ₹1 Lakh challan, authorization letter and undertakings on ₹10 stamp paper.",
      },
      {
        heading: "Company Applicant",
        content:
          "Incorporation certificate, company PAN, directors’ PAN & DOB proofs, CA‑certified net worth, balance sheet & P&L, ₹1 Lakh challan, AOA/MOA, authorization letter, updated ITR, ₹10 stamp‑paper undertaking.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Process for Obtaining an MSO License",
        content:
          "1. Complete the online MSO registration form on Broadcast Seva.  \n2. Attach digital copies of all required documents.  \n3. Pay the ₹1 Lakh processing fee via Bharat Kosh and download the challan.  \n4. Prepare an undertaking on ₹10 stamp paper and provisional affidavit on ₹100 stamp paper.  \n5. Send hard copies of the challan, undertakings, affidavits, and fee receipt to the Ministry via speed post within 15 days.  \n6. Track application status on the portal and respond promptly to queries.",
      },
    ],
    whyUs: [
      {
        heading: "Expert Support from DoStartup",
        description: [
          "Decades of experience in government licensing processes",
          "End‑to‑end document preparation and submission",
          "Dedicated liaison with Ministry officials to expedite approval",
          "Clear guidance on compliance, affidavits, and speed‑post procedures",
          "Real‑time tracking and personalized updates",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the full form of MSO?",
        answer: "MSO stands for Multi-System Operator.",
      },
      {
        question: "When did the MSO License come into effect in India?",
        answer:
          "The MSO licensing framework was introduced following the Cable Television Networks (Regulation) Amendment Act, 2011, mandating Digital Addressable Systems.",
      },
      {
        question: "What is the role of an MSO license in cable TV?",
        answer:
          "An MSO license enables lawful distribution of multiple television channels via DAS, ensuring regulatory compliance, content security, and subscriber transparency.",
      },
      {
        question: "What do you mean by Multi-System Operator?",
        answer:
          "A Multi-System Operator is an entity that operates more than one cable or satellite TV system, aggregating channels for delivery through local networks or directly to subscribers.",
      },
      {
        question: "Who can apply for the MSO license in India?",
        answer:
          "Any Indian citizen or entity—individual, firm, society, association, or company—meeting incorporation, financial soundness, and clean criminal record criteria can apply.",
      },
      {
        question:
          "What are the types of documents required to apply for an MSO License in India?",
        answer:
          "Documents vary by applicant type but generally include identity/address proofs, net worth certificates, tax registrations, affidavits, undertakings, broadcaster agreements, and company incorporation papers.",
      },
      {
        question: "What is the typical process of obtaining an MSO license?",
        answer:
          "Visit Broadcast Seva portal, fill online form, upload documents, pay fee, send undertakings and challan via speed post within 15 days, then monitor approval and respond to queries.",
      },
    ],
  },

  "dot-osp-compliance": {
    title: "DoT OSP Compliance",
    description:
      "Mandatory Department of Telecommunications compliance for Other Service Providers (OSPs) offering telecom‑based services like call centers, BPO/KPO, tele‑banking, and more.",
    overview: [
      {
        heading: "Role of DoT OSP Compliance",
        content:
          "OSP registration and ongoing compliance with DoT guidelines ensures legal authorization to operate telecom‑based services—tele‑banking, e‑commerce, tele‑education, call centers, BPO/KPO—and prevents penalties or shutdowns.",
      },
      {
        heading: "Mandatory Form Filing",
        content:
          "1. Changes in OSP Setup: Notify DoT’s Term Cell within 15 days of any change in directorship, connectivity, or infrastructure.  \n2. Annual Return Submission: File within 6 months of financial year end, including client information, turnover, net profit/loss, employee details; errors can delay processing.",
      },
    ],
    benefits: [
      {
        heading: "Importance of Compliance Services",
        content:
          "Professional DoT OSP compliance services help OSPs file accurate annual returns, maintain timely updates, and handle complex legal paperwork—minimizing risk of heavy fines or service interruptions.",
      },
    ],
    documentsRequired: [
      {
        heading: "Required Documents",
        content:
          "OSP name & registration number; registered office address; company CIN (and holding company CIN if any); employee details; balance sheet; profit & loss statement; any other DoT‑specified documents.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Steps to Ensure DoT OSP Compliance",
        content:
          "1. Collect Documents: Gather all required paperwork and verify accuracy.  \n2. Fill Compliance Form: Complete the appropriate DoT form with correct details.  \n3. Submit & Confirm: File form and documents with the Term Cell and obtain acknowledgment receipt for future tracking.",
      },
    ],
    whyUs: [
      {
        heading: "Let DoStartup Simplify Your Compliance",
        description: [
          "Expert handling of form filings and document preparation",
          "Timely submissions to DoT Term Cells with error‑free paperwork",
          "Ongoing support for annual returns and setup changes",
          "Minimize compliance risk and avoid heavy penalties",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is DoT compliance on the internet?",
        answer:
          "Telecom‑related requirements—registration, annual returns, updates—that OSPs must follow under DoT regulations.",
      },
      {
        question: "Who falls under DoT OSP compliance?",
        answer:
          "All registered OSPs offering telecom‑based services like BPOs, call centers, tele‑education, tele‑trading, etc.",
      },
      {
        question: "What are the filing requirements?",
        answer:
          "Notify setup changes within 15 days and file annual returns within 6 months after FY end with accurate financial and employee data.",
      },
      {
        question: "What documents are needed for annual return filing?",
        answer:
          "OSP registration, CIN, P&L statement, balance sheet, employee records, and any other DoT‑specified paperwork.",
      },
      {
        question: "What is the compliance process?",
        answer:
          "Gather documents → complete the form → submit to DoT Term Cell → retain acknowledgment for records.",
      },
      {
        question: "Why approach DoStartup for compliance?",
        answer:
          "DoStartup provides expert handling, accurate paperwork, and timely submissions to minimize your compliance risks.",
      },
      {
        question: "Which authority governs OSP facilities?",
        answer:
          "The Department of Telecommunications (DoT) under India’s Ministry of Communications.",
      },
    ],
  },

  "ip-1-license": {
    title: "IP-1 License – A Complete Overview",
    description:
      "An IP-1 License is granted by the Department of Telecommunications to Infrastructure Providers – Category I, authorizing them to lease, rent, or sell passive telecom assets like towers, dark fiber, RoW, duct space and similar non‑electronic infrastructure.",
    overview: [
      {
        heading: "Role of IP-1 License",
        content:
          "The IP-1 License enables companies to legally offer passive telecom infrastructure—towers, ducts, dark fiber, RoW—to licensed telecom operators, ensuring a regulated, high‑quality connectivity ecosystem across India.",
      },
      {
        heading: "Areas Served by IP-1 Providers",
        content:
          "IP-1 License holders deal exclusively with passive components:\n● Towers for wireless coverage\n● Right of Way (RoW) for cable routes\n● Antennas and base stations as network hubs\n● Duct space for fiber installations\n● Dark fiber leasing\n● Broadband and cloud infrastructure",
      },
      {
        heading: "Who Can Apply",
        content:
          "Eligibility is restricted to companies incorporated under the Companies Act, 2013 with a clean legal record. Foreign direct investment up to 100% is permitted, subject to FIPB approval if above 40%.",
      },
    ],
    benefits: [
      {
        heading: "Key Registration Guidelines",
        content:
          "● Must be a Company under Companies Act, 2013\n● No cap on number of IP‑1 entrants\n● Deal only in passive assets via formal agreements\n● Notify DoT within 15 days of signing contracts or setup changes\n● DoT decision on application within 15 days",
      },
      {
        heading: "Why IP‑1 Compliance Matters",
        content:
          "Maintaining IP‑1 compliance prevents heavy penalties, ensures uninterrupted service, and fosters trust with telecom operators through transparent, non‑discriminatory infrastructure agreements.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents for IP-1 Application",
        content:
          "● Licensing fee DD/Pay Order\n● Certificate of Incorporation signed by Director/CS/Auditor\n● Equity structure details and shareholder nationalities\n● MoU/Agreement for foreign promoters (if any)\n● FIPB approval (if FDI >40%)\n● Board Resolution authorizing signatory\n● MOA & AOA with business objectives\n● List of Directors with nationalities",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Application Process",
        content:
          "1. Download & Review Form: From the DoT portal.  \n2. Complete Application: Company name, address, signatory details, fee info, equity breakdown, company seal & signature.  \n3. Submit Offline: File at DoT Head Office, New Delhi, and get acknowledgment.  \n4. Vetting: DoT verifies documents; discrepancies may lead to rejection.  \n5. Certificate Issuance: Upon approval, receive IP‑1 License to operate.",
      },
    ],
    whyUs: [
      {
        heading: "Let DoStartup Simplify Your IP-1 License",
        description: [
          "Expert guidance on documentation & application filing",
          "Timely follow‑up with DoT to expedite approval",
          "Accurate form filling and legal review",
          "End‑to‑end support from download to certificate delivery",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the role of the IP-1 License?",
        answer:
          "It permits companies to offer passive telecom infrastructure—towers, duct space, dark fiber—to licensed operators.",
      },
      {
        question: "Who is an Infrastructure Provider?",
        answer:
          "A provider supplying non‑electronic telecom assets like towers, RoW, antennas, base stations, and ducts.",
      },
      {
        question: "Why does DoT issue IP-1 Licenses?",
        answer:
          "To regulate passive infrastructure deployment, ensure standardization, and support telecom ecosystem growth.",
      },
      {
        question: "Is an IP-1 License mandatory?",
        answer:
          "Yes—any entity leasing, renting or selling passive telecom assets to operators must hold an IP‑1 License.",
      },
      {
        question: "What resources can IP‑1 holders provide?",
        answer:
          "Towers, right of way, duct space, dark fiber, antennas, base stations, and broadband infrastructure.",
      },
      {
        question: "How soon does DoT decide on applications?",
        answer:
          "DoT communicates approval or rejection within 15 days of submission.",
      },
      {
        question: "Can foreign‑owned companies apply?",
        answer:
          "Yes—100% FDI allowed subject to FIPB approval if equity exceeds 40%.",
      },
      {
        question: "What is required after signing infrastructure agreements?",
        answer:
          "Submit copies of all formal agreements to DoT within 15 days of execution.",
      },
    ],
  },

  "hits-operator": {
    title: "HITS Operator – A Complete Overview",
    description:
      "A HITS (Headend‑In‑The‑Sky) Operator delivers multi‑channel TV via satellite under MIB guidelines, using Ku/C bands to downlink, aggregate, encrypt, and uplink content for cable operators and subscribers nationwide.",
    overview: [
      {
        heading: "What Is a HITS Operator?",
        content:
          "A HITS Operator under Ministry of Information & Broadcasting guidelines receives, decrypts, aggregates, encrypts, and uplinks TV channels via Ku and C band satellites. They serve cable operators or connect directly to subscribers via set‑top boxes.",
      },
      {
        heading: "How HITS Differs from Traditional Cable",
        content:
          "Traditional MSOs use terrestrial headends and fiber/coax distribution. HITS replaces local headends with nationwide satellite uplink—simplifying distribution, maintaining QoS, and centralizing Subscriber Management Systems.",
      },
      {
        heading: "Scope of HITS Services",
        content:
          "1. Content Aggregation: Purchase, decrypt, bundle, encrypt and uplink channels.\n2. Passive Infrastructure: Lease earth station, transponder, encryption tools to MSOs.\n3. Dual Service: Combine aggregation and infrastructure offerings.",
      },
    ],
    benefits: [
      {
        heading: "Key Requirements to Launch HITS",
        content:
          "● Company incorporation under Companies Act, 2013\n● Minimum net worth of ₹10 crore\n● Compliance with FDI norms\n● MIB authorization via TRAI approval",
      },
      {
        heading: "Why HITS Offers Better Coverage",
        content:
          "Satellite‑based distribution enables uniform QoS across geographic regions, bypassing terrestrial network limitations and ensuring rapid nationwide deployment.",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents for HITS License",
        content:
          "● Certificate of Incorporation\n● Memorandum & Articles of Association\n● Directors’ and shareholders’ list\n● Shareholding pattern\n● Net worth certificate & audited balance sheet\n● Satellite and earth station specifications\n● Application processing fee receipt",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Licensing Process",
        content:
          "1. Compile required documents  \n2. Complete HITS license application form  \n3. Submit to TRAI/MIB and obtain acknowledgment  \n4. Application scrutiny and vetting  \n5. Receive Letter of Intent  \n6. Pay entry fee as per LoI  \n7. Obtain official Registration Certificate",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for HITS Compliance",
        description: [
          "Expert handling of MIB/TRAI documentation",
          "Timely application submission and follow‑up",
          "End‑to‑end legal and technical support",
          "Deep telecom licensing and compliance expertise",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What operations can HITS operators perform?",
        answer:
          "They may aggregate content, provide passive infrastructure to MSOs, or offer both services under one license.",
      },
      {
        question: "Which authority regulates HITS licensing?",
        answer:
          "The Ministry of Information & Broadcasting, via TRAI, governs HITS authorization and compliance.",
      },
      {
        question: "Why is satellite used for HITS?",
        answer:
          "Satellites deliver uniform, nationwide coverage, overcoming terrestrial network gaps and simplifying distribution.",
      },
      {
        question: "What is a Letter of Intent?",
        answer:
          "A formal pre approval from TRAI/MIB that precedes issuance of the final HITS Registration Certificate.",
      },
      {
        question: "Can HITS begin without TRAI approval?",
        answer:
          "No—prior TRAI/MIB approval is mandatory before initiating any HITS operations.",
      },
      {
        question: "What constitutes passive infrastructure?",
        answer:
          "Earth stations, transponder capacity, encryption/decryption equipment leased to MSOs under formal agreements.",
      },
      {
        question: "What if HITS exceeds licensed scope?",
        answer:
          "Non‑compliance may lead to penalties, license suspension, or legal action by TRAI/MIB.",
      },
      {
        question: "How does DoStartup assist?",
        answer:
          "We manage document preparation, application filing, regulatory follow‑up, and guide you to secure your HITS license smoothly.",
      },
    ],
  },

  "fifp-approval-telecom": {
    title: "FIFP Approval for Telecom – A Complete Overview",
    description:
      "Streamline your telecom FDI approvals through the Foreign Investment Facilitation Portal (FIFP), making the process digital, transparent, and efficient.",
    overview: [
      {
        heading: "What Is FIFP Approval for Telecom?",
        content:
          "FIFP approval is mandatory for telecom sector investments falling outside the automatic FDI route. Managed by DPIIT, MoCI, and DoT, it digitizes and accelerates foreign investment facilitation in telecom.",
      },
      {
        heading: "Key Features of the FIFP Portal",
        content:
          "✅ Fully online FDI application and tracking  \n✅ Real‑time status updates and notifications  \n✅ Increased transparency and reduced processing time  \n✅ Support for promotional activities to attract investors  \n✅ Centralized hub for policy and regulatory changes",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Using FIFP for Telecom FDI",
        content:
          "• Simplified approval process boosts investor confidence  \n• Enhanced transparency with live portal updates  \n• Faster decision‑making reduces time‑to‑market  \n• Increased global FDI inflow into telecom  \n• Automated notifications keep applicants informed",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents for FIFP Application",
        content:
          "• Certificate of Incorporation  \n• Memorandum & Articles of Association  \n• Valid Telecom License Agreement  \n• Detailed business report of the operator  \n• FDI proposal/intent  \n• Board resolutions (investor & investee)  \n• Audited financial statements (last fiscal year)  \n• List of foreign investors and collaborators  \n• Fund flow chart  \n• JV documents (if applicable)  \n• Any previous government approvals  \n• Affidavit of information accuracy",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step FIFP Application Process",
        content:
          "1. Register on the FIFP portal and verify via OTP.  \n2. Log in and complete the 'License (IL‑FC)' form under 'Comprehensive Corner'.  \n3. Upload all required documents; incomplete applications are rejected.  \n4. Submit physical copies to DoT within 10 days of online submission.  \n5. Download and submit the Security Clearance Form.  \n6. Track application status and receive FIFP approval.",
      },
    ],
    feesStructure: [
      {
        heading: "FIFP Portal Fees",
        description:
          "There is no government filing fee for the FIFP portal. Professional service charges may apply based on engagement scope.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Typical Approval Timeline",
        description:
          "FIFP approvals for telecom generally take 4–6 weeks, subject to document completeness and query resolution.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for FIFP Approval",
        description: [
          "Expert guidance on FDI policy and telecom regulations",
          "End‑to‑end assistance with portal registration and form filling",
          "Document verification to ensure application completeness",
          "Regular follow‑ups with DPIIT, MoCI, and DoT",
          "Timely reminders for physical submissions",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Which sectors require FIFP approval?",
        answer:
          "Any sector not under the automatic FDI route—telecom being one of them—requires FIFP approval.",
      },
      {
        question: "Is the FIFP application fully online?",
        answer:
          "Yes, both application submission and document uploads are completed online via the FIFP portal.",
      },
      {
        question: "Can I save and revisit my application?",
        answer:
          "Yes, you can save your progress and return later using your unique application number.",
      },
      {
        question: "Is there a fee for filing an online application?",
        answer:
          "No government fee is charged; however, professional assistance may involve service fees.",
      },
      {
        question: "What if I miss the hard copy submission deadline?",
        answer:
          "Failure to submit physical documents within 10 days will invalidate your application.",
      },
      {
        question: "Can I withdraw my application?",
        answer:
          "Yes, you may withdraw your application through the portal before final approval is granted.",
      },
    ],
  },

  "halal-certification": {
    title: "Halal Certification – A Complete Overview",
    description:
      "Halal Certification verifies that products and processes comply with Islamic law, ensuring they are permissible, hygienic, and free from prohibited substances across food, cosmetics, pharmaceuticals, and hospitality sectors.",
    overview: [
      {
        heading: "What Is Halal?",
        content:
          "Halal, meaning “permissible” under Islamic law, applies to food, cosmetics, pharmaceuticals, and other goods. Certification confirms products are free from pork, alcohol, non‑Halal gelatin or enzymes, and produced under strict hygiene standards.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Halal Certification",
        content:
          "✅ Use of Halal Logo: Builds consumer trust and credibility.\n✅ Global Market Access: Unlocks over 2 billion Muslim consumers worldwide.\n✅ Enhanced Quality & Hygiene: Certified processes meet stringent production and sanitation standards.\n✅ Better Brand Image: Elevates reputation domestically and internationally.\n✅ Compliance Assurance: Aligns with Islamic dietary laws and consumer expectations.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Halal Certification",
        content:
          "• Business PAN Card\n• Address Proof\n• Application on Official Letterhead\n• Product & Raw Material List\n• Preservation Methods & Equipment Details\n• Lab Certificates for Ingredients\n• Export License (if applicable)\n• Product Samples & Packaging\n• Declarations: No Pork, No Alcohol, Halal‑certified Preservatives",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Certification Process",
        content:
          "1. Choose Certification Body (e.g., Halal India, HCIL, Jamiat Ulama‑i‑Hind).\n2. Select Relevant Scheme (Restaurant, Food & Beverage, Abattoir, Industrial, Warehouse).\n3. Submit Application & Documents (no fee at this stage).\n4. Undergo Technical & Shariah Audit of premises and processes.\n5. Receive Halal Certificate upon successful audit and document approval.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Simplifies Halal Certification",
        description: [
          "• Expert selection of certification body and scheme",
          "• Complete documentation preparation and review",
          "• Coordination of audit scheduling and follow‑up",
          "• Real‑time updates until certificate delivery",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is Halal Certification?",
        answer:
          "It confirms that products and processes comply with Islamic law, ensuring they are free from prohibited elements and produced under hygienic conditions.",
      },
      {
        question: "Which industries need Halal Certification?",
        answer:
          "Food processing, cosmetics, pharmaceuticals, hospitality, and any sector using animal‑derived or potentially non‑Halal ingredients.",
      },
      {
        question: "How can I identify Halal‑certified products?",
        answer:
          "Look for the official Halal logo from a recognized certification body on product packaging.",
      },
      {
        question: "What is the validity of Halal Certification?",
        answer:
          "Typically one year, with annual renewal required by the certifying body and scheme.",
      },
    ],
  },

  "homologation-certificate": {
    title: "Homologation Certification – A Complete Overview",
    description:
      "Homologation certification verifies that products meet India’s technical, safety, and regulatory standards, managed by ARAI for vehicles and BIS for non‑automotive goods, ensuring legal market access and quality assurance.",
    overview: [
      {
        heading: "What Is Homologation?",
        content:
          "A formal process where products are tested and approved against Indian norms—vehicles via ARAI, and electronics, medical devices, telecom gear, industrial machinery, consumer goods, power equipment, and building materials via BIS—to ensure safety, performance, and regulatory compliance.",
      },
      {
        heading: "Product Categories Requiring Homologation",
        content:
          "Automotive Vehicles (cars, bikes, buses, trucks), Electronic Devices (smartphones, laptops), Medical Equipment (imaging systems, surgical tools), Telecom Equipment (routers, switches), Industrial Machinery (cranes, excavators), Consumer Goods (toys, cosmetics, packaged foods), Power Equipment (generators, UPS), Building Materials (cement, steel).",
      },
    ],
    benefits: [
      {
        heading: "Why Homologation Matters",
        content:
          "• Regulatory Compliance: Confirms adherence to safety, crash, emission, and technical standards.\n• Legal Market Access: Mandatory for importing or selling in India, avoiding penalties and recalls.\n• Enhanced Brand Reputation: Demonstrates commitment to quality and consumer safety.\n• Consumer Trust: Certification logo reassures end‑users about product reliability.\n• Market Expansion: Enables seamless entry into India’s large and regulated markets.",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Documents for Homologation",
        content:
          "• Technical Specifications: Design, dimensions, materials.\n• Accredited Test Reports: Lab results.\n• Type Approval Certificate.\n• Declaration of Conformity by Manufacturer.\n• Wiring Diagrams (for electrical products).\n• User Manual: Safety and maintenance instructions.\n• Bill of Materials.\n• Manufacturing Process Flow Chart.\n• Labelling Details: Warnings, model.\n• Environmental Compliance Certificate.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Certification Process",
        content:
          "1. Identify Applicable Regulations and Standards.\n2. Select Testing Agency: ARAI for vehicles or BIS for non‑automotive.\n3. Submit Product Samples for Testing (weeks to months).\n4. Receive Test Report detailing compliance status.\n5. File Application with Report, Documents, and Fees.\n6. Agency Review: Address any queries promptly.\n7. Receive Homologation Certificate and market approval.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Simplifies Homologation",
        description: [
          "1. Regulatory Assessment: Identify all applicable standards.",
          "2. Documentation Support: Prepare and verify all required paperwork.",
          "3. Testing Coordination: Liaise with ARAI/BIS labs for sample submission.",
          "4. Application Filing: Accurate submission and fee management.",
          "5. Follow‑Up Service: Track review and resolve agency queries.",
          "6. Certificate Delivery: Ensure prompt issuance and handover.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is homologation certification?",
        answer:
          "Official approval confirming a product meets Indian safety, technical, and environmental standards.",
      },
      {
        question: "Which products require homologation?",
        answer:
          "Vehicles, electronics, telecom devices, medical equipment, industrial machinery, consumer goods, power tools, and building materials.",
      },
      {
        question: "Who issues homologation certificates in India?",
        answer:
          "ARAI for automotive vehicles and BIS for non‑automotive products.",
      },
      {
        question: "How long does the homologation process take?",
        answer:
          "Typically from a few weeks to several months, depending on product type and testing complexity.",
      },
      {
        question: "What is the cost of homologation?",
        answer:
          "Varies by product category, testing requirements, and chosen certification agency.",
      },
      {
        question: "Can I sell without homologation in India?",
        answer:
          "No, homologation is mandatory for market entry of applicable products.",
      },
      {
        question: "How often must homologation be renewed?",
        answer:
          "As per certificate validity—usually every few years or upon major product changes.",
      },
      {
        question: "Can foreign‑certified products be sold in India?",
        answer:
          "No, Indian homologation is required regardless of foreign approvals.",
      },
      {
        question: "What if my product fails testing?",
        answer:
          "Modify the product to address non‑conformities and undergo retesting.",
      },
      {
        question: "Is there a fast‑track certification option?",
        answer:
          "Expedited processes may be available but depend on agency workload and product complexity.",
      },
    ],
  },

  "vehicle-type-approval-certificate": {
    title: "Vehicle Type Approval Certificate – A Complete Overview",
    description:
      "The Vehicle Type Approval (VTA) Certificate verifies that a new vehicle model meets India’s safety, emission, and technical standards, and is mandatory for legal sale and registration across the country.",
    overview: [
      {
        heading: "What Is Vehicle Type Approval?",
        content:
          "Vehicle Type Approval (VTA) is an official certification issued by government‑authorized bodies (such as ARAI or ICAT) confirming that a new vehicle model complies with all applicable safety, performance, and emission norms prescribed under Indian regulations.",
      },
      {
        heading: "Why VTA Certification Matters",
        content:
          "• Regulatory Compliance: Ensures adherence to crash, braking, and emission standards.\n• Market Entry: Mandatory legal authorization to sell vehicles in India.\n• Consumer Safety: Guarantees vehicles are roadworthy and eco‑friendly.\n• Brand Trust: Builds consumer confidence in certified vehicle models.\n• Competitive Advantage: Certified vehicles face fewer recalls and compliance risks.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages of VTA Certification",
        content:
          "• Legal Market Access: Only VTA‑approved vehicles can be sold or registered in India.\n• Enhanced Brand Reputation: Certification signals quality and safety commitment.\n• Reduced Post‑Sale Issues: Certified models have fewer technical or regulatory hold‑ups.\n• Consumer Confidence: Buyers trust vehicles that meet official approval.\n• Long‑Term Compliance: Eases updates when regulations evolve.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for VTA Application",
        content:
          "• Completed Application Form with vehicle and manufacturer/importer details.\n• Vehicle Registration Certificate or Prototype Approval.\n• Detailed Design Specifications (engine, fuel type, transmission).\n• Accredited Test Reports (emissions, safety, braking, performance).\n• Manufacturing & Quality Control Processes documentation.\n• Import Documents (for imported models): Customs clearance, import license.\n• Certificate of Conformity from testing agency post‑evaluation.\n• Any additional agency‑specific declarations or affidavits.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step VTA Certification Process",
        content:
          "1. Pre‑Approval Testing: Conduct initial emissions, safety, and performance assessments.  \n2. Official Type Approval Testing: Submit prototypes for full testing at ARAI/ICAT facilities.  \n3. Documentation Compilation: Prepare and verify all forms, reports, and declarations.  \n4. Application Submission: File complete dossier with the testing agency and pay fees.  \n5. Agency Review & Queries: Respond promptly to any technical or documentation queries.  \n6. Certificate Issuance: Receive VTA Certificate upon successful compliance verification.  \n7. Post‑Approval Support: Maintain records and support modifications if regulations change.",
      },
    ],
    whyUs: [
      {
        heading: "How Do Startup Simplifies VTA Certification",
        description: [
          "1. End‑to‑End Guidance: Assist with testing planning and prototype selection.",
          "2. Documentation Expertise: Compile and validate all required paperwork.",
          "3. Agency Liaison: Coordinate submissions and follow up with ARAI/ICAT officials.",
          "4. Timeline Management: Track testing schedules and accelerate approvals.",
          "5. Post‑Approval Compliance: Support any future certification updates.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a VTA Certificate?",
        answer:
          "A Vehicle Type Approval Certificate confirms a vehicle model meets India's safety, emission, and technical standards and is essential for legal sale and registration.",
      },
      {
        question: "Who needs a VTA Certificate?",
        answer:
          "All vehicle manufacturers and authorized importers must obtain VTA for every new model before marketing or registering it in India.",
      },
      {
        question: "How long does VTA certification take?",
        answer:
          "The process typically takes several weeks to a few months, depending on vehicle complexity and testing agency schedules.",
      },
      {
        question: "What happens if a vehicle fails VTA tests?",
        answer:
          "The vehicle must be modified to address non‑conformities and undergo retesting until all standards are met.",
      },
      {
        question: "Is the VTA Certificate transferable?",
        answer:
          "No, the VTA Certificate is specific to the approved vehicle type and model configuration.",
      },
      {
        question: "Can vehicles be sold without VTA?",
        answer:
          "No, it is illegal to sell or register any new vehicle in India without a valid VTA Certificate.",
      },
      {
        question: "Who issues the VTA Certificate?",
        answer:
          "Certificates are issued by government‑authorized testing agencies such as ARAI or ICAT under the Department of Road Transport and Highways.",
      },
      {
        question: "How much does VTA certification cost?",
        answer:
          "Costs vary by vehicle category, required tests, and the chosen certification agency’s fee structure.",
      },
      {
        question: "Can existing models be recertified?",
        answer:
          "Yes, significant modifications or regulatory updates may require re‑approval and an updated VTA Certificate.",
      },
      {
        question: "Why choose Do Startup for VTA?",
        answer:
          "We offer streamlined testing coordination, documentation support, and proactive follow‑up to secure your VTA swiftly and compliantly.",
      },
    ],
  },

  "imei-registration": {
    title: "IMEI Number Registration – Protect Your Devices with Do Startup",
    description:
      "Every SIM‑enabled device in India must register its IMEI under DoT regulations to ensure authenticity, enable theft tracking, and facilitate legal import/export.",
    overview: [
      {
        heading: "What Is IMEI Registration?",
        content:
          "The IMEI (International Mobile Equipment Identity) is a unique 15‑digit code for each SIM‑enabled device. Per Department of Telecommunications (DoT) rules, all manufacturers and importers must register device IMEIs before sale or import into India to prevent cloning, tampering, and unauthorized network access.",
      },
      {
        heading: "Why IMEI Registration Matters",
        content:
          "• Theft & Loss Prevention: Registered IMEIs can be blacklisted if devices are stolen or lost.  \n• Regulatory Compliance: Mandatory under the IMEI 2022 Amendment Rules.  \n• Import/Export Facilitation: Customs clearance requires valid IMEI records.  \n• Network Security: Telecom operators block unregistered or cloned devices.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of IMEI Registration",
        content:
          "• Device Tracking: Unique IMEI acts as a digital fingerprint for location and recovery.  \n• Legal Market Access: Ensures only compliant devices enter India.  \n• Consumer Protection: Reduces circulation of counterfeit devices.  \n• Network Integrity: Maintains safe mobile networks by blocking unauthorized handsets.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Do Startup’s IMEI Registration Process",
        content:
          "1. Consultation & Eligibility Check: Assess device types and volume.  \n2. Document Preparation: Compile IMEI lists, agreements, and technical specs.  \n3. Application Filing: Submit IMEI data and forms to MSAI HQ, Delhi.  \n4. Confirmation & Allocation: Receive registration acknowledgment and IMEI approvals.  \n5. Ongoing Support: Regular audits, database updates, and compliance monitoring.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for IMEI Registration",
        content:
          "• Completed IMEI Registration Form with device TAC codes and model details  \n• Manufacturer/Importer Agreement on stamp paper  \n• List of IMEIs to register (export‑ready format)  \n• Technical Specifications Sheet for each device  \n• Proof of submission to MSAI HQ, Delhi",
      },
    ],
    feesStructure: [
      {
        heading: "IMEI Registration Fees & Penalties",
        description:
          "Registration fees vary by device volume. Non‑compliance penalties include device blacklisting, import bans, and legal action under DoT regulations.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Complete IMEI Registration",
        description: "Typically 2–4 weeks after document submission.",
        steps: [
          {
            title: "Form Submission",
            duration: "1 week",
            description:
              "Collect and submit all required documents and IMEI lists.",
          },
          {
            title: "DoT Processing",
            duration: "1–2 weeks",
            description:
              "MSAI reviews application, verifies IMEIs, issues acknowledgments.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for IMEI Registration",
        description: [
          "• 100+ IMEI compliance specialists",
          "• 99.9% client approval rating",
          "• End‑to‑end support from filing to post‑approval audits",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Are IMEI numbers mandatory?",
        answer:
          "Yes. DoT requires IMEI registration for all SIM‑enabled devices before sale or import.",
      },
      {
        question: "Can IMEI be changed legally?",
        answer:
          "No. Altering an IMEI is illegal and punishable under Indian law.",
      },
      {
        question: "Who allocates IMEIs in India?",
        answer:
          "The GSMA allocates TAC codes; MSAI manages IMEI registration for India.",
      },
      {
        question: "What is the cost of IMEI registration?",
        answer:
          "Fees vary by volume and device type—contact Do Startup for a tailored quote.",
      },
      {
        question: "How long does registration take?",
        answer: "Usually 2–4 weeks from complete submission.",
      },
      {
        question: "What devices need IMEI registration?",
        answer:
          "All SIM‑enabled devices: mobiles, tablets, hotspots, smartwatches, dongles, GPS trackers.",
      },
      {
        question: "What if a device isn’t registered?",
        answer:
          "Unregistered or cloned devices will be blacklisted and blocked from networks.",
      },
      {
        question: "How do I submit IMEI lists?",
        answer:
          "Lists must be in the DoT‑prescribed CSV format and uploaded via the MSAI portal.",
      },
      {
        question: "Does Do Startup handle post‑approval audits?",
        answer:
          "Yes. We provide regular compliance checks and database updates.",
      },
      {
        question: "Where is the acknowledgment issued?",
        answer:
          "By MSAI HQ in New Delhi upon successful form and IMEI validation.",
      },
    ],
  },

  "imei-certificate-import-mobile-handsets": {
    title: "IMEI Certificate for Import of Mobile Handsets",
    description:
      "All imported or domestically manufactured SIM‑enabled devices—phones, tablets, hotspots, smartwatches—must have their IMEIs registered on the Indian Counterfeit Device Restriction (ICDR) portal before entering India, per DoT’s Prevention of Tampering Rules (2022).",
    overview: [
      {
        heading: "Regulatory Background",
        content:
          "Under the Prevention of Tampering of IMEIs Rules, 2022, every handset—new or re‑imported—requires pre‑import IMEI registration on the ICDR portal or it will be blocked at Customs and network level.",
      },
      {
        heading: "Covered Devices",
        content:
          "Includes all GSM/CDMA/LTE/5G‑capable equipment: mobile phones, feature phones, USB dongles, MiFi devices, tablets with cellular modems, GPS trackers, wearables with SIM, and IoT modules requiring network access.",
      },
      {
        heading: "Enforcement Mechanism",
        content:
          "Customs, DGFT, and telecom operators use the Central Equipment Identity Register (CEIR) to verify CIMR portal registrations. Unregistered IMEIs are auto‑blocked, preventing voice, SMS, and data on any Indian network.",
      },
    ],
    benefits: [
      {
        heading: "Import & Customs Compliance",
        content:
          "• Avoid seizure: Pre‑registration prevents shipment holds.  \n• Faster clearances: Customs uses portal acknowledgments for expedited processing.",
      },
      {
        heading: "Device Security & Anti‑theft",
        content:
          "• Lost device blocking: Reported IMEIs are blacklisted across all networks.  \n• Counterfeit deterrence: Only genuine devices with valid TAC codes pass authentication.",
      },
      {
        heading: "Business Continuity",
        content:
          "• Ongoing compliance: Automatic alerts for rule changes and re‑registration requirements.  \n• Audit‑ready records: Portal logs provide verifiable proof for regulators.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Preliminary Audit",
        content:
          "Compile device model list, verify TAC allocations with GSMA, and map SNR ranges. Flag any reprogrammed or duplicated IMEIs for exclusion.",
      },
      {
        heading: "Step 2: Documentation & Formatting",
        content:
          "Aggregate CSV files per the ICDR schema, prepare importer IEC, DGFT code, CHA letter, and manufacturer MOUs. Validate data integrity and checksum digits.",
      },
      {
        heading: "Step 3: Portal Submission",
        content:
          "Log in to ICDR portal, upload IMEI batches, pay any per‑registration fees, and track upload status. Address any schema validation errors immediately.",
      },
      {
        heading: "Step 4: Certificate Generation",
        content:
          "Upon approval, download the IMEI certificate bundle—one PDF per TAC group—bearing official DoT seals and unique acknowledgment numbers.",
      },
      {
        heading: "Step 5: Post‑Import Monitoring",
        content:
          "Monitor CEIR logs for any blocking events, manage re‑registration for new firmware versions, and schedule annual compliance reviews.",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Submission Files",
        content:
          "• IMEI list CSV (TAC, SNR start/end, check digits)  \n• Importer’s IEC & DGFT registration certificates  \n• Manufacturer MOU (stamped & notarized)  \n• Technical spec sheet per model  \n• CHA authorization letter",
      },
      {
        heading: "Supplementary Records",
        content:
          "• GSMA TAC allocation confirmation  \n• Sample device certificates of conformity  \n• Internal audit trail of IMEI generation or sourcing",
      },
    ],
    whyUs: [
      {
        heading: "Do Startup Advantage",
        description: [
          "• 150+ IMEI compliance experts with 5‑year average tenure",
          "• 99.9% first‑time approval rate on ICDR portal",
          "• White‑glove service: end‑to‑end data validation, submission, and follow‑up",
          "• Custom dashboards for real‑time tracking and reporting",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question:
          "Can imported demo units be registered on the same certificate?",
        answer:
          "Yes—batch‑register demo, R&D, and commercial units separately under distinct TAC codes with portfolio grouping.",
      },
      {
        question: "What if a TAC code is pending with GSMA?",
        answer:
          "We provisionally register SNR ranges under an interim TAC and update the portal once GSMA allocates the final code.",
      },
      {
        question: "Are there volume discounts?",
        answer:
          "Yes, per‑IMEI fees decrease in predefined volume slabs; contact us for tiered pricing details.",
      },
      {
        question: "How do network operators get blackout lists?",
        answer:
          "DoT pushes nightly CEIR syncs to all MNOs; blocked IMEIs are auto‑denied at attachment requests.",
      },
      {
        question: "Is there a revalidation requirement?",
        answer:
          "Only when device hardware revisions alter TAC allocations or when policy updates mandate mass re‑upload.",
      },
      {
        question: "We discovered duplicate IMEIs—what next?",
        answer:
          "Isolate duplicates, remove from submission, and report the anomaly to GSMA and DoT for remediation.",
      },
      {
        question: "Do refurbished phones need new IMEI certificates?",
        answer:
          "Refurbs retain original IMEIs; only record repair shop details in supplementary logs—no re‑certificate needed.",
      },
      {
        question: "How long is the IMEI certificate valid?",
        answer:
          "Certificates remain valid indefinitely unless policy changes require re‑submission or TAC reallocation.",
      },
      {
        question: "What support is provided post‑certification?",
        answer:
          "Ongoing helpdesk access, compliance alerts, portal change management, and annual health checks at no extra cost.",
      },
    ],
  },

  "imei-certificate-generation": {
    title: "IMEI Certificate Generation with Do Startup",
    description:
      "Post‑registration IMEI certificate generation provides legal proof of Device IMEI registration on the ICDR portal, essential for regulatory compliance and customs clearance.",
    overview: [
      {
        heading: "Platform & Expertise",
        content:
          "Do Startup’s AI‑powered compliance platform combines advanced automation with a global network of 50,000+ specialists to manage end‑to‑end IMEI certificate generation for smartphones, wearables, hotspots, tablets, dongles, and all SIM‑enabled devices.",
      },
      {
        heading: "Certificate Significance",
        content:
          "An IMEI certificate contains model, TAC, SNR range, importer IEC, CHA details, and OEM info. It is mandatory for customs, DGFT, and DoT validations under the 2022 Amendment Rules.",
      },
      {
        heading: "Generation Workflow",
        content:
          "From portal login through CSV upload to official PDF issuance bearing DoT seals, Do Startup handles all phases—data validation, form submission, fee payment, and final certificate download.",
      },
    ],
    benefits: [
      {
        heading: "Compliance Assurance",
        content:
          "• 99.9% first‑time approval rate on ICDR portal  \n• Automated schema validation to eliminate format errors  \n• Real‑time tracking dashboard for submission status",
      },
      {
        heading: "Operational Efficiency",
        content:
          "• White‑glove documentation support—no missing files  \n• Bulk IMEI processing in predefined volume slabs  \n• Tiered pricing for high‑volume registrations",
      },
      {
        heading: "Security & Traceability",
        content:
          "• Verifiable audit trail logs for regulators  \n• Automated CEIR integration for ongoing blacklist management  \n• Instant alerts on policy updates or re‑registration mandates",
      },
    ],
    registrationProcedure: [
      {
        heading: "1. Client Onboarding",
        content:
          "Collect project brief, importer details, and anticipated device lists. Assign a dedicated compliance manager.",
      },
      {
        heading: "2. Data Preparation",
        content:
          "Validate GSMA TAC allocations, format IMEI CSV per ICDR schema, and compile importer IEC, DGFT, and CHA documents.",
      },
      {
        heading: "3. Portal Submission",
        content:
          "Log into ICDR portal, upload IMEI batches, resolve any schema errors, and confirm fee payment.",
      },
      {
        heading: "4. Certificate Issuance",
        content:
          "Download official IMEI certificate bundle—one PDF per TAC group—with DoT seals and unique acknowledgment IDs.",
      },
      {
        heading: "5. Post‑Certification Support",
        content:
          "Provide annual health checks, portal change management, and ongoing CEIR sync monitoring at no extra cost.",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Files",
        content:
          "• IMEI upload CSV (TAC, SNR start/end, check digit)  \n• Importer IEC & DGFT registration  \n• CHA authorization letter  \n• Manufacturer MOU (stamped & notarized)",
      },
      {
        heading: "Supplementary Records",
        content:
          "• GSMA TAC allocation confirmation  \n• Sample device CoC certificates  \n• Internal IMEI generation audit logs",
      },
    ],
    whyUs: [
      {
        heading: "Do Startup Advantage",
        description: [
          "150+ IMEI compliance experts with 5+ years’ tenure",
          "99.9% first‑time IMEI approval rate",
          "Custom dashboards for real‑time status tracking",
          "Dedicated post‑certification support and alerts",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question:
          "Can we generate certificates for multiple TACs in one batch?",
        answer:
          "Yes—Do Startup processes all TAC groups concurrently, delivering separate certificate bundles per TAC.",
      },
      {
        question: "What if an IMEI batch upload fails schema validation?",
        answer:
          "Our platform highlights exact rows and fields in error; we correct and resubmit within SLA timelines.",
      },
      {
        question: "Are there any volume‑based discounts?",
        answer:
          "Yes—registration fees per IMEI decrease in predefined volume slabs; contact us for a customized quote.",
      },
      {
        question: "How long until I receive my IMEI certificate?",
        answer:
          "Typically 1–2 business days post‑successful portal upload and fee clearance.",
      },
      {
        question: "Is re‑registration required after firmware updates?",
        answer:
          "Only if TAC allocations change; our monitoring service flags and manages any needed re‑uploads.",
      },
      {
        question: "Do refurbished devices need new certificates?",
        answer:
          "Refurbished units retain original IMEIs; no re‑certification needed unless IMEI is altered.",
      },
    ],
  },

  "epf-registration": {
    title:
      "EPF Registration in India: Employer's Guide to Provident Fund Compliance",
    description:
      "Get expert assistance with Do Startup for smooth and timely EPF registration in India. Ensure social security coverage for your workforce and avoid penalties by meeting mandatory compliance under the EPF Act, 1952.",
    overview: [
      {
        heading: "What is EPF?",
        content:
          "EPF (Employees' Provident Fund) is a retirement benefits scheme for salaried employees, where both employer and employee contribute monthly to a savings fund. It covers pension (EPS), insurance (EDLI), and financial protection during emergencies.",
      },
      {
        heading: "EPF Applicability",
        content:
          "EPF registration is mandatory for establishments with 20 or more employees. Voluntary registration is available for businesses with fewer staff. Covered under the EPF & MP Act, 1952, it applies to all employment types—full-time, part-time, remote, or contractual.",
      },
      {
        heading: "UAN (Universal Account Number)",
        content:
          "After successful registration, each employee receives a UAN—a lifetime identifier used for EPF tracking, fund transfer, and claims. UAN remains constant even when an employee changes jobs.",
      },
    ],
    benefits: [
      {
        heading: "Retirement & Security",
        content:
          "• Long-term savings for retirement\n• Pension benefits under EPS\n• Insurance under EDLI without employee contribution",
      },
      {
        heading: "Employee & Employer Advantages",
        content:
          "• Improved employee satisfaction and retention\n• Legal compliance and brand trust\n• Access to EPF loans and advances during emergencies",
      },
      {
        heading: "Regulatory & Tax Benefits",
        content:
          "• Employer contributions are eligible for tax deductions\n• Helps businesses avoid penalties and maintain compliance\n• Facilitates structured wage and payroll systems",
      },
    ],
    registrationProcedure: [
      {
        heading: "1. Access EPFO Portal",
        content:
          "Visit https://www.epfindia.gov.in and click 'Establishment Registration'.",
      },
      {
        heading: "2. Register on USSP",
        content:
          "Sign up on the Unified Shram Suvidha Portal to begin the registration process.",
      },
      {
        heading: "3. Fill EPF Application",
        content:
          "Select 'EPFO-ESIC Registration' and choose the EPF Act, 1952, then complete the form.",
      },
      {
        heading: "4. Upload DSC & Documents",
        content:
          "Submit a Digital Signature Certificate (DSC) and supporting documents for authentication.",
      },
      {
        heading: "5. Confirmation & UAN Allocation",
        content:
          "Receive registration confirmation via email. Generate UANs for employees post-registration.",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Documents",
        content:
          "• PAN and Aadhaar of Proprietor/Directors\n• Certificate of Incorporation\n• Address proof (Rent Agreement/Utility Bill)\n• Cancelled Cheque or Bank Statement\n• Authorized Signatory’s DSC",
      },
      {
        heading: "Optional Documents",
        content:
          "• GST Certificate\n• Shop and Establishment Certificate\n• MoA, AoA, or Partnership Deed\n• Trust Deed (for Trusts)",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "Over 5,000 successful EPF registrations",
          "15+ years of PF and labor compliance experience",
          "24/7 support for UAN generation and mobile updates",
          "5x faster registration turnaround than standard timelines",
          "Integration support with payroll systems and compliance training",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is EPF registration and who regulates it?",
        answer:
          "EPF registration is the process of enrolling an organization and its employees under the Employees’ Provident Fund. It is regulated by EPFO under the EPF & MP Act, 1952.",
      },
      {
        question: "Is EPF mandatory for all employees?",
        answer:
          "Yes, for all salaried employees earning up to ₹15,000/month. Others can join voluntarily.",
      },
      {
        question: "Is UAN transferable between jobs?",
        answer:
          "Yes, the UAN remains the same even when employees switch jobs. It enables seamless fund transfer.",
      },
      {
        question: "What is the EPF penalty for late registration?",
        answer:
          "Penalties range from 5% to 25% per annum depending on the delay duration—from under 2 months to over 6 months.",
      },
      {
        question: "How long does EPF registration take?",
        answer:
          "Typically 10–15 working days if documents are submitted correctly and promptly.",
      },
      {
        question: "Is EPF registration valid for life?",
        answer:
          "Yes, once issued, the EPF registration certificate remains valid as long as the company operates and complies with regulations.",
      },
      {
        question: "Are part-time or freelance workers eligible for EPF?",
        answer:
          "Yes, under Section 2(f), all workers receiving wages—including part-time, remote, contractual, or freelance—are eligible.",
      },
      {
        question: "What is EDLI in EPF?",
        answer:
          "The Employee Deposit Linked Insurance Scheme (EDLI) provides insurance to nominees of deceased employees without any premium from the employee.",
      },
    ],
  },

  "esi-registration": {
    title:
      "ESI Registration in India: Social Security Compliance for Employers",
    description:
      "Ensure employee welfare and legal compliance with ESI registration. Do Startup provides expert guidance and end-to-end support to help businesses register under the ESI Act, 1948 and access medical, sickness, and maternity benefits for their workforce.",
    overview: [
      {
        heading: "What is ESI?",
        content:
          "ESI (Employees’ State Insurance) is a self-funded social security scheme regulated by the Employee State Insurance Corporation (ESIC) under the Ministry of Labour and Employment. It offers medical, disability, maternity, and unemployment benefits to employees earning ₹21,000 or less per month.",
      },
      {
        heading: "Who Must Register?",
        content:
          "Any non-seasonal factory or establishment with 10 or more employees (or 20 in some states) earning below ₹21,000/month must register under the ESI Act. Registration must be completed within 15 days of becoming eligible.",
      },
      {
        heading: "Contribution Rates",
        content:
          "• Employer: 3.25% of gross wages\n• Employee: 0.75% of gross wages\n• Employees earning less than ₹137/day are exempt from contributing, but employers must still contribute.",
      },
    ],
    benefits: [
      {
        heading: "Medical Benefits",
        content:
          "Employees and their families receive unlimited medical care from day one of employment, including hospitalization, outpatient care, and specialist consultations.",
      },
      {
        heading: "Maternity & Sickness Benefits",
        content:
          "• Paid maternity leave for 3 months (extendable by 1 month)\n• 70% of wages paid during medical leave up to 91 days/year",
      },
      {
        heading: "Unemployment & Disability Benefits",
        content:
          "• Up to 1 year of unemployment benefits under Rajiv Gandhi Shramik Kalyan Yojana\n• 90% of wages paid in cases of permanent disability or death",
      },
      {
        heading: "Additional Benefits",
        content:
          "• ₹10,000 funeral expense cover\n• Continued medical care post-retirement\n• Access to vocational training during unemployment",
      },
    ],
    registrationProcedure: [
      {
        heading: "1. Sign Up on ESIC Portal",
        content:
          "Visit the ESIC website and create an account via the 'Employer Login' section.",
      },
      {
        heading: "2. Email Confirmation",
        content: "Receive username and password on your registered email ID.",
      },
      {
        heading: "3. Fill Form-1",
        content:
          "Log in, select 'New Employer Registration', and fill Form-1 with employer and unit details.",
      },
      {
        heading: "4. Pay Advance Contribution",
        content:
          "Make an advance payment for 6 months using available payment options.",
      },
      {
        heading: "5. Receive Registration Certificate (C-11)",
        content:
          "Get your 17-digit ESIC registration number and C-11 certificate as proof of registration.",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content:
          "• Factory/Shop & Establishment Certificate\n• MOA/AOA or Partnership Deed\n• PAN of company and employees\n• Bank statement and cancelled cheque\n• Rental agreement and electricity bill\n• Copy of business license\n• Employee salary and attendance records",
      },
      {
        heading: "Employee Details",
        content:
          "• Name, DOB, address, nominee details\n• ESIC insurance number (if available)\n• Date of appointment\n• Bank details and previous employer info",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "Simplified and quick ESI registration process",
          "Experienced professionals and compliance experts",
          "Transparent workflow with real-time status tracking",
          "Timely reminders and follow-ups for return filings",
          "Post-registration support and legal advisory",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Is ESI registration mandatory?",
        answer:
          "Yes, ESI registration is compulsory for establishments employing 10 or more persons (or 20 in some states) earning ₹21,000/month or less.",
      },
      {
        question: "What is the ESIC Code?",
        answer:
          "It’s a unique 17-digit registration number assigned to an employer upon successful registration with the ESIC.",
      },
      {
        question: "Who is exempt from ESIC registration?",
        answer:
          "Entities with fewer employees than the threshold or employees earning above ₹21,000/month are exempt.",
      },
      {
        question: "What is the penalty for late registration?",
        answer:
          "Non-compliance attracts a penalty of ₹10,000, along with potential legal action and delayed benefit access for employees.",
      },
      {
        question: "How often must ESI returns be filed?",
        answer:
          "ESI returns must be submitted twice a year, including details like salary, attendance, Form-6, and accident records.",
      },
      {
        question: "Are employers required to maintain specific records?",
        answer:
          "Yes, employers must keep attendance registers, wage registers, accident records, and submit monthly return challans by the 15th of every month.",
      },
    ],
  },

  "fieo-registration": {
    title:
      "FIEO Registration for Exporters – Unlock Global Trade Opportunities",
    description:
      "Register with the Federation of Indian Export Organisations (FIEO) through Do Startup to access export promotion schemes, government incentives, and international networking platforms, enhancing your global market reach.",
    overview: [
      {
        heading: "What is FIEO?",
        content:
          "The Federation of Indian Export Organisations (FIEO), established in 1965 under the Ministry of Commerce and Industry, represents Indian exporters and promotes India’s exports of goods and services through trade facilitation, policy advocacy, and global networking.",
      },
      {
        heading: "Objectives of FIEO Registration",
        content:
          "FIEO registration aims to resolve exporters’ challenges, serve as a liaison with government departments and financial institutions, and provide access to market intelligence, export incentives, and capacity-building programs.",
      },
      {
        heading: "Types of Membership",
        content:
          "• Ordinary Membership: Entry-level for new exporters.  \n• Associate Membership: Premium tier for established exporters, with higher fees and expanded benefits.",
      },
    ],
    benefits: [
      {
        heading: "Global Trade Access",
        content:
          "Exclusive invitations to international trade fairs, buyer-seller meets, and export delegations, helping you connect with global buyers and industry bodies.",
      },
      {
        heading: "Policy & Compliance Support",
        content:
          "On-demand expert assistance for Foreign Trade Policy queries, export documentation, customs procedures, and regulatory updates.",
      },
      {
        heading: "E-Commerce & Credit Benefits",
        content:
          "Six-month free online store on eBay, three-month access on Amazon, 10% discount on domestic/international air travel, and 10% off on CRISIL credit rating services.",
      },
    ],
    registrationProcedure: [
      {
        heading: "1. Online Application",
        content:
          "Submit the RCMC application form with your IEC, business details, product category, and Letter of Authority through Do Startup’s portal.",
      },
      {
        heading: "2. Document Submission",
        content:
          "Provide self-attested copies of IEC, GSTIN, export turnover statements, bank statements, MOA/AOA, SSI/IEM certificates, and Export House Certificate if applicable.",
      },
      {
        heading: "3. Fee Payment & Verification",
        content:
          "Pay the prescribed membership fee plus 18% GST (higher slab for turnover > ₹5 crore). FIEO reviews and verifies your application.",
      },
      {
        heading: "4. Certificate Issuance",
        content:
          "Receive your 5-year Registration-cum-Membership Certificate (RCMC) upon approval, valid from April 1 of the issuance year to March 31 five years later.",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content:
          "• Completed RCMC application form  \n• IEC certificate copy  \n• GSTIN details  \n• Letter of Authority  \n• Export turnover data (last 3 years)  \n• Bank statements  \n• SSI/Industrial licence/IEM certificate (if manufacturer)  \n• MOA & AOA (for companies)  \n• Export House Certificate (if any)",
      },
      {
        heading: "Additional Data",
        content:
          "• Foreign exchange earnings statement  \n• Declaration of exports made during the preceding financial year",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "10+ years of export consultancy experience",
          "500+ successful FIEO registrations",
          "99% approval rate on first submission",
          "End-to-end documentation & filing support",
          "Real-time application tracking & 24×7 support",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Is FIEO registration mandatory?",
        answer:
          "No, but it is highly recommended to obtain RCMC and access Foreign Trade Policy benefits.",
      },
      {
        question: "What is RCMC?",
        answer:
          "Registration-cum-Membership Certificate issued by FIEO enabling exporters to claim export incentives under FTP.",
      },
      {
        question: "How long is FIEO registration valid?",
        answer:
          "Five financial years from April 1 of the issuance year to March 31 five years later.",
      },
      {
        question: "Can I export without RCMC?",
        answer:
          "You can export certain items, but RCMC is required to claim duty drawbacks, incentives, and other FTP benefits.",
      },
      {
        question: "What are the membership fees?",
        answer:
          "Fees range from ₹6,250 for individual exporters to ₹93,750 for Five Star Export Houses, plus GST.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Typically 7–10 business days, subject to document completeness and verification.",
      },
    ],
  },

  "building-noc": {
    title: "Building NOC – Your Complete Guide",
    description:
      "A Building No Objection Certificate (NOC) is a mandatory approval from local planning authorities allowing you to commence construction, alteration, or demolition of a building legally and without objections.",
    overview: [
      {
        heading: "What is Building NOC?",
        content:
          "A Building NOC is an official clearance issued by municipal or urban development authorities confirming there are no regulatory objections to your proposed construction, re-erection, alteration, or demolition of a building.",
      },
      {
        heading: "Who Can Apply?",
        content:
          "Applications must be submitted by a registered architect or licensed structural engineer on behalf of the property owner or developer to the relevant planning authority.",
      },
      {
        heading: "Why It’s Essential",
        content:
          "The NOC prevents future legal disputes, ensures compliance with zoning and building bye-laws, and is a prerequisite for other approvals such as the commencement and completion certificates.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining Building NOC",
        content:
          "• Legal authorization to start construction  \n• Shields owners from fines and legal action  \n• Avoids project delays due to non-compliance  \n• Streamlines procurement of related permits  \n• Acts as proof of authority’s approval  \n• Ensures occupant safety and adherence to regulations",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Building NOC",
        content:
          "• Certified Site, Building & Layout Plans  \n• Building Plan Analysis Report  \n• Bye-law-compliant design copy  \n• Filled Checklist/Questionnaire  \n• Applicant’s ID & Address Proof  \n• Photographs of Site  \n• Architect-certified Blueprint  \n• Building Safety Certificate",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Document Collection",
        content:
          "Gather all required plans, reports, proofs, and certificates as per the checklist.",
      },
      {
        heading: "Step 2: Online Application & Pre-Approvals",
        content:
          "Submit your application along with Pre-DCR drawings for land title verification, non-agricultural land use clearance, zonal clearance, and building plan approval (including IOD stages).",
      },
      {
        heading: "Step 3: Offline Submission",
        content:
          "File the physical application and supporting documents with the planning authority’s office.",
      },
      {
        heading: "Step 4: Site Inspection",
        content: "The authority conducts a site visit and evaluation report.",
      },
      {
        heading: "Step 5: Fee Payment",
        content: "Pay prescribed government fees and obtain challans.",
      },
      {
        heading: "Step 6: Blueprint Approval & Commencement Certificate",
        content:
          "Receive the stamped approved blueprint and the commencement certificate to begin construction.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for Building NOC?",
        description: [
          "10+ years of real estate approvals expertise",
          "End-to-end document preparation and filing",
          "Fast, hassle-free processing and status tracking",
          "24×7 support from planning and legal specialists",
          "Transparent pricing with no hidden charges",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the purpose of a Building NOC?",
        answer:
          "It provides legal clearance from the local authority to proceed with construction, ensuring compliance with building regulations.",
      },
      {
        question: "Do I need a Fire NOC as well?",
        answer:
          "Yes, high-rise and commercial buildings require a separate Fire NOC under local fire safety regulations.",
      },
      {
        question: "What happens if I build without a NOC?",
        answer:
          "The authority may impose penalties, halt construction, or order demolition of the unauthorized structure.",
      },
      {
        question: "Who issues the Completion Certificate?",
        answer:
          "The local municipal or planning authority issues it after a final inspection confirming adherence to approved plans.",
      },
      {
        question: "How long does it take to get a Building NOC?",
        answer:
          "Typically 4–8 weeks, depending on local authority processes and completeness of documentation.",
      },
      {
        question: "Can NOC approvals expire?",
        answer:
          "Yes, many authorities set validity periods; an expired NOC may require re-application or attract penalties.",
      },
    ],
  },

  "bocw-registration": {
    title: "BOCW Registration – Complete Guide",
    description:
      "Under the Building and Other Construction Workers (BOCW) Act, 1996, establishments employing 10+ workers must register to ensure legal compliance and provide welfare benefits to construction laborers.",
    overview: [
      {
        heading: "What is BOCW Registration?",
        content:
          "Registration under the BOCW Act, 1996 safeguards construction workers’ rights by providing access to health, safety, and social security benefits through the state-level BOCW Welfare Boards.",
      },
      {
        heading: "Who Must Register?",
        content:
          "Any employer—principal or contractor—who has employed 10 or more construction workers on any day in the preceding 12 months must register their establishment within 60 days of commencing work.",
      },
      {
        heading: "Worker Registration",
        content:
          "Workers aged 18–60 who have worked at least 90 days in the past year can enroll as beneficiaries to avail welfare schemes such as accident relief, pension, and healthcare.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of BOCW Registration",
        content:
          "• Access to health insurance, disability and maternity benefits  \n• Pension and education support for worker’s families  \n• Housing and tool grants  \n• Accident relief and funeral expenses assistance  \n• Legal compliance and protection from penalties",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents for Establishment Registration",
        content:
          "• Proof of employment of 10+ workers (attendance sheets)  \n• Contractor/principal employer’s identity & address proof  \n• Establishment address proof  \n• Details of projects and sites  \n• Bank account & IFSC details",
      },
      {
        heading: "Documents for Worker Registration",
        content:
          "• Worker’s age & residence proof (self-declaration if needed)  \n• Aadhaar card (if available)  \n• Employer’s certificate confirming 90 days’ work  \n• Bank account details & nomination form",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Access State BOCW Portal",
        content:
          "Visit the official state BOCW website and create an employer or worker account.",
      },
      {
        heading: "Step 2: Fill Application Form",
        content:
          "Select establishment or worker registration, complete the online form, and upload required documents.",
      },
      {
        heading: "Step 3: Fee Payment",
        content:
          "Pay the government-prescribed fee based on worker count to generate your payment receipt.",
      },
      {
        heading: "Step 4: Verification & Approval",
        content:
          "The authority reviews your submission and issues the BOCW Registration Certificate within 2–4 weeks.",
      },
    ],
    feesStructure: [
      {
        heading: "BOCW Registration Fees",
        feeTable: [
          { category: "Up to 50 workers", amount: "₹250" },
          { category: "51–100 workers", amount: "₹500" },
          { category: "101–300 workers", amount: "₹1,000" },
          { category: "301–500 workers", amount: "₹2,000" },
          { category: "Above 500 workers", amount: "₹2,500" },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for BOCW Registration",
        description:
          "Typically 2–4 weeks from application submission to certificate issuance, subject to state authority processing times.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for BOCW Registration?",
        description: [
          "100+ BOCW experts across India",
          "End-to-end online registration support",
          "10+ years of compliance experience",
          "Real-time application tracking",
          "24×7 dedicated assistance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a BOCW certificate?",
        answer:
          "A legal document confirming your establishment’s registration under the BOCW Act, required for employers of 10+ construction workers.",
      },
      {
        question: "Who qualifies as the employer?",
        answer:
          "The principal employer or contractor responsible for hiring and managing construction workers.",
      },
      {
        question: "Can individual workers register?",
        answer:
          "Yes, workers aged 18–60 with at least 90 days of work in the last 12 months can register as beneficiaries.",
      },
      {
        question: "What benefits do registered workers receive?",
        answer:
          "Health insurance, pension, accident relief, maternity support, education aid, and other welfare payments.",
      },
      {
        question: "What are the penalties for non-registration?",
        answer:
          "Employers face fines and potential legal action for failing to register within the prescribed 60-day period.",
      },
    ],
  },

  "rera-registration-for-agents": {
    title: "RERA Registration for Agents – A Complete Guide",
    description:
      "Under the Real Estate (Regulation & Development) Act, 2016, all agents facilitating sale, purchase, or lease of properties in RERA-registered projects must obtain RERA agent registration to operate legally and build credibility.",
    overview: [
      {
        heading: "Who Qualifies as a Real Estate Agent?",
        content:
          "Any individual or business entity acting as an intermediary in property transactions—earning commission through promoting, selling, or facilitating purchases or leases in RERA-registered projects—must register under RERA.",
      },
      {
        heading: "Why Is RERA Agent Registration Necessary?",
        content:
          "RERA registration ensures only approved agents can deal in RERA-covered projects, protecting buyers from unscrupulous practices and enforcing transparency in all marketing, booking, and negotiation activities.",
      },
      {
        heading: "Key Responsibilities of RERA-Registered Agents",
        content:
          "• Avoid promoting or selling unregistered projects  \n• Maintain accurate books of accounts and records  \n• Refrain from misleading or unfair trade practices  \n• Disclose true status of project approvals  \n• Ensure transparency in advertisements and client communications",
      },
    ],
    benefits: [
      {
        heading: "Benefits of RERA Agent Registration",
        content:
          "• Enhances professional credibility and trust  \n• Grants access to verified project layouts and approvals  \n• Builds buyer confidence through full disclosure  \n• Enables quicker resolution of client grievances  \n• Provides legal protection against heavy penalties",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for RERA Agent Registration",
        content:
          "• PAN Card  \n• Aadhaar Card  \n• Last 3 years’ Income Tax Returns  \n• Sample Invoice/Bill  \n• Valid Contact Details  \n• Proof of Business Address  \n• MOA & AOA (for companies) or Partnership Deed  \n• Declaration of Organization Type",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Visit State RERA Portal",
        content:
          "Navigate to your State Real Estate Regulatory Authority’s official website and select 'Agent Registration'.",
      },
      {
        heading: "Step 2: Fill Application Form",
        content:
          "Complete the online registration form with accurate personal and business details.",
      },
      {
        heading: "Step 3: Upload Documents & Pay Fee",
        content:
          "Attach all required documents and pay the prescribed registration fee as per your state’s guidelines.",
      },
      {
        heading: "Step 4: Verification & Approval",
        content:
          "The RERA authority reviews your application. Upon successful verification, your RERA agent certificate is issued.",
      },
      {
        heading: "Step 5: Certificate Delivery",
        content:
          "Download or receive your official RERA agent registration certificate, valid for five years.",
      },
    ],
    feesStructure: [
      {
        heading: "RERA Agent Registration Fees",
        description:
          "Fees vary by state and entity type. Below are common fee slabs:",
        feeTable: [
          {
            category: "Individual Agents",
            amount: "₹10,600",
          },
          {
            category: "Firms/Companies",
            amount: "₹1,00,000",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for RERA Agent Registration",
        description:
          "Typically takes 1–2 weeks, subject to state portal processing and document accuracy.",
        steps: [
          {
            title: "Form Submission & Payment",
            duration: "1–3 days",
            description: "Complete application and fee payment.",
          },
          {
            title: "Authority Verification",
            duration: "5–10 days",
            description:
              "RERA authority reviews documents and processes registration.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for RERA Agent Registration?",
        description: [
          "10+ years of real estate compliance expertise",
          "5,000+ agents registered successfully",
          "End-to-end documentation and filing support",
          "Guaranteed on-time approvals and expert liaison",
          "24×7 dedicated customer support",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the validity of the RERA agent certificate?",
        answer:
          "The certificate is valid for five years from the date of issue unless revoked earlier for non-compliance.",
      },
      {
        question: "Is RERA registration mandatory for all real estate agents?",
        answer:
          "Yes, any agent dealing in RERA-registered projects must secure RERA registration to operate legally.",
      },
      {
        question: "What penalties apply for non-registration?",
        answer:
          "Operating without registration can attract daily fines of up to ₹10,000 and potential imprisonment for unfair trade practices.",
      },
      {
        question: "Can I renew my RERA registration certificate?",
        answer:
          "Yes, you can apply for renewal before expiry, subject to compliance with all RERA norms.",
      },
      {
        question: "Are rental transactions covered under RERA?",
        answer:
          "No, RERA primarily covers sale and purchase transactions; rental-only agreements are exempt unless notified otherwise.",
      },
    ],
  },

  "rera-registration-for-promoters": {
    title: "RERA Registration for Promoters – A Complete Guide",
    description:
      "Under the Real Estate (Regulation & Development) Act, 2016, all promoters developing residential or commercial projects above prescribed thresholds must register with the State RERA authority to ensure transparency, accountability, and legal compliance.",
    overview: [
      {
        heading: "Who Is a RERA Promoter?",
        content:
          "Any individual or entity constructing, converting, or developing buildings—including commercial complexes, residential flats, plotted developments—on freehold or leasehold land, whether directly or via power of attorney, is defined as a promoter under RERA.",
      },
      {
        heading: "Why RERA for Promoters?",
        content:
          "Introduced to curb delays, unauthorized plan changes, and financial mismanagement, RERA holds promoters accountable, mandates timely possession, and restores buyer confidence by enforcing strict regulatory compliance.",
      },
      {
        heading: "Key Functions & Duties",
        content:
          "• Mandatory registration of each project before marketing  \n• Upload sanctioned layout plans, specifications, and completion timelines  \n• Maintain 70% of buyer funds in a separate escrow account  \n• Obtain and furnish Completion and Occupancy Certificates  \n• Refund or compensate buyers for delays as per RERA provisions",
      },
    ],
    benefits: [
      {
        heading: "Benefits of RERA for Buyers",
        content:
          "• Accurate Project Information: Builders adhere to approved plans or face penalties  \n• Timely Delivery: Strict possession deadlines enforced by law  \n• Reduced Booking Amount: Maximum 10% payable only after sale agreement registration  \n• Mandatory Clearances: All approvals secured before launch  \n• No Marketing Without Registration: Protects buyers from unregistered schemes",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Promoter Registration",
        content:
          "• Details of the promoter and authorized signatory  \n• Project layout plan and sanctioned building plan  \n• Land title deed or lease agreement  \n• Approved commencement certificate  \n• Past five-year project completion history  \n• Details of sanctioned infrastructure commitments (water, sanitation, electricity)  \n• Trust deeds (if applicable) or company incorporation documents",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Apply Within 3 Months",
        content:
          "Submit your registration application with personal, project and past-history details to the State RERA portal within three months of its launch.",
      },
      {
        heading: "Step 2: Upload Project Information",
        content:
          "Provide project details—layout, specifications, timelines, and infrastructure commitments—via your promoter dashboard.",
      },
      {
        heading: "Step 3: Funds Escrow Compliance",
        content:
          "Declare and maintain at least 70% of buyer advances in a separate RERA escrow account for construction and land costs.",
      },
      {
        heading: "Step 4: Verification & Approval",
        content:
          "State RERA authority reviews the submission. Upon compliance, your promoter registration is approved and published publicly.",
      },
    ],
    feesStructure: [
      {
        heading: "RERA Promoter Registration Fees",
        description:
          "Fees vary by state and project size. Typical fee ranges include:",
        feeTable: [
          {
            category: "Small Projects (≤1,000 m²)",
            amount: "₹5,000 – ₹10,000",
          },
          {
            category: "Medium Projects (1,000–5,000 m²)",
            amount: "₹10,000 – ₹25,000",
          },
          {
            category: "Large Projects (>5,000 m²)",
            amount: "₹25,000 – ₹1,00,000",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Approval Timeline",
        description:
          "RERA authority must approve or reject promoter registrations within 30 days of application, subject to document completeness.",
        steps: [
          {
            title: "Form Submission & Payment",
            duration: "1–3 days",
            description: "Complete application and fee payment online.",
          },
          {
            title: "Authority Review",
            duration: "27 days",
            description:
              "State RERA reviews documents and approves registration.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "10+ years of real estate compliance expertise",
          "End-to-end assistance from documentation to approval",
          "Guaranteed on-time registration support",
          "Dedicated liaison with RERA authorities",
          "24×7 customer support for promoters",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is RERA?",
        answer:
          "The Real Estate (Regulation & Development) Act, 2016 regulates and promotes transparency and accountability in real estate projects.",
      },
      {
        question: "Is promoter registration mandatory?",
        answer:
          "Yes, all eligible residential and commercial projects over 500 m² or more than 8 units must register their promoters under RERA.",
      },
      {
        question: "What if a promoter fails to register?",
        answer:
          "Non-registration attracts penalties up to 10% of project cost or imprisonment up to 3 years.",
      },
      {
        question: "Can project details be altered post-registration?",
        answer:
          "No, project plans cannot be changed without buyer consent and RERA authority approval.",
      },
      {
        question: "How long is the registration valid?",
        answer:
          "Promoter registration remains valid until project completion or until revoked for non-compliance.",
      },
    ],
  },

  "spice-board-registration": {
    title: "Spice Board Registration – A Complete Guide",
    description:
      "Under the Spice Board Act, 1986, all exporters of the 52 scheduled spices must register with the Spice Board of India to obtain the Certificate of Registration as an Exporter of Spices (CRES) before commencing export operations.",
    overview: [
      {
        heading: "An Overview of the Spice Board of India",
        content:
          "Established on February 26, 1987 under the Spice Board Act, 1986, the Spice Board of India promotes exports of 52 scheduled spices, oversees cardamom production, and supports both large and small scale growers.",
      },
      {
        heading: "Key Functions of the Spice Board",
        content:
          "• Domestic oversight of cardamom producers  \n• Post-harvest processing & certification  \n• Organic spice promotion  \n• Quality control & testing  \n• Export promotion, branding, R&D  \n• Support for North-Eastern spice production",
      },
      {
        heading: "Export Responsibilities and Activities",
        content:
          "• Issue quality approvals and monitor compliance  \n• Register spice exporters  \n• Collect export/import data  \n• Enforce central spice trade policies  \n• Organize global exhibits, B2B events, and training",
      },
    ],
    benefits: [
      {
        heading: "Why Spice Board Registration Is Essential",
        content:
          "• Legal mandate under the Spice Board Act, 1986  \n• Enables issuance of CRES certificate  \n• Grants permission to export scheduled spices  \n• Prevents legal penalties and shipment seizure  \n• Demonstrates compliance and credibility to buyers",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Spice Board Registration",
        content:
          "• Filled Form-1 application  \n• Self-attested IEC copy  \n• Registration fee DD in favor of Spice Board  \n• Partnership Deed or MOA & AOA  \n• GST registration certificate  \n• Manufacturer-exporter certificate (if applicable)  \n• Applicant’s PAN copy  \n• Passport-size photo of company officer",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Register on the Spice Board Portal",
        content:
          "Sign up and verify your contact details using IEC, email, and phone.",
      },
      {
        heading: "Step 2: Submit Application & Documents",
        content:
          "Provide accurate IEC details, upload all required documents, and pay the prescribed fee.",
      },
      {
        heading: "Step 3: Regional Office Review",
        content:
          "Your regional office reviews submissions; returns for corrections if needed before forwarding to HQ.",
      },
      {
        heading: "Step 4: Headquarters Approval & CRES Issuance",
        content:
          "HQ completes registration and issues your Certificate of Registration as Exporter of Spices (CRES).",
      },
    ],
    feesStructure: [
      {
        heading: "Spice Board Registration Fee",
        description:
          "One-time registration fee of ₹1,000 paid via demand draft in favor of the Spice Board of India.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Spice Board Registration",
        description:
          "The process typically takes 2–3 weeks from application submission to CRES certificate issuance.",
        steps: [
          {
            title: "Application & Payment",
            duration: "1–3 days",
            description:
              "Complete online form, upload documents, and pay fees.",
          },
          {
            title: "Review & Approval",
            duration: "10–15 days",
            description:
              "Regional office and HQ process and approve your application.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for Your Spice Board Registration?",
        description: [
          "Expert guidance on Spice Board Act compliance",
          "End-to-end document preparation and filing",
          "Liaison with Spice Board authorities",
          "24×7 support and real-time application tracking",
          "Fast, hassle-free registration process",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "When was the Spice Board formed?",
        answer:
          "The Spice Board was established on February 26, 1987 by merging the Cardamom Board and Spices Export Promotion Council.",
      },
      {
        question: "Is Spice Board registration mandatory?",
        answer:
          "Yes, registration is mandatory under the Spice Board Act, 1986 to export any of the 52 scheduled spices.",
      },
      {
        question: "What is the registration certificate called?",
        answer:
          "It is called the Certificate of Registration as an Exporter of Spices (CRES).",
      },
      {
        question: "What penalties apply for exporting without registration?",
        answer:
          "Penalties include up to one year imprisonment and/or a fine up to ₹1,000.",
      },
    ],
  },

  "guest-house-registration": {
    title: "Guest House Registration – A Complete Guide",
    description:
      "The Ministry of Tourism’s voluntary Guest House Registration Scheme ensures clean, hygienic, and upgraded budget accommodations for tourists, boosting employment, state revenue, and lodging quality.",
    overview: [
      {
        heading: "Key Considerations for a Successful Guest House",
        content:
          "• Effective Management: Delegate responsibilities and maintain high service standards.  \n• Catering to Guest Needs: Offer modern amenities (Wi-Fi, BBQs, pools) and act on feedback.  \n• Building a Reputation: Encourage repeat stays and manage digital marketing diligently.",
      },
      {
        heading: "Minimum Infrastructure Requirements",
        content:
          "• At least 6 lettable rooms with ventilation and ≥6 m road access.  \n• 25% rooms with heating or AC.  \n• Western-style toilets, separate wet/dry waste disposal.  \n• Reception with phone, lighting, storage, and window coverings.",
      },
      {
        heading: "Safety & Services Standards",
        content:
          "• Fire safety systems and CCTV in public areas.  \n• 24/7 RO/UV or branded bottled water.  \n• On-call doctor/hospital tie-up, pest control, parking, ≥60% hygiene compliance.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Guest House Registration",
        content:
          "• Legal authorization to operate and avoid penalties  \n• Enhances guest trust and marketability  \n• Streamlines obtaining other licenses (FSSAI, fire NOC)  \n• Demonstrates compliance with national tourism standards",
      },
    ],
    documentsRequired: [
      {
        heading: "General & Site Details",
        content:
          "• Guest house name, address, owner/promoter details  \n• Distance from transport hubs, roads, amenities  \n• Site plan, layout certified by local authority",
      },
      {
        heading: "Facilities & Safety",
        content:
          "• Area (sq. m), public spaces, eco-practices, safety features  \n• Power backup, fire-readiness certificate, CCTV plan  \n• Sanitation clearance and occupancy certificate",
      },
      {
        heading: "Ownership & NOCs",
        content:
          "• MoA & AoA (companies) or deed/registration (proprietorship/partnership)  \n• Fire NOC, police approval, liquor/money-changer license (if applicable)  \n• Public liability insurance and sanctioned building plans",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Application Submission",
        content:
          "Do Startup registers you on the MoT portal and completes the online application form.",
      },
      {
        heading: "Step 2: Document Upload & Payment",
        content:
          "Upload all required certificates and pay the prescribed application fees.",
      },
      {
        heading: "Step 3: Site Inspection",
        content:
          "HRACC inspects the property—possibly with an overnight stay—to verify compliance.",
      },
      {
        heading: "Step 4: Certificate Issuance",
        content:
          "Upon approval, the regional director issues a two-year registration certificate.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Validity & Renewal",
        description:
          "Registration is valid for five years from approval. Apply for renewal three months before expiry and report any operational changes promptly.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "10+ years of tourism and hospitality compliance expertise",
          "Tailored consultation and document preparation",
          "End-to-end application drafting and filing",
          "Inspection scheduling and liaison support",
          "Ongoing compliance and renewal assistance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a guest house?",
        answer:
          "A budget lodging option like a small home, suite, or cottage for short-term stays.",
      },
      {
        question: "How does it differ from a hotel?",
        answer:
          "Guest houses are smaller, often owner-managed, offering a more personalized stay.",
      },
      {
        question: "What’s the minimum room count?",
        answer: "At least six lettable rooms are required for registration.",
      },
      {
        question: "Which documents are needed?",
        answer:
          "Identification, sanitation & fire clearances, occupancy certificate, title documents, and NOCs.",
      },
      {
        question: "How long is the registration valid?",
        answer:
          "The certificate is valid for five years, renewable three months before expiry.",
      },
    ],
  },

  "barcode-registration": {
    title: "Barcode Registration in India – A Complete Guide by Do Startup",
    description:
      "GS1 India manages barcode standards and issues unique codes to businesses nationwide, enabling efficient product identification, inventory management, and supply chain transparency.",
    overview: [
      {
        heading: "What is a Barcode?",
        content:
          "A barcode is a machine-readable symbol composed of parallel lines and numeric digits that store product information—such as batch numbers, serial numbers, and pricing—facilitating quick data retrieval across industries.",
      },
      {
        heading: "Types of Barcodes",
        content:
          "1. EAN-13 (13 digits; global retail standard)  \n2. UPC-A (12 digits; used in USA/UK/Australia)  \nOther industry types include Code 93, Code 39, GS1 Databar, Code 128, and ITF.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Barcode Registration",
        content:
          "• Efficient Inventory Management: Track products from manufacture to sale.  \n• Asset Management: Monitor assets with ease.  \n• Error-Free Operations: Automated data capture reduces mistakes.  \n• Cost-Effective & Customisable: Low implementation cost and flexible design.  \n• Authenticity & Transparency: Displays batch and serial info.  \n• Faster Checkouts & Better Decision-Making: Quick scanning and data insights.  \n• Global Standardisation: Unique codes worldwide.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Barcode Registration",
        content:
          "• Request letter for barcode allotment  \n• PAN Card of business entity  \n• Audited financial statements  \n• Shop Establishment Certificate  \n• GST/VAT Registration Certificate  \n• Partnership Deed (if applicable)  \n• Company COI, MOA, AOA (if applicable)  \n• Registrar of Society certificate (if applicable)  \n• Cancelled cheque copy  \n• Product list and specifications",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Inquiry Form",
        content:
          "Submit basic business details via Do Startup’s website to initiate the barcode registration process.",
      },
      {
        heading: "Step 2: Document Collection",
        content:
          "Provide all mandatory documents—PAN, GST, financials, establishment proof, product list, etc.—for verification.",
      },
      {
        heading: "Step 3: Verification & Application",
        content:
          "Our experts review your documents and complete the GS1 India barcode application on your behalf.",
      },
      {
        heading: "Step 4: Submission to GS1 India",
        content:
          "Do Startup files the verified application with GS1 India and tracks its progress.",
      },
      {
        heading: "Step 5: Issuance of Barcode Certificate",
        content:
          "Upon successful verification and fee payment, GS1 India issues your Barcode Registration Certificate.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "Expert guidance through GS1 India processes",
          "End-to-end document preparation and filing",
          "Fast turnaround and real-time updates",
          "Transparent pricing with no hidden fees",
          "Dedicated 24×7 support",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "How are barcodes applied to products?",
        answer:
          "Barcodes can be printed directly on packaging, added as pre-printed labels, or embedded in product artwork.",
      },
      {
        question: "Who can apply for barcode registration?",
        answer:
          "Any manufacturer, exporter, wholesaler, or retailer selling physical products can apply.",
      },
      {
        question: "What barcode standard is used in India?",
        answer:
          "India primarily uses the EAN-13 standard managed by GS1 India.",
      },
      {
        question: "What is a GLN?",
        answer:
          "GLN stands for Global Location Number, which uniquely identifies locations like warehouses and stores.",
      },
    ],
  },

  "world-manufacturer-identifier-wmi-code": {
    title:
      "World Manufacturer Identifier (WMI) Code Registration in India – A Complete Guide by Do Startup",
    description:
      "A WMI Code is the first three characters of a Vehicle Identification Number (VIN) that uniquely identifies a vehicle manufacturer worldwide. In India, WMI Codes are issued by BIS in coordination with SAE International.",
    overview: [
      {
        heading: "What is a VIN?",
        content:
          "A Vehicle Identification Number (VIN) is a unique 17-character alphanumeric code assigned to every motor vehicle, containing manufacturer details, model, engine specs, year and location of manufacture.",
      },
      {
        heading: "Structure of the VIN Code",
        content:
          "• WMI – first 3 characters identifying country, manufacturer and vehicle type  \n• VDS – next 6 characters describing vehicle attributes (body style, engine)  \n• VIS – last 8 characters indicating production year, plant and serial number",
      },
      {
        heading: "WMI Code Geography Breakdown",
        content:
          "Ranges: 1–5 North America, S–Z Europe, A–H Africa, J–R Asia (India), 6–7 Oceania, 8–9 South America",
      },
    ],
    benefits: [
      {
        heading: "Importance of WMI Code",
        content:
          "• Ensures global recognition of the manufacturer  \n• Mandatory for valid VIN assignment  \n• Supports regulatory compliance and tracking  \n• Facilitates international vehicle trade  \n• Enables efficient recall management and after-sales service",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for WMI Code Registration",
        content:
          "• Duly signed application form with manufacturing unit details  \n• PAN and GST certificates (self-attested)  \n• Certificate of Incorporation / Partnership Deed  \n• MOA & AOA or proprietorship details  \n• Udyam Registration (if applicable)  \n• Address proof of manufacturing facility  \n• Product category/code and existing coding (if any)  \n• Tentative production commencement date  \n• Application fee receipt",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Filing of Application",
        content:
          "Do Startup assists in preparing and submitting the WMI registration application to BIS.",
      },
      {
        heading: "Step 2: Document Verification",
        content:
          "BIS verifies submitted documents for completeness and accuracy.",
      },
      {
        heading: "Step 3: WMI Proposal",
        content:
          "BIS proposes a unique WMI Code based on product type and location.",
      },
      {
        heading: "Step 4: SAE International Registration",
        content:
          "The WMI proposal is forwarded to SAE International for inclusion in the global database.",
      },
      {
        heading: "Step 5: Confirmation Letter",
        content:
          "Upon approval, SAE issues a Confirmation Letter to the manufacturer.",
      },
      {
        heading: "Step 6: Issuance of WMI Code",
        content:
          "The manufacturer is officially assigned a WMI Code for use in VINs.",
      },
    ],
    feesStructure: [
      {
        heading: "Application Fees",
        description:
          "Application fee as prescribed by BIS, payable via demand draft or online transfer.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for WMI Code Registration",
        description:
          "The process typically completes in 4–6 weeks, subject to document verification and SAE approval.",
        steps: [
          {
            title: "Application & Payment",
            duration: "1 week",
            description: "Submission of application form and fee.",
          },
          {
            title: "BIS Processing",
            duration: "2–3 weeks",
            description: "Document verification and WMI proposal.",
          },
          {
            title: "SAE Approval",
            duration: "1–2 weeks",
            description: "Global database registration and confirmation.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "Expert liaison with BIS and SAE International",
          "End-to-end application and documentation support",
          "Guaranteed timelines and real-time tracking",
          "99.9% success rate in WMI registrations",
          "24×7 dedicated customer assistance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a WMI Code?",
        answer:
          "The first three characters of a VIN that uniquely identify a vehicle manufacturer globally.",
      },
      {
        question: "Is WMI mandatory for all vehicle manufacturers?",
        answer:
          "Yes, any entity manufacturing road-legal vehicles must obtain a WMI Code.",
      },
      {
        question: "Which standards govern VIN and WMI?",
        answer: "ISO 3779 for VIN format and ISO 3780 for WMI format.",
      },
      {
        question: "Who issues WMI Codes in India?",
        answer:
          "The Bureau of Indian Standards (BIS), in coordination with SAE International.",
      },
      {
        question: "How long is the WMI Code valid?",
        answer:
          "It remains valid as long as the manufacturer operates under the same name and address.",
      },
    ],
  },

  "telemarketing-registration-india": {
    title:
      "Telemarketing Registration in India – Step-by-Step Guide by Do Startup",
    description:
      "Telemarketing registration under TRAI/DoT is mandatory for any entity engaging in commercial tele-communications (voice or non-voice) to promote goods or services. Secure your license to operate legally, build consumer trust, and enhance brand credibility.",
    overview: [
      {
        heading: "What is a Telemarketer?",
        content:
          "A telemarketer is an individual or legally registered entity that sends commercial communications—via calls, SMS, or recorded messages—to inform consumers about transactions, promote products or services, or solicit business.",
      },
      {
        heading: "Who Can Apply?",
        content:
          "• Indian citizens (18+ years)  \n• Companies under the Companies Act, 2013  \n• LLPs under the LLP Act, 2008  \n• Partnerships under the Partnership Act, 1932  \n• Sole proprietors  \nApplicants must have a clean legal record.",
      },
      {
        heading: "Benefits of Registration",
        content:
          "• Legal authorization and avoidance of TRAI/DoT penalties  \n• Improved customer trust and brand image  \n• Higher lead generation and smoother sales  \n• Foundation for long-term business growth",
      },
    ],
    benefits: [
      {
        heading: "Strategic Advantages",
        content:
          "• Operate within the law and avoid heavy fines  \n• Leverage consumer trust for better conversion  \n• Maintain uninterrupted telecom connectivity  \n• Demonstrate credibility to partners and clients",
      },
    ],
    documentsRequired: [
      {
        heading: "Checklist of Required Documents",
        content:
          "• PAN Card of the company  \n• TAN details  \n• ROC Number (for companies)  \n• Registered and corporate office address proofs  \n• Last financial year turnover statement  \n• Recent utility bills  \n• Dedicated landline number & email ID  \n• Authorized signatory’s details and ID proof",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Company Incorporation",
        content:
          "Ensure your business is incorporated under the appropriate Indian law (Companies, LLP, Partnership or Sole Proprietorship).",
      },
      {
        heading: "Step 2: Document Collection",
        content: "Gather all mandatory documents as per the checklist above.",
      },
      {
        heading: "Step 3: Application Filing",
        content:
          "Submit Form TM-1 along with supporting documents to the TRAI/DoT portal.",
      },
      {
        heading: "Step 4: Fee Payment",
        content:
          "Pay the prescribed registration fee via the online payment gateway.",
      },
      {
        heading: "Step 5: Provisional Approval",
        content:
          "Receive a Provisional Telemarketing Certificate (valid for 3 months) upon preliminary verification.",
      },
      {
        heading: "Step 6: Final Registration",
        content:
          "After compliance checks during the provisional period, the Final Telemarketing Registration Certificate is issued with a 10-year validity.",
      },
    ],
    feesStructure: [
      {
        heading: "Telemarketing Registration Fees",
        description:
          "Fees are prescribed by DoT and may vary. Typically includes: provisional application fee and final registration fee.",
        feeTable: [
          {
            category: "Provisional Registration",
            amount: "As per TRAI/DoT notification",
          },
          {
            category: "Final Registration",
            amount: "As per TRAI/DoT notification",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Typical Timeline",
        description:
          "End-to-end registration usually completes within 4–6 weeks, subject to document accuracy and compliance checks.",
        steps: [
          {
            title: "Form Submission & Payment",
            duration: "1–2 weeks",
            description:
              "Application filing, fee payment, and provisional certificate issuance.",
          },
          {
            title: "Compliance & Final Approval",
            duration: "3–4 weeks",
            description:
              "Verification during provisional period and issuance of final certificate.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "Expert handling of TRAI/DoT procedures",
          "End-to-end document preparation & filing",
          "Liaison with regulators to expedite approvals",
          "Ongoing compliance guidance throughout the license term",
          "24×7 support for any queries or audits",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Telemarketing Certificate?",
        answer:
          "It’s an official authorization from TRAI/DoT allowing entities to conduct commercial tele-communications legally in India.",
      },
      {
        question: "Who needs to register?",
        answer:
          "Any individual or entity sending promotional calls, SMS, or recorded messages for commercial purposes.",
      },
      {
        question: "What is the provisional license validity?",
        answer: "3 months from the date of issuance.",
      },
      {
        question: "How long is the final registration valid?",
        answer: "10 years, subject to continued compliance.",
      },
      {
        question: "What happens if I operate without registration?",
        answer:
          "You may face heavy fines, license suspension, or legal action under the Telecom Act.",
      },
      {
        question: "Can I surrender my license?",
        answer:
          "Yes, by notifying DoT 30 days in advance and completing the prescribed formalities.",
      },
    ],
  },

  "trusted-telecom-approval": {
    title: "Trusted Telecom Approval – A Complete Guide",
    description:
      "Mandatory certification under the National Security Directive on Telecommunication Sector (NSDTS) for Telecom Service Providers (TSPs) and vendors seeking to deploy telecom equipment in India.",
    overview: [
      {
        heading: "Trusted Telecom Approval in India",
        content:
          "The Government of India has enforced Trusted Telecom Approval for all Telecom Service Providers (TSPs) to ensure national security by verifying that telecom equipment is sourced from trusted vendors. This is governed under the National Security Directive on Telecommunication Sector (NSDTS), operational since June 15, 2021, and implemented via the Trusted Telecom Portal (TTP).",
      },
      {
        heading: "What is the Trusted Telecom Portal?",
        content:
          "The Trusted Telecom Portal (TTP), developed by C-DOT with RailTel and NSCS, allows TSPs to check whether a telecom product or vendor is listed as 'trusted'. If not listed, TSPs or vendors can submit an application for verification through the portal.",
      },
      {
        heading: "What is NSDTS?",
        content:
          "The National Security Directive on Telecommunication Sector (NSDTS) is a strategic framework aimed at ensuring that only secure and trusted telecom hardware and software are used in Indian telecom networks. It mandates verification and approval of vendors and equipment before deployment.",
      },
    ],
    benefits: [
      {
        heading: "Why is Trusted Telecom Approval Important?",
        content:
          "• Ensures compliance with national security regulations  \n• Prevents deployment of unverified or malicious telecom equipment  \n• Mandatory for all TSPs prior to product integration  \n• Promotes accountability and transparency  \n• Non-compliance may lead to blacklisting and operational penalties",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Trusted Telecom Certification",
        content:
          "• Official request from Telecom Service Provider (TSP)  \n• Technical specifications of the product  \n• Memorandum of Association (MoA) and Articles of Association (AoA)  \n• Authorization letter from a company official  \n• Company registration and identity documents",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: TSP or Vendor Request Initiation",
        content:
          "Either a TSP or vendor initiates a request for listing on the Trusted Telecom Portal by creating an account and filling the application form.",
      },
      {
        heading: "Step 2: Documentation Submission",
        content:
          "Upload all mandatory documents including technical specs, legal identification, and authorization letters.",
      },
      {
        heading: "Step 3: Review by NCSC",
        content:
          "The National Cyber Security Coordinator (NCSC), in consultation with the National Security Committee on Telecom (NSCT), evaluates the application and verifies the credentials.",
      },
      {
        heading: "Step 4: Approval & Listing",
        content:
          "Upon successful verification, the product/vendor is listed as a Trusted Source on the portal, and approval is granted.",
      },
    ],
    feesStructure: [
      {
        heading: "Trusted Telecom Approval – Fee Details",
        description:
          "Currently, there is no publicly disclosed standard government fee for Trusted Telecom Approval. Costs may vary depending on liaison or consultancy services availed during the application process.",
        feeTable: [
          {
            category: "TSP/Vendor Application",
            amount: "Varies (Subject to consultant or authority)",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Trusted Telecom Approval",
        description:
          "Approval timelines may vary based on documentation accuracy and authority processing.",
        steps: [
          {
            title: "Initial Application Submission",
            duration: "2–5 business days",
            description:
              "Vendor or TSP submits application and documents via TTP.",
          },
          {
            title: "Evaluation by NCSC",
            duration: "2–4 weeks",
            description:
              "Verification by authorities and multi-agency review process.",
          },
          {
            title: "Final Approval",
            duration: "1–2 days",
            description:
              "Listing of vendor/product on the Trusted Sources database.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for Trusted Telecom Approval?",
        description: [
          "Dedicated telecom compliance experts",
          "Liaison with TSPs and government bodies",
          "Complete documentation assistance and submission",
          "Faster application turnaround",
          "End-to-end support until final listing",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the purpose of NSDTS?",
        answer:
          "To ensure secure procurement of telecom equipment and prevent national security risks from unauthorized vendors or products.",
      },
      {
        question: "What is the Trusted Telecom Portal (TTP)?",
        answer:
          "An official portal allowing TSPs and vendors to request product/vendor listing and verify approval status.",
      },
      {
        question: "Who verifies the application for Trusted Telecom Approval?",
        answer:
          "The National Cyber Security Coordinator (NCSC), with oversight from the National Security Committee on Telecom (NSCT).",
      },
      {
        question: "Is Trusted Telecom Approval mandatory for all TSPs?",
        answer:
          "Yes, TSPs must use only trusted products and vendors as per NSDTS guidelines.",
      },
      {
        question: "How can a vendor be listed on the Trusted Telecom Portal?",
        answer:
          "Vendors can apply directly via the TTP by submitting relevant documentation or be nominated by a TSP.",
      },
      {
        question: "What is Trusted Telecom Certification (TTC)?",
        answer:
          "It is the formal approval confirming that a vendor or product is compliant with NSDTS and safe for use in telecom networks.",
      },
      {
        question: "What equipment is covered under NSDTS?",
        answer:
          "All core and access network components like routers, switches, base stations, and control elements used by TSPs.",
      },
    ],
  },

  "uplinking-downlinking-permission": {
    title: "Uplinking/Downlinking Channel Permission – A Complete Guide",
    description:
      "Obtain uplinking/downlinking channel permissions from the Ministry of Information and Broadcasting (MIB) via the Broadcast Seva Portal for legal satellite TV broadcasting in India.",
    overview: [
      {
        heading: "What is Uplinking and Downlinking?",
        content:
          "In India, broadcasters must obtain government authorization to transmit or receive TV signals via satellite. Uplinking refers to sending electronic signals from a station to a satellite, while downlinking means receiving those signals back on Earth. The permission is granted under the Uplinking and Downlinking Policy Guidelines, 2011.",
      },
      {
        heading: "Why is Permission Required?",
        content:
          "Uplinking/downlinking permission ensures compliance with national broadcasting and security standards. It regulates content flow and infrastructure used in TV signal transmission and is legally mandatory before operating a TV channel via satellite.",
      },
      {
        heading: "Who Grants This License?",
        content:
          "The Ministry of Information and Broadcasting (MIB) is the licensing authority. Applications are processed via the Broadcast Seva Portal, and approvals are subject to financial and technical scrutiny.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Securing Uplinking/Downlinking Permission",
        content:
          "• Legal authorization to broadcast satellite TV in India\n• Enables channel listing with cable and DTH operators\n• Regulatory protection for content and operations\n• Builds trust with viewers, advertisers, and partners\n• Facilitates global reach for Indian broadcasters",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Uplinking/Downlinking Approval",
        content:
          "• Certificate of Incorporation\n• Memorandum & Articles of Association (MoA & AoA)\n• List of Directors and Shareholders\n• Audited Balance Sheet\n• Board Resolution authorizing the application\n• Details of Foreign Employees (if any)\n• Equipment Specifications\n• FDI Details (if applicable)\n• 90-day Operational Report\n• Technical documents like block diagrams and schematics",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Document Preparation",
        content:
          "Compile all required documents as per MIB guidelines. Ensure accuracy to prevent delays or rejection.",
      },
      {
        heading: "Step 2: Application Filing on Broadcast Seva Portal",
        content:
          "Apply online via the Broadcast Seva Portal. Fill in correct technical and legal details and pay the application fee.",
      },
      {
        heading: "Step 3: Application Scrutiny by MIB",
        content:
          "The Ministry of Information and Broadcasting examines the application, assessing financial capability, legal status, and infrastructure.",
      },
      {
        heading: "Step 4: Issuance of Letter of Intent (LoI)",
        content:
          "Upon successful evaluation, the MIB issues a Letter of Intent. The applicant must then pay the license fee and submit a Performance Bank Guarantee.",
      },
      {
        heading: "Step 5: Grant of Final License",
        content:
          "Final permission is issued, typically valid for 5 years. Renewal requires annual fee payments and compliance review.",
      },
    ],
    feesStructure: [
      {
        heading: "Net Worth Requirements",
        description:
          "Applicants must fulfill the following net worth criteria based on the type and number of channels or teleports:",
        feeTable: [
          {
            category: "First Teleport",
            amount: "₹3 Crores",
          },
          {
            category: "Additional Teleport",
            amount: "₹1 Crore",
          },
          {
            category: "First Non-News TV Channel",
            amount: "₹5 Crores",
          },
          {
            category: "Additional Non-News TV Channel",
            amount: "₹2.5 Crores",
          },
          {
            category: "First News TV Channel",
            amount: "₹20 Crores",
          },
          {
            category: "Additional News TV Channel",
            amount: "₹5 Crores",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Uplinking/Downlinking Permission",
        description:
          "The licensing process typically takes 4–6 weeks, subject to document verification and MIB processing timelines.",
        steps: [
          {
            title: "Document Compilation",
            duration: "1 week",
            description:
              "Prepare and collate required company and technical documents.",
          },
          {
            title: "Application Submission",
            duration: "2–3 days",
            description:
              "Submit application on Broadcast Seva Portal and pay fees.",
          },
          {
            title: "Scrutiny and LoI Issuance",
            duration: "3–4 weeks",
            description: "Application reviewed and Letter of Intent issued.",
          },
          {
            title: "Final Approval",
            duration: "1 week",
            description:
              "Submit guarantee and fee to obtain broadcasting license.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for Uplinking/Downlinking Permission?",
        description: [
          "We simplify the licensing process for broadcasters in India",
        ],
        points: [
          "Expertise in MIB compliance and documentation",
          "Proven success with national broadcasters",
          "Fast and accurate application filing",
          "Support with financial and technical representation",
          "End-to-end coordination with MIB authorities",
        ],
      },
    ],
    faq: [
      {
        question: "Who grants uplinking/downlinking permission in India?",
        answer:
          "The Ministry of Information and Broadcasting (MIB) via the Broadcast Seva Portal.",
      },
      {
        question: "What are the financial eligibility norms?",
        answer:
          "Net worth requirements range from ₹1 Cr to ₹20 Cr depending on the type of operation and number of teleports/channels.",
      },
      {
        question: "Is submission of an audited balance sheet mandatory?",
        answer: "Yes, it's a mandatory part of financial assessment by MIB.",
      },
      {
        question: "Can a disqualified applicant reapply?",
        answer:
          "No. Any entity previously disqualified is not eligible to apply again.",
      },
      {
        question: "What policy governs uplinking and downlinking permissions?",
        answer: "The Uplinking and Downlinking Policy Guidelines, 2011.",
      },
      {
        question: "Is setting up a teleport hub mandatory for uplinking?",
        answer:
          "Yes. A fully operational teleport hub is required before uplinking permissions are granted.",
      },
    ],
  },

  "flipkart-seller-registration": {
    title: "Flipkart Seller Registration – A Complete Guide",
    description:
      "Register as a Flipkart seller and reach millions of customers with ease through India's leading e-commerce platform.",
    overview: [
      {
        heading: "Overview on Flipkart Seller Registration",
        content:
          "Flipkart seller registration is the official process through which vendors can enlist themselves as sellers on the Flipkart platform to showcase and sell their products online. This offers a smart and scalable way to reach a broader customer base without needing physical storefronts. Flipkart manages logistics such as shipping, payments, and customer service for its sellers.",
      },
      {
        heading: "History of Flipkart",
        content:
          "Founded in 2007 by Sachin and Binny Bansal, Flipkart began as a platform for selling books. Over time, it diversified into electronics, fashion, lifestyle products, and more. It has acquired several businesses, with Myntra being one of the most significant acquisitions. Flipkart also supports sellers with tools like training and workshops to help them scale.",
      },
      {
        heading:
          "Is GST Registration Mandatory for Flipkart Seller Registration?",
        content:
          "Yes. A valid GSTIN is compulsory to register as a seller on Flipkart.",
      },
    ],
    benefits: [
      {
        heading: "Advantages of Flipkart Seller Registration",
        content:
          "• Business Growth: Reach more customers across India.\n• Lower Costs: Low operational and compliance costs.\n• Transparency: A clear and straightforward business model.\n• Ease of Business: Simplified selling experience.\n• Customer Feedback: Receive valuable insights through reviews.\n• Better Marketing: Enhanced product visibility through Flipkart ads.",
      },
    ],
    documentsRequired: [
      {
        heading: "Minimum Requirements to Register as a Flipkart Seller",
        content:
          "• GST Registration (GSTIN)\n• PAN Card (individual or business)\n• Business Registration (if not sole proprietorship)\n• Active Bank Account\n• At least one product to list\n• Active mobile number and email ID",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Register Your Business",
        content:
          "Ensure your business is legally registered under a valid structure such as a sole proprietorship, partnership, LLP, or private limited company.",
      },
      {
        heading: "Step 2: Open a Bank Account",
        content:
          "Create a current bank account in your business name to enable smooth transactions.",
      },
      {
        heading: "Step 3: Apply for GST",
        content:
          "Obtain a valid GSTIN for tax compliance, which is mandatory for Flipkart registration.",
      },
      {
        heading: "Step 4: Create Flipkart Account",
        content:
          "Go to seller.flipkart.com and register with necessary details such as contact info, PAN, and GSTIN.",
      },
      {
        heading: "Step 5: List Products",
        content:
          "Upload at least 10 products with proper descriptions, images, and pricing under appropriate categories.",
      },
      {
        heading: "Step 6: Start Selling",
        content:
          "Once products are listed, fulfill incoming orders and mark them ready for dispatch.",
      },
      {
        heading: "Step 7: Get Paid",
        content:
          "Flipkart settles seller payments within 10–15 days after successful delivery.",
      },
    ],
    feesStructure: [
      {
        heading: "Flipkart Seller Fees and Charges",
        description:
          "There are no charges for listing products on Flipkart. Fees are only applicable after a successful sale is made.",
        feeTable: [
          {
            category: "Referral Fee",
            amount: "Starts at 3% (based on product category)",
          },
          {
            category: "Closing Fee",
            amount: "Fixed fee based on selling price",
          },
          {
            category: "Shipping Fee",
            amount:
              "Starts from ₹30, varies by item size and delivery location",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Flipkart Seller Registration",
        description:
          "The Flipkart seller account can be activated within a few hours if all documents are ready.",
        steps: [
          {
            title: "Account Creation and Document Upload",
            duration: "1 Day",
            description:
              "Register your account and upload business documents including PAN, GSTIN, and bank account details.",
          },
          {
            title: "Product Listing and Verification",
            duration: "1–2 Days",
            description:
              "List minimum 10 products; Flipkart may verify listings before activating sales.",
          },
          {
            title: "Begin Selling",
            duration: "Instant after approval",
            description: "Start receiving and dispatching orders to customers.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for Flipkart Seller Registration?",
        description: [
          "Expert support for account setup and compliance",
          "Quick turnaround with error-free document filing",
          "Dedicated support team for new sellers",
        ],
        points: [
          "100% document accuracy",
          "No hidden charges",
          "Free consultation for listing strategy",
        ],
      },
    ],
    faq: [
      {
        question: "Will there be a fee to list goods on Flipkart?",
        answer:
          "No, listing products on Flipkart is completely free of charge.",
      },
      {
        question: "How many listings are required before sales start?",
        answer:
          "You must list at least 10 products to begin selling on Flipkart.",
      },
      {
        question: "When will the buyer pay the seller?",
        answer: "Payments are made within 10–15 days of successful delivery.",
      },
      {
        question: "Should I ship my items to Flipkart?",
        answer:
          "No, you pack the orders and Flipkart picks them up from your location.",
      },
      {
        question: "What are the benefits of selling on Flipkart?",
        answer:
          "Access to a wide customer base, logistics support, protection fund, and improved product visibility.",
      },
      {
        question: "What details are needed to register as a Flipkart seller?",
        answer:
          "You need GSTIN, PAN card, bank account, contact details, and a product list.",
      },
      {
        question: "How is the login process completed?",
        answer:
          "Login is done through seller.flipkart.com using OTP verification on your registered mobile number.",
      },
      {
        question: "Why sell products on Flipkart?",
        answer:
          "To reach a vast online market, grow your brand, and leverage Flipkart’s logistics and technology support.",
      },
      {
        question: "Who is eligible to sell on Flipkart?",
        answer:
          "Anyone with at least one product and valid documents like GSTIN and PAN card.",
      },
      {
        question: "How long does the registration process take?",
        answer:
          "Usually completed within a few hours if all required documents are ready.",
      },
      {
        question: "Can services be sold on Flipkart?",
        answer: "Currently, Flipkart is focused on tangible products only.",
      },
      {
        question: "How does Flipkart dispatch orders?",
        answer:
          "Sellers pack the product, and Flipkart handles delivery to the customer.",
      },
      {
        question: "Do I have to pay to list my products?",
        answer:
          "No, listing is free. Fees are charged only on confirmed orders.",
      },
    ],
  },

  "sanitary-import-permit": {
    title: "Sanitary Import Permit – A Complete Guide",
    description:
      "Obtain your Sanitary Import Permit with Do Startup’s expert support to legally import animal-based products into India.",
    overview: [
      {
        heading: "Sanitary Import Permit – An Overview",
        content:
          "If you're involved in importing animal-based products like meat, milk items, eggs, ova, semen, embryos, or pet food, you must obtain a Sanitary Import Permit at customs. Partner with Do Startup’s experts to ensure compliance and seamless documentation.\nA Sanitary Import Permit is a certificate issued under the Ministry of Agriculture’s authority, in accordance with Sections 3 and 4 of the Livestock Importation Act, 1898. The Department of Animal Husbandry, Dairying, and Fisheries ensures that this permit helps prevent foreign animal diseases from entering India.",
      },
      {
        heading: "What is a Sanitary Import Permit?",
        content:
          "The Sanitary Import Permit, granted under Section 3(a) of the Livestock Importation Act of 1898, permits the import of livestock and livestock products. Although not a license, it specifies hygiene and safety requirements that must be met by the exporting country prior to entry into India.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Sanitary Import Permit Certificate",
        content:
          "• Designated Entry Points: Import of animal products is only allowed through authorized seaports and airports like Delhi, Mumbai, Kolkata, Chennai, Bangalore, and Hyderabad. Fish imports can also pass through Visakhapatnam, Kochi, and Petrapole (Bangladesh border).\n• Disease Control: The permit reduces the risk of foreign diseases by ensuring hygienic product certification before entry.\n• Hygienic Assurance: Ensures animal product safety through veterinarian certification from the exporting country.\n• Financial Protection: Minimizes potential losses from disease outbreaks in imported livestock products.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Sanitary Import Permit Certificate",
        content:
          "• Valid FSSAI license for importing livestock products for human use\n• FSSAI license copy\n• Product catalogue and description\n• Ingredient details for each item\n• Product process chart\n• List of items to be imported\n• Certificate of Analysis (chemical and microbiological details)\n• Intended use of imported items",
      },
    ],
    registrationProcedure: [
      {
        heading: "Sanitary Import Permit Online Application Process",
        content:
          "1. Visit the SIP portal and choose the relevant tab\n2. Complete Form A or B and upload the required documents\n3. Make the payment via the online gateway\n4. Upon approval, download the permit directly from the portal",
      },
      {
        heading: "Compliance Requirements for Sanitary Import Permit",
        content:
          "• The product must comply with Codex and Indian Food Safety standards\n• Attach a valid sanitary certificate from the origin country\n• No beef or beef derivatives allowed\n• Provide necessary health certificates\n• Products must pass microbiological, chemical, and physical tests\n• Product lists must follow the standard format and quantity",
      },
    ],
    feesStructure: [
      {
        heading: "Fees for Acquiring an Online Sanitary Import Permit",
        description:
          "The government fee for a Sanitary Import Permit is ₹300 per application. Professional service fees may vary based on service providers.",
        feeTable: [
          {
            category: "Government Application Fee",
            amount: "₹300",
          },
          {
            category: "Consultancy Charges (Optional)",
            amount: "Varies by service provider",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Getting a Sanitary Import Permit Certificate",
        description:
          "The permit is typically issued within 8–12 working days, subject to proper documentation and verification.",
        steps: [
          {
            title: "Document Preparation & Upload",
            duration: "1–3 days",
            description:
              "Collect and upload all mandatory documents on the SIP portal.",
          },
          {
            title: "Application Review",
            duration: "4–7 days",
            description:
              "Authorities verify documentation, purpose, and compliance.",
          },
          {
            title: "Permit Issuance",
            duration: "1–2 days",
            description:
              "Upon successful approval, the permit is made available for download.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for Sanitary Import Permit Services?",
        description: [
          "Comprehensive guidance from experienced consultants",
          "Timely document review and submission",
          "Regulatory support for smooth import clearance",
        ],
        points: [
          "10+ years of expertise",
          "Trusted by 500+ importers",
          "99% approval success rate",
        ],
      },
    ],
    faq: [
      {
        question: "What is the validity of a sanitary import permit?",
        answer:
          "It ranges from 3 months to 1 year, allowing multiple consignments within the approved limit.",
      },
      {
        question: "What is a sanitary import permit?",
        answer:
          "It is a certificate specifying sanitary norms for importing livestock products into India.",
      },
      {
        question: "What is a sanitary import permit in customs?",
        answer:
          "A document required at customs clearance to confirm compliance with animal import health norms.",
      },
      {
        question: "How can I get a sanitary import permit in India?",
        answer:
          "Apply online via the SIP portal, attach required documents, and complete payment.",
      },
      {
        question: "Why is an online sanitary import permit required?",
        answer:
          "To ensure that imported animal products meet health and hygiene standards, protecting public health.",
      },
      {
        question: "What documents are required for the sanitary import permit?",
        answer:
          "FSSAI license, product catalogue, ingredient list, usage details, process chart, and analysis certificate.",
      },
      {
        question: "How is the Sanitary Import Permit delivered?",
        answer:
          "Approved permits are made available for download on the SIP portal.",
      },
      {
        question: "How will missing documents be communicated?",
        answer:
          "The applicant will be notified through the SIP portal to correct and resubmit the documents.",
      },
      {
        question: "What is the fee for a sanitary import permit?",
        answer:
          "₹300 per application, excluding any consultant’s professional fees.",
      },
      {
        question:
          "How long does it take to get a sanitary import permit certificate?",
        answer:
          "Typically 8–12 working days, subject to regulatory review and documentation.",
      },
    ],
  },
  "npop-certification": {
    title: "NPOP Certification – A Complete Guide",
    description:
      "Achieve NPOP certification with Do Startup’s expert support to certify your organic products for domestic and export markets under the National Programme for Organic Production.",
    overview: [
      {
        heading: "An Overview of NPOP Certification",
        content:
          "NPOP certification is a government-backed initiative that sets benchmarks for organic cultivation, processing, and trade. It allows farmers and businesses to officially showcase their adherence to organic farming standards, catering to eco-conscious consumers and promoting sustainable agriculture.",
      },
      {
        heading: "What is NPOP?",
        content:
          "The National Programme for Organic Production (NPOP), launched in 2001, defines standards for organic farming, systems, and certification. Aligned with global norms, it governs the use of the India Organic logo and regulates import/export under APEDA.",
      },
      {
        heading: "Background of NPOP in India",
        content:
          "Started in 2000, NPOP enabled organic certification for farms and livestock. As of 2024, India ranks second globally in organic farmland and first in farmer count. Administered by APEDA under the Ministry of Commerce, it unlocks both domestic and international organic markets.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of NPOP Registration",
        content:
          "• Boost Consumer Trust – Certified products reassure buyers of quality.\n• Market Recognition – Credibility as a certified organic supplier.\n• Eco-Friendly Practices – Promotes sustainable agriculture and biodiversity.\n• Health Assurance – Guarantees chemical-free, GMO-free products.\n• Global Market Access – Facilitates organic exports under recognized standards.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for NPOP Certification",
        content:
          "• Certification body’s mandate and program statement\n• Inspection and evaluation procedures\n• Fee structure and financial details\n• Complaint and appeal handling process\n• List of certified products\n• Company registration proof\n• Memorandum of Association (MOA)\n• Audited financial statements\n• Accreditation fee receipts\n• ISO 17065 quality manual\n• SOPs, formats, and checklists\n• Authorization letter\n• Additional relevant documents",
      },
    ],
    registrationProcedure: [
      {
        heading: "How to Apply for NPOP Certification",
        content:
          "1. Check Eligibility – Ensure compliance with NPOP farm and production standards.\n2. Choose a Certification Body – Accredited by APEDA under NPOP.\n3. Submit Application – Provide details of farm, crops, livestock.\n4. Upload Documents – Include certification plan, inputs, SOPs, etc.\n5. Inspection & Verification – Third-party checks ensure compliance.\n6. Certification Approval – Issued on successful compliance.\n7. Annual Review – APEDA conducts yearly audits of certified units.",
      },
    ],
    feesStructure: [
      {
        heading: "NPOP Certification Fees",
        description:
          "Fees vary by certification body and scope of operation. Typically include application fee, inspection charges, and annual surveillance fees.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Validity & Timeline of NPOP Certification",
        description: "Valid for 3 years from issuance.",
        steps: [
          {
            title: "Application to Approval",
            duration: "3–6 months",
            description:
              "Includes document review, inspections, and compliance verification.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup for NPOP Certification?",
        description: [
          "Assisted 500+ agripreneurs",
          "10+ years of sector expertise",
          "99% certification success rate",
          "End-to-end support",
          "Affordable services",
          "24/7 expert assistance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is NPOP certification?",
        answer:
          "NPOP certification assures organic production quality under a national standard governed by APEDA and the Department of Commerce.",
      },
      {
        question: "What is the validity of an NPOP certificate?",
        answer: "Valid for 3 years from the issuance date.",
      },
      {
        question: "What is the difference between NPOP and PGS-India?",
        answer:
          "NPOP is a national certification scheme for export and domestic markets; PGS-India is a participatory guarantee system for domestic trade.",
      },
      {
        question: "Who certifies organic food in India?",
        answer:
          "Certification bodies accredited by APEDA and NAB under NPOP carry out audits and approvals.",
      },
      {
        question: "Who needs organic certification?",
        answer:
          "Producers, processors, traders, and exporters of organic agricultural products require certification.",
      },
      {
        question: "What does NPOP stand for?",
        answer: "National Programme for Organic Production.",
      },
    ],
  },

  "drone-registration": {
    title: "Drone Registration – A Complete Overview",
    description:
      "Register your drone on India’s Digital Sky platform via Do Startup to ensure legal, safe, and compliant operations for commercial or recreational use.",
    overview: [
      {
        heading: "What is Drone Registration?",
        content:
          "Under DGCA’s Drone Rules, 2021, all unmanned aircraft systems (UAS) above nano category must be registered on the Digital Sky platform to obtain a Unique Identification Number (UIN) and Operator Permit (UAOP) before flight operations.",
      },
      {
        heading: "Categories of Drone Registration",
        content:
          "• Nano Drones: ≤ 250 g\n• Micro Drones: 251 g – 2 kg\n• Small Drones: 2 – 25 kg\n• Medium Drones: 25 – 150 kg\n• Large Drones: > 150 kg",
      },
      {
        heading: "Importance of Registration",
        content:
          "Ensures compliance with national security directives, prevents unauthorized flights, promotes safe operations, and supports growth of India’s indigenous drone ecosystem.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Drone Registration",
        content:
          "• Prevent unauthorized drone flights\n• Ensure operational safety and compliance\n• Enable commercial drone services\n• Boost domestic drone manufacturing\n• Access DGCA-approved flight corridors",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content:
          "• Organization name & address proof\n• Company registration number & GST certificate\n• Director’s name & DIN\n• Aadhar card of one director\n• Drone specifications & photograph\n• OEM certificate & No Permission No Takeoff (NPNT) letter",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process",
        content:
          "1. Check OEM certificate & NPNT compliance\n2. Register on Digital Sky portal\n3. Apply for UIN and mark it on your drone\n4. Apply for UAOP (Operator Permit)\n5. Obtain Remote Pilot License from DGCA-authorized institute\n6. Install NPNT software for real-time flight permissions",
      },
    ],
    feesStructure: [
      {
        heading: "Government Fees",
        description:
          "• UIN issuance: ₹1,000\n• UAOP application: ₹25,000\n• UAOP renewal: ₹10,000",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Complete Registration",
        description:
          "Process typically takes a few weeks to a few months depending on document accuracy and DGCA approvals.",
        steps: [
          {
            title: "Digital Sky Registration",
            duration: "1–2 weeks",
            description: "Portal sign-up, form filling, and UIN issuance.",
          },
          {
            title: "UAOP & Pilot License",
            duration: "2–4 weeks",
            description:
              "Operator permit application and remote pilot license issuance.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "10,000+ experts nationwide",
          "2,000+ successful drone registrations",
          "99% approval rate",
          "End-to-end documentation support",
          "Transparent pricing and timelines",
          "24/7 compliance assistance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Do I need a license for nano drones?",
        answer:
          "No, nano drones (≤ 250 g) flown for non-commercial purposes are exempt from registration and pilot licensing.",
      },
      {
        question: "What is NPNT?",
        answer:
          "No Permission No Takeoff (NPNT) is a mandate requiring real-time digital clearance before drone takeoff.",
      },
      {
        question: "How long is a UAOP valid?",
        answer:
          "UAOP validity aligns with drone category and pilot license validity, typically renewable annually.",
      },
      {
        question: "Can I fly anywhere in India?",
        answer:
          "No, flights are restricted to green zones and require DPR approval for red and yellow zones.",
      },
      {
        question: "How soon can I start commercial operations?",
        answer:
          "After obtaining UIN, UAOP, NPNT compliance, and remote pilot license — typically within 4–6 weeks.",
      },
    ],
  },

  "tds-return-filing-online": {
    title: "TDS Return Filing Online – A Complete Guide",
    description:
      "Learn how to file your quarterly TDS returns online accurately and on time with DoStartup’s expert assistance.",
    overview: [
      {
        heading: "What is TDS Return Filing Online?",
        content:
          "TDS (Tax Deducted at Source) return filing is the process where deductors submit details of the tax deducted and deposited with the Income Tax Department. It's mandatory for various payments like salary, rent, commission, professional fees, etc.\nPurpose:\n• Ensure tax collection at the income source\n• Promote transparency and prevent tax evasion",
      },
      {
        heading: "What is a TDS Return?",
        content:
          "• A quarterly statement of all TDS transactions\n• Must be filed by the deductor (payer of income)\n• Includes information on amount paid, TDS deducted, and deposited\n• Disclosed in Form 26AS of the payee",
      },
      {
        heading: "TDS Return Forms",
        content:
          "Form 24Q – TDS on salaries (Sec 192) – Employers\nForm 26Q – TDS on non-salary payments – Businesses\nForm 27Q – TDS on payments to NRIs/foreigners – Non-residents\nForm 27EQ – TCS (Tax Collected at Source) – Sellers under Sec 206C",
      },
    ],
    benefits: [
      {
        heading: "Benefits of e-TDS Return Filing Online",
        content:
          "• Prevents tax evasion and penalties\n• Reduces taxpayer burden\n• Convenient and time-efficient\n• Helps manage business cash flow\n• Simplifies reconciliation and refund claims",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "• TAN & PAN (deductor and deductee)\n• Challan details (CIN)\n• Form 16 / Salary certificate\n• Bank interest/passbook/FD interest certificates\n• Rent agreement\n• Income statements\n• TDS certificates",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for TDS Return Filing Online",
        content:
          "1. Collect documents (TAN, PAN, payment details)\n2. Select correct TDS form\n3. Prepare return in the prescribed format\n4. Validate via File Validation Utility (FVU)\n5. Generate .fvu file\n6. Submit via NSDL website or TIN Facilitation Center\n7. Receive acknowledgment",
      },
    ],
    feesStructure: [
      {
        heading: "Late Filing Penalties",
        description:
          "Under Section 234E, a fee of ₹200 per day applies until filing. Additionally, penalty under Section 271H may range from ₹10,000 to the TDS amount for the Assessing Officer’s discretion.",
      },
    ],
    registrationTimeline: [
      {
        heading: "TDS Filing Timeline",
        description:
          "TDS returns must be prepared, validated, and filed quarterly by the due dates to avoid penalties.",
        steps: [
          {
            title: "Q1 Return",
            duration: "1–2 weeks before 31 July 2025",
            description:
              "Gather Q1 data, prepare Form 24Q/26Q, and validate via FVU.",
          },
          {
            title: "Q2 Return",
            duration: "1–2 weeks before 31 Oct 2025",
            description:
              "Compile Q2 transactions, complete FVU checks, and submit to NSDL.",
          },
          {
            title: "Q3 Return",
            duration: "1–2 weeks before 31 Jan 2026",
            description:
              "Review Q3 payments, generate .fvu file, and file through TIN-NSDL portal.",
          },
          {
            title: "Q4 Return",
            duration: "1–2 weeks before 31 May 2026",
            description:
              "Finalize Q4 TDS details, validate returns, and submit before year-end closure.",
          },
        ],
      },
    ],

    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "Expert guidance on all TDS forms and schedules",
          "End-to-end support from preparation to filing",
          "Real-time tracking and timely reminders",
        ],
        points: [
          "99% on-time filing success",
          "Support across all quarters and revisions",
          "Dedicated TDS specialists",
        ],
      },
    ],
    faq: [
      {
        question: "What is a TDS certificate?",
        answer:
          "A TDS certificate (Form 16/Form 16A) is issued by the deductor after tax deduction, showing the amount deducted and deposited.",
      },
      {
        question: "How can I file a TDS return online?",
        answer:
          "Collect documents, select the correct form, prepare the return, validate via FVU, generate .fvu file, submit on NSDL, and receive acknowledgment.",
      },
      {
        question: "What happens if a TDS return is filed late?",
        answer:
          "A daily fee of ₹200 under Section 234E applies, plus penalty under Section 271H up to the TDS amount.",
      },
      {
        question: "Who must file TDS returns?",
        answer:
          "Employers, businesses, government offices, HUFs, partnerships, and anyone falling under Section 44AB provisions.",
      },
      {
        question: "What is a revised TDS return?",
        answer:
          "A return used to correct or update filed details. Types of corrections include C1 (deductor), C2 (challan), C3 (deductee), etc.",
      },
      {
        question: "Which utility is used for TDS return validation?",
        answer:
          "The File Validation Utility (FVU) available on the NSDL e-Gov portal.",
      },
      {
        question: "Can TDS returns be revised multiple times?",
        answer:
          "Yes, but the system accepts only one active version of a regular TDS return at a time.",
      },
      {
        question: "What is Form 27A in TDS?",
        answer:
          "A summary control sheet accompanying the quarterly e-TDS/TCS return, totaling amounts paid and TDS deducted.",
      },
      {
        question: "How is TDS deposited?",
        answer:
          "Using Challan 281 through authorized banks by the 7th of the following month.",
      },
      {
        question: "Is TDS refundable?",
        answer:
          "Yes, if deducted in excess or if total income is below the taxable limit, refund is processed after assessment.",
      },
    ],
  },

  "professional-tax-registration": {
    title: "Professional Tax Registration – A Complete Guide",
    description:
      "Professional Tax is a state-level direct tax levied on individuals earning income through profession, employment, trade, or business, governed by respective State Legislations and deductible under Section 16(iii) of the Income Tax Act, 1961.",
    overview: [
      {
        heading: "What is Professional Tax?",
        content:
          "Professional Tax applies to salaried employees, self-employed professionals (doctors, lawyers, consultants), business entities, and freelancers. Each State sets its own thresholds and rates under its Professional Tax Act.",
      },
      {
        heading: "Types of Professional Tax Certificates",
        content:
          "1. Professional Tax Enrolment Certificate (PTEC) – for individuals/entities to pay their own tax.  \n2. Professional Tax Registration Certificate (PTRC) – for employers to deduct and pay tax on behalf of employees.",
      },
      {
        heading: "Objective of Professional Tax",
        content:
          "To generate state revenue for socio-economic development, infrastructure and welfare programs, and local municipal activities.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Online Registration",
        content:
          "• Ensures legal compliance and avoids penalties  \n• Enables systematic tax deduction and reporting  \n• Supports government welfare schemes  \n• Enhances business credibility  \n• Simplifies audit and inspection processes",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content:
          "• Certificate of Incorporation, PAN, MOA, AOA  \n• Address & ID proofs of partners/directors  \n• Passport-size photos  \n• Rent agreement or office NOC  \n• Bank statement and cancelled cheque  \n• Salary & attendance register  \n• Shop & Establishment Certificate  \n• Financial statements and board resolution",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Determine Applicability",
        content:
          "Check eligibility on your State’s commercial tax portal based on entity type and income.",
      },
      {
        heading: "Step 2: Submit Application",
        content:
          "Apply online through the State’s Professional Tax portal by filling the prescribed form.",
      },
      {
        heading: "Step 3: Upload Documents",
        content:
          "Attach all required documents digitally as per the checklist.",
      },
      {
        heading: "Step 4: Verification",
        content:
          "State tax officials scrutinize the application and supporting documents.",
      },
      {
        heading: "Step 5: Issuance of Certificate",
        content:
          "Upon approval, the Enrolment or Registration Certificate is issued online.",
      },
      {
        heading: "Step 6: Periodic Return Filing",
        content:
          "File returns and pay tax at intervals prescribed by your State (monthly/quarterly/annual).",
      },
    ],
    feesStructure: [
      {
        heading: "Professional Tax Rates in Select States",
        description:
          "Monthly slabs and rates vary by State. Always verify latest rates with your State Commercial Tax Department.",
        feeTable: [
          {
            category: "Gujarat – Up to ₹12,000 / ₹12,001+",
            amount: "Nil / ₹200",
          },
          {
            category: "Andhra Pradesh – Up to ₹15,000 / ₹20,001+",
            amount: "Nil / ₹150–₹200",
          },
          {
            category: "Bihar – Up to ₹3L / ₹10L+",
            amount: "Nil / ₹1,000–₹2,500",
          },
          {
            category: "Karnataka – Up to ₹15,000+",
            amount: "Nil / ₹200",
          },
          {
            category: "Maharashtra – Up to ₹10,000 / ₹10,001+",
            amount: "Nil / ₹175–₹300",
          },
          {
            category: "Madhya Pradesh – Up to ₹4L / Above",
            amount: "Nil / ₹125–₹212",
          },
          {
            category: "Mizoram – Up to ₹12,000 / Above",
            amount: "Nil / ₹35–₹208",
          },
          {
            category: "Odisha – Up to ₹3L / Above",
            amount: "Nil / Variable",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain Professional Tax Registration",
        description:
          "Registration and certificate issuance typically take 1–2 weeks, subject to portal processing times and document accuracy.",
        steps: [
          {
            title: "Application Submission",
            duration: "1–3 days",
            description: "Fill and submit the online form with documents.",
          },
          {
            title: "Verification",
            duration: "3–7 days",
            description: "State tax authority reviews and verifies.",
          },
          {
            title: "Certificate Issuance",
            duration: "1–2 days",
            description: "Digital certificate generated upon approval.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Do Startup?",
        description: [
          "Expert guidance on State-specific professional tax laws.",
          "Complete documentation preparation and filing support.",
          "Real-time application tracking and updates.",
          "End-to-end compliance management to avoid penalties.",
          "Dedicated customer support throughout the process.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who is liable to pay professional tax?",
        answer:
          "Salaried employees, self-employed professionals, business entities, freelancers, and employers deducting tax for their staff.",
      },
      {
        question: "What are the penalties for non-compliance?",
        answer:
          "₹5 per day late registration, 10% penalty on unpaid tax plus 1.25% interest per month, and potential account attachment or prosecution.",
      },
      {
        question: "Is professional tax refundable?",
        answer:
          "No, professional tax is non-refundable but deductible under Section 16(iii) of the Income Tax Act.",
      },
      {
        question: "Can professional tax be paid in lump sum?",
        answer:
          "Some States offer composition schemes allowing lump-sum payment for a fixed period.",
      },
      {
        question:
          "When does an employer become liable to pay professional tax?",
        answer:
          "On the date of first salary disbursement that falls within the taxable limit.",
      },
      {
        question: "Which entities are exempt from professional tax?",
        answer:
          "Senior citizens (65+), persons with disabilities, agricultural and textile workers, women homemakers, and those earning below threshold income.",
      },
      {
        question: "Does professional tax vary by State?",
        answer:
          "Yes, slabs and rates differ across States; always check the latest rates with your State’s Commercial Tax Department.",
      },
    ],
  },

  "income-tax-return-filing": {
    title: "Income Tax Return (ITR) Filing in India – A Complete Guide",
    description:
      "Income Tax Return (ITR) filing is the process by which individuals and entities declare their income earned during a financial year to the Income Tax Department of India. Filing on time ensures compliance with the Income Tax Act, 1961, enables claiming deductions under sections like 80C, 80D, and HRA, and avoids penalties.",
    overview: [
      {
        heading: "What is ITR Filing?",
        content:
          "ITR filing is the process of declaring income, deductions, tax liability, and taxes paid or refunds due for a financial year to the Income Tax Department. The due date for most returns is July 31 following the end of the financial year (March 31). Returns are filed electronically via the Income Tax e-Filing portal.",
      },
      {
        heading: "What is ITR?",
        content:
          "ITR (Income Tax Return) is a form through which taxpayers report total income earned, deductions claimed, tax liability, and taxes paid or refunds due. Filing ITR ensures transparency and accountability in financial declarations.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Filing ITR",
        content:
          "• Easy Loan Approval – Banks require ITR receipts for home, car, or personal loans.  \n• Proof of Income – Documents income for self-employed individuals.  \n• Faster Visa Processing – ITR receipts verify financial stability.  \n• Claim Tax Refunds – Overpaid taxes can be reclaimed.  \n• Carry Forward Losses – Business or capital losses can be carried forward if filed on time.  \n• Avoid Penalties – Timely filing avoids late fees and interest.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for ITR Filing Online",
        content:
          "• PAN & Aadhaar Card  \n• Form 16 (employer), Form 16A (TDS), Form 16C (rent TDS)  \n• Form 26AS (annual tax statement)  \n• Proof of deductions (80C–80U)  \n• Rent receipts for HRA  \n• Investment proofs (ELSS, LIC, PPF, etc.)  \n• Interest certificates (banks, post office)  \n• Home loan principal and interest statements  \n• Share trading/capital gains reports  \n• GST registration certificate (if applicable)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Guide to File ITR Online",
        content:
          "1. Login to the Income Tax e-Filing portal  \n2. Enter Assessment Year & select ITR Form type  \n3. Select taxpayer status – Individual, HUF, Firm, etc.  \n4. Choose the correct ITR Form based on income profile  \n5. Fill in income, deductions, taxes paid, etc.  \n6. Validate & e-verify via Aadhaar OTP, net banking, or DSC  \n7. Submit and download acknowledgment (ITR-V)",
      },
    ],
    feesStructure: [
      {
        heading: "Types of ITR Forms in India",
        description:
          "Different ITR forms apply to different taxpayer categories based on income sources and entity type.",
        feeTable: [
          {
            category: "ITR 1 (SAHAJ)",
            amount:
              "Resident individuals with income up to ₹50 lakhs from salary, one house property, and other sources",
          },
          {
            category: "ITR 2",
            amount:
              "Individuals/HUFs not having business/profession income but with capital gains",
          },
          {
            category: "ITR 3",
            amount: "Individuals/HUFs with income from business or profession",
          },
          {
            category: "ITR 4 (SUGAM)",
            amount:
              "Individuals, HUFs, or firms with presumptive business income up to ₹50 lakhs",
          },
          {
            category: "ITR 5",
            amount: "Firms, LLPs, AOPs, BOIs, etc.",
          },
          {
            category: "ITR 6",
            amount:
              "Companies (excluding those claiming exemption under Section 11)",
          },
          {
            category: "ITR 7",
            amount:
              "Trusts, political parties, educational institutions under Sections 139(4A–4D)",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to File ITR",
        description:
          "Most taxpayers must file by July 31. Belated returns can be filed before the end of the assessment year with late fees.",
        steps: [
          {
            title: "Preparation",
            duration: "1–3 days",
            description: "Gather documents and Form 26AS.",
          },
          {
            title: "Filing",
            duration: "1 day",
            description: "Complete online form and submit.",
          },
          {
            title: "E-Verification",
            duration: "Same day",
            description: "Verify via Aadhaar OTP, net banking, or DSC.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for ITR Filing",
        description: [
          "Expert guidance on selecting the correct ITR form.",
          "End-to-end assistance with document collection and e-filing.",
          "Real-time tracking of your filing status.",
          "Help with deductions and tax-saving strategies.",
          "Support with e-verification and handling notices.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who is required to file an ITR?",
        answer:
          "Salaried and pensioned individuals, business owners, individuals with income from house property, capital gains, other sources, NRIs, firms, LLPs, companies, and institutions.",
      },
      {
        question: "Can Ifile a belated return?",
        answer:
          "Yes, before the end of the assessment year with applicable late fees and interest.",
      },
      {
        question: "What is Form 26AS?",
        answer:
          "A consolidated annual tax statement reflecting TDS, advance tax, and other tax credits against your PAN.",
      },
      {
        question: "How can I e-verify my ITR?",
        answer:
          "Via Aadhaar OTP, net banking, bank ATM PIN, or Digital Signature Certificate (DSC).",
      },
      {
        question: "What deductions can I claim?",
        answer:
          "Deductions under Section 80C (up to ₹1.5 lakhs), 80CCD(1B) (₹50,000), 80D (health insurance), 80G (donations), 80E (education loan interest), HRA, and home loan interest under Section 24(b).",
      },
      {
        question: "What happens if I miss the deadline?",
        answer:
          "Late filing fees apply under Section 234F, interest under Section 234A, and inability to carry forward losses.",
      },
    ],
  },

  "sale-deed-registration": {
    title: "Sale Deed Registration – A Complete Guide",
    description:
      "A sale deed is the legally binding document that transfers property ownership from seller to buyer, governed by the Registration Act, 1908. Understanding its terms, required elements, and the registration process ensures a smooth property transaction.",
    overview: [
      {
        heading: "Essential Terms You Should Know",
        content:
          "Seller (Transferor): The current owner.  \nBuyer (Transferee): The new owner.  \nWitness: Confirms voluntary signing.  \nStamp Duty: State-levied tax on property value.  \nRegistration Fee: Government charge to record the deed.  \nTitle: Legal proof of ownership.  \nSale Price: Agreed consideration.  \nExecution: Signing or thumb impression.  \nRegistration: Validation at sub-registrar’s office.",
      },
      {
        heading: "Must-Have Elements for Your Sale Deed",
        content:
          "Clear Property Details: Buyer/seller names, addresses, exact description.  \nPayment Terms: Advance amount, total price, mode—cheque/DD/online.  \nTransfer Timeframe: Date and handover of documents.  \nTransfer Clause: Seller clears all dues before transfer.  \nStamp Duty & Registration: Pay on correct stamp paper; unregistered deeds are invalid.",
      },
      {
        heading: "Why a Sale Deed is Important",
        content:
          "Legal Shield: Protects against future disputes.  \nClarity: Records location, area, and terms.  \nEnforceability: Renders the agreement binding.  \nSmooth Process: Streamlines transaction steps.  \nSecure Asset: Guarantees your legal title.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Sale Deed Registration",
        content:
          "• Legal Authorization – Ownership legally recognized.  \n• Transparency – All terms recorded in writing.  \n• Enforceability – Courts uphold registered deeds.  \n• Protection – Prevents fraudulent claims.  \n• Asset Security – Confirms your title.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Checklist for Registration",
        content:
          "• Buyer & Seller IDs with PAN & photos  \n• Original title deeds & Khata/7-12 extracts  \n• Stamp duty payment receipt  \n• Registration fee receipt  \n• Two witnesses’ details & IDs  \n• Previous sale agreements (resales)  \n• Loan NOC (if mortgaged)  \n• Building/association NOC (apartments)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Quick and Easy Registration Process",
        content:
          "1. Book Slot – Online or at sub-registrar’s office.  \n2. Document Check – At facilitation center.  \n3. Execution – Sign and thumb-impress before registrar.  \n4. Biometric – Fingerprints and photograph captured.  \n5. Verification – Registrar inspects and approves.  \n6. Receipt – Immediate acknowledgment; deed in 15 days.",
      },
    ],
    feesStructure: [
      {
        heading: "Stamp Duty & Registration Fees",
        description:
          "Stamp duty varies by state (e.g., Delhi: 6% for men, 4% for women).  Registration fee is a small percentage of sale price.  E-stamping available in many states.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Complete Registration",
        description:
          "From booking to acknowledgment typically takes 1–2 days; certified deed within 15 days.",
        steps: [
          {
            title: "Appointment Booking",
            duration: "Same day",
            description: "Choose slot online or walk in.",
          },
          {
            title: "Document Verification",
            duration: "1–2 hours",
            description: "Facilitation center check.",
          },
          {
            title: "Execution & Registration",
            duration: "1 day",
            description: "Sign, biometric, approval.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "We handle your entire sale deed registration end-to-end.",
        ],
        points: [
          "Fast online booking",
          "Hassle-free document management",
          "Expert lawyers",
          "Transparent pricing",
          "24/7 support",
        ],
      },
    ],
    faq: [
      {
        question: "What is a sale deed?",
        answer:
          "A legal document transferring property ownership from seller to buyer.",
      },
      {
        question: "Why is stamp duty paid?",
        answer: "It is a state tax that validates your property transaction.",
      },
      {
        question: "Who acts as witness?",
        answer:
          "Neutral parties who confirm voluntary signing by buyer and seller.",
      },
      {
        question: "How do I register?",
        answer:
          "Book online or visit the sub-registrar’s office, submit documents, sign, and pay fees.",
      },
      {
        question: "What happens if I skip registration?",
        answer:
          "The sale deed will not be legally enforceable and may lead to disputes.",
      },
    ],
  },

  "service-level-agreement": {
    title: "Service Level Agreement (SLA) – A Complete Guide",
    description:
      "A Service Level Agreement (SLA) is a formal contract between a service provider and a customer that defines expectations, obligations, performance metrics, and remedies. It ensures clarity on service scope, quality, uptime, response and resolution times.",
    overview: [
      {
        heading: "What Is an SLA?",
        content:
          "An SLA establishes the nature, quality, and scope of services a customer is entitled to receive. It aligns both parties on deliverables, performance standards, and accountability mechanisms.",
      },
      {
        heading: "Types of SLAs",
        content:
          "1. Customer-Based SLA: Tailored to a specific customer group and covers all services provided to them.  \n2. Service-Based SLA: A standard agreement for all users of a particular service.  \n3. Multi-Level SLA: Structured into:  \n   • Corporate Level – Covers organization-wide policies.  \n   • Customer Level – Addresses needs of a specific customer segment.  \n   • Service Level – Defines metrics for individual services.",
      },
      {
        heading: "Key Elements of an SLA",
        content:
          "• Scope of Services and Definitions  \n• Performance Metrics (uptime, response & resolution times)  \n• Duration and Renewal Terms  \n• Roles & Responsibilities of Provider and Customer  \n• Communication Protocols and Escalation Paths  \n• Confidentiality & Non-Disclosure Clauses  \n• Financial Terms (pricing, invoicing, payment schedules)  \n• Warranties, Guarantees & Service Credits  \n• Dispute Resolution & Termination Conditions  \n• Exclusions, Riders & Exit Clauses",
      },
      {
        heading: "Why an SLA Is Essential",
        content:
          "• Ensures Transparency: Clearly states what is and isn’t included.  \n• Sets Clear Expectations: Aligns both parties on deliverables.  \n• Defines Remedies: Penalties, credits or termination rights for non-compliance.  \n• Promotes Accountability: Metrics and reporting requirements.  \n• Supports Relationship Management: Regular reviews, change management.",
      },
    ],
    benefits: [
      {
        heading: "Core Benefits of an SLA",
        content:
          "• Manages Expectations: Prevents misunderstandings by specifying inclusions/exclusions.  \n• Simplifies Complex Services: Focuses on outcomes rather than technical details.  \n• Enhances Accountability: Measurable KPIs drive performance improvements.  \n• Builds Trust: Both sides agree to enforceable standards.  \n• Facilitates Dispute Resolution: Pre-agreed mechanisms reduce conflict.",
      },
      {
        heading: "Additional Advantages",
        content:
          "• Customizable & Scalable: Can evolve with business requirements.  \n• Financial Control: Defines costs, billing cycles, and penalties.  \n• Continuous Improvement: Regular review and feedback loops.  \n• Regulatory Compliance: Helps meet industry or legal standards.  \n• Competitive Differentiator: Demonstrates professionalism to clients.",
      },
    ],
    registrationProcedure: [
      {
        heading: "DoStartup’s SLA Drafting & Delivery Process",
        content:
          "1. Submit Online Request: Provide your service details and requirements.  \n2. Consultation Call: Our experts clarify objectives, KPIs, and legal considerations.  \n3. Draft Preparation: Receive a fully customized SLA draft within 3–4 working days.  \n4. Review & Revisions: Two rounds of free revisions to refine terms.  \n5. Finalization & Delivery: Get your SLA in print-ready and editable formats.  \n6. Ongoing Support: Access advisory for amendments, renewals, and enforcement.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Your SLA?",
        description: [
          "We combine legal expertise with service management best practices.",
        ],
        points: [
          "Top-rated legal and ITSM professionals",
          "Rapid turnaround—draft in under five days",
          "Two complimentary revision cycles",
          "Transparent, fixed-fee pricing",
          "24/7 support for amendments and queries",
          "Template library covering multiple industries",
        ],
      },
    ],
    faq: [
      {
        question: "What is the purpose of an SLA?",
        answer:
          "An SLA formalizes service expectations, metrics, and remedies to ensure both parties share a common understanding of service delivery.",
      },
      {
        question: "What should an SLA include?",
        answer:
          "It should cover scope, performance metrics, responsibilities, reporting, communication protocols, financial terms, warranties, and dispute resolution.",
      },
      {
        question: "How do I draft an SLA?",
        answer:
          "Engage legal and service management experts to define your business goals, KPIs, and legal safeguards—DoStartup provides end-to-end drafting support.",
      },
      {
        question: "What are the different types of SLAs?",
        answer:
          "SLAs can be Customer-Based, Service-Based, or Multi-Level, depending on coverage breadth and stakeholder segmentation.",
      },
    ],
  },

  "gift-deed": {
    title: "Gift Deed",
    description:
      "Legally transfer property or valuables without any consideration using a registered Gift Deed.",
    overview: [
      {
        heading: "Overview of a Gift Deed",
        content:
          "A Gift Deed is your legal shortcut to transferring something you love—be it property, money, or valuables—to someone you care about, without expecting anything in return. Governed by Section 122 of the Transfer of Property Act, 1882, it's the go-to method to pass on your assets purely out of affection—whether to a family member or a close friend. And yes, if it's immovable property, it must be registered under Section 17 of the Registration Act, 1908 to be legally valid. No shortcuts here!",
      },
      {
        heading: "What are the Essential Clauses in a Gift Deed?",
        content:
          "● Clause for Consideration: It must clearly state that the gift is free—no cash, no favors, no strings attached.\n● Possession of Property: You can only gift what you already own and possess.\n● Free Consent: The donor must give the gift voluntarily.\n● Property Details: The deed should describe the property thoroughly.\n● Details of Donor and Donee: Especially important for stamp duty concessions.\n● Rights and Liabilities: Any rent collection or utility bills must be defined.\n● Rights of Donee: The donee must know whether they can lease, modify, or earn from it.\n● Delivery Clause: It should state how and when possession has been transferred.\n● Clauses for Revocation: Clearly mentioned if applicable and mutually agreed.",
      },
      {
        heading: "Who Can Be a Donor or Donee?",
        content:
          "A donor must be mentally sound and legally capable of contracting. A donee can be anyone, including a minor (through a guardian). If the gift includes liabilities like unpaid taxes, those pass on to the donee.",
      },
      {
        heading: "What Type of Properties Can Be Gifted?",
        content:
          "The property must be:\n● Movable or immovable\n● Tangible\n● Transferable\n● Already in existence\nNo gifting future or imaginary properties.",
      },
    ],
    benefits: [
      {
        heading: "Why Register a Gift Deed?",
        content:
          "● Legally Valid Transfer: Prevents future disputes.\n● Transparent Documentation: Clearly defines rights and responsibilities.\n● Tax Benefits: Some gifts are exempt from income tax.\n● Easy Ownership Proof: Useful in property and financial records.\n● Immediate Effect: Once accepted and registered, the transfer is complete.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Gift Deed Registration",
        content:
          "● Aadhar & PAN cards (both parties)\n● Identity proof (passport, license)\n● Original Gift Deed\n● Proof of ownership (sale deed, etc.)\n● Two witnesses and their ID proofs\n● Encumbrance Certificate\n● Ready Reckoner Certificate (valuation)\n● State-specific property agreements",
      },
    ],
    registrationProcedure: [
      {
        heading: "How to Register a Gift Deed",
        content:
          "● Step 1: Draft the Gift Deed with details like date, place, donor/donee info, property description, signatures, and witness details.\n● Step 2: Print it on stamp paper of appropriate value as per your state.\n● Step 3: Visit the sub-registrar’s office to register it. Once registered, the gift is legally effective.",
      },
    ],
    feesStructure: [
      {
        heading: "Stamp Duty for Gift Deed Registration",
        description:
          "Stamp duty varies by state and the relationship between the donor and donee.",
        feeTable: [
          { category: "Delhi", amount: "6% (men), 4% (women)" },
          {
            category: "Karnataka",
            amount: "5.6% (non-family), ₹1,000–₹5,000 (family)",
          },
          { category: "Gujarat", amount: "4.9% of market value" },
          { category: "Punjab", amount: "6%, free for blood relatives" },
          {
            category: "Rajasthan",
            amount: "0% to 5% based on gender & relation",
          },
          { category: "Uttar Pradesh", amount: "7% (men), 6% (women)" },
          {
            category: "Maharashtra",
            amount: "₹200 for homes/farms, 3%-5% based on relation",
          },
          { category: "Tamil Nadu", amount: "1% (family), 7% (others)" },
          {
            category: "West Bengal",
            amount: "0.5% (family), 6% (others) + 1% surcharge if over ₹40L",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Gift Deed Registration",
        description:
          "Usually completed in 2–5 working days after document verification and submission.",
        steps: [
          {
            title: "Draft & Review",
            duration: "1–2 days",
            description:
              "Draft the Gift Deed with all clauses and verify details.",
          },
          {
            title: "Stamping & Submission",
            duration: "1 day",
            description:
              "Print on stamp paper and submit at the registrar’s office.",
          },
          {
            title: "Registration & Collection",
            duration: "1–2 days",
            description:
              "Gift Deed is signed, registered, and the certificate is collected.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "DoStartup simplifies legal compliance so you can focus on what matters—gifting with peace of mind.",
        ],
        points: [
          "Expert Drafting in 48 Hours",
          "Free Consultation",
          "End-to-End Legal Support",
          "Stamping, Submission & Delivery",
          "Transparent Pricing—No Hidden Costs",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Gift Deed?",
        answer:
          "A legal document used to transfer property or valuables voluntarily without any consideration.",
      },
      {
        question: "Where is the Gift Deed defined?",
        answer: "Under Section 122 of the Transfer of Property Act, 1882.",
      },
      {
        question: "Should a Gift Deed involve any consideration?",
        answer: "No. Even ₹1 exchanged makes it a sale, not a gift.",
      },
      {
        question: "What about possession of the property?",
        answer: "Only existing, owned, and possessed property can be gifted.",
      },
      {
        question: "What are the donor’s and donee’s rights?",
        answer:
          "The donor relinquishes all rights, while the donee gains full ownership and associated liabilities.",
      },
      {
        question: "Can a minor accept a gift?",
        answer:
          "Yes, through a legal guardian. They can confirm or refuse upon becoming adults.",
      },
      {
        question: "Can a Gift Deed be revoked?",
        answer:
          "Only under mutual agreement or legal grounds like fraud or coercion as per Section 126.",
      },
      {
        question: "Is acceptance required?",
        answer: "Yes. The donee must accept the gift while the donor is alive.",
      },
      {
        question: "What is a Conditional Gift Deed?",
        answer:
          "A gift with specific conditions agreed upon during gifting. Must be stated clearly in the deed.",
      },
      {
        question: "Is Gift Deed income taxable?",
        answer:
          "Yes, if the gift exceeds ₹50,000 and is not exempt under relations, marriage, will, or trust clauses.",
      },
    ],
  },

  "residential-rental-agreement": {
    title: "Overview of Residential Rental Agreement",
    description:
      "A Residential Rental Agreement is the official handshake (in writing) between a landlord and a tenant for renting a property for a set period, laying out all the ground rules—from rent and deposits to duration and maintenance.",
    overview: [
      {
        heading: "When to Use a Residential Rental Agreement?",
        content:
          "● Landlord renting out home to tenants (monthly, yearly, or weekly)\n● Tenant plans to live in and maintain the place temporarily\n● You want clear terms on rent, security deposit, co‑signers, or repairs to avoid future disputes",
      },
      {
        heading: "What is a Security Deposit?",
        content:
          "A refundable upfront amount (usually 2–10 months’ rent) paid by the tenant as a safety net. Landlord may deduct repair costs or unpaid bills and return the balance at lease end.",
      },
      {
        heading: "Key Terms in a Rental Agreement",
        content:
          "● Duration: Lease term (e.g., 11 months)\n● Rent: Monthly amount, due date, grace period, late fees\n● Deposit: Amount, refund timeline, deduction conditions\n● Utilities: Responsibility for water, electricity, gas, internet\n● Repairs & Maintenance: Landlord vs tenant obligations\n● Insurance: If tenant must insure the premises\n● Use & Restrictions: Pets, guests, subletting, noise rules",
      },
      {
        heading: "Essential Contents of the Agreement",
        content:
          "● Full names and addresses of landlord & tenant\n● Detailed description of premises (unit, floor, address)\n● Rent amount, payment mode (bank transfer, cheque), due date\n● Security deposit amount, bank details for refund\n● Termination, early exit, renewal notice period\n● Utilities and maintenance responsibilities\n● Rules on pets, guests, noise, and common areas\n● Emergency contacts and repair procedures",
      },
      {
        heading: "Preventing Real Estate Frauds",
        content:
          "● Always pay rent via traceable methods (bank transfer)\n● Verify owner’s identity and property documents\n● Insist on written terms—no verbal promises\n● Use proper landlord name to avoid title issues\n● Conduct joint property inspections before move‑in",
      },
      {
        heading: "Why Register Your Rental Agreement?",
        content:
          "● Legally valid if term >11 months\n● Enforceable in court for disputes\n● Prevents fraudulent re‑letting\n● Police verification evidence\n● Stamp duty compliance avoids penalties",
      },
    ],
    benefits: [
      {
        heading: "Advantages of a Rental Agreement",
        content:
          "● Prevents disputes by documenting agreed terms\n● Provides legal proof in case of disagreements\n● Enables flexible living without ownership burdens\n● Quick occupancy—no bank loans required\n● Possible tax deductions for tenants on rent paid\n● Clear emergency repair and maintenance process",
      },
      {
        heading: "Emergency & Maintenance Clarity",
        content:
          "● Defines process for urgent repairs\n● Allocates costs for breakdowns or damage\n● Ensures timely landlord response\n● Protects tenant safety and comfort",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content:
          "● Aadhar or valid government‑issued ID of both parties\n● Passport (for foreign nationals)\n● Power of Attorney (if applicable)\n● Original property ownership proof (sale deed)\n● Two passport‑size photographs of tenant and landlord\n● Rental agreement printed on state‑appropriate stamp paper",
      },
    ],
    registrationProcedure: [
      {
        heading: "Registration & Police Verification",
        content:
          "● Police Verification: Required under Section 188 IPC; submit tenant’s ID and form to state police portal\n● Registration: Leases >11 months must be registered under Section 17 of Registration Act\n● Stamp Duty & Fees: Varies by state—calculate based on rent and duration\n● Steps:\n  1. Draft agreement with signatures and witnesses\n  2. Print on correct stamp paper\n  3. Submit to sub‑registrar with fees and IDs\n  4. Collect registered document and receipt",
      },
      {
        heading: "Key Discussion Points Before Signing",
        content:
          "● Fair Market Rent: Check similar properties and Rent Control Act\n● Advance Payment: Amount and due date\n● Furnishing, painting, pet allowances and costs\n● Deposit deductions and refund conditions\n● Inspection schedules and notice period",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "● Submit basic details online or via call",
          "● First draft delivered within 2 days",
          "● Unlimited revisions until you’re satisfied",
          "● We handle printing, stamping, registration",
          "● Transparent, end‑to‑end legal support",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Residential Rental Agreement?",
        answer:
          "A legal contract granting a tenant the right to occupy a property for a specified period in exchange for rent.",
      },
      {
        question: "What is a Security Deposit?",
        answer:
          "An upfront refundable sum paid by the tenant to cover damages or unpaid dues.",
      },
      {
        question: "When can the landlord use part of the security deposit?",
        answer:
          "To repair damages beyond normal wear and tear or cover unpaid rent/utilities at lease end.",
      },
      {
        question: "What does Insurance signify in a Rental Agreement?",
        answer:
          "Whether the tenant needs to insure the rented property and what risks are covered.",
      },
      {
        question: "What are the benefits of a Rental Agreement?",
        answer:
          "Clarity, legal protection, dispute prevention, and potential tax benefits.",
      },
      {
        question: "Is Police Verification mandatory?",
        answer:
          "Yes, especially for leases over 11 months, to ensure tenant’s background is clear.",
      },
      {
        question: "How do I determine a fair rent?",
        answer:
          "Compare similar local properties and consult state Rent Control guidelines.",
      },
      {
        question: "When should a Rental Agreement be registered?",
        answer:
          "Any lease exceeding 11 months must be registered under the Registration Act.",
      },
      {
        question: "Can I pay rent in cash?",
        answer:
          "Avoid cash—use bank transfers or cheques for traceability and legal protection.",
      },
      {
        question: "What happens if I break the lease early?",
        answer:
          "Review your agreement’s early termination clause—penalties or notice periods may apply.",
      },
      {
        question: "Who handles minor repairs?",
        answer:
          "The agreement specifies maintenance division—typically tenant handles minor repairs.",
      },
      {
        question: "Can I sublet the property?",
        answer:
          "Only if the agreement explicitly permits subletting and landlord provides written consent.",
      },
      {
        question: "What if utilities stop working?",
        answer:
          "Follow the defined emergency repair process to have landlord address urgent issues.",
      },
      {
        question: "Do I need renters’ insurance?",
        answer:
          "If required in your agreement—covers tenant’s belongings and liability inside the premises.",
      },
    ],
  },

  "commercial-rental-agreement": {
    title: "Overview of Commercial Rental Agreement",
    description:
      "A Commercial Rental Agreement is a legally recognized document used to lease business premises—offices, retail, warehouses, restaurants—formalizing landlord and tenant obligations, costs, and usage rights for commercial use.",
    overview: [
      {
        heading: "When to Use a Commercial Rental Agreement?",
        content:
          "● Leasing office space, retail stores, warehouses, factories, restaurants\n● Part of larger complexes with shared lobbies, parking, HVAC\n● Significant financial commitments requiring clear, comprehensive terms",
      },
      {
        heading: "Key Queries to Address",
        content:
          "● Liability for fire or other damages\n● Utilities payment responsibility\n● Landlord inspection rights and notice period\n● Tenant bankruptcy as contract breach\n● Dispute resolution: court, arbitration, mediation\n● Governing law and jurisdiction\n● Eminent domain or government takeover provisions",
      },
      {
        heading: "Essential Elements",
        content:
          "● Landlord and Tenant definitions\n● Term: Lease duration (months/years)\n● Demised Premises: Exact rentable area with layout map\n● Real Property: Entire building and common areas\n● Base Rent: Fixed monthly or annual amount\n● Operating Costs: Pro rata share of CAM, taxes, insurance\n● Security Deposit: Refundable sum for damages or defaults\n● Permitted Use: Allowed business activities and restrictions\n● Renovations: Tenant vs landlord responsibilities for upgrades",
      },
      {
        heading: "Who Should Use It?",
        content:
          "Suitable for businesses such as offices, startups, cafes, restaurants, clinics, hotels, guesthouses, warehouses, factories, self‑storage, and mall kiosks.",
      },
    ],
    benefits: [
      {
        heading: "Advantages",
        content:
          "● Strengthens landlord‑tenant relationship with clear expectations\n● Legal protection for high‑value commercial properties\n● Preserves capital—no large upfront purchase required\n● Flexible terms compared to mortgages or loans\n● Quick occupancy without lengthy loan approvals\n● Financial safeguards against unexpected costs\n● Professional clarity fostering mutual respect",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content:
          "● Valid government ID (Aadhar, Passport for foreigners)\n● Power of Attorney if signing for owner\n● Landlord’s property ownership proof (sale deed)\n● Tenant’s business registration or incorporation certificate\n● Government approvals or licenses required for business\n● Two passport‑size photographs\n● Stamp paper for lease (value per state)\n● MOA & AOA if the tenant is a company\n● Shareholder or dealership agreements if applicable",
      },
    ],
    registrationProcedure: [
      {
        heading: "Execution & Registration",
        content:
          "● Draft on non‑judicial stamp paper or e‑stamp per state\n● Signatures of landlord, tenant, and two witnesses\n● Each party retains a signed copy\n● Register lease >11 months at sub‑registrar with stamps, fees\n● Obtain registration certificate and receipt",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "DoStartup’s Hassle‑Free Process",
        description: [
          "● Share your requirements and property details",
          "● Expert legal team drafts first version in 2 days",
          "● Review and suggest edits until you’re satisfied",
          "● We finalize, print, stamp, and register on your behalf",
          "● End‑to‑end support ensures legal compliance and speed",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Commercial Rental Agreement?",
        answer:
          "A contract granting a tenant the right to use business premises for commercial purposes under agreed terms.",
      },
      {
        question: "What is Demised Premises?",
        answer:
          "The specific portion of property leased to the tenant, usually shown on a layout plan.",
      },
      {
        question: "What is Real Property?",
        answer:
          "The entire property owned by the landlord, including common areas and shared facilities.",
      },
      {
        question: "What is Base Rent?",
        answer:
          "The fixed amount payable by the tenant monthly or annually, excluding additional charges.",
      },
      {
        question: "What is Security Deposit?",
        answer:
          "A refundable sum held by the landlord to cover damages or defaults under the lease.",
      },
      {
        question: "Does it provide legal security?",
        answer:
          "Yes, it legally binds both parties to their rights and obligations, enforceable in court.",
      },
      {
        question: "What documents are mandatory?",
        answer:
          "ID proofs, property ownership documents, business registration papers, stamp paper, and MOA/AOA if applicable.",
      },
      {
        question: "How to register the agreement?",
        answer:
          "Register leases over 11 months at the sub‑registrar by submitting signed deed, IDs, and paying stamp duty and registration fees.",
      },
      {
        question: "What is the typical lease period?",
        answer:
          "Commercial leases range from 11 months to several years, based on business needs.",
      },
      {
        question: "Is legal consultation important?",
        answer:
          "Yes, expert advice ensures the lease protects your interests and complies with all laws.",
      },
      {
        question: "What is Gross Rental?",
        answer:
          "A lease where landlord covers all property expenses such as taxes, maintenance, and insurance.",
      },
      {
        question: "What is Net Rental?",
        answer:
          "Tenant pays base rent plus some or all operating expenses (taxes, insurance, maintenance).",
      },
      {
        question: "What laws apply?",
        answer:
          "Transfer of Property Act 1882, Registration Act 1908, and GST Act 2016 for lease taxes.",
      },
      {
        question: "How to choose a location?",
        answer:
          "Assess visibility, customer access, competition, and operational feasibility before leasing.",
      },
    ],
  },

  "relinquishment-deed": {
    title: "Overview of Relinquishment Deed",
    description:
      "A Relinquishment Deed enables one legal heir to voluntarily cede their share of inherited property to co‑heirs, consolidating ownership and preventing future disputes.",
    overview: [
      {
        heading: "What Is a Relinquishment Deed?",
        content:
          "When someone dies intestate (without a will), their property is inherited by legal heirs. A Relinquishment Deed lets one heir release their share in favor of other co‑heirs, with or without payment, under Section 17 of the Registration Act, 1908.",
      },
      {
        heading: "Key Components",
        content:
          "Includes title, date, executant (releasor) details, releasee details, full property description (survey/registration numbers), purpose of relinquishment, heirs’ shares, declaration of voluntary release, and signatures with two witnesses.",
      },
      {
        heading: "Irrevocability & Legal Effect",
        content:
          "Once executed and registered, the deed is final and the releasor loses all rights and liabilities; the releasee gains full title. It can only be challenged on grounds of fraud, coercion, lack of consent, or mutual cancellation within three years.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits",
        content:
          "● Consolidates title under fewer names for easier sale or mortgage  \n● Avoids future litigation among heirs  \n● Simplifies property management  \n● Legally secures the releasee’s interest",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content:
          "● Title deed / proof of ownership  \n● Details of all co‑owners/heirs  \n● Drafted Relinquishment Deed  \n● ID proofs (Aadhar, PAN, passport) for releasor & releasee  \n● Witness ID proofs  \n● Consideration details (if applicable)  \n● Any prior family settlement agreements",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Registration",
        content:
          "1. Draft deed with legal advisor on appropriate stamp paper  \n2. Submit at sub‑registrar’s office with releasor, releasee & two witnesses  \n3. Pay registration fee (₹100–₹250, state‑dependent)  \n4. Attend appointment for signatures; sub‑registrar may visit if needed  \n5. Collect registered copy (within ~1 week)",
      },
    ],
    whyUs: [
      {
        heading: "Dostartup’s Hassle‑Free Process",
        description: [
          "1. You share basic details & documents online  ",
          "2. Our experts draft the deed within 2 business days  ",
          "3. We handle verification & scheduling at sub‑registrar’s office  ",
          "4. You review & request edits if needed  ",
          "5. We oversee registration and deliver your registered deed",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Relinquishment Deed?",
        answer:
          "A legal document where a co‑heir gives up their inherited share in property to other co‑heirs.",
      },
      {
        question: "Who can be a releasor or releasee?",
        answer:
          "Only legal heirs who already hold a share in the intestate property can execute or receive a relinquishment.",
      },
      {
        question: "Is consideration required?",
        answer:
          "No. It can be executed with or without payment, often motivated by love or family settlement.",
      },
      {
        question: "Does it need registration?",
        answer:
          "Yes. Mandatory under Section 17 of the Registration Act, 1908; unregistered deeds are void.",
      },
      {
        question: "Can it be revoked?",
        answer:
          "Once registered, it’s irrevocable unless challenged in court on grounds like fraud, coercion, or mutual cancellation within three years.",
      },
      {
        question: "What happens if it’s unregistered?",
        answer:
          "An unregistered deed has no legal effect and cannot be enforced in court.",
      },
      {
        question: "Who must sign the deed?",
        answer:
          "The releasor, the releasee, and at least two independent witnesses must sign before registration.",
      },
      {
        question: "What property can be relinquished?",
        answer:
          "Only jointly inherited property shares—self‑acquired assets cannot be surrendered via this deed.",
      },
      {
        question: "What grounds allow challenge?",
        answer:
          "Lack of free consent, fraud, coercion, or breach of agreed revocation conditions within the limitation period.",
      },
      {
        question: "What is the Limitation period?",
        answer:
          "Challenges must be filed in civil court within three years from execution under the Limitation Act.",
      },
      {
        question: "Can non‑heirs receive the relinquished share?",
        answer:
          "No. Transfer must be in favor of co‑owners who are legal heirs, else it may be treated as a gift.",
      },
      {
        question: "What documents accompany the deed?",
        answer:
          "Title documents, heir details, ID proofs, draft deed, witnesses’ proofs, and any family settlement papers.",
      },
    ],
  },

  "probate-will": {
    title: "Overview of Probate of Will",
    description:
      "Probate is the court‑certified validation of a deceased’s will, empowering the executor to administer the estate in accordance with the testator’s wishes and settle liabilities.",
    overview: [
      {
        heading: "What Is Probate of a Will?",
        content:
          "Under Section 2(h) of the Indian Succession Act, 1925, a will is a testator’s declaration for post‑death asset distribution. Probate is the legal process by which a competent court certifies that the submitted will is genuine and grants the executor authority to administer the estate.",
      },
      {
        heading: "When Is Probate Required?",
        content:
          "Probate is mandatory in jurisdictions formerly under the Lieutenant‑Governor of Bengal or the High Courts of Madras and Bombay (now West Bengal, Chennai, Mumbai) and for Hindu, Sikh, Jain or Buddhist testators there. It’s also essential if the will is contested, unclear, or additional legal certainty is needed.",
      },
      {
        heading: "Key Advantages of a Probated Will",
        content:
          "● Protects the estate from unauthorized claims  \n● Enables smooth distribution to beneficiaries  \n● Provides public acknowledgment of heirs  \n● Allows creditors to present claims within 90 days  \n● Strengthens executor’s authority and legal standing",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Probate",
        content:
          "● Original death certificate of the testator  \n● Original or certified copy of the will  \n● Evidence of voluntary execution (no coercion/fraud)  \n● Identity proofs of executor and beneficiaries  \n● Proof of relationship (if requested)  \n● Court fee challan as per Court Fees Act  \n● Any additional documents ordered by the court",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Will Probate",
        content:
          "1. File probate petition with District Judge within 7 days of death, verified as per CPC.  \n2. Submit to High Court having jurisdiction over the deceased’s property.  \n3. Provide death certificate, will, affidavits; court issues public notice inviting objections for 30 days.  \n4. If no valid objections, court grants probate certificate.  \n5. Executor uses probate to distribute assets & settle liabilities.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Probate Assistance",
        description: [
          "1. Expert guidance on jurisdiction and document preparation  ",
          "2. Drafting and verification of probate petition  ",
          "3. Coordination with court registry and follow‑up  ",
          "4. Public notice publication and objection handling support  ",
          "5. Timely delivery of your probate certificate",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the need for probate of a will?",
        answer:
          "To legally empower the executor to distribute the deceased’s assets and settle liabilities in accordance with the will.",
      },
      {
        question: "Under which court can I file for probate?",
        answer:
          "File in the District Court or High Court having jurisdiction over the location of the deceased’s property.",
      },
      {
        question: "Which assets are subject to probate?",
        answer:
          "Assets solely owned by the deceased and expressly mentioned in the will.",
      },
      {
        question: "Can a will be probated before the testator’s death?",
        answer: "No. Probate can only occur after the death of the testator.",
      },
      {
        question: "Who is called an executor?",
        answer:
          "The person appointed in the will to carry out the testator’s instructions and manage estate distribution.",
      },
      {
        question: "Who can apply if no executor is named?",
        answer:
          "Any legal heir or interested party may petition the court to be appointed administrator.",
      },
      {
        question: "What is meant by probate of will?",
        answer:
          "The legal certification of a will’s authenticity and the granting of authority to the executor.",
      },
      {
        question: "Is probate required in all states of India?",
        answer:
          "No. Mandatory only in certain regions (West Bengal, Mumbai, Chennai) or under specific religious and legal circumstances.",
      },
      {
        question: "Must a public notice be published?",
        answer:
          "Yes. A public notice is issued to invite objections before granting probate.",
      },
      {
        question: "When should one apply for probate?",
        answer: "After seven days have passed since the testator’s death.",
      },
      {
        question: "What is the required court fee?",
        answer:
          "It varies by state and the estate’s value, as prescribed under the Court Fees Act.",
      },
      {
        question: "Is a will valid without probate?",
        answer:
          "Yes, in some cases. However, probate provides legal assurance and enforceability.",
      },
    ],
  },

  "share-purchase-agreement": {
    title: "Overview of Share Purchase Agreement",
    description:
      "A Share Purchase Agreement (SPA) is the definitive contract governing the sale and purchase of company shares, detailing rights, obligations, and the mechanics of the transfer between seller and buyer.",
    overview: [
      {
        heading: "What Is a Share Purchase Agreement?",
        content:
          "An SPA is executed between a seller, who agrees to transfer a specified number of shares, and a buyer, who agrees to purchase them at an agreed price. It records mutual consent and triggers the share transfer process once signed.",
      },
      {
        heading: "Why Is an SPA Necessary?",
        content:
          "By documenting each party’s rights, responsibilities and conditions precedent, the SPA ensures transparency, legal protection, and a clear framework for completing a share transaction.",
      },
      {
        heading: "Key Components",
        content:
          "• Buyer and seller names  \n• Target company details  \n• Number, class and price of shares  \n• Conditions precedent (due diligence, approvals)  \n• Representations, warranties, indemnities  \n• Governing law and dispute resolution",
      },
      {
        heading: "Difference from Shareholder Agreements",
        content:
          "An SPA governs the one‑off sale of shares between parties, whereas a Shareholder Agreement governs ongoing rights, obligations and governance among all shareholders and the company.",
      },
      {
        heading: "Tax Implications",
        content:
          "• Short‑term capital gains (shares held ≤ 12 months) taxed under Section 111A.  \n• Long‑term capital gains (shares held > 12 months) taxed under Section 112.  \n• For slump sales under a Business Transfer Agreement: gains computed under Section 50B (assets minus liabilities).",
      },
    ],
    benefits: [
      {
        heading: "Protects Both Parties",
        content:
          "The SPA enshrines detailed representations, warranties and indemnities, safeguarding buyer and seller against misstatements or undisclosed liabilities.",
      },
      {
        heading: "Facilitates Due Diligence",
        content:
          "Investors rely on the SPA to confirm findings from due diligence, ensuring business continuity and reducing post‑closing risks.",
      },
      {
        heading: "Establishes Clear Exit/Entry Terms",
        content:
          "Defines post‑closing obligations, earn‑outs, escrow arrangements and mechanisms for resolving breaches.",
      },
    ],
    procedure: [
      {
        heading: "DoStartup’s SPA Drafting Process",
        content:
          "1. Initial consultation to understand transaction scope  \n2. Draft SPA tailored to your deal terms  \n3. Share draft for feedback and revisions  \n4. Finalize within 3–4 business days  \n5. Assist with signing and closing formalities",
      },
    ],
    faq: [
      {
        question: "What is a Share Purchase Agreement?",
        answer:
          "A contract between buyer and seller outlining terms for the sale and purchase of company shares.",
      },
      {
        question: "What information must an SPA include?",
        answer:
          "Buyer/seller details, company name, share class & quantity, price, conditions precedent, warranties, indemnities, governing law.",
      },
      {
        question: "What is Due Diligence in an SPA?",
        answer:
          "The process by which a buyer verifies the target company’s financials, legal standing and operations before closing.",
      },
      {
        question: "What are warranties and indemnities?",
        answer:
          "Warranties are assurances about the company’s condition; indemnities commit the seller to compensate losses from specific liabilities.",
      },
      {
        question: "Can shareholders sell their shares freely?",
        answer:
          "Depends on pre‑emption rights and transfer restrictions in the company’s Articles and shareholder agreements.",
      },
      {
        question: "Who drafts the SPA?",
        answer:
          "Typically legal counsel for buyer and seller—DoStartup assists in preparing a compliant, deal‑specific SPA.",
      },
      {
        question: "How long does SPA drafting take?",
        answer:
          "With DoStartup, initial draft is ready in 3–4 business days, subject to complexity and negotiation.",
      },
      {
        question: "What happens after signing an SPA?",
        answer:
          "Parties satisfy conditions precedent, share transfer formalities are completed, and payment is made to close the transaction.",
      },
    ],
  },

  "franchise-agreement": {
    title: "Franchise Agreement",
    description:
      "A legally binding contract between a franchisor and franchisee granting rights to operate under an established system and trademarks in exchange for fees and revenue share.",
    overview: [
      {
        heading: "Overview of Franchise Agreement",
        content:
          "A Franchise Agreement is a legally binding contract between the Franchisor and the Franchisee. It grants the Franchisee the authority to operate a business using the Franchisor’s established system and proprietary trademarks. Simply put, it is an arrangement where a successful business (Franchisor) provides its brand, business model, and support to another party (Franchisee) in exchange for a fee and a share of the revenue.",
      },
      {
        heading: "What Does a Franchise Agreement Include?",
        content:
          "Before signing, the Franchise Disclosure Document (FDD) should be reviewed. It contains in-depth information such as the names of the Franchisor and Franchisee, type of franchise, Franchisor’s background, designated region and market strategy, and marketing and operational support. The Agreement itself defines commitments, fees, penalties, compensation clauses, termination provisions, and income projections.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of a Franchise Agreement",
        content:
          "● Business Rights and Brand Access: Grants legal rights to operate under an established name, logo, products, and marketing strategies.  \n● Brand Control: Enables the Franchisor to enforce usage rules, impose penalties, and ensure compliance with standards.",
      },
    ],
    documentsRequired: [],
    registrationProcedure: [],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Book a Free Consultation with DoStartup",
        description: ["Get a response within 1 hour"],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Franchise Agreement?",
        answer:
          "A legal contract that allows a Franchisee to operate a business using the Franchisor’s brand, systems, and support.",
      },
      {
        question: "What is the purpose of a Franchise Agreement?",
        answer:
          "To formally define the relationship and expectations between the Franchisor and Franchisee.",
      },
      {
        question:
          "What questions should be asked before becoming a Franchisee?",
        answer:
          "Understand financial obligations, brand expectations, support offered, territorial rights, and renewal conditions.",
      },
      {
        question: "What is franchising?",
        answer:
          "A business model where an established brand allows a third party to operate using its name and system in exchange for fees.",
      },
      {
        question:
          "What are the benefits and responsibilities of owning a franchise?",
        answer:
          "Benefits include brand recognition and support; responsibilities include fee payments, operational compliance, and maintaining brand standards.",
      },
      {
        question: "What is a Master Franchise Agreement?",
        answer:
          "An agreement granting a Franchisee rights over a larger region and the ability to appoint sub‑franchisees.",
      },
      {
        question: "What role does the Consumer Protection Act, 1996 play?",
        answer:
          "It protects consumers by enabling complaints against Franchisor or Franchisee for unfair practices or defective products/services.",
      },
      {
        question: "What should be done before signing a Franchise Agreement?",
        answer:
          "Review the FDD, analyze financials, understand legal obligations, and consult with a legal expert.",
      },
      {
        question: "How does the Foreign Exchange Management Act, 1999 apply?",
        answer:
          "It regulates foreign investment and transactions for international franchises operating in India.",
      },
      {
        question: "What kind of franchise opportunities can be explored?",
        answer:
          "Single‑unit, multi‑unit, and master franchise models across industries like food, retail, education, and fitness.",
      },
    ],
  },

  "shareholders-agreement": {
    title: "Shareholders' Agreement",
    description:
      "A contractual arrangement among a company’s shareholders outlining rights, duties, share transfers, decision‑making, and protections under the Companies Act, 2013.",
    overview: [
      {
        heading: "Overview of the Shareholders' Agreement",
        content:
          "A Shareholders' Agreement is a contract among a company’s shareholders that defines share transfers, shareholder rights and duties, business operations, and decision‑making processes on critical matters.",
      },
      {
        heading: "Key Elements of a Shareholders' Agreement",
        content:
          "It typically covers rights of a shareholder (to convene meetings, vote, appoint auditors/directors, inspect records, receive financials), regulations on share transfers, financial review processes, quorum requirements, share valuation methods (asset‑, income‑, market‑based), business operations policies, shareholder liabilities, and minority protections under the Companies Act, 2013.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Drafting a Shareholders' Agreement",
        content:
          "● Defined Authority: Clarifies roles and status of majority/minority stakeholders.  \n● Amendment Flexibility: Allows operational changes without amending foundational documents.  \n● Minority Protection: Safeguards minority interests.  \n● Equal Access: Grants equal rights to acquire shares.  \n● Governance: Establishes clear control and decision‑making guidelines.  \n● Role Security: Protects shareholder positions.  \n● Restrictive Clauses: Controls transfer rights.  \n● Confidentiality: Remains private, unlike AOA.",
      },
    ],
    documentsRequired: [
      {
        heading: "Shareholders' Agreement Checklist",
        content:
          "● Shareholder rights  \n● Financial requirements and review process  \n● Quorum provisions  \n● Share valuation methods  \n● Operational guidelines  \n● Shareholder liabilities  \n● Minority shareholder protection",
      },
    ],
    registrationProcedure: [
      {
        heading: "DoStartup's Shareholders' Agreement Process",
        content:
          "1. Consultation with legal expert to understand requirements.  \n2. Draft agreement upon receipt of details and payment.  \n3. First draft delivered within 2–4 business days.  \n4. Two rounds of revisions included.  \n5. Final agreement delivered and ready for use.",
      },
    ],
    feesStructure: [
      {
        heading: "Why Choose DoStartup?",
        description:
          "DoStartup connects you with experienced corporate law professionals, provides transparent updates, and tracks your application status online.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Drafting",
        description: "Key milestones from consultation to final agreement:",
        steps: [
          {
            title: "Requirement Gathering",
            duration: "1 business day",
            description: "Legal expert consultation and details collection.",
          },
          {
            title: "First Draft Delivery",
            duration: "2–4 business days",
            description: "Initial agreement drafted and shared.",
          },
          {
            title: "Revision Rounds",
            duration: "2–3 business days",
            description: "Two rounds of feedback and updates.",
          },
          {
            title: "Finalization",
            duration: "1 business day",
            description: "Final agreement approved and delivered.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "Expert corporate law drafting and review",
          "Confidential handling of agreements",
          "Transparent progress tracking",
          "Prompt support and revisions",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Shareholders' Agreement?",
        answer:
          "A contract defining the relationship among shareholders and governing rights, share transfers, and management.",
      },
      {
        question: "What are shareholder rights?",
        answer:
          "Rights include voting, convening meetings, appointing auditors/directors, inspecting records, and receiving financial statements.",
      },
      {
        question: "How are shares valued?",
        answer:
          "Using asset‑based, income‑based, or market‑based approaches as outlined in the agreement.",
      },
      {
        question: "Are minority shareholders protected?",
        answer:
          "Yes. The agreement and Companies Act, 2013 provide rights against oppression, class action remedies, piggybacking, and director appointment.",
      },
      {
        question: "Can shares be transferred freely?",
        answer:
          "Transfers typically require prior consent and follow restrictions like ROFO and ROFR to protect stakeholder interests.",
      },
      {
        question: "Should I consult a lawyer?",
        answer:
          "Yes. A legal expert ensures the agreement is clear, comprehensive, and compliant with applicable laws.",
      },
      {
        question: "What is a Capital Dividend Account (CDA)?",
        answer:
          "A CDA allows tax‑free distribution of capital dividends to shareholders for tax planning benefits.",
      },
      {
        question: "What common mistakes should be avoided?",
        answer:
          "Avoid ambiguous clauses, missing CDA, unclear insurance ownership, improper drag‑along/tag‑along, and non‑mandatory buyouts for deceased shareholders.",
      },
    ],
  },

  "joint-venture-agreement": {
    title: "Joint Venture Agreement",
    description:
      "A strategic collaboration contract between two or more entities combining resources, assets, IP, and manpower to achieve a common business goal, either as a new legal entity or contractual alliance.",
    overview: [
      {
        heading: "Overview of Joint Venture Agreement",
        content:
          "A Joint Venture (JV) is a strategic collaboration between two or more entities that combine their resources to achieve a common business goal. This arrangement is formalized through a Joint Venture Agreement, which outlines the terms, responsibilities, and objectives of the alliance. A JV may involve sharing assets, intellectual property, manpower, and other resources, and may result in a new legal entity or remain a contractual collaboration.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of a Joint Venture Agreement",
        content:
          "● Economies of Scale: Leverage each other’s infrastructure, technology, and human capital to scale production.  \n● Reduced Cost of Production: Share operational costs and optimize resources to lower cost of goods or services.  \n● Access to New Markets: Facilitate entry into new regions by combining local expertise.  \n● Innovation and Development: Foster rapid growth and competitive edge through combined R&D and ideas.  \n● Access to Intellectual Property: Gain proprietary technologies and knowledge without full R&D investment.  \n● Joint Investment: Divide initial capital contributions to ease financial burden.  \n● Enhanced Credibility: Benefit from established goodwill by partnering with reputed brands.  \n● Shared Expertise and Know‑How: Pool technical and industry experience for mutual growth.  \n● Reduced Competition: Collaborate rather than compete to achieve common objectives.  \n● Flexibility: Customize capital, profit sharing, and operational strategies to partner goals.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Drafting a Joint Venture Agreement",
        content:
          "● Memorandum of Understanding (MoU) or Letter of Intent (LoI)  \n● Term Sheets outlining key terms  \n● Business Transfer Agreement (if assets transferred)  \n● Intellectual Property Transfer Agreement  \n● Technology Transfer Agreement  \n● Any additional due‑diligence or regulatory approvals",
      },
    ],
    registrationProcedure: [
      {
        heading:
          "How Will DoStartup Assist You with Your Joint Venture Agreement?",
        content:
          "1. Sign up for DoStartup’s Joint Venture service and our experts will connect to understand your requirements.  \n2. Provide strategic guidance and gather all necessary documentation.  \n3. Draft and deliver a customized Joint Venture Agreement tailored to your business needs.",
      },
    ],
    feesStructure: [
      {
        heading: "Book a Free Consultation",
        description: "Get a response within 1 hour",
        feeTable: [],
      },
    ],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "DoStartup Support for Joint Venture Agreement",
        description: [
          "Expert legal professionals guide you through JV structuring and documentation.",
          "Customized agreement drafted to align with your strategic objectives.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who can enter into a Joint Venture Agreement?",
        answer:
          "Any individual, partnership firm, or company is eligible to form a joint venture.",
      },
      {
        question: "Can an Indian and a foreign company enter into a JV?",
        answer:
          "Yes, subject to compliance with applicable laws, including FEMA and FDI policies.",
      },
      {
        question:
          "What is the difference between a partnership and a joint venture?",
        answer:
          "A partnership is a long‑term relationship, whereas a joint venture is typically project‑specific and for a defined purpose or duration.",
      },
      {
        question: "When does a Joint Venture Agreement terminate?",
        answer:
          "It ends upon completion of its intended purpose or as per termination clauses in the agreement.",
      },
      {
        question: "How long does it take to draft a Joint Venture Agreement?",
        answer:
          "Typically a few business days, depending on complexity and timely receipt of inputs.",
      },
    ],
  },

  "legal-notice": {
    title: "Legal Notice",
    description:
      "A formal intimation under Section 80 of the Code of Civil Procedure, 1908, notifying an intention to initiate legal proceedings and opening a channel for amicable resolution before court filing.",
    overview: [
      {
        heading: "Overview of Legal Notice",
        content:
          "A legal notice serves as a formal intimation to an individual or entity, expressing the intention of initiating legal proceedings against them. It communicates the grievance and offers an opportunity for negotiation to resolve the matter amicably, potentially avoiding litigation.",
      },
      {
        heading: "Essentials of a Legal Notice",
        content:
          "Governed by Section 80 of CPC, a proper legal notice includes clear statements of facts, specific relief sought, summary of the issue with suggested resolutions, and detailed account of problems faced along with proposed solutions if settled amicably.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Sending a Legal Notice",
        content:
          "● Documentation: Creates formal proof of intent and grievance.  \n● Legal Pressure: Conveys seriousness and may prompt resolution.  \n● Encourages Out‑of‑Court Settlements: Offers a chance for mutual compromise.  \n● Cost‑Effective: Lower expense compared to full litigation.  \n● Eliminates Ambiguity: Sets clear timelines and expectations.  \n● Written Evidence: Serves as proof in subsequent court proceedings.",
      },
    ],
    documentsRequired: [
      {
        heading: "Checklist: When to Send a Legal Notice",
        content:
          "● Denial of ownership or access to assets  \n● Dishonoured cheques  \n● Breach of contract terms  \n● Personal disputes (divorce, custody)  \n● Intellectual property infringement  \n● Employment law violations  \n● Unlawful termination or salary disputes  \n● Any civil grievance requiring formal notice",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Draft and Send a Legal Notice",
        content:
          "1. Draft notice stating facts, relief sought, and response timeframe (30–60 days).  \n2. Send via registered post with AD.  \n3. Retain copy for legal reference.  \n4. Await stipulated response period.  \n5. If no response, initiate court proceedings.  \n6. Engage legal experts (e.g., Dostatup) for drafting and responses to ensure compliance.",
      },
    ],
    feesStructure: [
      {
        heading: "Costs Involved in Sending a Legal Notice",
        description:
          "Professional drafting and service fees vary by complexity:",
        feeTable: [
          {
            category: "Simple matters (e.g., cheque bounce)",
            amount: "₹500/-",
          },
          {
            category: "Standard cases",
            amount: "₹2,500/- to ₹6,500/-",
          },
          {
            category: "Complex matters",
            amount: "Higher, depending on specifics",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Legal Notice Process",
        description: "Typical durations:",
        steps: [
          {
            title: "Drafting & Review",
            duration: "1–2 days",
            description: "Preparation and legal review of notice.",
          },
          {
            title: "Service via Registered Post",
            duration: "3–7 days",
            description: "Posting and obtaining acknowledgment.",
          },
          {
            title: "Response Period",
            duration: "30–60 days",
            description: "Time allowed for recipient to reply.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostatup for Legal Notices",
        description: [
          "Expert civil litigation lawyers draft precise notices with proper legal references.",
          "Transparent pricing and professional service for drafting, serving, and responses.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Is issuing a legal notice mandatory?",
        answer:
          "It is mandatory under Section 80 CPC when suing a government/public officer; for private matters, it is standard practice but not always legally required.",
      },
      {
        question: "Who is eligible to draft a legal notice?",
        answer:
          "Experienced civil litigation lawyers should draft notices; platforms like Dostatup ensure valid and tailored drafting.",
      },
      {
        question: "What is the time limit to respond?",
        answer:
          "Typically 15–30 days for civil/contractual matters, up to 30 days for cheque bounce, or as specified in the notice.",
      },
      {
        question: "What happens if there is no response?",
        answer:
          "Non‑response strengthens the sender’s position and allows initiation of court proceedings after the stipulated period.",
      },
      {
        question: "What is a show‑cause notice?",
        answer:
          "A notice asking an individual to explain why action should not be taken against them, issued by authorities or employers.",
      },
      {
        question: "When can a homebuyer send a legal notice under RERA?",
        answer:
          "For delay in possession, abandonment, refusal of handover, or RERA non‑compliance; Dostatup assists buyers in drafting such notices.",
      },
      {
        question: "Can a landlord issue an eviction notice?",
        answer:
          "Yes, per lease terms or tenancy laws; a formal legal notice can be served to tenants refusing to vacate.",
      },
      {
        question: "When can a bank issue a SARFAESI notice?",
        answer:
          "When a loan is NPA or overdue; banks may issue notices under SARFAESI for debt recovery.",
      },
      {
        question: "What is the main purpose of a legal notice?",
        answer:
          "To formally inform the opposing party of intent to take legal action if issues are not resolved amicably.",
      },
    ],
  },

  "rera-complaint-by-dostatup": {
    title: "RERA Complaint by Dostatup",
    description:
      "Guidance on filing RERA complaints under the Real Estate (Regulation and Development) Act, 2016, for registered and unregistered projects, with Dostatup’s end‑to‑end support.",
    overview: [
      {
        heading: "Overview of RERA Complaint",
        content:
          "The Real Estate Regulatory Authority (RERA), established in 2016, protects homebuyers’ rights and ensures transparency among developers. Dostatup explains RERA’s responsibilities for promoters and buyers, enabling consumers to file complaints against builders, developers, or agents who violate the Act’s provisions, provided the project is RERA‑registered.",
      },
      {
        heading: "Complaints for Registered and Unregistered Projects",
        content:
          "For registered projects, buyers file under Section 31 using Form A with the project registration number. If unresolved, they can approach the Appellate Tribunal within 60 days. For unregistered projects, buyers may pursue consumer court complaints, criminal complaints, or High Court petitions for refunds or compensation, while Dostatup explores alternative remedies.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Filing a RERA Complaint with Dostatup",
        content:
          "● Time Efficiency: Avoid lengthy court procedures.  \n● Transparency: Track complaint status online via state RERA portals.  \n● Compensation: Builders may be directed to compensate for non‑compliance or delays.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for RERA Complaint",
        content:
          "● RERA project registration certificate and number  \n● Completed Form A complaint form  \n● Proof of payments and agreements  \n● Any correspondence or notices served to the builder  \n● Supporting evidence of delay, defects, or violations  \n● ID and address proof of the complainant",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to File a Complaint Under RERA",
        content:
          "1. Visit your state’s official RERA portal and select Complaint Registration.  \n2. Fill in Form A with required personal and project details.  \n3. Attach supporting documents and pay the prescribed fee online.  \n4. Submit the complaint and note the tracking number.  \n5. Dostatup assists in drafting, reviewing, and submitting to ensure accuracy and completeness.",
      },
    ],
    feesStructure: [
      {
        heading: "RERA Complaint Filing Fees",
        description:
          "Nominal fee as prescribed by each state RERA authority, payable online at submission.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for RERA Complaint Resolution",
        description: "Typical milestones:",
        steps: [
          {
            title: "Complaint Acknowledgment",
            duration: "1–3 days",
            description:
              "RERA assigns complaint number and acknowledges receipt.",
          },
          {
            title: "Preliminary Hearing",
            duration: "30 days",
            description:
              "RERA conducts initial hearing and issues interim orders if needed.",
          },
          {
            title: "Final Adjudication",
            duration: "60–90 days",
            description:
              "RERA issues final orders or directions to the developer.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostatup for RERA Complaints",
        description: [
          "Expert guidance on RERA Act compliance and state‑specific procedures.",
          "Accurate drafting of Form A and supporting documents.",
          "End‑to‑end assistance from complaint registration to resolution or appeal.",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who can file a complaint under RERA?",
        answer:
          "Any homebuyer, allottee, promoter, or real estate agent can file under Section 31 using Form A.",
      },
      {
        question: "Is RERA registration mandatory for projects?",
        answer:
          "Yes. All residential and commercial projects exceeding 500 sqm or eight apartments must register before launch.",
      },
      {
        question: "What if a project is unregistered?",
        answer:
          "Buyers can file consumer court or criminal complaints or approach High Court for refunds or compensation.",
      },
      {
        question: "How long does RERA take to resolve a complaint?",
        answer:
          "Typically preliminary orders in 30 days and final adjudication within 60–90 days.",
      },
      {
        question: "Can I appeal a RERA order?",
        answer:
          "Yes. Approach the RERA Appellate Tribunal within 60 days of the original order.",
      },
      {
        question: "What compensation can RERA award?",
        answer:
          "Direct builders to refund payments, pay interest, or compensate for delays and defects.",
      },
      {
        question: "What fees are payable for filing?",
        answer:
          "A nominal fee as per state RERA regulations, paid online during submission.",
      },
      {
        question: "What happens if a builder ignores RERA orders?",
        answer:
          "Non‑compliance is an offense under Section 64, punishable with up to three years’ imprisonment or a fine up to 10% of project cost.",
      },
      {
        question: "Does RERA apply across India?",
        answer:
          "Yes. Central Act is implemented through state‑level authorities; each state may set specific rules.",
      },
      {
        question: "How can Dostatup help with unregistered projects?",
        answer:
          "We advise on alternative remedies such as consumer court, criminal complaints, or High Court petitions.",
      },
    ],
  },

  "cheque-bounce-notice": {
    title: "Cheque Bounce Notice",
    description:
      "Learn about the legal process and remedies available under Section 138 of the Negotiable Instruments Act for cheque dishonour.",
    overview: [
      {
        heading: "Cheque Bounce Notice – An Overview",
        content:
          "A cheque bounce notice is a formal legal document issued by the payee when a cheque is dishonoured by the bank due to reasons like insufficient funds, signature mismatch, or account closure. Governed under Section 138 of the Negotiable Instruments Act, 1881, the notice must be issued within 30 days of receiving the Cheque Return Memo from the bank.",
      },
      {
        heading: "Legal Timeline under Section 138",
        content:
          "1. Notice Period: Send the notice within 30 days of cheque dishonour.\n2. Payment Deadline: Drawer must pay within 15 days of receiving the notice.\n3. Filing Complaint: If unpaid, file a criminal complaint within 30 days of expiry of the 15-day period.",
      },
      {
        heading: "Purpose and Consequences",
        content:
          "The notice serves as a final opportunity for the drawer to settle the amount before legal proceedings. Consequences include:\n● Fine up to twice the cheque amount\n● Imprisonment up to 2 years\n● Or both",
      },
    ],
    benefits: [
      {
        heading: "Why Issue a Cheque Bounce Notice",
        content:
          "Issuing a legally compliant notice ensures the payee can take proper legal action and improves chances of recovering the amount. It also protects the payee's legal rights and serves as evidence in court.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to File a Complaint",
        content:
          "● Copy of the legal notice sent to the drawer\n● Proof of delivery (registered post/courier receipt)\n● Original dishonoured cheque\n● Cheque return memo from the bank\n● Supporting documents for the financial liability",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Cheque Bounce Case",
        content:
          "1. Send a legal notice within 30 days of cheque return.\n2. Include cheque number, bank details, amount, and dishonour reason.\n3. If unpaid after 15 days, file a criminal complaint within the next 30 days.\n4. File in a competent court having territorial and financial jurisdiction.\n5. Court may issue summons and hear defence.",
      },
      {
        heading: "Special Cases & Criminal Liability",
        content:
          "Under Sections 141 & 144 of the NI Act, company officers (e.g., directors, managers) may be held liable. For false claims (e.g., security cheques), the accused must prove non-liability.",
      },
    ],
    feesStructure: [
      {
        heading: "Fees for Filing a Cheque Bounce Case",
        description:
          "The legal fee depends on the case complexity, location, and lawyer’s experience.",
        feeTable: [
          {
            category: "Minimum professional fee",
            amount: "₹5,000",
          },
          {
            category: "May vary based on case",
            amount: "₹5,000+",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline and Validity",
        description:
          "The cheque bounce case must be filed on time for legal validity.",
        steps: [
          {
            title: "Notice Period",
            duration: "Within 30 days of dishonour",
            description: "Send legal notice to the drawer",
          },
          {
            title: "Payment Deadline",
            duration: "15 days from notice receipt",
            description: "Drawer must make payment within this period",
          },
          {
            title: "Complaint Filing",
            duration: "Next 30 days after payment deadline",
            description: "File complaint under Section 138",
          },
          {
            title: "Case Duration",
            duration: "6 months to 2 years",
            description: "Varies based on court backlog and cooperation",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "We help draft legally compliant cheque bounce notices",
          "Experienced legal experts for end-to-end case handling",
        ],
        points: [
          "Fast turnaround within 1 hour",
          "Transparent pricing",
          "Expert legal team",
        ],
      },
    ],
    faq: [
      {
        question: "What is a cheque under Indian law?",
        answer:
          "A cheque is a negotiable instrument under Section 6 of the Negotiable Instruments Act, 1881, payable on demand and instructs a bank to pay a specified sum.",
      },
      {
        question: "What are the reasons for cheque bounce?",
        answer:
          "Common reasons include insufficient funds, signature mismatch, expired cheque, overwriting, or closed accounts.",
      },
      {
        question: "Who sends the cheque bounce notice?",
        answer:
          "The payee (recipient of the cheque) sends the notice under Section 138 of the NI Act.",
      },
      {
        question: "Can the payee re-submit the cheque?",
        answer:
          "Yes, the cheque may be re-presented once if the payee chooses to.",
      },
      {
        question: "Can someone be arrested for cheque bounce?",
        answer:
          "Yes. It is a bailable criminal offence. Courts may issue arrest warrants depending on the case.",
      },
      {
        question: "What if the cheque was for security and not payment?",
        answer:
          "The drawer must prove the cheque was not issued to discharge a debt or liability to avoid conviction.",
      },
      {
        question: "What are the types of cheques in India?",
        answer:
          "Bearer cheque, crossed cheque, order cheque, post-dated cheque, open cheque, traveller’s cheque, stale cheque, self-cheque.",
      },
    ],
  },

  "consumer-complaint": {
    title: "Consumer Complaint in India",
    description:
      "Learn how to file a consumer complaint and protect your rights under the Consumer Protection Act.",
    overview: [
      {
        heading: "What is a Consumer Complaint?",
        content:
          "A Consumer Complaint is a formal grievance filed against a seller or service provider who has supplied defective products or delivered deficient services. If the issue remains unresolved after issuing a legal notice, the complaint can be filed with the Consumer Court (Forum) to seek compensation or redressal.",
      },
      {
        heading: "Who is a Consumer?",
        content:
          "As per the Consumer Protection Act, a consumer includes:\n● Any person who buys goods or avails services for personal use (not for resale or commercial purposes)\n● Legal heir or relative of a consumer\n● Registered voluntary organization\n● Group of consumers with a common interest\n● Legal guardian (in the case of a minor)",
      },
      {
        heading: "Consumer Rights under the Consumer Protection Act",
        content:
          "● Right to Safety – Protection against hazardous goods/services\n● Right to be Informed – Full disclosure of product/service details\n● Right to Choose – Access to variety and freedom of choice\n● Right to be Heard – Grievances must be heard and considered\n● Right to Seek Redressal – Fair settlement and compensation\n● Right to Consumer Education – Awareness about rights\n● Right Against Unfair Trade Practices – Protection from deceptive practices",
      },
    ],
    benefits: [
      {
        heading: "Remedies Offered by Consumer Courts",
        content:
          "● Full refund of the product/service cost\n● Replacement or repair of the product\n● Compensation for loss or mental agony\n● Discontinuation of unfair trade practices\n● Reimbursement of legal costs",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to File a Consumer Complaint",
        content:
          "● Written complaint with index\n● Vakalatnama (if represented by someone else)\n● Application for delay condonation (if applicable)\n● Copies of bills, receipts, communications, etc.\n● Copy of the legal notice sent to the seller/service provider\n● Copies of the complaint (usually 5, plus one per opposite party)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to File a Consumer Complaint (Offline & Online)",
        content:
          "● Send a legal notice informing the seller of the grievance and desired relief\n● Wait 15 days for a response\n● Choose the appropriate consumer forum based on claim amount\n● File a formal written complaint with relevant facts and relief sought\n● Pay the court fee based on the claim value",
      },
      {
        heading: "How to File a Consumer Complaint Online?",
        content:
          "● Visit https://consumerhelpline.gov.in\n● Register as a new user\n● Login and click on 'File Complaint'\n● Fill in the complaint form with all necessary details\n● Upload supporting documents and submit",
      },
    ],
    feesStructure: [
      {
        heading: "Court Fees for Filing a Consumer Complaint",
        description:
          "A court fee must be paid when submitting a consumer complaint. The exact amount depends on the value of the claim. If the case is ruled in your favor, the seller may be ordered to reimburse the legal expenses.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Typical Timeline for Resolving a Consumer Complaint",
        description:
          "Consumer complaints are usually resolved within 8 to 18 months, depending on complexity and cooperation by parties.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Your Consumer Complaint?",
        description: [
          "We simplify the consumer complaint process with expert support.",
        ],
        points: [
          "Professional legal drafting of notices and complaints",
          "Expert representation and filing assistance",
          "Timely updates and process guidance",
        ],
      },
    ],
    faq: [
      {
        question: "Who is a Consumer?",
        answer:
          "A consumer is someone who buys goods or avails services for personal use and not for resale or commercial purposes.",
      },
      {
        question: "What is a Consumer Complaint?",
        answer:
          "It is a formal grievance filed against a seller or service provider for defective goods or poor services, submitted to the consumer forum.",
      },
      {
        question: "What Rights Are Provided to Consumers?",
        answer:
          "Consumers are entitled to safety, information, choice, redressal, education, and protection against unfair trade practices.",
      },
      {
        question: "What is the Right to Be Heard?",
        answer:
          "Consumers can voice their concerns and seek redressal through consumer forums when rights are violated.",
      },
      {
        question: "What Documents Are Required to File a Consumer Complaint?",
        answer:
          "Required documents include complaint copies, legal notice, proof of delivery, bills, receipts, and any communication with the seller.",
      },
      {
        question: "Which Forum Should a Consumer Approach?",
        answer:
          "It depends on the value of goods/services and compensation claimed—District, State, or National Commission.",
      },
      {
        question: "Is There a Court Fee for Filing a Consumer Complaint?",
        answer:
          "Yes, court fees vary based on the claim amount and can be reimbursed if the case is won.",
      },
      {
        question: "Do I Need a Lawyer to File a Consumer Complaint?",
        answer:
          "You can file on your own, but legal assistance ensures accuracy and effectiveness.",
      },
      {
        question: "What is Territorial Jurisdiction?",
        answer:
          "The case should be filed in a forum where the transaction occurred or where the seller conducts business.",
      },
      {
        question: "How Long Does It Take to Resolve a Consumer Complaint?",
        answer:
          "Most cases are resolved within 8 to 18 months, but complex disputes may take longer.",
      },
    ],
  },

  "public-interest-litigation": {
    title: "Public Interest Litigation (PIL)",
    description:
      "File a Public Interest Litigation in India with expert legal assistance.",
    overview: [
      {
        heading: "Public Interest Litigation – An Overview",
        content:
          "Public Interest Litigation (PIL) refers to legal action initiated in a court for the protection of public interest. Unlike conventional litigation, PIL can be filed by any public-spirited citizen or even taken up by courts suo motu. The main objective is to ensure access to justice for marginalized and underrepresented groups, by holding public authorities accountable and promoting social justice through judicial review.",
      },
      {
        heading: "Objectives of PIL",
        content:
          "● To ensure the implementation of legal obligations by the legislature and executive\n● To promote justice and welfare of common people\n● To protect group rights over individual grievances\n● To enable judicial review of public authority actions or omissions\n● To dilute the traditional locus standi rule\n● To bring legal and social reform through landmark rulings",
      },
      {
        heading: "Who Can File a PIL?",
        content:
          "● Any Indian citizen, NGO, or group of individuals\n● The issue must relate to public interest and not personal grievances\n● Courts can also take suo motu cognizance based on letters or media reports",
      },
      {
        heading: "Significance of PIL in India",
        content:
          "● Makes justice accessible to the underprivileged\n● Democratizes legal processes and ensures wider participation\n● Enables judicial oversight over institutions like prisons and mental homes\n● Promotes social justice and rule of law\n● Used in significant cases like entry of women in Sabarimala temple, ban on triple talaq, legalization of passive euthanasia, and decriminalization of homosexuality",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Filing a Public Interest Litigation",
        content:
          "● Enhances interpretation and application of laws\n● Promotes accountability of public authorities\n● Provides a legal voice to weaker sections\n● Raises awareness on social and environmental issues\n● Offers a low-cost legal remedy with minimal court fees",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to File a PIL",
        content:
          "● Identity proof and address verification of the petitioner\n● List of affected individuals and concerned officials\n● Photographic or written evidence supporting the issue\n● Any title deeds, notices, or resettlement policies (if applicable)\n● Statement detailing facts, dates, and grievance\n● Specific relief sought from the court",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Procedure to File a PIL",
        content:
          "● Research the issue to ensure it involves public interest\n● Gather all necessary evidence and documents\n● Consult a legal advisor or appoint an advocate\n● Draft the petition:\n  - Supreme Court: 5 sets\n  - High Court: 2 sets and serve advance copy to respondent\n● Petition must be addressed to the Chief Justice and name all parties\n● File the petition along with documents and service proof\n● Court may admit the petition, issue notices, or take suo motu cognizance",
      },
    ],
    feesStructure: [
      {
        heading: "Fees for Filing a Public Interest Litigation",
        description:
          "Court fees for PILs are nominal. A fee of ₹50 is payable for each respondent named in the petition. The main costs usually relate to legal documentation and representation if professional services are availed.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for PIL Filing and Resolution",
        description:
          "While there’s no fixed duration, PIL cases are typically resolved within a few months depending on the issue, court workload, and cooperation from parties involved.",
        steps: [
          {
            title: "Drafting and Filing",
            duration: "2-5 business days",
            description:
              "Involves collecting evidence, drafting the petition, and submitting it to the relevant court.",
          },
          {
            title: "Court Admission and Hearing",
            duration: "Varies",
            description:
              "Once admitted, hearings and rulings depend on urgency, facts, and judicial discretion.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Us for Filing Your PIL?",
        description: [
          "We offer end-to-end legal support and strategic advisory.",
        ],
        points: [
          "Legal drafting by PIL experts",
          "Submission within 2 working days",
          "Ongoing updates and tracking",
          "Cost-effective and timely services",
        ],
      },
    ],
    faq: [
      {
        question: "What does PIL stand for?",
        answer:
          "PIL stands for Public Interest Litigation, which allows any individual or group to seek legal remedies in the interest of the public.",
      },
      {
        question: "Who has the authority to issue PIL?",
        answer:
          "PILs can be filed in the Supreme Court under Article 32 or in the High Courts under Article 226. Courts can also act on their own based on letters or media reports.",
      },
      {
        question: "When can Public Interest Litigation be filed?",
        answer:
          "PIL can be filed in cases involving violation of fundamental rights, environmental concerns, non-performance by public authorities, or social injustice.",
      },
      {
        question: "What is the fee for filing a PIL?",
        answer:
          "A nominal court fee of ₹50 per respondent is required. Legal service fees may apply if you hire a lawyer.",
      },
      {
        question: "Do I need a lawyer to file a PIL?",
        answer:
          "While you can file a PIL independently, consulting an advocate ensures better compliance and effectiveness.",
      },
      {
        question: "What are some landmark PIL cases in India?",
        answer:
          "Hussainara Khatoon v. State of Bihar (1979) leading to release of undertrial prisoners, and PILs on triple talaq, Sabarimala entry, and environmental pollution are examples.",
      },
      {
        question: "What articles of the Constitution allow filing PIL?",
        answer:
          "Article 32 (Supreme Court) and Article 226 (High Court) empower citizens to file PILs.",
      },
      {
        question: "Can PIL be filed for personal grievances?",
        answer:
          "No, PILs must relate to issues affecting the larger public and not just individual disputes.",
      },
    ],
  },

  "caveat-petition": {
    title: "Caveat Petition",
    description:
      "File a Caveat Petition to safeguard your legal interests with DoStartup’s expert support.",
    overview: [
      {
        heading: "Caveat Petition – An Overview",
        content:
          "A Caveat Petition is a legal mechanism that allows individuals to request the court to notify them before any action is taken against them. Derived from the Latin word 'caveat' meaning 'let a person beware', this petition is typically filed in civil and probate matters. It was introduced into Indian law under Section 148A of the Civil Procedure Code, 1908, following the 1976 amendment. Filing a caveat ensures that no ex-parte orders are passed without giving the caveator an opportunity to be heard.",
      },
      {
        heading: "What is a Caveat Petition?",
        content:
          "A Caveat Petition is a preemptive legal application filed by someone who suspects that legal proceedings may be initiated against them in a civil matter. It acts as a safeguard by ensuring that the court informs the caveator before passing any interim or ex-parte orders. In the landmark case of Nirmal Chand v. Girindra Narayan, the court clarified that a caveat serves as a legal alert, giving the petitioner the right to be heard in anticipated legal proceedings.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Filing a Caveat Petition",
        content:
          "● Allows time to appoint a lawyer and prepare for the case\n● Prevents courts from passing ex-parte orders\n● Ensures regular updates and legal notifications\n● Helps reduce unnecessary legal disputes and saves costs\n● Makes interim orders unenforceable if passed without informing the caveator",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to File a Caveat Petition",
        content:
          "● Name of the court appealed from\n● Case number and cause title\n● Properly drafted vakalatnama and memo of appearance\n● Details of the impugned judgment or order\n● Proof of service to the opposite party\n● Applicable court fee\n● Authorization letter from advocate",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Procedure for Filing a Caveat Petition",
        content:
          "● Engage a lawyer to draft the caveat petition\n● Sign the petition and the supporting affidavit\n● Attach the impugned order if available\n● Submit vakalatnama and authorization letter\n● Provide proof of service to the opposing party\n● Attach all relevant supporting documents\n● Ensure affidavit is notarized\n● Check for format and detail compliance",
      },
    ],
    feesStructure: [
      {
        heading: "Caveat Petition Charges",
        description:
          "The charges may vary based on the complexity and jurisdiction of the case. Standard caveat filing charges usually start from ₹10,000. Additional charges may apply for legal drafting, renewals, or court representation.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Validity of a Caveat Petition",
        description:
          "A Caveat Petition is valid for 90 days from the date of filing. If the opposing party does not approach the court within this period, a fresh caveat must be filed for continued protection.",
        steps: [
          {
            title: "Initial Filing",
            duration: "1-2 business days",
            description:
              "Drafting, notarizing, and filing the petition in the appropriate court.",
          },
          {
            title: "Renewal (if needed)",
            duration: "Post 90 days",
            description:
              "File a new petition if the initial caveat expires without any opposing legal action.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Filing Caveat Petition?",
        description: [
          "We simplify your legal journey with efficient, reliable, and expert legal assistance.",
        ],
        points: [
          "Expert network of civil law advocates",
          "Successfully handled 1000+ caveat filings",
          "Personalized legal strategies and support",
          "Fast and accurate petition drafting",
          "Complete end-to-end legal guidance",
          "High-quality compliance and service standards",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Caveat?",
        answer:
          "A caveat is a Latin term meaning 'let a person beware'. It is a legal notice to prevent actions without informing the person who filed it.",
      },
      {
        question: "What is a Caveat Petition?",
        answer:
          "It is a legal application filed by someone who anticipates legal action against them and wants to be heard before any order is passed.",
      },
      {
        question: "Do I Need a Lawyer to File a Caveat Petition?",
        answer:
          "Yes, it is advisable to consult a qualified lawyer to ensure the petition is drafted and filed correctly.",
      },
      {
        question: "Where Can a Caveat Petition Be Filed?",
        answer:
          "It can be filed in the Supreme Court, High Courts, Appellate Courts, or Civil Courts with original jurisdiction depending on the expected case.",
      },
      {
        question: "When Must a Caveat Petition Be Renewed?",
        answer:
          "It must be renewed after 90 days if no case has been filed by the opposite party during that period.",
      },
      {
        question: "Who is a Caveator?",
        answer:
          "A caveator is the individual filing the caveat petition to protect their legal interest and receive notice before any order is passed.",
      },
      {
        question: "Can a Caveat Petition Be Cancelled?",
        answer:
          "Yes, it can be withdrawn or cancelled by filing a cancellation application in the court.",
      },
      {
        question: "Which Law Governs Caveat Petition Notices?",
        answer:
          "Section 148A(3) of the Civil Procedure Code, 1908, governs the notice requirement in caveat petitions.",
      },
      {
        question: "How to Draft a Caveat Petition?",
        answer:
          "The petition should include the caveator’s details, subject matter, relief sought, and supporting documents as per court format.",
      },
      {
        question: "Who is a Caveatee?",
        answer:
          "The caveatee is the person or party against whom the caveat is filed, typically the one expected to initiate legal action.",
      },
      {
        question: "Can a Caveat Be Filed in Criminal Cases?",
        answer:
          "No, caveats are only applicable in civil proceedings under the Civil Procedure Code, not in criminal matters.",
      },
      {
        question: "What is the Purpose of a Caveat Petition?",
        answer:
          "Its purpose is to ensure the caveator is heard before any ex-parte relief or interim order is passed by the court.",
      },
    ],
  },

  "section-8-demand-notice": {
    title: "Section 8 Demand Notice under IBC",
    description:
      "Serve a demand notice to recover unpaid operational debt from a corporate debtor under Section 8 of the Insolvency and Bankruptcy Code, 2016.",
    overview: [
      {
        heading: "Overview of Section 8 Demand Notice",
        content:
          "Under the IBC, an operational creditor must issue a demand notice (Form 3) to a corporate debtor before initiating insolvency proceedings. The notice outlines the total unpaid amount, transaction details, due date and amount claimed. The debtor has 10 days to respond by paying or disputing the debt.",
      },
      {
        heading: "Key Provisions of Section 8",
        content:
          "Section 8 requires the debtor to respond within 10 days with proof of payment or evidence of an existing dispute, legal or arbitration proceedings begun before notice receipt. Failure to respond allows the creditor to file for insolvency resolution under Form 5 before the NCLT.",
      },
    ],
    benefits: [
      {
        heading: "Why Issue a Section 8 Demand Notice",
        content:
          "● Provides the debtor a fair opportunity to clear dues without insolvency\n● Ensures compliance with IBC requirements\n● Preserves operational relationship before formal proceedings\n● Establishes clear record of demand for tribunal application",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Section 8 Demand Notice",
        content:
          "● Invoices relating to the unpaid operational debt\n● Form 3 demand notice draft\n● Details of operational creditor and corporate debtor\n● Proof of default from information utilities (if any)\n● Any security or contract documents supporting the claim\n● Certificate of incorporation of the debtor",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Serve Section 8 Demand Notice",
        content:
          "● Draft Form 3 notice with total unpaid amount, transaction details, due date and amount claimed\n● Attach relevant invoices and proof of debt\n● Serve the notice on the corporate debtor by hand or registered post\n● Debtor must respond within 10 days by payment or disputing the claim\n● If no response or dispute, file insolvency application (Form 5) before NCLT",
      },
    ],
    feesStructure: [
      {
        heading: "Fees for Demand Notice and Insolvency Application",
        description:
          "Filing fee for Form 3 is nominal. Tribunal application (Form 5) fee varies with authorized share capital or debt amount.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline under Section 8",
        description:
          "Key timeframes for notice and subsequent insolvency proceedings:",
        steps: [
          {
            title: "Notice Period",
            duration: "10 days",
            description: "Debtor must respond to demand notice",
          },
          {
            title: "Tribunal Application",
            duration: "Immediately after 10-day period",
            description: "File Form 5 with NCLT if no response or dispute",
          },
          {
            title: "NCLT Decision",
            duration: "14 days",
            description: "NCLT admits or rejects insolvency application",
          },
          {
            title: "Resolution Process",
            duration: "180 days (extendable)",
            description: "Insolvency resolution to be completed",
          },
          {
            title: "Appeal Timeline",
            duration: "30 days",
            description: "File appeal before NCLAT",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Section 8 Notices",
        description: [
          "Expert drafting of Form 3 demand notices",
          "Compliant service to corporate debtors",
          "End-to-end support through insolvency application",
        ],
        points: [
          "Legal expertise in IBC processes",
          "Fast turnaround on notice preparation",
          "Guidance through NCLT procedures",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Section 8 demand notice?",
        answer:
          "A formal notice served by an operational creditor under Form 3 of the IBC demanding payment of unpaid operational debt.",
      },
      {
        question: "How long does the debtor have to respond?",
        answer:
          "The corporate debtor has 10 days from notice receipt to pay the debt or dispute it with proper documentation.",
      },
      {
        question: "What happens if there is no response?",
        answer:
          "The creditor can file an insolvency application (Form 5) before the NCLT immediately after the 10-day period.",
      },
      {
        question: "Who is an operational creditor?",
        answer:
          "Anyone to whom an operational debt is owed, including suppliers, service providers, employees or tax authorities, as defined under Section 5(20) of the IBC.",
      },
      {
        question: "What must be included in the demand notice?",
        answer:
          "Total unpaid amount, transaction details, due date, amount claimed, and relevant invoices supporting the debt.",
      },
      {
        question: "When must the insolvency process complete?",
        answer:
          "The corporate insolvency resolution process must be completed within 180 days of NCLT admission, subject to one extension.",
      },
      {
        question: "Can the debtor appeal an NCLT decision?",
        answer:
          "Yes, appeals can be filed before the NCLAT within 30 days of the decision.",
      },
    ],
  },

  "succession-certificate": {
    title: "Succession Certificate",
    description:
      "Obtain a succession certificate to claim and manage the assets, liabilities, debts, and securities of a deceased person who died without leaving a will.",
    overview: [
      {
        heading: "Overview of Succession Certificate",
        content:
          "A succession certificate is a legal document issued by a civil court judge to the rightful successors of a person who died intestate (without a will). It authorizes heirs to claim the deceased’s assets, liabilities, recover debts, and transfer securities.",
      },
      {
        heading: "Intestate Succession Process",
        content:
          "The court where the deceased last resided or held property conducts an inquiry to verify the claimant’s status. After publishing a public notice for objections and holding a hearing, the judge issues the certificate detailing the deceased, legal heirs, and all assets and liabilities.",
      },
    ],
    benefits: [
      {
        heading: "Eligibility and Key Details",
        content:
          "Eligible applicants include the spouse, children, siblings, and other legal heirs recognized under personal succession laws. The petition must state date/time of death, last residence, names and addresses of all heirs, applicant’s inheritance right, declaration of no objections, and a list of debts and securities.",
      },
      {
        heading: "Difference from Legal Heir Certificate",
        content:
          "Unlike a legal heir certificate (issued by a Tehsildar for pension or family claims), a succession certificate (issued by a District Judge) empowers heirs to manage financial assets, debts, and securities of the deceased.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Succession Certificate",
        content:
          "● Affidavit of self‑declaration by applicant\n● Identity proof and address proof of applicant and all heirs\n● Date of birth proof of heirs\n● Death certificate of the deceased (and any deceased heir)\n● Proof of deceased’s last residence\n● Copies of title deeds or property documents\n● Details of all debts, securities, and liabilities",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Obtain Succession Certificate",
        content:
          "● Draft and file a petition before the District Judge, paying court fees as per estate value\n● Court issues a public notice in a local newspaper inviting objections\n● After the objection period, court holds a final hearing to verify heirs and assets\n● Judge grants the certificate; applicant may be required to submit a bond with sureties\n● Certificate is typed, attested, and handed over to the successful applicant",
      },
    ],
    feesStructure: [
      {
        heading: "Cost of Succession Certificate",
        description:
          "Court fee is calculated as a percentage of the estate’s value under the Court Fees Act, 1870 and paid via judicial stamp papers. Professional fees may apply if legal assistance is engaged.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Validity and Revocation",
        description:
          "The certificate is valid throughout India. Under Section 383 of the Indian Succession Act, it can be revoked for procedural defects, fraud, changed circumstances, or by a court order. Appeals lie to the High Court.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Succession Certificates",
        description: [
          "Comprehensive support in drafting petitions and compiling documents",
          "Handling public notices, hearings, and bond formalities",
        ],
        points: [
          "Expertise in personal succession and court procedures",
          "Timely filings and representation in court",
          "Transparent process tracking and updates",
        ],
      },
    ],
    faq: [
      {
        question: "What is a succession certificate?",
        answer:
          "A legal document issued by a District Judge that authorizes heirs of an intestate to claim the deceased’s assets, debts, and securities.",
      },
      {
        question: "How does it differ from probate?",
        answer:
          "Probate validates a will as the deceased’s last testament, whereas a succession certificate applies when no will exists.",
      },
      {
        question: "Who can apply for it?",
        answer:
          "The spouse, children, siblings, or other legal heirs of the deceased recognized under succession laws.",
      },
      {
        question: "What details must the petition contain?",
        answer:
          "Date/time of death, last residence, names and addresses of heirs, applicant’s inheritance right, declaration of no objections, and list of assets/debts.",
      },
      {
        question: "Can anyone object to its issuance?",
        answer:
          "Yes; the court publishes a public notice allowing any interested party to file objections within the prescribed period.",
      },
      {
        question: "What documents are required?",
        answer:
          "Affidavit, ID and address proofs, death certificates, residence proof, title deeds, and details of debts and securities.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Court fee is a percentage of estate value under the Court Fees Act, 1870, payable via stamp papers; legal fees vary by advisor.",
      },
      {
        question: "What is the validity?",
        answer:
          "Valid across India unless revoked by a competent court under Section 383.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Typically 4–6 months, depending on publication, objection period, and court schedule.",
      },
      {
        question: "Can it be revoked?",
        answer:
          "Yes; on grounds of fraud, procedural defect, changed circumstances, or court order under Section 383.",
      },
      {
        question: "Who issues the certificate?",
        answer:
          "The District Judge of the jurisdiction where the deceased last resided or owned property.",
      },
      {
        question: "Why is it necessary?",
        answer:
          "It grants legal authority to heirs for recovering debts, transferring securities, and managing financial assets of an intestate.",
      },
    ],
  },

  "lease-agreement-drafting": {
    title: "Lease Agreement Drafting",
    description:
      "Draft a comprehensive lease agreement under the Transfer of Property Act, 1882, outlining rights and obligations of lessor and lessee.",
    overview: [
      {
        heading: "Legal Framework",
        content:
          "Leases are governed by Section 105 and Chapter 5 of the Transfer of Property Act, 1882. A lease grants the lessee the right to use immovable or movable property for a defined period in exchange for rent.",
      },
      {
        heading: "Key Parties and Nature of Lease",
        content:
          "Lessor: Owner or controller of the property.  \nLessee: Person who acquires the right to use the property.  \nThe lease conveys usage rights without transferring ownership. Lessee may maintain or alter property with permission and must keep it in good condition.",
      },
    ],
    benefits: [
      {
        heading: "Common Terms in Lease Agreements",
        content:
          "● Duration: Fixed or indefinite lease period  \n● Rent: Agreed monetary consideration  \n● Deposits: Security amount refundable after lease ends  \n● Use Terms: Conditions on permissible use  \n● Utilities: Charges for extra services  \n● Insurance: Protection for property  \n● Repairs & Maintenance: Responsibilities of lessor or lessee",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Contents of a Lease Agreement",
        content:
          "● Names and details of lessor and lessee (and agents)  \n● Detailed description of the property  \n● Lease term and duration  \n● Rent amount, payment schedule, late fees, and grace period  \n● Payment method  \n● Conditions and charges for early termination  \n● Security deposit and refund terms  \n● Utility charges and usage terms  \n● Additional facilities (e.g., parking, laundry)  \n● Rules for maintaining peace and penalties for breaches",
      },
    ],
    registrationProcedure: [
      {
        heading: "Stages of Lease Deed Execution",
        content:
          "● Negotiation of rent, duration, insurance, and terms  \n● Draft Memorandum of Understanding outlining rights and duties  \n● Title investigation and due diligence to verify ownership  \n● Draft lease deed and pay state‑specific stamp duty  \n● Execute lease deed with witnesses and register at Sub‑Registrar office  \n● Post‑registration notification for licenses and possession",
      },
    ],
    feesStructure: [
      {
        heading: "Stamp Duty and Registration Fees",
        description:
          "Stamp duty rates vary by state under the Stamp Act. Registration fees apply for leases over one year under the Registration Act and differ by district.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Post‑Registration Compliance",
        description:
          "After registration, notify relevant authorities of lessee’s possession to obtain any required licenses or permissions within 30 days.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Lease Agreements",
        description: [
          "Expert drafting under the Transfer of Property Act, 1882",
          "State‑wise stamp duty and registration guidance",
        ],
        points: [
          "Customized lease terms to suit commercial or residential needs",
          "End‑to‑end support from negotiation through registration",
          "Transparent process tracking and timely updates",
        ],
      },
    ],
    faq: [
      {
        question: "Who are the parties involved in a lease agreement?",
        answer:
          "Lessor (property owner) and lessee (tenant) are the primary parties.",
      },
      {
        question: "What are the key elements of a lease agreement?",
        answer:
          "Lease duration, rent amount, property description, identities of lessor and lessee, and terms of use.",
      },
      {
        question: "Is stamp duty mandatory for a lease agreement?",
        answer:
          "Yes. Stamp duty varies by state and is mandatory under the Stamp Act.",
      },
      {
        question: "When must a lease be registered?",
        answer:
          "Leases exceeding one year must be registered under the Registration Act to be legally valid.",
      },
      {
        question: "Can the lessor ask for a security deposit?",
        answer:
          "Yes. The lessor may require a security deposit refundable at lease end.",
      },
      {
        question: "What should not be included in a lease agreement?",
        answer:
          "Clauses waiving the lessee’s statutory rights or remedies should be avoided.",
      },
      {
        question: "How are disputes under a lease resolved?",
        answer:
          "Disputes are typically resolved via arbitration or in court as per the agreement.",
      },
      {
        question: "What is the difference between rent and lease?",
        answer:
          "A lease usually covers a longer term, while a rent agreement typically covers shorter periods.",
      },
    ],
  },

  "will-drafting": {
    title: "Will Drafting",
    description:
      "Draft a clear and legally valid will to ensure your assets are distributed according to your wishes.",
    overview: [
      {
        heading: "Overview of Will",
        content:
          "A will is a legal declaration by the testator specifying how personal assets and properties should be distributed after death. It prevents disputes among heirs and ensures harmony by following the testator’s instructions exactly.",
      },
      {
        heading: "Parties to a Will",
        content:
          "Testator: Person who makes the will.  \nBeneficiaries: Named individuals to receive assets.  \nExecutor: Appointed to carry out the will’s instructions.  \nTrustee: Manages the estate for beneficiaries.  \nLegal Guardian: Manages the shares of minor beneficiaries.",
      },
    ],
    benefits: [
      {
        heading: "Types and Essentials of a Will",
        content:
          "Privileged Will: For armed forces in active duty, with fewer formalities.  \nUnprivileged Will: All other wills requiring strict formalities.  \nEssentials: Must be a voluntary declaration, effective after death, revocable during lifetime, and specify distribution clearly.",
      },
      {
        heading: "Assets Covered",
        content:
          "Movable and immovable assets such as real estate, bank and fixed deposits, bonds, securities, jewelry, intellectual property, art collections, insurance policies, and retirement benefits.",
      },
    ],
    documentsRequired: [
      {
        heading: "Details & Documents for Will Drafting",
        content:
          "Identification details of testator (name, address, age, date of will).  \nDeclaration of sound mind and voluntariness.  \nNames, addresses, ages, relationships of beneficiaries.  \nExecutor, trustee, guardian details.  \nComprehensive list of all assets and their allotment.  \nTestator’s signature and date with two witness signatures.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Will Execution",
        content:
          "Draft the will meeting all essentials.  \nHave two witnesses observe and sign it.  \nOptionally register the will and have it stamped to enhance authenticity.  \nFor execution, file for probate by petitioning the court with a copy of the will and property details.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Revocation and Updates",
        description:
          "A will can be revoked by destroying it, creating a new will, or by marriage. Updates require drafting a fresh will, which automatically cancels prior versions.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Will Drafting",
        description: [
          "Expert drafting compliant with Indian Succession Act, 1925 and related laws",
          "Guidance on execution, registration, and probate process",
        ],
        points: [
          "Customized will templates",
          "Secure handling of sensitive information",
          "Ongoing support for updates and probate filings",
        ],
      },
    ],
    faq: [
      {
        question: "Why is a will necessary?",
        answer:
          "It ensures that your assets are distributed according to your wishes and prevents disputes among heirs.",
      },
      {
        question: "Who is the executor of a will?",
        answer:
          "The executor is the person appointed by the testator to carry out the instructions in the will and oversee the distribution of assets.",
      },
      {
        question: "What happens if no executor is appointed?",
        answer:
          "If no executor is appointed, the court will assign an administrator to manage the estate and distribute assets.",
      },
      {
        question: "If I die without making a will, who inherits my assets?",
        answer:
          "Your assets will be distributed according to intestate succession laws under personal succession or the Indian Succession Act, 1925.",
      },
      {
        question: "What are the essential elements of a valid will?",
        answer:
          "It must be in writing, made voluntarily by a testator of legal age and sound mind, signed by two witnesses, and clearly state asset distribution.",
      },
      {
        question: "When is the ideal time to make a will?",
        answer:
          "Any time after age 18; it’s especially recommended after major life events like marriage or having children.",
      },
      {
        question: "What are common mistakes to avoid when drafting a will?",
        answer:
          "Inaccurate asset descriptions, not revoking prior wills, omitting updates after asset changes, and failing to appoint guardians for minors.",
      },
      {
        question: "Is it necessary to register a will?",
        answer:
          "No, registration is optional. However, a registered will can ease the probate process and strengthen authenticity.",
      },
      {
        question: "Can a will be changed after registration?",
        answer:
          "Yes. The testator can modify the will by drafting a new one, which automatically cancels previous wills.",
      },
      {
        question: "What types of assets can be included in a will?",
        answer:
          "Both movable and immovable assets such as real estate, bank accounts, fixed deposits, bonds, insurance policies, art, and intellectual property.",
      },
      {
        question: "Who can act as a witness to a will?",
        answer:
          "Any person over 18 of sound mind who observes the testator signing. Ideally, witnesses should not be beneficiaries.",
      },
      {
        question: "Is a will valid if only one witness signs it?",
        answer:
          "No. At least two witnesses must sign for the will to be legally valid.",
      },
      {
        question: "Can a will be updated or changed?",
        answer:
          "Yes. A new will can be drafted at any time before death to update or change the previous document.",
      },
    ],
  },

  "mutual-divorce": {
    title: "Mutual Consent Divorce",
    description:
      "End your marriage amicably and efficiently with mutual consent divorce facilitated by DoStartup’s expert legal team.",
    overview: [
      {
        heading: "Overview of Mutual Consent Divorce",
        content:
          "Mutual consent divorce is a simpler, quicker, and more cost‑effective procedure in India where both spouses voluntarily agree to dissolve their marriage. With DoStartup’s guidance, you can prepare documents, comply with legal requirements, appear in court, and obtain your divorce decree with dignity and mutual respect.",
      },
    ],
    benefits: [
      {
        heading: "Advantages of Mutual Consent Divorce",
        content:
          "● Saves time, money, and emotional turmoil\n● Minimizes conflict by mutual agreement on alimony, child custody, and property division\n● Faster alternative to contested divorce\n● Allows both parties to end marriage amicably",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Mutual Divorce",
        content:
          "● Marriage certificate\n● Four marriage photographs\n● Address proof of both spouses\n● Income tax returns of earning spouse\n● Professional details of both parties\n● Information on movable and immovable property\n● Family background details\n● Proof of living separately for at least one year",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Mutual Consent Divorce",
        content:
          "● File joint petition in family court with agreements on custody, maintenance, and property\n● First court appearance with both parties and their lawyers\n● Court reviews petition, records statements under oath, and may attempt reconciliation\n● Court grants first motion and imposes 6‑month waiting period\n● After waiting period, file second motion if no reconciliation\n● Final court hearing; if consent remains mutual and free of coercion, court issues divorce decree",
      },
    ],
    feesStructure: [
      {
        heading: "Court Fees and Professional Charges",
        description:
          "Court fees vary by state and case value. DoStartup’s professional fees depend on complexity and include draft petitions, filings, and court appearances.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Mutual Divorce",
        description:
          "Key timeframes under the Hindu Marriage Act or Special Marriage Act:",
        steps: [
          {
            title: "Separation Period",
            duration: "1 year",
            description: "Mandatory period of living separately before filing",
          },
          {
            title: "First Motion",
            duration: "Day of filing",
            description: "Court records statements and grants first motion",
          },
          {
            title: "Cooling‑Off Period",
            duration: "6 months",
            description: "Statutory waiting period (waivable by court)",
          },
          {
            title: "Second Motion",
            duration: "Within 18 months of first motion",
            description: "File for second motion if no reconciliation",
          },
          {
            title: "Final Decree",
            duration: "Immediately after second motion",
            description: "Court issues divorce decree",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Mutual Divorce",
        description: [
          "End‑to‑end support from petition drafting to final decree",
          "Expert guidance on alimony, custody, and property settlement",
        ],
        points: [
          "Fast turnaround and streamlined process",
          "Personalized legal advice and representation",
          "Transparent pricing and regular updates",
        ],
      },
    ],
    faq: [
      {
        question: "What is mutual consent in a divorce?",
        answer:
          "Mutual consent divorce occurs when both spouses voluntarily agree to end their marriage without force or pressure.",
      },
      {
        question: "Where should a mutual divorce petition be filed?",
        answer:
          "In the family court with jurisdiction over the area where the couple last lived together or where the marriage was solemnized.",
      },
      {
        question: "How long does mutual divorce take?",
        answer:
          "Typically between 6 months to 2 years, depending on court schedules and whether the cooling‑off period is waived.",
      },
      {
        question: "Can either party withdraw the petition?",
        answer:
          "Yes, either spouse can withdraw consent during the 6‑month waiting period by applying to the court.",
      },
      {
        question: "Is court appearance mandatory?",
        answer:
          "Yes, both parties must appear in person for the first and second motions, unless exempted by the court for valid reasons.",
      },
      {
        question: "What if consent was obtained under coercion?",
        answer:
          "The court examines voluntariness; if coercion or undue influence is proven, the decree can be invalidated.",
      },
      {
        question: "Is the cooling‑off period mandatory?",
        answer:
          "Statutorily yes, but the family court may waive the 6‑month period if reconciliation is deemed impossible.",
      },
      {
        question: "How is alimony decided?",
        answer:
          "By mutual agreement based on factors like marriage duration, financial status, and earning capacity; it may be lump sum or monthly.",
      },
      {
        question: "Can I remarry before the decree?",
        answer:
          "No, remarriage before obtaining a valid divorce decree is illegal under Indian law.",
      },
      {
        question: "Which law governs mutual divorce?",
        answer:
          "Hindu Marriage Act Section 13B for Hindus, Special Marriage Act Section 28 for civil marriages, Parsi Marriage and Divorce Act Section 32B for Parsis, and respective personal laws for others.",
      },
    ],
  },

  "marriage-registration": {
    title: "Marriage Registration",
    description:
      "Officially register your marriage under the Hindu Marriage Act or Special Marriage Act with DoStartup’s expert assistance.",
    overview: [
      {
        heading: "Overview of Marriage Registration",
        content:
          "Marriage registration in India validates a secular union under the Hindu Marriage Act, 1955 (for Hindus) or the Special Marriage Act, 1954 (for others). Minimum ages are 18 for women and 21 for men. Registration can be completed online or offline.",
      },
      {
        heading: "Importance of a Marriage Certificate",
        content:
          "A marriage certificate is legal proof of marital status required for passports, property transactions, bank accounts, insurance claims, name changes, divorces, and more. It ensures equal rights and prevents child or fraudulent marriages.",
      },
    ],
    benefits: [
      {
        heading: "Primary Purpose and Benefits",
        content:
          "● Confirms legal status and equal spousal rights under law\n● Enforces minimum age requirements to prevent child marriage\n● Provides credible proof for official and financial purposes\n● Deters fraudulent or bigamous unions",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content:
          "● Marriage certificate or invitation card\n● Passport‑size photographs of spouses and witnesses\n● Proof of age (birth certificates or school records)\n● Proof of address for both spouses\n● Notarized affidavit of self‑declaration\n● Details and signatures of four witnesses",
      },
    ],
    registrationProcedure: [
      {
        heading: "Online Registration Procedure",
        content:
          "● Visit your state’s official marriage registration portal\n● Complete the online form with spouse and witness details\n● Submit electronically and note the appointment date\n● Appear at registrar’s office with originals and witnesses for verification\n● Receive marriage certificate after verification",
      },
      {
        heading: "Offline Registration under Hindu Marriage Act",
        content:
          "● Apply at Marriage Registrar or Tehsildar’s office within one month of marriage\n● Submit form, photographs, invitation card, ID & address proofs, affidavit\n● Both spouses and three witnesses sign in presence of registrar\n● Certificate issued upon verification",
      },
      {
        heading: "Offline Registration under Special Marriage Act",
        content:
          "● File notice with marriage officer of either spouse’s jurisdiction\n● Notice published for 30 days to invite objections\n● If no objections, solemnize marriage before officer with three witnesses\n● Present proofs of age, address, mental fitness, and non‑prohibited relationship\n● Marriage registered and certificate issued",
      },
    ],
    feesStructure: [
      {
        heading: "Fees for Registration",
        description:
          "Fees vary by state and act. Online portals list nominal registration fees. Offline fees depend on local stamp duty and form charges.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline and Validity",
        description:
          "● Hindu Act: Register within one month of marriage\n● Special Act: 30‑day notice period + solemnization\n● Certificate issuance within 15–30 days post‑verification",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Marriage Registration",
        description: [
          "Guidance on both Hindu and Special Marriage Acts",
          "End‑to‑end support for online and offline processes",
        ],
        points: [
          "Form preparation and filing assistance",
          "Document verification and appointment scheduling",
          "Transparent updates until certificate delivery",
        ],
      },
    ],
    faq: [
      {
        question: "What is Bigamy?",
        answer:
          "Bigamy is marrying again while a previous spouse is still alive without obtaining a legal divorce, which is illegal under Indian law.",
      },
      {
        question: "How many wives can a Muslim male legally have?",
        answer:
          "Under Muslim personal law, a Muslim man may have up to four wives simultaneously, provided he treats them equally.",
      },
      {
        question: "Why is marriage registration important?",
        answer:
          "It provides legal proof of marriage, protects rights, and is required for official and financial matters like passports, bank accounts, and property transactions.",
      },
      {
        question: "What are the consequences if a marriage is not registered?",
        answer:
          "Unregistered marriages may lead to legal disputes, lack of proof in court, and denial of benefits like spousal rights, inheritance, or government schemes.",
      },
      {
        question: "Is marriage registration compulsory?",
        answer:
          "Yes. Registration under the appropriate act is mandatory to ensure legal validity and enforceability.",
      },
      {
        question:
          "What is the objection period under the Special Marriage Act?",
        answer:
          "A 30‑day public notice is displayed to invite objections before solemnization can proceed.",
      },
      {
        question: "Where is the definition of a prohibited relationship found?",
        answer:
          "Prohibited relationships are defined under Section 3(g) of the Hindu Marriage Act, 1955.",
      },
      {
        question: "Can marriage be registered online?",
        answer:
          "Yes. Most states in India offer online marriage registration portals for convenience.",
      },
      {
        question:
          "What is the minimum legal age to solemnize a valid marriage?",
        answer:
          "The minimum age is 18 years for women and 21 years for men under Indian law.",
      },
      {
        question:
          "Under which law can a non‑Hindu get their marriage registered?",
        answer:
          "Non‑Hindus can register their marriage under the Special Marriage Act, 1954.",
      },
      {
        question: "Can an NRI register their marriage in India?",
        answer:
          "Yes. NRIs can register under the Special Marriage Act or their respective personal laws.",
      },
      {
        question: "How long does it take to receive a marriage certificate?",
        answer:
          "Typically 15–30 days after verification, depending on the state’s administrative process.",
      },
    ],
  },

  "divorce-notice": {
    title: "Divorce Notice",
    description:
      "Initiate divorce proceedings by serving a formal legal notice with DoStartup’s expert assistance.",
    overview: [
      {
        heading: "Overview of Divorce Notice",
        content:
          "In India’s diverse legal landscape, either spouse may send a legal notice expressing intent to initiate divorce proceedings. This formal warning allows for reconciliation efforts before filing a petition.",
      },
      {
        heading: "What is a Legal Notice for Divorce?",
        content:
          "A divorce notice is a formal communication by one spouse to the other, informing them of the sender’s intention to pursue divorce through legal channels and inviting a response or reconciliation.",
      },
    ],
    benefits: [
      {
        heading: "Purpose and Advantages",
        content:
          "● Provides a formal opportunity to resolve disputes amicably\n● Acts as legal proof of intent and timeline\n● Can lead to negotiated settlements on alimony, custody, and property\n● Often results in faster, less contentious divorce proceedings",
      },
    ],
    documentsRequired: [
      {
        heading: "Information Required to Draft Notice",
        content:
          "● Names and addresses of both spouses\n● Details of marital discord and grievances\n● Any prior reconciliation attempts\n● Specific demands (e.g., return home, alimony, custody)\n● Reasonable response timeframe (15–30 days)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Sending Divorce Notice",
        content:
          "● Engage a competent lawyer to draft the notice on official letterhead\n● Detail facts, issues, and valid grounds for divorce\n● Specify required actions and deadlines for response or reconciliation\n● Send via registered post, courier, or speed post and retain proof of delivery\n● Await reply; if none, proceed to file divorce petition, or negotiate if response received",
      },
      {
        heading: "Special Notice to Spouse to Return Home",
        content:
          "If a spouse abandons the matrimonial home without cause, send a notice under Section 9 of the Hindu Marriage Act to seek restitution of conjugal rights before filing a petition.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Divorce Notices",
        description: [
          "Expert drafting and precise legal notice preparation",
          "Secure delivery and proof of service management",
          "Guidance through subsequent divorce petition process",
        ],
        points: [
          "Rapid turnaround on notice drafting",
          "Experienced divorce law specialists",
          "End‑to‑end support from notice to petition filing",
        ],
      },
    ],
    faq: [
      {
        question: "What happens after a divorce notice is served?",
        answer:
          "The recipient should submit a written response within the specified period. If no reply, the sender may proceed to file a divorce petition.",
      },
      {
        question: "Can a notice ask a wife to return home?",
        answer:
          "Yes. Under Section 9 of the Hindu Marriage Act, a husband can send a notice seeking restitution of conjugal rights if the wife leaves without valid reason.",
      },
      {
        question: "What are common grounds for divorce?",
        answer:
          "Cruelty, desertion, adultery, mental disorder, seven years’ disappearance, renunciation, and other statutory grounds.",
      },
      {
        question: "Is there a specific format for a divorce notice?",
        answer:
          "No statutory format exists. The notice should include party details, grounds, demands, and response timeline.",
      },
      {
        question: "How must the notice be delivered?",
        answer:
          "Via registered post, courier, or speed post with proof of delivery retained by the sending lawyer.",
      },
      {
        question: "Is an advocate’s signature mandatory?",
        answer:
          "Yes. The drafting advocate must sign the notice on their official letterhead with the date.",
      },
      {
        question: "Can a divorce notice lead to settlement?",
        answer:
          "Often. Recipients may negotiate terms of maintenance, custody, or property division in response to the notice.",
      },
      {
        question: "What if no response is received?",
        answer:
          "The sender may proceed to file a divorce petition in the appropriate court as outlined in the notice.",
      },
      {
        question: "Which laws govern divorce notices?",
        answer:
          "Hindu Marriage Act (Section 9 and chapters on divorce), Special Marriage Act, Parsi Marriage & Divorce Act, Indian Divorce Act, and respective personal laws.",
      },
      {
        question: "Does serving a notice guarantee reconciliation?",
        answer:
          "Not guaranteed, but it provides a formal opportunity for both parties to discuss and possibly resolve issues before litigation.",
      },
    ],
  },

  "property-registration": {
    title: "Property Registration",
    description:
      "Complete legal transfer of property ownership under the Registration Act and Stamp Act with DoStartup’s expert guidance.",
    overview: [
      {
        heading: "Overview of Property Registration",
        content:
          "Property registration in India is mandatory when purchasing land or property valued above ₹100. It transfers ownership from seller to buyer and records the transaction with the Sub‑registrar’s office, safeguarding both parties’ interests.",
      },
      {
        heading: "Mandatory Registration and Governing Laws",
        content:
          "Under Section 17 of the Registration Act, 1908, immovable properties above ₹100 must be registered. Stamp duty under the Indian Stamp Act, 1889 is payable by the buyer based on market value; rates vary by state.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Property Registration",
        content:
          "● Provides clear, legally enforceable ownership records\n● Protects against fraudulent claims and land disputes\n● Enables easy property mutation and tax benefits under Section 80C\n● Government compensation for registrar errors\n● Mandatory for legal protection and financing",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content:
          "● Passport‑size photographs of buyer and seller\n● Identity proofs (Aadhar, PAN) for both parties\n● Latest property card or title document\n● Municipal tax bill and NOC\n● Verified sale deed copy or other deed (gift, lease)\n● Certificate of completed construction (if applicable)\n● Power of attorney (if one party is represented)\n● Payment receipts for stamp duty and registration fees",
      },
    ],
    registrationProcedure: [
      {
        heading: "Offline Registration Process",
        content:
          "● Estimate property value using circle rate\n● Purchase non‑judicial stamp paper online/offline\n● Draft and print deed (sale, gift, lease) on stamp paper\n● Parties and two witnesses attend Sub‑registrar’s office with originals\n● Submit documents and pay registration charges\n● Registrar verifies and issues registration receipt",
      },
      {
        heading: "Online Registration Process",
        content:
          "● Confirm state support for online registration\n● Register or login to the state portal\n● Fill in property, buyer, seller details and upload documents\n● Calculate and pay stamp duty, registration fee, and 1% TDS if value > ₹50 lakh\n● Obtain payment receipts and appointment slot\n● Visit office with receipts and witnesses for final verification",
      },
      {
        heading: "National Generic Document Registration System (NGDRS)",
        content:
          "The NGDRS portal standardizes registration across states, providing same‑day document copies, market rate data, and a user‑friendly interface for transparent, efficient registration.",
      },
    ],
    feesStructure: [
      {
        heading: "Stamp Duty and Registration Fees",
        description:
          "Stamp duty and registration fees vary by state, property value, purpose (commercial vs residential), location, gender of owner, and amenities. Typically around 1% of market value, with concessions for women.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline and Validity",
        description:
          "● Registration must be completed within 4 months of transaction\n● Certificate issuance usually within 15–30 days after verification\n● Unregistered property is not valid evidence and may forfeit compensation under Section 80C of the Income Tax Act",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Property Registration",
        description: [
          "End‑to‑end support for offline and NGDRS processes",
          "Accurate stamp duty calculation and fee payment guidance",
        ],
        points: [
          "Assistance with deed drafting and document compilation",
          "Appointment scheduling and office liaison",
          "Transparent updates from submission to receipt",
        ],
      },
    ],
    faq: [
      {
        question:
          "Where is the legal provision for property registration mentioned?",
        answer:
          "Under Section 17 of the Registration Act, 1908, property valued above ₹100 must be registered.",
      },
      {
        question: "What does the term 'circle rate' mean?",
        answer:
          "Circle rate is the minimum property value fixed by the government’s revenue department for registration purposes.",
      },
      {
        question: "What is the usual time frame for property registration?",
        answer:
          "Registration should be completed within 4 months; certificate issuance typically takes 15–30 days post‑verification.",
      },
      {
        question: "What are the consequences of not registering a property?",
        answer:
          "Unregistered properties cannot legally prove ownership and may forfeit compensation if acquired by the government.",
      },
      {
        question: "Which documents are essential for property registration?",
        answer:
          "Aadhar cards, photographs, property deed, NOC, title documents, municipal tax receipts, completion certificate, and power of attorney if applicable.",
      },
      {
        question: "How are registration fees determined?",
        answer:
          "Fees depend on property value, state‑specific stamp duty rates, transaction type, location, gender concessions, and amenities.",
      },
      {
        question: "Is it possible to register property online?",
        answer:
          "Yes. Many states use NGDRS or their own portals for online registration, though physical verification is still required.",
      },
      {
        question: "Is property registration mandatory in India?",
        answer:
          "Yes. Any immovable property valued above ₹100 must be registered under the Registration Act.",
      },
      {
        question: "Are there registration fee concessions for women?",
        answer:
          "Yes. Many states offer reduced stamp duty or registration charges if the property is registered in a woman’s name.",
      },
      {
        question: "Is presence of parties mandatory during registration?",
        answer:
          "Yes. Both buyer and seller, along with two witnesses, must be physically present for final document verification.",
      },
      {
        question: "Can the sub‑registrar cancel a registration application?",
        answer:
          "Yes. Applications may be canceled for insufficient stamp duty, missing documents, or errors at the time of registration.",
      },
    ],
  },

  "property-valuation": {
    title: "Property Valuation",
    description:
      "Obtain accurate market value assessments of your property through certified valuation services by DoStartup’s experts.",
    overview: [
      {
        heading: "Overview of Property Valuation",
        content:
          "Property valuation determines the current market value of real estate and movable assets by analyzing factors such as location, structure, amenities, infrastructure, and supply‑demand dynamics. Certified professionals produce detailed reports outlining observations, methodology, and valuation conclusions.",
      },
      {
        heading: "Who Conducts Property Valuation",
        content:
          "Only licensed valuers certified by the Institution of Valuers and holding a state license may perform professional property valuations. They prepare comprehensive reports including site measurements, condition assessments, risk factors, and market comparisons.",
      },
    ],
    benefits: [
      {
        heading: "Importance of Property Valuation",
        content:
          "● Sellers avoid undervaluation and buyers avoid overpaying\n● Insurers determine correct coverage amounts\n● Tenants negotiate fair rents\n● Taxpayers calculate accurate property, income, and wealth taxes\n● Homeowners assess renovation ROI\n● Lenders set loan terms and interest rates\n● Heirs resolve inheritance disputes equitably\n● Investors make informed decisions and prevent fraud",
      },
    ],
    documentsRequired: [
      {
        heading: "Information Required for Valuation",
        content:
          "● Property address and title details\n● Site plans and floor layouts\n● Age and condition of structure\n● Details of amenities and utility connections\n● Recent sale data of comparable properties\n● Any renovation or improvement records",
      },
    ],
    registrationProcedure: [
      {
        heading: "Property Valuation Process",
        content:
          "● Engage a certified valuer and submit required property information\n● Valuer inspects the site, measures dimensions, and documents condition\n● Analyze location factors, infrastructure, demand‑supply, and amenities\n● Apply appropriate valuation method (comparison, cost, profit, residual, contractor’s)\n● Prepare detailed valuation report with methodology, observations, and final market value",
      },
    ],
    feesStructure: [
      {
        heading: "Valuation Fees",
        description:
          "Fees vary by property type, size, and report complexity. DoStartup connects you to professionals who charge reasonable, transparent rates based on valuation scope.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Valuation Report",
        description:
          "Most valuation reports are delivered within 7–14 business days of site inspection, depending on property complexity and data availability.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Valuation",
        description: [
          "Access certified, government‑licensed valuers",
          "Detailed, court‑admissible valuation reports",
        ],
        points: [
          "Fast scheduling of site inspections",
          "Transparent pricing and methodology",
          "Comprehensive support for loan, insurance, and legal use cases",
        ],
      },
    ],
    faq: [
      {
        question:
          "Is a valuation by a real estate agent the same as a professional valuer?",
        answer:
          "No. Only certified valuers produce credible reports using standardized methods; agent estimates may lack accuracy and legal standing.",
      },
      {
        question: "Can property value be determined online?",
        answer:
          "Yes. Online platforms provide estimated valuations, but a certified valuer’s onsite report is more accurate.",
      },
      {
        question: "Is getting a property valuation a wise decision?",
        answer:
          "Absolutely. It protects against fraud, supports fair deals, and informs financial, legal, and investment decisions.",
      },
      {
        question: "Who qualifies as a valuer?",
        answer:
          "A valuer holds a degree from the Institution of Valuers and a state license authorizing professional valuation practice.",
      },
      {
        question: "Why is property valuation important?",
        answer:
          "It determines accurate market value for sales, loans, insurance, tax calculation, inheritance, and investment planning.",
      },
      {
        question: "What factors does a valuer consider?",
        answer:
          "Size, condition, design, layout, location, infrastructure, amenities, demand‑supply, and legal status.",
      },
      {
        question: "Who uses valuation reports?",
        answer:
          "Buyers, sellers, investors, financial institutions, insurers, tenants, tax authorities, and legal professionals.",
      },
      {
        question: "What is the main objective of valuation?",
        answer:
          "To determine the true market value of a property at a given point in time.",
      },
      {
        question: "Which factor impacts valuation the most?",
        answer:
          "Infrastructure and location have the greatest influence on property value.",
      },
      {
        question: "How can someone find a property’s market price?",
        answer:
          "Refer to the government’s circle rate or obtain a certified valuation report.",
      },
      {
        question: "What factors are evaluated for residential use?",
        answer:
          "Size, number of rooms and floors, neighborhood quality, nearby amenities, and property condition.",
      },
      {
        question: "Are standard valuation and lender’s valuation the same?",
        answer:
          "No. Lender valuations focus on loan‑security risk, while standard valuations determine general market value.",
      },
    ],
  },

  "property-verification": {
    title: "Property Verification",
    description:
      "Ensure secure real estate transactions with thorough due diligence and title verification services by DoStartup’s experts.",
    overview: [
      {
        heading: "Overview of Property Verification",
        content:
          "Property verification (due diligence) confirms the legal ownership and status of real estate in India by reviewing title documents, identifying encumbrances, validating seller identity, and checking tax and local authority records.",
      },
      {
        heading: "Importance of Title Verification",
        content:
          "● Proves rightful ownership via government‑recorded title documents\n● Uncovers hidden liabilities or disputes\n● Ensures seller’s legal authority to transact\n● Protects buyers and lenders from fraud",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Document Verification",
        content:
          "● Confirms property is free from litigation and encumbrances\n● Streamlines collateral approval for loans\n● Protects against fraudulent resales\n● Verifies tax payment history and mutation records",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Verification",
        content:
          "● Title documents (sale deed, gift deed, succession certificate)\n● Encumbrance certificate\n● Bank loan approval report (if applicable)\n● Approved site plan and actual site plan\n● Property tax receipts\n● Power of Attorney (if seller is represented)\n● Registered society membership proof (if applicable)\n● Any additional deeds (relinquishment, mutation, freehold)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Property Verification",
        content:
          "● Collect and verify title documents at sub‑registrar’s office\n● Obtain encumbrance certificate to confirm no liabilities\n● Review approved vs actual site plans for compliance\n● Check property tax receipts and municipal dues\n● Validate bank approvals and regulatory clearances\n● Verify validity of any Power of Attorney\n● Confirm housing society registration status\n● Investigate additional documents (mutation, relinquishment)\n● Prepare detailed verification report with findings",
      },
    ],
    feesStructure: [
      {
        heading: "Verification Fees",
        description:
          "Fees vary by property complexity and location. DoStartup connects you with experienced professionals offering transparent, competitive rates based on the scope of verification.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Verification",
        description: [
          "Access to certified property lawyers and valuers",
          "Comprehensive reports minimizing legal risks",
        ],
        points: [
          "Fast turnaround tailored to your transaction timeline",
          "Expert handling of complex title and statutory checks",
          "End‑to‑end support from document collection to final report",
        ],
      },
    ],
    faq: [
      {
        question: "When should property document verification be done?",
        answer:
          "Before leasing, purchasing, or using property as loan collateral to ensure it is legally sound and free of issues.",
      },
      {
        question: "What are the benefits of property document verification?",
        answer:
          "It confirms no legal claims, disputes, or liabilities exist, protecting buyers from future complications.",
      },
      {
        question: "What wrongful acts can a seller commit?",
        answer:
          "● Selling without clear title\n● Transacting property under dispute or litigation\n● Transferring property without full ownership rights",
      },
      {
        question: "Is property verification mandatory in India?",
        answer:
          "Not legally compulsory, but highly recommended to safeguard significant investments.",
      },
      {
        question: "How long does verification take?",
        answer:
          "Typically a few days to two weeks, depending on property complexity and documentation.",
      },
      {
        question: "Can documents be verified online?",
        answer:
          "Yes. Many states offer online portals for title searches and encumbrance certificates.",
      },
      {
        question: "Can an individual verify on their own?",
        answer:
          "Possible but complex; legal professionals reduce risk of overlooked issues.",
      },
      {
        question: "What is a title search?",
        answer:
          "Review of all legal documents to confirm true ownership, involving government record checks.",
      },
      {
        question: "What laws apply to verification?",
        answer:
          "Transfer of Property Act, 1882; Registration Act, 1908; state‑specific stamp duty and registration laws; personal succession laws for intestate cases.",
      },
      {
        question: "What is a sale deed?",
        answer:
          "A legal document confirming transfer of ownership from seller to buyer. Authenticity must be verified.",
      },
      {
        question: "What is a Power of Attorney?",
        answer:
          "A legal authorization allowing a representative to act on behalf of the owner in property transactions.",
      },
      {
        question: "What is property verification?",
        answer:
          "The process of confirming rightful ownership and that the property is free from disputes and encumbrances.",
      },
      {
        question: "What is the role of a lawyer in verification?",
        answer:
          "A lawyer examines all documents, verifies legality, uncovers risks, and ensures compliance with property laws.",
      },
    ],
  },

  "sexual-harassment-workplace": {
    title: "Sexual Harassment at the Workplace",
    description:
      "Prevent, address, and redress workplace sexual harassment under India’s 2013 Act with DoStartup’s expert support.",
    overview: [
      {
        heading: "Global and Legal Context",
        content:
          "Sexual harassment at work is a serious worldwide issue undermining human dignity, equality, and safety. India’s response—the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013—aligns with international conventions and mandates every employer to establish an Internal Complaints Committee (ICC) or refer to a Local Complaints Committee (LCC).",
      },
      {
        heading: "Definition under the 2013 Act",
        content:
          "Includes any unwelcome physical contact or advances, demands for sexual favors, sexually colored remarks, showing pornography, or other unwelcome physical, verbal, or non‑verbal conduct of sexual nature at or connected with the workplace.",
      },
      {
        heading: "Example Scenario",
        content:
          "If an assistant repeatedly makes inappropriate remarks to a new colleague, she can lodge a complaint with the ICC under the Act’s provisions.",
      },
      {
        heading: "Who is an Aggrieved Woman?",
        content:
          "Any female—employee, domestic worker, intern, or visiting professional—who alleges sexual harassment at work, regardless of age or employment status.",
      },
      {
        heading: "Who Can File a Complaint?",
        content:
          "The aggrieved woman herself; or with her written consent, a relative, friend, co‑worker, or authorized person if she is unable due to incapacity; her legal heirs in case of her death.",
      },
    ],
    benefits: [
      {
        heading: "Key Protections and Reliefs",
        content:
          "● Fair, time‑bound inquiry by ICC/LCC with civil‑court powers\n● Interim measures: transfer, leave up to three months, removal of supervisory authority\n● Disciplinary action and monetary compensation if harassment is proven\n● Malicious complaints can attract action under service rules\n● Strict confidentiality of proceedings to protect all parties\n● Option for non‑monetary conciliation before inquiry",
      },
    ],
    registrationProcedure: [
      {
        heading: "Complaint and Inquiry Process",
        content:
          "● File written complaint within three months of the incident to ICC/LCC with incident details and relief sought\n● ICC investigates: summons witnesses, examines documents, follows natural justice\n● Criminal offenses are reported to police within seven days\n● If respondent or complainant misses three hearings after 15‑day notice, ICC may proceed ex‑parte",
      },
      {
        heading: "Conciliation and Final Report",
        content:
          "● Aggrieved may opt for non‑monetary conciliation under Section 10 before inquiry\n● If conciliation succeeds, terms are recorded and matter closed\n● Inquiry concludes within 90 days; report shared within 10 days\n● ICC recommends disciplinary action, compensation recoverable as wages arrears, or closure if no harassment",
      },
    ],
    registrationTimeline: [
      {
        heading: "Statutory Timelines",
        description:
          "Complaint filing: 3 months  \nPolice report (if criminal): 7 days  \nInquiry completion: 90 days  \nReport sharing: 10 days  \nFirst‑party ex‑parte after 3 missed hearings + 15‑day notice",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "Expert drafting under the 2013 Act and Rules",
          "Support for ICC/LCC constitution, awareness, and compliance",
        ],
        points: [
          "Guidance on complaint drafting, filing, and follow‑up",
          "Representation during inquiries and conciliation",
          "Assistance enforcing ICC recommendations and confidentiality",
        ],
      },
    ],
    faq: [
      {
        question: "Does harassment have to occur on company premises?",
        answer:
          "No. It includes any work‑related setting—social events, travel, client sites, training, business meals, or electronic communications.",
      },
      {
        question: "What actions can an aggrieved woman take?",
        answer:
          "She can ask the harasser to stop, file with ICC/LCC, or lodge an FIR under relevant IPC sections.",
      },
      {
        question: "What counts as unwelcome sexual behavior?",
        answer:
          "Any non‑invited sexual conduct—physical, verbal, or non‑verbal—that makes the woman uncomfortable.",
      },
      {
        question: "What punishments can be imposed under the Act?",
        answer:
          "Penalties range from apology or warning to termination, community service, salary deductions, or both.",
      },
      {
        question: "Is confidentiality mandatory?",
        answer:
          "Yes. Identities of complainant, respondent, witnesses, complaint details, and ICC/LCC proceedings must remain confidential.",
      },
      {
        question: "Can FIR and workplace complaint be simultaneous?",
        answer:
          "Yes. Women may file an FIR and an ICC/LCC complaint concurrently.",
      },
      {
        question: "Who may file if the aggrieved is unable?",
        answer:
          "A relative, friend, co‑worker, or any person with her written consent; legal heirs if she is deceased.",
      },
      {
        question: "What is the Act’s scope?",
        answer:
          "Covers all workplaces—government, private, NGOs, hospitals, educational institutions, and domestic work.",
      },
      {
        question: "What is ‘Quid Pro Quo’ harassment?",
        answer:
          "When a person in authority demands sexual favors for work benefits like promotion, salary hike, or retention.",
      },
      {
        question: "What is indirect harassment?",
        answer:
          "Conduct creating a hostile environment—sharing inappropriate content, suggestive messages, or sexual remarks without direct targeting.",
      },
      {
        question: "What if a complaint is false or malicious?",
        answer:
          "ICC may recommend action under service rules, but lack of proof alone does not imply malice.",
      },
      {
        question: "Can allegations be criminally investigated?",
        answer:
          "Yes. If the complaint involves a cognizable offense, ICC reports to police and criminal investigation proceeds.",
      },
    ],
  },
  "lease-registration": {
    title: "Lease Registration",
    description:
      "Ensure legal validity of lease agreements by registering leases over one year under Indian law with DoStartup’s expert assistance.",
    overview: [
      {
        heading: "Overview of Lease Registration",
        content:
          "A lease transfers the right to use immovable property from lessor to lessee for a defined period in exchange for consideration. Under Section 105 of the Transfer of Property Act, 1882 and Section 17 of the Registration Act, 1908, leases exceeding one year must be registered to be enforceable.",
      },
      {
        heading: "What is a Lease Deed?",
        content:
          "A lease deed is a binding document detailing terms—rent, payment schedule, security deposit, rights, obligations, and dispute resolution. Signing by both parties prevents future conflicts.",
      },
    ],
    benefits: [
      {
        heading: "Why Register a Lease?",
        content:
          "● Grants legal sanctity and enforceability  \n● Protects lessor’s and lessee’s interests  \n● Provides valid evidence in disputes  \n● Prevents complications from unregistered agreements",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "● Lessor’s title documents (ownership proof)  \n● Property tax receipts and related papers  \n● Lease deed on appropriate stamp paper  \n● Two passport‑size photos of lessor, lessee, and each witness  \n● Address proofs of parties and witnesses  \n● Stamp duty payment proof",
      },
    ],
    registrationProcedure: [
      {
        heading: "Offline Registration Procedure",
        content:
          "● Prepare and sign lease deed with clear clauses (duration, rent, deposit, notice, dispute resolution)  \n● Submit within 4 months of execution at local sub‑registrar with parties and two witnesses (or POA)  \n● Pay state‑specific stamp duty and registration fees  \n● Receive registered lease deed; delays incur penalties",
      },
      {
        heading: "Online Registration Procedure",
        content:
          "● Check if your state portal offers online lease registration  \n● Create user profile on official portal  \n● Enter property, party, and lease details  \n● Pay stamp duty and fees online  \n● Book sub‑registrar appointment  \n● Appear with originals and witnesses for physical verification",
      },
    ],
    feesStructure: [
      {
        heading: "Fees and Penalties",
        description:
          "Stamp duty and registration fees vary by state and lease term. Unregistered leases over one year are unenforceable under the Registration Act 1908 and Transfer of Property Act 1882.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Critical Timelines",
        description:
          "● Registration required within 4 months of execution  \n● Leases over one year must be registered  \n● Leases 11 months or less are exempt under Section 18 of the Registration Act",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "Expert drafting of legally compliant lease deeds",
          "Assistance with stamp duty calculation and payment",
        ],
        points: [
          "Guidance on offline and online registration",
          "Coordination with sub‑registrar for appointments",
          "Support through entire registration process",
        ],
      },
    ],
    faq: [
      {
        question: "Is it mandatory to register a lease deed?",
        answer:
          "Yes. Leases exceeding 11 months must be registered under Section 17 of the Registration Act, 1908; shorter leases are exempt under Section 18.",
      },
      {
        question: "What is lease deed registration?",
        answer:
          "The process of submitting a signed lease deed at the sub‑registrar’s office, paying stamp duty and registration fees, and obtaining a registered document.",
      },
      {
        question: "What is a lease deed?",
        answer:
          "A legal agreement between lessor and lessee outlining terms of property possession for a specified period and rent.",
      },
      {
        question:
          "Is an arbitration clause valid in an unregistered lease deed?",
        answer:
          "Yes. Arbitration provisions remain enforceable under the Arbitration and Conciliation Act, 1996, even if the lease deed is unregistered.",
      },
      {
        question: "What laws govern lease registration?",
        answer:
          "The Registration Act, 1908 and the Transfer of Property Act, 1882.",
      },
      {
        question: "What should a basic lease deed include?",
        answer:
          "Full details of parties, lease term, rent and security deposit, notice and termination terms, renewal and sub‑leasing clauses.",
      },
      {
        question:
          "What is the difference between rent agreement and lease deed?",
        answer:
          "Agreements up to 11 months are rent agreements; over 11 months are lease deeds requiring registration.",
      },
      {
        question: "How much stamp duty is payable?",
        answer:
          "Rates differ by state and are determined by the State Revenue Department.",
      },
      {
        question: "What are consequences of non‑registration?",
        answer:
          "Unregistered leases over one year are unenforceable in court and lack legal standing.",
      },
      {
        question: "What section exempts short‑term leases?",
        answer:
          "Section 18 of the Registration Act, 1908 exempts leases of 11 months or less.",
      },
      {
        question: "What does 'lease rental' mean?",
        answer:
          "The monetary consideration paid by the lessee to the lessor for property use.",
      },
      {
        question: "Is online registration available everywhere?",
        answer:
          "No. Only select states offer online systems; DoStartup can guide based on your jurisdiction.",
      },
    ],
  },

  "will-registration": {
    title: "Will Registration",
    description:
      "Register your will under the Registration Act, 1908 with DoStartup’s expert assistance to add legal strength and avoid disputes.",
    overview: [
      {
        heading: "Overview of Will Registration",
        content:
          "A will is a legal document declaring the testator’s intentions for asset distribution after death. Governed by the Indian Succession Act, 1925, and optionally registered under the Registration Act, 1908, registration adds credibility by presuming sound mind and genuineness.",
      },
      {
        heading: "Legal Framework",
        content:
          "Section 17 of the Registration Act mandates registration for certain documents; Section 18 makes will registration optional but recommended. The final registered will becomes conclusive evidence of the testator’s last wishes.",
      },
    ],
    benefits: [
      {
        heading: "Advantages of Registration",
        content:
          "● Stronger legal standing and proof against authenticity challenges\n● Presumption of sound mental health and absence of coercion\n● Minimizes signature disputes by confirming genuineness\n● Secure storage with Registrar, retrievable only by testator or agent\n● Discourages arbitrary or emotional challenges by excluded heirs",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "● Original signed will\n● Two passport‑size photos of testator\n● Mental fitness certificate from licensed doctor\n● Photos and ID proofs of two attesting witnesses\n● Address proofs and PAN cards of testator and witnesses",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Registration",
        content:
          "1. Visit sub‑registrar’s office in jurisdiction of residence or property\n2. Submit original will for scrutiny\n3. Registrar verifies legal compliance\n4. Two witnesses appear with testator\n5. Pay nominal registration fee (varies by state)\n6. Receive registered copy within one week",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline",
        description:
          "Registration typically completes within 7–10 days of submission. The will remains retrievable from the registrar until testator’s death.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "Guidance on optimal registration strategy",
          "Coordination with sub‑registrar for quick processing",
        ],
        points: [
          "Expert review for legal compliance",
          "Assistance with documentation and fees",
          "Secure handling and follow‑up until delivery",
        ],
      },
    ],
    faq: [
      {
        question: "Can a person write a will in their own handwriting?",
        answer:
          "Yes. A holograph will handwritten by the testator is valid if signed by the testator and attested by two witnesses who observe the signing.",
      },
      {
        question: "Can a testator make changes to their will?",
        answer:
          "Yes. Amendments are made via a codicil executed in the same manner as the original will.",
      },
      {
        question: "Can a will be registered after the testator’s death?",
        answer:
          "Yes. If properly signed and witnessed, it may be registered posthumously by producing the original will and death certificate.",
      },
      {
        question: "Are there registration charges for a will?",
        answer:
          "Yes. A nominal registration fee applies; no stamp duty is required on the will document itself.",
      },
      {
        question: "What happens if someone dies without a will?",
        answer:
          "Assets are distributed according to applicable succession laws under the Indian Succession Act or personal laws based on religion.",
      },
      {
        question: "What kind of property can be included?",
        answer:
          "Movable and immovable assets such as real estate, bank deposits, fixed deposits, stocks, bonds, and other financial instruments.",
      },
      {
        question: "If a will is unsigned, is it valid?",
        answer:
          "No. A will must be signed by the testator and witnessed by two individuals; unsigned wills are invalid.",
      },
      {
        question: "What is the minimum number of witnesses?",
        answer:
          "At least two witnesses over 18 years of age are required for proper execution.",
      },
      {
        question: "Where is a will registered?",
        answer:
          "At the sub‑registrar’s office in the jurisdiction where the testator resides or where the majority of property is located.",
      },
      {
        question: "Can a will be changed or cancelled?",
        answer:
          "Yes. A testator may revoke or replace a will at any time before death by drafting a new one.",
      },
      {
        question: "Is a lawyer necessary to draft a will?",
        answer:
          "No, but legal advice is recommended for complex estates, foreign assets, or blended families to ensure clarity and compliance.",
      },
      {
        question: "What are essential elements for registration?",
        answer:
          "Testator details, asset descriptions, executor appointment, beneficiary list, and signatures of testator and two witnesses.",
      },
      {
        question: "What is the right age to make a will?",
        answer:
          "Any person 18 years or older and of sound mind may legally execute a will.",
      },
      {
        question: "Who is an executor?",
        answer:
          "An executor is the person appointed to carry out the will’s instructions and manage asset distribution as directed.",
      },
    ],
  },

  "power-of-attorney": {
    title: "Power of Attorney (PoA)",
    description:
      "Authorize someone to act on your behalf for property, finances, business or medical matters with DoStartup’s expert drafting, notarization, and registration support.",
    overview: [
      {
        heading: "What is a Power of Attorney?",
        content:
          "A PoA is a legal document by which a principal (donor) appoints an agent (attorney‑in‑fact) to perform specific or broad tasks—managing property, finances, business affairs, or healthcare—when the principal is unavailable or incapacitated.",
      },
      {
        heading: "Types of Power of Attorney",
        content:
          "Conventional (General/Limited), Durable (survives incapacity), Springing (effective upon a trigger event), and Medical PoA (healthcare decisions).",
      },
      {
        heading: "Who Can Be an Agent?",
        content:
          "Any trustworthy adult (≥18 years) of sound mind. Multiple agents may be appointed with joint or independent authority to ensure continuity.",
      },
      {
        heading: "Revocation and Duration",
        content:
          "The principal may revoke at any time by written notice if mentally competent. A PoA can specify an expiry date or remain effective until revoked.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages",
        content:
          "● Ensures uninterrupted management of affairs  \n● Customizable scope—from narrow tasks to broad durable authority  \n● Allows remote or incapacitated principals to delegate power  \n● Provides clear legal protection and avoids future disputes",
      },
      {
        heading: "Dos and Don’ts for Agents",
        content:
          "Allowed: manage property, pay bills, operate accounts, make healthcare decisions. Not allowed: mix finances, act in self‑interest, restrict principal’s freedom, make decisions when principal is competent.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "● Principal’s and agent’s photo ID & address proofs  \n● Two witnesses’ IDs and signatures  \n● Draft PoA on state‑appropriate stamp paper  \n● Notarization certificate  \n● Embassy/consulate attestation for NRIs",
      },
    ],
    registrationProcedure: [
      {
        heading: "Execution and Registration",
        content:
          "● Draft PoA clearly naming parties, scope, duration, revocation clause  \n● Notarize document per state rules  \n● For immovable property powers: register at sub‑registrar within 4 months with parties and two witnesses (or POA)  \n● Pay state‑specific stamp duty (higher if non‑relative or property transaction)",
      },
    ],
    feesStructure: [
      {
        heading: "Stamp Duty and Fees",
        description:
          "Stamp duty depends on state law, relation of agent, and transaction value or compensation amount. DoStartup assists with accurate calculations and payments.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Validity and Timing",
        description:
          "PoA takes effect on signing or upon a specified condition; register immovable property PoAs within four months, else they are unenforceable in court.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "Custom PoA drafting tailored to your needs",
          "Coordination with notaries, embassies, and sub‑registrars",
        ],
        points: [
          "Transparent fees and stamp duty guidance",
          "End‑to‑end support: drafting, notarization, registration",
          "Expert advice on scope, revocation, and compliance",
        ],
      },
    ],
    faq: [
      {
        question: "How many types of Power of Attorney are there?",
        answer:
          "Four main types: Conventional (General/Limited), Durable, Springing (trigger‑based), and Medical PoA.",
      },
      {
        question: "What is a General Power of Attorney?",
        answer:
          "A PoA granting broad or specified authority for various tasks during its validity period.",
      },
      {
        question: "What is a Special Power of Attorney?",
        answer:
          "A PoA limited to a specific act or transaction, such as selling one property.",
      },
      {
        question: "Is it mandatory to register a PoA?",
        answer:
          "Only PoAs dealing with immovable property for over one year must be registered under the Registration Act, 1908; others may remain unregistered.",
      },
      {
        question: "Can a PoA be overridden or revoked?",
        answer:
          "Yes. If the principal is of sound mind, they can revoke at any time by issuing written notice to the agent and relevant third parties.",
      },
      {
        question: "Can a principal appoint multiple agents?",
        answer:
          "Yes. Multiple agents can act jointly or independently, as specified by the principal, to ensure continuity.",
      },
      {
        question: "What are the risks of granting a PoA?",
        answer:
          "An untrustworthy agent may misuse authority—embezzlement, unauthorized transactions—and the principal remains bound by the agent’s lawful acts.",
      },
      {
        question: "What documents are required for a PoA?",
        answer:
          "Principal’s and agent’s IDs, two witness IDs, the draft PoA on stamp paper, notarization certificate, and embassy attestation for NRIs.",
      },
      {
        question: "Do witnesses need to attest a PoA?",
        answer:
          "Yes. At least two witnesses must sign, confirming they observed the principal’s signature.",
      },
      {
        question: "Is an arbitration clause valid in an unregistered PoA?",
        answer:
          "Yes. Arbitration provisions are enforceable independently under the Arbitration and Conciliation Act, 1996.",
      },
      {
        question: "What powers can a Medical PoA include?",
        answer:
          "Healthcare decisions, hospital admissions, treatment choices, and payment of medical bills when the principal is incapacitated.",
      },
      {
        question: "What happens if a required PoA is unregistered?",
        answer:
          "It is unenforceable for immovable property transactions until duly registered.",
      },
      {
        question: "Is legal consultation necessary?",
        answer:
          "While not mandatory, legal advice ensures proper scope, compliance, and prevents disputes—services DoStartup provides.",
      },
    ],
  },

  "divorce-settlement-agreement": {
    title: "Divorce Settlement Agreement",
    description:
      "Formalize mutually agreed terms on child custody, maintenance, asset division and liabilities in a legally binding document with DoStartup’s expert drafting support.",
    overview: [
      {
        heading: "What is a Divorce Settlement Agreement?",
        content:
          "A legally binding document outlining mutually agreed terms for dissolving a marriage—custody, maintenance, property division, debt allocation—without a contested court battle.",
      },
      {
        heading: "When and Why to Prepare It",
        content:
          "Drafted before filing a mutual divorce petition to prevent misunderstandings, streamline court proceedings, and ensure a smoother, conflict‑free process.",
      },
      {
        heading: "Role of Legal Experts",
        content:
          "Family law specialists—such as those at DoStartup—ensure comprehensive coverage of all legal aspects and compliance with Indian divorce statutes in drafting the agreement.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages",
        content:
          "● Amicable resolution avoiding lengthy litigation  \n● Clear allocation of custody, financial support and assets  \n● Reduces risk of future disputes  \n● Enables faster court approval and final decree  \n● Protects rights and obligations of both spouses",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "● Draft settlement agreement  \n● Marriage certificate  \n● Children’s birth certificates (if applicable)  \n● Asset/liability statements (bank statements, property deeds, loans)  \n● Income proofs for maintenance calculations  \n● IDs and address proofs for both spouses",
      },
    ],
    registrationProcedure: [
      {
        heading: "Drafting and Execution",
        content:
          "● Parties negotiate and finalize terms on custody, maintenance, asset and debt division  \n● Engage lawyers to draft a clear, enforceable agreement  \n● Both spouses sign the agreement in presence of witnesses",
      },
      {
        heading: "Court Filing and Approval",
        content:
          "● File a joint divorce petition incorporating the agreement  \n● First motion: statements recorded under oath  \n● Six‑month cooling‑off period  \n● Second motion: court reviews and issues final decree embedding the agreement",
      },
    ],
    feesStructure: [
      {
        heading: "Legal Fees",
        description:
          "Professional fees vary by complexity and scope. DoStartup provides transparent, competitive packages for drafting and court filing support.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Estimated Timeline",
        description:
          "● Agreement drafting: 1–2 weeks  \n● Petition to second motion: minimum 6 months  \n● Final decree: typically 6–9 months from petition filing",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "Expert drafting by experienced divorce lawyers",
          "Seamless incorporation into court petition and follow‑through",
        ],
        points: [
          "Comprehensive clauses on custody, support, property, debts, Stridhan and alimony",
          "Guidance on applicable laws (Hindu Marriage Act, Special Marriage Act, Indian Divorce Act)",
          "Support through entire court process until decree",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Divorce Settlement Agreement?",
        answer:
          "A formal, legally binding document setting out mutually agreed divorce terms—custody, maintenance, asset division—to avoid contested litigation.",
      },
      {
        question: "Is a settlement agreement mandatory for mutual divorce?",
        answer:
          "No, but DoStartup recommends it to prevent future disputes and ensure a smoother process.",
      },
      {
        question: "Do I need a lawyer to draft it?",
        answer:
          "Not legally required, but expert drafting ensures all clauses are enforceable and compliant with laws.",
      },
      {
        question: "When should I draft the agreement?",
        answer:
          "Before filing the mutual divorce petition, once both parties agree on key matters.",
      },
      {
        question: "Can the agreement be modified later?",
        answer:
          "Yes, with mutual consent and court approval of the revised agreement.",
      },
      {
        question: "How does it become legally binding?",
        answer:
          "Once signed by both spouses and incorporated into the court’s final divorce decree.",
      },
      {
        question: "What if one spouse violates it?",
        answer:
          "The other can approach the court for enforcement or modification under contempt provisions.",
      },
      {
        question: "What if I disagree with proposed terms?",
        answer:
          "You can renegotiate or submit counter‑proposals; DoStartup can mediate to reach fair terms.",
      },
      {
        question: "Which court approves the agreement?",
        answer:
          "Family courts in the jurisdiction where the petition is filed—last marital residence, marriage solemnization location, or spouse’s residence.",
      },
      {
        question: "Can NRIs use this agreement in India?",
        answer:
          "Yes. NRI spouses may execute and submit a settlement agreement, with attestations if drafted abroad.",
      },
      {
        question: "What laws govern mutual divorce?",
        answer:
          "Hindu Marriage Act 1955 Section 13B; Special Marriage Act 1954 Section 28; Indian Divorce Act Section 10A for Christians.",
      },
      {
        question: "What is Stridhan and how is it handled?",
        answer:
          "Stridhan—gifts to wife during marriage—remains her sole property and must be listed and excluded from division.",
      },
      {
        question: "How is permanent alimony determined?",
        answer:
          "Based on husband’s income, wife’s needs, standard of living and customs; terms must be clearly documented.",
      },
      {
        question: "What about loan repayment and debts?",
        answer:
          "Agreement specifies which spouse repays which loans, how mortgaged assets are handled, and debt liability allocation.",
      },
      {
        question: "Should insurance and passport/visa matters be included?",
        answer:
          "Yes. Terms on premium payments and travel document responsibilities avoid future complications.",
      },
      {
        question: "Can I draft it myself?",
        answer:
          "You may, but DoStartup’s legal experts ensure no details are overlooked and compliance with current regulations.",
      },
    ],
  },

  "hindu-marriage-act-1955": {
    title: "Hindu Marriage Act, 1955",
    description:
      "Comprehensive legal framework governing Hindu marriages, divorce, maintenance, and related matters in India.",
    overview: [
      {
        heading: "Introduction",
        content:
          "Enacted to regulate marriages among Hindus, the Act replaced personal customs with uniform rules on marriage validity, divorce, maintenance, legitimacy of children, and more.",
      },
      {
        heading: "Applicability",
        content:
          "Applies to Hindus by birth or conversion (including Buddhists, Jains, Sikhs), and their legitimate and illegitimate children; excludes Muslims, Christians, Parsis, and Jews.",
      },
    ],
    benefits: [
      {
        heading: "Key Provisions",
        content:
          "• Section 5: Conditions for valid marriage (age, monogamy, sound mind, prohibited relationships)\n• Section 7: Ceremonies (customs like Saptapadi)\n• Section 9: Restitution of conjugal rights\n• Section 13: Grounds for divorce (adultery, cruelty, desertion, conversion, insanity, disease, renunciation, presumption of death)\n• Section 13(2): Special grounds available to wife",
      },
    ],
    documentsRequired: [
      {
        heading: "Related Hindu Laws",
        content:
          "• Hindu Succession Act, 1956 (inheritance)\n• Hindu Adoption and Maintenance Act, 1956 (adoption, maintenance)\n• Hindu Minority and Guardianship Act, 1956 (guardianship of minors)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Marriage Registration",
        content:
          "Though not mandatory under the Act, registration is recommended for legal proof and spouse rights protection; usually handled under state implementation of the Act.",
      },
    ],
    feesStructure: [
      {
        heading: "Court Fees and Timelines",
        description:
          "Divorce petitions generally incur court‑specified filing fees; petitions under Section 14 (divorce) cannot be filed before one year of marriage without special leave.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Mandatory Waiting Period",
        description:
          "Section 14 imposes a one‑year cooling‑off before filing for divorce; Section 9 petitions for restitution have no statutory waiting period.",
      },
    ],
    whyUs: [
      {
        heading: "DoStartup Support",
        description: [
          "Guidance on petition drafting for marriage, separation, and divorce",
          "Advice on compliance with Conditions (Section 5) and procedures (Sections 7, 9, 13)",
        ],
        points: [
          "Assistance with documentation and court filings",
          "Expert help on maintenance and alimony claims",
          "Support in navigating related Hindu personal laws",
        ],
      },
    ],
    faq: [
      {
        question:
          "Under which section are the conditions for a valid Hindu marriage?",
        answer:
          "Section 5 specifies age, monogamy, capacity, and prohibited relationship requirements.",
      },
      {
        question: "What is maintenance pendente lite?",
        answer:
          "Temporary financial support awarded to a dependent spouse during the pendency of divorce or separation proceedings.",
      },
      {
        question: "Difference between void and voidable marriages?",
        answer:
          "Void marriages are illegal from the start (bigamy, prohibited relationship); voidable marriages remain valid until annulled (underage marriage).",
      },
      {
        question: "Is registration of a Hindu marriage necessary?",
        answer:
          "Not mandatory under the Act but strongly recommended for legal proof and use in official matters.",
      },
      {
        question: "Can divorce be filed within one year of marriage?",
        answer:
          "Ordinarily no. Section 14 requires one year to elapse, though courts may waive this in exceptional cases.",
      },
      {
        question: "What remedies does the Act provide?",
        answer:
          "Judicial separation, divorce (with or without maintenance), restitution of conjugal rights, and maintenance orders.",
      },
      {
        question: "What is the minimum legal age for marriage?",
        answer: "18 for bride; 21 for bridegroom.",
      },
      {
        question: "What is a sapinda relationship?",
        answer:
          "Relation to a common ancestor within three maternal and five paternal generations; sapinda marriages are prohibited unless custom permits.",
      },
      {
        question: "Can either party seek maintenance?",
        answer:
          "Yes. Sections 24 and 25 allow either spouse to claim maintenance or permanent alimony.",
      },
      {
        question: "Who qualifies as a Hindu under this Act?",
        answer:
          "Followers of Hindu, Jain, Sikh, or Buddhist religions, by birth or conversion.",
      },
      {
        question: "What is bigamy, and is it punishable?",
        answer:
          "Marrying while already married; punishable under IPC Sections 494 and 495.",
      },
      {
        question: "Where is mutual divorce defined?",
        answer:
          "Section 13B provides for mutual consent divorce by joint petition.",
      },
    ],
  },

  "bail-application": {
    title: "Bail Application",
    description:
      "Obtain provisional release from custody under the Code of Criminal Procedure with DoStartup’s comprehensive bail application support.",
    overview: [
      {
        heading: "What Is Bail?",
        content:
          "Bail is the judicial release of an accused from custody on provision of sureties, ensuring their appearance in court as required. It safeguards personal liberty during legal proceedings under the CrPC.",
      },
      {
        heading: "Who Grants Bail?",
        content:
          "Bail may be granted by the police officer for bailable offences or by a magistrate or court for bailable, non‑bailable, and anticipatory bail applications.",
      },
      {
        heading: "Classification of Bail",
        content:
          "The CrPC distinguishes between: bailable offences (right to bail), non‑bailable offences (court’s discretion), and anticipatory bail (pre‑arrest protection).",
      },
    ],
    benefits: [
      {
        heading: "Why Seek Bail?",
        content:
          "● Protects fundamental right to personal liberty\n● Allows accused to prepare defense outside custody\n● Reduces hardship and stigma of detention\n● Ensures attendance at trial through surety conditions",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Details in Bail Application",
        content:
          "● Name and jurisdiction of court\n● CrPC section invoked (436/436A/437/438)\n● Applicant’s personal details and FIR number\n● Arrest date and police station\n● Grounds for granting bail (health, evidence, personal ties)\n● Undertaking: no absconding, no foreign travel without permission\n● Commitment to appear when summoned\n● Prayer clause requesting bail\n● Signatures of accused and legal representative",
      },
    ],
    registrationProcedure: [
      {
        heading: "Bail for Bailable Offences (Section 436/436A)",
        content:
          "File application before magistrate or police; court must grant bail as a right. If sureties cannot be furnished within seven days, release on personal bond. Under Section 436A, undertrials who have served half the maximum sentence are released on personal bond.",
      },
      {
        heading: "Bail for Non‑Bailable Offences (Section 437)",
        content:
          "File application in magistrate’s court; court exercises discretion unless offence punishable by life or death, or accused has serious prior convictions. Exceptions include minors, women, sick or infirm persons, or weak evidence.",
      },
      {
        heading: "Anticipatory Bail (Section 438)",
        content:
          "Apply in Sessions or High Court before arrest to seek protection. Court considers applicant’s background, risk of absconding, and potential for witness tampering. Conditions include availability for interrogation and prohibition on foreign travel without court permission.",
      },
    ],
    feesStructure: [
      {
        heading: "Court Fees & Sureties",
        description:
          "Court fees for filing bail applications vary by state. Surety bonds require guarantors with verifiable identity and assets. DoStartup assists in calculating fees and arranging suitable sureties.",
        feeTable: [],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timelines for Bail",
        description:
          "● Accused produced before magistrate within 48 hours of arrest\n● Bailable offences: bail may be granted the same day\n● Non‑bailable offences: hearing within days to weeks\n● Anticipatory bail: hearing timing depends on High/Sessions Court schedules\n● Undertrial release under Section 436A after half the maximum sentence served",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "Expert drafting under all relevant CrPC provisions",
          "Strategic support for hearings and surety arrangements",
        ],
        points: [
          "Representation before magistrate, sessions, and High Court",
          "Guidance on bailable, non‑bailable, and anticipatory bail",
          "Assistance with re‑applications and compliance monitoring",
        ],
      },
    ],
    faq: [
      {
        question: "At what stage can an accused apply for bail?",
        answer:
          "An accused may apply for bail at any stage after arrest, once produced before a magistrate within 48 hours.",
      },
      {
        question: "Is bail required in civil matters?",
        answer:
          "No. Bail applies exclusively to criminal proceedings under the CrPC.",
      },
      {
        question: "Is surety mandatory for bail?",
        answer:
          "Generally yes. Courts require bonds and guarantors to secure the accused’s court attendance.",
      },
      {
        question: "How long does it take to get bail?",
        answer:
          "For bailable offences, bail can often be granted the same day; non‑bailable and anticipatory bail depend on court schedules.",
      },
      {
        question: "What law governs bail?",
        answer: "Bail is governed by the Code of Criminal Procedure, 1973.",
      },
      {
        question: "What is anticipatory bail?",
        answer:
          "Under Section 438, anticipatory bail protects an applicant from arrest on potential non‑bailable charges if conditions are met.",
      },
      {
        question: "Can bail be re‑applied if rejected?",
        answer:
          "Yes. A bail application may be re‑filed in the same or a higher court on new grounds or changed circumstances.",
      },
      {
        question: "What is interim bail?",
        answer:
          "Temporary bail granted while the main bail application is pending.",
      },
      {
        question: "What is default bail?",
        answer:
          "Bail automatically granted when police fail to file a chargesheet within the prescribed 60 or 90 days.",
      },
      {
        question: "What happens if bail conditions are violated?",
        answer:
          "Violating bail conditions—such as absconding or foreign travel without permission—can lead to re‑arrest.",
      },
      {
        question: "Are minors eligible for bail?",
        answer:
          "Yes. Courts typically grant bail to minors (under 16 years) unless there is a high risk of absconding or tampering.",
      },
      {
        question: "What factors determine bail amount?",
        answer:
          "Courts consider offence gravity, accused’s antecedents, community ties, and flight risk when setting bail amounts.",
      },
    ],
  },

  "judicial-separation": {
    title: "Judicial Separation in India",
    description:
      "Understand judicial separation as a legal remedy allowing spouses to live apart while remaining married, offering time for reflection, resolution, or transition toward divorce.",
    overview: [
      {
        heading: "Overview of Judicial Separation",
        content:
          "Judicial separation is a legal provision under Indian marriage laws that permits spouses to live apart without dissolving the marriage. It offers time for reconciliation, emotional clarity, or preparation for divorce, while preserving legal marital status.",
      },
      {
        heading: "Understanding Judicial Separation",
        content:
          "Granted under Section 10 of the Hindu Marriage Act, 1955, judicial separation allows either spouse to petition the district court to live separately. The marriage remains legally intact, and this separation often precedes divorce, which requires at least one year of separate living.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Judicial Separation",
        content:
          "● Legal space for emotional and relational reflection\n● Potential to reconcile and avoid permanent divorce\n● Time to resolve marital disputes constructively\n● Provides relief without terminating marital rights\n● May protect spouses from forced cohabitation in cases of cruelty",
      },
    ],
    documentsRequired: [
      {
        heading: "Key Petition Requirements",
        content:
          "● Details of marriage (date, place, rituals)\n● Confirmation of parties being Hindu\n● Personal information of both spouses\n● Current living status and address\n● Details of children (if any)\n● Grounds for seeking separation\n● Disclosure of past litigations (if any)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to File for Judicial Separation",
        content:
          "● Either spouse files a petition under Section 10 of the Hindu Marriage Act, 1955\n● File in the appropriate district or family court:\n  ○ Where marriage occurred\n  ○ Where spouses last lived together\n  ○ Where either party currently resides\n● Petition must follow Order VII Rule 1 of the Civil Procedure Code, 1973\n● The court examines evidence and grants judicial separation if justified",
      },
    ],
    feesStructure: [
      {
        heading: "Fees for Judicial Separation",
        description:
          "Court fees vary by state and complexity of the case. Additional legal costs may include drafting petitions, legal representation, and documentation. DoStartup offers transparent legal packages for complete support.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Judicial Separation",
        description: [
          "Experienced matrimonial legal advisors",
          "Complete support in petition drafting and court filing",
        ],
        points: [
          "Assistance with selecting proper jurisdiction",
          "Affordable legal packages tailored to your case",
          "Support with filing for maintenance and child custody during separation",
        ],
      },
    ],
    faq: [
      {
        question: "Can a court grant judicial separation on its own?",
        answer:
          "Yes, the court can grant judicial separation even if divorce was originally sought, if it deems separation more appropriate under the circumstances.",
      },
      {
        question: "How can a Hindu spouse file for judicial separation?",
        answer:
          "Under Section 10 of the Hindu Marriage Act, 1955, either spouse can file by submitting a petition with marriage details, current status, and grounds for seeking separation.",
      },
      {
        question: "Where should the petition be filed?",
        answer:
          "In a district or family court located where the marriage occurred, where the couple last lived together, or where either spouse currently resides.",
      },
      {
        question:
          "Why is divorce sometimes preferred over judicial separation?",
        answer:
          "Divorce permanently ends the marriage and allows remarriage, whereas judicial separation only suspends marital obligations.",
      },
      {
        question: "What are the benefits of judicial separation over divorce?",
        answer:
          "● Allows time for reflection\n● Keeps marriage legally valid\n● May lead to reconciliation\n● Offers legal protection without immediate termination",
      },
      {
        question: "Does judicial separation dissolve the marriage?",
        answer:
          "No, it only suspends marital obligations. The couple remains legally married.",
      },
      {
        question: "What happens after one year of judicial separation?",
        answer:
          "Either spouse may file for divorce after living separately for at least one year, under Section 13(1A)(i) of the Hindu Marriage Act.",
      },
      {
        question: "Can someone remarry during judicial separation?",
        answer:
          "No, remarriage is not legally permitted until a divorce is finalized by the court.",
      },
      {
        question: "Can maintenance be claimed during judicial separation?",
        answer:
          "Yes, a wife is entitled to maintenance during the separation period. A court petition must be filed to claim it.",
      },
      {
        question: "What is judicial separation as a form of conjugal remedy?",
        answer:
          "It allows a spouse—especially in cases of cruelty or harassment—to legally live separately without divorcing, and to seek child custody and financial support.",
      },
      {
        question:
          "How does judicial separation impact marital relations under the Hindu Marriage Act?",
        answer:
          "Spouses are relieved from cohabitation duties, but the legal bond of marriage continues. The husband remains liable for maintenance.",
      },
      {
        question: "What are the disadvantages of judicial separation?",
        answer:
          "● Legal complexity and court procedures\n● Emotional stress\n● Delays in reaching final resolution if reconciliation fails\n● Restrictions on remarriage",
      },
    ],
  },

  "consulting-agreement": {
    title: "Consulting Agreement in India",
    description:
      "Draft and execute professional consulting agreements with expert legal guidance.",
    overview: [
      {
        heading: "Overview of Consulting Agreement",
        content:
          "A Consulting Agreement is a contract established between an individual or organization seeking consultancy services and the person or firm providing such services. This agreement outlines all relevant details concerning the nature of consultancy offered and the manner in which these services will be executed.\n\nConsultancy services may cover various fields such as environmental issues, governance, strategic planning, financial management, marketing strategies, and more. Under this contract, the consultant is obligated to offer their expert advice on the subject matter in exchange for a fee. This arrangement enables clients to benefit from expert insights that help grow their business and improve profitability.",
      },
      {
        heading: "Need for a Consulting Agreement",
        content:
          "Consulting agreements are utilized whenever expert advice is required for new initiatives or to enhance existing operations within an organization. Common scenarios that necessitate consultancy include:\n\n• When the organization undertakes tasks outside their usual expertise.\n• Instead of hiring permanent employees for unfamiliar tasks, organizations often prefer engaging specialized consultants temporarily.\n• Consultants or consultancy agencies should possess focused expertise to assist with short-term projects.\n• This approach allows organizations to work on various projects flexibly while reducing long-term costs by avoiding permanent hires.\n\nTo safeguard the interests of both parties, forming a consulting agreement is recommended. This written contract ensures all terms and conditions are clearly communicated and provides remedies in case of breaches.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of a Consulting Agreement",
        content:
          "• Protects the rights and obligations of both parties\n• Serves as legal evidence of the agreement\n• Ensures confidentiality of sensitive business information\n• Clearly defines the consultant’s responsibilities during the contract\n• Enables enforceability in case of disputes or breach\n• Helps avoid misunderstandings by clearly setting terms",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Drafting a Consulting Agreement",
        content:
          "• Personal details of both parties (names, addresses, contact info)\n• Scope and nature of the consultancy work\n• Duration and timeline of the agreement\n• Fee and payment schedule\n• Confidentiality clauses and non-compete terms (if applicable)\n• Signatures of both parties\n• Dispute resolution method (optional but recommended)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Key Clauses in a Consulting Agreement",
        content:
          "A well-drafted consulting agreement typically includes the following clauses:\n• Identification of parties\n• Scope of work / services\n• Timeline or timeframe\n• Rights and obligations\n• Ownership or proprietary rights\n• Fees, expenses, and payment schedule\n• Communication methods\n• Governance model\n• Guidelines for escalation\n• Confidentiality\n• Non-compete\n• Enforceability\n• Liability and limitation of liability\n• Indemnification\n• Dispute resolution\n• Termination or cancellation\n• Signatures and date",
      },
      {
        heading: "Step-Wise Process to Draft a Consulting Agreement",
        content:
          "• Identify the scope of consultancy required\n• Discuss and mutually decide the commercial terms\n• Draft agreement including all essential clauses\n• Review and finalize terms with legal assistance\n• Sign and retain copies for enforcement",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Why Choose Us?",
        description: [
          "DoStartup provides expert legal support for consulting agreements.",
        ],
        points: [
          "Professionally drafted agreements",
          "Customized clauses tailored to client needs",
          "End-to-end legal assistance",
          "Quick turnaround and affordable pricing",
        ],
      },
    ],
    faq: [
      {
        question: "What qualifications are required to become a consultant?",
        answer:
          "Consultants typically possess at least a graduation degree and two years of experience in relevant fields such as finance, HR, management, or business operations.",
      },
      {
        question: "Is a license necessary to become a consultant?",
        answer:
          "Licensing is generally not mandatory unless specifically required by the client or the nature of services. Most consultants operate based on expertise and reputation.",
      },
      {
        question: "Which types of consultants are most in demand?",
        answer:
          "Operations consultants, financial consultants, HR consultants, compliance consultants, and business strategy consultants are frequently in demand.",
      },
      {
        question: "How can a consultant safeguard their rights?",
        answer:
          "By clearly defining deliverables, fees, timelines, and boundaries in a legally enforceable consulting agreement. Avoid starting work without a signed agreement.",
      },
      {
        question: "Who qualifies as a consultant?",
        answer:
          "A consultant is an individual with expertise in a specific area, offering professional advice to clients or organizations. Consultants may work independently or through firms.",
      },
      {
        question: "When should a consulting agreement be used?",
        answer:
          "Whenever an organization or individual hires an external expert or agency for strategic advice or specialized project work outside their internal capabilities.",
      },
      {
        question: "Is a consulting agreement legally binding?",
        answer:
          "Yes. Once signed, it becomes a legally enforceable contract binding both the consultant and the client.",
      },
      {
        question: "What must be included in a consulting agreement?",
        answer:
          "Key elements include consultant’s duties, project scope, deliverables, payment terms, confidentiality, dispute resolution, and termination clauses.",
      },
      {
        question: "Who are the parties involved in a consulting agreement?",
        answer:
          "The consultant and the client (individual or organization) seeking consultancy services.",
      },
      {
        question: "What law governs consulting agreements in India?",
        answer:
          "Consulting agreements in India are governed under the Indian Contract Act, 1872.",
      },
    ],
  },

  "tenant-eviction-notice": {
    title: "Tenant Eviction Notice in India",
    description:
      "Understand the legal process and rights involved in evicting a tenant lawfully in India.",
    overview: [
      {
        heading: "Overview of Tenant Eviction Notice",
        content:
          "Eviction is the legal process by which a landlord or property owner orders a tenant to vacate the premises for a valid reason. Landlords may issue an eviction notice for causes such as failure to pay rent, breach of lease terms, non-payment of charges, or illegal activities. Since rent laws vary by state in India, landlords must follow due legal procedures before eviction. The initial step involves serving a formal eviction notice detailing the reason and time frame for vacating the property.",
      },
      {
        heading: "What are Eviction Laws in India?",
        content:
          "The Rent Control Act governs rental properties across India and defines the rights and duties of landlords and tenants. Rental and lease agreements work similarly by allowing possession transfer for a defined period. The Act ensures a structured rental relationship and lays out the procedures for legal eviction.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of a Tenant Eviction Notice",
        content:
          "• Establishes a formal legal record of eviction intent\n• Helps avoid illegal or forceful evictions\n• Provides the tenant a fair opportunity to respond or comply\n• Strengthens the landlord’s position if the case proceeds to court\n• Ensures compliance with Indian rent control laws",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Tenant Eviction",
        content:
          "• Copy of rental or tenancy agreement\n• Eviction notice served to the tenant\n• Rent receipts or proof of non-payment\n• Evidence of tenancy violations (e.g., property damage, illegal activity)\n• Proof of delivery of eviction notice (registered post, acknowledgment)\n• Ownership documents of the property",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Tenant Eviction in India",
        content:
          "• Identify valid legal grounds such as rent default, lease violation, or personal need\n• Serve a legal eviction notice to the tenant outlining the issue and expected action\n• Wait for tenant compliance – either to pay dues or vacate\n• If non-compliance continues, file an eviction petition in the Rent Control Court\n• Attend court hearings and provide necessary documentation\n• If the court issues an eviction order, seek police assistance to enforce the order if required",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Time Required for Eviction Process",
        description:
          "The eviction process generally takes 1 to 3 months from notice issuance to court order, depending on case complexity and tenant response.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Us for Tenant Eviction Support?",
        description: [
          "We offer legal expertise in drafting, serving notices, and court representation.",
        ],
        points: [
          "Experienced legal professionals",
          "Drafting and filing support",
          "Full process handling from notice to enforcement",
        ],
      },
    ],
    faq: [
      {
        question:
          "What is the difference between eviction and unlawful detainer?",
        answer:
          "Unlawful detainer refers to illegal occupation of property after the lease ends or terms are violated. Eviction is the legal process used to remove such occupants.",
      },
      {
        question: "What is a writ of possession?",
        answer:
          "A writ of possession is a court order for tenant eviction and removal of belongings, executed with police assistance if needed.",
      },
      {
        question: "Is self-help eviction legal in India?",
        answer:
          "No. Landlords must not cut utilities or forcibly evict tenants. Doing so is considered harassment and illegal under Indian law.",
      },
      {
        question: "Can tenants sue landlords for self-help eviction?",
        answer:
          "Yes. Tenants can sue for trespass, harassment, and wrongful eviction if the landlord attempts to evict without following legal procedures.",
      },
      {
        question: "Can landlords file a civil suit for eviction?",
        answer:
          "No. Eviction must be pursued through the Rent Control Court, not a civil suit.",
      },
      {
        question: "What does eviction mean?",
        answer:
          "Eviction is a legal action by a landlord to remove a tenant from rented property for valid reasons such as non-payment or agreement violations.",
      },
      {
        question: "What is a tenancy agreement?",
        answer:
          "A tenancy agreement is a legal contract between landlord and tenant outlining rental terms, obligations, and rent.",
      },
      {
        question: "Who are the parties to a tenancy agreement?",
        answer: "The landlord and the tenant are the two parties involved.",
      },
      {
        question: "What actions by a tenant justify eviction?",
        answer:
          "Non-payment of rent, property damage, breach of agreement, or illegal use of the premises can justify an eviction notice.",
      },
      {
        question: "What can a landlord do if the tenant refuses to vacate?",
        answer:
          "The landlord can file an eviction petition in court and enforce the order through legal means.",
      },
      {
        question: "Is the security deposit refundable upon eviction?",
        answer:
          "It depends on court direction. If the tenant damaged the property, the landlord can deduct repair expenses from the deposit.",
      },
    ],
  },

  "vendor-agreement": {
    title: "Vendor Agreement in India",
    description:
      "Comprehensive guide to drafting, negotiating, and enforcing vendor agreements for the supply of goods or services.",
    overview: [
      {
        heading: "Overview of Vendor Agreement",
        content:
          "A Vendor Agreement is a legally binding written contract that outlines the terms and conditions under which a vendor will provide goods or services to a customer. It includes key details such as the date, time, and location for delivery of goods or services. Vendor agreements help ensure mutual understanding and reduce risks by clearly stating rights and obligations.",
      },
      {
        heading: "Applicable Law",
        content:
          "In India, vendor agreements are governed by multiple laws including the Indian Contract Act, 1872, the Consumer Protection Act for safeguarding buyers’ rights, and the GST Act which applies when goods or services are supplied and tax obligations arise.",
      },
      {
        heading: "Negotiation and Drafting",
        content:
          "Although verbal agreements may occur between known parties, formalizing a vendor agreement in writing is essential. The process includes introducing parties, stating agreed terms and conditions, and allowing modifications before signing. It ensures clarity on financial arrangements, responsibilities, and delivery expectations.",
      },
      {
        heading: "Requirement of a Vendor Agreement",
        content:
          "A complete vendor agreement should include party details, confirmation of a valid license (if applicable), description of products or services, tax provisions, and clear delivery schedules. It helps define the business transaction and avoid ambiguity.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages",
        content:
          "• Defines business transactions with written clarity\n• Increases efficiency by outlining procedures\n• Includes dispute resolution mechanisms\n• Minimizes risks related to pricing, delivery, and unforeseen events\n• Maintains professional business relationships",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Requirements",
        content:
          "• Names, addresses, and contact details of both parties\n• Confirmation of vendor's valid license (if applicable)\n• Scope of services or goods\n• Delivery details including time, place, and method\n• Payment terms and applicable taxes\n• Confidentiality and indemnity clauses\n• Termination and dispute resolution provisions\n• Signatures and date of agreement",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Drafting a Vendor Agreement",
        content:
          "• Engage a legal expert to discuss objectives and requirements\n• Provide contract details including scope, terms, and payment\n• Lawyer drafts initial agreement for review\n• Parties suggest revisions and approve final draft\n• Final agreement is signed and becomes enforceable",
      },
      {
        heading: "Common Elements in a Vendor Agreement",
        content:
          "• Pricing: Fixed or variable as per mutual agreement\n• Delivery Terms: Schedule, location, and installment options\n• Payment Terms: Method, timelines, and penalties\n• Indemnity Clause: Liability for defective or damaged goods\n• Termination Clause: Conditions for ending the agreement\n• Warranties: Representations and guarantees by parties\n• Confidentiality: Non-disclosure of sensitive information\n• Dispute Resolution: Arbitration or mediation preferred",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Finalizing Vendor Agreement",
        description:
          "Vendor agreements typically take around 3 to 4 days to finalize.",
        steps: [
          {
            title: "Initial Consultation",
            duration: "1 day",
            description: "Discuss objectives, scope, and necessary clauses.",
          },
          {
            title: "Drafting Agreement",
            duration: "2 days",
            description: "Lawyer prepares and shares the draft agreement.",
          },
          {
            title: "Review and Modifications",
            duration: "1 day",
            description: "Parties suggest changes and finalize the terms.",
          },
          {
            title: "Signing",
            duration: "1 day",
            description:
              "Both parties sign and retain copies of the agreement.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostatup?",
        description: [
          "Dostatup provides expert legal assistance for customized vendor agreements tailored to your business needs.",
        ],
        points: [
          "Experienced legal drafting team",
          "Quick turnaround time",
          "Clarity in terms and protections",
          "End-to-end support including negotiation and execution",
        ],
      },
    ],
    faq: [
      {
        question: "What is a vendor agreement?",
        answer:
          "It is a contract between parties where one party, known as the vendor, agrees to perform specified work or provide goods under mutually agreed terms in exchange for payment.",
      },
      {
        question: "What is meant by Vendor Leasing?",
        answer:
          "Vendor Leasing refers to a partnership between a leasing company and a vendor where the leasing company offers financing options to the vendor’s customers to boost sales.",
      },
      {
        question: "What is a Vendor Loan?",
        answer:
          "A Vendor Loan occurs when a vendor provides financial assistance to customers to purchase goods or services, to be repaid at a later date.",
      },
      {
        question: "Do vendor loans carry higher interest rates?",
        answer:
          "Yes, vendor loans typically have higher interest rates compared to traditional loans from banks.",
      },
      {
        question: "What are the key elements of a vendor agreement?",
        answer:
          "Key elements include pricing, delivery schedule, termination clause, confidentiality, payment terms, dispute resolution, and other mutually agreed provisions.",
      },
      {
        question: "What is a vendor deposit?",
        answer:
          "A vendor deposit is an advance payment made by the customer before goods or services are delivered, often recorded against the final invoice.",
      },
      {
        question: "What are the benefits of a vendor agreement?",
        answer:
          "Benefits include improved efficiency, reduced risk, enforceable obligations, and clear communication between vendor and client.",
      },
      {
        question: "What is the process for drafting a vendor agreement?",
        answer:
          "Consult a legal expert, provide details of the transaction, review the draft agreement, request modifications, and sign the finalized version.",
      },
      {
        question: "Who is a vendor?",
        answer:
          "A vendor is an individual or business entity that supplies goods or services as agreed upon in the vendor agreement.",
      },
      {
        question: "Who is a supplier in a vendor agreement?",
        answer:
          "The vendor is also referred to as the supplier when supplying goods or services to the customer.",
      },
      {
        question: "What is a Statement of Work?",
        answer:
          "A Statement of Work (SOW) is an attachment to the vendor agreement that defines scope, costs, responsibilities, and timelines for execution.",
      },
      {
        question: "Is registration of a vendor agreement mandatory?",
        answer:
          "No, vendor agreements in India are not required to be registered. They are legally valid upon signing by both parties.",
      },
    ],
  },

  "license-agreement": {
    title: "License Agreement in India",
    description:
      "Comprehensive guide to creating, negotiating, and managing license agreements for intellectual property.",
    overview: [
      {
        heading: "Overview of License Agreement",
        content:
          "Under Section 52 of the Indian Easement Act, 1882, a license is permission to do something on another’s immovable property that would otherwise be unlawful and does not grant any property interest. In intellectual property, a license agreement is a written contract in which the licensor permits the licensee to use specified IP under agreed terms and conditions for a defined period.",
      },
      {
        heading: "Laws Governing Licensing Agreements",
        content:
          "Licensing agreements are governed by multiple statutes including the Indian Contract Act, 1872, Copyright Act, 1957, Trade Marks Act, 1999, Design Act, 2000, Patents Act, 1970, Competition Act, 2002, and applicable state stamp‑duty laws.",
      },
      {
        heading: "Key Elements of a Licensing Agreement",
        content:
          "Typical clauses include recitals, party details, tenure, scope of usage, license fee and payment schedule, force majeure, indemnification, accounting and audits, governing laws, and dispute‑resolution mechanism.",
      },
      {
        heading: "Types of Licensing Agreements",
        content:
          "• Exclusive licensing – sole rights to the licensee\n• Non‑exclusive licensing – licensor may license others\n• Co‑exclusive licensing – limited number of licensees\n• Sole licensing – licensee has exclusive rights while licensor also retains usage",
      },
      {
        heading: "Issues Covered by Licensing Agreements",
        content:
          "Agreements often address copyright, patents, trademarks, service marks, and trade secrets, each with specific usage rights, royalties, and quality‑control provisions.",
      },
      {
        heading: "Major Concerns in Licensing",
        content:
          "Key concerns include fair license‑fee calculation, quality control to protect brand reputation, and clearly defined scope of usage aligned with market value.",
      },
      {
        heading: "Risks of Not Having a Written Agreement",
        content:
          "Absence of a clear contract may lead to IP misuse, loss of revenue, confusion over rights, and difficulty enforcing legal remedies.",
      },
      {
        heading: "End User Licensing Agreement (EULA)",
        content:
          "An EULA is a contract between software developers and users that restricts transfer of rights and protects the licensor’s IP from unauthorized copying or usage.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages of Licensing",
        content:
          "• Access to new markets and wider customer base\n• Monetization of unused technological assets\n• Generation of additional revenue and profit for both parties\n• Reduced risk and cost compared to full ownership transfer\n• Protection of intellectual property through contractual safeguards",
      },
    ],
    documentsRequired: [
      {
        heading: "Licensing Agreement Checklist",
        content:
          "• Accurate party identification with registration details\n• Specific duration and renewal or termination terms\n• Proof of licensor’s ownership and right to sublicense\n• Comprehensive description of licensed IP\n• Clear definitions of technical terms\n• Detailed payment schedule and royalty formula\n• Indemnification protecting the licensor\n• Broad force‑majeure clause\n• Compliance with current and future legal requirements",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Draft a Licensing Agreement",
        content:
          "• Consult a legal professional to outline objectives and IP details\n• Draft clear, simple language avoiding ambiguous abbreviations\n• Incorporate all essential clauses covering scope, fees, confidentiality, dispute resolution, and termination\n• Review and negotiate terms to reflect mutual intent\n• Execute the agreement with signatures and applicable stamp duty\n• Register the agreement with relevant authorities where mandatory",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Typical Timeline for Finalizing a License Agreement",
        description:
          "Most licensing agreements can be drafted, negotiated, and signed within one to two weeks, depending on complexity and responsiveness of parties.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostatup?",
        description: [
          "Dostatup offers expert assistance in drafting customized licensing agreements that protect IP and align with business goals.",
        ],
        points: [
          "Specialized IP legal team",
          "Tailored clauses covering all risks",
          "Guidance on registration and compliance",
          "Transparent, fixed‑fee packages",
        ],
      },
    ],
    faq: [
      {
        question: "What is the difference between licensing and assignment?",
        answer:
          "Licensing grants temporary permission to use IP, while assignment permanently transfers ownership rights to the assignee.",
      },
      {
        question: "Which agreement transfers full ownership of IP?",
        answer:
          "An assignment agreement transfers complete ownership, unlike a license agreement.",
      },
      {
        question: "Who is the first owner of copyright?",
        answer:
          "Section 17 of the Copyright Act, 1957 states that the author of the work is the first owner of copyright.",
      },
      {
        question: "Can licensors receive royalties?",
        answer:
          "Yes. Royalty amounts and payment methods are detailed in the licensing agreement.",
      },
      {
        question: "Why is a licensing agreement important?",
        answer:
          "It safeguards the licensor’s IP against misuse, defines usage terms, and serves as legal evidence in case of infringement.",
      },
      {
        question: "What risks exist without a licensing agreement?",
        answer:
          "Risks include misuse of IP, revenue loss, disputes over scope, and difficulty enforcing rights.",
      },
      {
        question: "Is registration of a licensing agreement mandatory?",
        answer:
          "Yes. Licensing agreements must be registered with relevant authorities to ensure enforceability.",
      },
      {
        question: "How are disputes resolved under a licensing agreement?",
        answer:
          "Disputes may be resolved through mutually agreed arbitration or by approaching a competent court with jurisdiction.",
      },
    ],
  },

  "legal-notice-for-defamation": {
    title: "Legal Notice for Defamation in India",
    description:
      "Guide to issuing a legal notice for defamation, the laws involved, required documents, and next steps if the matter is not resolved.",
    overview: [
      {
        heading: "Overview of Legal Notice for Defamation",
        content:
          "Defamation occurs when false statements are made with malicious intent to harm a person’s reputation. It can be libel (written) or slander (spoken). Under Section 499 of the Indian Penal Code, 1860, an aggrieved person may send a legal notice for defamation before initiating civil or criminal proceedings. The notice demands corrective action such as a public apology or compensation.",
      },
      {
        heading: "Need for a Legal Notice",
        content:
          "Sending a legal notice serves as a pre‑litigation warning. It informs the accused of potential legal consequences and offers a chance to settle the matter amicably, preserving court time and costs.",
      },
      {
        heading: "Laws Governing Defamation",
        content:
          "Civil defamation is pursued under the law of torts and the Code of Civil Procedure, 1908. Criminal defamation is defined under Section 499 of the Indian Penal Code with punishment under Section 500. The right to reputation is a facet of Article 21 of the Constitution, while freedom of speech under Article 19 is subject to reasonable restrictions such as defamation.",
      },
    ],
    benefits: [
      {
        heading: "Why Issue a Legal Notice First?",
        content:
          "● Provides formal intimation and opportunity to retract or apologise\n● Establishes a written record of demands and timeline\n● May result in compensation without lengthy litigation\n● Demonstrates seriousness of the claim",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "● Proof of defamatory content (article, video, social‑media post, broadcast clip)\n● Identity proof of the aggrieved party\n● Evidence of reputational harm (loss of business, social standing, or mental anguish)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Issuing a Legal Notice",
        content:
          "● Engage an advocate experienced in defamation matters\n● Advocate drafts the notice on official letterhead with full party details and facts\n● Notice states defamatory acts, demands retraction or apology, and allows reasonable time to comply\n● Notice is signed by the advocate and client, then sent via registered post with acknowledgement\n● If the accused fails to comply, the aggrieved party may file a civil suit for damages or a criminal complaint before a Judicial Magistrate",
      },
      {
        heading: "Key Components of a Defamation Notice",
        content:
          "● Advocate’s letterhead and contact details\n● Date of issuance and addresses of both parties\n● Detailed description of defamatory statements and where they were published\n● Demand for relief (public apology, retraction, or compensation)\n● Explanation of harm caused and proposed remedy\n● Signature of advocate and aggrieved party",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Timeline Considerations",
        description:
          "A legal notice can be prepared and dispatched within a few days. Under the Limitation Act, a defamation suit must be filed within one year from the date of the defamatory act.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "Dostartup provides end‑to‑end support for drafting defamation notices and pursuing legal remedies.",
        ],
        points: [
          "Experienced defamation lawyers",
          "Accurate drafting and timely dispatch",
          "Strategic advice on civil and criminal options",
          "Comprehensive litigation support if required",
        ],
      },
    ],
    faq: [
      {
        question: "What is defamation?",
        answer:
          "Defamation is the act of harming a person’s reputation through false statements, recognised as both a civil wrong and a criminal offence in India.",
      },
      {
        question:
          "Is sending a legal notice mandatory before filing a defamation case?",
        answer:
          "It is not compulsory, but it is advisable as a precautionary step and may lead to amicable resolution.",
      },
      {
        question: "What is the time limit to file a defamation case?",
        answer:
          "A defamation suit must be filed within one year from the date of publication of the defamatory statement.",
      },
      {
        question: "How should one respond to a defamation notice?",
        answer:
          "Reply point‑wise through a lawyer, either denying allegations with justification or accepting fault and complying with the demands.",
      },
      {
        question: "Can private conversations amount to defamation?",
        answer:
          "No. Defamation requires publication to at least one third party.",
      },
      {
        question: "Are statements made in court protected?",
        answer:
          "Yes. Statements by witnesses under oath are privileged and cannot give rise to defamation claims.",
      },
      {
        question: "What compensation can be claimed?",
        answer:
          "The aggrieved party may claim monetary damages for emotional, professional, or financial harm caused by the defamatory act.",
      },
    ],
  },

  "legal-notice-for-non-payment-of-salary": {
    title: "Legal Notice for Non-Payment of Salary in India",
    description:
      "Learn how to issue a legal notice for unpaid salary, applicable laws, required documents, and further legal remedies.",
    overview: [
      {
        heading: "Overview of Legal Notice for Non-Payment of Salary",
        content:
          "A legal notice is a formal warning sent to an employer for failing to pay salary, indicating the employee's intent to initiate legal proceedings. It outlines the grievance, relevant legal obligations, and a specified timeframe for resolution. Issued under Section 80 of the Code of Civil Procedure, 1908, it acts as a pre-litigation tool to encourage settlement and prevent unnecessary litigation.",
      },
      {
        heading: "Reliefs That Can Be Claimed",
        content:
          "An employee may claim:\n● The total unpaid salary due\n● Interest on the delayed salary payment, if applicable",
      },
      {
        heading: "Governing Laws for Salary Payment in India",
        content:
          "● Contract Labour (Regulation and Abolition) Act: Makes contractors and principal employers liable for salary payment.\n● Shops and Establishment Act, 1953: Mandates double wages for overtime and penalties for delayed salary.\n● Minimum Wages Act, 1948 and Payment of Wages Act, 1936: Ensure timely salary and lawful deductions.\n● Industrial Disputes Act: Section 33C provides a legal mechanism to claim unpaid wages.",
      },
    ],
    benefits: [
      {
        heading: "Why Send a Legal Notice?",
        content:
          "● Provides a formal channel to address salary delays\n● Serves as legal proof of attempted resolution\n● Encourages out-of-court settlement\n● Offers a chance to recover dues without lengthy litigation",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required",
        content:
          "● Appointment letter\n● Employment contract\n● Bank statements showing salary non-payment\n● Details of perks or benefits offered during employment",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Sending a Legal Notice",
        content:
          "1. Hire an experienced employment lawyer, such as those at dostartup\n2. Share complete information and documentation\n3. Advocate drafts the legal notice covering facts, claims, and legal obligations\n4. Review and approve the draft\n5. Dispatch the notice via registered post or courier with acknowledgment",
      },
      {
        heading: "What a Legal Notice Should Include",
        content:
          "● Advocate’s letterhead and contact info\n● Date of issuance\n● Employer and employee details\n● Summary of the grievance and violated rights\n● Legal basis and remedy demanded\n● Timeframe for resolution\n● Signatures of both advocate and employee",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Limitation Period",
        description:
          "A recovery suit for unpaid salary must be filed within 3 years from the date the salary became due.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "Dostartup offers specialized legal support for employment-related matters, including salary disputes.",
        ],
        points: [
          "Experienced in employment and labor law",
          "Accurate legal notice drafting",
          "Support for alternative legal remedies",
          "Complete guidance through recovery and litigation process",
        ],
      },
    ],
    faq: [
      {
        question: "What if the employer ignores the legal notice?",
        answer:
          "The employee may proceed with legal remedies such as arbitration, Labour Court petition, or complaint to the Registrar of Companies.",
      },
      {
        question: "What is the maximum duration for withholding salary?",
        answer:
          "As per the Payment of Wages Act, salary can be withheld for up to 30 days, especially for notice period compliance or recovery of company property.",
      },
      {
        question: "Can legal notice be issued for bonus or EPF dues?",
        answer:
          "Yes, legal notice can also be served for unpaid bonuses and Provident Fund contributions.",
      },
      {
        question:
          "What documents are required to serve a salary-related legal notice?",
        answer:
          "Appointment letter, employment contract, bank statements, and benefit details are needed to substantiate the claim.",
      },
      {
        question: "What can be demanded in the legal notice?",
        answer:
          "Full unpaid salary, interest for delay, and a specific timeline for resolution can be demanded.",
      },
      {
        question: "What is a legal notice for salary non-payment?",
        answer:
          "It is a formal written communication informing the employer of pending salary dues and potential legal consequences.",
      },
      {
        question:
          "Why is it important to send a legal notice before court action?",
        answer:
          "It provides a final opportunity to settle the matter amicably and serves as legal evidence of good faith by the employee.",
      },
      {
        question: "Under which law is the notice sent?",
        answer:
          "Section 80 of the Code of Civil Procedure, 1908, governs such civil legal notices.",
      },
      {
        question: "How can a lawyer help?",
        answer:
          "A lawyer ensures proper drafting, legal validity, and strategic positioning for stronger case outcomes.",
      },
      {
        question: "Which authority helps recover unpaid salaries?",
        answer:
          "Labour Commissioner, Labour Court, or Registrar of Companies, depending on the type of employer.",
      },
      {
        question: "What are alternate remedies if salary is unpaid?",
        answer:
          "Arbitration (if clause exists), Labour Commissioner complaint, or legal suit under Industrial Disputes Act.",
      },
      {
        question: "What laws regulate salary payment?",
        answer:
          "Key laws include the Indian Contract Act, Shops and Establishments Act, Payment of Wages Act, and Industrial Disputes Act.",
      },
    ],
  },

  "model-approval-certificate": {
    title: "Model Approval Certificate for Weights & Measures — At a Glance",
    description:
      "Summary of India’s model approval requirements under the Legal Metrology Act for weighing and measuring instruments.",
    overview: [
      {
        heading: "What Counts as “Model Approval”?",
        content:
          "A Model Approval Certificate confirms that a specific design of weight or measure has passed prescribed laboratory tests and meets technical and metrological standards. Once granted, the model may be manufactured, imported, and sold anywhere in India, subject to verification and stamping. Exemptions include retail brass or cast‑iron weights, beam scales, length measures (except flexible tapes), and capacity measures up to 20 litres for milk, kerosene, or potable liquor.",
      },
      {
        heading: "Who Must Apply?",
        content:
          "● Manufacturers planning to produce weighing or measuring instruments in India\n● Importers bringing such instruments into India (who must also hold a Dealer Licence to sell them)",
      },
      {
        heading: "Legal Basis",
        content:
          "Under Section 22 of the Legal Metrology Act, 2009, every weight or measure must conform to standards set by the Department of Legal Metrology. Unless exempt, model approval must be obtained before the first unit is made or imported. The Director of Legal Metrology (Ministry of Consumer Affairs) is the approving authority.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Holding a Certificate",
        content:
          "● Reduces transaction costs by preventing disputes over accuracy\n● Promotes domestic and international trade through harmonised standards\n● Protects government revenue tied to excise and customs duties based on verified quantities\n● Aligns with global metrology norms to remove technical barriers\n● Builds consumer trust in products bearing the certified model mark",
      },
      {
        heading: "Eligibility & Foreign Approvals",
        content:
          "Models must satisfy Indian metrological and safety specifications. If an identical model holds approval abroad and meets Indian standards, the Director may grant approval with or without further testing.",
      },
    ],
    documentsRequired: [
      {
        heading: "Document Checklist",
        content:
          "● Applicant’s name and address (plus overseas maker’s details if imported)\n● Brief description, class and intended use of the instrument\n● Metrological and technical specifications\n● Manufacturer’s test procedure and quality‑control plan\n● Brand/trade name and model code\n● Schematic diagrams, circuit layouts, installation drawings\n● Two photographs of the actual unit (for digital types, include PCB images)\n● User manuals, brochures and operating instructions\n● Proof of payment of prescribed fee under Rule 19\n● Any additional information to evaluate performance",
      },
    ],
    registrationProcedure: [
      {
        heading: "Application Process for Manufacturers",
        content:
          "● Collect documents and fill Form MA\n● Submit form, prescribed fee and a sample unit to the Directorate of Legal Metrology for laboratory testing\n● Receive test results; if compliant, certificate is issued",
      },
      {
        heading: "Application Process for Importers",
        content:
          "● Assemble required documents and complete Form MA\n● Lodge application, fee and sample with the Directorate\n● After scrutiny (and tests if required), the Director issues the certificate",
      },
    ],
    registrationTimeline: [
      {
        heading: "Suspension & Revocation",
        description:
          "The Director may suspend or revoke approval if the model’s performance deviates from certified standards, the design is altered without permission, or updated regulations render it non‑compliant. No action is taken without giving the certificate holder an opportunity to be heard. Instruments made between suspension date and final order must still be verified; if errors exceed permitted limits, use is barred.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Assists",
        description: [
          "Expert dossier preparation to satisfy all Rule 19 requirements",
          "End‑to‑end liaison with Central laboratory for timely testing slots",
          "Real‑time tracking of application status on our client portal",
          "Post‑approval services: marking guidance, licence renewals and amendments",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Is model approval mandatory for all instruments?",
        answer:
          "Only those not specifically exempted under the Rules require approval.",
      },
      {
        question: "What is the certificate’s validity?",
        answer:
          "Valid indefinitely unless suspended or revoked; any design changes require fresh approval.",
      },
      {
        question: "Can foreign test results be used?",
        answer:
          "Yes, if the Director is satisfied they meet Indian criteria; additional tests may still be ordered.",
      },
      {
        question: "Does model approval replace verification stamping?",
        answer:
          "No. Each instrument must still undergo verification and bear the Legal Metrology seal before sale or use.",
      },
    ],
  },

  "lmpc-certificate": {
    title: "LMPC Certificate for Import: A Practical Guide",
    description:
      "Overview of requirements, process, and benefits for obtaining a Legal Metrology Packaged Commodity certificate for pre‑packaged imports under Rule 27.",
    overview: [
      {
        heading: "What Is an LMPC Certificate?",
        content:
          "A statutory approval confirming compliance with labelling, quantity and declaration rules for pre‑packaged goods. Issued by the Department of Consumer Affairs or State Controller, it is required before customs clearance of imports.",
      },
      {
        heading: "Who Needs It?",
        content:
          "● Importing goods for sale in one state – apply to the State Controller of Legal Metrology\n● Importing goods for sale nationwide – apply to the Director of Legal Metrology (Central) via local Controller\n● Manufacturing or repacking imported goods – requires both Importer and Manufacturer/Packer certificates",
      },
      {
        heading: "Types of LMPC Certificates",
        content:
          "• Importer Certificate – for entities that bring pre‑packaged items into India\n• Manufacturer/Packer Certificate – for goods that are repacked, relabelled or altered before sale",
      },
      {
        heading: "Legal Basis",
        content:
          "Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011 and Section 22 of the Legal Metrology Act, 2009 require model approval and LMPC certification within 90 days before first consignment.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages of Registration",
        content:
          "● Avoids customs delays and penalties\n● Builds consumer trust with standardised labels\n● Reduces trade barriers across states\n● Supports accurate duty assessment and government revenue\n● Cuts transaction disputes by verifying declared quantities",
      },
    ],
    documentsRequired: [
      {
        heading: "Document Checklist",
        content:
          "● Trade/Factory/Manufacturing licence (MCD, NDMC, DDA, etc.)\n● GST/Sales‑tax registration\n● IEC (Import‑Export Code)\n● Memorandum & Articles (companies) or partnership deed (firms)\n● ID proof of proprietors/partners/directors (Aadhaar, passport, voter ID)\n● Sample packaging materials (labels, stickers, cartons)\n● Passport‑format photos of key managerial personnel\n● Affidavit of premises conformity (if no municipal licence)\n● Any additional state‑specific forms\n● Proof of payment of prescribed fee under Rule 19",
      },
    ],
    registrationProcedure: [
      {
        heading: "Application Process for Manufacturers",
        content:
          "● Collect documents and fill Form MA\n● Submit form, fee and sample unit to the Directorate of Legal Metrology\n● Receive laboratory test results; if compliant, certificate is issued",
      },
      {
        heading: "Application Process for Importers",
        content:
          "● Assemble documents and complete Form MA\n● Lodge application, fee and sample with the Directorate\n● After scrutiny and tests if required, Director issues the certificate",
      },
    ],
    feesStructure: [
      {
        heading: "Typical Fee Range",
        description:
          "Government and professional charges generally fall between ₹8 999 – ₹20 999, depending on state and application complexity.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing Time",
        description:
          "Typical processing takes up to two months, depending on state jurisdiction, document completeness and laboratory testing slots.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Simplifies LMPC Compliance",
        description: [
          "Pan‑India filing support with local experts for state‑specific requirements",
          "Real‑time application tracking on our secure platform",
          "Document vetting and gap analysis to avoid queries",
          "Post‑registration services: renewals, label reviews and on‑call support",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Is LMPC registration mandatory?",
        answer:
          "Yes, for any pre‑packaged goods entering Indian commerce unless explicitly exempted.",
      },
      {
        question: "How long is the certificate valid?",
        answer: "Valid for five years, renewable before expiry.",
      },
      {
        question: "What happens if I import without an LMPC?",
        answer:
          "Customs clearance may be halted, goods seized and penalties (monetary and criminal) imposed.",
      },
      {
        question: "Can a single LMPC cover multiple states?",
        answer:
          "Apply to the Central Director for nationwide operations; otherwise each state requires separate registration.",
      },
      {
        question: "What are the exemptions?",
        answer:
          "Packs ≤ 10 g/10 ml, agricultural produce > 50 kg, restaurant/hotel fast‑food packs, drug formulations under DPCO 1995, industrial/institutional consumer packs, certain > 25 kg packs.",
      },
      {
        question: "What is the application timeline?",
        answer:
          "Submit applications at least 90 days before first consignment; allow up to two months for processing.",
      },
    ],
  },
  "legal-metrology-dealer-licence": {
    title: "Legal Metrology Dealer Licence — Key Facts",
    description:
      "Key facts about obtaining and maintaining a dealer licence under the State Legal Metrology (Enforcement) Rules, 2011 for trading weights and measures.",
    overview: [
      {
        heading: "Area Requirements",
        content:
          "• Premises: proof of legal possession (sale deed, rent agreement, latest tax receipt or owner’s NOC) and an independent entrance separated from any residence\n• Site plan: simple layout showing sales area, storage and office space\n• Firm constitution: partnership deed, LLP agreement, MoA & AoA plus Certificate of Incorporation\n• Financial capacity: bank statement or net‑worth declaration to show business can sustain inventory and after‑sales obligations\n• Sales‑tax / GST registration: copy of registration certificate\n• Other approvals: trade licence, labour licence, professional‑tax registration, village‑panchayat NOC (if rural)",
      },
      {
        heading: "Who Needs a Dealer Licence?",
        content:
          "Any business marketing or trading in weighing and measuring devices in India must hold a Dealer Licence. Manufacturers or importers acting as dealers need this in addition to their manufacturing or importer approvals.",
      },
    ],
    documentsRequired: [
      {
        heading: "Document Pack (attach to Form LD-1)",
        content:
          "• Identity and address proof of proprietor/directors\n• Two passport‑size photographs\n• Ownership or rent documents for the shop\n• Affidavit pledging compliance with the Legal Metrology Act & Rules\n• Model‑Approval Certificates for devices to be traded\n• Partnership deed or company incorporation papers\n• Employee appointment letters with qualification/experience proof (if any)\n• Shop & Establishment Act registration (urban areas)\n• Site plan and location sketch\n• GST, Professional‑Tax, Labour‑Licence copies\n• Trade licence (where required)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Licensing Workflow",
        content:
          "• Online filing of Form LD‑1 plus scans of all documents to the local Inspector of Legal Metrology\n• Inspection: inspector visits premises within ~15 working days and sends report to Assistant Controller\n• Scrutiny & recommendation: Assistant Controller reviews dossier and forwards to Controller within ~5 working days\n• Fee demand: Controller notifies applicant to pay prescribed fee online\n• Grant of licence: digital Dealer Licence issued once payment is confirmed\nNote: Separate licence required for each state where you trade.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Renewal Basics",
        description:
          "• Validity: 1 to 5 years (state‑specific)\n• Renewal form: LD‑2 plus original licence, GST, Professional‑Tax and Labour‑Licence copies\n• Late applications may attract additional fees or penalties",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Makes It Simple",
        description: [
          "Pan‑India reach: local experts in every state liaise with officials on your behalf",
          "Document vetting & gap check to avoid queries and delays",
          "End‑to‑end tracking: real‑time updates until licence delivery",
          "Post‑licence support: reminders for renewals, amendments and regulatory changes",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is a Dealer Licence?",
        answer:
          "A statutory approval allowing a business to market, trade or stock for sale any weights and measures in India.",
      },
      {
        question: "Who issues it?",
        answer:
          "The State Controller of Legal Metrology (or an authorised officer) where your shop or warehouse is located.",
      },
      {
        question: "Can a dealer sell above MRP?",
        answer:
          "No. Charging more than the Maximum Retail Price is a punishable offence.",
      },
      {
        question: "May I sell unstamped devices?",
        answer:
          "Absolutely not. All weights and measures must bear a valid verification stamp before sale.",
      },
      {
        question: "Do importers and manufacturers need a Dealer Licence?",
        answer:
          "Yes, if they wish to trade or market the instruments in India. Their importer/manufacturer licences alone are not sufficient.",
      },
    ],
  },

  "legal-metrology-manufacturer-licence": {
    title: "Legal Metrology Manufacturer Licence — Essentials at a Glance",
    description:
      "Key facts about obtaining and maintaining a manufacturer licence under the Legal Metrology (General) Rules, 2011 for producing weighing and measuring instruments in India.",
    overview: [
      {
        heading: "Why Obtain the Licence?",
        content:
          "• Cuts transaction costs by minimising disputes over quantity and accuracy\n• Builds buyer confidence through audited, traceable manufacturing\n• Removes technical trade barriers for inter‑state and export movement\n• Secures government revenue tied to duties and taxes on verified measures",
      },
      {
        heading: "Key Application Forms",
        content:
          "• LM‑1: fresh application for a manufacturing licence (Schedule II‑A)\n• LM‑2: renewal of an existing licence (Schedule II‑B)\n• LM‑3: licence document issued by the Controller (Schedule III)\nNote: a valid Model‑Approval Certificate is a pre‑condition; suspension or cancellation of model approval automatically suspends the manufacturer licence.",
      },
      {
        heading: "Core Requirements",
        content:
          "• Premises: proof of legal possession (sale deed, tax receipt, rent deed or owner’s NOC) and adequate floor space vetted by Licensing Authority\n• Workshop Equipment & Testing Facilities: complete toolset, hardness testers for weighbridges, proof of purchase and calibration\n• Firm Constitution & Financial Capacity: partnership deed or MoA/AoA plus incorporation certificate and latest audited statements or net‑worth declaration\n• Utilities & Layout: sanctioned electrical load, wiring safety certificate, site plan marking storage, assembly, test and dispatch zones\n• Technical Documentation: brochures or literature showing design, specifications and tolerances",
      },
    ],
    benefits: [
      {
        heading: "Advantages of Holding a Manufacturer Licence",
        content:
          "• Legal authorisation to produce, assemble and market approved instruments anywhere in India\n• Ensures all devices meet statutory performance and safety benchmarks\n• Facilitates periodic verification and stamping for consumer protection\n• Demonstrates compliance for inspections and market access",
      },
    ],
    documentsRequired: [
      {
        heading: "Document Checklist (attach with Form LM‑1)",
        content:
          "• PAN, Aadhaar or passport and two photographs of proprietor/partners/directors\n• Proof of premises ownership or lease/NOC\n• Location map and detailed site plan\n• Model‑Approval Certificate for each device model\n• List of machinery, gauges and test weights\n• Two affidavits: undertaking to follow Legal Metrology provisions and declaration of no convictions or pending proceedings\n• GST registration, power‑load sanction letter, trademark certificate (if any)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Licensing Procedure",
        content:
          "• File Form LM‑1 with all enclosures and prescribed fee\n• District Nodal Officer forwards file to Legal Metrology Inspector for premises inspection\n• Inspector’s report and recommendations sent to Assistant Controller\n• Queries (if any) issued for rectification before final review\n• Controller demands licence fee once satisfied, then issues Form LM‑3\n• Typical turnaround: 30–45 days for a complete, error‑free application",
      },
    ],
    registrationTimeline: [
      {
        heading: "Penalties for Non‑Compliance",
        description:
          "Manufacturing, selling or repairing weights and measures without a valid licence attracts fines and prosecution under Sections 23 and 46 of the Act, including imprisonment for repeat offences. Verification certificates must always be displayed when demanded by inspectors.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Streamlines the Process",
        description: [
          "Fast onboarding—consult a compliance expert within an hour",
          "Gap analysis and document preparation to pre‑empt inspection queries",
          "Factory‑readiness audit so you pass on the first visit",
          "Real‑time tracking until Form LM‑3 is delivered",
          "Long‑term support for renewals, model approvals and labelling queries",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What does a Manufacturer Licence cover?",
        answer:
          "It authorises the holder to produce, assemble and market approved weighing or measuring instruments in India, subject to periodic verification.",
      },
      {
        question: "Who issues the licence?",
        answer:
          "The Controller of Legal Metrology in the state or Union Territory where the manufacturing unit is located.",
      },
      {
        question: "Can the licence be transferred?",
        answer:
          "No. Any change in ownership or constitution requires a fresh licence application.",
      },
      {
        question: "Is a verification certificate mandatory?",
        answer:
          "Yes. Every individual instrument must pass initial verification and bear a valid stamp before sale.",
      },
      {
        question: "May I also repair devices under a manufacturer licence?",
        answer:
          "No. Repairing requires a separate Repairer Licence unless endorsed by the Controller.",
      },
    ],
  },

  "legal-metrology-repairer-licence": {
    title: "Legal Metrology Repairer Licence — A Clear‑Cut Guide",
    description:
      "Essential information on obtaining and maintaining a repairer licence under the Legal Metrology (General) Rules, 2011 for servicing weights and measures.",
    overview: [
      {
        heading: "Who Is a “Repairer”?",
        content:
          "Defined under Section 2 of the Legal Metrology Act, 2009 as a person engaged in restoring, servicing, calibrating, cleaning, lubricating or adjusting any weight or measure governed by legal‑metrology rules.",
      },
      {
        heading: "Why the Licence Is Mandatory",
        content:
          "• Legitimises the repair, calibration and trade of weights and measures\n• Ensures systematic calibration and traceability of instruments\n• Protects consumers from non‑standard or tampered devices\n• Provides the State with an audit trail for enforcement",
      },
      {
        heading: "Common Devices Covered",
        content:
          "Illustrative list (see Legal Metrology General Rules, 2011 for full list):\n• Volumetric flasks, burettes, syringes, pipettes\n• Clinical thermometers, sphygmomanometers\n• Fuel dispensers, taxi‑meters, water/bulk meters\n• Steel tapes, folding scales, surveying chains\n• Reference and carat weights, standard bars",
      },
    ],
    documentsRequired: [
      {
        heading: "Document Checklist",
        content:
          "• Passport‑size photos and ID proofs of proprietor/partners/directors\n• Proof of premises (sale deed, rent deed or owner’s NOC)\n• Trade, shop or factory registration certificates\n• GST and Professional‑Tax registration\n• List of calibration tools, test weights and purchase invoices\n• Employee list with qualification and experience certificates\n• Previous licence (for renewals)\n• Any additional documents required by State authority",
      },
    ],
    registrationProcedure: [
      {
        heading: "Application Process (Form LR‑1)",
        content:
          "1 – Prepare Form LR‑1 with applicant’s details, workshop address, list of instruments, trade registration numbers, staffing and equipment particulars\n2 – Attach required documents and fee\n3 – Submit to State Controller of Legal Metrology\n4 – Inspection by Legal Metrology officer of premises, tools and test weights\n5 – If compliant, Controller issues the Repairer Licence (valid one year, renewable up to five years)",
      },
    ],
    registrationTimeline: [
      {
        heading: "Penalties for Operating Without a Licence",
        description:
          "• Section 23 prohibits any repair activity without authorisation\n• Section 46 prescribes fine up to ₹5,000 and/or imprisonment up to one year for repeat offences\n• Manufacturers cannot repair their own instruments unless separately licensed as repairers",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Can Help",
        description: [
          "Fast, jargon‑free consultation with a response within one hour",
          "Document review and gap analysis to avoid rejections",
          "End‑to‑end filing of Form LR‑1 with fee payment",
          "Inspection‑readiness checklist and liaison with inspectors",
          "Renewal support and compliance alerts",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Which form is used to apply?",
        answer:
          "Form LR‑1 prescribed under the State Legal Metrology (Enforcement) Rules, 2011.",
      },
      {
        question: "How long is the licence valid?",
        answer:
          "Initially valid for one year; renewable for up to a total of five years.",
      },
      {
        question: "What is the application fee?",
        answer:
          "Each State notifies its own fee schedule; check the latest order of your State Legal Metrology Department.",
      },
      {
        question: "Must repairers keep records?",
        answer:
          "Yes. A bound register noting every instrument received, repaired, tested and delivered is compulsory.",
      },
      {
        question: "What if an inspector is denied entry?",
        answer:
          "Obstructing an officer attracts penalties under Section 53 of the Act, including fines and prosecution.",
      },
    ],
  },

  "packaged-commodity-registration": {
    title: "Packaged Commodity Registration: A Practical Overview",
    description:
      "Under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011, packers, producers and importers must obtain registration before selling pre‑packaged goods.",
    overview: [
      {
        heading: "Why Registration Matters",
        content:
          "Guarantees uniform application of the Legal Metrology Act and Rules; protects consumers by making key product information accessible; provides regulators a clear trail of responsibility when discrepancies arise.",
      },
      {
        heading: "Types of Mandatory Registrations & Permissions",
        content:
          "Importer Registration: Imports packaged commodities into India (Rule 27)\nManufacturer Registration: Manufactures or applies mark to pre‑packaged goods (Rule 27)\nPacker Registration: Pre‑packages goods for retail or wholesale sale (LMPC Certificate under Rule 27)\nPermission for Shorter Address: When full address does not fit on the label (Rule 28)",
      },
      {
        heading: "Essential Filing Criteria",
        content:
          "Premises: List every location used for packing, importing or manufacturing\nCommodity List: Specify all products covered by the registration\nFuture Changes: Report additions or deletions of premises or products for endorsement",
      },
    ],
    documentsRequired: [
      {
        heading: "Key Documents (Indicative List)",
        content:
          "Applicant’s name and full address; details of commodities; prescribed fee per category; self‑attested identity and address proofs; passport‑size photographs; tax registrations (GST, PAN); trade, factory or manufacturing licence (or affidavit if none); memorandum & articles of association or partnership deed; any additional documents demanded by local Legal Metrology office.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Registration Process",
        content:
          "Application: Submit Form LMPC‑I (or state equivalent) plus fee to the Director/Controller, Legal Metrology.\nDocument Scrutiny: Officers verify form and attachments for completeness.\nInspection: Inspector visits declared premises to confirm compliance.\nReport & Recommendation: Inspector’s report forwarded to Zonal Officer/Controller.\nApproval: Controller issues certificate if satisfied or provides reasoned refusal.",
      },
      {
        heading: "Permission to Use a Shorter Address",
        content:
          "Apply under Rule 28 when label space is limited. Demonstrate that consumers and regulators can still trace the business. Once approved, the short address may substitute the full address on all relevant labels.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Simplifies Registration",
        description: [
          "Rapid consultation with expert response within one hour",
          "Document vetting for completeness and accuracy",
          "End‑to‑end filing: application, tracking and inspection coordination",
          "Regulatory liaison with Legal Metrology officials",
          "Post‑registration support for label design, amendments and compliance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Which rule mandates packaged commodity registration?",
        answer:
          "Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011.",
      },
      {
        question: "Why is importer registration necessary?",
        answer:
          "To ensure only compliant packages enter India and to attach accountability to the importing entity.",
      },
      {
        question: "What is an LMPC Certificate?",
        answer:
          "The registration granted under Rule 27 authorising packers, manufacturers or importers to market pre‑packaged commodities.",
      },
      {
        question: "When is permission for a shorter address needed?",
        answer:
          "Whenever the full registered address will not fit on the package label but traceability must be preserved.",
      },
      {
        question: "What happens if I skip registration?",
        answer:
          "Selling pre‑packaged goods without registration is an offence that may lead to seizure, fines and prosecution.",
      },
    ],
  },

  "legal-metrology-licence-renewal": {
    title: "Legal Metrology Licence Renewal: A Concise Guide",
    description:
      "Understand who must renew, required information, process steps, and how to avoid lapses under the Legal Metrology Act.",
    overview: [
      {
        heading: "Who Must Apply for Renewal?",
        content:
          "Manufacturers of weighing and measuring instruments or related devices; dealers/importers who sell or market such instruments (importers acting as dealers need both licences); repairers who clean, lubricate, calibrate, paint, or otherwise service weights and measures. Note: end-users of approved instruments do not need this licence.",
      },
      {
        heading: "Information Required on the Renewal Form",
        content:
          "Applicant’s full name, residential and e‑mail address, contact number; existing licence number; premises address for renewal; proprietor’s father’s or spouse’s name; names of all partners or directors; category and type of weight/measure; trademark or monogram used; workshop and testing facilities; VAT/CST/Professional‑tax/Income‑tax registration numbers.",
      },
      {
        heading: "Key Officials",
        content:
          "Assistant Controller: receives and scrutinises renewal applications, appoints inspector, issues recommendations. Controller/Deputy Controller: appellate authority, grants or rejects the renewed licence.",
      },
    ],
    benefits: [
      {
        heading: "Licence Categories Eligible for Renewal",
        content: "Manufacturer Licence; Dealer Licence; Repairer Licence.",
      },
      {
        heading: "Why Timely Renewal Matters",
        content:
          "• Avoids business disruption and penalties\n• Maintains credibility with buyers, suppliers, and regulators\n• Ensures instruments remain traceable to an authorised, verified source",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Typically Requested",
        content:
          "• Copy of current valid licence\n• Proof of premises ownership/lease (sale deed, tax receipt, rent agreement, or owner’s NOC)\n• Lists of tools, testing equipment, and workers\n• Firm‑constitution documents (partnership deed, Memorandum & Articles, etc.)\n• Financial‑status proof (bank statement, audited accounts, or net‑worth certificate)\n• Evidence of continuous lawful possession of premises\n• Stock and sales statement since last licence period\n• Any additional state‑specific requirements",
      },
    ],
    registrationProcedure: [
      {
        heading: "Renewal Timeline & Process (Rule 11, LME Rules 2011)",
        content:
          "• Apply at least 30 days before licence expiry and pay the prescribed fee\n• Assistant Controller registers the application and appoints an inspector\n• Inspector visits premises and submits report with recommendation\n• Assistant Controller forwards report to Controller/Deputy Controller\n• Controller issues the renewed certificate or a written refusal\n• Late filing attracts an additional fee equal to 100% of the normal renewal charge",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Supports Your Renewal",
        description: [
          "Free initial consultation with response within one hour",
          "Clarify eligibility, documents, and state‑specific nuances",
          "Prepare and file the renewal application and annexures",
          "Coordinate inspection readiness and follow‑up queries",
          "Track status until the renewed licence is issued",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What laws govern weights & measures?",
        answer:
          "The Legal Metrology Act, 2009 and its allied rules including General, Packaged Commodities, Enforcement, Model Approval, National Standards, Numeration, and state‑specific regulations.",
      },
      {
        question: "Is renewal compulsory?",
        answer:
          "Yes. A lapsed licence invalidates any manufacture, sale, or repair activity and may trigger enforcement action.",
      },
      {
        question: "How long is a licence valid?",
        answer:
          "Typically one to five years, depending on state rules and licence category.",
      },
      {
        question: "Is the licence transferable?",
        answer:
          "No. Any change in ownership or constitution requires fresh approval.",
      },
      {
        question: "Where can I complain about measurement irregularities?",
        answer:
          "File a written complaint with the local Controller of Legal Metrology or use state online grievance portals.",
      },
    ],
  },

  "legal-metrology-compliance-and-audit": {
    title: "Legal Metrology Compliance & Audit",
    description:
      "Key compliance requirements and audit procedures for packaged commodities and measuring instruments under the Legal Metrology Act.",
    overview: [
      {
        heading: "Compliance Order (September 2020)",
        content:
          "The Deputy Director of the Legal Metrology Department directed all selling entities to follow the Legal Metrology Act, 2009 and the Packaged Commodities Rules, 2011, mandating uniform declarations on every packaged commodity.",
      },
      {
        heading: "Mandatory Declarations on Packages",
        content:
          "• Name and address of the packer\n• Name and address of the importer\n• Name and address of the manufacturer\n• Country of origin\n• Net quantity\n• Generic or common name of the commodity\n• Date/month/year of packing, manufacture and import\n• “Best Before” or expiry date (month and year)\n• Retail sale price\n• Customer‑care contact details",
      },
    ],
    benefits: [
      {
        heading: "Purpose of Legal Metrology Compliance",
        content:
          "• Uphold uniform standards for weights and measures nationwide\n• Promote a rational metric system (metre, kilogram, litre, etc.)\n• Regulate trade and commerce in weighing and measuring devices\n• Ensure goods are sold and declared using standard units, numbers and weights",
      },
    ],
    registrationProcedure: [
      {
        heading: "Compliance Measures for Packaged Commodities",
        content:
          "• Register all packers, producers and importers as required by the Act and Rules\n• Verify and stamp each registered packaged commodity\n• Use only verified and stamped weighing/measuring instruments\n• Schedule re‑verification for continuously used instruments\n• Maintain records of licensed dealers, repairers and manufacturers\n• Verify immovable instruments on site\n• File monthly and quarterly returns on all instruments used\n• Use standard units when issuing invoices, labels, prices and advertisements\n• Use only approved models of instruments, submitting full applicant details and technical specifications",
      },
      {
        heading: "Audits under Legal Metrology",
        content:
          "Voluntary audits – initiated by manufacturers to demonstrate internal controls; certificates renewed annually.\nMandatory audits – required to show compliance with the Act and Rules; each dispatched product must carry compliant packaging information.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Can Assist",
        description: [
          "Specialised support for Legal Metrology compliance and audits",
          "Guidance on registration, verification, stamping and documentation",
          "End‑to‑end fulfilment of every statutory requirement",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who mandates the declarations on packaged commodities?",
        answer:
          "The Deputy Director of Legal Metrology under the Legal Metrology Act, 2009 and Packaged Commodities Rules, 2011.",
      },
      {
        question: "How are immovable weighing instruments verified?",
        answer:
          "They must be verified and stamped on site—they cannot be transported elsewhere.",
      },
      {
        question: "Is registration compulsory for packers and importers?",
        answer:
          "Yes. Every entity that packs, imports, distributes, sells or delivers pre‑packaged commodities must register.",
      },
      {
        question: "Is model approval of weighing instruments required?",
        answer:
          "Yes. Only government‑approved models may be manufactured, imported or sold.",
      },
      {
        question: "What is the most critical compliance step?",
        answer:
          "Including all mandatory declarations on every pre‑packaged commodity offered for sale.",
      },
      {
        question: "Why are audits important?",
        answer:
          "Audits confirm that instruments conform to statutory standards and that packaging information is accurate.",
      },
      {
        question: "When are audits conducted?",
        answer:
          "Either voluntarily by manufacturers or compulsorily when required by law for each product batch.",
      },
    ],
  },

  "drug-license": {
    title: "Drug License in India – An Overview",
    description:
      "Step-by-step guide to obtaining and complying with drug licensing requirements under the Drugs and Cosmetics Act.",
    overview: [
      {
        heading: "What is a Drug License?",
        content:
          "Any business dealing with manufacturing, importing, selling, or distributing medicines, drugs, or cosmetics must hold a Drug License issued under the Drugs and Cosmetics Act by the State or Central Drug Standard Control Organization.",
      },
      {
        heading: "Why is a Drug License Required?",
        content:
          "To ensure safe preparation, storage, and sale of drugs in medically approved quantities, protecting public health through stringent regulation.",
      },
    ],
    benefits: [
      {
        heading: "Key Requirements & Advantages",
        content:
          "• Premises area of at least 10 sq m for retail or 15 sq m for combined wholesale and retail\n• Refrigerator or cold storage for temperature‑sensitive drugs\n• Registered pharmacist on‑site with required qualifications\n• Separate license for each business location\n• Mandatory reporting of any changes to business details to avoid suspension",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents for Online Application",
        content:
          "• Duly signed application form\n• Proof of fee payment (challan)\n• Identity proof (PAN, Voter ID, DL, Passport)\n• Partnership deed or MOA, AOA, COI for companies\n• Board resolution authorizing the application\n• Appointment letter of authorized signatory\n• Storage facility proof (cold storage/refrigerator)\n• Site layout plan and electricity connection details\n• Proof of premises area (10–15 sq m)",
      },
      {
        heading: "Additional Documents for Registered Pharmacists",
        content:
          "• Diploma or degree in Pharmacy\n• Pharmacy Council registration certificate\n• Appointment letter and affidavit of the pharmacist\n• Educational qualifications (10th, 12th, Graduation)\n• Proof of minimum one year experience in drug sales or marketing",
      },
    ],
    registrationProcedure: [
      {
        heading: "How to Apply",
        content:
          "• Register online through the Drug Licensing portal based on entity and license type\n• Obtain a unique application ID upon successful registration\n• Within 15 days, submit hard copies of all required documents to the District Drug Licensing Authority",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain License",
        description:
          "Typically takes around 30 working days, subject to regulatory review and compliance. Engaging experts can help minimise delays.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "Assisted 500+ manufacturers and distributors with drug licensing",
          "99% success rate in approvals",
          "Coverage of 75% of the Indian medical licensing market",
        ],
        points: [
          "Complete documentation and filing support",
          "Expert guidance on compliance and renewals",
          "End-to-end process management",
        ],
      },
    ],
    faq: [
      {
        question: "What is a drug license?",
        answer:
          "A legal permit that authorizes manufacturing, selling, or distributing drugs under the Drugs and Cosmetics Act.",
      },
      {
        question: "What qualifications are required?",
        answer:
          "Pharmacy degree or diploma and, for wholesalers, at least one year of pharmaceutical experience.",
      },
      {
        question: "Do I need separate licenses for different locations?",
        answer:
          "Yes, each premises where drugs are stored or sold requires its own license.",
      },
      {
        question: "What is the validity of a drug license?",
        answer:
          "Generally valid for five years, subject to renewal and compliance with conditions.",
      },
      {
        question: "What if business premises change?",
        answer:
          "The licensing authority must be notified immediately to avoid penalties or cancellation.",
      },
    ],
  },

  "retail-drug-license": {
    title: "Retail Drug License – An Overview",
    description:
      "Step-by-step guide to securing and maintaining a retail drug license under the Drugs and Cosmetics Act, 1940.",
    overview: [
      {
        heading: "Overview of Retail Drug License",
        content:
          "A Retail Drug License is mandatory for any business selling or stocking medicines, drugs, or cosmetics in India. Issued under the Drugs and Cosmetics Act, 1940 by the State Drug Control Organization, it ensures regulatory compliance, accurate record‑keeping, and mandatory notification of business changes.",
      },
      {
        heading: "Why Pre‑requisites Matter",
        content:
          "States grant retail licences at a lower approval rate than wholesale. Key prerequisites—shop area, storage facilities, and registered pharmacist—ensure patient safety and maintain high quality standards in drug retailing.",
      },
    ],
    benefits: [
      {
        heading: "Advantages of Retail Drug License Registration",
        content:
          "• Legal compliance under the Drugs and Cosmetics Act, 1940\n• Business legitimacy and consumer trust\n• Regulatory control and monitoring by authorities\n• Proof of authenticity enhancing brand image",
      },
    ],
    documentsRequired: [
      {
        heading: "Required Documents for Retail Drug License",
        content:
          "• MOA & AOA (for companies) or Partnership Deed/LLP Agreement\n• Identity proof of Director/Partner/Proprietor\n• Ownership proof or rent agreement and NOC\n• Site plan and key plan of premises\n• Board resolution copy\n• Proof of cold storage and air‑conditioning\n• Fee payment proof (challan)\n• Affidavit of no conviction (Director/Partner/Proprietor)\n• Affidavit from pharmacist/competent person\n• Cover letter with applicant details\n• Application in Form 19 with declaration\n• Applicant’s qualification certificates\n• Appointment letter and pharmacy council registration of pharmacist\n• All documents scanned in grayscale PDF format",
      },
    ],
    registrationProcedure: [
      {
        heading: "Registration Process",
        content:
          "1. Create account on the state licensing authority’s online portal\n2. Complete the application form and upload required documents\n3. Schedule and undergo inspection by the Drug Inspector\n4. Upon successful verification, the licensing authority issues the Retail Drug License",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Penalties for Non‑Compliance",
        content:
          "Under Section 18(c) of the Drugs and Cosmetics Act, 1940, selling drugs without a valid license can result in up to three years’ imprisonment and a minimum fine of ₹5,000.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Assists",
        description: [
          "Choose a suitable assistance plan",
          "Submit queries related to retail drug licensing",
          "Share documents with DoStartup experts",
          "Complete necessary formalities",
          "Receive end‑to‑end support until license issuance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question:
          "What are the basic requirements to obtain a Retail Drug License?",
        answer:
          "Minimum 10 sq m of shop space; adequate cold storage; registered pharmacist present during working hours.",
      },
      {
        question: "Is a separate license required for each state?",
        answer:
          "Yes. A separate retail drug license is mandatory for each state where the business operates.",
      },
      {
        question: "How should a licensed drug business maintain accounts?",
        answer:
          "Maintain prescribed records/forms/registers and notify authorities of any changes in operations.",
      },
      {
        question: "What happens if the premises change?",
        answer:
          "You must inform the licensing authority immediately to avoid licence suspension or cancellation.",
      },
      {
        question: "Who is eligible to apply for a Retail Drug License?",
        answer:
          "Any individual or entity meeting premises, storage, and personnel requirements under the Act.",
      },
    ],
  },

  "manufacturing-drug-license": {
    title: "Manufacturing Drug License – An Overview",
    description:
      "Guide to obtaining a manufacturing drug license under the Drugs and Cosmetics Act, 1940.",
    overview: [
      {
        heading: "Overview",
        content:
          "A Manufacturing Drug License is an official permit under the Drugs and Cosmetics Act, 1940 authorizing the manufacture of drugs, medicines, or cosmetics. Issued by the State Drug Licensing Authority or CDSCO, it ensures safety, quality, and legal compliance.",
      },
      {
        heading: "Pre‑requisites",
        content:
          "Manufacturing unit in designated industrial area; disclosure of manufacturing activities; detailed premises layout; process description; employee count; organizational structure; plant registration or NRA approval; site information; list of products; quality‑control lab equipment; proper ventilation, water, and drainage; environmental compliance; Indian agent authorization if applicable; evaluation standards; space and storage details.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Holding a License",
        content:
          "• Legal recognition to manufacture drugs\n• Regulatory monitoring and transparency\n• Proof of authenticity enhancing credibility\n• Builds consumer confidence in product safety",
      },
    ],
    documentsRequired: [
      {
        heading: "Required Documents",
        content:
          "• Board resolution by directors\n• Site plan and key plan (blueprints)\n• Proof of premises possession (rent agreement or ownership)\n• Affidavit of non‑conviction\n• Details of technical staff and laboratory\n• Letter of acceptance from approved testing laboratory",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Application Process",
        content:
          "1. Document Preparation: Gather and certify all required documents.\n2. Online Filing: Submit application and documents via the State Drug Licensing Authority portal and pay fees.\n3. Hard‑copy Submission (if required): Provide physical copies to the District Licensing Office.\n4. Site Inspection: Inspector verifies premises and may interview the applicant.\n5. License Issuance: Controller of Drugs issues the license with a unique registration number.",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Assists",
        description: [
          "Select a plan for expert support",
          "Submit queries related to manufacturing drug licensing",
          "Share documents with DoStartup experts",
          "Complete the application process with guidance",
          "Receive end‑to‑end support until license issuance",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What types of drug licenses exist in India?",
        answer:
          "Manufacturing, Sale, Wholesale, Retail, Restricted, Loan, Import, Multi‑drug.",
      },
      {
        question: "What is a Restricted Drug License?",
        answer:
          "A license for limited drug categories under specific conditions, often without requiring a registered pharmacist's supervision.",
      },
      {
        question: "Who grants drug licenses?",
        answer:
          "State Drug Licensing Authorities or CDSCO under DCGI, depending on license category.",
      },
      {
        question: "What is Form 11 License?",
        answer:
          "A license for importing small quantities of drugs for examination, testing, or analysis.",
      },
      {
        question: "Who is eligible to apply?",
        answer:
          "Any individual or legal entity meeting regulatory requirements for manufacturing, distribution, or sale of drugs/cosmetics.",
      },
      {
        question: "How is renewal handled?",
        answer:
          "Apply through the official portal before expiry, submit renewal documents, and pay applicable fees.",
      },
      {
        question: "Is a license mandatory for medical masks?",
        answer:
          "Only if masks qualify as medical devices under the Drugs and Cosmetics Act.",
      },
      {
        question: "What is a Subsequent Drug License?",
        answer:
          "A license to manufacture additional products after obtaining a primary manufacturing license.",
      },
      {
        question: "Can private premises be licensed?",
        answer:
          "No. Manufacturing premises must be in an approved industrial area.",
      },
    ],
  },

  "wholesale-drug-license": {
    title: "Wholesale Drug License – An Overview",
    description:
      "Guide to securing and maintaining a wholesale drug license under the Drugs and Cosmetics Act, 1940.",
    overview: [
      {
        heading: "Overview",
        content:
          "A Wholesale Drug License permits the holder to purchase, stock, and sell drugs in bulk to retailers. Issued under the Drugs and Cosmetics Act, 1940 by the State Licensing Authority, it is mandatory for any entity dealing in distribution of drugs or cosmetics.",
      },
      {
        heading: "Who Must Apply?",
        content:
          "Any individual, proprietorship, partnership firm, LLP, OPC or company intending to operate as a drug distributor or authorized agent for drugs or cosmetics in India must obtain this license.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Holding a Wholesale License",
        content:
          "• Ensures regulatory oversight and accountability in drug distribution\n• Provides legal compliance and protection against penalties\n• Establishes business credibility and consumer confidence\n• Enables lawful bulk supply to retail pharmacies",
      },
    ],
    documentsRequired: [
      {
        heading: "Required Documents",
        content:
          "• MOA & AOA (for companies), Partnership Deed (for firms) or LLP Agreement\n• Identity proof of directors/partners/proprietors\n• Proof of premises (ownership or rent agreement) and NOC from owner\n• Site plan and key plan\n• Board resolution authorizing application\n• Proof of air-conditioning and refrigeration setup\n• Fee payment proof (challan)\n• Affidavit of no conviction\n• Affidavit from registered pharmacist or competent person\n• Cover letter with applicant details\n• Filled Form 19 and Declaration Form\n• Appointment letter, qualification and experience certificate of the competent person\n• Educational qualification certificate of the applicant",
      },
    ],
    registrationProcedure: [
      {
        heading: "Registration Steps",
        content:
          "1. Create user ID and password on the state drug licensing portal\n2. File Form 19 online, upload scanned documents, and pay government fee\n3. Undergo premises inspection by Drug Inspector\n4. Upon successful verification, Licensing Authority issues Wholesale Drug License",
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing Time",
        content:
          "Typically 30 to 60 days from application submission to license issuance.",
      },
      {
        heading: "Penalties for Non‑Compliance",
        content:
          "Imprisonment of 1–3 years and a fine of not less than ₹5,000 for trading without a valid license (Drugs and Cosmetics Act, 1940).",
      },
    ],
    whyUs: [
      {
        heading: "How DoStartup Assists",
        description: [
          "Choose a plan for expert assistance",
          "Submit queries related to wholesale licensing",
          "Share documents with DoStartup experts",
          "Complete all formalities with our support",
          "Receive your license stress‑free",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question:
          "What are the essential requirements for a Wholesale Drug License?",
        answer:
          "Minimum 15 sq m premises, air‑conditioning, refrigeration, and a qualified pharmacist or competent person on staff.",
      },
      {
        question: "Are separate licenses required for each state?",
        answer:
          "Yes. A separate wholesale license is mandatory for each state of operation.",
      },
      {
        question: "Who qualifies as a competent person?",
        answer:
          "A registered pharmacist with one year of experience or an SSLC pass with four years of relevant experience.",
      },
      {
        question: "How should accounts be maintained?",
        answer:
          "Maintain detailed records of stock, sales, purchases, and returns in compliance with the Act.",
      },
      {
        question: "What operations require separate licenses?",
        answer:
          "Manufacturing, wholesale distribution, retail sale, loan manufacturing, import and restricted categories each require distinct licenses.",
      },
      {
        question: "What address proofs are accepted?",
        answer:
          "Ownership documents, rent agreements, utility bills, and NOCs.",
      },
    ],
  },

  "cdsco-medical-device-registration": {
    title: "CDSCO Medical Device Registration – An Overview",
    description:
      "End-to-end guide to CDSCO registration for medical devices, including manufacturing, import, compliance, fees, and post‑registration requirements.",
    overview: [
      {
        heading: "Role of CDSCO",
        content:
          "The Central Drugs Standard Control Organization (CDSCO) under the DCGI regulates approval, registration and oversight of pharmaceuticals and medical devices in India.",
      },
      {
        heading: "Sector Context",
        content:
          "India’s healthcare market was valued at $200 billion in 2023 and is projected to reach $370 billion by 2025. With over 900 pharmaceutical manufacturers, India ranks 4th globally, driving the need for robust device regulation.",
      },
      {
        heading: "Regulatory Evolution",
        content:
          "Initially only 15 device categories were regulated; now all medical devices and IVDs require CDSCO registration or licensing to align with global benchmarks and ensure patient safety.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of CDSCO Registration",
        content:
          "• Legal market access for manufacturers and importers across India\n• Demonstrates compliance with national safety, efficacy and quality standards\n• Aligns with GMP and Medical Device Rules norms\n• Eligibility for government tenders and procurement",
      },
      {
        heading: "Import License Advantages",
        content:
          "• Grants legal entry to India’s vast med‑tech market\n• Confirms adherence to Indian MDR and GMP regulations\n• Supports participation in public and private sector supply chains",
      },
      {
        heading: "BIS Certification Importance",
        content:
          "• Ensures devices meet Indian safety and performance benchmarks\n• Boosts consumer confidence and professional trust\n• Facilitates market access and distribution\n• Includes performance testing to reduce malfunction risk",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Documents",
        content:
          "Form 40; Device and Plant Master Files; ISO 13485 and CE certificates; free sale certificate; quality assurance certificates; post‑market surveillance plan; test protocols; fee challan; declaration of authenticity.",
      },
      {
        heading: "Additional Support Documents",
        content:
          "Regulatory certificates (FDA, CE, etc.); clinical data summaries; labeling and packaging compliance proofs; authorized agent letter for foreign manufacturers.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Registration for New Devices",
        content:
          "1. Classification: Determine class A–D based on risk\n2. Online Application: Submit via CDSCO SUGAM portal with Form 40 and documents\n3. Fees Payment: Pay per‑site and per‑device fees\n4. Review & Inspection: CDSCO evaluates dossier and may inspect facilities\n5. Approval: Receive registration certificate or rejection with comments",
      },
      {
        heading: "Import License Process",
        content:
          "From Oct 2022, Class A & B and notified Class C & D need import licenses; from Oct 2023 all Class C & D require licensing. Steps mirror new device registration via MD‑14/15 forms.",
      },
      {
        heading: "Voluntary Registration",
        content:
          "Unlisted Class C & D devices can register voluntarily online without fees to ease future compliance.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing Time & Validity",
        description:
          "Registration generally takes 6–9 months; licences are valid for 3 years from issuance unless revoked.",
      },
      {
        heading: "Renewal & Post‑Registration",
        description:
          "Renew at least 9 months before expiry by updating DMF/PMF. Notify CDSCO within 3 months of any change in premises, constitution or device details.",
      },
    ],
    whyUs: [
      {
        heading: "DoStartup’s CDSCO Services",
        description: [
          "Device classification and regulatory strategy",
          "Complete dossier preparation and submission",
          "SUGAM portal account creation and management",
          "Indian Authorized Agent representation",
          "Support for manufacturing, import, loan and test licences",
          "Post‑market surveillance planning and compliance",
          "AERB radiation device approvals",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who must register with CDSCO?",
        answer:
          "All domestic and foreign device manufacturers, importers, authorized agents and IVD producers.",
      },
      {
        question: "Which forms are used?",
        answer:
          "MD‑3/5 for Class A & B manufacturing; MD‑4/6 and MD‑7/9 for loans; MD‑8/10 for Class C & D loans; MD‑14/15 for imports; MD‑16/17 for test licenses; MD‑22/23 for clinical trials; MD‑26/27 for new imports.",
      },
      {
        question: "Are unnotified devices regulated?",
        answer:
          "Yes. All Class C & D devices require licensing from October 1, 2023; voluntary registration was available earlier.",
      },
      {
        question: "What are the fee structures?",
        answer:
          "Class A & B: ₹5,000 per site + ₹1,000 per device; Class C & D: ₹50,000 per site + ₹1,000 per device.",
      },
      {
        question: "What happens if I fail to renew?",
        answer:
          "Lapse may lead to penalties, revocation of licence and inability to legally market devices.",
      },
    ],
  },

  "cdsco-cosmetic-import-registration": {
    title: "CDSCO Cosmetic Import Registration – An Overview",
    description:
      "A complete guide to importing cosmetic products in India, including eligibility, documentation, procedure, and regulatory FAQs under CDSCO.",
    overview: [
      {
        heading: "What is CDSCO Cosmetic Import Registration?",
        content:
          "CDSCO Cosmetic Import Registration is a mandatory certification for importing cosmetic products into India under Rule 21 of the Drugs and Cosmetics Rules, 1945. It ensures imported cosmetics meet quality, safety, and efficacy standards.",
      },
      {
        heading: "What is a Cosmetic?",
        content:
          "Cosmetics include products meant to cleanse, beautify, promote attractiveness, or alter appearance when applied to the human body. This includes their components, such as creams, powders, lotions, and perfumes.",
      },
      {
        heading: "Role of CDSCO",
        content:
          "The CDSCO, under the Ministry of Health & Family Welfare, oversees cosmetic imports. It handles registration, quality control, complaint resolution, coordination with BIS, public inquiries, and RTI responses.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of CDSCO Cosmetic Import Registration",
        content:
          "• Legal authorization to import and sell cosmetics in India\n• Market expansion for foreign cosmetic brands\n• Consumer confidence in product safety and quality\n• Compliance with BIS and CDSCO regulatory standards",
      },
      {
        heading: "DoStartup's Assistance",
        content:
          "• Expert guidance on regulatory processes\n• Technical and documentation compliance support\n• End-to-end services from classification to certification\n• Faster turnaround by avoiding delays and rejections",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Documents",
        content:
          "• Cover letter specifying application type (new, endorsement, etc.)\n• Form COS-1 with undertaking by authorized agent/importer\n• Product ingredient list with percentages\n• Safety declaration on heavy metals, banned dyes, etc.\n• Manufacturer’s license or marketing authorization\n• Free Sale Certificate (FSC)\n• Application fee payment proof (TR-6 challan)",
      },
      {
        heading: "Labeling & Regulatory Documents",
        content:
          "• Product label with name, manufacturer, batch number, expiry, license number, etc.\n• Declaration of no animal testing\n• Non-use of hexachlorophene or heavy metals (within limits)\n• Specifications and testing protocols as per BIS/CDSCO\n• Pack insert or leaflet (if applicable)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process",
        content:
          "1. Classification of Product as per latest CDSCO Gazette Notification\n2. Appointment of an Authorized Indian Agent by the foreign manufacturer\n3. Filing of Form COS-1 and documents via CDSCO SUGAM portal\n4. CDSCO Review and Query Handling\n5. Issuance of CDSCO Cosmetic Import Registration Certificate",
      },
    ],
    feesStructure: [
      {
        heading: "Application Fees",
        description:
          "The application fee must be paid via TR-6 Challan as per CDSCO guidelines. The exact amount varies based on product categories and number of SKUs.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Registration Timeline",
        description:
          "The typical processing time ranges from 3 to 6 months, depending on the completeness of the application and any queries raised by CDSCO.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for CDSCO Cosmetic Registration?",
        description: [
          "Extensive experience in CDSCO import licensing",
          "Streamlined documentation and compliance support",
          "Fast-track application handling to avoid delays",
          "PAN India presence for regulatory coordination",
          "Trusted by cosmetic brands worldwide",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is the definition of a cosmetic in India?",
        answer:
          "A substance intended for application to the human body for cleansing, beautifying, or altering appearance, including components used in cosmetic formulations.",
      },
      {
        question: "What is the purpose of regulating cosmetic imports?",
        answer:
          "To ensure imported cosmetic products are safe, effective, and compliant with BIS and CDSCO standards before being sold in India.",
      },
      {
        question: "Who can import cosmetics into India?",
        answer:
          "An authorized agent, importer, Indian subsidiary, or the foreign manufacturer itself after obtaining CDSCO registration.",
      },
      {
        question: "What if my CDSCO certificate is about to expire?",
        answer:
          "You must apply for renewal before the expiry date by submitting updated documents and paying the applicable fee through the CDSCO SUGAM portal.",
      },
      {
        question: "Who issues the Free Sale Certificate (FSC)?",
        answer:
          "The FSC is issued by the regulatory authority of the country of origin or the Indian Embassy in that country.",
      },
      {
        question: "Is registration required for importing small R&D samples?",
        answer:
          "Yes, prior CDSCO approval is required even for importing small cosmetic quantities for research or testing.",
      },
      {
        question: "Are cosmetics tested on animals allowed in India?",
        answer:
          "No, India prohibits the import of any cosmetics that have been tested on animals.",
      },
      {
        question: "Who issues cosmetic manufacturing licenses in India?",
        answer:
          "State Licensing Authorities (SLAs), in coordination with CDSCO, issue manufacturing licenses for cosmetic products made in India.",
      },
    ],
  },

  "cdsco-medical-device-import-registration": {
    title: "CDSCO Medical Device Registration – An Overview",
    description:
      "Comprehensive guidance on CDSCO Medical Device Registration in India including license categories, registration process, BIS certification, import requirements, classification, fees, documents, and DoStartup assistance.",
    overview: [
      {
        heading: "What is CDSCO Medical Device Registration?",
        content:
          "CDSCO registration is mandatory for manufacturers and importers to legally distribute medical devices in India. Governed by the Central Drugs Standard Control Organization (CDSCO), this registration ensures compliance with safety, quality, and regulatory standards.",
      },
      {
        heading: "Role of CDSCO in Medical Devices",
        content:
          "CDSCO, under the Drug Controller General of India (DCGI), regulates drugs, medical devices, and related health products. It plays a crucial role in licensing, classification, inspection, and post-market surveillance.",
      },
      {
        heading: "Market Overview",
        content:
          "India’s healthcare sector is valued at $200 billion (2023) and projected to reach $370 billion by 2025. CDSCO helps bring the Indian medical device sector in line with global standards, previously unregulated beyond 15 categories.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of CDSCO Medical Device Registration",
        content:
          "• Enables legal market access across India\n• Demonstrates compliance with safety and efficacy standards\n• Required for participating in tenders and government contracts\n• Enhances brand credibility and consumer trust\n• Aligns with GMP and MDR regulations",
      },
      {
        heading: "Benefits of Import License",
        content:
          "• Legal access to one of the world’s largest healthcare markets\n• Ensures adherence to Indian GMP and MDR norms\n• Facilitates participation in both public and private tenders",
      },
      {
        heading: "Importance of BIS Certification",
        content:
          "• Verifies quality and safety per Indian standards\n• Boosts market access and consumer confidence\n• Includes rigorous performance testing to minimize malfunctions",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Documents for CDSCO Medical Device Registration",
        content:
          "• Form 40\n• ISO 13485 Certificate\n• CE Design Certificate\n• Free Sale Certificate (FSC)\n• Device Master File (DMF)\n• Plant Master File (PMF)\n• Quality Assurance Certificates\n• Post-Market Surveillance plan\n• Test Protocols\n• Fee Challan\n• Declaration of Authenticity",
      },
      {
        heading: "Additional Requirements",
        content:
          "• Details of manufacturing facility and product specifications\n• Labeling and packaging compliance documentation\n• Regulatory certificates (CE, FSC, ISO)\n• Classification details (Class A/B/C/D)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process",
        content:
          "1. **Classification**: Identify device class (A, B, C, D)\n2. **Application Submission**: Apply via CDSCO SUGAM portal with Form 40 and documents\n3. **Review & Evaluation**: CDSCO reviews safety, quality, and may inspect premises\n4. **Approval**: License granted or rejected with reasons",
      },
      {
        heading: "CDSCO Medical Device Import Registration",
        content:
          "• **Effective Oct 1, 2022**: All notified Class A to D devices must be licensed\n• **Effective Oct 1, 2023**: Non-notified Class C & D devices also require licensing\n• Steps: Document preparation → SUGAM portal registration → Fee payment → Review and approval",
      },
      {
        heading: "Voluntary Registration (For Unlisted Devices)",
        content:
          "• Available for unlisted Class C & D devices\n• Fully digital process via CDSCO portal\n• No registration fee\n• Helps ensure future compliance readiness",
      },
    ],
    feesStructure: [
      {
        heading: "CDSCO Medical Device License Fees",
        description:
          "• Class A & B: ₹5,000 per site + ₹1,000 per device\n• Class C & D: ₹50,000 per site + ₹1,000 per device",
      },
    ],
    registrationTimeline: [
      {
        heading: "Processing Time and Validity",
        description:
          "• Time to Register: 6–9 months\n• Validity: 3 years (unless revoked)\n• Renewal: Apply at least 9 months before expiry with updated DMF and PMF (if applicable)",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "10+ years of experience in medical device regulatory consulting",
          "Fast-track registration services via expert documentation",
          "PAN India network with CDSCO coordination",
          "Assistance for import, manufacturing, test, and loan licenses",
          "Support for radiation devices (AERB approval)",
          "Expertise in handling CDSCO SUGAM portal registration",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Who can apply for CDSCO medical device registration?",
        answer:
          "Domestic manufacturers, importers, foreign manufacturers (via Indian agents), Indian subsidiaries, and authorized agents can apply.",
      },
      {
        question: "What are the CDSCO device classifications?",
        answer:
          "• Class A: Low risk (e.g., thermometers)\n• Class B: Low to moderate risk (e.g., BP monitors)\n• Class C: Moderate to high risk (e.g., orthopedic implants)\n• Class D: High risk (e.g., pacemakers)",
      },
      {
        question: "What is the purpose of BIS certification?",
        answer:
          "BIS ensures the medical device complies with Indian safety and quality standards and is essential for consumer trust and market access.",
      },
      {
        question: "What are the key CDSCO forms for registration?",
        answer:
          "• MD-14/15: Import license\n• MD-3/5: Manufacturing Class A & B\n• MD-4/6: Loan license Class A & B\n• MD-7/9: Manufacturing Class C & D\n• MD-8/10: Loan license Class C & D\n• MD-22/23: Clinical investigation\n• MD-26/27: Import license\n• MD-16/17: Test license",
      },
      {
        question: "What is the timeline for CDSCO registration?",
        answer:
          "Typically, 6 to 9 months depending on application type and completeness.",
      },
      {
        question: "What post-registration compliance is needed?",
        answer:
          "Inform CDSCO of any changes in premises or company constitution. Apply for a new license within 3 months if key details change.",
      },
      {
        question: "What happens if the license expires?",
        answer:
          "You must renew it at least 9 months before expiry, submitting updated Plant Master File (PMF) and Device Master File (DMF).",
      },
      {
        question: "Is CDSCO certification mandatory for all devices?",
        answer:
          "Yes, as of October 1, 2023, all medical devices must be registered with CDSCO before sale or import in India.",
      },
    ],
  },

  "cosmetic-manufacturing-license": {
    title: "Cosmetic Manufacturing License – An Overview",
    description:
      "A comprehensive guide to obtaining a Cosmetic Manufacturing License in India under the Drugs & Cosmetics Act, 1940, including authority, eligibility, documents, process, and DoStartup assistance.",
    overview: [
      {
        heading: "What is a Cosmetic Manufacturing License?",
        content:
          "Under Section 3(aaa) of the Drugs & Cosmetics Act, 1940, a cosmetic is defined as any article intended to be applied to the human body for cleansing, beautifying, or altering appearance. A Cosmetic Manufacturing License is mandatory for any entity involved in manufacturing such products in India and is regulated by State Licensing Authorities.",
      },
      {
        heading: "Regulatory Authority",
        content:
          "Cosmetic manufacturing is regulated by State Licensing Authorities (SLAs) under the Drugs & Cosmetics Act, 1940. While SLAs handle domestic manufacturing, the Central Licensing Authority (CLA) regulates imports.",
      },
      {
        heading: "Industry Landscape",
        content:
          "India’s cosmetic industry is expanding rapidly, fueled by increasing demand and widespread consumer use. The government enforces licensing and quality checks to ensure public safety and product efficacy.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of a Cosmetic Manufacturing License",
        content:
          "• Legally manufacture and sell cosmetics in India\n• Ensure consumer safety and regulatory compliance\n• Boost product credibility and acceptance\n• Enable exports with recognized approvals\n• Avoid penalties and operational disruptions",
      },
    ],
    documentsRequired: [
      {
        heading: "Mandatory Documents",
        content:
          "• Application Form COS-5\n• Power of Attorney\n• Covering Letter\n• Site Master File\n• Site Plan and Building Layout\n• Self-attested premises documents\n• Fee Payment Challan\n• List of Standard Operating Procedures (SOPs)\n• Draft product label copy",
      },
      {
        heading: "Business and Staff Details",
        content:
          "• List of Directors/Partners/Trustees with ROC/Partnership/Trust Deed\n• Constitution details of the firm\n• Appointment letter and list of competent technical staff with qualifications, experience, and registration details\n• Section-wise list of plant and machinery\n• Manufacturing process flow chart",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Obtain the License",
        content:
          "1. Filing Application: Submit Form COS-5 with required documents\n2. Document Submission: Upload or email documents for review\n3. Examination: SLA reviews application and inspects premises\n4. Issuance: Upon approval, the license is granted in Form COS-8",
      },
    ],
    feesStructure: [
      {
        heading: "Retention and Fee Details",
        description:
          "• License remains valid indefinitely\n• Retention fee must be paid every 5 years as per 3rd Schedule to maintain validity\n• Non-payment may lead to suspension or cancellation",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline & Validity",
        description:
          "• License processing time varies by state and application completeness\n• Once granted, Form COS-8 license is valid perpetually with timely retention fee payments",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "Extensive experience with SLA and CDSCO compliance",
          "Competitive pricing with transparent procedures",
          "Complete document support and drafting",
          "Hands-on assistance from application to approval",
          "Quick processing and timely updates",
          "Expert regulatory consultation",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "What is Cosmetic Registration?",
        answer:
          "It is the process of obtaining regulatory approval to manufacture cosmetic products intended for skin cleansing, beautification, or appearance enhancement.",
      },
      {
        question: "Is a Cosmetic Manufacturing License compulsory in India?",
        answer:
          "Yes, any entity involved in the manufacturing of cosmetic products must obtain a Cosmetic Manufacturing License from the respective State Licensing Authority.",
      },
      {
        question: "Which form is used to apply for the license?",
        answer:
          "Application for a Cosmetic Manufacturing License is made using Form COS-5.",
      },
      {
        question: "What are the product labeling requirements?",
        answer:
          "Labels must include ingredients, batch number, product name, manufacturing date, expiry, directions for use, warnings, and the manufacturer’s details.",
      },
      {
        question: "What qualifications are needed for technical staff?",
        answer:
          "They must be a registered pharmacist or hold a diploma/intermediate qualification in chemistry or a recognized equivalent.",
      },
      {
        question: "How is cosmetic manufacturing regulated?",
        answer:
          "It is regulated under Drugs & Cosmetics Act, 1940, and Rules, 1945, requiring inspection, documentation, and license issuance by SLAs.",
      },
      {
        question: "What are the penalties for non-compliance?",
        answer:
          "Penalties include suspension or cancellation of the license and legal action under the Drugs & Cosmetics Act, 1940.",
      },
    ],
  },

  "in-vitro-diagnostic-device-manufacturing-license": {
    title: "In Vitro Diagnostic Device Manufacturing License – An Overview",
    description:
      "A detailed guide on obtaining a manufacturing license for in vitro diagnostic (IVD) devices in India, including classification, required forms, documents, procedure, and expert assistance by DoStartup.",
    overview: [
      {
        heading: "Overview",
        content:
          "The Drug and Cosmetic Act, 1940, and the Rules of 1945 govern manufacturing of IVD devices such as kits, reagents, and instruments. In 2017, India mandated registration for medical devices and IVDs. Now 462 products are classified as medical devices and 250 as IVDs used for disease diagnosis, health monitoring, and treatment guidance.",
      },
      {
        heading: "Classification of IVD Devices",
        content:
          "Medical Device Rules 2017 classify IVDs by risk: Class A (low), Class B (low-moderate), Class C (moderate-high), Class D (high). They also classify by intended use: HIV kits, HBV kits, HCV kits, blood grouping sera.",
      },
      {
        heading: "Regulatory Authorities",
        content:
          "State Licensing Authority issues Class A & B licenses. CDSCO (central) issues Class C & D licenses under the Ministry of Health & Family Welfare.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits",
        content:
          "• Legal authorization to manufacture IVD devices\n• Access to public and private procurement\n• Enhanced product credibility\n• Compliance with national regulations\n• Easier export opportunities",
      },
    ],
    documentsRequired: [
      {
        heading: "Forms Required",
        content:
          "Manufacturing License A & B: MD-3 (application), MD-5 (approval)\nLoan License A & B: MD-4, MD-6\nManufacturing License C & D: MD-7, MD-9\nLoan License C & D: MD-8, MD-9",
      },
      {
        heading: "Common Documents",
        content:
          "Covering letter, application form, fee challan, firm constitution docs (partnership deed or MOA/AOA), list of proprietors/partners/directors, age/address proofs, site ownership/rent proof.",
      },
      {
        heading: "Additional for Master File",
        content:
          "Declarations for manufacturing and analytical chemists, their qualifications, experience, approvals, DIC registration, SPCB consent, performance evaluation, test license copy, compliance undertaking.",
      },
      {
        heading: "Additional for Loan License",
        content:
          "Consent letter from principal manufacturer, wholesale license of loan applicant, principal manufacturer’s valid license and product permissions.",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Application Submission",
        content:
          "File application in specified form with CDSCO or SLA along with fees and receipt.",
      },
      {
        heading: "Step 2: Application Scrutiny",
        content:
          "Authority reviews, raises queries, proceeds to audit when satisfactory.",
      },
      {
        heading: "Step 3: Premises Audit",
        content:
          "Notified body audits facility; applicant addresses non-compliance; audit reports shared.",
      },
      {
        heading: "Step 4: Audit Examination",
        content: "Review of audit report for compliance.",
      },
      {
        heading: "Step 5: Product Scrutiny",
        content: "Technical review of product details and dossier.",
      },
      {
        heading: "Step 6: License Grant",
        content: "License issued upon meeting all norms.",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline & Validity",
        content:
          "Processing may take several months. Validity and renewal depend on class and authority.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup",
        description: [
          "End-to-end licensing support",
          "Expert handling of complex compliance",
          "Timely delivery and updates",
          "PAN India regulatory liaison",
        ],
        points: [],
      },
    ],
    faq: [
      {
        question: "Are IVD kits regulated in India?",
        answer: "Yes, under Medical Device Rules 2017.",
      },
      {
        question: "Where to access Medical Device Rules?",
        answer: "On the official CDSCO website or Ministry of Health portal.",
      },
      {
        question: "Who classifies IVD risk classes?",
        answer: "CDSCO as per First Schedule, Part II.",
      },
      {
        question: "What is a Test License?",
        answer: "Permission to test IVD kits under Form MD-16/17.",
      },
      {
        question: "What is the validity of a Test License?",
        answer:
          "Typically aligned with the application purpose; check CDSCO guidelines.",
      },
    ],
  },

  "in-vitro-diagnostic-device-import-license": {
    title: "In Vitro Diagnostic Device Import License",
    description:
      "Obtain your IVD device import license under the New Medical Device Rules, 2017 via CDSCO’s SUGAM portal with expert guidance.",
    overview: [
      {
        heading: "Overview of In Vitro Diagnostic Device Import License",
        content:
          "The import of In Vitro Diagnostic (IVD) devices is governed by the New Medical Device Rules, 2017. The Central Drugs Standard Control Organization (CDSCO) has developed an online platform called SUGAM for submitting applications and granting import permissions for IVD devices. Depending on the category—A, B, C, or D—the relevant application form must be submitted online through SUGAM, which acts as the central licensing authority for these products.",
      },
    ],
    benefits: [
      {
        heading:
          "Who Can Apply for an In Vitro Diagnostic Device Import License?",
        content:
          "Foreign manufacturers cannot apply directly for registration in India. They must appoint an Indian entity as their authorized agent or license holder to submit the application for the import registration of IVD devices. The authorized agent must hold either a manufacturing license for sale and distribution or a wholesale license for sale and distribution, and can apply to CDSCO for the import license. An authorized agent is any firm or organization appointed by the overseas manufacturer through a Power of Attorney to undertake imports of IVD devices into India.",
      },
    ],
    documentsRequired: [
      {
        heading: "Important Documents for Import License Application",
        content:
          "● Covering letter specifying if the application is for registration or re‑registration, including list of documents, duly signed by an authorized signatory\n● Details of the products to be imported\n● Manufacturing site details\n● Regulatory and supporting documents as per Form MD‑14\n● Power of Attorney\n● ISO 13485 Certificate\n● TR‑6 Challan (fee payment receipt)\n● GMP Certificate\n● CE Design Certificate\n● Declaration of Conformity\n● Post‑Market Surveillance (PMS) Report\n● Business License / Plant Registration Certificate\n● Audit Report\n● Constitution details of the Indian agent\n● Valid wholesale or manufacturing license of the authorized Indian agent\n● Quality certificate from the overseas manufacturer\n● Free Sale Certificate (FSC)\n● Master files including manufacturing procedures, antigen/antibody details, product composition, medical flow chart, batch release certificates, and detailed test reports",
      },
    ],
    registrationProcedure: [
      {
        heading: "Forms Required for Application and Permission",
        content:
          "Risk Class | Authority to Grant License | Application Form | Approval Form\nA, B, C & D | CDSCO | MD‑14 | MD‑15",
      },
      {
        heading: "Validity of License",
        content:
          "The import license issued via Form MD‑15 remains valid indefinitely, provided retention fees are paid before the expiry of five years from the issue date, unless the license is suspended or cancelled by CDSCO.",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading:
          "Process to Apply for Import License of In Vitro Diagnostic Devices",
        description: "",
        steps: [
          {
            title: "Step 1: Evaluation",
            duration: "",
            description:
              "The product undergoes evaluation by the competent authority to verify compliance with the basic norms under the Medical Device Rules, 2017.",
          },
          {
            title: "Step 2: Classification",
            duration: "",
            description:
              "If registration is required, the IVD device is classified based on its risk category under the Medical Device Rules.",
          },
          {
            title: "Step 3: Documentation",
            duration: "",
            description:
              "All necessary documents as per the Medical Device Rules, 2017 must be prepared and duly signed by an authorized signatory.",
          },
          {
            title: "Step 4: Appointment of Agent",
            duration: "",
            description:
              "An overseas manufacturer appoints an Indian agent holding a valid manufacturing or wholesale license through a Power of Attorney.",
          },
          {
            title: "Step 5: Form Filing",
            duration: "",
            description:
              "The application form is generated online, completed with all required attachments.",
          },
          {
            title: "Step 6: Approval by Agent",
            duration: "",
            description:
              "The authorized agent reviews, approves, and submits the application.",
          },
          {
            title: "Step 7: Follow‑up",
            duration: "",
            description:
              "The agent may follow up with the regulatory authority to address any queries or clarifications.",
          },
          {
            title: "Step 8: Grant of Approval",
            duration: "",
            description:
              "If all guidelines and norms are met, the import license for the IVD device is granted.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading:
          "DoStartup Support for In Vitro Diagnostic Device Import License",
        description: [
          "DoStartup has a dedicated team of regulatory and compliance experts providing end‑to‑end services for obtaining import licenses. Our experienced professionals ensure clients receive premium service despite complex compliance processes. We guarantee timely delivery of government registrations and licensing and offer comprehensive assistance throughout the registration process for smooth acquisition of In Vitro Diagnostic Device Import Licenses in India.",
        ],
        points: [
          "Dedicated compliance experts",
          "End‑to‑end support",
          "Timely delivery",
          "Premium service quality",
        ],
      },
    ],
    faq: [
      {
        question:
          "Can any changes be made post-approval of the In Vitro Diagnostic Device?",
        answer:
          "Yes. As per the Sixth Schedule, changes related to manufacturing process, equipment, testing, primary packaging material, and labels can be made with prior permission from the competent authority.",
      },
      {
        question:
          "Does the central licensing authority have the power to inspect overseas manufacturing sites before granting the license?",
        answer:
          "Yes. CDSCO may inspect the overseas manufacturing site—directly or through designated agencies—to verify compliance with the Medical Device Rules before granting the import license.",
      },
      {
        question:
          "What documents are required if there are multiple importers?",
        answer:
          "Each importer must submit a separate application with the full set of documents (covering letter, Form MD‑14 attachments, Power of Attorney, ISO 13485 certificate, Free Sale Certificate, etc.) and appoint their own Indian authorized agent.",
      },
      {
        question:
          "Is it mandatory for imported IVD devices to be stocked at the warehouse mentioned in the import license application?",
        answer:
          "Yes. All imported IVD devices must be stored at the warehouse or premises specified in the import license to ensure traceability and compliance.",
      },
      {
        question:
          "Where are imported In Vitro Diagnostic devices typically stored?",
        answer:
          "Imported IVD devices are typically stored in CDSCO‑approved warehouses or temperature‑controlled facilities (cold storage) as declared in the import license application.",
      },
      {
        question:
          "Prior to the Medical Device Rules, 2017, if products were already marketed in India, do they require a license under the new rules?",
        answer:
          "Yes. IVD devices marketed before the 2017 rules must be registered and obtain an import license within the transition period notified by CDSCO.",
      },
      {
        question:
          "What licenses or authorizations are required from the overseas manufacturer for import licensing?",
        answer:
          "The overseas manufacturer must provide a valid Free Sale Certificate, ISO 13485 certificate, Declaration of Conformity, and execute a Power of Attorney appointing the Indian authorized agent.",
      },
    ],
  },

  "overview-of-drug-export-noc": {
    title: "Drug Export NOC",
    description:
      "Obtain your No Objection Certificate (NOC) from DCGI/CDSCO’s SLA for legally exporting pharmaceutical products worldwide.",
    overview: [
      {
        heading: "Overview of Drug Export NOC",
        content:
          "India holds a prominent position in the global pharmaceutical industry—ranking 13th in value and 3rd in volume. The country is a key supplier of generic medicines, accounting for approximately 70% of exports. To legally export medical and pharmaceutical products, Indian manufacturers must obtain a No Objection Certificate (NOC) from the Drug Controller General of India (DCGI). The State Licensing Authority (SLA) under CDSCO issues NOCs for approved, unapproved, and banned drugs (since August 20, 2018). Applications are submitted to zonal or sub‑zonal CDSCO offices.",
      },
    ],
    benefits: [
      {
        heading: "Key Requirements for Drug Export NOC",
        content:
          "● Hold a valid drug manufacturing license (Form 25 or Form 28)\n● Provide a valid export order (case‑by‑case per order)\n● Specify manufacturing site and confirm quality control testing\n● Declare product is solely for export, no domestic diversion\n● Make records of dispatch, stock, raw materials, intermediates available for inspection\n● Confirm physical destruction of leftover export‑only stock\n● Agree to cease manufacturing/export if drug becomes prohibited\n● Submit all documents in the prescribed Common Submission Format",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Drug Export NOC",
        content:
          "● Covering Letter: purpose, checklist, drug details, signed by authorized signatory\n● Purchase Order: recent copy (≤6 months), signed by importer’s authority\n● Manufacturing License: copy of Form 25/28 license\n● Performa Invoice: signed invoice (required for unapproved APIs)\n● Registration Certificate: for banned drugs, from importing country’s NRA\n● Additional Supporting Documents: Aadhaar Card, Residence Proof, Age Proof, Bank Account Details (account no., IFSC/RTGS), Employer’s Certificate, Nomination Form, Dependents’ Details",
      },
    ],
    registrationProcedure: [],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "DoStartup Support for Drug Export NOC",
        description: [
          "DoStartup offers comprehensive compliance and regulatory support to pharmaceutical manufacturers seeking export approvals. Our experienced team ensures seamless documentation, timely submissions, and effective coordination with regulatory bodies like CDSCO and SLA.",
        ],
        points: [
          "Streamlining the application process",
          "Expert consultation on compliance requirements",
          "Timely delivery of government licenses and approvals",
          "Managing communication with regulatory authorities",
        ],
      },
    ],
    faq: [
      {
        question: "Who regulates drug export in India?",
        answer:
          "The Central Drugs Standard Control Organisation (CDSCO), under DCGI, regulates drug imports and exports through its zonal and sub‑zonal offices.",
      },
      {
        question: "What documents are needed to obtain a Drug Export NOC?",
        answer:
          "You need a covering letter, purchase order, manufacturing license (Form 25/28), Performa invoice, and, if applicable, a registration certificate for banned drugs.",
      },
      {
        question: "What is a No Objection Certificate (NOC)?",
        answer:
          "An NOC is an authorization issued by the drug regulatory authority permitting a manufacturer to export pharmaceutical products legally.",
      },
      {
        question: "What is a Special Code or Neutral Code?",
        answer:
          "These are non‑identifying labeling codes used to protect the identity of the manufacturer/exporter or to meet importing country requirements.",
      },
      {
        question:
          "What documents are required to apply for a special or neutral code?",
        answer:
          "Typically: manufacturing license, product details, buyer’s request, and compliance declarations—requirements vary by importing country.",
      },
      {
        question:
          "What are the key regulations governing the export of drugs from India?",
        answer:
          "The Drugs and Cosmetics Act, 1940 and the Drugs and Cosmetics Rules, 1945, along with CDSCO and MoHFW guidelines.",
      },
      {
        question: "Who can export medicines from India?",
        answer:
          "Only licensed manufacturers or traders holding valid Form 25/Form 28 licenses can apply for export permissions, including Drug Export NOCs.",
      },
    ],
  },

  "overview-of-dual-use-noc": {
    title: "Dual‑Use NOC",
    description:
      "Obtain a No Objection Certificate (NOC) from the CDSCO Zonal Office for importing pharmaceutical substances used in non‑medicinal industries.",
    overview: [
      {
        heading: "Overview of Dual‑Use NOC",
        content:
          "Dual‑Use refers to pharmaceutical substances serving purposes beyond medicinal applications—textiles, chemicals, food processing, cosmetics, packaging, etc. When such substances are imported for non‑pharmaceutical use or as raw material for drug synthesis, a Dual‑Use NOC from the CDSCO Zonal Office is mandatory.",
      },
      {
        heading: "Introduction to CDSCO",
        content:
          "The Central Drugs Standard Control Organization (CDSCO) is India's national regulatory body under the Drugs and Cosmetics Act, 1940 and Rules, 1945. As Central Licensing Authority, it regulates import, manufacture, distribution of drugs via:\n● 6 Zonal Offices\n● 4 Sub‑Zonal Offices\n● 13 Port Offices\n● 7 Central Drug Testing Laboratories\nCDSCO also approves new drugs, conducts clinical trials, and convenes regulatory bodies like DCC and DTAB.",
      },
    ],
    benefits: [
      {
        heading: "Why is Dual‑Use NOC Required?",
        content:
          "● Ensures regulated import of substances used outside healthcare (food supplements, animal feed, cosmetics)\n● Issued by Deputy Drugs Controller at CDSCO Zonal Office\n● Required for bulk imports not intended for medical use\n● Must be presented at port office (ADC‑I/Technical Officer) for customs clearance\n● Exemptions may apply for Schedule D (Chapter III) substances under specified conditions",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Dual‑Use NOC Application",
        content:
          "● Covering Letter – purpose and nature of import\n● Purchase Documents – Invoice, Entry Bill, Indent, PO or Sales Contract with analysis certificates\n● High Seas Sales Agreement (if applicable)\n● Legal Undertaking on ₹100 Stamp Paper (Notarized): Annexure I for Actual User, Annexure II for Trader\n● Drug Registration Information (if registered with CDSCO)\n● Non‑Medical Use Declaration\n● Departmental Approvals/Justifications (animal feed, food additives, drug‑to‑drug conversion, cosmetics, other industrial)\n● Details of Previously Approved Quantities",
      },
    ],
    registrationProcedure: [
      {
        heading: "Due Diligence for Dual‑Use NOC",
        content:
          "● Verify drug registration under CDSCO or Indian laws\n● Check international regulatory status (e.g., vitamins may not be drugs)\n● Conduct technical assessment (Martindale Extra Pharmacopoeia or equivalent)",
      },
      {
        heading: "Important Considerations for Filing Dual‑Use NOC",
        content:
          "● Complete applications free from discrepancies\n● Start process ≥2 months before planned import\n● Clearly indicate purpose of usage\n● Attest Master Formula Records (if applicable)\n● Note: purification/sterilization substances excluded\n● Dual‑Use NOC for Actual Users valid 1 year\n● Port officials forward with remarks; email/fax approval acceptable\n● Zonal offices retain NOC records",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "DoStartup offers expert regulatory support for Dual‑Use NOCs with end‑to‑end assistance.",
        ],
        points: [
          "Accurate documentation and submission",
          "Guidance on regulatory due diligence",
          "Liaison with CDSCO officials",
          "Timely clearance from Port Authorities",
        ],
      },
    ],
    faq: [
      {
        question: "What is Dual‑Use?",
        answer:
          "Pharmaceutical substances also utilized in non‑medical industries such as food, cosmetics, textiles, and chemicals.",
      },
      {
        question: "What is CDSCO?",
        answer:
          "The Central Drugs Standard Control Organization, India's national regulatory authority under the Drugs and Cosmetics Act, 1940.",
      },
      {
        question: "When is a Dual‑Use NOC applicable?",
        answer:
          "When importing drugs for non‑pharmaceutical uses—cosmetics, food supplements, industrial processing.",
      },
      {
        question: "Is due diligence mandatory for Dual‑Use NOC?",
        answer:
          "Yes. It confirms drug registration, legal status, and eligibility under Indian laws.",
      },
      {
        question: "What is the difference between an Actual User and a Trader?",
        answer:
          "Actual User imports drugs for self‑use in operations; Trader imports for resale or distribution.",
      },
      {
        question: "What is the validity of a Dual‑Use NOC for an Actual User?",
        answer: "Typically valid for one year from date of issue.",
      },
    ],
  },

  "overview-of-cdsco-test-license": {
    title: "CDSCO Test License",
    description:
      "The CDSCO Test License is a regulatory permit granted by CDSCO Zonal Offices (and in some cases HQ) for the import or manufacture of small quantities of drugs solely for testing, examination, or analysis under Section 10 of the Drugs & Cosmetics Act, 1940.",
    overview: [
      {
        heading: "Overview of CDSCO Test License",
        content:
          "This license allows import (Form 11 or CT‑17) or local manufacture (Form 29) of small drug quantities intended only for testing or analysis. All applications must be submitted online via the CDSCO SUGAM Portal.",
      },
      {
        heading: "CDSCO SUGAM Portal: A Brief Introduction",
        content:
          "Launched in November 2015, the SUGAM Portal digitizes the regulatory process—online submission and tracking of NOCs, permissions, licenses, registration certificates, and other approvals—ensuring transparency, efficiency, and accountability.",
      },
    ],
    benefits: [
      {
        heading: "Key Conditions for Obtaining a CDSCO Test License",
        content:
          "● Drugs must not be imported for commercial use\n● License holder must maintain records and report to the Licensing Authority\n● Technical literature and package inserts must be submitted\n● A Drug Inspector may inspect with or without prior notice\n● Imported substances must be used strictly for testing or analysis",
      },
    ],
    documentsRequired: [
      {
        heading:
          "Essential Documents for CDSCO Test License Application (Form 11)",
        content:
          "● Form‑12 – Application form\n● TR‑6 Challan or payment justification\n● Free Sale Certificate (FSC) from country of origin\n● Covering Letter with purpose and intent\n● Testing Protocol detailing intended tests\n● Product Brochures & Labels\n● Notarised Agreement (if third‑party testing facility used)\n● Ethics Committee Approval (if applicable)",
      },
    ],
    registrationProcedure: [
      {
        heading:
          "Step‑by‑Step Procedure to Obtain CDSCO Test License (Form 11)",
        content:
          "● Submit Form 12 with all required details via the CDSCO SUGAM Portal.\n● Gather all necessary documents; DoStartup provides guidance to ensure regulatory compliance.\n● CDSCO office evaluates the application and documents for compliance.\n● Upon successful verification, the Test License in Form 11 is granted.",
      },
      {
        heading: "Scenarios Where CDSCO Test License Is Not Issued",
        content:
          "● Banned drugs\n● Herbal or agricultural products\n● Starting materials\n● Excipients",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Validity of Test License",
        description:
          "The Form 11 Test License is valid for one year from the date of issue; it cannot be renewed. A fresh application with new documentation and fees is required for further testing.",
      },
    ],
    whyUs: [
      {
        heading: "DoStartup’s Assistance for CDSCO Test License",
        description: [
          "DoStartup simplifies obtaining your CDSCO Test License with end‑to‑end support and expert guidance.",
        ],
        points: [
          "Plan selection based on your needs",
          "Regulatory expert query resolution",
          "Accurate document compilation",
          "Complete application preparation and filing",
          "Compliance review against Rule 33 conditions",
          "Progress tracking with CDSCO",
          "Hassle‑free license delivery",
        ],
      },
    ],
    faq: [
      {
        question: "What is a Form‑11 License?",
        answer:
          "Under Rule 33 of the Drugs & Cosmetics Act, Form 11 permits import of small drug quantities exclusively for testing, examination, or analysis.",
      },
      {
        question:
          "How many drugs can be imported under a single Form‑11 License?",
        answer:
          "Quantity limits depend on the submitted testing protocol and CDSCO’s approval.",
      },
      {
        question:
          "Can drugs imported under Form 11 be used for animal studies?",
        answer:
          "Yes, if specified in the testing protocol—and Ethics Committee Approval is included.",
      },
      {
        question: "Can a CDSCO Test License be renewed?",
        answer:
          "No. It’s valid for one year and cannot be renewed; a fresh application is required post‑expiry.",
      },
      {
        question:
          "Can drugs imported under Form 11 be used for commercial purposes?",
        answer:
          "Absolutely not. They must only be used for testing, examination, or analysis—not for sale or commercial distribution.",
      },
    ],
  },

  "overview-of-adc-noc": {
    title: "ADC NOC",
    description:
      "Obtain an ADC No Objection Certificate for import or export of drugs and drug‑related substances under CDSCO and MoHFW regulations.",
    overview: [
      {
        heading: "Overview of ADC NOC",
        content:
          "In international trade, the import or export of goods containing drugs or drug‑related substances requires prior approval in the form of an ADC NOC. Issued to government‑authorized manufacturers, this NOC ensures regulated movement of critical drugs overseen by CDSCO and MoHFW.",
      },
      {
        heading: "Relevant Legislation Governing ADC NOC",
        content:
          "● Drugs and Cosmetics Act, 1940 and Rules, 1945\n● Narcotic Drugs and Psychotropic Substances Act, 1985\n● Medicinal and Toilet Preparations (Excise Duties) Act, 1956\n● Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
      },
    ],
    benefits: [
      {
        heading: "Who Can Apply for ADC NOC?",
        content:
          "● Importers\n● Indian Agents\n● Foreign companies with Indian subsidiaries\n● Corporates in pharmaceutical trade\n● Exporters",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Obtaining ADC NOC",
        content:
          "● Covering Letter\n● ADC Sheet Format\n● Bond Declaration\n● Manufacturer’s Letterhead\n● Certificate of Analysis (batch no., mfg & expiry dates)\n● Quality Certificate\n● Invoice Copy\n● Safety Statement\n● Free Sale Certificate or FDA Report\n● Manufacturer’s Details\n● Purchase Order\n● Manufacturing License\n● Proforma Invoice\n● Registration Certificate (for banned drugs)\n● Export Order (product name & specs)\n● Special Code Number (if applicable)\n● State Licensing Authority NOC or Permission\n● Prototype Packaging Materials (labels, leaflets, cartons, codes)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Obtain ADC NOC",
        content:
          "● Step 1: Document Collection – Gather all necessary documents prior to filing.\n● Step 2: Application Filing – Submit prescribed format with fee and documents.\n● Step 3: Submission to Authority – File with appropriate CDSCO office.\n● Step 4: Verification – Designated officer verifies application and documents.\n● Step 5: Grant of NOC – Assistant Drug Controller issues the ADC NOC upon approval.",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "DoStartup’s Assistance with ADC NOC",
        description: [
          "DoStartup provides end‑to‑end support to secure your ADC NOC smoothly and timely.",
        ],
        points: [
          "Plan selection to match your requirements",
          "Query resolution with regulatory experts",
          "Accurate document collection and formatting",
          "Complete application preparation and filing",
          "Eligibility check and preliminary compliance",
          "Coordination with CDSCO for processing",
          "Timely delivery of approved ADC NOC",
        ],
      },
    ],
    faq: [
      {
        question: "What is CDSCO?",
        answer:
          "Central Drugs Standard Control Organisation, the national regulator for drug approval, import/export, clinical trials under MoHFW.",
      },
      {
        question: "Who regulates drug import and export in India?",
        answer:
          "CDSCO in coordination with State Drug Authorities oversees regulation across India.",
      },
      {
        question: "What is a Special or Neutral Code?",
        answer:
          "An identification code to protect manufacturer identity or meet importing country requirements.",
      },
      {
        question: "What is Dual Use?",
        answer:
          "Substances used for both medical and non‑medical purposes requiring separate NOC regulation.",
      },
      {
        question: "Why is Dual Use NOC granted?",
        answer:
          "To regulate drugs with dual‑use potential and prevent public health risks.",
      },
      {
        question: "What is the validity of ADC NOC?",
        answer:
          "Validity varies by drug and shipment; generally valid for the specific batch or shipment applied for.",
      },
      {
        question: "Who approves medical devices in India?",
        answer:
          "CDSCO under the Medical Device Rules, 2017, based on device classification and risk.",
      },
      {
        question: "What is a Test License?",
        answer:
          "A Form 11 license permitting import or manufacture of small drug quantities for testing or analysis.",
      },
    ],
  },

  "overview-of-cdsco-drugs-import-license": {
    title: "CDSCO Drugs Import License",
    description:
      "The import of drugs into India is regulated under Chapter III of the Drugs & Cosmetics Act, 1940 and Part IV of the Drugs and Cosmetics Rules, 1945. Registration certificates and import license applications are governed by Rule 24(A) and Rule 24.",
    overview: [
      {
        heading: "What Qualifies as a Drug?",
        content:
          "Any medication for internal or external use in humans or animals; substances for diagnosis, treatment, mitigation, or prevention of disease (including repellents); non‑food substances altering body structure or function; substances for destruction of human tissue; ingredients for drug formulation (e.g., empty gelatin capsules). Both finished formulations and bulk drugs (APIs) must be registered.",
      },
      {
        heading: "Who Can Apply?",
        content:
          "Foreign manufacturers with valid manufacturing or sale licenses and their authorized Indian agents holding wholesale or manufacturing licenses.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of CDSCO Drugs Import License",
        content:
          "● Ensures patient safety by preventing health hazards\n● Products undergo quality testing and certification\n● Access to the high‑demand Indian market\n● Maintains product quality standards\n● Enhances brand identity and market trust\n● Encourages global manufacturers to enter under regulated frameworks\n● On‑site inspections ensure compliant manufacturing and storage\n● Regulatory compliance secures ongoing market access",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for CDSCO Drugs Import License",
        content:
          "● Covering letter\n● Duly signed & sealed application form\n● Original Power of Attorney\n● Challan (fee proof)\n● Import permission copy for new drugs\n● Valid wholesale license copy\n● Company authorization letter\n● Duly signed & sealed undertaking\n● Notarized Plant Master File\n● Notarized Drug Master File\n● Notarized manufacturing license, FSC, GMP, COPP (for finished products)\n● Attested product registration certificate (CFDA/EDQM)\n● Original product label/specimen",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure to Obtain CDSCO Drugs Import License",
        content:
          "● Obtain Registration Certificate: apply by manufacturer or Indian agent\n● Submit Import License Application: Form 8 for non‑Schedule X, Form 8‑A for Schedule X\n● File with Licensing Authority: manufacturer or authorized agent with valid licenses and undertaking\n● Verification: Licensing Authority reviews application and documents\n● Grant of License: Import License issued, valid for 3 years (unless suspended or cancelled)",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "License Validity & Timeline",
        description:
          "Import License is valid for 3 years from date of issue. Typical processing time 8–12 weeks, depending on documentation completeness and CDSCO review.",
      },
    ],
    whyUs: [],
    faq: [
      {
        question: "How is the import of drugs into India governed?",
        answer:
          "By Chapter III of the Drugs & Cosmetics Act, 1940 and Part IV of the Drugs and Cosmetics Rules, 1945.",
      },
      {
        question: "Which CDSCO division handles human‑use medicines?",
        answer:
          "The Drugs Control Division of CDSCO oversees registration and import of medicines for human use.",
      },
      {
        question: "Who issues the CDSCO registration certificate?",
        answer: "The Drugs Controller General of India (DCGI) under CDSCO.",
      },
      {
        question: "What is a CDSCO import license?",
        answer:
          "An authorization permitting legal import of drugs after product registration and facility approval.",
      },
      {
        question: "When is re‑registration required?",
        answer:
          "When the license is nearing expiration, there are changes in manufacturing, labeling, formulation, or new guidelines are introduced.",
      },
      {
        question: "How long does it take to obtain an import license?",
        answer:
          "Typically 8–12 weeks, depending on documentation completeness and CDSCO’s review.",
      },
    ],
  },

  "insurance-company-license": {
    title: "Insurance Company License",
    description:
      "An insurance company license authorizes businesses to market, sell, and manage insurance products legally under IRDAI regulations.",
    overview: [
      {
        heading: "Overview of Insurance Company License",
        content:
          "An insurance company license is granted by the State Insurance Commissioner and is required to offer life, health, motor, disability, and workers’ compensation insurance. Separate licenses are needed in each state of operation. Prior to 1999, the industry was regulated under the Insurance Act, 1938; today IRDAI oversees licensing and renewals.",
      },
      {
        heading: "Scope and Importance of IRDA License",
        content:
          "IRDAI regulates India’s insurance industry to protect consumer interests and ensure accountability. The licensing process includes filing an application, getting product approvals, and appointing intermediaries (agents/brokers). A Certificate of Registration from IRDA is mandatory before applying for an insurance license.",
      },
    ],
    benefits: [
      {
        heading: "Key Advantages of Holding an Insurance Company License",
        content:
          "● Legal authority to sell diverse insurance products\n● Consumer protection through regulated frameworks\n● Ability to appoint agents and brokers\n● Market credibility and consumer trust\n● Compliance with IRDAI mandates ensures accountability\n● Structured renewal and oversight processes",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Insurance Company License",
        content:
          "● Company incorporation certificate (Companies Act, 2013)\n● MOA & AOA\n● Director profiles (name, address, profession)\n● Certified annual reports of promoters (last 5 years)\n● Shareholding agreement (Indian & foreign investors)\n● Five‑year business plan (Board‑approved)\n● Proof of paid‑up capital (₹100 cr for Life/Health/General, ₹200 cr for Reinsurance)\n● Promoter affidavit of capital adequacy\n● CEO/MD/WTD compliance statement (Foreign Investment Rules, 2015)\n● FIPB approval (FDI > 26%)\n● Certified prospectus & promoter agreements\n● ₹5 lakh non‑refundable application fee\n● PCA/PCS certification of capital compliance",
      },
    ],
    registrationProcedure: [
      {
        heading: "Registration Application Process",
        content:
          "● Decide type: life, health, general, or reinsurance\n● Submit Form IRDA/R1 with required documents\n● IRDAI may seek clarifications\n● Upon provisional approval, submit Form IRDAI/R2\n● If rejected, appeal to SAT within 30 days",
      },
      {
        heading: "Disqualification Criteria",
        content:
          "● Previous IRDAI rejection or withdrawal in last 2 years\n● Revoked prior Certificate of Registration\n● Company name missing “insurance” or “assurance”",
      },
      {
        heading: "Suspension of License",
        content:
          "● Profit/loss computation non‑compliance\n● Bankruptcy or liquidation\n● Unauthorized business transfer\n● Violation of IRDAI directions or statutes\n● Default in claim payments (> 3 months)\n● Engaging in non‑insurance businesses\n● Breach of FEMA, PMLA, Companies Act\n● Failure to pay annual regulatory dues",
      },
      {
        heading: "Renewal of IRDA License",
        content:
          "● Submit Form IRDA/R5 before year‑end\n● Pay ₹50,000 per insurance category + 0.2% of previous year’s gross premium (capped at ₹5 crore)\n● Late filing incurs 10% penalty\n● Payments made to IRDAI’s RBI account\n● Lost certificate duplicate via Form IRDA/R4 (₹5,000 fee)",
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure",
        description: "License renewal and duplicate certificate fees",
        feeTable: [
          {
            category: "Renewal (per category)",
            amount: "₹50,000 + 0.2% gross premium (capped ₹5 crore)",
          },
          {
            category: "Duplicate Certificate",
            amount: "₹5,000",
          },
        ],
      },
    ],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Insurance Company Licensing?",
        description: [
          "DoStartup provides full‑spectrum assistance to secure and maintain your insurance license.",
        ],
        points: [
          "End‑to‑end application assistance",
          "Compliance with IRDAI mandates",
          "Timely license renewals & reminders",
          "Market strategy & growth planning",
          "Dedicated regulatory advisors",
          "Secure client portal for license access",
        ],
      },
    ],
    faq: [
      {
        question: "Why do insurance companies need a license?",
        answer:
          "To legally sell insurance products like life, health, and motor under IRDAI regulation.",
      },
      {
        question: "Who governs the insurance sector in India?",
        answer:
          "The Insurance Regulatory and Development Authority of India (IRDAI).",
      },
      {
        question: "What documents are needed to apply?",
        answer:
          "Company registration proof, director details, shareholding agreements, business plan, capital proofs, etc.",
      },
      {
        question: "What is a reinsurance company?",
        answer:
          "A firm that provides insurance to other insurers to help manage risk exposure.",
      },
      {
        question: "Can I start my own insurance company in India?",
        answer:
          "Yes, if you meet all capital, documentation, and IRDAI approval requirements.",
      },
      {
        question: "How much capital is required?",
        answer:
          "₹100 crore for life/health/general insurance; ₹200 crore for reinsurance.",
      },
      {
        question: "When was the IRDA Act passed?",
        answer: "In 1999.",
      },
      {
        question: "Is LIC part of IRDA?",
        answer: "No. LIC is regulated by IRDAI but operates independently.",
      },
    ],
  },

  "insurance-web-aggregator-license": {
    title: "Insurance Web Aggregator License",
    description:
      "A license issued by IRDAI for intermediaries operating online platforms that compare and share insurance product information from multiple insurers.",
    overview: [
      {
        heading: "What Is an Insurance Web Aggregator License?",
        content:
          "An Insurance Web Aggregator is a registered intermediary operating a website to offer customers information and price comparisons on insurance products from various insurers. The license is granted under the IRDA (Insurance Web Aggregators) Regulations, 2017 by IRDAI.",
      },
      {
        heading: "Key Terminologies You Should Know",
        content:
          "● Authorized Verifier: IRDA‑trained individual conducting telemarketing or distance marketing sales\n● Distance Marketing: Selling insurance via phone, SMS, email or other digital channels\n● Key Managerial Personnel (KMP): CEO, COO, CFO, CMO, Head of IT, Head of Technical\n● Lead: User‑submitted info expressing interest in insurance products\n● Lead Management System: Software process for handling leads end‑to‑end\n● Principal Officer: Designated individual responsible for aggregator operations",
      },
    ],
    benefits: [
      {
        heading: "Eligibility & Conditions",
        content:
          "● Company under Companies Act 2013 or LLP under LLP Act 2008\n● MoA must specify web aggregation as main objective\n● No other IRDA‑registered intermediary roles or referral agreements\n● Operational website dedicated to aggregation\n● Appointed Principal Officer with IRDA training and exam\n● No prior web aggregator rejection in last financial year",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Registration",
        content:
          "● Form A (Schedule I) application\n● Company/LLP incorporation certificate\n● MoA/LLP agreement stating web aggregation objective\n● Principal Officer’s qualifications, training & exam certificate\n● Operational website URL and screenshots\n● Board resolution appointing Principal Officer\n● Non‑referral undertaking\n● Proof of paid‑up capital (₹25 lakhs minimum)\n● Net Worth certificate from CA",
      },
    ],
    registrationProcedure: [
      {
        heading: "How to Apply for License",
        content:
          "● Fill Form A as per Schedule I and pay ₹10,000 application fee\n● Submit application to IRDAI via Demand Draft or online transfer\n● Await IRDAI compliance verification and policyholder interest assessment",
      },
      {
        heading: "Registration Approval Process",
        content:
          "● IRDAI issues registration via Form E upon satisfaction\n● If cancelled, surrendered or renewal rejected, reapplication only after one year",
      },
      {
        heading: "Renewal of Registration",
        content:
          "● Submit renewal application at least 30 days before expiry\n● Pay ₹25,000 renewal fee and provide updated documents\n● License must be valid at all times for legal operation",
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure",
        description: "Mandatory fees for application and renewal",
        feeTable: [
          { category: "Initial application fee", amount: "₹10,000" },
          { category: "Renewal fee", amount: "₹25,000" },
        ],
      },
    ],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "How DoStartup Can Assist",
        description: [
          "End‑to‑end support for obtaining and maintaining your Insurance Web Aggregator License.",
        ],
        points: [
          "Expert drafting and documentation",
          "Guidance on IRDA regulations & compliance",
          "Setup of Lead Management & grievance redressal",
          "Capital structuring and Principal Officer training",
          "Renewal reminders and filing assistance",
          "Ongoing IRDA‑compliance support",
        ],
      },
    ],
    faq: [
      {
        question: "How is a web aggregator different from an insurance broker?",
        answer:
          "A web aggregator compares policies on a platform; a broker offers personalized advice and selects products based on client profiles.",
      },
      {
        question: "Do I need a website ready before applying?",
        answer:
          "Yes. An operational website dedicated to aggregation activities is mandatory.",
      },
      {
        question: "How long is the license valid?",
        answer:
          "Validity is fixed; it must be renewed at least 30 days before expiry.",
      },
      {
        question: "Can I surrender my Certificate of Registration?",
        answer:
          "Yes. Reapplication is allowed only after one year from surrender or rejection.",
      },
      {
        question: "What remuneration can aggregators charge?",
        answer:
          "Flat fees up to ₹50,000 per product annually; no commissions for lead transfers.",
      },
      {
        question: "What are the capital and net worth requirements?",
        answer:
          "Minimum paid‑up capital of ₹25 lakhs; net worth must not fall below this and is reviewed semi‑annually.",
      },
      {
        question: "What activities are permitted?",
        answer:
          "Product comparison, lead sharing, online & telemarketing‑based insurance sales.",
      },
    ],
  },

  "insurance-surveyor-loss-assessor-registration": {
    title: "Insurance Surveyor and Loss Assessor Registration",
    description:
      "Get registered as an Insurance Surveyor or Loss Assessor with IRDAI to legally evaluate insurance claims in India.",
    overview: [
      {
        heading:
          "Comprehensive Guide to Insurance Surveyor and Loss Assessor Registration in India",
        content:
          "Insurance Surveyors and Loss Assessors play a vital role in evaluating and verifying insurance claims for insurance companies. To perform these duties legally, individuals or corporate entities must obtain a license from the Insurance Regulatory and Development Authority of India (IRDAI).",
      },
      {
        heading: "Categories of Registration",
        content:
          "● Individual Surveyors – Professionals operating independently\n● Corporate Surveyors – Registered firms or businesses licensed to assess claims",
      },
    ],
    benefits: [
      {
        heading: "Key Responsibilities of Surveyors and Loss Assessors",
        content:
          "● Investigate, analyze, and manage insurance claims\n● Provide unbiased, regulatory‑compliant reports\n● Disclose conflicts of interest\n● Maintain confidentiality and impartiality\n● Inspect and reassess insured property\n● Determine cause and extent of loss\n● Recommend actions to prevent future losses\n● Clarify admissibility of claims under policy terms\n● Assist insurers and insured with technical evaluations",
      },
      {
        heading: "Why Choose DoStartup?",
        content:
          "● Timely and accurate documentation\n● Compliance with IRDAI norms\n● Hassle‑free coordination\n● Professional guidance from experts",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for License Application",
        content:
          "● Certificate of Incorporation or Business Registration (for entities)\n● Completed Application Form\n● Passport‑size Photographs\n● PAN Card and Address Proof\n● Academic and Professional Qualification Proof\n● Mark Sheets for Surveyor Examination\n● Declaration in the prescribed format\n● Membership Certificate from a recognized institute\n● ‘Fit and Proper’ Declaration\n● Payment Proof of Application Fee",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step‑by‑Step Process to Register",
        content:
          "● Collect and prepare all required documents\n● File the application with IRDAI via Form IRDAI‑2‑LF\n● IRDAI reviews and verifies the application\n● Upon approval, license is issued in Form IRDAI‑2‑LF",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "License Validity",
        description:
          "The IRDAI license is valid for three years from date of issue and specifies the authorized classes of insurance business.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Surveyor Registration?",
        description: [
          "We specialize in end‑to‑end IRDAI licensing support for insurance professionals.",
        ],
        points: [
          "Hassle‑free documentation support",
          "Expert legal and compliance assistance",
          "Complete coordination with IRDAI",
          "Accelerated processing and approvals",
        ],
      },
    ],
    faq: [
      {
        question:
          "What are the main duties of an Insurance Surveyor and Loss Assessor?",
        answer:
          "They assess the extent and legitimacy of insurance claims to help insurers make informed decisions.",
      },
      {
        question: "Why is a license necessary?",
        answer:
          "It legally authorizes professionals to conduct surveys and assessments on behalf of insurers.",
      },
      {
        question: "What types of surveyors are there?",
        answer: "Individual Surveyors and Corporate Surveyors.",
      },
      {
        question: "What are two essential eligibility requirements?",
        answer:
          "Membership in a recognized institution (e.g., ICAI, ICSI) and completion of IRDAI‑mandated training/examination.",
      },
      {
        question: "What documents are generally required?",
        answer:
          "Incorporation proof, application form, PAN, photos, qualifications, membership certificate, and fee payment proof.",
      },
      {
        question: "What is the validity period of the IRDA license?",
        answer: "Three years from the date of issue.",
      },
      {
        question: "What form is the IRDA license issued on?",
        answer: "Form IRDAI‑2‑LF.",
      },
    ],
  },

  "overview-of-patent-opposition": {
    title: "Patent Opposition",
    description:
      "Patent opposition lets any person challenge a patent grant that fails novelty, inventive step or other legal criteria, preventing wrongful monopolies and frivolous claims under the Patents Act.",
    overview: [
      {
        heading: "An Overview of Patent Opposition",
        content:
          "Patent opposition is a structured legal process under the Patents Act allowing third parties to object to the grant of a patent on grounds such as lack of novelty, non‑inventive step, insufficient disclosure, wrongful inventor attribution or misuse of traditional knowledge.",
      },
    ],
    benefits: [
      {
        heading: "Legal Grounds for Patent Opposition",
        content:
          "● Applicant is not true inventor or obtained invention unlawfully\n● Invention is not patentable under law\n● Known or used in India before priority date\n● Lacks novelty, inventive step or is obvious\n● Patent specification is incomplete or unclear\n● Application contains false or misleading information\n● Incorrect or non‑disclosure of biological source/origin\n● Based on traditional knowledge",
      },
    ],
    documentsRequired: [],
    registrationProcedure: [
      {
        heading: "Pre‑Grant Opposition Process",
        content:
          "● File Form‑7(A) with detailed statement & evidence after application publication but before grant\n● Controller notifies applicant of valid representation\n● Applicant replies within three months\n● Controller may reject representation or require amendments before grant",
      },
      {
        heading: "Post‑Grant Opposition Process",
        content:
          "● File written statement within one year of grant under Section 25(2)\n● Controller forms three‑member Opposition Board\n● Opponent submits grounds, interest & evidence\n● Patentee replies within two months (or faces revocation)\n● Opponent may seek permission to file rejoinder\n● Board reviews and submits recommendations within three months\n● Hearing is held; Controller decides to maintain, amend or revoke patent",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "Opposition Filing Deadlines",
        description:
          "Pre‑Grant: any time after publication and before grant\nPost‑Grant: within one year of patent grant",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "Our IPR experts guide you through every step of pre‑ and post‑grant opposition to ensure timely, accurate filings and strategic positioning.",
        ],
        points: [
          "Expert drafting of Form‑7(A) and oppositions",
          "Strategic analysis of prior art and grounds",
          "End‑to‑end procedural support",
          "Representation at hearings if required",
        ],
      },
    ],
    faq: [
      {
        question: "What is a patent opposition?",
        answer:
          "A legal process allowing any person to object to the grant of a patent on specified grounds.",
      },
      {
        question: "Who can oppose a patent?",
        answer:
          "Any person for pre‑grant opposition; only interested persons for post‑grant opposition.",
      },
      {
        question: "What are valid grounds for opposing a patent?",
        answer:
          "Lack of novelty, lack of inventive step, insufficient disclosure, wrongful inventor claim, misuse of traditional knowledge, etc.",
      },
      {
        question: "Can a granted patent be revoked?",
        answer:
          "Yes, through post‑grant opposition within one year or via court proceedings thereafter.",
      },
      {
        question: "What is the deadline for pre‑grant opposition?",
        answer:
          "Any time after publication of the application and before grant of the patent.",
      },
      {
        question: "What is the deadline for post‑grant opposition?",
        answer: "Within one year from the date of patent grant.",
      },
      {
        question: "When can a patent in India be revoked?",
        answer:
          "Post‑grant via opposition within one year or anytime later through court action.",
      },
    ],
  },

  "insurance-marketing-firm-registration": {
    title: "Insurance Marketing Firm Registration",
    description:
      "Register your Insurance Marketing Firm (IMF) with IRDAI to procure, market, and facilitate insurance and select financial services in India.",
    overview: [
      {
        heading:
          "An Overview of Insurance Marketing Firm (IMF) Registration in India",
        content:
          "An Insurance Marketing Firm (IMF) is a distribution model introduced by IRDAI (2015, guided by the 2017 Govardhan Committee report) that partners with multiple insurers to offer insurance services under a single license.",
      },
    ],
    benefits: [
      {
        heading: "Services Offered by an Insurance Marketing Firm",
        content:
          "● Solicitation and procurement of insurance policies across multiple insurers\n● Facilitation of back‑end operations with repositories, surveyors, loss assessors, TPAs\n● Marketing of financial products (mutual funds, pension products, NBFC services, postal financial instruments)",
      },
      {
        heading: "Eligibility Criteria for IMF Registration",
        content:
          "● Legally registered firm or company\n● Appointed Principal Officer\n● Employed Financial Service Executives (FSEs) and Insurance Sales Persons (ISPs)\n● Minimum net worth: ₹5 lakhs (single branch), ₹10 lakhs (multiple branches)\n● Business name must include “Insurance Marketing Firm” or “IMF”",
      },
    ],
    documentsRequired: [
      {
        heading: "Essential Documents for IMF Registration in India",
        content:
          "● Certificate of Incorporation or Registration\n● Memorandum & Articles of Association (MOA & AOA) or LLP Agreement\n● Principal Officer’s qualification & identity proof\n● Credentials of FSE(s) and ISP(s)\n● Net worth certificate\n● Latest bank statement\n● Detailed three‑year business plan\n● Infrastructure & staffing details with photographs\n● Declaration by Principal Officer\n● Consent letters from partner insurers\n● Payment proof of registration fee",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Process to Register an Insurance Marketing Firm",
        content:
          "● Gather all required documents as per IRDAI guidelines\n● Submit the online application via the IRDAI portal and upload supporting documents\n● Make the prescribed registration fee payment and obtain acknowledgment number\n● IRDAI reviews and verifies the application; respond to any discrepancy notices\n● Upon successful verification, IRDAI issues the IMF registration certificate",
      },
    ],
    feesStructure: [],
    registrationTimeline: [
      {
        heading: "License Validity",
        description:
          "The IMF registration remains valid for the period specified by IRDAI on the certificate and must be renewed upon expiry.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for IMF Registration?",
        description: [
          "DoStartup provides expert IRDAI consulting and end‑to‑end support for Insurance Marketing Firm licensing.",
        ],
        points: [
          "Accurate document preparation",
          "Real‑time application tracking",
          "Complete regulatory coordination",
          "Transparent communication and timely approval",
        ],
      },
    ],
    faq: [
      {
        question: "What is an Insurance Marketing Firm (IMF)?",
        answer:
          "An IMF is an IRDAI‑licensed entity authorized to procure, market, and facilitate insurance and select financial products for multiple insurers.",
      },
      {
        question: "Which authority regulates IMFs in India?",
        answer:
          "The Insurance Regulatory and Development Authority of India (IRDAI).",
      },
      {
        question: "What documents are essential for IMF registration?",
        answer:
          "Certificate of Incorporation, MOA & AOA (or LLP Agreement), key personnel proofs, net worth certificate, business plan, and insurer consent letters.",
      },
      {
        question: "How is an IMF different from an insurance agent?",
        answer:
          "An IMF can partner with multiple insurers and offer a broader range of services, unlike agents who typically represent a single insurer.",
      },
      {
        question: "What are two basic eligibility conditions?",
        answer:
          "Having a registered business entity and appointing a qualified Principal Officer with required net worth.",
      },
      {
        question: "What is the typical process for IMF registration?",
        answer:
          "Document collection, online application submission, document upload, fee payment, IRDAI review, and certificate issuance.",
      },
      {
        question: "What is the validity period of an IMF license?",
        answer:
          "As specified by IRDAI on the issued certificate; renewable upon expiry.",
      },
    ],
  },

  "insurance-self-network-platform": {
    title: "Insurance Self-Network Platform (ISNP) Registration",
    description:
      "Register your Insurance Self-Network Platform (ISNP) with IRDAI to operate a certified digital insurance e-commerce portal in India.",
    overview: [
      {
        heading: "Comprehensive Guide to ISNP Registration in India",
        content:
          "The Insurance Self-Network Platform (ISNP) is a digital initiative by the Insurance Regulatory and Development Authority of India (IRDAI) to enable regulated online insurance distribution. It allows businesses to conduct insurance transactions via a licensed e-commerce portal, ensuring legal and structured digital operations.",
      },
      {
        heading: "Key Objectives of ISNP",
        content:
          "The ISNP promotes greater reach and affordability of insurance products. It aims to:\n● Enhance insurance penetration through digital means\n● Minimize transactional costs\n● Improve efficiency in insurance services\n● Offer a cost-effective digital infrastructure for insurers and customers",
      },
    ],
    benefits: [
      {
        heading: "Services Offered by a Registered ISNP",
        content:
          "A registered ISNP can:\n● Issue digital insurance policies\n● Register or update nominations\n● Manage assignments and endorsements\n● Handle maturity, surrenders, and cancellations\n● Organize medical tests for health or life insurance\n● Grant policy loans and execute fund switches\n● Modify policy terms and conditions\n● Collect and transfer renewal premiums\n● Update customer and policy records\n● Extend or enhance policy coverage",
      },
      {
        heading: "ISNP vs Web Aggregator – Key Differences",
        content:
          "Scalability: ISNPs can host multiple web aggregators, while aggregators operate independently.\nIntegration: ISNPs integrate offerings from insurers and web aggregators, offering broader services and infrastructure.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Insurance Marketing Firm (IMF) Setup",
        content:
          "● Certificate of Incorporation\n● MOA and AOA\n● LLP Agreement (if applicable)\n● Principal Officer qualification documents\n● Financial Service Executive and Insurance Sales Person credentials\n● Net Worth Certificate\n● Bank statement\n● Three-Year Business Plan\n● Infrastructure and staff details\n● Declaration by Principal Officer\n● Infrastructure photos\n● Consent letters from insurance providers",
      },
    ],
    eligibility: [
      {
        heading: "Who Can Register as an ISNP?",
        content:
          "● Must be legally registered with MCA or ROFs\n● Appoint a qualified Principal Officer\n● Employ at least one Financial Service Executive and one Insurance Sales Person\n● Net worth requirement:\n  - ₹5 lakhs for single branch\n  - ₹10 lakhs for multiple branches\n● Entity name must include 'Insurance Marketing Firm' or 'IMF'",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process for IMF",
        content:
          "Step 1: Organize Documentation – Compile all required and authentic documents.\nStep 2: Online Form Submission – Visit IRDAI portal and complete the application form.\nStep 3: Upload Documents – Upload all necessary files as per IRDAI format.\nStep 4: Monitor and Resolve Errors – IRDAI may request clarifications.\nStep 5: Grant of Registration – On successful verification, IRDAI issues the IMF license.",
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Why Choose DoStartup?",
        description: [
          "DoStartup provides expert, end-to-end support for IMF and ISNP registrations.",
        ],
        points: [
          "End-to-end documentation and submission",
          "Compliance checks and IRDAI guidance",
          "Real-time application tracking",
          "Post-registration advisory services",
        ],
      },
    ],
    faq: [
      {
        question: "What is an Insurance Marketing Firm (IMF)?",
        answer:
          "An IMF is an IRDAI-authorized intermediary providing marketing, procurement, and distribution services for insurance products.",
      },
      {
        question: "Why is an IMF license necessary?",
        answer:
          "It is required to legally offer insurance services and operate under IRDAI regulations in India.",
      },
      {
        question: "What documents are required for IMF registration in India?",
        answer:
          "Certificate of incorporation, MOA, AOA, staff credentials, net worth certificate, business plan, infrastructure details, and insurer consent letters.",
      },
      {
        question: "How does a corporate agent differ from an IMF?",
        answer:
          "Corporate agents typically partner with limited insurers. IMFs can collaborate with multiple insurers and web aggregators, offering a wider service range.",
      },
      {
        question: "What is the net worth requirement for IMF registration?",
        answer:
          "₹5 lakhs for single-branch IMF and ₹10 lakhs for multi-branch operations.",
      },
      {
        question:
          "What is the registration process for becoming an IMF in India?",
        answer:
          "Document collection, online submission, uploading documents, IRDAI verification, and final approval.",
      },
      {
        question: "How long is the IMF license valid?",
        answer:
          "The validity is specified in the IRDAI certificate and requires timely renewal for continued operation.",
      },
    ],
  },

  "trademark-objection-in-india": {
    title: "Trademark Objection in India",
    description:
      "A trademark objection arises when the examiner or a third party believes a pending mark conflicts with the law or existing rights. The applicant must file a reasoned reply within 30 days to avoid abandonment.",
    overview: [
      {
        heading: "Overview of Trademark Objection",
        content:
          "Objections appear in the examination report soon after filing. They may be procedural (errors in form, applicant details, class, or power of attorney) or substantive (descriptive, misleading, offensive, or deceptively similar to an earlier mark). Resolving objections promptly preserves the application, protects the brand, and maintains credibility.",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Timely Reply",
        content:
          "● Prevents abandonment of the application\n● Secures statutory rights and strengthens brand value\n● Blocks rival claims\n● Clears the path to journal advertisement and registration",
      },
      {
        heading: "Objection vs Opposition",
        content:
          "Objection is raised by the examiner during examination; opposition is filed by a third party after journal publication. Both require prompt, factual replies, but opposition involves government fees and longer pleadings.",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Commonly Needed",
        content:
          "● Power of attorney (TM‑48)\n● Examination report\n● Proof of identity and address\n● Usage evidence (invoices, ads, website screenshots)\n● Any relevant government registrations (MSME, FSSAI, etc.)",
      },
    ],
    registrationProcedure: [
      {
        heading: "Steps to Respond to a Trademark Objection",
        content:
          "● Review the examination report\n● Note the 30‑day deadline\n● Collect proof of use and distinctiveness\n● Draft a concise counter‑statement addressing each point\n● File the reply online and track the matter\n● Attend hearings if summoned",
      },
    ],
    feesStructure: [
      {
        heading: "Fees",
        description:
          "No official fee is charged for filing the objection reply itself; professional drafting fees vary with case complexity.",
      },
    ],
    registrationTimeline: [],
    whyUs: [],
    faq: [
      {
        question: "Can I withdraw my trademark application if it is objected?",
        answer:
          "Yes; submit Form TM‑M requesting withdrawal before the mark is advertised.",
      },
      {
        question: "What is a trademark objection reply?",
        answer:
          "A formal written defence explaining why the mark satisfies the Act, supplying missing documents, and distinguishing it from cited references.",
      },
      {
        question:
          "What is the difference between a trademark objection and opposition?",
        answer:
          "Objection is raised by the examiner during examination; opposition is filed by a third party after publication.",
      },
      {
        question: "What documents are required for appearing in a hearing?",
        answer:
          "Copy of the reply, evidence of use, TM‑48 authorisation, ID proof, and any exhibits you plan to rely on.",
      },
      {
        question: "What is Section 9 of the Trademark Act, 1999?",
        answer:
          "It lists absolute grounds that bar registration, such as lack of distinctiveness or descriptiveness.",
      },
      {
        question: "When should one submit the trademark objection reply?",
        answer: "Within 30 days of receiving the examination report.",
      },
      {
        question: "What happens if I fail to respond to a trademark objection?",
        answer: "The application is marked abandoned and cannot proceed.",
      },
    ],
  },

  "trademark-assignment-in-india": {
    title: "Trademark Assignment in India",
    description:
      "A trademark assignment transfers all or part of the rights, title and interest in a mark from the current proprietor (assignor) to a new owner (assignee), with or without goodwill.",
    overview: [
      {
        heading: "Overview of Trademark Assignment",
        content:
          "A trademark assignment is a written instrument by which the current proprietor transfers all or part of the rights in a trademark to a new owner. Transfers may involve registered or unregistered marks, and may include goodwill (full commercial reputation) or exclude it (use only for new or unrelated products).",
      },
    ],
    benefits: [
      {
        heading: "Benefits of Assigning a Trademark",
        content:
          "Assigning a mark lets an owner monetise years of brand building, provides the buyer with a ready-made identity, preserves the intellectual-property record, supplies evidence of ownership in disputes, and speeds expansion into allied markets.",
      },
    ],
    Listicles: [
      {
        category: "Key Documents Required",
        documents: [
          "Existing registration certificate",
          "Identity and address proofs of both parties",
          "Notarised deed of assignment (execution date, place, witness signatures)",
          "Registrar directions and publicity proofs",
          "Power of attorney (if an agent is involved)",
          "Statement of goodwill transfer (if applicable)",
        ],
      },
      {
        category: "Statutory Restrictions",
        documents: [
          "Cannot create overlapping exclusive rights in identical marks for the same goods across India",
          "Cannot divide rights regionally in a way that confuses consumers",
        ],
      },
      {
        category: "Assignment of Registered vs Unregistered Marks",
        documents: [
          "Section 39 allows assignment of unregistered marks, with or without goodwill",
          "Registered marks may be assigned wholly or partly, with or without goodwill, within statutory limits",
        ],
      },
      {
        category: "Essential Clauses in an Assignment Deed",
        documents: [
          "Identities of assignor and assignee",
          "Precise description of the mark",
          "Territorial scope of use",
          "Consideration and effective date of transfer",
          "Warranties of ownership",
          "Dispute-resolution venue",
          "Signatures before a notary",
        ],
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Procedure",
        content:
          "1. Draft and sign the deed of assignment (Form TM-P)\n2. File the deed with the Trade Marks Registry within three months of execution (extensions possible)\n3. If goodwill is transferred, obtain the Registrar’s direction and advertise the assignment\n4. Send advertisement and proof back to the Registry\n5. Registrar enters the assignee’s name in the register and full ownership passes",
      },
    ],
    faq: [
      {
        question: "What constitutes a valid trademark assignment agreement?",
        answer:
          "A notarised document that identifies assignor and assignee, details the mark, states consideration, specifies goodwill transfer, and is executed by authorised signatories.",
      },
      {
        question: "Can an unregistered trademark be assigned in India?",
        answer:
          "Yes. Section 39 permits assignment of unregistered marks either with or without goodwill.",
      },
      {
        question: "What varieties of trademark assignments exist?",
        answer:
          "Assignments may be complete or partial, and each may include or exclude goodwill.",
      },
      {
        question: "May an individual assign a trademark?",
        answer:
          "Any legal owner—individual or entity—can assign a mark, provided the deed meets statutory requirements.",
      },
      {
        question: "Why is a written assignment essential?",
        answer:
          "It creates a definitive legal record, protects both parties, and enables the assignee to enforce the mark immediately.",
      },
      {
        question: "Must the deed be notarised?",
        answer:
          "Notarisation is not expressly required by statute but is standard practice and accepted by the Registry as proof of execution.",
      },
      {
        question: "How can someone check if a mark is already assigned?",
        answer:
          "Search the Trade Marks Registry online database or request an official register extract.",
      },
      {
        question:
          "Is it possible to earn revenue from a trademark after assignment?",
        answer:
          "Only if the deed reserves certain rights; otherwise all benefits, including royalty streams, pass to the assignee.",
      },
    ],
  },

  "intellectual-property-dispute": {
    title: "Intellectual Property Dispute Services by DOstartup",
    description:
      "Are you facing conflicts over patents, copyrights, trademarks, or trade secrets? Get expert support from DOstartup’s IP Specialists. Our dedicated Intellectual Property Dispute services help you protect your rights and business integrity with ease.",
    overview: [
      {
        heading: "An Overview of Intellectual Property Disputes",
        content:
          "Intellectual property disputes can be complex and damaging—legally and financially. At DOstartup, we help startups, creators, innovators, and enterprises resolve IP conflicts smoothly and effectively, ensuring rightful ownership and protection of their assets.",
      },
      {
        heading: "What Is Intellectual Property?",
        content:
          "Intellectual Property (IP) refers to creations of the mind: inventions, literary and artistic works, designs, logos, names, and symbols used in commerce. Disputes arise when these rights are violated, often involving unauthorized use of copyrighted content, patented technologies, trademarked symbols, or confidential business information.",
      },
    ],
    benefits: [
      {
        heading: "Why Choose DOstartup?",
        content:
          "10+ Years of Expertise in IPR & Legal Advisory\n400+ In-House Experts (CAs, CS, Legal Consultants)\n99% Timely Case Delivery\nPan-India Network Covering 10,000+ Pin Codes",
      },
    ],
    Listicles: [
      {
        category: "Types of Intellectual Property Rights",
        documents: [
          "Copyright: protection for original works of authorship (books, music, software, art)",
          "Patent: exclusive rights for inventions, designs or processes in exchange for public disclosure",
          "Trademark: distinctive signs, names or logos identifying goods or services",
          "Industrial Designs: ornamental aspects of a product (shape, pattern, texture)",
          "Geographical Indication (GI): identifies products with reputation tied to a region (e.g. Darjeeling tea)",
          "Trade Secrets: confidential business information (formulas, methods) that confer competitive advantage",
        ],
      },
      {
        category: "Types of Intellectual Property Disputes",
        documents: [
          "Patent Infringement & Defences: unauthorized use of a patented invention and strategies to challenge validity",
          "Trademark Infringement & Passing Off: unauthorized use of a registered mark causing consumer confusion",
          "Copyright Infringement: unauthorized use of creative works requiring proof of originality and similarity",
          "Design Rights Infringement: reproduction of protected designs without authorization",
        ],
      },
      {
        category: "Legal Framework for IP Disputes in India",
        documents: [
          "The Patents Act, 1970: grants inventors 20‑year exclusive rights",
          "The Trademarks Act, 1999: regulates registration, protection, opposition and renewal",
          "The Copyright Act, 1957: protects creative works with rights for lifetime plus 60 years",
        ],
      },
      {
        category: "Core IP Dispute Services",
        documents: [
          "Trademark Infringement Litigation",
          "Copyright Infringement Resolution",
          "Patent Dispute Strategy & Litigation",
          "Legal Notices for IP Violations",
          "Representation at Tribunals, Courts & Regulatory Bodies",
          "Cease and Desist Notice Drafting",
          "IP Risk Assessment & Due Diligence",
          "Border Enforcement & Customs Recordation",
          "Domain Name Disputes (e.g. Cybersquatting)",
          "Trade Secret & Confidentiality Disputes",
          "Opposition & Rectification Proceedings",
          "Arbitration & Mediation of IP Disputes",
          "Piracy & Counterfeit Goods Action",
          "Online IP Infringement Monitoring",
          "Contract & Licensing Dispute Handling",
          "Geographical Indication (GI) Conflicts",
          "IP Settlement Agreement Drafting",
          "Full‑Scope IP Litigation & Dispute Handling",
        ],
      },
    ],
    eligibilityCriteria: [],
    documentsRequired: [],
    registrationProcedure: [
      {
        heading: "IP Dispute Litigation Process in India",
        content:
          "1. Pre‑Litigation Stage: initiate cease and desist notices, mediation, and negotiation to avoid court\n2. Filing an IP Lawsuit: file plaint with evidence, issuance of summons to infringer\n3. Court Procedures & Timelines: hearings, evidence submission, cross‑examination, final arguments (typically resolved within 12 months under the Commercial Courts Act, 2015)",
      },
      {
        heading: "Post‑Litigation Steps",
        content:
          "1. Enforcement of Judgments: securing injunctions and damages; initiate contempt proceedings if needed\n2. Damages & Remedies: courts may award compensatory or punitive damages, injunctions, or destruction of infringing goods",
      },
    ],
    whyUs: [
      {
        heading: "Role of DOstartup’s IP Dispute Lawyers",
        description: [
          "Legal guidance on registration, enforcement, and defense of IPR",
          "Representation in complex litigation and appeal matters",
          "Business‑friendly solutions aligned with startup goals",
        ],
        points: [
          "Access to 24/7 IP Dispute Experts",
          "In‑Depth Legal Research & Precedent Analysis",
          "ADR & Settlement Support",
          "Free Consultation with IP Experts",
        ],
      },
    ],
    faq: [
      {
        question: "What is Intellectual Property?",
        answer:
          "IP refers to creations of the human mind—innovations, literary works, music, visual art, and technology. These are legally protected to ensure ownership and innovation.",
      },
      {
        question: "What are common types of IP disputes?",
        answer:
          "Patent, trademark, copyright, design rights, GI, and trade secret disputes are the most common.",
      },
      {
        question: "Are IP rights territorial?",
        answer:
          "Yes. IP protection is generally territorial—valid only within the country or region of registration unless protected internationally.",
      },
      {
        question: "Who manages IP rights in India?",
        answer:
          "The Office of the Controller General of Patents, Designs & Trademarks (CGPDTM) under the Ministry of Commerce handles IP administration.",
      },
      {
        question: "What should I do if my IP is infringed?",
        answer:
          "Send a legal notice, gather proof, and seek legal advice immediately. DOstartup offers comprehensive support from notice drafting to litigation.",
      },
      {
        question: "Can IP disputes be resolved via arbitration?",
        answer:
          "Yes. Many IP‑related commercial disputes, such as licensing or confidentiality breaches, can be resolved through alternative dispute resolution (ADR).",
      },
      {
        question: "How do I register or enforce IP rights?",
        answer:
          "You can file for IP protection online or through DOstartup’s services. For enforcement, our litigation team ensures effective legal redress.",
      },
      {
        question: "Can I sell or license my IP?",
        answer:
          "Yes. IP can be assigned, licensed, or sold, and often forms a key part of a business’s valuation.",
      },
    ],
  },
  "trademark-renewal": {
    title: "Trademark Renewal",
    description: "Renew your trademark and protect your brand identity with expert assistance.",
    overview: [
      {
        heading: "Trademark Renewal Overview",
        content: "In the vibrant landscape of India, trademarks have a lifespan of ten years. To retain protection, it is essential to initiate the renewal process at least six months before expiration. By submitting the renewal form (TMR) with a fee of ₹4,000, you can safeguard your brand’s identity and avoid legal complications or loss of rights.\nTimely renewal is not just a formality—it extends your legal protection for another decade. Failure to renew on time may result in loss of trademark and require a complicated restoration process. Timely action ensures your brand’s continued legal safety and integrity."
      },
      {
        heading: "Protecting Trademark Rights",
        content: "Renewing a trademark is a reaffirmation of the exclusive rights granted by its registration. Missing this crucial step could lead to loss of legal privileges and expose your brand to misuse. An active trademark is a stronghold—challengers must prove their claims against your registered right."
      }
    ],
    benefits: [
      {
        heading: "Advantages of Trademark Renewal",
        content: "● Legal Fortification: Empowers swift legal action against infringement.\n● Distinctive Identity: Preserves your brand’s uniqueness and prevents imitation.\n● Commercial Horizons: Enables monetization through licensing or royalty deals.\n● Extended Ownership Shield: Protects your brand from unauthorized use and strengthens goodwill.\n● Legal Peace of Mind: Reduces chances of disputes and legal challenges.\n● Brand Safety Net: Ensures continuous and uninterrupted protection.\n● Financial Rewards: Creates revenue opportunities via licensing or assignment."
      }
    ],
    documentsRequired: [
      {
        heading: "Required Documents for Trademark Renewal",
        content: "● Copy of the original trademark registration certificate.\n● Proof of active commercial use of the trademark.\n● Trademark search report confirming no similar trademarks.\n● Authorization letter (Power of Attorney), if applicable.\n● Identity and address proof of the applicant.\n● Original trademark registration application (Form TMA).\n● Documents addressing conflicting trademarks, if any."
      }
    ],
    registrationProcedure: [
      {
        heading: "Trademark Renewal Procedure",
        content: "Trademark renewal requires submission of Form TMR to the Trademark Registrar at least six months prior to expiry. If missed, renewal can still be filed within one to three months after expiry. The Registrar issues a renewal notice, but its absence doesn't negate the renewal requirement. Filing fees are ₹10,000 for offline and ₹9,000 for online (e-filing).\nA representative can file on your behalf. Upon approval, the renewal is published in the Trademark Journal. Regularly check the renewal status to avoid delays or issues."
      },
      {
        heading: "Importance of the Trademark Journal",
        content: "The Trademark Journal publishes trademarks approved by the examiner. This phase allows third parties to oppose registrations, fostering transparency and accountability in the trademark system."
      }
    ],
    feesStructure: [
      {
        heading: "Trademark Renewal Fees",
        description: "The renewal application fees vary by mode of submission:",
        feeTable: [
          {
            category: "Offline Filing",
            amount: "₹10,000"
          },
          {
            category: "Online Filing (e-filing)",
            amount: "₹9,000"
          }
        ]
      }
    ],
    registrationTimeline: [
      {
        heading: "Trademark Renewal Timeline",
        description: "The renewal process should start six months before expiry. Restoration is allowed within one year after expiry.",
        steps: [
          {
            title: "Initial Filing Window",
            duration: "Up to 6 months before expiry",
            description: "Ideal time to file Form TMR and avoid legal complications."
          },
          {
            title: "Grace Period",
            duration: "1 to 3 months after expiry",
            description: "Late filing with additional conditions and risk of removal."
          },
          {
            title: "Restoration Period",
            duration: "Up to 12 months after expiry",
            description: "Submit application under Section 25(4) to restore trademark rights."
          }
        ]
      }
    ],
    whyUs: [
      {
        heading: "Why Choose Us?",
        description: [
          "We specialize in trademark renewal services that protect your brand."
        ],
        points: [
          "Dedicated legal experts",
          "Seamless document handling",
          "Transparent pricing",
          "99% renewal success rate"
        ]
      }
    ],
    faq: [
      {
        question: "What is the validity of a registered trademark in India?",
        answer: "A registered trademark is valid for 10 years and must be renewed to maintain legal rights."
      },
      {
        question: "What happens if I forget to renew my trademark?",
        answer: "You can restore it within 12 months after expiry by filing a restoration application and paying the prescribed fee."
      },
      {
        question: "Is it mandatory to publish trademark renewals in the Trademark Journal?",
        answer: "Yes, approved renewals are published, allowing public transparency and potential objections."
      }
    ],
    Listicles: [
      {
        category: "Risks of Trademark Nonrenewal",
        documents: [
          "Trademark may be removed from the register by the Registrar.",
          "Registrar may publish public notices in the Trademark Journal.",
          "Loss of exclusive legal rights and brand protection.",
          "Negative impact on licensees or assignees of the trademark.",
          "Reduction in brand value and goodwill.",
          "Possibility of legal disputes or third-party claims."
        ]
      }
    ]
  },






  "trademark-class-finder": {
    title: "Trademark Class Finder",
    description: "Use the trademark class finder to determine the right classification for your brand’s products and services.",
    overview: [
      {
        heading: "Unlocking the Power of Trademark Class Finder: A Strategic Advantage for Your Brand",
        content: "Navigating the vibrant marketplace in India requires more than just a great product; it demands a robust brand identity. Enter the Trademark Class Finder—a pivotal tool designed to fortify and protect your brand’s unique essence, whether it’s a logo, name, or slogan. This innovative resource empowers businesses to seamlessly categorize their offerings within the framework of international trademark classifications."
      },
      {
        heading: "Why a Trademark Class Finder Matters",
        content: "The Trademark Class Finder acts as your brand’s personal guardian, ensuring that your intellectual property stands out amid competition. This user-friendly digital tool aligns your offerings with the correct categories in a global classification system consisting of 45 unique classes.\nFor tailored guidance, connect with the team at Dostartup—your partners in navigating the trademark landscape."
      },
      {
        heading: "Delving into Trademark Classes",
        content: "Trademark classes, based on the Nice Classification system curated by the World Intellectual Property Organization (WIPO) since 1957, are key to a successful trademark strategy. This system evolves to ensure businesses can accurately represent their products or services.\nChoosing the right trademark class using Form TM1 is crucial—not just procedural but a strategic step toward effective registration."
      }
    ],
    benefits: [
      {
        heading: "The Advantages of Conducting a Trademark Class Analysis",
        content: "● Minimize Conflicts: Reduces trademark infringement risks.\n● Fortify Your Brand: Provides strong coverage in important markets.\n● Expand with Confidence: Enables smoother market diversification.\n● Simplify Registration: Makes the process easier and more efficient.\n● Enhance Legal Security: Offers legal protection in appropriate categories."
      }
    ],
    documentsRequired: [
      {
        heading: "Essential Documentation for Trademark Class Identification",
        content: "● Business Registration Information\n● Product or Service Descriptions\n● Marketing Materials\n● Directors’ Identification\n● Trademark Registration Copies\n● Power of Attorney (if applicable)"
      }
    ],
    registrationProcedure: [
      {
        heading: "Essential Steps in Selecting Trademark Classes",
        content: "1. Pinpoint Your Offerings: Define your product/service core.\n2. Dive into the NICE Classification: Use NICE to locate the ideal class.\n3. Conduct a Thorough Exploration: Perform trademark searches to avoid conflicts.\n4. Seek Expert Guidance: Consult a professional for reliable classification."
      },
      {
        heading: "Mastering Your Trademark Management",
        content: "● Timely Renewals: File Form TMR within six months before expiry.\n● Active Use: Regularly use your trademark to avoid cancellation.\n● Vigilant Journal Monitoring: Track the journal for third-party threats.\n● Swift Action Against Infringement: Act promptly on violations."
      }
    ],
    Listicles: [
      {
        category: "Detailed List of Trademark Classes for Goods",
        documents: [
          "Class 1 – Chemicals, fertilizers, photographic supplies",
          "Class 2 – Paints, varnishes, lacquers, dyes",
          "Class 3 – Cleaning preparations, cosmetics, soaps",
          "Class 4 – Industrial oils, greases, lubricants, fuels",
          "Class 5 – Pharmaceuticals, veterinary products, disinfectants",
          "Class 6 – Metals, metal building materials",
          "Class 7 – Machines, machine tools, motors",
          "Class 8 – Hand tools, cutlery, razors",
          "Class 9 – Scientific apparatus, electrical equipment",
          "Class 10 – Medical apparatus, surgical instruments",
          "Class 11 – Heating, lighting, cooling, cooking apparatus",
          "Class 12 – Vehicles, apparatus for locomotion by land, air, water",
          "Class 13 – Firearms, ammunition, explosives",
          "Class 14 – Jewelry, precious metals, watches",
          "Class 15 – Musical instruments",
          "Class 16 – Paper products, printed materials, stationery",
          "Class 17 – Rubber, plastics, insulation materials",
          "Class 18 – Leather goods, luggage, bags",
          "Class 19 – Nonmetallic building materials",
          "Class 20 – Furniture, picture frames",
          "Class 21 – Household utensils, glassware, porcelain",
          "Class 22 – Ropes, nets, tents, sacks, textile fibers",
          "Class 23 – Yarns, threads for textile use",
          "Class 24 – Fabrics, textile goods",
          "Class 25 – Clothing, footwear, headgear",
          "Class 26 – Lace, embroidery, ribbons, buttons",
          "Class 27 – Floor coverings, wall hangings",
          "Class 28 – Games, toys, sports equipment",
          "Class 29 – Meat, fish, poultry, preserved foods",
          "Class 30 – Coffee, tea, spices, bakery products",
          "Class 31 – Agricultural products, fresh fruits, vegetables",
          "Class 32 – Nonalcoholic beverages, beers",
          "Class 33 – Alcoholic beverages (except beers)",
          "Class 34 – Tobacco, smokers’ articles, matches",
          "Class 35 – Advertising, business management, administration",
          "Class 36 – Insurance, financial services, real estate",
          "Class 37 – Construction, repair, installation services",
          "Class 38 – Telecommunications",
          "Class 39 – Transportation, logistics, storage services",
          "Class 40 – Treatment of materials, custom manufacturing",
          "Class 41 – Education, training, entertainment services",
          "Class 42 – Scientific and technological services, IT, research",
          "Class 43 – Hospitality, accommodation, catering services",
          "Class 44 – Medical, veterinary, beauty, agricultural services",
          "Class 45 – Legal, security, personal, social services"
        ]
      }
    ],
    registrationTimeline: [],
    feesStructure: [],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "When it comes to protecting your brand, Dostartup delivers an unmatched suite of trademark solutions tailored to your unique needs."
        ],
        points: [
          "Robust brand identity protection",
          "Streamlined trademark services",
          "Expertise at your fingertips",
          "Transparent and affordable pricing",
          "24/7 dedicated client support",
          "Innovative, user-friendly tools",
          "Proactive alerts and reports"
        ]
      }
    ],
    faq: [
      {
        question: "What is a trademark class?",
        answer: "A trademark class is a category under which your goods or services are classified for registration purposes."
      },
      {
        question: "How many trademark classes exist under the Nice Classification?",
        answer: "There are 45 classes in total—34 for goods and 11 for services."
      },
      {
        question: "Why is selecting the correct trademark class important?",
        answer: "Correct classification ensures appropriate legal protection and avoids conflicts with existing marks."
      },
      {
        question: "Can I register a trademark under multiple classes?",
        answer: "Yes, trademarks can be registered under multiple classes based on your range of goods or services."
      },
      {
        question: "Do I need expert help to choose a trademark class?",
        answer: "Expert assistance is recommended to avoid misclassification and strengthen your trademark strategy."
      }
    ]
  },



  "trademark-hearing": {
    title: "Trademark Hearing",
    description: "Prepare for your trademark hearing with expert guidance and legal support to protect your brand identity.",
    overview: [
      {
        heading: "Trademark Hearing: Your-Go-To-Guide",
        content: "Navigating the world of trademarks can feel a bit like venturing into uncharted territory, but fear not! A trademark hearing is here to illuminate your path. Imagine standing before a Trademark Registrar—whether in person or via video call—ready to tackle the objections that have popped up during your trademark registration journey. This isn’t just any meeting; it’s a chance to defend your brand and prove its uniqueness."
      },
      {
        heading: "Why the Hearing Happens",
        content: "Trademark hearings typically spring into action when initial responses don’t quite hit the mark for the Registrar. This is where you come in—armed with evidence, ready to showcase why your trademark deserves protection.\nBoth you and the Registrar have the option to reschedule the hearing. If life gets in the way, simply submit Form TMM to postpone. Just keep in mind: if you miss the hearing repeatedly without a solid reason, your trademark application could face rejection."
      }
    ],
    benefits: [
      {
        heading: "The Upsides of Participating",
        content: "● Shield Against Financial Losses: Protect your hard-earned brand from potential disputes with similar trademarks.\n● Boost Your Understanding: Learn the ins and outs of trademark law, making you a more informed applicant.\n● Legal Clarity: Avoid the pitfalls of adopting trademarks that could lead to legal headaches down the road.\n● Verify Authenticity: Ensure that your trademark indeed stands out as original and credible."
      }
    ],
    documentsRequired: [
      {
        heading: "Get Your Ducks in a Row",
        content: "● Power of Attorney: Needed if you’re working with a trademark attorney.\n● Authorization Letter: This gives someone else the green light to handle the formalities for you.\n● Affidavit of Trademark Use: Showcase how you've been consistently using your trademark (e.g., business registration documents, marketing materials, and invoices).\n● Trademark Authenticity Statement: Verifies the credibility of your trademark.\n● Proof of Business Operations: Demonstrates that you are actively trading and using your trademark.\n● Notice and Hearing Report: The formal notice for your hearing.\n● Trademark Examination Report: Insight into the review of your application."
      }
    ],
    registrationProcedure: [
      {
        heading: "The Trademark Hearing Process: Step by Step",
        content: "● Notice Receipt: You’ll receive a show cause notice signed by the Registrar.\n● Hearing Attendance: Appear on the appointed day—either in person or via video link—with your authorized representative if needed.\n● Documentation: Present your prepared documents and evidence.\n● Submission of Evidence: Submit supporting documents to the trademark office.\n● Registrar's Decision: The Registrar reviews all submissions and makes a final decision on your application."
      }
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading: "Why Partner Up with Dostartup?",
        description: [
          "Trademark hearings may appear simple, but one mistake can jeopardize your brand’s legal standing."
        ],
        points: [
          "Specialized legal experts for trademark objections and hearings",
          "Proven success in resolving trademark disputes",
          "Personalized guidance at every step",
          "Complete documentation and filing support",
          "Affordable legal solutions tailored to your business",
          "Fast turnaround and proactive communication"
        ]
      }
    ],
    faq: [
      {
        question: "What is a trademark hearing?",
        answer: "A trademark hearing is a legal proceeding where you present your case to a Trademark Registrar in response to objections raised during the trademark examination process."
      },
      {
        question: "When is a trademark hearing required?",
        answer: "A hearing is scheduled when the Registrar is not satisfied with the written response to the examination report."
      },
      {
        question: "Can a trademark hearing be rescheduled?",
        answer: "Yes, you can submit Form TMM to request a postponement of your hearing date."
      },
      {
        question: "What happens if I miss the trademark hearing?",
        answer: "Repeated absences without valid reason may lead to rejection of your trademark application."
      },
      {
        question: "Do I need a lawyer for a trademark hearing?",
        answer: "It is strongly recommended to have a trademark attorney or authorized representative to present your case effectively."
      }
    ],
    Listicles: []
  }
  
  
  
};
