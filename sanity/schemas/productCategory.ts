import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productCategory',
  title: 'Product Category',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'One-line summary shown on cards and navigation.',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Key',
      type: 'string',
      description: 'Identifier used to map to a front-end icon.',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'shortDescription', media: 'image' },
  },
})
