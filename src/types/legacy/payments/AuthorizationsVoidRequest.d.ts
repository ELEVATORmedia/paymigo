/**
 Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
 **/
declare class AuthorizationsVoidRequest {
    constructor(authorizationId: string);
}
