module.exports = {
  siteMetadata: {
    title: `gatsby-remark-related-posts sample blog`,
    author: {
      name: `sititou70`,
      summary: `gatsby-remark-related-posts developer`,
    },
    description: `gatsby-remark-related-posts sample blog`,
    siteUrl: `https://github.com/sititou70/gatsby-remark-related-posts`,
    social: {
      twitter: `sititou70`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-remark-related-posts",
      options: {
        target_node: "Mdx",
        getMarkdown: node => node.rawBody,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
