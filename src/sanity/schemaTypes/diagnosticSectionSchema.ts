import { defineField, defineType } from 'sanity';

export const diagnosticSectionSchema = defineType({
  name: 'diagnosticSection',
  title: 'Diagnostic Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'benefitsTitle',
      title: 'Benefits Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        defineField({
          name: 'benefit',
          title: 'Benefit',
          type: 'string',
          validation: rule => rule.required(),
        }),
      ],
    }),
  ],
});
