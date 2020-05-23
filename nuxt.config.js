const colors = require('vuetify/es5/util/colors').default;
require('dotenv').config();

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Anime Info',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/anime-info-demo/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lobster|Gochi+Hand|Rock+Salt|Special+Elite'
      }
    ]
  },
  router: {
    base: '/anime-info-demo/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Server configuration
   */
  server: {
    port: process.env.PORT || 3000,
    host: process.env.APP_ENV === 'local' ? '0.0.0.0' : 'localhost'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/reset.scss', '~/assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/treeview.js', ssr: false },
    { src: '~plugins/global-components', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: ['pt-br', 'en', 'es'],
        defaultLocale: 'pt-br',
        vueI18n: {
          fallbackLocale: 'pt-br',
          messages: {
            en: require('./locales/en.json'),
            es: require('./locales/es.json'),
            'pt-br': require('./locales/pt-br.json')
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: process.env.baseURL,
    proxyHeaders: false,
    credentials: false
  },
  /*
   ** Pwa module configuration
   */
  manifest: {
    name: 'Anime Info',
    short_name: 'Anime Info',
    theme_color: '#2196f3',
    background_color: '#2196f3',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    icons: [
      {
        src: '../images/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: '../images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  /*
   ** vuetify module configuration
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: { icons: 'fa' },
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
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isClient, isDev }) {
      if (isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty',
          net: 'empty',
          tls: 'empty'
        };
        if (isDev) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(ts|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          });
        }
      }
    }
  }
};
