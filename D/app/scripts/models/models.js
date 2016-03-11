var Backbone = require("backbone");
var $ = require("jquery");

var Model = Backbone.Model.extend({
  urlRoot:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Dproject/"
});

var ModelCollection = Backbone.Collection.extend({
  model:Model,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Dproject/"
})

module.exports={
  "Model":Model,
  "ModelCollection":ModelCollection
}
