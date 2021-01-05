export default {
  type: 'object',
  name: 'socialLink',
  title: 'Social link',
  fields: [
    {
      title: 'Url',
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }
  ],
  preview: {
    select: {
      url: 'url',
      disabled: 'disabled'
    },
    prepare({ url, disabled }) {

      function getLabel(url){
        if (url.includes("linkedin")) {
          return "Linked In"
        }
        if (url.includes("youtube")) {
          return "YouTube"
        }
        if (url.includes("facebook")) {
          return "Facebook"
        }
        if (url.includes("patreon")) {
          return "Patreon"
        }
        if (url.includes("insta")) {
          return "Instagram"
        }
      }

      return {
        title: `${getLabel(url)} ${disabled ? ' - DISABLED' : ''}`
      }
    }
  }
}
