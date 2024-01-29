import Taro from '@tarojs/taro'

const onRequestGet = url => {
  const result = Taro.request({
    method: 'GET',
    url: url,
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
    url: url,
    data: data,
    header: {
      'Content-type': 'application/json',
    },
    success: function (res) {
      return res;
    }
  })
}

const getPageConfigs = id => onRequestGet(`http://154.221.31.52:5000/students?id=${id}`);
const getMenus = () => onRequestGet('http://154.221.31.52:5000/getMenus');

export default {
  getPageConfigs,
  getMenus
}