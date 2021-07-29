// pages/habit/habit.js
Page({

  /**
   * Page initial data
   */
  data: {
    placeholder_name: "Go to gym"
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    const habitId = options.id;
    const masterId = options.master_id;
    const page = this;
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/master_habits/${masterId}/habits/${habitId}`,
      method: "GET",
      success(res) {
        const habit = res.data;
        console.log(habit);
        page.setData({
          habit: habit
        });
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})