---
order: 9
---

# Dropdown 下拉菜单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Button, Dropdown, Icon } from 'site-ui';
export default () => {
  const overlay = ['Html', 'Css', 'React', 'Vue'].map(item => {
    return (
      <p key={item} style={{ fontSize: 12, padding: 4 }}>
        {item}
      </p>
    );
  });
  return (
    <>
      <Dropdown overlay={overlay}>
        <Button>Click me</Button>
      </Dropdown>
    </>
  );
};
```

# API

| **属性名**     | **类型**        | **描述**     | **默认** |
| -------------- | --------------- | ------------ | -------- |
| value          | number          | 值           | 0        |
| disabled       | boolean         | 是否禁用     | false    |
| tooltipVisible | boolean         | 是否显示进度 | false    |
| onChange       | function(value) | 改变后的回调 | 无       |
| min            | number          | 开始区间     | 0        |
| max            | number          | 结束区间     | 100      |
| style          | object          | 滑块样式     | 无       |
