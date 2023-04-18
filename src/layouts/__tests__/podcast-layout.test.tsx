import React from 'react';
import { render, screen } from '@/test/test-utils';
import { PodcastLayout } from '../podcast-layout';
import { podcastAuthorTest, podcastTitleTest } from '@/test/config';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({ podcastId: '1535809341' }),
}));

test('should show the title, authors and description of the podcast with id 1535809341', async () => {
	render(<PodcastLayout>Test</PodcastLayout>);

	const children = await screen.findByText('Test');
	expect(children).toBeInTheDocument();

	const podcastTitle = await screen.findByText(podcastTitleTest, {
		exact: false,
	});
	expect(podcastTitle).toBeInTheDocument();

	const podcastAuthor = screen.getByText(podcastAuthorTest, {
		exact: false,
	});
	expect(podcastAuthor).toBeInTheDocument();

	const podcastDescription = screen.getByText(
		/Tune into Joe Budden and his friends. Follow/i
	);
	expect(podcastDescription).toBeInTheDocument();
});
