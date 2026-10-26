import { SERVICE_CALL_FEE } from '@/lib/utils';
import type { ServiceContent } from '@/lib/data/serviceContent';

export const content: ServiceContent = {
  slug: 'dryer',
  name: 'Dryer',
  title: 'Dryer Repair Denver | No Heat, Not Spinning, Long Dry Times',
  description:
    `Electric and gas dryer repair in Denver Metro: no heat, drum not turning, squealing or thumping, loads that take forever. Diagnosis first, ${SERVICE_CALL_FEE} service call.`,
  intro: [
    'H-Prime repairs electric and gas clothes dryers in homes across the Denver Metro area, including Denver, Aurora, Lakewood, Littleton, Arvada and Highlands Ranch. Dryer trouble usually shows up as one of three complaints: it runs but stays cold, the drum will not turn or makes a new noise, or a load that used to take one cycle now needs two.',
    `We are an independent appliance repair company and work on the brands found in local laundry rooms, such as Whirlpool, Maytag, Kenmore, GE, Samsung, LG, Electrolux and Frigidaire; we are not factory service for any of them. The service call is ${SERVICE_CALL_FEE}: the technician finds the cause first and gives you a price before any work starts.`,
  ],
  sections: [
    {
      id: 'not-heating',
      heading: 'Dryer not heating: electric dryer checks and parts',
      paragraphs: [
        'Start with Whirlpool’s own heat test: pick a heated timed cycle, run the empty dryer for 5 minutes and feel inside. If it is cold, rule out the settings first, because Air Only or Air Fluff tumbles without heat by design. Then go to the panel. An electric dryer runs on a 240 volt, 30 amp circuit fed through two breakers: one runs the motor that turns the drum, the other the heating element. If only one has tripped, the drum turns and the dryer stays cold. GE adds that a dryer can run on 120 volts and still not heat, and that a loose or burned connection where the cord meets the back of the dryer causes the same symptom.',
        'If the power is right, the fault is a part in the heating circuit. The CPSC describes the protection layers in a typical electric dryer: a cycling (operating) thermostat in the exhaust air that switches the heat on and off, a high limit thermostat that cuts the heat if the heater box runs too hot, and a one shot thermal fuse and thermal cut-off that must be replaced once they open.',
      ],
      bullets: [
        'Heating element: the coil that heats the air. If it is broken, or gets 240 volts and still does not heat, it is replaced.',
        'Thermal fuse: usually on the blower housing. It trips when the exhaust gets too hot, typically because the vent is clogged or the outside damper is stuck closed, and it does not reset. On many electric dryers a blown fuse stops the whole dryer.',
        'Cycling thermostat: keeps the drum air at roughly 150°F on Normal. When it fails, the dryer may not heat at all or may run too hot.',
        'A blown fuse is a symptom. If the vent that caused it stays blocked, the new fuse can trip again, so the airflow should be checked along with the part.',
      ],
    },
    {
      id: 'gas-dryer',
      heading: 'Gas dryer not heating: igniter, gas valve coils and Denver altitude',
      links: [{ href: '/services/gas-dryer-repair', label: 'Gas dryer repair in Denver' }],
      paragraphs: [
        'A gas dryer uses the same drum, belt and thermostats, but the heat comes from a burner. Whirlpool’s first check is the gas shutoff valve behind the dryer: the drum turns but nothing heats when it is closed, and it is open when the handle is parallel to the pipe. After that, the burner works as a sequence: the igniter glows, the flame sensor detects that it is hot enough, and the gas valve coils open the valves so the burner lights. If the igniter glows constantly, the flame sensor is the likely suspect; if it glows, fades and no flame appears, or the dryer heats at first and then stops, suspect the coils or a restricted vent. A clicking gas valve and a soft whoosh at ignition are normal.',
        'Altitude is rarely the reason a gas dryer will not heat in Denver. Whirlpool’s gas dryer installation instructions certify the burner for use up to 10,000 feet with no adjustment, and the city sits at 5,280 feet. Gas connections and conversions belong to a qualified technician, and NFPA recommends having the gas line and connection inspected for leaks. For the full burner diagnosis, see our gas dryer repair page.',
      ],
    },
    {
      id: 'not-spinning-noise',
      heading: 'Dryer not spinning or noisy: belt, idler pulley and drum rollers',
      paragraphs: [
        'If the motor hums but the drum does not turn, GE points first to the drive belt, the most common reason a dryer will not spin. Try turning the empty drum by hand: with an intact belt it resists, with a broken or slipped belt it moves freely. A heavy load of wet towels or jeans can also make a belt slip. If the lights are on, nothing hums and the drum is still, the motor itself is the more likely cause.',
        'Noise usually tells you which part is wearing. Before booking, look along the front and rear edges of the drum: Whirlpool notes that coins, pins and screws caught in that seam cause scraping.',
      ],
      bullets: [
        'Squealing or squeaking: Whirlpool says the belt and pulleys wear with age; a worn idler pulley, which keeps tension on the belt, is a common source. Do not oil it, because lubricant attracts lint.',
        'Thumping: a frayed or damaged belt (GE), or drum support rollers with flat spots. After a dryer sits unused, Whirlpool says a light thump that fades as it runs is normal; a thump that stays can point to worn rollers.',
        'Scraping or metal on metal: worn drum glides or a worn felt seal at the front of the drum.',
        'GE suggests replacing the rollers and their axles, glides and bearings together, since a worn set makes the motor and belt work harder.',
      ],
    },
    {
      id: 'long-dry-times',
      heading: 'Dryer takes too long to dry: vent length, lint and fire risk',
      links: [{ href: '/services/washer-repair', label: 'Washer repair' }],
      paragraphs: [
        'Whirlpool calls poor ventilation a leading cause of long dry times. When the vent is restricted, the CPSC found that a dryer can cycle on its high limit thermostat, and damp clothes at the end of the cycle may be the only sign anything is wrong.',
        'Duct length matters as much as lint. The model residential code (IRC section M1502.4.5) caps the exhaust duct at 35 feet unless the dryer maker’s instructions allow a different length, and each 90 degree mitered elbow counts as 5 feet. The flexible transition hose behind the dryer is limited to 8 feet. Whirlpool recommends rigid or semi-rigid metal duct and no plastic or foil accordion hose. In a basement laundry or an interior closet, the run to the outside wall can use up that allowance quickly.',
        'This is a safety issue, not only a utility bill issue. NFPA estimates that in 2014 to 2018 fire departments responded to an average of 13,820 home fires a year involving dryers, with 7 deaths, 344 injuries and $233 million in direct property damage annually. Failure to clean was the leading factor, behind 32 percent of those fires, and dust, fiber or lint was the first item ignited in 27 percent.',
      ],
    },
    {
      id: 'vent-check',
      heading: 'How to check your dryer vent yourself',
      paragraphs: [
        'These are the first things to look at, and none of them needs tools. Unplug the dryer before you move it.',
      ],
      bullets: [
        'Clean the lint screen before or after every load. If dryer sheets leave a film on it, Whirlpool says to wash it with warm water and a soft brush and let it dry.',
        'Pull the dryer out and look at the hose behind it: no kinks, no crushed sections, no plastic or foil. Clear lint from the hose and the wall connection.',
        'Go outside while the dryer runs. The vent flap should open and you should feel strong airflow. Clear lint, nests or debris, and after a Denver snowstorm check that snow is not covering the flap, as NFPA advises.',
        'Look for warning signs Whirlpool lists: loads warm but damp after a full cycle, a hot and humid laundry room, lint around the door seal.',
        'Have the duct cleaned at least once a year (NFPA), or sooner if drying takes longer than it used to.',
      ],
    },
    {
      id: 'repair-or-replace',
      heading: 'When to book a dryer repair, and when to replace',
      paragraphs: [
        'Book a technician when the dryer stays cold after the breaker, cycle and vent checks, the drum will not turn, a new squeal or thump does not go away, or the dryer shuts off mid cycle. Whirlpool also lists error codes and long dry times that persist after cleaning as reasons to schedule service. Have the model number and the length of your vent run ready.',
        'Belts, idler pulleys, rollers, thermal fuses, thermostats, heating elements, igniters and valve coils are individual parts, so most of these repairs replace one part, not the dryer. When the quote comes close to the price of a new dryer, replacing can make more sense, and we will tell you. If you do buy new, ENERGY STAR says heat pump dryers use around 70 percent less energy and need no outside vent.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does dryer repair cost in Denver?',
      a: `The service call is ${SERVICE_CALL_FEE}. The technician diagnoses the dryer and gives you a price before any repair starts. We do not publish flat repair prices because a broken belt and a failed heating element are very different jobs.`,
    },
    {
      q: 'Can I schedule a dryer repair online for the same day?',
      a: 'Yes, you can book online on this page or call. Same-day or next-day appointments are offered when the schedule allows; include the model number and the symptom so the technician arrives with the right parts in mind.',
    },
    {
      q: 'Why is my dryer running but not heating?',
      a: 'On an electric dryer, check that Air Only is not selected and that both dryer breakers are on, because one tripped breaker leaves the drum turning without heat. On a gas dryer, check that the gas valve handle is parallel to the pipe. If those are fine, a heating element, thermal fuse, thermostat, igniter or valve coil has likely failed.',
    },
    {
      q: 'Why does my dryer take so long to dry clothes?',
      a: 'Most often the airflow is restricted: a full lint screen, a crushed hose behind the dryer, a clogged duct or a stuck outside flap. Overloading also slows drying. If the vent is clear and loads are still damp, the heating side needs a diagnosis.',
    },
    {
      q: 'Is a clogged dryer vent dangerous?',
      a: 'Yes. NFPA reports that failure to clean was the leading factor in home dryer fires, accounting for 32 percent of them in 2014 to 2018. Clean the lint screen every load and the vent duct at least once a year.',
    },
    {
      q: 'Do you repair washers too?',
      a: 'Yes. We repair washing machines as well as electric and gas dryers across the Denver Metro area. If both machines have a problem, mention it when you book.',
    },
    {
      q: 'Is it worth repairing an older dryer?',
      a: 'Often, yes. Most dryer failures are a single part such as a belt, roller, fuse or element. Get the diagnosis and quote first; if the repair comes close to the price of a new dryer, replacing it may be the better choice.',
    },
  ],
};
