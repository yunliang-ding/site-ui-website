---
order: 14
---

# Form 表单

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Form, Message } from 'site-ui';
const message = new Message({
  duration: 3,
});
export default () => {
  const fields = [
    {
      type: 'Input',
      name: 'username',
      sort: 1,
      field: {
        label: '名称',
        rules: [
          {
            required: true,
            message: '名称不能为空',
          },
          {
            pattern: '^[0-9]+(.[0-9]{1,2})?$',
            message: '名称格式异常',
          },
        ],
      },
      props: {
        placeholder: '请输入名称',
        style: {
          width: 160,
        },
      },
    },
    {
      type: 'CheckboxGroup',
      sort: 5,
      name: 'like',
      field: {
        label: '爱好',
        rules: [
          {
            required: true,
            message: '爱好不能为空',
          },
        ],
      },
      props: {
        options: [
          { key: 1, label: '听歌', value: 1 },
          { key: 2, label: '跑步', value: 2 },
        ],
      },
    },
    {
      type: 'RadioGroup',
      sort: 6,
      name: 'sex',
      field: {
        label: '性别',
        rules: [
          {
            required: true,
            message: '性别不能为空',
          },
        ],
      },
      props: {
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
      field: {
        label: '类型',
        rules: [
          {
            required: true,
            message: '类型不能为空',
          },
        ],
      },
      props: {
        placeholder: '请选择',
        allowClear: true,
        options: [
          { key: 1, label: 'Html5', value: 1 },
          { key: 2, label: 'Css3', value: 2, disabled: true },
          { key: 3, label: 'React', value: 3 },
        ],
        style: {
          width: 160,
        },
      },
    },
    {
      type: 'DatePicker',
      sort: 3,
      name: 'startDate',
      field: {
        label: '开始日期',
        rules: [
          {
            required: true,
            message: '开始日期不能为空',
          },
        ],
      },
      props: {
        placeholder: '开始日期',
        style: {
          width: 160,
        },
      },
    },
    {
      type: 'TimePicker',
      name: 'startTime',
      sort: 4,
      field: {
        label: '开始时间',
        rules: [
          {
            required: true,
            message: '开始时间不能为空',
          },
        ],
      },
      props: {
        placeholder: '开始时间',
        style: {
          width: 160,
        },
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
  ];
  const [loading, setloading] = useState(false);
  const submit = async () => {
    setloading(true);
    await new Promise(res => {
      setTimeout(() => {
        message.success('保存成功!');
        res();
      }, 1000);
    });
    setloading(false);
  };
  return (
    <>
      <Form
        fields={fields}
        btns={btns}
        onValueChanges={(name, value) => {
          console.log(name, value);
        }}
        loading={loading}
        onBtnClick={(type, error, values) => {
          console.log(type, error, values);
          if (type === 'submit') {
            if (!error) {
              // 提交
              submit();
            }
          }
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
