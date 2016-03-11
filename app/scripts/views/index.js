// 3rd party
var Backbone = require("backbone");
var $ = require("jquery")


//local
var ContactsCollection = require ("../models/post");
var formTemplate = require("../../templates/index.hbs");

var ContactFormView = Backbone.View.extend({
tagName:"form",
template:formTemplate,
events:{
"submit":"complete"
},
initialize:function(){
  
},
render:function(){
  this.$el.html(this.template);
  return this;
},
complete:function(e){
  e.preventDefault();
  var storyList = new ContactsCollection.Contact({Title:$("#Title").val(),Body:$("#Body").val()})
  storyList.save();
}
});

module.exports={
  "ContactFormView":ContactFormView,
};
