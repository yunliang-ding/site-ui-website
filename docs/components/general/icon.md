---
order: 2
---

# Icon 字体图标

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Icon type="suiconhezi" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconempty" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconcloud-form" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconjiaohu" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconweimingmingwenjianjia_rili" />
    </>
  );
};
```

```jsx
/**
 * title: 设置大小
 */
import React, { useState } from 'react';
import { Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Icon type="suiconhezi" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconempty" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconcloud-form" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconjiaohu" size={30} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconweimingmingwenjianjia_rili" size={30} />
    </>
  );
};
```

```jsx
/**
 * title: 设置颜色
 */
import React, { useState } from 'react';
import { Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Icon type="suiconhezi" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconempty" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconcloud-form" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconjiaohu" size={30} color="#1890ff" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon type="suiconweimingmingwenjianjia_rili" size={30} color="#1890ff" />
    </>
  );
};
```

# API

| **属性名** | **类型**    | **描述** | **默认** |
| ---------- | ----------- | -------- | -------- |
| size       | number      | 字体大小 | 18       |
| color      | stirng      | 字体颜色 | 无       |
| style      | Object      | 样式     | 无       |
| type       | string      | icon     | 无       |
| onClick    | Function(e) | 点击回调 | 无       |
