---
order: 8
---

# Cascader 级联选择器

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Cascader, Checkbox } from 'site-ui';
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
              value: 'disabled',
              label: 'disabled',
              disabled: true,
            },
          ],
        },
      ],
    },
  ];
  const [disabled, setdisabled] = useState();
  return (
    <>
      <Cascader
        placeholder="请选择"
        disabled={disabled}
        options={options}
        style={{ width: 200 }}
        onChange={value => {
          console.log(value);
        }}
      />
      <br />
      <br />
      <Checkbox
        onChange={e => {
          setdisabled(e.target.checked);
        }}
      >
        设置禁用
      </Checkbox>
    </>
  );
};
```

```jsx
/**
 * title: 设置默认值
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
        value={['jiangsu', 'nanjing', 'zhonghuamen']}
        onChange={value => {
          console.log(value);
        }}
      />
    </>
  );
};
```

```jsx
/**
 * title: 自定义字段名
 */
import React, { useState } from 'react';
import { Cascader } from 'site-ui';
export default () => {
  const options = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
      items: [
        {
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [
            {
              code: 'xihu',
              name: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',
      items: [
        {
          code: 'nanjing',
          name: 'Nanjing',
          items: [
            {
              code: 'zhonghuamen',
              name: 'Zhong Hua Men',
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
        fieldNames={{ label: 'name', value: 'code', children: 'items' }}
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

| **属性名**        | **类型**                | **描述**                              | **默认** |
| ----------------- | ----------------------- | ------------------------------------- | -------- |
| value             | string/string[]         | 指定当前选中的条目                    | 无       |
| options           | string[]                | 下拉选项                              | 无       |
| placeholder       | string                  | 提示文案                              | 无       |
| allowClear        | boolean                 | 支持清除                              | false    |
| disabled          | boolean                 | 是否禁用                              | false    |
| style             | object                  | 输入框 style 属性                     | 无       |
| dropdownClassName | object                  | 下拉菜单的 style 属性                 | 无       |
| dropdownStyle     | object                  | 下拉菜单的 style 属性                 | 无       |
| open              | boolean                 | 是否展开下拉菜单                      | false    |
| onChange          | function(value, option) | 选中 option，或 input 的 value 变化   | 无       |
| fieldNames        | object                  | 自定义 options 中 label name children | 无       |
