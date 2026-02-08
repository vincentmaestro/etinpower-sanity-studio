import {defineField, defineType} from 'sanity'

export const posts = defineType({
    name: 'post',
    title: 'posts',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'title',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'body',
            title: 'body',
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
                        { title: 'heading 6', value: 'h6' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' }
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'image',
                    title: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            validation: (rule) => rule.required()
                        }
                    ]
                }
            ],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'display image',
            type: 'image',
            // validation: (rule) => rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
});
