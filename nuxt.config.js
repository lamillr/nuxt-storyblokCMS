const axios = require ("axios");

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Nuxt and Storyblok",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Exploring Nuxt and Storyblok CMS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nobile&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ["storyblok-nuxt", 
    {
      accessToken:process.env.NODE_ENV == "production"
        ? "jkadyRdmBqLo0uxURKI6qAtt"
        : "b2QteGuMGc4uytafEgfdUgtt", 
        cacheProvider: "memory"
      }
    ]
  ],
  /*
  ** Build configuration
  */

  generate: {
    routes: function() {
      return axios.get(
        "https://api.storyblok.com/v1/cdn/stories?version=published&token=jkadyRdmBqLo0uxURKI6qAtt&starts_with=blog&cv=" +
          Math.floor(Date.now() / 1e3)
      )
      .then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug);
        return [
          '/',
          '/blog',
          '/about',
          ...blogPosts
        ]
      });
    }
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
