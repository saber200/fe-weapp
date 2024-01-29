import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad, getCurrentInstance } from '@tarojs/taro'
import { useEffect, useState } from 'react'
// import { getPageConfigs } from '@/utils/apis';
import './index.scss'

export default function Index(props) {
  const instance = getCurrentInstance();
  const [id] = useState(instance.router.params.pageId);

  const initPageConfig = async () => {
    // const result = await getJson(id);
    // console.log(result)
  }

  useEffect(() => {
    initPageConfig();
  }, [])

  return (
    <div>123</div>
    // <Home isChildren={true} />
  )
}
