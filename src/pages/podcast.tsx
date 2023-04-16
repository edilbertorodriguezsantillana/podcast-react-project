import React from 'react';
import { useParams } from 'react-router-dom';

const Podcast = () => {
	const { podcastId } = useParams() as { podcastId: string };

	return <div>{podcastId}</div>;
};

export default Podcast;
