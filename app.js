// app.js
App({
  onLaunch() {
    // 一开始启动应用的时候，拿出本地缓存进行加载
    wx.getStorage({
      key: "history",
      success: (res) => {
        // 我们需要将其赋值给 globalData 里面的 history
        this.globalData.history = res.data;
      }
    })
    wx.getStorage({
      key: "todolistData",
      success: (res) => {
        // 我们需要将其赋值给 globalData 里面的 todolist
        this.globalData.todolist = res.data;
      }
    })
  },
  // 全局的数据，所有页面都可以使用这个数据
  globalData: {
    // 所有语言的语言列表
    lanList: [
      { 'chs': '英文', 'lang': 'en', "index": 0 },
      { 'chs': '中文', 'lang': 'zh', "index": 1 },
      { 'chs': '日语', 'lang': 'jp', "index": 2 },
      { 'chs': '韩语', 'lang': 'kor', "index": 3 },
      { 'chs': '法语', 'lang': 'fra', "index": 4 },
      { 'chs': '德语', 'lang': 'de', "index": 5 },
      { 'chs': '俄语', 'lang': 'ru', "index": 6 },
      { 'chs': '泰语', 'lang': 'th', "index": 7 },
      { 'chs': '西班牙语', 'lang': 'spa', "index": 8 },
      { 'chs': '阿拉伯语', 'lang': 'ara', "index": 9 },
      { 'chs': '意大利语', 'lang': 'it', "index": 10 },
      { 'chs': '葡萄牙语', 'lang': 'pt', "index": 11 },
      { 'chs': '荷兰语', 'lang': 'nl', 'index': 12 }
    ],
    // 当前默认是什么语言，默认设置为英语
    curLan: { 'chs': '英文', 'lang': 'en', "index": 0 },
    // 历史记录
    history: [],
    translatePageInfo: {
      active: 1,
      info: [
        {
          text: '首页',
          icon: '.icon-index',
          path: "/pages/index/index"
        },
        {
          text: '翻译',
          icon: '.icon-translate',
          path: "/pages/translateIndex/translateIndex"
        },
        {
          text: '记录',
          icon: '.icon-translate-history',
          path: "/pages/translateHistory/translateHistory"
        },
        {
          text: '语言',
          icon: '.icon-change-language',
          path: "/pages/translateChange/translateChange"
        }
      ]
    },
    todolistPageInfo: {
      active: 1,
      info: [
        {
          text: '首页',
          icon: '.icon-index',
          path: "/pages/index/index"
        },
        {
          text: '任务清单',
          icon: '.icon-todolist .icon-todolist-style',
          path: "/pages/todolistIndex/todolistIndex"
        },
        {
          text: '未完成',
          icon: '.icon-unfinish .icon-todolist-style',
          path: "/pages/todolistUnfinish/todolistUnfinish"
        },
        {
          text: '已完成',
          icon: '.icon-finished .icon-todolist-style',
          path: "/pages/todolistFinished/todolistFinished"
        }
      ]
    },
    // 存储所有的待办事项
    todolist : []
  }
})
