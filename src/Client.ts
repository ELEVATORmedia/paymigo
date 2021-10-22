import paypal from '@paypal/checkout-server-sdk';
import { OrdersClient } from './lib/orders';
import { PaymentsClient } from './lib/payments';
import { DisputesClient } from './lib/disputes';
import { ReportingClient } from './lib/reporting';
import { ClientMode, ClientOptions } from './types/client';

export default class PaymigoClient {
    mode: ClientMode;
    private _client: paypal.core.PayPalHttpClient; // paypal client

    orders: OrdersClient;
    payments: PaymentsClient;
    disputes: DisputesClient;
    reporting: ReportingClient;

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

        this.orders = new OrdersClient(this._client);
        this.payments = new PaymentsClient(this._client);
        this.disputes = new DisputesClient(this._client);

        if (options.reporting)
            this.reporting = new ReportingClient(options.mode, options.reporting);
    }
}
