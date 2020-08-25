import { DisputesGetRequestParams } from 'legacy/DisputesGetRequest';
import { BasePayPalClient } from 'types/paypal';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const paypal = require('@paypal/checkout-server-sdk');

export class OrdersClient {
    private _client: BasePayPalClient;

    constructor(client: BasePayPalClient) {
        this._client = client;
    }

    public async list(params: DisputesGetRequestParams): Promise<any[]> {
        return [] as any[];
    }
}
