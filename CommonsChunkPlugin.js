  new webpack.optimize.CommonsChunkPlugin({ //映射文件每次编译都会变  所以要单独打包
    name: 'manifest',
  })

new webpack.optimize.CommonsChunkPlugin({ //入口文件比较多时用
  //name: "app",
  // or
  names: ["app", "subPageA"]
  // the name or list of names must match the name or names
  // of the entry points that create the async chunks

  children: true,
  // (选择所有被选 chunks 的子 chunks)

  async: 'app-common',
  // (创建一个异步 公共chunk)

  minChunks: 2,
  // (在提取之前需要至少三个子 chunk 共享这个模块)
}),
