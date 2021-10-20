import Request from 'legacy/Request';

/**
 Validates a payment method and checks it for contingencies.
 **/
declare class OrdersValidateRequest extends Request {
    constructor(orderId: string);
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersValidateRequest;
    requestBody(orderActionRequest: any): OrdersValidateRequest;
}
