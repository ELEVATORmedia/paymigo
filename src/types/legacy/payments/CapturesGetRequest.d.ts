import Request from 'legacy/Request';

/**
 Shows details for a captured payment, by ID.
 **/
declare class CapturesGetRequest extends Request {
    constructor(captureId: string);
}
