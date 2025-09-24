import { notFound } from 'next/navigation';
import { getPageData } from './data';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

interface PageProps {
  params: { slug: string };
}

export default async function RegisterPage({ params }: PageProps) {
  const { slug } = params;
  const pageData = await getPageData(slug);

  if (!pageData) return notFound();

  // Fetch services data dynamically
  const { getServicesData } = await import('./data/servicesData');
  const services = getServicesData(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection data={pageData.hero} />
      <ServicesSection services={services} />
    </div>
  );
}
