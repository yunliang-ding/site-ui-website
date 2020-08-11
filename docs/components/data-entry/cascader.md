---
order: 8
---

# Cascader 级联选择器

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Cascader } from 'site-ui';
export default () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
            {
              value: 'test',
              label: 'test',
              disabled: true,
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Cascader
        placeholder="请选择"
        options={options}
        style={{ width: 200 }}
        onChange={value => {
          console.log(value);
        }}
      />
    </>
  );
};
```

# API

| **属性名**        | **类型**                | **描述**                            | **默认** |
| ----------------- | ----------------------- | ----------------------------------- | -------- |
| value             | string/string[]         | 指定当前选中的条目                  | 无       |
| options           | string[]                | 下拉选项                            | 无       |
| placeholder       | string                  | 提示文案                            | 无       |
| allowClear        | boolean                 | 支持清除                            | false    |
| disabled          | boolean                 | 是否禁用                            | false    |
| style             | object                  | 输入框 style 属性                   | 无       |
| dropdownClassName | object                  | 下拉菜单的 style 属性               | 无       |
| dropdownStyle     | object                  | 下拉菜单的 style 属性               | 无       |
| open              | boolean                 | 是否展开下拉菜单                    | false    |
| onChange          | function(value, option) | 选中 option，或 input 的 value 变化 | 无       |
