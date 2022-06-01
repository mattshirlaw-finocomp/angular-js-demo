const { v4 } = require('uuid');

/**
 * The service function
 */
function homeService() {

    // the public API of the service
    return {
        generateRandomUuid: generate
    };

    /**
     * A private function
     */
    function generate() {
        return v4()
    }

}

module.exports = homeService;
