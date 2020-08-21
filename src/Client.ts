import { BasePayPalClient } from "types/paypal";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const paypal = require('@paypal/checkout-server-sdk');

export type ClientMode = 'sandbox' | 'production';

export type PayflowOptions = {
    user: string;
    vendor?: string;
    partner: 'Paypal';
    password: string;
};

export type ClientOptions = {
    mode: ClientMode;
    clientId: string;
    secretKey: string;
    reporting?: PayflowOptions;
};

export default class PaymigoClient {
    mode: ClientMode;
    private _baseClient: BasePayPalClient; // paypal client

    constructor(options: ClientOptions) {
        this._baseClient = null;

        let environment = null;

        if (options.mode === 'sandbox')
            environment = new paypal.core.SandboxEnvironment(
                options.clientId,
                options.secretKey,
            );
        else if (options.mode === 'production')
            environment = new paypal.core.LiveEnvironment(
                options.clientId,
                options.secretKey,
            );

        if (!environment) throw new Error('Invalid client environment configuration');

        this.mode = options.mode;
        this._baseClient = new paypal.core.PayPalHttpClient(environment);
    }
}
