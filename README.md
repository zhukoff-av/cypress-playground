# Cypress API Testing Framework

A modern TypeScript-based framework for API testing using Cypress, featuring strong typing, schema validation, and soft assertions.

## Features

- ✅ TypeScript support
- 🔍 Schema validation using AJV
- 🧪 Soft assertions for detailed test reports
- 🏭 Factory pattern for test data generation
- 🚦 HTTP status code constants
- 📝 ESLint & Prettier configuration
- 📊 Multiple report formats

## Project Structure

```
cypress/
├── api/                  # API clients
│   ├── base-api.client.ts
│   └── posts-api.client.ts
├── constants/           # Constants and enums
│   └── http.constants.ts
├── factories/          # Test data factories
│   └── post.factory.ts
├── schemas/           # JSON schemas for validation
│   └── post.schema.ts
├── support/          # Cypress support files
│   ├── commands.ts
│   ├── e2e.ts
│   └── test-config.ts
├── test-data/       # Test data and constants
│   └── constants/
│       └── posts.constants.ts
├── types/          # TypeScript type definitions
│   └── api/
│       └── post.types.ts
├── utils/         # Utility functions
│   ├── schema-validator.ts
│   └── soft-assert.ts
└── e2e/          # Test files
    └── api/
        └── posts.cy.ts
```

## Prerequisites

- Node.js (v14 or higher)
- pnpm

## Installation

```bash
# Clone the repository
git clone [repository-url]
cd [repository-name]

# Install dependencies
pnpm install
```

## Available Scripts

```bash
# Open Cypress Test Runner
pnpm open

# Run tests in headless mode
pnpm run

# Run tests with reporting
pnpm test:report

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Type check
pnpm type-check

# Run all validations
pnpm validate
```

## Test Writing Guide

### Creating a New Test

1. Define interfaces in `types/` directory:
```typescript
export interface MyEntity {
  id: number;
  name: string;
}
```

2. Create a schema in `schemas/` directory:
```typescript
export const myEntitySchema = {
  type: 'object',
  required: ['id', 'name'],
  properties: {
    id: { type: 'number' },
    name: { type: 'string' }
  }
};
```

3. Create a factory in `factories/` directory:
```typescript
export class MyEntityFactory {
  static create(): MyEntity {
    return {
      id: faker.number.int(),
      name: faker.person.fullName()
    };
  }
}
```

4. Write your test:
```typescript
describe('My Entity API', () => {
  const config = TestConfig.getInstance();
  const { softAssert, myEntityClient } = config;

  it('should create new entity', () => {
    const newEntity = MyEntityFactory.create();
    
    myEntityClient.createEntity(newEntity).then((response) => {
      softAssert.assert(response.status === HttpStatus.CREATED, 
        EM.STATUS_CODE(HttpStatus.CREATED));
      softAssert.assertSchema(myEntitySchema, response.body, 
        'Entity schema validation');
    });
  });
});
```

### Best Practices

1. Use soft assertions for multiple validations:
```typescript
softAssert.assert(condition, message);
softAssert.assertEquals(actual, expected, message);
```

2. Use HTTP status constants:
```typescript
HttpStatus.OK
HttpStatus.CREATED
HttpStatus.NOT_FOUND
```

3. Use schema validation:
```typescript
softAssert.assertSchema(schema, data, message);
```

4. Use factories for test data:
```typescript
const testData = MyFactory.create({
  override: 'properties'
});
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run all validations: `pnpm validate`
4. Submit a pull request

## Reporting

Test reports are generated in multiple formats:
- HTML reports: `cypress/reports/mocha`
- JUnit XML: `cypress/reports/junit`
- JSON reports: `cypress/reports/mocha/output.json`

To generate reports:
```bash
pnpm test:report    # Run tests with reporting
pnpm merge:reports  # Merge report files
pnpm generate:report # Generate HTML report
```
