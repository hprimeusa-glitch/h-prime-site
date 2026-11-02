import { SERVICE_CALL_FEE } from '@/lib/utils';
import type { ServiceContent } from '@/lib/data/serviceContent';

export const content: ServiceContent = {
  slug: 'wine-cooler',
  name: 'Wine cooler',
  title: 'Wine Cooler Repair Denver | Wine Fridge Not Cooling, Noise',
  description:
    `Wine cooler and wine fridge repair in Denver Metro: not cooling, condensation, frost, noise, alarms. Built-in and freestanding units. ${SERVICE_CALL_FEE} service call, price first.`,
  intro: [
    'H-Prime repairs wine coolers, wine fridges and wine refrigerators in homes across the Denver Metro area, including Denver, Cherry Creek, Greenwood Village, Littleton, Centennial, Lakewood and Aurora. That covers freestanding countertop and floor units, undercounter models built into kitchen cabinetry and wine columns in built-in kitchens.',
    `We are an independent appliance repair company, not factory service for any brand. The service call is ${SERVICE_CALL_FEE}: the technician finds the cause first and gives you a price before any work starts. Same-day or next-day appointments are available when the schedule allows, and our technician holds EPA Section 608 Type I certification, the federal certification for refrigerant work on small appliances such as household wine coolers.`,
  ],
  sections: [
    {
      id: 'two-types',
      heading: 'Thermoelectric or compressor: know which wine cooler you have',
      paragraphs: [
        'Most of what goes wrong with a wine cooler depends on how it makes cold, so this is the first thing a technician asks. There are two designs.',
      ],
      bullets: [
        'Thermoelectric units use a solid-state module: an electric current moves heat from one side to the other, so one side gets cold and the other hot. They have no compressor and are nearly vibration free and quiet. Their limit is the room: Allavino rates one of its models at a maximum of 25°F below the surrounding air, and NewAir says most thermoelectric units will not cool below about 50°F and struggle when the room is over 80°F.',
        'Compressor units work like a small refrigerator, with refrigerant, a compressor, a condenser and an evaporator. They hold temperature regardless of a warm room, within the range in their manual, and they can make more noise.',
        'Read the operating range on the label or in the manual. Danby lists 64 to 100°F for one compressor model, Whynter above 60°F and below 90°F for a built-in one, Allavino 50 to 80°F for a thermoelectric one. Every one of those manuals says not to install the unit outdoors or in a space that is not temperature controlled, such as a garage.',
      ],
    },
    {
      id: 'not-cooling',
      heading: 'Wine cooler not cooling: what to check before you call',
      paragraphs: [
        'Sub-Zero recommends waiting 24 hours after turning a unit on or adjusting it before judging the temperature, and notes that a load of new, warmer bottles raises the temperature for a while. U-Line adds that the air temperature on the display is not the temperature of the wine. If it is still warm after a day, go through these checks:',
      ],
      bullets: [
        'Setting and door: confirm the set point, that the door closes fully and that the interior light is not left on. Test the door ajar alarm if your model has one.',
        'Ventilation: a freestanding unit vents heat from the back and needs space around it; Whynter asks for 4 to 6 inches at the back and sides, Danby for 5 inches, and both say a freestanding unit must not be built into a cabinet. Built-in models vent through the front grille at the bottom, so nothing may block it.',
        'Condenser: on a compressor unit, dust on the condenser makes it run long and warm. U-Line says to clean it every six months, Sub-Zero every six to twelve months, with a soft brush or vacuum and no chemical cleaners.',
        'Room temperature: a thermoelectric cooler in a warm room or a sunny spot may simply be at its limit; Allavino’s own troubleshooting says a hot room may need a colder setting.',
      ],
    },
    {
      id: 'needs-tech',
      heading: 'When a wine fridge needs a technician',
      paragraphs: [
        'If the checks above are fine and the unit is still warm, the cause is usually a part. Danby’s troubleshooting for a unit that runs continuously ends with a possible system leak, an evaporator fan failure or a compressor failure, and Sub-Zero’s ends with a service call.',
      ],
      bullets: [
        'Fans: U-Line warns not to block the internal fans, and Danby lists evaporator fan failure among the causes of a unit that runs without cooling. A fan that stops can leave the unit warm even though it seems to run.',
        'Thermoelectric module, its fans or its power supply: when a thermoelectric unit stays near room temperature in a room within its rated range, these are tested.',
        'Compressor, its start components, and the temperature control or sensor that decides when the unit runs.',
        'Sealed system: a leak or a refrigerant restriction. Under EPA Section 608 rules, attaching gauges and adding or removing refrigerant on a small appliance requires Type I certification. Many current units use isobutane (R-600a), which Whynter’s manual describes as environmentally friendly but flammable.',
      ],
    },
    {
      id: 'condensation-frost',
      heading: 'Condensation, water and frost inside a wine cooler',
      paragraphs: [
        'Some moisture is normal. Sub-Zero says condensation on the inside or the shelves is normal when the door has been open for a while, and that high room temperature or humidity can cause more. Compressor units defrost on their own: during the off cycle, frost on the evaporator behind the rear wall melts, runs into a drain at the back and down to a drip tray above the compressor, where its heat evaporates the water. U-Line calls frost on the rear wall normal as long as it melts each cycle.',
        'It is a problem when it does not clear. U-Line says to defrost the unit by hand if frost builds to 1/4 inch or more, and Whynter says a frost pattern that does not clear in 24 hours means manual defrosting; never use an ice pick or a heater, which can puncture the liner. Persistent frost, water on the floor or heavy condensation can point to a door gasket that no longer seals, a blocked drain or a defrost fault. Sub-Zero says a ripped or damaged gasket should be replaced, and that excessive moisture remaining after a condenser cleaning and gasket check needs service.',
        'In Denver the air is usually dry rather than humid: NOAA puts the city’s average relative humidity at 50 percent in the morning and 43 percent in the afternoon, compared with 89 and 59 percent in Houston. Sub-Zero notes that humidity in its wine units is not adjustable, and U-Line points out that current thinking holds the cork surface is too small to be affected by humidity much. Steady temperature matters more.',
      ],
    },
    {
      id: 'noise',
      heading: 'Wine cooler noise and vibration',
      paragraphs: [
        'Manufacturers list a set of normal sounds for compressor units: a hum or pulse from the compressor, gurgling or a sound like boiling liquid as refrigerant moves, cracking or popping as parts expand and contract, fan air and water dripping into the drain pan during defrost. Tile, cabinets and paneled walls make them sound louder.',
        'Whynter says unusual noise is normally the result of improper installation, and Danby lists an unlevel unit first. Adjust the leveling feet, make sure bottles are not touching the back wall or each other and that the unit is not touching cabinetry. A rattle, grinding or loud click that stays after leveling is not on those lists and is worth a diagnosis. Sub-Zero recommends storing wine where there is little vibration, which is one more reason to fix a noisy unit.',
      ],
    },
    {
      id: 'alarms-brands',
      heading: 'Alarms, error codes and built-in brands',
      links: [
        { href: '/brands/sub-zero-repair', label: 'Sub-Zero repair' },
        { href: '/brands/thermador-repair', label: 'Thermador repair' },
        { href: '/services/refrigerator-repair', label: 'Refrigerator repair' },
      ],
      paragraphs: [
        'Displays differ by maker. On one Danby model, HI means the cabinet stayed above 23°C (about 73°F) for an hour and LO means it dropped below freezing, and the door alarm sounds after 5 minutes. On U-Line Wine Captain models, E3 means the door may have been open too long, and other codes go to service. On Sub-Zero units, beeping with the service or wrench icon means a major error has been logged, while the Classic wine storage service indicator also lights when the condenser needs cleaning. Write down the code before you reset anything.',
        'Built-in wine storage from Sub-Zero, Thermador, Monogram, U-Line and Viking is serviced the same way, with closer attention to front ventilation and the cabinetry around it. Sub-Zero rates its Designer, Classic and undercounter wine storage at 39 to 65°F per zone and calls 55°F the ideal long-term storage temperature. We also repair freestanding units from Danby, Whynter, NewAir, Vinotemp, Wine Enthusiast and other brands.',
      ],
    },
    {
      id: 'repair-or-replace',
      heading: 'Repair or replace a wine cooler',
      paragraphs: [
        'A fan, a door gasket, a control or a thermoelectric module is a single part, and a built-in unit also has to be replaced with one that fits the same cabinet opening. A sealed-system repair on an inexpensive countertop unit is where replacement often makes more sense, and we will tell you when the quote gets close to the price of a new one.',
        'If you do buy new, ENERGY STAR now certifies coolers, including wine coolers and beverage centers, and says certified models are up to 20 percent more efficient than the federal minimum. Choose freestanding or built-in for where it will actually stand, and check the ambient range if it is going anywhere other than a heated room.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does wine cooler repair cost in Denver?',
      a: `The service call is ${SERVICE_CALL_FEE}. The technician diagnoses the unit and gives you a price before any repair starts. A fan or gasket and a sealed-system repair are very different jobs, so call for a quote on your model.`,
    },
    {
      q: 'Why is my wine fridge not cooling?',
      a: 'Check the setting, the door seal and the ventilation first: a freestanding unit needs space at the back and sides, and a built-in unit needs a clear front grille. Clean the condenser on a compressor unit. A thermoelectric unit in a warm room may be at its limit. If it is still warm after 24 hours, a fan, module, control or compressor needs a diagnosis.',
    },
    {
      q: 'Do you repair wine refrigerators near me in the Denver area?',
      a: 'Yes. We repair wine coolers and wine refrigerators in homes across the Denver Metro area, including Denver, Cherry Creek, Greenwood Village, Littleton, Centennial, Lakewood and Aurora. Book online on this page or call with the model number and the symptom.',
    },
    {
      q: 'Can a thermoelectric wine cooler be repaired?',
      a: 'Often, yes. Fans, the power supply, the control board and the thermoelectric module are replaceable parts. On a low-cost countertop unit, compare the quote with the price of a new one.',
    },
    {
      q: 'Is water or frost inside my wine cooler normal?',
      a: 'Some condensation after the door has been open, and frost on the rear wall that melts each cycle, are normal. Frost that builds to 1/4 inch, does not clear within a day, or water on the floor points to a gasket, drain or defrost problem.',
    },
    {
      q: 'Can I put my wine cooler in the garage?',
      a: 'Check the manual first. The Danby, Whynter and Allavino manuals say their units are not designed for garages or other spaces that are not temperature controlled, and thermoelectric units in particular follow the room temperature.',
    },
    {
      q: 'Do you repair Sub-Zero and other built-in wine storage?',
      a: 'Yes. We repair built-in and undercounter wine storage from Sub-Zero, Thermador, Monogram, U-Line and Viking, as well as freestanding wine coolers, as an independent company rather than factory service.',
    },
  ],
};
