var Backbone=require("backbone");
var $ = require("jquery");

var SelectTemplate = require("../../templates/select.hbs");
var CreateTemplate = require("../../templates/create.hbs");

var SelectForm = Backbone.View.extend({
template:SelectTemplate,
initialize:function(){
  console.log("it works")
}
});

var CreateForm = Backbone.View.extend({
  tagName:"form",
  template:CreateTemplate,
  events:{
    "submit":"Addit"
  },
  Addit:function(e){
    e.preventDefault();
  var addList = ({Title:$("#Title").val(),Body:$("#Body").val()})
  this.collection.create(addList);
  },
  initialize:function(){

  },
  render:function(){
    this.$el.html(this.template)
    return this;
  },
})

module.exports = {
  "SelectForm": SelectForm,
  "CreateForm": CreateForm,
}
