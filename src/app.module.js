const angular = require('angular')

require('./services/services.module');
require('./components/home/home.module');
require('./components/other/other.module');

/**
 * The main Application Module
 * - This module has dependencies on the app.home and app.services modules
 */
const appModule = angular.module('app', [
    // third party
    'ui.router',
    // components
    'app.home',
    'app.other',
    // services
    'app.services'
]);

module.exports = appModule;