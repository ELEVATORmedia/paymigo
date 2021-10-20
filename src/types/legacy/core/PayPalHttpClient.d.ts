declare type BaseRequest = typeof import('legacy/Request');

/**
 * PayPal Http client
 */
declare class PayPalHttpClient {
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
    execute<T = any>(request: BaseRequest): Promise<{ statusCode: number; result: T }>;
    _retryRequest<T = any>(request: any): Promise<{ statusCode: number; result: T }>;
    fetchAccessToken(): any;
    /**
     * Sets the Authorization header for this request based on the client token
     * @param {Object} request - The request to modify
     * @private
     * @return {void}
     */
    private _setAuthHeader;
}
