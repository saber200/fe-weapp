import { View } from '@tarojs/components'
import { Tabbar } from "@taroify/core"
import { FriendsOutlined, HomeOutlined, Search, SettingOutlined } from "@taroify/icons"
// import '@tarojs/taro/html5.s';
import './index.scss'

export default function Home() {
  return (
    <View className='index'>
      <Tabbar fixed placeholder>
        <Tabbar.TabItem icon={<HomeOutlined />}>主页</Tabbar.TabItem>
        <Tabbar.TabItem icon={<Search />}>标签</Tabbar.TabItem>
        <Tabbar.TabItem icon={<FriendsOutlined />}>标签</Tabbar.TabItem>
        <Tabbar.TabItem icon={<SettingOutlined />}>我的</Tabbar.TabItem>
      </Tabbar>
    </View>
  )
}
