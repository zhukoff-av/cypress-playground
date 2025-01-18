import { HttpStatus, HttpStatusMessage } from './http.constants';

export const POSTS_TEST_DATA = {
    VALID_USER_ID: 1,
    INVALID_POST_ID: 999999,
    VALID_POST_ID: 1,
    EXPECTED_MIN_POSTS: 1,
} as const;

export const ERROR_MESSAGES = {
    STATUS_CODE: (expected: HttpStatus) =>
        `Status code should be ${expected} (${HttpStatusMessage[expected]})`,
    SCHEMA_VALIDATION: (type: string) => `${type} schema validation failed`,
    ARRAY_TYPE: 'Response should be an array',
    EMPTY_ARRAY: 'Response should not be empty',
    POST_ID_MATCH: 'Post ID should match requested ID',
    USER_ID_MATCH: (postId: number, userId: number) =>
        `Post ${postId} should belong to user ${userId}`,
    PROPERTY_MATCH: (property: string) => `Response should contain ${property}`,
    EMPTY_RESPONSE: 'Response body should be empty',
} as const;