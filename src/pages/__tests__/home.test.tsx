import { render, screen, userEvent } from '@/test/test-utils';
import Home from '../home';
import React from 'react';
import { podcastTitleSecondItemTest, podcastTitleTest } from '@/test/config';

test('should show the two podcasts fetched from API', async () => {
	render(<Home />);

	const firstItemTitle = await screen.findByText(podcastTitleTest);
	expect(firstItemTitle).toBeInTheDocument();

	const secondItemTitle = screen.getByText(podcastTitleSecondItemTest);
	expect(secondItemTitle).toBeInTheDocument();
});

test('should show the filtered podcast when searching with input search', async () => {
	render(<Home />);

	const firstItemTitle = await screen.findByText(podcastTitleTest);
	expect(firstItemTitle).toBeInTheDocument();

	const searchInput = screen.getByRole('textbox');
	await userEvent.type(searchInput, podcastTitleTest);

	const firstItemTitleAfterSearch = screen.getByText(podcastTitleTest);
	expect(firstItemTitleAfterSearch).toBeInTheDocument();

	const secondItemTitleAfterSearch = screen.queryByText(
		podcastTitleSecondItemTest
	);
	expect(secondItemTitleAfterSearch).not.toBeInTheDocument();
});
