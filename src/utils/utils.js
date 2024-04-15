import Taro from '@tarojs/taro'

export function getCurrentPagePath() {
  const pages = Taro.getCurrentPages() // 获取加载的页面路径数组
  if (pages.length) {
    return pages[pages.length - 1].route // 获取数组中最后一个，即当前页面
  }
  return ''
}