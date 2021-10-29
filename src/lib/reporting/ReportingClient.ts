import {} from './requests';
import ResourceClient from '../../lib/ResourceClient';

export default class DisputesClient extends ResourceClient {
    public apiVersion = 'v1'; // /v1/reporting

    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }
}
