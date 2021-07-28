// components/task-card-small/task-card-small.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    index: Number
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
    handleTap: function(e){
      const index = this.data.index
      this.triggerEvent('myevent', {index}, {})
    }
  }
})
