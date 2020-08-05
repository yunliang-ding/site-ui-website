import React, { useState } from 'react';
import { Input } from 'site-ui';
export default () => {
  const [value, setvalue] = useState();
  return (
    <Input
      value={value}
      placeholder="姓名"
      onChange={e => {
        setvalue(null, e.target.value);
      }}
    />
  );
};
