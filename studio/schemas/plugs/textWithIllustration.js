export default {
  type: 'object',
  title: 'Text with illustration',
  name: 'textWithIllustration',
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
      type: 'simpleBlockContent',
      name: 'text'
    },
    {
      type: 'illustration',
      name: 'illustration'
    },
    {
      name: 'ctas',
      title: 'Call to action buttons',
      type: 'array',
      of: [
        {
          name: 'cta',
          type: 'cta'
        }
      ]
    }
  ]
}
