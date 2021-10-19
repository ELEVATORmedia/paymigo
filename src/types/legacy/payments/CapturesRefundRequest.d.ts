/**
 Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.
 **/
declare class CapturesRefundRequest {
    constructor(captureId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalRequestId(payPalRequestId: any): CapturesRefundRequest;
    prefer(prefer: any): CapturesRefundRequest;
    requestBody(refundRequest: any): CapturesRefundRequest;
}
