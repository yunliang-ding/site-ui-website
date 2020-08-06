import React from 'react';
import { Input } from 'site-ui';
export default () => (
  <Input
    type="textarea"
    placeholder="详细信息.."
    addonBefore={'描述'}
    addonAfter={'限制100字符'}
  />
);
