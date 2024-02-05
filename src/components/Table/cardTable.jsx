import React, { useEffect, useState } from "react"
import { View } from '@tarojs/components'
import dataSource from './defaultData';
import HOComponent from '@/components/Create';
import { EditCard } from '@/components';
import './style.scss'

function EditCardTable({ style, config }) {
  const [value, setValue] = useState();
  const { event } = config.render;
  // const dataSource = config?.render?.datasource?.customerData || [];
  const columns = config.render.props.columns;

  return (
    <div style={{ ...style, overflowY: 'auto' }}>
      {
        dataSource.map(item => {
          return <EditCard dataSource={item} columns={columns} event={event} />
        })
      }
    </div>
  )
}

export default HOComponent(EditCardTable);