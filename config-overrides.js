const {
  override,
  fixBabelImports,
  // setWebpackTarget,
  // setWebpackPublicPath,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('@material-ui/core', {
    libraryDirectory: 'esm', // or '' if your bundler does not support ES modules
    camel2DashComponentName: false,
  }),
  fixBabelImports('@material-ui/lib', {
    libraryDirectory: 'esm', // or '' if your bundler does not support ES modules
    camel2DashComponentName: false,
  }),
  fixBabelImports('@material-ui/icons', {
    libraryDirectory: 'esm', // or '' if your bundler does not support ES modules
    camel2DashComponentName: false,
  }),
  // setWebpackPublicPath(
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://cdn.jsdelivr.net/gh/tonyc726/ryan-pupil-mathematics@gh-pages/'
  //     : null
  // )
  (() => (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath =
        'https://cdn.jsdelivr.net/gh/tonyc726/ryan-pupil-mathematics@gh-pages/';
    }
    return config;
  })()
);
