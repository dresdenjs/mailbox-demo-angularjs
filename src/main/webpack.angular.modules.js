//angular itself
var angular = require('expose?angular!angular');
//actual AngularJS modules, do not confuse them with our app modules
var ngAria = require('angular-aria');
var ngAnimate = require('angular-animate');
var ngSanitize = require('angular-sanitize');
var uirouter = require('angular-ui-router');

//AngularJS module setup
var ngModule = angular.module('mailbox', [
  uirouter,
  ngAria,
  ngAnimate,
  ngSanitize

]);

//top-level angular pieces
require('./js/app.config')(ngModule);
require('./js/app.routes')(ngModule);
// require('./js/app.decorators')(ngModule);
// require('./js/app.interceptors')(ngModule);
// require('./js/app.modules.config')(ngModule);
require('./js/app.run')(ngModule);

//our own application modules and shared + gui files
require('./js/shared')(ngModule);
// require('./js/gui')(ngModule);
require('./js/modules')(ngModule);
require('./js/mocks')(ngModule);
