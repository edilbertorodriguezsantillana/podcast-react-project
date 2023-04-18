import '@testing-library/jest-dom';

import { server } from './test/mocks/server';
require('jest-fetch-mock').enableMocks();

beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
