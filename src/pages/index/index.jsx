import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
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
      url: 'http://api.soxcc.com:9999/execute/process/center-getcurrentuserinfo?header=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJEYlJMaE5xdlhZR0lFOGVHWUhxaUNOMjZ5ODFZX29vZzhobE14dXE5eGp3In0.eyJleHAiOjE3MDQ0MTYyNjcsImlhdCI6MTcwNDM4MDI2OSwiYXV0aF90aW1lIjoxNzA0MzgwMjY3LCJqdGkiOiI2MzE5MzA1ZC02NmMzLTQ1YjAtYTM4Ny0yOGNhOGE3YTUzNjQiLCJpc3MiOiJodHRwOi8va2MuaXQ2NjMuY29tOjgwMjAvcmVhbG1zL21hc3RlciIsInN1YiI6ImE3YTExYjViLWY1YjQtNDc3Zi04NTgxLTU2NWZiNDU3MTRjNiIsInR5cCI6IkJlYXJlciIsImF6cCI6InNlY3VyaXR5LWFkbWluLWNvbnNvbGUiLCJub25jZSI6ImJmMjNlZTY1LWViMGUtNGI5OS04NjI2LTBjODYwNDlkNTFlMSIsInNlc3Npb25fc3RhdGUiOiIxODQ4NDMyZi05N2EyLTQzZDItOTQ1Yy1lMTRmY2YzZGJjNTMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly8xMTEuMjA3LjQwLjE5MTo4MDAyIiwiaHR0cDovL2tjLml0NjYzLmNvbTo4MDIwIiwiKiIsIitodHRwOi8vMTExLjIwNy40MC4xOTE6NzAwMSIsIitodHRwOi8vMTExLjIwNy40MC4xOTE6ODAwMiJdLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMTg0ODQzMmYtOTdhMi00M2QyLTk0NWMtZTE0ZmNmM2RiYzUzIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImxvY2FsZSI6InpoLUNOIn0.hUSmsbPBd4-ABvGAfgqwccuIoqGrMvgOhr8we3X4P1UPO-p0444Yu0SjznFAD5x6_AT5-JYTJAEMDmT05I0t2iqaejbkgVVmjLCa99C4A6R7jBWw8ynr5AVII3GoUpes_O6_pWmTMdiPApLMzGXbaBkwoueDT347mf_avB6lRUchZBCvP7QNSklp_rJ4PF0-f4oc4HCk21Gr-U0dny3W0Hmy7Res75WsmkoRo64BmWee4I-1wUUi19Yi-1z0OvHO2ZO5MO2G0OmC4kHtfoBVLUWdmVKW4_TEpaI0W8_5Z5LKKK4Ct3sk6YopnNeYgPdG2A-jx2WdYOWJlqi1GKo9JQ',
      data: {
        header: 'Authorization'
      },
      success: function (res) {
        console.log(res)
      }
    })
  }

  const onSubmit = () => {
    getOpenId();
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
