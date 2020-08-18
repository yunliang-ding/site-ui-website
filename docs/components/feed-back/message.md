# Message 提示信息

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Message, Button } from 'site-ui';
export default () => {
  const message = new Message({
    duration: 3,
  });
  return (
    <>
      <Button
        onClick={() => {
          message.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button
        onClick={() => {
          message.error('错误提示!');
        }}
      >
        错误提示
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button
        onClick={() => {
          message.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button
        onClick={() => {
          message.normal('信息提示!');
        }}
      >
        信息提示
      </Button>
    </>
  );
};
```

# API

| **属性名** | **类型**                     | **描述**   | **默认** |
| ---------- | ---------------------------- | ---------- | -------- |
| message    | array                        | 文案       | 无       |
| closable   | function(openKey, selectKey) | 是否可关闭 | false    |
| type       | string                       | 类型       | 无       |
| style      | object                       | 样式       | 无       |
