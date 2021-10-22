export default abstract class ResourceClient {
    protected _client: paypal.core.PayPalHttpClient;

    constructor(client: paypal.core.PayPalHttpClient) {
        this._client = client;
    }
}
