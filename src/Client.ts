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

export default class PayPalClient {
    mode: ClientMode;
    _client: any; // paypal client

    constructor(options: ClientOptions) {
        this._client = null;

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
        this._client = new paypal.core.PayPalHttpClient(environment);
    }
}
