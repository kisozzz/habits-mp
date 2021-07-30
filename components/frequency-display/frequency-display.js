// components/frequency-display/frequency-display.js
Component({
  lifetimes: {
    ready: function() {
      console.log('freq db', this.data)
      // const otherHabits = this.data.info.other_habits
      let completedStatuses = []
    }
  },
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

  /**
   * Component methods
   */
  methods: {

  }
})
