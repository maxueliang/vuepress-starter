module.exports = {
    title: "世界不浪漫",
    description: "世界不浪漫的笔记",
    head: [
        ['meta', { name: 'author', content: '世界不浪漫' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍 vuepress 说明, 世界不浪漫' }]
      ],
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