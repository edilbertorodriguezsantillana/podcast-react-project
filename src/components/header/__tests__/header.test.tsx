import React from 'react';
import { render, screen } from '@/test/test-utils';
import { Header } from '../header';

test('should show Podcaster title', async () => {
	render(<Header />);

	const title = screen.getByText('Podcaster');
	expect(title).toBeInTheDocument();
});
