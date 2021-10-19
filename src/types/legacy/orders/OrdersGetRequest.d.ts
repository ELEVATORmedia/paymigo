/**
 Shows details for an order, by ID.
 **/
declare class OrdersGetRequest {
    constructor(orderId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
}
