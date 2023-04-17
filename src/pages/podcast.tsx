import { usePodcast } from '@/features/podcasts';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Podcast = () => {
	const { podcastId } = useParams() as { podcastId: string };
	const { data: podcast } = usePodcast({ podcastId });

	return (
		<div>
			<div>
				<div>Episodes: {podcast?.episodes?.length}</div>
				{podcast?.episodes.map(episode => (
					<Link to={`episode/${episode.id}`} key={episode.id}>
						<div>{episode.title}</div>
						<div>{episode.date}</div>
						<div>{episode.duration}</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Podcast;
