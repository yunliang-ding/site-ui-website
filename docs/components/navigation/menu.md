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
  const [theme, settheme] = useState('light');
  const menus = [
    {
      key: '1',
      icon: 'suiconicon_yingyongguanli',
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          icon: 'suiconmessage',
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
      icon: 'suiconhezi',
      label: 'Navigation Two Navigation Two',
      children: [
        {
          key: '2-1',
          label: 'Option1',
          children: [
            {
              key: '2-1-1',
              label: 'Sub-Option1',
              icon: 'suiconempty',
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
      icon: 'suiconjiaohu',
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
      icon: 'suiconcloud-form',
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
      &nbsp;&nbsp;&nbsp;
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={settheme.bind(null, theme === 'dark' ? 'light' : 'dark')}
      />
      <Menu
        style={{ width: 240, margin: '10px 0' }}
        menus={menus}
        theme={theme}
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

| **属性名** | **类型**                     | **描述**     | **默认** |
| ---------- | ---------------------------- | ------------ | -------- |
| menus      | array                        | 菜单数据     | []       |
| menuClick  | function(openKey, selectKey) | 菜单点击事件 | 无       |
| openKey    | string[]                     | 样式         | 无       |
| selectKey  | string[]                     | icon         | 无       |
| style      | object                       | 点击回调     | 无       |
| collapsed  | boolean                      | 是否收起     | false    |
| theme      | string                       | light/dark   | light    |
