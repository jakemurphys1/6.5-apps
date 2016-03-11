var Backbone = require("backbone");
var $ = require("jquery")

var Contact = Backbone.Model.extend({
urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Aproject/",
})

 var ContactCollection = Backbone.Collection.extend({
  model:Contact,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/Jakes-Aproject/",
})

module.exports = {
  "Contact": Contact,
  "ContactCollection":ContactCollection
}
