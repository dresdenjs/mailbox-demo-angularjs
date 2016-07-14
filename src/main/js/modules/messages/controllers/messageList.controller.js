'use strict';

export default ngModule => {
  ngModule.controller('MessageListController', function ($scope, $stateParams, $log, Messages, $rootScope) {

    require('../styles/messages.scss');

    $log.info('MessageListView Loading... with params', $stateParams);

    $scope.messages = Messages.initial;

    $log.debug('Messages: %O', $scope.messages);

    $scope.activeMessage = Messages[0];

    $scope.fetch = function (limit) {
      $scope.currentLimit = limit;
      $rootScope.timerStart = new Date();
      Messages.fetch(limit)
        .then(function (messages) {
          $log.debug('got messages: %O', messages);
          $scope.messages = messages;
        })
    };


    var _initialize = function () {
      $scope.limits = [100, 200, 500, 1000, 5000, 10000];
      $scope.currentLimit = _.head($scope.limits);
    };

    _initialize();
  });
}
