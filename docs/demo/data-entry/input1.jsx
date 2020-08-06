import React from 'react';
import { Input } from 'site-ui';
export default () => {
  return (
    <>
      <Input placeholder="姓名" addonBefore={'姓名'} />
      <Input placeholder="密码" addonAfter="密码" style={{ marginTop: 20 }} />
      <Input
        placeholder="超过文本的字符看不到"
        addonBefore={'超过文本的字符看不到'}
        style={{ marginTop: 20 }}
      />
      <Input
        placeholder="超过文本的字符看不到"
        addonAfter={'超过文本的字符看不到'}
        style={{ marginTop: 20 }}
      />
    </>
  );
};
