import { SERVICE_CALL_FEE } from '@/lib/utils';
import type { ServiceContent } from '@/lib/data/serviceContent';

export const content: ServiceContent = {
  slug: 'microwave',
  name: 'Microwave',
  title: 'Microwave Repair Denver | Over-the-Range & Built-In',
  description:
    `Over-the-range and built-in microwave repair in Denver Metro: no heat, won’t start, sparking, hood fan and light. Diagnosis first, ${SERVICE_CALL_FEE} service call.`,
  intro: [
    'H-Prime repairs over-the-range and built-in microwaves in homes across the Denver Metro area, from Denver and Aurora to Lakewood, Littleton and Highlands Ranch. These are the microwaves worth fixing where they hang: an over-the-range unit is also your range hood, with its own fan, cooktop light and filters, and a built-in sits in a cabinet cutout or above a wall oven inside a trim kit. Taking one down is a job in itself, so the repair happens in your kitchen.',
    `We are an independent appliance repair company. The service call is ${SERVICE_CALL_FEE}: the technician finds the cause first and gives you a price before any work starts. For a countertop microwave, call us before booking. Compare the quote with the price of a new unit; for an inexpensive countertop model, replacing it is often the sensible choice, and we will say so.`,
  ],
  sections: [
    {
      id: 'not-heating',
      heading: 'Microwave runs but does not heat: magnetron, diode and capacitor',
      paragraphs: [
        'Before you assume a part failed, rule out the settings. Whirlpool lists three causes of a microwave that runs without heating: Control Lock is on (LOC, L or a padlock in the display), Demo mode is on, which runs the light, fan and turntable without turning on the magnetron, or a low power level was selected. On a new unit, check that the shipping spacer inside the door was removed. Then run the manufacturer test: one cup of water on full power. Whirlpool uses 1 minute, KitchenAid 2 minutes; if the water warms, the microwave is heating.',
        'Denver note: GE says water boils about 2 degrees lower for every 1,000 feet of elevation, and Colorado State University Extension puts the boiling point at about 203°F at 5,000 feet. Water that boils fast but is not as hot as you expect is the altitude, not a weak microwave.',
        'If the water stays cold, the fault is in the high-voltage circuit. KitchenAid names the magnetron, which makes the microwave energy, and the high-voltage diode that feeds it, and adds that a failing magnetron may also blow a fuse. Both are jobs for a professional.',
      ],
      bullets: [
        'Safety: do not open the cabinet. Manufacturer service manuals warn that the high-voltage capacitor stays charged after the oven is switched off and must be discharged before anyone touches components or wiring. Technical Safety BC, after investigating a fatal incident, put it plainly: the danger does not go away when the microwave is unplugged.',
        'The federal label on every microwave says the same: it is to be serviced only by properly qualified service personnel.',
      ],
    },
    {
      id: 'not-starting',
      heading: 'Microwave not turning on or not starting: door switches and fuses',
      paragraphs: [
        'A dark display starts at the outlet. Whirlpool’s checklist: plug a small working appliance into the same outlet, check for a tripped breaker or blown household fuse, then cut power at the breaker for 1 minute and restore it. If the breaker or fuse trips again, Whirlpool says to stop trying to run the microwave.',
        'If the display works but the microwave will not start, look at the door. Federal rules require every microwave to have two independent door interlocks plus a monitoring system that stops the oven if an interlock fails, so a door that is not fully latched, or a switch that does not register it, keeps the oven from running. KitchenAid points to one quick clue: if the interior light does not come on when you open the door, the door switch may not be latching properly. Door switches, the latch and the internal fuse are what we test next.',
      ],
    },
    {
      id: 'sparking',
      heading: 'Microwave sparking inside: metal and the waveguide cover',
      paragraphs: [
        'Stop the cycle at once. Whirlpool notes that arcing caught right away should not damage the oven, but prolonged arcing can. The usual cause is metal: twist ties, foil liners, staples, dishes with gold or silver trim, or a rack that touches the walls.',
        'If it still sparks with nothing metal inside, look at the waveguide cover, the small panel on the cavity wall where the microwave energy enters. LG advises checking it for dirt or damage and calling a technician if it is burnt. A burnt cover, chipped cavity paint or sparking you see outside the cooking cavity, with smoke or a burning smell, needs a diagnosis before the microwave is used again.',
      ],
    },
    {
      id: 'otr-vent-light',
      heading: 'Over-the-range microwave repair: hood fan, cooktop light and filters',
      links: [{ href: '/services/vent-hood-repair', label: 'Vent hood repair' }, { href: '/services/cooktop-repair', label: 'Cooktop repair' }],
      paragraphs: [
        'An over-the-range microwave is your range hood too, and some of its “faults” are designed behavior. If the cooktop below gets too hot, Whirlpool’s vent fan turns on by itself at low speed, can run for up to an hour to cool the microwave, and cannot be switched off until it does. The same fan also runs during every cooking cycle. A light that switches on at odd hours may simply be the Light Timer in the setup menu.',
        'Weak suction usually starts with the filters. GE’s test: turn the fan to HIGH and hold a tissue under the vent; it should stay in place. Whirlpool says to clean the grease filters monthly, and GE says never to run the fan or oven without them. If the microwave recirculates instead of venting outside, the charcoal filter cannot be cleaned: Whirlpool replaces it about every 6 months, GE every 6 to 12 months depending on use, and it is model specific.',
      ],
      bullets: [
        'Cooktop light out: the bulb is replaceable from underneath. Whirlpool says to disconnect power first and use only the bulb type the owner’s manual names.',
        'Fan dead on every speed after a 1 minute breaker reset, a fan that roars or grinds, or a light that fails with a new bulb: those are the fan motor, wiring or control, and we diagnose them on site.',
      ],
    },
    {
      id: 'turntable-controls',
      heading: 'Turntable not turning or keypad not responding',
      paragraphs: [
        'Whirlpool’s first checks for a turntable that does not turn: packaging and tape removed from the hub, the tray and roller support seated correctly (a thumping or rumbling sound points there), and the turntable switched on, since some models let you turn it off for large dishes. LG adds cleaning the roller ring and the floor of the cavity. If the tray is seated and still does not move, LG points to the motor underneath, which may need replacement.',
        'If the buttons do nothing, first make sure Control Lock is off. Then LG suggests wiping the touchpad dry and clean; if it still does not respond, the control panel needs repair. Write down any code in the display before you call.',
      ],
    },
    {
      id: 'repair-or-replace',
      heading: 'Microwave repair or replacement: over-the-range, built-in and countertop',
      paragraphs: [
        'Replacing an over-the-range microwave is more than a swap. GE says current 30 inch models fit the same 30 inch cabinet opening, but each new unit comes with its own mounting bracket, screws and exhaust adapter that must be used, and the top cabinet and duct connection have to be prepared for it. A built-in that sits in a trim kit can only reuse that kit if the new model lists the same trim kit number, and GE warns that a countertop microwave closed into a cabinet without its kit loses airflow and can overheat.',
        `That is why repair usually comes first for these two types. A diagnosis for ${SERVICE_CALL_FEE} tells you which part failed and what the repair costs, and you decide with a price in hand. A cracked door, broken hinges or latches, or damage to the cavity are the cases where we may tell you replacement makes more sense.`,
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does microwave repair cost in Denver?',
      a: `The service call is ${SERVICE_CALL_FEE}. The technician diagnoses the microwave and gives you the repair price before any work starts, so you can compare it with replacement. The total depends on the part: a door switch or turntable motor is a different job from a magnetron.`,
    },
    {
      q: 'Can you repair my microwave today?',
      a: 'Same-day or next-day appointments are available when the schedule allows, across Denver, Aurora, Lakewood, Littleton, Centennial, Arvada, Westminster and the rest of the metro. Have the model number ready when you call.',
    },
    {
      q: 'Is it worth repairing an over-the-range or built-in microwave?',
      a: 'Often, yes. Replacing an over-the-range unit means new mounting hardware and fitting it to the cabinet and duct, and a built-in needs a model that matches the cutout and the trim kit. A countertop microwave is the opposite case: if the repair quote is close to the price of a new one, replace it.',
    },
    {
      q: 'What should I check before I call for microwave repair?',
      a: 'Check that Control Lock and Demo mode are off, reset the breaker for 1 minute, make sure the door closes firmly, and heat one cup of water on full power for 1 to 2 minutes. On an over-the-range unit, clean the grease filters and check the Light Timer before booking a fan or light repair.',
    },
    {
      q: 'Is it safe to use a microwave with a damaged door or that sparks?',
      a: 'No. The FDA says not to operate a microwave if the door does not close firmly or is bent, warped or otherwise damaged, and to stop using it if it keeps running with the door open. If it sparks with no metal inside, unplug it or switch off the breaker and have it checked.',
    },
    {
      q: 'Can I replace a microwave magnetron or capacitor myself?',
      a: 'We do not recommend it. The high-voltage capacitor can hold a dangerous charge after the microwave is off and unplugged, and manufacturer service manuals require it to be discharged before any work. The federally required manual wording says a microwave should be adjusted or repaired only by properly qualified service personnel, and the service checks afterward cover the door seals, hinges, latches and interlocks.',
    },
  ],
};
