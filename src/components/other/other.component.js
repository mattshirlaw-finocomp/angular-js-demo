/**
 * Component definition
 */
const otherPage = {
    template: require('./other.component.html').default,
    controllerAs: 'otherPageController',
    bindings: {},
    controller: OtherPageController
};

/**
 * Controller function
 */
function OtherPageController() {
    // reference to the view model
    const vm = this;
}

module.exports = otherPage;