import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  dest: 'public',
  title: '俊介文档库',
  description: '一个公开的文档库，致力于检索、分享系统化的知识。',
  head: [
    ['link', { rel: 'icon', href: '/vuepress.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/vuepress.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      },
    ],
  ],
  plugins: [
    markdownChartPlugin({ mermaid: true }),
    markdownMathPlugin(),
    prismjsPlugin(),
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
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '电子电路',
        children: [
          {
            text: '基础部分',
            children: [
              {
                text: '电子电路基础',
                link: '/electronics/circuit/01.电流.html',
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      // 电子电路
      '/electronics/circuit/': [
        '/electronics/circuit/01.电流.html',
        '/electronics/circuit/02.电压.html',
      ],
    },
  }),
})
