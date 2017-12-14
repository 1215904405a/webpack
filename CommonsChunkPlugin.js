  new webpack.optimize.CommonsChunkPlugin({ //映射文件每次编译都会变  所以要单独打包
    name: 'manifest',
  })
