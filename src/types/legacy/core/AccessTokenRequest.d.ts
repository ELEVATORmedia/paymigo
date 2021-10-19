/**
 * An OAuth2 client credentials grant access token request
 */
declare class AccessTokenRequest {
    /**
     * @param {PayPalEnvironment} environment - The environment for this request (sandbox or live)
     * @param {string} [refreshToken] - An optional refresh token to use refreshing instead of granting
     */
    constructor(environment: any, refreshToken?: string);
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
