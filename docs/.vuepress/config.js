import { viteBundler } from '@vuepress/bundler-vite';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart';
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

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
    markdownChartPlugin({ mermaid: true }),
    markdownMathPlugin(),
    docsearchPlugin({
      appId: 'IYMYJMZXL9',
      apiKey: '111e0f1ad4f57a9b528863307555ba2e',
      indexName: 'alrcly',
      placeholder: '搜索一下，你就知道。',
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: '搜索按钮',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '重置',
            resetButtonAriaLabel: '重置按钮',
            cancelButtonText: '返回',
            cancelButtonAriaLabel: '返回按钮',
          },
          startScreen: {
            recentSearchesTitle: '最近搜索',
            noRecentSearchesText: '没有最近的搜索',
            saveRecentSearchButtonTitle: '保存最近搜索',
            removeRecentSearchButtonTitle: '移除最近搜索',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '移除收藏',
          },
          errorScreen: {
            titleText: '搜索出错',
            helpText: '请检查网络或更换关键词重试',
          },
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: '选择键',
            navigateText: '导航',
            navigateUpKeyAriaLabel: '向上导航键',
            navigateDownKeyAriaLabel: '向下导航键',
            closeText: '关闭',
            closeKeyAriaLabel: '关闭键',
            searchByText: '搜索服务由',
          },
          noResultsScreen: {
            noResultsText: '没有找到相关结果',
            suggestedQueryText: '相关搜索',
            reportMissingResultsText: '反馈缺失结果',
            reportMissingResultsLinkText: '点击反馈',
          },
        },
      },
    }),
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '电子电路',
        children: [
          {
            text: '电子电路基础',
            link: '/electricity/fundamentals/01.电流、电压、电阻.html',
          },
        ],
      },
      {
        text: '音乐让我说',
        children: [
          {
            text: '叨叨冯乐理课',
            link: '/music/theory/01.音名、五线谱谱号与音高.html',
          },
        ],
      },
    ],
    sidebar: {
      // 电子电路
      '/electricity/fundamentals/': [
        '/electricity/fundamentals/01.电流、电压、电阻.html',
        '/electricity/fundamentals/02.交流电与直流电.html',
        '/electricity/fundamentals/03.电路信号.html',
        '/electricity/fundamentals/04.电阻器.html',
        '/electricity/fundamentals/05.电容器.html',
        '/electricity/fundamentals/06.电感器.html',
        '/electricity/fundamentals/07.滤波器.html',
      ],
      '/music/theory/': [
        '/music/theory/01.音名、五线谱谱号与音高.html',
        '/music/theory/02.小节、力度记号与反复记号.html',
        '/music/theory/03.认识音符、休止符、时值与拍号.html',
        '/music/theory/04.特殊拍号、数拍方法、符点与连线.html',
        '/music/theory/05.认识、理解大小调音阶及调号.html',
      ],
    },
  }),
});
