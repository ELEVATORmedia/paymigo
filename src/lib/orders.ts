import paypal from '@paypal/checkout-server-sdk';
import { Amount, Order } from '../types';
import ResourceClient from './ResourceClient';

export class OrdersClient extends ResourceClient {
    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }

    // TODO input types
    public async create(input: any) {
        const request = new paypal.orders.OrdersCreateRequest();
        request.requestBody(input);

        const response = await this._client.execute<Order>(request);
        return response.result;
    }

    /**
     * uses a unique order ID to capture an authorized order payment
     * @param {String} orderId - unique order identifier
     * @returns order payment capture result
     */
    public async capture(orderId: string) {
        const request = new paypal.orders.OrdersCaptureRequest(orderId);
        request.requestBody({});

        const response = await this._client.execute(request);
        return response.result;
    }

    /**
     * Retrieve dispute order by its ID to view order details to validate status and amount charged
     * @param {String} orderId - unique order identifier
     * @param {Number} expectedAmount - expected transaction amount
     * @returns whether the transaction completed successfully
     */
    public async verifyOrderAmount(orderId: string, expectedAmount: Amount) {
        const order = await this.getById(orderId);

        // TODO modify to account for all purchase_units
        if (
            order.status !== 'COMPLETED' ||
            order.purchase_units[0].amount.value != expectedAmount.value ||
            order.purchase_units[0].amount.currency_code != expectedAmount.currency_code
        )
            throw new Error('Order has not been completed');

        return true;
    }

    /**
     * Retrieve order instance by its ID
     * @param {String} orderId - unique order identifier
     * @returns order instance
     */
    public async getById(orderId: string): Promise<Order> {
        const request = new paypal.orders.OrdersGetRequest(orderId);

        const response = await this._client.execute<Order>(request);
        return response.result;
    }
}

export * from 'types/orders';
