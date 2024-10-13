import { View, Image, Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'
import apis from '@/utils/apis';
import './index.scss'

const { onLogin } = apis;

export default function Index() {
  const [state, setState] = useState({
    avatarUrl: '',
    nickName: ''
  });

  const onChooseAvatar = async (e) => {
    setState({
      ...state,
      avatarUrl: e.detail.avatarUrl
    })
  }

  const onSubmit = () => {
    Taro.showLoading();
    if (!state.nickName) {
      Taro.showToast({
        title: '请输入用户名',
        mask: true,
        icon: 'none',
        success: function () {
          Taro.hideToast();
        }
      })
      return false;
    }

    login();
  }

  const getNickName = e => {
    setState({
      ...state,
      nickName: e.detail.value
    })
  }

  const login = async () => {
    const codeInfo = await Taro.login();
    const loginParams = {
      data: {
        appid: 'wx41012d1cad183936',
        code: codeInfo.code,
        kc: 'hos'
      }
    }

    console.log(loginParams)

    onLogin(loginParams).then(res => {
      Taro.hideLoading();
      const statusCode = res.data.code;
      switch(statusCode){
        case 0:
          Taro.hideToast();
          Object.keys(res.data.data).map(key => {
            const value = res.data.data[key];
            Taro.setStorageSync(key, value);
          })
          Taro.reLaunch({ url: '/pages/home/index' })
          break;
        case 100:
          Taro.hideToast();
          Taro.reLaunch({ url: '/pages/login/index' })
          break;
        default:
          break
      }
    })
  }

  useEffect(() => {
    const refreshToken = Taro.getStorageSync('refreshToken');
    if(refreshToken){
      Taro.reLaunch({ url: '/pages/home/index' })
    }
  }, [])

  return (
    <View className='index'>
      <Button class="avatar-wrapper" open-type="chooseAvatar" onChooseavatar={onChooseAvatar}>
        <Image class="avatar" src={state.avatarUrl}></Image>
      </Button>
      <Input type="nickname" placeholder="请输入昵称" onBlur={getNickName} onInput={getNickName} />
      <Button type='primary' onClick={onSubmit}>确定</Button>
    </View>
  )
}
