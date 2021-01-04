export default {
  type: 'object',
  title: 'Pricing',
  name: 'pricing',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'boolean',
      name: 'transparentCTAs',
      title: 'Enable gradient background'
    }
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return {
        title: `Pricing module: ${title}`
      }
    }
  }
}
