import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'Site-UI',
  mode: 'site',
  hash: true,
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
  logo: '/assets/logo.png',
  favicon: '/assets/logo.png',
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
