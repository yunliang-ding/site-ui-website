---
nav:
  title: 组件
  order: 2
---

# Input

<code src="./demo/data-entry/input.jsx" />

# API

| **属性名**   | **类型**             | **描述**     | **默认**   |
| ------------ | -------------------- | ------------ | ---------- |
| start        | string               | 开始日期     | null       |
| end          | string               | 结束日期     | null       |
| onChange     | function(start, end) | 日期改变回调 | 无         |
| showTime     | boolean              | 是否显示时间 | false      |
| format       | string               | 日期格式     | YYYY:mm:dd |
| disabledDate | funciton             | 禁用的时间   | 无         |
| disabled     | boolean              | 只读         | false      |
