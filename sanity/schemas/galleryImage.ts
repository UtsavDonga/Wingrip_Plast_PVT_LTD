import { defineField, defineType } from 'sanity'

export const GALLERY_CATEGORIES = [
  { title: 'Plant & Infrastructure', value: 'plant' },
  { title: 'Products', value: 'products' },
  { title: 'Dealer Meets', value: 'dealer-meets' },
  { title: 'Exhibitions', value: 'exhibitions' },
] as const

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: GALLERY_CATEGORIES.map((c) => ({ title: c.title, value: c.value })),
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
})
