'use strict';

export default (ngModule) => {

  ngModule.directive('postRepeatAction', function ($log, $timeout, $rootScope) {

    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {

        //courtesy of -> https://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/
        if (scope.$last){
          $timeout(function(){
            let ref = $rootScope.timerStart;
            let end = new Date();
            $log.debug("## DOM rendering list took: " + (end - ref) + " ms");
            $rootScope.duration = end - ref;
            $log.debug('finished loading...');
          });
        }

      }
    };



  })

};
