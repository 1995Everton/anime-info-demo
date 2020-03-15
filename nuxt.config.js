const colors =  require('vuetify/es5/util/colors')

module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
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
    // host: '0.0.0.0'
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [ 
    { src: '~plugins/global-components', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios:{
    baseURL : "https://dashboard.heroku.com/apps/radiant-waters-14400/api/"
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
