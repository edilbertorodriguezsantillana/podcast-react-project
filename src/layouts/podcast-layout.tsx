import { PodcastCard, usePodcasts } from '@/features/podcasts';
import React, { type ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import './styles/podcast-layout.css';

type PodcastLayoutProps = {
	children: ReactNode;
};

export const PodcastLayout = ({ children }: PodcastLayoutProps) => {
	const { data: podcasts } = usePodcasts();
	const { podcastId } = useParams() as { podcastId: string };

	const podcastData = podcasts?.find(({ id }) => id === podcastId);

	if (!podcastData) return null;

	return (
		<div className='podcast-layout-container'>
			<section className='podcast-layout-container__card'>
				<PodcastCard
					id={podcastId}
					title={podcastData?.title}
					author={podcastData?.author}
					image={podcastData?.image}
					description={podcastData?.description}
				/>
			</section>
			<section className='podcast-layout-container__children'>
				{children}
			</section>
		</div>
	);
};
