import { usePodcast } from '@/features/podcasts';
import React from 'react';
import { useParams } from 'react-router-dom';

const Episode = () => {
	const { podcastId, episodeId } = useParams() as {
		podcastId: string;
		episodeId: string;
	};
	const { data: podcast } = usePodcast({ podcastId });

	const episodeData = podcast?.episodes.find(
		({ id }) => id === Number(episodeId)
	);

	return (
		<div>
			<div>{episodeData?.title}</div>
			<div>{episodeData?.description}</div>
			<div>{episodeData?.episodeUrl}</div>
		</div>
	);
};

export default Episode;
