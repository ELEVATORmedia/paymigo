import Request from 'legacy/Request';

/**
 Authorizes payment for an order. The response shows authorization details.
 **/
declare class OrdersAuthorizeRequest extends Request {
    constructor(orderId: string);
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersAuthorizeRequest;
    payPalRequestId(payPalRequestId: string): OrdersAuthorizeRequest;
    prefer(prefer: string): OrdersAuthorizeRequest;
    requestBody(orderActionRequest: any): OrdersAuthorizeRequest;
}
