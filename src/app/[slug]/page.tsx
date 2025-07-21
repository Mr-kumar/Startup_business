import React from "react";
import dynamic from "next/dynamic";
import { pageContent, PageContentType } from "@/utils/pageContentDataPrimary";

const Hero = dynamic(() => import("@/components/Page2/hero"));
const LogoSlider = dynamic(() => import("@/components/Page2/LogoSlider"));
const TalkToExpert = dynamic(() => import("@/components/Page2/TalkToExpert"));
const Overview = dynamic(() => import("@/components/Page2/Overview"));

interface PageProps {
  params: { slug: string };
}

export default async function Page2({ params }: PageProps) {
  const { slug } = params;
  const currentPage = pageContent[slug] as PageContentType | undefined;

  if (!currentPage) {
    return <p>Page not found</p>;
  }

  return (
    <div>
      <Hero title={currentPage.title} description={currentPage.description} />
      <LogoSlider />
      <TalkToExpert />
      <Overview
        overview={currentPage.overview}
        benefits={currentPage.benefits}
        documentsRequired={currentPage.documentsRequired}
        registrationProcedure={currentPage.registrationProcedure}
        feesStructure={currentPage.feesStructure}
        registrationTimeline={currentPage.registrationTimeline}
        whyUs={currentPage.whyUs}
        who={currentPage.who}
        faq={currentPage.faq}
        clauses={currentPage.clauses}
        listicles={currentPage.Listicles as { category: string; documents: string[] }[]}
        CategoriesData={currentPage.Categories as { category: string; documents: string[] }[]}
        ChallengesData={currentPage.Challenges as { category: string; documents: string[] }[]}
        classifiedIndustriesData={currentPage.ClassifiedIndustries as { category: string; documents: string[] }[]}
        GuidelinesData={currentPage.Guidelines as { category: string; documents: string[] }[]}
        RegulationsData={currentPage.Regulations as { category: string; documents: string[] }[]}
        ProductRequireData={currentPage.ProductRequire as { category: string; documents: string[] }[]}
        StructureData={currentPage.Structure as { category: string; documents: string[] }[]}
        RoleOfHydrogeologistData={currentPage.RoleOfHydrogeologist as { category: string; documents: string[] }[]}
        NeedData={currentPage.Need as { category: string; documents: string[] }[]}
        ProcessData={currentPage.Process as { category: string; documents: string[] }[]}
        AuthorityData={currentPage.Authority as { category: string; documents: string[] }[]}
        EPRData={currentPage.EPR as { category: string; documents: string[] }[]}
        ValidityData={currentPage.Validity as { category: string; documents: string[] }[]}
        BusinessData={currentPage.Business as { category: string; documents: string[] }[]}
        services={currentPage.services as { category: string; documents: string[] }[]}
        productListData={currentPage.Productlist as { category: string; documents: string[] }[]}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}