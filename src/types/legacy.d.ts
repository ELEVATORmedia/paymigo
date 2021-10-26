declare type EventEmitter = import('events').EventEmitter;
declare type BaseRequest = import('../lib/Request').default;

declare const paypalCheckout: paypal.PayPalCheckout;

declare namespace paypal {
    interface PayPalCheckout {
        core: CoreResource;
        orders: OrdersResource;
        payments: PaymentsResource;
    }

    interface CoreResource {
        AccessToken: typeof core.AccessToken;
        AccessTokenRequest: core.AccessTokenRequest;
        PayPalEnvironment: typeof core.PayPalEnvironment;
        LiveEnvironment: typeof core.LiveEnvironment;
        PayPalHttpClient: typeof core.PayPalHttpClient;
        RefreshTokenRequest: core.RefreshTokenRequest;
        TokenCache: typeof core.TokenCache;
        SandboxEnvironment: typeof core.SandboxEnvironment;
    }

    interface OrdersResource {
        OrdersAuthorizeRequest: typeof orders.OrdersAuthorizeRequest;
        OrdersCaptureRequest: typeof orders.OrdersCaptureRequest;
        OrdersCreateRequest: typeof orders.OrdersCreateRequest;
        OrdersGetRequest: typeof orders.OrdersGetRequest;
        OrdersPatchRequest: typeof orders.OrdersPatchRequest;
        OrdersValidateRequest: typeof orders.OrdersValidateRequest;
    }

    interface PaymentsResource {
        AuthorizationsCaptureRequest: typeof payments.AuthorizationsCaptureRequest;
        AuthorizationsGetRequest: typeof payments.AuthorizationsGetRequest;
        AuthorizationsReauthorizeRequest: typeof payments.AuthorizationsReauthorizeRequest;
        AuthorizationsVoidRequest: typeof payments.AuthorizationsVoidRequest;
        CapturesGetRequest: typeof payments.CapturesGetRequest;
        CapturesRefundRequest: typeof payments.CapturesRefundRequest;
        RefundsGetRequest: typeof payments.RefundsGetRequest;
    }

    namespace core {
        /**
         * An OAuth2 access token
         */
        class AccessToken {
            /**
             * @param {object} options - The access token object as it was granted by the token endpoint
             * @param {string} options.access_token - The access token
             * @param {string} options.token_type - The token type
             * @param {number} options.expires_in - The duration of the token in milliseconds
             * @param {string} options.refresh_token - The refresh token if any to refresh the current token
             */
            constructor(options: {
                access_token: string;
                token_type: string;
                expires_in: number;
                refresh_token: string;
            });
            _accessToken: string;
            _tokenType: string;
            _expiresIn: number;
            _dateCreated: number;
            /**
             * Get the expiration status of the token
             * @return {boolean} - True if the token is expired otherwise false
             */
            isExpired(): boolean;
            /**
             * Get the value of an Authorization header with the current access token
             * @return {string} - The Authorization header value
             */
            authorizationString(): string;
        }

        /**
         * An OAuth2 client credentials grant access token request
         */
        class AccessTokenRequest {
            /**
             * @param {PayPalEnvironment} environment - The environment for this request (sandbox or live)
             * @param {string} [refreshToken] - An optional refresh token to use refreshing instead of granting
             */
            constructor(environment: PayPalEnvironment, refreshToken?: string);
            path: string;
            body: {
                grant_type: string;
            };
            verb: string;
            headers: {
                'Content-Type': string;
                Authorization: any;
            };
        }

        /**
         * An OAuth2 refresh token request, granted from user consent.
         */
        class RefreshTokenRequest {
            /**
             * @param {PayPalEnvironment} environment - The environment for this request (sandbox or live)
             * @param {string} code - The authorization code provided at the end of the user consent OAuth flow.
             */
            constructor(environment: PayPalEnvironment, code: string);
            headers: {
                'Content-Type': string;
                Authorization: any;
            };
            path: string;
            body: {
                grant_type: string;
                code: string;
            };
            verb: string;
        }

        class TokenCache {
            constructor();
            static cacheForEnvironment(
                environment: PayPalEnvironment,
                refreshToken: string,
            ): any;
            _token: any;
            _locked: boolean;
            _requests: any[];
            _emitter: EventEmitter;
            /**
             * Gets the current token for the client
             * @return {AccessToken|null} - The current token or null if there is none
             */
            getToken(): any | null;
            /**
             * Sets the token for the current client also setting its status to absent or valid if the token exist or not
             * @param {AccessToken|null} token - The current token for the client or null to remove it
             * @return {void}
             */
            setToken(token: any | null): void;
            lock(): void;
            unlock(): void;
            isLocked(): boolean;
            isValid(): boolean;
            isPresent(): boolean;
            /**
             * Add a request to the queue and wait for the notify method to signal error or completion
             * @param {Object} request - The request to be queued
             * @return {Promise} - A promise that will resolve or rejects when the notify method is called
             * */
            wait(request: any): Promise<any>;
            /**
             * Flush the request queue resolving every call in the order they were added or rejects all calls if an error is provided
             * @param {Array} [err] - An optional error that rejects all requests instead of resolving them
             * @return {void} - void
             */
            notify(err?: any[]): void;
        }

        /**
         * Base class for PayPal Environments
         */
        class PayPalEnvironment {
            /**
             * @param {string} clientId - The client id for this environment
             * @param {string} clientSecret - The client secret
             * @param {string} baseUrl - The base url to execute requests
             * @param {string} webUrl - The web url to authorize user's consent
             */
            constructor(
                clientId: string,
                clientSecret: string,
                baseUrl: string,
                webUrl: string,
            );
            clientId: string;
            clientSecret: string;
            webUrl: string;
            /**
             * Authorization header string for basic authentication with the current client id and secret
             * @return {string} - The authorization header value
             */
            authorizationString(): string;
        }

        /**
         * Live Environment
         */
        class LiveEnvironment extends PayPalEnvironment {
            constructor(clientId: string, clientSecret: string);
        }

        /**
         * Sandbox Environment
         */
        class SandboxEnvironment extends PayPalEnvironment {
            constructor(clientId: string, clientSecret: string);
        }

        class PayPalHttpClient {
            /**
             * @param {PayPalEnvironment} environment - The environment for this client
             * @param {string} refreshToken - The refreshToken to be used to generate the access Token.
             */
            constructor(environment: PayPalEnvironment, refreshToken?: string);
            _cache: any;
            refreshToken: string;
            /**
             * Returns the user agent for this client implementation
             * @return {string} - The user agent string
             */
            getUserAgent(): string;
            execute<T = any>(
                request: BaseRequest,
            ): Promise<{ statusCode: number; result: T }>;
            _retryRequest<T = any>(
                request: BaseRequest,
            ): Promise<{ statusCode: number; result: T }>;
            fetchAccessToken(): any;
            /**
             * Sets the Authorization header for this request based on the client token
             * @param {Object} request - The request to modify
             * @private
             * @return {void}
             */
            private _setAuthHeader;
        }
    }

    namespace orders {
        /**
         * Authorizes payment for an order. The response shows authorization details.
         */
        class OrdersAuthorizeRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;

            constructor(orderId: string);
            payPalClientMetadataId(
                payPalClientMetadataId: string,
            ): OrdersAuthorizeRequest;
            payPalRequestId(payPalRequestId: string): OrdersAuthorizeRequest;
            prefer(prefer: string): OrdersAuthorizeRequest;
            requestBody(orderActionRequest: any): OrdersAuthorizeRequest;
        }

        /**
         * Captures a payment for an order.
         */
        class OrdersCaptureRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;

            constructor(orderId: string);
            payPalClientMetadataId(payPalClientMetadataId: string): OrdersCaptureRequest;
            payPalRequestId(payPalRequestId: string): OrdersCaptureRequest;
            prefer(prefer: string): OrdersCaptureRequest;
            requestBody(orderActionRequest: any): OrdersCaptureRequest;
        }

        /**
         * Creates an order.
         */
        class OrdersCreateRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;

            payPalPartnerAttributionId(
                payPalPartnerAttributionId: any,
            ): OrdersCreateRequest;
            prefer(prefer: any): OrdersCreateRequest;
            requestBody(order: any): OrdersCreateRequest;
        }

        /**
         * Shows details for an order, by ID.
         */
        class OrdersGetRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(orderId: string);
        }

        /**
         * Updates an order. You can update an order with `CREATED` or `APPROVED` status. You cannot update an order with `COMPLETED` status. The following attributes and objects are patchable:<ul><li><code>intent</code>. Supported operation is <code>replace</code>.</li><li><code>purchase_units</code>. Supported operations are <code>add</code> and <code>replace</code>.</li><li><code>purchase_units[].custom_id</code>. Supported operations are <code>add</code> and <code>replace</code> and <code>remove</code>.</li><li><code>purchase_units[].description</code>. Supported operations are <code>add</code> and <code>replace</code> and <code>remove</code>.</li><li><code>purchase_units[].payee.email</code>. Supported operations are <code>add</code> and <code>replace</code>.</li><li><code>purchase_units[].shipping_address</code>. Supported operations are <code>add</code> and <code>replace</code> and <code>remove</code>.</li><li><code>purchase_units[].soft_descriptor</code>. Supported operations are <code>add</code> and <code>replace</code> and <code>remove</code>.</li><li><code>purchase_units[].amount</code>. Supported operation is <code>replace</code>.</li></ul>
         */
        class OrdersPatchRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(orderId: string);
            requestBody(patchRequest: any): OrdersPatchRequest;
        }

        /**
         * Validates a payment method and checks it for contingencies.
         */
        class OrdersValidateRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(orderId: string);
            payPalClientMetadataId(payPalClientMetadataId: string): OrdersValidateRequest;
            requestBody(orderActionRequest: any): OrdersValidateRequest;
        }
    }

    namespace payments {
        /**
         * Captures an authorized payment, by ID.
         */
        class AuthorizationsCaptureRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(authorizationId: string);
            payPalRequestId(payPalRequestId: string): AuthorizationsCaptureRequest;
            prefer(prefer: string): AuthorizationsCaptureRequest;
            requestBody(capture: any): AuthorizationsCaptureRequest;
        }

        /**
         * Shows details for an authorized payment, by ID.
         */
        class AuthorizationsGetRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(authorizationId: string);
        }

        /**
         * Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize an authorized payment after its initial three-day honor period expires.<br/><br/>After the three-day honor period expires, you can reauthorize an authorized payment only once from days four to 29. If 30 days have passed since the date of the authorized payment, you must create an authorized payment instead.<br/><br/>A reauthorized payment itself has a new three-day honor period. You can reauthorize an authorized payment once for up to 115% of the original authorized amount and not to exceed an increase of $75 USD.<br/><br/>Supports the <code>amount</code> request parameter only.
         */
        class AuthorizationsReauthorizeRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(authorizationId: string);
            payPalRequestId(payPalRequestId: string): AuthorizationsReauthorizeRequest;
            prefer(prefer: string): AuthorizationsReauthorizeRequest;
            requestBody(reauthorizeRequest: any): AuthorizationsReauthorizeRequest;
        }

        /**
         * Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
         */
        class AuthorizationsVoidRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(authorizationId: string);
        }

        /**
         * Shows details for a captured payment, by ID.
         */
        class CapturesGetRequest {
            public path: string;
            public verb: string;
            public body: any;
            public headers: any;
            constructor(captureId: string);
        }

        /**
         * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.
         */
        class CapturesRefundRequest {
            constructor(captureId: string);
            path: string;
            verb: string;
            body: any;
            headers: {
                'Content-Type': string;
            };
            payPalRequestId(payPalRequestId: string): CapturesRefundRequest;
            prefer(prefer: string): CapturesRefundRequest;
            requestBody(refundRequest: any): CapturesRefundRequest;
        }

        /**
         * Shows details for a refund, by ID.
         */
        class RefundsGetRequest {
            constructor(refundId: string);
            path: string;
            verb: string;
            body: any;
            headers: {
                'Content-Type': string;
            };
        }
    }
}

declare module '@paypal/checkout-server-sdk' {
    export = paypalCheckout;
}
