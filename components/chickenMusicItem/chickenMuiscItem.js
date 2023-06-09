// components/chickenMusicItem/chickenMuiscItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      title: String,
      backgroundImageUrl: String,
      audioUrl: String
    },

    /**
     * 组件的初始数据
     */
    data: {
      innerAudioContext:''
    },

    lifetimes: {
      attached(){
        this.setData({
          innerAudioContext : wx.createInnerAudioContext({
            useWebAudioImplement: true
          })
        })
        this.data.innerAudioContext.src = this.data.audioUrl
      }
    },

    /**
     * 组件的方法列表
     */
    methods: {
      onClickFn(){
        this.data.innerAudioContext.play(); // 播放
      },
      onCancleFn(){
        this.data.innerAudioContext.stop(); // 停止
      }
    }
})
