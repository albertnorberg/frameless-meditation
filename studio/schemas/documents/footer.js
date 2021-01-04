export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'companyName',
      type: 'string',
      title: 'Company Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        { type: 'socialLink' },
      ],
    },
  ]
}
