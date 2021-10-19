/**
 * An OAuth2 access token
 */
declare class AccessToken {
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
