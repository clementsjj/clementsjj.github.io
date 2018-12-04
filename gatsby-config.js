module.exports = {
  //pathPrefix: '/',
  siteMetadata: {
    title: 'Internet Home of JJ Clements',
    description: 'Landing Page for JJ Clements',
    siteUrl: 'https://www.clementsjj.com',
    author: 'clementsjj',
    twitter: 'https://twitter.com/clementsjj',
    github: 'https://github.com/clementsjj',
    linkedin: 'https://www.linkedin.com/in/john-clements-084a1811a/',
    instagram: 'https://www.instagram.com/jj4bucky/',
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
