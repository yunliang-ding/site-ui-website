# Tabs 选项卡

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Tabs } from 'site-ui';
export default () => {
  const data = [
    {
      key: 1,
      label: <span>Tab1</span>,
      content: (
        <div>
          Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1
        </div>
      ),
    },
    {
      key: 2,
      label: <span>Tab2</span>,
      content: <div>sub-tab2</div>,
    },
    {
      key: 3,
      label: <span>Tab3</span>,
      content: <div>sub-tab3</div>,
    },
  ];
  return (
    <>
      <Tabs
        style={{
          height: 300,
        }}
        data={data}
        onClick={e => {
          console.log(e);
        }}
      />
    </>
  );
};
```

```jsx
/**
 * title: 支持关闭
 */
import React, { useState } from 'react';
import { Tabs } from 'site-ui';
export default () => {
  const data = [
    {
      key: 1,
      label: <span>Tab1</span>,
      content: (
        <div>
          Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1
        </div>
      ),
    },
    {
      key: 2,
      label: <span>Tab2</span>,
      content: <div>sub-tab2</div>,
    },
    {
      key: 3,
      label: <span>Tab3</span>,
      content: <div>sub-tab3</div>,
    },
  ];
  return (
    <>
      <Tabs
        style={{
          height: 300,
        }}
        closable
        data={data}
        onClick={e => {
          console.log(e);
        }}
      />
    </>
  );
};
```

# API

| **属性名** | **类型**          | **描述**     | **默认** |
| ---------- | ----------------- | ------------ | -------- |
| data       | array             | 数据源       | 无       |
| activeKey  | string            | 选中的 key   | 无       |
| style      | object            | 样式         | 无       |
| closable   | boolean           | 是否支持关闭 | false    |
| onClick    | function(visible) | 点击回调     | 无       |
| onRemove   | function(visible) | 删除回调     | 无       |
