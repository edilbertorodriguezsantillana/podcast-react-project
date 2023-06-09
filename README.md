# Get Started

Prerequisites:

- Node.js 19+
- npm 9+

To set up the app execute the following commands:

```bash
git clone https://github.com/edilbertorodriguezsantillana/podcast-react-project.git
cd podcast-react-project
npm i
```

# Development Mode Running

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

# App Building

##### `npm run dev`

It builds the app for development test to the `dist` folder.\
This build creation mode doesn't minimize the assets.

##### `npm run build`

It builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The assets are bundled and minified.

# Tests

## Types of tests:

### Unit Tests

Unit Testing is used for testing elements in isolation. It is helpful to test edge cases of components when only using integration tests could be more difficult to test them.

[Unit Test Example Code](src/providers/__tests__/app-provider.test.tsx)

### Integration Tests

Integration Testing is useful for testing multiple parts of the application at once. Most tests should be of this type because you can ensure that the different components of your app are working well together and that the test results are expected.

[Integration Test Example Code](src/pages/__tests__/home.test.tsx)

We can use these commands to execute both unit tests and integration tests:

##### `npm run test`

It runs all tests (`*.test.tsx` files) set configured in our project.

##### `npm run coverage`

It runs a code coverage analysis of our code, generating a tests coverage report in the `coverage` folder on the root project.

### E2E Tests

End-To-End Testing is a type of Testing where we test the application as a complete entity. We do these tests along with the backend, and we try the entire flow of a user would execute it. Then, we check with E2E tests that the whole application and its parts are working as expected.

[E2E Test Example Code](cypress/e2e/app-flow.cy.ts)

We can use these commands to execute E2E tests:

##### `npm run cypress`

It runs the app on the browser, and we can see the full test flow we are testing ([cypress/e2e/app-flow.cy.ts](cypress/e2e/app-flow.cy.ts) file).

##### `npm run cypress:headless`

It runs the E2E tests without needing the browser. It starts a headless browser and runs the application. We need our app is executing on port 8080 (`npm start`) before executing this command for testing correctly.

## Test notes

We have done test examples of unit, integration and e2e testing, achieving more than 80% test coverage code of the project. We could add some more to cover all pieces of the project, but due to the deadline of the project delivery and lack of time to do it, we have done these tests examples.

We have used a specific Test tooling set composed of the following libraries for making the tests of our application: [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/), [MSW](https://mswjs.io) and [Cypress](https://www.cypress.io/).

# Project Configuration

## ESLint

We use ESLint for statically analyzing our code and fix problems before deploying on production.

##### `npm run lint`

It finds and fixes problems in code on .js, .jsx, .ts, and .tsx files.

## Prettier

We use Prettier to format our code and keep the same styling rules throughout for code consistency and maintainability of our project.

##### `npm run format`

It applies the rules configured on the .prettierrc file on the project files.

