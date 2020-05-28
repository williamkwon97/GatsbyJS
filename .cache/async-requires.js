// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("./../src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */),
  "component---src-pages-skills-js": () => import("./../src/pages/skills.js" /* webpackChunkName: "component---src-pages-skills-js" */)
}

