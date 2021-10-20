import Request from 'legacy/Request';

/**
 Captures a payment for an order.
 **/
declare class OrdersCaptureRequest extends Request {
    constructor(orderId: string);
    payPalClientMetadataId(payPalClientMetadataId: string): OrdersCaptureRequest;
    payPalRequestId(payPalRequestId: string): OrdersCaptureRequest;
    prefer(prefer: string): OrdersCaptureRequest;
    requestBody(orderActionRequest: any): OrdersCaptureRequest;
}
