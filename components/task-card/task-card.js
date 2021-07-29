// components/task-card/task-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: Object
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
      // TODO: Find a way to toggle the display when clicked, either by setting page data or using another way
      const stepId = this.data.info.id
      const completed = this.data.info.completed
      // console.log(this.data)
      if(completed == true) {
        this.setData({ completed: false })
        wx.request({
        url: `https://habits.wogengapp.cn/api/v1/steps/${stepId}`,
        method: 'PUT',
        data: { completed: false },
        success(res) {
            console.log(res)
           }
         })
        // console.log(this.data.doneTap)
      } else {
        this.setData({ completed: true })
        wx.request({
        // old url: `https://habits.wogengapp.cn/api/v1/master_habits/:master_habit_id/habits/:habit_id/steps/:id`,
          url: `https://habits.wogengapp.cn/api/v1/steps/${stepId}`,
          method: 'PUT',
          data: { completed: true },
          success(res) {
            console.log(res)
           }
         })
      }  
    },
  }
})
