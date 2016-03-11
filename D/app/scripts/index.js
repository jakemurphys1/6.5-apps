var Backbone = require("backbone");
var $ = require("jquery");
var model = require("./models/models.js")
var view = require("./views/views.js")

$(function(){
var thisCollection = new model.ModelCollection();

var thisForm = new view.FormView({collection:thisCollection});
var blogForm = new view.BlogView({collection:thisCollection});

$(".app").html(thisForm.render().el)
$(".blogcontainer").html(blogForm.render().el)
});
