---
order: 7
---

# DatePicker 日期选择

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { DatePicker } from 'site-ui';
export default () => {
  return (
    <>
      <DatePicker
        style={{ width: 200 }}
        placeholder="选择日期"
        onChanege={e => {
          console.log(e);
        }}
      />
    </>
  );
};
```

# API

| **属性名**        | **类型**                | **描述**              | **默认** |
| ----------------- | ----------------------- | --------------------- | -------- |
| value             | string                  | 指定当前选中的条目    | 无       |
| dataSource        | string[]                | 下拉选项              | 无       |
| placeholder       | string                  | 提示文案              | 无       |
| allowClear        | boolean                 | 支持清除              | false    |
| style             | object                  | 输入框 style 属性     | 无       |
| dropdownClassName | object                  | 下拉菜单的 style 属性 | 无       |
| dropdownStyle     | object                  | 下拉菜单的 style 属性 | 无       |
| onChange          | function(value, option) | 选中 option           | 无       |
