export type HttpMethod = 'GET' | 'POST';

export type RequestOptions = {
    path: string;
    verb?: HttpMethod;
    body?: any;
    headers?: any;
};
