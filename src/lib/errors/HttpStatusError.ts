export default class HttpStatusError extends Error {
    constructor(received: number, expected: number | string) {
        super(
            `Invalid HTTP status code detected (expected: ${expected}, received: ${received})`,
        );
    }
}
