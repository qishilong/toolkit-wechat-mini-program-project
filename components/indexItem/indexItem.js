// components/indexItem/indexItem.js
Component({
    options: {
        styleIsolation: 'shared',
    },
    /**
     * 组件的属性列表
     */
    properties: {
        name: String,
        iconUrl: String,
        itemColor: String,
        pagePath:String,
    },
    /**
     * 组件的初始数据
     */
    data: {
        name: "尝试一下",
        iconUrl: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/202306081657534.svg",
        itemColor: "114, 236, 232",
        pagePath:""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        pageSkipFn(){
            if(this.data.pagePath === ''){
                wx.showToast({
                  title: '更多新功能正在开发中，敬请期待...',
                  icon: 'none'
                })
            }
            wx.navigateTo({
              url: this.data.pagePath,
            })
        },
    }
})
