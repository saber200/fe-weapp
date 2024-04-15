import Taro from '@tarojs/taro'
import { getCurrentPagePath } from './utils';
const baseUrl = 'http://api.soxcc.com:9000'

const interceptor = async (chain) => {
  Taro.showLoading();
  const refreshToken = Taro.getStorageSync('refreshToken');
  const requestParams = chain.requestParams
  const path = getCurrentPagePath();
  
  if(!refreshToken && path !== 'pages/login/index'){
    Taro.reLaunch({ url: '/pages/login/index' });
    return false;
  }else{
    return chain.proceed(requestParams)
  }
}

Taro.addInterceptor(interceptor);

const get = url => {
  return Taro.request({
    method: 'GET',
    url: `${url}`,
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
  const { url, data, header } = params;
  return Taro.request({
    method: 'POST',
    url,
    data,
    header: header || { 'Content-Type': 'application/json' },
    success: res => res
  })
}

// 登陆
const onLogin = params => post({ ...params, url: `${baseUrl}/api/login` });

// 解绑
const unBind = params => post({ ...params, url: `${baseUrl}/api/unbind` });

// 绑定
const onBind = params => post({ ...params, url: `${baseUrl}/api/bind` });

// 刷新access_token
const resetToken = params => post({ ...params, url: 'http://kc.it663.com:8090/realms/hos/protocol/openid-connect/token' });

// 查询menus
const getMenus = () => get('http://platform-publish.soxcc.com/apps/data/hos/rm4y6/menu.json?header=Authorization');

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

// 页面配置文件
const getPageConfigs = id => get(`/students?id=${id}`);

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
  onLogin,
  onBind,
  unBind,
  resetToken
}