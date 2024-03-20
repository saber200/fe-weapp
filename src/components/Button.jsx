import React, { useEffect } from "react"
import HOComponent from '@/components/Create';
import { Button } from '@taroify/core';

const EditButton = ({ style, config }) => {
  const { props: attribute } = config.render;

  return (
    <Button
    {...attribute}
    {...config.render.event}
    style={{ ...style, fontSize: '22rpx' }}
    >{attribute.text}</Button>
  )
}

export default HOComponent(EditButton);
