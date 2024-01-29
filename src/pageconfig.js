// export default {
//   "id": "page_r16mw",
//   "type": 1,
//   "root": {
//     "id": "mocha-page",
//     "name": "page",
//     "toolbox": {
//       "group": "",
//       "name": "page",
//       "showName": "page",
//       "order": "",
//       "render": ""
//     },
//     "render": {
//       "name": "page",
//       "parent": "",
//       "render": "",
//       "props": [
//         {
//           "id": "",
//           "name": "title",
//           "showName": "页面标题",
//           "desc": "页面标题",
//           "label": "页面标题",
//           "order": 1,
//           "type": "string",
//           "defaultValue": "页面标题",
//           "isNull": true,
//           "value": "页面标题"
//         },
//         {
//           "id": "",
//           "name": "widthModel",
//           "showName": "自适应",
//           "desc": "自适应",
//           "label": "自适应",
//           "order": 1,
//           "type": "boolean",
//           "defaultValue": true,
//           "isNull": true,
//           "value": true
//         },
//         {
//           "id": "",
//           "name": "maxWidth",
//           "showName": "页面最大宽度",
//           "desc": "页面最大宽度",
//           "label": "页面最大宽度",
//           "order": 1,
//           "type": "number",
//           "defaultValue": 1000,
//           "isNull": true,
//           "ifShow": {
//             "prop": "widthModel",
//             "value": false
//           },
//           "value": 1000
//         },
//         {
//           "id": "",
//           "name": "maxHeight",
//           "showName": "页面最大高度",
//           "desc": "页面最大高度",
//           "label": "页面最大高度",
//           "order": 1,
//           "type": "number",
//           "defaultValue": 1000,
//           "isNull": true,
//           "value": 1000
//         },
//         {
//           "id": "",
//           "name": "algin",
//           "showName": "对齐方式",
//           "desc": "对齐方式",
//           "label": "对齐方式",
//           "order": 1,
//           "type": "select",
//           "defaultValue": "center",
//           "isNull": true,
//           "valueSource": [
//             {
//               "value": "center",
//               "label": "居中显示"
//             },
//             {
//               "value": "left",
//               "label": "居左显示"
//             },
//             {
//               "value": "right",
//               "label": "居右显示"
//             }
//           ],
//           "ifShow": {
//             "prop": "widthModel",
//             "value": false
//           },
//           "value": "center"
//         }
//       ],
//       "commonStyle": [
//         {
//           "name": "styleBox",
//           "showName": "边距",
//           "value": {
//             "marginTop": "16",
//             "marginRight": "16",
//             "marginBottom": "16",
//             "marginLeft": "16",
//             "paddingTop": "16",
//             "paddingRight": "16",
//             "paddingBottom": "16",
//             "paddingLeft": "16"
//           },
//           "defaultValue": {}
//         },
//         {
//           "name": "border",
//           "showName": "边框",
//           "value": {},
//           "defaultValue": {}
//         },
//         {
//           "name": "background",
//           "showName": "背景",
//           "value": "rgba(255,255,255,1)",
//           "defaultValue": ""
//         }
//       ],
//       "event": [
//         {
//           "showName": "子页初始化事件",
//           "name": "page_init",
//           "triggetType": [],
//           "defaultTriggerType": "",
//           "pageId": "page_r16mw",
//           "id": 1171,
//           "guid": "page_init-page_r16mw",
//           "targetId": "page_r16mw",
//           "auto": [
//             "getData-page_r16mw~Table_12",
//             "getData-page_r16mw~Table_18"
//           ]
//         },
//         {
//           "showName": "子页离开事件",
//           "name": "page_leave",
//           "triggetType": [],
//           "defaultTriggerType": ""
//         },
//         {
//           "showName": "子页收到websocket事件",
//           "name": "page_websocket_recive",
//           "triggetType": [],
//           "defaultTriggerType": ""
//         }
//       ]
//     },
//     "instanceId": "page_r16mw",
//     "maxIndex": 18
//   },
//   "data": [
//     {
//       "id": "pack_Input",
//       "name": "Input",
//       "toolbox": {
//         "group": "form",
//         "name": "Input",
//         "showName": "Input",
//         "order": "",
//         "render": ""
//       },
//       "render": {
//         "name": "Input",
//         "parent": "input",
//         "render": "",
//         "isFormData": true,
//         "layout": {
//           "w": 12,
//           "h": 1,
//           "x": 0,
//           "y": 0,
//           "i": "page_r16mw~Input_3",
//           "minW": 2,
//           "moved": false,
//           "static": false,
//           "isDraggable": true,
//           "text": "Input"
//         },
//         "props": [
//           {
//             "id": "",
//             "name": "name",
//             "showName": "组件备注",
//             "desc": "组件备注",
//             "label": "组件备注",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "文本框",
//             "isNull": true,
//             "value": "产品名称文本框_3"
//           },
//           {
//             "id": "",
//             "name": "value",
//             "showName": "文本框内容",
//             "desc": "文本框内容",
//             "label": "文本框内容",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "",
//             "isNull": true,
//             "showEvent": true,
//             "value": ""
//           },
//           {
//             "name": "allowClear",
//             "desc": "可以点击清除图标删除内容",
//             "type": "boolean",
//             "defaultValue": false,
//             "version": "",
//             "id": "4d4c2217-f3f2-4556-89fe-6fff594a8451",
//             "showName": "可清除",
//             "label": "可清除",
//             "canEdit": true,
//             "order": 2,
//             "valueSource": [
//               {
//                 "label": "true",
//                 "value": true
//               },
//               {
//                 "label": "false ",
//                 "value": false
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": true
//           },
//           {
//             "name": "bordered",
//             "desc": "是否有边框",
//             "type": "boolean",
//             "defaultValue": true,
//             "version": "4.5.0",
//             "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//             "showName": "是否有边框",
//             "label": "是否有边框",
//             "canEdit": true,
//             "order": 3,
//             "group": "基本属性",
//             "groupType": "common",
//             "value": true
//           },
//           {
//             "name": "disabled",
//             "desc": "禁用",
//             "type": "boolean",
//             "defaultValue": false,
//             "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//             "showName": "禁用",
//             "label": "禁用",
//             "canEdit": true,
//             "order": 3,
//             "group": "基本属性",
//             "groupType": "common",
//             "showEvent": true,
//             "value": false
//           },
//           {
//             "name": "readOnly",
//             "desc": "只读",
//             "type": "boolean",
//             "defaultValue": false,
//             "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//             "showName": "只读",
//             "label": "只读",
//             "canEdit": true,
//             "order": 3,
//             "group": "基本属性",
//             "groupType": "common",
//             "showEvent": true,
//             "value": false
//           },
//           {
//             "name": "maxLength",
//             "desc": "最大长度",
//             "type": "number",
//             "defaultValue": "-",
//             "version": "",
//             "id": "750af6cc-6c92-4618-91e3-fb4b8013fed7",
//             "showName": "最大长度",
//             "label": "最大长度",
//             "canEdit": true,
//             "order": 7,
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "-"
//           },
//           {
//             "name": "size",
//             "desc": "控件大小。注：标准表单内的输入框大小限制为 large",
//             "type": "string",
//             "defaultValue": "middle",
//             "version": "",
//             "id": "31d0d0ef-ed8c-46e9-8009-2f7e7e897045",
//             "showName": "大小",
//             "label": "大小",
//             "canEdit": true,
//             "order": 9,
//             "valueSource": [
//               {
//                 "label": "大",
//                 "value": "large"
//               },
//               {
//                 "label": "中 ",
//                 "value": "middle"
//               },
//               {
//                 "label": "小",
//                 "value": "small"
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "middle"
//           },
//           {
//             "id": "",
//             "name": "label",
//             "showName": "标签",
//             "desc": "标签",
//             "label": "标签",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "",
//             "isNull": true,
//             "value": "产品名称"
//           },
//           {
//             "id": "",
//             "name": "labelAlign",
//             "showName": "标签对齐方式",
//             "desc": "标签对齐方式",
//             "label": "标签对齐方式",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "right",
//             "isNull": true,
//             "valueSource": [
//               {
//                 "label": "左对齐",
//                 "value": "left"
//               },
//               {
//                 "label": "右对齐",
//                 "value": "right"
//               }
//             ],
//             "value": "right"
//           },
//           {
//             "id": "",
//             "name": "formLayout",
//             "showName": "标签布局",
//             "desc": "标签",
//             "label": "标签",
//             "order": 1,
//             "type": "select",
//             "defaultValue": "horizontal",
//             "isNull": true,
//             "valueSource": [
//               {
//                 "label": "垂直显示",
//                 "value": "vertical"
//               },
//               {
//                 "label": "水平显示",
//                 "value": "horizontal"
//               }
//             ],
//             "value": "horizontal"
//           },
//           {
//             "id": "",
//             "name": "widthMode",
//             "showName": "宽度模式",
//             "desc": "标签",
//             "label": "标签",
//             "order": 1,
//             "type": "select",
//             "defaultValue": "input",
//             "isNull": true,
//             "valueSource": [
//               {
//                 "label": "占满父容器宽度",
//                 "value": "auto"
//               },
//               {
//                 "label": "手动输入固定宽度",
//                 "value": "input"
//               }
//             ],
//             "value": "input"
//           },
//           {
//             "id": "",
//             "name": "containerWidth",
//             "showName": "宽度",
//             "desc": "宽度",
//             "label": "宽度",
//             "order": 1,
//             "type": "number",
//             "defaultValue": "300",
//             "isNull": true,
//             "ifShow": {
//               "prop": "widthMode",
//               "value": "input"
//             },
//             "value": "300"
//           },
//           {
//             "id": "",
//             "name": "labelColSpan",
//             "showName": "标签宽度占比",
//             "desc": "标签宽度，按照24等分",
//             "label": "标签宽度",
//             "order": 1,
//             "type": "number",
//             "defaultValue": "",
//             "isNull": true,
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "labelColOffset",
//             "showName": "标签偏移",
//             "desc": "标签偏移，按照24等分",
//             "label": "标签偏移",
//             "order": 1,
//             "type": "number",
//             "defaultValue": "",
//             "isNull": true,
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "wrapperColSpan",
//             "showName": "组件宽度占比",
//             "desc": "组件度，按照24等分",
//             "label": "组件宽度占比",
//             "order": 1,
//             "type": "select",
//             "defaultValue": "",
//             "isNull": true,
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "wrapperColOffet",
//             "showName": "组件偏移",
//             "desc": "组件偏移，按照24等分",
//             "label": "组件偏移",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "",
//             "isNull": true,
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "visible",
//             "showName": "可见",
//             "defaultValue": true,
//             "desc": "可见",
//             "label": "可见",
//             "type": "boolean",
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "showLoading",
//             "showName": "显示加载状态",
//             "desc": "显示加载状态",
//             "label": "显示加载状态",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": false,
//             "isNull": true,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "showLoadingText",
//             "showName": "加载状态提示文字",
//             "desc": "加载状态提示文字",
//             "label": "加载状态提示文字",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "",
//             "isNull": true,
//             "editor": false,
//             "showEvent": true
//           }
//         ],
//         "event": [
//           {
//             "showName": "输入变化",
//             "name": "onChange",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "回车",
//             "name": "onPressEnter",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "点击",
//             "name": "onClick",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "获得输入焦点",
//             "name": "onFocus",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           }
//         ],
//         "commonStyle": [
//           {
//             "name": "styleBox",
//             "showName": "边距",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "border",
//             "showName": "边框",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "background",
//             "showName": "背景",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "width",
//             "showName": "宽度",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "height",
//             "showName": "高度",
//             "value": "",
//             "defaultValue": ""
//           }
//         ],
//         "rules": [],
//         "permissionControl": [
//           {
//             "name": "visible",
//             "showName": "可见性",
//             "label": "可见性",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           },
//           {
//             "name": "enable",
//             "showName": "禁用",
//             "label": "禁用",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           },
//           {
//             "name": "readonly",
//             "showName": "只读",
//             "label": "只读",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           }
//         ],
//         "renderOrder": 1
//       },
//       "pack": "antd",
//       "instanceId": "page_r16mw~Input_3",
//       "parentId": "page_r16mw~grid1_2",
//       "containerId": "page_r16mw",
//       "containerType": 2
//     },
//     {
//       "id": "pack_Select",
//       "name": "select",
//       "toolbox": {
//         "group": "form",
//         "name": "select",
//         "showName": "下拉选择框",
//         "order": 3,
//         "render": ""
//       },
//       "render": {
//         "name": "select",
//         "parent": "select",
//         "render": "",
//         isFormData: true,
//         "layout": {
//           "w": 3,
//           "h": 1,
//           "x": 0,
//           "y": 10,
//           "i": "page_r16mw~Input_3",
//           "minW": 2,
//           "moved": false,
//           "static": false,
//           "isDraggable": true,
//           "text": "Input"
//         },
//         "props": [
//           {
//             id: '',
//             name: 'label',
//             showName: '标签',
//             desc: '标签',
//             label: '标签',
//             order: 1,
//             type: 'string',
//             //属性值的默认值
//             defaultValue: '下拉选择框',
//             //是否可以不设置
//             isNull: true,
//           },
//           {
//             id: '',
//             name: 'name',
//             showName: '组件备注',
//             desc: '组件备注',
//             label: '组件备注',
//             order: 1,
//             type: 'string',
//             //属性值的默认值
//             defaultValue: '下拉选择框',
//             //是否可以不设置
//             isNull: true,
//           },
//           {
//             "name": "allowClear",
//             "desc": "支持清除",
//             "type": "boolean",
//             "defaultValue": "false",
//             "version": "",
//             "id": "ddcdae64-9a55-42c8-a8ca-f99ae814624c",
//             "showName": "支持清除",
//             "label": "支持清除",
//             "canEdit": true,
//             "order": 0,
//             "group": "基本属性"
//           },
//           {
//             "name": "bordered",
//             "desc": "是否有边框",
//             "type": "boolean",
//             "defaultValue": "true",
//             "version": "",
//             "id": "932dc647-2e49-4bc7-bbe2-c8894a9f7575",
//             "showName": "是否有边框",
//             "label": "是否有边框",
//             "canEdit": true,
//             "order": 3,
//             "group": "基本属性"
//           },
//           {
//             "name": "defaultValue",
//             "desc": "指定默认选中的条目",
//             "type": "string",
//             "defaultValue": "",
//             "version": "",
//             "id": "0685e14a-d145-4a27-a5f1-fa41bc88a9fd",
//             "showName": "指定默认选中的值",
//             "label": "默认值",
//             "canEdit": true,
//             "order": 7,
//             "group": "基本属性"
//           },
//           {
//             "name": "multiple",
//             "desc": "多选",
//             "type": "boolean",
//             "defaultValue": false,
//             "version": "",
//             "id": "de28ffd9-77f0-4254-b948-64fab77fc8c5",
//             "showName": "多选",
//             "label": "多选",
//             "canEdit": true,
//             "order": 23,
//             "group": "基本属性"
//           },
//           {
//             "name": "mode",
//             "desc": "多选的方式",
//             "type": "select",
//             "defaultValue": "tags",
//             "version": "",
//             "id": "de28ffd9-77f0-4254-b948-64fab77fc8c5",
//             "showName": "选择方式",
//             "label": "模式",
//             "canEdit": true,
//             "order": 23,
//             "valueSource": [
//               { "label": "下拉", "value": "multiple" },
//               { "label": "标签", "value": "tags" }
//             ],
//             ifShow: { prop: 'multiple', value: true },
//             "group": "基本属性"
//           },
//           {
//             name: 'disabled',
//             desc: '禁用',
//             type: 'boolean',
//             defaultValue: false,
//             id: 'd623018b-7bda-4b3e-aa14-ad4100d11fa3',
//             showName: '禁用',
//             label: '禁用',
//             canEdit: true,
//             order: 3,
//             group: '基本属性',
//             groupType: 'common',
//             showEvent: true
//           },
//           {
//             id: '',
//             name: 'disabledValue',
//             showName: '不可选中项key',
//             value: null,
//             defaultValue: null,

//             editor: false,
//             showEvent: true
//           },
//           {
//             name: 'showSearch',
//             desc: '启用搜索',
//             type: 'boolean',
//             defaultValue: false,

//             id: 'd623018b-7bda-4b3e-aa14-ad4100d11fa3',
//             showName: '启用搜索',
//             label: '启用搜索',
//             canEdit: true,
//             order: 3,

//             group: '基本属性',
//             groupType: 'common'
//           },
//           {
//             name: 'readOnly',
//             desc: '只读',
//             type: 'boolean',
//             defaultValue: false,

//             id: 'd623018b-7bda-4b3e-aa14-ad4100d11fa3',
//             showName: '只读',
//             label: '只读',
//             canEdit: true,
//             order: 3,

//             group: '基本属性',
//             groupType: 'common',
//             showEvent: true
//           },
//           {
//             "name": "placeholder",
//             "desc": "选择框默认文本",
//             "type": "string",
//             "defaultValue": "",
//             "version": "",
//             "id": "d2430cc7-0051-453a-b86b-8d23cf694a9f",
//             "showName": "框默认文本",
//             "label": "占位符",
//             "canEdit": true,
//             "order": 29,
//             "group": "基本属性"
//           },
//           {
//             "name": "size",
//             "desc": "选择框大小",
//             "type": "large | middle | small",
//             "defaultValue": "middle",
//             "version": "",
//             "id": "e075256f-a8fc-4b03-b87d-7e60f405861e",
//             "showName": "选择框大小",
//             "label": "大小",
//             "canEdit": true,
//             "order": 34,
//             "valueSource": [
//               { "label": "large", "value": "large" },
//               { "label": "middle ", "value": "middle " },
//               { "label": "small", "value": "small" }
//             ],
//             "group": "基本属性"
//           },
//           {
//             id: '',
//             name: 'labelAlign',
//             showName: '标签对齐方式',
//             desc: '标签对齐方式',
//             label: '标签对齐方式',
//             order: 1,
//             type: 'string',
//             //属性值的默认值
//             defaultValue: 'right',
//             //是否可以不设置
//             isNull: true,
//             valueSource: [
//               { label: '左对齐', value: 'left' },
//               { label: '右对齐', value: 'right' },
//             ],
//           },
//           {
//             id: '',
//             name: 'formLayout',
//             showName: '标签布局',
//             desc: '标签',
//             label: '标签',
//             order: 1,
//             type: 'select',
//             //属性值的默认值
//             defaultValue: 'horizontal',
//             //是否可以不设置
//             isNull: true,
//             valueSource: [
//               { label: '垂直显示', value: 'vertical' },
//               { label: '水平显示', value: 'horizontal' },
//             ],
//           },
//           {
//             id: '',
//             name: 'widthMode',
//             showName: '宽度模式',
//             desc: '标签',
//             label: '标签',
//             order: 1,
//             type: 'select',
//             //属性值的默认值
//             defaultValue: 'input',
//             //是否可以不设置
//             isNull: true,
//             valueSource: [
//               { label: '占满父容器宽度', value: 'auto' },
//               { label: '手动输入固定宽度', value: 'input' },
//             ],
//           },
//           {
//             id: '',
//             name: 'containerWidth',
//             showName: '宽度',
//             desc: '宽度',
//             label: '宽度',
//             order: 1,
//             type: 'number',
//             //属性值的默认值
//             defaultValue: '400',
//             //是否可以不设置
//             isNull: true,
//             ifShow: { prop: 'widthMode', value: 'input' }
//           },
//           {
//             id: '',
//             name: 'labelColSpan',
//             showName: '标签宽度占比',
//             desc: '标签宽度，按照24等分',
//             label: '标签宽度',
//             order: 1,
//             type: 'number',
//             //属性值的默认值
//             defaultValue: '',
//             //是否可以不设置
//             isNull: true,
//           },
//           {
//             id: '',
//             name: 'labelColOffset',
//             showName: '标签偏移',
//             desc: '标签偏移，按照24等分',
//             label: '标签偏移',
//             order: 1,
//             type: 'number',
//             //属性值的默认值
//             defaultValue: '',
//             //是否可以不设置
//             isNull: true,
//           },
//           {
//             id: '',
//             name: 'wrapperColSpan',
//             showName: '组件宽度占比',
//             desc: '组件度，按照24等分',
//             label: '组件宽度占比',
//             order: 1,
//             type: 'select',
//             //属性值的默认值
//             defaultValue: '',
//             //是否可以不设置
//             isNull: true,
//           },
//           {
//             id: '',
//             name: 'wrapperColOffet',
//             showName: '组件偏移',
//             desc: '组件偏移，按照24等分',
//             label: '组件偏移',
//             order: 1,
//             type: 'string',
//             //属性值的默认值
//             defaultValue: '',
//             //是否可以不设置
//             isNull: true
//           },
//           {
//             id: '',
//             name: 'value',
//             showName: '选中的数据值',
//             value: null,
//             defaultValue: null,
//             editor: false,
//             showEvent: true
//           },
//           {
//             id: '',
//             name: 'selectedLabel',
//             showName: '选中的显示文本',
//             value: null,
//             defaultValue: null,
//             editor: false,
//             showEvent: true
//           },
//           {
//             id: '',
//             name: 'selected',
//             showName: '选中的数据',
//             value: [],
//             defaultValue: [],
//             editor: false,
//             showEvent: true
//           },
//           {
//             id: '',
//             name: 'fieldNames_label',
//             showName: '数据label字段',
//             desc: '数据label字段',
//             label: '数据label字段',
//             order: 1,
//             type: 'string',
//             defaultValue: 'label',
//             isNull: true,
//             editor: false
//           },
//           {
//             id: '',
//             name: 'fieldNames_value',
//             showName: '数据value字段',
//             desc: '数据value字段',
//             label: '数据value字段',
//             order: 1,
//             type: 'string',
//             defaultValue: 'value',
//             isNull: true,
//             editor: false
//           },
//           {
//             id: '',
//             name: 'fieldNames_options',
//             showName: '数据options字段',
//             desc: '数据options字段',
//             label: '数据options字段',
//             order: 1,
//             type: 'string',
//             defaultValue: 'options',
//             isNull: true,
//             editor: false
//           },
//           {
//             id: '',
//             name: 'visible',
//             showName: '可见',
//             defaultValue: true,
//             desc: '可见',
//             label: '可见',
//             type: 'boolean',
//             showEvent: true
//           },
//           {
//             id: '',
//             name: 'showLoading',
//             showName: '显示加载状态',
//             desc: '显示加载状态',
//             label: '显示加载状态',
//             order: 1,
//             type: 'boolean',
//             //属性值的默认值
//             defaultValue: false,
//             //是否可以不设置
//             isNull: true,
//             editor: false,
//             showEvent: true
//           },
//           {
//             id: '',
//             name: 'showLoadingText',
//             showName: '加载状态提示文字',
//             desc: '加载状态提示文字',
//             label: '加载状态提示文字',
//             order: 1,
//             type: 'string',
//             //属性值的默认值
//             defaultValue: '',
//             //是否可以不设置
//             isNull: true,
//             editor: false,
//             showEvent: true
//           },
//         ],
//         datasource: {
//           type: 'customerData',
//           //绑定到组件的属性名称
//           bindingPropName: 'options',
//           customerData: [
//           ],
//           request: {
//             fileds: {
//               key: '',
//               value: '',
//             },
//             eventInfo: {
//               showName: '获取数据',
//               name: 'getData',
//               triggetType: [],
//               defaultTriggerType: '',
//             }
//           },
//           dataMapping: [
//             { source: '', target: 'label', targetShowName: 'label' },
//             { source: '', target: 'value', targetShowName: 'value' },
//           ]
//         },
//         event: [
//           {
//             showName: '选中变化',
//             name: 'onChange',
//             triggetType: [],
//             defaultTriggerType: '',
//           },
//           {
//             showName: '搜索事件',
//             name: 'onSearch',
//             triggetType: [],
//             defaultTriggerType: '',
//           },
//           {
//             showName: '点击事件',
//             name: 'onClick',
//             triggetType: [],
//             defaultTriggerType: '',
//           },
//           {
//             showName: '获得输入焦点',
//             name: 'onFocus',
//             triggetType: [],
//             defaultTriggerType: '',
//           },
//         ],
//         commonStyle: [
//           {
//             name: 'styleBox',
//             showName: '边距',
//             value: {},
//             defaultValue: {},
//           },
//           {
//             name: 'border',
//             showName: '边框',
//             value: {},
//             defaultValue: {},
//           },
//           {
//             name: 'background',
//             showName: '背景',
//             value: '',
//             defaultValue: '',
//           },
//           {
//             name: 'width',
//             showName: '宽度',
//             value: '',
//             defaultValue: '',
//           },
//           {
//             name: 'height',
//             showName: '高度',
//             value: '',
//             defaultValue: '',
//           }
//         ],
//         rules: [

//         ],
//         permissionControl: [
//           { name: 'visible', showName: '可见性', label: '可见性', type: 'boolean', defaultValue: false, value: false },
//           { name: 'enable', showName: '禁用', label: '禁用', type: 'boolean', defaultValue: false, value: false },
//           { name: 'readonly', showName: '只读', label: '只读', type: 'boolean', defaultValue: false, value: false }
//         ],
//         permission: false
//       }
//     },
//     {
//       "id": "pack_Button",
//       "name": "button",
//       "pack": "antd",
//       "toolbox": {
//         "group": "form",
//         "name": "button",
//         "showName": "按钮",
//         "order": "",
//         "render": ""
//       },
//       "render": {
//         "name": "button",
//         "parent": "",
//         "render": "",
//         "rowBlock": false,
//         "layout": {
//           "w": 3,
//           "h": 1,
//           "x": 9,
//           "y": 13,
//           "i": "page_r16mw~button_13",
//           "minW": 2,
//           "moved": false,
//           "static": false,
//           "isDraggable": true,
//           "text": "按钮"
//         },
//         "props": [
//           {
//             "id": "",
//             "name": "name",
//             "showName": "组件备注",
//             "desc": "组件备注",
//             "label": "组件备注",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "按钮",
//             "isNull": true,
//             "value": "新建产品按钮_14"
//           },
//           {
//             "name": "text",
//             "desc": "文本",
//             "type": "string",
//             "defaultValue": "按钮",
//             "version": "",
//             "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//             "showName": "文本",
//             "label": "文本",
//             "canEdit": true,
//             "order": 1,
//             "group": "基本属性",
//             "groupType": "common",
//             "valueSource": [],
//             "showEvent": true,
//             "value": "新建产品testaaaaa"
//           },
//           {
//             "name": "shape",
//             "desc": "设置按钮形状",
//             "type": "select",
//             "defaultValue": "",
//             "version": "",
//             "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//             "showName": "形状",
//             "label": "形状",
//             "canEdit": true,
//             "order": 8,
//             "valueSource": [
//               {
//                 "label": "circle",
//                 "value": "circle"
//               },
//               {
//                 "label": "round",
//                 "value": "round"
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "circle"
//           },
//           {
//             "name": "size",
//             "desc": "设置按钮大小",
//             "type": "select",
//             "defaultValue": "middle",
//             "version": "",
//             "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
//             "showName": "大小",
//             "label": "大小",
//             "canEdit": true,
//             "order": 9,
//             "valueSource": [
//               {
//                 "label": "大",
//                 "value": "large"
//               },
//               {
//                 "label": "中",
//                 "value": "middle "
//               },
//               {
//                 "label": "小",
//                 "value": "small"
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "large"
//           },
//           {
//             "name": "type",
//             "desc": "设置按钮类型",
//             "type": "primary | ghost | dashed | link | text | default",
//             "defaultValue": "primary",
//             "version": "",
//             "id": "bffd2494-d9d1-498d-ad23-e4d9cb3df321",
//             "showName": "类型",
//             "label": "类型",
//             "canEdit": true,
//             "order": 11,
//             "valueSource": [
//               {
//                 "label": "primary",
//                 "value": "primary"
//               },
//               {
//                 "label": "ghost ",
//                 "value": "ghost "
//               },
//               {
//                 "label": "dashed ",
//                 "value": "dashed"
//               },
//               {
//                 "label": "link ",
//                 "value": "link "
//               },
//               {
//                 "label": "text ",
//                 "value": "text "
//               },
//               {
//                 "label": "default",
//                 "value": "default"
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "ghost "
//           },
//           {
//             "name": "icon",
//             "desc": "图标",
//             "type": "com",
//             "defaultValue": "",
//             "version": "",
//             "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//             "showName": "图标",
//             "label": "图标",
//             "canEdit": true,
//             "order": 1,
//             "group": "基本属性",
//             "groupType": "common",
//             "customerEditor": "iconSelector",
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "visible",
//             "showName": "可见",
//             "defaultValue": true,
//             "desc": "可见",
//             "label": "可见",
//             "type": "boolean",
//             "showEvent": true,
//             "value": true
//           },
//           {
//             "name": "disabled",
//             "desc": "禁用",
//             "type": "boolean",
//             "defaultValue": false,
//             "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//             "showName": "禁用",
//             "label": "禁用",
//             "canEdit": true,
//             "order": 3,
//             "group": "基本属性",
//             "groupType": "common",
//             "showEvent": true,
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "showLoading",
//             "showName": "显示加载状态",
//             "desc": "显示加载状态",
//             "label": "显示加载状态",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": false,
//             "isNull": true,
//             "editor": false,
//             "showEvent": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "showLoadingText",
//             "showName": "加载状态提示文字",
//             "desc": "加载状态提示文字",
//             "label": "加载状态提示文字",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "",
//             "isNull": true,
//             "editor": false,
//             "showEvent": true,
//             "value": "vsvsdcdcloading time..."
//           }
//         ],
//         "event": [
//           {
//             "showName": "点击事件",
//             "name": "onClick",
//             "triggetType": [],
//             "defaultTriggerType": "",
//             "pageId": "page_r16mw",
//             "id": 1169,
//             "guid": "onClick-page_r16mw~button_13",
//             "targetId": "page_r16mw~button_13"
//           }
//         ],
//         "commonStyle": [
//           {
//             "name": "styleBox",
//             "showName": "边距",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "border",
//             "showName": "边框",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "background",
//             "showName": "背景",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "width",
//             "showName": "宽度",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "height",
//             "showName": "高度",
//             "value": "",
//             "defaultValue": ""
//           }
//         ],
//         "permissionControl": [
//           {
//             "name": "visible",
//             "showName": "可见性",
//             "label": "可见性",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           },
//           {
//             "name": "enable",
//             "showName": "禁用",
//             "label": "禁用",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           },
//           {
//             "name": "readonly",
//             "showName": "只读",
//             "label": "只读",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           }
//         ],
//         "renderOrder": 1
//       },
//       "instanceId": "page_r16mw~button_13",
//       "parentId": "page_r16mw~grid1_8",
//       "containerId": "page_r16mw",
//       "containerType": 2
//     },
//     {
//       "id": "pack_Table",
//       "name": "Table",
//       "toolbox": {
//         "group": "data",
//         "name": "Table",
//         "showName": "表格",
//         "order": "",
//         "render": ""
//       },
//       "render": {
//         "name": "Table",
//         "parent": "table",
//         "render": "",
//         "rowBlock": true,
//         "layout": {
//           "w": 12,
//           "h": 8,
//           "x": 0,
//           "y": 1,
//           "i": "page_r16mw~Table_18",
//           "minW": 2,
//           "moved": false,
//           "static": false,
//           "isDraggable": true,
//           "text": "表格"
//         },
//         "props": [
//           {
//             "id": "",
//             "name": "name",
//             "showName": "组件备注",
//             "desc": "组件备注",
//             "label": "组件备注",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "表格",
//             "isNull": true,
//             "value": "表格_18"
//           },
//           {
//             "id": "",
//             "name": "bordered",
//             "showName": "显示外边框和列边框",
//             "desc": "显示外边框和列边框",
//             "label": "显示外边框和列边框",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": true,
//             "isNull": true,
//             "value": true
//           },
//           {
//             "name": "size",
//             "desc": "尺寸",
//             "type": "select",
//             "defaultValue": "middle",
//             "version": "",
//             "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
//             "showName": "尺寸",
//             "label": "尺寸",
//             "canEdit": true,
//             "order": 9,
//             "valueSource": [
//               {
//                 "label": "大",
//                 "value": "large"
//               },
//               {
//                 "label": "中",
//                 "value": "middle "
//               },
//               {
//                 "label": "小",
//                 "value": "small"
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "middle"
//           },
//           {
//             "id": "",
//             "name": "rowKey",
//             "showName": "行数据唯一标记",
//             "desc": "行数据唯一标记",
//             "label": "组件备注",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "id",
//             "isNull": true,
//             "value": "id"
//           },
//           {
//             "id": "",
//             "name": "columns",
//             "showName": "columns",
//             "desc": "列编辑",
//             "label": "columns",
//             "order": 1,
//             "type": "table_columns_edit",
//             "defaultValue": [
//               {
//                 "title": "姓名",
//                 "dataIndex": "name",
//                 "key": "name",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 1
//               },
//               {
//                 "title": "年龄",
//                 "dataIndex": "age",
//                 "key": "age",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 2
//               },
//               {
//                 "title": "住址",
//                 "dataIndex": "address",
//                 "key": "address",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 3
//               }
//             ],
//             "isNull": true,
//             "value": [
//               {
//                 "title": "id",
//                 "dataIndex": "id",
//                 "ref_col": "id",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 5,
//                 "showTable": false,
//                 "key": "18dc2b56-94c1-46a1-87e8-05dc7eadfd2d",
//                 "fixed": false
//               },
//               {
//                 "title": "产品名称",
//                 "dataIndex": "name",
//                 "ref_col": "name",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 6,
//                 "showTable": true,
//                 "key": "5ac22d8c-eee6-4b3f-9e58-5de09e2e4d24",
//                 "fixed": false
//               },
//               {
//                 "title": "产品唯一编码",
//                 "dataIndex": "guid",
//                 "ref_col": "guid",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 7,
//                 "showTable": true,
//                 "key": "3ea233ac-6701-40fb-b5b3-4a729f662207",
//                 "fixed": false
//               },
//               {
//                 "title": "产品版本号",
//                 "dataIndex": "version",
//                 "ref_col": "version",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 8,
//                 "showTable": true,
//                 "key": "375ae082-aedc-417f-8307-49afe5968705",
//                 "fixed": false
//               },
//               {
//                 "title": "产品类型",
//                 "dataIndex": "type",
//                 "ref_col": "type",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 10,
//                 "showTable": true,
//                 "key": "a23e198b-88d5-4ca4-8c2a-93ac83e758b7",
//                 "fixed": false
//               },
//               {
//                 "title": "产品说明",
//                 "dataIndex": "note",
//                 "ref_col": "note",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 11,
//                 "showTable": true,
//                 "key": "dcdeedca-1662-40b3-b6dd-7718f7721486",
//                 "fixed": false
//               },
//               {
//                 "title": "产品初始化sql",
//                 "dataIndex": "initsql",
//                 "ref_col": "initsql",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 12,
//                 "showTable": false,
//                 "key": "f49747f0-f980-42b6-aae1-5b35e7128fc6",
//                 "fixed": false
//               },
//               {
//                 "title": "创建人id",
//                 "dataIndex": "createuserid",
//                 "ref_col": "createuserid",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 13,
//                 "showTable": false,
//                 "key": "b4d70040-620a-4136-a64f-24c9d9d0658c",
//                 "fixed": false
//               },
//               {
//                 "title": "创建时间",
//                 "dataIndex": "createtime",
//                 "ref_col": "createtime",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 15,
//                 "showTable": false,
//                 "key": "76661e82-fdf8-4f65-b536-f7fdc714edfb",
//                 "fixed": false
//               },
//               {
//                 "title": "最后一次更新时间",
//                 "dataIndex": "updattime",
//                 "ref_col": "updattime",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 17,
//                 "showTable": false,
//                 "key": "38b8ce1d-0042-46cf-8a03-1ca50b8c21c3",
//                 "fixed": false
//               },
//               {
//                 "title": "最后一次更新用户id",
//                 "dataIndex": "updateuserid",
//                 "ref_col": "updateuserid",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 18,
//                 "showTable": false,
//                 "key": "dacd4f14-1bed-42b8-b9e3-29eaf1a32886",
//                 "fixed": false
//               },
//               {
//                 "title": "是否是代理",
//                 "dataIndex": "is_proxy",
//                 "ref_col": "is_proxy",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 19,
//                 "showTable": false,
//                 "key": "9f5d9d9c-cd7e-4958-872f-9338ab4f624f",
//                 "fixed": false
//               },
//               {
//                 "title": "归属租户id",
//                 "dataIndex": "zuhu_id",
//                 "ref_col": "zuhu_id",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 20,
//                 "showTable": false,
//                 "key": "75d6df62-dcaf-463b-8fbd-7a147e04dcfa",
//                 "fixed": false
//               },
//               {
//                 "title": "操作",
//                 "dataIndex": "data3",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 21,
//                 "fixed": false,
//                 "showTable": true,
//                 "key": "ddc694e8-d30c-4d8e-b639-13d8c25d730a",
//                 "_mocha_col_render": {
//                   "showName": "自定义渲染",
//                   "name": "render",
//                   "render": {
//                     "renderType": "area",
//                     "content": "page_r16mw~area_m3tin"
//                   }
//                 }
//               }
//             ]
//           },
//           {
//             "id": "",
//             "name": "rowSelection",
//             "showName": "行数据选择配置",
//             "desc": "行数据选择配置",
//             "label": "行数据选择配置",
//             "order": 1,
//             "type": "table_rowselection",
//             "isNull": true,
//             "customerEditor": "RowSelection",
//             "events": [
//               {
//                 "showName": "选择事件",
//                 "name": "onChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               }
//             ],
//             "value": ""
//           },
//           {
//             "id": "",
//             "name": "ref_table",
//             "showName": "关联表",
//             "desc": "关联表",
//             "label": "关联表",
//             "order": 1,
//             "type": "r_table",
//             "isNull": true,
//             "editor": false,
//             "value": "chanpin"
//           },
//           {
//             "id": "",
//             "name": "showPagination",
//             "showName": "显示分页",
//             "desc": "显示分页",
//             "label": "显示分页",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "serverPage",
//             "showName": "服务端分页/排序",
//             "desc": "服务端分页",
//             "label": "服务端分页",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "pagination",
//             "showName": "分页配置",
//             "desc": "分页配置",
//             "label": "分页配置",
//             "order": 1,
//             "type": "table_pagination",
//             "defaultValue": {
//               "pagination": true,
//               "position": "bottomRight",
//               "pageSize": 15,
//               "showQuickJumper": true,
//               "size": "default",
//               "current": 1,
//               "simple": false,
//               "showSizeChanger": true,
//               "total": 0
//             },
//             "isNull": true,
//             "events": [
//               {
//                 "showName": "页码事件",
//                 "name": "onChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               },
//               {
//                 "showName": "页大小事件",
//                 "name": "onShowSizeChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               }
//             ],
//             "customerEditor": "paginationEditor",
//             "ifShow": {
//               "prop": "showPagination",
//               "value": true
//             },
//             "value": {
//               "pagination": true,
//               "position": "bottomRight",
//               "pageSize": 15,
//               "showQuickJumper": true,
//               "size": "default",
//               "simple": false,
//               "current": 1,
//               "showSizeChanger": true,
//               "total": 0
//             }
//           },
//           {
//             "id": "",
//             "name": "scroll",
//             "showName": "表格滚动配置",
//             "desc": "表格滚动配置",
//             "label": "表格滚动配置",
//             "order": 1,
//             "type": "table_scroll",
//             "defaultValue": {
//               "scrollToFirstRowOnChange": true,
//               "x": false,
//               "width": "",
//               "height": "",
//               "y": false
//             },
//             "isNull": true,
//             "customerEditor": "ScrollEditor",
//             "value": {
//               "scrollToFirstRowOnChange": true,
//               "width": "",
//               "height": "",
//               "x": false,
//               "y": false
//             }
//           },
//           {
//             "id": "",
//             "name": "totalCount",
//             "showName": "总页数",
//             "value": "",
//             "defaultValue": 0,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "pageSize",
//             "showName": "每页数量",
//             "value": 10,
//             "defaultValue": 10,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "pageIndex",
//             "showName": "当前页码",
//             "value": 1,
//             "defaultValue": 1,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "filter",
//             "showName": "筛选字段",
//             "value": "",
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "filter_value",
//             "showName": "筛选字段内容",
//             "value": "",
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "sorter",
//             "showName": "排序字段",
//             "value": "",
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "sortOrder",
//             "showName": "排序方式",
//             "value": "",
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "selected",
//             "showName": "选中的数据",
//             "value": [],
//             "defaultValue": [],
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "selectedRowKeys",
//             "showName": "选中的数据key",
//             "value": [],
//             "defaultValue": [],
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "visible",
//             "showName": "可见",
//             "defaultValue": true,
//             "desc": "可见",
//             "label": "可见",
//             "type": "boolean",
//             "showEvent": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "showLoading",
//             "showName": "显示加载状态",
//             "desc": "显示加载状态",
//             "label": "显示加载状态",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": false,
//             "isNull": true,
//             "editor": false,
//             "showEvent": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "showLoadingText",
//             "showName": "加载状态提示文字",
//             "desc": "加载状态提示文字",
//             "label": "加载状态提示文字",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "",
//             "isNull": true,
//             "editor": false,
//             "showEvent": true,
//             "value": "loading time..."
//           }
//         ],
//         "event": [
//           {
//             "showName": "选择事件",
//             "name": "onSelectChange",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "行单击",
//             "name": "rowClick",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "行双击",
//             "name": "rowDoubleClick",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           }
//         ],
//         "datasource": {
//           "type": "request",
//           "bindingPropName": "treeData",
//           "customerData": [
//             {
//               "key": "1",
//               "name": "name_1",
//               "age": 1,
//               "address": "address_1"
//             },
//             {
//               "key": "2",
//               "name": "name_2",
//               "age": 2,
//               "address": "address_2"
//             },
//             {
//               "key": "3",
//               "name": "name_3",
//               "age": 3,
//               "address": "address_3"
//             }
//           ],
//           "request": {
//             "eventInfo": {
//               "showName": "获取数据",
//               "name": "getData",
//               "triggetType": "",
//               "defaultTriggerType": "",
//               "pageid": "page_r16mw",
//               "guid": "getData-page_r16mw~Table_18",
//               "app_id": "yqdw4",
//               "version": "master",
//               "type": 100,
//               "targetid": "page_r16mw~Table_18",
//               "visual": 1
//             }
//           }
//         },
//         "commonStyle": [
//           {
//             "name": "styleBox",
//             "showName": "边距",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "border",
//             "showName": "边框",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "background",
//             "showName": "背景",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "width",
//             "showName": "宽度",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "height",
//             "showName": "高度",
//             "value": "",
//             "defaultValue": ""
//           }
//         ],
//         "permissionControl": [
//           {
//             "name": "visible",
//             "showName": "可见性",
//             "label": "可见性",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           }
//         ],
//         "renderOrder": 3,
//         "rules": []
//       },
//       "pack": "antd",
//       "instanceId": "page_r16mw~Table_18",
//       "parentId": "page_r16mw",
//       "containerId": "page_r16mw",
//       "containerType": 2
//     }
//   ],
//   "config": [
//     {
//       "id": "pack_Grid1",
//       "name": "grid1",
//       "pack": "antd",
//       "toolbox": {
//         "group": "layout",
//         "name": "grid1",
//         "showName": "行容器",
//         "order": "",
//         "render": ""
//       },
//       "render": {
//         "rowBlock": true,
//         "name": "grid1",
//         "parent": "",
//         "render": "",
//         "props": [
//           {
//             "id": "",
//             "name": "name",
//             "showName": "行容器",
//             "desc": "行容器",
//             "label": "行容器",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "行容器",
//             "isNull": true,
//             "value": "行容器_2"
//           },
//           {
//             "id": "",
//             "name": "justify-content",
//             "showName": "水平对齐方式",
//             "desc": "水平对齐方式",
//             "label": "水平对齐方式",
//             "order": 1,
//             "type": "select",
//             "defaultValue": "flex-start",
//             "valueSource": [
//               {
//                 "label": "左对齐",
//                 "value": "flex-start"
//               },
//               {
//                 "label": "右对齐",
//                 "value": "flex-end"
//               },
//               {
//                 "label": "居中对齐",
//                 "value": "center"
//               }
//             ],
//             "isNull": true
//           },
//           {
//             "id": "",
//             "name": "gap",
//             "showName": "子元素间距(像素)",
//             "desc": "子元素间距(像素)",
//             "label": "子元素间距(像素)",
//             "order": 1,
//             "type": "number",
//             "defaultValue": "12",
//             "isNull": true
//           },
//           {
//             "id": "",
//             "name": "proOpen",
//             "showName": "高级模式可见",
//             "desc": "高级模式可见",
//             "label": "高级模式可见",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": false,
//             "isNull": true
//           },
//           {
//             "id": "",
//             "name": "visible",
//             "showName": "可见",
//             "defaultValue": true,
//             "desc": "可见",
//             "label": "可见",
//             "type": "boolean",
//             "showEvent": true
//           }
//         ],
//         "commonStyle": [
//           {
//             "name": "styleBox",
//             "showName": "边距",
//             "value": {
//               "marginBottom": "14"
//             }
//           },
//           {
//             "name": "border",
//             "showName": "边框",
//             "defaultValue": {}
//           },
//           {
//             "name": "background",
//             "showName": "背景",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "height",
//             "showName": "高度",
//             "value": "",
//             "defaultValue": ""
//           }
//         ],
//         "renderOrder": 1,
//         "event": [],
//         "permissionControl": []
//       },
//       "instanceId": "page_r16mw~grid1_2",
//       "parentId": "page_r16mw",
//       "containerId": "page_r16mw",
//       "containerType": 2,
//       "children": [
//         {
//           "id": "pack_Input",
//           "name": "Input",
//           "toolbox": {
//             "group": "form",
//             "name": "Input",
//             "showName": "Input",
//             "order": "",
//             "render": ""
//           },
//           "render": {
//             "name": "Input",
//             "parent": "input",
//             "render": "",
//             "isFormData": true,
//             "props": [
//               {
//                 "id": "",
//                 "name": "name",
//                 "showName": "组件备注",
//                 "desc": "组件备注",
//                 "label": "组件备注",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "文本框",
//                 "isNull": true,
//                 "value": "产品名称文本框_3"
//               },
//               {
//                 "id": "",
//                 "name": "value",
//                 "showName": "文本框内容",
//                 "desc": "文本框内容",
//                 "label": "文本框内容",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "",
//                 "isNull": true,
//                 "showEvent": true,
//                 "value": ""
//               },
//               {
//                 "name": "allowClear",
//                 "desc": "可以点击清除图标删除内容",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "version": "",
//                 "id": "4d4c2217-f3f2-4556-89fe-6fff594a8451",
//                 "showName": "可清除",
//                 "label": "可清除",
//                 "canEdit": true,
//                 "order": 2,
//                 "valueSource": [
//                   {
//                     "label": "true",
//                     "value": true
//                   },
//                   {
//                     "label": "false ",
//                     "value": false
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": true
//               },
//               {
//                 "name": "bordered",
//                 "desc": "是否有边框",
//                 "type": "boolean",
//                 "defaultValue": true,
//                 "version": "4.5.0",
//                 "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//                 "showName": "是否有边框",
//                 "label": "是否有边框",
//                 "canEdit": true,
//                 "order": 3,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": true
//               },
//               {
//                 "name": "disabled",
//                 "desc": "禁用",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//                 "showName": "禁用",
//                 "label": "禁用",
//                 "canEdit": true,
//                 "order": 3,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "showEvent": true,
//                 "value": false
//               },
//               {
//                 "name": "readOnly",
//                 "desc": "只读",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//                 "showName": "只读",
//                 "label": "只读",
//                 "canEdit": true,
//                 "order": 3,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "showEvent": true,
//                 "value": false
//               },
//               {
//                 "name": "maxLength",
//                 "desc": "最大长度",
//                 "type": "number",
//                 "defaultValue": "-",
//                 "version": "",
//                 "id": "750af6cc-6c92-4618-91e3-fb4b8013fed7",
//                 "showName": "最大长度",
//                 "label": "最大长度",
//                 "canEdit": true,
//                 "order": 7,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": "-"
//               },
//               {
//                 "name": "size",
//                 "desc": "控件大小。注：标准表单内的输入框大小限制为 large",
//                 "type": "string",
//                 "defaultValue": "middle",
//                 "version": "",
//                 "id": "31d0d0ef-ed8c-46e9-8009-2f7e7e897045",
//                 "showName": "大小",
//                 "label": "大小",
//                 "canEdit": true,
//                 "order": 9,
//                 "valueSource": [
//                   {
//                     "label": "大",
//                     "value": "large"
//                   },
//                   {
//                     "label": "中 ",
//                     "value": "middle"
//                   },
//                   {
//                     "label": "小",
//                     "value": "small"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": "middle"
//               },
//               {
//                 "id": "",
//                 "name": "label",
//                 "showName": "标签",
//                 "desc": "标签",
//                 "label": "标签",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "",
//                 "isNull": true,
//                 "value": "产品名称"
//               },
//               {
//                 "id": "",
//                 "name": "labelAlign",
//                 "showName": "标签对齐方式",
//                 "desc": "标签对齐方式",
//                 "label": "标签对齐方式",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "right",
//                 "isNull": true,
//                 "valueSource": [
//                   {
//                     "label": "左对齐",
//                     "value": "left"
//                   },
//                   {
//                     "label": "右对齐",
//                     "value": "right"
//                   }
//                 ],
//                 "value": "right"
//               },
//               {
//                 "id": "",
//                 "name": "formLayout",
//                 "showName": "标签布局",
//                 "desc": "标签",
//                 "label": "标签",
//                 "order": 1,
//                 "type": "select",
//                 "defaultValue": "horizontal",
//                 "isNull": true,
//                 "valueSource": [
//                   {
//                     "label": "垂直显示",
//                     "value": "vertical"
//                   },
//                   {
//                     "label": "水平显示",
//                     "value": "horizontal"
//                   }
//                 ],
//                 "value": "horizontal"
//               },
//               {
//                 "id": "",
//                 "name": "widthMode",
//                 "showName": "宽度模式",
//                 "desc": "标签",
//                 "label": "标签",
//                 "order": 1,
//                 "type": "select",
//                 "defaultValue": "input",
//                 "isNull": true,
//                 "valueSource": [
//                   {
//                     "label": "占满父容器宽度",
//                     "value": "auto"
//                   },
//                   {
//                     "label": "手动输入固定宽度",
//                     "value": "input"
//                   }
//                 ],
//                 "value": "input"
//               },
//               {
//                 "id": "",
//                 "name": "containerWidth",
//                 "showName": "宽度",
//                 "desc": "宽度",
//                 "label": "宽度",
//                 "order": 1,
//                 "type": "number",
//                 "defaultValue": "300",
//                 "isNull": true,
//                 "ifShow": {
//                   "prop": "widthMode",
//                   "value": "input"
//                 },
//                 "value": "300"
//               },
//               {
//                 "id": "",
//                 "name": "labelColSpan",
//                 "showName": "标签宽度占比",
//                 "desc": "标签宽度，按照24等分",
//                 "label": "标签宽度",
//                 "order": 1,
//                 "type": "number",
//                 "defaultValue": "",
//                 "isNull": true,
//                 "value": ""
//               },
//               {
//                 "id": "",
//                 "name": "labelColOffset",
//                 "showName": "标签偏移",
//                 "desc": "标签偏移，按照24等分",
//                 "label": "标签偏移",
//                 "order": 1,
//                 "type": "number",
//                 "defaultValue": "",
//                 "isNull": true,
//                 "value": ""
//               },
//               {
//                 "id": "",
//                 "name": "wrapperColSpan",
//                 "showName": "组件宽度占比",
//                 "desc": "组件度，按照24等分",
//                 "label": "组件宽度占比",
//                 "order": 1,
//                 "type": "select",
//                 "defaultValue": "",
//                 "isNull": true,
//                 "value": ""
//               },
//               {
//                 "id": "",
//                 "name": "wrapperColOffet",
//                 "showName": "组件偏移",
//                 "desc": "组件偏移，按照24等分",
//                 "label": "组件偏移",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "",
//                 "isNull": true,
//                 "value": ""
//               },
//               {
//                 "id": "",
//                 "name": "visible",
//                 "showName": "可见",
//                 "defaultValue": true,
//                 "desc": "可见",
//                 "label": "可见",
//                 "type": "boolean",
//                 "showEvent": true
//               }
//             ],
//             "event": [
//               {
//                 "showName": "输入变化",
//                 "name": "onChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               },
//               {
//                 "showName": "回车",
//                 "name": "onPressEnter",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               },
//               {
//                 "showName": "点击",
//                 "name": "onClick",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               },
//               {
//                 "showName": "获得输入焦点",
//                 "name": "onFocus",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               }
//             ],
//             "commonStyle": [
//               {
//                 "name": "styleBox",
//                 "showName": "边距",
//                 "value": {},
//                 "defaultValue": {}
//               },
//               {
//                 "name": "border",
//                 "showName": "边框",
//                 "value": {},
//                 "defaultValue": {}
//               },
//               {
//                 "name": "background",
//                 "showName": "背景",
//                 "value": "",
//                 "defaultValue": ""
//               },
//               {
//                 "name": "width",
//                 "showName": "宽度",
//                 "value": "",
//                 "defaultValue": ""
//               },
//               {
//                 "name": "height",
//                 "showName": "高度",
//                 "value": "",
//                 "defaultValue": ""
//               }
//             ],
//             "rules": [],
//             "permissionControl": [
//               {
//                 "name": "visible",
//                 "showName": "可见性",
//                 "label": "可见性",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               },
//               {
//                 "name": "enable",
//                 "showName": "禁用",
//                 "label": "禁用",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               },
//               {
//                 "name": "readonly",
//                 "showName": "只读",
//                 "label": "只读",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               }
//             ],
//             "renderOrder": 1
//           },
//           "pack": "antd",
//           "instanceId": "page_r16mw~Input_3",
//           "parentId": "page_r16mw~grid1_2",
//           "containerId": "page_r16mw",
//           "containerType": 2,
//           "children": []
//         },
//         {
//           "id": "pack_Button",
//           "name": "button",
//           "pack": "antd",
//           "toolbox": {
//             "group": "form",
//             "name": "button",
//             "showName": "button",
//             "order": "",
//             "render": ""
//           },
//           "render": {
//             "name": "button",
//             "parent": "",
//             "render": "",
//             "rowBlock": false,
//             "props": [
//               {
//                 "id": "",
//                 "name": "name",
//                 "showName": "组件备注",
//                 "desc": "组件备注",
//                 "label": "组件备注",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "按钮",
//                 "isNull": true,
//                 "value": "按钮_9"
//               },
//               {
//                 "name": "text",
//                 "desc": "文本",
//                 "type": "string",
//                 "defaultValue": "按钮",
//                 "version": "",
//                 "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//                 "showName": "文本",
//                 "label": "文本",
//                 "canEdit": true,
//                 "order": 1,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "valueSource": [],
//                 "showEvent": true,
//                 "value": "查询"
//               },
//               {
//                 "name": "shape",
//                 "desc": "设置按钮形状",
//                 "type": "select",
//                 "defaultValue": "",
//                 "version": "",
//                 "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//                 "showName": "形状",
//                 "label": "形状",
//                 "canEdit": true,
//                 "order": 8,
//                 "valueSource": [
//                   {
//                     "label": "circle",
//                     "value": "circle"
//                   },
//                   {
//                     "label": "round",
//                     "value": "round"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": ""
//               },
//               {
//                 "name": "size",
//                 "desc": "设置按钮大小",
//                 "type": "select",
//                 "defaultValue": "middle",
//                 "version": "",
//                 "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
//                 "showName": "大小",
//                 "label": "大小",
//                 "canEdit": true,
//                 "order": 9,
//                 "valueSource": [
//                   {
//                     "label": "大",
//                     "value": "large"
//                   },
//                   {
//                     "label": "中",
//                     "value": "middle "
//                   },
//                   {
//                     "label": "小",
//                     "value": "small"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": "middle"
//               },
//               {
//                 "name": "type",
//                 "desc": "设置按钮类型",
//                 "type": "primary | ghost | dashed | link | text | default",
//                 "defaultValue": "primary",
//                 "version": "",
//                 "id": "bffd2494-d9d1-498d-ad23-e4d9cb3df321",
//                 "showName": "类型",
//                 "label": "类型",
//                 "canEdit": true,
//                 "order": 11,
//                 "valueSource": [
//                   {
//                     "label": "primary",
//                     "value": "primary"
//                   },
//                   {
//                     "label": "ghost ",
//                     "value": "ghost "
//                   },
//                   {
//                     "label": "dashed ",
//                     "value": "dashed"
//                   },
//                   {
//                     "label": "link ",
//                     "value": "link "
//                   },
//                   {
//                     "label": "text ",
//                     "value": "text "
//                   },
//                   {
//                     "label": "default",
//                     "value": "default"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": "primary"
//               },
//               {
//                 "name": "icon",
//                 "desc": "图标",
//                 "type": "com",
//                 "defaultValue": "",
//                 "version": "",
//                 "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//                 "showName": "图标",
//                 "label": "图标",
//                 "canEdit": true,
//                 "order": 1,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "customerEditor": "iconSelector",
//                 "value": ""
//               },
//               {
//                 "id": "",
//                 "name": "visible",
//                 "showName": "可见",
//                 "defaultValue": true,
//                 "desc": "可见",
//                 "label": "可见",
//                 "type": "boolean",
//                 "showEvent": true
//               },
//               {
//                 "name": "disabled",
//                 "desc": "禁用",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//                 "showName": "禁用",
//                 "label": "禁用",
//                 "canEdit": true,
//                 "order": 3,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "showEvent": true
//               }
//             ],
//             "event": [
//               {
//                 "showName": "点击事件",
//                 "name": "onClick",
//                 "triggetType": [],
//                 "defaultTriggerType": "",
//                 "pageId": "page_r16mw",
//                 "id": 1172,
//                 "guid": "onClick-page_r16mw~button_9",
//                 "targetId": "page_r16mw~button_9"
//               }
//             ],
//             "commonStyle": [
//               {
//                 "name": "styleBox",
//                 "showName": "边距",
//                 "value": {},
//                 "defaultValue": {}
//               },
//               {
//                 "name": "border",
//                 "showName": "边框",
//                 "value": {},
//                 "defaultValue": {}
//               },
//               {
//                 "name": "background",
//                 "showName": "背景",
//                 "value": "",
//                 "defaultValue": ""
//               },
//               {
//                 "name": "width",
//                 "showName": "宽度",
//                 "value": "",
//                 "defaultValue": ""
//               },
//               {
//                 "name": "height",
//                 "showName": "高度",
//                 "value": "",
//                 "defaultValue": ""
//               }
//             ],
//             "permissionControl": [
//               {
//                 "name": "visible",
//                 "showName": "可见性",
//                 "label": "可见性",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               },
//               {
//                 "name": "enable",
//                 "showName": "禁用",
//                 "label": "禁用",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               },
//               {
//                 "name": "readonly",
//                 "showName": "只读",
//                 "label": "只读",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               }
//             ],
//             "renderOrder": 2
//           },
//           "instanceId": "page_r16mw~button_9",
//           "parentId": "page_r16mw~grid1_2",
//           "containerId": "page_r16mw",
//           "containerType": 2,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": "pack_Grid1",
//       "name": "grid1",
//       "pack": "antd",
//       "toolbox": {
//         "group": "layout",
//         "name": "grid1",
//         "showName": "行容器",
//         "order": "",
//         "render": ""
//       },
//       "render": {
//         "rowBlock": true,
//         "name": "grid1",
//         "parent": "",
//         "render": "",
//         "props": [
//           {
//             "id": "",
//             "name": "name",
//             "showName": "行容器",
//             "desc": "行容器",
//             "label": "行容器",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "行容器",
//             "isNull": true,
//             "value": "行容器_8"
//           },
//           {
//             "id": "",
//             "name": "justify-content",
//             "showName": "水平对齐方式",
//             "desc": "水平对齐方式",
//             "label": "水平对齐方式",
//             "order": 1,
//             "type": "select",
//             "defaultValue": "flex-start",
//             "valueSource": [
//               {
//                 "label": "左对齐",
//                 "value": "flex-start"
//               },
//               {
//                 "label": "右对齐",
//                 "value": "flex-end"
//               },
//               {
//                 "label": "居中对齐",
//                 "value": "center"
//               }
//             ],
//             "isNull": true
//           },
//           {
//             "id": "",
//             "name": "gap",
//             "showName": "子元素间距(像素)",
//             "desc": "子元素间距(像素)",
//             "label": "子元素间距(像素)",
//             "order": 1,
//             "type": "number",
//             "defaultValue": "12",
//             "isNull": true
//           },
//           {
//             "id": "",
//             "name": "proOpen",
//             "showName": "高级模式可见",
//             "desc": "高级模式可见",
//             "label": "高级模式可见",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": false,
//             "isNull": true
//           },
//           {
//             "id": "",
//             "name": "visible",
//             "showName": "可见",
//             "defaultValue": true,
//             "desc": "可见",
//             "label": "可见",
//             "type": "boolean",
//             "showEvent": true
//           }
//         ],
//         "commonStyle": [
//           {
//             "name": "styleBox",
//             "showName": "边距",
//             "value": {
//               "marginBottom": "14"
//             }
//           },
//           {
//             "name": "border",
//             "showName": "边框",
//             "defaultValue": {}
//           },
//           {
//             "name": "background",
//             "showName": "背景",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "height",
//             "showName": "高度",
//             "value": "",
//             "defaultValue": ""
//           }
//         ],
//         "renderOrder": 2,
//         "event": [],
//         "permissionControl": []
//       },
//       "instanceId": "page_r16mw~grid1_8",
//       "parentId": "page_r16mw",
//       "containerId": "page_r16mw",
//       "containerType": 2,
//       "children": [
//         {
//           "id": "pack_Button",
//           "name": "button",
//           "pack": "antd",
//           "toolbox": {
//             "group": "form",
//             "name": "button",
//             "showName": "按钮",
//             "order": "",
//             "render": ""
//           },
//           "render": {
//             "name": "button",
//             "parent": "",
//             "render": "",
//             "rowBlock": false,
//             "props": [
//               {
//                 "id": "",
//                 "name": "name",
//                 "showName": "组件备注",
//                 "desc": "组件备注",
//                 "label": "组件备注",
//                 "order": 1,
//                 "type": "string",
//                 "defaultValue": "按钮",
//                 "isNull": true,
//                 "value": "新建产品按钮_13"
//               },
//               {
//                 "name": "text",
//                 "desc": "文本",
//                 "type": "string",
//                 "defaultValue": "按钮",
//                 "version": "",
//                 "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//                 "showName": "文本",
//                 "label": "文本",
//                 "canEdit": true,
//                 "order": 1,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "valueSource": [],
//                 "showEvent": true,
//                 "value": "新建产品"
//               },
//               {
//                 "name": "shape",
//                 "desc": "设置按钮形状",
//                 "type": "select",
//                 "defaultValue": "",
//                 "version": "",
//                 "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//                 "showName": "形状",
//                 "label": "形状",
//                 "canEdit": true,
//                 "order": 8,
//                 "valueSource": [
//                   {
//                     "label": "circle",
//                     "value": "circle"
//                   },
//                   {
//                     "label": "round",
//                     "value": "round"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": ""
//               },
//               {
//                 "name": "size",
//                 "desc": "设置按钮大小",
//                 "type": "select",
//                 "defaultValue": "middle",
//                 "version": "",
//                 "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
//                 "showName": "大小",
//                 "label": "大小",
//                 "canEdit": true,
//                 "order": 9,
//                 "valueSource": [
//                   {
//                     "label": "大",
//                     "value": "large"
//                   },
//                   {
//                     "label": "中",
//                     "value": "middle "
//                   },
//                   {
//                     "label": "小",
//                     "value": "small"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": "middle"
//               },
//               {
//                 "name": "type",
//                 "desc": "设置按钮类型",
//                 "type": "primary | ghost | dashed | link | text | default",
//                 "defaultValue": "primary",
//                 "version": "",
//                 "id": "bffd2494-d9d1-498d-ad23-e4d9cb3df321",
//                 "showName": "类型",
//                 "label": "类型",
//                 "canEdit": true,
//                 "order": 11,
//                 "valueSource": [
//                   {
//                     "label": "primary",
//                     "value": "primary"
//                   },
//                   {
//                     "label": "ghost ",
//                     "value": "ghost "
//                   },
//                   {
//                     "label": "dashed ",
//                     "value": "dashed"
//                   },
//                   {
//                     "label": "link ",
//                     "value": "link "
//                   },
//                   {
//                     "label": "text ",
//                     "value": "text "
//                   },
//                   {
//                     "label": "default",
//                     "value": "default"
//                   }
//                 ],
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "value": "primary"
//               },
//               {
//                 "name": "icon",
//                 "desc": "图标",
//                 "type": "com",
//                 "defaultValue": "",
//                 "version": "",
//                 "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
//                 "showName": "图标",
//                 "label": "图标",
//                 "canEdit": true,
//                 "order": 1,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "customerEditor": "iconSelector",
//                 "value": ""
//               },
//               {
//                 "id": "",
//                 "name": "visible",
//                 "showName": "可见",
//                 "defaultValue": true,
//                 "desc": "可见",
//                 "label": "可见",
//                 "type": "boolean",
//                 "showEvent": true
//               },
//               {
//                 "name": "disabled",
//                 "desc": "禁用",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
//                 "showName": "禁用",
//                 "label": "禁用",
//                 "canEdit": true,
//                 "order": 3,
//                 "group": "基本属性",
//                 "groupType": "common",
//                 "showEvent": true
//               }
//             ],
//             "event": [
//               {
//                 "showName": "点击事件",
//                 "name": "onClick",
//                 "triggetType": [],
//                 "defaultTriggerType": "",
//                 "pageId": "page_r16mw",
//                 "id": 1169,
//                 "guid": "onClick-page_r16mw~button_13",
//                 "targetId": "page_r16mw~button_13"
//               }
//             ],
//             "commonStyle": [
//               {
//                 "name": "styleBox",
//                 "showName": "边距",
//                 "value": {},
//                 "defaultValue": {}
//               },
//               {
//                 "name": "border",
//                 "showName": "边框",
//                 "value": {},
//                 "defaultValue": {}
//               },
//               {
//                 "name": "background",
//                 "showName": "背景",
//                 "value": "",
//                 "defaultValue": ""
//               },
//               {
//                 "name": "width",
//                 "showName": "宽度",
//                 "value": "",
//                 "defaultValue": ""
//               },
//               {
//                 "name": "height",
//                 "showName": "高度",
//                 "value": "",
//                 "defaultValue": ""
//               }
//             ],
//             "permissionControl": [
//               {
//                 "name": "visible",
//                 "showName": "可见性",
//                 "label": "可见性",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               },
//               {
//                 "name": "enable",
//                 "showName": "禁用",
//                 "label": "禁用",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               },
//               {
//                 "name": "readonly",
//                 "showName": "只读",
//                 "label": "只读",
//                 "type": "boolean",
//                 "defaultValue": false,
//                 "value": false
//               }
//             ],
//             "renderOrder": 1
//           },
//           "instanceId": "page_r16mw~button_13",
//           "parentId": "page_r16mw~grid1_8",
//           "containerId": "page_r16mw",
//           "containerType": 2,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": "pack_Table",
//       "name": "Table",
//       "toolbox": {
//         "group": "data",
//         "name": "Table",
//         "showName": "表格",
//         "order": "",
//         "render": ""
//       },
//       "render": {
//         "name": "Table",
//         "parent": "table",
//         "render": "",
//         "rowBlock": true,
//         "props": [
//           {
//             "id": "",
//             "name": "name",
//             "showName": "组件备注",
//             "desc": "组件备注",
//             "label": "组件备注",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "表格",
//             "isNull": true,
//             "value": "表格_18"
//           },
//           {
//             "id": "",
//             "name": "bordered",
//             "showName": "显示外边框和列边框",
//             "desc": "显示外边框和列边框",
//             "label": "显示外边框和列边框",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": true,
//             "isNull": true,
//             "value": true
//           },
//           {
//             "name": "size",
//             "desc": "尺寸",
//             "type": "select",
//             "defaultValue": "middle",
//             "version": "",
//             "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
//             "showName": "尺寸",
//             "label": "尺寸",
//             "canEdit": true,
//             "order": 9,
//             "valueSource": [
//               {
//                 "label": "大",
//                 "value": "large"
//               },
//               {
//                 "label": "中",
//                 "value": "middle "
//               },
//               {
//                 "label": "小",
//                 "value": "small"
//               }
//             ],
//             "group": "基本属性",
//             "groupType": "common",
//             "value": "middle"
//           },
//           {
//             "id": "",
//             "name": "rowKey",
//             "showName": "行数据唯一标记",
//             "desc": "行数据唯一标记",
//             "label": "组件备注",
//             "order": 1,
//             "type": "string",
//             "defaultValue": "id",
//             "isNull": true,
//             "value": "id"
//           },
//           {
//             "id": "",
//             "name": "columns",
//             "showName": "columns",
//             "desc": "列编辑",
//             "label": "columns",
//             "order": 1,
//             "type": "table_columns_edit",
//             "defaultValue": [
//               {
//                 "title": "姓名",
//                 "dataIndex": "name",
//                 "key": "name",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 1
//               },
//               {
//                 "title": "年龄",
//                 "dataIndex": "age",
//                 "key": "age",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 2
//               },
//               {
//                 "title": "住址",
//                 "dataIndex": "address",
//                 "key": "address",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 3
//               }
//             ],
//             "isNull": true,
//             "value": [
//               {
//                 "title": "id",
//                 "dataIndex": "id",
//                 "ref_col": "id",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 5,
//                 "showTable": false,
//                 "key": "18dc2b56-94c1-46a1-87e8-05dc7eadfd2d",
//                 "fixed": false
//               },
//               {
//                 "title": "产品名称",
//                 "dataIndex": "name",
//                 "ref_col": "name",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 6,
//                 "showTable": true,
//                 "key": "5ac22d8c-eee6-4b3f-9e58-5de09e2e4d24",
//                 "fixed": false
//               },
//               {
//                 "title": "产品唯一编码",
//                 "dataIndex": "guid",
//                 "ref_col": "guid",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 7,
//                 "showTable": true,
//                 "key": "3ea233ac-6701-40fb-b5b3-4a729f662207",
//                 "fixed": false
//               },
//               {
//                 "title": "产品版本号",
//                 "dataIndex": "version",
//                 "ref_col": "version",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 8,
//                 "showTable": true,
//                 "key": "375ae082-aedc-417f-8307-49afe5968705",
//                 "fixed": false
//               },
//               {
//                 "title": "产品类型",
//                 "dataIndex": "type",
//                 "ref_col": "type",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 10,
//                 "showTable": true,
//                 "key": "a23e198b-88d5-4ca4-8c2a-93ac83e758b7",
//                 "fixed": false
//               },
//               {
//                 "title": "产品说明",
//                 "dataIndex": "note",
//                 "ref_col": "note",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 11,
//                 "showTable": true,
//                 "key": "dcdeedca-1662-40b3-b6dd-7718f7721486",
//                 "fixed": false
//               },
//               {
//                 "title": "产品初始化sql",
//                 "dataIndex": "initsql",
//                 "ref_col": "initsql",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 12,
//                 "showTable": false,
//                 "key": "f49747f0-f980-42b6-aae1-5b35e7128fc6",
//                 "fixed": false
//               },
//               {
//                 "title": "创建人id",
//                 "dataIndex": "createuserid",
//                 "ref_col": "createuserid",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 13,
//                 "showTable": false,
//                 "key": "b4d70040-620a-4136-a64f-24c9d9d0658c",
//                 "fixed": false
//               },
//               {
//                 "title": "创建时间",
//                 "dataIndex": "createtime",
//                 "ref_col": "createtime",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 15,
//                 "showTable": false,
//                 "key": "76661e82-fdf8-4f65-b536-f7fdc714edfb",
//                 "fixed": false
//               },
//               {
//                 "title": "最后一次更新时间",
//                 "dataIndex": "updattime",
//                 "ref_col": "updattime",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 17,
//                 "showTable": false,
//                 "key": "38b8ce1d-0042-46cf-8a03-1ca50b8c21c3",
//                 "fixed": false
//               },
//               {
//                 "title": "最后一次更新用户id",
//                 "dataIndex": "updateuserid",
//                 "ref_col": "updateuserid",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 18,
//                 "showTable": false,
//                 "key": "dacd4f14-1bed-42b8-b9e3-29eaf1a32886",
//                 "fixed": false
//               },
//               {
//                 "title": "是否是代理",
//                 "dataIndex": "is_proxy",
//                 "ref_col": "is_proxy",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 19,
//                 "showTable": false,
//                 "key": "9f5d9d9c-cd7e-4958-872f-9338ab4f624f",
//                 "fixed": false
//               },
//               {
//                 "title": "归属租户id",
//                 "dataIndex": "zuhu_id",
//                 "ref_col": "zuhu_id",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 20,
//                 "showTable": false,
//                 "key": "75d6df62-dcaf-463b-8fbd-7a147e04dcfa",
//                 "fixed": false
//               },
//               {
//                 "title": "操作",
//                 "dataIndex": "data3",
//                 "width": 200,
//                 "_mocha_col_orderNumber": 21,
//                 "fixed": false,
//                 "showTable": true,
//                 "key": "ddc694e8-d30c-4d8e-b639-13d8c25d730a",
//                 "_mocha_col_render": {
//                   "showName": "自定义渲染",
//                   "name": "render",
//                   "render": {
//                     "renderType": "area",
//                     "content": "page_r16mw~area_m3tin"
//                   }
//                 }
//               }
//             ]
//           },
//           {
//             "id": "",
//             "name": "rowSelection",
//             "showName": "行数据选择配置",
//             "desc": "行数据选择配置",
//             "label": "行数据选择配置",
//             "order": 1,
//             "type": "table_rowselection",
//             "isNull": true,
//             "customerEditor": "RowSelection",
//             "events": [
//               {
//                 "showName": "选择事件",
//                 "name": "onChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               }
//             ]
//           },
//           {
//             "id": "",
//             "name": "ref_table",
//             "showName": "关联表",
//             "desc": "关联表",
//             "label": "关联表",
//             "order": 1,
//             "type": "r_table",
//             "isNull": true,
//             "editor": false,
//             "value": "chanpin"
//           },
//           {
//             "id": "",
//             "name": "showPagination",
//             "showName": "显示分页",
//             "desc": "显示分页",
//             "label": "显示分页",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "serverPage",
//             "showName": "服务端分页/排序",
//             "desc": "服务端分页",
//             "label": "服务端分页",
//             "order": 1,
//             "type": "boolean",
//             "defaultValue": true,
//             "value": true
//           },
//           {
//             "id": "",
//             "name": "pagination",
//             "showName": "分页配置",
//             "desc": "分页配置",
//             "label": "分页配置",
//             "order": 1,
//             "type": "table_pagination",
//             "defaultValue": {
//               "pagination": true,
//               "position": "bottomRight",
//               "pageSize": 15,
//               "showQuickJumper": true,
//               "size": "default",
//               "current": 1,
//               "simple": false,
//               "showSizeChanger": true,
//               "total": 0
//             },
//             "isNull": true,
//             "events": [
//               {
//                 "showName": "页码事件",
//                 "name": "onChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               },
//               {
//                 "showName": "页大小事件",
//                 "name": "onShowSizeChange",
//                 "triggetType": [],
//                 "defaultTriggerType": ""
//               }
//             ],
//             "customerEditor": "paginationEditor",
//             "ifShow": {
//               "prop": "showPagination",
//               "value": true
//             },
//             "value": {
//               "pagination": true,
//               "position": "bottomRight",
//               "pageSize": 15,
//               "showQuickJumper": true,
//               "size": "default",
//               "simple": false,
//               "current": 1,
//               "showSizeChanger": true,
//               "total": 0
//             }
//           },
//           {
//             "id": "",
//             "name": "scroll",
//             "showName": "表格滚动配置",
//             "desc": "表格滚动配置",
//             "label": "表格滚动配置",
//             "order": 1,
//             "type": "table_scroll",
//             "defaultValue": {
//               "scrollToFirstRowOnChange": true,
//               "x": false,
//               "width": "",
//               "height": "",
//               "y": false
//             },
//             "isNull": true,
//             "customerEditor": "ScrollEditor",
//             "value": {
//               "scrollToFirstRowOnChange": true,
//               "width": "",
//               "height": ""
//             }
//           },
//           {
//             "id": "",
//             "name": "totalCount",
//             "showName": "总页数",
//             "value": null,
//             "defaultValue": 0,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "pageSize",
//             "showName": "每页数量",
//             "value": null,
//             "defaultValue": 10,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "pageIndex",
//             "showName": "当前页码",
//             "value": null,
//             "defaultValue": 1,
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "filter",
//             "showName": "筛选字段",
//             "value": null,
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "filter_value",
//             "showName": "筛选字段内容",
//             "value": null,
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "sorter",
//             "showName": "排序字段",
//             "value": null,
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "sortOrder",
//             "showName": "排序方式",
//             "value": null,
//             "defaultValue": "",
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "selected",
//             "showName": "选中的数据",
//             "value": [],
//             "defaultValue": [],
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "selectedRowKeys",
//             "showName": "选中的数据key",
//             "value": [],
//             "defaultValue": [],
//             "editor": false,
//             "showEvent": true
//           },
//           {
//             "id": "",
//             "name": "visible",
//             "showName": "可见",
//             "defaultValue": true,
//             "desc": "可见",
//             "label": "可见",
//             "type": "boolean",
//             "showEvent": true,
//             "value": true
//           }
//         ],
//         "event": [
//           {
//             "showName": "选择事件",
//             "name": "onSelectChange",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "行单击",
//             "name": "rowClick",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           },
//           {
//             "showName": "行双击",
//             "name": "rowDoubleClick",
//             "triggetType": [],
//             "defaultTriggerType": ""
//           }
//         ],
//         "datasource": {
//           "type": "request",
//           "bindingPropName": "treeData",
//           "customerData": [
//             {
//               "key": "1",
//               "name": "name_1",
//               "age": 1,
//               "address": "address_1"
//             },
//             {
//               "key": "2",
//               "name": "name_2",
//               "age": 2,
//               "address": "address_2"
//             },
//             {
//               "key": "3",
//               "name": "name_3",
//               "age": 3,
//               "address": "address_3"
//             }
//           ],
//           "request": {
//             "eventInfo": {
//               "showName": "获取数据",
//               "name": "getData",
//               "triggetType": "",
//               "defaultTriggerType": "",
//               "pageid": "page_r16mw",
//               "guid": "getData-page_r16mw~Table_18",
//               "app_id": "yqdw4",
//               "version": "master",
//               "type": 100,
//               "targetid": "page_r16mw~Table_18",
//               "visual": 1
//             }
//           }
//         },
//         "commonStyle": [
//           {
//             "name": "styleBox",
//             "showName": "边距",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "border",
//             "showName": "边框",
//             "value": {},
//             "defaultValue": {}
//           },
//           {
//             "name": "background",
//             "showName": "背景",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "width",
//             "showName": "宽度",
//             "value": "",
//             "defaultValue": ""
//           },
//           {
//             "name": "height",
//             "showName": "高度",
//             "value": "",
//             "defaultValue": ""
//           }
//         ],
//         "permissionControl": [
//           {
//             "name": "visible",
//             "showName": "可见性",
//             "label": "可见性",
//             "type": "boolean",
//             "defaultValue": false,
//             "value": false
//           }
//         ],
//         "renderOrder": 3,
//         "rules": []
//       },
//       "pack": "antd",
//       "instanceId": "page_r16mw~Table_18",
//       "parentId": "page_r16mw",
//       "containerId": "page_r16mw",
//       "containerType": 2,
//       "children": []
//     }
//   ],
//   "deleteData": []
// }

export default {
  "id": "page_r16mw",
  "type": 1,
  "root": {
    "id": "mocha-page",
    "name": "page",
    "toolbox": {
      "group": "",
      "name": "page",
      "showName": "page",
      "order": "",
      "render": ""
    },
    "render": {
      "name": "page",
      "parent": "",
      "render": "",
      "props": [
        {
          "id": "",
          "name": "title",
          "showName": "页面标题",
          "desc": "页面标题",
          "label": "页面标题",
          "order": 1,
          "type": "string",
          "defaultValue": "页面标题",
          "isNull": true,
          "value": "页面标题"
        },
        {
          "id": "",
          "name": "widthModel",
          "showName": "自适应",
          "desc": "自适应",
          "label": "自适应",
          "order": 1,
          "type": "boolean",
          "defaultValue": true,
          "isNull": true,
          "value": true
        },
        {
          "id": "",
          "name": "maxWidth",
          "showName": "页面最大宽度",
          "desc": "页面最大宽度",
          "label": "页面最大宽度",
          "order": 1,
          "type": "number",
          "defaultValue": 1000,
          "isNull": true,
          "ifShow": {
            "prop": "widthModel",
            "value": false
          },
          "value": 1000
        },
        {
          "id": "",
          "name": "maxHeight",
          "showName": "页面最大高度",
          "desc": "页面最大高度",
          "label": "页面最大高度",
          "order": 1,
          "type": "number",
          "defaultValue": 1000,
          "isNull": true,
          "value": 1000
        },
        {
          "id": "",
          "name": "algin",
          "showName": "对齐方式",
          "desc": "对齐方式",
          "label": "对齐方式",
          "order": 1,
          "type": "select",
          "defaultValue": "center",
          "isNull": true,
          "valueSource": [
            {
              "value": "center",
              "label": "居中显示"
            },
            {
              "value": "left",
              "label": "居左显示"
            },
            {
              "value": "right",
              "label": "居右显示"
            }
          ],
          "ifShow": {
            "prop": "widthModel",
            "value": false
          },
          "value": "center"
        }
      ],
      "commonStyle": [
        {
          "name": "styleBox",
          "showName": "边距",
          "value": {
            "marginTop": "16",
            "marginRight": "16",
            "marginBottom": "16",
            "marginLeft": "16",
            "paddingTop": "16",
            "paddingRight": "16",
            "paddingBottom": "16",
            "paddingLeft": "16"
          },
          "defaultValue": {}
        },
        {
          "name": "border",
          "showName": "边框",
          "value": {},
          "defaultValue": {}
        },
        {
          "name": "background",
          "showName": "背景",
          "value": "rgba(255,255,255,1)",
          "defaultValue": ""
        }
      ],
      "event": [
        {
          "showName": "子页初始化事件",
          "name": "page_init",
          "triggetType": [],
          "defaultTriggerType": "",
          "pageId": "page_r16mw",
          "id": 1171,
          "guid": "page_init-page_r16mw",
          "targetId": "page_r16mw",
          "auto": [
            "getData-page_r16mw~Table_12",
            "getData-page_r16mw~Table_18"
          ]
        },
        {
          "showName": "子页离开事件",
          "name": "page_leave",
          "triggetType": [],
          "defaultTriggerType": ""
        },
        {
          "showName": "子页收到websocket事件",
          "name": "page_websocket_recive",
          "triggetType": [],
          "defaultTriggerType": ""
        }
      ]
    },
    "instanceId": "page_r16mw",
    "maxIndex": 18
  },
  "data": [
    {
      "id": "pack_Input",
      "name": "Input",
      "toolbox": {
        "group": "form",
        "name": "Input",
        "showName": "Input",
        "order": "",
        "render": ""
      },
      "render": {
        "name": "Input",
        "parent": "input",
        "render": "",
        "isFormData": true,
        "layout": {
          "w": 3,
          "h": 1,
          "x": 0,
          "y": 0,
          "i": "page_r16mw~Input_3",
          "minW": 2,
          "moved": false,
          "static": false,
          "isDraggable": true,
          "text": "Input"
        },
        "props": [
          {
            "id": "",
            "name": "name",
            "showName": "组件备注",
            "desc": "组件备注",
            "label": "组件备注",
            "order": 1,
            "type": "string",
            "defaultValue": "文本框",
            "isNull": true,
            "value": "产品名称文本框_3"
          },
          {
            "id": "",
            "name": "value",
            "showName": "文本框内容",
            "desc": "文本框内容",
            "label": "文本框内容",
            "order": 1,
            "type": "string",
            "defaultValue": "",
            "isNull": true,
            "showEvent": true,
            "value": ""
          },
          {
            "name": "allowClear",
            "desc": "可以点击清除图标删除内容",
            "type": "boolean",
            "defaultValue": false,
            "version": "",
            "id": "4d4c2217-f3f2-4556-89fe-6fff594a8451",
            "showName": "可清除",
            "label": "可清除",
            "canEdit": true,
            "order": 2,
            "valueSource": [
              {
                "label": "true",
                "value": true
              },
              {
                "label": "false ",
                "value": false
              }
            ],
            "group": "基本属性",
            "groupType": "common",
            "value": true
          },
          {
            "name": "bordered",
            "desc": "是否有边框",
            "type": "boolean",
            "defaultValue": true,
            "version": "4.5.0",
            "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
            "showName": "是否有边框",
            "label": "是否有边框",
            "canEdit": true,
            "order": 3,
            "group": "基本属性",
            "groupType": "common",
            "value": true
          },
          {
            "name": "disabled",
            "desc": "禁用",
            "type": "boolean",
            "defaultValue": false,
            "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
            "showName": "禁用",
            "label": "禁用",
            "canEdit": true,
            "order": 3,
            "group": "基本属性",
            "groupType": "common",
            "showEvent": true,
            "value": false
          },
          {
            "name": "readOnly",
            "desc": "只读",
            "type": "boolean",
            "defaultValue": false,
            "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
            "showName": "只读",
            "label": "只读",
            "canEdit": true,
            "order": 3,
            "group": "基本属性",
            "groupType": "common",
            "showEvent": true,
            "value": false
          },
          {
            "name": "maxLength",
            "desc": "最大长度",
            "type": "number",
            "defaultValue": "-",
            "version": "",
            "id": "750af6cc-6c92-4618-91e3-fb4b8013fed7",
            "showName": "最大长度",
            "label": "最大长度",
            "canEdit": true,
            "order": 7,
            "group": "基本属性",
            "groupType": "common",
            "value": "-"
          },
          {
            "id": "",
            "name": "showLoading",
            "showName": "显示加载状态",
            "desc": "显示加载状态",
            "label": "显示加载状态",
            "order": 1,
            "type": "boolean",
            "defaultValue": false,
            "isNull": true,
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "showLoadingText",
            "showName": "加载状态提示文字",
            "desc": "加载状态提示文字",
            "label": "加载状态提示文字",
            "order": 1,
            "type": "string",
            "defaultValue": "",
            "isNull": true,
            "editor": false,
            "showEvent": true
          }
        ],
        "event": [
          {
            "showName": "输入变化",
            "name": "onChange",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "回车",
            "name": "onPressEnter",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "点击",
            "name": "onClick",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "获得输入焦点",
            "name": "onFocus",
            "triggetType": [],
            "defaultTriggerType": ""
          }
        ],
        "commonStyle": [
          {
            "name": "styleBox",
            "showName": "边距",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "border",
            "showName": "边框",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "background",
            "showName": "背景",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "width",
            "showName": "宽度",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "height",
            "showName": "高度",
            "value": "",
            "defaultValue": ""
          }
        ],
        "rules": [],
        "permissionControl": [
          {
            "name": "visible",
            "showName": "可见性",
            "label": "可见性",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          },
          {
            "name": "enable",
            "showName": "禁用",
            "label": "禁用",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          },
          {
            "name": "readonly",
            "showName": "只读",
            "label": "只读",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          }
        ],
        "renderOrder": 1
      },
      "pack": "antd",
      "instanceId": "page_r16mw~Input_3",
      "parentId": "page_r16mw~grid1_2",
      "containerId": "page_r16mw",
      "containerType": 2
    },
    {
      "id": "pack_Button",
      "name": "button",
      "pack": "antd",
      "toolbox": {
        "group": "form",
        "name": "button",
        "showName": "按钮",
        "order": "",
        "render": ""
      },
      "render": {
        "name": "button",
        "parent": "",
        "render": "",
        "rowBlock": false,
        "layout": {
          "w": 3,
          "h": 1,
          "x": 9,
          "y": 15,
          "i": "page_r16mw~button_13",
          "minW": 2,
          "moved": false,
          "static": false,
          "isDraggable": true,
          "text": "按钮"
        },
        "props": [
          {
            "id": "",
            "name": "name",
            "showName": "组件备注",
            "desc": "组件备注",
            "label": "组件备注",
            "order": 1,
            "type": "string",
            "defaultValue": "按钮",
            "isNull": true,
            "value": "新建产品按钮_14"
          },
          {
            "name": "text",
            "desc": "文本",
            "type": "string",
            "defaultValue": "按钮",
            "version": "",
            "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
            "showName": "文本",
            "label": "文本",
            "canEdit": true,
            "order": 1,
            "group": "基本属性",
            "groupType": "common",
            "valueSource": [],
            "showEvent": true,
            "value": "新建产品testaaaaa"
          },
          {
            "name": "shape",
            "desc": "设置按钮形状",
            "type": "select",
            "defaultValue": "",
            "version": "",
            "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
            "showName": "形状",
            "label": "形状",
            "canEdit": true,
            "order": 8,
            "valueSource": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "round",
                "value": "round"
              }
            ],
            "group": "基本属性",
            "groupType": "common",
            "value": "circle"
          },
          {
            "name": "size",
            "desc": "设置按钮大小",
            "type": "select",
            "defaultValue": "middle",
            "version": "",
            "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
            "showName": "大小",
            "label": "大小",
            "canEdit": true,
            "order": 9,
            "valueSource": [
              {
                "label": "大",
                "value": "large"
              },
              {
                "label": "中",
                "value": "middle "
              },
              {
                "label": "小",
                "value": "small"
              }
            ],
            "group": "基本属性",
            "groupType": "common",
            "value": "large"
          },
          {
            "name": "type",
            "desc": "设置按钮类型",
            "type": "primary | ghost | dashed | link | text | default",
            "defaultValue": "primary",
            "version": "",
            "id": "bffd2494-d9d1-498d-ad23-e4d9cb3df321",
            "showName": "类型",
            "label": "类型",
            "canEdit": true,
            "order": 11,
            "valueSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "ghost ",
                "value": "ghost "
              },
              {
                "label": "dashed ",
                "value": "dashed"
              },
              {
                "label": "link ",
                "value": "link "
              },
              {
                "label": "text ",
                "value": "text "
              },
              {
                "label": "default",
                "value": "default"
              }
            ],
            "group": "基本属性",
            "groupType": "common",
            "value": "ghost "
          },
          {
            "name": "icon",
            "desc": "图标",
            "type": "com",
            "defaultValue": "",
            "version": "",
            "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
            "showName": "图标",
            "label": "图标",
            "canEdit": true,
            "order": 1,
            "group": "基本属性",
            "groupType": "common",
            "customerEditor": "iconSelector",
            "value": ""
          },
          {
            "id": "",
            "name": "visible",
            "showName": "可见",
            "defaultValue": true,
            "desc": "可见",
            "label": "可见",
            "type": "boolean",
            "showEvent": true,
            "value": true
          },
          {
            "name": "disabled",
            "desc": "禁用",
            "type": "boolean",
            "defaultValue": false,
            "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
            "showName": "禁用",
            "label": "禁用",
            "canEdit": true,
            "order": 3,
            "group": "基本属性",
            "groupType": "common",
            "showEvent": true,
            "value": ""
          },
          {
            "id": "",
            "name": "showLoading",
            "showName": "显示加载状态",
            "desc": "显示加载状态",
            "label": "显示加载状态",
            "order": 1,
            "type": "boolean",
            "defaultValue": false,
            "isNull": true,
            "editor": false,
            "showEvent": true,
            "value": true
          },
          {
            "id": "",
            "name": "showLoadingText",
            "showName": "加载状态提示文字",
            "desc": "加载状态提示文字",
            "label": "加载状态提示文字",
            "order": 1,
            "type": "string",
            "defaultValue": "",
            "isNull": true,
            "editor": false,
            "showEvent": true,
            "value": "vsvsdcdcloading time..."
          }
        ],
        "event": [
          {
            "eventName": "onClick",
            "showName": "点击事件",
            "eventConfigs": [
              {
                "eventName": "changeValue",
                "showName": "更改值",
                "formName": "page_r16mw~Input_3",
                "formValue": "你好啊"
              }
            ]
          }
        ],
        "commonStyle": [
          {
            "name": "styleBox",
            "showName": "边距",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "border",
            "showName": "边框",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "background",
            "showName": "背景",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "width",
            "showName": "宽度",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "height",
            "showName": "高度",
            "value": "",
            "defaultValue": ""
          }
        ],
        "permissionControl": [
          {
            "name": "visible",
            "showName": "可见性",
            "label": "可见性",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          },
          {
            "name": "enable",
            "showName": "禁用",
            "label": "禁用",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          },
          {
            "name": "readonly",
            "showName": "只读",
            "label": "只读",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          }
        ],
        "renderOrder": 1
      },
      "instanceId": "page_r16mw~button_13",
      "parentId": "page_r16mw~grid1_8",
      "containerId": "page_r16mw",
      "containerType": 2
    },
    {
      "id": "pack_Table",
      "name": "Table",
      "toolbox": {
        "group": "data",
        "name": "Table",
        "showName": "表格",
        "order": "",
        "render": ""
      },
      "render": {
        "name": "Table",
        "parent": "table",
        "render": "",
        "rowBlock": true,
        "layout": {
          "w": 3,
          "h": 1,
          "x": 0,
          "y": 3,
          "i": "page_r16mw~Table_18",
          "minW": 2,
          "moved": false,
          "static": false,
          "isDraggable": true,
          "text": "表格"
        },
        "props": [
          {
            "id": "",
            "name": "name",
            "showName": "组件备注",
            "desc": "组件备注",
            "label": "组件备注",
            "order": 1,
            "type": "string",
            "defaultValue": "表格",
            "isNull": true,
            "value": "表格_18"
          },
          {
            "id": "",
            "name": "bordered",
            "showName": "显示外边框和列边框",
            "desc": "显示外边框和列边框",
            "label": "显示外边框和列边框",
            "order": 1,
            "type": "boolean",
            "defaultValue": true,
            "isNull": true,
            "value": true
          },
          {
            "id": "",
            "name": "rowKey",
            "showName": "行数据唯一标记",
            "desc": "行数据唯一标记",
            "label": "组件备注",
            "order": 1,
            "type": "string",
            "defaultValue": "id",
            "isNull": true,
            "value": "id"
          },
          {
            "id": "",
            "name": "columns",
            "showName": "columns",
            "desc": "列编辑",
            "label": "columns",
            "order": 1,
            "type": "table_columns_edit",
            "defaultValue": [
              {
                "title": "姓名",
                "dataIndex": "name",
                "key": "name",
                "width": 200,
                "_mocha_col_orderNumber": 1
              },
              {
                "title": "年龄",
                "dataIndex": "age",
                "key": "age",
                "width": 200,
                "_mocha_col_orderNumber": 2
              },
              {
                "title": "住址",
                "dataIndex": "address",
                "key": "address",
                "width": 200,
                "_mocha_col_orderNumber": 3
              }
            ],
            "isNull": true,
            "value": [
              {
                "title": "id",
                "dataIndex": "id",
                "ref_col": "id",
                "width": 200,
                "_mocha_col_orderNumber": 5,
                "showTable": false,
                "key": "18dc2b56-94c1-46a1-87e8-05dc7eadfd2d",
                "fixed": false
              },
              {
                "title": "产品名称",
                "dataIndex": "name",
                "ref_col": "name",
                "width": 200,
                "_mocha_col_orderNumber": 6,
                "showTable": true,
                "key": "5ac22d8c-eee6-4b3f-9e58-5de09e2e4d24",
                "fixed": false
              },
              {
                "title": "产品唯一编码",
                "dataIndex": "guid",
                "ref_col": "guid",
                "width": 200,
                "_mocha_col_orderNumber": 7,
                "showTable": true,
                "key": "3ea233ac-6701-40fb-b5b3-4a729f662207",
                "fixed": false
              },
              {
                "title": "产品版本号",
                "dataIndex": "version",
                "ref_col": "version",
                "width": 200,
                "_mocha_col_orderNumber": 8,
                "showTable": true,
                "key": "375ae082-aedc-417f-8307-49afe5968705",
                "fixed": false
              },
              {
                "title": "产品类型",
                "dataIndex": "type",
                "ref_col": "type",
                "width": 200,
                "_mocha_col_orderNumber": 10,
                "showTable": true,
                "key": "a23e198b-88d5-4ca4-8c2a-93ac83e758b7",
                "fixed": false
              },
              {
                "title": "产品说明",
                "dataIndex": "note",
                "ref_col": "note",
                "width": 200,
                "_mocha_col_orderNumber": 11,
                "showTable": true,
                "key": "dcdeedca-1662-40b3-b6dd-7718f7721486",
                "fixed": false
              },
              {
                "title": "产品初始化sql",
                "dataIndex": "initsql",
                "ref_col": "initsql",
                "width": 200,
                "_mocha_col_orderNumber": 12,
                "showTable": false,
                "key": "f49747f0-f980-42b6-aae1-5b35e7128fc6",
                "fixed": false
              },
              {
                "title": "创建人id",
                "dataIndex": "createuserid",
                "ref_col": "createuserid",
                "width": 200,
                "_mocha_col_orderNumber": 13,
                "showTable": false,
                "key": "b4d70040-620a-4136-a64f-24c9d9d0658c",
                "fixed": false
              },
              {
                "title": "创建时间",
                "dataIndex": "createtime",
                "ref_col": "createtime",
                "width": 200,
                "_mocha_col_orderNumber": 15,
                "showTable": false,
                "key": "76661e82-fdf8-4f65-b536-f7fdc714edfb",
                "fixed": false
              },
              {
                "title": "最后一次更新时间",
                "dataIndex": "updattime",
                "ref_col": "updattime",
                "width": 200,
                "_mocha_col_orderNumber": 17,
                "showTable": false,
                "key": "38b8ce1d-0042-46cf-8a03-1ca50b8c21c3",
                "fixed": false
              },
              {
                "title": "最后一次更新用户id",
                "dataIndex": "updateuserid",
                "ref_col": "updateuserid",
                "width": 200,
                "_mocha_col_orderNumber": 18,
                "showTable": false,
                "key": "dacd4f14-1bed-42b8-b9e3-29eaf1a32886",
                "fixed": false
              },
              {
                "title": "是否是代理",
                "dataIndex": "is_proxy",
                "ref_col": "is_proxy",
                "width": 200,
                "_mocha_col_orderNumber": 19,
                "showTable": false,
                "key": "9f5d9d9c-cd7e-4958-872f-9338ab4f624f",
                "fixed": false
              },
              {
                "title": "归属租户id",
                "dataIndex": "zuhu_id",
                "ref_col": "zuhu_id",
                "width": 200,
                "_mocha_col_orderNumber": 20,
                "showTable": false,
                "key": "75d6df62-dcaf-463b-8fbd-7a147e04dcfa",
                "fixed": false
              },
              {
                "title": "操作",
                "dataIndex": "data3",
                "width": 200,
                "_mocha_col_orderNumber": 21,
                "fixed": false,
                "showTable": true,
                "key": "ddc694e8-d30c-4d8e-b639-13d8c25d730a",
                "_mocha_col_render": {
                  "showName": "自定义渲染",
                  "name": "render",
                  "render": {
                    "renderType": "area",
                    "content": "page_r16mw~area_m3tin"
                  }
                }
              }
            ]
          },
          {
            "id": "",
            "name": "rowSelection",
            "showName": "行数据选择配置",
            "desc": "行数据选择配置",
            "label": "行数据选择配置",
            "order": 1,
            "type": "table_rowselection",
            "isNull": true,
            "customerEditor": "RowSelection",
            "events": [
              {
                "showName": "选择事件",
                "name": "onChange",
                "triggetType": [],
                "defaultTriggerType": ""
              }
            ],
            "value": ""
          },
          {
            "id": "",
            "name": "ref_table",
            "showName": "关联表",
            "desc": "关联表",
            "label": "关联表",
            "order": 1,
            "type": "r_table",
            "isNull": true,
            "editor": false,
            "value": "chanpin"
          },
          {
            "id": "",
            "name": "filter",
            "showName": "筛选字段",
            "value": "",
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "filter_value",
            "showName": "筛选字段内容",
            "value": "",
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "sorter",
            "showName": "排序字段",
            "value": "",
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "sortOrder",
            "showName": "排序方式",
            "value": "",
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "selected",
            "showName": "选中的数据",
            "value": [],
            "defaultValue": [],
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "selectedRowKeys",
            "showName": "选中的数据key",
            "value": [],
            "defaultValue": [],
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "visible",
            "showName": "可见",
            "defaultValue": true,
            "desc": "可见",
            "label": "可见",
            "type": "boolean",
            "showEvent": true,
            "value": false
          },
          {
            "id": "",
            "name": "showLoading",
            "showName": "显示加载状态",
            "desc": "显示加载状态",
            "label": "显示加载状态",
            "order": 1,
            "type": "boolean",
            "defaultValue": false,
            "isNull": true,
            "editor": false,
            "showEvent": true,
            "value": true
          },
          {
            "id": "",
            "name": "showLoadingText",
            "showName": "加载状态提示文字",
            "desc": "加载状态提示文字",
            "label": "加载状态提示文字",
            "order": 1,
            "type": "string",
            "defaultValue": "",
            "isNull": true,
            "editor": false,
            "showEvent": true,
            "value": "loading time..."
          }
        ],
        "event": [
          {
            "showName": "选择事件",
            "name": "onSelectChange",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "行单击",
            "name": "rowClick",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "行双击",
            "name": "rowDoubleClick",
            "triggetType": [],
            "defaultTriggerType": ""
          }
        ],
        "datasource": {
          "type": "request",
          "bindingPropName": "treeData",
          "customerData": [
            {
              "key": "1",
              "name": "name_1",
              "age": 1,
              "address": "address_1"
            },
            {
              "key": "2",
              "name": "name_2",
              "age": 2,
              "address": "address_2"
            },
            {
              "key": "3",
              "name": "name_3",
              "age": 3,
              "address": "address_3"
            }
          ],
          "request": {
            "eventInfo": {
              "showName": "获取数据",
              "name": "getData",
              "triggetType": "",
              "defaultTriggerType": "",
              "pageid": "page_r16mw",
              "guid": "getData-page_r16mw~Table_18",
              "app_id": "yqdw4",
              "version": "master",
              "type": 100,
              "targetid": "page_r16mw~Table_18",
              "visual": 1
            }
          }
        },
        "commonStyle": [
          {
            "name": "styleBox",
            "showName": "边距",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "border",
            "showName": "边框",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "background",
            "showName": "背景",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "width",
            "showName": "宽度",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "height",
            "showName": "高度",
            "value": "",
            "defaultValue": ""
          }
        ],
        "permissionControl": [
          {
            "name": "visible",
            "showName": "可见性",
            "label": "可见性",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          }
        ],
        "renderOrder": 3,
        "rules": []
      },
      "pack": "antd",
      "instanceId": "page_r16mw~Table_18",
      "parentId": "page_r16mw",
      "containerId": "page_r16mw",
      "containerType": 2
    }
  ],
  "config": [
    {
      "id": "pack_Grid1",
      "name": "grid1",
      "pack": "antd",
      "toolbox": {
        "group": "layout",
        "name": "grid1",
        "showName": "行容器",
        "order": "",
        "render": ""
      },
      "render": {
        "rowBlock": true,
        "name": "grid1",
        "parent": "",
        "render": "",
        "props": [
          {
            "id": "",
            "name": "name",
            "showName": "行容器",
            "desc": "行容器",
            "label": "行容器",
            "order": 1,
            "type": "string",
            "defaultValue": "行容器",
            "isNull": true,
            "value": "行容器_2"
          },
          {
            "id": "",
            "name": "justify-content",
            "showName": "水平对齐方式",
            "desc": "水平对齐方式",
            "label": "水平对齐方式",
            "order": 1,
            "type": "select",
            "defaultValue": "flex-start",
            "valueSource": [
              {
                "label": "左对齐",
                "value": "flex-start"
              },
              {
                "label": "右对齐",
                "value": "flex-end"
              },
              {
                "label": "居中对齐",
                "value": "center"
              }
            ],
            "isNull": true
          },
          {
            "id": "",
            "name": "gap",
            "showName": "子元素间距(像素)",
            "desc": "子元素间距(像素)",
            "label": "子元素间距(像素)",
            "order": 1,
            "type": "number",
            "defaultValue": "12",
            "isNull": true
          },
          {
            "id": "",
            "name": "proOpen",
            "showName": "高级模式可见",
            "desc": "高级模式可见",
            "label": "高级模式可见",
            "order": 1,
            "type": "boolean",
            "defaultValue": false,
            "isNull": true
          },
          {
            "id": "",
            "name": "visible",
            "showName": "可见",
            "defaultValue": true,
            "desc": "可见",
            "label": "可见",
            "type": "boolean",
            "showEvent": true
          }
        ],
        "commonStyle": [
          {
            "name": "styleBox",
            "showName": "边距",
            "value": {
              "marginBottom": "14"
            }
          },
          {
            "name": "border",
            "showName": "边框",
            "defaultValue": {}
          },
          {
            "name": "background",
            "showName": "背景",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "height",
            "showName": "高度",
            "value": "",
            "defaultValue": ""
          }
        ],
        "renderOrder": 1,
        "event": [],
        "permissionControl": []
      },
      "instanceId": "page_r16mw~grid1_2",
      "parentId": "page_r16mw",
      "containerId": "page_r16mw",
      "containerType": 2,
      "children": [
        {
          "id": "pack_Input",
          "name": "Input",
          "toolbox": {
            "group": "form",
            "name": "Input",
            "showName": "Input",
            "order": "",
            "render": ""
          },
          "render": {
            "name": "Input",
            "parent": "input",
            "render": "",
            "isFormData": true,
            "props": [
              {
                "id": "",
                "name": "name",
                "showName": "组件备注",
                "desc": "组件备注",
                "label": "组件备注",
                "order": 1,
                "type": "string",
                "defaultValue": "文本框",
                "isNull": true,
                "value": "产品名称文本框_3"
              },
              {
                "id": "",
                "name": "value",
                "showName": "文本框内容",
                "desc": "文本框内容",
                "label": "文本框内容",
                "order": 1,
                "type": "string",
                "defaultValue": "",
                "isNull": true,
                "showEvent": true,
                "value": ""
              },
              {
                "name": "allowClear",
                "desc": "可以点击清除图标删除内容",
                "type": "boolean",
                "defaultValue": false,
                "version": "",
                "id": "4d4c2217-f3f2-4556-89fe-6fff594a8451",
                "showName": "可清除",
                "label": "可清除",
                "canEdit": true,
                "order": 2,
                "valueSource": [
                  {
                    "label": "true",
                    "value": true
                  },
                  {
                    "label": "false ",
                    "value": false
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": true
              },
              {
                "name": "bordered",
                "desc": "是否有边框",
                "type": "boolean",
                "defaultValue": true,
                "version": "4.5.0",
                "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
                "showName": "是否有边框",
                "label": "是否有边框",
                "canEdit": true,
                "order": 3,
                "group": "基本属性",
                "groupType": "common",
                "value": true
              },
              {
                "name": "disabled",
                "desc": "禁用",
                "type": "boolean",
                "defaultValue": false,
                "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
                "showName": "禁用",
                "label": "禁用",
                "canEdit": true,
                "order": 3,
                "group": "基本属性",
                "groupType": "common",
                "showEvent": true,
                "value": false
              },
              {
                "name": "readOnly",
                "desc": "只读",
                "type": "boolean",
                "defaultValue": false,
                "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
                "showName": "只读",
                "label": "只读",
                "canEdit": true,
                "order": 3,
                "group": "基本属性",
                "groupType": "common",
                "showEvent": true,
                "value": false
              },
              {
                "name": "maxLength",
                "desc": "最大长度",
                "type": "number",
                "defaultValue": "-",
                "version": "",
                "id": "750af6cc-6c92-4618-91e3-fb4b8013fed7",
                "showName": "最大长度",
                "label": "最大长度",
                "canEdit": true,
                "order": 7,
                "group": "基本属性",
                "groupType": "common",
                "value": "-"
              }
            ],
            "event": [
              {
                "showName": "输入变化",
                "name": "onChange",
                "triggetType": [],
                "defaultTriggerType": ""
              },
              {
                "showName": "回车",
                "name": "onPressEnter",
                "triggetType": [],
                "defaultTriggerType": ""
              },
              {
                "showName": "点击",
                "name": "onClick",
                "triggetType": [],
                "defaultTriggerType": ""
              },
              {
                "showName": "获得输入焦点",
                "name": "onFocus",
                "triggetType": [],
                "defaultTriggerType": ""
              }
            ],
            "commonStyle": [
              {
                "name": "styleBox",
                "showName": "边距",
                "value": {},
                "defaultValue": {}
              },
              {
                "name": "border",
                "showName": "边框",
                "value": {},
                "defaultValue": {}
              },
              {
                "name": "background",
                "showName": "背景",
                "value": "",
                "defaultValue": ""
              },
              {
                "name": "width",
                "showName": "宽度",
                "value": "",
                "defaultValue": ""
              },
              {
                "name": "height",
                "showName": "高度",
                "value": "",
                "defaultValue": ""
              }
            ],
            "rules": [],
            "permissionControl": [
              {
                "name": "visible",
                "showName": "可见性",
                "label": "可见性",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              },
              {
                "name": "enable",
                "showName": "禁用",
                "label": "禁用",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              },
              {
                "name": "readonly",
                "showName": "只读",
                "label": "只读",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              }
            ],
            "renderOrder": 1
          },
          "pack": "antd",
          "instanceId": "page_r16mw~Input_3",
          "parentId": "page_r16mw~grid1_2",
          "containerId": "page_r16mw",
          "containerType": 2,
          "children": []
        },
        {
          "id": "pack_Button",
          "name": "button",
          "pack": "antd",
          "toolbox": {
            "group": "form",
            "name": "button",
            "showName": "button",
            "order": "",
            "render": ""
          },
          "render": {
            "name": "button",
            "parent": "",
            "render": "",
            "rowBlock": false,
            "props": [
              {
                "id": "",
                "name": "name",
                "showName": "组件备注",
                "desc": "组件备注",
                "label": "组件备注",
                "order": 1,
                "type": "string",
                "defaultValue": "按钮",
                "isNull": true,
                "value": "按钮_9"
              },
              {
                "name": "text",
                "desc": "文本",
                "type": "string",
                "defaultValue": "按钮",
                "version": "",
                "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
                "showName": "文本",
                "label": "文本",
                "canEdit": true,
                "order": 1,
                "group": "基本属性",
                "groupType": "common",
                "valueSource": [],
                "showEvent": true,
                "value": "查询"
              },
              {
                "name": "shape",
                "desc": "设置按钮形状",
                "type": "select",
                "defaultValue": "",
                "version": "",
                "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
                "showName": "形状",
                "label": "形状",
                "canEdit": true,
                "order": 8,
                "valueSource": [
                  {
                    "label": "circle",
                    "value": "circle"
                  },
                  {
                    "label": "round",
                    "value": "round"
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": ""
              },
              {
                "name": "size",
                "desc": "设置按钮大小",
                "type": "select",
                "defaultValue": "middle",
                "version": "",
                "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
                "showName": "大小",
                "label": "大小",
                "canEdit": true,
                "order": 9,
                "valueSource": [
                  {
                    "label": "大",
                    "value": "large"
                  },
                  {
                    "label": "中",
                    "value": "middle "
                  },
                  {
                    "label": "小",
                    "value": "small"
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": "middle"
              },
              {
                "name": "type",
                "desc": "设置按钮类型",
                "type": "primary | ghost | dashed | link | text | default",
                "defaultValue": "primary",
                "version": "",
                "id": "bffd2494-d9d1-498d-ad23-e4d9cb3df321",
                "showName": "类型",
                "label": "类型",
                "canEdit": true,
                "order": 11,
                "valueSource": [
                  {
                    "label": "primary",
                    "value": "primary"
                  },
                  {
                    "label": "ghost ",
                    "value": "ghost "
                  },
                  {
                    "label": "dashed ",
                    "value": "dashed"
                  },
                  {
                    "label": "link ",
                    "value": "link "
                  },
                  {
                    "label": "text ",
                    "value": "text "
                  },
                  {
                    "label": "default",
                    "value": "default"
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": "primary"
              },
              {
                "name": "icon",
                "desc": "图标",
                "type": "com",
                "defaultValue": "",
                "version": "",
                "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
                "showName": "图标",
                "label": "图标",
                "canEdit": true,
                "order": 1,
                "group": "基本属性",
                "groupType": "common",
                "customerEditor": "iconSelector",
                "value": ""
              },
              {
                "id": "",
                "name": "visible",
                "showName": "可见",
                "defaultValue": true,
                "desc": "可见",
                "label": "可见",
                "type": "boolean",
                "showEvent": true
              },
              {
                "name": "disabled",
                "desc": "禁用",
                "type": "boolean",
                "defaultValue": false,
                "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
                "showName": "禁用",
                "label": "禁用",
                "canEdit": true,
                "order": 3,
                "group": "基本属性",
                "groupType": "common",
                "showEvent": true
              }
            ],
            "event": [
              {
                "showName": "点击事件",
                "name": "onClick",
                "triggetType": [],
                "defaultTriggerType": "",
                "pageId": "page_r16mw",
                "id": 1172,
                "guid": "onClick-page_r16mw~button_9",
                "targetId": "page_r16mw~button_9"
              }
            ],
            "commonStyle": [
              {
                "name": "styleBox",
                "showName": "边距",
                "value": {},
                "defaultValue": {}
              },
              {
                "name": "border",
                "showName": "边框",
                "value": {},
                "defaultValue": {}
              },
              {
                "name": "background",
                "showName": "背景",
                "value": "",
                "defaultValue": ""
              },
              {
                "name": "width",
                "showName": "宽度",
                "value": "",
                "defaultValue": ""
              },
              {
                "name": "height",
                "showName": "高度",
                "value": "",
                "defaultValue": ""
              }
            ],
            "permissionControl": [
              {
                "name": "visible",
                "showName": "可见性",
                "label": "可见性",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              },
              {
                "name": "enable",
                "showName": "禁用",
                "label": "禁用",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              },
              {
                "name": "readonly",
                "showName": "只读",
                "label": "只读",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              }
            ],
            "renderOrder": 2
          },
          "instanceId": "page_r16mw~button_9",
          "parentId": "page_r16mw~grid1_2",
          "containerId": "page_r16mw",
          "containerType": 2,
          "children": []
        }
      ]
    },
    {
      "id": "pack_Grid1",
      "name": "grid1",
      "pack": "antd",
      "toolbox": {
        "group": "layout",
        "name": "grid1",
        "showName": "行容器",
        "order": "",
        "render": ""
      },
      "render": {
        "rowBlock": true,
        "name": "grid1",
        "parent": "",
        "render": "",
        "props": [
          {
            "id": "",
            "name": "name",
            "showName": "行容器",
            "desc": "行容器",
            "label": "行容器",
            "order": 1,
            "type": "string",
            "defaultValue": "行容器",
            "isNull": true,
            "value": "行容器_8"
          },
          {
            "id": "",
            "name": "justify-content",
            "showName": "水平对齐方式",
            "desc": "水平对齐方式",
            "label": "水平对齐方式",
            "order": 1,
            "type": "select",
            "defaultValue": "flex-start",
            "valueSource": [
              {
                "label": "左对齐",
                "value": "flex-start"
              },
              {
                "label": "右对齐",
                "value": "flex-end"
              },
              {
                "label": "居中对齐",
                "value": "center"
              }
            ],
            "isNull": true
          },
          {
            "id": "",
            "name": "gap",
            "showName": "子元素间距(像素)",
            "desc": "子元素间距(像素)",
            "label": "子元素间距(像素)",
            "order": 1,
            "type": "number",
            "defaultValue": "12",
            "isNull": true
          },
          {
            "id": "",
            "name": "proOpen",
            "showName": "高级模式可见",
            "desc": "高级模式可见",
            "label": "高级模式可见",
            "order": 1,
            "type": "boolean",
            "defaultValue": false,
            "isNull": true
          },
          {
            "id": "",
            "name": "visible",
            "showName": "可见",
            "defaultValue": true,
            "desc": "可见",
            "label": "可见",
            "type": "boolean",
            "showEvent": true
          }
        ],
        "commonStyle": [
          {
            "name": "styleBox",
            "showName": "边距",
            "value": {
              "marginBottom": "14"
            }
          },
          {
            "name": "border",
            "showName": "边框",
            "defaultValue": {}
          },
          {
            "name": "background",
            "showName": "背景",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "height",
            "showName": "高度",
            "value": "",
            "defaultValue": ""
          }
        ],
        "renderOrder": 2,
        "event": [],
        "permissionControl": []
      },
      "instanceId": "page_r16mw~grid1_8",
      "parentId": "page_r16mw",
      "containerId": "page_r16mw",
      "containerType": 2,
      "children": [
        {
          "id": "pack_Button",
          "name": "button",
          "pack": "antd",
          "toolbox": {
            "group": "form",
            "name": "button",
            "showName": "按钮",
            "order": "",
            "render": ""
          },
          "render": {
            "name": "button",
            "parent": "",
            "render": "",
            "rowBlock": false,
            "props": [
              {
                "id": "",
                "name": "name",
                "showName": "组件备注",
                "desc": "组件备注",
                "label": "组件备注",
                "order": 1,
                "type": "string",
                "defaultValue": "按钮",
                "isNull": true,
                "value": "新建产品按钮_13"
              },
              {
                "name": "text",
                "desc": "文本",
                "type": "string",
                "defaultValue": "按钮",
                "version": "",
                "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
                "showName": "文本",
                "label": "文本",
                "canEdit": true,
                "order": 1,
                "group": "基本属性",
                "groupType": "common",
                "valueSource": [],
                "showEvent": true,
                "value": "新建产品"
              },
              {
                "name": "shape",
                "desc": "设置按钮形状",
                "type": "select",
                "defaultValue": "",
                "version": "",
                "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
                "showName": "形状",
                "label": "形状",
                "canEdit": true,
                "order": 8,
                "valueSource": [
                  {
                    "label": "circle",
                    "value": "circle"
                  },
                  {
                    "label": "round",
                    "value": "round"
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": ""
              },
              {
                "name": "size",
                "desc": "设置按钮大小",
                "type": "select",
                "defaultValue": "middle",
                "version": "",
                "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
                "showName": "大小",
                "label": "大小",
                "canEdit": true,
                "order": 9,
                "valueSource": [
                  {
                    "label": "大",
                    "value": "large"
                  },
                  {
                    "label": "中",
                    "value": "middle "
                  },
                  {
                    "label": "小",
                    "value": "small"
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": "middle"
              },
              {
                "name": "type",
                "desc": "设置按钮类型",
                "type": "primary | ghost | dashed | link | text | default",
                "defaultValue": "primary",
                "version": "",
                "id": "bffd2494-d9d1-498d-ad23-e4d9cb3df321",
                "showName": "类型",
                "label": "类型",
                "canEdit": true,
                "order": 11,
                "valueSource": [
                  {
                    "label": "primary",
                    "value": "primary"
                  },
                  {
                    "label": "ghost ",
                    "value": "ghost "
                  },
                  {
                    "label": "dashed ",
                    "value": "dashed"
                  },
                  {
                    "label": "link ",
                    "value": "link "
                  },
                  {
                    "label": "text ",
                    "value": "text "
                  },
                  {
                    "label": "default",
                    "value": "default"
                  }
                ],
                "group": "基本属性",
                "groupType": "common",
                "value": "primary"
              },
              {
                "name": "icon",
                "desc": "图标",
                "type": "com",
                "defaultValue": "",
                "version": "",
                "id": "27ede653-d344-467a-a1c8-2fb4d1a75679",
                "showName": "图标",
                "label": "图标",
                "canEdit": true,
                "order": 1,
                "group": "基本属性",
                "groupType": "common",
                "customerEditor": "iconSelector",
                "value": ""
              },
              {
                "id": "",
                "name": "visible",
                "showName": "可见",
                "defaultValue": true,
                "desc": "可见",
                "label": "可见",
                "type": "boolean",
                "showEvent": true
              },
              {
                "name": "disabled",
                "desc": "禁用",
                "type": "boolean",
                "defaultValue": false,
                "id": "d623018b-7bda-4b3e-aa14-ad4100d11fa3",
                "showName": "禁用",
                "label": "禁用",
                "canEdit": true,
                "order": 3,
                "group": "基本属性",
                "groupType": "common",
                "showEvent": true
              }
            ],
            "event": [
              {
                "showName": "点击事件",
                "name": "onClick",
                "triggetType": [],
                "defaultTriggerType": "",
                "pageId": "page_r16mw",
                "id": 1169,
                "guid": "onClick-page_r16mw~button_13",
                "targetId": "page_r16mw~button_13"
              }
            ],
            "commonStyle": [
              {
                "name": "styleBox",
                "showName": "边距",
                "value": {},
                "defaultValue": {}
              },
              {
                "name": "border",
                "showName": "边框",
                "value": {},
                "defaultValue": {}
              },
              {
                "name": "background",
                "showName": "背景",
                "value": "",
                "defaultValue": ""
              },
              {
                "name": "width",
                "showName": "宽度",
                "value": "",
                "defaultValue": ""
              },
              {
                "name": "height",
                "showName": "高度",
                "value": "",
                "defaultValue": ""
              }
            ],
            "permissionControl": [
              {
                "name": "visible",
                "showName": "可见性",
                "label": "可见性",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              },
              {
                "name": "enable",
                "showName": "禁用",
                "label": "禁用",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              },
              {
                "name": "readonly",
                "showName": "只读",
                "label": "只读",
                "type": "boolean",
                "defaultValue": false,
                "value": false
              }
            ],
            "renderOrder": 1
          },
          "instanceId": "page_r16mw~button_13",
          "parentId": "page_r16mw~grid1_8",
          "containerId": "page_r16mw",
          "containerType": 2,
          "children": []
        }
      ]
    },
    {
      "id": "pack_Table",
      "name": "Table",
      "toolbox": {
        "group": "data",
        "name": "Table",
        "showName": "表格",
        "order": "",
        "render": ""
      },
      "render": {
        "name": "Table",
        "parent": "table",
        "render": "",
        "rowBlock": true,
        "props": [
          {
            "id": "",
            "name": "name",
            "showName": "组件备注",
            "desc": "组件备注",
            "label": "组件备注",
            "order": 1,
            "type": "string",
            "defaultValue": "表格",
            "isNull": true,
            "value": "表格_18"
          },
          {
            "id": "",
            "name": "bordered",
            "showName": "显示外边框和列边框",
            "desc": "显示外边框和列边框",
            "label": "显示外边框和列边框",
            "order": 1,
            "type": "boolean",
            "defaultValue": true,
            "isNull": true,
            "value": true
          },
          {
            "name": "size",
            "desc": "尺寸",
            "type": "select",
            "defaultValue": "middle",
            "version": "",
            "id": "dce2aebe-a443-43f1-b586-d0a8aeb4f020",
            "showName": "尺寸",
            "label": "尺寸",
            "canEdit": true,
            "order": 9,
            "valueSource": [
              {
                "label": "大",
                "value": "large"
              },
              {
                "label": "中",
                "value": "middle "
              },
              {
                "label": "小",
                "value": "small"
              }
            ],
            "group": "基本属性",
            "groupType": "common",
            "value": "middle"
          },
          {
            "id": "",
            "name": "rowKey",
            "showName": "行数据唯一标记",
            "desc": "行数据唯一标记",
            "label": "组件备注",
            "order": 1,
            "type": "string",
            "defaultValue": "id",
            "isNull": true,
            "value": "id"
          },
          {
            "id": "",
            "name": "columns",
            "showName": "columns",
            "desc": "列编辑",
            "label": "columns",
            "order": 1,
            "type": "table_columns_edit",
            "defaultValue": [
              {
                "title": "姓名",
                "dataIndex": "name",
                "key": "name",
                "width": 200,
                "_mocha_col_orderNumber": 1
              },
              {
                "title": "年龄",
                "dataIndex": "age",
                "key": "age",
                "width": 200,
                "_mocha_col_orderNumber": 2
              },
              {
                "title": "住址",
                "dataIndex": "address",
                "key": "address",
                "width": 200,
                "_mocha_col_orderNumber": 3
              }
            ],
            "isNull": true,
            "value": [
              {
                "title": "id",
                "dataIndex": "id",
                "ref_col": "id",
                "width": 200,
                "_mocha_col_orderNumber": 5,
                "showTable": false,
                "key": "18dc2b56-94c1-46a1-87e8-05dc7eadfd2d",
                "fixed": false
              },
              {
                "title": "产品名称",
                "dataIndex": "name",
                "ref_col": "name",
                "width": 200,
                "_mocha_col_orderNumber": 6,
                "showTable": true,
                "key": "5ac22d8c-eee6-4b3f-9e58-5de09e2e4d24",
                "fixed": false
              },
              {
                "title": "产品唯一编码",
                "dataIndex": "guid",
                "ref_col": "guid",
                "width": 200,
                "_mocha_col_orderNumber": 7,
                "showTable": true,
                "key": "3ea233ac-6701-40fb-b5b3-4a729f662207",
                "fixed": false
              },
              {
                "title": "产品版本号",
                "dataIndex": "version",
                "ref_col": "version",
                "width": 200,
                "_mocha_col_orderNumber": 8,
                "showTable": true,
                "key": "375ae082-aedc-417f-8307-49afe5968705",
                "fixed": false
              },
              {
                "title": "产品类型",
                "dataIndex": "type",
                "ref_col": "type",
                "width": 200,
                "_mocha_col_orderNumber": 10,
                "showTable": true,
                "key": "a23e198b-88d5-4ca4-8c2a-93ac83e758b7",
                "fixed": false
              },
              {
                "title": "产品说明",
                "dataIndex": "note",
                "ref_col": "note",
                "width": 200,
                "_mocha_col_orderNumber": 11,
                "showTable": true,
                "key": "dcdeedca-1662-40b3-b6dd-7718f7721486",
                "fixed": false
              },
              {
                "title": "产品初始化sql",
                "dataIndex": "initsql",
                "ref_col": "initsql",
                "width": 200,
                "_mocha_col_orderNumber": 12,
                "showTable": false,
                "key": "f49747f0-f980-42b6-aae1-5b35e7128fc6",
                "fixed": false
              },
              {
                "title": "创建人id",
                "dataIndex": "createuserid",
                "ref_col": "createuserid",
                "width": 200,
                "_mocha_col_orderNumber": 13,
                "showTable": false,
                "key": "b4d70040-620a-4136-a64f-24c9d9d0658c",
                "fixed": false
              },
              {
                "title": "创建时间",
                "dataIndex": "createtime",
                "ref_col": "createtime",
                "width": 200,
                "_mocha_col_orderNumber": 15,
                "showTable": false,
                "key": "76661e82-fdf8-4f65-b536-f7fdc714edfb",
                "fixed": false
              },
              {
                "title": "最后一次更新时间",
                "dataIndex": "updattime",
                "ref_col": "updattime",
                "width": 200,
                "_mocha_col_orderNumber": 17,
                "showTable": false,
                "key": "38b8ce1d-0042-46cf-8a03-1ca50b8c21c3",
                "fixed": false
              },
              {
                "title": "最后一次更新用户id",
                "dataIndex": "updateuserid",
                "ref_col": "updateuserid",
                "width": 200,
                "_mocha_col_orderNumber": 18,
                "showTable": false,
                "key": "dacd4f14-1bed-42b8-b9e3-29eaf1a32886",
                "fixed": false
              },
              {
                "title": "是否是代理",
                "dataIndex": "is_proxy",
                "ref_col": "is_proxy",
                "width": 200,
                "_mocha_col_orderNumber": 19,
                "showTable": false,
                "key": "9f5d9d9c-cd7e-4958-872f-9338ab4f624f",
                "fixed": false
              },
              {
                "title": "归属租户id",
                "dataIndex": "zuhu_id",
                "ref_col": "zuhu_id",
                "width": 200,
                "_mocha_col_orderNumber": 20,
                "showTable": false,
                "key": "75d6df62-dcaf-463b-8fbd-7a147e04dcfa",
                "fixed": false
              },
              {
                "title": "操作",
                "dataIndex": "data3",
                "width": 200,
                "_mocha_col_orderNumber": 21,
                "fixed": false,
                "showTable": true,
                "key": "ddc694e8-d30c-4d8e-b639-13d8c25d730a",
                "_mocha_col_render": {
                  "showName": "自定义渲染",
                  "name": "render",
                  "render": {
                    "renderType": "area",
                    "content": "page_r16mw~area_m3tin"
                  }
                }
              }
            ]
          },
          {
            "id": "",
            "name": "rowSelection",
            "showName": "行数据选择配置",
            "desc": "行数据选择配置",
            "label": "行数据选择配置",
            "order": 1,
            "type": "table_rowselection",
            "isNull": true,
            "customerEditor": "RowSelection",
            "events": [
              {
                "showName": "选择事件",
                "name": "onChange",
                "triggetType": [],
                "defaultTriggerType": ""
              }
            ]
          },
          {
            "id": "",
            "name": "ref_table",
            "showName": "关联表",
            "desc": "关联表",
            "label": "关联表",
            "order": 1,
            "type": "r_table",
            "isNull": true,
            "editor": false,
            "value": "chanpin"
          },
          {
            "id": "",
            "name": "showPagination",
            "showName": "显示分页",
            "desc": "显示分页",
            "label": "显示分页",
            "order": 1,
            "type": "boolean",
            "defaultValue": true,
            "value": true
          },
          {
            "id": "",
            "name": "serverPage",
            "showName": "服务端分页/排序",
            "desc": "服务端分页",
            "label": "服务端分页",
            "order": 1,
            "type": "boolean",
            "defaultValue": true,
            "value": true
          },
          {
            "id": "",
            "name": "pagination",
            "showName": "分页配置",
            "desc": "分页配置",
            "label": "分页配置",
            "order": 1,
            "type": "table_pagination",
            "defaultValue": {
              "pagination": true,
              "position": "bottomRight",
              "pageSize": 15,
              "showQuickJumper": true,
              "size": "default",
              "current": 1,
              "simple": false,
              "showSizeChanger": true,
              "total": 0
            },
            "isNull": true,
            "events": [
              {
                "showName": "页码事件",
                "name": "onChange",
                "triggetType": [],
                "defaultTriggerType": ""
              },
              {
                "showName": "页大小事件",
                "name": "onShowSizeChange",
                "triggetType": [],
                "defaultTriggerType": ""
              }
            ],
            "customerEditor": "paginationEditor",
            "ifShow": {
              "prop": "showPagination",
              "value": true
            },
            "value": {
              "pagination": true,
              "position": "bottomRight",
              "pageSize": 15,
              "showQuickJumper": true,
              "size": "default",
              "simple": false,
              "current": 1,
              "showSizeChanger": true,
              "total": 0
            }
          },
          {
            "id": "",
            "name": "scroll",
            "showName": "表格滚动配置",
            "desc": "表格滚动配置",
            "label": "表格滚动配置",
            "order": 1,
            "type": "table_scroll",
            "defaultValue": {
              "scrollToFirstRowOnChange": true,
              "x": false,
              "width": "",
              "height": "",
              "y": false
            },
            "isNull": true,
            "customerEditor": "ScrollEditor",
            "value": {
              "scrollToFirstRowOnChange": true,
              "width": "",
              "height": ""
            }
          },
          {
            "id": "",
            "name": "totalCount",
            "showName": "总页数",
            "value": null,
            "defaultValue": 0,
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "pageSize",
            "showName": "每页数量",
            "value": null,
            "defaultValue": 10,
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "pageIndex",
            "showName": "当前页码",
            "value": null,
            "defaultValue": 1,
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "filter",
            "showName": "筛选字段",
            "value": null,
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "filter_value",
            "showName": "筛选字段内容",
            "value": null,
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "sorter",
            "showName": "排序字段",
            "value": null,
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "sortOrder",
            "showName": "排序方式",
            "value": null,
            "defaultValue": "",
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "selected",
            "showName": "选中的数据",
            "value": [],
            "defaultValue": [],
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "selectedRowKeys",
            "showName": "选中的数据key",
            "value": [],
            "defaultValue": [],
            "editor": false,
            "showEvent": true
          },
          {
            "id": "",
            "name": "visible",
            "showName": "可见",
            "defaultValue": true,
            "desc": "可见",
            "label": "可见",
            "type": "boolean",
            "showEvent": true,
            "value": true
          }
        ],
        "event": [
          {
            "showName": "选择事件",
            "name": "onSelectChange",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "行单击",
            "name": "rowClick",
            "triggetType": [],
            "defaultTriggerType": ""
          },
          {
            "showName": "行双击",
            "name": "rowDoubleClick",
            "triggetType": [],
            "defaultTriggerType": ""
          }
        ],
        "datasource": {
          "type": "request",
          "bindingPropName": "treeData",
          "customerData": [
            {
              "key": "1",
              "name": "name_1",
              "age": 1,
              "address": "address_1"
            },
            {
              "key": "2",
              "name": "name_2",
              "age": 2,
              "address": "address_2"
            },
            {
              "key": "3",
              "name": "name_3",
              "age": 3,
              "address": "address_3"
            }
          ],
          "request": {
            "eventInfo": {
              "showName": "获取数据",
              "name": "getData",
              "triggetType": "",
              "defaultTriggerType": "",
              "pageid": "page_r16mw",
              "guid": "getData-page_r16mw~Table_18",
              "app_id": "yqdw4",
              "version": "master",
              "type": 100,
              "targetid": "page_r16mw~Table_18",
              "visual": 1
            }
          }
        },
        "commonStyle": [
          {
            "name": "styleBox",
            "showName": "边距",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "border",
            "showName": "边框",
            "value": {},
            "defaultValue": {}
          },
          {
            "name": "background",
            "showName": "背景",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "width",
            "showName": "宽度",
            "value": "",
            "defaultValue": ""
          },
          {
            "name": "height",
            "showName": "高度",
            "value": "",
            "defaultValue": ""
          }
        ],
        "permissionControl": [
          {
            "name": "visible",
            "showName": "可见性",
            "label": "可见性",
            "type": "boolean",
            "defaultValue": false,
            "value": false
          }
        ],
        "renderOrder": 3,
        "rules": []
      },
      "pack": "antd",
      "instanceId": "page_r16mw~Table_18",
      "parentId": "page_r16mw",
      "containerId": "page_r16mw",
      "containerType": 2,
      "children": []
    }
  ],
  "deleteData": []
}