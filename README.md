# macintacos.github.io Source Code

This website is built using Gatsby, using the Novela theme as a default theme to build on top of.

To deploy a new version of the site, clone the `develop` branch and run:

```
npm run deploy
```

This generates the appropriate files and pushes them to the `master` branch. **Do not push any code to `master` directly;** all editing should be done in `develop`.

To upgrade the theme, edit the value of the version in for `@narative/gatsby-theme-novela` in `package.json`.