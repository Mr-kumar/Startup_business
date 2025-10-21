import { pageContent } from "@/content/serviceData";

export async function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug }));
}