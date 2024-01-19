import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Form, Cell, Input, Button } from "@taroify/core"
import { useEffect, useState } from 'react'
import { getCurrentInstance } from '@tarojs/runtime'
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

  // 判断是否登陆 & 登陆是否过期
  const onGetExpires = () => {
    const expires = Taro.getStorageSync('expires');
    const nowTime = new Date().getTime();

    if (!expires || nowTime >= expires) {
      // Taro.clearStorageSync();
      queryInfo();
    } else {
      Taro.redirectTo({
        url: '/pages/home/index',
      })
    }
  }

  // 判断当前用户是否为关联用户
  const queryInfo = async () => {
    const result = await getUserList();
    const list = result.data.filter(item => item.firstName === state.openid);

    setState({
      ...state,
      isUser: list.length > 0
    })
  }

  // 查询用户列表
  const getUserList = async () => {
    const url = 'http://kc.it663.com:8020/admin/realms/master/users'

    const result = await Taro.request({
      url,
      method: 'GET',
      header: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${Taro.getStorageSync('admin_access_token')}`
      },
      success: function (res) {
        return res;
      }
    })

    return result;
  }

  // 更改密码
  const onChangePassword = async (id) => {
    const url = `http://kc.it663.com:8020/admin/realms/master/users/${id}/reset-password`
    const formData = {
      "temporary": false,
      "type": "password",
      "value": state.password
    }

    const result = await Taro.request({
      url: url,
      method: 'PUT',
      data: formData,
      header: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${Taro.getStorageSync('admin_access_token')}`
      }
    })
  }

  // 查询用户信息，用来关联姓和openid
  const getUserInfo = (id) => {
    const url = `http://kc.it663.com:8020/admin/realms/master/users/${id}`;
    Taro.request({
      url,
      header: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${Taro.getStorageSync('admin_access_token')}`
      },
      method: 'GET',
      success: function (res) {
        associationOpenId(id, res.data)
      }
    })
  }

  // 修改姓，关联openid
  const associationOpenId = async (id, data) => {
    const url = `http://kc.it663.com:8020/admin/realms/master/users/${id}`;

    Taro.request({
      url,
      method: 'PUT',
      data: {
        ...data,
        firstName: state.openid
      },
      header: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${Taro.getStorageSync('admin_access_token')}`
      },
      success: function (res) {
        login();
      }
    })
  }

  // 登陆
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
          expires_in
        } = res.data;

        const time = new Date().getTime();
        const expires_time = time + (expires_in * 1000);

        // 当前用户登陆后，清除管理员token
        Taro.clearStorageSync();

        Taro.setStorageSync('access_token', access_token)
        Taro.setStorageSync('expires', expires_time)
        Taro.setStorageSync('nickName', state.nickName)
        Taro.setStorageSync('avatarUrl', state.avatarUrl)

        Taro.redirectTo({
          url: '/pages/home/index',
        })
      }
    })
  }

  // 注册
  const register = async () => {
    const listResult = await getUserList();

    const userResult = listResult.data.filter(item => item.username === state.username);
    if (userResult.length > 0) {
      // 如果已经是注册用户，查询用户id后 关联用户姓和openid 直接登陆
      const id = userResult[0].id;
      getUserInfo(id);
    } else {
      const url = 'http://kc.it663.com:8020/admin/realms/master/users';

      const formData = {
        "username": state.username,
        "email": "",
        "firstName": "",
        "lastName": "lastName",
        "requiredActions": [],
        "emailVerified": false,
        "groups": [],
        "enabled": true
      }

      Taro.request({
        url: url,
        method: 'POST',
        data: formData,
        header: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Taro.getStorageSync('admin_access_token')}`
        },
        success: async function (res) {
          const result = await getUserList()
          const userInfo = result.data.filter(item => item.username === state.username);

          await onChangePassword(userInfo[0].id).then(res => {
            Taro.setStorageSync('userid', userInfo[0].id);
            getUserInfo(userInfo[0].id);
          });
        }
      })
    }
  }

  // 获取管理员token
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
    onGetExpires();
    getAdminToken();
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
        {
          state.isUser ? (
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
        }
      </Form>
    </View>
  )
}
