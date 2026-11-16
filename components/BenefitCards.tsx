import type { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface Props {
  heading: string;
  items: BenefitItem[];
}

/** "Why choose us" cards with line icons, the same style on every template. */
export default function BenefitCards({ heading, items }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon className="w-10 h-10 text-orange-600" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
