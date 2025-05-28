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
          "The process typically takes 7–10 working days, subject to document verification and ROC workload.",
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
    description: "The Food Safety and Standards Authority of India (FSSAI) enforces food safety regulations under the Food Safety and Standards Act, 2006, monitoring every stage of the food supply chain to ensure public health and consumer protection.",
    overview: [
      {
        heading: "Role & Origin of FSSAI",
        content: `Established under the Food Safety and Standards Act, 2006, FSSAI sets and enforces food safety standards, issues mandatory licenses, advises the government on food policy, and takes legal action against adulteration and other violations.`
      },
      {
        heading: "Who Needs a Central License?",
        content: `Food Business Operators (FBOs) with annual turnover exceeding ₹20 Crores, those engaged in import/export of food products, or operating e-commerce food platforms must obtain an FSSAI Central License to operate legally in India.`
      }
    ],
    benefits: [
      {
        heading: "Key Benefits",
        content: `- Global Recognition: Enhances credibility nationally and internationally  
  - Ease of Expansion: Simplifies opening new outlets and securing funding  
  - Legal Protection: Demonstrates compliance with food safety standards  
  - Consumer Trust: Builds confidence and market advantage`
      }
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
          "Retailers & distributors (turnover > ₹20 Crores)"
        ]
      }
    ],
    eligibilityCriteria: [
      {
        heading: "Essential Criteria",
        content: `• Annual turnover exceeding ₹20 Crores  
  • Operations across multiple states  
  • Production capacity beyond prescribed thresholds  
  • Engaged in import/export or e-commerce sale of food items`
      },
      {
        heading: "Special Conditions",
        content: `• Businesses in nutraceuticals & health supplements  
  • Transport operators with >100 vehicles  
  • 5-star and 7-star hotels`
      }
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
  • Turnover declaration (if > ₹20 Crores)`
      }
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Process",
        content: `1. Submit Form B to the Licensing Authority, ensuring eligibility criteria are met.  
  2. FSSAI reviews application and documents; resolve any discrepancies.  
  3. On-site premises inspection by FSSAI officials.  
  4. Upon approval, receive your Central License certificate (display prominently).`
      }
    ],
    renewal: {
      heading: "Validity & Renewal",
      content: [
        "Valid for 1–5 years; fees increase with longer validity. Renew at least 30 days before expiry to avoid penalties.",
        "Renewal documents: recent passport photo, government ID proof, PAN Card, address proof, land deed or rent agreement + NOC (if rented)."
      ]
    },
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "End-to-end assistance for all FSSAI licenses",
          "Efficient management of paperwork and follow-ups",
          "Real-time application tracking with full transparency"
        ],
        points: [
          "Experienced licensing consultants",
          "High success rate and timely delivery",
          "Transparent pricing with no hidden charges"
        ]
      }
    ],
    faq: [
      {
        question: "How can I obtain a Central FSSAI License?",
        answer: "Submit Form B with required documents, undergo review and inspection, and receive your license upon approval."
      },
      {
        question: "Who needs an FSSAI Central License?",
        answer: "FBOs with turnover > ₹20 Crores, multi-state operators, importers/exporters, and large e-commerce food sellers."
      },
      {
        question: "Can I convert my State License to Central?",
        answer: "Yes—apply anew for the Central License once you meet the criteria."
      },
      {
        question: "What are the three types of FSSAI licenses?",
        answer: "Basic Registration for small operators, State License for medium businesses, and Central License for large/multi-state operations."
      },
      {
        question: "How long does it take to get the Central License?",
        answer: "Typically 30–60 days, depending on document completeness, verification, and inspection schedules."
      }
    ]
  },
  "nidhi-company-registration": {
    title: "Nidhi Company Registration – A Quick Guide",
    description: "A Nidhi Company is a member-based non-banking financial entity incorporated under the Companies Act, 2013 and governed by the Nidhi Rules, 2014. It promotes savings and financial discipline by accepting deposits and granting loans exclusively to its members.",
    overview: [
      {
        heading: "What Is a Nidhi Company?",
        content: `A Nidhi Company is a type of NBFC formed under Section 406 of the Companies Act, 2013, to foster a culture of savings and mutual benefit among its members.  
  It accepts deposits and provides loans only to its members, building financial security within a close-knit community.`
      },
      {
        heading: "Purpose of Nidhi Companies",
        content: `Nidhi Companies promote responsible financial habits by accepting deposits and offering loans exclusively within their membership.  
  Though classified as NBFCs, they are exempt from most RBI regulations, operating under a member-centric model and the Nidhi Rules, 2014.`
      },
      {
        heading: "Key Requirements",
        content: `• At least 7 members and 3 directors at incorporation  
  • Maximum 200 members  
  • Minimum paid-up capital of ₹10 lakhs  
  • Net Owned Funds (NOF) of ₹20 lakhs within 120 days  
  • Maintain ≥10% of deposits as unencumbered term deposits  
  • NOF to deposits ratio ≤ 1:20 (excluding intangible assets & accumulated losses)  
  • Fixed deposits ≥10% of total deposits in a nationalized bank`
      }
    ],
    benefits: [
      {
        heading: "Benefits of Registering a Nidhi Company",
        content: `- Simple, cost-effective formation process  
  - Minimal RBI compliance requirements  
  - Low financial risk: transactions only among members  
  - Encourages savings and financial discipline  
  - Self-reliant funding model using net-owned funds`
      }
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
  • Company registration questionnaire`
      }
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
  7. File Form NDH-4 to obtain formal Nidhi status (extension via Form NDH-2 if needed).`
      },
      {
        heading: "Mandatory Compliance",
        content: `• File Form NDH-1 annually within 90 days of FY end.  
  • File Form NDH-3 (half-yearly returns) with CA/CS certificate.  
  • Hold quarterly Board meetings & annual AGM.  
  • File AOC-4 & MGT-7 annually.  
  • Maintain statutory books of accounts.  
  • File Income Tax Return by September 30 each year.  
  • Ensure locker rental income <20% of total income.`
      }
    ],
    feesStructure: [
      {
        heading: "Registration Fees",
        description: "Government fees for DIN, DSC, SPICe+ filing, and statutory forms typically range from ₹10,000 to ₹15,000 (ex-GST), excluding professional charges."
      }
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Nidhi Company Registration",
        description: "The process generally takes 30–45 days, depending on document readiness and online form approvals.",
        totalTime: "30–45 days"
      }
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "End-to-end support for Nidhi Company incorporation",
          "Expert handling of MCA filings and compliance",
          "Real-time application tracking with full transparency"
        ],
        points: [
          "High client satisfaction and retention",
          "Average 4.3+ rating on Google",
          "100+ Nidhi Companies successfully registered",
          "Backed by 200+ experienced professionals"
        ]
      }
    ],
    faq: [
      {
        question: "What is the full form of Nidhi?",
        answer: "Nidhi means 'treasure' in Hindi, reflecting its mission of mutual benefit."
      },
      {
        question: "Who regulates Nidhi Companies?",
        answer: "They are governed by the MCA under the Companies Act, 2013 and Nidhi Rules, 2014."
      },
      {
        question: "How many members are required initially?",
        answer: "A minimum of 7 members and 3 directors are required at incorporation."
      },
      {
        question: "Can a Nidhi Company operate across states?",
        answer: "Yes, but it must comply with the ROC jurisdictional requirements and maintain a branch setup."
      },
      {
        question: "What activities are prohibited?",
        answer: "Chit funds, hire-purchase, leasing, insurance, securities trading, and transactions with non-members."
      },
      {
        question: "How long does registration take?",
        answer: "Typically 30–45 days, subject to document accuracy and form approvals."
      }
    ]
  },
  "producer-company-registration": {
    title: "Farmer Producer Company Registration in India – A Complete Guide",
    description: "A Farmer Producer Company (FPC) combines the cooperative ethos with the legal advantages of a private company under the Companies Act, 2013. It empowers primary producers to collectively manage production, procurement, processing and marketing, unlocking funding, tax exemptions and market access.",
    overview: [
      {
        heading: "What Is a Producer Company?",
        content: `A Producer Company is a legal entity under the Companies Act, 2013 designed for farmers, artisans and rural producers.  
  It enables members to jointly handle harvesting, processing, grading, pooling, marketing, procurement and sale of their produce, while enjoying shared ownership, democratic decision-making and profit distribution.`
      },
      {
        heading: "Objectives of FPC Registration",
        content: `• Collective management of agricultural activities (harvest, processing, marketing)  
  • Access to credit, insurance and financial services for members  
  • Educational and technical support (training, advisory services)  
  • Fostering unity, cooperation and shared growth  
  • Driving agricultural innovation for sustainability`
      },
      {
        heading: "Legal Framework",
        content: `• Regulated under Section 465 of the Companies Act, 2013 (and certain provisions of Part IXA of the 1956 Act)  
  • Must adhere to objectives in Section 581B of the Companies Act, 1956  
  • Comply with MCA filings, governance and transparency norms for FPCs`
      }
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
  8. Simplified bank loans and institutional funding`
      }
    ],
    eligibilityCriteria: [
      {
        heading: "Incorporation Requirements",
        content: `• Minimum 10 individual members (all primary producers)  
  • At least 5 directors (⅔ must be producer-members)  
  • Minimum paid-up capital of ₹5 lakhs  
  • Name must end with “Producer Company Limited”  
  • Registered office address in India  
  • PAN and TAN for the company`
      }
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
  • Company registration questionnaire`
      }
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
  7. File Form NDH-4 for formal Nidhi status (extension via NDH-2 if needed)`
      },
      {
        heading: "Mandatory Compliance",
        content: `• Annual AGM and board meetings (min. 4 per year)  
  • File annual returns (AOC-4, MGT-7) and NDH-1/NDH-3 as applicable  
  • Maintain books of account and file ITR by Sept 30  
  • Limit locker rental income <20% of total income`
      }
    ],
    feesStructure: [
      {
        heading: "Registration Fees",
        description: "Government fees (DIN, DSC, SPICe+ filings, NDH forms) typically range from ₹15,000 to ₹50,000, excluding professional charges."
      }
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Register",
        description: "With complete documentation and prompt filings, FPC registration usually takes 25–30 working days.",
        totalTime: "25–30 days"
      }
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "End-to-end FPC incorporation support",
          "Expert handling of MCA compliance",
          "Real-time application tracking"
        ],
        points: [
          "Trusted by 5,000+ farmers & agripreneurs",
          "75% market share in FPC registrations",
          "Zero delays & error-free filings",
          "Post-formation compliance support"
        ]
      }
    ],
    faq: [
      {
        question: "What is the motto of Producer Company Registration?",
        answer: "To empower farmers and producers by organizing them into a structured entity that enhances income, market access and sustainable practices."
      },
      {
        question: "How long does incorporation take?",
        answer: "Approximately 25–30 working days, depending on document readiness and approvals."
      },
      {
        question: "Who governs Producer Companies?",
        answer: "Section 465 of the Companies Act, 2013 and relevant provisions of Part IXA of the 1956 Act, under ROC oversight."
      },
      {
        question: "Can cooperative societies convert to FPCs?",
        answer: "Yes, primary producer cooperatives can convert under the Companies Act, 2013 provisions."
      },
      {
        question: "What activities are prohibited?",
        answer: "Speculative or unrelated commercial ventures not tied to primary produce are strictly forbidden."
      }
    ]
  },
  "conversion-of-sole-proprietorship": {
    title: "Conversion of Sole Proprietorship into a Private Limited Company – An Overview",
    description: "Many entrepreneurs start as sole proprietors due to minimal compliance, but as they scale, converting into a private limited company provides enhanced credibility, limited liability, access to funding, and perpetual succession.",
    overview: [
      {
        heading: "Why Convert to a Private Limited Company?",
        content: `A private limited company offers a separate legal identity under the Companies Act, 2013, protecting personal assets with limited liability. It enables easier fundraising, share transferability, and better governance—critical for growing businesses.`
      },
      {
        heading: "Conversion Mechanism",
        content: `Conversion involves incorporating a new private limited company, executing a formal takeover agreement to transfer assets and liabilities, mentioning the takeover in the MoA, and appointing the sole proprietor as a director with at least 50% shareholding.`
      },
      {
        heading: "Basic Legal Requirements",
        content: `• Minimum two directors and two shareholders  
  • Unique company name approved by ROC  
  • No minimum share capital required  
  • Registered office with address proof or NOC  
  • MoA must include 'takeover of sole proprietorship' objective  
  • Filing of annual returns and financial statements with ROC  
  • DIN & DSC for all directors`
      }
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
  - Enhanced credibility with customers, partners, and investors`
      }
    ],
    registrationProcedure: [
      {
        heading: "Key Conditions for Conversion",
        content: `• Execute a formal takeover agreement between the proprietorship and new company  
  • MoA must state the takeover as an objective  
  • Transfer all assets and liabilities in full  
  • Sole proprietor to hold ≥50% shares for at least 5 years  
  • No additional benefits beyond agreed share value`
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
  8. Open/update bank account in the company’s name`
      }
    ],
    documentsRequired: [
      {
        heading: "Documents for Directors",
        content: `• PAN, Aadhaar or Passport (identity proof)  
  • Address proof (bank statement, utility bill)  
  • Recent passport-size photo  
  • Director specimen signature  
  • DIR-2 consent form`
      },
      {
        heading: "Business Premises Documents",
        content: `• Property deed or tax receipt (ownership proof)  
  • Rent/lease agreement + NOC (if rented)  
  • Recent utility bills as address proof`
      },
      {
        heading: "Company Formation Documents",
        content: `• Memorandum of Association (MoA) with takeover clause  
  • Articles of Association (AoA)  
  • Registered office address details  
  • Details of directors (DIN, DSC, address, signature)`
      }
    ],
    whyUs: [
      {
        heading: "How Dostartup Assists You",
        description: [
          "Customized service plans for smooth conversion",
          "Dedicated expert handling of all filings",
          "End-to-end support from agreement drafting to COI delivery"
        ],
        points: [
          "Step-by-step legal advisory",
          "Document review & error-free filing",
          "Transparent pricing and real-time tracking"
        ]
      }
    ],
    faq: [
      {
        question: "Can I convert my proprietorship without selling my business?",
        answer: "Yes—conversion is a restructuring, not a sale. Transfer is via slump sale without monetary exchange."
      },
      {
        question: "Do I need to pay stamp duty on asset transfer?",
        answer: "Stamp duty depends on state laws. Asset transfers under slump sale may attract duty—consult your state’s stamp act."
      },
      {
        question: "How long must I hold shares post-conversion?",
        answer: "The sole proprietor must retain at least 50% shareholding for a minimum of five years."
      },
      {
        question: "Are licences transferable to the new company?",
        answer: "Most licences require fresh applications in the company’s name; some may allow modification—verify with issuing authority."
      },
      {
        question: "Can I continue both entities post-conversion?",
        answer: "Technically yes, but to avoid compliance and tax complications, fully transfer operations to the new company."
      }
    ]
  },
  "indian-subsidiary-company-registration": {
    title: "Indian Subsidiary Company Registration in India",
    description: "An Indian Subsidiary Company is a company incorporated in India that is majorly owned or controlled by a foreign parent company, governed by the Companies Act, 2013 and relevant FEMA/SEBI regulations.",
    overview: [
      {
        heading: "What Is an Indian Subsidiary Company?",
        content: `Per Section 2(87) of the Companies Act, 2013, a company is a subsidiary if a foreign parent holds >50% equity or can appoint/remove a majority of its directors.  
  This structure lets global businesses operate in India under a regulated, separate legal entity model.`
      },
      {
        heading: "Types of Subsidiary Structures",
        content: `• Wholly Owned Subsidiary (WOS): 100% foreign ownership (auto-route sectors only).  
  • Partially Owned Subsidiary: 50–99% foreign shareholding with Indian partners.  
  • Joint Venture Subsidiary: Shared control between foreign and Indian entities.  
  • Liaison Office: Representative, non-commercial presence.  
  • Branch Office: Commercial operations subject to RBI approval.`
      },
      {
        heading: "Legal & Regulatory Framework",
        content: `• Companies Act, 2013: Defines subsidiary control, board & reporting obligations.  
  • SEBI LODR, 2015: Disclosure requirements for listed entities and their material subsidiaries.  
  • FEMA: Governs FDI & repatriation.  
  • MCA guidelines: Company incorporation & ROC compliance.`
      }
    ],
    benefits: [
      {
        heading: "Benefits of an Indian Subsidiary",
        content: `- Easy market penetration in one of the fastest-growing consumer markets  
  - Attractive FDI policies via automatic/approval routes  
  - Perpetual succession and separate legal status  
  - Limited liability protection for shareholders  
  - Operational autonomy with property-holding and contracting powers`
      }
    ],
    eligibilityCriteria: [
      {
        heading: "Eligibility Criteria",
        content: `• ≥2 directors (≥1 resident Indian) with DIN & DSC  
  • ≥2 shareholders (individuals or entities)  
  • No minimum capital requirement  
  • Foreign parent must hold ≥50% equity  
  • RBI approval for FDI as required  
  • Compliance with MCA & ROC regulations`
      }
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
  • Shareholding declarations`
      }
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Registration Process",
        content: `1. Reserve company name via SPICe+ Part A.  
  2. Obtain DIN & DSCs for all proposed directors.  
  3. Draft and file MoA, AoA & SPICe+ Part B with shareholding structure.  
  4. Receive Certificate of Incorporation (COI) & CIN.  
  5. Open a bank account in India (within ~7 days).  
  6. Complete GSTIN, PAN, TAN, EPFO & ESIC registrations.`
      }
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Incorporate",
        description: "Typically 2–4 months, including name approval, documentation, and statutory clearances.",
        totalTime: "2–4 months"
      }
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
          "3,500+ advisors across 50+ locations"
        ]
      }
    ],
    faq: [
      {
        question: "Can a foreign parent hold 100% equity?",
        answer: "Yes—only in sectors permitting 100% FDI via the automatic route."
      },
      {
        question: "Is RBI approval always required?",
        answer: "RBI approval is required where FDI is not permitted automatically."
      },
      {
        question: "How many directors are needed?",
        answer: "At least two directors, one of whom must be an Indian resident."
      },
      {
        question: "What is the cost of registration?",
        answer: "Typically between ₹50,000–₹1,00,000, depending on professional & government fees."
      },
      {
        question: "How long does registration take?",
        answer: "Generally 2–4 months, depending on document preparedness and approvals."
      }
    ]
  },
  "llp-to-private-company-conversion": {
    title: "Conversion of LLP to Private Limited Company in India – A Complete Guide",
    description: "Convert your LLP into a Private Limited Company under Section 366 of the Companies Act, 2013. Enjoy enhanced funding options, 100% FDI, ESOPs, and limited liability while retaining your brand identity.",
    overview: [
      {
        heading: "Why Convert an LLP to a Private Limited Company?",
        content: `• Enable business expansion and attract venture capital or foreign investments  
  • Issue equity shares and offer ESOPs to attract skilled talent  
  • Carry forward unabsorbed losses and depreciation  
  • Gain legal credibility and access better funding opportunities  
  • Maintain business continuity with the same brand name  
  • Limit liabilities strictly to unpaid share capital`
      },
      {
        heading: "Legal Basis for Conversion",
        content: `Although the LLP Act, 2008 doesn’t directly allow conversion, Section 366 of the Companies Act, 2013 and the Companies (Authorised to Register) Rules, 2014 provide the framework for LLP-to-Private Company transformation.`
      }
    ],
    eligibilityCriteria: [
      {
        heading: "Conditions for Conversion",
        content: `• Minimum two partners in the LLP, eligible to become directors  
  • Unanimous approval of all partners  
  • All statutory returns filed up to date  
  • Publication of conversion notice in two newspapers (English & regional)  
  • No Objection Certificate (NOC) from the LLP Registrar`
      }
    ],
    benefits: [
      {
        heading: "Advantages of Conversion",
        content: `• 100% FDI permitted in Private Limited Companies  
  • No capital gains tax on conversion  
  • Seamless transfer of losses and depreciation  
  • Authority to offer ESOPs to employees  
  • Enhanced ability to raise equity capital  
  • Retain continuity with the same name + “Pvt. Ltd.” suffix`
      }
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
  • Newspaper advertisement of public notice`
      }
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Conversion Process",
        content: `1. **Name Approval:** Apply on MCA portal for ROC name approval.  
  2. **Obtain DSC & DIN:** Secure Digital Signature Certificates & Director IDs.  
  3. **File Form URC-1:** Submit URC-1 with all documents to ROC.  
  4. **Draft MOA & AOA:** Prepare and file Memorandum & Articles once URC-1 is approved.  
  5. **Certificate of Incorporation:** ROC issues COI, completing the conversion.`
      }
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup?",
        description: [
          "10+ years of experience in corporate conversions",
          "3500+ expert advisors across 50+ offices",
          "Free consultation and lowest fee plans",
          "End-to-end compliance support"
        ]
      }
    ]
  },
  "convert-partnership-to-privateLtd": {
    title: "Conversion of Partnership Firm into a Private Limited Company – A Quick Guide",
    description: "As businesses grow, converting a Partnership Firm into a Private Limited Company under the Companies Act, 2013 offers limited liability protection, enhanced credibility, perpetual succession, and easier access to capital.",
    overview: [
      {
        heading: "Overview of Conversion",
        content: `Entrepreneurs often start with a Partnership Firm for lower costs and minimal compliance.  
  Converting to a Private Limited Company transforms it into a separate legal entity—protecting personal assets (except in fraud), enabling share-based ownership, and unlocking funding opportunities.`
      }
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
  • Drafted MOA & AOA in line with company objectives`
      }
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
  • Internal Control safeguarded against hostile takeovers`
      }
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
  9. Share capital declaration (nominal capital, shares taken, amount paid, proposed company name)`
      },
      {
        heading: "Documents for SPICe+ (Incorporation)",
        content: `1. DIR-2 declarations (director consent)  
  2. KYC (ID & address proof) of directors & shareholders  
  3. NOC from property owner (if premises rented)  
  4. Proof of business address (rent agreement/lease deed)  
  5. Latest utility bill (≤2 months old) as address proof`
      }
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
  9. Receive Certificate of Incorporation (COI) and CIN`
      }
    ],
    whyUs: [
      {
        heading: "How Dostartup Assists Your Conversion",
        description: [
          "Customized service plans to fit your budget and needs",
          "End-to-end document review and compliance guidance",
          "Dedicated legal advisory & step-by-step support"
        ],
        points: [
          "Experts in MCA filings and conversion formalities",
          "Real-time application tracking and updates",
          "High success rate with seamless execution"
        ]
      }
    ],
    faq: [
      {
        question: "Can an unregistered partnership convert?",
        answer: "No—only a partnership firm registered with the Registrar of Firms can convert under Section URC-1."
      },
      {
        question: "Is NOC from creditors mandatory?",
        answer: "Yes—written NOCs from all secured creditors are required before filing URC-1."
      },
      {
        question: "How many partners are needed post-conversion?",
        answer: "At least two directors and two shareholders must be in place for the new Private Limited Company."
      },
      {
        question: "What is the timeline for conversion?",
        answer: "Typically 30–45 days, subject to name approval, documentation, and form processing."
      },
      {
        question: "Does share capital need alteration?",
        answer: "Yes—the new company must declare its nominal share capital and shares taken in URC-1."
      }
    ]
  },
  
  
  
  

  
  
  
  
};
