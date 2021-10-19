/**
 Shows details for a captured payment, by ID.
 **/
declare class CapturesGetRequest {
    constructor(captureId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
}
