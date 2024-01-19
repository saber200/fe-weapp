export default defineAppConfig({
  pages: [
    // 'pages/indexdemo/index',
    'pages/index/index',
    'pages/login/index',
    'pages/home/index',
    'pages/children/index',
  ],
  routes: [
    // {
    //   // 主页
    //   path: 'index',
    //   page: 'pages/indexdemo/index',
    // },
    {
      // 主页
      path: 'index',
      page: 'pages/index/index',
    },
    {
      // 登录页
      path: 'login',
      page: 'pages/login/index',
    },
    {
      // Home
      path: 'home',
      page: 'pages/home/index',
    },
    {
      // Home
      path: 'children',
      page: 'pages/children/index',
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
