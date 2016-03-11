var Backbone=require("backbone");
var $ = require("jquery");

var Model = Backbone.Model.extend({
    urlRoot:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Eproject/"
});

var ModelCollection = Backbone.Collection.extend({
model:Model,
    url:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-Jakes-Eproject/"
});

module.exports={
  "Model":Model,
  "ModelCollection":ModelCollection
};
