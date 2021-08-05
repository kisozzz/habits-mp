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
    deleteDialog: false,
    confirm: false,
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
    },

    showDeleteDialog(e){
      console.log(e)
      this.setData({deleteDialog: true})
    },
  
    cancelDelete(e){
      console.log('picked cancel')
      this.setData({deleteDialog: false})
    },

    deleteGoal() {
      const group = this.data.info
      const goal = group.goal[0].id
      console.log(group.id)
      console.log(goal)
      wx.request({
        url: `https://habits.wogengapp.cn/api/v1/groups/${group.id}/goals/${goal}`,
        method: "DELETE",
        success(res) {
          console.log(res)
          wx.redirectTo({
            url: `/pages/group/group?id=${group.id}`
          });
        }
      })
    }
  }
})
