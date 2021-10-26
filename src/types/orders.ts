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

export interface CreateOrderInput
    extends Pick<Order, 'intent' | 'payer' | 'purchase_units'> {
    application_context: any;
}

export interface Payer {
    name: Name;
    email_address: string;
    payer_id: string;
    phone: any;
    birth_date: string;
    tax_info: any;
    address: any;
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
