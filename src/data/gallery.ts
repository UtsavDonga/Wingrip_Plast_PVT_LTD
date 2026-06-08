import type { GalleryItem, GalleryCategorySlug } from '@/types'

export const GALLERY_CATEGORIES: { slug: GalleryCategorySlug; label: string }[] = [
  { slug: 'plant', label: 'Plant & Infrastructure' },
  { slug: 'products', label: 'Products' },
  { slug: 'dealer-meets', label: 'Dealer Meets' },
  { slug: 'exhibitions', label: 'Exhibitions' },
]

// NOTE: All images are placeholders. The `image` field is intentionally empty
// so the UI renders a clearly-marked placeholder until the client provides
// actual photographs. [CLIENT TO PROVIDE: gallery photographs]
export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Plant & Infrastructure ──
  { id: 'plant-1', title: 'Extrusion Line', caption: 'Main CPVC/UPVC extrusion line', category: 'plant', image: '' },
  { id: 'plant-2', title: 'Quality Control Lab', caption: 'In-house testing laboratory', category: 'plant', image: '' },
  { id: 'plant-3', title: 'Raw Material Storage', caption: 'Virgin PVC compound warehouse', category: 'plant', image: '' },
  { id: 'plant-4', title: 'Finished Goods Warehouse', caption: 'Ready-to-dispatch inventory', category: 'plant', image: '' },

  // ── Products ──
  { id: 'product-1', title: 'CPVC Pipes & Fittings', caption: 'Hot & cold water range', category: 'products', image: '' },
  { id: 'product-2', title: 'UPVC Pressure Pipes', caption: 'Water supply range', category: 'products', image: '' },
  { id: 'product-3', title: 'SWR Drainage System', caption: 'Soil, waste & rainwater', category: 'products', image: '' },
  { id: 'product-4', title: 'Water Storage Tanks', caption: '3-layer roto-moulded tanks', category: 'products', image: '' },

  // ── Dealer Meets ──
  { id: 'dealer-1', title: 'Annual Dealer Meet', caption: 'Celebrating our channel partners', category: 'dealer-meets', image: '' },
  { id: 'dealer-2', title: 'Regional Dealer Conference', caption: 'Gujarat region partners', category: 'dealer-meets', image: '' },
  { id: 'dealer-3', title: 'Dealer Felicitation', caption: 'Recognising top performers', category: 'dealer-meets', image: '' },

  // ── Exhibitions ──
  { id: 'expo-1', title: 'Plumbing & Sanitation Expo', caption: 'Wingrip product showcase', category: 'exhibitions', image: '' },
  { id: 'expo-2', title: 'Construction Trade Fair', caption: 'Meeting builders & contractors', category: 'exhibitions', image: '' },
  { id: 'expo-3', title: 'Industry Exhibition Stall', caption: 'Our exhibition presence', category: 'exhibitions', image: '' },
]

export function getGalleryByCategory(category: GalleryCategorySlug | 'all'): GalleryItem[] {
  return category === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === category)
}
