import { defineField, defineType } from 'sanity';

export const heroSectionSchema = defineType({
  name: 'hero',
  title: 'Hero section',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'array',
      of: [
        defineField({
          name: 'boldText',
          title: 'Bold Text',
          type: 'string',
          validation: rule => rule.required(),
        }),
        defineField({
          name: 'regularText',
          title: 'Regular Text',
          type: 'string',
          validation: rule => rule.required(),
        }),
      ],
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
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
  ],
});
