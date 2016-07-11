'use strict';

export default ngModule => {
  ngModule.config(function ($stateProvider, $urlRouterProvider) {
    // Now set up the states
    $stateProvider
      .state('main', {
        url: '/main',
        abstract: true,
        template: require('../layouts/default.layout.html')
      });

    // For any unmatched url, redirect to first view
    $urlRouterProvider.otherwise('/main/messages/inbox');
  });
}
