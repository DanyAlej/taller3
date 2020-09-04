'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class APIResponseAudit extends Audit {
    static get meta() {
        return {
            id: 'api-response-audit',
            title: 'API Response audit',
            category: 'MyPerformance',
            name: 'api-response-audit',
            description: 'API responded in less than 3 seconds ONLY THE CALL (not since the beginning)',
            failureDescription: 'API is slow to respond',
            helpText: 'Used since the start of the application until the api responded', 
            requiredArtifacts: ['TimeToAPIResponse']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToAPIResponse;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = APIResponseAudit;
