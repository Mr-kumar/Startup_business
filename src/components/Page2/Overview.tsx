"use client";
import { useEffect, useState } from "react";
import Documentation from "./Documentation";
import FAQ from "./FAQ";
import FeeStructure from "./FeeStructure";
import Registration from "./Registration";
import Timeline from "./Timeline";
import Why from "./Why";
import Listicles from "./Listicles";
import Renewal from "./Renewal";

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
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  faq?: { question: string; answer: string }[];
  listicles?: { category: string; documents: string[] }[];
  renewalData?: {
    renewal: { heading: string; content: string[] }[];
    duplicate: { heading: string; content: string[] }[];
  };
}

const Overview: React.FC<OverviewProps> = ({
  overview,
  benefits,
  documentsRequired,
  registrationProcedure,
  feesStructure,
  registrationTimeline,
  whyUs,
  faq,
  listicles,
  renewalData,
}) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Dynamically generate the sections array based on available props
  const sections = [
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
      listicles &&
    listicles.length > 0 && { id: "listicles", label: "Listicles" },
    renewalData &&
    (renewalData.renewal.length > 0 || renewalData.duplicate.length > 0) && {
      id: "renewal",
      label: "Renewal & Duplicate",
    },
    whyUs && whyUs.length > 0 && { id: "whyus", label: "Why Choose Us" },
    faq && faq.length > 0 && { id: "faq", label: "FAQs" },
  ].filter(Boolean); // Remove undefined entries

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }: any) => {
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
          {sections.map(({ id, label }: any) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer px-4 py-3 rounded-lg ${
                activeSection === id
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
          <section id="overview">
            {overview.map((item, index) => (
              <div key={index}>
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
              </div>
            ))}
          </section>
        )}
        {benefits && benefits.length > 0 && (
          <section id="benefits">
            <h2>{benefits[0].heading}</h2>
            <p>{benefits[0].content}</p>
          </section>
        )}
        {documentsRequired && (
          <section id="documents">
            <Documentation documents={documentsRequired} />
          </section>
        )}
        {registrationProcedure && (
          <section id="registration">
            <Registration procedure={registrationProcedure} />
          </section>
        )}
        {feesStructure && (
          <section id="fees">
            <FeeStructure fees={feesStructure} />
          </section>
        )}
        {registrationTimeline && (
          <section id="timeline">
            <Timeline timeline={registrationTimeline} />
          </section>
        )}
        {listicles && (
          <section id="listicles">
            <Listicles listicles={listicles} />
          </section>
        )}
        {renewalData && (
          <section id="renewal">
            <Renewal renewalData={renewalData} />
          </section>
        )}
        {whyUs && (
          <section id="whyus">
            <Why whyUs={whyUs} />
          </section>
        )}
        {faq && (
          <section id="faq">
            <FAQ faqs={faq} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Overview;
