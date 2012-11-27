define(
  [ 'backbone' ],
  function(Backbone) {
    return Backbone.View.extend({
      render  : function() {
        return this.$el.html('<i>this is a simple subview</i>');
      }
    });
  }
);
