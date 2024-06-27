import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import vue from '@astrojs/vue'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Veloxi',
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'og:image:width',
            content: '16'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'og:image:height',
            content: '9'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'og:image',
            content: '/site-image.png'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: '/site-image.png'
          }
        }
      ],
      components: {
        Header: './src/components/Header.astro'
      },
      logo: {
        src: './src/assets/veloxi-logo.svg',
        replacesTitle: true
      },
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/TahaSh/veloxi',
        discord: 'https://discord.gg/EvVgtMJtQQ'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            {
              label: 'Introduction to Veloxi',
              link: '/guides/introduction'
            },
            {
              label: 'Installation',
              link: '/guides/installation'
            },
            {
              label: 'Plugins',
              link: '/guides/plugins'
            },
            {
              label: 'Event Plugins',
              link: '/guides/event-plugins'
            },
            {
              label: 'Views',
              link: '/guides/views'
            }
          ]
        },
        {
          label: 'Examples',
          items: [
            {
              label: 'Showcase',
              link: '/examples/showcase'
            },
            {
              label: 'Follow the mouse',
              link: '/examples/follow-the-mouse'
            },
            {
              label: 'Drag with a spring',
              link: '/examples/drag-with-spring'
            },
            {
              label: 'Resize with spring animation',
              link: '/examples/resize-with-spring-animation'
            },
            {
              label: 'Stacked dropdown',
              link: '/examples/stacked-dropdown'
            },
            {
              label: 'Drag to reorder',
              link: '/examples/drag-to-reorder'
            }
          ]
        }
      ]
    }),
    vue(),
    tailwind()
  ]
})
