import React from "react"
import { View } from '@tarojs/components'
import dataSource from './defaultData';
import columns from './defaultColumns';
import HOComponent from '@/components/Create';
import './style.scss'

function EditTable({ style }) {
  return (
    <div style={{ ...style }}>
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
                        <View className="td" style={{ minWidth: `${item2.width}rpx` }}>
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
  return <EditTable {...props} />
}

export default HOComponent(Table);