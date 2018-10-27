module.exports = bundler => {
  bundler.addAssetType('svg', require.resolve('./asset'))
}
