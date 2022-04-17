module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        docsRepo: 'https://github.com/CreadwordGOD/MyuserDocs',
        docsBranch:'main',
        lastUpdated:true,
        lastUpdatedText:'最后更新: ',
        editLinkText:'编辑此页',
        sidebar: {
            '/': [
                {
                    text: 'Windows',
                    children: ['/windows/clashforwindows.md','/windows/v2rayn.md'],
                },
            ],

        },
        sidebarDepth: 2,
    },
}