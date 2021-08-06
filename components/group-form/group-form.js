// components/group-form/group-form.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    disabled: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit: function (e) {
      const user_id = getApp().globalData.user.id;
      const hasUserWechatInfo = getApp().globalData.hasUserWechatInfo;
      const name = e.detail.value.name;
      let group = {
        user_id: user_id,
        name: name
      }
      this.setData({
        disabled: true
      })
      if(!hasUserWechatInfo) {
        this.getUserProfile().then(res => {
          // const user = app.globalData.user
          wx.request({
            url: "https://habits.wogengapp.cn/api/v1/groups",
            method: 'POST',
            data: group,
            success(res) {
              console.log(res)
                wx.redirectTo({
                  url: `/pages/groups-select/groups-select?id=${user_id}`
                });
              }
            });
          });
      } else {
        wx.request({
          url: "https://habits.wogengapp.cn/api/v1/groups",
          method: 'POST',
          data: group,
          success(res) {
            console.log(res)
              wx.redirectTo({
                url: `/pages/groups-select/groups-select?id=${user_id}`
              });
            }
          });
      }
    },

    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      return new Promise((resolve, reject) => {
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res)
            // update user route to backend 
            const user = app.globalData.user
            wx.request({
              url: `https://habits.wogengapp.cn/api/v1/login/users/${user.id}`,
              method: "PUT",
              data: {wechat_pic_url: res.userInfo.avatarUrl, wechat_username: res.userInfo.nickName},
              success(res) {
                console.log('update user',res)
               }
            });
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            resolve(res.userInfo)
          }
        })
      })
      
    },
  }
})
