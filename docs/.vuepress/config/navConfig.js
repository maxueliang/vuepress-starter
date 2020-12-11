module.exports = 
[
    { text: 'Home', link: '/' },
    { text: 'about', link: '/about'},
    {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
            { text: 'Group1', items: [
                { text: '个人简介', link: '/about' },
                { text: '劝学', link: '/about2'},
            ] },
            { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'about', link: '/about'},
            ] }
          ]
        },
        {text: 'External',link :'https://google.com'},
]