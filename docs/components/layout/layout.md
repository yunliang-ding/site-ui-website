---
order: 1
---

# Layout 布局

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Layout } from 'site-ui';
import './index.css';
const { Header, Sider, Content, Footer } = Layout;
export default () => {
  return (
    <>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div className="__dumidemo-layout-box">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </>
  );
};
```

```jsx
/**
 * title: 标准后台布局
 */
import React, { useState } from 'react';
import { Layout, Button, Switch, Menu } from 'site-ui';
import './index.css';
const { Header, Sider, Content, Footer } = Layout;
export default () => {
  const [collapsible, setcollapsible] = useState(false);
  const [collapsed, setcollapsed] = useState();
  const [theme, settheme] = useState('light');
  const menus = [
    {
      key: '1',
      icon: 'suiconicon_yingyongguanli',
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          icon: 'suiconmessage',
          label: 'Option1',
        },
        {
          key: '1-2',
          label: 'Option2',
        },
      ],
    },
    {
      key: '2',
      icon: 'suiconhezi',
      label: 'Navigation Two Navigation Two',
      children: [
        {
          key: '2-1',
          label: 'Option1',
          children: [
            {
              key: '2-1-1',
              label: 'Sub-Option1',
              icon: 'suiconempty',
              children: [
                {
                  key: '2-1-1-1',
                  label: 'Sub-Option1-Option1',
                },
              ],
            },
            {
              key: '2-1-2',
              label: 'Sub-Option2',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      key: '3',
      icon: 'suiconjiaohu',
      label: 'Navigation Three',
      children: [
        {
          key: '3-1',
          label: 'Option1',
        },
      ],
    },
    {
      key: '4',
      disabled: true,
      icon: 'suiconcloud-form',
      label: 'Navigation Four',
      children: [
        {
          key: '4-1',
          label: 'Option1',
        },
      ],
    },
  ];
  return (
    <>
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={settheme.bind(null, theme === 'dark' ? 'light' : 'dark')}
      />
      <div className="__dumidemo-admin-layout">
        <Layout>
          <Sider
            width={260}
            theme={theme}
            collapsible
            onCollapse={setcollapsed.bind(null, !collapsed)}
          >
            <div className="logo">Logo</div>
            <Menu
              menus={menus}
              theme={theme}
              collapsed={collapsed}
              collapsedWidth={80}
              menuClick={(openkey, selectKey) => {
                console.log(openkey, selectKey);
              }}
              openKey={['1', '2', '2-1', '2-1-1']}
              selectKey={['1-2']}
            />
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Site-UI ©2020 Created by DYL</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
```

# API

| **属性名** | **类型**    | **描述**   | **默认** |
| ---------- | ----------- | ---------- | -------- |
| disabled   | boolean     | 是否禁用   | 20       |
| onClick    | function(e) | 点击的回调 | 20       |
| icon       | string      | 图标       | 20       |
| loading    | boolean     | 是否加载   | 20       |
| type       | string      | 主题       | 20       |
| style      | object      | 样式       | 20       |
