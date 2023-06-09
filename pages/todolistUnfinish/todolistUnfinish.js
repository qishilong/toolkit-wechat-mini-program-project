const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
      active:app.globalData.todolistPageInfo.active,
      pagePathInfo: app.globalData.todolistPageInfo.info,
      list : app.globalData.todolist.filter(item=>!item.isComplete)
    },
    fresh(){
      // 更新当前页面的 list
      // 因为在不同页面，针对 item 不同的状态会有不同的处理
      // 所以每次点击了 item 之后必须要更新 list
      this.setData({
        list : app.globalData.todolist.filter(item=>!item.isComplete)
      })
    },
    onPageChange(event) {
      this.setData({
        active: event.detail,
      })
      app.globalData.todolistPageInfo.active = event.detail
    },
    onShow(){
      this.fresh();
      this.setData({
        active: app.globalData.todolistPageInfo.active,
        curLanTxt: app.globalData.curLan.chs,
      })
      app.globalData.todolistPageInfo.active = this.data.active
    },
    onUnload() {
      app.globalData.todolistPageInfo.active = this.data.active < 1 ? 1 : this.data.active
    },
})