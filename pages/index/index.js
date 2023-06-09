// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        pageIndexInfo: [
            {
                name: "翻译",
                pagePath: "../translateIndex/translateIndex",
                iconUrl: "icon-translate",
                itemColor: "85, 109, 234, 0.9"
            },
            {
                name: "任务清单",
                pagePath: "../todolistIndex/todolistIndex",
                iconUrl: "icon-todolist",
                itemColor: "209, 76, 57, 0.9"
            },
            {
                name: "画板",
                pagePath: "../drawingBoard/drawingBoard",
                iconUrl: "icon-board",
                itemColor: "100, 206, 242, 0.9"
            },
            {
                name: "iKUN",
                pagePath: "../chickenMusic/chickenMusic",
                iconUrl: "icon-chicken",
                itemColor: "241, 167, 69, 0.9"
            },
            {
                name: "未完待续...",
                pagePath: "",
                iconUrl: "icon-right-arrow",
                itemColor: "114, 236, 232, 0.9"
            }
        ]
    },
    methods: {
        // pageSkipFn(pathUrl){
        //     wx.navigateTo({
        //       url: pathUrl,
        //     })
        // }
    },
    onShow(){
    }
})
