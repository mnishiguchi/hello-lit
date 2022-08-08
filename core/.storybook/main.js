const autoprefixer = require('autoprefixer')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/web-components',
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'lit-scss-loader',
          options: {
            minify: true // defaults to false
          }
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [autoprefixer()]
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            // Prefer Dart Sass
            implementation: require('sass'),

            // See https://github.com/webpack-contrib/sass-loader/issues/804
            webpackImporter: false,
            sassOptions: {
              includePaths: ['./node_modules']
            }
          }
        }
      ]
    })

    return config
  }
}
