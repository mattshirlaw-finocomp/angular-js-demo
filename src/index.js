/**
 * The entry point to our Angular app
 */

require('@uirouter/angularjs');

const angular = require('angular');
const appModule = require('./app.module')

startApp();

/**
 * Manually bootstrap the app
 */
function startApp() {
    angular.bootstrap(document, [appModule.name]);
}
