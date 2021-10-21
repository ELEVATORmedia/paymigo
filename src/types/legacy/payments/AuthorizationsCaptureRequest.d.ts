/**
 Captures an authorized payment, by ID.
 **/
declare class AuthorizationsCaptureRequest {
    constructor(authorizationId: string);
    payPalRequestId(payPalRequestId: string): AuthorizationsCaptureRequest;
    prefer(prefer: string): AuthorizationsCaptureRequest;
    requestBody(capture: any): AuthorizationsCaptureRequest;
}
