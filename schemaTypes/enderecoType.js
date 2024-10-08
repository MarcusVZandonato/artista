import {defineField, defineType} from 'sanity'

export const enderecoType = defineType({
  name: 'endereco',
  title: 'endereco',
  type: 'document',
  fields: [
    defineField({
      name: 'rua',
      type: 'string',
    }),
    defineField({
      name: 'numero',
      type: 'date',
    }),
    defineField({
      name: 'bairro',
      type: 'string',
    }),
    defineField({
      name: 'cidade',
      type: 'string',
    }),
    defineField({
      name: 'estado',
      type: 'image',
    }),
    defineField({
      name: 'pais',
      type: 'boolean',
    }),
    defineField({
      name: 'cep',
      type: 'string',
    }),
  ],
})