export class BaseApiClient {
  constructor(private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com') {}

  protected get(path: string, params = {}) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}${path}`,
      qs: params,
    });
  }

  protected post(path: string, body: unknown) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}${path}`,
      body,
    });
  }

  protected put(path: string, body: unknown) {
    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}${path}`,
      body,
    });
  }

  protected patch(path: string, body: unknown) {
    return cy.request({
      method: 'PATCH',
      url: `${this.baseUrl}${path}`,
      body,
    });
  }

  protected delete(path: string) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}${path}`,
    });
  }

  protected handleError(path: string) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}${path}`,
      failOnStatusCode: false,
    });
  }
}