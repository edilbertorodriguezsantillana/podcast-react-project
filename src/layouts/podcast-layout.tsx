import { usePodcasts } from '@/features/podcasts';
import React, { type ReactNode } from 'react';
import { useParams } from 'react-router-dom';

type PodcastLayoutProps = {
	children: ReactNode;
};

export const PodcastLayout = ({ children }: PodcastLayoutProps) => {
	const { data: podcasts } = usePodcasts();
	const { podcastId } = useParams() as { podcastId: string };

	const podcastData = podcasts?.find(({ id }) => id === podcastId);

	return (
		<div>
			<div>{podcastData?.title}</div>
			<div>{podcastData?.author}</div>
			<div>{podcastData?.description}</div>
			<hr />
			<div>{children}</div>
		</div>
	);
};
