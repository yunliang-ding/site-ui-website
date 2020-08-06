import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'Site-UI',
  mode: 'site',
  hash: true,
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  // logo: '/images/logo.png',
  // favicon: '/images/logo.png',
  locales: [],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/yunliang-ding/site-ui' },
    {
      title: '更新日志',
      path: 'https://github.com/yunliang-ding/site-ui/releases',
    },
  ],
  // base: '/'
  // more config: https://d.umijs.org/config
});
