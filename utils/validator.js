/**
 * 表单校验函数
 */
const validate = (e, context) => {
  let field = context.data.field || {};
  let name = e.currentTarget.dataset.name;
  let alias = e.currentTarget.dataset.as;
  let value = (e.detail.value || "").trim();
  let validator = e.currentTarget.dataset.validate
      ? e.currentTarget.dataset.validate.split(",")
      : [];

  field.$data = {...field.$data || {}, ...{
      [name]: value
  }}

  if (name && validator.length) {
      for (let i = 0; i < validator.length; i++) {
          let ruleName = validator[i];
          let rule = validators[ruleName].rule;
          let customMsg = validators[ruleName].msg;
          let defaultMsg =
              (alias || name) + (rule === validators.required.rule ? "不能为空" : "输入错误");

          if ("function" === typeof rule) {
              field[name] = rule.call(context, value) ? "" : customMsg || defaultMsg;
          } else {
              field[name] = rule.test(value) ? "" : customMsg || defaultMsg;
          }
          context.setData({
              field: field
          });
          if (field[name]) break;
      }
      field.$dirty = true;
      field.$invalidMsg = "";

      if (field[name]) {
          field.$invalidMsg = field[name];
      } else {
          for (let key in field) {
              if (key !== "$invalidMsg" && key !== "$dirty" && key !== "$data") {
                  field.$invalidMsg = field[key].trim() ? field[key] : field.$invalidMsg;
                  if (field[key]) break;
              }
          }
      }

      context.setData({
          field
      });
  } else {
      console.error("Type Error: name或validate属性错误");
  }
};

/**
* 校验必填项是否为空
*/
const validateRequired = (context, callback, type = "PAGE") => {
  const selectorQuery =
      type === "PAGE" ? wx.createSelectorQuery() : wx.createSelectorQuery().in(context);
  selectorQuery
      .selectAll(".jsInput")
      .fields(
          {
              dataset: true,
              properties: ["value"]
          },
          inputs => {
              let field = context.data.field || {};

              inputs.forEach(input => {
                  let name = input.dataset.name,
                      alias = input.dataset.as;
                  if (!validators.required.rule.test((field.$data && field.$data[name]) || "")) {
                      field[name] = validators.required.msg || alias + "不能为空";
                  }
              });

              field.$dirty = true;
              field.$invalidMsg = "";
              for (let key in field) {
                  if (key !== "$invalidMsg" && key !== "$dirty" && key !== "$data") {
                      field.$invalidMsg = field[key].trim() ? field[key] : field.$invalidMsg;
                      if (field[key]) break;
                  }
              }
              context.setData({
                  field
              });
          }
      )
      .exec(callback);
};


export default {
  validate,
  validateRequired
};