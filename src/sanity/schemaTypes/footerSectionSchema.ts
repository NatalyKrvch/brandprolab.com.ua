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
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'URL',
      title: 'URL for link',
      type: 'url',
      validation: rule =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
});
