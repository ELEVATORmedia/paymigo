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

export interface PatchOrderInput {
    op: PatchOperation;
    path?: string;
    value?: number | string | boolean | null | any[] | object;
    from?: string;
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

export type PatchOperation = 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

// generated using: https://app.quicktype.io/
