'use strict';

export default ngModule => {
  //controllers
  require('./controllers/messageList.controller')(ngModule);

  //directives
  require('./directives/listMessages.directive')(ngModule);
  require('./directives/showMessages.directive')(ngModule);
  
  //services

  //styles

  //top-level stuff
  require('./messages.routes')(ngModule);
};
