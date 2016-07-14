'use strict';

export default (ngModule) => {

  ngModule.directive('showMessage', function ($log) {

    return {
      restrict: 'EA',
      scope: {
        message : '='
      },
      template: require('./../views/showMessage.view.html'),
      link: function (scope, element, attrs) {

      }
    };



  })

};
