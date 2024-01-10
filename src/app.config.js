export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/home/index',
  ],
  routes: [
    {
      // 主页
      path: 'home',
      page: 'pages/index/index',
    },
    {
      // 登录页
      path: 'home',
      page: 'pages/login/index',
    },
    {
      // Home
      path: 'home',
      page: 'pages/login/index',
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
