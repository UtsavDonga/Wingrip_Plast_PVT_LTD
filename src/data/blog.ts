import type { BlogPost, BlogCategorySlug } from '@/types'

export const BLOG_CATEGORIES: { slug: BlogCategorySlug; label: string }[] = [
  { slug: 'guides', label: 'Guides' },
  { slug: 'industry-news', label: 'Industry News' },
  { slug: 'product-updates', label: 'Product Updates' },
  { slug: 'company', label: 'Company' },
]

export const BLOG_CATEGORY_LABELS: Record<BlogCategorySlug, string> = {
  guides: 'Guides',
  'industry-news': 'Industry News',
  'product-updates': 'Product Updates',
  company: 'Company',
}

export const BLOG_POSTS: BlogPost[] = [
  // ── 1 ───────────────────────────────────────────────────────────────────────
  {
    id: 'cpvc-vs-upvc-pipes',
    slug: 'cpvc-vs-upvc-pipes-which-to-choose',
    title: 'CPVC vs UPVC Pipes: Which One Should You Choose?',
    excerpt:
      'CPVC and UPVC look similar but solve very different plumbing problems. Here is a clear, practical comparison to help Indian homeowners, builders, and plumbers pick the right pipe.',
    category: 'guides',
    author: 'Wingrip Technical Team',
    authorRole: 'Product & Application Engineering',
    publishedAt: '2025-09-15',
    coverImage: '',
    seoKeywords: ['cpvc vs upvc india', 'cpvc upvc difference', 'cpvc or upvc for home'],
    featured: true,
    body: [
      {
        type: 'p',
        text: 'If you have ever stood in a hardware shop trying to decide between CPVC and UPVC pipes, you are not alone. The two materials look almost identical, the names differ by a single letter, and yet choosing the wrong one can mean leaks, reduced lifespan, or money spent on capability you never needed. This guide breaks down the real differences so you can choose with confidence.',
      },
      { type: 'h2', text: 'What Do CPVC and UPVC Actually Stand For?' },
      {
        type: 'p',
        text: 'UPVC stands for Un-plasticised Polyvinyl Chloride. It is a rigid, strong plastic widely used for cold water supply and distribution. CPVC stands for Chlorinated Polyvinyl Chloride. It is UPVC that has gone through an extra chlorination process, which dramatically improves its ability to handle hot water and higher temperatures.',
      },
      {
        type: 'p',
        text: 'That single manufacturing difference is the key to everything else. The added chlorine changes how the material behaves under heat, which is why the two pipes end up in completely different parts of a building.',
      },
      { type: 'h2', text: 'The Core Difference: Temperature' },
      {
        type: 'p',
        text: 'UPVC is designed for cold water. It performs reliably for water supply lines, borewell connections, and general distribution where the water stays at ambient temperature. Push hot water through ordinary UPVC and it can soften and deform over time.',
      },
      {
        type: 'p',
        text: 'CPVC, on the other hand, is rated for continuous hot water service up to around 93°C. This makes it the correct choice for geysers, solar water heaters, kitchen hot lines, and any plumbing that carries heated water.',
      },
      { type: 'callout', text: 'Simple rule of thumb: cold water only? UPVC is enough. Hot and cold water? Choose CPVC.' },
      { type: 'h2', text: 'Pressure, Strength and Lifespan' },
      {
        type: 'p',
        text: 'Both materials are corrosion-proof, scale-resistant, and free from the rusting problems that plague galvanised iron pipes. UPVC handles high working pressures very well, which is why it is popular for water mains and agricultural pressure lines. CPVC also holds pressure well, with the added benefit that its rated pressure holds up even at elevated temperatures.',
      },
      {
        type: 'p',
        text: 'When manufactured to the correct Indian Standards and installed properly, both pipe systems can last for decades with minimal maintenance.',
      },
      { type: 'h2', text: 'Joining and Installation' },
      {
        type: 'ul',
        items: [
          'CPVC uses a special CPVC solvent cement formulated for higher temperatures. Never use ordinary UPVC cement on CPVC hot water joints.',
          'UPVC is joined using UPVC solvent cement or, for larger drainage and pressure pipes, rubber-ring (push-fit) joints.',
          'Both systems are lightweight, quick to install, and need far fewer specialist tools than metal piping.',
        ],
      },
      { type: 'h2', text: 'Which Should You Choose?' },
      {
        type: 'p',
        text: 'For internal home plumbing that carries both hot and cold water, CPVC is the safer, more future-proof choice. For cold water supply, overhead tank distribution, borewell and agricultural lines, UPVC is cost-effective and more than capable. Many Indian homes use both: CPVC for the hot-and-cold internal plumbing and UPVC for the cold supply and outdoor lines.',
      },
      {
        type: 'p',
        text: 'Whichever you choose, the single most important factor is quality. Look for the ISI mark and the correct IS standard (IS 15778 for CPVC, IS 4985 for UPVC). A cheap, sub-standard pipe will fail regardless of which type it is.',
      },
      {
        type: 'p',
        text: 'Wingrip manufactures both ISI-marked CPVC and UPVC pipes and fittings at our Jamnagar plant, so you can source a complete, certified plumbing system from a single supplier. If you are unsure which grade suits your project, our team is happy to help you specify the right product.',
      },
    ],
  },

  // ── 2 ───────────────────────────────────────────────────────────────────────
  {
    id: 'swr-pipe-sizes-fittings-guide',
    slug: 'complete-guide-swr-pipe-sizes-fittings',
    title: 'Complete Guide to SWR Pipe Sizes and Fittings',
    excerpt:
      'From 75mm branch lines to 160mm soil stacks, here is how SWR pipe sizes and fittings work together to build a quiet, leak-free drainage system for any Indian building.',
    category: 'guides',
    author: 'Wingrip Technical Team',
    authorRole: 'Product & Application Engineering',
    publishedAt: '2025-09-28',
    coverImage: '',
    seoKeywords: ['swr pipe sizes india', 'swr fittings guide', 'soil waste rainwater pipe'],
    featured: false,
    body: [
      {
        type: 'p',
        text: 'SWR stands for Soil, Waste and Rainwater — the three things a building drainage system has to carry away safely. Get the sizing and fittings right and you have a quiet, odour-free system that lasts for decades. Get it wrong and you invite blockages, gurgling traps, and slow drains. This guide explains how SWR pipe sizes and fittings fit together.',
      },
      { type: 'h2', text: 'Understanding SWR Pipe Sizes' },
      {
        type: 'p',
        text: 'SWR pipes in India are specified by their outer diameter in millimetres. The common sizes each have a typical job:',
      },
      {
        type: 'ul',
        items: [
          '75mm — branch waste lines from wash basins, sinks, and floor traps.',
          '110mm — the workhorse size for WC connections and main soil branches.',
          '160mm — main soil and rainwater stacks for multi-storey buildings and large roofs.',
        ],
      },
      {
        type: 'p',
        text: 'A well-designed system steps up in size as flows combine. Several 75mm waste lines may feed into a 110mm branch, which in turn connects to a 160mm main stack in a taller building.',
      },
      { type: 'h2', text: 'Ring-Fit vs Self-Fit Joints' },
      {
        type: 'p',
        text: 'SWR systems come in two joint types, and choosing correctly matters:',
      },
      {
        type: 'ul',
        items: [
          'Ring-fit (rubber-ring) joints allow the pipe to expand and contract with temperature. They are ideal for long vertical stacks and external runs exposed to heat.',
          'Self-fit (solvent-cement) joints create a permanent, rigid bond and are well suited to shorter, concealed runs.',
        ],
      },
      { type: 'h2', text: 'Essential SWR Fittings' },
      {
        type: 'p',
        text: 'Pipes only carry water in a straight line. Fittings do the real work of routing, branching, and venting the system. The most-used SWR fittings include:',
      },
      {
        type: 'ul',
        items: [
          'Bends (87.5° and 45°) to change direction smoothly without trapping waste.',
          'Single and double tees / Y-junctions to merge branch lines into the stack.',
          'Couplers to join two lengths of pipe.',
          'Reducers to step down from a larger pipe to a smaller one.',
          'P-traps and floor traps to hold a water seal that blocks drain odours.',
          'Cowls and vent cowls at the top of stacks to allow air movement and prevent siphoning of traps.',
          'Door bends and cleanout fittings to provide access for clearing blockages.',
        ],
      },
      { type: 'callout', text: 'A drainage system without proper venting will gurgle and pull water out of traps, letting sewer gas into the building. Always vent your stacks.' },
      { type: 'h2', text: 'Design Tips for a Reliable System' },
      {
        type: 'ol',
        items: [
          'Maintain a consistent fall (slope) on horizontal runs so solids do not settle — too steep can be as bad as too flat.',
          'Use long-radius bends instead of sharp 90° turns wherever possible to reduce blockage risk.',
          'Provide cleanouts at the base of stacks and at major direction changes.',
          'Match the joint type to the application — ring-fit for thermal movement, self-fit for fixed concealed runs.',
          'Always use fittings from the same system and standard as your pipe for a guaranteed fit.',
        ],
      },
      { type: 'h2', text: 'The Standard That Matters' },
      {
        type: 'p',
        text: 'Quality SWR pipes and fittings in India are manufactured to IS 14735. Buying to this standard ensures the wall thickness, dimensions, and material quality are correct, so your fittings seat properly and joints stay leak-free.',
      },
      {
        type: 'p',
        text: 'Wingrip offers a complete SWR range in both ring-fit and self-fit, in 75mm, 110mm, and 160mm, along with the full set of fittings to build a finished system. Sourcing pipes and fittings together from one manufacturer avoids the fit and tolerance problems that come from mixing brands. Contact our team for a sizing recommendation for your project.',
      },
    ],
  },

  // ── 3 ───────────────────────────────────────────────────────────────────────
  {
    id: 'choose-right-pipe-home-plumbing',
    slug: 'how-to-choose-right-pipe-home-plumbing',
    title: 'How to Choose the Right Pipe for Your Home Plumbing',
    excerpt:
      'Building or renovating a home in India? Here is a room-by-room, system-by-system guide to choosing the right pipe so your plumbing lasts as long as your house.',
    category: 'guides',
    author: 'Wingrip Technical Team',
    authorRole: 'Product & Application Engineering',
    publishedAt: '2025-10-10',
    coverImage: '',
    seoKeywords: ['best pipe for home plumbing india', 'home plumbing pipe selection', 'house piping guide'],
    featured: false,
    body: [
      {
        type: 'p',
        text: 'Plumbing is one of those parts of a house you only think about when something goes wrong. Choosing the right pipes during construction is the cheapest insurance you will ever buy against future leaks, low pressure, and expensive wall-breaking repairs. Here is how to choose well, system by system.',
      },
      { type: 'h2', text: 'Start by Mapping Your Water Systems' },
      {
        type: 'p',
        text: 'A typical Indian home has four distinct plumbing systems, and each has a best-suited pipe:',
      },
      {
        type: 'ul',
        items: [
          'Hot and cold water supply inside the house (bathrooms, kitchen).',
          'Cold water supply from the source / borewell to the overhead tank.',
          'Drainage for soil, waste, and rainwater.',
          'Outdoor and garden lines.',
        ],
      },
      { type: 'h2', text: 'Internal Hot & Cold Water: Choose CPVC' },
      {
        type: 'p',
        text: 'For the pipes running to your taps, geysers, and mixers, CPVC is the right choice. It safely handles hot water up to around 93°C, resists scaling and corrosion, and will not impart taste or odour to your drinking water. Because it is lightweight and solvent-welded, it is also quick to install and easy to conceal in walls.',
      },
      { type: 'h2', text: 'Tank and Cold Supply Lines: Choose UPVC' },
      {
        type: 'p',
        text: 'For the cold water line that fills your overhead tank, and for general cold distribution, UPVC pressure pipe is cost-effective and durable. It handles the pressure of a pumped supply, never rusts, and lasts for decades buried or exposed.',
      },
      { type: 'h2', text: 'Drainage: Choose SWR' },
      {
        type: 'p',
        text: 'For everything that drains away — toilet waste, basin and sink water, and rainwater from the roof — use a dedicated SWR system to IS 14735. Do not try to save money by reusing pressure pipe for drainage; SWR fittings are designed with the correct angles and traps to keep the system self-cleaning and odour-free.',
      },
      { type: 'callout', text: 'A common and costly mistake is using a single pipe type for everything. Matching the pipe to the job is what makes plumbing last.' },
      { type: 'h2', text: 'Do Not Forget the Fittings and Valves' },
      {
        type: 'p',
        text: 'Joints are where plumbing systems usually fail, so the fittings matter as much as the pipe. Use fittings from the same system and standard as your pipe. For control points and metal transitions, good-quality brass ball valves and fittings give you reliable shut-off and a strong plastic-to-metal connection.',
      },
      { type: 'h2', text: 'A Simple Buying Checklist' },
      {
        type: 'ol',
        items: [
          'Confirm the pipe carries the ISI mark and the correct IS standard for its use.',
          'Match the pipe type to the system: CPVC (hot/cold), UPVC (cold supply), SWR (drainage).',
          'Buy pipes and fittings from the same manufacturer for guaranteed compatibility.',
          'Choose the right size for expected flow — undersized pipes cause low pressure.',
          'Use the correct solvent cement: CPVC cement for CPVC, UPVC cement for UPVC.',
        ],
      },
      { type: 'h2', text: 'Quality Is the Real Decision' },
      {
        type: 'p',
        text: 'The biggest factor in how long your plumbing lasts is not brand reputation or price — it is whether the pipe is made to standard from virgin, food-safe material. Sub-standard pipes made from recycled scrap can crack, leak, and contaminate water.',
      },
      {
        type: 'p',
        text: 'Wingrip manufactures a complete home plumbing range — CPVC, UPVC, SWR, and brass fittings — all ISI-marked and made from virgin material at our Jamnagar plant. That means you can build your entire home plumbing system from one certified source. Reach out to our team for product selection help for your project.',
      },
    ],
  },

  // ── 4 ───────────────────────────────────────────────────────────────────────
  {
    id: 'why-isi-marked-pipes-matter',
    slug: 'why-isi-marked-pipes-matter',
    title: 'Why ISI-Marked Pipes Matter: Quality You Can Trust',
    excerpt:
      'The ISI mark is more than a logo — it is documented proof that a pipe meets Indian Standards for safety, strength, and material quality. Here is why it should decide your purchase.',
    category: 'guides',
    author: 'Wingrip Technical Team',
    authorRole: 'Quality Assurance',
    publishedAt: '2025-10-22',
    coverImage: '',
    seoKeywords: ['isi marked pipes india', 'bis certified pipes', 'why isi mark important'],
    featured: false,
    body: [
      {
        type: 'p',
        text: 'When two pipes look identical but one costs noticeably less, the difference is almost always quality you cannot see from the outside. The ISI mark exists precisely to make that invisible difference visible. Here is what it means and why it should guide your buying decision.',
      },
      { type: 'h2', text: 'What Is the ISI Mark?' },
      {
        type: 'p',
        text: 'The ISI mark is a certification issued under the Bureau of Indian Standards (BIS). It certifies that a product has been manufactured to a specific Indian Standard and that the factory follows a documented quality process verified by BIS. For pipes, the relevant standards include IS 15778 for CPVC, IS 4985 for UPVC pressure pipe, and IS 14735 for SWR drainage.',
      },
      {
        type: 'p',
        text: 'In other words, the ISI mark is not marketing. It is third-party proof that the pipe in your hand meets a defined benchmark for dimensions, wall thickness, pressure rating, and material composition.',
      },
      { type: 'h2', text: 'What a Sub-Standard Pipe Really Costs' },
      {
        type: 'p',
        text: 'Uncertified pipes often cut corners that you will only discover after installation:',
      },
      {
        type: 'ul',
        items: [
          'Recycled or filler material instead of virgin compound, which weakens the pipe.',
          'Thinner walls than the standard requires, reducing pressure capacity and lifespan.',
          'Inconsistent dimensions, so fittings do not seat correctly and joints leak.',
          'No guarantee the material is safe for drinking water.',
        ],
      },
      {
        type: 'p',
        text: 'A pipe that fails inside a wall or under a floor turns a small upfront saving into a large repair bill — plus the cost of breaking and re-finishing the structure around it.',
      },
      { type: 'callout', text: 'The cheapest pipe is rarely the most economical. The true cost of plumbing includes every repair it forces over its lifetime.' },
      { type: 'h2', text: 'What the ISI Mark Guarantees You' },
      {
        type: 'ol',
        items: [
          'The pipe meets the dimensional and wall-thickness requirements of its standard.',
          'It is rated to handle its stated working pressure (and temperature, for CPVC).',
          'The material composition has been verified — not recycled scrap.',
          'The manufacturer operates a quality system audited by BIS.',
        ],
      },
      { type: 'h2', text: 'How to Verify a Pipe Is Genuinely ISI-Marked' },
      {
        type: 'p',
        text: 'Look for the ISI mark printed directly on the pipe along with the licence number and the IS standard it complies with. Reputable manufacturers print this information at regular intervals along the pipe. If a supplier cannot show you the standard the product is certified to, treat that as a warning sign.',
      },
      { type: 'h2', text: 'Quality You Can Document' },
      {
        type: 'p',
        text: 'For builders, contractors, and government project tenders, ISI certification is often not optional — it is a documented requirement. Using certified pipes protects everyone in the chain, from the manufacturer to the homeowner who ultimately relies on the system.',
      },
      {
        type: 'p',
        text: 'At Wingrip, our CPVC, UPVC, and SWR products are ISI-marked and manufactured from virgin material at our Jamnagar plant, backed by in-house testing of every batch. We are happy to provide certificates and test reports for your project. When you buy a Wingrip pipe, the quality is not a promise — it is documented.',
      },
    ],
  },

  // ── 5 ───────────────────────────────────────────────────────────────────────
  {
    id: 'water-tank-buying-guide-india',
    slug: 'water-tank-buying-guide-indian-homes',
    title: 'Water Tank Buying Guide for Indian Homes',
    excerpt:
      'Capacity, layers, material safety, and placement — everything an Indian homeowner needs to know to buy the right water storage tank the first time.',
    category: 'guides',
    author: 'Wingrip Technical Team',
    authorRole: 'Product & Application Engineering',
    publishedAt: '2025-11-05',
    coverImage: '',
    seoKeywords: ['best water tank india home', 'water tank buying guide', 'how to choose water tank'],
    featured: false,
    body: [
      {
        type: 'p',
        text: 'A water storage tank is one of those purchases most people make once and forget about for years — which is exactly why it is worth getting right. The wrong tank can mean warm, algae-prone water, a shorter lifespan, or simply not enough storage when the supply is cut. This guide covers everything you need to choose well.',
      },
      { type: 'h2', text: 'How Much Capacity Do You Need?' },
      {
        type: 'p',
        text: 'A common planning figure is roughly 135 litres of water per person per day for all domestic uses. For a typical family of four or five, that points to a storage tank in the 500 to 1000 litre range for a day of buffer. Larger families, homes with gardens, or areas with irregular supply should size up.',
      },
      {
        type: 'ul',
        items: [
          '500L — small family or a single-floor home with reliable supply.',
          '1000L — the most popular size for an average Indian family home.',
          '2000L and above — large families, bungalows, or buildings storing several days of supply.',
          '5000L — small apartment blocks and commercial or institutional use.',
        ],
      },
      { type: 'h2', text: 'Why the Number of Layers Matters' },
      {
        type: 'p',
        text: 'Modern roto-moulded tanks are made in single, double, triple, or four-layer constructions. The layers are not a gimmick — each one does a job:',
      },
      {
        type: 'ul',
        items: [
          'The outer UV-stabilised layer protects the tank from sunlight so it does not degrade or crack over years on a rooftop.',
          'A middle insulation or foam layer helps keep stored water cooler in India’s heat.',
          'The inner food-grade layer (usually white) keeps water clean and prevents the growth of algae and bacteria that thrives where light gets in.',
        ],
      },
      { type: 'callout', text: 'A dark, opaque tank with a food-grade inner layer keeps light out — and light is what algae needs to grow. This is why a quality multi-layer tank stays cleaner for longer.' },
      { type: 'h2', text: 'Material Safety Comes First' },
      {
        type: 'p',
        text: 'Because this water is for drinking, cooking, and bathing, the inner surface must be food-grade and free from harmful substances. Cheap tanks made with recycled plastic can leach contaminants and discolour water. Always confirm the tank uses a food-grade inner layer.',
      },
      { type: 'h2', text: 'Placement and Installation' },
      {
        type: 'ol',
        items: [
          'Place the tank on a flat, fully supported base — a tank full of water is extremely heavy and an uneven base can crack it.',
          'Keep it accessible for periodic cleaning and inspection of the lid and fittings.',
          'Use a tight-fitting lid to keep out dust, insects, and light.',
          'Connect inlet and outlet with quality UPVC or CPVC fittings and a good valve for easy isolation.',
        ],
      },
      { type: 'h2', text: 'A Quick Buying Checklist' },
      {
        type: 'ul',
        items: [
          'Right capacity for your household and supply reliability.',
          'Multi-layer construction with a UV-protected outer layer.',
          'Genuine food-grade inner layer for safe drinking water.',
          'Sturdy, well-fitting lid and quality outlet fittings.',
          'A manufacturer that backs the product with a clear warranty.',
        ],
      },
      { type: 'h2', text: 'The Wingrip Range' },
      {
        type: 'p',
        text: 'Wingrip water storage tanks are built using triple-layer roto-moulding — a UV-stabilised outer layer, an insulating middle layer, and a food-grade inner layer — in sizes from 500L to 5000L. Paired with our UPVC and CPVC pipes and brass valves, you can fit out a complete, certified water storage and distribution system from one manufacturer. Talk to our team to choose the right capacity for your home.',
      },
    ],
  },
]

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getAllPostsStatic(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlugStatic(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getFeaturedPostStatic(): BlogPost {
  return BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0]
}

export function getRelatedPostsStatic(post: BlogPost, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.id !== post.id)
    .sort((a, b) => {
      const aMatch = a.category === post.category ? 1 : 0
      const bMatch = b.category === post.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, limit)
}
