# Tooltip 提示

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Tooltip } from 'site-ui';
export default () => {
  return (
    <>
      <Tooltip title={<>这个是一个描述信息</>}>
        Tooltip will show on mouse enter.
      </Tooltip>
    </>
  );
};
```

```jsx
/**
 * title: 方向/主题
 */
import React, { useState } from 'react';
import { Tooltip, Button, Icon, Switch } from 'site-ui';
export default () => {
  const [theme, settheme] = useState('light');
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={settheme.bind(null, theme === 'light' ? 'dark' : 'light')}
        checkedChildren="dark"
        unCheckedChildren="light"
      />
      <br />
      <br />
      <br />
      <br />
      <Tooltip title={<>这个是一个描述信息</>} placement="top" theme={theme}>
        <Button>Top</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="bottom" theme={theme}>
        <Button>Bottom</Button>
      </Tooltip>
      <br />
      <br />
      <br />
      <br />
      <Tooltip title={<>这个是一个描述信息</>} placement="left" theme={theme}>
        <Button>Left</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="right" theme={theme}>
        <Button>Right</Button>
      </Tooltip>
    </>
  );
};
```

# API

| **属性名**       | **类型**          | **描述**       | **默认** |
| ---------------- | ----------------- | -------------- | -------- |
| title            | ReactNode         | 展示的内容     | 无       |
| placement        | string            | 方向           | 无       |
| overlayClassName | object            | 类名           | 无       |
| overlayStyle     | object            | 样式           | 无       |
| innerStyle       | object            | 内部盒子样式   | 无       |
| visible          | boolean           | 是否显示       | false    |
| onVisibleChange  | Function(visible) | 显示改变的回调 | 无       |
| theme            | string            | light/dark     | light    |
