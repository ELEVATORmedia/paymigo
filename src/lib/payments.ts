import ResourceClient from './ResourceClient';

export class PaymentsClient extends ResourceClient {
    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }

    async getAuthorization(authorizationId: string) {}

    async captureAuthorization(authorizationId: string) {}

    async reauthorizeAuthorization(authorizationId: string) {}

    async voidAuthorization(authorizationId: string) {}

    async getCapture(captureId: string) {}

    async refund(captureId: string) {}
}
