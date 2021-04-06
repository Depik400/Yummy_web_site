const exphbs = require("express-handlebars");
const path = require("path");

module.exports = exphbs({
  defaultLayout: "index",
  extname: ".hbs",
  layoutsDir: "./views",
  partialsDir: "./views/partials",
  helpers: {
    switch: function (value, options) {
      this.switch_value = value;
      return options.fn(this);
    },
    case: function (value, options) {
      if (value == this.switch_value) {
        return options.fn(this);
      }
    },
  },
});
