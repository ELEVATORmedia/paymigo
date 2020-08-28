module.exports = {
    typedocSidebar: [
        'index',
        'globals',
        {
            type: 'category',
            label: 'Namespaces',
            items: ['modules/reporting'],
        },
        {
            type: 'category',
            label: 'Classes',
            items: [
                'classes/basepaypalclient',
                'classes/disputegetrequest',
                'classes/disputesclient',
                'classes/disputesgetrequest',
                'classes/ordersclient',
                'classes/paypalrequest',
                'classes/paymigoclient',
                'classes/reportingclient',
            ],
        },
        {
            type: 'category',
            label: 'Interfaces',
            items: [
                'interfaces/reporting.getreportrequest',
                'interfaces/reporting.reportingrequest',
                'interfaces/reporting.reportingresponse',
                'interfaces/reporting.runreportrequest',
                'interfaces/reporting.runreportresponse',
            ],
        },
    ],
};
