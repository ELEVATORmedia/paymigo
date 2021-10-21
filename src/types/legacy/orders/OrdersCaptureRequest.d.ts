/**
 Captures a payment for an order.
 **/
declare class OrdersCaptureRequest {
    public path: string;
    public verb: string;
    public body: any;
    public headers: any;

    constructor(orderId: string);
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersCaptureRequest;
    payPalRequestId(payPalRequestId: string): OrdersCaptureRequest;
    prefer(prefer: string): OrdersCaptureRequest;
    requestBody(orderActionRequest: any): OrdersCaptureRequest;
}
