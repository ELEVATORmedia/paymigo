import {
    Authorization,
    AuthorizationCaptureResponse,
    Amount,
    Capture,
    Refund,
} from '../types';
import ResourceClient from './ResourceClient';

export class PaymentsClient extends ResourceClient {
    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }

    async getAuthorization(authorizationId: string): Promise<Authorization> {
        return null;
    }

    async captureAuthorization(
        authorizationId: string,
        amount?: Amount,
    ): Promise<AuthorizationCaptureResponse> {
        return;
    }

    async reauthorizeAuthorization(
        authorizationId: string,
        amount?: Amount,
    ): Promise<Authorization> {
        return;
    }

    async voidAuthorization(authorizationId: string) {
        // success 204 code
        return;
    }

    async getCapture(captureId: string): Promise<Capture> {
        return;
    }

    async refund(captureId: string): Promise<Refund> {
        return;
    }

    async getRefund(refundId: string): Promise<Refund> {
        return;
    }
}
