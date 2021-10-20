import Request from 'legacy/Request';

/**
 Captures an authorized payment, by ID.
 **/
declare class AuthorizationsCaptureRequest extends Request {
    constructor(authorizationId: string);
    payPalRequestId(payPalRequestId: string): AuthorizationsCaptureRequest;
    prefer(prefer: string): AuthorizationsCaptureRequest;
    requestBody(capture: any): AuthorizationsCaptureRequest;
}
