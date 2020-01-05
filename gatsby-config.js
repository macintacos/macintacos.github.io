module.exports = {
  siteMetadata: {
    siteTitle: 'macintacos',
    siteDescription: 'this is a place where I occasionally write stuff',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://macintacos.github.io/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Julian Torres', // for example - 'Ivan Ganev'
    authorDescription: 'this is a place where I occasionally write stuff', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: 'https://twitter.com/macintacos', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/macintacos`
      },
      {
        icon: `github`,
        url: `https://github.com/macintacos`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: 'weirdpattern',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          }
        ]
      }
    }
  ]
};
