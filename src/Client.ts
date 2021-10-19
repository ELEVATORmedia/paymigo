import { DisputesClient, OrdersClient, ReportingClient } from './lib';
import { ClientMode, ClientOptions } from './types/client';
import paypal from '@paypal/checkout-server-sdk';

export default class PaymigoClient {
    mode: ClientMode;
    private _baseClient: PayPalHttpClient; // paypal client

    orders: OrdersClient;
    disputes: DisputesClient;
    reporting: ReportingClient;

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

        this.orders = new OrdersClient(this._baseClient);
        this.disputes = new DisputesClient(this._baseClient);

        if (options.reporting)
            this.reporting = new ReportingClient(options.mode, options.reporting);
    }
}
