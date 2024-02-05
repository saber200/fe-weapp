import Taro from '@tarojs/taro'
// const baseUrl = 'http://154.221.31.52:5000'
const baseUrl = 'http://localhost:5000'


const onRequestGet = url => {
  const result = Taro.request({
    method: 'GET',
    url: `${baseUrl}${url}`,
    header: {
      'Content-type': 'application/json',
    },
    success: function (res) {
      return res;
    }
  })

  return result;
}

const onRequestPOST = params => {
  const { url, data } = params;
  return Taro.request({
    method: 'POST',
    url: `${baseUrl}${url}`,
    data: data,
    header: {
      'Content-type': 'application/json',
    },
    success: function (res) {
      return res;
    }
  })
}

const getPageConfigs = id => onRequestGet(`/students?id=${id}`);
const getMenus = () => onRequestGet('/getMenus');

const getUserInfo = username => onRequestGet(`/getUserInfo?username=${username}`);
const setUserInfo = params => onRequestPOST(params)

export default {
  getPageConfigs,
  getMenus,
  getUserInfo,
  setUserInfo
}