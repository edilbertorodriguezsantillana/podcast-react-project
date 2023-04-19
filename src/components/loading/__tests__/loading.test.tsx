import React from 'react';
import { render, screen } from '@/test/test-utils';
import { Loading } from '../loading';

test('should show Loading Spinner if there are active data fetching API calls', async () => {
	jest
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		.spyOn(require('@tanstack/react-query'), 'useIsFetching')
		.mockImplementationOnce(() => 1);
	render(<Loading />);

	const loadingSpinner = screen.getByLabelText(/loading/i);
	expect(loadingSpinner).toBeInTheDocument();
});

test('should not show Loading Spinner if there are not active data fetching API calls', async () => {
	jest
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		.spyOn(require('@tanstack/react-query'), 'useIsFetching')
		.mockImplementationOnce(() => 0);
	render(<Loading />);

	const loadingSpinner = screen.queryByLabelText(/loading/i);
	expect(loadingSpinner).not.toBeInTheDocument();
});
