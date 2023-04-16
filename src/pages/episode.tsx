import React from 'react';
import { useParams } from 'react-router-dom';

const Episode = () => {
	const { podcastId, episodeId } = useParams() as {
		podcastId: string;
		episodeId: string;
	};

	return (
		<div>
			<div>Podcast: {podcastId}</div>
			<div>Episode: {episodeId}</div>
		</div>
	);
};

export default Episode;
