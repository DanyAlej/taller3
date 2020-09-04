'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToAPIResponse extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.APIResponseLoadTime')
            .then(cardLoadTime => {
                if (!cardLoadTime) {

                    throw new Error('Unable to find API load metrics in page');
                }
                return cardLoadTime;
            });
    }
}

module.exports = TimeToAPIResponse;
