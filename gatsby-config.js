module.exports = {
  pathPrefix: '/clementsjj',
  siteMetadata: {
    title: 'Internet Home of JJ Clements',
    description: 'Landing Page for JJ Clements',
    siteUrl: 'https://clementsjj.com',
    author: 'clementsjj',
    twitter: 'clementsjj',
    adsense: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icons/dancer.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
