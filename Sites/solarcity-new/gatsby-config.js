module.exports = {
  siteMetadata: {
    title: 'Solarcity',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: 'e8961494785264ea01a54ac7e1746a',
        name: 'solarcity',
        short_name: 'solarcity',
        start_url: '/',
        preview: 'true',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        disableLiveReload: false,
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
