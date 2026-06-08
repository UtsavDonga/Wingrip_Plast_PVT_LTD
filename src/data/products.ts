import type { Product, ProductCategory } from '@/types'

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'cpvc-pipes-fittings',
    name: 'CPVC Pipes & Fittings',
    shortDescription:
      'Hot and cold water plumbing rated up to 93°C. IS 15778 / ASTM D2846 compliant.',
    description:
      'Wingrip CPVC pipes and fittings are engineered for reliable hot and cold water distribution in residential, commercial, and institutional buildings. With a continuous service temperature rating up to 93°C and pressure resistance that outlasts conventional plumbing materials, our CPVC system delivers decade-long performance with minimal maintenance.',
    icon: 'pipe-cpvc',
    color: 'bg-blue-50 border-blue-200',
    productCount: 11,
  },
  {
    slug: 'upvc-pipes-fittings',
    name: 'UPVC Pipes & Fittings',
    shortDescription:
      'Cold water supply and pressure piping up to 10 kg/cm². IS 4985 compliant.',
    description:
      'Wingrip UPVC pipes are the backbone of water supply infrastructure across India. Manufactured to IS 4985 standards, they handle pressures up to 10 kg/cm² without corrosion, scaling, or chemical degradation. Ideal for municipal water supply, borewell connections, and industrial pressure piping.',
    icon: 'pipe-upvc',
    color: 'bg-green-50 border-green-200',
    productCount: 11,
  },
  {
    slug: 'swr-pipes-fittings',
    name: 'SWR Pipes & Fittings',
    shortDescription:
      'Soil, waste, and rainwater drainage systems. IS 14735 compliant. Ring fit and sel fit.',
    description:
      'Wingrip SWR (Soil, Waste & Rainwater) drainage pipes and fittings are designed for efficient, leak-free drainage in residential and commercial buildings. Available in both ring-fit (rubber-ring joint) and sel-fit (solvent cement joint) versions, our SWR range covers everything from single-storey homes to multi-storey commercial complexes.',
    icon: 'pipe-swr',
    color: 'bg-orange-50 border-orange-200',
    productCount: 8,
  },
  {
    slug: 'agriculture-pipes',
    name: 'Agriculture Pipes',
    shortDescription:
      'PVC pressure pipes for irrigation, borewell, and water conveyance. IS 4985 / IS 12818.',
    description:
      'Wingrip agriculture pipes are built for the demanding conditions of Indian farming — from shallow borewell connections to long-distance water conveyance across fields. Our range covers irrigation mains, drip laterals, column pipes, and canal lining applications, ensuring water reaches your crops without loss.',
    icon: 'pipe-agri',
    color: 'bg-emerald-50 border-emerald-200',
    productCount: 6,
  },
  {
    slug: 'water-tanks',
    name: 'Water Tanks',
    shortDescription:
      '3-layer roto-moulded tanks from 500L to 5000L. UV-protected, food-grade inner layer.',
    description:
      'Wingrip water storage tanks are constructed using triple-layer roto-moulding technology — an outer UV-stabilised black layer, a middle foam insulation layer, and an inner white food-grade layer. This construction keeps stored water clean, cool, and free from contamination, whether installed on rooftops, underground, or in industrial settings.',
    icon: 'water-tank',
    color: 'bg-sky-50 border-sky-200',
    productCount: 6,
  },
  {
    slug: 'solvent-cement',
    name: 'Solvent Cement',
    shortDescription:
      'High-bond UPVC and CPVC solvent cement. IS 14182 compliant. Available in 50ml to 1L.',
    description:
      'A pipe joint is only as reliable as the adhesive that seals it. Wingrip solvent cement is formulated for maximum bond strength, fast setting time, and low VOC emissions. Available in CPVC and UPVC grades, our solvent cement is trusted by plumbers and contractors across India for installations that last without re-work.',
    icon: 'solvent-cement',
    color: 'bg-yellow-50 border-yellow-200',
    productCount: 5,
  },
  {
    slug: 'brass-fittings-valves',
    name: 'Brass Fittings & Valves',
    shortDescription:
      'IS 319 Grade-I leaded brass ball valves, gate valves, and transition fittings. 15mm–50mm.',
    description:
      'Wingrip brass fittings and valves provide the critical metal-to-plastic transition points in modern plumbing systems. Manufactured from IS 319 Grade-I leaded brass for precision machining and long service life, our range includes ball valves, gate valves, MTA/FTA inserts, and full brass fittings for both CPVC and UPVC systems.',
    icon: 'brass-valve',
    color: 'bg-amber-50 border-amber-200',
    productCount: 6,
  },
]

export const PRODUCTS: Product[] = [
  // ── CPVC Pipes & Fittings ──────────────────────────────────────────────────
  {
    id: 'cpvc-pipe',
    slug: 'cpvc-pipe',
    name: 'CPVC Pipe',
    category: 'cpvc-pipes-fittings',
    categoryName: 'CPVC Pipes & Fittings',
    tagline: 'Hot & cold water pipes rated to 93°C',
    description:
      'Wingrip CPVC pipes are manufactured to ASTM D2846 and IS 15778 standards, making them the preferred choice for hot and cold water plumbing in residential apartments, hotels, hospitals, and commercial buildings. The high chlorine content in CPVC material allows it to handle continuous hot water flow without deformation or chemical leaching, ensuring safe drinking water at all times.',
    applications: [
      'Residential hot and cold water plumbing',
      'Hotel and hospitality water distribution',
      'Hospital and healthcare plumbing',
      'Commercial building water supply',
      'Solar water heater connections',
    ],
    specifications: [
      { label: 'Material', value: 'Chlorinated Polyvinyl Chloride (CPVC)' },
      { label: 'Standard', value: 'ASTM D2846 / IS 15778' },
      { label: 'Temperature Rating', value: 'Up to 93°C (continuous service)' },
      { label: 'Pressure Rating', value: 'SDR 11 — 400 psi at 23°C' },
      { label: 'Size Range', value: '15mm to 100mm' },
      { label: 'Color', value: 'Off-white / Cream' },
      { label: 'Length', value: '3 metres (standard)' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm', '65mm', '80mm', '100mm'],
    standard: 'ASTM D2846 / IS 15778',
    features: [
      'Withstands continuous temperatures up to 93°C',
      'Corrosion-free — no scaling or rust',
      'Chemical resistant to chlorinated water',
      'Smooth inner bore reduces friction losses',
      'ISI marked for quality assurance',
    ],
    image: '/images/products/cpvc-pipe.jpg',
    featured: true,
  },
  {
    id: 'cpvc-elbow-90',
    slug: 'cpvc-elbow-90',
    name: 'CPVC Elbow 90°',
    category: 'cpvc-pipes-fittings',
    categoryName: 'CPVC Pipes & Fittings',
    tagline: 'Leak-proof 90° direction changes for CPVC systems',
    description:
      'Wingrip CPVC 90° elbows provide precise directional changes in hot and cold water plumbing systems. Injection-moulded from the same CPVC compound as our pipes, these fittings offer full pressure and temperature compatibility throughout your installation.',
    applications: ['Hot water distribution systems', 'Cold water plumbing', 'Bathroom and kitchen connections'],
    specifications: [
      { label: 'Material', value: 'CPVC' },
      { label: 'Angle', value: '90°' },
      { label: 'Standard', value: 'ASTM D2846 / IS 15778' },
      { label: 'Size Range', value: '15mm to 50mm' },
      { label: 'Joint Type', value: 'Solvent cement socket' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm'],
    standard: 'ASTM D2846 / IS 15778',
    image: '/images/products/cpvc-elbow-90.jpg',
    featured: false,
  },
  {
    id: 'cpvc-tee',
    slug: 'cpvc-tee',
    name: 'CPVC Tee',
    category: 'cpvc-pipes-fittings',
    categoryName: 'CPVC Pipes & Fittings',
    tagline: 'Reliable branch connections for CPVC plumbing',
    description:
      'Wingrip CPVC tees enable branch connections in hot and cold water distribution networks. Available in equal and reducing configurations, these fittings maintain full system pressure and temperature ratings at every junction.',
    applications: ['Water distribution branching', 'Multi-outlet plumbing layouts', 'Commercial water networks'],
    specifications: [
      { label: 'Material', value: 'CPVC' },
      { label: 'Type', value: 'Equal Tee / Reducing Tee' },
      { label: 'Standard', value: 'ASTM D2846 / IS 15778' },
      { label: 'Size Range', value: '15mm to 50mm' },
      { label: 'Joint Type', value: 'Solvent cement socket' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm'],
    standard: 'ASTM D2846 / IS 15778',
    image: '/images/products/cpvc-tee.jpg',
    featured: false,
  },
  {
    id: 'cpvc-ball-valve',
    slug: 'cpvc-ball-valve',
    name: 'CPVC Ball Valve',
    category: 'cpvc-pipes-fittings',
    categoryName: 'CPVC Pipes & Fittings',
    tagline: 'Quarter-turn shut-off for CPVC hot water systems',
    description:
      'Wingrip CPVC ball valves provide reliable shut-off in hot and cold water plumbing systems. The CPVC body handles the same temperature and pressure ratings as the pipe system, eliminating the need for expensive metal valves at most service points.',
    applications: ['Hot water system isolation', 'Zone shut-off valves', 'Maintenance access points'],
    specifications: [
      { label: 'Material', value: 'CPVC body, EPDM seats' },
      { label: 'Type', value: 'Full-bore ball valve' },
      { label: 'Size Range', value: '15mm to 50mm' },
      { label: 'Temperature Rating', value: 'Up to 93°C' },
      { label: 'Operation', value: 'Quarter turn (90°)' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm'],
    image: '/images/products/cpvc-ball-valve.jpg',
    featured: false,
  },

  // ── UPVC Pipes & Fittings ─────────────────────────────────────────────────
  {
    id: 'upvc-pipe',
    slug: 'upvc-pipe',
    name: 'UPVC Pressure Pipe',
    category: 'upvc-pipes-fittings',
    categoryName: 'UPVC Pipes & Fittings',
    tagline: 'IS 4985 pressure pipes for municipal and industrial water supply',
    description:
      'Wingrip UPVC pressure pipes are manufactured to IS 4985 and are the industry standard for municipal water supply, borewell connections, and industrial pressure piping across India. Their smooth inner bore reduces pump energy costs while the chemical-resistant UPVC material delivers a 50+ year service life with zero corrosion.',
    applications: [
      'Municipal water supply mains',
      'Borewell rising mains',
      'Industrial water distribution',
      'Agricultural water conveyance',
      'Swimming pool plumbing',
    ],
    specifications: [
      { label: 'Material', value: 'Unplasticised Polyvinyl Chloride (UPVC)' },
      { label: 'Standard', value: 'IS 4985' },
      { label: 'Pressure Classes', value: '2.5, 4, 6, 8, 10 kg/cm²' },
      { label: 'Size Range', value: '20mm to 160mm' },
      { label: 'Color', value: 'Grey / Light Grey' },
      { label: 'Length', value: '3 metres and 6 metres' },
    ],
    sizes: ['20mm', '25mm', '32mm', '40mm', '50mm', '63mm', '75mm', '90mm', '110mm', '140mm', '160mm'],
    standard: 'IS 4985',
    features: [
      'ISI marked — BIS certified',
      'Pressure classes from 2.5 to 10 kg/cm²',
      'Zero corrosion over service life',
      'Smooth bore reduces head loss',
      'Lightweight — easy installation',
    ],
    image: '/images/products/upvc-pipe.jpg',
    featured: true,
  },
  {
    id: 'upvc-elbow-90',
    slug: 'upvc-elbow-90',
    name: 'UPVC Elbow 90°',
    category: 'upvc-pipes-fittings',
    categoryName: 'UPVC Pipes & Fittings',
    tagline: 'Pressure-rated direction changes for UPVC water supply systems',
    description:
      'Wingrip UPVC 90° elbows handle direction changes in water supply systems without pressure loss. Manufactured to match the full pressure class of the connecting pipe, these fittings are the reliable choice for permanent water supply installations.',
    applications: ['Municipal water mains', 'Borewell connections', 'Building water supply'],
    specifications: [
      { label: 'Material', value: 'UPVC' },
      { label: 'Standard', value: 'IS 4985' },
      { label: 'Angle', value: '90°' },
      { label: 'Size Range', value: '20mm to 110mm' },
      { label: 'Joint Type', value: 'Solvent cement socket' },
    ],
    sizes: ['20mm', '25mm', '32mm', '40mm', '50mm', '63mm', '75mm', '90mm', '110mm'],
    standard: 'IS 4985',
    image: '/images/products/upvc-elbow-90.jpg',
    featured: false,
  },
  {
    id: 'upvc-tee',
    slug: 'upvc-tee',
    name: 'UPVC Tee',
    category: 'upvc-pipes-fittings',
    categoryName: 'UPVC Pipes & Fittings',
    tagline: 'Branch connections for pressurised UPVC water mains',
    description:
      'Wingrip UPVC tees are manufactured for high-pressure water distribution networks. Available in equal and reducing configurations to accommodate any network layout efficiently.',
    applications: ['Water distribution networks', 'Compound water supply', 'Industrial piping'],
    specifications: [
      { label: 'Material', value: 'UPVC' },
      { label: 'Standard', value: 'IS 4985' },
      { label: 'Type', value: 'Equal Tee / Reducing Tee' },
      { label: 'Size Range', value: '20mm to 110mm' },
    ],
    sizes: ['20mm', '25mm', '32mm', '40mm', '50mm', '63mm', '75mm', '90mm', '110mm'],
    standard: 'IS 4985',
    image: '/images/products/upvc-tee.jpg',
    featured: false,
  },

  // ── SWR Pipes & Fittings ──────────────────────────────────────────────────
  {
    id: 'swr-pipe',
    slug: 'swr-pipe',
    name: 'SWR Pipe',
    category: 'swr-pipes-fittings',
    categoryName: 'SWR Pipes & Fittings',
    tagline: 'Soil, waste & rainwater drainage for buildings of all sizes',
    description:
      'Wingrip SWR pipes are engineered for efficient drainage of soil, waste, and rainwater in residential, commercial, and industrial buildings. Available in ring-fit (rubber-ring joint for solvent-free connections) and sel-fit (solvent cement joint) variants, they handle the demanding flow conditions of multi-storey drainage stacks with zero compromise.',
    applications: [
      'Vertical drainage stacks in multi-storey buildings',
      'Horizontal drain-waste-vent runs',
      'Rainwater downpipes and gutters',
      'Underground drainage below slabs',
      'Commercial and industrial waste discharge',
    ],
    specifications: [
      { label: 'Material', value: 'Unplasticised PVC (UPVC)' },
      { label: 'Standard', value: 'IS 14735' },
      { label: 'Joint Types', value: 'Ring Fit (RB) / Sel Fit (SF)' },
      { label: 'Size Range', value: '75mm to 160mm' },
      { label: 'Color', value: 'Light Grey' },
      { label: 'Length', value: '3 metres (standard)' },
    ],
    sizes: ['75mm', '90mm', '110mm', '160mm'],
    standard: 'IS 14735',
    features: [
      'Ring-fit joints require no solvent — faster installation',
      'Self-cleansing bore gradient design',
      'Impact-resistant in all weather conditions',
      'Noise-dampening wall construction',
      'Compatible with standard cast-iron fittings',
    ],
    image: '/images/products/swr-pipe.jpg',
    featured: true,
  },
  {
    id: 'swr-bend-87',
    slug: 'swr-bend-87',
    name: 'SWR Bend 87.5°',
    category: 'swr-pipes-fittings',
    categoryName: 'SWR Pipes & Fittings',
    tagline: 'Near-vertical bends for drainage stack foot connections',
    description:
      'Wingrip SWR 87.5° bends are used at the foot of vertical drainage stacks where the flow transitions from vertical to near-horizontal. The gradual radius minimises turbulence and reduces the risk of blockages at this critical junction.',
    applications: ['Drainage stack foot connections', 'Vertical-to-horizontal transitions', 'Underground connections'],
    specifications: [
      { label: 'Material', value: 'UPVC' },
      { label: 'Standard', value: 'IS 14735' },
      { label: 'Angle', value: '87.5°' },
      { label: 'Size Range', value: '75mm to 160mm' },
      { label: 'Joint Type', value: 'Ring Fit / Sel Fit' },
    ],
    sizes: ['75mm', '90mm', '110mm', '160mm'],
    standard: 'IS 14735',
    image: '/images/products/swr-bend-87.jpg',
    featured: false,
  },
  {
    id: 'swr-p-trap',
    slug: 'swr-p-trap',
    name: 'SWR P-Trap',
    category: 'swr-pipes-fittings',
    categoryName: 'SWR Pipes & Fittings',
    tagline: 'Water-seal trap preventing drain gases entering buildings',
    description:
      'Wingrip SWR P-traps maintain a water seal that blocks foul gases from entering habitable spaces through drain connections. Designed for wash basins, sinks, and floor drains, our P-traps meet IS 14735 and are compatible with our full SWR range.',
    applications: ['Wash basin and sink connections', 'Floor drain fittings', 'Kitchen waste connections'],
    specifications: [
      { label: 'Material', value: 'UPVC' },
      { label: 'Standard', value: 'IS 14735' },
      { label: 'Type', value: 'Deep seal / Standard seal' },
      { label: 'Size Range', value: '75mm to 110mm' },
    ],
    sizes: ['75mm', '90mm', '110mm'],
    standard: 'IS 14735',
    image: '/images/products/swr-p-trap.jpg',
    featured: false,
  },

  // ── Agriculture Pipes ──────────────────────────────────────────────────────
  {
    id: 'agri-pressure-pipe',
    slug: 'agri-pressure-pipe',
    name: 'Agriculture Pressure Pipe',
    category: 'agriculture-pipes',
    categoryName: 'Agriculture Pipes',
    tagline: 'PVC pressure pipes built for Indian irrigation demands',
    description:
      'Wingrip agriculture PVC pressure pipes are engineered for the pressurised water conveyance needs of Indian farming. Manufactured to IS 4985, they handle the high-pressure output of submersible pumps and borewell motors while resisting UV degradation, soil chemicals, and fertiliser solutions encountered in field conditions.',
    applications: [
      'Main lines for drip irrigation systems',
      'Sprinkler irrigation mains and sub-mains',
      'Canal lining and water conveyance',
      'Borewell casing and column pipe applications',
      'Farm water storage connections',
    ],
    specifications: [
      { label: 'Material', value: 'PVC' },
      { label: 'Standard', value: 'IS 4985 / IS 12818' },
      { label: 'Pressure Classes', value: '2.5, 4, 6 kg/cm²' },
      { label: 'Size Range', value: '20mm to 315mm' },
      { label: 'Color', value: 'Grey / Black (UV stabilised)' },
      { label: 'Length', value: '3 metres and 6 metres' },
    ],
    sizes: ['20mm', '25mm', '32mm', '40mm', '50mm', '63mm', '75mm', '90mm', '110mm', '140mm', '160mm', '200mm', '250mm', '315mm'],
    standard: 'IS 4985 / IS 12818',
    features: [
      'Handles submersible pump pressures',
      'UV stabilised for exposed field use',
      'Resistant to fertilisers and agro-chemicals',
      'Lightweight for easy handling across large fields',
      'Available in long coil lengths for continuous runs',
    ],
    image: '/images/products/agri-pressure-pipe.jpg',
    featured: true,
  },
  {
    id: 'column-pipe',
    slug: 'column-pipe',
    name: 'Column Pipe (Borewell)',
    category: 'agriculture-pipes',
    categoryName: 'Agriculture Pipes',
    tagline: 'High-strength column pipes for submersible pump installations',
    description:
      'Wingrip column pipes are specifically designed for vertical water lifting in borewell installations. The thick-walled construction handles the tensile loads imposed by the weight of water and the pump below, while smooth inner bore maximises flow from deep aquifers.',
    applications: ['Submersible pump installations', 'Deep borewell water lifting', 'Domestic borewell connections'],
    specifications: [
      { label: 'Material', value: 'PVC' },
      { label: 'Standard', value: 'IS 12818' },
      { label: 'Size Range', value: '32mm to 160mm' },
      { label: 'Connection', value: 'Threaded or flanged' },
      { label: 'Length', value: '3 metres (standard)' },
    ],
    sizes: ['32mm', '40mm', '50mm', '63mm', '75mm', '90mm', '110mm', '160mm'],
    standard: 'IS 12818',
    image: '/images/products/column-pipe.jpg',
    featured: false,
  },

  // ── Water Tanks ────────────────────────────────────────────────────────────
  {
    id: 'water-tank-1000l',
    slug: 'water-tank-1000l',
    name: 'Water Tank — 1000 Litres',
    category: 'water-tanks',
    categoryName: 'Water Tanks',
    tagline: 'Triple-layer roto-moulded tank for homes and small offices',
    description:
      'The Wingrip 1000-litre water tank is the most popular choice for Indian households and small commercial establishments. Its triple-layer construction — UV-stabilised outer black shell, foam insulation middle layer, and food-grade white inner layer — keeps water hygienic and up to 8°C cooler than single-layer alternatives, even during peak summer months.',
    applications: [
      'Residential rooftop water storage',
      'Small office and commercial water supply',
      'Temporary construction site water storage',
    ],
    specifications: [
      { label: 'Capacity', value: '1000 Litres' },
      { label: 'Construction', value: '3-layer roto-moulded' },
      { label: 'Outer Layer', value: 'UV-stabilised black HDPE' },
      { label: 'Middle Layer', value: 'Closed-cell foam insulation' },
      { label: 'Inner Layer', value: 'Food-grade white HDPE' },
      { label: 'Manhole', value: '200mm easy-clean access manhole' },
      { label: 'Fittings', value: 'Inlet, outlet, overflow, drain' },
      { label: 'Warranty', value: '[CLIENT TO PROVIDE: warranty period]' },
    ],
    sizes: ['1000L'],
    features: [
      'Food-grade inner layer — safe for drinking water',
      'UV stabilised outer layer — no algae growth',
      'Foam insulation — keeps water up to 8°C cooler',
      'Anti-leakage sealed construction',
      'Easy-clean manhole with secure lid',
    ],
    image: '/images/products/water-tank-1000l.jpg',
    featured: true,
  },
  {
    id: 'water-tank-500l',
    slug: 'water-tank-500l',
    name: 'Water Tank — 500 Litres',
    category: 'water-tanks',
    categoryName: 'Water Tanks',
    tagline: 'Compact triple-layer tank for apartments and small households',
    description:
      'The Wingrip 500-litre tank is ideal for single-family apartments and small households with limited rooftop space. Same triple-layer construction as larger models, in a compact footprint.',
    applications: ['Studio and 1-BHK apartments', 'Small shops and offices', 'Supplementary storage tanks'],
    specifications: [
      { label: 'Capacity', value: '500 Litres' },
      { label: 'Construction', value: '3-layer roto-moulded' },
      { label: 'Inner Layer', value: 'Food-grade white HDPE' },
      { label: 'Outer Layer', value: 'UV-stabilised black HDPE' },
    ],
    sizes: ['500L'],
    image: '/images/products/water-tank-500l.jpg',
    featured: false,
  },
  {
    id: 'water-tank-2000l',
    slug: 'water-tank-2000l',
    name: 'Water Tank — 2000 Litres',
    category: 'water-tanks',
    categoryName: 'Water Tanks',
    tagline: 'High-capacity rooftop tank for large homes and commercial use',
    description:
      'The Wingrip 2000-litre tank handles the water storage demands of large bungalows, apartment blocks, restaurants, clinics, and small manufacturing units. Reinforced construction supports the full water load safely on standard RCC rooftops.',
    applications: ['Large residential bungalows', 'Restaurants and hotels', 'Clinics and small hospitals'],
    specifications: [
      { label: 'Capacity', value: '2000 Litres' },
      { label: 'Construction', value: '3-layer roto-moulded' },
      { label: 'Inner Layer', value: 'Food-grade white HDPE' },
      { label: 'Outer Layer', value: 'UV-stabilised black HDPE' },
      { label: 'Manhole', value: '350mm easy-clean access manhole' },
    ],
    sizes: ['2000L'],
    image: '/images/products/water-tank-2000l.jpg',
    featured: false,
  },
  {
    id: 'water-tank-5000l',
    slug: 'water-tank-5000l',
    name: 'Water Tank — 5000 Litres',
    category: 'water-tanks',
    categoryName: 'Water Tanks',
    tagline: 'Industrial-grade bulk storage for commercial and government use',
    description:
      'The Wingrip 5000-litre tank is the choice for government projects, industrial facilities, schools, and large commercial complexes. Designed for both rooftop and ground-level installation, with reinforced structural ribs and heavy-duty fittings.',
    applications: ['Government and municipal projects', 'Industrial facilities', 'Schools and colleges', 'Large commercial complexes'],
    specifications: [
      { label: 'Capacity', value: '5000 Litres' },
      { label: 'Construction', value: '3-layer roto-moulded' },
      { label: 'Inner Layer', value: 'Food-grade white HDPE' },
      { label: 'Outer Layer', value: 'UV-stabilised black HDPE' },
      { label: 'Installation', value: 'Rooftop or ground level' },
      { label: 'Manhole', value: '400mm easy-clean access manhole' },
    ],
    sizes: ['5000L'],
    image: '/images/products/water-tank-5000l.jpg',
    featured: false,
  },

  // ── Solvent Cement ────────────────────────────────────────────────────────
  {
    id: 'upvc-solvent-cement',
    slug: 'upvc-solvent-cement',
    name: 'UPVC Solvent Cement',
    category: 'solvent-cement',
    categoryName: 'Solvent Cement',
    tagline: 'High-bond solvent cement for permanent UPVC pipe joints',
    description:
      'Wingrip UPVC solvent cement creates permanent, leak-proof joints in UPVC pipe systems. Formulated to IS 14182, it chemically bonds UPVC surfaces at the molecular level, creating a joint that is stronger than the pipe itself when fully cured. Used by professional plumbers and contractors across India for reliable long-term installations.',
    applications: [
      'UPVC pressure pipe joints',
      'UPVC fitting connections',
      'Agricultural pipe systems',
      'Cold water supply installations',
    ],
    specifications: [
      { label: 'Standard', value: 'IS 14182' },
      { label: 'Grade', value: 'UPVC' },
      { label: 'Setting Time', value: '30 minutes (initial set)' },
      { label: 'Full Cure', value: '24 hours at 23°C' },
      { label: 'VOC', value: 'Low VOC formulation' },
      { label: 'Pack Sizes', value: '50ml, 100ml, 250ml, 500ml, 1 Litre' },
    ],
    sizes: ['50ml', '100ml', '250ml', '500ml', '1L'],
    standard: 'IS 14182',
    features: [
      'Bond stronger than the pipe at full cure',
      'Low VOC — safer for installers',
      'Fast initial set for quick project progress',
      'Colour-coded (grey) for easy UPVC identification',
    ],
    image: '/images/products/upvc-solvent-cement.jpg',
    featured: true,
  },
  {
    id: 'cpvc-solvent-cement',
    slug: 'cpvc-solvent-cement',
    name: 'CPVC Solvent Cement',
    category: 'solvent-cement',
    categoryName: 'Solvent Cement',
    tagline: 'Temperature-resistant solvent cement for CPVC hot water systems',
    description:
      'Wingrip CPVC solvent cement is specifically formulated for CPVC pipes and fittings. Unlike standard UPVC cement, our CPVC grade maintains bond integrity at high temperatures, ensuring your hot water joints remain leak-free throughout the system’s service life.',
    applications: ['CPVC hot water pipe joints', 'CPVC fitting connections', 'Solar water heater plumbing'],
    specifications: [
      { label: 'Standard', value: 'IS 14182' },
      { label: 'Grade', value: 'CPVC' },
      { label: 'Temperature Resistance', value: 'Up to 93°C (same as CPVC pipe)' },
      { label: 'Setting Time', value: '30 minutes (initial set)' },
      { label: 'Pack Sizes', value: '50ml, 100ml, 250ml, 500ml, 1 Litre' },
    ],
    sizes: ['50ml', '100ml', '250ml', '500ml', '1L'],
    standard: 'IS 14182',
    image: '/images/products/cpvc-solvent-cement.jpg',
    featured: false,
  },

  // ── Brass Fittings & Valves ───────────────────────────────────────────────
  {
    id: 'brass-ball-valve',
    slug: 'brass-ball-valve',
    name: 'Brass Ball Valve',
    category: 'brass-fittings-valves',
    categoryName: 'Brass Fittings & Valves',
    tagline: 'IS 319 Grade-I brass ball valves for reliable shut-off',
    description:
      'Wingrip brass ball valves are machined from IS 319 Grade-I leaded brass for precision tolerances and long service life. The full-bore design minimises pressure drop across the valve, making them the preferred choice for main shut-offs in residential and commercial plumbing systems. Compatible with both CPVC and UPVC systems via threaded connections.',
    applications: [
      'Main shut-off valves',
      'Individual fixture isolation',
      'CPVC to metal transitions',
      'Zone control in water distribution',
    ],
    specifications: [
      { label: 'Material', value: 'IS 319 Grade-I Leaded Brass' },
      { label: 'Type', value: 'Full-bore ball valve' },
      { label: 'End Connections', value: 'BSP threaded (male / female)' },
      { label: 'Pressure Rating', value: 'PN 16 (16 bar)' },
      { label: 'Size Range', value: '15mm to 50mm' },
      { label: 'Operation', value: 'Quarter turn (90°) lever handle' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm'],
    features: [
      'IS 319 Grade-I brass — precision machined',
      'Full-bore design — zero pressure drop',
      'Quarter-turn lever operation',
      'PTFE seats for leak-free shut-off',
      'Compatible with CPVC and UPVC systems',
    ],
    image: '/images/products/brass-ball-valve.jpg',
    featured: true,
  },
  {
    id: 'brass-mta',
    slug: 'brass-mta',
    name: 'Brass MTA (Male Threaded Adapter)',
    category: 'brass-fittings-valves',
    categoryName: 'Brass Fittings & Valves',
    tagline: 'Transition fittings connecting CPVC/UPVC to metal threads',
    description:
      'Wingrip brass MTA fittings provide the critical transition between CPVC or UPVC pipe systems and metal-threaded components such as valves, geysers, and washing machine connections. The brass male thread engages standard BSP fittings while the socket end bonds permanently to the CPVC or UPVC pipe.',
    applications: ['CPVC to geyser connections', 'Pipe-to-valve transitions', 'UPVC to metal fittings'],
    specifications: [
      { label: 'Material', value: 'IS 319 Grade-I Brass + CPVC/UPVC socket' },
      { label: 'Thread', value: 'BSP (British Standard Pipe)' },
      { label: 'Size Range', value: '15mm to 50mm' },
      { label: 'End Types', value: 'Male thread + solvent socket' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm'],
    image: '/images/products/brass-mta.jpg',
    featured: false,
  },
  {
    id: 'brass-gate-valve',
    slug: 'brass-gate-valve',
    name: 'Brass Gate Valve',
    category: 'brass-fittings-valves',
    categoryName: 'Brass Fittings & Valves',
    tagline: 'Multi-turn gate valves for main line isolation',
    description:
      'Wingrip brass gate valves provide reliable main-line isolation in water supply systems. The rising-spindle design gives a clear visual indication of valve position, while the full-bore opening ensures unrestricted flow when open.',
    applications: ['Main water line isolation', 'Building entry shut-offs', 'Industrial water mains'],
    specifications: [
      { label: 'Material', value: 'IS 319 Grade-I Brass' },
      { label: 'Type', value: 'Rising spindle gate valve' },
      { label: 'Pressure Rating', value: 'PN 10' },
      { label: 'Size Range', value: '15mm to 50mm' },
      { label: 'Connection', value: 'BSP threaded' },
    ],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm'],
    image: '/images/products/brass-gate-valve.jpg',
    featured: false,
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured)
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)
}
