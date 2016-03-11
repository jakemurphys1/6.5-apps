var Backbone = require("backbone");
var $ = require("jquery")

var thisTemplate = require("../../templates/template.hbs");

var FormView = Backbone.View.extend({
  tagName:"form",
  template:thisTemplate,
  events:{
    "submit":"complete"
  },
  initialize:function(){
  },
  render:function(){
    this.$el.html(this.template)
    return this;
  },
  complete:function(e){
    e.preventDefault();
var totaladd = {firstName: $("#Fname").val(),lastName: $("#Lname").val(),address:$("#Address").val(),Phone:$("#Phone").val()}
this.collection.create(totaladd);
  }
});

module.exports = FormView;
