// Single source of truth for service-area cities and their landing pages.
export const cities = [
  'Florence',
  'Muscle Shoals',
  'Sheffield',
  'Tuscumbia',
  'Killen',
  'Russellville',
  'St. Florian',
  'Underwood-Petersville',
  'Zip City',
  'Waterloo',
  'Rogersville',
  'Athens',
] as const;

// Cities with dedicated landing pages (slug → /electrician-<slug>-al/)
export interface CityInfo {
  slug: string;
  name: string;
  county: string;
  nearby: string[];
  intro: string[];
  jobs: string[];
}

export const cityInfo: CityInfo[] = [
  {
    slug: 'florence',
    name: 'Florence',
    county: 'Lauderdale County',
    nearby: ['Muscle Shoals', 'Sheffield', 'Killen'],
    intro: [
      'Florence is the biggest city in the Shoals and the seat of Lauderdale County — which means its housing stretches from antebellum-era homes near downtown and the historic districts to mid-century ranchers, to fast-growing subdivisions on the west side. Every era of wiring is here, and each one has its own failure points.',
      'In the older neighborhoods — the Wood Avenue historic district, Sweetwater, the streets around the University of North Alabama — we regularly see 60-to-100-amp services, cloth-insulated wiring, fuse boxes that were "temporary" fifty years ago, and panels loaded far past what their original builders imagined. Modern households run air conditioning, dryers, ranges, EV chargers, hot tubs, and home offices on systems designed for a radio and a refrigerator.',
      'Out toward Cox Creek and the new growth corridors, the work flips: newer homes usually need capacity, not repair — EV charger circuits, sub-panels for shops and garages, whole-house surge protection, and lighting that finishes a space instead of just lighting it.',
    ],
    jobs: [
      'Panel and service upgrades for older Florence homes still on 100-amp service',
      'Whole-home rewiring in the historic districts, done room by room with care for plaster',
      'EV charger installation on dedicated circuits for driveways and garages',
      'Recessed lighting, dimmers, and fixture upgrades in UNA-area rentals and homes',
      'Troubleshooting flickering lights, dead outlets, and breakers that trip under load',
      'Whole-house surge protection ahead of Tennessee Valley storm season',
    ],
  },
  {
    slug: 'muscle-shoals',
    name: 'Muscle Shoals',
    county: 'Colbert County',
    nearby: ['Florence', 'Sheffield', 'Tuscumbia'],
    intro: [
      'Muscle Shoals has grown faster than almost anywhere else in the Shoals over the last two decades — new subdivisions, new schools, new commercial strips along Highway 43 and the 187 corridor. Most of the housing stock is newer, but that changes what an electrician is actually needed for.',
      'In a city famous for its recording studios, the calls we get are practical: a garage that needs a sub-panel for a workshop or welder, a driveway ready for a Level 2 EV charger, a theater room that needs its own circuits, landscape and security lighting that actually covers the property, and panel capacity questions from families adding hot tubs or tankless water heaters.',
      'The commercial side matters here too — Muscle Shoals businesses from small shops to studios need lighting upgrades, additional circuits, and code corrections that keep inspections passed and doors open.',
    ],
    jobs: [
      'EV charger installation for Muscle Shoals homes and daily commuters',
      'Garage and workshop sub-panels for welders, compressors, and tools',
      'Landscape and security lighting for larger new-construction lots',
      'Home theater and office circuits for today\'s power-hungry households',
      'Panel capacity evaluations before hot tub, sauna, or tankless additions',
      'Commercial lighting and circuit work for Muscle Shoals businesses',
    ],
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    county: 'Colbert County',
    nearby: ['Muscle Shoals', 'Tuscumbia', 'Florence'],
    intro: [
      'Sheffield is one of the Shoals\' historic mill towns, and its housing tells that story: solid older homes built for the workers of another era, sitting on electrical systems that were cutting-edge when they went in. Many were never meant to carry the loads a 2020s household plugs in.',
      'That makes Sheffield one of the most rewiring- and panel-heavy parts of our service area. Knob-and-tube leftovers, cloth wiring past its life, overloaded fuse panels, two-prong outlets with no ground, and DIY fixes from decades of previous owners — we see and safely correct all of it.',
      'Sheffield homeowners are often working toward the same goal: keep the character of an older home, make it safe and insurable, and stop treating the breaker box like a slot machine. That is exactly the kind of work we do best.',
    ],
    jobs: [
      'Whole-home rewiring for Sheffield\'s older mill-era housing stock',
      'Fuse box and outdated panel replacement with modern breakers',
      'Grounded outlet installation replacing old two-prong receptacles',
      'Code corrections for older homes being sold or insured',
      'Lighting upgrades that respect older home aesthetics',
      'Safety inspections before renovations or purchases',
    ],
  },
  {
    slug: 'tuscumbia',
    name: 'Tuscumbia',
    county: 'Colbert County',
    nearby: ['Sheffield', 'Muscle Shoals', 'Florence'],
    intro: [
      'Tuscumbia is the seat of Colbert County and one of the oldest towns in the Shoals — best known as the birthplace of Helen Keller at Ivy Green, and for the historic homes that line its older streets. Where a town has this much history, the wiring often has just as much.',
      'Restoration-minded Tuscumbia homeowners face a specific challenge: modernizing the electrical system of an older or historic home without destroying the plaster, trim, and character that make it worth preserving. That work takes patience and a real plan — running circuits surgically, updating panels in ways that respect the home, and knowing when surface raceway is the honest choice over fishing walls that shouldn\'t be opened.',
      'Beyond the historic districts, Tuscumbia also has everyday needs: service upgrades, generator and surge protection ahead of storm season, lighting for Spring Park events and downtown businesses, and straightforward repairs done right.',
    ],
    jobs: [
      'Electrical updates for historic Tuscumbia homes with minimal wall damage',
      'Service and panel upgrades sized for modern household loads',
      'Surge protection and generator hookups for storm-prone springs',
      'Kitchen and bath circuit modernization in older homes',
      'Lighting for downtown Tuscumbia shops and storefronts',
      'Safety evaluations before purchasing an older home',
    ],
  },
  {
    slug: 'killen',
    name: 'Killen',
    county: 'Lauderdale County',
    nearby: ['Florence', 'Athens', 'Rogersville'],
    intro: [
      'Killen sits on the US-72 corridor west of Florence, and it has quietly become one of the faster-growing bedroom communities in the area — new construction, families moving out from the city, and a lot of homes being upgraded by their owners.',
      'Newer Killen homes usually come to us for capacity and comfort: EV chargers in the garage, sub-panels for shops and pools, lighting packages that make a new house feel finished, and ceiling fans installed correctly the first time. The growing stock of shops and outbuildings on larger lots also means a steady stream of circuit and panel work beyond the main house.',
      'And because Killen sits between Florence and the rural stretches of Lauderdale County, we also handle the in-between work: well pumps, detached garages, RV hookups, and barn or shop power done to code.',
    ],
    jobs: [
      'EV charger installation for Killen commuters and growing families',
      'Sub-panels and circuits for detached garages, shops, and outbuildings',
      'Pool, spa, and well-pump electrical hookups',
      'Ceiling fan and lighting installation in new construction',
      'RV and generator inlet circuits for larger properties',
      'Panel upgrades as families add high-draw appliances',
    ],
  },
  {
    slug: 'russellville',
    name: 'Russellville',
    county: 'Franklin County',
    nearby: ['Killen', 'Athens'],
    intro: [
      'Russellville is the Franklin County seat, south of the main Shoals cities, with a mix of town living, small industry, and working farms around it. The electrical work that side of the area asks for reflects that mix.',
      'In town, it\'s the familiar list: panel upgrades on older homes, rewiring where the years have caught up, lighting and fixture work, and repairs done promptly. Around town, the calls get more agricultural — well pumps, barn and shed power, chicken house service, gate operators, and the three-phase and single-phase work that keeps small operations running.',
      'Russellville also sits close enough to the storm paths that cross northwest Alabama that surge protection and generator readiness come up in almost every panel conversation. It\'s some of the most practical money a homeowner or farmer can spend.',
    ],
    jobs: [
      'Agricultural wiring — barns, shops, well pumps, and outbuildings',
      'Panel and service upgrades for older Russellville homes',
      'Generator readiness and whole-house surge protection',
      'Chicken house and farm electrical service work',
      'Gate operators, RV hookups, and shop circuits',
      'Prompt repairs — outlets, breakers, lighting, and fixtures',
    ],
  },
];

// Map city name → landing page path
export const cityPages: Record<string, string> = Object.fromEntries(
  cityInfo.map((c) => [c.name, `/electrician-${c.slug}-al/`])
);
