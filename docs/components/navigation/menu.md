---
order: 1
---

# Menu 菜单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Menu, Icon } from 'site-ui';
export default () => {
  const menus = [
    {
      key: '1',
      icon: 'iconweimingmingwenjianjia_rili',
      label: '用户管理',
      children: [
        {
          key: '1-1',
          label: '我的信息1',
        },
        {
          key: '1-2',
          label: '我的信息2',
        },
      ],
    },
    {
      key: '2',
      icon: 'iconweimingmingwenjianjia_rili',
      label: '个人中心',
      children: [
        {
          key: '2-1',
          label: '我的信息',
          children: [
            {
              key: '2-1-1',
              label: '信息中心',
              children: [
                {
                  key: '2-1-1-1',
                  label: '管理信息',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: '3',
      icon: 'iconweimingmingwenjianjia_rili',
      label: '信息维护',
      children: [
        {
          key: '3-1',
          label: '我的信息',
        },
      ],
    },
  ];
  return (
    <>
      <Menu
        style={{ width: 200 }}
        menus={menus}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1']}
        selectKey={['1-2']}
      />
    </>
  );
};
```

# API

| **属性名** | **类型**    | **描述**   | **默认** |
| ---------- | ----------- | ---------- | -------- |
| disabled   | boolean     | 是否禁用   | 20       |
| onClick    | function(e) | 点击的回调 | 20       |
| icon       | string      | 图标       | 20       |
| loading    | boolean     | 是否加载   | 20       |
| type       | string      | 主题       | 20       |
| style      | object      | 样式       | 20       |
