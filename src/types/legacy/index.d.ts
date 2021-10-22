declare type EventEmitter = import('events').EventEmitter;
declare type BaseRequest = import('../../lib/Request').default;

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
        OrdersAuthorizeRequest: typeof OrdersAuthorizeRequest;
        OrdersCaptureRequest: typeof OrdersCaptureRequest;
        OrdersCreateRequest: typeof OrdersCreateRequest;
        OrdersGetRequest: typeof OrdersGetRequest;
        OrdersPatchRequest: typeof OrdersPatchRequest;
        OrdersValidateRequest: typeof OrdersValidateRequest;
    }

    interface PaymentsResource {
        AuthorizationsCaptureRequest: typeof AuthorizationsCaptureRequest;
        AuthorizationsGetRequest: typeof AuthorizationsGetRequest;
        AuthorizationsReauthorizeRequest: typeof AuthorizationsReauthorizeRequest;
        AuthorizationsVoidRequest: typeof AuthorizationsVoidRequest;
        CapturesGetRequest: typeof CapturesGetRequest;
        CapturesRefundRequest: typeof CapturesRefundRequest;
        RefundsGetRequest: typeof RefundsGetRequest;
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
        type OrdersAuthorizeRequest = typeof OrdersAuthorizeRequest;
        type OrdersCaptureRequest = typeof OrdersCaptureRequest;
        type OrdersCreateRequest = typeof OrdersCreateRequest;
        type OrdersGetRequest = typeof OrdersGetRequest;
        type OrdersPatchRequest = typeof OrdersPatchRequest;
        type OrdersValidateRequest = typeof OrdersValidateRequest;
    }

    namespace payments {
        type AuthorizationsCaptureRequest = typeof AuthorizationsCaptureRequest;
        type AuthorizationsGetRequest = typeof AuthorizationsGetRequest;
        type AuthorizationsReauthorizeRequest = typeof AuthorizationsReauthorizeRequest;
        type AuthorizationsVoidRequest = typeof AuthorizationsVoidRequest;
        type CapturesGetRequest = typeof CapturesGetRequest;
        type CapturesRefundRequest = typeof CapturesRefundRequest;
        type RefundsGetRequest = typeof RefundsGetRequest;
    }
}

declare module '@paypal/checkout-server-sdk' {
    export = paypalCheckout;
}
