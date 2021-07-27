// components/checkbox/checkbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String,
    color: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkDay: function(e){
      if(this.data.color == "grey"){
        this.setData({ color: "red" })
      }else{
        this.setData({color: "grey" })
      }
    }
  }
})
