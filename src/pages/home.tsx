import { PodcastItem, usePodcasts } from '@/features/podcasts';
import { type Podcast } from '@/types';
import React, { useEffect, useState } from 'react';
import './styles/home.css';

const Home = () => {
	const { data } = usePodcasts();
	const [search, setSearch] = useState('');
	const [podcasts, setPodcasts] = useState<Podcast[] | undefined>();

	useEffect(() => {
		if (search) {
			const searchParsed = search.toUpperCase();
			const updatedFilteredPodcasts = data?.filter(
				({ title, author }) =>
					title.toUpperCase().includes(searchParsed) ||
					author.toUpperCase().includes(searchParsed)
			);

			return setPodcasts(updatedFilteredPodcasts);
		}
		setPodcasts(data);
	}, [search, data]);

	return (
		<div>
			<div className='search-section'>
				<div className='search-section__podcasts-amount'>
					{podcasts?.length}
				</div>
				<input
					className='search-section__input'
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder='Filter podcasts...'
				/>
			</div>
			<div className='podcasts-container'>
				{podcasts?.map(podcast => (
					<PodcastItem key={podcast.id} {...podcast} />
				))}
			</div>
		</div>
	);
};

export default Home;
