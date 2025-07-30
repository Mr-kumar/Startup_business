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

// export default async function Page2({ params }: PageProps) {
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
//         faq={currentPage.faq}
//         listicles={currentPage.Listicles as { category: string; documents: string[] }[]}
//       />
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   return Object.keys(pageContent).map((slug) => ({ slug }));
// }





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

export default async function Page2({ params }: PageProps): Promise<JSX.Element> {
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
        faq={currentPage.faq}
        listicles={currentPage.Listicles as { category: string; documents: string[] }[]}
      />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}
