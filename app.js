// app.js
App({
  onLaunch() {
    // 登录
    const that = this
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          // http://localhost:3000/api/v1/login
          // https://habits.wogengapp.cn
          url: 'https://habits.wogengapp.cn/api/v1/login',
          method: 'POST',
          data: {
            code: res.code
          },
          success(res) {
            console.log(res)
            that.globalData.user = res.data.user
            wx.setStorageSync('user', res.data.user)
          }
        })
      }
    })
  },
  globalData: {
    user: null
  }
})
