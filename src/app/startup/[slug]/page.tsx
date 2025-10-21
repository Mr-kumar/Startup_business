import React from 'react';
import dynamic from 'next/dynamic';
import { pageContent, PageContentType } from '@/content/pageData';
import Registration from '@/components/forms/ConsultationForm';

// Dynamic imports of your GST components
const Overview = dynamic(() => import('@/components/views/service/Overview'));
const Features = dynamic(() => import('@/components/views/service/Features'));
const Benefits = dynamic(() => import('@/components/views/service/Benefits'));
const Documents = dynamic(() => import('@/components/views/service/RequiredDocuments'));
const Eligibility = dynamic(() => import('@/components/views/service/Eligibility'));
const ServicesFaq = dynamic(() => import('@/components/views/service/Faq'));
const Types = dynamic(() => import('@/components/views/service/ServiceTypes'));

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
      <Registration title={currentPage.overview.heading}/>
      <Features items={currentPage.features} />
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






// import React from "react";
// import dynamic from "next/dynamic";
// import { pageContent, PageContentType } from "@/utils/pageContentDataSecondary";
// import Registration from "@/components/Page1/Registration";

// const Overview = dynamic(() => import("@/components/Page1/Overview"));
// const Features = dynamic(() => import("@/components/Page1/Features"));
// const Benefits = dynamic(() => import("@/components/Page1/Benifits"));
// const Documents = dynamic(() => import("@/components/Page1/Documents"));
// const Eligibility = dynamic(() => import("@/components/Page1/Eligibility"));
// const ServicesFaq = dynamic(() => import("@/components/Page1/Faq"));
// const Types = dynamic(() => import("@/components/Page1/Types"));

// type Props = { params: { slug: string } };

// export default function GstPage({ params }: Props) {
//   const { slug } = params;
//   const pc = pageContent as Record<string, PageContentType>;
//   const currentPage = pc[slug];

//   if (!currentPage) {
//     return <p>Page not found</p>;
//   }

//   return (
//     <div>
//       <Overview data={currentPage.overview} />
//       <Registration />
//       <Features heading="" subheading="" items={currentPage.features} />
//       <Benefits items={currentPage.benefits} />
//       <Documents data={currentPage.documents} />
//       <Eligibility sections={currentPage.eligibility} />
//       <Types data={currentPage.types} />
//       <ServicesFaq services={currentPage.services} faqs={currentPage.faqs} />
//     </div>
//   );
// }

// export function generateStaticParams() {
//   return Object.keys(pageContent).map((slug) => ({ slug }));
// }
