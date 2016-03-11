var $=require("jquery");
var Backbone=require("backbone");
var View = require("./views/views");
var model = require("./models/models");

$(function(){
  var thisCollection = new model.ModelCollection();

var thisForm = new View.SelectForm({collection:thisCollection})
var thisBlog = new View.BlogForm({collection:thisCollection})

$(".titlecontainer").html(thisForm.render().el);
$(".blogcontainer").html(thisBlog.render().el);
});
