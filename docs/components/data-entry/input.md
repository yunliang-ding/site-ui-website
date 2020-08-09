---
order: 1
---

# Input 输入框

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Input } from 'site-ui';
export default () => {
  return (
    <>
      <Input placeholder="普通输入框" />
      <Input placeholder="禁止" disabled style={{ marginTop: 20 }} />
      <Input placeholder="指定宽度" style={{ width: 300, marginTop: 20 }} />
      <Input
        placeholder="指定长度11位"
        style={{ width: 300, marginTop: 20 }}
        maxLength={11}
      />
    </>
  );
};
```

```jsx
/**
 * title: 前后缀
 */
import React from 'react';
import { Input } from 'site-ui';
export default () => {
  return (
    <>
      <Input placeholder="姓名" addonBefore={'姓名'} />
      <Input placeholder="密码" addonAfter="密码" style={{ marginTop: 20 }} />
      <Input
        placeholder="超过文本的字符看不到"
        addonBefore={'超过文本的字符看不到'}
        style={{ marginTop: 20 }}
      />
      <Input
        placeholder="超过文本的字符看不到"
        addonAfter={'超过文本的字符看不到'}
        style={{ marginTop: 20 }}
      />
    </>
  );
};
```

```jsx
/**
 * title: 内联前后缀
 */
import React from 'react';
import { Input, Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Input
        placeholder="邮箱"
        prefix={<Icon size={18} type="iconweimingmingwenjianjia_rili" />}
        style={{ width: 300 }}
      />
      <Input
        placeholder="查找"
        suffix={<Icon type="iconsearchicon" />}
        style={{ marginTop: 20, width: 300 }}
      />
      <Input
        placeholder="发送到"
        prefix={
          <Icon size={18} type="iconduihao" style={{ color: '#4569d4' }} />
        }
        suffix={'.com'}
        style={{ marginTop: 20, width: 300 }}
      />
    </>
  );
};
```

```jsx
/**
 * title: 多行文本
 */
import React from 'react';
import { Input } from 'site-ui';
export default () => (
  <>
    <Input
      type="textarea"
      placeholder="详细信息.."
      addonBefore={'描述'}
      addonAfter={'限制100字符'}
      style={{ marginBottom: 20 }}
    />
    <Input
      type="textarea"
      disabled
      placeholder="详细信息.."
      addonBefore={'描述'}
    />
  </>
);
```

```jsx
/**
 * title: 支持清除
 */
import React from 'react';
import { Input, Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Input placeholder="支持清除" style={{ width: 300 }} allowClear />
      <Input
        placeholder="支持清除"
        suffix={<Icon type="iconweimingmingwenjianjia_rili" />}
        style={{ width: 300, marginTop: 20 }}
        allowClear
      />
    </>
  );
};
```

# API

| **属性名**   | **类型**    | **描述**                         | **默认** |
| ------------ | ----------- | -------------------------------- | -------- |
| addonAfter   | ReactNode   | 设置前置标签                     | 无       |
| addonBefore  | ReactNode   | 设置后置标签                     | 无       |
| value        | string      | 输入框默认内容                   | 无       |
| disabled     | boolean     | 是否禁用状态                     | false    |
| maxLength    | number      | 最大长度                         | 无       |
| prefix       | ReactNode   | 带有前缀图标的                   | 无       |
| suffix       | ReactNode   | 带有后缀图标的                   | 无       |
| type         | string      | input 类型                       | input    |
| allowClear   | boolean     | 支持清除，使用之后 suffix 不可见 | false    |
| onChange     | function(e) | 输入框内容变化时的回调           | 无       |
| onPressEnter | function(e) | 按下回车的回调                   | 无       |
| onBlur       | function(e) | 输入框得到焦点                   | 无       |
| onFocus      | function(e) | 输入框失去焦点                   | 无       |
| style        | Object      | 样式                             | 无       |