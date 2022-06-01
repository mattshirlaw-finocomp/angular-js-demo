const angular = require('angular')

require('./services/services.module');
require('./components/home/home.module');

/**
 * The main Application Module
 * - This module has dependencies on the app.home and app.services modules
 */
const appModule = angular.module('app', ['app.home', 'app.services']);

module.exports = appModule;