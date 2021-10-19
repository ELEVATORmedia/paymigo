/**
 Captures a payment for an order.
 **/
declare class OrdersCaptureRequest {
    constructor(orderId: string);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersCaptureRequest;
    payPalRequestId(payPalRequestId: string): OrdersCaptureRequest;
    prefer(prefer: string): OrdersCaptureRequest;
    requestBody(orderActionRequest: any): OrdersCaptureRequest;
}
