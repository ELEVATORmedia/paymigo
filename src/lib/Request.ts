import { RequestOptions } from 'types/paypal';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

export default class Request {
    public path: string;
    public verb: string;
    public body: any;
    public headers: any;

    constructor({ path, verb = 'GET', body = null, headers = {} }: RequestOptions) {
        this.path = path;
        this.verb = verb;
        this.body = body;
        this.headers = {
            ...defaultHeaders,
            ...headers,
        };
    }
}
