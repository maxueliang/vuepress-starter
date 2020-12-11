const secret = require("./secret")
module.exports = 
    {
        '@vssue/vuepress-plugin-vssue': {
          // set `platform` rather than `api`
          platform: 'github-v4',
    
          // all other options of Vssue are allowed
          owner: 'maxueliang',
          repo: 'vuepress-starter',
          clientId: secret.clientId,
          clientSecret: secret.clientSecret,
          autoCreateIssue: true
        },
        '@vuepress/back-to-top': true
      }  
