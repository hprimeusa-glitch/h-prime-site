import { SERVICE_CALL_FEE } from '@/lib/utils';
import type { ServiceContent } from '@/lib/data/serviceContent';

export const content: ServiceContent = {
  slug: 'gas-dryer',
  name: 'Gas dryer',
  title: 'Gas Dryer Repair Denver | No Heat, Igniter, Gas Valve Coils',
  description:
    `Gas dryer repair in Denver Metro: no heat, igniter glows but no flame, heats then stops, blown thermal fuse, propane conversion. ${SERVICE_CALL_FEE} service call, price first.`,
  intro: [
    'H-Prime repairs gas clothes dryers in homes across the Denver Metro area, including Denver, Aurora, Lakewood, Littleton, Arvada, Centennial and Highlands Ranch. This page is about the part that makes a gas dryer different: the burner, the igniter, the flame sensor, the gas valve and the safety devices around them. For belts, rollers, noises and the drum, see our general dryer repair page.',
    `We are an independent appliance repair company and work on the gas dryers found in local laundry rooms, such as LG, GE, Whirlpool, Maytag, Samsung, Kenmore, Electrolux and Speed Queen; we are not factory service for any of them. The service call is ${SERVICE_CALL_FEE}: the technician finds the cause first and gives you a price before any work starts.`,
  ],
  sections: [
    {
      id: 'smell-gas',
      heading: 'If you smell gas, stop here',
      paragraphs: [
        'Natural gas has no smell of its own. Xcel Energy, the gas utility in the Denver area, adds an odorant called mercaptan that people describe as rotten eggs or sulfur, and a leak may also hiss or roar. If you notice that smell near the dryer, do not troubleshoot it and do not book a repair first.',
      ],
      bullets: [
        'Get everyone out of the house and move a safe distance away. Do not use light switches, appliances, phones or the garage door opener on the way out, because a spark can ignite the gas.',
        'From outside, call 911, then Xcel Energy at 800-895-2999. Do not go back in until you are told it is safe.',
        'Dryer makers give the same list in their manuals: do not try to light any appliance, do not touch electrical switches, call the gas supplier from a neighbor’s phone and, if you cannot reach it, the fire department.',
      ],
    },
    {
      id: 'how-it-heats',
      heading: 'How a gas dryer heats, and what each failure looks like',
      paragraphs: [
        'A gas dryer has no standing pilot. When it calls for heat, an igniter glows white hot, a flame sensor next to it detects that the igniter is hot enough, and current then goes to the gas valve coils, which open the valve so the burner lights. Repair Clinic points out that good airflow is vital for the burner flame. Sears PartsDirect describes the patterns:',
      ],
      bullets: [
        'Igniter does not glow at all: the burner never gets power. The cause is in the control circuit: the thermal fuse, the thermal cut-off, the high limit or operating thermostat, or the timer or control.',
        'Igniter glows constantly for about 5 minutes and no flame appears: the flame sensor is not switching the current over to the valve. The flame sensor is the usual replacement.',
        'Igniter glows, fades and goes out without a flame: the gas valve coils are not opening the valve.',
        'Burner lights from a cold start, then the dryer stops heating partway through the cycle: weak gas valve coils. Repair Clinic notes that a coil can fail several minutes into drying while the drum keeps tumbling, so the symptom is long and uneven drying, not a dead dryer.',
      ],
    },
    {
      id: 'check-first',
      heading: 'Gas dryer not heating: what to check yourself before you call',
      paragraphs: [
        'These checks are safe and need no tools. Unplug the dryer before you move it, and do not handle the gas connector itself.',
      ],
      bullets: [
        'Run Whirlpool’s heat test: pick a heated timed cycle, run the empty dryer for 5 minutes and feel inside. Air Only and Air Fluff tumble without heat by design.',
        'Look at the gas shutoff valve behind the dryer. It is open when the handle is parallel to the gas pipe. LG adds that both the house shutoff and the dryer shutoff must be fully open.',
        'Check the breaker. A gas dryer still needs a 120 volt outlet on a 15 or 20 amp circuit for the drum, the controls and the igniter, so a tripped breaker stops everything.',
        'Just installed, or the gas was off for work on the line? Samsung notes that air in the line can keep the burner from lighting at first. If it does not light within 5 minutes, turn the dryer off, wait 5 minutes and confirm the gas is on before trying again.',
        'If the dryer was recently pushed back into place, a kinked connector can choke the gas supply. Do not straighten or bend an old connector yourself: Xcel Energy warns that moving or bending an appliance can crack older uncoated brass fittings.',
        'Clean the lint screen and go outside while the dryer runs: the vent flap should open with strong airflow.',
      ],
    },
    {
      id: 'thermal-fuse',
      heading: 'Blown thermal fuse: a symptom of a clogged vent',
      links: [{ href: '/services/dryer-repair', label: 'Dryer repair: vent length, belts and noises' }],
      paragraphs: [
        'The thermal fuse sits on the blower housing or near the burner and opens when the dryer overheats. It does not reset, so it is replaced. In most gas dryers a blown fuse shuts off only the burner and the drum keeps turning cold; in some models it also stops the motor, so the dryer will not start at all.',
        'Repair Clinic names lint in the exhaust vent as the number one cause, and Sears PartsDirect says the same: more often than not, a blown fuse means the vent is clogged. A new fuse in front of a blocked vent tends to blow again, so the vent is cleaned before the dryer goes back into service. On gas models the high limit thermostat comes in the same thermal cut-off kit.',
        'On a gas dryer the vent also carries combustion gases. LG states that gas dryers must exhaust to the outdoors, and ENERGY STAR notes that gas dryers are always vented because of the safety risks of burning gas.',
      ],
    },
    {
      id: 'carbon-monoxide',
      heading: 'Carbon monoxide and the burner flame',
      paragraphs: [
        'Xcel Energy explains that natural gas can produce carbon monoxide when it burns incompletely or is not vented properly, and lists blocked vents among the causes; the Minnesota Department of Health includes clothes dryers among household sources of carbon monoxide. The CDC lists headache, dizziness, weakness, upset stomach, vomiting, chest pain and confusion as the most common symptoms. If an alarm sounds or several people feel that way at once, get outside and call 911.',
        'A healthy burner flame is soft and mostly blue; Alliance Laundry Systems, which makes Speed Queen, notes that a lazy, yellow-tipped flame indicates a lack of air. CPSC recommends carbon monoxide alarms on every level of the home and outside sleeping areas, and never using a gas dryer, range or oven to heat the home. Colorado law requires a carbon monoxide alarm within 15 feet of each bedroom in homes with fuel-fired appliances when the home is sold and when a fuel-fired appliance is replaced or repaired under a building permit.',
      ],
    },
    {
      id: 'altitude-propane',
      heading: 'Denver altitude, propane and the gas connection',
      paragraphs: [
        'Denver’s official elevation is 5,280 feet, and how a gas dryer handles that depends on the model. Whirlpool, Maytag and GE installation instructions call for a 4 percent reduction of the burner rating for every 1,000 feet above 2,000 feet. LG states that its dryer rating is certified for elevations below 10,000 feet. A technician checks the rating plate and the instructions for your model rather than assuming one rule fits every dryer.',
        'Dryers ship set up for natural gas, and the rating plate in the door well shows which gas the burner is for. Running on propane requires the maker’s conversion kit, installed by a qualified technician; GE and LG say the same.',
        'The connection has its own rules. GE and Samsung require a new certified flexible connector and say never to reuse an old one; GE caps its length at 4 feet. Leaks are tested with a soapy solution, never with a flame. In Denver, repairing a dryer usually needs no permit, but the 2025 Denver Building Code requires a mechanical permit when a natural gas line is disconnected and reconnected, with an exception for replacing a gas valve with a like unit.',
      ],
    },
    {
      id: 'repair-or-replace',
      heading: 'When to book a gas dryer repair, and when to replace',
      links: [{ href: '/services/washer-repair', label: 'Washer repair' }],
      paragraphs: [
        'Book a technician when the dryer stays cold after the valve, breaker and cycle checks, the igniter pattern points to a sensor or coils, the fuse has blown, or the dryer heats and then stops. LG says disassembly requires a qualified service technician, and CPSC warns never to service combustion appliances without the proper knowledge, skills and tools. Have the model number ready, and note what the igniter did if you could see it.',
        'Igniters, flame sensors, valve coils, thermal fuses and thermostats are individual parts, so most gas dryer repairs replace one part. Consumer Reports’ survey puts the median gas dryer repair at $116 to $200 depending on the price class of the dryer, and its rule of thumb is not to spend more than half the price of a new one on a repair. We quote after the diagnosis. ENERGY STAR notes that gas dryers tend to cost less to run than electric ones, which is worth weighing before switching fuel.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does gas dryer repair cost in Denver?',
      a: `The service call is ${SERVICE_CALL_FEE}, and you get a price after the diagnosis, before any work. For a general market reference, Consumer Reports’ survey found median gas dryer repair costs of $116 to $200 depending on the dryer’s price class. Call for a quote on your model.`,
    },
    {
      q: 'Why is my gas dryer not heating but still spinning?',
      a: 'Check that the gas valve handle is parallel to the pipe and that Air Only is not selected. If both are fine, the usual causes are a blown thermal fuse (often from a clogged vent), a failed igniter, a flame sensor or weak gas valve coils.',
    },
    {
      q: 'The igniter glows but the burner will not light. What is wrong?',
      a: 'If the igniter stays lit for several minutes with no flame, the flame sensor is the likely part. If it glows, fades and goes out without a flame, the gas valve coils are suspect. Both are replaceable parts.',
    },
    {
      q: 'Why does my gas dryer heat and then stop?',
      a: 'Weak gas valve coils are the classic cause: the burner lights from a cold start but will not relight later in the cycle. A restricted vent that keeps tripping the thermostats can look similar, so the vent is checked too.',
    },
    {
      q: 'Who fixes gas dryers near me?',
      a: 'H-Prime repairs gas dryers in homes across the Denver Metro area, including Denver, Aurora, Lakewood, Littleton, Arvada and Centennial. Book online on this page or call with the model number and the symptom.',
    },
    {
      q: 'Can you repair LG, GE and Samsung gas dryers?',
      a: 'Yes. We work on LG, GE, Samsung, Whirlpool, Maytag, Kenmore, Electrolux and Speed Queen gas dryers, as an independent company rather than factory service.',
    },
    {
      q: 'Should I repair or replace my gas dryer?',
      a: 'Most gas dryer failures are a single part such as an igniter, sensor, coil set or fuse. Get the diagnosis and quote first; Consumer Reports suggests replacing when the repair would cost more than half the price of a new dryer.',
    },
  ],
};
