import Taro from '@tarojs/taro'

export default function setSty(sty) {
  const res = Taro.getSystemInfoSync();
  const gridpx = (res.windowWidth) / 12;

  let { w, h, x, y } = sty;
  w = w * gridpx - 20;
  h = h * gridpx - 10;
  x = x * gridpx + 10;
  y = y * gridpx + 10;

  return {
    transform: `translate(${x}px, ${y}px)`,
    width: w,
    height: h,
    position: 'absolute'
  };
}