require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: "All Her",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: 'allher',
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
