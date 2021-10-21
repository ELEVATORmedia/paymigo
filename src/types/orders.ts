import { Amount, Link } from './common';

export interface Order {
    id: string;
    status: string;
    intent: string;
    payer: Payer;
    purchase_units: PurchaseUnit[];
    create_time: Date;
    links: Link[];
}

export interface Payer {
    name: Name;
    email_address: string;
    payer_id: string;
}

export interface Name {
    given_name: string;
    surname: string;
}

export interface PurchaseUnit {
    reference_id: string;
    amount: Amount;
}

// generated using: https://app.quicktype.io/
