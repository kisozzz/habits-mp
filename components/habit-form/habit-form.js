// components/habit-form/habit-form.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    sdate: '2021-01-01',
    edate: '2021-01-01',
    color: '#DBDDFC'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit: function (e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },

    bindDateChangeStart: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        sdate: e.detail.value
      })
    },
    
    bindDateChangeEnd: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        edate: e.detail.value
      })
    },

    changeColor: function(e){
      this.setData({
        color: "#F4F4F4"
      })
    }
  }
})
