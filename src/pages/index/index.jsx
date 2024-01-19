import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import axios from 'axios';
import { useEffect, useState } from 'react'
import './index.scss'

export default function Index() {
  const [state, setState] = useState({
    avatarUrl: '',
    nickName: '',
    code: '',
    isLogin: true
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
          url: `/pages/login/index?openid=${openid}&session_key=${session_key}&avatarUrl=${state.avatarUrl}&nickName=${state.nickName}`,
        })
      },
      fail: function(err){
        Taro.showToast({
          title: JSON.stringify(err),
          mask: true,
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

  const getAdminToken = () => {
    const nowTime = new Date().getTime();
    const access_token = Taro.getStorageSync('access_token');
    const expires = Taro.getStorageSync('expires');

    // 先判断当前是否有用户登陆
    if (access_token) {
      return false;
    }

    // 再判断当前用户是否过期
    if (expires && nowTime > expires) {
      return false;
    }

    // 当前无用户登陆或用户过期 清除当前用户状态
    Taro.clearStorageSync();

    // 注册新用户，获取管理员token用来创建用户
    const url = 'http://kc.it663.com:8020/realms/master/protocol/openid-connect/token';
    const data = {
      username: 'admin',
      password: 'admin',
      grant_type: 'password',
      client_id: 'security-admin-console'
    }

    Taro.request({
      url,
      method: 'POST',
      data,
      header: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        const {
          access_token,
          expires_in
        } = res.data;

        const time = new Date().getTime();
        const expires_time = time + (expires_in * 1000);

        Taro.setStorageSync('admin_access_token', access_token)
        Taro.setStorageSync('admin_expires', expires_time)
      }
    })
  }

  useEffect(() => {
    const expires = Taro.getStorageSync('expires');
    const nowTime = new Date().getTime();

    if (expires || nowTime < expires) {
      Taro.redirectTo({
        url: '/pages/home/index',
      })
    }else{
      getAdminToken();
      setState({
        ...state,
        isLogin: false
      })
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
