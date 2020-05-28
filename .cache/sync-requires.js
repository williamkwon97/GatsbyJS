const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/my-files.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/skills.js")))
}

