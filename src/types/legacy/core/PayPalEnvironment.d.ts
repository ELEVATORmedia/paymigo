/**
 * Base class for PayPal Environments
 */
declare class PayPalEnvironment {
    /**
     * @param {string} clientId - The client id for this environment
     * @param {string} clientSecret - The client secret
     * @param {string} baseUrl - The base url to execute requests
     * @param {string} webUrl - The web url to authorize user's consent
     */
    constructor(clientId: string, clientSecret: string, baseUrl: string, webUrl: string);
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
declare class LiveEnvironment extends PayPalEnvironment {
    constructor(clientId: string, clientSecret: string);
}
/**
 * Sandbox Environment
 */
declare class SandboxEnvironment extends PayPalEnvironment {
    constructor(clientId: string, clientSecret: string);
}
