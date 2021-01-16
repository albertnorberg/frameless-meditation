export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title (required)',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.error('You have to provide a title.').required()
    },
    {
      title: 'Landing page',
      name: 'landingPageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{type: 'route'}]
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link'
    },
    {
      title: 'Jump link',
      name: 'jumpLink',
      type: 'string',
      description: 'This is for anchor links on the current page',
      fieldset: 'link'
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link']
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link',
      jumpLink: 'jumpLink'
    },
    prepare ({title, landingPage, route, link, jumpLink}) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      if (jumpLink) {
        subtitle = `Jump link: ${jumpLink}`
      }
      return {
        title,
        subtitle
      }
    }
  }
}
