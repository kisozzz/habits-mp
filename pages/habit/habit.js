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
    const habit_id = options.id;
    const page = this;
    // wx.request({
    //   url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}`,
    //   method: "GET",
    //   success(res) {
    //     const space = res.data;
    //     console.log(space);
    //     page.setData({
    //       space: space
    //     });
    //   }
    // });
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