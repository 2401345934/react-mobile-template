module.exports = [
  {
    test: /\.tsx$/,
    exclude: /node_modules/,
    use: [
      'thread-loader',
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic'
              }
            ],
            '@babel/preset-typescript'
          ]
        }
      }
    ]
  },
  {
    test: /\.jsx$/,
    exclude: /node_modules/,
    use: [
      'thread-loader',
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic'
              }
            ]
          ]
        }
      }
    ]
  }
]
