import React from 'react';
import dynamic from 'next/dynamic';
import { pageContent, PageContentType } from '@/utils/pageContentDataSecondary';
import Registration from '@/components/Page1/Registration';

// Dynamic imports of your GST components
const Overview = dynamic(() => import('@/components/Page1/Overview'));
const Features = dynamic(() => import('@/components/Page1/Features'));
const Benefits = dynamic(() => import('@/components/Page1/Benifits'));
const Documents = dynamic(() => import('@/components/Page1/Documents'));
const Eligibility = dynamic(() => import('@/components/Page1/Eligibility'));
const ServicesFaq = dynamic(() => import('@/components/Page1/Faq'));
const Types = dynamic(() => import('@/components/Page1/Types'));

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GstPage({ params }: PageProps) {
  const { slug } = await params;

  const currentPage = pageContent[slug] as PageContentType | undefined;
  if (!currentPage) return <p>Page not found</p>;


  return (
    <div>

      <Overview data={currentPage.overview} />
      <Registration />
      <Features heading="" subheading="" items={currentPage.features} />
      <Benefits items={currentPage.benefits} />
      <Documents data={currentPage.documents} />
      <Eligibility sections={currentPage.eligibility} />
      <Types data={currentPage.types} />
      <ServicesFaq services={currentPage.services} faqs={currentPage.faqs} />

    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}





