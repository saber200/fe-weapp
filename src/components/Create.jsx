import React from 'react';
import events from '@/utils/edit/events';
import setSty from '@/utils/edit/setSty';

// 预处理props
const handlePropsConfig = (props) => {
  const propsConfig = {};

  props.map(item => {
    propsConfig[item.name] = item.value;
  });

  return propsConfig;
};

// 预处理event
const handleEventConfig = (event = [], setMockJson, mockJson) => {
  let eventObj = {};

  event.map(item => {
    if(item.eventName){
      eventObj[item.eventName] = () => {
        const eventArr = [];
        item.eventConfigs.map(config => {
          eventArr.push(() => {
            events[config.eventName]({ id: config.formName, value: config.formValue, setMockJson, mockJson });
          })
        })

        eventArr.forEach(func => func());
      }
    }
    
    return eventObj;
  })

  return eventObj;
};

// 高阶组件 (HOC)
const HOComponent = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const { mockJson, setMockJson, mockIndex } = props;

      this.state = {
        pageConfig: mockJson,
        setMockJson,
        mockIndex,
        config: mockJson.data[mockIndex],
      };
    }

    handleMockJson() {
      const { mockJson, setMockJson } = this.props;
      const { config } = this.state;
      const { event, props } = config.render;

      // 属性config
      const propsConfig = handlePropsConfig(props);
      // 样式config
      const styConfig = setSty(config.layout || {});
      // 事件config
      const eventConfig = handleEventConfig(event, setMockJson, mockJson);

      // console.log(styConfig)

      this.setState({
        ...this.state,
        style: styConfig,
        config: {
          ...this.state.config,
          render: {
            style: styConfig,
            props: propsConfig,
            event: eventConfig
          }
        }
      })
    }

    componentWillMount(){
      this.handleMockJson();
    }

    componentDidMount() { }

    componentWillUpdate(np, ns) { }

    componentWillReceiveProps(np){
      const id = this.state.config.instanceId;
      const item = np.mockJson.data.filter(item => item.instanceId === id);

      // 处理props
      const propsConfig = handlePropsConfig(item[0].render.props);
      
      this.setState({
        ...this.state,
        config: {
          ...this.state.config,
          render: {
            ...this.state.config.render,
            props: propsConfig,
          }
        }
      })
    }

    render() {
      // 将处理后的JSON数据传递给子组件
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default HOComponent;