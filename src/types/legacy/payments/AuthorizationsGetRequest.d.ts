/**
 Shows details for an authorized payment, by ID.
 **/
declare class AuthorizationsGetRequest {
    constructor(authorizationId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
}
