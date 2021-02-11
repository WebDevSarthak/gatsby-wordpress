module.exports = {
  siteMetadata: {
    title: "gatsby-wordpress-site",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost:8001/graphql",
      },
    },
  ],
};
