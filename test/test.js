const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { spy } = require('sinon')
const svgr = require('@svgr/core')

const ReactSVGAsset = require('../lib/asset')

const svgContent = fs.readFileSync(path.join(__dirname, 'image.svg'))

describe('parcel-plugin-react-svg', function() {
  before(function() {
    this.svgrSpy = spy(svgr, 'default')
  })

  after(function() {
    this.svgrSpy.restore()
  })

  it('converts svg content to a React component with svgr', async function() {
    // Parse svg content and assert it is processed by svgr
    const asset = new ReactSVGAsset('image.svg', {
      rootDir: __dirname
    })
    await asset.parse(svgContent)
    const result = asset.generate()
    assert(this.svgrSpy.calledOnceWith(svgContent))
    assert.equal(result.length, 1)
    assert.equal(result[0].type, 'js')
    const svgrResult = await this.svgrSpy.firstCall.returnValue
    assert.equal(result[0].value, svgrResult)
  })
})
