module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      "review": 'serve -s dist'
    },
    dependencies: {
      "axios": "^0.18.0"
    },
    devDependencies: {
      "serve": "^10.0.1"
    }
  })

  api.render('./template')
}