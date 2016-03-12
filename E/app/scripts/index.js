var Backbone=require("backbone");
var $ = require("jquery");
var model = require("./models/models.js");
var view = require("./views/views.js");

$(function(){
  var thisCollection = new model.ModelCollection();
  //var selectForm = new view.SelectForm({collection:thisCollection});
  var CreateForm = new view.CreateForm({collection:thisCollection});

$(".container").html(CreateForm.render().el)

})
