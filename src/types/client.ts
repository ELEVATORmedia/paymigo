
export type ClientMode = 'sandbox' | 'production';

export type PayflowCredentials = {
    user: string;
    vendor?: string;
    partner: 'Paypal';
    password: string;
};

export type ClientOptions = {
    mode: ClientMode;
    clientId: string;
    secretKey: string;
    reporting?: PayflowCredentials;
};
