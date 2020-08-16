---
order: 1
---

# Menu 菜单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Menu, Icon, Switch } from 'site-ui';
export default () => {
  const [collapsed, setcollapsed] = useState();
  const menus = [
    {
      key: '1',
      icon: 'iconicon_yingyongguanli',
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          icon: 'iconmessage',
          label: 'Option1',
        },
        {
          key: '1-2',
          label: 'Option2',
        },
      ],
    },
    {
      key: '2',
      icon: 'iconhezi',
      label: 'Navigation Two',
      children: [
        {
          key: '2-1',
          label: 'Option1',
          children: [
            {
              key: '2-1-1',
              label: 'Sub-Option1',
              children: [
                {
                  key: '2-1-1-1',
                  label: 'Sub-Option1-Option1',
                },
              ],
            },
            {
              key: '2-1-2',
              label: 'Sub-Option2',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      key: '3',
      icon: 'iconjiaohu',
      label: 'Navigation Three',
      children: [
        {
          key: '3-1',
          label: 'Option1',
        },
      ],
    },
    {
      key: '4',
      disabled: true,
      icon: 'iconcloud-form',
      label: 'Navigation Four',
      children: [
        {
          key: '4-1',
          label: 'Option1',
        },
      ],
    },
  ];
  return (
    <>
      <Switch
        checkedChildren="展开"
        unCheckedChildren="收起"
        onChange={setcollapsed.bind(null, !collapsed)}
      />
      <Menu
        style={{ width: 200, marginTop: 10 }}
        menus={menus}
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1', '2', '2-1', '2-1-1']}
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
