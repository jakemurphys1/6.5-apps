var $=require("jquery")
var Backbone=require("backbone");
var View = require("./views/index");
var ContactsCollection = require ("./models/post");
//var router = require("./router");

$(function(){
    var contacts = new ContactsCollection.Contact;
  var contactForm = new View.ContactFormView({collection:contacts});

  $("#app").html(contactForm.render().el);


})
