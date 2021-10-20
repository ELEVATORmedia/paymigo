/**
 * An OAuth2 refresh token request, granted from user consent.
 */
declare class RefreshTokenRequest {
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
