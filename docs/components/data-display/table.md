# Table 基础表格

```jsx
/**
 * title: 基本使用
 */
import React, { useState } from 'react';
import { Table, Button, Select } from 'site-ui';
export default () => {
  const data = [
    {
      key: Math.random(),
      no: 1,
      application: '用户管理',
      role: 1,
      roleName: '管理员',
      count: 1,
    },
    {
      key: Math.random(),
      no: 2,
      application: '开发手册',
      role: 2,
      roleName: '技术人员',
      count: 2,
    },
    {
      key: Math.random(),
      no: 3,
      application: '后台录入',
      role: 3,
      roleName: '开发人员',
      count: 3,
    },
    {
      key: Math.random(),
      no: 4,
      application: '前台显示',
      role: 4,
      roleName: '实施运维',
      count: 4,
    },
  ];
  const [role, setrole] = useState(-1);
  const [dataSource, setdataSource] = useState(data);
  const columns = [
    {
      title: '序号',
      dataIndex: 'no',
    },
    {
      title: '应用名称',
      dataIndex: 'application',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
    },
    {
      title: '子进程数',
      dataIndex: 'count',
    },
    {
      title: '操作',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return (
            <Button
              type="dashed"
              style={{ marginRight: 8 }}
              onClick={() => {
                alert(m);
              }}
            >
              {m}
            </Button>
          );
        });
      },
    },
  ];
  return (
    <>
      <Table rowKey="key" dataSource={dataSource} columns={columns} />
    </>
  );
};
```

```jsx
/**
 * title: 排序和过滤
 */
import React, { useState } from 'react';
import { Table, Button, Select } from 'site-ui';
export default () => {
  const data = [
    {
      key: Math.random(),
      no: 1,
      application: '用户管理',
      role: 1,
      roleName: '管理员',
      count: 1,
    },
    {
      key: Math.random(),
      no: 2,
      application: '开发手册',
      role: 2,
      roleName: '技术人员',
      count: 2,
    },
    {
      key: Math.random(),
      no: 3,
      application: '后台录入',
      role: 3,
      roleName: '开发人员',
      count: 3,
    },
    {
      key: Math.random(),
      no: 4,
      application: '前台显示',
      role: 4,
      roleName: '实施运维',
      count: 4,
    },
  ];
  const [role, setrole] = useState(-1);
  const [dataSource, setdataSource] = useState(data);
  const columns = [
    {
      title: '序号',
      dataIndex: 'no',
      sort: true,
    },
    {
      title: '应用名称',
      dataIndex: 'application',
    },
    {
      title: (
        <Select
          style={{
            width: 130,
            background: 'inherit',
          }}
          options={[
            {
              label: '全部类型',
              value: -1,
            },
            {
              label: '管理员',
              value: 1,
            },
            {
              label: '技术人员',
              value: 2,
            },
            {
              label: '开发人员',
              value: 3,
            },
            {
              label: '实施运维',
              value: 4,
            },
          ]}
          value={role}
          onChange={role => {
            setrole(role);
            setdataSource(
              data.filter(item => item.role === role || role === -1),
            );
          }}
        />
      ),
      dataIndex: 'roleName',
    },
    {
      title: '子进程数',
      dataIndex: 'count',
      sort: true,
    },
    {
      title: '操作',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return (
            <Button
              type="dashed"
              style={{ marginRight: 8 }}
              onClick={() => {
                alert(m);
              }}
            >
              {m}
            </Button>
          );
        });
      },
    },
  ];
  return (
    <>
      <Table rowKey="key" dataSource={dataSource} columns={columns} />
    </>
  );
};
```

```jsx
/**
 * title: 宽度超出省略号
 */
import React, { useState } from 'react';
import { Table, Button, Select } from 'site-ui';
export default () => {
  const dataSource = [
    {
      key: Math.random(),
      no: 1,
      application: '用户管理',
      role: 1,
      roleName: '管理员',
      count: 1,
    },
    {
      key: Math.random(),
      no: 2,
      application: '开发手册开发手册开发手册开发手册开发手册',
      role: 2,
      roleName: '技术人员技术人员技术人员技术人员',
      count: 2,
    },
    {
      key: Math.random(),
      no: 3,
      application: '后台录入',
      role: 3,
      roleName: '开发人员',
      count: 3,
    },
    {
      key: Math.random(),
      no: 4,
      application: '前台显示',
      role: 4,
      roleName: '实施运维',
      count: 4,
    },
    {
      key: Math.random(),
      no: 5,
      application: '后台录入',
      role: 3,
      roleName: '开发人员',
      count: 3,
    },
    {
      key: Math.random(),
      no: 6,
      application: '前台显示',
      role: 4,
      roleName: '实施运维',
      count: 4,
    },
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'no',
      width: 100,
    },
    {
      title: '应用名称',
      width: 220,
      dataIndex: 'application',
    },
    {
      title: '应用名称',
      width: 220,
      ellipsis: true,
      dataIndex: 'roleName',
    },
    {
      title: '子进程数',
      width: 200,
      dataIndex: 'count',
    },
    {
      title: '操作',
      width: 200,
      dataIndex: 'opeartion',
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return (
            <Button
              type="dashed"
              style={{ marginRight: 8 }}
              onClick={() => {
                alert(m);
              }}
            >
              {m}
            </Button>
          );
        });
      },
    },
  ];
  return (
    <>
      <Table
        rowKey="key"
        dataSource={dataSource}
        columns={columns}
        style={{ width: 800, height: 200 }}
      />
    </>
  );
};
```

# API

| **属性名** | **类型**          | **描述**     | **默认** |
| ---------- | ----------------- | ------------ | -------- |
| data       | array             | 数据源       | 无       |
| activeKey  | string            | 选中的 key   | 无       |
| style      | object            | 样式         | 无       |
| closable   | boolean           | 是否支持关闭 | false    |
| onClick    | function(visible) | 点击回调     | 无       |
| onRemove   | function(visible) | 删除回调     | 无       |
