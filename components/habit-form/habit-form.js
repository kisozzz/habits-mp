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
    sdate: '2021-01-01',
    edate: '2021-01-01',
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

    changeBtnColor: function(e){
      this.setData({
        btnColor: "#F4F4F4"
      })
    },

    choosefreq: function(e){
      this.setData({
        selectedFreq: e.currentTarget.dataset.freq,
      })
    },



    inputBlur: function (e) {
      console.log("表单携带的数据：", e.detail.value)
      let steps = this.data.steps;
      steps.push(e.detail.value);
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

  }
})
