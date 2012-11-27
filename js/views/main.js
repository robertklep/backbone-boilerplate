define(
  [ 'backbone', 'views/subview' ],
  function(Backbone, SubView) {
    return Backbone.View.extend({
      template    : _.template( $("#main-view-template").text() ),
      initialize  : function() {
        this.subview = new SubView();
      },
      render      : function() {
        this.$el.html( this.template() );
        this.subview.setElement( this.$('.subview') ).render();
        return this.$el;
      }
    });
  }
);
