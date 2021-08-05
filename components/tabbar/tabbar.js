
Component({
  /**
   * Component properties
   */
  properties: {
    info: Object
  },

  ready: function(){
    if (getApp().globalData.user) {
      const user = getApp().globalData.user.id
      this.setData({user: user})
    }
  },

  /**
   * Component initial data
   */
  data: {
    createMenuOpen: false
  },

  /**
   * Component methods
   */
  methods: {
    displayCreateOptions() {
      if(!this.data.createMenuOpen) {
      // this.data.;
      this.setData({ createMenuOpen: true })
      } else {
        this.setData({ createMenuOpen: false })
      }
    },
    goToHome() {
      wx.redirectTo({
        url: '/pages/index/index',
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
    },
    goToCreateHabit() {
      wx.redirectTo({
        url: '/pages/create-habit/create-habit',
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
    },
    goToCreateGroup() {
      wx.redirectTo({
        url: '/pages/create-group/create-group',
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
    }
  }
})
