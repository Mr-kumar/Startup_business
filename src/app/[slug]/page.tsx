// import React from "react";
// import dynamic from "next/dynamic";
// import { pageContent, PageContentType } from "@/utils/pageContentDataPrimary";

// const Hero = dynamic(() => import("@/components/Page2/hero"));
// const LogoSlider = dynamic(() => import("@/components/Page2/LogoSlider"));
// const TalkToExpert = dynamic(() => import("@/components/Page2/TalkToExpert"));
// const Overview = dynamic(() => import("@/components/Page2/Overview"));

// interface PageProps {
//   params: { slug: string };
// }

// export default async function Page2({ params }: PageProps): Promise<JSX.Element> {
//   const { slug } = params;
//   const currentPage = pageContent[slug] as PageContentType | undefined;

//   if (!currentPage) {
//     return <p>Page not found</p>;
//   }

//   return (
//     <div>
//       <Hero title={currentPage.title} description={currentPage.description} />
//       <LogoSlider />
//       <TalkToExpert />
//       <Overview
//         overview={currentPage.overview}
//         benefits={currentPage.benefits}
//         documentsRequired={currentPage.documentsRequired}
//         registrationProcedure={currentPage.registrationProcedure}
//         feesStructure={currentPage.feesStructure}
//         registrationTimeline={currentPage.registrationTimeline}
//         whyUs={currentPage.whyUs}
//         who={currentPage.who}
//         faq={currentPage.faq}
//         clauses={currentPage.clauses}
//         listicles={currentPage.Listicles as { category: string; documents: string[] }[]}
//         CategoriesData={currentPage.Categories as { category: string; documents: string[] }[]}
//         ChallengesData={currentPage.Challenges as { category: string; documents: string[] }[]}
//         classifiedIndustriesData={currentPage.ClassifiedIndustries as { category: string; documents: string[] }[]}
//         GuidelinesData={currentPage.Guidelines as { category: string; documents: string[] }[]}
//         RegulationsData={currentPage.Regulations as { category: string; documents: string[] }[]}
//         ProductRequireData={currentPage.ProductRequire as { category: string; documents: string[] }[]}
//         StructureData={currentPage.Structure as { category: string; documents: string[] }[]}
//         RoleOfHydrogeologistData={currentPage.RoleOfHydrogeologist as { category: string; documents: string[] }[]}
//         NeedData={currentPage.Need as { category: string; documents: string[] }[]}
//         ProcessData={currentPage.Process as { category: string; documents: string[] }[]}
//         AuthorityData={currentPage.Authority as { category: string; documents: string[] }[]}
//         EPRData={currentPage.EPR as { category: string; documents: string[] }[]}
//         ValidityData={currentPage.Validity as { category: string; documents: string[] }[]}
//         BusinessData={currentPage.Business as { category: string; documents: string[] }[]}
//         services={currentPage.services as { category: string; documents: string[] }[]}
//         productListData={currentPage.Productlist as { category: string; documents: string[] }[]}
//       />
//     </div>
//   );
// }

// export function generateStaticParams() {
//   return Object.keys(pageContent).map((slug) => ({ slug }));
// }





import React from "react";
import dynamic from "next/dynamic";
import { 
  pageContent, 
  PageContentType,
  pageContentSecondary,
  PageContentTypeSecondary 
} from "@/content/serviceData";
import Registration from '@/components/forms/ConsultationForm';

const Hero = dynamic(() => import("@/components/views/home/HeroSection"));
const TalkToExpert = dynamic(() => import("@/components/views/service/TalkToExpert"));
const OverviewPrimary = dynamic(() => import("@/components/views/service/OverviewSecondary"));

// Components for secondary page type (from old startup route)
const OverviewSecondary = dynamic(() => import('@/components/views/service/Overview'));
const Features = dynamic(() => import('@/components/views/service/Features'));
const Benefits = dynamic(() => import('@/components/views/service/Benefits'));
const Documents = dynamic(() => import('@/components/views/service/RequiredDocuments'));
const Eligibility = dynamic(() => import('@/components/views/service/Eligibility'));
const FAQ = dynamic(() => import('@/components/views/service/Faq'));
const Types = dynamic(() => import('@/components/views/service/ServiceTypes'));

interface PageProps {
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? '';
  
  // Check primary content first
  const pc = pageContent as Record<string, PageContentType>;
  const primaryPage = pc[slug];
  
  // Check secondary content if primary not found
  const pcs = pageContentSecondary as Record<string, PageContentTypeSecondary>;
  const secondaryPage = pcs[slug];

  // Render primary page type (main serviceData structure)
  if (primaryPage) {
    return (
      <div>
        <Hero title={primaryPage.title} description={primaryPage.description} />
        <TalkToExpert />
        <OverviewPrimary
          overview={primaryPage.overview}
          benefits={primaryPage.benefits}
          documentsRequired={primaryPage.documentsRequired}
          registrationProcedure={primaryPage.registrationProcedure}
          feesStructure={primaryPage.feesStructure}
          registrationTimeline={primaryPage.registrationTimeline}
          whyUs={primaryPage.whyUs}
          who={primaryPage.who}
          faq={primaryPage.faq}
          clauses={primaryPage.clauses}
          listicles={primaryPage.Listicles as { category: string; documents: string[] }[]}
          CategoriesData={primaryPage.Categories as { category: string; documents: string[] }[]}
          ChallengesData={primaryPage.Challenges as { category: string; documents: string[] }[]}
          classifiedIndustriesData={primaryPage.ClassifiedIndustries as { category: string; documents: string[] }[]}
          GuidelinesData={primaryPage.Guidelines as { category: string; documents: string[] }[]}
          RegulationsData={primaryPage.Regulations as { category: string; documents: string[] }[]}
          ProductRequireData={primaryPage.ProductRequire as { category: string; documents: string[] }[]}
          StructureData={primaryPage.Structure as { category: string; documents: string[] }[]}
          RoleOfHydrogeologistData={primaryPage.RoleOfHydrogeologist as { category: string; documents: string[] }[]}
          NeedData={primaryPage.Need as { category: string; documents: string[] }[]}
          ProcessData={primaryPage.Process as { category: string; documents: string[] }[]}
          AuthorityData={primaryPage.Authority as { category: string; documents: string[] }[]}
          EPRData={primaryPage.EPR as { category: string; documents: string[] }[]}
          ValidityData={primaryPage.Validity as { category: string; documents: string[] }[]}
          BusinessData={primaryPage.Business as { category: string; documents: string[] }[]}
          services={primaryPage.services as { category: string; documents: string[] }[]}
          productListData={primaryPage.Productlist as { category: string; documents: string[] }[]}
        />
      </div>
    );
  }

  // Render secondary page type (from old pageData/startup structure)
  if (secondaryPage) {
    return (
      <div>
        <OverviewSecondary data={secondaryPage.overview} />
        <Registration title={secondaryPage.overview.heading}/>
        <Features items={secondaryPage.features} />
        <Benefits items={secondaryPage.benefits} />
        <Documents data={secondaryPage.documents} />
        <Eligibility sections={secondaryPage.eligibility} />
        <Types data={secondaryPage.types} />
        <FAQ faqs={secondaryPage.faqs} />
      </div>
    );
  }

  // Page not found
  return <p>Page not found</p>;
}

export function generateStaticParams() {
  const primarySlugs = Object.keys(pageContent).map((slug) => ({ slug }));
  const secondarySlugs = Object.keys(pageContentSecondary).map((slug) => ({ slug }));
  return [...primarySlugs, ...secondarySlugs];
}
