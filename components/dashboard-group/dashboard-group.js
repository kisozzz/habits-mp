// components/dashboard-group/dashboard-group.js
Component({
  /**
   * Component properties
   */
  properties: {
    info: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    openPopup() {
      this.selectOwnerComponent().bindShowPopup()
   },
    editGoal() {
      this.selectOwnerComponent().bindShowPopupEdit()
    }
  }
})
