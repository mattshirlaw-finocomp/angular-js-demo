/**
 * Component definition
 */
const homePage = {
    template: require('./home.component.html').default,
    controllerAs: 'homePageController',
    bindings: {
        name: '<'
    },
    controller: HomePageController
};

/**
 * Controller function
 */
function HomePageController(homeService) {
    // reference to the view model
    const vm = this;

    // functions which are bound to the view model
    vm.clickButton = clickButton;

    // Callback function
    function clickButton() {
        vm.name = homeService.generateRandomUuid();
    }
}

module.exports = homePage;