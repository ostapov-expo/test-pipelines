# Test Pipelines

Math utility functions with Jest tests and CI/CD pipeline.

## Features

- Math utility functions (factorial, fibonacci)
- Jest unit tests with 100% coverage
- GitHub Actions CI pipeline
- CodeRabbit code quality checks

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## CI/CD Pipeline

The GitHub Actions pipeline automatically:
1. Runs unit tests on push and pull requests
2. Generates test coverage reports
3. Uses CodeRabbit to review code quality on pull requests

### Setup Requirements

To enable CodeRabbit code quality checks, add your `OPENAI_API_KEY` to GitHub Secrets:
1. Go to your repository settings
2. Navigate to Secrets and variables → Actions
3. Add a new secret named `OPENAI_API_KEY` with your OpenAI API key

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions pipeline
├── main.js                 # Math utility functions
├── main.test.js            # Jest unit tests
├── package.json            # Project dependencies
└── README.md              # This file
```
