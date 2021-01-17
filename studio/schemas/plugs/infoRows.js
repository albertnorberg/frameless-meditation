export default {
  type: 'object',
  name: 'infoRows',
  title: 'Info rows',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'string',
      name: 'tagId',
      title: 'Jump link id',
      description: 'Target id for your jump buttons - it is optional but has to be unique!' 
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'textWithIllustration' }]
    }
  ]
}
