// pages/groups-select/groups-select.js
Page({

  /**
   * Page initial data
   */
  data: {

  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'Loading',
    })
    // console.log(options)
    const userId = options.id
    const page = this;
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/users/${userId}/master_habits`,
      method: "GET",
      success(res) {
        const habits = res.data;
        console.log(habits)
        page.setData({
          habits: habits,
        });
        wx.hideLoading()
      }
    }) 
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