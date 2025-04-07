import { defineField, defineType } from 'sanity';

export const testimonialsSectionSchema = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineField({
          name: 'testimonial',
          title: 'Testimonial',
          type: 'object',
          fields: [
            defineField({
              name: 'review',
              title: 'Review',
              type: 'text',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'personName',
              title: 'Person Name',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'personTitle',
              title: 'Person Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'smallPhoto',
              title: 'Small Photo',
              type: 'image',
              options: { hotspot: true },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'largePhoto',
              title: 'Large Photo',
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
