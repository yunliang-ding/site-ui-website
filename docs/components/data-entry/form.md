---
order: 14
---

# Form 表单

```jsx
/**
 * title: 基本使用 JSON2Form
 */
import React, { useState } from 'react';
import { Form } from 'site-ui';
export default () => {
  const fields = [
    {
      type: 'Input',
      name: 'username',
      label: '名称',
      sort: 1,
      props: {
        placeholder: '请输入名称',
        value: '测试用户名称',
        rules: [
          {
            required: true,
            message: '名称不能为空',
          },
          {
            pattern: '^[0-9]+(.[0-9]{1,2})?$',
            message: '请输入合法的字符',
          },
        ],
      },
    },
    {
      type: 'CheckboxGroup',
      sort: 5,
      name: 'like',
      label: '爱好',
      props: {
        options: [
          { key: 1, label: '听歌', value: 1 },
          { key: 2, label: '跑步', value: 2 },
        ],
        initialValue: [1, 2],
        rules: [
          {
            required: true,
            message: '爱好不能为空',
          },
        ],
      },
    },
    {
      type: 'RadioGroup',
      sort: 6,
      name: 'sex',
      label: '性别',
      props: {
        value: 1,
        rules: [
          {
            required: true,
            message: '性别不能为空',
          },
        ],
        options: [
          { key: 1, label: '男', value: 1 },
          { key: 2, label: '女', value: 2 },
        ],
      },
    },
    {
      type: 'Select',
      sort: 2,
      name: 'types',
      label: '类型',
      props: {
        value: 1,
        rules: [
          {
            required: true,
            message: '类型不能为空',
          },
        ],
        options: [
          { key: 1, label: 'Html5', value: 1 },
          { key: 2, label: 'Css3', value: 2, disabled: true },
          { key: 3, label: 'React', value: 3 },
        ],
      },
    },
    {
      type: 'DatePicker',
      sort: 3,
      name: 'startDate',
      label: '活动开始日期',
      props: {
        value: '2020-08-20',
        rules: [
          {
            required: true,
            message: '活动开始日期不能为空',
          },
        ],
        placeholder: '请输入活动开始日期',
      },
    },
    {
      type: 'TimePicker',
      sort: 4,
      name: 'startTime',
      label: '活动开始时间',
      props: {
        value: '',
        rules: [
          {
            required: true,
            message: '活动开始时间不能为空',
          },
        ],
        placeholder: '开始时间',
      },
    },
  ];
  const btns = [
    {
      label: '提交',
      type: 'submit',
      props: {
        type: 'primary',
      },
    },
    {
      label: '取消',
      type: 'reset',
      props: {
        type: 'primary',
        ghost: true,
        style: {
          marginLeft: 20,
        },
      },
    },
  ];
  return (
    <>
      <Form
        fields={fields}
        btns={btns}
        onEvent={(type, values) => {
          console.log(type, values);
        }}
      />
    </>
  );
};
```

# API

| **属性名** | **类型**               | **描述**     | **默认** |
| ---------- | ---------------------- | ------------ | -------- |
| fields     | array                  | 表单组       | []       |
| btns       | array                  | 按钮组       | []       |
| onEvent    | function(type, values) | 按钮点击回调 | 无       |
