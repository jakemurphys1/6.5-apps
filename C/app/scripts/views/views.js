var $=require("jquery");
var Backbone=require("backbone");

//Local
var selectTemplate = require("../../templates/select.hbs");
var blogTemplate = require("../../templates/blog.hbs");

var SelectForm = Backbone.View.extend({
  template:selectTemplate,
  events:{
    "click p":"fill"
  },
initialize:function(){
  this.collection.fetch().done(function(){
console.log(this.collection)
    this.collection.each(function(item){
      $('#selectForm').append("<p id = " + item.get('Title') +">" + item.get('Title') + "</p>")
    });

  }.bind(this));
},
fill:function(e){
  var curID = e.currentTarget.id;
  $('#blogForm').empty();
  this.collection.fetch().done(function(){

    this.collection.each(function(item){
      if(curID === item.get('Title')){
        $('#blogForm').append("<h1 id = " + item.get('Title') +">" + item.get('Title') + "</h1>")
            $('#blogForm').append("<p id = " + item.get('Body') +">" + item.get('Body') + "</p>")
      }
    });

  }.bind(this));

},
render:function(){
  this.$el.html(this.template)
  return this;
},
})

var BlogForm = Backbone.View.extend({
  template:blogTemplate,
initialize:function(){
  this.listenTo(this.model,"click p",this.complete)
},
render:function(){
  this.$el.html(this.template)
  return this;
},
complete:function(){
  console.log("heyhey")
},
});

module.exports = {
  "SelectForm":SelectForm,
  "BlogForm":BlogForm
};
