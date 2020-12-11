module.exports = 
    {
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
        '@vuepress/back-to-top': true
      }  
