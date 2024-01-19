import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { getCurrentInstance } from '@tarojs/runtime'
import './index.scss'

const instance = getCurrentInstance();

export default function Children() {
  const [page, setPage] = useState(instance.router.params.pageName);

  useEffect(() => {

  }, [])

  return (
    <View className='index'>
      页面{page}
    </View>
  )
}
