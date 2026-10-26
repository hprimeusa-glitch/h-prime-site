import { SERVICE_CALL_FEE } from '@/lib/utils';
import type { ServiceContent } from '@/lib/data/serviceContent';

export const content: ServiceContent = {
  slug: 'cooktop',
  name: 'Cooktop',
  title: 'Cooktop Repair Denver | Gas, Electric Glass & Induction',
  description:
    `Cooktop repair in Denver Metro: gas burners that click or won’t light, electric glass and coil elements, induction pan errors. ${SERVICE_CALL_FEE} service call.`,
  intro: [
    'H-Prime repairs gas, electric and induction cooktops in homes across the Denver Metro area, from Denver and Aurora to Lakewood, Littleton and Highlands Ranch. That includes built-in cooktops and the cooktop on a range: gas burners that click and will not light, radiant glass and coil elements that stay cold, and induction zones that do not recognize the pan.',
    `We are an independent appliance repair company. Same-day or next-day appointments are offered when the schedule allows. The service call is ${SERVICE_CALL_FEE}: the technician diagnoses the cooktop first, and you get a price before any repair work starts. Below is what usually goes wrong with each type, what you can safely check yourself, and when it is time to book.`,
  ],
  sections: [
    {
      id: 'gas-cooktop',
      heading: 'Gas cooktop repair: burner clicks, won’t light, burns yellow or smells of gas',
      paragraphs: [
        'Some clicking is normal. On most gas cooktops all igniters spark together when any knob is turned to LITE, and only the burner you selected should light. Samsung and JennAir both describe this, and JennAir adds that cooktops with a reignition feature spark again on their own if a draft or a spill puts the flame out.',
        'Clicking that does not stop after the knob is off LITE is most often moisture. Samsung traces it to water on the ignition switches behind the knobs, and JennAir to burners that are still damp after cleaning or a boilover. Let the cooktop dry completely, for several hours or overnight. If it keeps clicking after that, a switch or the spark module needs to be tested, and that is a repair visit.',
        'A burner that will not light at all usually has a cap or port problem first. Use the checks below. Flame color tells you the rest: Whirlpool describes a proper natural gas flame as soft blue. A flame that is yellow, noisy or lifting off the burner can be clogged ports or a cap that is not seated, but GE and Whirlpool also link yellow flames and soot to gas pressure, an incorrect LP conversion or orifices that need to be changed. Those are not owner fixes.',
        'If you smell gas or suspect a leak, do not try to find it and do not call an appliance repair company first. Xcel Energy, the Denver area gas utility, tells customers to leave immediately and call 911 once safely outside, and then to contact Xcel Energy at 800-895-2999. Once the utility or emergency responders say the home is safe, we can diagnose the cooktop itself.',
      ],
      bullets: [
        'Turn the knob fully to LITE and confirm the cooktop has power: an electric igniter does not spark if the plug is out or the breaker is off.',
        'Seat the cap: it should sit flush on its base with minimal side to side movement, and on cooktops with matching marks, the right cap goes on the right base.',
        'Clean clogged ports with a straight pin, needle or small-gauge wire once the burner is cool. JennAir warns against wooden toothpicks, which can break off inside the port.',
        'Dry the burner if it was just cleaned or something boiled over.',
      ],
    },
    {
      id: 'denver-altitude',
      heading: 'Denver gas cooktop repair: altitude and flame settings',
      links: [{ href: '/brands/wolf-repair', label: 'Wolf repair' }, { href: '/brands/thermador-repair', label: 'Thermador repair' }, { href: '/brands/bosch-repair', label: 'Bosch repair' }, { href: '/brands/ge-repair', label: 'GE repair' }],
      paragraphs: [
        'Denver sits at about 5,280 feet, and gas cooktop manufacturers do not all treat that elevation the same way, so the installation manual for your model is the real answer. Two examples show the range. The installation manual for the Bosch NGMP077UC gas cooktop says it was tested up to 10,100 feet and that above 2,000 feet adjustments may be made: if the flame is not stable on the lowest setting, the simmer is raised with the bypass screw in the valve, and Bosch requires a Certified Professional to make high altitude adjustments during installation. The Fisher & Paykel installation manual for CG244D, CG305D and CG365D gas cooktops requires a high altitude conversion kit above 3,000 feet, with one kit for 3,000 to 6,000 feet and another above 6,000 feet.',
        'So a Denver cooktop with a weak or unstable simmer flame, or flames that do not look right, may simply never have been set up for the altitude. Checking the model against its own installation manual is part of our diagnosis, before any part is replaced. We also service brands with their own Denver pages on this site, including Wolf, Thermador, Bosch and GE.',
      ],
    },
    {
      id: 'electric-cooktop',
      heading: 'Electric cooktop repair: glass radiant and coil elements not heating',
      paragraphs: [
        'On a smooth glass radiant cooktop, an element that turns on and off while you cook is usually doing its job. Frigidaire explains that radiant elements are designed to cycle even on High, to hold steady heat and protect the glass from overheating, and that cycling looks more frequent with a pan that is smaller than the element or has an uneven bottom. GE adds that a pan that is not flat makes the built-in heat sensors cut the element off early.',
        'When an element does not heat at all, start with the power. Whirlpool lists the control lock, the breaker and a power reset: turn the breaker off for one minute and back on. Electric ranges need a 240V circuit, and Whirlpool says to call an electrician if the breaker keeps tripping.',
        'Coil cooktops have one more test. GE notes that plug-in coil elements can work loose in their sockets, and suggests moving a dead element to a working receptacle of the same size. If it still does not heat there, the element needs replacing. If it heats in the other socket, the fault is in the original receptacle, the infinite switch that controls that element or the wiring between them, and that is what the technician tests.',
      ],
    },
    {
      id: 'cracked-glass',
      heading: 'Cracked glass cooktop: stop using it',
      paragraphs: [
        'GE does not recommend using a cooktop with cracked glass until it is repaired, and says a cracked or pitted ceramic glass surface needs service. That applies to every glass cooking surface: radiant, induction and gas on glass. On a range, GE also advises against using the oven, because the oven vents onto the cooktop. Turn the cooktop off at the breaker and book a repair.',
      ],
    },
    {
      id: 'induction-cooktop',
      heading: 'Induction cooktop repair: pan not detected, fan, power',
      paragraphs: [
        'When an induction zone flashes or will not heat, the cookware is the first suspect. GE says pans that are not magnetic or are too small will not let an induction burner turn on, and that the pan must be flat, in full contact with the glass and centered in the marked circle. Whirlpool’s magnet test settles it: if a magnet sticks firmly to the bottom of the pan, it is induction compatible. Aluminum and copper usually do not work unless they have a magnetic base.',
        'Power matters too. GE lists low supply voltage, for example a home with a 208 volt supply, and a tripped breaker or blown fuse as reasons an induction burner does not work. Bosch notes that most of its induction cooktops reset themselves after overheating once they have cooled completely.',
        'A fan that keeps running after you turn the cooktop off is normal: GE and Whirlpool both say it protects the electronics and stops once the temperature drops. If a magnetic pan of the right size still is not detected, if one zone has died, or if the cooktop shows an error code that comes back after it cools, the problem is in the electronics. Check the code in your own manual first, then book a diagnosis.',
      ],
    },
    {
      id: 'repair-or-replace',
      heading: 'Cooktop repair or replacement: when to book',
      paragraphs: [
        'Burners, igniters, switches, elements, glass tops and control boards are all replaceable parts, so one failed part does not automatically mean a new cooktop. The decision depends on which part failed, its price and availability for your model, and the age of the cooktop. If it is still under the manufacturer’s warranty, contact the manufacturer first: Samsung, for example, lists unauthorized repairs among the things its warranty does not cover.',
        'Book a technician when the simple checks above do not fix the problem, when gas burners keep clicking after drying, when flames stay yellow or lift off, when glass is cracked, or when an error code returns. We serve homes across the metro, including Centennial, Parker, Arvada, Westminster and Golden.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does cooktop repair cost in Denver?',
      a: `The service call is ${SERVICE_CALL_FEE}. The technician diagnoses the cooktop and gives you a price before any repair starts. We do not publish repair prices because drying out an ignition switch and replacing a glass top or an induction control board are very different jobs.`,
    },
    {
      q: 'Can you repair my cooktop the same day?',
      a: 'Same-day or next-day appointments are offered when the schedule allows. Whether the repair is finished on the first visit depends on the part: some parts are model specific and have to be ordered.',
    },
    {
      q: 'Why does my gas cooktop keep clicking?',
      a: 'All burners spark when any knob is at LITE, which is normal. Constant clicking after the knob is off LITE is usually moisture on the burner or the ignition switches after cleaning or a spill. Let the cooktop dry for several hours or overnight. If it still clicks, a switch or the spark module needs to be tested.',
    },
    {
      q: 'Is it safe to use a cracked glass cooktop?',
      a: 'No. GE does not recommend using a cooktop with cracked glass until it is repaired, and on a range it also advises against using the oven. Switch the cooktop off at the breaker and book a repair.',
    },
    {
      q: 'Why won’t my induction cooktop detect the pan?',
      a: 'Check the pan with a magnet: it must stick firmly. The pan also needs a flat bottom, the right size for the zone and to be centered in the marked circle. If a compatible pan still is not detected, the cause is usually electrical or electronic and needs a diagnosis.',
    },
    {
      q: 'Does my gas cooktop need adjusting for Denver altitude?',
      a: 'It depends on the model. Some manufacturers require a high altitude kit above 3,000 feet, others allow simmer adjustments above 2,000 feet by a professional. Your installation manual gives the answer for your model, and we check it during the diagnosis.',
    },
    {
      q: 'What should I do if I smell gas near the cooktop?',
      a: 'Leave the home immediately and call 911 once you are outside, then contact Xcel Energy at 800-895-2999, as Xcel Energy instructs. Call us for the cooktop repair once the utility says the home is safe.',
    },
  ],
};
