import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'productCategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'image',
      title: 'Primary Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({
      name: 'standard',
      title: 'Applicable Standard',
      type: 'string',
      description: 'e.g. IS 15778, ASTM D2846',
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'applications',
      title: 'Applications',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'fittings',
      title: 'Available Fittings',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category.name', media: 'image' },
  },
})
