module.exports = {
  siteMetadata: {
    title: `EMEA AP`,
    description: `Kick off your next, great Gatsby project with this WordPress starter.`,
    author: `@romanas`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        src: 'https://www.google.com/recaptcha/api.js',
        integrity:
          'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
        crossorigin: 'anonymous',
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    `gatsby-plugin-recaptcha`,
    'gatsby-plugin-antd',
    'gatsby-plugin-react-leaflet',
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/emea-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: 'http://emeaap.eu/backend/',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/menus',
          '**/media',
          '**/aboutus',
          '**/tags',
          '**/our-team',
          '**/services',
          '**/partners',
          '**/slider',
          '**/perks',
          '**/locations',
          '**/taxonomies',
        ],
      },
    },
  ],
}
