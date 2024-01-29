import React, { useEffect } from "react"
import HOComponent from '@/components/Create';
import { Button } from '@taroify/core';

const EditButton = ({ style, config }) => {
  const { props: attribute } = config.render

  return (
    <Button
    style={{ ...style }}
    {...config.render.event}
    >{config.render.props.name}</Button>
  )
}

export default HOComponent(EditButton);