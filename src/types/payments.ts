import { Amount, Link } from './common';

export interface Authorization {
    id: string;
    status: AuthorizationStatus;
    status_details?: any;
    amount: Amount;
    invoice_id: string;
    seller_protection: SellerProtection;
    expiration_time: Date;
    create_time: Date;
    update_time: Date;
    links: Array<Link>;
}

export interface AuthorizationCaptureResponse extends Authorization {
    final_capture: boolean;
    seller_receivable_breakdown: SellerReceivableBreakdown;
    disbursement_mode: 'INSTANT' | 'DELAYED';
}

export type AuthorizationStatus =
    | 'CREATED'
    | 'CAPTURED'
    | 'DENIED'
    | 'EXPIRED'
    | 'PARTIALLY_CAPTURED'
    | 'PARTIALLY_CREATED'
    | 'VOIDED'
    | 'PENDING';

export interface Capture {
    id: string;
    status: string;
    status_details: StatusDetails;
    amount: Amount;
    final_capture: boolean;
    seller_protection: SellerProtection;
    seller_receivable_breakdown: SellerReceivableBreakdown;
    invoice_id: string;
    create_time: Date;
    update_time: Date;
    links: Link[];
}

export interface Refund {
    id: string;
    amount: Amount;
    status: string;
    note_to_payer: string;
    seller_payable_breakdown: SellerPayableBreakdown;
    invoice_id: string;
    create_time: Date;
    update_time: Date;
    links: Link[];
}

export interface SellerProtection {
    status: string;
    dispute_categories: Array<string>;
}

export interface SellerReceivableBreakdown {
    gross_amount: Amount;
    paypal_fee: NetAmount;
    net_amount: NetAmount;
    receivable_amount: PaypalFeeInReceivableCurrency;
    paypal_fee_in_receivable_currency: PaypalFeeInReceivableCurrency;
    exchange_rate: ExchangeRate;
}

export interface SellerPayableBreakdown {
    gross_amount: Amount;
    paypal_fee: Amount;
    net_amount: Amount;
    total_refunded_amount: Amount;
}

export interface ExchangeRate {
    source_currency: string;
    target_currency: string;
    value: string;
}

export interface NetAmount {
    value: string;
    currency: string;
}

export interface PaypalFeeInReceivableCurrency {
    currency_code: string;
    value: string;
}

export interface StatusDetails {}

// generated using: https://app.quicktype.io/
