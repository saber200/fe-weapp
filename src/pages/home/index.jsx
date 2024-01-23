import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Tabbar, Image, Button, Popup } from "@taroify/core"
import { FriendsOutlined, HomeOutlined, Search, SettingOutlined } from "@taroify/icons"
import { useEffect, useState } from 'react'
import setSty from '@/utils/edit/setSty';
import data from '@/pageconfig';
import {
  EditInput,
  EditButton,
  EditTable,
  EditSelect
} from '@/components';
import './index.scss'

export default function Home() {
  const [tabKey, setTabKey] = useState('index');
  const [open, setOpen] = useState(false);
  const [userinfo] = useState({
    nickName: Taro.getStorageSync('nickName'),
    avatarUrl: Taro.getStorageSync('avatarUrl')
  })

  const onChangeTabKey = (val) => {
    if (val === 'page2') {
      setOpen(true);
    }

    setTabKey(val);
  }

  const outLogin = () => {
    Taro.clearStorageSync();
    Taro.redirectTo({
      url: '/pages/index/index',
    })
  }

  const setComponents = (item) => {
    console.log(item.name)
    switch (item.name) {
      case 'Input' || 'input':
        return <EditInput style={setSty(item.render.layout)} attribute={item.render.props} />
      case 'button' || 'Button':
        return <EditButton style={setSty(item.render.layout)} attribute={item.render.props} />
      case 'select':
        return <EditSelect style={setSty(item.render.layout)} attribute={item.render.props} />
      case 'Table':
        return <EditTable style={setSty(item.render.layout)} attribute={item.render.props} />
      default:
        return null
    }
  }

  const tabPage = () => {
    switch (tabKey) {
      case 'user':
        return (
          <div className='out_login_page'>
            <div className="avatar-wrapper">
              <Image src={userinfo.avatarUrl}></Image>
            </div>
            <div>{userinfo.nickName}</div>
            <Button className='out_login_btn' color="primary" onClick={outLogin}>退出登陆</Button>
          </div>
        )
      default:
        return data.data.map(item => {
          return setComponents(item);
        })
    }
  }

  const onJumpChildrenPage = (val) => {
    Taro.navigateTo({
      url: `/pages/children/index?pageName=${val}`,
    })
  }

  const getJson = () => {
    // const a = Taro.request('../../pageconfig.json');
    // console.log(pageConfig.data);
  }

  useEffect(() => {
    getJson();
  }, [])

  return (
    <View className='index'>
      {tabPage()}
      <Tabbar fixed placeholder defaultValue={tabKey} onChange={onChangeTabKey}>
        <Tabbar.TabItem value="index" icon={<HomeOutlined />}>主页</Tabbar.TabItem>
        <Tabbar.TabItem value="page2" icon={<Search />}>标签</Tabbar.TabItem>
        <Tabbar.TabItem value="page3" icon={<FriendsOutlined />} onClick={() => setOpen(true)}>标签</Tabbar.TabItem>
        <Tabbar.TabItem value="user" icon={<SettingOutlined />}>我的</Tabbar.TabItem>
      </Tabbar>

      {/* 弹出路由 */}
      <Popup open={open} rounded placement="bottom" style={{ height: '30%' }} onClick={() => setOpen(false)}>
        <div className='page_route_btn'>
          <div onClick={() => onJumpChildrenPage('页面1')}>页面1</div>
          <div onClick={() => onJumpChildrenPage('页面2')}>页面2</div>
          <div onClick={() => onJumpChildrenPage('页面3')}>页面3</div>
          <div onClick={() => onJumpChildrenPage('页面4')}>页面4</div>
        </div>
      </Popup>
    </View>
  )
}
