// 配置
window.Config = {

  // 站点名
  SiteName: '影音屋运行状况一览',

  // 站点链接
  SiteUrl: './',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784401892-8903a10510a0c76221bedafc',
    'm784694441-92e764d74688659706288027',
    'm784694449-ac8ebf19a5c0bf145de69d7c',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '影音屋',
      url: 'https://www.yingyinwu.com/'
    },
    {
      text: '源码',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
