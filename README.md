# macintacos.github.io Source Code

This website is built using [Gatsby](https://www.gatsbyjs.org/docs/), using the [Chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog) theme as a default theme to build on top of.

To deploy a new version of the site, clone the `develop` branch and run:

```
npm run deploy
```

This generates the appropriate files and pushes them to the `master` branch. **Do not push any code to `master` directly;** all editing should be done in `develop`.

To upgrade the theme, edit the value of the version in for `gatsby-theme-chronoblog` in `package.json`.
