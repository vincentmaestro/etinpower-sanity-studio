import {defineField, defineType} from 'sanity'

export const communities = defineType({
    name: 'community',
    title: 'communities',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'community name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (rule) => rule.required(),
            description: 'name of community hyphen community. e.g ologbonugu-community (Important!)',
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'normal', value: 'normal' },
                        { title: 'heading 2', value: 'h2' },
                        { title: 'heading 3', value: 'h3' },
                        { title: 'heading 4', value: 'h4' },
                        { title: 'heading 5', value: 'h5' },
                        { title: 'heading 6', value: 'h6' },
                        { title: 'paragraph', value: 'p'}
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' }
                        ]
                    }
                }
            ],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'display image',
            type: 'image',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'images',
            title: 'photos of community',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            title: 'caption',
                            type: 'string',
                            validation: (rule) => rule.required()
                        }
                    ]
                }
            ],
            validation: (rule) => rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
});
