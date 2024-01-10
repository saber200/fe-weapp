// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "10"
        }
      }
    ],
    [
      'taro',
      {
        framework: 'react',
        ts: false
      },
    ]
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "@taroify/core",
        libraryDirectory: "",
        style: true,
      },
      "@taroify/core",
    ],
    [
      "import",
      {
        libraryName: "@taroify/icons",
        libraryDirectory: "",
        camel2DashComponentName: false,
        style: () => "@taroify/icons/style",
      },
      "@taroify/icons",
    ],
    // [
    //   "import",
    //   {
    //     libraryName: "antd-mobile",
    //     libraryDirectory: "es/components",
    //     style: false
    //   }
    // ]
  ],
}
