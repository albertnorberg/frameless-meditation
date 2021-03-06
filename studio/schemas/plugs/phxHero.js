export default {
  type: 'object',
  name: 'phxHero',
  title: 'Hero',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent'
    },
    {
      name: 'darkOpacityOverlay',
      type: 'boolean',
      title: 'Dark opacity overlay'
    },
    {
      name: 'parallax',
      type: 'boolean',
      title: 'Parallax'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
    },
    {
      name: 'phxJumpButtonLink',
      type: 'phxJumpButtonLink',
      title: 'Jump button'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Fullpage hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
