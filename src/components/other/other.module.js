const angular = require("angular");
const otherConfig = require("./other.config");
const otherPage = require("./other.component");

/**
 * The other component module registers a component
 */
const otherModule = angular.module('app.other', [])

otherModule
    .config(otherConfig)
    .component('otherPage', otherPage);

module.exports = otherModule;