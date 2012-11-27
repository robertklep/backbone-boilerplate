define([ 'backbone', 'views/main' ], function(Backbone, MainView) {
  return Backbone.Router.extend({
    routes  : {
      ''  : 'index'
    },
    index   : function() {
      // render main view
      new MainView({ el : '#main-view' }).render();
    }
  });
});
