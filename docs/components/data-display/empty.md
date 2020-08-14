# Empty 空数据

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Empty } from 'site-ui';
export default () => {
  return (
    <>
      <Empty />
    </>
  );
};
```

```jsx
/**
 * title: 自定义文案
 */
import React from 'react';
import { Empty } from 'site-ui';
export default () => {
  return (
    <>
      <Empty label={'暂无数据展示'} />
    </>
  );
};
```

```jsx
/**
 * title: 自定义图标
 */
import React from 'react';
import { Empty, Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Empty icon="iconsearchicon" label={'查找信息为空'} />
    </>
  );
};
```

# API

| **属性名** | **类型**  | **描述**   | **默认**  |
| ---------- | --------- | ---------- | --------- |
| label      | ReactNode | 展示的内容 | No Data   |
| icon       | string    | icon       | iconempty |
