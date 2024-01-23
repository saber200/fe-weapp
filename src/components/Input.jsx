import React, { useEffect, useState } from "react"
import { Input } from '@taroify/core';

export default function EditInput(props) {
  const [config, setConfig] = useState(props);
  const { style, attribute: propsAttribute } = props;

  useEffect(() => {
    const obj = {};
    propsAttribute.map(item => {
      obj[item.name] = item.defaultValue || item.value;
    });
    setConfig(obj);
  }, [])

  return (
    <>
      <Input
        style={{ ...style, border: '1rpx solid #f1f1f1' }}
        {...config}
      />
    </>
  )
}