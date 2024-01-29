import Taro from '@tarojs/taro'

export const changeValue = ({id, value, setMockJson, mockJson}) => {
  let i = null;
  const newJson = {...mockJson};
  newJson.data.map((item, inx) => {
    if(item.instanceId === id){
      i = inx;
    }
  })

  newJson.data[i].render.props.map(item => {
    if(item.name === 'value'){
      item.value = value;
    }
  })

  setMockJson(newJson);
}

export default {
  changeValue
}