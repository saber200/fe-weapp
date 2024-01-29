import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Tabbar, Tabs, Image, Button, Popup, Backdrop, Loading } from "@taroify/core"
import { AppsOutlined, HomeOutlined, SettingOutlined } from "@taroify/icons"
import { useEffect, useState } from 'react'
import apis from '@/utils/apis';
import setSty from '@/utils/edit/setSty';
import {
  EditInput,
  EditButton,
  EditTable,
  EditSelect
} from '@/components';
import './index.scss'

export default function Home() {
  const [querylist, setQuerylist] = useState([]);
  const [menus, setMenus] = useState([]);
  const [mockJson, setMockJson] = useState({ data: [] });
  const [tabKey, setTabKey] = useState('index');
  const [open, setOpen] = useState(false);
  const [backDropOpen, setBackDropOpen] = useState(false)
  const [userinfo] = useState({
    nickName: Taro.getStorageSync('nickName'),
    avatarUrl: Taro.getStorageSync('avatarUrl')
  })

  const onChangeTabKey = (val) => {
    setTabKey(val);
  }

  const outLogin = () => {
    Taro.clearStorageSync();
    Taro.redirectTo({
      url: '/pages/index/index',
    })
  }

  const setComponents = (inx) => {
    switch (mockJson?.data[inx]?.name) {
      case 'hhh':
        return null
      case 'Input' || 'input':
        return <EditInput style={setSty(mockJson.data[inx].layout)} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      case 'button' || 'Button':
        return <EditButton style={setSty(mockJson.data[inx].layout)} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      case 'select':
        return <EditSelect style={setSty(mockJson.data[inx].layout)} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      case 'Table':
        return <EditTable style={setSty(mockJson.data[inx].layout)} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      default:
        return null
    }
  }

  const tabPage = (id = 'index') => {
    switch (id) {
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
        return mockJson.data.map((item, inx) => {
          return setComponents(inx);
        })
    }
  }

  const onJumpChildrenPage = async (id) => {
    setBackDropOpen(true)
    getJson(id)
  }

  const getJson = async (id = 'index') => {
    const result = await apis.getPageConfigs(id);
    const menuResult = await apis.getMenus();
    const pageConfig = result.data.json;
    const newJsonData = [];

    pageConfig.data.map(item => {
      if (item.layout) {
        newJsonData.push(item);
      }
    })

    pageConfig.data = newJsonData;
    const menuss = menuResult.data.data.filter(item => item.key !== 'index')

    setMockJson(pageConfig);
    setBackDropOpen(false)
    setQuerylist(menuss);
  }

  const setListMenus = (key) => {
    const menuss = querylist.filter(item => item.key === key)

    setMenus(menuss[0].children);
    setOpen(true)
  }

  useEffect(() => {
    getJson();
  }, [])

  return (
    <View className='index'>
      {/* {tabPage()} */}
      {/* <Tabs fixed placeholder defaultValue={tabKey} onChange={onChangeTabKey}> */}
      <Tabs
        defaultValue={tabKey}
        onChange={onChangeTabKey}
        swipeable
        lazyRender
        className='tabs-box'
      >
        <Tabs.TabPane
          value="index"
          title="欢迎页"
          onClick={() => onJumpChildrenPage('index')}
        >{tabPage()}</Tabs.TabPane>
        {querylist.map(item => {
          return (
            <Tabs.TabPane
            title={item.label}
            value={item.key}
            className='tabs-box'
            style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
            >
              <Tabs
                defaultValue={item.children[0].value}
                swipeable
              >
                {item.children.map(children => {
                  return <Tabs.TabPane title={children.label} value={children.value}>{tabPage(children.value)}</Tabs.TabPane>  
                })}
              </Tabs>
            </Tabs.TabPane>
          )
          // return <Tabs.TabPane value={item.key} onClick={() => setListMenus(item.key)}>{tabPage()}</Tabs.TabPane>
        })}
        <Tabs.TabPane
          value="user"
          title="我的"
        >
          <div className='out_login_page'>
            <div className="avatar-wrapper">
              <Image src={userinfo.avatarUrl}></Image>
            </div>
            <div>{userinfo.nickName}</div>
            <Button className='out_login_btn' color="primary" onClick={outLogin}>退出登陆</Button>
          </div>
        </Tabs.TabPane>
      </Tabs>

      {/* 弹出路由 */}
      {/* <Popup open={open} rounded placement="bottom" style={{ height: '30%' }} onClick={() => setOpen(false)}>
        <div className='page_route_btn'>
          {menus.map(item => {
            return <div onClick={() => onJumpChildrenPage(item.value)} key={item.value}>{item.label}</div>
          })}
        </div>
      </Popup>
      <Backdrop open={backDropOpen}>
        <Loading style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </Backdrop> */}
    </View>
  )
}
