const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/about.js"))),
  "component---src-pages-darkmode-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/darkmode.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/my-files.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/skills.js"))),
  "component---src-pages-store-context-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/store/context.js"))),
  "component---src-pages-store-global-state-provider-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/store/GlobalStateProvider.js"))),
  "component---src-pages-store-use-global-state-js": hot(preferDefault(require("/Users/williamkwon/Documents/GatsbyJS/src/pages/store/useGlobalState.js")))
}

