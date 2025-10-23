
import React from "react";
import dynamic from "next/dynamic";
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
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
  
  // Fetch data from Strapi using helper function
  const service = await getServiceBySlug(slug);

  if (!service) {
    return <div>Service not found</div>;
  }
  
  // Determine which page type based on available fields
  const isPrimaryPage = 'documentsRequired' in service;
  const isSecondaryPage = 'features' in service;

  // Render primary page type (main serviceData structure)
  if (isPrimaryPage) {
    return (
      <div>
        <Hero title={service.title} description={service.description || ''} />
        <TalkToExpert />
        <OverviewPrimary
          overview={service.overview || ''}
          benefits={service.benefits || []}
          documentsRequired={service.documentsRequired}
          registrationProcedure={service.registrationProcedure}
          feesStructure={service.feesStructure}
          registrationTimeline={service.registrationTimeline}
          whyUs={service.whyUs}
          who={service.who}
          faq={service.faq}
          clauses={service.clauses}
          listicles={service.Listicles as { category: string; documents: string[] }[]}
          CategoriesData={service.Categories as { category: string; documents: string[] }[]}
          ChallengesData={service.Challenges as { category: string; documents: string[] }[]}
          classifiedIndustriesData={service.ClassifiedIndustries as { category: string; documents: string[] }[]}
          GuidelinesData={service.Guidelines as { category: string; documents: string[] }[]}
          RegulationsData={service.Regulations as { category: string; documents: string[] }[]}
          ProductRequireData={service.ProductRequire as { category: string; documents: string[] }[]}
          StructureData={service.Structure as { category: string; documents: string[] }[]}
          RoleOfHydrogeologistData={service.RoleOfHydrogeologist as { category: string; documents: string[] }[]}
          NeedData={service.Need as { category: string; documents: string[] }[]}
          ProcessData={service.Process as { category: string; documents: string[] }[]}
          AuthorityData={service.Authority as { category: string; documents: string[] }[]}
          EPRData={service.EPR as { category: string; documents: string[] }[]}
          ValidityData={service.Validity as { category: string; documents: string[] }[]}
          BusinessData={service.Business as { category: string; documents: string[] }[]}
          services={service.services as { category: string; documents: string[] }[]}
          productListData={service.Productlist as { category: string; documents: string[] }[]}
        />
      </div>
    );
  }

  // Render secondary page type (from old pageData/startup structure)
  if (isSecondaryPage) {
    return (
      <div>
        <OverviewSecondary data={service.overview} />
        <Registration title={service.overview?.heading || service.title}/>
        <Features items={service.features || []} />
        <Benefits items={service.benefits || []} />
        <Documents data={service.documents} />
        <Eligibility sections={service.eligibility || []} />
        <Types data={service.types} />
        <FAQ faqs={service.faqs || []} />
      </div>
    );
  }

  // Page not found
  return <div>Service not found</div>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}
