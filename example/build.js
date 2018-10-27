const Bundler = require('parcel-bundler')
const path = require('path')
const reactSVGPlugin = require('../lib')

const entry = path.join(__dirname, './index.html')
const bundler = new Bundler(entry, {
  cache: false
})

reactSVGPlugin(bundler)

bundler.serve()
