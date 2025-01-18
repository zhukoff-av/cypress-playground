type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestOptions extends Cypress.RequestOptions {
    method: RequestMethod;
    url: string;
    body?: unknown;
    qs?: Record<string, unknown>;
    failOnStatusCode?: boolean;
}

class RequestOptionsImpl implements RequestOptions {
    auth: object;
    body: unknown;
    encoding: Cypress.Encodings;
    failOnStatusCode: boolean;
    followRedirect: boolean;
    form: boolean;
    gzip: boolean;
    headers: object;
    log: boolean;
    method: RequestMethod;
    qs: object;
    retryOnNetworkFailure: boolean;
    retryOnStatusCodeFailure: boolean;
    timeout: number;
    url: string;
}