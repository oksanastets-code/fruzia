module.exports = {
  siteMetadata: {
      title: `fruzia`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
     "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};