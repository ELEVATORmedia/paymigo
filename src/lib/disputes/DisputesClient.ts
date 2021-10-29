import { DisputeGetRequest, DisputesGetRequest } from './requests';
import { Dispute, DisputesListOptions } from '../../types/disputes';
import ResourceClient from '../../lib/ResourceClient';

export default class DisputesClient extends ResourceClient {
    public apiVersion = 'v1'; // /v1/customer/disputes

    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }

    /**
     * Retrieve dispute instance by its ID
     * @param {String} disputeId - unique dispute identifier
     * @returns dispute instance
     */
    public async getById(disputeId: string): Promise<Dispute> {
        const request = new DisputeGetRequest(disputeId);

        const response = await this._client.execute<Dispute>(request);
        return response.result;
    }

    /**
     * Retrieve all relevant disputes based off of provided options
     * @param options - provides `startTime` and `state` of dispute(s)
     * @returns array of disputes
     */
    public async list(options: DisputesListOptions) {
        const request = new DisputesGetRequest(options.startTime, options.state);

        const response = await this._client.execute<{ items: Dispute[] }>(request);
        return response.result.items;
    }
}
