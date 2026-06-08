import type { FAQItem, ProductCategorySlug } from '@/types'

export const HOME_FAQS: FAQItem[] = [
  {
    question: 'What products does Wingrip Plast manufacture?',
    answer:
      'Wingrip manufactures CPVC, UPVC, and SWR pipes and fittings, agriculture pipes, roto-moulded water storage tanks, solvent cement, and brass fittings and valves — a complete piping system from a single manufacturer in Jamnagar, Gujarat.',
  },
  {
    question: 'Are Wingrip pipes ISI marked and BIS certified?',
    answer:
      'Yes. Our CPVC (IS 15778), UPVC (IS 4985), and SWR (IS 14735) products are ISI marked and BIS certified, and the company holds ISO 9001:2015 certification. Certificates and test reports are available on request.',
  },
  {
    question: 'Do you supply outside Gujarat?',
    answer:
      'Yes. While we manufacture in Jamnagar, Gujarat, we supply a network of 500+ dealers and distributors across 28+ Indian states, serving homeowners, builders, and government projects nationwide.',
  },
  {
    question: 'How can I become a Wingrip dealer or distributor?',
    answer:
      'Visit our Become a Dealer page and fill in the registration form. Our channel team reviews every application and typically responds within two business days with pricing, territory, and onboarding details.',
  },
  {
    question: 'How do I get a price quote?',
    answer:
      'Use the enquiry form on our Contact page, call us, or message us on WhatsApp with the products, sizes, and quantities you need. Our team usually responds within one business day.',
  },
]

export const PRODUCT_FAQS: Partial<Record<ProductCategorySlug, FAQItem[]>> = {
  'cpvc-pipes-fittings': [
    {
      question: 'What temperature can Wingrip CPVC pipes handle?',
      answer:
        'Wingrip CPVC pipes are rated for continuous hot water service up to approximately 93°C, making them suitable for geysers, solar water heaters, and hot-and-cold plumbing systems.',
    },
    {
      question: 'Which standard do Wingrip CPVC pipes comply with?',
      answer:
        'Our CPVC pipes and fittings are manufactured to IS 15778 and carry the ISI mark, ensuring verified dimensions, wall thickness, and pressure rating.',
    },
    {
      question: 'Can I use ordinary UPVC solvent cement on CPVC pipes?',
      answer:
        'No. CPVC joints require a CPVC-grade solvent cement formulated to maintain bond strength at high temperatures. Using ordinary UPVC cement on hot water lines can lead to joint failure.',
    },
    {
      question: 'Is CPVC safe for drinking water?',
      answer:
        'Yes. Wingrip CPVC is made from virgin, lead-free compound and does not impart taste or odour to water, making it safe for potable hot and cold water supply.',
    },
  ],
  'upvc-pipes-fittings': [
    {
      question: 'What are Wingrip UPVC pipes used for?',
      answer:
        'UPVC pressure pipes are used for cold water supply, overhead tank distribution, borewell connections, and agricultural pressure lines. They are corrosion-proof and handle high working pressure.',
    },
    {
      question: 'Which standard do Wingrip UPVC pipes meet?',
      answer:
        'Our UPVC pressure pipes are manufactured to IS 4985 and carry the ISI mark for verified quality, dimensions, and pressure rating.',
    },
    {
      question: 'Can UPVC pipes be used for hot water?',
      answer:
        'No. UPVC is designed for cold water only. For hot water plumbing you should use CPVC, which is rated for temperatures up to around 93°C.',
    },
    {
      question: 'How are UPVC pipes joined?',
      answer:
        'UPVC pipes are joined using UPVC solvent cement, or with rubber-ring (push-fit) joints for larger pressure and drainage pipes that need to accommodate thermal movement.',
    },
  ],
  'swr-pipes-fittings': [
    {
      question: 'What does SWR stand for?',
      answer:
        'SWR stands for Soil, Waste and Rainwater — the drainage system that carries away toilet waste, sink and basin water, and rainwater from a building safely and odour-free.',
    },
    {
      question: 'What sizes are Wingrip SWR pipes available in?',
      answer:
        'Wingrip SWR pipes are available in common sizes including 75mm for branch waste lines, 110mm for WC and main soil branches, and 160mm for main stacks in multi-storey buildings.',
    },
    {
      question: 'What is the difference between ring-fit and self-fit SWR?',
      answer:
        'Ring-fit joints use a rubber ring that allows for thermal expansion, ideal for long vertical stacks. Self-fit joints use solvent cement for a permanent rigid bond, suited to shorter concealed runs.',
    },
    {
      question: 'Which standard do Wingrip SWR pipes comply with?',
      answer:
        'Our SWR pipes and fittings are manufactured to IS 14735, ensuring correct wall thickness and dimensions so fittings seat properly and joints stay leak-free.',
    },
  ],
}
