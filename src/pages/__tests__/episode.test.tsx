import { render, screen } from '@/test/test-utils';
import React from 'react';
import Episode from '../episode';
import { episodeTitleTest, podcast1535809341ApiResponse } from '@/test/config';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest
		.fn()
		.mockReturnValue({ podcastId: '1535809341', episodeId: '1000605224134' }),
}));

jest.mock('@/lib/api-client-allow-origins', () => ({
	apiClientAllowOrigins: async () => podcast1535809341ApiResponse,
}));

test('should show the title and description of the episode with id 1000605224134 of the podcast with id 1535809341', async () => {
	render(<Episode />);

	const episodeTitle = await screen.findByText(episodeTitleTest);
	expect(episodeTitle).toBeInTheDocument();

	const episodeDescription = screen.getByText(/Hosted by Flea, founding/i);
	expect(episodeDescription).toBeInTheDocument();
});
