import Request from 'legacy/Request';

/**
 Shows details for an authorized payment, by ID.
 **/
declare class AuthorizationsGetRequest extends Request {
    constructor(authorizationId: string);
}
