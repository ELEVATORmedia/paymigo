/**
 Validates a payment method and checks it for contingencies.
 **/
declare class OrdersValidateRequest {
    constructor(orderId: string);
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersValidateRequest;
    requestBody(orderActionRequest: any): OrdersValidateRequest;
}
