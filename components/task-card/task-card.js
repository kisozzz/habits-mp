// components/task-card/task-card.js
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
    doneTap: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkDone() {
      // if(this.data)
      console.log(this.data)
      if(this.data.doneTap == true){
        this.setData({ doneTap: false })
      }else{
        this.setData({ doneTap: true })
      }  
    },
  }
})
