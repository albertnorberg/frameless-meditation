export default {
  type: 'object',
  name: 'textWithIllustration',
  fields: [
    {
      type: 'string',
      name: 'title'
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
