define(
  [ 'backbone' ],
  function(Backbone) {
    return Backbone.View.extend({
      render  : function() {
        return this.$el.html('<h1>hello world</h1>');
      }
    });
  }
);
