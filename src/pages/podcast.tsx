import React from 'react';
import { usePodcast } from '@/features/podcasts';
import { useParams } from 'react-router-dom';
import './styles/podcast.css';
import { Episodes } from '@/features/episodes';

const Podcast = () => {
	const { podcastId } = useParams() as { podcastId: string };
	const { data: podcast } = usePodcast({ podcastId });

	if (!podcast?.episodes) return null;

	return (
		<>
			<div className='episodes-amount-title'>
				Episodes: {podcast?.episodes?.length}
			</div>
			<div className='episodes-list-container'>
				<Episodes episodes={podcast.episodes} />
			</div>
		</>
	);
};

export default Podcast;
