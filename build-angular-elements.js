const fs = require('fs-extra');
const concat  = require('concat');
(async function build() {

const base = `./dist/web-components`
const files = [
`${base}/runtime.js`,
`${base}/polyfills.js`,
// `${base}/scripts.js`,
`${base}/main.js`,
]
await fs.ensureDir('angular-elements')
await concat(files,'angular-elements/button.js')
})()
