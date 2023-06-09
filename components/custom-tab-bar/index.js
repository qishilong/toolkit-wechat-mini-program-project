Component({
  properties: {
    list: Array
  },
  data: {
    active: 0,
  },
  methods: {
    onChange(event){
      // event.detail 的值为当前选中项的索引
      this.setData({
        active: event.detail
      });
      // 存一次this,不然this指向会有错误
      let _this = this;
      // 切换tabbar
      wx.switchTab({
        //这里就是前面步骤二list索引的作用,但我们需要的是每一项中的url
        url: _this.data.list[event.detail].path
      })
    },
    // 初始化函数,在Tabbar对应的页面中调用
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.path === `/${page?.route}`)
      });
    }
  },
});