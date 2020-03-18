const colors =  require('vuetify/es5/util/colors').default;
require('dotenv').config();

module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: 'Anime Info',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css?family=Lobster|Gochi+Hand|Rock+Salt|Special+Elite'}
    ]
  },
  server: {
    port: process.env.PORT || 3000,
    // host: process.env.APP_ENV == 'local' ? '0.0.0.0' : 'localhost'
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [ 
    { src: '~plugins/global-components', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios:{
    baseURL : process.env.baseURL,
    proxyHeaders: false,
    credentials: false
  },
  manifest: {
    name: "Anime Info",
    short_name: "Anime Info",
    theme_color: "#2196f3",
    background_color: "#2196f3",
    display: "standalone",
    Scope: "/",
    start_url: "/",
    icons: [
      {
        src: "../images/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "../images/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {icons: 'fa'},
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty',
        }
      }
    }
  }
}
