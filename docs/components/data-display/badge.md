# Badge 徽章

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Badge, Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Badge count={2}>Default</Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge count={2} color="#1890ff">
        Blue
      </Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge count={2} color="red">
        Red
      </Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge dot>Dot</Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Badge
        color="transparent"
        count={<Icon color="red" type="suiconpassword-visible" />}
      >
        Icon
      </Badge>
    </>
  );
};
```

# API

| **属性名** | **类型**  | **描述**                         | **默认** |
| ---------- | --------- | -------------------------------- | -------- |
| color      | ReactNode | 自定义小圆点的颜色               | 无       |
| count      | ReactNode | 展示的数字                       | 无       |
| dot        | boolean   | 不展示数字，只有一个小红点       | false    |
| title      | string    | 设置鼠标放在状态点上时显示的文字 | 无       |
