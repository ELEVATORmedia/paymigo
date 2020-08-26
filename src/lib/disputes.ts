import DisputeGetRequest from 'legacy/DisputeGetRequest';
import DisputesGetRequest, { DisputesGetRequestParams } from 'legacy/DisputesGetRequest';
import { BasePayPalClient, DisputeState } from 'types/paypal';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const paypal = require('@paypal/checkout-server-sdk');

export type DisputesListOptions = {
    startTime: Date;
    state?: DisputeState;
};

export class DisputesClient {
    private _client: BasePayPalClient;

    constructor(client: BasePayPalClient) {
        this._client = client;
    }

    public async getById(disputeId: string) {
        const request = new DisputeGetRequest(disputeId);

        try {
            const response = await this._client.execute(request);
            return response.result;
        } catch (err) {
            console.error(err);
        }
    }

    public async list(params: DisputesListOptions) {
        const request = new DisputesGetRequest(params.startTime, params.state);

        try {
            const response = await this._client.execute(request);

            return response.result.items as any[];
        } catch (err) {
            // TODO figure out error handling
            console.error(err);
        }
    }
}
