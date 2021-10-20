import Request from 'legacy/Request';

/**
 Shows details for an order, by ID.
 **/
declare class OrdersGetRequest extends Request {
    constructor(orderId: string);
}
