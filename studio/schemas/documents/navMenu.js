export default {
  type: 'document',
  name: 'navigationMenu',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'cta' }]
    }
  ]
}
