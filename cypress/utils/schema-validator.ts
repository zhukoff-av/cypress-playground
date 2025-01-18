import Ajv from 'ajv';
import addFormats from 'ajv-formats';

export class SchemaValidator {
  private static ajv = addFormats(new Ajv({ allErrors: true }));

  static validate(schema: object, data: unknown): void {
    const validate = this.ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
      const errors = validate.errors?.map(error => ({
        path: error.instancePath,
        message: error.message,
        params: error.params,
      }));

      throw new Error(`Schema validation failed:\n${JSON.stringify(errors, null, 2)}`);
    }
  }
}
