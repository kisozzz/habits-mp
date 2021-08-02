// components/tabbar/tabbar.js
Component({
  /**
   * Component properties
   */
  properties: {
    info: Object
  },

  ready: function(){
    if (getApp().globalData.user.id) {
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
    }
  }
})
