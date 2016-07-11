'use strict';

export default ngModule => {
  ngModule.service('MessageService', function ($q, $log) {

    let _staticMessages = require('./messages.json');

    let self = this;

    this.all = function () {
      return $q.when(_staticMessages);
    };


    this.getInboxMessages = function () {
      return self.all().then(function (allMessages) {
        return _.filter(allMessages, (message) => _.includes(message.labels, 'inbox'));
      });
    };

    this.getSentMessages = function () {
      return self.all().then(function (allMessages) {
        return _.filter(allMessages, (message) => _.includes(message.labels, 'sent'));
      });
    };

  });
};
