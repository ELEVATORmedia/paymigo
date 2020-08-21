import { RequestVerb, RequestOptions } from 'types/paypal';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

export default class PayPalRequest {
    public path: string;
    public verb: RequestVerb;
    public body: any;
    public headers: any;

    constructor({
        path,
        verb = 'GET',
        body = null,
        headers = defaultHeaders,
    }: RequestOptions) {
        this.path = path;
        this.verb = verb;
        this.body = body;
        this.headers = headers;
    }
}
