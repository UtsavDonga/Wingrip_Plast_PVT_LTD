export const COMPANY = {
  name: 'Wingrip Plast Pvt. Ltd.',
  shortName: 'Wingrip',
  tagline: 'Excellence Is Our Passion',
  founded: 2013,
  phone: '+91-[CLIENT TO PROVIDE: phone number]',
  phoneDisplay: '[CLIENT TO PROVIDE: phone number]',
  whatsapp: '919978479105',
  email: 'info@wingrippipes.com',
  salesEmail: 'sales@wingrippipes.com',
  address: {
    line1: 'Survey No.421, Plot No.26',
    line2: 'Opp. Sujata International, B/h Mahindra Tractor',
    city: 'Hapa, Jamnagar',
    state: 'Gujarat',
    pincode: '361120',
    country: 'India',
    full: 'Survey No.421, Plot No.26, Opp. Sujata International, B/h Mahindra Tractor, Hapa, Jamnagar – 361120, Gujarat, India',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0![CLIENT TO PROVIDE: Google Maps embed URL for Wingrip factory]',
  social: {
    facebook: 'https://facebook.com/[CLIENT TO PROVIDE]',
    instagram: 'https://instagram.com/[CLIENT TO PROVIDE]',
    linkedin: 'https://linkedin.com/company/[CLIENT TO PROVIDE]',
    youtube: 'https://youtube.com/@[CLIENT TO PROVIDE]',
  },
  gst: '[CLIENT TO PROVIDE: GST number]',
  cataloguePdf: '/downloads/wingrip-product-catalogue.pdf',
} as const

export const WHATSAPP_ENQUIRY_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  'Hi Wingrip, I\'d like to enquire about your products.'
)}`

export const TRUST_STATS = [
  { value: 11, suffix: '+', label: 'Years of Excellence' },
  { value: 7, suffix: '', label: 'Product Categories' },
  { value: 28, suffix: '+', label: 'States Supplied' },
  { value: 500, suffix: '+', label: 'Dealer Network' },
] as const

export const CERTIFICATIONS = [
  {
    name: 'BIS Certification',
    issuer: 'Bureau of Indian Standards',
    description: 'ISI Mark — guaranteeing compliance with Indian Standards for plumbing pipes.',
    badge: 'ISI',
  },
  {
    name: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    description: 'Quality Management System certified for consistent product quality.',
    badge: 'ISO',
  },
  {
    name: 'IS 15778 Compliant',
    issuer: 'Bureau of Indian Standards',
    description: 'CPVC pipes for hot and cold water supply systems.',
    badge: 'IS',
  },
  {
    name: 'IS 4985 Compliant',
    issuer: 'Bureau of Indian Standards',
    description: 'UPVC pipes for water supply under pressure.',
    badge: 'IS',
  },
  {
    name: 'IS 14735 Compliant',
    issuer: 'Bureau of Indian Standards',
    description: 'SWR pipes and fittings for soil, waste, and rainwater drainage.',
    badge: 'IS',
  },
] as const

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu',
  'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
] as const
