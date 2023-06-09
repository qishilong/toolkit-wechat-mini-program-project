const transFunc = require('../../utils/util')
const app = getApp()

Page({
  data: {
    query: "", // 用户输入的要翻译的文本
    content: "", // 翻译的文本
    curLanTxt: app.globalData.curLan.chs,
    active: app.globalData.translatePageInfo.active, // 当前选中标签的索引
    pagePathInfo: app.globalData.translatePageInfo.info
  },
  // 跳转到选择语言
  goToChange() {
    wx.navigateTo({
      url: '/pages/translateChange/translateChange',
    })
  },
  // 翻译事件
  tanslateHandler() {
    // 1. 拿到用户输入的值  2. 调用接口进行翻译
    transFunc(this.data.query, "auto", app.globalData.curLan.lang)
      .then(txt => {
        // 1）修改 content 的值，以便翻译结果能够显示出来
        this.setData({
          content: txt
        });
        // 2）将此次翻译结果存储到全局的 history 里面
        app.globalData.history.unshift({
          sourceTxt: this.data.query, // 翻译的原文
          resultTxt: txt
        });
        // 3）将 history 存储到本地，方便下一次进入小程序的时候，能够加载之前的历史记录
        wx.setStorage({
          key: 'history',
          data: app.globalData.history
        })
      })
  },
  onShow() {
    // this.getTabBar().init();
    this.setData({
      curLanTxt: app.globalData.curLan.chs
    })
  },
  inputHandle() { },
  onPageChange(event) {
    this.setData({
      active: event.detail,
    })
    app.globalData.translatePageInfo.active = event.detail
  },
  onShow(){
    this.setData({
      active: app.globalData.translatePageInfo.active,
      curLanTxt: app.globalData.curLan.chs,
    })
    app.globalData.translatePageInfo.active = this.data.active
  },
  onUnload() {
    app.globalData.translatePageInfo.active = this.data.active < 1 ? 1 : this.data.active
  },
})
