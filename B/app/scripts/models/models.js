var Backbone = require("backbone");
var $ = require("jquery")

var Thismodel = Backbone.Model.extend({
  urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Bproject/",
})

var Thiscollection = Backbone.Collection.extend({
  model:Thismodel,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/Jakes-Bproject/",
})

module.exports = {
  "ThisModel":Thismodel,
  "ThisCollection":Thiscollection
}
