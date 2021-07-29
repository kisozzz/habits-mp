// pages/habit/habit.js
Page({

  /**
   * Page initial data
   */
  data: {
    deleteDialog: false,
    confirm: false,
    // filled1: ''
  },

  showDeleteDialog(e){
    console.log(e)
    this.setData({deleteDialog: true})
  },

  cancelDelete(e){
    console.log('picked cancel')
    this.setData({deleteDialog: false})
  },

  deleteMasterHabit() {
    console.log('deleteMasterHabit')
    console.log(this.data.habit.master_habit_id)
    this.setData({deleteDialog: false})
    const masterId = this.data.habit.master_habit_id
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/master_habits/${masterId}`,
      method: "DELETE",
      success(res) {
        console.log(res)
        wx.redirectTo({
          url: `/pages/index/index`
        });
      }
    })
  },

  editMasterHabit() {
    console.log('editMasterHabit')
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