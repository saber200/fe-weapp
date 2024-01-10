import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Form, Cell, Input, Button, Field } from "@taroify/core"
import { useEffect, useState } from 'react'
import './index.scss'

export default function Login() {
  const onSubmit = (event) => {
    Taro.redirectTo({
      url: '/pages/home/index',
    })
    // login();
  }

  const login = () => {
    Taro.request({
      method: 'POST',
      url: 'http://kc.it663.com:8020/realms/master/protocol/openid-connect/token',
      data: {
        client_id: 'security-admin-console',
        grant_type: 'password',
        // username: 'admin',
        // password: 'admin'
      },
      success: function (res) {
        console.log(res)
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
              <Input placeholder="用户名" />
            </Form.Control>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请填写密码" }]}>
            <Form.Label>密码</Form.Label>
            <Form.Control>
              <Input password placeholder="密码" />
            </Form.Control>
          </Form.Item>
        </Cell.Group>
        <View style={{ margin: "16px" }}>
          <Button shape="round" block color="success" onClick={onSubmit}>
            登录
          </Button>
        </View>
      </Form>
    </View>
  )
}
