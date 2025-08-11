import RegistrationSlugClient from './RegistrationSlugClient';

export default function RegistrationSlugPage({ params }: { params: { slug: string } }) {
  return <RegistrationSlugClient slug={params.slug} />;
}