/**
 Validates a payment method and checks it for contingencies.
 **/
declare class OrdersValidateRequest {
    constructor(orderId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalClientMetadataId(payPalClientMetadataId: any): OrdersValidateRequest;
    requestBody(orderActionRequest: any): OrdersValidateRequest;
}
