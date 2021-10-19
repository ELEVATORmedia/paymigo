/**
 Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize an authorized payment after its initial three-day honor period expires.<br/><br/>After the three-day honor period expires, you can reauthorize an authorized payment only once from days four to 29. If 30 days have passed since the date of the authorized payment, you must create an authorized payment instead.<br/><br/>A reauthorized payment itself has a new three-day honor period. You can reauthorize an authorized payment once for up to 115% of the original authorized amount and not to exceed an increase of $75 USD.<br/><br/>Supports the <code>amount</code> request parameter only.
 **/
declare class AuthorizationsReauthorizeRequest {
    constructor(authorizationId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
    payPalRequestId(payPalRequestId: any): AuthorizationsReauthorizeRequest;
    prefer(prefer: any): AuthorizationsReauthorizeRequest;
    requestBody(reauthorizeRequest: any): AuthorizationsReauthorizeRequest;
}
