import React from 'react';
import { render, screen } from '@/test/test-utils';
import { Error } from '../error';

test('should show Podcaster title', async () => {
	render(<Error />);

	const errorText = screen.getByText(/Something went wrong/i);
	expect(errorText).toBeInTheDocument();
});
