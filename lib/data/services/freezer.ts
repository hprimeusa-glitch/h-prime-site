import { SERVICE_CALL_FEE } from '@/lib/utils';
import type { ServiceContent } from '@/lib/data/serviceContent';

export const content: ServiceContent = {
  slug: 'freezer',
  name: 'Freezer',
  title: 'Freezer Repair Denver | Chest, Upright, Garage Freezers',
  description:
    `Freezer repair in Denver Metro: not freezing, frost and ice buildup, noises, garage freezers, ice makers. Diagnosis first, ${SERVICE_CALL_FEE} service call.`,
  intro: [
    'H-Prime repairs household freezers across the Denver Metro area: chest freezers, upright freezers, the freezer section of top-freezer and bottom-freezer refrigerators, built-in freezer columns and the ice makers inside them. We come to homes in Denver, Aurora, Lakewood, Littleton, Parker and Castle Rock. The work is residential only: we do not service walk-in or reach-in commercial freezers.',
    `We are an independent appliance repair company. The service call is ${SERVICE_CALL_FEE}: the technician finds the cause first and gives you a price before any work starts. Same-day or next-day appointments are available when the schedule allows, and our technician holds EPA Section 608 Type I certification, the federal certification for refrigerant work on household refrigerators and freezers.`,
  ],
  sections: [
    {
      id: 'not-freezing',
      heading: 'Freezer not freezing or thawing: coils, fan and defrost system',
      links: [{ href: '/services/refrigerator-repair', label: 'Refrigerator repair' }],
      paragraphs: [
        'Start with the setting. Whirlpool and Frigidaire both recommend 0°F, and Frigidaire calls -6 to 6°F acceptable in its refrigerator freezers. After any change, wait 24 hours before judging the result. Whirlpool also notes that some freezers have to be switched back on by hand after a power outage or a surge, and that a chest freezer’s compressor normally runs about 40% to 80% of the time at room temperature, longer when the room is warm.',
        'When the setting is right and the freezer still warms up, the manufacturers point to a few places:',
      ],
      bullets: [
        'Condenser coils. GE says dust and pet hair on the coils under or behind the unit trap heat, and recommends brushing or vacuuming them. Whirlpool lists condenser cleaning as a yearly task but notes that not every freezer has coils that need it; on manual-defrost freezers, GE notes, the condenser sits in the cabinet liner.',
        'Evaporator fan. In a frost-free freezer, a fan circulates the cold air through the cabinet and its vents. Food pressed against the vents blocks that air, and GE says that if the fan in the freezer is not running, service is required.',
        'Defrost system. A frost-free freezer melts frost off its evaporator with a defrost heater, started either by a defrost timer every 8 to 15 hours or by an adaptive control that tracks compressor run time and door openings. Each cycle lasts about 25 to 45 minutes. If the heater, its sensor or the timer or control fails, frost keeps building on the coils, and Frigidaire notes that heavy frost cuts airflow.',
        'Ice maker. GE says the ice mold has to reach about 15 to 16°F before a cycle starts, so a freezer that runs warm makes ice slowly or not at all. Then check the water filter (GE says every 6 months) and a rake stuck on a cube in the mold.',
      ],
    },
    {
      id: 'frost-and-ice',
      heading: 'Freezer frost and ice buildup: door gaskets, auto-defrost and manual-defrost chest freezers',
      paragraphs: [
        'In a frost-free freezer, GE says ice on the freezer wall is not expected. The usual causes are high humidity, frequent door openings, warm food, packages resting against the rear wall or holding the door open. Correct those and the frost should clear in a few days; if not, GE points to a door gasket that is torn or not sealing, or a freezer fan that is not running, and says service is required. A thick sheet of frost over the whole back wall, in GE’s words, means the defrost heater or sensor may need service.',
        'Check the gasket yourself first. Close the door on a dollar bill, as Frigidaire suggests: if it slides out with no resistance, the seal is weak. Clean the gasket with warm soapy water. Whirlpool adds that a chest freezer that is not level can keep the lid from sealing, which lets moist air in and builds frost.',
        'A manual-defrost chest freezer is different: frost on its walls is normal. GE says to defrost when the frost reaches 1/4 to 1/2 inch, which in most climates is about twice a year. Scrape only with a plastic or wood scraper: GE warns that an ice pick or metal tool can puncture the liner and the flammable refrigerant tubing behind it. ENERGY STAR notes that manual-defrost freezers use half the energy of automatic-defrost models, but only if they are defrosted periodically.',
      ],
    },
    {
      id: 'noises',
      heading: 'Freezer noises: normal sounds and sounds that need a repair',
      paragraphs: [
        'GE lists the sounds an upright or chest freezer makes in normal operation: boiling, gurgling, knocking, moaning or popping while it cools, which is refrigerant moving through the coils, and sizzling, popping, crackling or hissing during the automatic defrost cycle, when water drips onto the heater. That cycle lasts 30 to 40 minutes. A whoosh for up to a minute after you close the door is pressure equalizing, and a clicking sound can be the defrost timer switching. An orange glow during defrost is the heater, also normal.',
        'A sound that is not on that list, or one that comes with a warming freezer or growing frost, is worth a diagnosis. Tell the technician when you hear it: during cooling, during defrost or after the door closes.',
      ],
    },
    {
      id: 'garage-freezer',
      heading: 'Garage freezer repair in Denver: cold winters and garage-ready models',
      paragraphs: [
        'NOAA’s 1991 to 2020 normals for Denver International Airport put the average low at 18.7°F in January and 18.4°F in December, and the National Weather Service counts about 156 nights a year at or below 32°F and about 6 at or below 0°F in Denver. On January 20, 2025, the low reached -14°F.',
        'Manufacturers set clear limits. Whirlpool says not to install a standard chest freezer where the temperature falls below 40°F or rises above 110°F. GE says its 2018 and newer upright and chest freezers are garage ready, rated for 0 to 110°F. Even a garage-ready model is rated only down to 0°F, so put a thermometer in the garage on a cold January night and see how close it gets.',
        'A refrigerator with a freezer section is more sensitive. Whirlpool explains that in cold weather a standard refrigerator may cycle less or not at all, because the cold room air masks the need for cooling, so the freezer warms and can thaw. GE’s garage-ready top-freezer refrigerators are rated for 38 to 110°F, with no cooling capability at all below 32°F, and Frigidaire does not recommend installing its refrigerators where the temperature drops below 55°F. A freezer section that thaws in a cold garage may be a location problem, not a broken part; we check which before quoting a repair.',
      ],
    },
    {
      id: 'food-safety',
      heading: 'Freezer stopped working: what to do with the food',
      paragraphs: [
        'Keep the door or lid closed. The USDA Food Safety and Inspection Service says a full freezer holds its temperature for about 48 hours, and a half-full freezer for about 24 hours, if the door stays closed. Food can be safely refrozen if it still contains ice crystals or is at 40°F or below. The USDA recommends an appliance thermometer in the freezer, and FSIS says never to taste food to decide whether it is safe.',
        'Book the repair before that 24 to 48 hour window closes, and tell us whether the freezer still runs and whether there is frost on the back wall.',
      ],
    },
    {
      id: 'repair-or-replace',
      heading: 'Freezer refrigerant leaks, sealed-system repair and repair or replace',
      paragraphs: [
        'Household freezers are “small appliances” under EPA rules: factory sealed with 5 pounds of refrigerant or less. Attaching gauges, adding refrigerant or removing it requires EPA Section 608 certification, and Type I is the certification for small appliances. Our technician holds it. The EPA also lists isobutane (R-600a) as a refrigerant used in household freezers, and GE’s chest freezer manual carries a flammable refrigerant warning, so a suspected leak is not a do-it-yourself job.',
        'It comes down to which part failed. A gasket, an evaporator fan, a defrost heater, a sensor or a control is a part-level repair. A compressor or a refrigerant leak is a sealed-system repair, the bigger decision.',
        'Energy use belongs in the math. ENERGY STAR estimates that a certified chest freezer uses about 215 kWh a year, roughly $30 to run, and a certified upright about 395 kWh, roughly $60. Certified freezers are at least 10 percent more efficient than non-certified models, and chest freezers are usually more efficient than uprights because less cold air escapes from a top-opening lid.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does freezer repair cost in Denver?',
      a: `The service call is ${SERVICE_CALL_FEE}. The technician diagnoses the freezer and gives you the repair price before any work starts. The price depends on the part: a gasket, fan or defrost part is a different job from a sealed-system repair.`,
    },
    {
      q: 'Do you offer same-day or emergency freezer repair?',
      a: 'Same-day or next-day appointments are available when the schedule allows, across the Denver Metro area including Aurora, Littleton, Centennial and Parker. Until the technician arrives, keep the freezer closed: the USDA says a full freezer holds its temperature for about 48 hours and a half-full one for about 24 hours.',
    },
    {
      q: 'Who fixes chest freezers and garage freezers?',
      a: 'We do: chest and upright freezers, refrigerator freezer sections, built-in freezer columns and ice makers, in homes only, not walk-in or reach-in commercial units. For a garage freezer, check the model’s temperature rating first: GE rates its garage-ready freezers for 0 to 110°F, while Whirlpool says a standard chest freezer should not sit where it drops below 40°F.',
    },
    {
      q: 'What should I check before I call for freezer repair?',
      a: 'Check that the freezer is on and the breaker has not tripped, that it is set to about 0°F, that the door or lid closes on a dollar bill with some grip, that food is not blocking the vents and that the condenser coils are not covered in dust. If it has run 24 hours and still does not cool, Frigidaire says to schedule service.',
    },
    {
      q: 'There is ice on the back wall of my freezer. Can I just defrost it?',
      a: 'On a manual-defrost chest freezer, yes: GE says to defrost when the frost reaches 1/4 to 1/2 inch, using only a plastic or wood scraper. On a frost-free freezer, frost on the back wall is not expected, and GE links a thick sheet of it to the defrost heater or sensor. Defrosting by hand only buys time; if the frost returns, the defrost system needs a diagnosis.',
    },
    {
      q: 'Can a freezer refrigerant leak be repaired?',
      a: 'Only a certified technician can work on it: federal rules require EPA Section 608 certification to attach gauges or add or remove refrigerant, and household freezers fall under Type I, which our technician holds. You get the diagnosis and the price before deciding.',
    },
    {
      q: 'Is it worth repairing a freezer or should I replace it?',
      a: 'A failed fan, gasket, defrost heater, sensor or control is a part-level repair. A compressor or refrigerant leak is a bigger decision. Weigh the quote against the age of the freezer and its running cost: ENERGY STAR estimates about $30 a year for a certified chest freezer and about $60 for a certified upright.',
    },
  ],
};
