const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      active: app.globalData.translatePageInfo.active,
      pagePathInfo: app.globalData.translatePageInfo.info,
      historyList : app.globalData.history
    },

    onShow(){
      this.setData({
        active: app.globalData.translatePageInfo.active,
        historyList : app.globalData.history
      })
      app.globalData.translatePageInfo.active = this.data.active
    },
    onUnload() {
      this.setData({
        active: app.globalData.translatePageInfo.active
      })
      app.globalData.translatePageInfo.active = this.data.active < 1 ? 1 : this.data.active
    },
    
    onPageChange(event) {
      this.setData({
        active: event.detail
      })
      app.globalData.translatePageInfo.active = event.detail
    },
    clearHistory(){
      // 1. 清除全局 history 的值，清除 historyList
      this.setData({
        historyList : ""
      });
      app.globalData.history = [];
      // 2. 清除本地缓存，下次进来的时候，历史记录也是空的
      wx.removeStorage({
        key: 'histroy',
        success(){
          console.log("本地缓存已清除")
        }
      })
    },
})