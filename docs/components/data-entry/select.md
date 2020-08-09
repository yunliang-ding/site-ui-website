---
order: 5
---

# Select 选择器

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Radio } from 'site-ui';
export default () => {
  const onChange = e => {
    console.log(`checked is ${e.target.checked}`);
  };
  return (
    <>
      <Radio onChange={onChange}>Radio</Radio>
    </>
  );
};
```

# API

# Select

| **属性名**           | **类型**                                  | **描述**                                                                                                                               | **默认** |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| allowClear           | boolean                                   | 支持清除                                                                                                                               | false    |
| autoClearSearchValue | boolean                                   | 是否在选中项后清空搜索框                                                                                                               | true     |
| autoFocus            | boolean                                   | 默认获取焦点                                                                                                                           | false    |
| disabled             | 是否禁用                                  | boolean                                                                                                                                | false    |
| dropdownClassName    | object                                    | 下拉菜单的 style 属性                                                                                                                  | 无       |
| dropdownStyle        | object                                    | 下拉菜单的 style 属性                                                                                                                  | 无       |
| filterOption         | boolean or function(inputValue, option)   | 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。 | true     |
| getPopupContainer    | Function(triggerNode) () => document.body | 菜单渲染父节点                                                                                                                         | 无       |
| multiple             | boolean                                   | 是否支持多选                                                                                                                           | true     |
| showArrow            | boolean                                   | 是否显示下拉小箭头                                                                                                                     | true     |
| showSearch           | boolean                                   | 使单选模式可搜索                                                                                                                       | false    |
| value                | string/string[]                           | 指定当前选中的条目                                                                                                                     | 无       |
| open                 | boolean                                   | 是否展开下拉菜单                                                                                                                       | false    |
| onChange             | function(value, option)                   | 选中 option，或 input 的 value 变化）时，调用此函数 function()                                                                         | 无       |
| onSearch             | function(value:string)                    | 文本框值变化时回调 function(value: string)                                                                                             | 无       |
