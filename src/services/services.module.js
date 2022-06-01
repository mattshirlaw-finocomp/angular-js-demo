const angular = require('angular');
const homeService = require('./home/home.service');

/**
 * The services module registers all services
 * - currently only the home.service
 */
const servicesModule = angular.module('app.services', []);

servicesModule.service('homeService', homeService);

module.exports = servicesModule;
