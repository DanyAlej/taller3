'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
            'api-gatherer',
            'api-response-gatherer'
        ]
    }],

    audits: [
        'card-audit',
        'api-audit',
        'api-response-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            auditRefs: [
                {id: 'card-audit', weight: 1},
                {id: 'api-audit', weight: 1},
                {id: 'api-response-audit', weight: 1}
            ]
        }
    }
};
