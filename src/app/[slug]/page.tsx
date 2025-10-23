
import React from "react";
import dynamic from "next/dynamic";
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import Registration from '@/components/forms/ConsultationForm';

const Hero = dynamic(() => import("@/components/views/home/HeroSection"));
const TalkToExpert = dynamic(() => import("@/components/views/service/TalkToExpert"));
const OverviewSecondary = dynamic(() => import("@/components/views/service/OverviewSecondary"));
const OverviewPrimary = dynamic(() => import("@/components/views/service/Overview"));
const Features = dynamic(() => import("@/components/views/service/Features"));
const Benefits = dynamic(() => import("@/components/views/service/Benefits"));
const Documents = dynamic(() => import("@/components/views/service/RequiredDocuments"));
const Eligibility = dynamic(() => import("@/components/views/service/Eligibility"));
const FAQ = dynamic(() => import("@/components/views/service/Faq"));
const Types = dynamic(() => import("@/components/views/service/ServiceTypes"));

interface PageProps {
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? '';

  // Fetch data from Strapi using helper function
  const service = await getServiceBySlug(slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Determine if this is a primary or secondary service page
  const isPrimaryService = service.documentsRequired && service.overview && 
    typeof service.overview === 'object' && 'paragraphs' in service.overview && 
    Array.isArray(service.overview.paragraphs);

  // Render components based on service type (data-driven approach)
  return (
    <div>
      <Hero title={service.title} description={service.description || ''} />
      <TalkToExpert />

      {isPrimaryService ? (
        // PRIMARY SERVICE: Render with OverviewPrimary + individual sections
        <>
          <OverviewPrimary data={service.overview as unknown as { heading: string; paragraphs: string[] }} />
          {service.features && <Features items={service.features} />}
          {service.benefits && <Benefits items={service.benefits as any} />}
          {service.documents && <Documents data={service.documents as any} />}
          {service.eligibility && <Eligibility sections={service.eligibility} />}
          {service.types && <Types data={service.types as any} />}
          {service.faqs && <FAQ faqs={service.faqs} />}
        </>
      ) : (
        // SECONDARY SERVICE: OverviewSecondary handles ALL sections internally
        <OverviewSecondary service={service} />
      )}

      <Registration title={service.title} />
    </div>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}
