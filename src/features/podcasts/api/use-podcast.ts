import { useQuery } from '@tanstack/react-query';

import { podcastsKeys, getPodcast } from './config';

type UsePodcastOptions = { podcastId: string };

export const usePodcast = ({ podcastId }: UsePodcastOptions) =>
	useQuery({
		queryKey: podcastsKeys.detail(podcastId),
		queryFn: getPodcast,
		staleTime: Infinity,
	});
