module.exports = {
    base:"/vuepress-starter/",
    title: "世界不浪漫",
    description: "世界不浪漫的笔记",
    head: [
        ['meta', { name: 'author', content: '世界不浪漫' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍 vuepress 说明, 世界不浪漫' }]
      ],
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
          // set `platform` rather than `api`
          platform: 'github-v4',
    
          // all other options of Vssue are allowed
          owner: 'maxueliang',
          repo: 'vuepress-starter',
          clientId: '523c59b2473ad1b572c6',
          clientSecret: '9cf0688293e423bed554c9ec9409c36c51876dd0',
          autoCreateIssue: true
        },
      },  
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/head.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'about', link: '/about'},
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
                { text: 'Group1', items: [
                    { text: '个人简介', link: '/about' },
                    { text: 'Nba', link: '/about1'},
                ] },
                { text: 'Group2', items: [
                    { text: 'Home', link: '/' },
                    { text: 'about', link: '/about'},
                ] }
              ]
          },

        { text: 'External', link: 'https://google.com' },
      ],
      sidebar : [
        '/',
        '/about',
        '/about1',] 
    },
   
  }