// components/habit-form/habit-form.js
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
    show: false,
    content:'',
    sdate: '',
    edate: '',
    btnColor: '#DBDDFC',
    selectedFreq: null,
    steps:[],
    stepValue: null,
    currentWeeklyKey: null,
    initialDays: [
      { value: 'SUN', isChecked: false},
      { value: 'MON', isChecked: false},
      { value: 'TUE', isChecked: false},
      { value: 'WED', isChecked: false},
      { value: 'THU', isChecked: false},
      { value: 'FRI', isChecked: false},
      { value: 'SAT', isChecked: false},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit: function (e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },

    bindDateChangeStart: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        sdate: e.detail.value
      })
    },
    
    bindDateChangeEnd: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        edate: e.detail.value
      })
    },

    showEmptyMessage(){
      this.setData({
          show:true,
          content:'Tasks cannot be empty!'
      })
    },

    showLimitMessage(){
      this.setData({
          show:true,
          content:'No more than 5 tasks!'
      })
    },

    showDateMessage(){
      this.setData({
          show:true,
          content:'Duration cannot be less than 6 days!'
      })
    },

    choosefreq: function(e){
      this.setData({
        selectedFreq: e.currentTarget.dataset.freq,
      })
    },



    inputBlur: function (e) {
      console.log("表单携带的数据：", e.detail.value)
      let stepObj = {name: e.detail.value}
      let steps = this.data.steps;
      steps.push(stepObj);
      this.setData({
        steps: steps,
        stepValue: ''
      })
    },

    removeStep: function(e){
      console.log(e.detail)

      let steps = this.data.steps;
      let stepIndex = e.detail.index
      steps.splice(stepIndex, 1)
      this.setData({
        steps: steps
      })
    },

    selectTimes: function(e){
      console.log(e.detail)
      this.setData({
        currentWeeklyKey: parseInt(e.detail.currentKey)
      })
    },

    selectDays: function(e){
      console.log(e.detail)
      console.log(this.data.initialDays)
      let initialDays = this.data.initialDays
      initialDays.forEach(x => {
        if (x.value === e.detail.key) {
          x.isChecked = !x.isChecked
        }
      })
      this.setData({
        currentDaysKey: e.detail.key,
        initialDays: initialDays
      })
      console.log(444, this.data.initialDays)
    },

    formSubmit: function(e){
      console.log(e.detail.value)
      console.log(this.data)
      // const step_array = this.data.steps;

      const user_id = getApp().globalData.user.id;
      const name = e.detail.value.input;
      const frequency_options = [];
      const frequencyForm = this.data.selectedFreq; // daily weekly days
      const daysOfWeek = this.data.initialDays  // m , t, w
      const timesWeek = this.data.currentWeeklyKey
      if (frequencyForm === 'days') {
        daysOfWeek.forEach(day =>{
          if (day.isChecked === true) {
            let result = ''
            if (day.value === "MON") {
              result = "Monday"
            } else if (day.value === "TUE"){
              result = "Tuesday"
            } else if (day.value === "WED"){
              result = "Wednesday"
            } else if (day.value === "THU"){
              result = "Thursday"
            } else if (day.value === "FRI"){
              result = "Friday"
            } else if (day.value === "SAT"){
              result = "Saturday"
            } else if (day.value === "SUN"){
              result = "Sunday"
            } 
            frequency_options.push(result)
          }
        })
      }else if (frequencyForm === 'weekly'){
        frequency_options.push('Weekly')
        frequency_options.push(timesWeek)
      }else {
        frequency_options.push('Daily')
      }
      
      const start_date = this.data.sdate;
      const end_date = this.data.edate;
      const step_array = this.data.steps;

      const date1 = new Date(start_date);  
      const date2 = new Date(end_date);  

      const time_difference = date2.getTime() - date1.getTime();  
      const day_result = time_difference / (1000 * 60 * 60 * 24);  

      let habit = {
        user_id: user_id,
        name: name,
        frequency_options: frequency_options,
        start_date: start_date,
        end_date: end_date,
        step_array: step_array
      }

      console.log(habit)
      if (step_array.length === 0) {
        this.showEmptyMessage()
      } else if (step_array.length > 5) {
        this.showLimitMessage()
      } else if (day_result < 6) {
        this.showDateMessage()
      } else {
        wx.request({
          url: "https://habits.wogengapp.cn/api/v1/master_habits",
          method: 'POST',
          data: habit,
          success(res) {
            console.log(res)
              wx.redirectTo({
                url: `/pages/index/index?id=${user_id}`
              });
            }
          })

      }
      // console.log(habit)  
    }
  }
})
