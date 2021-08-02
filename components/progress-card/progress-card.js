// components/progress-card/progress-card.js
Component({
  /**
   * Component properties
   */
  properties: {
    info: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  attached: function(){
    console.log(this.data.info.id)
    const masterHabitId = this.data.info.id
    const that = this;
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/master_habits/${masterHabitId}/analytics`,
      method: "GET",
      success(res) {
        const progress = res.data;
        console.log(progress)
        that.setData({
          progress: progress
        });
      } 
      }) 
  },
  // analytics route: https://habits.wogengapp.cn/api/v1/master_habits/36/analytics

  /**
   * Component methods
   */
  methods: {

  }
})
