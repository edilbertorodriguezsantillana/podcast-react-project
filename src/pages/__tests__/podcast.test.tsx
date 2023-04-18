import React from 'react';
import { render, screen } from '@/test/test-utils';
import { episodeTitleTest, podcast1535809341ApiResponse } from '@/test/config';
import Podcast from '../podcast';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({ podcastId: '1535809341' }),
}));

jest.mock('@/lib/api-client-allow-origins', () => ({
	apiClientAllowOrigins: async () => podcast1535809341ApiResponse,
}));

test('should show episodes of the podcast with id 1535809341 fetched with apiClientAllowOrigins', async () => {
	render(<Podcast />);

	const episodeTitle = await screen.findByText(episodeTitleTest);
	expect(episodeTitle).toBeInTheDocument();

	const episodeDate = screen.getByText('13/4/2023');
	expect(episodeDate).toBeInTheDocument();

	const episodesAmount = screen.getByText('Episodes: 5');
	expect(episodesAmount).toBeInTheDocument();
});
