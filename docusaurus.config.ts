import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 站点配置
const config: Config = {
  // 网站标题
  title: 'Welcome to JAVGO',
  // 网站副标题
  tagline: 'The heart has mountains and oceans, quiet and boundless.',
  // 网站图标
  favicon: 'img/favicon.ico',

  // 站点地址
  url: 'https://javgo.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // 站点根目录
  baseUrl: '/',

  // GitHub pages 部署配置
  // 如果你不需要 GitHub pages 部署，可以忽略此配置
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 交互式代码编辑器
  themes: ['@docusaurus/theme-live-codeblock'],

  // 末尾斜杠
  trailingSlash: false,

  // 即使不使用国际化，也可以使用该字段设置有用的元数据，如html lang。例如，如果您的网站是中文的，您可能希望将“en”替换为“zh-Hans”。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en','zh-Hans'],
  },

  // 预设
  presets: [
    [
      'classic',
      {
        docs: {
          // 文档开启侧边栏
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // 显示阅读时间
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          // 引入自定义样式
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // 主题配置
  themeConfig: {
    // 主题背景图片
    image: 'img/docusaurus-social-card.jpg',
    // 侧边栏配置
    docs: {
      // 侧边栏自动折叠
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    // 导航栏
    navbar: {
      // 站点导航栏左侧的标题
      // title: 'JAVGO',

      // 站点导航栏左侧的 logo
      logo: {
        // 点击logo跳转
        href: '/',
        // logo图片（alt）
        alt: 'JAVGO Documentation | JAVGO Docs',
        // 亮色模式下显示的 logo
        src: 'img/full-logo.svg',
        // 暗色模式下显示的 logo
        srcDark: 'img/full-logo-dark.svg',
      },

      // 导航栏菜单
      items: [
        {
          label: '教程',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
        },
        {
          label: '博客',
          to: '/blog',
          position: 'left'
        },
        {
          label: '导航',
          to: '/navigation',
          position: 'left'
        },
        {
          label: '关于',
          to: '/about/about',
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // 页脚
    footer: {
      // 页脚 logo
      logo: {
        alt: 'My Site Logo',
        src: 'img/full-logo-dark.svg',
        srcDark: 'img/full-logo-dark.svg',
        href: '/',
        width: 100,
        height: 100,
      },

      // 页脚背景颜色
      style: 'dark',

      // 页脚链接信息
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      // 页脚版权信息
      copyright: `Copyright © ${new Date().getFullYear()} JAVGO ｜ <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021000000号</a> | <a href="https://beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank"><img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" width="1%" height="1%"/> 京公网安备 11000002000001号</a>`,
    },

    // 代码高亮
    prism: {
      // theme: prismThemes.github,
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      // 添加常见的前后端语言支持(https://docusaurus.io/zh-CN/docs/next/markdown-features/code-blocks)
      additionalLanguages: [
        'java',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
