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
  description: "Under the Companies Act, 2013, a company’s name is its official legal identity. This guide covers initial name selection, MCA approval, and the process for renaming an existing company, ensuring alignment with legal standards and long‑term branding objectives.",
  overview: [
    {
      heading: "Importance of a Company Name",
      content: `A company’s name serves as its legal identity. Under the Companies Act, 2013, naming follows strict regulations for selection, MCA approval, and any future renaming. The chosen name must comply with statutory norms while supporting branding and business goals.`
    }
  ],
  Listicles: [
    {
      category: "Mandatory Naming Norms",
      documents: [
        `Entity suffix requirements:
• Private Companies: “Private Limited” or “Pvt Ltd”
• One Person Companies (OPC): “OPC Private Limited”
• Public Companies: “Limited”`
      ]
    },
    {
      category: "Prohibited Name Elements",
      documents: [
        "Names identical or deceptively similar to existing companies or registered trademarks (including plural/singular variations)",
        "Generic or ambiguous terms (e.g., “Textile Company Pvt Ltd”)",
        "Personal names as prefixes (e.g., “Ankita Pvt Ltd”)",
        "Misleading legal structure terms (e.g., LLP, Trust, HUF)",
        "Words restricted under the Emblems and Names (Prevention of Improper Use) Act, 1950"
      ]
    },
    {
      category: "Sector‑Specific Naming Requirements",
      documents: [
        "For financial sector entities, the name must reflect primary business activities (e.g., “Leasing Finance Pvt Ltd”)",
        "Chosen name must align with the Main Object Clause in the MOA"
      ]
    },
    {
      category: "Restrictions on Name Change",
      documents: [
        "Cannot alter name if required annual returns are not filed",
        "Cannot alter name if in default for repayment of deposits or payment of debentures or related interest"
      ]
    }
  ],
  registrationProcedure: [
    {
      heading: "Step 1: Board Meeting & Resolution",
      content: `Issue a 7‑day notice to conduct a Board Meeting. Pass a resolution to:
• Authorize a name availability check
• Approve an Extraordinary General Meeting (EGM) for name change`
    },
    {
      heading: "Step 2: Name Availability Check",
      content: `Conduct a name search through:
• MCA Name Search Tool
• Trademark Public Search Database`
    },
    {
      heading: "Step 3: RUN Form Filing",
      content: `Submit the Reserve Unique Name (RUN) application via the MCA portal.
• Fee: ₹1,000 (for up to 2 name options)
• Attach Board Resolution if applicable (in case of name change)
• Approval validity: 20 calendar days`
    },
    {
      heading: "Step 4: Shareholder Approval",
      content: `Conduct an EGM within the 20‑day approval validity period. Pass a Special Resolution to:
• Approve the proposed name
• Amend the MOA and AOA`
    },
    {
      heading: "Step 5: MCA Filings",
      content: `• File Form MGT‑14 to register the special resolution within 30 days of the EGM (attach EGM notice, revised MOA and AOA).  
• File Form INC‑24 for Central Government approval after MGT‑14 (attach EGM minutes and Board Resolution).`
    },
    {
      heading: "Step 6: Issuance of New COI",
      content: `Upon approval, the Registrar of Companies (ROC) issues a revised Certificate of Incorporation (COI). The new name becomes effective immediately upon issuance.`
    }
  ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Name Change Registration?",
        description: [
          "End‑to‑end legal assistance from name availability check to filing MGT‑14 and INC‑24",
          "Expert name vetting to ensure compliance with MCA and Trademark guidelines",
          "Document preparation (board resolutions, EGM notices, MOA/AOA amendments) and timely filing"
        ],
        points: [
          "Dedicated compliance tracker and client support portal for on‑time filings",
          "Hassle‑free communication with the ROC for approvals, clarifications, and follow‑ups"
        ]
      }
    ],
  faq: [
    {
      question: "Does changing a company’s name affect its legal standing?",
      answer: "No. The company retains all existing rights and liabilities regardless of a name change."
    },
    {
      question: "What are typical reasons for renaming a company?",
      answer: "Common reasons include rebranding, diversification of business activities, and meeting regulatory obligations."
    },
    {
      question: "What is the average timeline for completing a name change?",
      answer: "Typically 15–20 working days, though actual timelines may vary by ROC jurisdiction."
    },
    {
      question: "How long is an approved name reserved by the ROC?",
      answer: "An approved name is reserved for 20 calendar days from the date of approval."
    }
  ]
  },
  "director-removal-process": {
    title: "Director Removal Process: Legal Framework & Compliance Guide",
    description: "Learn the legally compliant procedure to remove a company director under the Companies Act, 2013. Understand rights, resolutions, filings, and timelines to ensure governance restructuring is transparent and effective.",
    overview: [
      {
        heading: "Overview",
        content: "Director removal is a crucial mechanism for ensuring responsible corporate governance. Under the Companies Act, 2013, directors may be removed due to non-performance, legal violations, or criminal convictions. This process ensures the company operates in a compliant, efficient, and transparent manner.\nLegal Basis: The relevant statutory provisions include Sections 169 (Removal of Director), 167 (Vacation of Office), and 168 (Resignation) of the Companies Act, 2013."
      }
    ],
    benefits: [
      {
        heading: "Improved Governance",
        content: "Enhances board accountability and operational integrity."
      },
      {
        heading: "Regulatory Compliance",
        content: "Helps companies avoid penalties up to ₹5 lakh for non-compliance."
      },
      {
        heading: "Conflict Resolution",
        content: "Addresses and settles boardroom disputes efficiently."
      },
      {
        heading: "Strategic Alignment",
        content: "Allows restructuring of the board to align with evolving business goals."
      }
    ],
    Listicles: [
      {
        category: "Eligibility to Initiate Removal",
        documents: [
          "Shareholders holding at least 1% voting power or ₹5 lakh in paid-up capital.",
          "Exceptions: Directors appointed by the Tribunal or the Central Government are protected."
        ]
      },
      {
        category: "Types of Directors and Their Removal Methods",
        documents: [
          "Independent Director: Special resolution (75% approval)",
          "Nominee Director: Automatic removal on transaction fulfillment",
          "Managing Director: Ordinary resolution + MGT-14 filing"
        ]
      },
      {
        category: "Key Legal Provisions",
        documents: [
          "Section 169(3): Right of the director to present their case.",
          "Section 169(8): Director's right to contractual dues.",
          "Rule 79 (NCLT): Allows appeals via Form NCLT-1."
        ]
      },
      {
        category: "Penalties for Delay in ROC Filings",
        documents: [
          "≤15 days: 1x standard fee",
          "16–30 days: 2x",
          "31–180 days: 4x",
          ">180 days: 10x + compounding",
          "Example: A standard fee of ₹1,000 becomes ₹10,000 after 180 days."
        ]
      },
      {
        category: "Post-Removal Compliance",
        documents: [
          "Update company records on the MCA portal within 30 days.",
          "Notify banks, statutory bodies, and stakeholders.",
          "Cancel or revoke the director's Digital Signature Certificate (DSC)."
        ]
      }
    ],
    registrationProcedure: [
      {
        heading: "Step 1: Initiation",
        content: "• A special notice is issued by shareholders at least 28 days before the meeting.\n• The board must pass a resolution for calling an EGM within 7 days."
      },
      {
        heading: "Step 2: Approval by Shareholders",
        content: "• Conduct an Extraordinary General Meeting (EGM) with 21 days' notice.\n• Pass an ordinary resolution by a simple majority."
      },
      {
        heading: "Step 3: Regulatory Filings",
        content: "• DIR-11: Director's resignation (if applicable) – Within 30 days\n• DIR-12: Inform ROC about removal within 30 days\n• MGT-14: File resolution within 30 days\n\nAttachments Required:\n• Copy of board resolution\n• Resignation letter (if applicable)\n• Minutes of EGM"
      }
    ],
    faq: [
      {
        question: "Can a director be removed without their consent?",
        answer: "Yes, through a shareholder resolution under Section 169."
      },
      {
        question: "How long does the removal process take?",
        answer: "Typically, 45–60 days, including notice periods and filings."
      },
      {
        question: "What happens to a director's shares after removal?",
        answer: "They retain the shares unless the Articles of Association (AoA) provide for forfeiture."
      },
      {
        question: "What if the company ignores ROC notices?",
        answer: "The company may face strike-off proceedings under Section 248(1)."
      },
      {
        question: "Can directors remove other directors?",
        answer: "No, only shareholders have the authority to remove a director."
      }
    ],
    whyUs: [
      {
        heading: "Why Choose DoStartup for Director Removal Services?",
        description: [
          "We simplify the complex legal procedure of director removal with a transparent, compliant, and efficient approach tailored to your business needs.",
          "Our experienced legal professionals ensure the process complies with the Companies Act, 2013—minimizing risks and avoiding costly penalties."
        ],
        points: [
          "End-to-end assistance from notice drafting to ROC filings (DIR-11, DIR-12, MGT-14)",
          "Ready-to-use templates for resolutions, EGM notices, and resignation letters",
          "Quick turnaround with MCA filings completed within 3–5 working days"
        ]
      }
    ]
  }
  
  


};
