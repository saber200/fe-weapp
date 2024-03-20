import { View } from '@tarojs/components'
import { Form, Cell, Input, Button } from "@taroify/core"
import { useEffect, useState } from 'react'
import { PROPS, getCurrentInstance } from '@tarojs/runtime'
import apis from '@/utils/apis';
import './index.scss'

const instance = getCurrentInstance();

export default function Login() {
  const [state, setState] = useState({
    openid: instance.router.params.openid,
    session_key: instance.router.params.session_key,
    nickName: instance.router.params.nickName,
    avatarUrl: instance.router.params.avatarUrl,
    isUser: false,
    username: '',
    password: '',
    access_token: '',
    expires_in: 0,
    isLogin: false
  });

  const login = async () => {
    apis.onLogin(state.username, state.password).then(async res => {
      console.log(res);
      const data = {
        username: state.username,
        password: state.password,
        openid: state.openid
      }
      const result = await apis.setUserInfo({ url: '/sendUserInfo', data });
    })
  }

  useEffect(() => {
    console.log(state)
  }, [])

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
        <View style={{ margin: "16px" }}>
          <Button shape="round" block color="success" onClick={login}>
            登录
          </Button>
        </View>
        {/* {
          state.isLogin ? (
            <View style={{ margin: "16px" }}>
              <Button shape="round" block color="success" onClick={login}>
                登录
              </Button>
            </View>
          ) : (
            <View style={{ margin: "16px" }}>
              <Button shape="round" block color="success" onClick={register}>
                注册
              </Button>
            </View>
          )
        } */}
      </Form>
    </View>
  )
}
