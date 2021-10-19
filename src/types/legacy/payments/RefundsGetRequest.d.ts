/**
 Shows details for a refund, by ID.
 **/
declare class RefundsGetRequest {
    constructor(refundId: any);
    path: string;
    verb: string;
    body: any;
    headers: {
        'Content-Type': string;
    };
}
