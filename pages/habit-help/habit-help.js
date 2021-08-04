// pages/habit-help/habit-help.js
Page({

  /**
   * Page initial data
   */
  data: {
    sampleFrequencyOptions: { frequncy_options: ['Weekly', 4] }
  },

  goBackToHabit() {
    wx.redirectTo({
      url: `/pages/habit/habit?id=${this.data.habitId}`,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    const habitId = options.id
    const page = this;
    page.setData({
      habitId: habitId,
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