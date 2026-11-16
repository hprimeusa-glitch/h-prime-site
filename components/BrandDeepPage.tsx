import { Clock, Shield, Users, Wrench } from 'lucide-react';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import ApplianceCards from '@/components/ApplianceCards';
import BenefitCards from '@/components/BenefitCards';
import type { BrandContent } from '@/lib/data/brandContent';
import type { Review } from '@/lib/data/reviews';
import type { Brand } from '@/lib/data/brands';
import { appliances } from '@/lib/data/appliances';
import { PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/utils';

interface Props {
  content: BrandContent;
  brand: Brand;
  /** appliance slugs this brand makes, used for the service-hub links */
  applianceSlugs: string[];
  reviews: Review[];
}

// Short labels for the in-page navigation, keyed by section id.
const NAV_LABELS: Record<string, string> = {
  dishwasher: 'Dishwasher',
  'oven-range': 'Oven & range',
  oven: 'Oven & range',
  'oven-cooktop': 'Oven & cooktop',
  'oven-refrigerator': 'Oven & refrigerator',
  refrigerator: 'Refrigerator',
  dryer: 'Dryer',
  washer: 'Washer',
  laundry: 'Washer & dryer',
  authorized: 'Authorized vs. independent',
  warranty: 'Warranty',
  'before-you-call': 'Before you call',
  'service-area': 'Service area',
  burners: 'Burners',
  altitude: 'Altitude',
  cooktop: 'Cooktop & hood',
  condenser: 'Condenser',
  'ice-maker': 'Ice maker',
  'frost-noise': 'Frost & noise',
};

/**
 * Deep brand page: written content, real reviews for the brand, FAQ.
 * The generic template stays in app/brands/[brand]/page.tsx for every other brand.
 */
export default function BrandDeepPage({ content, brand, applianceSlugs, reviews }: Props) {
  const hubs = appliances.filter((a) => applianceSlugs.includes(a.slug));

  return (
    <>
      <Hero
        title={content.h1}
        subtitle={content.subtitle}
        brand={brand.name}
        brandLogo={brand.logo}
      />

      {/* Service hubs with photos right under the hero: the page states what we repair
          first (the long-form layout alone lost positions on commercial queries,
          SEO/brand-rewrite-control-2026-10-26.json). */}
      <ApplianceCards
        heading={`${brand.name} repair services in Denver`}
        items={hubs.map((a) => ({
          key: a.slug,
          href: `/services/${a.slug}-repair`,
          title: `${brand.name} ${a.name} Repair`,
          image: a.image,
          alt: `${brand.name} ${a.name.toLowerCase()} repair`,
        }))}
      />

      <BenefitCards
        heading={`Why Choose Us for ${brand.name} Repairs?`}
        items={[
          { icon: Wrench, title: `${brand.name} Specialists`, text: `We service all ${brand.name} appliances` },
          { icon: Clock, title: 'Same-Day Service', text: 'Fast appointments throughout Denver Metro' },
          { icon: Shield, title: 'The Right Parts', text: `Parts matched to your ${brand.name} model` },
          { icon: Users, title: 'Fully Insured', text: 'Insured for your peace of mind' },
        ]}
      />

      {/* Reviews: the brand's own when they exist, otherwise the profile's latest */}
      <Reviews items={reviews} title={reviews.length > 0 && content.reviewsTitle ? content.reviewsTitle : undefined} />

      {/* Long-form text below reviews so the selling blocks come first */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
            {content.intro.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed">{p}</p>
            ))}
          </div>

          {/* In-page navigation */}
          <nav aria-label="On this page" className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-2">
            {content.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:border-[#1B2A4A] hover:text-[#1B2A4A] transition"
              >
                {NAV_LABELS[s.id] ?? s.heading}
              </a>
            ))}
            <a href="#faq" className="text-sm px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:border-[#1B2A4A] hover:text-[#1B2A4A] transition">
              FAQ
            </a>
          </nav>
        </div>
      </section>

      {/* Sections */}
      {content.sections.map((s, idx) => (
        <section key={s.id} id={s.id} className={`py-12 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} scroll-mt-24`}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">{s.heading}</h2>
              <div className="text-gray-700 space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-3 pl-5 list-disc marker:text-[#1B2A4A]">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="text-base md:text-lg leading-relaxed">{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {brand.name} repair in Denver: common questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {content.faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:text-blue-600 transition">
                  {faq.q}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1B2A4A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Book {brand.name} repair in the Denver Metro area</h2>
          <p className="text-lg opacity-90 mb-6">Tell us the model number and the symptom. You get a diagnosis and a price before any work starts.</p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-block bg-white text-[#1B2A4A] font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
