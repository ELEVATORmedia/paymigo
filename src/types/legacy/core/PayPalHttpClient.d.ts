/**
 * PayPal Http client
 */
declare class PayPalHttpClient {
    /**
     * @param {PayPalEnvironment} environment - The environment for this client
     * @param {string} refreshToken - The refreshToken to be used to generate the access Token.
     */
    constructor(environment: any, refreshToken?: string);
    _cache: any;
    refreshToken: string;
    /**
     * Returns the user agent for this client implementation
     * @return {string} - The user agent string
     */
    getUserAgent(): string;
    execute(request: any): any;
    _retryRequest(request: any): any;
    fetchAccessToken(): any;
    /**
     * Sets the Authorization header for this request based on the client token
     * @param {Object} request - The request to modify
     * @private
     * @return {void}
     */
    private _setAuthHeader;
}
