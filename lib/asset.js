const { Asset } = require('parcel-bundler')
const svgr = require('@svgr/core')

class ReactSVGAsset extends Asset {
  async parse(contents) {
    this.contents = await svgr.default(contents, {
      prettier: false,
      svgo: true
    })
  }

  generate() {
    return [
      {
        type: 'js',
        value: this.contents
      }
    ]
  }
}

module.exports = ReactSVGAsset
