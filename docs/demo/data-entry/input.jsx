import React from 'react';
import { Input } from 'site-ui';
export default () => {
  return (
    <>
      <Input placeholder="姓名" />
      <Input placeholder="姓名" disabled style={{ marginTop: 20 }} />
      <Input placeholder="姓名" style={{ width: 300, marginTop: 20 }} />
      <Input
        placeholder="姓名"
        style={{ width: 300, marginTop: 20 }}
        allowClear
      />
    </>
  );
};
