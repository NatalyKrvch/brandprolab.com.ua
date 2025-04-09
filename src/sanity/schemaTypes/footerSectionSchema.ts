import { defineField, defineType } from 'sanity';

export const footerSectionSchema = defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'offerLink',
      title: 'Offer Link',
      type: 'url',
      validation: rule =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
});
