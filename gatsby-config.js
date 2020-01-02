module.exports = {
  siteMetadata: {
    title: `macintacos`,
    name: `Julian Torres`,
    siteUrl: `https://macintacos.github.io`,
    description: `Still figuring things out.`,
    hero: {
      heading: `hey.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/macintacos`
      },
      {
        name: `github`,
        url: `https://github.com/macintacos`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `macintacos`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
