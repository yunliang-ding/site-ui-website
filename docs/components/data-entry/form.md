---
order: 14
---

# Form 表单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Input, Form } from 'site-ui';
export default () => {
  const submit = async (error, values) => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  };
  return (
    <>
      <Form onSubmit={submit} onSubmitText="保存">
        <Form.Field
          label="姓名"
          initialValue="张三"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Field>
        <Form.Field
          label="邮箱"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Field>
      </Form>
    </>
  );
};
```

# API

| **属性名**   | **类型**    | **描述**               | **默认** |
| ------------ | ----------- | ---------------------- | -------- |
| addonAfter   | ReactNode   | 设置前置标签           | 无       |
| addonBefore  | ReactNode   | 设置后置标签           | 无       |
| value        | string      | 输入框默认内容         | 无       |
| disabled     | boolean     | 是否禁用状态           | false    |
| maxLength    | number      | 最大长度               | 无       |
| prefix       | ReactNode   | 带有前缀图标的         | 无       |
| suffix       | ReactNode   | 带有后缀图标的         | 无       |
| type         | string      | text/password/textarea | text     |
| allowClear   | boolean     | 支持清除               | false    |
| onChange     | function(e) | 输入框内容变化时的回调 | 无       |
| onPressEnter | function(e) | 按下回车的回调         | 无       |
| onBlur       | function(e) | 输入框得到焦点         | 无       |
| onFocus      | function(e) | 输入框失去焦点         | 无       |
| style        | Object      | 样式                   | 无       |
