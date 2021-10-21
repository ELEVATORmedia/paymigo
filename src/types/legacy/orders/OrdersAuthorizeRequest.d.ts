/**
 Authorizes payment for an order. The response shows authorization details.
 **/
declare class OrdersAuthorizeRequest {
    public path: string;
    public verb: string;
    public body: any;
    public headers: any;

    constructor(orderId: string);
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersAuthorizeRequest;
    payPalRequestId(payPalRequestId: string): OrdersAuthorizeRequest;
    prefer(prefer: string): OrdersAuthorizeRequest;
    requestBody(orderActionRequest: any): OrdersAuthorizeRequest;
}
