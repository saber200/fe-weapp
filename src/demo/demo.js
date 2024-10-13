export default {
  "id": "page_xb9jgrug",
  "type": 1,
  "root": null,
  "data": [
      {
          "id": "mocha-page",
          "name": "page",
          "toolbox": {
              "group": "",
              "name": "page",
              "showName": "子页",
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
                      "showEvent": true,
                      "value": "test"
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
                      "isNull": true
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
                      }
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
                      "isNull": true
                  },
                  {
                      "id": "",
                      "name": "canvas",
                      "showName": "画布",
                      "desc": "画布",
                      "label": "画布",
                      "order": 1,
                      "type": "string",
                      "defaultValue": "",
                      "isNull": true,
                      "editor": false
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
                      }
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
              "commonStyle": [
                  {
                      "name": "styleBox",
                      "showName": "边距",
                      "value": {
                          "paddingBottom": "16",
                          "paddingTop": "16",
                          "paddingLeft": "16",
                          "paddingRight": "16"
                      },
                      "defaultValue": {

                      }
                  },
                  {
                      "name": "border",
                      "showName": "边框",
                      "value": {

                      },
                      "defaultValue": {

                      }
                  },
                  {
                      "name": "background",
                      "showName": "背景",
                      "value": "",
                      "defaultValue": ""
                  }
              ],
              "event": [
                  {
                      "showName": "子页初始化事件",
                      "name": "page_init",
                      "triggetType": [

                      ],
                      "defaultTriggerType": ""
                  },
                  {
                      "showName": "子页离开事件",
                      "name": "page_leave",
                      "triggetType": [

                      ],
                      "defaultTriggerType": ""
                  }
              ],
              "vars": [
                  {
                      "guid": "uafy5",
                      "name": "queryParams",
                      "showname": "页面查询参数",
                      "readonly": true,
                      "config": "{\"type\":\"object\",\"properties\":{}}",
                      "note": "",
                      "container_id": "page_xb9jgrug",
                      "app_id": "93arhy5q4k",
                      "scope": 1
                  }
              ]
          },
          "task": [

          ],
          "pack": "baseUI",
          "instanceId": "page_xb9jgrug",
          "maxIndex": 1,
          "hasConvertArea": true,
          "hasConvertModal": true
      }
  ],
  "config": [
      {
          "id": "button_0",
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
                      "value": "新建产品按钮1"
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
                      "valueSource": [

                      ],
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
                      "showName": "点击事件",
                      "name": "onClick",
                      "triggetType": [

                      ],
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
                      "value": {

                      },
                      "defaultValue": {

                      }
                  },
                  {
                      "name": "border",
                      "showName": "边框",
                      "value": {

                      },
                      "defaultValue": {

                      }
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
          "layout": {
              "w": 4,
              "h": 1,
              "x": 2,
              "y": 0,
              "i": "button_0",
              "moved": false,
              "static": false,
              "isDraggable": true,
              "inx": 0,
              "type": "button"
          }
      }
  ],
  "version": 1
}