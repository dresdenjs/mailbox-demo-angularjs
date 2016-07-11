'use strict';

export default ngModule => {
  ngModule.controller('MessageListController', function ($scope, $stateParams, $log, Messages) {

    require('../styles/messages.scss');

    $log.info('MessageListView Loading... with params', $stateParams);

    $scope.messages = Messages;

    $log.debug('Messages: %O', $scope.messages);
    
    $scope.activeMessage = Messages[0];


    var _initialize = function () {
      //...
    };

    _initialize();
  });
}
