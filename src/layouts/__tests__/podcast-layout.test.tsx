import { render, screen } from '@/test/test-utils';
import React from 'react';
import { PodcastLayout } from '../podcast-layout';
import { podcastAuthorTest, podcastTitleTest } from '@/test/config';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({ podcastId: '1535809341' }),
}));

test('should show the title, authors and description of the podcast with id 1535809341', async () => {
	render(<PodcastLayout>Test</PodcastLayout>);

	const children = screen.getByText('Test');
	expect(children).toBeInTheDocument();

	const podcastTitle = await screen.findByText(podcastTitleTest);
	expect(podcastTitle).toBeInTheDocument();

	const podcastAuthor = screen.getByText(podcastAuthorTest);
	expect(podcastAuthor).toBeInTheDocument();

	const podcastDescription = screen.getByText(
		/Tune into Joe Budden and his friends. Follow/i
	);
	expect(podcastDescription).toBeInTheDocument();
});
