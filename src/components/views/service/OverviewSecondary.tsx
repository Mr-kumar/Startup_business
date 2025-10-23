"use client";

import { ServiceData } from "@/lib/services";
import { useEffect, useState } from "react";
import Documentation from "./Documentation";
import FAQ from "./Faq";
import FeeStructure from "./FeeStructure";
import Registration from "./ProcedureDetails";
import Timeline from "./Timeline";
import Why from "./Why";
import Who from "./Who";
import Clauses from "./Clauses";
import SectionList from "./SectionList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface OverviewProps {
  service: ServiceData;
}

interface SectionItem {
  id: string;
  label: string;
}

const Overview: React.FC<OverviewProps> = ({ service }) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Safety check: ensure overview is an array
  const safeOverview = Array.isArray(service.overview) ? service.overview : [];

  // Dynamically generate the sections array based on available service data
  const sections: SectionItem[] = [
    safeOverview.length > 0 && { id: "overview", label: "Overview" },
    service.benefits && service.benefits.length > 0 && { id: "benefits", label: "Key Benefits" },
    service.documentsRequired && service.documentsRequired.length > 0 && {
      id: "documents",
      label: "Required Documents",
    },
    service.registrationProcedure && service.registrationProcedure.length > 0 && {
      id: "registration",
      label: "Registration Steps",
    },
    service.feesStructure && service.feesStructure.length > 0 && { id: "fees", label: "Pricing Plans" },
    service.registrationTimeline && service.registrationTimeline.length > 0 && {
      id: "timeline",
      label: "Process Timeline",
    },
    service.Listicles && service.Listicles.length > 0 && { id: "listicles", label: "Listicles" },
    service.Categories && service.Categories.length > 0 && { id: "Categories", label: "Categories" },
    service.Challenges && service.Challenges.length > 0 && { id: "Challenges", label: "Challenges" },
    service.ClassifiedIndustries && service.ClassifiedIndustries.length > 0 && { id: "ClassifiedIndustries", label: "ClassifiedIndustries" },
    service.Guidelines && service.Guidelines.length > 0 && { id: "Guidelines", label: "Guidelines" },
    service.Regulations && service.Regulations.length > 0 && { id: "Regulations", label: "Regulations" },
    service.ProductRequire && service.ProductRequire.length > 0 && { id: "ProductRequire", label: "Project that Require" },
    service.Structure && service.Structure.length > 0 && { id: "Structure", label: "Structure" },
    service.RoleOfHydrogeologist && service.RoleOfHydrogeologist.length > 0 && { id: "RoleOfHydrogeologist", label: "Role Of Hydrogeologist" },
    service.Need && service.Need.length > 0 && { id: "Need", label: "Need" },
    service.Process && service.Process.length > 0 && { id: "Process", label: "Process" },
    service.Authority && service.Authority.length > 0 && { id: "Authority", label: "Authority" },
    service.EPR && service.EPR.length > 0 && { id: "EPR", label: "EPR" },
    service.Validity && service.Validity.length > 0 && { id: "Validity", label: "Validity" },
    service.Business && service.Business.length > 0 && { id: "Business", label: "Business" },
    service.services && service.services.length > 0 && { id: "services", label: "services" },
    service.Productlist && service.Productlist.length > 0 && { id: "Productlist", label: "Product List" },
    service.renewalData && (service.renewalData.renewal.length > 0 || service.renewalData.duplicate.length > 0) && {
      id: "renewal",
      label: "Renewal & Duplicate",
    },
    service.whyUs && service.whyUs.length > 0 && { id: "whyus", label: "Why Choose Us" },
    service.who && service.who.length > 0 && { id: "who", label: "Who" },
    service.clauses && service.clauses.length > 0 && { id: "clauses", label: "Key Clauses" },
    service.faqs && service.faqs.length > 0 && { id: "faq", label: "FAQs" },
  ].filter(Boolean) as SectionItem[];

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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50/20">
      <div className="flex flex-col lg:flex-row gap-8 p-6 lg:px-12 lg:py-16 max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 sticky top-24 h-fit">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  Quick Navigation
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-250px)] pr-4">
                <nav aria-label="Service sections navigation">
                  <ul className="space-y-1">
                    {sections.map(({ id, label }: SectionItem) => (
                      <li key={id}>
                        <button
                          onClick={() => scrollToSection(id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                            activeSection === id
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg scale-105"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:translate-x-1"
                          }`}
                          aria-current={activeSection === id ? "true" : undefined}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4 space-y-12">
        {safeOverview.length > 0 && (
          <section id="overview" className="scroll-mt-[120px]">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">Overview</Badge>
                  <CardTitle className="text-2xl">Service Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {safeOverview.map((item: { heading: string; content: string }, index: number) => (
                  <div key={index} className="space-y-2">
                    {item.heading && (
                      <h3 className="text-xl font-bold text-foreground">
                        {item.heading}
                      </h3>
                    )}
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                    {index < safeOverview.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        )}
        {service.benefits && Array.isArray(service.benefits) && service.benefits.length > 0 && (
          <section id="benefits" className="scroll-mt-[120px]">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-gradient-to-r from-green-600 to-teal-600">Benefits</Badge>
                  <CardTitle className="text-2xl">Key Benefits</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {service.benefits.map((item: { heading: string; content: string }, index: number) => (
                  <div key={index} className="space-y-2">
                    {item.heading && (
                      <h3 className="text-xl font-bold text-foreground">
                        {item.heading}
                      </h3>
                    )}
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                    {index < (service.benefits?.length ?? 0) - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        )}
        {service.documentsRequired && (
          <section id="documents" className="scroll-mt-[120px]">
            <Documentation documents={service.documentsRequired} />
          </section>
        )}
        {service.registrationProcedure && (
          <section id="registration" className="scroll-mt-[120px]">
            <Registration procedure={service.registrationProcedure} />
          </section>
        )}
        {service.feesStructure && (
          <section id="fees" className="scroll-mt-[120px]">
            <FeeStructure fees={service.feesStructure} />
          </section>
        )}
        {service.registrationTimeline && (
          <section id="timeline" className="scroll-mt-[120px]">
            <Timeline timeline={service.registrationTimeline} />
          </section>
        )}
        {service.Listicles && (
          <section id="listicles" className="scroll-mt-[120px]">
            <SectionList data={service.Listicles} title="Listicles" />
          </section>
        )}
        {service.Categories && (
          <section id="Categories" className="scroll-mt-[120px]">
            <SectionList data={service.Categories} title="Categories" />
          </section>
        )}
        {service.Challenges && (
          <section id="Challenges" className="scroll-mt-[120px]">
            <SectionList data={service.Challenges} title="Challenges" />
          </section>
        )}
        {service.ClassifiedIndustries && (
          <section id="ClassifiedIndustries" className="scroll-mt-[120px]">
            <SectionList data={service.ClassifiedIndustries} title="Classified Industries" />
          </section>
        )}
        {service.Guidelines && (
          <section id="Guidelines" className="scroll-mt-[120px]">
            <SectionList data={service.Guidelines} title="Guidelines" />
          </section>
        )}
        {service.Regulations && (
          <section id="Regulations" className="scroll-mt-[120px]">
            <SectionList data={service.Regulations} title="Regulations" />
          </section>
        )}
        {service.ProductRequire && (
          <section id="ProductRequire" className="scroll-mt-[120px]">
            <SectionList data={service.ProductRequire} title="Products that Require" />
          </section>
        )}
        {service.Structure && (
          <section id="Structure" className="scroll-mt-[120px]">
            <SectionList data={service.Structure} title="Structure" />
          </section>
        )}
        {service.RoleOfHydrogeologist && (
          <section id="RoleOfHydrogeologist" className="scroll-mt-[120px]">
            <SectionList data={service.RoleOfHydrogeologist} title="Role of Hydrogeologist" />
          </section>
        )}
        {service.Need && (
          <section id="Need" className="scroll-mt-[120px]">
            <SectionList data={service.Need} title="Need" />
          </section>
        )}
        {service.Process && (
          <section id="Process" className="scroll-mt-[120px]">
            <SectionList data={service.Process} title="Process" />
          </section>
        )}
        {service.Authority && (
          <section id="Authority" className="scroll-mt-[120px]">
            <SectionList data={service.Authority} title="Authority" />
          </section>
        )}
        {service.EPR && (
          <section id="EPR" className="scroll-mt-[120px]">
            <SectionList data={service.EPR} title="EPR" />
          </section>
        )}
        {service.Validity && (
          <section id="Validity" className="scroll-mt-[120px]">
            <SectionList data={service.Validity} title="Validity" />
          </section>
        )}
        {service.Business && (
          <section id="Business" className="scroll-mt-[120px]">
            <SectionList data={service.Business} title="Business" />
          </section>
        )}
        {service.services && (
          <section id="services" className="scroll-mt-[120px]">
            <SectionList data={service.services} title="Services" />
          </section>
        )}
        {service.Productlist && service.Productlist.length > 0 && (
          <section id="Productlist" className="scroll-mt-[120px]">
            <SectionList data={service.Productlist} title="Product List" />
          </section>
        )}
        {service.clauses && service.clauses.length > 0 && (
          <section id="clauses" className="scroll-mt-[120px]">
            <Clauses clauses={service.clauses} />
          </section>
        )}
        {service.whyUs && (
          <section id="whyus" className="scroll-mt-[120px]">
            <Why whyUs={service.whyUs} />
          </section>
        )}
        {service.who && (
          <section id="who" className="scroll-mt-[120px]">
            <Who who={service.who} />
          </section>
        )}
        {service.faqs && (
          <section id="faq" className="scroll-mt-[120px]">
            <FAQ faqs={service.faqs} />
          </section>
        )}
      </main>
      </div>
    </div>
  );
};

export default Overview;
