export enum HttpStatus {
    // 2xx Success
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,

    // 3xx Redirection
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,

    // 4xx Client Errors
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,

    // 5xx Server Errors
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
}

type HttpStatusMessageType = {
    [key in HttpStatus]: string;
};

export const HttpStatusMessage: HttpStatusMessageType = {
    [HttpStatus.OK]: 'Request successful',
    [HttpStatus.CREATED]: 'Resource created successfully',
    [HttpStatus.ACCEPTED]: 'Request accepted',
    [HttpStatus.NO_CONTENT]: 'No content',

    [HttpStatus.MOVED_PERMANENTLY]: 'Moved permanently',
    [HttpStatus.FOUND]: 'Found',
    [HttpStatus.NOT_MODIFIED]: 'Not modified',
    [HttpStatus.TEMPORARY_REDIRECT]: 'Temporary redirect',
    [HttpStatus.PERMANENT_REDIRECT]: 'Permanent redirect',

    [HttpStatus.BAD_REQUEST]: 'Bad request',
    [HttpStatus.UNAUTHORIZED]: 'Unauthorized',
    [HttpStatus.FORBIDDEN]: 'Forbidden',
    [HttpStatus.NOT_FOUND]: 'Resource not found',
    [HttpStatus.METHOD_NOT_ALLOWED]: 'Method not allowed',
    [HttpStatus.CONFLICT]: 'Conflict',
    [HttpStatus.UNPROCESSABLE_ENTITY]: 'Unprocessable entity',
    [HttpStatus.TOO_MANY_REQUESTS]: 'Too many requests',

    [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal server error',
    [HttpStatus.NOT_IMPLEMENTED]: 'Not implemented',
    [HttpStatus.BAD_GATEWAY]: 'Bad gateway',
    [HttpStatus.SERVICE_UNAVAILABLE]: 'Service unavailable',
    [HttpStatus.GATEWAY_TIMEOUT]: 'Gateway timeout'
};