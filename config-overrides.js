const { override, addLessLoader } = require('customize-cra')

module.exports = {
    webpack: override(
      addLessLoader({
        lessOptions: {
          javascriptEnabled: true
        }
      }),
    )
}