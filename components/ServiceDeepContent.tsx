import Link from 'next/link';
import type { ServiceContent } from '@/lib/data/serviceContent';

interface Props {
  content: ServiceContent;
}

/**
 * Written content block for a service hub: intro, sections, FAQ. Sits mid-page inside
 * the commercial template, in place of the templated SEOContent block.
 */
export default function ServiceDeepContent({ content }: Props) {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
            {content.intro.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

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
                {s.links && s.links.length > 0 && (
                  <p className="text-base md:text-lg">
                    {s.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && ' · '}
                        <Link href={l.href} prefetch={false} className="font-semibold text-[#1B2A4A] underline">
                          {l.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="faq" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.name} repair in Denver: common questions
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
    </>
  );
}
