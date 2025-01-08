import { defineType, defineField } from 'sanity';

export const headerSectionSchema = defineType({
  name: 'header',
  title: 'Header section',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        defineField({
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Anchor Link',
              type: 'string',
              validation: rule =>
                rule.required().custom(value => {
                  return value?.startsWith('#')
                    ? true
                    : 'Посилання має починатися з #';
                }),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
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
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
