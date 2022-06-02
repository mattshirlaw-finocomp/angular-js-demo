const angular = require("angular");
const homeConfig = require("./home.config");
const homePage = require("./home.component");

/**
 * The home component module registers a component
 */
const homeModule = angular.module('app.home', [])

homeModule
    .config(homeConfig)
    .component('homePage', homePage);

module.exports = homeModule;