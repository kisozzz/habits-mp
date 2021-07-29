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
      const stepId = this.data.info.id
      if(this.data.doneTap == true) {
        this.setData({ doneTap: false })
        // SEND PUT REQUEST
        wx.request({
        // old url: `https://habits.wogengapp.cn/api/v1/master_habits/:master_habit_id/habits/:habit_id/steps/:id`,
        url: `https://habits.wogengapp.cn/api/v1/steps/${stepId}`,
        method: 'PUT',
        data: { completed: false },
        success(res) {
            console.log(res)
           }
         })
        // console.log(this.data.doneTap)
      } else {
        this.setData({ doneTap: true })
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
