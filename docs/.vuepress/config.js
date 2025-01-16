import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  dest: 'public',
  title: '俊介文档库',
  description: '一个公开的文档库，致力于检索、分享系统化的知识。',
  head: [
    ['link', { rel: 'icon', href: '/vuepress.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/vuepress.ico' }],
  ],
  plugins: [
    docsearchPlugin({
      appId: 'IYMYJMZXL9',
      apiKey: '111e0f1ad4f57a9b528863307555ba2e',
      indexName: 'alrcly',
      placeholder: '搜索一下，你就知道。',
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: 'BBB',
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'CCC',
            resetButtonAriaLabel: 'DDD',
            cancelButtonText: '返回',
            cancelButtonAriaLabel: 'FFF',
          },
          startScreen: {
            recentSearchesTitle: '最近搜索',
            noRecentSearchesText: '没有最近的搜索',
            saveRecentSearchButtonTitle: 'JJJ',
            removeRecentSearchButtonTitle: 'KKK',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: 'MMM',
          },
          errorScreen: {
            titleText: 'NNN',
            helpText: 'OOO',
          },
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: 'QQQ',
            navigateText: '导航',
            navigateUpKeyAriaLabel: 'SSS',
            navigateDownKeyAriaLabel: 'TTT',
            closeText: '退出',
            closeKeyAriaLabel: 'VVV',
            searchByText: '搜索服务来自于',
          },
          noResultsScreen: {
            noResultsText: '没有找到',
            suggestedQueryText: '相关推荐',
            reportMissingResultsText: 'ZZZZ',
            reportMissingResultsLinkText: 'ABC',
          },
        },
      },
    }),
  ],
  theme: defaultTheme({
    contributors: false,
    lastUpdated: false,
    navbar: [
      {
        text: '编程之道',
        children: [
          {
            text: '基础部分',
            children: [
              {
                text: 'CSS',
                link: '/code/css/11.GRID 栅格系统.html',
              },
              {
                text: 'JavaScript',
                link: '/code/javascript/01.走进 JavaScript 黑洞.html',
              },
              {
                text: 'TypeScript',
                link: '/code/typescript/01.TypeScript 变量.html',
              },
              {
                text: 'Node.JS',
                link: '/code/node/01.NVM 和 NPM.html',
              },
            ],
          },
          {
            text: '框架部分',
            children: [
              {
                text: 'Vue.JS',
                link: '/code/vue/01.为什么选择.html',
              },
            ],
          },
          {
            text: '拓展部分',
            children: [
              {
                text: 'HTTP 协议',
                link: '/code/http/01.破冰篇.html',
              },
            ],
          },
        ],
      },
      {
        text: '音乐让我说',
        children: [
          {
            text: '叨叨冯聊音乐',
            children: [
              {
                text: '基础乐理课堂',
                link: '/music/theory/01.音名、五线谱谱号与音高.html',
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/code/css': ['/code/css/11.GRID 栅格系统.html'],
      '/code/javascript': ['/code/javascript/01.走进 JavaScript 黑洞.html'],
      '/code/typescript': [
        '/code/typescript/01.TypeScript 变量.html',
        '/code/typescript/02.TypeScript 函数.html',
        '/code/typescript/03.TypeScript 类.html',
        '/code/typescript/04.TypeScript 接口.html',
        '/code/typescript/05.TypeScript 装饰器.html',
      ],
      '/code/node': ['/code/node/01.NVM 和 NPM.html'],
      '/code/vue': ['/code/vue/01.为什么选择.html', '/code/vue/02.快速开始.html'],
      '/code/http': ['/code/http/01.破冰篇.html', '/code/http/02.基础篇.html', '/code/http/03.进阶篇.html'],
      '/music/theory': [
        '/music/theory/01.音名、五线谱谱号与音高.html',
        '/music/theory/02.小节、力度记号与反复记号.html',
        '/music/theory/03.认识音符、休止符、时值与拍号.html',
        '/music/theory/04.特殊拍号、数拍方法、符点与连线.html',
        '/music/theory/05.认识、理解大小调音阶及调号.html',
      ],
    },
  }),
});
