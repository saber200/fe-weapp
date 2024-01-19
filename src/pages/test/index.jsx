import { View, Image, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import axios from 'axios';
import './index.scss'
import { useEffect, useState } from 'react';

export default function Index() {
  const [layoutWH, setLayoutWH] = useState({
    w: 0,
    h: 0
  });

  const a = {
    "w": 3,
    "h": 1,
    "x": 0,
    "y": 0,
    "i": "page_r16mw~button_13",
    "minW": 2,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "text": "按钮"
  }

  // 初始化网格单位宽高
  const initWH = () => {
    const res = Taro.getSystemInfoSync();
    const w = res.windowWidth / 12, h = res.windowWidth / 12;
    setLayoutWH({ w, h });
  }

  // 计算dom单位宽高 & 位置
  const countStyle = style => {
    const { w, h } = layoutWH;
    const newStyle = {...style};
    newStyle.w = newStyle.w * w;
    newStyle.h = newStyle.h * h;

    console.log(newStyle)

    return newStyle;
  }

  useEffect(() => {
    initWH();
  }, [])

  useEffect(() => {
    if(layoutWH.w > 0){
      countStyle();
    }
  }, [layoutWH])

  return (
    <View className='index'>
      <View style={countStyle(a)}>{a.text}</View>
    </View>
  )
}
