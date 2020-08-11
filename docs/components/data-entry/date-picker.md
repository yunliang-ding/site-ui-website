---
order: 7
---

# DatePicker 日期选择

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { DatePicker, Button } from 'site-ui';
export default () => {
  return (
    <>
      <DatePicker
        style={{ width: 200 }}
        placeholder="选择日期"
        onChange={e => {
          console.log('value is', e);
        }}
      />
      <br />
      <DatePicker
        disabled
        style={{ width: 200 }}
        value="2020-08-12"
        placeholder="选择日期"
        allowClear
        onChange={e => {
          console.log('value is', e);
        }}
      />
      <br />
      <DatePicker
        style={{ width: 200 }}
        value="2020-08-12"
        placeholder="选择日期"
        allowClear
        onChange={e => {
          console.log('value is', e);
        }}
      />
      <br />
    </>
  );
};
```

```jsx
/**
 * title: 前缀后缀
 */
import React from 'react';
import { DatePicker, Button } from 'site-ui';
export default () => {
  return (
    <>
      <DatePicker
        addonBefore={'开始时间'}
        style={{ width: 300 }}
        placeholder="选择日期"
        allowClear
        onChange={e => {
          console.log('value is', e);
        }}
      />
      <br />
      <DatePicker
        addonBefore={'结束时间'}
        style={{ width: 300 }}
        placeholder="选择日期"
        allowClear
        onChange={e => {
          console.log('value is', e);
        }}
      />
      <br />
    </>
  );
};
```

# API

| **属性名**   | **类型**                | **描述**           | **默认** |
| ------------ | ----------------------- | ------------------ | -------- |
| value        | string                  | 指定当前选中的条目 | 无       |
| placeholder  | string                  | 提示文案           | 无       |
| allowClear   | boolean                 | 支持清除           | false    |
| style        | object                  | 输入框 style 属性  | 无       |
| onChange     | function(value, option) | 选中 option        | 无       |
| addonAfter   | ReactNode               | 设置前置标签       | 无       |
| addonBefore  | ReactNode               | 设置后置标签       | 无       |
| disabled     | boolean                 | 是否禁用状态       | false    |
| disabledDate | function(e)             | 禁用日期           | false    |
