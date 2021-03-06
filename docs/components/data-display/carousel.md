# Carousel 走马灯

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Carousel, Icon } from 'site-ui';
export default () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const pages = [
    <div style={style}>
      <Icon type="suiconpassword-visible" size={50} />
      page1
    </div>,
    <div style={style}>
      <Icon type="suiconweimingmingwenjianjia_rili" size={50} />
      page2
    </div>,
    <div style={style}>
      <Icon type="suiconempty" size={50} />
      page3
    </div>,
    <div style={style}>
      <Icon type="suiconpassword-invisible" size={50} />
      page4
    </div>,
  ];
  return (
    <div style={{ display: 'flex' }}>
      <Carousel style={{ width: 500, height: 240 }} pages={pages} />
      <Carousel
        showArrow
        style={{ width: 500, height: 240, marginLeft: 100 }}
        pages={pages}
      />
    </div>
  );
};
```

```jsx
/**
 * title: 自动播放/渐变模式
 */
import React from 'react';
import { Carousel, Icon } from 'site-ui';
export default () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const pages = [
    <div style={style}>
      <Icon type="suiconpassword-visible" size={50} />
      page1
    </div>,
    <div style={style}>
      <Icon type="suiconweimingmingwenjianjia_rili" size={50} />
      page2
    </div>,
    <div style={style}>
      <Icon type="suiconempty" size={50} />
      page3
    </div>,
    <div style={style}>
      <Icon type="suiconpassword-invisible" size={50} />
      page4
    </div>,
  ];
  return (
    <>
      <Carousel
        showArrow
        autoPlay
        effect="fade"
        style={{ width: 500, height: 240 }}
        pages={pages}
      />
    </>
  );
};
```

# API

| **属性名**   | **类型**             | **描述**        | **默认** |
| ------------ | -------------------- | --------------- | -------- |
| style        | object               | 样式            | 无       |
| pages        | ReactNode[]          | 每一页的结构    | 无       |
| effect       | string               | 模式：fade      | 无       |
| currentPage  | number               | 当前页码        | 1        |
| onChange     | funcito(currentPage) | 页码改变的回调  | 无       |
| autoPlay     | boolean              | 自动播放        | false    |
| autoPlayTime | number               | 自动播放间隔 ms | 3000     |
| showArrow    | boolean              | 展示箭头        | false    |
| legend       | boolean              | 是否展示        | true     |
| loop         | boolean              | 是否循环轮播    | true     |
| swipe        | boolean              | 是否开启滑动    | true     |
