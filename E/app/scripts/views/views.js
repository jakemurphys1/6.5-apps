var Backbone=require("backbone");
var $ = require("jquery");
var Handlebars = require("handlebars")
var _ = require("underscore");

var SelectTemplate = require("../../templates/select.hbs");
var CreateTemplate = require("../../templates/create.hbs");
var ReadTemplate = require("../../templates/read.hbs");
var model = require("../models/models.js");
  var thisCollection = new model.ModelCollection();



var SelectForm = Backbone.View.extend({
  template:SelectTemplate,
  events:{
    "click .titles": "gotoBlog"
  },
    render:function(context){
      this.$el.html(this.template({myObject:context}))
      return this;
    },
    gotoBlog:function(e){

      var curTitle = e.currentTarget.id;
      this.collection.fetch().done(function(){
        var context = {};
        this.collection.each(function(item){
        if(curTitle==item.get("Title")){
          context={"title":item.get("Title"),"body":item.get("Body")}
        }
      })
      var ThisSelectForm = new ReadForm({collection:thisCollection});
      $(".container").html(ThisSelectForm.render(context).el)
        }.bind(this))
}
});

var CreateForm = Backbone.View.extend({
  tagName:"form",
  template:CreateTemplate,
  events:{
    "submit":"Addit",
    "click #selectButton": "gotoSelect"
  },
  Addit:function(e){
    e.preventDefault();
    var addList = ({Title:$("#Title").val(),Body:$("#Body").val()});
        //deletes all items with the new item's title
      var testTitle= addList.Title;

    this.collection.fetch().done(function(){
      this.collection.each(function(item){
        if(item.get("Title")==testTitle){
        item.destroy();
        var ThisCreateForm = new CreateForm({collection:thisCollection});
        ThisCreateForm.gotoSelect();
        }
        var ThisCreateForm = new CreateForm({collection:thisCollection});
        ThisCreateForm.gotoSelect();
      });

    }.bind(this));



    this.collection.create(addList);

  },
  render:function(context){
    this.$el.html(this.template(context))
    return this;
  },
  gotoSelect:function(){
    var context = [];
    this.collection.fetch().done(function(){

      this.collection.each(function(item){

          context.push({"title":item.get("Title"),"body":item.get("Body")})
      })
      var ThisSelectForm = new SelectForm({collection:thisCollection});
      $(".container").empty()
      $(".container").append(ThisSelectForm.render(context).el)
    }.bind(this))
  },
})



var ReadForm = Backbone.View.extend({
  template:ReadTemplate,
  events:{
    "click #Delete":"gotoDelete",
    "click #Update":"gotoUpdate",
    "click #Select":"gotoSelect",
      "click #Create":"gotoCreate",
  },
  render:function(context){
    this.$el.html(this.template(context))
    return this;
  },
  gotoDelete:function(e){
    var curTitle = e.currentTarget.className;
    this.collection.findWhere({Title: curTitle}).destroy().then(function(){
      var ThisCreateForm = new CreateForm({collection:thisCollection});
      ThisCreateForm.gotoSelect();
    });

  },
  gotoUpdate: function(e){

    this.collection.fetch().done(function(){
      var context = {};
        var curTitle = e.currentTarget.className;
      this.collection.each(function(item){
        if(curTitle == item.get("Title")){
          context={"Title":item.get("Title"),"Body":item.get("Body")}
        }
      })
      var ThisCreateForm = new CreateForm({collection:thisCollection});
      $(".container").html(ThisCreateForm.render(context).el)
    }.bind(this))

  },
  gotoCreate:function(){
    var ThisCreateForm = new CreateForm({collection:thisCollection});
    $(".container").html(ThisCreateForm.render().el)
  },
  gotoSelect:function(){
    var ThisCreateForm = new CreateForm({collection:thisCollection});
    ThisCreateForm.gotoSelect();
  },
});

module.exports = {
  "SelectForm": SelectForm,
  "CreateForm": CreateForm,
};
