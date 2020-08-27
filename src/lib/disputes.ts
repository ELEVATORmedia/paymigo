import DisputeGetRequest from 'legacy/DisputeGetRequest';
import DisputesGetRequest from 'legacy/DisputesGetRequest';
import { BasePayPalClient, DisputeState } from 'types/paypal';

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

    /**
     * Retrieve all relevant disputes based off of provided options
     * @param options - provides `startTime` and `state` of dispute(s)
     * @returns array of disputes
     */
    public async list(options: DisputesListOptions) {
        const request = new DisputesGetRequest(options.startTime, options.state);

        try {
            const response = await this._client.execute(request);

            return response.result.items as any[];
        } catch (err) {
            // TODO figure out error handling
            console.error(err);
        }
    }
}
