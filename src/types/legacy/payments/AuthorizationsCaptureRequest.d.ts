/**
 Captures an authorized payment, by ID.
 **/
declare class AuthorizationsCaptureRequest {
    constructor(authorizationId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalRequestId(payPalRequestId: any): AuthorizationsCaptureRequest;
    prefer(prefer: any): AuthorizationsCaptureRequest;
    requestBody(capture: any): AuthorizationsCaptureRequest;
}
