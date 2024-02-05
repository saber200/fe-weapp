import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Tabs, Image, Button } from "@taroify/core"
import { useEffect, useState } from 'react'
import apis from '@/utils/apis';
import setSty from '@/utils/edit/setSty';
import {
  EditInput,
  EditButton,
  EditTable,
  EditSelect
} from '@/components';
import {
  WapHomeOutlined,
  Bars,
  FriendsOutlined
} from "@taroify/icons"
import './index.scss';

const icons = {
  icon_1: <WapHomeOutlined />,
  icon_2: <Bars />,
  icon_3: <FriendsOutlined />
}

const TabPage = props => {
  const { mockJson, setComponents, setMockJson, id } = props;

  const getJson = async (id = 'index') => {
    const result = await apis.getPageConfigs(id);
    const pageConfig = result.data.json;
    const newJsonData = [];

    pageConfig.data.map(item => {
      if (item.layout) {
        newJsonData.push(item);
      }
    })

    pageConfig.data = newJsonData;

    setMockJson(pageConfig);
  }

  useEffect(() => {
    getJson(id);
  }, [id])

  return (
    <div>
      {mockJson.data.map((item, inx) => {
        return setComponents(inx);
      })}
    </div>
  )
}

const TabsPanie = props => {
  const { label, icon } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {icon}
      <span style={{ fontSize: '24rpx' }}>{label}</span>
    </div>
  )
}

export default function Home() {
  const [querylist, setQuerylist] = useState([]);
  const [mockJson, setMockJson] = useState({ data: [] });
  const [tabKey, setTabKey] = useState('index');
  const [childrenKey, setChildrenKey] = useState('index');
  const [scrollType, setScrollType] = useState('page');
  const [userinfo] = useState({
    nickName: Taro.getStorageSync('nickName'),
    avatarUrl: Taro.getStorageSync('avatarUrl')
  })

  const onChangeTabKey = (val) => {
    // const childkey = querylist.filter(item => item.key === val)[0].children[0].value;
    // setChildrenKey(childkey);
    setTabKey(val);
  }

  const onChangeChildrenTabKey = val => {
    setChildrenKey(val)
  }

  const outLogin = () => {
    Taro.clearStorageSync();
    Taro.redirectTo({
      url: '/pages/index/index',
    })
  }

  const setComponents = (inx) => {
    switch (mockJson?.data[inx]?.name) {
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

  const initMenus = async () => {
    const menuResult = await apis.getMenus();
    const menuss = menuResult.data.data.filter(item => item.key !== 'index')
    console.log(menuResult.data.scroll_type)
    setScrollType(menuResult.data.scroll_type);
    setQuerylist(menuss);
  }

  useEffect(() => {
    initMenus();
  }, [])

  return (
    <View className='index'>
      <Tabs
        defaultValue={tabKey}
        onChange={onChangeTabKey}
        swipeable={scrollType === 'page'}
        lazyRender
        className='tabs-box'
      >
        <Tabs.TabPane
          value="index"
          title={<TabsPanie label='欢迎页' icon={icons.icon_1} />}
        >
          <TabPage
            setComponents={setComponents}
            mockJson={mockJson}
            id="index"
            setMockJson={setMockJson}
          />
        </Tabs.TabPane>
        {querylist.map(item => {
          return (
            <Tabs.TabPane
              title={<TabsPanie label={item.label} icon={icons[item.icon_name]} />}
              value={item.key}
              className='tabs-box'
              style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
            >
              <Tabs
                defaultValue={item.children[0].value}
                swipeable={scrollType === 'tabs'}
                lazyRender
                onChange={onChangeChildrenTabKey}
              >
                {item.children.map(children => {
                  return (
                    <Tabs.TabPane
                      title={children.label}
                      value={children.value}
                    >
                      <TabPage
                        mockJson={mockJson}
                        setMockJson={setMockJson}
                        setComponents={setComponents}
                        id={childrenKey}
                      />
                    </Tabs.TabPane>
                  )
                })}
              </Tabs>
            </Tabs.TabPane>
          )
        })}
        <Tabs.TabPane
          value="user"
          title={<TabsPanie label='我的' icon={icons.icon_3} />}
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
    </View>
  )
}
