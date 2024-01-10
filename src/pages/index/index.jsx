import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import '@tarojs/taro/html5.css';
import './index.scss'

export default function Index() {
  const [state, setState] = useState({
    avatarUrl: '',
    nickName: '',
    code: '',
    openid: ''
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
    Taro.request({
      method: 'POST',
      url: 'http://kc.it663.com:8020/admin/realms/master/clients-initial-access',
      // url: "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1YjhmZmY5Zi00ZGZlLTQ0YjItYmI0Yy1iYmEyZmQzMGJiYmEifQ.eyJleHAiOjE3MDU1ODgwOTksImlhdCI6MTcwNDcyNDA5OSwianRpIjoiMzM1ZWNhYjgtYmI0NC00ZTUzLTljOWMtYWQ4NTU5M2M3ZWMwIiwiaXNzIjoiaHR0cDovL2tjLml0NjYzLmNvbTo4MDIwL3JlYWxtcy9tYXN0ZXIiLCJhdWQiOiJodHRwOi8va2MuaXQ2NjMuY29tOjgwMjAvcmVhbG1zL21hc3RlciIsInR5cCI6IkluaXRpYWxBY2Nlc3NUb2tlbiJ9.0CayhA82rsGnrzCrELS9FU9xRcSVgYirqpDJnsoE6CM",
      data: {
        count: 1,
        expiration: 864000
        // header: 'Authorization'
      },
      success: function (res) {
        console.log(res)
      }
    })
  }

  const onSubmit = () => {
    // getOpenId();

    // 跳转到目的页面，打开新页面
    Taro.redirectTo({
      url: '/pages/login/index',
    })

    return false;

    if(!state.nickName){
      Taro.showToast({
        title: '请输入用户名',
        mask: true,
        icon: 'none',
        success: function() {
          setTimeout(() => {
            Taro.hideToast();
          }, 1000);
        }
      })
      return false;
    }

    Taro.showLoading({
      title: 'loading...',
      mask: true,
      success: function() {
        setTimeout(() => {
          Taro.hideLoading();
        }, 3000);
      }
    })
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
