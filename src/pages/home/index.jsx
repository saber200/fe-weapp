import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Tabs, Image, Button, Toast } from "@taroify/core"
import React, { useEffect, useState } from 'react'
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
  const { pageConfig, setComponents } = props;

  return (
    <div>
      {pageConfig?.data?.map((item, inx) => {
        return setComponents(item, inx);
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

function Home() {
  const [state, setState] = useState({
    querylist: [],
    mockJson: {},
    tabKey: 'index',
    childrenTabKey: '',
    scrollType: 'page',
    pageLoading: false,
    childrenPageLoading: false,
    userinfo: {
      nickName: Taro.getStorageSync('nickName'),
      avatarUrl: Taro.getStorageSync('avatarUrl')
    }
  })

  // 初始化页面config & 页面menus
  const initPageConfig = async (id = 'index', update) => {
    const result = await apis.getPageConfigs(id);
    const menuResult = await apis.getMenus();
    const pageConfig = result.data.json;
    const newJsonData = [];
    const menuss = menuResult.data.data.filter(item => item.key !== 'index')

    pageConfig.data.map(item => {
      if (item.layout) {
        newJsonData.push(item);
      }
    })

    pageConfig.data = newJsonData

    setState({
      ...state,
      mockJson: update ? {} : pageConfig,
      querylist: update ? state.querylist : menuss,
      scrollType: update ? state.scrollType : menuResult.data.scroll_type,
    })
    return pageConfig;
  }

  const onChangeTabKey = val => {
    val !== 'user' && setState({ ...state, tabKey: val, pageLoading: true, mockJson: {} });
  }

  const onChangeChildrenTabKey = val => {
    setState({ ...state, childrenTabKey: val, childrenPageLoading: true, mockJson: {} });
  }

  const outLogin = () => {
    Taro.clearStorageSync();
    Taro.redirectTo({
      url: '/pages/index/index',
    })
  }

  const setMockJson = mockJson => {
    setState({ ...state, mockJson })
  }

  const setComponents = (item, inx) => {
    const style = setSty(item.layout);
    const { mockJson } = state;

    switch (item.name) {
      case 'Input' || 'input':
        return <EditInput style={{ ...style }} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      case 'button' || 'Button':
        return <EditButton style={{ ...style }} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      case 'select':
        return <EditSelect style={{ ...style }} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      case 'Table':
        return <EditTable style={{ ...style }} mockIndex={inx} setMockJson={setMockJson} mockJson={mockJson} />
      default:
        return null
    }
  }

  useEffect(() => {
    initPageConfig();
  }, [])

  useEffect(() => {
    state.pageLoading && !state.childrenPageLoading && initPageConfig(state.tabKey, true).then(mockJson => {
      setState({ ...state, mockJson, pageLoading: false });
    })
  }, [state.pageLoading])

  useEffect(() => {
    state.childrenPageLoading && initPageConfig(state.childrenTabKey, true).then(mockJson => {
      setState({ ...state, mockJson, childrenPageLoading: false });
    })
  }, [state.childrenPageLoading])

  return (
    <View className='index'>
      <Tabs
        defaultValue={state.tabKey}
        onChange={onChangeTabKey}
        swipeable={state.scrollType === 'page'}
        className='tabs-box'
        lazyRender
      >
        <Tabs.TabPane
          value="index"
          title={<TabsPanie label='欢迎页' icon={icons.icon_1} />}
        >
          {!state.mockJson.data ? null : (
            <TabPage
              setComponents={setComponents}
              pageConfig={state.mockJson}
              setMockJson={setMockJson}
              id="index"
            />
          )}
        </Tabs.TabPane>
        {state.querylist.map(item => {
          return (
            <Tabs.TabPane
              title={<TabsPanie label={item.label} icon={icons[item.icon_name]} />}
              value={item.key}
              className='tabs-box'
              style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
            >
              <Tabs
                defaultValue={item.children[0].value}
                swipeable={state.scrollType === 'tabs'}
                onChange={onChangeChildrenTabKey}
                lazyRender
              >
                {item.children.map(children => {
                  return (
                    <Tabs.TabPane
                      title={children.label}
                      value={children.value}
                    >
                      {!state.mockJson.data ? null : (
                        <TabPage
                          pageConfig={state.mockJson}
                          setMockJson={setMockJson}
                          setComponents={setComponents}
                          id={children.key}
                        />
                      )}
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
              <Image src={state.userinfo.avatarUrl}></Image>
            </div>
            <div>{state.userinfo.nickName}</div>
            <Button className='out_login_btn' color="primary" onClick={outLogin}>退出登陆</Button>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </View>
  )
}

export default React.memo(Home);