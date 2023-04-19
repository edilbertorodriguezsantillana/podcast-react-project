import React from 'react';
import { screen } from '@/test/test-utils';
import { AppProvider } from '../app-provider';
import { render } from '@testing-library/react';

test('should show an Error if an error is produced throughout children components', async () => {
	const spy = jest.spyOn(console, 'error');
	spy.mockImplementation(() => {});

	const ThrowError = () => {
		throw new Error('Test');
	};

	render(
		<AppProvider>
			<ThrowError />
		</AppProvider>
	);

	const errorText = screen.getByText(/Something went wrong/i);
	expect(errorText).toBeInTheDocument();

	spy.mockRestore();
});
