import { DisputeGetRequest, DisputesGetRequest } from './requests';
import { DisputesListOptions } from '../../types/disputes';
import ResourceClient from '../../lib/ResourceClient';

export default class DisputesClient extends ResourceClient {
    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }

    /**
     * Retrieve dispute instance by its ID
     * @param {String} disputeId - unique dispute identifier
     * @returns dispute instance
     */
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
