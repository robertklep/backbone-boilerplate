// your app here
define(
  [ 'views/main' ],
  function(MainView) {
    new MainView().render().appendTo('body');
  }
);
