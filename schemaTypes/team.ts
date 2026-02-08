import {defineField, defineType} from 'sanity'

export const team = defineType({
    name: 'teamMember',
    title: 'Team Members',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'role',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
    ],
})
