---
order: 10
---

# InputNumber 数字输入框

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { InputNumber } from 'site-ui';
export default () => {
  return (
    <>
      <InputNumber placeholder="普通输入框" style={{ width: 100 }} />
    </>
  );
};
```

# API

| **属性名**   | **类型**    | **描述**               | **默认** |
| ------------ | ----------- | ---------------------- | -------- |
| value        | string      | 输入框默认内容         | 无       |
| disabled     | boolean     | 是否禁用状态           | false    |
| maxLength    | number      | 最大长度               | 无       |
| onChange     | function(e) | 输入框内容变化时的回调 | 无       |
| onPressEnter | function(e) | 按下回车的回调         | 无       |
| onBlur       | function(e) | 输入框得到焦点         | 无       |
| onFocus      | function(e) | 输入框失去焦点         | 无       |
| style        | Object      | 样式                   | 无       |
