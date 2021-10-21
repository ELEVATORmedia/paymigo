/**
 Shows details for an order, by ID.
 **/
declare class OrdersGetRequest {
    public path: string;
    public verb: string;
    public body: any;
    public headers: any;
    constructor(orderId: string);
}
