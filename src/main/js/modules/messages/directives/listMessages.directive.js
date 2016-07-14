'use strict';

export default (ngModule) => {
  
  ngModule.directive('listMessages', function ($log) {

    return {
      restrict: 'EA',
      scope: {
        messages : '=',
        activeMessage : '='
      },
      template: require('./../views/listMessages.view.html'),
      link: function (scope, element, attrs) {
        
        scope.setActive = function (message) {
          scope.activeMessage = message;
        }

      }
    };
    
    
    
  })
  
};
