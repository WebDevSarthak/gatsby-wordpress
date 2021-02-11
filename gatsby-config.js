module.exports = {
  siteMetadata: {
    title: "gatsby-wordpress-site",
    description: "test",
    author: "sarthak"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost/test/graphql",
      },
    },
  ],
};


