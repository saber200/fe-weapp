import React, { useEffect, useState } from "react"
import { View } from '@tarojs/components'
import dataSource from './defaultData';
import columns from './defaultColumns';
import HOComponent from '@/components/Create';
import CardTable from './cardTable';
import './style.scss'

function EditTable({ style, config }) {
  const [value, setValue] = useState();
  const { event } = config.render;

  // const dataSource = config?.render?.datasource?.customerData || [];
  // const columns = config.render.props.columns;

  return (
    <div style={{ ...style, overflowY: 'auto' }}>
      <View className="table">
        <View className="tr bg-header">
          {
            columns.map((item, index) => {
              return (<View className="th" style={{ minWidth: `${item.width}rpx` }}>
                {item.title}
              </View>)
            })
          }
        </View>
        {
          dataSource.map((item, index) => {
            return (
              <View className="tr bg-line">
                {
                  columns.map((item2, index2) => {
                    if (item2.render) {
                      return (
                        <View className="td" style={{ minWidth: `${item2.width}rpx` }}>
                          {
                            item2.render(item[item2.dataIndex])  //判断表头是不是有render 有就执行render
                          }
                        </View>
                      )
                    }
                    else {
                      return (
                        <View className="td" style={{ minWidth: `${item2.width}rpx` }} {...event}>
                          {
                            item[item2.dataIndex]  //根据表头填数据
                          }
                        </View>
                      )
                    }
                  }
                  )
                }
              </View>
            )
          })
        }
      </View>
    </div>
  )
}

const Table = (props) => {
  const type = props.config.render.props.table_type === 'card' ? true : false;
  return type ? <CardTable {...props} /> : <EditTable {...props} />
}

export default HOComponent(Table);