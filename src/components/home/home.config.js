/**
 * Route definitions for tbe home page
 * @param $stateProvider
 */
function homeConfig($stateProvider) {
    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            component: 'homePage',
            resolve: {
                name: () => 'World'
            }
        });
}

module.exports = homeConfig;