import React from 'react';
import { render, screen, userEvent } from '@/test/test-utils';
import Home from '../home';
import { podcastTitleSecondItemTest, podcastTitleTest } from '@/test/config';

test('should show the two podcasts fetched from API', async () => {
	render(<Home />);

	const firstItemTitle = await screen.findByText(podcastTitleTest, {
		exact: false,
	});
	expect(firstItemTitle).toBeInTheDocument();

	const secondItemTitle = screen.getByText(podcastTitleSecondItemTest, {
		exact: false,
	});
	expect(secondItemTitle).toBeInTheDocument();
});

test('should show the filtered podcast when searching with input search', async () => {
	render(<Home />);

	const firstItemTitle = await screen.findByText(podcastTitleTest, {
		exact: false,
	});
	expect(firstItemTitle).toBeInTheDocument();

	const searchInput = screen.getByRole('textbox');
	await userEvent.type(searchInput, podcastTitleTest);

	const firstItemTitleAfterSearch = screen.getByText(podcastTitleTest, {
		exact: false,
	});
	expect(firstItemTitleAfterSearch).toBeInTheDocument();

	const secondItemTitleAfterSearch = screen.queryByText(
		podcastTitleSecondItemTest,
		{
			exact: false,
		}
	);
	expect(secondItemTitleAfterSearch).not.toBeInTheDocument();
});
