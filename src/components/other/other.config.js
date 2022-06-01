/**
 * Route definitions for the other page
 * @param $stateProvider
 */
function otherConfig($stateProvider) {
    $stateProvider
        .state({
            name: 'other',
            url: '/other',
            component: 'otherPage',
        });
}

module.exports = otherConfig;