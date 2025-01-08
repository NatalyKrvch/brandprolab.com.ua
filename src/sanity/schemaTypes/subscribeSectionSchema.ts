import { defineType, defineField } from 'sanity';

export const subscribeSectionSchema = defineType({
  name: 'subscribeSection',
  title: 'Subscribe Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'mainCard',
      title: 'Main Card',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: rule => rule.required(),
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: { hotspot: true },
          validation: rule => rule.required(),
        }),
        defineField({
          name: 'platform',
          title: 'Platform',
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
          name: 'link',
          title: 'Link',
          type: 'url',
          validation: rule => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineField({
          name: 'card',
          title: 'Card',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
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
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
