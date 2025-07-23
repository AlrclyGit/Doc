import { docsearchPlugin } from '@vuepress/plugin-docsearch';
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
              {
                text: 'PostgreSQL',
                link: '/code/postgre/1.基本操作.html',
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
              {
                text: 'NestJS',
                link: '/code/nestjs/01.解释 NestJS.html',
              },
            ],
          },
          {
            text: '拓展部分',
            children: [
              {
                text: 'Docker',
                link: '/code/docker/docker.html',
              },
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
      '/code/css/': ['/code/css/11.GRID 栅格系统.html'],
      '/code/javascript/': ['/code/javascript/01.走进 JavaScript 黑洞.html'],
      '/code/typescript/': [
        '/code/typescript/01.TypeScript 变量.html',
        '/code/typescript/02.TypeScript 函数.html',
        '/code/typescript/03.TypeScript 类.html',
        '/code/typescript/04.TypeScript 接口.html',
        '/code/typescript/05.TypeScript 装饰器.html',
        '/code/typescript/06.TypeScript 命名空间.html',
        '/code/typescript/07.TypeScript 类型工具.html',
      ],
      '/code/node/': ['/code/node/01.NVM 和 NPM.html'],
      '/code/postgre/': [
        '/code/postgre/1.基本操作.html',
        '/code/postgre/2.数据类型、运算符.html',
        '/code/postgre/3.数据库函数.html',
        '/code/postgre/4.数据库索引.html',
        '/code/postgre/5.数据库视图.html',
        '/code/postgre/6.CRUD.html',
        '/code/postgre/7.主键和外键.html',
        '/code/postgre/8.数据表约束.html',
        '/code/postgre/9.表查询操作.html',
        '/code/postgre/10.子查询.html',
        '/code/postgre/11.结构集合并.html',
        '/code/postgre/12.备份、恢复数据库.html',
      ],
      '/code/vue/': [
        '/code/vue/01.为什么选择.html',
        '/code/vue/02.快速开始.html',
      ],
      '/code/nestjs/': [
        '/code/nestjs/02.ICO 控制反转 DI 依赖注入.html',
        '/code/nestjs/03.装饰器.html',
        '/code/nestjs/05.NestJS CLI.html',
        '/code/nestjs/07.RESTful 风格设计.html',
        '/code/nestjs/08.NestJS 控制装饰器.html',
        '/code/nestjs/09.session.html',
        '/code/nestjs/10.NestJS 提供者 (providers).html',
        '/code/nestjs/11.NestJS 模块 (modeule.ts).html',
        '/code/nestjs/12.NestJS 中间件 (middleware.ts).html',
        '/code/nestjs/13.NestJS 上传文件.html',
        '/code/nestjs/14.NestJS 下载文件.html',
        '/code/nestjs/15.NestJS Rxjs.html',
        '/code/nestjs/16.NestJS 响应拦截器.html',
        '/code/nestjs/17.NestJS 异常拦截器.html',
        '/code/nestjs/18.NestJS 管道.html',
        '/code/nestjs/19.NestJS 爬虫.html',
        '/code/nestjs/20.NestJS 守卫.html',
        '/code/nestjs/21.NestJS 自定义装饰器.html',
        '/code/nestjs/22.NestJS swagger 接口文档.html',
        '/code/nestjs/23.NestJS 连接数据库.html',
        '/code/nestjs/24.NestJS 实体.html',
        '/code/nestjs/25.NestJS CURD.html',
        '/code/nestjs/26.NestJS 分页排序.html',
        '/code/nestjs/27.NestJS 多表联查.html',
        '/code/nestjs/28.NestJS 事物.html',
      ],
      '/code/http/': [
        '/code/http/01.破冰篇.html',
        '/code/http/02.基础篇.html',
        '/code/http/03.进阶篇.html',
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
