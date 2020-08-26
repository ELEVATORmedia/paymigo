import { BasePayPalClient } from 'types/paypal';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const paypal = require('@paypal/checkout-server-sdk');

export class OrdersClient {
    private _client: BasePayPalClient;

    constructor(client: BasePayPalClient) {
        this._client = client;
    }

    // TODO input types
    public async create(input: any) {
        const request = new paypal.orders.OrdersCreateRequest();
        request.requestBody(input);

        try {
            const response = await this._client.execute(request);
            return response.result;
        } catch (err) {
            // TODO decide on error handling
            console.error(err);
        }
    }

    public async capture(orderId: string) {
        const request = new paypal.orders.OrdersCaptureRequest(orderId);
        request.requestBody({});

        try {
            const response = await this._client.execute(request);
            return response.result;
        } catch (err) {
            // TODO decide on error handling
            console.error(err);
        }
    }

    /**
     * uses a unique PayPal Order ID to retrieve order details to validate status and amount charged
     * @param {String} orderId
     * @param {Number} expectedAmount
     */
    public async verify(orderId: string, expectedAmount: number) {
        const order = await this.getById(orderId);

        if (
            order.status !== 'COMPLETED' ||
            order.purchase_units[0].amount.value != expectedAmount
        )
            throw new Error('Order has not been completed');

        return true;
    }

    public async getById(orderId: string) {
        const invalidIdError = new Error('Invalid order ID provided');
        const request = new paypal.orders.OrdersGetRequest(orderId);
        let order;

        try {
            const response = await this._client.execute(request);
            order = response.result;
        } catch (err) {
            // TODO decide on error handling
            console.error(err);
            throw invalidIdError;
        }

        if (!order) throw invalidIdError;

        return order;
    }

    public async list(params: any): Promise<any[]> {
        return [] as any[];
    }
}
