export const postSchema = {
  type: 'object',
  required: ['id', 'userId', 'title', 'body'],
  properties: {
    id: { type: 'number', minimum: 1 },
    userId: { type: 'number', minimum: 1 },
    title: { type: 'string', minLength: 1 },
    body: { type: 'string', minLength: 1 },
  },
  additionalProperties: false,
} as const;

export const postsArraySchema = {
  type: 'array',
  items: postSchema,
  minItems: 1,
} as const;

export const newPostResponseSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'number' },
    userId: { type: 'number' },
    title: { type: 'string' },
    body: { type: 'string' },
  },
} as const;
