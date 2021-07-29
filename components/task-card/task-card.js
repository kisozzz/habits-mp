// components/task-card/task-card.js
Component({
  properties: {
    info: Object
  },

  data: {

  },

  methods: {
    checkDone() {
      const that = this
      const stepId = this.data.info.id
      const completed = this.data.info.completed
        wx.request({
        url: `https://habits.wogengapp.cn/api/v1/steps/${stepId}`,
        method: 'PUT',
        data: { completed: !completed },
        success(res) {
            // console.log(111, res)
            let info = that.data.info
            info.completed = res.data.completed
            that.setData({info})
          }
        })
    },
  }
})
