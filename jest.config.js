/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest/presets/js-with-babel',
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'\\.(css|less)$': '<rootDir>/src/test/mocks/styleMock.js',
	},
	transformIgnorePatterns: ['./node_modules/(?!@node-fetch)/'],
	setupFilesAfterEnv: ['./src/jest.setup.js'],
};
