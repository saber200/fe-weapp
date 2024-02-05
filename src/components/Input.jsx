import React, { useEffect, useState } from "react"
import HOComponent from '@/components/Create';
import { Input } from '@taroify/core';
import { Clear } from "@taroify/icons"

const inputStyle = {
  border: '1px solid #c9c9c9',
  borderRadius: '4px'
}

const EditInput = ({ style, config }) => {
  const { props: attribute, event } = config.render
  const [value, setValue] = useState(attribute.value);

  const handleChange = e => {
    if (event.onChange) {
      event.onChange();
    };

    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(attribute.value)
  }, [attribute.value])

  return (
    <div
      style={{ ...style }}
    >
      {
        attribute.allowClear && value && !attribute.disabled ?
          <Clear
            onClick={() => setValue('')}
            style={{
              position: 'absolute',
              right: '10rpx',
              top: '50%',
              transform: 'translateY(calc(-50% - 2rpx))',
              color: '#cccccc',
              zIndex: '999'
            }}
          />
          : null
      }
      <Input
        disabled={attribute.disabled}
        maxlength={attribute.maxLength}
        value={value}
        defaultValue={attribute.defaultValue || attribute.value}
        onChange={handleChange}
        style={{ ...inputStyle }}
      />
    </div>
  )
}

export default HOComponent(EditInput);