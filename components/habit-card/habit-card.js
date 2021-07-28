// components/habit-card/habit-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    dialog1: false,
    confirm: false,
    filled1: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDialog1(e){
      console.log(e)
      this.setData({dialog1: true})
    },

    confirm(e){
      console.log(e)
      this.setData({confirm: true, filled1: 'filled1'})
    }
  }
})
