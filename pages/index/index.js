// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        pageIndexInfo: [
            {
                name: "翻译助手",
                pagePath: "../translateIndex/translateIndex",
                iconUrl: "icon-translate",
                itemColor: "68, 150, 247, 0.9"
            },
            {
                name: "任务清单",
                pagePath: "../todolistIndex/todolistIndex",
                iconUrl: "icon-todolist",
                itemColor: "209, 76, 57, 0.9"
            },
            {
                name: "涂鸦板",
                pagePath: "../drawingBoard/drawingBoard",
                iconUrl: "icon-board",
                itemColor: "100, 206, 242, 0.9"
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
