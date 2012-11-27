// configure require.js
require.config({
  // initialize the application with the main application file
  deps    : [ 'main' ],
  paths   : {
    // folders
    libs            : 'libs',
    plugins         : 'plugins',
    // common libraries
    jquery          : 'libs/jquery',
    backbone        : 'libs/backbone',
    lodash          : 'libs/lodash',
    'super'         : 'plugins/backbone-super'
  },
  shim: {
    backbone: {
      deps    : [ 'lodash', 'jquery' ],
      exports : 'Backbone'
    },
    'super' : {
      deps    : [ 'backbone' ]
    }
  }
});
