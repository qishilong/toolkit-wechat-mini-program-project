const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: app.globalData.translatePageInfo.active,
    pagePathInfo: app.globalData.translatePageInfo.info,
    lanList : app.globalData.lanList, // 从全局获取所有的语言
    curLanIndex : app.globalData.curLan.index// 当前语言的索引
  },

  onShow(){
    this.setData({
      active: app.globalData.translatePageInfo.active,
      curLanIndex : app.globalData.curLan.index
    })
    app.globalData.translatePageInfo.active = this.data.active
  },

  onUnload() {
    this.setData({
      active: app.globalData.translatePageInfo.active,
      curLanIndex : app.globalData.curLan.index
    })
    app.globalData.translatePageInfo.active = this.data.active < 1 ? 1 : this.data.active;
  },

  selectHandle(options){
    const index = options.currentTarget.dataset.id;
    // 接下来需要修改全局的当前语言
    for(let i=0;i<app.globalData.lanList.length;i++){
      if(app.globalData.lanList[i].index === index){
        app.globalData.curLan = app.globalData.lanList[i];
        // 再重新设置一下 curLanIndex
        this.setData({
          curLanIndex : app.globalData.curLan.index// 当前语言的索引
        })
      }
    }
  },
  onPageChange(event) {
    this.setData({
      active: event.detail
    })
    app.globalData.translatePageInfo.active = event.detail
  },
})