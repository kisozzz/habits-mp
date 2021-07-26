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
      console.log(this.data.createMenuOpen)
      } else {
        this.setData({ createMenuOpen: false })
        console.log(this.data.createMenuOpen)
      }
    }
  }
})
