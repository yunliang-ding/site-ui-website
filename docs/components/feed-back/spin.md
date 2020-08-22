# Spin 数据加载

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Spin, Switch, Empty } from 'site-ui';
export default () => {
  const [loading, setloading] = useState(false);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Spin loading={loading}>
          <div style={{ width: 400, height: 200, border: '1px solid #eee' }}>
            <Empty />
          </div>
        </Spin>
        <Spin loading={loading} message="提示文案">
          <div style={{ width: 400, height: 200, border: '1px solid #eee' }}>
            <Empty label="加载区域" icon="iconsearchicon" />
          </div>
        </Spin>
        <Spin loading={loading} icon="iconloading">
          <div style={{ width: 400, height: 200, border: '1px solid #eee' }}>
            <Empty label="显示时间" icon="icontime" />
          </div>
        </Spin>
      </div>
      <br />
      <Switch
        checkedChildren="关闭"
        unCheckedChildren="开启"
        checked={loading}
        onChange={setloading.bind(null, !loading)}
      />
    </>
  );
};
```

# API

| **属性名** | **类型** | **描述**   | **默认** |
| ---------- | -------- | ---------- | -------- |
| loading    | boolean  | 展示的内容 | false    |
| icon       | string   | icon       | 无       |
| style      | object   | 样式       | 无       |
| message    | string   | 提示文案   | 无       |
