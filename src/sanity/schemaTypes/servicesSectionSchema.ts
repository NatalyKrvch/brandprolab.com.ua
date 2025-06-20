import { defineField, defineType } from 'sanity';

export const servicesSectionSchema = defineType({
  name: 'services',
  title: 'Services section',
  type: 'document',
  fields: [
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
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
              name: 'whiteIcon',
              title: 'Icon (white version)',
              type: 'image',
              options: { hotspot: true },
              description:
                'Optional white version of the icon for dark backgrounds',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'flipText',
              title: 'Flip Text',
              type: 'text',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'detailedDescription',
              title: 'Detailed Description',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: rule => rule.required(),
                }),
                defineField({
                  name: 'points',
                  title: 'Points',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: rule => rule.min(1).required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
