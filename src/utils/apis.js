import Taro from '@tarojs/taro'
const baseUrl = 'http://api.soxcc.com:9000'
// const baseUrl = 'http://localhost:5000'


const get = url => {
  return Taro.request({
    method: 'GET',
    url: `${baseUrl}${url}`,
    header: {
      'Content-type': 'application/json',
    },
    success: function (res) {
      return res;
    },
    fail: function (err) {
      console.log(err);
      return err;
    }
  })
}

const post = params => {
  const { url, data } = params;
  return Taro.request({
    method: 'POST',
    url,
    data,
    header: { 'Content-type': 'application/json' },
    success: res => res
  })
}

// 登陆
const onLogin = params => post({ ...params, url: `${baseUrl}${params.url}` });

// 用户绑定账号列表
const getWxBindList = wxid => {
  const data = {
    wxid: wxid
  }
  return Taro.request({
    url: 'http://61.148.207.174:9092/proccess/start/master_172omb21oq_pa2imok9ad',
    method: 'POST',
    data,
    header: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      return res;
    }
  })
}

// const onLogin = (username, password) => {
//   // 登陆
//   const url = 'http://kc.it663.com:8020/realms/master/protocol/openid-connect/token';
//   const data = {
//     username: username,
//     password: password,
//     grant_type: 'password',
//     client_id: 'security-admin-console'
//   }
//   return Taro.request({
//     url,
//     method: 'POST',
//     data,
//     header: {
//       'Content-type': 'application/x-www-form-urlencoded'
//     },
//     success: function (res) {
//       const { data } = res;

//       // 当前用户登陆后，清除管理员token
//       Taro.clearStorageSync();
//       Object.keys(data).map(key => Taro.setStorageSync(key, data[key]));
//       Taro.redirectTo({ url: '/pages/home/index' })
//       return res;
//     }
//   })
// }

// 页面配置文件
const getPageConfigs = id => get(`/students?id=${id}`);
// menus配置文件
const getMenus = () => get('/getMenus');

// 用户信息
const getUserInfo = openid => get(`/getUserInfo?openid=${openid}`);
// 查询用户名
const serchUserName = openid => get(`/serchUserName?openid=${openid}`);
// 设置用户信息
const setUserInfo = params => post({ ...params, url: `${baseUrl}${params.url}` })
// 获取权限accesstoken
const getProgramsAccesstoken = params => post({ data: params, url: `http://4s.it663.com:9092/proccess/start/master_172omb21oq_center-kc-login-getAccesstoken` })

export default {
  getPageConfigs,
  getMenus,
  getUserInfo,
  setUserInfo,
  serchUserName,
  getProgramsAccesstoken,
  getWxBindList,
  onLogin
}