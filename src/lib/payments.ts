import {
    Authorization,
    AuthorizationCaptureResponse,
    Amount,
    Capture,
    Refund,
    RefundCapturedPaymentBody,
} from '../types';
import HttpStatusError from './errors/HttpStatusError';
import ResourceClient from './ResourceClient';

export class PaymentsClient extends ResourceClient {
    public apiVersion = 'v2'; // /v2/paymments

    constructor(client: paypal.core.PayPalHttpClient) {
        super(client);
    }

    async getAuthorization(authorizationId: string): Promise<Authorization> {
        const request = new paypal.payments.AuthorizationsGetRequest(authorizationId);
        const response = await this._client.execute<Authorization>(request);

        const expectedStatus = 200;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return response.result;
    }

    async captureAuthorization(
        authorizationId: string,
        amount?: Amount,
    ): Promise<AuthorizationCaptureResponse> {
        const request = new paypal.payments.AuthorizationsCaptureRequest(authorizationId);

        if (amount) request.requestBody({ amount });

        const response = await this._client.execute<AuthorizationCaptureResponse>(
            request,
        );

        const expectedStatus = 201;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return response.result;
    }

    async reauthorizeAuthorization(
        authorizationId: string,
        amount?: Amount,
    ): Promise<boolean> {
        const request = new paypal.payments.AuthorizationsCaptureRequest(authorizationId);

        if (amount) request.requestBody({ amount });

        const response = await this._client.execute<{}>(request);

        const expectedStatus = 201;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return true;
    }

    async voidAuthorization(authorizationId: string): Promise<boolean> {
        const request = new paypal.payments.AuthorizationsCaptureRequest(authorizationId);
        const response = await this._client.execute<{}>(request);

        const expectedStatus = 204;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return true;
    }

    async getCapture(captureId: string): Promise<Capture> {
        const request = new paypal.payments.CapturesGetRequest(captureId);
        const response = await this._client.execute<Capture>(request);

        const expectedStatus = 200;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return response.result;
    }

    async refund(captureId: string, data?: RefundCapturedPaymentBody): Promise<Refund> {
        const request = new paypal.payments.CapturesRefundRequest(captureId);

        if (data) request.requestBody(data);

        const response = await this._client.execute<Refund>(request);

        const expectedStatus = 201;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return response.result;
    }

    async getRefund(refundId: string): Promise<Refund> {
        const request = new paypal.payments.RefundsGetRequest(refundId);

        const response = await this._client.execute<Refund>(request);

        const expectedStatus = 200;

        if (response.statusCode !== expectedStatus)
            throw new HttpStatusError(response.statusCode, expectedStatus);

        return response.result;
    }
}
