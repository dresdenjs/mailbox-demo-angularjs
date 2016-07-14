'use strict';

export default ngModule => {
  ngModule.service('MessageService', function ($q, $log) {

    let _staticMessages = require('./messages.json');

    let self = this;

    this.all = function (limit = 100) {
      return $q.when(_staticMessages.slice(0, limit));
    };


    this.getInboxMessages = function (limit = 100) {
      return self.all(limit).then(function (allMessages) {
        return _.filter(allMessages, (message) => _.includes(message.labels, 'inbox'));
      });
    };

    this.getSentMessages = function (limit = 100) {
      return self.all(limit).then(function (allMessages) {
        return _.filter(allMessages, (message) => _.includes(message.labels, 'sent'));
      });
    };

  });
};
