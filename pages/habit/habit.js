Page({

  data: {
    deleteDialog: false,
    confirm: false,
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

  goToHome() {
    wx.redirectTo({
      url: '/pages/index/index',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  goToHabitHelp() {
    wx.redirectTo({
      url: `/pages/habit-help/habit-help?id=${this.data.habitId}`,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  onLoad: function (options) {
    const page = this;
    console.log(options)
    const habitId = options.id;
    page.setData({
      habitId: habitId
    });
    const masterId = options.master_id;
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/master_habits/${masterId}/habits/${habitId}`,
      method: "GET",
      success(res) {
        const habit = res.data;
        console.log(habit);
        const otherHabits = habit.other_habits
        let completedStatuses = []
        otherHabits.forEach(habit => {
          if (habit.completed) {
            completedStatuses.push('complete')
          } else if (habit.partially_completed) {
            completedStatuses.push('partial')
          } else if (habit.missed) {
            completedStatuses.push('incomplete')
          } else {
            completedStatuses.push('not-started')
          }
        })
        page.setData({
          habit: habit,
          completedStatuses: completedStatuses
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