module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-64366323-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Andy Kay`,
    author: `Andy Kay`,
    description: `My personal home on the web.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/andyk2177`,
      },
      {
        name: `github`,
        url: `https://github.com/andyk2177`,
      },
    ],
  },
}
