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
      content: <div>sub-tab1</div>,
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
        activeKey={1}
        onClick={e => {
          console.log(e);
        }}
      />
    </>
  );
};
```

# API

| **属性名**       | **类型**          | **描述**       | **默认** |
| ---------------- | ----------------- | -------------- | -------- |
| title            | ReactNode         | 展示的内容     | 无       |
| placement        | string            | 方向           | 无       |
| overlayClassName | object            | 类名           | 无       |
| overlayStyle     | object            | 样式           | 无       |
| innerStyle       | object            | 内部盒子样式   | 无       |
| visible          | boolean           | 是否显示       | false    |
| onVisibleChange  | function(visible) | 显示改变的回调 | 无       |
| theme            | string            | light/dark     | light    |
