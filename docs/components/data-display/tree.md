# Tree 树形控件

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Tree, Switch } from 'site-ui';
export default () => {
  const [disabled, setdisabled] = useState();
  const treeData = [
    {
      key: '1',
      label: 'Parent1',
      children: [
        {
          key: '1-1',
          label: 'node1',
          children: [
            {
              key: '1-2-1',
              label: 'sub-node1',
            },
            {
              key: '1-2-2',
              label: 'sub-node2',
            },
          ],
        },
        {
          key: '1-2',
          label: 'node2',
        },
      ],
    },
    {
      key: '2',
      label: 'Parent2',
      children: [
        {
          key: '2-1',
          label: 'node1',
        },
        {
          key: '2-2',
          label: 'node2',
        },
      ],
    },
    {
      key: '3',
      label: 'Parent3',
      children: [
        {
          key: '3-1',
          label: 'node1',
        },
        {
          key: '3-2',
          label: 'node2',
        },
      ],
    },
  ];
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Tree
          style={{
            width: 200,
            margin: '10px 0',
            background: '#f9f9f9',
            marginRight: 50,
          }}
          treeData={treeData}
          disabled={disabled}
          expandedKeys={['1']}
          onSelected={e => {
            console.log('onSelected', e);
          }}
        />
        <Tree
          style={{ width: 200, margin: '10px 0', background: '#f9f9f9' }}
          treeData={treeData}
          disabled={disabled}
          checkable
          expandedKeys={['1']}
          checkedKeys={['1-2']}
          onChecked={e => {
            console.log('onChecked', e);
          }}
        />
      </div>
      <br />
      <Switch
        checkedChildren="开启"
        unCheckedChildren="禁用"
        onChange={setdisabled.bind(null, !disabled)}
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
