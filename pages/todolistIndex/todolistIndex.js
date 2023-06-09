const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: app.globalData.todolistPageInfo.active,
    pagePathInfo: app.globalData.todolistPageInfo.info,
    newContent: "", // 用户输入新的待办事项
    list: app.globalData.todolist // 从全局 list 中获取所有任务
  },

  onPageChange(event) {
    this.setData({
      active: event.detail,
    })
    app.globalData.todolistPageInfo.active = event.detail
  },
  onShow() {
    this.fresh();
    this.setData({
      active: app.globalData.todolistPageInfo.active,
    })
    app.globalData.todolistPageInfo.active = this.data.active
  },
  onUnload() {
    app.globalData.todolistPageInfo.active = this.data.active < 1 ? 1 : this.data.active
  },

  inputHandle(){},
  add(){
    // 添加新的待办事项
    if(this.data.newContent){
      // 添加到全局数据
      app.globalData.todolist.unshift({
        content : this.data.newContent,
        isComplete: false
      });
      this.setData({
        newContent: '',
        list: app.globalData.todolist
      });
      // 将新的todolist列表保存到本地
      wx.setStorage({
        key: 'todolistData',
        data: app.globalData.todolist
      })
      wx.showToast({
        title: '新增任务成功',
        icon:'success'
      })
    } else {
      wx.showToast({
        title: '请输入内容',
        icon:'error'
      })
    }
  },
  fresh(){
    // 更新当前页面的 list
    // 因为在不同页面，针对 item 不同的状态会有不同的处理
    // 所以每次点击了 item 之后必须要更新 list
    this.setData({
      list : app.globalData.todolist
    })
  },
})