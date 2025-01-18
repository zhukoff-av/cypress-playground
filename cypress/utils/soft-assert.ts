import { SchemaValidator } from './schema-validator';

export class SoftAssert {
  private errors: string[] = [];

  assert(condition: boolean, message: string): void {
    try {
      expect(condition).to.be.true;
    } catch (error) {
      this.errors.push(message);
    }
  }

  assertEquals(actual: unknown, expected: unknown, message: string): void {
    try {
      expect(actual).to.deep.equal(expected);
    } catch (error) {
      this.errors.push(
        `${message}: expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`,
      );
    }
  }

  assertMatch(actual: string, pattern: RegExp, message: string): void {
    try {
      expect(actual).to.match(pattern);
    } catch (error) {
      this.errors.push(`${message}: ${actual} does not match ${pattern}`);
    }
  }

  assertContains(actual: unknown[], expected: unknown, message: string): void {
    try {
      expect(actual).to.include(expected);
    } catch (error) {
      this.errors.push(
        `${message}: ${JSON.stringify(actual)} does not contain ${JSON.stringify(expected)}`,
      );
    }
  }

  assertSchema(schema: object, data: unknown, message: string): void {
    try {
      SchemaValidator.validate(schema, data);
    } catch (error) {
      this.errors.push(`${message}: ${(error as Error).message}`);
    }
  }

  assertAll(): void {
    const errorCount = this.errors.length;
    if (errorCount > 0) {
      const errorMessage = ['Following assertions failed:']
        .concat(this.errors.map((error, index) => `${index + 1}. ${error}`))
        .join('\n');

      this.errors = []; // Reset errors
      throw new Error(errorMessage);
    }
  }
}
