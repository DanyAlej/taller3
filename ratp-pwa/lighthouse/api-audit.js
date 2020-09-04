'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class APIAudit extends Audit {
    static get meta() {
        return {
            id: 'api-audit',
            title: 'API audit',
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'API called and responded in less than 3 seconds',
            failureDescription: 'API is slow to respond',
            helpText: 'Used since the start of the application until the api responded', 
            requiredArtifacts: ['TimeToAPI']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToAPI;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = APIAudit;
