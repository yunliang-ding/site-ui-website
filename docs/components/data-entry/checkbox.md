---
order: 2
---

# Checkbox 多选框

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Checkbox } from 'site-ui';
export default () => {
  return (
    <>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox checked>Default Checked</Checkbox>
    </>
  );
};
```

```jsx
/**
 * title: 失效状态
 */
import React from 'react';
import { Checkbox } from 'site-ui';
export default () => {
  return (
    <>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled checked>
        Checked Disabled
      </Checkbox>
    </>
  );
};
```

```jsx
/**
 * title: 组多选
 */
import React, { useState } from 'react';
import { CheckboxGroup } from 'site-ui';
export default () => {
  const options = ['html', 'css', 'javascript', 'node', 'nginx'];
  const [value, setvalue] = useState();
  console.log('checkbox value is: ', value);
  return (
    <>
      <CheckboxGroup
        options={options}
        value={value}
        onChange={value => {
          setvalue(value);
        }}
      />
      <CheckboxGroup
        options={options}
        disabled
        style={{ marginTop: 20 }}
        value={value}
      />
    </>
  );
};
```

```jsx
/**
 * title: 组多选部分禁用
 */
import React from 'react';
import { CheckboxGroup } from 'site-ui';
export default () => {
  const options = [
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
      disabled: true,
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'D',
      value: 'D',
    },
  ];
  return (
    <>
      <CheckboxGroup options={options} />
    </>
  );
};
```

# API

# Checkbox

| **属性名** | **类型**    | **描述**               | **默认** |
| ---------- | ----------- | ---------------------- | -------- |
| checked    | boolean     | 指定当前是否选中       | 无       |
| disabled   | boolean     | 失效状态               | 无       |
| onChange   | function(e) | 输入框内容变化时的回调 | 无       |
| style      | Object      | 样式                   | 无       |
| name       | string      | 样式                   | 无       |

# CheckboxGroup

| **属性名** | **类型**        | **描述**               | **默认** |
| ---------- | --------------- | ---------------------- | -------- |
| value      | string[]        | 指定选中的选项         | 无       |
| disabled   | boolean         | 失效状态               | 无       |
| onChange   | function(value) | 输入框内容变化时的回调 | 无       |
| name       | string          | 样式                   | 无       |
| options    | string[]        | 指定可选项             | 无       |
| style      | Object          | 样式                   | 无       |
