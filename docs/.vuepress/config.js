const headConfig = require("./config/headConfig")
const pluginsConfig = require("./config/pluginsConfig")
const navConfig = require("./config/navConfig")
const sidebarConfig = require("./config/sidebarConfig")

module.exports = {
    base:"/vuepress-starter/",
    title: "世界不浪漫",
    description: "世界不浪漫的笔记",
    head: headConfig,
    plugins: pluginsConfig,
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/head.png',
      nav: navConfig,
      sidebar : sidebarConfig,
    },
   
  }