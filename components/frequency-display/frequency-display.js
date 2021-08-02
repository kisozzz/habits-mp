// components/frequency-display/frequency-display.js
Component({
  // lifetimes: {
  //   ready: function() {
  //     console.log('freq db', this.data)
  //     // const otherHabits = this.data.info.other_habits
  //     let completedStatuses = []
  //   }
  // },
  // let completedStatuses = []
  // otherHabits.forEach(habit => {
  //   if (habit.completed) {
  //     completedStatuses.push('complete')
  //   } else if (habit.partially_completed) {
  //     completedStatuses.push('partial')
  //   } else {
  //     completedStatuses.push('incomplete')
  //   }
  // })
  // page.setData({
  //   habit: habit,
  //   completedStatuses: completedStatuses
  // });


  properties: {
    info: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  ready: function(){
    console.log('freq db', this.data)

    // console.log(habit);
    // const otherHabits = habit.other_habits
    // let completedStatuses = []
    // otherHabits.forEach(habit => {
    //   if (habit.completed) {
    //     completedStatuses.push('complete')
    //   } else if (habit.partially_completed) {
    //     completedStatuses.push('partial')
    //   } else {
    //     completedStatuses.push('incomplete')
    //   }
    // })
    // page.setData({
    //   habit: habit,
    //   completedStatuses: completedStatuses
    // });


    // const masterHabitId = this.data.info.id
    // const that = this;
    // wx.request({
    //   url: `https://habits.wogengapp.cn/api/v1/master_habits/${masterHabitId}/analytics`,
    //   method: "GET",
    //   success(res) {
    //     const progress = res.data;
    //     console.log(progress)
    //     that.setData({
    //       progress: progress
    //     });
    //   } 
    //   }) 
  },

  methods: {

  }
})
