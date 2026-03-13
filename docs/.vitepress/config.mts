import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh',
  title: '俊介文档库',
  description: '一个公开的文档库，致力于检索、分享系统化的知识。',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.ico' }],
  ],
  themeConfig: {
    logo: '/logo.ico',
    outlineTitle: '本页目录',
    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
      },
    },
    // 页脚
    footer: {
      copyright: '© 2018-2026 俊介文档库',
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlrclyGit' },
      { icon: 'mastodon', link: 'https://mastodon.icu' },
    ],
    // 导航菜单
    nav: [
      { text: '主页', link: '/' },
      { text: '代码之道', items: [{ text: 'Node.js', link: '/code/nodejs/00.NVM 和 NPM' }] },
      { text: '音乐让我说', items: [{ text: '叨叨冯乐理课', link: '/music/theory/01.音名、五线谱谱号与音高' }] },
    ],
    // 侧边栏菜单
    sidebar: {
      '/code/': [
        {
          text: 'Node.js',
          items: [{ text: 'NVM 和 NPM', link: '/code/nodejs/00.NVM 和 NPM' }],
        },
      ],
      '/music/': [
        {
          text: '叨叨冯乐理课',
          items: [
            { text: '音名、五线谱谱号与音高', link: '/music/theory/01.音名、五线谱谱号与音高' },
            { text: '小节、力度记号与反复记号', link: '/music/theory/02.小节、力度记号与反复记号' },
            { text: '认识音符、休止符、时值与拍号', link: '/music/theory/03.认识音符、休止符、时值与拍号' },
            { text: '特殊拍号、数拍方法、符点与连线', link: '/music/theory/04.特殊拍号、数拍方法、符点与连线' },
            { text: '认识、理解大小调音阶及调号', link: '/music/theory/05.认识、理解大小调音阶及调号' },
          ],
        },
      ],
    },
  },
});
