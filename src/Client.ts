import paypal from '@paypal/checkout-server-sdk';
import { OrdersClient } from './lib/orders';
import { PaymentsClient } from './lib/payments';
import { DisputesClient } from './lib/disputes';
import { PayflowClient } from './lib/payflow';
import { ClientMode, ClientOptions } from './types/client';
import ReportingClient from 'lib/reporting';

export default class PaymigoClient {
    mode: ClientMode;
    private _client: paypal.core.PayPalHttpClient; // paypal client

    orders: OrdersClient;
    payments: PaymentsClient;
    disputes: DisputesClient;
    reporting: ReportingClient;
    payflow: PayflowClient;

    constructor(options: ClientOptions) {
        this._client = null;

        let environment: paypal.core.PayPalEnvironment;

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

        this.orders = new OrdersClient(this._client);
        this.payments = new PaymentsClient(this._client);
        this.disputes = new DisputesClient(this._client);
        this.reporting = new ReportingClient(this._client);

        if (options.payflow)
            this.payflow = new PayflowClient(options.mode, options.payflow);
    }
}
