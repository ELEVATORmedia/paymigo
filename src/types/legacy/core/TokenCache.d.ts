declare type EventEmitter = import('events').EventEmitter;
/**
 * Stores token, token status and a request queue for every client
 */
declare class TokenCache {
    constructor();
    static cacheForEnvironment(environment: any, refreshToken: any): any;
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
