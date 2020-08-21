export type RequestVerb = 'GET' | 'POST';

export declare class BasePayPalClient {
    constructor(environment: any);
    // TODO set to PayPalRequest
    execute(request: any): Promise<any>;
}

export type RequestOptions = {
    path: string;
    verb?: RequestVerb;
    body?: any;
    headers?: any;
};

export type DisputeState = 'RESOLVED';

export type DisputeOutcome = {
    disputeId: string;
    outcome: 'won' | 'lost';
    amount: number;
};

export type DisputeOutcomeCode =
    | 'RESOLVED_BUYER_FAVOUR'
    | 'RESOLVED_SELLER_FAVOUR'
    | 'RESOLVED_WITH_PAYOUT'
    | 'CANCELED_BY_BUYER'
    | 'ACCEPTED'
    | 'DENIED'
    | 'NONE';
