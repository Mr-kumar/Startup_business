import { pageContent } from "@/utils/pageContentDataPrimary";

export async function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}