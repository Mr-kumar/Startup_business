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
  description: "The Ministry of Tourism’s voluntary Guest House Registration Scheme ensures clean, hygienic, and upgraded budget accommodations for tourists, boosting employment, state revenue, and lodging quality.",
  overview: [
    {
      heading: "Key Considerations for a Successful Guest House",
      content: "• Effective Management: Delegate responsibilities and maintain high service standards.  \n• Catering to Guest Needs: Offer modern amenities (Wi-Fi, BBQs, pools) and act on feedback.  \n• Building a Reputation: Encourage repeat stays and manage digital marketing diligently."
    },
    {
      heading: "Minimum Infrastructure Requirements",
      content: "• At least 6 lettable rooms with ventilation and ≥6 m road access.  \n• 25% rooms with heating or AC.  \n• Western-style toilets, separate wet/dry waste disposal.  \n• Reception with phone, lighting, storage, and window coverings."
    },
    {
      heading: "Safety & Services Standards",
      content: "• Fire safety systems and CCTV in public areas.  \n• 24/7 RO/UV or branded bottled water.  \n• On-call doctor/hospital tie-up, pest control, parking, ≥60% hygiene compliance."
    }
  ],
  benefits: [
    {
      heading: "Benefits of Guest House Registration",
      content: "• Legal authorization to operate and avoid penalties  \n• Enhances guest trust and marketability  \n• Streamlines obtaining other licenses (FSSAI, fire NOC)  \n• Demonstrates compliance with national tourism standards"
    }
  ],
  documentsRequired: [
    {
      heading: "General & Site Details",
      content: "• Guest house name, address, owner/promoter details  \n• Distance from transport hubs, roads, amenities  \n• Site plan, layout certified by local authority"
    },
    {
      heading: "Facilities & Safety",
      content: "• Area (sq. m), public spaces, eco-practices, safety features  \n• Power backup, fire-readiness certificate, CCTV plan  \n• Sanitation clearance and occupancy certificate"
    },
    {
      heading: "Ownership & NOCs",
      content: "• MoA & AoA (companies) or deed/registration (proprietorship/partnership)  \n• Fire NOC, police approval, liquor/money-changer license (if applicable)  \n• Public liability insurance and sanctioned building plans"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Application Submission",
      content: "Do Startup registers you on the MoT portal and completes the online application form."
    },
    {
      heading: "Step 2: Document Upload & Payment",
      content: "Upload all required certificates and pay the prescribed application fees."
    },
    {
      heading: "Step 3: Site Inspection",
      content: "HRACC inspects the property—possibly with an overnight stay—to verify compliance."
    },
    {
      heading: "Step 4: Certificate Issuance",
      content: "Upon approval, the regional director issues a two-year registration certificate."
    }
  ],
  registrationTimeline: [
    {
      heading: "Validity & Renewal",
      description: "Registration is valid for five years from approval. Apply for renewal three months before expiry and report any operational changes promptly."
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup?",
      description: [
        "10+ years of tourism and hospitality compliance expertise",
        "Tailored consultation and document preparation",
        "End-to-end application drafting and filing",
        "Inspection scheduling and liaison support",
        "Ongoing compliance and renewal assistance"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "What is a guest house?",
      answer: "A budget lodging option like a small home, suite, or cottage for short-term stays."
    },
    {
      question: "How does it differ from a hotel?",
      answer: "Guest houses are smaller, often owner-managed, offering a more personalized stay."
    },
    {
      question: "What’s the minimum room count?",
      answer: "At least six lettable rooms are required for registration."
    },
    {
      question: "Which documents are needed?",
      answer: "Identification, sanitation & fire clearances, occupancy certificate, title documents, and NOCs."
    },
    {
      question: "How long is the registration valid?",
      answer: "The certificate is valid for five years, renewable three months before expiry."
    }
  ]
},


"barcode-registration": {
  title: "Barcode Registration in India – A Complete Guide by Do Startup",
  description: "GS1 India manages barcode standards and issues unique codes to businesses nationwide, enabling efficient product identification, inventory management, and supply chain transparency.",
  overview: [
    {
      heading: "What is a Barcode?",
      content: "A barcode is a machine-readable symbol composed of parallel lines and numeric digits that store product information—such as batch numbers, serial numbers, and pricing—facilitating quick data retrieval across industries."
    },
    {
      heading: "Types of Barcodes",
      content: "1. EAN-13 (13 digits; global retail standard)  \n2. UPC-A (12 digits; used in USA/UK/Australia)  \nOther industry types include Code 93, Code 39, GS1 Databar, Code 128, and ITF."
    }
  ],
  benefits: [
    {
      heading: "Key Benefits of Barcode Registration",
      content: "• Efficient Inventory Management: Track products from manufacture to sale.  \n• Asset Management: Monitor assets with ease.  \n• Error-Free Operations: Automated data capture reduces mistakes.  \n• Cost-Effective & Customisable: Low implementation cost and flexible design.  \n• Authenticity & Transparency: Displays batch and serial info.  \n• Faster Checkouts & Better Decision-Making: Quick scanning and data insights.  \n• Global Standardisation: Unique codes worldwide."
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for Barcode Registration",
      content: "• Request letter for barcode allotment  \n• PAN Card of business entity  \n• Audited financial statements  \n• Shop Establishment Certificate  \n• GST/VAT Registration Certificate  \n• Partnership Deed (if applicable)  \n• Company COI, MOA, AOA (if applicable)  \n• Registrar of Society certificate (if applicable)  \n• Cancelled cheque copy  \n• Product list and specifications"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Inquiry Form",
      content: "Submit basic business details via Do Startup’s website to initiate the barcode registration process."
    },
    {
      heading: "Step 2: Document Collection",
      content: "Provide all mandatory documents—PAN, GST, financials, establishment proof, product list, etc.—for verification."
    },
    {
      heading: "Step 3: Verification & Application",
      content: "Our experts review your documents and complete the GS1 India barcode application on your behalf."
    },
    {
      heading: "Step 4: Submission to GS1 India",
      content: "Do Startup files the verified application with GS1 India and tracks its progress."
    },
    {
      heading: "Step 5: Issuance of Barcode Certificate",
      content: "Upon successful verification and fee payment, GS1 India issues your Barcode Registration Certificate."
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup?",
      description: [
        "Expert guidance through GS1 India processes",
        "End-to-end document preparation and filing",
        "Fast turnaround and real-time updates",
        "Transparent pricing with no hidden fees",
        "Dedicated 24×7 support"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "How are barcodes applied to products?",
      answer: "Barcodes can be printed directly on packaging, added as pre-printed labels, or embedded in product artwork."
    },
    {
      question: "Who can apply for barcode registration?",
      answer: "Any manufacturer, exporter, wholesaler, or retailer selling physical products can apply."
    },
    {
      question: "What barcode standard is used in India?",
      answer: "India primarily uses the EAN-13 standard managed by GS1 India."
    },
    {
      question: "What is a GLN?",
      answer: "GLN stands for Global Location Number, which uniquely identifies locations like warehouses and stores."
    }
  ]
},


"world-manufacturer-identifier-wmi-code": {
  title: "World Manufacturer Identifier (WMI) Code Registration in India – A Complete Guide by Do Startup",
  description: "A WMI Code is the first three characters of a Vehicle Identification Number (VIN) that uniquely identifies a vehicle manufacturer worldwide. In India, WMI Codes are issued by BIS in coordination with SAE International.",
  overview: [
    {
      heading: "What is a VIN?",
      content: "A Vehicle Identification Number (VIN) is a unique 17-character alphanumeric code assigned to every motor vehicle, containing manufacturer details, model, engine specs, year and location of manufacture."
    },
    {
      heading: "Structure of the VIN Code",
      content: "• WMI – first 3 characters identifying country, manufacturer and vehicle type  \n• VDS – next 6 characters describing vehicle attributes (body style, engine)  \n• VIS – last 8 characters indicating production year, plant and serial number"
    },
    {
      heading: "WMI Code Geography Breakdown",
      content: "Ranges: 1–5 North America, S–Z Europe, A–H Africa, J–R Asia (India), 6–7 Oceania, 8–9 South America"
    }
  ],
  benefits: [
    {
      heading: "Importance of WMI Code",
      content: "• Ensures global recognition of the manufacturer  \n• Mandatory for valid VIN assignment  \n• Supports regulatory compliance and tracking  \n• Facilitates international vehicle trade  \n• Enables efficient recall management and after-sales service"
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for WMI Code Registration",
      content: "• Duly signed application form with manufacturing unit details  \n• PAN and GST certificates (self-attested)  \n• Certificate of Incorporation / Partnership Deed  \n• MOA & AOA or proprietorship details  \n• Udyam Registration (if applicable)  \n• Address proof of manufacturing facility  \n• Product category/code and existing coding (if any)  \n• Tentative production commencement date  \n• Application fee receipt"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Filing of Application",
      content: "Do Startup assists in preparing and submitting the WMI registration application to BIS."
    },
    {
      heading: "Step 2: Document Verification",
      content: "BIS verifies submitted documents for completeness and accuracy."
    },
    {
      heading: "Step 3: WMI Proposal",
      content: "BIS proposes a unique WMI Code based on product type and location."
    },
    {
      heading: "Step 4: SAE International Registration",
      content: "The WMI proposal is forwarded to SAE International for inclusion in the global database."
    },
    {
      heading: "Step 5: Confirmation Letter",
      content: "Upon approval, SAE issues a Confirmation Letter to the manufacturer."
    },
    {
      heading: "Step 6: Issuance of WMI Code",
      content: "The manufacturer is officially assigned a WMI Code for use in VINs."
    }
  ],
  feesStructure: [
    {
      heading: "Application Fees",
      description: "Application fee as prescribed by BIS, payable via demand draft or online transfer."
    }
  ],
  registrationTimeline: [
    {
      heading: "Timeline for WMI Code Registration",
      description: "The process typically completes in 4–6 weeks, subject to document verification and SAE approval.",
      steps: [
        {
          title: "Application & Payment",
          duration: "1 week",
          description: "Submission of application form and fee."
        },
        {
          title: "BIS Processing",
          duration: "2–3 weeks",
          description: "Document verification and WMI proposal."
        },
        {
          title: "SAE Approval",
          duration: "1–2 weeks",
          description: "Global database registration and confirmation."
        }
      ]
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup?",
      description: [
        "Expert liaison with BIS and SAE International",
        "End-to-end application and documentation support",
        "Guaranteed timelines and real-time tracking",
        "99.9% success rate in WMI registrations",
        "24×7 dedicated customer assistance"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "What is a WMI Code?",
      answer: "The first three characters of a VIN that uniquely identify a vehicle manufacturer globally."
    },
    {
      question: "Is WMI mandatory for all vehicle manufacturers?",
      answer: "Yes, any entity manufacturing road-legal vehicles must obtain a WMI Code."
    },
    {
      question: "Which standards govern VIN and WMI?",
      answer: "ISO 3779 for VIN format and ISO 3780 for WMI format."
    },
    {
      question: "Who issues WMI Codes in India?",
      answer: "The Bureau of Indian Standards (BIS), in coordination with SAE International."
    },
    {
      question: "How long is the WMI Code valid?",
      answer: "It remains valid as long as the manufacturer operates under the same name and address."
    }
  ]
},


"telemarketing-registration-india": {
  title: "Telemarketing Registration in India – Step-by-Step Guide by Do Startup",
  description: "Telemarketing registration under TRAI/DoT is mandatory for any entity engaging in commercial tele-communications (voice or non-voice) to promote goods or services. Secure your license to operate legally, build consumer trust, and enhance brand credibility.",
  overview: [
    {
      heading: "What is a Telemarketer?",
      content: "A telemarketer is an individual or legally registered entity that sends commercial communications—via calls, SMS, or recorded messages—to inform consumers about transactions, promote products or services, or solicit business."
    },
    {
      heading: "Who Can Apply?",
      content: "• Indian citizens (18+ years)  \n• Companies under the Companies Act, 2013  \n• LLPs under the LLP Act, 2008  \n• Partnerships under the Partnership Act, 1932  \n• Sole proprietors  \nApplicants must have a clean legal record."
    },
    {
      heading: "Benefits of Registration",
      content: "• Legal authorization and avoidance of TRAI/DoT penalties  \n• Improved customer trust and brand image  \n• Higher lead generation and smoother sales  \n• Foundation for long-term business growth"
    }
  ],
  benefits: [
    {
      heading: "Strategic Advantages",
      content: "• Operate within the law and avoid heavy fines  \n• Leverage consumer trust for better conversion  \n• Maintain uninterrupted telecom connectivity  \n• Demonstrate credibility to partners and clients"
    }
  ],
  documentsRequired: [
    {
      heading: "Checklist of Required Documents",
      content: "• PAN Card of the company  \n• TAN details  \n• ROC Number (for companies)  \n• Registered and corporate office address proofs  \n• Last financial year turnover statement  \n• Recent utility bills  \n• Dedicated landline number & email ID  \n• Authorized signatory’s details and ID proof"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Company Incorporation",
      content: "Ensure your business is incorporated under the appropriate Indian law (Companies, LLP, Partnership or Sole Proprietorship)."
    },
    {
      heading: "Step 2: Document Collection",
      content: "Gather all mandatory documents as per the checklist above."
    },
    {
      heading: "Step 3: Application Filing",
      content: "Submit Form TM-1 along with supporting documents to the TRAI/DoT portal."
    },
    {
      heading: "Step 4: Fee Payment",
      content: "Pay the prescribed registration fee via the online payment gateway."
    },
    {
      heading: "Step 5: Provisional Approval",
      content: "Receive a Provisional Telemarketing Certificate (valid for 3 months) upon preliminary verification."
    },
    {
      heading: "Step 6: Final Registration",
      content: "After compliance checks during the provisional period, the Final Telemarketing Registration Certificate is issued with a 10-year validity."
    }
  ],
  feesStructure: [
    {
      heading: "Telemarketing Registration Fees",
      description: "Fees are prescribed by DoT and may vary. Typically includes: provisional application fee and final registration fee.",
      feeTable: [
        {
          category: "Provisional Registration",
          amount: "As per TRAI/DoT notification"
        },
        {
          category: "Final Registration",
          amount: "As per TRAI/DoT notification"
        }
      ]
    }
  ],
  registrationTimeline: [
    {
      heading: "Typical Timeline",
      description: "End-to-end registration usually completes within 4–6 weeks, subject to document accuracy and compliance checks.",
      steps: [
        {
          title: "Form Submission & Payment",
          duration: "1–2 weeks",
          description: "Application filing, fee payment, and provisional certificate issuance."
        },
        {
          title: "Compliance & Final Approval",
          duration: "3–4 weeks",
          description: "Verification during provisional period and issuance of final certificate."
        }
      ]
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup?",
      description: [
        "Expert handling of TRAI/DoT procedures",
        "End-to-end document preparation & filing",
        "Liaison with regulators to expedite approvals",
        "Ongoing compliance guidance throughout the license term",
        "24×7 support for any queries or audits"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "What is a Telemarketing Certificate?",
      answer: "It’s an official authorization from TRAI/DoT allowing entities to conduct commercial tele-communications legally in India."
    },
    {
      question: "Who needs to register?",
      answer: "Any individual or entity sending promotional calls, SMS, or recorded messages for commercial purposes."
    },
    {
      question: "What is the provisional license validity?",
      answer: "3 months from the date of issuance."
    },
    {
      question: "How long is the final registration valid?",
      answer: "10 years, subject to continued compliance."
    },
    {
      question: "What happens if I operate without registration?",
      answer: "You may face heavy fines, license suspension, or legal action under the Telecom Act."
    },
    {
      question: "Can I surrender my license?",
      answer: "Yes, by notifying DoT 30 days in advance and completing the prescribed formalities."
    }
  ]
},

"trusted-telecom-approval": {
  title: "Trusted Telecom Approval – A Complete Guide",
  description: "Mandatory certification under the National Security Directive on Telecommunication Sector (NSDTS) for Telecom Service Providers (TSPs) and vendors seeking to deploy telecom equipment in India.",
  overview: [
    {
      heading: "Trusted Telecom Approval in India",
      content: "The Government of India has enforced Trusted Telecom Approval for all Telecom Service Providers (TSPs) to ensure national security by verifying that telecom equipment is sourced from trusted vendors. This is governed under the National Security Directive on Telecommunication Sector (NSDTS), operational since June 15, 2021, and implemented via the Trusted Telecom Portal (TTP)."
    },
    {
      heading: "What is the Trusted Telecom Portal?",
      content: "The Trusted Telecom Portal (TTP), developed by C-DOT with RailTel and NSCS, allows TSPs to check whether a telecom product or vendor is listed as 'trusted'. If not listed, TSPs or vendors can submit an application for verification through the portal."
    },
    {
      heading: "What is NSDTS?",
      content: "The National Security Directive on Telecommunication Sector (NSDTS) is a strategic framework aimed at ensuring that only secure and trusted telecom hardware and software are used in Indian telecom networks. It mandates verification and approval of vendors and equipment before deployment."
    }
  ],
  benefits: [
    {
      heading: "Why is Trusted Telecom Approval Important?",
      content: "• Ensures compliance with national security regulations  \n• Prevents deployment of unverified or malicious telecom equipment  \n• Mandatory for all TSPs prior to product integration  \n• Promotes accountability and transparency  \n• Non-compliance may lead to blacklisting and operational penalties"
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for Trusted Telecom Certification",
      content: "• Official request from Telecom Service Provider (TSP)  \n• Technical specifications of the product  \n• Memorandum of Association (MoA) and Articles of Association (AoA)  \n• Authorization letter from a company official  \n• Company registration and identity documents"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: TSP or Vendor Request Initiation",
      content: "Either a TSP or vendor initiates a request for listing on the Trusted Telecom Portal by creating an account and filling the application form."
    },
    {
      heading: "Step 2: Documentation Submission",
      content: "Upload all mandatory documents including technical specs, legal identification, and authorization letters."
    },
    {
      heading: "Step 3: Review by NCSC",
      content: "The National Cyber Security Coordinator (NCSC), in consultation with the National Security Committee on Telecom (NSCT), evaluates the application and verifies the credentials."
    },
    {
      heading: "Step 4: Approval & Listing",
      content: "Upon successful verification, the product/vendor is listed as a Trusted Source on the portal, and approval is granted."
    }
  ],
  feesStructure: [
    {
      heading: "Trusted Telecom Approval – Fee Details",
      description: "Currently, there is no publicly disclosed standard government fee for Trusted Telecom Approval. Costs may vary depending on liaison or consultancy services availed during the application process.",
      feeTable: [
        {
          category: "TSP/Vendor Application",
          amount: "Varies (Subject to consultant or authority)"
        }
      ]
    }
  ],
  registrationTimeline: [
    {
      heading: "Timeline for Trusted Telecom Approval",
      description: "Approval timelines may vary based on documentation accuracy and authority processing.",
      steps: [
        {
          title: "Initial Application Submission",
          duration: "2–5 business days",
          description: "Vendor or TSP submits application and documents via TTP."
        },
        {
          title: "Evaluation by NCSC",
          duration: "2–4 weeks",
          description: "Verification by authorities and multi-agency review process."
        },
        {
          title: "Final Approval",
          duration: "1–2 days",
          description: "Listing of vendor/product on the Trusted Sources database."
        }
      ]
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup for Trusted Telecom Approval?",
      description: [
        "Dedicated telecom compliance experts",
        "Liaison with TSPs and government bodies",
        "Complete documentation assistance and submission",
        "Faster application turnaround",
        "End-to-end support until final listing"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "What is the purpose of NSDTS?",
      answer: "To ensure secure procurement of telecom equipment and prevent national security risks from unauthorized vendors or products."
    },
    {
      question: "What is the Trusted Telecom Portal (TTP)?",
      answer: "An official portal allowing TSPs and vendors to request product/vendor listing and verify approval status."
    },
    {
      question: "Who verifies the application for Trusted Telecom Approval?",
      answer: "The National Cyber Security Coordinator (NCSC), with oversight from the National Security Committee on Telecom (NSCT)."
    },
    {
      question: "Is Trusted Telecom Approval mandatory for all TSPs?",
      answer: "Yes, TSPs must use only trusted products and vendors as per NSDTS guidelines."
    },
    {
      question: "How can a vendor be listed on the Trusted Telecom Portal?",
      answer: "Vendors can apply directly via the TTP by submitting relevant documentation or be nominated by a TSP."
    },
    {
      question: "What is Trusted Telecom Certification (TTC)?",
      answer: "It is the formal approval confirming that a vendor or product is compliant with NSDTS and safe for use in telecom networks."
    },
    {
      question: "What equipment is covered under NSDTS?",
      answer: "All core and access network components like routers, switches, base stations, and control elements used by TSPs."
    }
  ]
},

"uplinking-downlinking-permission": {
  title: "Uplinking/Downlinking Channel Permission – A Complete Guide",
  description: "Obtain uplinking/downlinking channel permissions from the Ministry of Information and Broadcasting (MIB) via the Broadcast Seva Portal for legal satellite TV broadcasting in India.",
  overview: [
    {
      heading: "What is Uplinking and Downlinking?",
      content: "In India, broadcasters must obtain government authorization to transmit or receive TV signals via satellite. Uplinking refers to sending electronic signals from a station to a satellite, while downlinking means receiving those signals back on Earth. The permission is granted under the Uplinking and Downlinking Policy Guidelines, 2011."
    },
    {
      heading: "Why is Permission Required?",
      content: "Uplinking/downlinking permission ensures compliance with national broadcasting and security standards. It regulates content flow and infrastructure used in TV signal transmission and is legally mandatory before operating a TV channel via satellite."
    },
    {
      heading: "Who Grants This License?",
      content: "The Ministry of Information and Broadcasting (MIB) is the licensing authority. Applications are processed via the Broadcast Seva Portal, and approvals are subject to financial and technical scrutiny."
    }
  ],
  benefits: [
    {
      heading: "Key Benefits of Securing Uplinking/Downlinking Permission",
      content: "• Legal authorization to broadcast satellite TV in India\n• Enables channel listing with cable and DTH operators\n• Regulatory protection for content and operations\n• Builds trust with viewers, advertisers, and partners\n• Facilitates global reach for Indian broadcasters"
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for Uplinking/Downlinking Approval",
      content: "• Certificate of Incorporation\n• Memorandum & Articles of Association (MoA & AoA)\n• List of Directors and Shareholders\n• Audited Balance Sheet\n• Board Resolution authorizing the application\n• Details of Foreign Employees (if any)\n• Equipment Specifications\n• FDI Details (if applicable)\n• 90-day Operational Report\n• Technical documents like block diagrams and schematics"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Document Preparation",
      content: "Compile all required documents as per MIB guidelines. Ensure accuracy to prevent delays or rejection."
    },
    {
      heading: "Step 2: Application Filing on Broadcast Seva Portal",
      content: "Apply online via the Broadcast Seva Portal. Fill in correct technical and legal details and pay the application fee."
    },
    {
      heading: "Step 3: Application Scrutiny by MIB",
      content: "The Ministry of Information and Broadcasting examines the application, assessing financial capability, legal status, and infrastructure."
    },
    {
      heading: "Step 4: Issuance of Letter of Intent (LoI)",
      content: "Upon successful evaluation, the MIB issues a Letter of Intent. The applicant must then pay the license fee and submit a Performance Bank Guarantee."
    },
    {
      heading: "Step 5: Grant of Final License",
      content: "Final permission is issued, typically valid for 5 years. Renewal requires annual fee payments and compliance review."
    }
  ],
  feesStructure: [
    {
      heading: "Net Worth Requirements",
      description: "Applicants must fulfill the following net worth criteria based on the type and number of channels or teleports:",
      feeTable: [
        {
          category: "First Teleport",
          amount: "₹3 Crores"
        },
        {
          category: "Additional Teleport",
          amount: "₹1 Crore"
        },
        {
          category: "First Non-News TV Channel",
          amount: "₹5 Crores"
        },
        {
          category: "Additional Non-News TV Channel",
          amount: "₹2.5 Crores"
        },
        {
          category: "First News TV Channel",
          amount: "₹20 Crores"
        },
        {
          category: "Additional News TV Channel",
          amount: "₹5 Crores"
        }
      ]
    }
  ],
  registrationTimeline: [
    {
      heading: "Timeline for Uplinking/Downlinking Permission",
      description: "The licensing process typically takes 4–6 weeks, subject to document verification and MIB processing timelines.",
      steps: [
        {
          title: "Document Compilation",
          duration: "1 week",
          description: "Prepare and collate required company and technical documents."
        },
        {
          title: "Application Submission",
          duration: "2–3 days",
          description: "Submit application on Broadcast Seva Portal and pay fees."
        },
        {
          title: "Scrutiny and LoI Issuance",
          duration: "3–4 weeks",
          description: "Application reviewed and Letter of Intent issued."
        },
        {
          title: "Final Approval",
          duration: "1 week",
          description: "Submit guarantee and fee to obtain broadcasting license."
        }
      ]
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup for Uplinking/Downlinking Permission?",
      description: [
        "We simplify the licensing process for broadcasters in India"
      ],
      points: [
        "Expertise in MIB compliance and documentation",
        "Proven success with national broadcasters",
        "Fast and accurate application filing",
        "Support with financial and technical representation",
        "End-to-end coordination with MIB authorities"
      ]
    }
  ],
  faq: [
    {
      question: "Who grants uplinking/downlinking permission in India?",
      answer: "The Ministry of Information and Broadcasting (MIB) via the Broadcast Seva Portal."
    },
    {
      question: "What are the financial eligibility norms?",
      answer: "Net worth requirements range from ₹1 Cr to ₹20 Cr depending on the type of operation and number of teleports/channels."
    },
    {
      question: "Is submission of an audited balance sheet mandatory?",
      answer: "Yes, it's a mandatory part of financial assessment by MIB."
    },
    {
      question: "Can a disqualified applicant reapply?",
      answer: "No. Any entity previously disqualified is not eligible to apply again."
    },
    {
      question: "What policy governs uplinking and downlinking permissions?",
      answer: "The Uplinking and Downlinking Policy Guidelines, 2011."
    },
    {
      question: "Is setting up a teleport hub mandatory for uplinking?",
      answer: "Yes. A fully operational teleport hub is required before uplinking permissions are granted."
    }
  ]
},

"flipkart-seller-registration": {
  title: "Flipkart Seller Registration – A Complete Guide",
  description: "Register as a Flipkart seller and reach millions of customers with ease through India's leading e-commerce platform.",
  overview: [
    {
      heading: "Overview on Flipkart Seller Registration",
      content: "Flipkart seller registration is the official process through which vendors can enlist themselves as sellers on the Flipkart platform to showcase and sell their products online. This offers a smart and scalable way to reach a broader customer base without needing physical storefronts. Flipkart manages logistics such as shipping, payments, and customer service for its sellers."
    },
    {
      heading: "History of Flipkart",
      content: "Founded in 2007 by Sachin and Binny Bansal, Flipkart began as a platform for selling books. Over time, it diversified into electronics, fashion, lifestyle products, and more. It has acquired several businesses, with Myntra being one of the most significant acquisitions. Flipkart also supports sellers with tools like training and workshops to help them scale."
    },
    {
      heading: "Is GST Registration Mandatory for Flipkart Seller Registration?",
      content: "Yes. A valid GSTIN is compulsory to register as a seller on Flipkart."
    }
  ],
  benefits: [
    {
      heading: "Advantages of Flipkart Seller Registration",
      content: "• Business Growth: Reach more customers across India.\n• Lower Costs: Low operational and compliance costs.\n• Transparency: A clear and straightforward business model.\n• Ease of Business: Simplified selling experience.\n• Customer Feedback: Receive valuable insights through reviews.\n• Better Marketing: Enhanced product visibility through Flipkart ads."
    }
  ],
  documentsRequired: [
    {
      heading: "Minimum Requirements to Register as a Flipkart Seller",
      content: "• GST Registration (GSTIN)\n• PAN Card (individual or business)\n• Business Registration (if not sole proprietorship)\n• Active Bank Account\n• At least one product to list\n• Active mobile number and email ID"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Register Your Business",
      content: "Ensure your business is legally registered under a valid structure such as a sole proprietorship, partnership, LLP, or private limited company."
    },
    {
      heading: "Step 2: Open a Bank Account",
      content: "Create a current bank account in your business name to enable smooth transactions."
    },
    {
      heading: "Step 3: Apply for GST",
      content: "Obtain a valid GSTIN for tax compliance, which is mandatory for Flipkart registration."
    },
    {
      heading: "Step 4: Create Flipkart Account",
      content: "Go to seller.flipkart.com and register with necessary details such as contact info, PAN, and GSTIN."
    },
    {
      heading: "Step 5: List Products",
      content: "Upload at least 10 products with proper descriptions, images, and pricing under appropriate categories."
    },
    {
      heading: "Step 6: Start Selling",
      content: "Once products are listed, fulfill incoming orders and mark them ready for dispatch."
    },
    {
      heading: "Step 7: Get Paid",
      content: "Flipkart settles seller payments within 10–15 days after successful delivery."
    }
  ],
  feesStructure: [
    {
      heading: "Flipkart Seller Fees and Charges",
      description: "There are no charges for listing products on Flipkart. Fees are only applicable after a successful sale is made.",
      feeTable: [
        {
          category: "Referral Fee",
          amount: "Starts at 3% (based on product category)"
        },
        {
          category: "Closing Fee",
          amount: "Fixed fee based on selling price"
        },
        {
          category: "Shipping Fee",
          amount: "Starts from ₹30, varies by item size and delivery location"
        }
      ]
    }
  ],
  registrationTimeline: [
    {
      heading: "Timeline for Flipkart Seller Registration",
      description: "The Flipkart seller account can be activated within a few hours if all documents are ready.",
      steps: [
        {
          title: "Account Creation and Document Upload",
          duration: "1 Day",
          description: "Register your account and upload business documents including PAN, GSTIN, and bank account details."
        },
        {
          title: "Product Listing and Verification",
          duration: "1–2 Days",
          description: "List minimum 10 products; Flipkart may verify listings before activating sales."
        },
        {
          title: "Begin Selling",
          duration: "Instant after approval",
          description: "Start receiving and dispatching orders to customers."
        }
      ]
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup for Flipkart Seller Registration?",
      description: [
        "Expert support for account setup and compliance",
        "Quick turnaround with error-free document filing",
        "Dedicated support team for new sellers"
      ],
      points: [
        "100% document accuracy",
        "No hidden charges",
        "Free consultation for listing strategy"
      ]
    }
  ],
  faq: [
    {
      question: "Will there be a fee to list goods on Flipkart?",
      answer: "No, listing products on Flipkart is completely free of charge."
    },
    {
      question: "How many listings are required before sales start?",
      answer: "You must list at least 10 products to begin selling on Flipkart."
    },
    {
      question: "When will the buyer pay the seller?",
      answer: "Payments are made within 10–15 days of successful delivery."
    },
    {
      question: "Should I ship my items to Flipkart?",
      answer: "No, you pack the orders and Flipkart picks them up from your location."
    },
    {
      question: "What are the benefits of selling on Flipkart?",
      answer: "Access to a wide customer base, logistics support, protection fund, and improved product visibility."
    },
    {
      question: "What details are needed to register as a Flipkart seller?",
      answer: "You need GSTIN, PAN card, bank account, contact details, and a product list."
    },
    {
      question: "How is the login process completed?",
      answer: "Login is done through seller.flipkart.com using OTP verification on your registered mobile number."
    },
    {
      question: "Why sell products on Flipkart?",
      answer: "To reach a vast online market, grow your brand, and leverage Flipkart’s logistics and technology support."
    },
    {
      question: "Who is eligible to sell on Flipkart?",
      answer: "Anyone with at least one product and valid documents like GSTIN and PAN card."
    },
    {
      question: "How long does the registration process take?",
      answer: "Usually completed within a few hours if all required documents are ready."
    },
    {
      question: "Can services be sold on Flipkart?",
      answer: "Currently, Flipkart is focused on tangible products only."
    },
    {
      question: "How does Flipkart dispatch orders?",
      answer: "Sellers pack the product, and Flipkart handles delivery to the customer."
    },
    {
      question: "Do I have to pay to list my products?",
      answer: "No, listing is free. Fees are charged only on confirmed orders."
    }
  ]
},


"sanitary-import-permit": {
  title: "Sanitary Import Permit – A Complete Guide",
  description: "Obtain your Sanitary Import Permit with Do Startup’s expert support to legally import animal-based products into India.",
  overview: [
    {
      heading: "Sanitary Import Permit – An Overview",
      content: "If you're involved in importing animal-based products like meat, milk items, eggs, ova, semen, embryos, or pet food, you must obtain a Sanitary Import Permit at customs. Partner with Do Startup’s experts to ensure compliance and seamless documentation.\nA Sanitary Import Permit is a certificate issued under the Ministry of Agriculture’s authority, in accordance with Sections 3 and 4 of the Livestock Importation Act, 1898. The Department of Animal Husbandry, Dairying, and Fisheries ensures that this permit helps prevent foreign animal diseases from entering India."
    },
    {
      heading: "What is a Sanitary Import Permit?",
      content: "The Sanitary Import Permit, granted under Section 3(a) of the Livestock Importation Act of 1898, permits the import of livestock and livestock products. Although not a license, it specifies hygiene and safety requirements that must be met by the exporting country prior to entry into India."
    }
  ],
  benefits: [
    {
      heading: "Benefits of Sanitary Import Permit Certificate",
      content: "• Designated Entry Points: Import of animal products is only allowed through authorized seaports and airports like Delhi, Mumbai, Kolkata, Chennai, Bangalore, and Hyderabad. Fish imports can also pass through Visakhapatnam, Kochi, and Petrapole (Bangladesh border).\n• Disease Control: The permit reduces the risk of foreign diseases by ensuring hygienic product certification before entry.\n• Hygienic Assurance: Ensures animal product safety through veterinarian certification from the exporting country.\n• Financial Protection: Minimizes potential losses from disease outbreaks in imported livestock products."
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for Sanitary Import Permit Certificate",
      content: "• Valid FSSAI license for importing livestock products for human use\n• FSSAI license copy\n• Product catalogue and description\n• Ingredient details for each item\n• Product process chart\n• List of items to be imported\n• Certificate of Analysis (chemical and microbiological details)\n• Intended use of imported items"
    }
  ],
  registrationProcedure: [
    {
      heading: "Sanitary Import Permit Online Application Process",
      content: "1. Visit the SIP portal and choose the relevant tab\n2. Complete Form A or B and upload the required documents\n3. Make the payment via the online gateway\n4. Upon approval, download the permit directly from the portal"
    },
    {
      heading: "Compliance Requirements for Sanitary Import Permit",
      content: "• The product must comply with Codex and Indian Food Safety standards\n• Attach a valid sanitary certificate from the origin country\n• No beef or beef derivatives allowed\n• Provide necessary health certificates\n• Products must pass microbiological, chemical, and physical tests\n• Product lists must follow the standard format and quantity"
    }
  ],
  feesStructure: [
    {
      heading: "Fees for Acquiring an Online Sanitary Import Permit",
      description: "The government fee for a Sanitary Import Permit is ₹300 per application. Professional service fees may vary based on service providers.",
      feeTable: [
        {
          category: "Government Application Fee",
          amount: "₹300"
        },
        {
          category: "Consultancy Charges (Optional)",
          amount: "Varies by service provider"
        }
      ]
    }
  ],
  registrationTimeline: [
    {
      heading: "Timeline for Getting a Sanitary Import Permit Certificate",
      description: "The permit is typically issued within 8–12 working days, subject to proper documentation and verification.",
      steps: [
        {
          title: "Document Preparation & Upload",
          duration: "1–3 days",
          description: "Collect and upload all mandatory documents on the SIP portal."
        },
        {
          title: "Application Review",
          duration: "4–7 days",
          description: "Authorities verify documentation, purpose, and compliance."
        },
        {
          title: "Permit Issuance",
          duration: "1–2 days",
          description: "Upon successful approval, the permit is made available for download."
        }
      ]
    }
  ],
  whyUs: [
    {
      heading: "Why Choose Do Startup for Sanitary Import Permit Services?",
      description: [
        "Comprehensive guidance from experienced consultants",
        "Timely document review and submission",
        "Regulatory support for smooth import clearance"
      ],
      points: [
        "10+ years of expertise",
        "Trusted by 500+ importers",
        "99% approval success rate"
      ]
    }
  ],
  faq: [
    {
      question: "What is the validity of a sanitary import permit?",
      answer: "It ranges from 3 months to 1 year, allowing multiple consignments within the approved limit."
    },
    {
      question: "What is a sanitary import permit?",
      answer: "It is a certificate specifying sanitary norms for importing livestock products into India."
    },
    {
      question: "What is a sanitary import permit in customs?",
      answer: "A document required at customs clearance to confirm compliance with animal import health norms."
    },
    {
      question: "How can I get a sanitary import permit in India?",
      answer: "Apply online via the SIP portal, attach required documents, and complete payment."
    },
    {
      question: "Why is an online sanitary import permit required?",
      answer: "To ensure that imported animal products meet health and hygiene standards, protecting public health."
    },
    {
      question: "What documents are required for the sanitary import permit?",
      answer: "FSSAI license, product catalogue, ingredient list, usage details, process chart, and analysis certificate."
    },
    {
      question: "How is the Sanitary Import Permit delivered?",
      answer: "Approved permits are made available for download on the SIP portal."
    },
    {
      question: "How will missing documents be communicated?",
      answer: "The applicant will be notified through the SIP portal to correct and resubmit the documents."
    },
    {
      question: "What is the fee for a sanitary import permit?",
      answer: "₹300 per application, excluding any consultant’s professional fees."
    },
    {
      question: "How long does it take to get a sanitary import permit certificate?",
      answer: "Typically 8–12 working days, subject to regulatory review and documentation."
    }
  ]
}
,

"npop-certification": {
  title: "NPOP Certification – A Complete Guide",
  description: "Achieve NPOP certification with Do Startup’s expert support to certify your organic products for domestic and export markets under the National Programme for Organic Production.",
  overview: [
    {
      heading: "An Overview of NPOP Certification",
      content: "NPOP certification is a government-backed initiative that sets benchmarks for organic cultivation, processing, and trade. It allows farmers and businesses to officially showcase their adherence to organic farming standards, catering to eco-conscious consumers and promoting sustainable agriculture."
    },
    {
      heading: "What is NPOP?",
      content: "The National Programme for Organic Production (NPOP), launched in 2001, defines standards for organic farming, systems, and certification. Aligned with global norms, it governs the use of the India Organic logo and regulates import/export under APEDA."
    },
    {
      heading: "Background of NPOP in India",
      content: "Started in 2000, NPOP enabled organic certification for farms and livestock. As of 2024, India ranks second globally in organic farmland and first in farmer count. Administered by APEDA under the Ministry of Commerce, it unlocks both domestic and international organic markets."
    }
  ],
  benefits: [
    {
      heading: "Benefits of NPOP Registration",
      content: "• Boost Consumer Trust – Certified products reassure buyers of quality.\n• Market Recognition – Credibility as a certified organic supplier.\n• Eco-Friendly Practices – Promotes sustainable agriculture and biodiversity.\n• Health Assurance – Guarantees chemical-free, GMO-free products.\n• Global Market Access – Facilitates organic exports under recognized standards."
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for NPOP Certification",
      content: "• Certification body’s mandate and program statement\n• Inspection and evaluation procedures\n• Fee structure and financial details\n• Complaint and appeal handling process\n• List of certified products\n• Company registration proof\n• Memorandum of Association (MOA)\n• Audited financial statements\n• Accreditation fee receipts\n• ISO 17065 quality manual\n• SOPs, formats, and checklists\n• Authorization letter\n• Additional relevant documents"
    }
  ],
  registrationProcedure: [
    {
      heading: "How to Apply for NPOP Certification",
      content: "1. Check Eligibility – Ensure compliance with NPOP farm and production standards.\n2. Choose a Certification Body – Accredited by APEDA under NPOP.\n3. Submit Application – Provide details of farm, crops, livestock.\n4. Upload Documents – Include certification plan, inputs, SOPs, etc.\n5. Inspection & Verification – Third-party checks ensure compliance.\n6. Certification Approval – Issued on successful compliance.\n7. Annual Review – APEDA conducts yearly audits of certified units."
    }
  ],
  feesStructure: [
    {
      heading: "NPOP Certification Fees",
      description: "Fees vary by certification body and scope of operation. Typically include application fee, inspection charges, and annual surveillance fees."
    }
  ],
  registrationTimeline: [
    {
      heading: "Validity & Timeline of NPOP Certification",
      description: "Valid for 3 years from issuance.",
      steps: [
        {
          title: "Application to Approval",
          duration: "3–6 months",
          description: "Includes document review, inspections, and compliance verification."
        }
      ]
    }
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
        "24/7 expert assistance"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "What is NPOP certification?",
      answer: "NPOP certification assures organic production quality under a national standard governed by APEDA and the Department of Commerce."
    },
    {
      question: "What is the validity of an NPOP certificate?",
      answer: "Valid for 3 years from the issuance date."
    },
    {
      question: "What is the difference between NPOP and PGS-India?",
      answer: "NPOP is a national certification scheme for export and domestic markets; PGS-India is a participatory guarantee system for domestic trade."
    },
    {
      question: "Who certifies organic food in India?",
      answer: "Certification bodies accredited by APEDA and NAB under NPOP carry out audits and approvals."
    },
    {
      question: "Who needs organic certification?",
      answer: "Producers, processors, traders, and exporters of organic agricultural products require certification."
    },
    {
      question: "What does NPOP stand for?",
      answer: "National Programme for Organic Production."
    }
  ]
},


"drone-registration": {
  title: "Drone Registration – A Complete Overview",
  description: "Register your drone on India’s Digital Sky platform via Do Startup to ensure legal, safe, and compliant operations for commercial or recreational use.",
  overview: [
    {
      heading: "What is Drone Registration?",
      content: "Under DGCA’s Drone Rules, 2021, all unmanned aircraft systems (UAS) above nano category must be registered on the Digital Sky platform to obtain a Unique Identification Number (UIN) and Operator Permit (UAOP) before flight operations."
    },
    {
      heading: "Categories of Drone Registration",
      content: "• Nano Drones: ≤ 250 g\n• Micro Drones: 251 g – 2 kg\n• Small Drones: 2 – 25 kg\n• Medium Drones: 25 – 150 kg\n• Large Drones: > 150 kg"
    },
    {
      heading: "Importance of Registration",
      content: "Ensures compliance with national security directives, prevents unauthorized flights, promotes safe operations, and supports growth of India’s indigenous drone ecosystem."
    }
  ],
  benefits: [
    {
      heading: "Key Benefits of Drone Registration",
      content: "• Prevent unauthorized drone flights\n• Ensure operational safety and compliance\n• Enable commercial drone services\n• Boost domestic drone manufacturing\n• Access DGCA-approved flight corridors"
    }
  ],
  documentsRequired: [
    {
      heading: "Documents Required for Registration",
      content: "• Organization name & address proof\n• Company registration number & GST certificate\n• Director’s name & DIN\n• Aadhar card of one director\n• Drone specifications & photograph\n• OEM certificate & No Permission No Takeoff (NPNT) letter"
    }
  ],
  registrationProcedure: [
    {
      heading: "Step-by-Step Registration Process",
      content: "1. Check OEM certificate & NPNT compliance\n2. Register on Digital Sky portal\n3. Apply for UIN and mark it on your drone\n4. Apply for UAOP (Operator Permit)\n5. Obtain Remote Pilot License from DGCA-authorized institute\n6. Install NPNT software for real-time flight permissions"
    }
  ],
  feesStructure: [
    {
      heading: "Government Fees",
      description: "• UIN issuance: ₹1,000\n• UAOP application: ₹25,000\n• UAOP renewal: ₹10,000"
    }
  ],
  registrationTimeline: [
    {
      heading: "Timeline to Complete Registration",
      description: "Process typically takes a few weeks to a few months depending on document accuracy and DGCA approvals.",
      steps: [
        {
          title: "Digital Sky Registration",
          duration: "1–2 weeks",
          description: "Portal sign-up, form filling, and UIN issuance."
        },
        {
          title: "UAOP & Pilot License",
          duration: "2–4 weeks",
          description: "Operator permit application and remote pilot license issuance."
        }
      ]
    }
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
        "24/7 compliance assistance"
      ],
      points: []
    }
  ],
  faq: [
    {
      question: "Do I need a license for nano drones?",
      answer: "No, nano drones (≤ 250 g) flown for non-commercial purposes are exempt from registration and pilot licensing."
    },
    {
      question: "What is NPNT?",
      answer: "No Permission No Takeoff (NPNT) is a mandate requiring real-time digital clearance before drone takeoff."
    },
    {
      question: "How long is a UAOP valid?",
      answer: "UAOP validity aligns with drone category and pilot license validity, typically renewable annually."
    },
    {
      question: "Can I fly anywhere in India?",
      answer: "No, flights are restricted to green zones and require DPR approval for red and yellow zones."
    },
    {
      question: "How soon can I start commercial operations?",
      answer: "After obtaining UIN, UAOP, NPNT compliance, and remote pilot license — typically within 4–6 weeks."
    }
  ]
}











};
