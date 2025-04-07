import { defineField, defineType } from 'sanity';

export const casesSectionSchema = defineType({
  name: 'cases',
  title: 'Cases section',
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
      type: 'string',
      validation: rule => rule.required(),
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
          ],
        }),
      ],
    }),
  ],
});
