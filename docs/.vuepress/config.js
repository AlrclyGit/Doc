import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '俊介文档库',
    description: '一个公开的文档库，致力于检索、分享系统化的知识。',
    head: [
        ['link', { rel: 'icon', href: '/vuepress.ico' }],
        ['link', { rel: 'apple-touch-icon', href: '/vuepress.ico' }]
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
                }
            }
        }),
    ],
    theme: defaultTheme({
        contributors: false,
        lastUpdated: false,
        navbar: [
            {
                text: '代码之道',
                children: [
                    {
                        text: 'HTTP 协议',
                        link: '/code/http/01.破冰篇.html',
                    },
                    {
                        text: 'JavaScript',
                        link: '/code/javascript/03.基础类型.html',
                    }
                ],
            },

            {
                text: '音乐让我说',
                children: [
                    {
                        text: '基础乐理课堂',
                        link: '/music/theory/01.音名、五线谱谱号与音高.html',
                    }
                ],
            },
            {
                text: '教育教学',
                children: [
                    {
                        text: '教师资格证',
                        children: [
                            {
                                text: '保教知识与能力',
                                link: '/education/childcare/01.学前儿童的心理发展概述.html',
                            },
                            {
                                text: '综合素质',
                                link: '/education/comprehensive/01.单选题要点.html',
                            },
                            {
                                text: '面试考试',
                                link: '/education/Interview/01.结构化.html',
                            },
                            {
                                text: '普通话考试',
                                link: '/education/mandarin/01.普通话.html',
                            }
                        ],
                    }
                ]
            }
        ],
        sidebar: {
            '/code/javascript': [
                '/code/javascript/03.基础类型.html',
                '/code/javascript/04.数组.html',
                '/code/javascript/05.Symbol.html',
                '/code/javascript/06.SetAndWeakSet.html',
                '/code/javascript/07.MapAndWeakMap.html',
                '/code/javascript/08.函数.html',
                '/code/javascript/09.闭包.html',
                '/code/javascript/10.对象.html',
                '/code/javascript/11.原型和继承包.html',
                '/code/javascript/12.类.html',
                '/code/javascript/13.模块化.html',
                '/code/javascript/14.正则表达式.html',
                '/code/javascript/15.异步编程.html',
                '/code/javascript/17.宏任务与微任务.html',
                '/code/javascript/18.手写 PROMISE 核心代码.html',
                '/code/javascript/19.DOM 操作.html'
            ],
            '/code/http': [
                '/code/http/01.破冰篇.html',
                '/code/http/02.基础篇.html',
                '/code/http/03.进阶篇.html',
            ],
            '/music/theory': [
                '/music/theory/01.音名、五线谱谱号与音高.html',
                '/music/theory/02.小节、力度记号与反复记号.html',
                '/music/theory/03.认识音符、休止符、时值与拍号.html',
                '/music/theory/04.特殊拍号、数拍方法、符点与连线.html',
                '/music/theory/05.认识、理解大小调音阶及调号.html',
            ],
            '/education/childcare': [
                {
                    text: '第一部分 学前儿童发展',
                    collapsible: true,
                    children: [
                        '/education/childcare/01.学前儿童的心理发展概述.html',
                        '/education/childcare/02.幼儿生理发展的基本规律.html',
                        '/education/childcare/03.学前儿童的认知发展.html',
                        '/education/childcare/04.学前儿童情绪情感的发展.html',
                        '/education/childcare/05.学前儿童个性发展.html',
                        '/education/childcare/06.学前儿童的社会性发展.html',
                        '/education/childcare/07.学前儿童心理的研究原则与方法.html',
                    ],
                },
                {
                    text: '第二部分 学前教育原理',
                    collapsible: true,
                    children: [
                        '/education/childcare/08.教育的概述.html',
                        '/education/childcare/09.幼儿教育的概述与发展.html',
                        '/education/childcare/10.幼儿园班级管理.html',
                        '/education/childcare/11.幼儿园教育指导纲要.html',
                        '/education/childcare/12.儿童学习与发展指南.html',
                        '/education/childcare/13.幼儿园教师专业标准.html',
                    ],
                },
                {
                    text: '第三部分 生活指导',
                    collapsible: true,
                    children: [
                        '/education/childcare/14.幼儿园一日生活.html',
                        '/education/childcare/15.幼儿营养.html',
                        '/education/childcare/16.幼儿常见疾病和意外事故的防护.html',
                    ],
                },
                {
                    text: '第四部分 幼儿园环境创设',
                    collapsible: true,
                    children: [
                        '/education/childcare/17.幼儿园环境创设.html',
                        '/education/childcare/18.幼儿园与家庭、社区、小学.html',
                    ],
                },
                {
                    text: '第五部分 游戏活动指导',
                    collapsible: true,
                    children: [
                        '/education/childcare/19.幼儿游戏概述.html',
                        '/education/childcare/20.游戏的特点及指导.html',
                    ],
                },
                {
                    text: '第六部分 教育活动的组织与实施',
                    collapsible: true,
                    children: [
                        '/education/childcare/23.幼儿园教育活动设计与指导.html',
                        '/education/childcare/24.各领域教育活动的设计流程.html',
                        '/education/childcare/25.幼儿园其他形式活动的工作计划与组织.html',
                    ],
                },
                {
                    text: '第七部分 教育评价',
                    collapsible: true,
                    children: [
                        '/education/childcare/21.幼儿园游戏评价概述.html',
                        '/education/childcare/22.幼儿园教育评价的内容、方法.html',
                    ],
                },
            ],
            '/education/comprehensive': [
                '/education/comprehensive/01.单选题要点.html',
                '/education/comprehensive/02.主观题要点.html',
                '/education/comprehensive/03.作文题要点.html',
            ],
            '/education/Interview': [
                '/education/Interview/01.结构化.html',
                '/education/Interview/02.试讲.html',
            ],
            '/education/mandarin': [
                '/education/mandarin/01.普通话.html',
            ],
        },
    }),
})