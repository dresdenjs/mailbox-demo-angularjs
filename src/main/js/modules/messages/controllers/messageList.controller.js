'use strict';

export default ngModule => {
  ngModule.controller('MessageListController', function ($scope, $stateParams, $log, Messages) {

    require('../styles/messages.scss');

    $log.info('MessageListView Loading... with params', $stateParams);

    $scope.messages = Messages.initial;

    $log.debug('Messages: %O', $scope.messages);

    $scope.activeMessage = Messages[0];

    $scope.fetch = function (limit) {
      Messages.fetch(limit)
        .then(function (messages) {
          $log.debug('got messages: %O', messages);
          $scope.messages = messages;
        })
    };


    var _initialize = function () {
      //...
    };

    _initialize();
  });
}
