import { defineField, defineType } from 'sanity';

export const expertiseSectionSchema = defineType({
  name: 'expertiseSection',
  title: 'Expertise Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'expertiseCards',
      title: 'Expertise Cards',
      type: 'array',
      of: [
        defineField({
          name: 'expertiseCard',
          title: 'Expertise Card',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
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
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'expandText',
              title: 'Expand Text',
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
    defineField({
      name: 'diplomaCards',
      title: 'Diploma Cards',
      type: 'array',
      of: [
        defineField({
          name: 'diplomaCard',
          title: 'Diploma Card',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'colorImage',
              title: 'Color Image',
              type: 'image',
              options: { hotspot: true },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'bwImage',
              title: 'Black & White Image',
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
