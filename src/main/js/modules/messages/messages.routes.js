'use strict';

export default ngModule => {
  ngModule.config(function ($stateProvider) {

    $stateProvider
      .state('main.messagesInbox', {
        url: '/messages/inbox/:messageId',
        controller: 'MessageListController',
        template: require('./views/messageList.view.html'),
        resolve: {
          Messages : function (MessageService) {
            return MessageService.getInboxMessages()
              .then(function (messages) {
                return {
                  initial : messages,
                  fetch : MessageService.getInboxMessages
                }
              });
          }
        }
      })
      .state('main.messagesSent', {
        url: '/messages/sent/:messageId',
        controller: 'MessageListController',
        template: require('./views/messageList.view.html'),
        resolve: {
          Messages : function (MessageService) {
            return MessageService.getSentMessages()
              .then(function (messages) {
                return {
                  initial : messages,
                  fetch : MessageService.getSentMessages
                }
              });
          }
        }
      });

  });
}
