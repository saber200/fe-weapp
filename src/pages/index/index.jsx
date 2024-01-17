import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import axios from 'axios';
import { useState } from 'react'
// import '@tarojs/taro/html5.css';
import './index.scss'

export default function Index() {
  const [state, setState] = useState({
    avatarUrl: '',
    nickName: '',
    code: '',
  });

  useLoad(() => {
    login()
  })

  const login = async () => {
    const result = await wx.login();
    setState({ ...state, code: result.code });
  }

  const onChooseAvatar = async (e) => {
    setState({
      ...state,
      avatarUrl: e.detail.avatarUrl
    })
  }

  const getOpenId = async () => {
    const res = await Taro.login();
    const { code } = res;
    const appid = 'wxb8304664218ce979';
    const secret = '468d6417c395e992b7064c785eae2534';
    const data = {
      appid,
      secret,
      code,
      grant_type: 'authorization_code'
    }
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;

    Taro.showLoading({
      title: 'loading...',
      mask: true,
    })

    Taro.request({
      url,
      method: 'GET',
      data,
      success: function (res) {
        const { openid, session_key } = res.data;
        Taro.redirectTo({
          url: `/pages/login/index?openid=${openid}&session_key=${session_key}`,
        })
      }
    });
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

    getOpenId();
  }

  const getNickName = e => {
    setState({
      ...state,
      nickName: e.detail.value
    })
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
