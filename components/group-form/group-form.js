// components/group-form/group-form.js
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
    disabled: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit: function (e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      console.log(this.data)
      console.log(999,getApp().globalData.user)
      const user_id = getApp().globalData.user.id;
      const name = e.detail.value.name;
      let group = {
        user_id: user_id,
        name: name
      }
      this.setData({
        disabled: true
      })
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
        })

    },
  }
})
