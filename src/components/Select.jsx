import React, { useEffect, useState } from "react"
import { Popup, Picker, Toast, Button } from '@taroify/core';

export default function EditSelect(props) {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState(props);
  const { style, attribute: propsAttribute } = props;

  useEffect(() => {
    const obj = {};
    propsAttribute.map(item => { obj[item.name] = item.defaultValue || item.value });
    setConfig(obj);
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{ ...style, border: '1rpx solid #f1f1f1' }}
        {...config}
      >选择</Button>
      <Popup
        open={open}
        placement='bottom'
      >
        <Picker onChange={(value) => Toast.open(`当前值：${value}`)}>
          <Picker.Toolbar>
            <Picker.Button onClick={() => setOpen(false)}>取消</Picker.Button>
            <Picker.Title>标题</Picker.Title>
            <Picker.Button onClick={() => setOpen(false)}>确认</Picker.Button>
          </Picker.Toolbar>
          <Picker.Column>
            <Picker.Option>杭州</Picker.Option>
            <Picker.Option>宁波</Picker.Option>
            <Picker.Option>温州</Picker.Option>
            <Picker.Option>绍兴</Picker.Option>
            <Picker.Option>湖州</Picker.Option>
            <Picker.Option>嘉兴</Picker.Option>
            <Picker.Option>金华</Picker.Option>
          </Picker.Column>
        </Picker>
      </Popup>
    </>
  )
}