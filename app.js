// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    const that = this
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          // http://localhost:3000/api/v1/login
          // https://airspace-api.herokuapp.com/api/v1/login
          url: 'http://localhost:3000/api/v1/login',
          method: 'POST',
          data: {
            code: res.code
          },
          success(res) {
            // console.log(res)
            that.globalData.user = res.data.user
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
