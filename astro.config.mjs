import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Veloxi',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/TahaSh/veloxi',
        discord: 'https://discord.gg/EvVgtMJtQQ'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Introduction to Veloxi', link: '/guides/introduction' },
            { label: 'Installation', link: '/guides/installation' },
            { label: 'Plugins', link: '/guides/plugins' },
            { label: 'Event Plugins', link: '/guides/event-plugins' },
            { label: 'Views', link: '/guides/views' }
          ]
        },
        {
          label: 'Examples',
          items: [
            { label: 'Showcase', link: '/examples/showcase' },
            { label: 'Follow the mouse', link: '/examples/follow-the-mouse' },
            { label: 'Drag with a spring', link: '/examples/drag-with-spring' },
            {
              label: 'Resize with spring animation',
              link: '/examples/resize-with-spring-animation'
            },
            {
              label: 'Stacked dropdown',
              link: '/examples/stacked-dropdown'
            },
            { label: 'Drag to reorder', link: '/examples/drag-to-reorder' }
          ]
        }
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' }
        // }
      ]
    }),
    vue()
  ]
})
