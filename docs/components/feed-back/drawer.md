# Drawer 抽屉

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Drawer, Button } from 'site-ui';
export default () => {
  const [visible, setvisible] = useState(false);
  const [placement, setplacement] = useState('right');
  const [height, setheight] = useState('100vh');
  const [closable, setclosable] = useState(true);
  const [footer, setfooter] = useState(null);
  const [mask, setmask] = useState(true);
  const renderFooter = () => {
    return (
      <>
        <Button type="warn" onClick={setvisible.bind(null, false)}>
          确定
        </Button>
        <Button type="danger" onClick={setvisible.bind(null, false)}>
          取消
        </Button>
      </>
    );
  };
  console.log('setvisible', visible);
  return (
    <>
      <Button
        onClick={() => {
          setvisible(true);
        }}
      >
        打开
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setclosable(false);
        }}
      >
        没有关闭
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setmask(false);
        }}
      >
        没有遮罩
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setplacement('left');
        }}
      >
        左侧打开
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setheight('calc(100vh - 64px)');
        }}
      >
        自定义高度
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setfooter(false);
        }}
      >
        没有Footer
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        onClick={() => {
          setvisible(true);
          setfooter(renderFooter());
        }}
      >
        自定义Footer
      </Button>
      <Drawer
        title="Basic Drawer"
        style={{
          width: 500,
          height,
        }}
        placement={placement}
        closable={closable}
        mask={mask}
        footer={footer}
        visible={visible}
        content={
          <>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </>
        }
        onClose={() => {
          console.log('close');
        }}
        onOk={() => {
          console.log('ok');
        }}
      />
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
