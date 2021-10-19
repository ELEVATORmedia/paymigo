/**
 Creates an order.
 **/
declare class OrdersCreateRequest {
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalPartnerAttributionId(payPalPartnerAttributionId: any): OrdersCreateRequest;
    prefer(prefer: any): OrdersCreateRequest;
    requestBody(order: any): OrdersCreateRequest;
}
