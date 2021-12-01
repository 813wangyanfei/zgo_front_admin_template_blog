import {RouteRecordRaw} from 'vue-router';

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      auth：          当前路由权限标识（多个请用逗号隔开），最后转成数组格式，用于与当前用户权限进行对比，控制路由显示、隐藏
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        component: () => import('/@/layout/index.vue'),
        redirect: '/home',
        meta: {
            isKeepAlive: true,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('/@/views/home/index.vue'),
                meta: {
                    title: 'message.router.home',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: true,
                    isIframe: false,
                    auth: ['admin', 'test'],
                    icon: 'iconfont icon-shouye',
                },
            },

            // 系统设置开始
            {
                path: '/system',
                name: 'system',
                component: () => import('/@/layout/routerView/parent.vue'),
                redirect: '/system/menu',
                meta: {
                    title: 'message.router.system',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: false,
                    isIframe: false,
                    auth: ['admin'],
                    icon: 'iconfont icon-xitongshezhi',
                },
                children: [
                    {
                        path: '/system/menu',
                        name: 'systemMenu',
                        component: () => import('/@/views/system/menu/index.vue'),
                        meta: {
                            title: 'message.router.systemMenu',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin'],
                            icon: 'iconfont icon-caidan',
                        },
                    },
                    {
                        path: '/system/user',
                        name: 'systemUser',
                        component: () => import('/@/views/system/user/index.vue'),
                        meta: {
                            title: 'message.router.systemUser',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin'],
                            icon: 'iconfont icon-icon-',
                        },
                    },
                ],
            },
            // 系统设置结束

            // 博客开始
            {
                path: '/blog', // 博客
                name: 'blogIndex',
                component: () => import('/@/layout/routerView/parent.vue'), // 使用模板
                redirect: '/blog/articleView', // 重定向
                meta: {
                    title: 'message.router.blogIndex',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: false,
                    isIframe: false,
                    auth: ['admin', 'test'],
                    icon: 'iconfont icon-crew_feature',
                },
                children: [
                    // 文章管理开始
                    {
                        path: '/blog/articleView',
                        name: 'articleView',
                        component: () => import('/@/views/blog/articleView/index.vue'), // 文章管理
                        meta: {
                            title: 'message.router.articleView',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin', 'test'],
                            icon: 'el-icon-thumb',
                        },
                    },
                    // 文章管理结束

                    // 标签管理开始
                    {
                        path: '/blog/tagView',
                        name: 'tagView',
                        component: () => import('/@/views/blog/tagView/index.vue'), // 文章管理
                        meta: {
                            title: 'message.router.tagView',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin', 'test'],
                            icon: 'el-icon-thumb',
                        },
                    },
                    // 标签管理结束

                    // 分类管理开始
                    {
                        path: '/blog/categoryView',
                        name: 'categoryView',
                        component: () => import('/@/views/blog/categoryView/index.vue'), // 文章管理
                        meta: {
                            title: 'message.router.categoryView',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin', 'test'],
                            icon: 'el-icon-thumb',
                        },
                    },
                    // 分类管理结束

                    // 用户管理开始
                    {
                        path: '/blog/userView',
                        name: 'userView',
                        component: () => import('/@/views/blog/userView/index.vue'), // 文章管理
                        meta: {
                            title: 'message.router.userView',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin', 'test'],
                            icon: 'el-icon-thumb',
                        },
                    },
                    // 用户管理结束

                    // 评论管理开始
                    {
                        path: '/blog/commentView',
                        name: 'commentView',
                        component: () => import('/@/views/blog/commentView/index.vue'), // 文章管理
                        meta: {
                            title: 'message.router.commentView',
                            isLink: '',
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            auth: ['admin', 'test'],
                            icon: 'el-icon-thumb',
                        },
                    },
                    // 评论管理结束


                ],
            },
            // 博客结束
        ],
    },
];

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('/@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('/@/views/error/404.vue'),
        meta: {
            title: 'message.staticRoutes.notFound',
        },
    },
    {
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/error/401.vue'),
        meta: {
            title: 'message.staticRoutes.noPower',
        },
    },
];
