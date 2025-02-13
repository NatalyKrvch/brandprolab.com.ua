import { defineField, defineType } from 'sanity';

export const casesSectionSchema = defineType({
  name: 'cases',
  title: 'Cases section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        defineField({
          name: 'regularText',
          title: 'Regular Text',
          type: 'string',
          validation: rule => rule.required(),
        }),
        defineField({
          name: 'boldColoredText',
          title: 'Bold Colored Text',
          type: 'string',
          validation: rule => rule.required(),
        }),
        defineField({
          name: 'boldBlackText',
          title: 'Bold Black Text',
          type: 'string',
          validation: rule => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'cases',
      title: 'Cases',
      type: 'array',
      of: [
        defineField({
          name: 'case',
          title: 'Case',
          type: 'object',
          fields: [
            defineField({
              name: 'caseText',
              title: 'Case Text',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'personName',
              title: 'Person Name',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'personPhoto',
              title: 'Person Photo',
              type: 'image',
              options: { hotspot: true },
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
