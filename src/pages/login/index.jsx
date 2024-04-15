import { View } from '@tarojs/components'
import { Form, Cell, Input, Button } from "@taroify/core"
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { getCurrentInstance } from '@tarojs/runtime'
import apis from '@/utils/apis';
import './index.scss'

const instance = getCurrentInstance();

export default function Login() {
  const [state, setState] = useState({
    nickName: instance.router.params.nickName,
    avatarUrl: instance.router.params.avatarUrl,
    username: '',
    password: '',
  });

  const login = async () => {
    const codeInfo = await Taro.login();
    const params = {
      data: {
        account: state.username,
        password: state.password,
        appid: 'wx41012d1cad183936',
        kc: 'hos',
        code: codeInfo.code
      }
    }

    apis.onBind(params).then(res => {
      if(res.data.code === 0){
        Object.keys(res.data.data).map(key => {
          const value = res.data.data[key];
          Taro.setStorageSync(key, value);
        })
        Taro.reLaunch({ url: '/pages/home/index' })
      }
    });
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
        <View style={{ margin: "16px" }}>
          <Button shape="round" block color="success" onClick={login}>
            绑定
          </Button>
        </View>
      </Form>
    </View>
  )
}
