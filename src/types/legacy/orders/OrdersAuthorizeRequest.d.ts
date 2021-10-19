/**
 Authorizes payment for an order. The response shows authorization details.
 **/
declare class OrdersAuthorizeRequest {
    constructor(orderId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalClientMetadataId(payPalClientMetadataId: any): OrdersAuthorizeRequest;
    payPalRequestId(payPalRequestId: any): OrdersAuthorizeRequest;
    prefer(prefer: any): OrdersAuthorizeRequest;
    requestBody(orderActionRequest: any): OrdersAuthorizeRequest;
}
