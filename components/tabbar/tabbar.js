// components/tabbar/tabbar.js
Component({
  /**
   * Component properties
   */
  properties: {

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
