// index.js
// 获取应用实例
const app = getApp()
// let habits = [{id: 1, name: 'go to gym' }, {id: 2, name: 'write journal' }]

Page({
  
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

  },

// Function that chooses the habit with the closest date to current Date
compareHabitDates() {
  const currentDate = Date.now()
  this.data.habits.master_habits.forEach(masterhabit => {
    const res = masterhabit.habit.find(h => Date.parse(h.due_date) > currentDate)
    console.log(res)
  })
 },

  onShow() {
    const page = this;
    wx.getStorage({
      key: 'user',
      success (res) {
        console.log("user?", res.data.id)
        // const userId = getApp().globalData.user.id;
        const userId = res.data.id
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/users/${userId}/master_habits`,
      method: "GET",
      success(res) {
        const habits = res.data;
        console.log(habits)
        const currentDate = Date.now()
        let nextHabits = []
        habits.master_habits.forEach(masterhabit => {
          const nextHabit = masterhabit.habit.find(h => Date.parse(h.due_date) > currentDate)
          nextHabits.push(nextHabit)
        })
        // console.log(nextHabits)
        page.setData({
          habits: habits,
          nextHabits: nextHabits
        });
      }
      }) 
      },
      fail(){
        wx.redirectTo({
          url: '/pages/index/index',
        })
      }
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
