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
};

export function getBrandContent(slug: string): BrandContent | undefined {
  return brandContent[slug];
}
