import React, { useEffect, useState } from "react"
import { Button } from '@taroify/core';

export default function EditButton(props) {
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
      <Button
        style={{ ...style }}
        {...config}
      />
    </>
  )
}