// pages/group/group.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    show: true,
    showJoinModal: false,
    currentConfig: {
      transition: true,
      zIndex: 99,
      locked: false,
      direction: 'bottom',
      arcRadius: 18,
      maxHeight: 500,
      minHeight: 200,
      opacity: 0.4
    },

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  bindShowPopup() {
    this.setData({ showPopup: true })
  },

  bindShowPopupEdit() {
    this.setData({ showPopupEdit: true })
  },

  bindDateChangeEnd: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      edate: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this.data)
    const group_id = this.data.group.id;
    const end_date = this.data.edate;
    const percent_complete = e.detail.value.input;;
    let goal = {
      group_id: group_id,
      end_date: end_date,
      percent_complete: percent_complete
    }
    console.log(goal)
    wx.request({
    url: `https://habits.wogengapp.cn/api/v1/groups/${group_id}/goals`,
    method: 'POST',
    data: goal,
    success(res) {
      console.log(res)
        wx.redirectTo({
          url: `/pages/group/group?id=${group_id}`
        });
      }
    })

  },

  formSubmitEdit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this.data)
    const group_id = this.data.group.id;
    const end_date = this.data.edate;
    const percent_complete = e.detail.value.input;;
    const goal_id = this.data.group.goal[0].id
    let goal = {
      group_id: group_id,
      end_date: end_date,
      percent_complete: percent_complete
    }
    console.log(goal)
    console.log(goal_id)
    wx.request({
    url: `https://habits.wogengapp.cn/api/v1/groups/${group_id}/goals/${goal_id}`,
    method: 'PUT',
    data: goal,
    success(res) {
      console.log(res)
        wx.redirectTo({
          url: `/pages/group/group?id=${group_id}`
        });
      }
    })

  },

  doNothing(e){
    console.log('picked cancel')
    this.setData({ show: false })
  },

  confirmJoin(e){
    console.log('picked join', e)
    const action = e.currentTarget.dataset.action
    if (action === 'join') {
      this.getUserProfile().then(res => {
        const user = app.globalData.user
        // console.log({user})
        
        const userInfo = this.data.userInfo
        const group_id = this.data.group.id;
        // const open_id = app.globalData.openid;
        // const wechat_username = ;
        // const wechat_pic_url = ;
        // let user = {
        //   open_id: open_id,
        //   wechat_username: userInfo.nickName,
        //   wechat_pic_url: userInfo.avatarUrl
        // }
        // console.log(user)
        wx.request({
        url: `https://habits.wogengapp.cn/api/v1/groups/${group_id}/newuser`,
        method: 'POST',
        data: {user_id: user.id},
        success(res) {
          console.log(res)
            wx.redirectTo({
              url: `/pages/group/group?id=${group_id}`
            });
          }
        })
      })
    }
    
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(options)
    const user = app.globalData.user
    // const owner_id = this.data.group.users[0].id
    
    const page = this
    const group_id = options.id
    wx.request({
      // route doesn't work for some reason
      url: `https://habits.wogengapp.cn/api/v1/groups/${group_id}`,
      method: "GET",
      success(res) {
        const group = res.data;
        console.log(group);
        const hasUserAccepted = group.users.map(x => x.id).includes(user.id)
       
        page.setData({
          group: group, showJoinModal: (!hasUserAccepted)
        });
      }
    });

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    
  },

  removeUserFromGroup() {
    const groupId = this.data.group.id
    console.log(groupId)
    const userId = app.globalData.user.id
    console.log(userId)
    wx.request({
      url: `https://habits.wogengapp.cn/api/v1/groups/${groupId}/users/${userId}/removegroup`,
      method: "DELETE",
      success(res) {
        console.log(res)
        wx.redirectTo({
          url: `/pages/groups-select/groups-select?id=${userId}`
        });
      }
    })
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
              //  wx.redirectTo({
              //    url: ``
              //  });
             }
          });
          // 


          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          resolve(res.userInfo)
        }
      })
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
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: 'Join our group',
      // imageUrl:'http://xxxx',//图片地址
      path:'/pages/group/group?id=2',// 用户点击首先进入的当前页面
      success: function (res) {
        // 转发成功
        console.log("转发成功:");
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:");
      }
    }

  },

})