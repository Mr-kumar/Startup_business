
import React from "react";
import dynamic from "next/dynamic";
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-4">
            The service "{slug}" could not be found.
          </p>
          <p className="text-sm text-gray-500">
            Please check if Strapi is running and the service exists.
          </p>
          <a 
            href="/" 
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }

  // Determine if this is a primary or secondary service page
  const isPrimaryService = service.documentsRequired && service.overview && 
    typeof service.overview === 'object' && 'paragraphs' in service.overview && 
    Array.isArray(service.overview.paragraphs);

  // Render components based on service type (data-driven approach)
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Hero title={service.title} description={service.description || ''} />
      
      {/* Talk to Expert CTA */}
      <TalkToExpert />

      {isPrimaryService ? (
        // PRIMARY SERVICE: Professional structured layout
        <>
          {/* Overview Section - Full Width */}
          <OverviewPrimary data={service.overview as unknown as { heading: string; paragraphs: string[] }} />
          
          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
            
            {/* Features Section - Full Width */}
            {service.features && (
              <section className="scroll-mt-24" id="features">
                <Features items={service.features} />
              </section>
            )}
            
            {/* Benefits & Documents - Side by Side on Desktop */}
            {(service.benefits || service.documents) && (
              <div className="grid lg:grid-cols-2 gap-8">
                {service.benefits && (
                  <section className="scroll-mt-24" id="benefits">
                    <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                      <Benefits items={service.benefits as any} />
                    </div>
                  </section>
                )}
                
                {service.documents && (
                  <section className="scroll-mt-24" id="documents">
                    <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                      <Documents data={service.documents as any} />
                    </div>
                  </section>
                )}
              </div>
            )}
            
            {/* Eligibility Section - Full Width with Accent Background */}
            {service.eligibility && (
              <section className="scroll-mt-24" id="eligibility">
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 lg:p-12">
                  <Eligibility sections={service.eligibility} />
                </div>
              </section>
            )}
            
            {/* Types & FAQ - Asymmetric Layout */}
            {(service.types || service.faqs) && (
              <div className="grid lg:grid-cols-3 gap-8">
                {service.types && (
                  <section className="lg:col-span-1 scroll-mt-24" id="types">
                    <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                      <Types data={service.types as any} />
                    </div>
                  </section>
                )}
                
                {service.faqs && (
                  <section className="lg:col-span-2 scroll-mt-24" id="faq">
                    <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                      <FAQ faqs={service.faqs} />
                    </div>
                  </section>
                )}
              </div>
            )}
            
          </div>
        </>
      ) : (
        // SECONDARY SERVICE: OverviewSecondary handles ALL sections internally
        <OverviewSecondary service={service} />
      )}
    </div>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}
