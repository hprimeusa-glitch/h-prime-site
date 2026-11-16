import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Clock, MapPin, Wrench } from 'lucide-react';
import ApplianceCards from '@/components/ApplianceCards';
import BenefitCards from '@/components/BenefitCards';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import SEOContent from '@/components/SEOContent';
import { cities, getCitiesByCounty } from '@/lib/data/cities';
import { brands } from '@/lib/data/brands';
import { appliances } from '@/lib/data/appliances';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';

interface PageProps {
  params: Promise<{
    city: string;
    brand: string;
  }>;
}

// Dynamic rendering enabled - pages generated on-demand
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, brand: brandSlug } = await params;
  // Remove -repair suffix from brand
  const cleanBrandSlug = brandSlug.replace('-repair', '');
  const city = cities.find(c => c.slug === citySlug);
  const brand = brands.find(b => b.slug === cleanBrandSlug);
  if (!city || !brand) return {};


  // Geo-test fixture: still reachable for testing the middleware, never indexed.
  if (city.county === 'test') {
    return { ...generatePageMetadata({ city: citySlug, brand: cleanBrandSlug }), robots: { index: false, follow: false } };
  }

  return generatePageMetadata({ city: citySlug, brand: cleanBrandSlug });
}

export default async function CityBrandPage({ params }: PageProps) {
  const { city: citySlug, brand: brandSlug } = await params;
  // Remove -repair suffix from brand
  const cleanBrandSlug = brandSlug.replace('-repair', '');
  const city = cities.find(c => c.slug === citySlug);
  const brand = brands.find(b => b.slug === cleanBrandSlug);

  if (!city || !brand) {
    notFound();
  }

  const nearbyCities = getCitiesByCounty(city.county).filter(c => c.slug !== city.slug).slice(0, 6);

  const localBusinessSchema = generateLocalBusinessSchema({
    city: citySlug,
    brand: cleanBrandSlug,
    county: city.county,
  });
  const serviceSchema = generateServiceSchema({
    city: citySlug,
    brand: cleanBrandSlug,
  });
  const breadcrumbSchema = generateBreadcrumbSchema({
    city: citySlug,
    brand: cleanBrandSlug,
  });

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title={`${brand.name} Appliance Repair in ${city.name} & Surrounding Areas`}
        subtitle={`${brand.name} repairs \u2022 Same-day service \u2022 Upfront pricing`}
        city={city.name}
        brand={brand.name}
        brandLogo={brand.logo}
      />

      <ApplianceCards
        heading={`${brand.name} Appliances We Repair in ${city.name}`}
        items={appliances.map((appliance) => ({
          key: appliance.slug,
          href: `/cities/${citySlug}/brands/${brandSlug}/services/${appliance.slug}-repair`,
          title: `${brand.name} ${appliance.name} Repair`,
          image: appliance.image,
        }))}
      />

      <BenefitCards
        heading={`Why Choose Us for ${brand.name} Repair in ${city.name}?`}
        items={[
          { icon: Wrench, title: `${brand.name} Specialists`, text: `We service all ${brand.name} appliance models` },
          { icon: MapPin, title: `Local to ${city.name}`, text: 'Fast response times in your area' },
          { icon: CheckCircle, title: `Genuine ${brand.name} Parts`, text: 'Only authentic replacement parts used' },
          { icon: Clock, title: 'Same-Day Service', text: `Available for ${city.name} residents` },
        ]}
      />

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              {brand.name} Appliance Repair in Nearby Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/cities/${nearbyCity.slug}/brands/${brandSlug}`}
                  prefetch={false}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
                >
                  <span className="text-gray-900 font-medium">{nearbyCity.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews />

      {/* Long-form SEO text sits below reviews so the selling blocks come first */}
      <SEOContent city={citySlug} brand={cleanBrandSlug} county={city.county} />
    </>
  );
}
