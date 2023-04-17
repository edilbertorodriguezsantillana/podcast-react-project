import { usePodcasts } from '@/features/podcasts';
import { type Podcast } from '@/types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
			<div>{podcasts?.length}</div>
			<input value={search} onChange={e => setSearch(e.target.value)} />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gridGap: '10px',
				}}
			>
				{podcasts?.map(({ id, title, author, image }) => (
					<Link to={`/podcast/${id}`} key={id}>
						<img src={image} />
						<div>{title}</div>
						<div>{author}</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
