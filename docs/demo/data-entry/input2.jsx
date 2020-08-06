import React from 'react';
import { Input, Icon } from 'site-ui';
export default () => {
  return (
    <>
      <Input
        placeholder="邮箱"
        prefix={<Icon size={18} type="iconweimingmingwenjianjia_rili" />}
        style={{ width: 300 }}
      />
      <Input
        placeholder="网址"
        suffix={'.com'}
        style={{ marginTop: 20, width: 300 }}
      />
      <Input
        placeholder="发送到"
        prefix={<Icon size={18} type="iconduihao" style={{ color: 'green' }} />}
        suffix={'.com'}
        style={{ marginTop: 20, width: 300 }}
      />
    </>
  );
};
