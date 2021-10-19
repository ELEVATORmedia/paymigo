import paypal from '@paypal/checkout-server-sdk';

export class OrdersClient {
    private _client: PayPalHttpClient;

    constructor(client: PayPalHttpClient) {
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

    /**
     * uses a unique order ID to capture an authorized order payment
     * @param {String} orderId - unique order identifier
     * @returns order payment capture result
     */
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
     * Retrieve dispute order by its ID to view order details to validate status and amount charged
     * @param {String} orderId - unique order identifier
     * @param {Number} expectedAmount - expected transaction amount
     * @returns whether the transaction completed successfully
     */
    public async verify(orderId: string, expectedAmount: number) {
        const order = await this.getById(orderId);

        // TODO modify to account for all purchase_units
        if (
            order.status !== 'COMPLETED' ||
            order.purchase_units[0].amount.value != expectedAmount
        )
            throw new Error('Order has not been completed');

        return true;
    }

    /**
     * Retrieve order instance by its ID
     * @param {String} orderId - unique order identifier
     * @returns order instance
     */
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
}
