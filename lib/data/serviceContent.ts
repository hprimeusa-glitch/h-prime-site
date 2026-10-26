/**
 * Hand-written service hub pages. A hub listed here keeps the commercial template of
 * app/services/[appliance]/page.tsx (hero, issues grid, why us, brands) and swaps the
 * templated SEO block for this content mid-page, plus its own title, description and
 * FAQPage schema.
 *
 * Why the template stays: the brand pages rewritten as full long-form layouts on
 * 2026-09-21 lost positions on the same queries against the brand pages left alone
 * (SEO/brand-rewrite-control-2026-10-26.json), so the hubs add depth without dropping
 * the commercial signal of the page.
 *
 * Written against the Search Console queries of each hub (90 days to 2026-10-24); every
 * fact has its source in Clients/H-Prime/SEO/sources-2026-10-26/<slug>-sources.md.
 */

export interface ServiceSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { href: string; label: string }[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  name: string;
  /** <title>, up to ~60 characters */
  title: string;
  /** meta description, up to ~160 characters */
  description: string;
  intro: string[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
}

import { content as dryer } from '@/lib/data/services/dryer';
import { content as freezer } from '@/lib/data/services/freezer';
import { content as cooktop } from '@/lib/data/services/cooktop';
import { content as microwave } from '@/lib/data/services/microwave';

export const serviceContent: Record<string, ServiceContent> = { dryer, freezer, cooktop, microwave };

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContent[slug];
}
