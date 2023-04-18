import React from 'react';
import { EpisodeCard } from '@/features/episodes';
import { usePodcast } from '@/features/podcasts';
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

	if (!episodeData) return null;

	return (
		<EpisodeCard
			title={episodeData?.title}
			description={episodeData?.description}
			episodeUrl={episodeData?.episodeUrl}
		/>
	);
};

export default Episode;
