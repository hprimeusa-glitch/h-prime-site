/**
 * Hand-written brand pages. A brand listed here renders the deep layout in
 * app/brands/[brand]/page.tsx; every other brand keeps the generic template.
 *
 * Every page is written against the actual Search Console queries for that brand
 * (90 days to 2026-09-18) and only states what can be verified: brand ownership,
 * documented error codes, published warranty terms, our own advertised prices and
 * reviews that exist on the Google profile. No invented prices, no track-record
 * claims, no manufacturer authorisation we do not hold.
 */

import { SERVICE_CALL_FEE } from '@/lib/utils';

export interface BrandSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BrandFaq {
  q: string;
  a: string;
}

export interface BrandContent {
  slug: string;
  name: string;
  /** <title>, up to ~60 characters */
  title: string;
  /** meta description, up to ~160 characters */
  description: string;
  h1: string;
  subtitle: string;
  intro: string[];
  sections: BrandSection[];
  faqs: BrandFaq[];
  /** heading above the brand's own reviews, when any exist */
  reviewsTitle?: string;
}

export const brandContent: Record<string, BrandContent> = {
  thermador: {
    slug: 'thermador',
    name: 'Thermador',
    title: 'Thermador Repair Denver | Dishwasher, Oven, Refrigerator',
    description:
      'Independent Thermador appliance repair across the Denver Metro area: dishwashers with E15 / E24 codes, ovens and ranges, built-in refrigerator columns, cooktops. Same-day service, $75 service call.',
    h1: 'Thermador Appliance Repair in Denver',
    subtitle: 'Dishwashers, ovens and ranges, built-in refrigeration, cooktops • Same-day service • $75 service call',
    intro: [
      'Thermador is the premium line of BSH Home Appliances, the same group that makes Bosch and Gaggenau. That matters for repair: a Thermador dishwasher shares its platform and its error codes with Bosch, while the ovens, ranges, cooktops and Freedom refrigerator columns are their own engineering with their own parts. H-Prime services all of them across the Denver Metro area, from Highlands Ranch and Cherry Hills Village to Arvada and Broomfield.',
      'We are an independent repair company, not a Thermador factory-authorized servicer. If your appliance is still inside its Thermador warranty, warranty work has to go through their authorized network. Once it is out of warranty, an independent technician who knows the platform is usually faster to get and gives you a price before any work starts. The service call is ' +
        '$75, and you get a diagnosis and a quote before we touch a part.',
    ],
    sections: [
      {
        id: 'dishwasher',
        heading: 'Thermador dishwasher repair: what the E-codes mean',
        paragraphs: [
          'Thermador dishwashers run on the BSH platform, so the codes on the display are the same ones Bosch owners see. Most of them point at the drain side of the machine, and two of them you can clear yourself before calling anyone.',
          'A Denver detail that changes the advice: much of the metro has moderately hard water. Scale builds up on the filter, the spray arms and the heater faster than the manual assumes, so a dishwasher that has never been descaled is the one that starts throwing drain and heating codes.',
        ],
        bullets: [
          'E22: the filter is blocked. Pull the cylinder filter out of the sump, rinse it, seat it back until it locks. This one is on you, not us.',
          'E24 / E25: the drain pump is blocked or its cover is loose. Check the drain hose for a kink, take the pump cover off and clear whatever fell in. If it comes back after that, the pump itself is the problem.',
          'E15: water in the base pan has tripped the leak protection. Switch the power off and look for the leak. Sometimes it is a one-time spill from an overfilled detergent dispenser; if the code returns, there is a real leak and the machine needs a technician before it damages the floor.',
          'E09: internal heater fault. A power reset is the only thing to try; if the code stays, the heater or its control needs replacing.',
          'No code, just poor washing: check the spray arms for scale and food debris first, then the filter. If both are clean and glasses still come out cloudy, the circulation pump or the heater is not doing its job.',
        ],
      },
      {
        id: 'oven-range',
        heading: 'Thermador oven, range and cooktop repair',
        paragraphs: [
          'Thermador Pro Grand and Pro Harmony ranges, the wall ovens and the induction and gas cooktops are where the brand earns its reputation, and they are also the appliances where a wrong part costs the most. The failures that bring them into repair are the same few every time: an ignitor that clicks but will not light, a burner that lights and then goes out, an oven that heats unevenly or not at all, a control panel that goes dark, and door hinges that no longer hold the door flat.',
          'Denver sits at 5,280 feet, and gas appliances behave differently up here. A range that was set up for sea level runs rich at altitude, which shows up as yellow, lazy flames, soot on the bottom of pans and burners that struggle to stay lit on low. Thermador publishes high-altitude conversion for its gas models; if yours was never converted after installation, that is the first thing we check.',
          'Electric and induction faults come down to the control board, the relay board and the temperature sensor. A broiler that works while the bake element stays cold, or an oven that reports a temperature far from what an oven thermometer shows, is a sensor or relay problem, not a reason to replace a $5,000 range. Thermador ranges report faults as F-codes on the display; note the code before you call, it shortens the diagnosis.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'Thermador Freedom refrigerator and freezer column repair',
        paragraphs: [
          'Freedom columns and the built-in bottom-freezer models are sealed into cabinetry, which is exactly why they need a technician who has taken one apart before. The refrigerator and freezer sections run as separate systems, so when one side warms while the other stays cold, the usual suspects are the evaporator fan on the warm side, an evaporator that has iced over because the defrost cycle stopped running, or the control board that manages both.',
          'Ice makers are the other frequent call. Low output, small or hollow cubes and no ice at all usually trace to the water inlet valve, the fill tube freezing, or the filter and water pressure, and less often to the ice maker module itself. We check the cheap causes first.',
          'A compressor that runs constantly without cooling, or that does not run at all, is a sealed-system repair. Before authorizing that on a built-in, it is worth a diagnosis: sealed-system parts often carry longer coverage than the rest of the appliance, so check your Thermador warranty card and the purchase date before deciding between repair and replacement.',
        ],
      },
      {
        id: 'authorized',
        heading: 'Thermador authorized repair vs. an independent technician',
        paragraphs: [
          'A lot of the searches that bring people to this page ask for authorized Thermador repair. Here is the honest answer. Thermador authorizes a network of servicers to perform warranty work and to order some parts through their channel. H-Prime is not part of that network. What we do is repair Thermador appliances that are out of warranty, or whose owners would rather pay for a fast independent visit than wait for a factory appointment, with parts sourced for the specific model number.',
          'If your appliance is under warranty, call Thermador first: paying an independent for a repair the manufacturer would have covered makes no sense. If it is not, or the warranty visit is weeks away and the refrigerator is warm today, that is where we come in.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Thermador repair across the Denver Metro area',
        paragraphs: [
          'Thermador kitchens cluster in the newer and higher-end parts of the metro, and that is where most of our Thermador calls come from: Highlands Ranch, Castle Pines, Lone Tree, Greenwood Village, Cherry Hills Village, Cherry Creek and Central Park in Denver, plus Golden, Arvada, Broomfield and Westminster on the north and west side. Same-day appointments depend on where you are and what is broken; when you call, tell us the model and the symptom and we will tell you the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you a Thermador authorized repair service?',
        a: 'No. H-Prime is an independent appliance repair company. Warranty repairs must go through Thermador’s authorized servicers; out-of-warranty repairs are what we do, with parts sourced for your model number and a quote before any work.',
      },
      {
        q: 'How much does Thermador repair cost in Denver?',
        a: 'The service call is $75. After the diagnosis you get a written price for the repair before we start, so the only unknown is what we find. We do not publish repair prices because they depend on the model and the part; a Thermador control board and a door hinge are not the same job.',
      },
      {
        q: 'My Thermador dishwasher shows E24. Do I need a repair?',
        a: 'Not always. E24 and E25 mean the drain pump is blocked or its cover is loose. Clear the filter, check the drain hose for a kink and remove debris from the pump area. If the code returns after that, the pump or the drain path needs a technician.',
      },
      {
        q: 'Which Thermador appliances do you repair?',
        a: 'Dishwashers, wall ovens, Pro ranges, gas and induction cooktops, Freedom refrigerator and freezer columns, built-in refrigerators, ice makers, microwaves, ventilation hoods and wine columns.',
      },
      {
        q: 'Do you offer same-day Thermador repair?',
        a: 'Often, yes. Same-day depends on where you are in the metro and what is broken. Call before noon with the model number and the symptom and we will give you the earliest realistic time.',
      },
      {
        q: 'Should I repair or replace an older Thermador range?',
        a: 'A Thermador range is built to be repaired: ignitors, sensors, relay boards and hinges are all replaceable parts. Replacement only starts to make sense when the control board is no longer available for that model or the sealed cooktop glass is broken. We tell you which case you are in after the diagnosis.',
      },
    ],
  },

  lg: {
    slug: 'lg',
    name: 'LG',
    title: 'LG Appliance Repair Denver | Dryer, Dishwasher, Refrigerator',
    description:
      'LG appliance repair across the Denver Metro area: dryers with D80 / D90 codes, dishwashers, washers with OE / IE / UE codes, refrigerators with linear compressor issues. Same-day service, $75 service call.',
    h1: 'LG Appliance Repair in Denver',
    subtitle: 'Dryers, dishwashers, washers, refrigerators • Same-day service • $75 service call',
    reviewsTitle: 'What LG owners in Denver say',
    intro: [
      'LG builds its own compressors, direct-drive motors and control electronics, which is why LG appliances fail in LG-specific ways and are repaired with LG-specific parts. H-Prime services the full LG line across the Denver Metro area: front-load and top-load washers, gas and electric dryers, dishwashers, French-door and side-by-side refrigerators, ranges and microwaves.',
      'This page is organised around the problems people actually search for: the D80 code on the dryer, the OE and IE codes on the washer, a dishwasher that stops mid-cycle, and the refrigerator that stops cooling. For each one you will find what the code means, what you can check yourself in five minutes, and when it is time to book. The service call is $75 and you get a price before any repair starts.',
    ],
    sections: [
      {
        id: 'dryer',
        heading: 'LG dryer repair: D80, D90, D95 and no heat',
        paragraphs: [
          'The D80, D90 and D95 codes are LG’s Flow Sense system telling you the exhaust duct is restricted: roughly 80, 90 or 95 percent blocked. At D80 the dryer keeps running but takes longer; at D90 and D95 most models cool down and stop to prevent overheating. The dryer is not broken. The vent is. Clean the lint screen, disconnect the duct behind the dryer and clear it, and check the outside vent flap. If the code comes back on a clean duct, the airflow sensor or the blower housing needs attention, and that is a repair visit.',
          'A dryer that runs but does not heat is a different job. On electric LG models it is usually the heating element or the thermal fuse; on gas models the ignitor, the flame sensor or the gas valve coils. A dryer that heats but the drum will not turn is the belt or the motor. All of these are standard repairs with a known price once the diagnosis is done.',
        ],
      },
      {
        id: 'washer',
        heading: 'LG washer repair: OE, IE, UE, dE and LE codes',
        paragraphs: [
          'LG washers report clearly, which makes the first check easy.',
        ],
        bullets: [
          'OE: the washer did not drain in time. Pull the small door at the bottom front, drain the reservoir and clean the pump filter; a coin or a sock is the usual cause. If the filter is clean and OE returns, the drain pump has failed.',
          'IE: the washer is not filling. Both supply valves open? Inlet screens clean? Water pressure normal? If yes, the inlet valve on the machine needs replacing.',
          'UE: unbalanced load. Redistribute the load, and if it happens on every cycle with a normal load, the suspension or the level of the machine is the problem.',
          'dE: the door is not closing or locking. Check for a trapped item in the seal; a latch that has physically worn out is a quick part swap.',
          'LE: motor or sensor fault on direct-drive models. Unplug for a few minutes and restart with a smaller load. A repeat LE is a hall sensor or motor problem and needs a technician.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'LG refrigerator repair and the linear compressor',
        paragraphs: [
          'LG French-door and side-by-side refrigerators built around the linear compressor were the subject of a class action over compressors failing early and the refrigerator losing cooling. If your LG is warm on both sides, the compressor runs hot and constantly, or it clicks and never starts, that is the first thing to rule in or out.',
          'Before you assume the worst, check the warranty. LG’s sealed-system terms changed in 2018: on many models the linear compressor part is covered for ten years, with labor covered for five, and the sealed system as a whole for five years parts and labor. Whether a given unit falls under those terms depends on the model and purchase date, so read the warranty card that came with the refrigerator, or call LG with the serial number, before paying anyone for a compressor.',
          'Not every warm LG is a compressor. A refrigerator section that warms while the freezer stays cold is usually the evaporator fan or a frosted-over evaporator from a failed defrost cycle, both of which are ordinary repairs. Ice makers that stop, produce small cubes or leak are the other common LG call; the fix is most often the water inlet valve, the fill tube or the filter, and only sometimes the ice maker itself.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'LG dishwasher repair',
        paragraphs: [
          'LG dishwashers that stop mid-cycle, will not drain or leave dishes wet usually come down to three things: the drain pump and filter, the heater, and the control board. Start with the filter under the lower rack; scale and food debris are the most common reason for poor washing and for drain codes, and Denver’s moderately hard water makes that faster than the manual suggests. If cleaning does not change anything, book a visit and mention the code on the display if there is one.',
        ],
      },
      {
        id: 'service-area',
        heading: 'LG appliance repair across the Denver Metro area',
        paragraphs: [
          'We service LG appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Englewood, Highlands Ranch, Parker, Castle Rock and the rest of the metro. Same-day appointments are usually available for washers, dryers and refrigerators when you call in the morning; tell us the model number from the sticker inside the door and the code on the display, and we will bring the likely parts.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does LG appliance repair cost in Denver?',
        a: 'The service call is $75. After the diagnosis you get a written price for the repair before we start. Repair prices depend on the part: an LG drain pump, a dryer heating element and a linear compressor are very different jobs, which is why we quote after seeing the machine rather than publishing a list.',
      },
      {
        q: 'My LG dryer shows D80. Is it broken?',
        a: 'Almost never. D80 means the exhaust duct is about 80 percent blocked. Clean the lint screen and the duct behind the dryer, and check the outside vent. If the code comes back on a clean vent, the airflow sensor needs checking and that is a repair visit.',
      },
      {
        q: 'Is my LG refrigerator compressor covered under warranty?',
        a: 'Possibly. On many LG models with the linear compressor the compressor part is covered for ten years and labor for five, under terms LG introduced in 2018. It depends on the model and the purchase date, so check the warranty card or call LG with the serial number before paying for a compressor replacement.',
      },
      {
        q: 'Are you an LG authorized service center?',
        a: 'No. We are an independent repair company. Warranty repairs go through LG’s own service network; we repair LG appliances that are out of warranty or whose owners want a faster independent visit.',
      },
      {
        q: 'Do you repair LG washers with the OE code?',
        a: 'Yes. Clean the pump filter behind the small door at the bottom front first; that clears most OE codes. If it returns, the drain pump has failed and we replace it.',
      },
      {
        q: 'Which LG appliances do you service?',
        a: 'Front-load and top-load washers, gas and electric dryers, WashTower units, dishwashers, French-door and side-by-side refrigerators, ranges, ovens and microwaves.',
      },
    ],
  },

  ge: {
    slug: 'ge',
    name: 'GE',
    title: 'GE Appliance Repair Denver | Dryer, Dishwasher, Oven',
    description:
      'GE, GE Profile, Cafe and Monogram appliance repair across the Denver Metro area: dryers that stop heating, dishwashers with C-codes, ovens with F-codes, refrigerators. Same-day service, $75 service call.',
    h1: 'GE Appliance Repair in Denver',
    subtitle: 'GE, GE Profile, Café, Monogram • Same-day service • $75 service call',
    reviewsTitle: 'What GE owners in Denver say',
    intro: [
      'GE Appliances has been owned by Haier since 2016 and still builds most of its major appliances in the United States. The brand family covers GE, GE Profile, Café and Monogram, plus Hotpoint at the entry level, and they share platforms and parts. If you have any of them, this page applies. H-Prime repairs the whole family across the Denver Metro area: dryers, washers, dishwashers, ranges, wall ovens, refrigerators and microwaves.',
      'The searches that bring GE owners here are specific: a dryer that stopped heating, a dishwasher blinking a code, an oven showing F2 or F7, a refrigerator that is warm. Below is what each one usually means, what you can check yourself, and when to book. The service call is $75 and you get a price before any repair starts.',
    ],
    sections: [
      {
        id: 'dryer',
        heading: 'GE dryer repair: no heat, no spin, long dry times',
        paragraphs: [
          'GE dryers are the single most common GE call, and the failures are predictable. A dryer that runs but does not heat is almost always the heating element or the thermal fuse on electric models, and the ignitor, flame sensor or gas valve coils on gas models. A dryer that hums but the drum does not turn is the belt or the drum bearing. A dryer that stops mid-cycle and restarts later is overheating from a blocked vent or a failing thermostat.',
          'Before booking, check the vent. Long dry times with a hot dryer are a restricted exhaust, not a broken dryer: clean the lint screen, pull the duct off the back and clear it, and look at the outside flap. If the dryer still takes two cycles on a clean vent, the element is weak or a thermostat is cutting out early, and that is a repair.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'GE dishwasher repair and the C-codes',
        paragraphs: [
          'GE dishwashers report faults as C-codes on models with a display, and as blinking lights or beeps on models without one. C2 means the drain took longer than seven minutes; C7 means the water temperature sensor circuit is not responding. A dishwasher that will not drain is the filter, the drain hose or the drain pump, in that order of likelihood and cost. One that leaves dishes dirty is scale on the spray arms and the filter first, then the circulation pump.',
          'Much of the Denver metro has moderately hard water, and GE dishwashers that have never been descaled are the ones that start failing on heating and drain. Cleaning the filter and running a descaling cycle is worth doing before you call; if it changes nothing, the problem is mechanical.',
        ],
      },
      {
        id: 'oven',
        heading: 'GE oven and range repair: F2, F7 and uneven heat',
        paragraphs: [
          'F2 on a GE oven means the control has seen a temperature above its safety limit, which points at the temperature sensor or the control board. F7 is a keypad or control board fault, usually a stuck key. An oven where the broiler works but bake does not, or that runs far from the set temperature, is a relay or a sensor, not a reason to replace the range.',
          'Denver is a mile up, and GE gas ranges set up for sea level run rich at altitude: yellow lazy flames, soot on pans, burners that struggle on low. GE publishes high-altitude conversion for its gas models. If yours was installed without it, that is the first thing we check.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'GE refrigerator repair',
        paragraphs: [
          'A GE refrigerator that is warm on the fresh-food side while the freezer is cold is usually the evaporator fan or a frosted evaporator from a defrost cycle that stopped running; both are ordinary repairs. Warm on both sides with the compressor running constantly is a sealed-system problem and needs a diagnosis before anyone quotes a compressor. Ice makers that stop or produce small cubes are most often the water inlet valve, the filter or a frozen fill tube.',
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: where the GE model tag is and what to have ready',
        paragraphs: [
          'A repair goes faster when we arrive with the right part, and that starts with the model number. On GE dishwashers the tag is on the edge of the door or the side of the tub, visible with the door open. On refrigerators it is inside the fresh-food section, on the wall or the ceiling. On dryers and washers it is inside the door frame or on the back panel. On ranges it is behind the storage drawer, on the frame, or inside the oven door. The tag carries a model and a serial number; we need both.',
          'Then note three things: the exact symptom (no heat, will not drain, warm on one side), any code on the display, and whether the problem is constant or comes and goes. If the appliance is under three years old, find the receipt: GE and the retailer may still owe you a warranty repair, and we would rather tell you that than charge you for it.',
        ],
      },
      {
        id: 'service-area',
        heading: 'GE appliance repair across the Denver Metro area',
        paragraphs: [
          'We service GE, GE Profile, Café and Monogram appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Northglenn, Commerce City, Littleton, Centennial, Englewood, Highlands Ranch, Parker and Castle Rock. Colorado Springs is outside our service area. Same-day appointments are usually available for dryers and refrigerators when you call in the morning.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does GE appliance repair cost in Denver?',
        a: 'The service call is $75. After the diagnosis you get a written price before any repair starts. We quote per job rather than publishing a price list, because a GE dryer thermal fuse and a GE refrigerator compressor are not comparable repairs.',
      },
      {
        q: 'My GE dryer runs but there is no heat. What is it?',
        a: 'On electric models it is almost always the heating element or the thermal fuse; on gas models the ignitor, flame sensor or gas valve coils. Check the vent first if the dryer heats but dries slowly. Both are standard repairs.',
      },
      {
        q: 'What does F2 or F7 mean on a GE oven?',
        a: 'F2 means the oven temperature went above the control’s safety limit, which points at the temperature sensor or the control board. F7 is a keypad or control board fault. Neither is a reason to replace the range; both are diagnosable and repairable.',
      },
      {
        q: 'Do you repair GE Profile, Café and Monogram appliances?',
        a: 'Yes. They belong to GE Appliances and share platforms and parts with the GE line. Monogram built-in refrigeration and Café ranges are serviced the same way, with parts matched to the model number.',
      },
      {
        q: 'Are you a GE authorized service provider?',
        a: 'No. We are an independent repair company. Warranty repairs go through GE Appliances’ own factory service; we repair GE appliances that are out of warranty or whose owners want a faster independent visit.',
      },
      {
        q: 'Do you offer same-day GE repair?',
        a: 'Usually, for dryers, washers and refrigerators, when you call in the morning. Tell us the model number from the sticker inside the door and the symptom, and we will bring the likely parts.',
      },
    ],
  },

  whirlpool: {
    slug: 'whirlpool',
    name: 'Whirlpool',
    title: 'Whirlpool Appliance Repair Denver | Washer, Dryer, Dishwasher',
    description:
      'Whirlpool, Maytag, KitchenAid and Amana appliance repair across the Denver Metro area: washers with F21 / F5 E2 codes, dryers, dishwashers, ovens, refrigerators. Same-day service, $75 service call.',
    h1: 'Whirlpool Appliance Repair in Denver',
    subtitle: 'Whirlpool, Maytag, KitchenAid, JennAir, Amana • Same-day service • $75 service call',
    reviewsTitle: 'What Whirlpool owners in Denver say',
    intro: [
      'Whirlpool Corporation owns Maytag, KitchenAid, JennAir, Amana and Roper, and most of those appliances are built on shared Whirlpool platforms with shared parts and shared error codes. So if your Maytag washer shows F21 or your KitchenAid dishwasher will not drain, this page applies to you. H-Prime repairs the whole Whirlpool family across the Denver Metro area: washers, dryers, dishwashers, ranges, wall ovens, refrigerators and microwaves.',
      'The page is organised around what Whirlpool owners in Denver actually search for: a washer with an F-code, a dryer that stopped heating, a dishwasher that will not drain, an oven that heats wrong. For each you get what it means, what to check yourself, and when to book. The service call is $75 and you get a price before any repair starts.',
    ],
    sections: [
      {
        id: 'washer',
        heading: 'Whirlpool washer repair: F21, F02, F5 E2, F20',
        paragraphs: [
          'Whirlpool front-load washers report clearly, and the codes are documented by Whirlpool itself.',
        ],
        bullets: [
          'F21 or F02: long drain. The washer could not empty in time. Check the drain hose for a kink and clean the pump filter behind the lower front panel; a coin, a hair tie or a sock is the usual cause. If the filter is clean and the code returns, the drain pump has failed.',
          'F5 E2: the door will not lock. Look for something caught in the seal or the latch. A latch that has physically worn out is a quick part swap.',
          'F5 E3: the door will not unlock. Wait a few minutes for the cycle to release; if it stays locked, the lock assembly needs replacing.',
          'F20: no or not enough water coming in. Both supply valves open, inlet screens clean, water pressure normal? Then the inlet valve on the washer is the problem.',
          'Top-load washers that will not spin or agitate usually have a worn drive block, a failed lid switch or a bad actuator; all are standard repairs.',
        ],
      },
      {
        id: 'dryer',
        heading: 'Whirlpool and Maytag dryer repair',
        paragraphs: [
          'A dryer that runs without heat is the heating element or the thermal fuse on electric models and the ignitor or gas valve coils on gas models. A dryer that heats but takes two cycles is a restricted vent: clean the lint screen and the duct behind the dryer before you call. A drum that does not turn is the belt, the idler pulley or the drum rollers. One of the Whirlpool reviews on this page is a dog rescue whose dryer heater was replaced within 40 minutes of arrival; that is what this repair normally looks like when the part is on the truck.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'Whirlpool and KitchenAid dishwasher repair',
        paragraphs: [
          'Whirlpool and KitchenAid dishwashers that will not drain, leave dishes wet or do not start come down to a few parts: the drain pump and filter, the heater and its thermostat, the circulation pump, the door latch and the control board. Standing water after a cycle is the filter, the drain hose or the air gap before it is the pump. Dishes that stay wet with the heated-dry option on point at the heater. A dishwasher that does nothing when you press Start is usually the door latch switch.',
          'Denver’s moderately hard water leaves scale on spray arms and filters faster than the manual assumes. If your dishwasher has never been descaled, do that and clean the filter before booking; if washing is still poor, the problem is mechanical.',
        ],
      },
      {
        id: 'oven-refrigerator',
        heading: 'Whirlpool oven, range and refrigerator repair',
        paragraphs: [
          'Whirlpool and Maytag ovens that heat unevenly, run far from the set temperature or bake while the broiler works are a temperature sensor, a relay or the control board, all repairable parts. Gas ranges in Denver run rich at altitude if they were never converted after installation: yellow flames and soot on pans are the sign, and Whirlpool publishes high-altitude kits for its gas models.',
          'Refrigerators that warm on the fresh-food side while the freezer holds are usually the evaporator fan or a frosted evaporator from a failed defrost; warm on both sides with the compressor running constantly is a sealed-system problem that needs a diagnosis before anyone quotes a compressor. Ice makers that stop are most often the inlet valve, the filter or a frozen fill tube.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Whirlpool warranty and when to call us',
        paragraphs: [
          'Whirlpool’s standard coverage on major appliances in the United States is one year of parts and labor from the purchase date, with longer coverage on specific components for some models. If your appliance is inside that first year, call Whirlpool first: warranty repairs go through their service network, and H-Prime is an independent company, not a Whirlpool authorized servicer. Once the appliance is out of warranty, or the warranty appointment is a week away and the washer is full of water today, an independent technician is the faster route.',
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: the Whirlpool model tag and what to have ready',
        paragraphs: [
          'Whirlpool, Maytag and KitchenAid parts are ordered by model number, and a wrong digit means a second visit. On front-load washers and dryers the tag is inside the door frame; on top-loaders under the lid. On dishwashers it is on the edge of the door or the side of the tub. On refrigerators it is inside the fresh-food section, usually on the left wall or the ceiling. On ranges it is behind the storage drawer or inside the oven door frame. Read us the model and the serial number, the code on the display if there is one, and the symptom in one sentence: the technician then arrives with the likely part on the truck instead of ordering it after the diagnosis.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Whirlpool repair across the Denver Metro area',
        paragraphs: [
          'We service Whirlpool, Maytag, KitchenAid, JennAir and Amana appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Englewood, Highlands Ranch, Parker, Castle Rock and Broomfield. Same-day appointments are usually available for washers, dryers and refrigerators when you call in the morning.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does Whirlpool appliance repair cost in Denver?',
        a: 'The service call is $75. After the diagnosis you get a written price before any repair starts. We quote per job rather than publishing a list, because a Whirlpool door latch and a Whirlpool drain pump are different repairs.',
      },
      {
        q: 'What does F21 mean on my Whirlpool washer?',
        a: 'Long drain: the washer could not empty in time. Clean the pump filter behind the lower front panel and check the drain hose for a kink. If the code returns on a clean filter, the drain pump has failed and needs replacing.',
      },
      {
        q: 'Do you repair Maytag, KitchenAid, JennAir and Amana?',
        a: 'Yes. They belong to Whirlpool Corporation and share platforms and parts with the Whirlpool line, so the diagnosis and the repair are the same.',
      },
      {
        q: 'Are you a Whirlpool authorized service provider?',
        a: 'No. We are an independent repair company. Warranty repairs in the first year go through Whirlpool’s service network; we repair Whirlpool appliances that are out of warranty or whose owners want a faster independent visit.',
      },
      {
        q: 'My Whirlpool dryer runs but does not heat. What is wrong?',
        a: 'On electric models it is almost always the heating element or the thermal fuse; on gas models the ignitor or the gas valve coils. If the dryer heats but dries slowly, clean the vent first. Both are standard repairs.',
      },
      {
        q: 'Do you offer same-day Whirlpool repair?',
        a: 'Usually, for washers, dryers and refrigerators, when you call in the morning. Give us the model number from the sticker inside the door and the code on the display, and we will bring the likely parts.',
      },
    ],
  },

  bosch: {
    slug: 'bosch',
    name: 'Bosch',
    title: 'Bosch Appliance Repair Denver | Dishwasher E15, E24, Refrigerator',
    description:
      'Bosch appliance repair across the Denver Metro area: dishwashers showing E15, E22, E24, E25 or E09, refrigerators that stop cooling, ovens, washers and dryers. Same-day service, $75 service call.',
    h1: 'Bosch Appliance Repair in Denver',
    subtitle: 'Dishwashers, refrigerators, ovens, laundry • Same-day service • $75 service call',
    intro: [
      'Bosch belongs to BSH Home Appliances, the same group as Thermador and Gaggenau, and the Bosch dishwasher is the appliance most people search for by name. It is also the one with the clearest error codes, several of which you can clear yourself. H-Prime services the whole Bosch line across the Denver Metro area: dishwashers, refrigerators and freezers, wall ovens and ranges, cooktops, and the compact washers and dryers.',
      'Below is what each Bosch code means, what to check before calling, and when the machine needs a technician. We are an independent repair company, not a Bosch authorized servicer, so warranty work goes through Bosch; out of warranty, the service call is $75 and you get a price before any repair starts.',
    ],
    sections: [
      {
        id: 'dishwasher',
        heading: 'Bosch dishwasher repair: E15, E22, E24, E25, E09',
        paragraphs: [
          'Bosch documents its dishwasher codes, and most of them are on the drain side of the machine.',
        ],
        bullets: [
          'E22: the filter is blocked. Pull the cylinder filter out of the sump, rinse it and lock it back in. No visit needed.',
          'E24 or E25: the drain pump is blocked or its cover is loose. Check the drain hose for a kink, take the pump cover off and clear the debris. If the code returns after that, the pump has failed.',
          'E15: water in the base pan has tripped the leak protection. Switch the power off and look for the source. A one-time overflow can trip it; a code that keeps coming back is a real leak and needs a technician before it reaches the floor.',
          'E09: internal heater fault. Try a power reset; if the code stays, the heater or its control needs replacing.',
          'Poor washing with no code: scale on the spray arms and the filter first. Much of the Denver metro has moderately hard water and Bosch dishwashers that have never been descaled are the ones that start throwing drain and heating codes.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'Bosch refrigerator repair',
        paragraphs: [
          'Bosch refrigerators that stop cooling usually fall into one of three groups. Warm on the fresh-food side only: the evaporator fan or an evaporator that has iced over because the defrost heater, the defrost thermostat or the control board stopped running the defrost cycle. Warm on both sides with the compressor running constantly, or clicking and not starting: the start relay first, then the compressor and the sealed system. Ice maker and water problems: the inlet valve, the filter or a frozen fill tube before the ice maker itself.',
          'Check the warranty before authorizing a compressor. Bosch’s standard coverage is one year of parts and labor on the whole appliance, and on selected models with an inverter compressor Bosch adds a ten-year warranty on the compressor part, with labor paid by the owner. Which terms apply depends on the model, so read the warranty card or call Bosch with the serial number first.',
        ],
      },
      {
        id: 'oven-cooktop',
        heading: 'Bosch oven, range and cooktop repair',
        paragraphs: [
          'Bosch wall ovens and slide-in ranges that heat unevenly, run far from the set temperature or bake while the broiler works are a temperature sensor, a relay or the control board, all replaceable. A convection fan that has gone quiet or noisy is its own motor. Bosch induction cooktops that stop recognising pans or throw a code on one zone are a control or generator board problem and need a technician who has opened one before. Gas ranges in Denver run rich at altitude if they were never converted after installation; yellow flames and soot on pans are the sign.',
        ],
      },
      {
        id: 'laundry',
        heading: 'Bosch washer and dryer repair',
        paragraphs: [
          'Bosch compact and full-size washers that will not drain have a pump filter behind the lower front panel; clean it before calling, a coin is the usual cause. A washer that will not spin is the motor brushes or the control; one that will not fill is the inlet valve or the supply. Bosch condensation and heat-pump dryers that take forever are a blocked lint filter or condenser first, and a failed heater or sensor second. All are standard repairs once diagnosed.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Bosch repair across the Denver Metro area',
        paragraphs: [
          'We service Bosch appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Englewood, Greenwood Village, Highlands Ranch, Parker, Castle Rock and Broomfield. Same-day appointments for dishwashers and refrigerators are usually available when you call in the morning; give us the model number from the label on the door edge and the code on the display.',
        ],
      },
    ],
    faqs: [
      {
        q: 'My Bosch dishwasher shows E24. Do I need a technician?',
        a: 'Not yet. E24 and E25 mean the drain pump is blocked or its cover is loose. Clean the filter, check the drain hose for a kink and clear the pump area. If the code returns after that, the pump or the drain path needs a technician.',
      },
      {
        q: 'What does E15 mean on a Bosch dishwasher?',
        a: 'Water in the base pan has tripped the leak protection. Switch the power off and look for the source. If the code keeps returning, there is a real leak and the machine should be repaired before it damages the floor.',
      },
      {
        q: 'How much does Bosch appliance repair cost in Denver?',
        a: 'The service call is $75. After the diagnosis you get a written price before any repair starts. We quote per job rather than publishing a list, because a Bosch drain pump and a Bosch induction generator board are not comparable repairs.',
      },
      {
        q: 'Are you a Bosch authorized service center?',
        a: 'No. We are an independent repair company. Warranty repairs go through Bosch’s own service network; we repair Bosch appliances that are out of warranty or whose owners want a faster independent visit.',
      },
      {
        q: 'Is a Bosch refrigerator compressor covered under warranty?',
        a: 'It depends on the model. Standard Bosch coverage is one year of parts and labor. Selected models with an inverter compressor carry a ten-year warranty on the compressor part only, with labor paid by the owner. Check the warranty card or call Bosch with the serial number before paying for a compressor.',
      },
      {
        q: 'Which Bosch appliances do you repair?',
        a: 'Dishwashers, refrigerators and freezers, wall ovens and ranges, gas and induction cooktops, ventilation hoods, and the compact washers and dryers.',
      },
    ],
  },

  wolf: {
    slug: 'wolf',
    name: 'Wolf',
    title: 'Wolf Appliance Repair Denver | Range, Oven, Cooktop',
    description:
      `Independent Wolf repair across the Denver Metro area: dual fuel and gas ranges, E and M Series wall ovens, cooktops, rangetops, microwaves, hoods. ${SERVICE_CALL_FEE} service call, price before work.`,
    h1: 'Wolf Appliance Repair in Denver',
    subtitle: `Ranges, wall ovens, cooktops and rangetops, microwaves, ventilation • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'Wolf is the cooking brand of Sub-Zero Group, the family-owned Wisconsin company behind Sub-Zero refrigeration and Cove dishwashers. Sub-Zero introduced Wolf cooking appliances in 2000, and the ranges, rangetops, cooktops and wall ovens are built around their own parts: the dual-stacked burners, the infrared charbroiler and griddle, the E Series and M Series oven controls. H-Prime repairs Wolf cooking appliances across the Denver Metro area, from Cherry Hills Village and Greenwood Village to Highlands Ranch, Castle Pines, Golden and Broomfield.',
      `We are an independent repair company, not part of Wolf Factory Certified Service. If your Wolf is inside its two-year warranty, that repair belongs to Wolf's own network and should cost you nothing. Once it is out of warranty, the service call is ${SERVICE_CALL_FEE}, you get a diagnosis first and a written price before any work starts.`,
    ],
    sections: [
      {
        id: 'burners',
        heading: 'Wolf burner that clicks, will not light or burns yellow',
        paragraphs: [
          'Most Wolf calls start on the surface burners of a range, rangetop or gas cooktop, and Wolf itself publishes the first checks. Every one of them takes less than five minutes, so it is worth doing before you book anyone.',
        ],
        bullets: [
          'Burner keeps clicking after it lights: if the burner got wet from cleaning or a spillover, let it dry; Wolf suggests a hair dryer on a low setting. Then check that the burner cap sits centered on the burner head and flat. Wolf describes its design as dual-stacked, with all burner parts in one assembly, and the cap must be seated flatly for the burner to work right.',
          'Burner will not spark or light: the ignitors are electric and do not spark or click without power. Turn power to the unit off, wait at least 30 seconds, turn it back on and try again. During a power outage the surface burners can still be lit by hand: turn the knob to Hi and use a multi-purpose lighter.',
          'Erratic flame or poor ignition: confirm the caps are positioned properly, clean the burner and the igniter, and push the knob in and release it to make sure it springs back.',
          'Yellow or green flames: Wolf lists the causes as an improper air and gas mixture, burner heads not seated properly, or burner heads that need cleaning. Some yellow or orange tipping is normal on LP gas.',
        ],
      },
      {
        id: 'altitude',
        heading: 'Does a Wolf range need a high-altitude kit in Denver?',
        paragraphs: [
          'It is a fair question at 5,280 feet, and Wolf answers it in its installation guides. Wolf natural gas dual fuel ranges, gas cooktops and sealed burner rangetops are documented to work without adjustment up to 10,250 feet, and the LP versions up to 8,600 feet. The current gas range installation guide gives 8,600 feet for natural gas and says LP gas ranges do not require conversion. A Denver kitchen sits well below every one of those numbers, so by Wolf documentation a range installed here does not need a high-altitude conversion.',
          'That changes the diagnosis. Yellow flames or a burner that struggles on a Wolf in Denver are not explained by the altitude, so the checks above come first, then the gas type. If a unit was ever converted between natural gas and LP, Wolf places a sticker near the original serial tag and rating plate, and Wolf recommends that any gas conversion is done by a service technician, not by the owner.',
        ],
      },
      {
        id: 'oven',
        heading: 'Wolf oven repair: dual fuel, E Series and M Series wall ovens',
        paragraphs: [
          'Before booking a visit for an oven that seems dead, rule out three documented behaviors that look like faults. A Wolf dual fuel oven turns itself off after 12 hours of continuous use, except in Dehydration or Sabbath mode. The control lock has to be reset after a power outage. And "SAb" on the oven control knob simply means the oven is in Sabbath mode. Most Wolf products with electronic controls have Sabbath mode as standard; Wolf states that M Series ovens are Star-K compliant in Sabbath mode and that the E Series oven is certified by Star-K.',
          'Self-clean is the other source of calls. Wolf documents that Clean lasts about four hours, that the door stays locked until cleaning is complete and the oven has dropped below 550°F, and that on a double oven the second cavity cannot be used while the first one cleans. On M Series ovens a motorized latch locks the door when self-clean is set. A door that stays locked after the cycle has finished and the oven has cooled, or an oven that no longer reaches its set temperature, needs a technician.',
          'When a Wolf oven does need parts, they are the ones Wolf names in its own warranty: electric heating elements, electronic control boards and, on the gas side, the burners. We diagnose first and quote the part for your model number.',
        ],
      },
      {
        id: 'cooktop',
        heading: 'Wolf cooktop, rangetop, microwave and hood repair',
        paragraphs: [
          'Wolf gas cooktops and sealed burner rangetops follow the burner checks above. On a rangetop that does not operate at all, Wolf says to switch the breaker off for 30 seconds and back on and to verify that the gas supply shut-off valve is open; after that, Wolf says not to attempt the repair yourself. The infrared charbroiler and the thermostatically controlled griddle on some ranges and rangetops are their own burners, separate from the surface burners, and are diagnosed separately.',
          'Wolf induction cooktops and induction ranges run on induction generators, microwaves on a magnetron tube, and ventilation hoods on blower motors. All of these are replaceable parts, and Wolf covers them for five years under its limited warranty, which matters for who pays for the part (see below).',
        ],
      },
      {
        id: 'warranty',
        heading: 'Wolf warranty: what it covers and who does the repair',
        paragraphs: [
          'Wolf residential coverage has two parts, both counted from the date of original installation. For two years, all parts and labor are covered, and that service has to be performed by Wolf Factory Certified Service. For five years, Wolf will repair or replace a defined list of parts: gas burners (appearance excluded), electric heating elements, hood blower motors, electronic control boards, magnetron tubes and induction generators. In years three to five the owner pays for labor.',
          'Here is how that affects you. Inside the first two years, call Wolf Customer Care at 800-222-7820 or use the service locator on the Wolf website; paying an independent company for a repair Wolf covers makes no sense. In years three to five, if one of the listed parts has failed, Wolf states that an owner who uses non-certified service must contact Wolf to receive the repaired or replacement part, and Wolf does not reimburse parts bought elsewhere. If you use us for that repair, call Wolf first about the part; we will quote the labor.',
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: the Wolf rating plate',
        paragraphs: [
          'Wolf parts are specific to the model and serial number, and both are on the rating plate. On dual fuel and gas ranges it sits on the bottom of the control panel at the far right, just above the oven door. On sealed burner rangetops it is on the bottom of the control panel at the far right. On gas cooktops it is on the bottom of the cooktop. Send us a photo of the plate with the symptom in one sentence and, if the controls show anything, what they show.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Wolf repair across the Denver Metro area',
        paragraphs: [
          'We repair Wolf ranges, ovens and cooktops in Denver, Cherry Creek, Cherry Hills Village, Greenwood Village, Englewood, Littleton, Centennial, Lone Tree, Highlands Ranch, Castle Pines, Castle Rock, Parker, Aurora, Lakewood, Golden, Arvada, Westminster and Broomfield. Same-day appointments depend on where you are and what failed; call with the model number and the symptom and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you Wolf factory certified service?',
        a: 'No. H-Prime is an independent appliance repair company. Warranty repairs in the first two years must go through Wolf Factory Certified Service, which you find through Wolf Customer Care at 800-222-7820. We repair Wolf appliances that are out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does Wolf repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because they depend on the model and the part: an igniter and an induction generator are very different jobs.`,
      },
      {
        q: 'Why does my Wolf burner keep clicking?',
        a: 'Usually because the burner is wet after cleaning or a spill, or the cap is not centered and flat on the burner head. Let it dry, a hair dryer on low helps, and reseat the cap. If it still clicks after that, book a visit.',
      },
      {
        q: 'Does my Wolf gas range need a high-altitude kit in Denver?',
        a: 'Not according to Wolf. Its installation guides state that Wolf gas ranges, cooktops and rangetops work without adjustment up to 8,600 feet or more, depending on the model and gas type. Denver is at about 5,280 feet.',
      },
      {
        q: 'What does the Wolf warranty cover?',
        a: 'Two years of parts and labor from installation, performed by Wolf Factory Certified Service. For five years, Wolf repairs or replaces gas burners, electric heating elements, hood blower motors, electronic control boards, magnetron tubes and induction generators, with labor paid by the owner after year two.',
      },
      {
        q: 'Which Wolf appliances do you repair?',
        a: 'Dual fuel, gas and induction ranges, E Series and M Series wall ovens, gas, electric and induction cooktops, sealed burner rangetops, microwaves, ventilation hoods and outdoor grills.',
      },
    ],
  },

  'sub-zero': {
    slug: 'sub-zero',
    name: 'Sub-Zero',
    title: 'Sub-Zero Repair Denver | Refrigerator, Freezer, Ice Maker',
    description:
      `Independent Sub-Zero refrigerator repair across the Denver Metro area: warm or too cold units, Vacuum Condenser alerts, ice makers, frost, wine storage. ${SERVICE_CALL_FEE} service call, price before work.`,
    h1: 'Sub-Zero Refrigerator Repair in Denver',
    subtitle: `Classic, Designer, PRO, undercounter, wine storage, ice makers • Same-day service • ${SERVICE_CALL_FEE} service call`,
    reviewsTitle: 'What Sub-Zero owners in Denver say',
    intro: [
      'Sub-Zero is a family-owned Wisconsin company that started as Sub-Zero Freezer Company in 1945 and later added Wolf cooking and Cove dishwashers under Sub-Zero Group. Its refrigerators are built differently from mass-market ones: PRO, Classic and Designer models use what Sub-Zero calls Dual Refrigeration, with separate refrigerator and freezer systems, and many combination units run two compressors. That shapes the repair, because a warm refrigerator section and a warm freezer can have entirely different causes. H-Prime repairs Sub-Zero refrigeration across the Denver Metro area: built-in refrigerators and freezers, columns, undercounter units, wine storage and ice makers.',
      `We are an independent repair company, not part of Sub-Zero Factory Certified Service. Warranty repairs go through Sub-Zero; out of warranty, the service call is ${SERVICE_CALL_FEE}, you get a diagnosis first and a written price before any work starts.`,
    ],
    sections: [
      {
        id: 'refrigerator',
        heading: 'Sub-Zero refrigerator not cooling, or freezing food',
        paragraphs: [
          'Sub-Zero lists the causes of a warm refrigerator as a fan that is not working properly, a temperature sensor or thermostat fault, a compressor, evaporator or condenser issue, or a problem with the door seal. Before booking, work through the checks Sub-Zero itself publishes:',
        ],
        bullets: [
          'Check the set point. On an electronic control Sub-Zero recommends 38°F for the refrigerator and 0°F for the freezer, and after any change allow 24 hours for the unit to settle.',
          'Make sure the door closes all the way. Remove anything blocking it, turn on the door ajar alarm, and look over the gasket around the door for tears, rips or dry rot.',
          'Clean the condenser if it has not been cleaned in the last six months (a unit younger than six months does not need it).',
          'On a newly installed unit, give it 24 hours to cool down, and confirm it is not in Showroom Mode, which is only likely on a former display model.',
          'Food freezing in the refrigerator section is the opposite problem: address any error message the control shows, verify the set temperatures, and clean the condenser if it is due.',
        ],
      },
      {
        id: 'condenser',
        heading: 'Vacuum Condenser or Service flashing on a Sub-Zero',
        paragraphs: [
          'Sub-Zero says the "Vacuum Condenser" message appears when the unit is not running efficiently or temperatures are too high, and names three possible reasons: a dirty condenser, a door sealing issue, or a problem with the unit. The first one is yours to fix. Sub-Zero recommends cleaning the condenser every six to twelve months, more often with pets in the house, with a vacuum and a soft brush attachment. Chemical cleaners and degreasers are not necessary and not recommended by Sub-Zero. On Classic models the condenser sits behind the grille, which lifts and rotates up once the unit is switched off at the control panel.',
          'If the message returns on a clean condenser with the doors sealing properly, or temperatures stay high, the unit needs a diagnosis. Write down the current temperatures and any service indicator before you call.',
          'A compressor that seems to run all the time is not automatically a fault. Sub-Zero states there is no set run time; it depends on room temperature, the amount and temperature of food, and how often the door opens. On two-compressor models both may run at once, which can look like the unit never stops. Food spoiling, rising temperatures, condensation or frost alongside long run times is what makes it a repair.',
        ],
      },
      {
        id: 'ice-maker',
        heading: 'Sub-Zero ice maker not making ice',
        paragraphs: [
          'Sub-Zero lists these causes for an ice maker that stops: a jammed ice cube, low water pressure, a frozen fill tube, a warm freezer, or a water valve that stays energized longer than fifteen seconds. The owner checks are short. Confirm the ice maker is turned on and the shut-off arm is in the down position. Confirm the freezer is at or below 5°F; Sub-Zero recommends 0°F. Reseat the water filter if the unit has one, and after turning the ice maker on, allow 24 hours before expecting ice. If all of that is in order and the bin stays empty, the valve, the fill tube or the ice maker itself needs a technician.',
        ],
      },
      {
        id: 'frost-noise',
        heading: 'Frost, noises and sweating',
        paragraphs: [
          'Frost or ice building up in a Sub-Zero freezer traces, by Sub-Zero\'s own list, to a door left ajar, a frozen freezer drain tube, a torn gasket, a failed defrost element, or an ice maker that is not filling properly. Keep the door closed, inspect the gasket and clean the condenser if it has not been done in the last three months; a frozen drain tube or a defrost element is a repair.',
          'A sizzling or crackling sound can be normal: moisture on or near the defrost heater makes it during defrost cycles. To tell whether a buzz or grinding comes from a fan, open all the doors; if the noise stops, it is fan related, and a fan motor that is not working properly or ice on the freezer fan is a repair visit.',
          'Some sweating on the outside of a Sub-Zero can happen in hot or humid conditions, especially in homes without air conditioning. Dripping is not normal, and neither is condensation that keeps coming back with rising temperatures.',
        ],
      },
      {
        id: 'altitude',
        heading: 'Sub-Zero glass doors and Denver elevation',
        paragraphs: [
          'Sub-Zero documents one altitude detail that applies to Denver. A high-altitude glass door is available for installations above 5,000 feet, because a glass door without it can bow at high altitude. High-altitude glass doors exist only on stainless steel Classic (CL) Series units, and the model number carries an A for altitude in place of the G for glass. Denver sits at about 5,280 feet, so if the glass door on a Classic unit has bowed, check the model number on the serial tag: it tells you whether the high-altitude version was installed.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Sub-Zero warranty and who does the repair',
        paragraphs: [
          'Sub-Zero residential coverage is counted from the date of original installation and has three layers. For two years, all parts and labor on the whole product. For five years, parts and labor on the sealed system: compressor, condenser, evaporator, drier and all connecting tubing. For twelve years, Sub-Zero will repair or replace those same sealed system parts, with the owner paying labor. Water filters and air purification cartridges are not covered.',
          'Warranty service in the first two years, and on the sealed system through year five, has to be performed by Sub-Zero Factory Certified Service. H-Prime is not part of it and does not do warranty repairs, so call Sub-Zero Customer Care at 800-222-7820 first. From year six to twelve, Sub-Zero states that an owner who uses non-certified service must contact Sub-Zero directly to receive the sealed system parts. If you choose us for that repair, start with that call; we quote the labor.',
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: find the Sub-Zero serial tag',
        paragraphs: [
          'Sub-Zero parts are specific to the model and series. On Classic over-and-under models the serial tag is inside the refrigerator door near the top hinge; on Classic French door models, inside the left-hand door near the top hinge. On PRO 48 models it is inside the cabinet to the left of the upper freezer drawer. Undercounter units carry it inside the cabinet in the upper left area. Send a photo of the tag, the temperatures the control shows, and any message on the display.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Sub-Zero repair across the Denver Metro area',
        paragraphs: [
          'We repair Sub-Zero refrigerators, freezers, wine storage and ice makers in Denver, Cherry Creek, Cherry Hills Village, Greenwood Village, Englewood, Littleton, Centennial, Lone Tree, Highlands Ranch, Castle Pines, Castle Rock, Parker, Aurora, Lakewood, Golden, Arvada, Westminster and Broomfield. A warm refrigerator does not wait, so call with the model number and the symptom and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you Sub-Zero factory certified service?',
        a: 'No. H-Prime is an independent appliance repair company and does not perform Sub-Zero warranty work. Warranty repairs go through Sub-Zero Factory Certified Service, which Sub-Zero Customer Care at 800-222-7820 or the locator on the Sub-Zero website will find for you. We repair Sub-Zero units that are out of warranty.',
      },
      {
        q: 'How much does Sub-Zero repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because they depend on the model and the part: a door gasket and a sealed system repair are not comparable jobs.`,
      },
      {
        q: 'What does Vacuum Condenser flashing mean on my Sub-Zero?',
        a: 'Sub-Zero says it appears when the unit is not running efficiently or temperatures are too high, for example because of a dirty condenser or a door that does not seal. Clean the condenser with a vacuum and soft brush; if the message returns or temperatures stay high, book a diagnosis.',
      },
      {
        q: 'Is my Sub-Zero compressor covered by the warranty?',
        a: 'The sealed system, including the compressor, has parts and labor coverage for five years from installation and parts coverage for twelve. Sub-Zero Factory Certified Service performs warranty repairs. After year five, owners using non-certified service get the parts directly from Sub-Zero and pay the labor.',
      },
      {
        q: 'How often should I clean the Sub-Zero condenser?',
        a: 'Sub-Zero recommends every six to twelve months, more often with pets, using a vacuum with a soft brush. No chemicals or degreasers are needed.',
      },
      {
        q: 'Which Sub-Zero appliances do you repair?',
        a: 'Classic, Designer and PRO refrigerators and freezers, refrigerator and freezer columns, undercounter refrigeration, wine storage and ice makers.',
      },
    ],
  },

  electrolux: {
    slug: 'electrolux',
    name: 'Electrolux',
    title: 'Electrolux Appliance Repair Denver | Oven, Dryer, Washer',
    description:
      `Independent Electrolux repair across the Denver Metro area: ovens and ranges, washers with E11 / E21 codes, dryers, dishwashers, fridges. ${SERVICE_CALL_FEE} service call.`,
    h1: 'Electrolux Appliance Repair in Denver',
    subtitle: `Ovens and ranges, washers, dryers, dishwashers, refrigerators • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'Electrolux is a Swedish appliance group headquartered in Stockholm whose brands also include Frigidaire and AEG. In the US, Electrolux kitchen and laundry appliances are warranted by Electrolux Major Appliances North America in Charlotte, North Carolina. H-Prime repairs the Electrolux line across the Denver Metro area: gas, electric and induction ranges, wall ovens and cooktops, front-load washers, gas and electric dryers, dishwashers, refrigerators and freezers.',
      `We are an independent repair company, not an Electrolux authorized servicer. Electrolux states that service under its warranty must be obtained by contacting Electrolux and performed by Electrolux or an authorized service company, so a repair still under warranty belongs with them. Out of warranty, the service call is ${SERVICE_CALL_FEE}, you get a diagnosis first and a written price before any work starts.`,
    ],
    sections: [
      {
        id: 'oven',
        heading: 'Electrolux oven and range repair: F10, F30 and F90 codes',
        paragraphs: [
          'Electrolux ranges and wall ovens report faults with an F code, and Electrolux publishes the first step for several of them: reset the unit by unplugging it for 30 seconds, or by switching off its breaker.',
        ],
        bullets: [
          'F10, thermal runaway: the oven is detecting higher than normal temperatures, a built-in safety alert. Turn the oven off and let it cool before using it again. On ovens with the stone-baked pizza feature, Electrolux says F10 can come from the Pizza Shield sitting on the wrong rack; it belongs in rack position 7. If F10 keeps coming back, the oven needs a diagnosis.',
          'F30 and F31: an open or a shorted probe. Reset the power first; a code that returns after the reset needs a diagnosis.',
          'F90 to F94: a door lock issue. Press the UNLOCK key, then reset the power for up to 30 seconds. A door that stays locked after the reset needs a technician.',
          'A dash on the cooktop display is not a fault: the cooktop is locked. Press OFF and hold it for 6 seconds to cancel the lock.',
        ],
      },
      {
        id: 'gas-range',
        heading: 'Electrolux gas ranges and cooktops at Denver elevation',
        paragraphs: [
          'Electrolux installation instructions for its gas ranges, dual fuel ranges and gas cooktops carry the same note: for operation above 2,000 feet, the appliance rating is reduced by 4 percent for each 1,000 feet above sea level. Denver sits at about 5,280 feet, so that note applies to every Electrolux gas appliance in the metro. The gas cooktop guide states that installation and service must be performed by a qualified installer, and the free-standing gas range guide says the range can be converted from natural gas to LP only with the proper conversion kit.',
          'For a gas range or stove that lights poorly, burns unevenly or will not hold a flame, we check the gas type, any conversion and the installation against the Electrolux guide for your model before quoting parts.',
        ],
      },
      {
        id: 'washer',
        heading: 'Electrolux washer repair: E11, E21, E41 and SU dS',
        paragraphs: [
          'Electrolux front-load washers show a code when a cycle stops, and Electrolux publishes the owner checks for each one. For odor, the washer manual recommends the Clean Washer cycle once a month and drying the fold of the door gasket after each wash.',
        ],
        bullets: [
          'E11, long fill time: the washer is not filling during the wash. The door can stay locked for up to 6 minutes; unplugging restarts that lock timer, so wait it out. Then check that the hot and cold supply lines are not reversed and that the water supply meets the requirements in your Use and Care Guide.',
          'E21, long pump out time: the water is draining too slowly. Electrolux says the most common cause is a kinked drain hose. Check the hose for restrictions, confirm it is installed properly and that the hot and cold lines are not reversed.',
          'E41, door open: the control board reads the door switch as open. Close the door until you hear it click, remove any clothing caught in the door, and make sure the latch and the striker work.',
          'SU dS, too many suds: use HE detergent and less of it, then run an empty Quick Wash. Each extra rinse the washer adds to clear suds adds about 5 minutes to the cycle.',
        ],
      },
      {
        id: 'dryer',
        heading: 'Electrolux dryer repair: EF1, E4 and long drying times',
        paragraphs: [
          'EF1 is a ventilation blockage. Electrolux says to check the lint filter, the exhaust tube for bends, restrictions and blocks, and the vent exit outside, and to clear any debris. E4 means the humidity sensor has failed: the dryer finishes the current cycle and manual cycles still run, but an automatic cycle that cannot sense dryness is a repair.',
          'For a dryer that takes too long, Electrolux says to clean the lint screen after every load, check that Air Fluff is not selected, since it tumbles without heat, and clean the moisture sensor bars, which fabric softener sheets can coat. If the dryer runs but stays cold on a clean vent, it needs a diagnosis.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'Electrolux dishwasher repair: the i20 drain code',
        paragraphs: [
          'Error code i20 means the dishwasher is not draining properly. Electrolux lists the checks: the knockout plug in the disposer must have been removed when the dishwasher was installed; the drain hose must not be blocked, pinched or restricted and must reach at least 32 inches from the floor; and the glass trap and filter must be clear of food soils. An i20 that returns after all of that needs a diagnosis, and you get a price before any repair.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'Electrolux refrigerator not cooling',
        paragraphs: [
          'Electrolux suggests 37°F for the refrigerator and 0°F for the freezer, and says a unit needs 24 hours to stabilize after installation or a settings change. Before booking a refrigerator or fridge repair, check the published basics:',
        ],
        bullets: [
          'Power: the control panel or interior lights are on, and if the unit is on a GFI outlet, the outlet has not tripped. Electrolux calls for a dedicated, grounded 115 or 120 volt circuit.',
          'Airflow: food or containers blocking the vents inside stop the unit from cooling properly.',
          'Door seal: a door that does not seal causes unstable temperatures. Close the door on a dollar bill; you should feel resistance when you pull it out. Clean the gasket with warm soapy water.',
          'Location: Electrolux does not recommend installing the unit where the temperature drops below 55°F, which matters for a garage refrigerator in a Denver winter.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Electrolux warranty and authorized service',
        paragraphs: [
          'Coverage depends on the product, so the warranty page of your own guide is what counts. The current Electrolux front-load washer manual, for example, gives one year of parts and labor from the original purchase date, plus a second year of parts only. The inner wash tub is covered for the functional life of the product and the wash tub drive motor for ten years, both excluding labor.',
          'For warranty service, call Electrolux at 1-877-435-3287 and keep your receipt to establish the purchase date. Electrolux also excludes damage caused by unauthorized service companies or by parts that are not genuine Electrolux parts, which is one more reason a repair still under warranty should go through them. On a unit installed less than 30 days ago, Electrolux support says to contact your installer first.',
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: find the Electrolux model and serial number',
        paragraphs: [
          'Electrolux parts are specific to the model and series. On a front-load washer the tag is along the trim of the door; on a dryer, along the top of the door opening. Dishwashers carry it on the inside of the door or the right side of the tub, and French door and side-by-side refrigerators on the upper right side of the fresh food compartment. Ranges and wall ovens usually have it on the oven\'s interior side trim. Send a photo of the tag with the code on the display.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Electrolux repair across the Denver Metro area',
        paragraphs: [
          'We repair Electrolux appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Broomfield, Golden, Englewood, Littleton, Centennial, Greenwood Village, Lone Tree, Highlands Ranch, Parker and Castle Rock. Same-day appointments depend on where you are and what failed; call with the model number and the code on the display and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you an authorized Electrolux service center?',
        a: 'No. H-Prime is an independent appliance repair company. Electrolux warranty service is arranged through Electrolux at 1-877-435-3287 and performed by Electrolux or an authorized service company. We repair Electrolux appliances that are out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does Electrolux appliance repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because they depend on the model and the part: a dryer vent problem and an oven control board are very different jobs.`,
      },
      {
        q: 'What does F10 mean on my Electrolux oven?',
        a: 'Electrolux describes F10 as thermal runaway: the oven detects higher than normal temperatures. Turn it off, let it cool and reset the power for 30 seconds. On pizza oven models, check that the Pizza Shield is in rack position 7. If F10 returns, book a diagnosis.',
      },
      {
        q: 'My Electrolux washer shows E21. What should I check?',
        a: 'E21 means the washer takes too long to pump out. Electrolux says the most common cause is a kinked drain hose. Check the hose for restrictions and that it is installed properly; if E21 keeps coming back, the washer needs a technician.',
      },
      {
        q: 'Why is my Electrolux dryer showing EF1?',
        a: 'EF1 is a ventilation blockage. Clean the lint filter, check the exhaust tube for bends or restrictions and clear the vent exit outside. If the code returns on a clear vent, book a visit.',
      },
      {
        q: 'Does my Electrolux gas range need adjusting for Denver altitude?',
        a: 'Electrolux installation instructions state that above 2,000 feet the appliance rating is reduced by 4 percent for each 1,000 feet above sea level, and that installation and service must be done by a qualified installer. Denver is at about 5,280 feet, so the note applies here.',
      },
      {
        q: 'Which Electrolux appliances do you repair?',
        a: 'Gas, electric and induction ranges, wall ovens, cooktops, microwaves, front-load washers, gas and electric dryers, dishwashers, refrigerators and freezers.',
      },
    ],
  },

  'fisher-paykel': {
    slug: 'fisher-paykel',
    name: 'Fisher & Paykel',
    title: 'Fisher & Paykel Repair Denver | Washer, Dryer, Dishwasher',
    description:
      `Independent Fisher & Paykel repair in Denver Metro: washers, dryers, DishDrawer dishwashers, refrigerators, ranges. ${SERVICE_CALL_FEE} service call, price before work.`,
    h1: 'Fisher & Paykel Appliance Repair in Denver',
    subtitle: `Washers and dryers, DishDrawer dishwashers, refrigerators, ranges and cooktops • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'Fisher & Paykel started in New Zealand in 1934 and has been part of Haier Group since 2012. Its US lineup includes the DishDrawer dishwasher, front load washers with a direct drive motor, ActiveSmart refrigerators, and gas ranges and cooktops, and each reports its own codes and has its own owner checks. H-Prime repairs Fisher & Paykel appliances across the Denver Metro area, from Cherry Hills Village and Highlands Ranch to Golden, Arvada and Broomfield.',
      `We are an independent repair company, not a Fisher & Paykel Authorized Service Agent. If your appliance is inside its Fisher & Paykel warranty, that repair belongs to their network and should cost you nothing. Once it is out of warranty, the service call is ${SERVICE_CALL_FEE}, you get a diagnosis first and a written price before any work starts.`,
    ],
    sections: [
      {
        id: 'washer',
        heading: 'Fisher & Paykel washer repair: codes, drain and spin problems',
        paragraphs: [
          'A Fisher & Paykel front load washer that finds a problem beeps continuously and shows a code. Some codes are user warnings you clear yourself. For a fault number, Fisher & Paykel gives a reset routine: turn the washer off at the power point, wait one minute and turn it back on, check that it is level, remove the load and run a Rinse cycle. If the fault returns after a second power reset, it needs a technician.',
          'Other common causes, from the Fisher & Paykel guide for its 24-inch WH2424 models:',
        ],
        bullets: [
          'Not draining: a blocked pump filter or drain hose. The pump filter sits behind a cover at the bottom right of the front, and Fisher & Paykel recommends cleaning it about once a month.',
          'Not spinning properly or vibrating: an unbalanced load, a washer that is not level, too many suds, or transit bolts left in after installation.',
          'Door will not open: the drum is over 140°F, the water level is above the bottom of the door seal, or the drum is still moving.',
          'Water under the machine: check the hoses, the detergent drawer and the door seal; a damaged seal has to be replaced.',
        ],
      },
      {
        id: 'dryer',
        heading: 'Fisher & Paykel dryer repair: no heat, long cycles, fault codes',
        paragraphs: [
          'For a fault number, the US AeroCare dryer guide says to unplug the dryer for one minute, check that it is level, remove the load and run a 20-minute Time Dry. If the fault returns, record the code and serial number before calling.',
          'No heat: check that it is not set to Air Dry, that the gas is on for gas models, and that it has not already moved into cooling. Long drying times: the lint filter, an overloaded drum, or an exhaust duct that is crushed, too long or blocked. Fisher & Paykel calls for 4-inch metal duct only, never plastic.',
          'One Denver detail: the same guide states that high altitude can make the drying cycle longer, and that gas dryer input ratings should be reduced by four percent per 1,000 feet for operation above 2,000 feet. A gas dryer that was never adjusted is worth checking before blaming a part.',
        ],
      },
      {
        id: 'dishdrawer',
        heading: 'DishDrawer dishwasher repair: what the F and A codes mean',
        paragraphs: [
          'A DishDrawer beeps and flashes a code when it detects a fault; on double models each drawer reports separately and the other keeps working. A codes come with owner steps. For an F code, first reset: press power to stop the beeping, again to turn it off, wait a few seconds and turn it back on.',
        ],
        bullets: [
          'A1: turn the water supply on. A3, cannot drain: check the drain hose for a blockage or kink.',
          'A6: the spray arm is loose or water pressure is low; refit the arm so it turns freely. A7: excess foam; let the auto recovery finish and check the detergent.',
          'F1, flood detected or excess foaming: if no water is visible, Fisher & Paykel says to turn the power off overnight, then run a cycle without detergent and reduce detergent to one teaspoon at most. If there is water on the floor, turn off power and water and book service.',
          'F2, motor rotor fault: with the power off, remove any debris around the rotor. If it continues, it needs service.',
          'F3 is a water temperature fault, F4 a heating element failure, F5 a lid motor fault, F6 a drying fan fault, F7 a fill valve fault, F8 and F9 electronics faults and FC a communication fault between drawers. Fisher & Paykel states these require a service technician.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'Fisher & Paykel refrigerator repair: warm, freezing or alarming',
        paragraphs: [
          'On ActiveSmart French door models, Fisher & Paykel sets the factory default at 3°C in the refrigerator and -18°C in the freezer, about 37°F and 0°F, and says reaching them takes 2-3 hours after first switch-on. A warm compartment is first checked against the setting, door openings and a large load of food added at once. Doors that do not seal also make the motor run long; Fisher & Paykel recommends cleaning the door gasket every three months.',
          'Food freezing in the refrigerator is often the setting or food right in front of the air outlets. If the ice maker stops, check that it is on, the water is connected, the line is not kinked and the filter is not clogged. A fault alarm when the door opens is different: record the number of beeps and the pattern of the temperature lights for the diagnosis.',
        ],
      },
      {
        id: 'range',
        heading: 'Fisher & Paykel range, oven and cooktop repair',
        paragraphs: [
          'From the Fisher & Paykel professional range guide: an ignitor that keeps clicking after the burner lights is dirty or wet; with the burner off, clean it with a small brush or a cotton swab dipped in rubbing alcohol. A flame that does not go all around the cap means wet, dirty or misaligned burner parts. Uneven, very large, yellow or sooty flames mean the gas type or adjustment is wrong: Fisher & Paykel says not to use the burners and to call for service.',
          'On the oven, the door stays locked after self-clean until the oven cools, up to 45 minutes after a cancelled cycle. Alert codes A2 and A3 are door lock errors at the start and end of a clean cycle; try power off at the wall and on again first. A convection fan that does not come on is listed as a technical fault.',
          'Altitude matters for some cooktops: the installation guide for gas cooktops CG244D, CG305D and CG365D requires a high-altitude kit above 3,000 feet, one for 3,000-6,000 feet and another above 6,000 feet. Denver, at about 5,280 feet, falls in the first band; Castle Rock, at about 6,224 feet, in the second. The range installation guides we checked list no such kit, so it depends on your model.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Fisher & Paykel warranty and who does the repair',
        paragraphs: [
          'In the US, Fisher & Paykel gives a two-year limited warranty on parts and labor, counted from the date the first consumer bought the product. Refrigerators get an extra three years on the sealed system (compressor, evaporator, condenser, filter dryer, tubing), five in total. FabricSmart and WashSmart washers get an extra eight years of parts-only coverage on the direct drive motor, excluding the motor controller and labor.',
          'Warranty service is provided by Fisher & Paykel or its Authorized Service Agent. H-Prime is not one and does not do warranty repairs, so inside the warranty call Fisher & Paykel Customer Care at 888-936-7872 first. The same applies to a washer past year two with a failed direct drive motor: the part may still be covered, so call them before you call anyone.',
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: find the Fisher & Paykel serial number',
        paragraphs: [
          'Fisher & Paykel parts are specific to the model and serial number. On WH2424 washers it is on the rear of the machine and above the drum opening with the door open. On AeroCare dryers it is on the drum opening surround. On RF172 French door refrigerators the serial plate is at the front bottom right with the door open. On OR36S freestanding ranges the data plate is below the bottom drawer. Send a photo of the plate, the code on the display and the symptom in one sentence.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Fisher & Paykel repair across the Denver Metro area',
        paragraphs: [
          'We repair Fisher & Paykel washers, dryers, DishDrawer dishwashers, refrigerators, ranges and cooktops in Denver, Cherry Creek, Cherry Hills Village, Greenwood Village, Englewood, Littleton, Centennial, Lone Tree, Highlands Ranch, Castle Pines, Castle Rock, Parker, Aurora, Lakewood, Golden, Arvada, Westminster and Broomfield. Call with the model number and the code and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you an authorized Fisher & Paykel service agent?',
        a: 'No. H-Prime is an independent appliance repair company. Warranty repairs go through Fisher & Paykel or its Authorized Service Agent, which Fisher & Paykel Customer Care at 888-936-7872 arranges. We repair Fisher & Paykel appliances that are out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does Fisher & Paykel repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because they depend on the model and the part: a pump filter blockage and a DishDrawer lid motor are very different jobs.`,
      },
      {
        q: 'What does F1 mean on a Fisher & Paykel DishDrawer?',
        a: 'Flood detected or excess foaming. If no water is visible, turn the power off overnight, run a cycle without detergent and use no more than one teaspoon of detergent afterward. If water is on the floor, turn off power and water and book service.',
      },
      {
        q: 'Why is my Fisher & Paykel washer not draining?',
        a: 'Fisher & Paykel lists a blocked pump filter or drain hose, or a drain hose set higher than about 47 inches. The pump filter is behind the cover at the bottom right of the front. If it is clear and the washer still holds water or shows a fault number, book a visit.',
      },
      {
        q: 'Why does my Fisher & Paykel dryer take so long in Denver?',
        a: 'Check the lint filter, load size and exhaust duct first. Fisher & Paykel also notes that high altitude can lengthen drying cycles and that gas dryers above 2,000 feet need their input rating reduced.',
      },
      {
        q: 'What does the Fisher & Paykel warranty cover?',
        a: 'Two years of parts and labor from the date of first purchase, performed by Fisher & Paykel or its Authorized Service Agent. Refrigerator sealed systems are covered for five years, and washer direct drive motors get eight more years of parts-only coverage after the first two.',
      },
      {
        q: 'Which Fisher & Paykel appliances do you repair?',
        a: 'Front load washers, electric and gas dryers, single and double DishDrawer dishwashers, French door and bottom freezer refrigerators, gas and dual fuel ranges, wall ovens and gas cooktops.',
      },
    ],
  },

  hotpoint: {
    slug: 'hotpoint',
    name: 'Hotpoint',
    title: 'Hotpoint Appliance Repair Denver | Fridge, Dishwasher, Oven',
    description:
      `Independent repair for US Hotpoint appliances across the Denver Metro area: refrigerators, dishwashers, washers, dryers, ranges. ${SERVICE_CALL_FEE} service call, price first.`,
    h1: 'Hotpoint Appliance Repair in Denver',
    subtitle: `Refrigerators, dishwashers, washers and dryers, ranges and ovens • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'In the United States, Hotpoint is a brand of GE Appliances, a Haier company. Hotpoint dates its appliance line to 1918, when the founders of the Hotpoint iron and an early electric range merged their companies with General Electric, and GE sold its appliance business to Haier in 2016. Today hotpoint.com sells refrigerators and freezers, ranges, dishwashers, washers and dryers, and the owner manuals for those models are GE Appliances manuals, often shared with GE models of the same type. H-Prime repairs Hotpoint refrigerators, dishwashers, washers, dryers and ranges across the Denver Metro area, from Aurora and Thornton to Lakewood and Littleton.',
      `One thing to clear up first, because many Hotpoint searches come from people used to the British brand: Hotpoint in Europe and the UK is owned by Whirlpool Corporation, a separate company, and Hotpoint USA says so on its own support page. This page is about US Hotpoint appliances. H-Prime is an independent repair company, not Bodewell and not GE Appliances factory service. The service call is ${SERVICE_CALL_FEE}, and you get a diagnosis and a written price before any repair starts.`,
    ],
    sections: [
      {
        id: 'refrigerator',
        heading: 'Hotpoint refrigerator and fridge repair: warm, frosty, no ice',
        paragraphs: [
          'The owner manual for Hotpoint top-freezer refrigerators with a single temperature dial covers a few behaviors that look like faults but are not. The dial ships on the recommended factory setting, Colder. A new or newly moved refrigerator needs at least 24 hours to pull down and stabilize, and one with an ice maker can take 12-24 hours before it makes the first ice. The ice maker only works once the water line is connected, the water is turned on and the ice maker itself is switched on, and the manual says to throw away the first batches so the water line clears.',
          'Frost on the freezer walls is the other common call. The manual explains it the same way every time: frost inside the freezer typically means the door is not sealing or was left open. Clear it with a plastic spatula, check that no package is holding the door open, keep the air vents clear and cover food before it goes in. Clean the door gaskets with warm soapy water as well.',
          'When the dial is right, the door seals and the refrigerator still runs warm days after setup, or the freezer keeps frosting with a good gasket, the cause is mechanical: a fan, the defrost system, a control or the sealed system. That needs a diagnosis on site before anyone quotes a part.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'Hotpoint dishwasher repair: not draining, not cleaning, flashing Start light',
        paragraphs: [
          'Hotpoint dishwashers share their owner manual with GE dishwasher series, and that manual is specific about what to try before calling. A Start light that flashes once usually means the door was opened or the cycle interrupted: press Start once and close the door within 4 seconds. A Start light flashing in a sequence is different. The manual calls it a critical fault and says to call for service.',
        ],
        bullets: [
          'Water standing in the tub or not pumping out: clean the air gap if you have one, run the garbage disposer if the dishwasher drains into it, and check whether the kitchen sink drains well. If the sink is slow too, the manual says you may need a plumber, not an appliance technician.',
          'Dishes not clean: the filters come first. The manual says to inspect and clean them every other month, more often with heavy use, and sooner if dishes feel gritty. Then check that the water entering the dishwasher is hot by running the nearest hot faucet before starting a cycle.',
          'Spots and white film: the manual points at hard water minerals and recommends a rinse aid, a citric acid cleaning cycle, or a cup of vinegar added just after the detergent cup opens.',
          'Dishwasher will not run at all: check the breaker or fuse, the wall switch that sometimes powers the dishwasher next to the disposer switch, and the control lock.',
        ],
      },
      {
        id: 'laundry',
        heading: 'Hotpoint washing machine and dryer repair',
        paragraphs: [
          'Whether you call it a washer or a washing machine, the Hotpoint owner manual lists the checks for a load that will not drain: straighten the drain hose, make sure the washer is not sitting on it, and keep the top of the drain outlet less than 8 feet above the floor. A blinking Spin light means the washer detected an out-of-balance load; even out the clothes and run a Drain and Spin cycle. A Lid Locked light flashes after 3 cycles are started without opening the lid, and the washer will not start another until you open and close it. If the washer will not operate at all, the manual says to unplug it, wait 2 minutes, plug it back in and press Start.',
          'For a Hotpoint dryer that takes too long, the manual starts with the vent: the duct must be clean, free of kinks and unobstructed, and the outside wall damper should open easily. Clean the lint filter before every load. For a dryer that tumbles but does not heat, check the breaker panel: some electric dryers use two fuses or breakers, and the dryer can tumble with only one tripped. On gas models, make sure the gas shutoff at the dryer and the main shutoff are fully open.',
          'If the washer still will not drain or spin on a straight hose and a balanced load, or the dryer stays cold with both breakers on and the vent clear, the fault is a part: a pump, a lid lock, a heating element, a fuse or a gas valve. That is a repair we diagnose and quote.',
        ],
      },
      {
        id: 'oven',
        heading: 'Hotpoint oven, range and stove repair',
        paragraphs: [
          'On Hotpoint gas ranges the clicking you hear when a burner lights is the electric spark igniter, and the manual says all burners spark when one knob is at LITE. If a burner does not light, check that the range is plugged in, the gas is on and the breaker is not tripped, then that the burner parts sit correctly. Clogged burner slots or residue on the electrode stop ignition, and the manual says to polish the flat tip of the electrode lightly until it shines. Very large or yellow flames point to the air and gas ratio, and on propane the manual says to contact whoever installed or converted the range. If the surface burners light but the oven does not, the oven gas shutoff on the regulator may be closed. During a power failure the oven will not work, but surface burners can be lit with a match.',
          'Electric and gas Hotpoint ovens with a display show a function error code as F followed by a number or letter. The manual says to press Cancel/Off, let the oven cool for one hour and try again. If the code returns, disconnect all power to the oven briefly, reconnect it, and call for service if it repeats again. An oven door that stays locked after self-clean will open once the oven cools below the locking temperature. LOC ON in the display means the controls are locked, not broken.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Hotpoint warranty and customer service: who to call first',
        paragraphs: [
          'The owner manuals for Hotpoint refrigerators, dishwashers, washers, dryers and ranges list a one-year limited warranty from the date of original purchase, covering any part that fails from a defect in materials or workmanship plus the labor to replace it. The warrantor is GE Appliances. Hotpoint states that its appliances are serviced by Bodewell, the GE Appliances service brand formerly known as GE Factory Service, at 833-426-3393 or bodewell.com. General questions go to the GE Appliances Answer Center at 1-800-626-2005. If your Hotpoint is inside that first year, call them: a covered repair should not cost you anything.',
          `Once the warranty has ended, you can choose who repairs it. That is where an independent company makes sense: the service call is ${SERVICE_CALL_FEE}, and you see the price for the repair before you agree to it.`,
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: where the Hotpoint model and serial numbers are',
        paragraphs: [
          'Hotpoint manuals tell you where the rating label is. On top-freezer refrigerators it is on the left side, near the middle of the refrigerator compartment. On dishwashers it is on the tub wall just inside the door. On washers it is under the lid, on dryers on the front behind the door, and on ranges on the front behind the range drawer. Send us a photo of the label, the symptom in one sentence and any code or flashing light, and we can check parts before the visit.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Hotpoint appliance repair across the Denver Metro area',
        paragraphs: [
          'We repair Hotpoint appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Northglenn, Commerce City, Englewood, Littleton, Centennial, Highlands Ranch, Parker, Castle Rock, Golden and Broomfield. Same-day appointments depend on where you are and what failed; call with the model number and the symptom and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is US Hotpoint the same company as Hotpoint in the UK?',
        a: 'No. In the Americas the Hotpoint brand is owned by GE Appliances, a Haier company. In Europe it is owned by Whirlpool Corporation, a separate company. We repair US Hotpoint appliances sold in the Denver area.',
      },
      {
        q: 'Are you Hotpoint service or a Hotpoint engineer?',
        a: 'No. H-Prime is an independent appliance repair company. Hotpoint appliances are factory serviced by Bodewell, formerly GE Factory Service, at 833-426-3393. We repair Hotpoint appliances out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does Hotpoint repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because a dishwasher drain pump and a refrigerator sealed system repair are very different jobs.`,
      },
      {
        q: 'What is the Hotpoint customer service number?',
        a: 'Hotpoint USA lists the GE Appliances Answer Center at 1-800-626-2005 for questions and Bodewell at 833-426-3393 to schedule factory service. For an appliance bought in Europe, Hotpoint USA directs you to Hotpoint or Whirlpool support there.',
      },
      {
        q: 'Why is my Hotpoint dishwasher Start light flashing?',
        a: 'A single flashing Start light usually means the door was opened or the cycle was interrupted: press Start and close the door within 4 seconds. If the light flashes in a sequence, the manual calls it a critical fault and says to call for service.',
      },
      {
        q: 'My Hotpoint refrigerator is warm or the freezer is frosting up. What should I check?',
        a: 'Give a new or moved refrigerator at least 24 hours to stabilize and make sure the dial is set near Colder. Frost in the freezer usually means the door is not sealing or was left open. If it stays warm with a good seal, book a diagnosis.',
      },
      {
        q: 'Is my Hotpoint still under warranty?',
        a: 'The owner manuals for Hotpoint refrigerators, dishwashers, washers, dryers and ranges list a one-year limited warranty on parts and labor from the date of original purchase. Inside that year, call GE Appliances or Bodewell first; after it ends, we can repair it.',
      },
    ],
  },

  frigidaire: {
    slug: 'frigidaire',
    name: 'Frigidaire',
    title: 'Frigidaire Repair Denver | Dishwasher, Oven, Refrigerator',
    description:
      `Independent Frigidaire repair in Denver Metro: dishwashers with i10 / i30 / i50 codes, ovens and ranges, refrigerators, washers, dryers. ${SERVICE_CALL_FEE} service call.`,
    h1: 'Frigidaire Appliance Repair in Denver',
    subtitle: `Dishwashers, ovens and ranges, refrigerators, washers and dryers, microwaves • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'Frigidaire is part of the Electrolux Group, and in the United States its appliances are warranted by Electrolux Major Appliances North America, the same Charlotte, North Carolina division that stands behind Electrolux-branded appliances. The owner guides and support articles are Frigidaire\'s own, though, and so are many of the codes: a Frigidaire dishwasher, range or top-load washer does not always report a fault the way its Electrolux cousin does. H-Prime repairs all of them across the Denver Metro area.',
      `We are an independent appliance repair company, not Frigidaire factory service and not a Frigidaire authorized servicer. Out of warranty, the service call is ${SERVICE_CALL_FEE}: you get a diagnosis first and a written price before any repair starts.`,
    ],
    sections: [
      {
        id: 'dishwasher',
        heading: 'Frigidaire dishwasher repair: what the i codes mean',
        paragraphs: [
          'A Frigidaire dishwasher that stops mid-cycle usually shows a code starting with i (some 2023 models show the same codes starting with E, such as E10 or E30). The use and care guide pairs each code with a first check. To clear a code, press Cancel or switch the breaker off for 5 minutes; if the code comes back after that reset, Frigidaire says to call service.',
        ],
        bullets: [
          'i10, low fill: the dishwasher did not get enough water. Look for a pinched water supply line or a shutoff valve that is not fully open.',
          'i20, i40 or iF0, not draining: clogged filters or a restricted drain line. Clean both filters and the sump area, check the drain hose for kinks and, if the dishwasher drains into a disposer, make sure the knockout plug was removed at installation. Frigidaire wants the drain hose at least 32 inches from the floor.',
          'i30, leak in the bottom pan: check for loose connections at the water inlet valve and that the dishwasher is level.',
          'i50 is a drain or wash motor problem, i60 a water heating problem and iC0 an electronic control problem. If the 5 minute power reset does not clear them, they need a technician.',
          'Not an error: PF means the power was interrupted (press Start or Cancel), CL or Cd means the door is not closed and latched, and Hd or HO is a heat delay while the water warms, roughly 1 to 2 minutes for each degree.',
        ],
      },
      {
        id: 'dishwasher-cleaning',
        heading: 'Frigidaire dishwasher not cleaning or leaving film',
        paragraphs: [
          'Frigidaire\'s own checklist for poor cleaning starts with the cycle: Rinse does not clean dishes at all, and Quick Wash or 30 Minute may not handle heavy soil. Detergent left in the dispenser after a cycle means something blocked the door of the cup. Then clean the filter, the glass trap and the spray arms; the quick start guide says to clean the glass trap once a month. For a cloudy film from hard water minerals, the manual suggests running a Normal cycle and adding 2 cups of white vinegar to the bottom of the tub at the second fill.',
          'If the filters are clean, the spray arms turn and the dishes still come out dirty, or the dishwasher drains and flashes its status lights again after a 5 minute power off, which Frigidaire links to a shorted keypad, the problem is a part: a pump, a heater, a sensor or a control. That is what we diagnose and quote.',
        ],
      },
      {
        id: 'oven',
        heading: 'Frigidaire oven and range repair: F codes and self-clean',
        paragraphs: [
          'Frigidaire\'s range error code guide lists the codes an electric range can show. The first step for most of them is the same: cut the power for up to 30 seconds, by unplugging the range or switching its breaker off and back on.',
        ],
        bullets: [
          'F1 is a shorted keypad, and F3, F20 or F26 a communication error between control boards.',
          'F10 means the oven sensed a higher than normal temperature. Let it cool before using it again; on ovens with Stone-Baked Pizza, check that the Pizza Shield is in the rack position the manual gives, which is position 7 on most models.',
          'F30 and F31 are an open and a shorted temperature probe; F40 and F41 a cooktop lock out; F90 to F94 a door lock problem.',
          'Self-clean takes 2 to 4 hours, and the door stays locked until the oven cools, about one more hour. The electric range manual says not to force the door and to give the motorized latch about 15 seconds.',
          'An oven that does not get hot enough can be low supply voltage or a torn door gasket, according to Frigidaire. A code that comes back after the power reset needs a diagnosis.',
        ],
      },
      {
        id: 'gas-range',
        heading: 'Frigidaire gas range: burners and Denver altitude',
        paragraphs: [
          'When a Frigidaire gas burner will not ignite, the gas range manual lists the checks: the knob turned fully to LITE, clean burner ports (cleaned with a small-gauge wire once cool), caps seated correctly, the range plugged in and the breaker on. All igniters spark at once by design; only the selected burner should light. During a power outage the burners can be lit with a match. An orange flame usually means dust in the line, and a high or orange flame on propane can mean the LP conversion was done incorrectly.',
          'For Denver, the installation instructions for Frigidaire freestanding gas ranges matter: above 2,000 feet the appliance rating is reduced by 4 percent for every 1,000 feet above sea level. At about 5,280 feet, that applies to every gas range in the metro. The ranges ship for natural gas, LP requires the conversion kit, and Frigidaire states that installation and service must be done by a qualified installer.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'Frigidaire refrigerator repair, Gallery and Professional included: not cooling, no ice, display codes',
        paragraphs: [
          'Frigidaire ships its refrigerators set to 37°F in the fresh food section and 0°F in the freezer and calls 33 to 47°F and -6 to 6°F acceptable. A new unit takes about 24 hours to stabilize, and Frigidaire says not to adjust the controls during that first day. Before booking a refrigerator repair, check what Frigidaire checks: a dedicated grounded outlet on a 15 or 20 amp breaker, a GFI outlet that has not tripped, vents not blocked by food, and a door gasket that grips a dollar bill. If the unit has run for 24 hours with no cooling, Frigidaire says to schedule service.',
          'For a garage refrigerator, the owner guide says not to install it where the temperature drops below 55°F or rises above 110°F, because the compressor cannot hold temperatures there. That covers many Denver garages in winter.',
        ],
        bullets: [
          'No ice: allow 24 hours for the first ice, then check that the dispenser display is not locked (hold for 3 seconds), the water supply is on, the filter is installed and not frozen, and the bin has no ice jam. Frigidaire recommends changing the filter every 6 months.',
          'DISP or DI SP on the display is an ice jam; HI or H means the compartment has been too warm for over an hour; PF is a power failure; 77 77 is demo mode, cleared by unplugging the unit for 5 minutes.',
          'SB is Sabbath mode, not a fault. Door Ajar shows after a door has been open more than 5 minutes.',
        ],
      },
      {
        id: 'laundry',
        heading: 'Frigidaire washing machine and dryer repair',
        paragraphs: [
          'Frigidaire top-load washers report fill and drain problems with short codes. E1 is a slow fill: check that the lid is closed, both faucets are fully open, the hoses are not kinked and the inlet screens are not clogged. E2 is a slow drain: check the breaker, the standpipe height and the drain hose, and remember the washer will not spin with the lid open. E5 means the washer is not level. On front-load washers, F2 means too many suds: switch to HE detergent and run an empty Quick Wash. The installation guide allows a standpipe from 39 to 96 inches high and at least 1 1/4 inches across.',
          'For a Frigidaire dryer that takes too long, the owner checklist starts with the lint screen after every load and a duct of at least 4 inches in rigid or semi-rigid metal with no more than four 90 degree bends. Air Fluff tumbles with no heat, the moisture sensor bars can be wiped with rubbing alcohol, and on a 208 volt supply drying takes about 20 percent longer than on 240 volts. An electric dryer with one of its two house fuses or breakers tripped tumbles without heat. A dryer that stays cold with good power and a clear vent, or shows a sensor or control error, needs service.',
        ],
      },
      {
        id: 'microwave',
        heading: 'Frigidaire microwave repair',
        paragraphs: [
          'Frigidaire recommends a dedicated circuit for a microwave, not a GFI outlet and not shared with other appliances; a breaker that trips after a surge is the first thing to check when the display is dark. The microwave manual also gives a simple test before a service call: heat 1 cup of water on HIGH for 1 minute and check that the light, the fan and the turntable work and that the water is warm. If any of them fail, check the outlet and the breaker; if those are fine, the microwave needs a technician. Frigidaire is explicit that owners should not try to repair a microwave themselves.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Frigidaire warranty and factory service',
        paragraphs: [
          'Most Frigidaire appliances have a one-year limited warranty. For that first year, Electrolux pays to repair or replace any part that fails from a defect in materials or workmanship. The manuals we checked list no extra sealed-system or component years. Warranty service must be obtained by contacting Frigidaire, at 1-800-374-4432, and performed by Electrolux or an authorized service company. Frigidaire also excludes damage caused by unauthorized service companies or by parts that are not genuine. For an appliance installed in the last 30 days, Frigidaire says to go back to your installer first.',
          `Once the warranty has ended, you choose who repairs it. With an independent company the service call is ${SERVICE_CALL_FEE} and you see the repair price before you agree to it.`,
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: where the Frigidaire model and serial number are',
        paragraphs: [
          'Frigidaire publishes the tag locations. Dishwashers have it on the inside edge of the door or the right side of the tub. Ranges and wall ovens carry it on the oven\'s interior side trim, the left side panel with the door open, or the front frame of the storage drawer. Top-freezer refrigerators have it on the upper left wall of the fresh food section, French door and side-by-side models on the upper right. Front-load washers carry it on the door trim, top-load washers at the back of the tub opening under the lid, and dryers inside the door opening. Send a photo of the tag with the code on the display.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Frigidaire repair across the Denver Metro area',
        paragraphs: [
          'We repair Frigidaire appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Northglenn, Broomfield, Golden, Englewood, Littleton, Centennial, Lone Tree, Highlands Ranch, Parker and Castle Rock. Same-day appointments depend on where you are and what failed; call with the model number and the code and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you an authorized Frigidaire repair service?',
        a: 'No. H-Prime is an independent appliance repair company. Frigidaire warranty service is arranged through Frigidaire at 1-800-374-4432 and done by Electrolux or an authorized service company. We repair Frigidaire appliances out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does Frigidaire appliance repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because a clogged dishwasher drain and a refrigerator sealed system repair are very different jobs.`,
      },
      {
        q: 'What does i30 mean on my Frigidaire dishwasher?',
        a: 'Frigidaire describes i30 as a leak or overflow detected in the bottom pan. Check for loose connections at the water inlet valve and that the dishwasher is level, then reset it. If i30 returns, book a diagnosis.',
      },
      {
        q: 'Why is my Frigidaire dishwasher not draining?',
        a: 'Codes i20, i40 or iF0 point to clogged filters or a restricted drain line. Clean both filters and the sump, check the drain hose for kinks and confirm the disposer knockout plug was removed. If it still holds water, book a visit.',
      },
      {
        q: 'My Frigidaire refrigerator is not cooling. What should I check?',
        a: 'Check the outlet and breaker, blocked vents and the door gasket, and give a new unit 24 hours to stabilize. Frigidaire does not recommend installing the refrigerator where it drops below 55°F. If it has run 24 hours with no cooling, book service.',
      },
      {
        q: 'Does my Frigidaire gas range need adjusting for Denver altitude?',
        a: 'Frigidaire installation instructions reduce the appliance rating by 4 percent for each 1,000 feet above 2,000 feet, and say installation and service must be done by a qualified installer. Denver is at about 5,280 feet, so this applies here.',
      },
      {
        q: 'Which Frigidaire appliances do you repair?',
        a: 'Dishwashers, gas and electric ranges, wall ovens, cooktops, microwaves, refrigerators and freezers, top-load and front-load washers, and gas and electric dryers, including Gallery and Professional models.',
      },
    ],
  },

  jennair: {
    slug: 'jennair',
    name: 'JennAir',
    title: 'JennAir Appliance Repair Denver | Fridge, Dishwasher, Oven',
    description:
      `Independent JennAir repair in Denver Metro: built-in and column refrigerators, dishwashers with F9E1 / F8E4 codes, wall ovens, ranges, cooktops. ${SERVICE_CALL_FEE} service call.`,
    h1: 'JennAir Appliance Repair in Denver',
    subtitle: `Built-in refrigerators, dishwashers, wall ovens, ranges and cooktops, microwaves, coffee systems • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'JennAir is a brand of Whirlpool Corporation, the same group behind Whirlpool, KitchenAid, Maytag and Amana. JennAir dates its story to 1965, when Lou Jenn brought downdraft ventilation into the kitchen and removed the need for an overhead hood, and downdraft cooktops and ranges are still part of the line next to built-in and column refrigerators, dishwashers, wall ovens, pro-style ranges, microwave drawers and built-in coffee systems. H-Prime repairs JennAir appliances across the Denver Metro area, from Cherry Hills Village and Greenwood Village to Lone Tree, Castle Pines and Golden.',
      `We are an independent appliance repair company, not a JennAir authorized service provider and not W Service, the service brand JennAir uses to schedule factory repairs. Out of warranty, the service call is ${SERVICE_CALL_FEE}: you get a diagnosis first and a written price before any repair starts.`,
    ],
    sections: [
      {
        id: 'refrigerator',
        heading: 'JennAir refrigerator repair: built-in, column and French door',
        paragraphs: [
          'JennAir built-in refrigerators ship with the controls at a mid setting. After installation, JennAir says to allow 24 hours for the unit to reach temperature and to wait 24 hours between adjustments. When both compartments run warm, the official checks are the power first: a grounded 115 volt outlet on its own 15 or 20 amp circuit, no extension cord, the breaker or GFCI not tripped, and the unit actually switched On. A column refrigerator left in showroom or demo mode will light up and not cool at all.',
          'JennAir rates its refrigerators for rooms between 55°F and 110°F and says not to install a built-in unit where the temperature falls below 55°F. In a Denver garage or an unheated space, that alone can explain a compressor that runs constantly or a compartment that will not hold temperature.',
        ],
        bullets: [
          'Over Temperature alarm: the refrigerator has been above 48°F or the freezer above 15°F for more than an hour and a half.',
          'PO on the display: a power outage happened and the freezer reached 18°F or warmer while it was out. Check the food.',
          'A flashing F: turn the power off for 1 minute. If the F comes back, JennAir says to schedule service. Call for Service on the display: switch the breaker off for 5 minutes first.',
          'Ice on column models: allow 24 hours for the first batch, discard the first three batches and give the bin 2 to 3 days to fill; production is about 3.2 pounds a day. Low water pressure gives slow or hollow ice, and JennAir recommends replacing the water filter every 6 months.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'JennAir dishwasher repair: F codes and flashing lights',
        paragraphs: [
          'A JennAir dishwasher with a display reports a fault as an F and E pair, for example F9E1. Models without a display flash a light in a pattern instead: 9 flashes, a pause and 1 flash is the same long drain fault. For any of them, JennAir\'s first step is to cut the power for 30 seconds by unplugging the dishwasher or switching its breaker off. If the code comes back, it needs service.',
        ],
        bullets: [
          'F9E1, long drain, and F9E2, drain motor: clean the filter, check the drain hose for kinks or clogs, run the disposer and, on a new installation, make sure the disposer knockout plug was removed. JennAir suggests pushing a pencil about 3 inches into the disposer inlet to check. The drain loop should sit at least 20 inches from the floor; below that, use an air gap.',
          'F8E4, water in the base drip tray: check the water connections and the float switch and empty the tray. Excess suds can also trip it. Press Cancel once to silence the alarm and again to clear it.',
          'F8E5, fill valve stuck open: turn the water supply to the dishwasher off and book service. H2O means the dishwasher is not detecting water.',
          'F6E3, too many suds: remove the suds and run a cleaning cycle. F6E4, the float switch: check that the dishwasher is level.',
          'F7E2 points to the wash motor, F4E2 and F4E3 to the heating system and F1E1 to the control module. These are parts, not owner fixes.',
        ],
      },
      {
        id: 'dishwasher-cleaning',
        heading: 'JennAir dishwasher not cleaning',
        paragraphs: [
          'Before booking a repair for dirty dishes, check what JennAir checks: the water valve under the sink fully open, water pressure between 20 and 120 psi, rinse aid in the dispenser, and water reaching the dishwasher at 120°F. Running the kitchen hot faucet until it is hot before starting a cycle helps. JennAir also says to clean the filter regularly: on models with a twist-out filter it comes out with a quarter turn counterclockwise, rinses under the tap and takes a soft brush for hard water deposits. A little standing water in the filter area is normal. If the filter is clean, the water is hot and dishes still come out dirty, the dishwasher needs a diagnosis.',
        ],
      },
      {
        id: 'oven',
        heading: 'JennAir wall oven and range repair: F codes and self-clean',
        paragraphs: [
          'JennAir wall ovens group their fault codes by the first number, and for each family JennAir gives the same first step: switch the breaker off for one minute and back on.',
        ],
        bullets: [
          'F1 and F2 codes: the user interface, the keypad or the control.',
          'F3 codes: temperature sensors. F3E0 is the upper oven sensor, F3E1 the lower oven sensor and F3E4 the meat probe.',
          'F5 codes: the door latch or the door switch. F6 codes: the appliance manager control. F8 codes: the cooling fan or airflow.',
          'F4 codes on combination ovens: the microwave sensors or inverter. F7 codes on steam ovens: the steam water system.',
          'Door still locked after self-clean: the oven has to cool to about 200°F, and the latch can take 30 to 90 minutes to release. Pressing Cancel/Off starts a latch reset of 20 to 30 seconds. A latch that stays stuck after that needs service.',
          'Call Service on a range or oven: press Cancel. If it returns, switch the breaker off for one minute, start a bake and watch it for a minute.',
        ],
      },
      {
        id: 'gas-cooktop',
        heading: 'JennAir gas cooktop, range and downdraft at Denver altitude',
        paragraphs: [
          'For a JennAir gas burner that will not light, JennAir says to clean the ports with a pin or a small wire, never a toothpick, and to make sure the cap is seated, centered and matched to its base. If none of the burners light, check the 120 volt outlet, the breaker and the main gas valve, and after a new installation let the air purge from the line. All burners click when one is turned to LITE; a burner that keeps clicking is often damp and needs to dry. On models with an electronic lockout, the burners do not light during a power failure.',
          'Altitude depends on the model. The installation instructions for JennAir commercial-style gas cooktops rate the burners for elevations up to 2,000 feet, reduce them by 4 percent for each 1,000 feet above sea level, and require a high altitude conversion kit above 6,560 feet. Pro-style gas ranges have their own kits above 6,560 feet, while the commercial-style gas and dual fuel range instructions say reorificing is not required. Denver, at about 5,280 feet, is below the kit line. For downdraft cooktops and ranges, JennAir reduces the recommended vent run by 20 percent above 4,500 feet, which applies across the metro.',
        ],
      },
      {
        id: 'microwave-coffee',
        heading: 'JennAir microwave drawer and built-in coffee system',
        paragraphs: [
          'A JennAir microwave drawer that will not run is first checked for power and the breaker, then for Control Lock (hold the button for 3 seconds to release it), a timer left running, and Demo Mode. JennAir\'s heating test is 1 cup of water for 1 minute on HI. A built-in coffee system runs a SELF DIAGNOSIS with a preheat and rinse each time its main power comes on, and it cannot be interrupted; that is normal. For coffee that is not hot enough, JennAir suggests preheating the cups, using the Rinse function and raising the coffee temperature setting. Leaks from the service door or water from the spouts instead of coffee are faults to diagnose.',
        ],
      },
      {
        id: 'warranty',
        heading: 'JennAir warranty and who to call',
        paragraphs: [
          'JennAir warranty terms depend on the appliance and on when your warranty was printed, so the warranty in your own documents is what counts. The current JennAir major appliance warranty gives 2 years of parts and labor from the date of delivery. On refrigeration, the sealed system (compressor, evaporator, condenser, dryer and tubing) is covered for parts and labor in years 3 to 6 and for parts only in years 7 to 12. Older cooking and dishwasher warranties add 3 to 5 years of parts-only coverage on specific components such as electronic controls, elements, sealed gas burners and the dishwasher wash system.',
          'Warranty service is done by authorized JennAir service providers and booked through JennAir at 1-800-JENNAIR (1-800-536-6247) or service.jennair.com. The current warranty does not cover damage caused by unauthorized servicers, though it states that using one will not void the warranty itself. Inside the warranty, call JennAir first: a covered repair should cost you nothing.',
          `Once the warranty has ended, or for a part it no longer covers, you choose who repairs it. That is where an independent company makes sense: the service call is ${SERVICE_CALL_FEE} and you see the repair price before you agree to it. If your refrigerator has a sealed system problem in years 7 to 12, ask JennAir about the parts-only coverage first.`,
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: where the JennAir model and serial number are',
        paragraphs: [
          'JennAir publishes the tag locations. A built-in dishwasher has it on the left side of the tub frame. French door and bottom freezer refrigerators carry it inside the fresh food section on the left, side-by-side models on the right. Built-in wall ovens have it at the top of the oven cavity, commercial-style ranges on the ceiling of the oven cavity, and other ranges on the oven frame or the storage drawer frame. Gas cooktops carry the rating plate on the underside, a retractable downdraft on the front above the terminal box cover, and a built-in microwave under the control panel along the vent on the right. Send a photo of the tag, the code on the display and the symptom in one sentence.',
        ],
      },
      {
        id: 'service-area',
        heading: 'JennAir repair across the Denver Metro area',
        paragraphs: [
          'We repair JennAir appliances in Denver, Cherry Creek, Cherry Hills Village, Greenwood Village, Englewood, Littleton, Centennial, Lone Tree, Highlands Ranch, Castle Pines, Castle Rock, Parker, Aurora, Lakewood, Golden, Arvada, Westminster and Broomfield. Same-day appointments depend on where you are and what failed; call with the model number and the code and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you an authorized JennAir repair service?',
        a: 'No. H-Prime is an independent appliance repair company. JennAir warranty repairs are done by authorized JennAir service providers, booked at 1-800-JENNAIR (1-800-536-6247) or service.jennair.com. We repair JennAir appliances out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does JennAir appliance repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because a clogged dishwasher filter and a built-in refrigerator control are very different jobs.`,
      },
      {
        q: 'What does F9E1 mean on my JennAir dishwasher?',
        a: 'F9E1 is a long drain. Clean the filter, check the drain hose for kinks, run the disposer and confirm the knockout plug was removed, then cut the power for 30 seconds. If F9E1 returns, book a visit.',
      },
      {
        q: 'My JennAir refrigerator is not cooling. What should I check?',
        a: 'Check that it is switched On, that the outlet, breaker and GFCI are fine, and that a column model is not in showroom mode. Give it 24 hours after any change. JennAir rates its refrigerators for rooms from 55°F to 110°F. If it still runs warm, book a diagnosis.',
      },
      {
        q: 'Why is my JennAir oven door locked after self-clean?',
        a: 'The oven has to cool to about 200°F, and the latch can take 30 to 90 minutes to release. Pressing Cancel/Off starts a latch reset of 20 to 30 seconds. If the door stays locked after that, the latch needs service.',
      },
      {
        q: 'What does the JennAir warranty cover?',
        a: 'The current JennAir major appliance warranty gives 2 years of parts and labor, and refrigerator sealed systems get parts and labor through year 6 and parts only through year 12. Older cooking and dishwasher warranties differ, so check the one that came with your appliance.',
      },
      {
        q: 'Which JennAir appliances do you repair?',
        a: 'Built-in, column and French door refrigerators and freezers, dishwashers, wall ovens, gas, dual fuel and electric ranges, gas, electric and downdraft cooktops, microwave drawers and built-in coffee systems.',
      },
    ],
  },

  samsung: {
    slug: 'samsung',
    name: 'Samsung',
    title: 'Samsung Appliance Repair Denver | Dryer, Washer, Fridge, Oven',
    description:
      `Independent Samsung appliance repair in Denver Metro: dryers, washers with 4C / 5C / UE codes, refrigerators, ranges and ovens, dishwashers. ${SERVICE_CALL_FEE} service call.`,
    h1: 'Samsung Appliance Repair in Denver',
    subtitle: `Dryers, washers, refrigerators, ranges and ovens, dishwashers, microwaves • Same-day service • ${SERVICE_CALL_FEE} service call`,
    intro: [
      'Samsung home appliances report almost every problem with a short information code on the display, and Samsung publishes what most of those codes mean and what to try first. This page collects those official checks for the Samsung appliances we repair across the Denver Metro area: front-load and top-load washers, electric and gas dryers, French door and side-by-side refrigerators, gas and electric ranges and wall ovens, dishwashers and microwaves.',
      `H-Prime is an independent appliance repair company. We are not a Samsung service center and not a Samsung authorized servicer, and Samsung warranty repairs go through Samsung. Out of warranty, the service call is ${SERVICE_CALL_FEE}: you get a diagnosis first and a written price before any repair starts.`,
    ],
    sections: [
      {
        id: 'dryer',
        heading: 'Samsung dryer repair: not heating, long cycles, codes',
        paragraphs: [
          'Most Samsung dryer codes point to air, power or a sensor, and Samsung\'s own code guide says the most common cause of the temperature codes is a clogged lint screen or vent. Samsung recommends cleaning the lint filter every cycle and the vent once or twice a year, and says not to use plastic or foil vent duct. The gas dryer manual allows up to 80 feet of rigid 4 inch duct with no elbows but only 47 feet with three; Samsung\'s support page adds that each 90 degree turn cuts the maximum length by 6 feet.',
        ],
        bullets: [
          'tS, tC, tO or tE: a temperature sensor code. Clean the lint screen and check the vent for restrictions first.',
          'HC or hE: a heating problem. Clean the lint filter and vent; on an electric dryer, low voltage is a job for an electrician.',
          '9C1, 9E or 2E: a voltage error. The dryer should be on its own circuit with no extension cord, and an electric dryer needs 240 volts. An electric dryer runs on two circuits, so with one breaker tripped it spins but does not heat.',
          'dC, dE, d0 or do: the door. Ct means the room is below freezing or above 104°F, worth knowing for a garage laundry in a Denver winter.',
          '3C (motor), oD (dry time) and HC2 (gas ignition): turn the power off for 2 to 3 minutes and restart. If the code comes back, the dryer needs service.',
        ],
      },
      {
        id: 'washer',
        heading: 'Samsung washer repair: 4C, 5C, UE, LE and dC codes',
        paragraphs: [
          'Samsung\'s washer code guide groups the information codes by what they check. For a code not listed, Samsung says to turn the washer off for 2 to 3 minutes and restart. On front loaders, Samsung recommends cleaning the pump (debris) filter at least once a month or about every 40 washes and running Self Clean or Pure Cycle once a month.',
        ],
        bullets: [
          '4C, 4E or nF, not filling: hot hose to hot, cold to cold, both valves fully open, then unplug for 1 minute and clean the inlet filters. 4C2 or 4E2 means the hoses are swapped.',
          '5C, 5E or nd, not draining: the drain hose goes 6 to 8 inches into the standpipe, not airtight and not kinked, at least 18 and no more than 96 inches high, with no extension kit. Clean the pump filter on a front loader. After a hot cycle, wait about an hour before draining.',
          'UE, Ub, U6 or Ur, unbalanced load: redistribute the load. Ur means the washer is retrying, not a fault.',
          'LE, LC, 1E or 1C, water level or leak: look for a leak, check that the hoses are not kinked and run an empty cycle to check for suds. SUd or Sd is excessive suds from the detergent, and Samsung says no service is needed.',
          'dC, dE, dS or dL is a door error on most models, though on some dC means an unbalanced load. 3E or 3C is a motor error and HC or HE a heater error: those are repairs.',
        ],
      },
      {
        id: 'refrigerator',
        heading: 'Samsung refrigerator and freezer repair: not cooling, ice maker, codes',
        paragraphs: [
          'Samsung sets most refrigerators to 38°F in the fresh food section and -2°F in the freezer, and says the unit can take up to 28 hours to reach a new setting. Before booking a refrigerator repair, check Samsung\'s list: 2 inches of clearance at the top, back and sides, food kept 2 inches from the vents, the door gasket passing the dollar bill test, and a room above 55°F, since a colder room reduces performance. A display showing OF OF, O FF or scrolling bars means Cooling Off (demo) mode: the lights work and nothing cools. That is a setting, not a failure, and Samsung gives the button sequence in its support article.',
          'If a code appears, Samsung asks owners not to unplug the refrigerator or press the panel unless the guide tells them to, because that makes the fault harder for a technician to read. Write the code down before calling.',
        ],
        bullets: [
          '21E is the freezer fan, often frozen because a door or gasket does not seal; 22E or 22C is the refrigerator fan; 40E or 40C the ice room fan.',
          '5E is the refrigerator defrost sensor, 8E and 14E ice maker sensors, 33E the ice pipe heater and 39E or 39C the ice maker function. 84C is a compressor lock.',
          '83E, 85E, 86E or 88 88 point to power: turn the refrigerator off for 60 seconds. Codes not on Samsung\'s list need service.',
          'Ice maker: the freezer must be at 0°F or colder and the water pressure at least 20 psi. Samsung says not to defrost the ice maker yourself; one that keeps freezing over needs service, and smart models may need a firmware update through SmartThings.',
        ],
      },
      {
        id: 'oven',
        heading: 'Samsung oven, range and stove repair',
        paragraphs: [
          'On Samsung ranges and wall ovens, -dE- or -dC- points to the partition not being installed or to the door. tESt or tE5t is demo mode and the oven will not heat. bAd LinE points to the power connection and C-24 to a blocked vent. For other codes Samsung says to turn the oven off and on, then switch the breaker off for 30 seconds, and to request service if the code returns. Self Clean will not start while the partition or the probe is in, the warming drawer is on or the cooktop is in use; Loc on the display is Control Lock.',
          'On a Samsung gas range, all burners spark and click when any knob is at LITE. Continuous clicking after the burner lights usually means moisture on the ignition switches: let it dry, and if it continues, call a technician. If a burner will not light, the gas range manual says to check the plug, the breaker, the gas supply, the burner caps, the electrodes and the burner base alignment. Large or yellow flames point to the wrong orifice for the gas type, LP versus natural gas, and Samsung says to contact the installer. An oven burner that will not light with a working cooktop can be the shut-off on the gas pressure regulator. If you smell gas, leave the house and call the gas supplier from a neighbor\'s phone.',
        ],
      },
      {
        id: 'dishwasher',
        heading: 'Samsung dishwasher repair: 5C, 4C, LC and 1E codes',
        paragraphs: [
          'Samsung says to troubleshoot a dishwasher code before resetting it. 5C, SC, 5E or SE is a drain problem: check the sink drain and the disposal (the knockout cap must be removed), that the drain hose is not pinched under the unit, and the air gap or high loop. Run the sink for 30 seconds; if the sink itself will not drain, Samsung says that is a job for a plumber. 4C or 4E is the water supply. 1E on Waterwall models means a clogged filter, cleared by cleaning it. LC or LE is the leak sensor: the dishwasher drains and will not turn off. HE and HC are heater codes, 3C the pump and tE the temperature sensor. A code that returns after the checks needs a diagnosis.',
        ],
      },
      {
        id: 'microwave',
        heading: 'Samsung microwave repair',
        paragraphs: [
          'For a Samsung microwave code, Samsung\'s first step is to unplug the microwave or switch off its breaker, let it dry if moisture got in, and wait 60 seconds. C-d0, C-d1 or C-d2 relate to the door or a key, C-F0 to C-F2 to communication, C-20 to C-22 to the temperature sensor and -SE- to a shorted key. A code that comes back after the reset needs service.',
        ],
      },
      {
        id: 'warranty',
        heading: 'Samsung warranty and the Samsung service number',
        paragraphs: [
          'Samsung says most of its appliances come with a one-year manufacturer\'s warranty for parts and labor. Refrigerators add 5 years of parts and labor on the sealed refrigeration system and 10 years of parts with 5 years of labor on the Digital Inverter compressor. Washers bought on or after April 1, 2026 get 10 years of coverage on the Digital Inverter motor, and older washer manuals list parts-only terms on the motor and the tub, so check the warranty for your model and keep the receipt.',
          'Samsung states that only authorized Samsung service centers can perform covered repairs, and its warranty does not cover unauthorized repairs or parts Samsung did not supply. The Samsung support number is 1-800-SAMSUNG (1-800-726-7864), or request service online after registering the product. Inside the warranty, call Samsung first.',
          `Once the warranty has ended, you choose who repairs it. With an independent company the service call is ${SERVICE_CALL_FEE} and you see the repair price before you agree to it. If a refrigerator compressor or a newer washer motor fails after year one, ask Samsung about the extended coverage first.`,
        ],
      },
      {
        id: 'before-you-call',
        heading: 'Before you call: the Samsung model number and the code',
        paragraphs: [
          'Samsung parts are specific to the model. On a refrigerator, Samsung puts the model and serial label on the lower left side of the exterior near the front, with a second label inside on a side wall above the top shelf. On other Samsung appliances, find the label with the model and serial number and send a photo of the label, the code on the display and the symptom in one sentence, and we can check parts before the visit.',
        ],
      },
      {
        id: 'service-area',
        heading: 'Samsung appliance repair across the Denver Metro area',
        paragraphs: [
          'We repair Samsung appliances in Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Northglenn, Commerce City, Broomfield, Golden, Englewood, Littleton, Centennial, Lone Tree, Highlands Ranch, Parker and Castle Rock. Same-day appointments depend on where you are and what failed; call with the model number and the code and you get the earliest realistic slot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are you a Samsung service center in Denver?',
        a: 'No. H-Prime is an independent appliance repair company, not a Samsung service center or authorized servicer. Samsung warranty repairs are booked through Samsung at 1-800-SAMSUNG (1-800-726-7864). We repair Samsung appliances out of warranty, with a price agreed before any work.',
      },
      {
        q: 'How much does Samsung appliance repair cost in Denver?',
        a: `The service call is ${SERVICE_CALL_FEE}. After the diagnosis you get a written price before any repair starts. We do not publish repair prices because a clogged dryer vent and a refrigerator ice maker are very different jobs.`,
      },
      {
        q: 'Why is my Samsung dryer not heating?',
        a: 'Clean the lint screen and check the vent first; Samsung says that is the most common cause of temperature codes. On an electric dryer, check both breakers: with one tripped, the dryer spins without heat. If it stays cold, book a diagnosis.',
      },
      {
        q: 'What does 5C mean on my Samsung washer?',
        a: '5C, 5E or nd means the washer is not draining. Check that the drain hose is not kinked and sits 6 to 8 inches into the standpipe, and clean the pump filter on a front loader. If the code returns, book a visit.',
      },
      {
        q: 'My Samsung refrigerator shows OF OF and is not cooling. Is it broken?',
        a: 'OF OF means Cooling Off (demo) mode, which turns off cooling while the lights and display keep working. Samsung says service is not required; its support article gives the button sequence to turn it off.',
      },
      {
        q: 'What does the Samsung appliance warranty cover?',
        a: 'Most Samsung appliances have one year of parts and labor. Refrigerators get 5 years on the sealed system and 10 years of parts with 5 years of labor on the Digital Inverter compressor. Covered repairs must be done by an authorized Samsung service center.',
      },
      {
        q: 'Which Samsung appliances do you repair?',
        a: 'Front-load and top-load washers, electric and gas dryers, refrigerators and freezers, gas and electric ranges, wall ovens and cooktops, dishwashers and microwaves. We do not repair Samsung TVs or phones.',
      },
    ],
  },
};

export function getBrandContent(slug: string): BrandContent | undefined {
  return brandContent[slug];
}
