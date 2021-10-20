import { Amount, Link } from './common';

export interface Dispute {
    dispute_id: string;
    create_time: Date;
    update_time: Date;
    disputed_transactions: Array<DisputedTransaction>;
    reason: string;
    status: string;
    dispute_amount: Amount;
    dispute_outcome: DisputeOutcome;
    dispute_life_cycle_stage: string;
    dispute_channel: string;
    messages: Array<Message>;
    extensions: Extensions;
    offer: Offer;
    links: Array<Link>;
}

export interface Offer {
    buyer_requested_amount: Amount;
}

export interface DisputeOutcome {
    outcome_code: string;
    amount_refunded: Amount;
}

export interface DisputedTransaction {
    seller_transaction_id: string;
    create_time: Date;
    transaction_status: string;
    gross_amount: Amount;
    buyer: Buyer;
    seller: Seller;
}

export interface Buyer {
    name: string;
}

export interface Seller {
    email: string;
    merchant_id: string;
    name: string;
}

export interface Extensions {
    merchandize_dispute_properties: MerchandizeDisputeProperties;
}

export interface MerchandizeDisputeProperties {
    issue_type: string;
    service_details: ServiceDetails;
}

export interface ServiceDetails {
    sub_reasons: Array<string>;
    purchase_url: string;
}

export interface Message {
    posted_by: string;
    time_posted: Date;
    content: string;
    documents: Array<Document>;
}

export interface Document {
    name: string;
    url: string;
}

// generated using: https://app.quicktype.io/
