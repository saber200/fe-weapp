import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import apis from '@/utils/apis';
import './index.scss'

const { onLogin } = apis;

export default function Index() {
  const [state, setState] = useState({
    avatarUrl: '',
    nickName: ''
  });
  const loginParams = {
    url: '/api/login',
    appid: 'wx41012d1cad183936',
    code: '0f1sAD100XlwNR1bdE300aXdZ70sAD13',
    kc: 'hos'
  }

  const onChooseAvatar = async (e) => {
    setState({
      ...state,
      avatarUrl: e.detail.avatarUrl
    })
  }

  const onSubmit = () => {
    if (!state.nickName) {
      Taro.showToast({
        title: '请输入用户名',
        mask: true,
        icon: 'none',
        success: function () {
          setTimeout(() => {
            Taro.hideToast();
          }, 1000);
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
    const result = await onLogin(loginParams);

    console.log(result);
  }

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
