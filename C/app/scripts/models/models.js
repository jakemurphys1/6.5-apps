var $=require("jquery");
var Backbone=require("backbone");

var Model = Backbone.Model.extend({
  urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Aproject/",
})

var ModelCollection = Backbone.Collection.extend({
  model:Model,
    url:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Aproject/",
});

module.exports = {
  "Model":Model,
  "ModelCollection":ModelCollection
}
