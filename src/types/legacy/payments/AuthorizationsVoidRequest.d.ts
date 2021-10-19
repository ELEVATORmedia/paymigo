/**
 Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
 **/
declare class AuthorizationsVoidRequest {
    constructor(authorizationId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
}
