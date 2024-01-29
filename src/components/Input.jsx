import React, { useEffect, useState } from "react"
import HOComponent from '@/components/Create';
import { Input } from '@taroify/core';

const inputStyle = {
  border: '1px solid #c9c9c9',
  borderRadius: '4px'
}

const EditInput = ({ style, config, setMockJson, pageConfig }) => {
  // const [state, setState] = useState(config);
  const { props: attribute, event } = config.render
  const [value, setValue] = useState(attribute.value);

  const handleChange = e => {
    if(event.onChange){
      event.onChange();
    };

    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(attribute.value);
    // console.log(style)
  }, [attribute.value])

  return (
    <Input
    // {...attribute}
    {...event}
    value={value}
    defaultValue={attribute.defaultValue || attribute.value}
    onChange={handleChange}
    style={{ ...style, ...inputStyle }}
    />
  )
}

export default HOComponent(EditInput);