const angular = require("angular");
const homePage = require("./home.component");

/**
 * The home component module registers a component
 */
const homeModule = angular.module('app.home', [])

homeModule
    .component('homePage', homePage);

module.exports = homeModule;