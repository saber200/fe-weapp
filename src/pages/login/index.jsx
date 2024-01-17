import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Form, Cell, Input, Button, Field } from "@taroify/core"
import { useEffect, useState } from 'react'
import { getCurrentInstance } from '@tarojs/runtime'
import './index.scss'

const instance = getCurrentInstance();

export default function Login() {
  const [state, setState] = useState({
    openid: instance.router.params.openid,
    session_key: instance.router.params.session_key,
    isUser: true,
    username: 'admin',
    password: 'admin',
    access_token: '',
    expires_in: 0,
    refresh_expires_in: 0,
    refresh_token: '',
    isLogin: true
  });

  const queryInfo = () => {
    if (!state.isUser) {
      register();
    } else {
      login();
    }
  }

  useEffect(() => {
    const expires = Taro.getStorageSync('expires');
    const nowTime = new Date().getTime();

    // 无登陆态
    if(!expires){
      Taro.removeStorageSync();
      return false;
    }

    // 是否过期
    if(nowTime >= expires){
      Taro.removeStorageSync();
    }else{
      Taro.redirectTo({
        url: '/pages/home/index',
      })
    }
  }, [])

  const register = () => {

  }

  const login = () => {
    const url = 'http://kc.it663.com:8020/realms/master/protocol/openid-connect/token';
    const data = {
      username: state.username,
      password: state.password,
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
          expires_in,
          refresh_token,
          session_state,
          token_type
        } = res.data;

        const time = new Date().getTime();
        const expires_time = time + (expires_in * 1000);

        Taro.setStorageSync('access_token', access_token)
        Taro.setStorageSync('expires_in', expires_in)
        Taro.setStorageSync('expires', expires_time)
        Taro.setStorageSync('refresh_token', refresh_token)
        Taro.setStorageSync('session_state', session_state)
        Taro.setStorageSync('token_type', token_type)
      }
    })
  }

  return (
    <View className='index'>
      <Form>
        <Cell.Group inset>
          <Form.Item name="username" rules={[{ required: true, message: "请填写用户名" }]}>
            <Form.Label>用户名</Form.Label>
            <Form.Control>
              <Input placeholder="用户名" onChange={(e) => setState({ ...state, username: e.target.value })} />
            </Form.Control>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请填写密码" }]}>
            <Form.Label>密码</Form.Label>
            <Form.Control>
              <Input password placeholder="密码" onChange={(e) => setState({ ...state, password: e.target.value })} />
            </Form.Control>
          </Form.Item>
        </Cell.Group>
        {
          state.isLogin ? (
            <View style={{ margin: "16px" }}>
              <Button shape="round" block color="success" onClick={queryInfo}>
                登录
              </Button>
            </View>
          ) : (
            <View style={{ margin: "16px" }}>
              <Button shape="round" block color="success" onClick={queryInfo}>
                注册
              </Button>
            </View>
          )
        }
      </Form>
    </View>
  )
}
