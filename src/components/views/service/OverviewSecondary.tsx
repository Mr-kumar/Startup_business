"use client";
import { useEffect, useState } from "react";
import Documentation from "./Documentation";
import FAQ from "./Faq";
import FeeStructure from "./FeeStructure";
import Registration from "./ProcedureDetails";
import Timeline from "./Timeline";
import Why from "./Why";
import Who from "./Who";
import Listicles from "./Listicles";
import Categories from "./Categories";
import Challenges from "./Challenges";
import ClassifiedIndustries from "./ClassifiedIndustries";
import Guidelines from "./Guidelines";
import Regulations from "./Regulation";
import ProductRequire from "./ProductRequire";
import Structure from "./Structure";
import RoleOfHydrogeologist from "./RoleOfHydrogeologist";
import Need from "./Need";
import Process from "./Process";
import Authority from "./Authority";
import EPR from "./EPR";
import Validity from "./Validity";
import Business from "./Business";
import Services from "./Services";
import Productlist from './Productlist';
import Clauses from "./Clauses";

interface OverviewProps {
  overview?: { heading: string; content: string }[];
  benefits?: { heading: string; content: string }[];
  documentsRequired?: { heading: string; content: string }[];
  registrationProcedure?: { heading: string; content: string }[];
  feesStructure?: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: { category: string; amount: string }[];
  }[];
  registrationTimeline?: {
    heading: string;
    description?: string;
    steps?: { title: string; duration: string; description: string }[];
    totalTime?: string;
  }[];
  clauses?: { title: string; description: string }[];
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  who?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  faq?: { question: string; answer: string }[];
  Categories?: { category: string; documents: string[] }[];
  ChallengesData?: { category: string; documents: string[] }[];
  CategoriesData?: { category: string; documents: string[] }[];
  listicles?: { category: string; documents: string[] }[];
  classifiedIndustriesData?: { category: string; documents: string[] }[];
  GuidelinesData?: { category: string; documents: string[] }[];
  RegulationsData?: { category: string; documents: string[] }[];
  ProductRequireData?: { category: string; documents: string[] }[];
  StructureData?: { category: string; documents: string[] }[];
  NeedData?: { category: string; documents: string[] }[];
  ProcessData?: { category: string; documents: string[] }[];
  AuthorityData?: { category: string; documents: string[] }[];
  EPRData?: { category: string; documents: string[] }[];
  ValidityData?: { category: string; documents: string[] }[];
  BusinessData?: { category: string; documents: string[] }[];
  RoleOfHydrogeologistData?: { category: string; documents: string[] }[];
  services?: { category: string; documents: string[] }[];
  productListData?: { category: string; documents: string[] }[];
  renewalData?: {
    renewal: { heading: string; content: string[] }[];
    duplicate: { heading: string; content: string[] }[];
  };
}

interface SectionItem {
  id: string;
  label: string;
}

const Overview: React.FC<OverviewProps> = ({
  overview,
  benefits,
  documentsRequired,
  registrationProcedure,
  feesStructure,
  registrationTimeline,
  whyUs,
  who,
  faq,
  listicles,
  CategoriesData,
  ChallengesData,
  classifiedIndustriesData,
  GuidelinesData,
  RegulationsData,
  ProductRequireData,
  StructureData,
  RoleOfHydrogeologistData,
  NeedData,
  ProcessData,
  AuthorityData,
  EPRData,
  ValidityData,
  BusinessData,
  services,
  productListData,
  renewalData,
  clauses,
}) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Dynamically generate the sections array based on available props
  const sections: SectionItem[] = [
    overview && overview.length > 0 && { id: "overview", label: "Overview" },
    benefits &&
    benefits.length > 0 && { id: "benefits", label: "Key Benefits" },
    documentsRequired &&
    documentsRequired.length > 0 && {
      id: "documents",
      label: "Required Documents",
    },
    registrationProcedure &&
    registrationProcedure.length > 0 && {
      id: "registration",
      label: "Registration Steps",
    },
    feesStructure &&
    feesStructure.length > 0 && { id: "fees", label: "Pricing Plans" },
    registrationTimeline &&
    registrationTimeline.length > 0 && {
      id: "timeline",
      label: "Process Timeline",
    },
    listicles && listicles.length > 0 && { id: "listicles", label: "Listicles" },
    CategoriesData && CategoriesData.length > 0 && { id: "Categories", label: "Categories" },
    ChallengesData && ChallengesData.length > 0 && { id: "Challenges", label: "Challenges" },
    classifiedIndustriesData && classifiedIndustriesData.length > 0 && { id: "ClassifiedIndustries", label: "ClassifiedIndustries" },
    GuidelinesData && GuidelinesData.length > 0 && { id: "Guidelines", label: "Guidelines" },
    RegulationsData && RegulationsData.length > 0 && { id: "Regulations", label: "Regulations" },
    ProductRequireData && ProductRequireData.length > 0 && { id: "ProductRequire", label: "Project that Require" },
    StructureData && StructureData.length > 0 && { id: "Structure", label: "Structure" },
    RoleOfHydrogeologistData && RoleOfHydrogeologistData.length > 0 && { id: "RoleOfHydrogeologist", label: "Role Of Hydrogeologist" },
    NeedData && NeedData.length > 0 && { id: "Need", label: "Need" },
    ProcessData && ProcessData.length > 0 && { id: "Process", label: "Process" },
    AuthorityData && AuthorityData.length > 0 && { id: "Authority", label: "Authority" },
    EPRData && EPRData.length > 0 && { id: "EPR", label: "EPR" },
    ValidityData && ValidityData.length > 0 && { id: "Validity", label: "Validity" },
    BusinessData && BusinessData.length > 0 && { id: "Business", label: "Business" },
    services &&
    services.length > 0 && { id: "services", label: "services" },
    productListData && productListData.length > 0 && { id: "Productlist", label: "Product List" },
    renewalData &&
    (renewalData.renewal.length > 0 || renewalData.duplicate.length > 0) && {
      id: "renewal",
      label: "Renewal & Duplicate",
    },
    whyUs && whyUs.length > 0 && { id: "whyus", label: "Why Choose Us" },
    who && who.length > 0 && { id: "who", label: "Who" },
    clauses && clauses.length > 0 && { id: "clauses", label: "Key Clauses" },
    faq && faq.length > 0 && { id: "faq", label: "FAQs" },
  ].filter(Boolean) as SectionItem[]; // Remove undefined entries and type as SectionItem[]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }: SectionItem) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:px-12 lg:py-8 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="lg:w-1/5 sticky top-[120px] h-fit bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-[#1D293D] mb-6">Navigation</h3>
        <ul className="space-y-2">
          {sections.map(({ id, label }: SectionItem) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer px-4 py-3 rounded-lg ${activeSection === id
                ? "bg-[#1D293D]/10 text-[#1D293D] font-semibold border-l-4 border-[#7DD756]"
                : "text-gray-600 hover:bg-[#1D293D]/5 hover:text-[#1D293D]"
                }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-4/5 space-y-12">
        {overview && (
          <section id="overview" className="scroll-mt-[120px]">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                {overview.map((item, index) => (
                  <div
                    key={index}
                    className=""
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                      {item.heading}
                    </h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {benefits && benefits.length > 0 && (
          <section id="benefits" className="scroll-mt-[120px]">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {benefits.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {item.heading}
                    </h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {documentsRequired && (
          <section id="documents" className="scroll-mt-[120px]">
            <Documentation documents={documentsRequired} />
          </section>
        )}
        {registrationProcedure && (
          <section id="registration" className="scroll-mt-[120px]">
            <Registration procedure={registrationProcedure} />
          </section>
        )}
        {feesStructure && (
          <section id="fees" className="scroll-mt-[120px]">
            <FeeStructure fees={feesStructure} />
          </section>
        )}
        {registrationTimeline && (
          <section id="timeline" className="scroll-mt-[120px]">
            <Timeline timeline={registrationTimeline} />
          </section>
        )}
        {listicles && (
          <section id="listicles" className="scroll-mt-[120px]">
            <Listicles listicles={listicles} />
          </section>
        )}
        {Categories && (
          <section id="Categories" className="scroll-mt-[120px]">
            <Categories Categories={CategoriesData} />
          </section>
        )}
        {Challenges && (
          <section id="Challenges" className="scroll-mt-[120px]">
            <Challenges Challenges={ChallengesData} />
          </section>
        )}
        {classifiedIndustriesData && (
          <section id="ClassifiedIndustries" className="scroll-mt-[120px]">
            <ClassifiedIndustries ClassifiedIndustries={classifiedIndustriesData} />
          </section>
        )}
        {GuidelinesData && (
          <section id="Guidelines" className="scroll-mt-[120px]">
            <Guidelines Guidelines={GuidelinesData} />
          </section>
        )}
        {RegulationsData && (
          <section id="Regulations" className="scroll-mt-[120px]">
            <Regulations Regulations={RegulationsData} />
          </section>
        )}
        {ProductRequireData && (
          <section id="ProductRequire" className="scroll-mt-[120px]">
            <ProductRequire ProductRequire={ProductRequireData} />
          </section>
        )}
        {StructureData && (
          <section id="Structure" className="scroll-mt-[120px]">
            <Structure Structure={StructureData} />
          </section>
        )}
        {RoleOfHydrogeologistData && (
          <section id="RoleOfHydrogeologist" className="scroll-mt-[120px]">
            <RoleOfHydrogeologist RoleOfHydrogeologist={RoleOfHydrogeologistData} />
          </section>
        )}
        {NeedData && (
          <section id="Need" className="scroll-mt-[120px]">
            <Need Need={NeedData} />
          </section>
        )}
        {ProcessData && (
          <section id="Process" className="scroll-mt-[120px]">
            <Process Process={ProcessData} />
          </section>
        )}
        {AuthorityData && (
          <section id="Authority" className="scroll-mt-[120px]">
            <Authority Authority={AuthorityData} />
          </section>
        )}
        {EPRData && (
          <section id="EPR" className="scroll-mt-[120px]">
            <EPR EPR={EPRData} />
          </section>
        )}
        {ValidityData && (
          <section id="Validity" className="scroll-mt-[120px]">
            <Validity Validity={ValidityData} />
          </section>
        )}
        {BusinessData && (
          <section id="Business" className="scroll-mt-[120px]">
            <Business Business={BusinessData} />
          </section>
        )}
        {services && (
          <section id="services" className="scroll-mt-[120px]">
            <Services Services={services} />
          </section>
        )}
        {productListData && productListData.length > 0 && (
          <section id="Productlist" className="scroll-mt-[120px]">
            <Productlist productListData={productListData} />
          </section>
        )}
        {clauses && clauses.length > 0 && (
          <section id="clauses" className="scroll-mt-[120px]">
            <Clauses clauses={clauses} />
          </section>
        )}
        {whyUs && (
          <section id="whyus" className="scroll-mt-[120px]">
            <Why whyUs={whyUs} />
          </section>
        )}
        {who && (
          <section id="who" className="scroll-mt-[120px]">
            <Who who={who} />
          </section>
        )}
        {faq && (
          <section id="faq" className="scroll-mt-[120px]">
            <FAQ faqs={faq} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Overview;
