import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuing Body',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'Short label shown on the badge, e.g. ISI, ISO.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'certificate',
      title: 'Certificate Image / Scan',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'issuer', media: 'certificate' },
  },
})
