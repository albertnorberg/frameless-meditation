export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fba0fdfc2bc95517881bfcf',
                  title: 'Sanity Studio',
                  name: 'frameless-meditation-studio-15m712cz',
                  apiId: '14894a57-78f5-46fc-88c4-27033ecf0651'
                },
                {
                  buildHookId: '5fba0fe0c2bc9562c181bd59',
                  title: 'Blog Website',
                  name: 'frameless-meditation-web',
                  apiId: '06eea394-0e24-42d5-a956-5377d86bae04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albertnorberg/frameless_meditation',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://frameless-meditation-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
