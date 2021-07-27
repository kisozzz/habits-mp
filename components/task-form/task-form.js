// components/task-form/task-form.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit: function (e) {
      console.log("表单携带的数据：", e.detail.value)
    },

    inputBlur: function (e) {
      console.log("unfocused", e.detail.value)
    }
  }
})
