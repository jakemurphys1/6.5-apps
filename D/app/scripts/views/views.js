var Backbone = require("backbone");
var $ = require("jquery");
var Handlebars= require("handlebars")

var formTemplate = require("../../templates/form.hbs")
var blogTemplate = require("../../templates/templates.hbs")

var FormView = Backbone.View.extend({
  tagName:"form",
  template:formTemplate,
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
    if($("#Title").val()==""){
      return;
    }
    var totalAdd = {"title":$("#Title").val(),"URL":$("#URL").val(),"tag":$("#Tag").val()};
  this.collection.create(totalAdd);
  },
})

var BlogView = Backbone.View.extend({
  template:blogTemplate,
  events:{
    "click .tag":"clicktag"
  },
  initialize:function(){
       this.refresh("");
  },
  refresh:function(tag){
    var myTemplate = this.template;
    var myForm = this;
    this.collection.fetch().done(function(){
        $(".containing").remove();

      this.collection.each(function(item){
        if(item.get("title")!=""){
            if(tag == "" || tag == item.get("tag")){
              var context={
                "Title":item.get("title"),
                "URL":item.get("URL"),
                "Tag":item.get("tag")
              }
              var temp=myTemplate(context);
              $(".blogcontainer").append(myForm.render(temp).el);
            }
        }
      });
}.bind(this));


  },
  render:function(temp){
    this.$el.append(temp)
    return this;
  },

  clicktag:function(e){
    var curID = e.currentTarget.id;
    this.refresh(curID);
  }
})

module.exports = {
  "FormView":FormView,
  "BlogView":BlogView
};
