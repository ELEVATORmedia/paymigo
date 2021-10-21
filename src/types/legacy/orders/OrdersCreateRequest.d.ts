/**
 Creates an order.
 **/
declare class OrdersCreateRequest {
    public path: string;
    public verb: string;
    public body: any;
    public headers: any;

    payPalPartnerAttributionId(payPalPartnerAttributionId: any): OrdersCreateRequest;
    prefer(prefer: any): OrdersCreateRequest;
    requestBody(order: any): OrdersCreateRequest;
}
