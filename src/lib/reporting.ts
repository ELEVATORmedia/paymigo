import axios from 'axios';
import xml2js from 'xml2js';
import { parseNumbers } from 'xml2js/lib/processors';
import { ClientMode, PayflowCredentials } from 'types/client';

const XmlParser = new xml2js.Parser({
    valueProcessors: [parseNumbers],
});

const XmlBuilder = new xml2js.Builder({
    xmldec: { version: '1.0', encoding: 'UTF-8' },
});

export class ReportingClient {
    private _apiUri: string;
    private _payflowCredentials: PayflowCredentials;

    constructor(mode: ClientMode, credentials: PayflowCredentials) {
        this._apiUri = `https://payments-reports.paypal.com/${
            mode === 'sandbox' ? 'test-' : ''
        }reportingengine`;
        this._payflowCredentials = credentials;
    }

    buildRequestBody = (params: any) => XmlBuilder.buildObject({
        reportingEngineRequest: {
            authRequest: this._payflowCredentials,
            // TODO request types
            ...params,
        },
    });

    makeRequest = (body: any) => axios.post(this._apiUri, body);
}
