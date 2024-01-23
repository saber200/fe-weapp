// 自己简单封装的表格组件，taro 和微信都没有table组件
import { Component } from 'react'
import { View } from '@tarojs/components'
import dataSource from './defaultData';
import columns from './defaultColumns';
import './style.scss'

//原理 循环生成表头，循环数据根据表头填入每一列
export default function EditTable(props) {
  const { style, attribute: propsAttribute } = props;

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