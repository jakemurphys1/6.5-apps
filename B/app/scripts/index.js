var $=require("jquery");
var Backbone=require("backbone");
var View = require("./views/view");
var Model = require("./models/models");


$(function(){
var ThisCollection = new Model.ThisCollection;

var contactForm = new View({collection:ThisCollection});

$("#app").html(contactForm.render().el);
});
