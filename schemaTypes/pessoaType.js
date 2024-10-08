import {defineField, defineType} from 'sanity'

export const pessoaType = defineType({
  name: 'pessoa',
  title: 'pessoa',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'number',  
    }),
    defineField({
      name: 'name',
      type: 'string',  
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'telefone',
      type: 'string',
    }),
    defineField({
      name: 'perfil',
      type: 'image',
    }),
    defineField({
      name: 'ativo',
      type: 'boolean',
    }),
    defineField({
      name: 'endereco',
      type: 'endereco',
    }),
  ],
})