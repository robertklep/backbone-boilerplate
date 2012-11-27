require([ 'backbone', 'app', 'router' ], function(Backbone, app, Router) {
  app.router = new Router();

  // start routing
  Backbone.history.start({ pushState: true });
});
