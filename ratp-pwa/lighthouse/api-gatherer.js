'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToAPI extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.APILoadTime')
            .then(cardLoadTime => {
                if (!cardLoadTime) {

                    throw new Error('Unable to find API load metrics in page');
                }
                return cardLoadTime;
            });
    }
}

module.exports = TimeToAPI;
