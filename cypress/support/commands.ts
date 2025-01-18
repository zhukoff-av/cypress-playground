/// <reference types="cypress" />
import { Post } from '../types/api/post.types';
import { postSchema, postsArraySchema } from '../schemas/post.schema';
import { SchemaValidator } from '../utils/schema-validator';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Validates a single post response against schema
       * @param response - The API response containing a post
       * @example
       * cy.validatePostSchema(response)
       */
      validatePostSchema(response: Cypress.Response<Post>): Chainable<void>;

      /**
       * Validates an array of posts against schema
       * @param response - The API response containing posts array
       * @example
       * cy.validatePostsArraySchema(response)
       */
      validatePostsArraySchema(response: Cypress.Response<Post[]>): Chainable<void>;

      /**
       * Validates response time is within acceptable limit
       * @param response - The API response
       * @param maxDuration - Maximum acceptable duration in ms
       * @example
       * cy.validateResponseTime(response, 1000)
       */
      validateResponseTime(
        response: Cypress.Response<unknown>,
        maxDuration: number,
      ): Chainable<void>;

      /**
       * Validates common response properties
       * @param response - The API response
       * @param expectedStatus - Expected HTTP status code
       * @example
       * cy.validateCommonResponseProps(response, 200)
       */
      validateCommonResponseProps(
        response: Cypress.Response<unknown>,
        expectedStatus: number,
      ): Chainable<void>;
    }
  }
}

Cypress.Commands.add('validatePostSchema', (response: Cypress.Response<Post>) => {
  expect(response.body).to.not.be.null;
  SchemaValidator.validate(postSchema, response.body);
});

Cypress.Commands.add('validatePostsArraySchema', (response: Cypress.Response<Post[]>) => {
  expect(response.body).to.not.be.null;
  expect(response.body).to.be.an('array');
  SchemaValidator.validate(postsArraySchema, response.body);
});

Cypress.Commands.add(
  'validateResponseTime',
  (response: Cypress.Response<unknown>, maxDuration: number) => {
    expect(response.duration).to.be.lessThan(
      maxDuration,
      `Response time ${response.duration}ms exceeded limit of ${maxDuration}ms`,
    );
  },
);

Cypress.Commands.add(
  'validateCommonResponseProps',
  (response: Cypress.Response<unknown>, expectedStatus: number) => {
    expect(response.status).to.equal(expectedStatus);
    expect(response.headers).to.exist;
    expect(response.duration).to.exist;
  },
);
