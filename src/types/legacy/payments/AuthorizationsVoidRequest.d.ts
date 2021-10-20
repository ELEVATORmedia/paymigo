import Request from 'legacy/Request';

/**
 Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
 **/
declare class AuthorizationsVoidRequest extends Request {
    constructor(authorizationId: string);
}
