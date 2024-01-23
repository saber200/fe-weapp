export default {
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
      "y": 0,
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
          "height": "",
          "x": false,
          "y": false
        }
      },
      {
        "id": "",
        "name": "totalCount",
        "showName": "总页数",
        "value": "",
        "defaultValue": 0,
        "editor": false,
        "showEvent": true
      },
      {
        "id": "",
        "name": "pageSize",
        "showName": "每页数量",
        "value": 10,
        "defaultValue": 10,
        "editor": false,
        "showEvent": true
      },
      {
        "id": "",
        "name": "pageIndex",
        "showName": "当前页码",
        "value": 1,
        "defaultValue": 1,
        "editor": false,
        "showEvent": true
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