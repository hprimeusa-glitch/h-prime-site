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
};

export function getBrandContent(slug: string): BrandContent | undefined {
  return brandContent[slug];
}
